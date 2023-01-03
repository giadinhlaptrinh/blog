import fs, { lstatSync } from "fs";
import path from "path";

import { Course, CourseMetadata, CourseSection, LessonMetadata, SectionMetadata } from "@/types/course";
import getAllFilesRecursively from "./utils/files";
import matter from "gray-matter";
import { formatSlug } from "./mdx";

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

  return files.map((file) => {
    const meta = getCourseMetadata(file);

    return {
      slug: formatSlug(file),
      fullSlug: `/courses/${formatSlug(file)}`,
      path: ['courses', file],
      sections: [],
      ...meta,
    };
  })
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

export function getLesson(course: string, section: string, slug: string) {
  return {}

}