"use client";

import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="text-2xl mb-6 flex items-center gap-2">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-primary font-semibold hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground/70 font-medium">{item.label}</span>
          )}

          {/* Arrow except last item */}
          {index < items.length - 1 && (
            <span className="text-foreground/50">{">"}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
