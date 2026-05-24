export const metadata = {
  title: "AI-Driven Financial Technology Solutions",
  description:
    "Paves Technologies bridges technology and trust — delivering AI, cloud, and data solutions for financial services, payments, banking, and enterprise transformation.",
  openGraph: {
    title: "Paves Technologies | Paving the Bridge Between Tech & Trust",
    description:
      "AI-driven solutions for financial services, payments, banking, and enterprise digital transformation.",
    url: "https://www.pavestechnologies.com",
  },
  alternates: {
    canonical: "https://www.pavestechnologies.com",
  },
};

import HeroSection from "./components/HeroSection";
import StatsRow from "./components/StatsRow";
import WhyPaves from "./components/WhyPaves";
import ServicesSection from "./components/ServicesSection";
import IndustryVerticals from "./components/IndustryVerticals";
import PartnersEcosystem from "./components/PartnersEcosystem";
import JoinUs from "./components/JoinUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsRow />
      <WhyPaves />
      <ServicesSection />
      <IndustryVerticals />
      <PartnersEcosystem />
      <JoinUs />
    </>
  );
}
