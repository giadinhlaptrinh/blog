import fs, { lstatSync } from "fs";
import path from "path";

import { Course, CourseMetadata, CourseSection, LessonMetadata, SectionMetadata } from "@/types/course";
import getAllFilesRecursively from "./utils/files";
import matter from "gray-matter";
import { formatSlug } from "./mdx";
import { bundleMDX } from "mdx-bundler";
import remarkExtractFrontmatter from "./remark-extract-frontmatter";
import remarkTocHeadings from "./remark-toc-headings";
import remarkGfm from "remark-gfm";
import remarkCodeTitles from "./remark-code-title";
import remarkFootnotes from "remark-footnotes";
import remarkMath from "remark-math";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCitation from "rehype-citation";
import rehypeKatex from "rehype-katex";
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from "rehype-preset-minify";
import rehypeSlug from "rehype-slug";
import remarkImgToJsx from "./remark-img-to-jsx";
import readingTime from "reading-time";

const root = process.cwd();

export function getCourseMetadata(course: string): CourseMetadata {
  const coursesPath = path.join(root, 'data', "courses", course);
  const rowContent = fs.readFileSync(path.join(coursesPath, "meta.json"), 'utf8');

  const meta = JSON.parse(rowContent.toString());

  return meta;
}

export function getSectionMetadata(course: string, section: string): SectionMetadata {
  const coursesPath = path.join(root, 'data', "courses", course, section);
  const rowContent = fs.readFileSync(path.join(coursesPath, "meta.json"), 'utf8');

  const meta = JSON.parse(rowContent.toString());

  return meta;
}

export function getAllCourses(): Array<Course> {
  const coursesPath = path.join(root, 'data', "courses");
  const files = fs.readdirSync(coursesPath);

  return files
    .map((file) => {
      const meta = getCourseMetadata(file);

      return {
        slug: formatSlug(file),
        fullSlug: `/courses/${formatSlug(file)}`,
        path: ['courses', file],
        sections: [],
        ...meta,
      };
    })
    .filter(course => !course.draft);
}

export function getAllCourseSections(course: string): Array<CourseSection> {
  const coursesPath = path.join(root, 'data', "courses", course);
  const files = fs.readdirSync(coursesPath);

  return files
    .filter((file) => {
      const dirStats = lstatSync(path.join(coursesPath, file));
      return dirStats.isDirectory();
    })
    .map((file) => {
      const meta = getSectionMetadata(course, file);

      const slugParts = file.split("-");
      const order = parseInt(slugParts.shift() || '0') || 0;

      return {
        slug: slugParts.join('-'),
        fullSlug: `/courses/${course}/${slugParts.join('-')}`,
        path: ['courses', course, file],
        order,
        lessons: [],
        ...meta
      };
    })
    .sort((a: CourseSection, b: CourseSection) => {
      return a.order - b.order;
    });
}

export function getCourseDetail(course: string): Course {
  const courseMetadata = getCourseMetadata(course);
  const sections = getAllCourseSections(course);
  const slug = course;
  const fullSlug = `/courses/${course}`;

  sections.forEach((section) => {
    const prefixPaths = path.join(root, 'data', ...section.path);
    const files = getAllFilesRecursively(prefixPaths)

    files.forEach((file) => {
      // Replace is needed to work on Windows
      const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
      // // Remove Unexpected File
      if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
        return
      }

      const source = fs.readFileSync(file, 'utf8')
      const meta = matter(source).data as LessonMetadata;


      const slugParts = fileName.split("-");
      const order = slugParts.shift() || 'a';

      section.lessons.push({
        ...meta,
        order,
        path: [...section.path, fileName],
        slug: formatSlug(slugParts.join("-")),
        fullSlug: `${section.fullSlug}/${formatSlug(slugParts.join("-"))}`,
      })
    });
  });

  return {
    ...courseMetadata,
    path: ['courses', course],
    slug,
    fullSlug,
    sections
  };
}

export async function getLesson(courseSlug: string, sectionSlug: string, lessonSlug: string) {
  const course = getCourseDetail(courseSlug);
  const section = course.sections.find(s => s.slug === sectionSlug);
  const lesson = section?.lessons.find(s => s.slug === lessonSlug);

  if (!lesson) {
    return null
  }

  const mdxPath = path.join(root, 'data', ...lesson.path);

  const source = fs.readFileSync(mdxPath, 'utf8');

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  // TODO: remove any
  let toc: any = []

  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the src/components directory
    cwd: path.join(root, 'src/components'),
    mdxOptions: (options, frontmatter) => {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        remarkImgToJsx,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      };

      return options
    },
  });

  return {
    mdxSource: code,
    course,
    toc,
    ...frontmatter,
    frontMatter: {
      ...frontmatter
    }
  };

}