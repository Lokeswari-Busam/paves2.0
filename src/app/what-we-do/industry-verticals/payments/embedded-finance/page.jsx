import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import FutureSection from "./components/FutureSection";

export const metadata = {
  title: "Embedded Finance",
  description: "Integrating financial services into digital ecosystems with modern APIs and platforms.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments/embedded-finance" },
};

export default function EmbeddedFinancePage() {
  return (
    <main className="w-full overflow-hidden">
   
      <IntroSection />
      <WhyChoose />
      <FutureSection />
    </main>
  );
}
