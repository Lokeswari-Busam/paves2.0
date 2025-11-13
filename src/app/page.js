import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { WhyPavesSection } from "./components/WhyPaves";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPavesSection />
      <ServicesSection />
    </>
  );
}
