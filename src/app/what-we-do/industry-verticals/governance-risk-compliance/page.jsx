"use client";

import SplitHero from "../components/SplitHero";

import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";

export default function GRCPage() {
  return (
    <main className="w-full overflow-hidden">
      <IntroSection />
      <WhyChoose />
    </main>
  );
}
