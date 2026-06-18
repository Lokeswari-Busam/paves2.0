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

import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import StatsRow from "./components/StatsRow";

// Below-fold components — deferred until after hero renders
const WhyPaves = dynamic(() => import("./components/WhyPaves"));
const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const IndustryVerticals = dynamic(() => import("./components/IndustryVerticals"));
const PartnersEcosystem = dynamic(() => import("./components/PartnersEcosystem"));
const JoinUs = dynamic(() => import("./components/JoinUs"));

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
