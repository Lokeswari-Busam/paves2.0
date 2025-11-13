"use client";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[340px] md:h-[320px] bg-white overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
            Payments Fraud & AML
          </h1>

          <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
            Paves Technologies &gt; Industry Verticals &gt; Payments Fraud & AML
          </p>
        </div>
      </div>

      {/* RIGHT SHAPES */}
      <div className="absolute right-0 top-0 w-full h-full z-10 overflow-hidden">

        {/* Smooth waves (same as banking/payments) */}
        <svg className="absolute left-[-20%] top-[20%] w-[200%] h-[150%] opacity-[0.4]"
             viewBox="0 0 2000 600">
          <path fill="#E6ECFF"
            d="M0 260 C300 140, 600 340, 950 250 C1300 160, 1650 310, 2000 230 L2000 600 L0 600 Z" />
        </svg>

        <svg className="absolute left-[-20%] top-[30%] w-[200%] h-[150%] opacity-[0.7]"
             viewBox="0 0 2000 600">
          <path fill="#C9D4FF"
            d="M0 310 C350 180, 700 290, 1050 260 C1400 220, 1750 330, 2100 260 L2000 600 L0 600 Z" />
        </svg>

        {/* Glow effects */}
        <div className="absolute right-10 top-14 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute right-32 bottom-16 w-20 h-20 bg-blue-500/40 rounded-full blur-xl"></div>

      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

    </div>
  );
}
