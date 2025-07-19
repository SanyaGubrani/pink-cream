import { StaticImageData } from "next/image";


export type BlogPost = {
  image: string | StaticImageData;
  date: string;
  title: string;
  summary: string;
  slug: string;
  author: string;
};

export type Blogs = {
  title: string;
  posts: BlogPost[];
  seeMoreUrl?: string;
};

export type BlogSectionData = {
  title: string;
  seeMoreUrl?: string;
};