"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full">


      {/* ================= INTRO SECTION ================= */}
      <section className="relative py-20 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E63] leading-snug">
              AI-Powered Corporate & Commercial Banking:
              <br />
              Intelligent, Scalable, and Secure
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Paves Technologies enables banks to enhance cash flow management,
              detect fraud, and optimize large-scale transactions with AI-powered
              automation.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ AI-Powered Cash Flow & Treasury Management</li>
              <li>✔ Intelligent Payment Processing & Trade Finance</li>
              <li>✔ Real-Time Fraud Detection & Compliance Automation</li>
              <li>✔ AI-Driven B2B Lending & Risk Assessment</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/assets/corporate-commercial-banking.png"
              alt="Corporate & Commercial Banking"
              width={700}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="py-16 px-6 md:px-20 bg-[#F5F7FF]">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F1E63]">
          Transform the Future of Banking with AI-Powered Solutions from Paves
        </h3>

        <p className="mt-4 text-gray-600 max-w-3xl">
          Whether you're a retail bank, a corporate financial institution,
          or a digital-first neobank, Paves Technologies delivers AI-powered
          banking solutions to enhance efficiency, security, and
          customer engagement.
        </p>
      </section>

    </div>
  );
}
