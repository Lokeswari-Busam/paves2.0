"use client";

import Image from "next/image";

export default function RetailBankingPage() {
  return (
    <main className="w-full overflow-hidden">

     

      {/* ────────────────────────────
          INTRO SECTION
      ──────────────────────────── */}
      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Retail Banking
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
              AI-Driven Retail Banking:
              <br />
              Elevating Customer Experiences
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Paves Technologies empowers retail banks with AI-driven automation,
              security, and real-time insights to deliver smarter, seamless, and
              more engaging banking experiences.
            </p>

            <ul className="mt-5 space-y-3 text-gray-700">
              <li>✔ Personalized Banking & AI-Driven Financial Insights</li>
              <li>✔ AI-Driven Fraud Prevention & Cybersecurity</li>
              <li>✔ Seamless Payments & Embedded Finance</li>
              <li>✔ AI-Powered Loan & Credit Decisioning</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/retail-banking.png"
              alt="Retail Banking"
              width={900}
              height={560}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

        </div>
      </section>

      {/* ────────────────────────────
          FUTURE-PROOF SECTION
      ──────────────────────────── */}
      <section className="py-16 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Transform the Future of Banking with AI-Powered Solutions from Paves
          </h2>

          <p className="text-gray-700 leading-relaxed max-w-4xl">
            Whether you're a retail bank, a corporate financial institution,
            or a digital-first neobank, Paves Technologies delivers
            AI-powered banking solutions to enhance efficiency, security,
            and customer engagement.
          </p>

        </div>
      </section>

    </main>
  );
}
