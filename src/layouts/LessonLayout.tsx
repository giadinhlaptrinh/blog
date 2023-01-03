import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import { BlogSEO } from "@/components/SEO";
import Image from "@/components/Image";
import Tag from "@/components/Tag";
// import Comments from "@/components/comments";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import siteMetadata from "@/constant/siteMetadata";
import { ReactNode } from "react";
import { Author } from "@/types/author";
import { PostMetadata } from "@/types/post";

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export type LessonLayoutProps = {
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
}: LessonLayoutProps) {
  const { slug, fileName, date, title, images, tags, readingTime } =
    frontMatter;

  return (
    <>
      {/* <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      /> */}
      <ScrollTopAndComment />

      <div className="container pt-1 pb-16">
        <article>
          <header className="grid grid-cols-12">
            <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10">
              <div className="lg:px-20 mt-10 text-center">
                <h1 className="leading-tight font-bold text-gray-900 dark:text-gray-100 text-3xl md:text-4xl 2xl:text-5xl">
                  {title}
                </h1>
              </div>

              <div className="space-y-1 mt-5 text-center">
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
              </div>
            </div>
          </header>

          <div className="grid grid-cols-12 lg:grid-cols-8 xl:grid-cols-10">
            <section className="px-4 col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-6 xl:col-start-3 xl:col-span-6">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                {children}
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}
