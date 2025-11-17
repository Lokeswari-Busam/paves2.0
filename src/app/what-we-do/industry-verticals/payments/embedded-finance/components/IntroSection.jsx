"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Embedded Finance
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
            Seamlessly Integrate Financial Services into Any Ecosystem
            with AI-Driven Intelligence
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Paves Technologies empowers businesses to seamlessly integrate financial products—
            <strong>payments, lending, insurance, and banking</strong>—into their ecosystems with 
            AI-first, API-driven solutions.
          </p>

          <ul className="mt-5 space-y-3 text-gray-700">
            <li>✔ Integrated Payment Solutions</li>
            <li>✔ Adaptive Lending Models</li>
            <li>✔ Real-Time Customer Insights</li>
            <li>✔ End-to-End Security</li>
            <li>✔ Seamless Integration</li>
            <li>✔ Adaptive Security Frameworks</li>
            <li>✔ Scalable Growth</li>
            <li>✔ Customer Engagement at Scale</li>
            <li>✔ Seamless User Experiences</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/embedded-finance-illustration.png"
            alt="Embedded Finance Illustration"
            width={900}
            height={560}
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

    </section>
  );
}
