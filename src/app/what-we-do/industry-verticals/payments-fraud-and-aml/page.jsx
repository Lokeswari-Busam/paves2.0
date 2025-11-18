"use client";

import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";

export default function FraudAmlPage() {
  return (
    <main className="w-full overflow-hidden">
      <SplitHero
        title="Payments Fraud & AML"
        description="Detect, prevent, and mitigate financial crimes using AI-powered monitoring, real-time risk scoring, and regulatory-compliant AML frameworks."
        breadcrumb="Paves Technologies › Industry Verticals › Payments Fraud & AML"
        image="/assets/what_we_do_hero.jpeg"
      />
      <IntroSection />
      <WhyChoose />
    </main>
  );
}
