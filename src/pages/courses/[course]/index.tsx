import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllCourses, getCourseFrontMatter } from "@/lib/course";
import { Course } from "@/types/course";

export interface CoursePageProps {
  course: Course;
}
export interface CoursePageParams extends ParsedUrlQuery {
  course: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getAllCourses();
  const slugs = courses.map((c) => c.slug);

  return { paths: slugs, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { course: courseSlug } = params as CoursePageParams;

  const course = await getCourseFrontMatter(courseSlug);

  return { props: { course } };
};

const Course: NextPage<CoursePageProps> = ({ course }) => {
  console.log("course ", course);
  return (
    <>
      <h1>Course detail</h1>
    </>
  );
};

export default Course;
