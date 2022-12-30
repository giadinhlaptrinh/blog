import { NextPage } from "next";
import Card from "@/components/Card";
import { PageSEO } from "@/components/SEO";
import { coursesData } from "@/constant/coursesData";
import siteMetadata from "@/constant/siteMetadata";
import { Course } from "@/types/course";
import { getAllCourses } from "@/lib/course";

export interface CoursesPageProps {
  courses: Array<Course>;
}

export async function getStaticProps() {
  const courses = await getAllCourses();

  return { props: { courses } };
}

const Courses: NextPage<CoursesPageProps> = ({ courses }) => {
  return (
    <>
      <PageSEO
        title={`Course - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Courses
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {courses.map((c) => (
              <Card
                key={c.title}
                title={c.title}
                description={c.description}
                imgSrc={c.image}
                href={c.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
