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

const editUrl = (fileName: string) => {
  return `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
};

const discussUrl = (slug: string) => {
  return `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`;
};

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export type PostLayoutProps = {
  frontMatter: PostMetadata;
  authorDetails: Array<Author>;
  next: any;
  prev: any;
  children: ReactNode;
};

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}: PostLayoutProps) {
  const { slug, fileName, date, title, images, tags, readingTime } =
    frontMatter;

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />

      <div className="container pt-1 pb-16">
        <article>
          <header className="grid grid-cols-12">
            <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-10">
              <div className="border border-gray-200 overflow-hidden">
                <Image
                  alt=""
                  src={"/static/images/canada/jU_IIoA2k.jpg"}
                  className="object-cover object-center w-full"
                  width={1000}
                  height={800}
                />
              </div>

              <div className="lg:px-20 mt-10 text-center">
                <h1 className="leading-tight font-bold text-gray-900 dark:text-gray-100 text-4xl md:text-5xl 2xl:text-6xl">
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

          {/* <div
          className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
          style={{ gridTemplateRows: "1fr auto" }}
        > */}
          <div className="grid grid-cols-12 lg:grid-cols-8 xl:grid-cols-10">
            <section className="px-4 col-start-1 col-span-12 md:col-start-2 md:col-span-10 lg:col-start-2 lg:col-span-6 xl:col-start-3 xl:col-span-6">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                {children}
              </div>

              {/* <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(slug)} rel="nofollow">
                  {"Discuss on Twitter"}
                </Link>
                {` • `}
                <Link href={editUrl(fileName)}>{"View on GitHub"}</Link>
              </div> */}
              {/* <Comments frontMatter={frontMatter} /> */}
            </section>

            {/* <aside className="col-auto ml-10 w-40 h-full xl:sticky xl:top-0 xl:self-start">
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag: string) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </aside> */}
          </div>
        </article>
      </div>
    </>
  );
}
