"use client";
import Image from "next/image";

export default function BusinessAndTechnologyPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* 🌊 HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[400px] bg-white overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2a3990]">
              Business & Technology Advisory
            </h1>
            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; Services &gt; Business & Technology Advisory
            </p>
          </div>
        </div>

        {/* RIGHT DECORATIVE SHAPES */}
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-10">
          {/* BACK WAVE */}
          <svg
            className="absolute left-[-25%] top-[18%] w-[200%] h-[160%] opacity-[0.45]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0 260 C300 140, 600 340, 950 250 C1300 160, 1650 310, 2000 230 L2000 600 L0 600 Z"
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
              d="M0 310 C350 180, 700 290, 1050 260 C1400 220, 1750 330, 2100 260 L2000 600 L0 600 Z"
              fill="#C9D4FF"
            />
          </svg>

          {/* BLUR EFFECTS */}
          <div className="absolute right-10 top-14 w-48 h-48 bg-pink-700 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute right-32 bottom-16 w-20 h-20 bg-blue-500/40 rounded-full blur-xl"></div>
        </div>

        {/* WHITE GRADIENT FADE */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-5"></div>
      </section>

      {/* 💼 BUSINESS ADVISORY CONTENT SECTION */}
      <section className="py-20 bg-[#2a3990] text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-stretch gap-0">

          {/* LEFT SECTION — FULL IMAGE */}
          <div className="md:w-1/2 h-[595px] relative">
            <Image
              src="/assets/business-team-meeting-modern-office-with-city-view.jpg"
              alt="Business Advisory"
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-indigo-900/20"></div> {/* soft overlay */}
          </div>

          {/* RIGHT SECTION — TEXT CONTENT */}
          <div className="md:w-1/2 bg-white px-8 py-12 flex flex-col justify-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Future-Ready Strategies for BFSI & Beyond
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Paves Technologies offers Business & Technology Advisory Consulting designed 
              to empower banks, financial institutions, and fintechs with strategic insights, 
              domain expertise, and AI-driven technology solutions.
            </p>

            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              Our Business & Technology Advisory Services
            </h3>

            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Digital Transformation & AI Strategy
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Cloud, Open Banking & API Ecosystem Advisory
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Regulatory Compliance, Risk & Fraud Prevention
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Payments, Embedded Finance & Digital Lending Advisory
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Wealth Management & Capital Markets Technology Advisory
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
