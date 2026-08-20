import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import FutureSection from "./components/FutureSection";

export const metadata = {
  title: "E-Commerce Payments",
  description: "Delivering frictionless payment flows that enable seamless shopping experiences.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments/e-commerce" },
};

export default function EcommercePage() {
  return (
    <main className="w-full overflow-hidden">
    
      <IntroSection />
      <WhyChoose />
      <FutureSection />
    </main>
  );
}
