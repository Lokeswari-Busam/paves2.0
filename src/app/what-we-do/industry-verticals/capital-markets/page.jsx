"use client";

import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import FeatureSections from "./components/FeatureSections";

export default function CapitalMarketsPage() {
  return (
    <main className="w-full overflow-hidden">
      <IntroSection />
      <FeatureSections />
    </main>
  );
}
