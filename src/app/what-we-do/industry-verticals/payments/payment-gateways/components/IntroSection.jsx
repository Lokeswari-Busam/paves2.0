"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

        {/* LEFT TEXT SIDE */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Payment Gateways
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
            Transform Your Payment Gateways with AI-Powered Solutions from Paves
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Paves Technologies empowers businesses to seamlessly integrate financial 
            products—<strong>payments, lending, insurance, and banking</strong>—into their 
            ecosystems with AI-first, API-driven solutions.
          </p>

          <ul className="mt-5 space-y-3 text-gray-700">
            <li>✔ Seamless Payment Processing Across All Channels</li>
            <li>✔ AI-Powered Fraud Detection & Risk Mitigation</li>
            <li>✔ Intelligent Transaction Routing & Payment Optimization</li>
            <li>✔ Adaptive Payment Authorization & Dynamic Risk Scoring</li>
            <li>✔ Cross-Border Payment Intelligence & Multi-Currency Optimization</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/payment-gateways.png"
            alt="Payment Gateway Illustration"
            width={900}
            height={560}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
