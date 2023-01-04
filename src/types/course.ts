export type LessonMetadata = {
  title: string;
  description?: string;
  image?: string;
};

export type CourseLesson = {
  slug: string;
  fullSlug: string;
  order: string;
  path: Array<string>;
  mdxSource?: string;
} & LessonMetadata;

export type SectionMetadata = {
  title: string;
  description?: string;
}

export type CourseSection = {
  /**
   * example: 'learn-git'
   */
  slug: string;

  /**
   * example: 'courses/learn-git'
   */
  fullSlug: string;
  order: number;
  path: Array<string>;
  lessons: Array<CourseLesson>;
} & SectionMetadata;

export type CourseMetadata = {
  title: string;
  subTitle: string;
  description: string;
  shortDescription: string;
  image: string;
  draft: boolean;
  skills: Array<string>;
  requiredSkills: Array<string>;
  languages?: Array<string>;
};

export type Course = {
  /**
   * example: 'learn-git'
   */
  slug: string;

  /**
   * example: 'courses/learn-git'
   */
  fullSlug: string;
  path: Array<string>;
  sections: Array<CourseSection>;
} & CourseMetadata;