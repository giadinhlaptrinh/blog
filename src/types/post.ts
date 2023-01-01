import { Author } from "./author";

export type PostMetadata = {
  /**
   * Post title
   * example: title: 'Introducing Tailwind Nexjs Starter Blog'
   */
  title: string;

  /**
   * Post date
   * format: yyyy-mm-dd
   * example: date: '2021-01-12'
   */
  date: string

  /**
   * Last modified
   * format: yyyy-mm-dd
   * example: lastmod: '2021-01-18'
   */
  lastmod?: string;

  /**
   * tags
   * example: tags: ['next-js', 'tailwind', 'guide']
   */
  tags: Array<string>;

  /**
   * example: draft: true
   */
  draft?: boolean;

  /**
   * example: 
   * summary: 'Looking for a performant, out of the box template,
   * with all the best in web technology to support your blogging needs?
   * Checkout the Tailwind Nextjs Starter Blog template.'
   */
  summary?: string;

  /**
   * if none provided defaults to socialBanner in siteMetadata config
   * example: images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
   */
  images?: Array<string>;

  /**
   * List which should correspond to the file names in `data/authors`.
   * Uses`default` if none is specified
   * example: authors: ['default', 'sparrowhawk']
   */
  authors?: Array<string>;

  /**
   * example: layout: PostLayout
   */
  layout?: string;

  /**
   * example: canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
   */
  canonicalUrl?: string;

  slug: string;

  fileName: string;

  readingTime?: any;
}


export type MdxDataSource = {
  mdxSource: string;
  frontMatter: PostMetadata;
  toc: any;
}