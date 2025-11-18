"use client";


import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import FutureSection from "./components/FutureSection";

export default function EmbeddedFinancePage() {
  return (
    <main className="w-full overflow-hidden">
   
      <IntroSection />
      <WhyChoose />
      <FutureSection />
    </main>
  );
}
