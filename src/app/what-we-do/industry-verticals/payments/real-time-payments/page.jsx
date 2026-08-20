import IntroSection from "./components/IntroSection";
import WhyChoose from "./components/WhyChoose";
import FutureSection from "./components/FutureSection";

export const metadata = {
  title: "Real-Time Payments",
  description: "Supporting instant fund transfers with robust, compliant, and low-latency architectures.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/industry-verticals/payments/real-time-payments" },
};

export default function RealTimePaymentsPage() {
  return (
    <main className="w-full overflow-hidden">
     
      <IntroSection />
      <WhyChoose />
      <FutureSection />
    </main>
  );
}
