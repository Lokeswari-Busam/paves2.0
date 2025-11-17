"use client";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import FutureSection from "./components/FutureSection";

export default function CardIssuersPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <IntroSection />
      <FutureSection />
    </main>
  );
}
