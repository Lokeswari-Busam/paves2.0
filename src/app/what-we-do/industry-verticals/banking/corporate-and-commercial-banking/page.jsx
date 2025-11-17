"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[340px] md:h-[360px] bg-white overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Corporate and Commercial Banking
            </h1>

            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; Industry Verticals &gt; Banking &gt; Corporate and Commercial Banking
            </p>
          </div>
        </div>

        {/* RIGHT DECORATIVE WAVES */}
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-10">

          {/* Back Wave */}
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

          {/* Front Wave */}
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

          {/* Glow Effects */}
          <div className="absolute right-10 top-14 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute right-32 bottom-16 w-20 h-20 bg-blue-500/40 rounded-full blur-xl"></div>
        </div>

      </div>

      {/* ================= INTRO SECTION ================= */}
      <section className="relative py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E63] leading-snug">
              AI-Powered Corporate & Commercial Banking:
              <br />
              Intelligent, Scalable, and Secure
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Paves Technologies enables banks to enhance cash flow management,
              detect fraud, and optimize large-scale transactions with AI-powered
              automation.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ AI-Powered Cash Flow & Treasury Management</li>
              <li>✔ Intelligent Payment Processing & Trade Finance</li>
              <li>✔ Real-Time Fraud Detection & Compliance Automation</li>
              <li>✔ AI-Driven B2B Lending & Risk Assessment</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/assets/corporate-commercial-banking.png"
              alt="Corporate & Commercial Banking"
              width={700}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-16 px-6 md:px-20 bg-[#F5F7FF]">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F1E63]">
          Transform the Future of Banking with AI-Powered Solutions from Paves
        </h3>

        <p className="mt-4 text-gray-600 max-w-3xl">
          Whether you're a retail bank, a corporate financial institution,
          or a digital-first neobank, Paves Technologies delivers AI-powered
          banking solutions to enhance efficiency, security, and
          customer engagement.
        </p>
      </section>

    </div>
  );
}
