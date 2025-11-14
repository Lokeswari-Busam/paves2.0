"use client";

import { ArrowUpRight } from "lucide-react";

const items = [
  // -------------------------------------------------------------
  // RETAIL BANKING (Stylized Vault Door + Bank Pillars)
  // -------------------------------------------------------------
  {
    title: "Retail Banking",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0F1E63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9L12 3L21 9" />
        <rect x="6" y="10" width="3" height="9" rx="1" />
        <rect x="11" y="10" width="3" height="9" rx="1" />
        <rect x="16" y="10" width="3" height="9" rx="1" />
        <path d="M5 19H19" />
      </svg>
    ),
  },

  // -------------------------------------------------------------
  // CORPORATE BANKING (Abstract Multi-Block Enterprise Towers)
  // -------------------------------------------------------------
  {
    title: "Corporate & Commercial Banking",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0F1E63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="5" height="13" rx="1" />
        <rect x="10" y="4" width="5" height="17" rx="1" />
        <rect x="17" y="10" width="5" height="11" rx="1" />
      </svg>
    ),
  },

  // -------------------------------------------------------------
  // DIGITAL BANKING (Stylized Mobile Device + Fingerprint)
  // -------------------------------------------------------------
  {
    title: "Digital Banking",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0F1E63" strokeWidth="1.6" strokeLinecap="round">
        <rect x="7" y="2" width="10" height="20" rx="3" />
        <path d="M10 7h4" />
        <circle cx="12" cy="17" r="1.3" />
        <path d="M9 11.5C9 9.6 10.6 8 12.5 8" opacity="0.7" />
        <path d="M9.5 14c0-2.5 2-4.5 4.5-4.5" opacity="0.7" />
      </svg>
    ),
  },

  // -------------------------------------------------------------
  // OPEN BANKING (Open API Network Hub)
  // -------------------------------------------------------------
  {
    title: "Open Banking",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0F1E63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="M5.3 5.3l2.1 2.1" />
        <path d="M16.6 16.6l2.1 2.1" />
        <path d="M16.6 7.4l2.1-2.1" />
        <path d="M5.3 18.6l2.1-2.1" />
      </svg>
    ),
  },

  // -------------------------------------------------------------
  // CONSUMER LENDING (Wallet + Coin)
  // -------------------------------------------------------------
  {
    title: "Consumer Lending",
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#0F1E63" strokeWidth="1.6" strokeLinecap="round">
        <rect x="3" y="7" width="18" height="12" rx="3" />
        <circle cx="16.5" cy="13" r="1.6" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
];

export default function BankingGrid() {
  return (
    <section className="relative py-20 px-6 md:px-20 overflow-hidden">
        
{/* ISOMETRIC FINTECH GRID */}
<svg className="absolute inset-0 w-full h-full opacity-[0.07]">
  <defs>
    <pattern
      id="isoGrid"
      width="80"
      height="80"
      patternUnits="userSpaceOnUse"
    >
      <path
        d="M40 0 L80 20 L80 60 L40 80 L0 60 L0 20 Z"
        stroke="#0F1E63"
        strokeWidth="1"
        fill="none"
      />
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#isoGrid)" />
</svg>



      {/* GRID */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl">
        {items.map((item, index) => (
          <div key={index} className="p-8 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-between hover:shadow-lg transition">
            <div className="flex items-center gap-4">
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <ArrowUpRight className="w-6 h-6 text-[#0F1E63]" />
          </div>
        ))}
      </div>

    </section>
  );
}
