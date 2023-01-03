import MDXRenderer from "@/components/MDXRenderer";
import { getAllCourses, getCourseDetail, getLesson } from "@/lib/course";
import { formatSlug, getFileBySlug, getFiles } from "@/lib/mdx";
import { CourseLesson } from "@/types/course";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const DEFAULT_LAYOUT = "PostLayout";
export interface LessonPageProps {
  lesson: CourseLesson;
}

export interface LessonPageParams extends ParsedUrlQuery {
  course: string;
  section: string;
  slug: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  const courses = getAllCourses();
  const lessons: any = [];

  courses.forEach((course) => {
    const courseFolderName = course.path[course.path.length - 1];
    const courseDetail = getCourseDetail(courseFolderName);
    courseDetail.sections.forEach((section) => {
      section.lessons.forEach((lesson) => {
        lessons.push({
          slug: lesson.slug,
          section: section.slug,
          course: course.slug,
        });
      });
    });
  });

  return {
    paths: lessons.map((p: any) => ({
      params: p,
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { course, section, slug } = params as LessonPageParams;
  const lesson = await getLesson(course, section, slug);

  console.log("params", course, section, slug);

  return {
    props: {
      lesson,
    },
  };
};

const LessonPage: NextPage<LessonPageProps> = ({ lesson }) => {
  const { mdxSource, toc, frontMatter } = lesson as any;
  return (
    <>
      <>
        <MDXRenderer
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          layout={frontMatter.layout || DEFAULT_LAYOUT}
        />
      </>
    </>
  );
};

export default LessonPage;
