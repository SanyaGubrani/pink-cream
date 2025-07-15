import HeroSection from "@/components/sections/Hero";
import { homeConfig } from "@/config/pages/home";
import OverviewSection from "@/components/sections/Overview";

export default function Home() {
  return (
    <>
      <HeroSection data={homeConfig.hero} />
      <OverviewSection data={homeConfig.overview} />
    </>
  );
}
