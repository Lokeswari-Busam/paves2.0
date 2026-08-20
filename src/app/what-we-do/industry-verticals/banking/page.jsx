import SplitHero from "../components/SplitHero";
import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import BankingGrid from "./components/BankingGrid";

export const metadata = {
  title: "Banking",
  description: "Building next-generation banking platforms for retail, corporate, digital, and open banking ecosystems.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/banking" },
};

export default function BankingPage() {
  return (
    <main className="w-full overflow-hidden">
      
      <IntroSection />
      <WhyChoose />
      <BankingGrid />
    </main>
  );
}
