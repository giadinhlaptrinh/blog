import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "./Image";
import Link from "./Link";
import TOCInline from "./TOCInline";
import Pre from "./Pre";
import { BlogNewsletterForm } from "./NewsletterForm";

import AuthorLayout from "@/layouts/AuthorLayout";
import LessonLayout from "@/layouts/LessonLayout";
import PostLayout from "@/layouts/PostLayout";
import PostSimple from "@/layouts/PostSimple";

type MDXRendererLayout =
  | "AuthorLayout"
  | "PostLayout"
  | "PostSimple"
  | "LessonLayout";

export interface MDXRendererProps {
  layout: MDXRendererLayout;

  // The string of code you got from bundleMDX
  mdxSource: string;
  frontMatter: any;
  [key: string]: any;
}

type MDXRendererWrapperProps = {
  layout: MDXRendererLayout;
};

const MDXRendererWrapper = ({ layout, ...rest }: any) => {
  switch (layout) {
    case "AuthorLayout":
      return <AuthorLayout {...rest} />;

    case "LessonLayout":
      return <LessonLayout {...rest} />;

    case "PostLayout":
      return <PostLayout {...rest} />;

    case "PostSimple":
      return <PostSimple {...rest} />;

    default:
      return <PostLayout {...rest} />;
  }
};

const mdxComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: MDXRendererWrapper,
  // TODO: Remove any
  // wrapper: ({ components, layout, ...rest }: any) => {
  //   switch (layout as MdxRenderLayout) {
  //     case "AuthorLayout":
  //       return <AuthorLayout {...rest} />;

  //     case "PostLayout":
  //       return <PostLayout {...rest} />;

  //     case "PostSimple":
  //       return <PostSimple {...rest} />;

  //     default:
  //       return <PostLayout {...rest} />;
  //   }
  // },
};

const MDXRenderer = ({ layout, mdxSource, ...rest }: MDXRendererProps) => {
  const MdxComponent = useMemo(() => {
    return getMDXComponent(mdxSource);
  }, [mdxSource]);

  return <MdxComponent layout={layout} components={mdxComponents} {...rest} />;
};

export default MDXRenderer;
