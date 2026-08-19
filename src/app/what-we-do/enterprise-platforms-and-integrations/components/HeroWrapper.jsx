"use client";

import { usePathname } from "next/navigation";
import GlassGradientHero from "@/app/what-we-do/services/components/GlassGradientHero";

import { PLATFORMS, SECTION_BASE } from "../data";

/**
 * Builds the pathname → hero map from PLATFORMS so a new platform never needs
 * a second edit here. Deliberately contains no key for the section landing
 * page — that renders its own <Hero /> inline, so this returns null there and
 * the page does not get two heroes (same approach as services/HeroWrapper).
 */
const heroSectionData = Object.fromEntries(
  PLATFORMS.map(({ slug, title, tagline }) => [
    `${SECTION_BASE}/${slug}`,
    {
      title,
      description: tagline,
      image: "/assets/what_we_do_hero.jpeg",
      breadcrumb: [
        { label: "Paves Technologies", href: "/" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Enterprise Platforms & Integrations", href: SECTION_BASE },
        { label: title },
      ],
    },
  ])
);

export default function HeroWrapper() {
  const pathname = usePathname();
  const heroData = heroSectionData[pathname];

  if (!heroData) return null;

  return (
    <GlassGradientHero
      title={heroData.title}
      description={heroData.description}
      image={heroData.image}
      breadcrumb={heroData.breadcrumb}
    />
  );
}
