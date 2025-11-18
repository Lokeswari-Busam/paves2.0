"use client";

import SplitHero from "../components/SplitHero";
import WhyChoose from "./components/WhyChoose";
import EnterpriseStartup from "./components/EnterpriseStartup";
import FeatureGridWrapper from "./components/FeatureGridWrapper";

export default function PaymentsPage() {
  return (
    <main className="w-full overflow-hidden">
      
     {/* HERO SECTION */}
      <SplitHero
        title="Payments"
        description="Secure, scalable, and modern payment solutions empowering global financial innovation."
        breadcrumb="Paves Technologies › Industry Verticals › Payments"
        image="/assets/what_we_do_hero.jpeg"
      />

      {/* WHY CHOOSE */}
      <WhyChoose />

      {/* ENTERPRISE VS STARTUPS */}
      <EnterpriseStartup />

      {/* FEATURE GRID */}
      <FeatureGridWrapper />
      
    </main>
  );
}
