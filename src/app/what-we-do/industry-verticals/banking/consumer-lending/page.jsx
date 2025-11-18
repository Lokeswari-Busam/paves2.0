"use client";

import Image from "next/image";

export default function ConsumerLendingPage() {
  return (
    <main className="w-full overflow-hidden">

     

      {/* ================= INTRO SECTION ================= */}
      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Consumer Lending
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
              AI-First Consumer Lending:
              <br />
              Smarter, Faster, and More Secure
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Paves Technologies empowers banks, fintechs, and lending institutions with AI-powered
              consumer lending solutions that deliver instant approvals, dynamic risk scoring,
              and fraud-resilient decisioning to enable a frictionless borrowing experience.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0F1E63]">Transform Consumer Lending with AI-Powered Solutions from Paves</h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✔ Instant Loan Approvals & AI-Driven Credit Decisioning</li>
              <li>✔ Hyper-Personalized Lending & Dynamic Credit Offers</li>
              <li>✔ Risk-Based Pricing & Alternative Credit Scoring</li>
              <li>✔ AI-Driven Fraud Detection & Compliance Automation</li>
              <li>✔ Seamless Embedded Lending & BNPL Integration</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/consumer-lending.png"    /* put your image here */
              alt="Consumer Lending"
              width={900}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-12 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Why Choose Paves Technologies for Consumer Lending?
          </h3>

          <ul className="text-gray-700 space-y-2">
            <li>› AI-Powered Speed & Efficiency</li>
            <li>› Hyper-Personalization</li>
            <li>› Advanced Fraud Prevention</li>
            <li>› Scalable & API-First Solutions</li>
            <li>› Data-Driven Insights</li>
          </ul>
        </div>
      </section>

      {/* ================= FUTURE- PROOF CTA ================= */}
      <section className="py-16 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Future-Proof Your Consumer Lending with AI-Powered Innovation
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Whether you’re a bank, fintech, or digital lender, Paves Technologies delivers AI-driven lending solutions
            that optimize credit decisioning, reduce fraud, and enhance customer engagement.
          </p>
        </div>
      </section>
    </main>
  );
}
