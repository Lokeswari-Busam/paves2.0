import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import FutureSection from "./components/FutureSection";

export const metadata = {
  title: "Payment Gateways",
  description: "Building high-performance, compliant, and scalable gateway infrastructures.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments/payment-gateways" },
};

export default function PaymentGateways() {
  return (
    <main className="w-full overflow-hidden">
    
      <IntroSection />
      <WhyChoose />
      <FutureSection />
    </main>
  );
}
