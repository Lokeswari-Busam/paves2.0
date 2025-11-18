"use client";

import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyFuture from "./components/WhyFuture";

export default function InsurancePage() {
  return (
    <main className="w-full overflow-hidden">
      <IntroSection />
      <WhyFuture />
    </main>
  );
}
