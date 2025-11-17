"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT: text + bullets */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Merchant Acquirers</p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
            Empowering Merchant Acquirers with Intelligent, Secure, and Scalable Payment Solutions
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Paves Technologies revolutionizes merchant acquiring with <strong>AI-driven payment solutions</strong>
            that enhance efficiency, fraud prevention, and customer engagement.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#0F1E63]">AI-First Merchant Acquiring: Secure, Intelligent, and Future-Ready</h3>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>✔ Enable Omni-Channel Payment Acceptance</li>
            <li>✔ Accelerate Merchant Onboarding & Compliance</li>
            <li>✔ Optimize Transaction Routing & Payment Success Rates</li>
            <li>✔ Enhance Fraud Prevention with Real-Time Intelligence</li>
            <li>✔ Deliver AI-Powered Business Insights for Merchants</li>
          </ul>
        </div>

        {/* RIGHT: illustration (no bg) */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/merchant-illustration.png"
            alt="Merchant Acquiring Illustration"
            width={900}
            height={560}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
