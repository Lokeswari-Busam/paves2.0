"use client";

import { usePathname } from "next/navigation";
import SplitHero from "./components/SplitHero";

export default function IndustryVerticalsLayout({ children }) {
  const pathname = usePathname();

  // 🔥 HERO CONFIG — MATCHING SERVICES STYLE + Breadcrumb Array
  const heroSectionData = {
    "/what-we-do/industry-verticals/payments": {
      title: "Payments",
      description:
        "Empowering global money movement with secure, fast, and scalable payment solutions for modern businesses.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb: [
        { label: "Paves Technologies", href: "/" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments" },
      ],
    },

    "/what-we-do/industry-verticals/banking": {
      title: "Banking",
      description:
        "Building next-generation banking platforms for retail, corporate, digital, and open banking ecosystems.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb: [
        { label: "Paves Technologies", href: "/" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Banking" },
      ],
    },

    "/what-we-do/industry-verticals/payments-fraud-and-aml": {
      title: "Payments Fraud & AML",
      description:
        "AI-driven fraud detection and AML frameworks that safeguard financial institutions in real time.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb: [
        { label: "Paves Technologies", href: "/" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Payments Fraud & AML" },
      ],
    },

    "/what-we-do/industry-verticals/governance-risk-compliance": {
      title: "Governance, Risk & Compliance",
      description:
        "Ensuring trust, security, and regulatory adherence through robust governance and risk frameworks.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb: [
        { label: "Paves Technologies", href: "/" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "GRC" },
      ],
    },

    "/what-we-do/industry-verticals/insurance": {
      title: "Insurance",
      description:
        "Transforming underwriting, claims, and policy management with automation and intelligence.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb: [
        { label: "Paves Technologies", href: "/" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Insurance" },
      ],
    },

    "/what-we-do/industry-verticals/capital-markets": {
      title: "Capital Markets",
      description:
        "Modernizing trading, investment, and market data infrastructure for transparency and performance.",
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb: [
        { label: "Paves Technologies", href: "/" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Industry Verticals", href: "/what-we-do/industry-verticals" },
        { label: "Capital Markets" },
      ],
    },
  };

  const heroData = heroSectionData[pathname];

  return (
    <div>
      {heroData && (
        <SplitHero
          title={heroData.title}
          description={heroData.description}
          image={heroData.image}
          breadcrumb={heroData.breadcrumb} // breadcrumb array for clickable navigation
        />
      )}

      {children}
    </div>
  );
}
