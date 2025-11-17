"use client";

import Image from "next/image";

export default function DigitalBankingPage() {
  return (
    <main className="w-full overflow-hidden">

      {/* ================= HERO (WAVE STYLE) ================= */}
      <div className="relative w-full h-[340px] md:h-[320px] bg-white overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Digital Banking
            </h1>

            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; Industry Verticals &gt; Banking &gt; Digital Banking
            </p>
          </div>
        </div>

        {/* DECORATIVE WAVES */}
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-10">
          
          {/* BACK WAVE */}
          <svg
            className="absolute left-[-25%] top-[18%] w-[200%] h-[160%] opacity-[0.45]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 260
                C300 140, 600 340, 950 250
                C1300 160, 1650 310, 2000 230
                L2000 600
                L0 600
                Z
              "
              fill="#E6ECFF"
            />
          </svg>

          {/* FRONT WAVE */}
          <svg
            className="absolute left-[-22%] top-[22%] w-[200%] h-[160%] opacity-[0.7]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 310
                C350 180, 700 290, 1050 260
                C1400 220, 1750 330, 2100 260
                L2000 600
                L0 600
                Z
              "
              fill="#C9D4FF"
            />
          </svg>

          {/* GLOW EFFECTS */}
          <div className="absolute right-10 top-14 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute right-32 bottom-16 w-20 h-20 bg-blue-500/40 rounded-full blur-xl"></div>
        </div>

        {/* GRADIENT FADE */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
      </div>

      {/* ================= INTRO SECTION ================= */}
      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Digital Banking
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
              AI-Driven Digital Banking:
              <br />
              Future-Ready, Fully Automated, and Intelligent
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Paves Technologies enables digital-first financial institutions to scale securely with 
              AI-powered onboarding, lending, and embedded finance solutions — delivering seamless and 
              intelligent customer experiences.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Personalized Banking & AI-Driven Financial Insights</li>
              <li>✔ AI-Driven Fraud Prevention & Cybersecurity</li>
              <li>✔ Seamless Payments & Embedded Finance</li>
              <li>✔ AI-Powered Loan & Credit Decisioning</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/digital-banking.png"
              alt="Digital Banking"
              width={900}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-12 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Transform the Future of Banking with AI-Powered Solutions from Paves
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Whether you’re a retail bank, corporate financial institution, or digital-first neobank — 
            Paves Technologies delivers intelligent digital banking solutions to enhance efficiency, 
            security, and customer engagement.
          </p>
        </div>
      </section>

    </main>
  );
}
