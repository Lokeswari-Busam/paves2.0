import IntroSection from "./components/IntroSection";
import FutureSection from "./components/FutureSection";

export const metadata = {
  title: "Card Issuers",
  description: "Enabling seamless card lifecycle management with secure and modern issuing platforms.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments/card-issuers" },
};

export default function CardIssuersPage() {
  return (
    <main className="w-full overflow-hidden">
      
      <IntroSection />
      <FutureSection />
    </main>
  );
}
