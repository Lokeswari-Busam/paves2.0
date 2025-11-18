"use client";

import { usePathname } from "next/navigation";
import BankingHero from "./components/BankingHero";

export default function BankingLayout({ children }) {
  const pathname = usePathname();

  // HERO DATA FOR ALL BANKING SUB-PAGES
  const heroConfig = {
   

    "/what-we-do/industry-verticals/banking/retail-banking": {
      title: "Retail Banking",
      description:
        "Delivering digital-first retail banking experiences with intelligent automation and secure infrastructure.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Banking", href: "/what-we-do/industry-verticals/banking" },
        { label: "Retail Banking" }
      ],
    },

    "/what-we-do/industry-verticals/banking/corporate-and-commercial-banking": {
      title: "Corporate & Commercial Banking",
      description:
        "Transforming corporate banking through automation, financial intelligence, and seamless digital operations.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Banking", href: "/what-we-do/industry-verticals/banking" },
        { label: "Corporate & Commercial Banking" }
      ],
    },

    "/what-we-do/industry-verticals/banking/digital-banking": {
      title: "Digital Banking",
      description:
        "Empowering banks with mobile-first experiences, API-driven platforms, and secure digital journeys.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Banking", href: "/what-we-do/industry-verticals/banking" },
        { label: "Digital Banking" }
      ],
    },

    "/what-we-do/industry-verticals/banking/open-banking": {
      title: "Open Banking",
      description:
        "Unlocking financial innovation through secure, compliant, and modern open banking API platforms.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Banking", href: "/what-we-do/industry-verticals/banking" },
        { label: "Open Banking" }
      ],
    },

    "/what-we-do/industry-verticals/banking/consumer-lending": {
      title: "Consumer Lending",
      description:
        "Simplifying loan journeys with automated decisioning, secure processing, and real-time analytics.",
      breadcrumb: [
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Banking", href: "/what-we-do/industry-verticals/banking" },
        { label: "Consumer Lending" }
      ],
    },
  };

  // Pick hero based on path
  const heroData = heroConfig[pathname];

  return (
    <div>
      {heroData && (
        <BankingHero
          title={heroData.title}
          description={heroData.description}
          breadcrumb={heroData.breadcrumb}
        />
      )}

      {children}
    </div>
  );
}
