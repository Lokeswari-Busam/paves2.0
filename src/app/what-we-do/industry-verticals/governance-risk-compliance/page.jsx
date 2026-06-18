import SplitHero from "../components/SplitHero";

import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";

export const metadata = {
  title: "Governance, Risk & Compliance",
  description: "Ensuring trust, security, and regulatory adherence through robust governance and risk frameworks.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/governance-risk-compliance" },
};

export default function GRCPage() {
  return (
    <main className="w-full overflow-hidden">
      <IntroSection />
      <WhyChoose />
    </main>
  );
}
