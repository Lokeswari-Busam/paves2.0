"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative bg-[#0F1E63] text-white py-20 px-6 md:px-20 overflow-hidden">

      {/* BACKGROUND ANGLED PATTERN */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
        <defs>
          <pattern id="amlPattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 200 L200 0" stroke="white" strokeWidth="2" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#amlPattern)" />
      </svg>

      {/* GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            AI-Powered Fraud Prevention & AML Solutions for Banking
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed">
            Paves Technologies delivers AI-powered Fraud Prevention and Anti-Money Laundering (AML)
            solutions that enhance security, compliance, and risk management across payments,
            banking, and financial services.
          </p>

          <p className="mt-4 text-gray-200 leading-relaxed">
            At Paves Technologies, we integrate AI, Predictive Analytics, and ML into fraud
            detection and AML processes to enable:
          </p>

          <ul className="mt-6 space-y-3 text-gray-200 text-lg">
            <li>› Real-Time Transaction Monitoring & Fraud Detection</li>
            <li>› AI-Powered KYC & AML Compliance</li>
            <li>› Proactive Risk Mitigation & Regulatory Automation</li>
            <li>› Fraud Prevention in Real-Time Payments & Digital Transactions</li>
            <li>› AI-Powered Insider Threat & Account Takeover Protection</li>
            <li>› Global Compliance & Regulatory Adherence</li>
          </ul>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex items-center justify-center">
          <Image
            src="/assets/aml-Illustration.png" 
            alt="AML Illustration"
            width={420}
            height={320}
            className="object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
