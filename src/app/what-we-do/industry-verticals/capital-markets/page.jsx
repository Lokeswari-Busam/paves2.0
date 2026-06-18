import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import FeatureSections from "./components/FeatureSections";

export const metadata = {
  title: "Capital Markets",
  description: "Modernizing trading, investment, and market data infrastructure for transparency and performance.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/capital-markets" },
};

export default function CapitalMarketsPage() {
  return (
    <main className="w-full overflow-hidden">
      <IntroSection />
      <FeatureSections />
    </main>
  );
}
