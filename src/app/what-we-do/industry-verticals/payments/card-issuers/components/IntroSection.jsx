"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">

      {/* GRID: Left text + Right image */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT TEXT */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Card Issuers
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
            For Card Issuers: Transform Your Issuing Solutions with AI-Powered Precision
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Paves Technologies redefines the card issuing landscape with AI-powered innovations
            that drive <strong>personalization, security, and efficiency</strong> at scale.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#0F1E63]">
            AI-First Card Issuing: Smarter, Faster, and More Secure
          </h3>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>✔ Personalize Card Offerings at Scale</li>
            <li>✔ Automate Onboarding & Approval for Frictionless Issuance</li>
            <li>✔ Enhance Fraud Prevention with Real-Time AI Models</li>
            <li>✔ Optimize Credit Risk & Portfolio Performance</li>
            <li>✔ Accelerate Product Innovation & Go-To-Market Speed</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <Image
            src="/assets/card-issuers.png" 
            alt="Card Issuer"
            width={900}
            height={600}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
