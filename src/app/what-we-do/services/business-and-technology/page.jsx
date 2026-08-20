import Image from "next/image";

export const metadata = {
  title: "Business & Technology Advisory",
  description: "Aligning business goals with intelligent technology strategies to accelerate digital transformation and enterprise innovation.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/services/business-and-technology" },
};

export default function BusinessAndTechnologyPage() {
  return (
    <main className="bg-white">

          

      {/* 💼 BUSINESS ADVISORY CONTENT SECTION */}
      <section className="py-20 bg-[#2a3990] text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-stretch gap-0">

          {/* LEFT SECTION — FULL IMAGE */}
          <div className="md:w-1/2 h-[595px] relative">
            <Image
              src="/assets/shared/business-team-meeting-modern-office-with-city-view.jpg"
              alt="Business Advisory"
              fill
              className="object-cover object-center w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-indigo-900/20"></div> {/* soft overlay */}
          </div>

          {/* RIGHT SECTION — TEXT CONTENT */}
          <div className="md:w-1/2 bg-white px-8 py-12 flex flex-col justify-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              Future-Ready Strategies for BFSI & Beyond
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Paves Technologies offers Business & Technology Advisory Consulting designed 
              to empower banks, financial institutions, and fintechs with strategic insights, 
              domain expertise, and AI-driven technology solutions.
            </p>

            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              Our Business & Technology Advisory Services
            </h3>

            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Digital Transformation & AI Strategy
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Cloud, Open Banking & API Ecosystem Advisory
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Regulatory Compliance, Risk & Fraud Prevention
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Payments, Embedded Finance & Digital Lending Advisory
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-700 text-2xl font-bold mt-1">›</span>
                Wealth Management & Capital Markets Technology Advisory
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
