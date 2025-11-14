"use client";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";

export default function FraudAmlPage() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <IntroSection />
      <WhyChoose />
    </main>
  );
}
