"use client";
import Image from "next/image";


export default function BusinessAdvisoryContent() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section — Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-[400px]">
            <Image
              src="/images/business-advisory.jpg"
              alt="Business Advisory"
              fill
              className="object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Section — Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            Our Business & Technology Advisory Services
          </h2>

          <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl font-bold mt-1">›</span>
              Digital Transformation & AI Strategy
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl font-bold mt-1">›</span>
              Cloud, Open Banking & API Ecosystem Advisory
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl font-bold mt-1">›</span>
              Regulatory Compliance, Risk & Fraud Prevention
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl font-bold mt-1">›</span>
              Payments, Embedded Finance & Digital Lending Advisory
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 text-2xl font-bold mt-1">›</span>
              Wealth Management & Capital Markets Technology Advisory
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
