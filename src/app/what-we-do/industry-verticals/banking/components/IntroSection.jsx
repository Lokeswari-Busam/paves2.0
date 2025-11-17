"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative bg-[#0F1E63] text-white py-20 px-6 md:px-20 overflow-hidden">

      {/* BACKGROUND ANGLED PATTERN */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
        <defs>
          <pattern id="angledPattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 200 L200 0" stroke="white" strokeWidth="2" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#angledPattern)" />
      </svg>

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div>

          {/* MAIN TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Intelligent, Scalable, and Secure Banking for the <br />
            Digital-First Era
          </h2>

          {/* PARAGRAPH 1 */}
          <p className="mt-6 text-gray-200 leading-relaxed">
            Paves Technologies combines AI innovation with deep banking expertise to help
            financial institutions modernize core systems, deliver seamless digital banking
            experiences, and embrace the future of open banking.
          </p>

          {/* SUBTITLE */}
          <h3 className="text-2xl font-bold mt-10">
            AI-First Banking: Smarter, Faster, and More Secure
          </h3>

          {/* PARAGRAPH 2 */}
          <p className="mt-4 text-gray-200 leading-relaxed">
            At Paves Technologies, we integrate Artificial Intelligence, Predictive Analytics,
            and Machine Learning to transform banking, enabling:
          </p>

          {/* WHY CHOOSE LIST (MERGED INSIDE INTRO) */}
          <h3 className="text-2xl font-bold mt-10">
            Why Choose Paves Technologies for AI-Powered Banking?
          </h3>

          <ul className="mt-6 space-y-3 text-gray-200 text-lg">
            <li>› AI-First Innovation</li>
            <li>› Real-Time Payments & Banking Automation</li>
            <li>› Seamless Integration</li>
            <li>› Fraud-Resilient & Secure</li>
            <li>› Scalable & Future-Ready</li>
            <li>› Regulatory Compliance & Risk Automation</li>
          </ul>
        </div>

       <div className="flex items-center justify-center">
  <Image
    src="/assets/Banking-Illutration.png"   // <-- change to your image file
    alt="Banking Illustration"
    width={420}
    height={320}
    className="object-contain drop-shadow-xl"
  />
</div>


      </div>

    </section>
  );
}
