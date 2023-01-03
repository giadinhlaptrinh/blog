import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllCourses, getCourseDetail } from "@/lib/course";
import { Course } from "@/types/course";
import GdDisclosure from "@/components/disclosure";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Link from "@/components/Link";

export interface CoursePageProps {
  course: Course;
}
export interface CoursePageParams extends ParsedUrlQuery {
  course: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getAllCourses();
  const slugs = courses.map((c) => c.fullSlug);

  console.log("slugs ", slugs);

  return {
    paths: courses.map((c) => ({
      params: {
        course: c.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { course: courseSlug } = params as CoursePageParams;

  const course = getCourseDetail(courseSlug);

  return { props: { course } };
};

const Course: NextPage<CoursePageProps> = ({ course }) => {
  console.log("course chi tiet", course);

  return (
    <>
      <main>
        <section className="px-4 bg-[#ffd300]">
          <div className="max-w-5xl mx-auto py-16">
            <h1 className="text-4xl lg:text-5xl font-semibold mt-6 text-gray-900">
              {course.title}
            </h1>
            <p className="mt-6 text-lg w-full md:w-3/4">
              {course.shortDescription}
            </p>

            <div className="mt-10">
              {/* <GdButton>Bắt đầu ngay</GdButton> */}
            </div>
          </div>
        </section>

        <section className="px-4 mt-12">
          <div className="max-w-5xl flex flex-col lg:flex-row gap-10 mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-medium">Tổng quan khóa học</h2>

              <p className="mt-5">{course.description}</p>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-medium">Yêu cầu</h2>

              {/* <ul className="mt-5 flex flex-col gap-y-3">
                {course.requiredSkills.map((skill, index) => (
                  <li className="flex " key={index}>
                    <PlusIcon className="h-6 mr-3 flex-shrink-0" />
                    <div>{skill}</div>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </section>

        <section className="px-4 mt-12">
          <div className="max-w-5xl mx-auto lg:p-8 lg:border border-gray-500">
            <h2 className="text-2xl font-medium">
              Chúng ta sẽ đạt được những gì sau khóa học này
            </h2>

            <ul className="mt-5 grid gap-x-10 gap-y-3 grid-cols-1 lg:grid-cols-2">
              {/* {course.skills.map((skill, index) => (
                <li className="flex justify-start " key={index}>
                  <CheckIcon className="h-6 mr-3 flex-shrink-0" />
                  <div>{skill}</div>
                </li>
              ))} */}
            </ul>
          </div>
        </section>

        <section className="px-0 lg:px-4 mt-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-end">
              <div className="px-4 lg:px-0">
                <h2 className="text-2xl font-medium">
                  Nội dung chi tiết khóa học
                </h2>
              </div>
            </div>

            <div className="mt-4 divide-y divide-gray-500 border-t border-b lg:border border-gray-500">
              {course.sections.map((section) => (
                <GdDisclosure key={section.slug}>
                  <GdDisclosure.Header>
                    <h3 className="lg:text-xl font-medium lg:font-semibold">
                      {section.title}
                    </h3>
                    <p className="mt-2 font-light">{section.description}</p>
                  </GdDisclosure.Header>
                  <GdDisclosure.Content>
                    {section.lessons.map((lesson) => (
                      <div
                        key={lesson.fullSlug}
                        className="pl-2 lg:pl-5 pr-2 py-3"
                      >
                        <div className="flex gap-3">
                          <PlayCircleIcon className="h-6 flex-shrink-0" />
                          <span className="flex-grow hover:text-indigo-700">
                            <Link href={lesson.fullSlug}>
                              <h4>{lesson.title}</h4>
                            </Link>
                          </span>
                          <div className="flex-shrink-0">04:30</div>
                        </div>
                      </div>
                    ))}
                  </GdDisclosure.Content>
                </GdDisclosure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 mt-12 bg-[#10162f]">
          <div className="max-w-2xl mx-auto py-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold lg:leading-tight text-gray-100">
              Tất cả đều miễn phí
            </h2>
            <p className="mt-4 lg:text-xl font-medium lg:font-semibold lg:leading-tight text-gray-200">
              Khóa học hoàn toàn miễn phí dành cho tất cả mọi người, học mọi lúc
              mọi nơi trên Youtube.
            </p>

            {/* <a target="_blank" rel="noreferrer" href={course.social.playlist}>
              <GdButton variant="secondary" className="mt-10">
                Xem trên Youtube
              </GdButton>
            </a> */}

            <img
              className="w-4/5"
              src={`${process.env.BASE_URL}/images/girl-enjoying-reading.png`}
              alt="Picture of the author"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Course;
