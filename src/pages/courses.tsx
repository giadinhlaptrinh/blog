import { NextPage } from "next";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/constant/siteMetadata";
import { Course } from "@/types/course";
import { getAllCourses } from "@/lib/course";
import Link from "@/components/Link";
import Image from "@/components/Image";

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

      <div className="container">
        <div className="px-4 py-10">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Khóa học
            </h1>
            <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
              Các khóa học được thiết kế phù hợp cho cả người mới, tất cả đều
              <strong> miễn phí</strong>, chất lượng, nội dung dễ hiểu.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-10">
            {courses.map((c) => (
              <div
                key={c.title}
                className={`${
                  c.image && "h-full"
                } flex flex-col shadow overflow-hidden rounded-md border border-gray-200 dark:border-gray-700`}
              >
                <Link href={c.fullSlug} aria-label={`Link to ${c.title}`}>
                  <Image
                    alt={c.title}
                    src={c.image}
                    className="object-cover object-center w-full h-60 sm:h-72 md:h-72 lg:h-80"
                    width={644}
                    height={400}
                  />
                </Link>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                      <Link href={c.fullSlug} aria-label={`Link to ${c.title}`}>
                        {c.title}
                      </Link>
                    </h2>
                    <p className="prose mb-3 max-w-none text-gray-600 dark:text-gray-300">
                      {c.shortDescription}
                    </p>
                  </div>
                  <Link
                    href={c.fullSlug}
                    type="button"
                    aria-label={`Link to ${c.title}`}
                  >
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Xem khóa học
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
