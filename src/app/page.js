import HeroSection from "./components/HeroSection";
import  IndustryVerticals from "./components/IndustryVerticals";
import PartnersEcosystem from "./components/PartnersEcosystem";
import JoinUs from "./components/JoinUs";
import WhyPaves from "./components/WhyPaves";
import ServicesSection from "./components/ServicesSection";



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
