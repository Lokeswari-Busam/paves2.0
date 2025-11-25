"use client";

import dynamic from "next/dynamic";

// Load map only on client-side (NO SSR)
const LeafletMap = dynamic(() => import("./RealMap"), {
  ssr: false,
});

export default function MapSection({ offices }) {
  return (
    <section className="max-w-7xl mx-auto mt-16 h-[500px] rounded-xl border border-border overflow-hidden">
      <LeafletMap offices={offices} />
    </section>
  );
}
