import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import FutureSection from "./components/FutureSection";

export const metadata = {
  title: "Merchant Acquirers",
  description: "Supporting merchants with intelligent acquiring solutions that improve payment efficiency.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments/merchant-acquirers" },
};

export default function MerchantAcquirersPage() {
  return (
    <main className="w-full overflow-hidden">
     
      <IntroSection />
      <WhyChoose />
      <FutureSection />
    </main>
  );
}
