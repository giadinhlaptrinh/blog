import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllCourses, getCourseDetail } from "@/lib/course";
import { Course } from "@/types/course";
import GdDisclosure from "@/components/disclosure";
import {
  CheckIcon,
  PlayCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Link from "@/components/Link";
import Image from "@/components/Image";

export interface CoursePageProps {
  course: Course;
}
export interface CoursePageParams extends ParsedUrlQuery {
  course: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const courses = await getAllCourses();
  const slugs = courses.map((c) => c.fullSlug);

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
  return (
    <>
      <main>
        <section className="px-4 ">
          <div className="max-w-5xl mx-auto py-16">
            <h1 className="text-4xl lg:text-5xl font-semibold mt-6">
              {course.title}
            </h1>
            <p className="mt-6 text-lg w-full md:w-3/4">
              {course.shortDescription}
            </p>

            <div className="mt-10">
              <Link href={course.sections[0].lessons[0].fullSlug} type="button">
                <button
                  type="button"
                  className="rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Bắt đầu ngay
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 mt-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-medium">Tổng quan khóa học</h2>

            <p className="mt-5">{course.description}</p>
          </div>
        </section>

        <section className="px-4 mt-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-medium">Yêu cầu</h2>

            <ul className="mt-5 flex flex-col gap-y-3">
              {course.requiredSkills.map((skill, index) => (
                <li className="flex " key={index}>
                  <PlusIcon className="h-6 mr-3 flex-shrink-0" />
                  <div>{skill}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 mt-12">
          <div className="max-w-5xl mx-auto lg:p-8 lg:border border-gray-500">
            <h2 className="text-2xl font-medium">
              Chúng ta sẽ đạt được những gì sau khóa học này
            </h2>

            <ul className="mt-5 grid gap-x-10 gap-y-3 grid-cols-1 lg:grid-cols-2">
              {course.skills.map((skill, index) => (
                <li className="flex justify-start " key={index}>
                  <CheckIcon className="h-6 mr-3 flex-shrink-0" />
                  <div>{skill}</div>
                </li>
              ))}
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

        <section className="px-4 mt-12 bg-[#ffd300]">
          <div className="max-w-6xl mx-auto py-16">
            <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
              <div className="w-full lg:w-6/12 flex-shrink-0">
                <h2 className="mb-6 text-3xl lg:text-4xl font-semibold lg:leading-tight text-gray-900">
                  Khóa học hoàn toàn miễn phí dành cho tất cả mọi người, học mọi
                  lúc mọi nơi.
                </h2>

                <Link
                  href={course.sections[0].lessons[0].fullSlug}
                  type="button"
                >
                  <button
                    type="button"
                    className="rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Học ngay
                  </button>
                </Link>
              </div>

              <div className="w-full lg:w-5/12 mb-8 lg:mb-0 flex justify-center lg:justify-end items-center">
                <Image
                  className="w-4/5"
                  height={300}
                  width={400}
                  src={`/static/images/girl-enjoying-reading.png`}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Course;
