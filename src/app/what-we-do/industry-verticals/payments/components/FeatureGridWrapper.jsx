"use client";

import FeatureGrid from "./FeatureGrid";

export default function FeatureGridWrapper() {
  return (
    <section className="relative py-5 px-6 md:px-20 overflow-hidden">

      {/* ISOMETRIC FINTECH GRID */}
      <svg className="absolute inset-0 opacity-5 w-full h-full">
        <defs>
          <pattern id="iso" width="80" height="80" patternUnits="userSpaceOnUse">
            <path
              d="M40 0 L80 20 L80 60 L40 80 L0 60 L0 20 Z"
              stroke="#0F1E63"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#iso)" />
      </svg>

      <div className="relative z-10">
        <FeatureGrid />
      </div>

    </section>
  );
}
