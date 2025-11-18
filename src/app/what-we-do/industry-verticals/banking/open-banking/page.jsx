"use client";

import Image from "next/image";

export default function OpenBankingPage() {
  return (
    <main className="w-full overflow-hidden">

    

      {/* ================= INTRO SECTION ================= */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase">
              Open Banking
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight mt-2">
              Revolutionize Open Banking with AI-Powered Solutions from Paves
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Paves Technologies enables banks and fintechs to thrive in the new Open Banking ecosystem 
              with AI-driven solutions that ensure secure API integrations, real-time data sharing, and 
              personalized financial services.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0F1E63]">
              AI-First Open Banking: Secure, Agile, and Customer-Centric
            </h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✔ Seamlessly Integrate with Third-Party Fintechs</li>
              <li>✔ Enhance Customer Engagement with Personalized Services</li>
              <li>✔ Ensure Compliance and Data Security</li>
              <li>✔ Drive Innovation with Real-Time Financial Data</li>
              <li>✔ Expand Revenue Streams through Embedded Finance</li>
            </ul>
          </div>

          {/* RIGHT IMAGE / ILLUSTRATION */}
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/open-banking.png"  // << your illustration goes here
              alt="Open Banking"
              width={900}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-14 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">

          <h3 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Why Choose Paves Technologies for Open Banking?
          </h3>

          <ul className="text-gray-700 space-y-2">
            <li>› AI-Driven Innovation</li>
            <li>› Secure, Compliant APIs</li>
            <li>› Customer-Centric Focus</li>
            <li>› Scalable Integration</li>
            <li>› Future-Proofing Capabilities</li>
          </ul>

        </div>
      </section>

      {/* ================= FUTURE-PROOF CTA ================= */}
      <section className="py-16 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Empower Your Open Banking Strategy with AI-First Solutions
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            With Paves Technologies, leverage AI to drive innovation, enhance security, 
            and deliver personalized financial services that resonate with today’s 
            digital-savvy customers.
          </p>

        </div>
      </section>

    </main>
  );
}
