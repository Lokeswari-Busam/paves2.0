"use client";

import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import FeatureSections from "./components/FeatureSections";

export default function CapitalMarketsPage() {
  return (
    <main className="w-full overflow-hidden">
     <SplitHero
        title="Capital Markets"
        description="Accelerating digital transformation across trading, investment, and regulatory ecosystems with secure, data-driven, and scalable technology solutions."
        breadcrumb="Paves Technologies › Industry Verticals › Capital Markets"
        image="/assets/what_we_do_hero.jpeg"
      />
      <IntroSection />
      <FeatureSections />
    </main>
  );
}
