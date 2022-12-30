import { NextPage } from "next";
import { getFileBySlug } from "@/lib/mdx";
import siteMetadata from "@/constant/siteMetadata";
import { PageSEO } from "@/components/SEO";
import MDXRenderer from "@/components/MDXRenderer";

type AboutPageProps = {
  authorDetails: any;
};

const DEFAULT_LAYOUT = "AuthorLayout";

export async function getStaticProps() {
  const authorDetails = await getFileBySlug("authors", "default");
  return { props: { authorDetails } };
}

const About: NextPage<AboutPageProps> = ({ authorDetails }) => {
  console.log(authorDetails);
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <>
      <PageSEO
        title={`About - ${siteMetadata.siteName}`}
        description={siteMetadata.description}
      />

      <MDXRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  );
};

export default About;
