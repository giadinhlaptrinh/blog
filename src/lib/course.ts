import fs from "fs";
import path from "path";

import { Course } from "@/types/course";
import getAllFilesRecursively from "./utils/files";
import matter from "gray-matter";
import { formatSlug } from "./mdx";

const root = process.cwd();

export async function getAllCourses(): Promise<Array<Course>> {
  const coursesPath = path.join(root, 'data', "courses");
  const files = fs.readdirSync(coursesPath);

  return files.map((file) => {
    const rowContent = fs.readFileSync(path.join(coursesPath, file, "meta.json"), 'utf8');

    const meta = JSON.parse(rowContent.toString());
    return {
      slug: `/courses/${file}`,
      ...meta
    };
  })
}

export async function getCourseFrontMatter(course: string) {
  const prefixPaths = path.join(root, 'data', 'courses', course)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontMatter: Array<any> = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter;
}
