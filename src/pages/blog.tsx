import { NextPage } from "next";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import formatDate from "@/lib/utils/formatDate";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/constant/siteMetadata";
import Link from "@/components/Link";
import Tag from "@/components/Tag";
import Image from "@/components/Image";

export const POSTS_PER_PAGE = 5;

export interface BlogPageProps {
  posts: Array<any>;
  initialDisplayPosts: any;
  pagination: any;
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return { props: { initialDisplayPosts, posts, pagination } };
}

const Blog: NextPage<BlogPageProps> = ({
  posts,
  initialDisplayPosts,
  pagination,
}) => {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.siteName}`}
        description={siteMetadata.description}
      />

      <ul className="lg:grid lg:grid-cols-2 lg:gap-12">
        {posts.map((frontMatter) => {
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
                      src={"/static/images/canada/toronto.jpg"}
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
    </>
  );
};

export default Blog;
