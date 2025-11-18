"use client";

import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyFuture from "./components/WhyFuture";

export default function InsurancePage() {
  return (
    <main className="w-full overflow-hidden">
     <SplitHero
        title="Insurance"
        description="Enhancing underwriting, claims processing, and policy management through intelligent automation, advanced analytics, and modern digital platforms."
        breadcrumb="Paves Technologies › Industry Verticals › Insurance"
        image="/assets/what_we_do_hero.jpeg"
      />
      <IntroSection />
      <WhyFuture />
    </main>
  );
}
