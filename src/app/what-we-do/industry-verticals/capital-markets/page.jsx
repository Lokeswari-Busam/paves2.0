"use client";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import FeatureSections from "./components/FeatureSections";

export default function CapitalMarketsPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <IntroSection />
      <FeatureSections />
    </main>
  );
}
