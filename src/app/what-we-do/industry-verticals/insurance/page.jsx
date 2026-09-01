import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyFuture from "./components/WhyFuture";

export const metadata = {
  title: "Insurance",
  description: "Transforming underwriting, claims, and policy management with automation and intelligence.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/insurance" },
};

export default function InsurancePage() {
  return (
    <main className="w-full overflow-hidden">
      <IntroSection />
      <WhyFuture />
    </main>
  );
}
