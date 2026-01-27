"use client";

import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="mt-2 flex items-center gap-2 flex-wrap text-xs md:text-sm font-semibold">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">

          {/* Clickable Link */}
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#2a3990] hover:text-[#000080] hover:underline transition"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-600">{item.label}</span>
          )}

          {/* Separator */}
          {index < items.length - 1 && (
            <span className="text-gray-400">›</span>
          )}
        </span>
      ))}
    </nav>
  );
}
