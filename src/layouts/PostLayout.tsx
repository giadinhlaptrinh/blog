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
import { PostFrontmatter } from "@/types/post";

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
  frontMatter: PostFrontmatter;
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
  const { slug, fileName, date, title, images, tags } = frontMatter;

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1">
            <PageTitle>{title}</PageTitle>
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
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
        </header>

        {/* <div
          className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
          style={{ gridTemplateRows: "1fr auto" }}
        > */}
        <div className="pb-8 xl:flex xl:gap-x-6">
          <section className="xl:w-3/4 divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
              {children}
            </div>

            <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              <Link href={discussUrl(slug)} rel="nofollow">
                {"Discuss on Twitter"}
              </Link>
              {` • `}
              <Link href={editUrl(fileName)}>{"View on GitHub"}</Link>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
          </section>

          <aside className="xl:w-1/4 xl:flex-shrink-0 xl:sticky xl:top-0 xl:self-start">
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
          </aside>
        </div>
      </article>
    </SectionContainer>
  );
}
