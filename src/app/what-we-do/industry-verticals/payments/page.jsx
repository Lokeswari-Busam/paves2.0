import SplitHero from "../components/SplitHero";
import WhyChoose from "./components/WhyChoose";
import EnterpriseStartup from "./components/EnterpriseStartup";
import FeatureGridWrapper from "./components/FeatureGridWrapper";

export const metadata = {
  title: "Payments",
  description: "Empowering global money movement with secure, fast, and scalable payment solutions for modern businesses.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments" },
};

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
