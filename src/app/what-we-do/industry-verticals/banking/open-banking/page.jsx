"use client";

import Image from "next/image";

export default function OpenBankingPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO (WAVE STYLE) ================= */}
      <div className="relative w-full h-[340px] md:h-[320px] bg-white overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Open Banking
            </h1>

            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; Industry Verticals &gt; Banking &gt; Open Banking
            </p>
          </div>
        </div>

        {/* WAVES */}
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-10">

          {/* BACK WAVE */}
          <svg
            className="absolute left-[-25%] top-[18%] w-[200%] h-[160%] opacity-[0.45]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M0 260
                C300 140, 600 340, 950 250
                C1300 160, 1650 310, 2000 230
                L2000 600
                L0 600Z
              "
              fill="#E6ECFF"
            />
          </svg>

          {/* FRONT WAVE */}
          <svg
            className="absolute left-[-22%] top-[22%] w-[200%] h-[160%] opacity-[0.7]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M0 310
                C350 180, 700 290, 1050 260
                C1400 220, 1750 330, 2100 260
                L2000 600
                L0 600Z
              "
              fill="#C9D4FF"
            />
          </svg>

          {/* GLOWS */}
          <div className="absolute right-10 top-14 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute right-32 bottom-16 w-20 h-20 bg-blue-500/40 rounded-full blur-xl"></div>
        </div>

        {/* FADE GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      </div>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase">
              Open Banking
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight mt-2">
              Revolutionize Open Banking with AI-Powered Solutions from Paves
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Paves Technologies enables banks and fintechs to thrive in the new Open Banking ecosystem 
              with AI-driven solutions that ensure secure API integrations, real-time data sharing, and 
              personalized financial services.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0F1E63]">
              AI-First Open Banking: Secure, Agile, and Customer-Centric
            </h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✔ Seamlessly Integrate with Third-Party Fintechs</li>
              <li>✔ Enhance Customer Engagement with Personalized Services</li>
              <li>✔ Ensure Compliance and Data Security</li>
              <li>✔ Drive Innovation with Real-Time Financial Data</li>
              <li>✔ Expand Revenue Streams through Embedded Finance</li>
            </ul>
          </div>

          {/* RIGHT IMAGE / ILLUSTRATION */}
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/open-banking.png"  // << your illustration goes here
              alt="Open Banking"
              width={900}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-14 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">

          <h3 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Why Choose Paves Technologies for Open Banking?
          </h3>

          <ul className="text-gray-700 space-y-2">
            <li>› AI-Driven Innovation</li>
            <li>› Secure, Compliant APIs</li>
            <li>› Customer-Centric Focus</li>
            <li>› Scalable Integration</li>
            <li>› Future-Proofing Capabilities</li>
          </ul>

        </div>
      </section>

      {/* ================= FUTURE-PROOF CTA ================= */}
      <section className="py-16 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Empower Your Open Banking Strategy with AI-First Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            With Paves Technologies, leverage AI to drive innovation, enhance security, 
            and deliver personalized financial services that resonate with today’s 
            digital-savvy customers.
          </p>

        </div>
      </section>

    </main>
  );
}
