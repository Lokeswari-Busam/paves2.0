"use client";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhyFuture from "./components/WhyFuture";

export default function InsurancePage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <IntroSection />
      <WhyFuture />
    </main>
  );
}
