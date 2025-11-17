import HeroSection from "./components/HeroSection";
import { WhyPavesSection } from "./components/WhyPaves";
import { ServicesSection } from "./components/ServicesSection";
import  IndustryVerticals from "./components/IndustryVerticals";
import PartnersEcosystem from "./components/PartnersEcosystem";
import JoinUs from "./components/JoinUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPavesSection />
      <ServicesSection />
      <IndustryVerticals />
      <PartnersEcosystem />
      <JoinUs />
    
    </>
  );
}
