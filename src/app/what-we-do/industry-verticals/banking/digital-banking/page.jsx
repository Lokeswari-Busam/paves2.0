"use client";

import Image from "next/image";

export default function DigitalBankingPage() {
  return (
    <main className="w-full overflow-hidden">

   

      {/* ================= INTRO SECTION ================= */}
      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Digital Banking
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
              AI-Driven Digital Banking:
              <br />
              Future-Ready, Fully Automated, and Intelligent
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Paves Technologies enables digital-first financial institutions to scale securely with 
              AI-powered onboarding, lending, and embedded finance solutions — delivering seamless and 
              intelligent customer experiences.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Personalized Banking & AI-Driven Financial Insights</li>
              <li>✔ AI-Driven Fraud Prevention & Cybersecurity</li>
              <li>✔ Seamless Payments & Embedded Finance</li>
              <li>✔ AI-Powered Loan & Credit Decisioning</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex items-center justify-center">
            <Image
              src="/assets/digital-banking.png"
              alt="Digital Banking"
              width={900}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-12 px-6 md:px-20 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F1E63] mb-4">
            Transform the Future of Banking with AI-Powered Solutions from Paves
          </h3>

          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Whether you’re a retail bank, corporate financial institution, or digital-first neobank — 
            Paves Technologies delivers intelligent digital banking solutions to enhance efficiency, 
            security, and customer engagement.
          </p>
        </div>
      </section>

    </main>
  );
}
