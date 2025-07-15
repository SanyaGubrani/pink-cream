export type HomeHero = {
  image: string;
  heading: string;
  subheading: string;
  actions: { text?: string; url: string }[];
};

export type HomeWelcome = {
  image: string;
  title: string;
  subtitle: string;
  stats: { number: string; text: string }[];
};

export type HomeFeatureItem = {
  icon: string;
  title: string;
  content: string;
  learnMoreLink: string;
};

export type HomeFeatures = {
  title: string;
  items: HomeFeatureItem[];
};

export type HomeExpertiseLoader = {
  label: string;
  percentage: number;
};

export type HomeExpertise = {
  image: string;
  title: string;
  content: string;
  loaders: HomeExpertiseLoader[];
  button: { text: string; url: string };
};

export type HomePricingPlan = {
  name: string;
  price: string;
  features: string[];
  button: { text: string; url: string };
};

export type HomePricing = {
  title: string;
  plans: HomePricingPlan[];
};

export type HomeTestimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type HomeTestimonials = {
  title: string;
  items: HomeTestimonial[];
};

export type HomeGalleryImage = {
  src: string;
  alt: string;
};

export type HomeGallery = {
  title: string;
  images: HomeGalleryImage[];
};

export type HomeBlogPost = {
  image: string;
  date: string;
  title: string;
  shortContent: string;
  button: { text: string; url: string };
};

export type HomeBlogs = {
  title: string;
  posts: HomeBlogPost[];
};

export type HomeCTA = {
  title: string;
  subtitle: string;
  button: { text: string; url: string };
};

export type HomeConfig = {
  hero: HomeHero;
  welcome: HomeWelcome;
  features: HomeFeatures;
  expertise: HomeExpertise;
  pricing: HomePricing;
  testimonials: HomeTestimonials;
  gallery: HomeGallery;
  blogs: HomeBlogs;
  cta: HomeCTA;
};
