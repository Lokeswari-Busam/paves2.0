"use client";

import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import BankingGrid from "./components/BankingGrid";

export default function BankingPage() {
  return (
    <main className="w-full overflow-hidden">
      
      <IntroSection />
      <WhyChoose />
      <BankingGrid />
    </main>
  );
}
