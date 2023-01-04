import Link from "@/components/Link";
import { BlogSEO } from "@/components/SEO";
import siteMetadata from "@/constant/siteMetadata";
import { ReactNode, useState } from "react";
import { Author } from "@/types/author";
import { PostMetadata } from "@/types/post";
import Logo from "@/data/logo.svg";
import {
  BookOpenIcon,
  ChevronRightIcon,
  PlayCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Course } from "@/types/course";
import GdDisclosure from "@/components/disclosure";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export type LessonLayoutProps = {
  course: Course;
  frontMatter: PostMetadata;
  authorDetails: Array<Author>;
  next: any;
  prev: any;
  children: ReactNode;
};

export default function LessonLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
  course,
}: LessonLayoutProps) {
  const { slug, date, title } = frontMatter;
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      return !status;
    });
  };

  return (
    <>
      {/* <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      /> */}

      <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-white">
        <div className="h-full flex flex-col">
          <div className="h-14 flex-grow-0 flex-shrink-0 bg-slate-800 ">
            <div className="px-4 h-full flex justify-between">
              <div className="flex h-full items-center gap-3 text-sm text-gray-300 font-normal">
                <Link href="/" className="flex items-center">
                  <Logo />
                </Link>
                <ChevronRightIcon className="hidden lg:block h-5" />
                <Link
                  className="hidden lg:block  text-gray-300 hover:text-gray-200"
                  href="/courses"
                >
                  Khóa học
                </Link>
                <ChevronRightIcon className="hidden lg:block h-5" />
                <Link
                  className="text-gray-300 hover:text-gray-200 overflow-ellipsis"
                  href="/courses/learn-git"
                >
                  {course.title}
                </Link>
                <ChevronRightIcon className="hidden lg:block h-5" />
                <Link className="hidden lg:block">{title}</Link>
              </div>
              <div className="flex h-full items-center gap-3">
                {/* <div className="text-gray-300 hover:text-gray-200">Chia sẻ</div> */}
              </div>
            </div>
          </div>
          <div className="relative flex-grow flex flex-row overflow-hidden">
            <div
              className={`absolute top-0 left-0 z-10 w-full xl:relative xl:w-96 xl:translate-x-0 flex-shrink-0 bg-slate-100 transform duration-300 ease-in-out ${
                navShow ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="relative px-3 py-4 h-full overflow-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium lg:font-semibold">
                    Nội dung
                  </h2>
                  <XMarkIcon
                    className="block xl:hidden h-7 w-7 absolute top-4 right-4 cursor-pointer"
                    onClick={onToggleNav}
                  />
                </div>

                {course.sections.map((section) => (
                  <div key={section.fullSlug}>
                    <div>
                      <h3 className="text-base font-medium text-gray-700">
                        {section.title}
                      </h3>
                    </div>

                    <div className="pl-2 pr-2 py-3 flex flex-col gap-3">
                      {section.lessons.map((lesson) => (
                        <div key={lesson.fullSlug}>
                          <Link
                            href={lesson.fullSlug}
                            className="text-gray-500 hover:text-gray-800 hover:underline"
                          >
                            <h4>{lesson.title}</h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col flex-grow h-full ">
              <div className="flex-grow overflow-auto">
                <article>
                  <header className="grid grid-cols-12">
                    <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10">
                      <div className="lg:px-20 mt-10 text-center">
                        <h1 className="leading-tight font-bold text-gray-900 dark:text-gray-100 text-3xl md:text-4xl 2xl:text-5xl">
                          {title}
                        </h1>
                      </div>

                      {/* <div className="space-y-1 mt-5 text-center">
                        <dl className="space-y-10">
                          <div>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-lg leading-6 text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>
                                {new Date(date).toLocaleDateString(
                                  siteMetadata.locale,
                                  postDateTemplate
                                )}
                              </time>
                            </dd>
                          </div>
                        </dl>
                      </div> */}
                    </div>
                  </header>

                  <div className="grid grid-cols-12 lg:grid-cols-8 xl:grid-cols-10">
                    <section className="px-4 pb-8 col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-6 xl:col-start-3 xl:col-span-6">
                      <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                        {children}
                      </div>
                    </section>
                  </div>
                </article>
              </div>

              <div className="block xl:hidden h-12 flex-grow-0 flex-shrink-0 bg-slate-300">
                <div className="h-full flex items-center px-4">
                  <div
                    onClick={onToggleNav}
                    className="flex items-center cursor-pointer"
                  >
                    <BookOpenIcon className="h-5 w-5 mr-2" />
                    <span>Nội dung khóa học</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
