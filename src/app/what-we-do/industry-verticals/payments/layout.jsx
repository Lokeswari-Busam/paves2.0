"use client";

import { usePathname } from "next/navigation";
import PaymentsHero from "./components/PaymentsHero";

export default function PaymentsLayout({ children }) {
  const pathname = usePathname();

  // HERO CONFIG for all subpages
  const heroConfig = {
   

    "/what-we-do/industry-verticals/payments/card-issuers": {
      title: "Card Issuers",
      description:
        "Enabling seamless card lifecycle management with secure and modern issuing platforms.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments", href: "/what-we-do/industry-verticals/payments" },
        { label: "Card Issuers" },
      ],
    },

    "/what-we-do/industry-verticals/payments/merchant-acquirers": {
      title: "Merchant Acquirers",
      description:
        "Supporting merchants with intelligent acquiring solutions that improve payment efficiency.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments", href: "/what-we-do/industry-verticals/payments" },
        { label: "Merchant Acquirers" },
      ],
    },

    "/what-we-do/industry-verticals/payments/payment-gateways": {
      title: "Payment Gateways",
      description:
        "Building high-performance, compliant, and scalable gateway infrastructures.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments", href: "/what-we-do/industry-verticals/payments" },
        { label: "Payment Gateways" },
      ],
    },

    "/what-we-do/industry-verticals/payments/e-commerce": {
      title: "E-Commerce Payments",
      description:
        "Delivering frictionless payment flows that enable seamless shopping experiences.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments", href: "/what-we-do/industry-verticals/payments" },
        { label: "E-Commerce" },
      ],
    },

    "/what-we-do/industry-verticals/payments/real-time-payments": {
      title: "Real-Time Payments",
      description:
        "Supporting instant fund transfers with robust, compliant, and low-latency architectures.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments", href: "/what-we-do/industry-verticals/payments" },
        { label: "Real-Time Payments" },
      ],
    },

    "/what-we-do/industry-verticals/payments/embedded-finance": {
      title: "Embedded Finance",
      description:
        "Integrating financial services into digital ecosystems with modern APIs and platforms.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments", href: "/what-we-do/industry-verticals/payments" },
        { label: "Embedded Finance" },
      ],
    },
  };

  const heroData = heroConfig[pathname];

  return (
    <div>
      {heroData && (
        <PaymentsHero
          title={heroData.title}
          description={heroData.description}
          breadcrumb={heroData.breadcrumb}
        />
      )}
      {children}
    </div>
  );
}
