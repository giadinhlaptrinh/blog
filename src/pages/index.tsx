import { NextPage } from "next";
import Image from "next/image";

import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/constant/siteMetadata";

import NewsletterForm from "@/components/NewsletterForm";
// import Image from "@/components/Image";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import formatDate from "@/lib/utils/formatDate";
import Link from "@/components/Link";
import Tag from "@/components/Tag";

const MAX_DISPLAY = 8;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

interface HomePageProps {
  posts: Array<any>;
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <>
      <PageSEO
        title={siteMetadata.siteName}
        description={siteMetadata.description}
      />

      <div>
        <ul className="lg:grid lg:grid-cols-2 lg:gap-12">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;

            return (
              <li key={slug} className="">
                <article>
                  <div>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      <Image
                        alt=""
                        src={"/static/images/canada/maple.jpg"}
                        className="object-cover rounded-md object-center h-52 md:h-72 lg:h-56 xl:h-64"
                        width={700}
                        height={800}
                      />

                      <h2 className="text-2xl font-bold leading-8 tracking-tight mt-4 text-gray-800 hover:text-gray-600 dark:text-gray-100">
                        {title}
                      </h2>
                    </Link>
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="mt-10 flex justify-center text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== "" && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  );
};

export default HomePage;
