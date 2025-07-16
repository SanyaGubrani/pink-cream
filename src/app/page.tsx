import HeroSection from "@/components/sections/Hero";
import { homeConfig } from "@/config/pages/home";
import OverviewSection from "@/components/sections/Overview";
import FeatureSection from "@/components/sections/Features";
import ExpertiseSection from "@/components/sections/Expertise";
import PricingSection from "@/components/sections/Pricing";
import TestimonialsSection from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection data={homeConfig.hero} />
      <OverviewSection data={homeConfig.overview} />
      <FeatureSection data={homeConfig.features}/>
      <ExpertiseSection data={homeConfig.expertise}/>
      <PricingSection data={homeConfig.pricing}/>
      <TestimonialsSection />
    </>
  );
}
