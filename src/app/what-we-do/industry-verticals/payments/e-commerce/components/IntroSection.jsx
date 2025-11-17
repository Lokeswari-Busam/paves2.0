"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            E-Commerce
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
            Transform Your E-Commerce with AI-Powered Solutions from Paves
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Paves Technologies empowers online retailers, marketplaces, and direct-to-consumer brands
            with <strong>AI-driven solutions</strong> that enhance customer engagement, optimize inventory,
            prevent fraud, and increase conversions.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#0F1E63]">
            AI-First E-Commerce: Smarter, Faster, and More Profitable
          </h3>

          <ul className="mt-4 space-y-3 text-gray-700">
            <li>✔ Personalized Shopping Experiences</li>
            <li>✔ Frictionless Checkout & Embedded Payments</li>
            <li>✔ AI-Powered Demand Forecasting & Inventory Optimization</li>
            <li>✔ Real-Time Fraud Prevention & Chargeback Reduction</li>
            <li>✔ Automated Customer Support & AI Chatbots</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/ecommerce-illustration.png"
            alt="E-Commerce Illustration"
            width={900}
            height={560}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

    </section>
  );
}
