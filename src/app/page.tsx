import HeroSection from "@/components/sections/Hero";
import { homeConfig } from "@/config/pages/home";
import OverviewSection from "@/components/sections/Overview";
import FeatureSection from "@/components/sections/Features";
import ExpertiseSection from "@/components/sections/Expertise";
import PricingSection from "@/components/sections/Pricing";
import TestimonialsSection from "@/components/sections/Testimonials";
import GallerySection from "@/components/sections/Gallery";
import BlogsSection from "@/components/sections/Blogs";
import CTASection from "@/components/sections/CTA";
import { getBlogPosts } from "@/lib/blog";

export default async function Home() {
  const allPosts = await getBlogPosts();
  const recentPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <>
      <HeroSection data={homeConfig.hero} />
      <OverviewSection data={homeConfig.overview} />
      <FeatureSection data={homeConfig.features} />
      <ExpertiseSection data={homeConfig.expertise} />
      <PricingSection data={homeConfig.pricing} />
      <TestimonialsSection data={homeConfig.testimonials} />
      <GallerySection data={homeConfig.gallery} />
      <BlogsSection posts={recentPosts} data={homeConfig.blogs} />
      <CTASection />
    </>
  );
}
