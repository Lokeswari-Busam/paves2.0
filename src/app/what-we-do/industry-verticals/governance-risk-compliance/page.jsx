"use client";

import SplitHero from "../components/SplitHero";

import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";

export default function GRCPage() {
  return (
    <main className="w-full overflow-hidden">
    <SplitHero
        title="Governance, Risk & Compliance"
        description="Strengthening organizational resilience with robust governance frameworks, automated risk intelligence, and end-to-end regulatory compliance solutions."
        breadcrumb="Paves Technologies › Industry Verticals › Governance, Risk & Compliance"
        image="/assets/what_we_do_hero.jpeg"
      />
      <IntroSection />
      <WhyChoose />
    </main>
  );
}
