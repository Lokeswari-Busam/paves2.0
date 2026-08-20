import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";

export const metadata = {
  title: "Payments Fraud & AML",
  description: "AI-driven fraud detection and AML frameworks that safeguard financial institutions in real time.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments-fraud-and-aml" },
};

export default function FraudAmlPage() {
  return (
    <main className="w-full overflow-hidden">
     
      <IntroSection />
      <WhyChoose />
    </main>
  );
}
