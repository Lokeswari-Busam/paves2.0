"use client";

import SplitHero from "../components/SplitHero";
import WhyChoose from "./components/WhyChoose";
import EnterpriseStartup from "./components/EnterpriseStartup";
import FeatureGridWrapper from "./components/FeatureGridWrapper";

export default function PaymentsPage() {
  return (
    <main className="w-full overflow-hidden">
      
   

      {/* WHY CHOOSE */}
      <WhyChoose />

      {/* ENTERPRISE VS STARTUPS */}
      <EnterpriseStartup />

      {/* FEATURE GRID */}
      <FeatureGridWrapper />
      
    </main>
  );
}
