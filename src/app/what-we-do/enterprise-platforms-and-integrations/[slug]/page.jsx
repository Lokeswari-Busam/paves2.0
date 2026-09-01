import { notFound } from "next/navigation";

import PlatformDetail from "../components/PlatformDetail";
import { PLATFORMS, SECTION_BASE, getPlatform } from "../data";

const BASE_URL = "https://www.pavestechnologies.com";

/* Prerenders one static page per platform at build time — same output as
   four hand-written folders, from a single source of truth. */
export function generateStaticParams() {
  return PLATFORMS.map(({ slug }) => ({ slug }));
}

// `params` is a Promise in Next 15+ and must be awaited.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const platform = getPlatform(slug);
  if (!platform) return {};

  return {
    title: platform.title,
    description: platform.tagline,
    alternates: {
      canonical: `${BASE_URL}${SECTION_BASE}/${platform.slug}`,
    },
  };
}

export default async function PlatformPage({ params }) {
  const { slug } = await params;
  if (!getPlatform(slug)) notFound();

  return <PlatformDetail slug={slug} />;
}
