export type Section = {

}

export type Course = {
  title: string;
  description: string;
  slug: string;
  image: string;
  languages?: Array<string>;
  sections: Array<Section>;
}