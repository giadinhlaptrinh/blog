import MDXRenderer from "@/components/MDXRenderer";
import { getAllCourses, getCourseDetail, getLesson } from "@/lib/course";
import { CourseLesson } from "@/types/course";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const COURSE_LESSON_LAYOUT = "LessonLayout";
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

  return {
    props: {
      lesson,
    },
  };
};

const LessonPage: NextPage<LessonPageProps> = ({ lesson }) => {
  const { mdxSource, toc, frontMatter, course } = lesson as any;

  return (
    <>
      <MDXRenderer
        toc={toc}
        course={course}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        layout={COURSE_LESSON_LAYOUT}
      />
    </>
  );
};

export default LessonPage;
