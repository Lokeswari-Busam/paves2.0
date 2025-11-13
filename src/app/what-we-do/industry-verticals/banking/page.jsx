"use client";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import BankingGrid from "./components/BankingGrid";

export default function BankingPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <IntroSection />
      <WhyChoose />
      <BankingGrid />
    </main>
  );
}
