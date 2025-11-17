"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Real Time Payments
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0F1E63] leading-tight">
            Transform Your Real-Time Payments with AI-Powered Solutions from Paves
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Paves Technologies delivers AI-powered RTP solutions that enhance speed, 
            security, compliance, and transaction intelligence—helping financial institutions, 
            fintechs, and global businesses optimize real-time payment processing and reduce risk.
          </p>

          <ul className="mt-5 space-y-3 text-gray-700">
            <li>✔ Instant, 24/7 Payment Processing</li>
            <li>✔ Real-Time Fraud Prevention & Risk Monitoring</li>
            <li>✔ Intelligent Payment Routing & Smart Authorization</li>
            <li>✔ AI-Powered Compliance & Regulatory Monitoring</li>
            <li>✔ Seamless Integration with FedNow, RTP & Cross-Border Networks</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/assets/real-time-payments.png"
            alt="Real-Time Payments Illustration"
            width={900}
            height={560}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
