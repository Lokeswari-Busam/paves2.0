"use client";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import FutureSection from "./components/FutureSection";

export default function PaymentGateways() {
  return (
    <main className="w-full overflow-hidden">
      <HeroSection />
      <IntroSection />
      <WhyChoose />
      <FutureSection />
    </main>
  );
}
