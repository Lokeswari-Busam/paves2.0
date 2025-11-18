"use client";

import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import BankingGrid from "./components/BankingGrid";

export default function BankingPage() {
  return (
    <main className="w-full overflow-hidden">
      <SplitHero
        title="Banking"
        description="Transforming traditional banking into a secure, scalable, and digitally empowered ecosystem with cloud-native platforms, AI-driven insights, and intelligent automation."
        breadcrumb="Paves Technologies › Industry Verticals › Banking"
        image="/assets/what_we_do_hero.jpeg"
      />
      <IntroSection />
      <WhyChoose />
      <BankingGrid />
    </main>
  );
}
