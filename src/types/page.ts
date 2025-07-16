export type Hero = {
  image: string;
  heading: string;
  subheading: string;
  actions: { text?: string; url: string }[];
};

export type Overview = {
  image: string;
  title: string;
  subtitle: string;
  stats: { number: string; text: string }[];
};

export type FeatureItem = {
  icon: string;
  iconDark?: string;
  title: string;
  content: string;
  learnMoreLink: string;
  isHighlighted?: boolean;
};

export type Features = {
  title: string;
  items: FeatureItem[];
};

export type ExpertiseLoader = {
  label: string;
  percentage: number;
};

export type Expertise = {
  image: string;
  title: string;
  content: string;
  loaders: ExpertiseLoader[];
  button: { text: string; url: string };
};

export type PricingPlan = {
  name: string;
  content: string;
  price: string;
  period: string;
  features: string[];
  button: { text: string; url: string };
  isHighlighted?: boolean;
};

export type Pricing = {
  title: string;
  plans: PricingPlan[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type Testimonials = {
  title: string;
  items: Testimonial[];
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Gallery = {
  title: string;
  images: GalleryImage[];
};

export type BlogPost = {
  image: string;
  date: string;
  title: string;
  shortContent: string;
  button: { text: string; url: string };
};

export type Blogs = {
  title: string;
  posts: BlogPost[];
};

export type CTA = {
  title: string;
  subtitle: string;
  button: { text: string; url: string };
};

export type Config = {
  hero: Hero;
  welcome: Overview;
  features: Features;
  expertise: Expertise;
  pricing: Pricing;
  testimonials: Testimonials;
  gallery: Gallery;
  blogs: Blogs;
  cta: CTA;
};
