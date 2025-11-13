"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// SVG icon components
const icons = {
  card: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0F1E63"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  ),

  merchant: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0F1E63"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <path d="M3 17h18v4H3z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),

  ecommerce: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0F1E63"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="15" x2="16" y2="15" />
    </svg>
  ),

  gateway: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0F1E63"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
      <path d="M7.5 7.5l1.5 1.5M15 15l1.5 1.5" />
      <path d="M7.5 16.5L9 15M15 9l1.5-1.5" />
    </svg>
  ),

  realtime: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0F1E63"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),

  embedded: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0F1E63"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="10" y1="17" x2="14" y2="17" />
      <circle cx="12" cy="7" r="2" />
    </svg>
  ),
};

// FEATURES LIST
const features = [
  { title: "Card Issuers", icon: icons.card },
  { title: "Merchant Acquirers", icon: icons.merchant },
  { title: "E-commerce", icon: icons.ecommerce },
  { title: "Payment Gateways", icon: icons.gateway },
  { title: "Real-time payments", icon: icons.realtime },
  { title: "Embedded Finance", icon: icons.embedded },
];

export default function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {features.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-8 bg-white shadow-md rounded-xl border border-gray-200 flex items-center justify-between hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4">
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>

          <ArrowUpRight className="w-6 h-6 text-[#0F1E63]" />
        </motion.div>
      ))}
    </div>
  );
}
