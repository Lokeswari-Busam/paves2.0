import HeroSection from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import  IndustryVerticals from "./components/IndustryVerticals";
import PartnersEcosystem from "./components/PartnersEcosystem";
import JoinUs from "./components/JoinUs";
import WhyPaves from "./components/WhyPaves";



export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPaves/>
      <ServicesSection />
      <IndustryVerticals />
      <PartnersEcosystem />
      <JoinUs />
    
    </>
  );
}
