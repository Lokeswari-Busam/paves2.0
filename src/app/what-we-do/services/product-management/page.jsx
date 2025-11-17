"use client";
import Image from "next/image";
import { ShieldCheck, Users, RefreshCw, Target } from "lucide-react";

export default function ProductManagementPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-[400px] md:h-[350px] bg-white overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Product Management & Full-Stack Engineering
            </h1>
            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; What We Do &gt; Product Management
            </p>
          </div>
        </div>

        {/* RIGHT-SIDE DECORATIVE SHAPES */}
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-10">
          <svg
            className="absolute left-[-25%] top-[18%] w-[200%] h-[160%] opacity-[0.45]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0 260 C300 140, 600 340, 950 250 C1300 160, 1650 310, 2000 230 L2000 600 L0 600 Z"
              fill="#E6ECFF"
            />
          </svg>

          <svg
            className="absolute left-[-22%] top-[22%] w-[200%] h-[160%] opacity-[0.7]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
          >
            <path
              d="M0 310 C350 180, 700 290, 1050 260 C1400 220, 1750 330, 2100 260 L2000 600 L0 600 Z"
              fill="#C9D4FF"
            />
          </svg>

          <div className="absolute right-10 top-14 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute right-32 bottom-16 w-20 h-20 bg-blue-500/40 rounded-full blur-xl"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          Our expertise in secure, scalable, and customer-centric platforms empowers financial institutions to innovate, streamline operations, and enhance customer experiences.
        </p>

        {/* === PRODUCT MANAGEMENT SECTION === */}
        <h2 className="text-3xl font-bold text-indigo-900 mb-12 text-center">
          Product Management: Tailored Solutions for Financial Innovation
        </h2>

        {/* === NEW 4-CARD SECTION === */}
        <div className="flex flex-wrap justify-between gap-10 mb-16">
          {/* Card 1 */}
          <div className="flex-1 min-w-[250px]   p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <ShieldCheck className="text-pink-700 w-10 h-10 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900 text-indigo-900">
              Regulatory-Compliant Product Strategies
            </h3>
            <p className="text-gray-700 text-sm">
              Design and implement products that adhere to PCI DSS, PSD2, GDPR, and AML standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 min-w-[250px]  p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <Users className="text-pink-700 w-10 h-10 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-900 text-indigo-900">
              Customer-Centric Design
            </h3>
            <p className="text-gray-700 text-sm">
              Use customer insights to prioritize features and create intuitive digital experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 min-w-[250px] p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <RefreshCw className="text-pink-700 w-10 h-10 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-700 text-indigo-900">
              Agile Development for Financial Products
            </h3>
            <p className="text-gray-700 text-sm">
              Adopt iterative workflows to quickly adapt to changing market demands.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex-1 min-w-[250px]  p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <Target className="text-pink-700 w-10 h-10 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-gray-700 text-indigo-900">
              End-to-End Product Strategy
            </h3>
            <p className="text-gray-700 text-sm">
              Align business goals with product vision through research-driven roadmaps and strategies.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <section className="w-full bg-white flex flex-col md:flex-row items-stretch">
          {/* Left Column - Key Features List */}
          <div className="flex-1 p-12 flex flex-col justify-center bg-blue-50">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6 ">
              Key Features of Our Solutions for Fintech, Banking, and Payments
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg">
              {[
                "Regulatory Compliance",
                "Scalable Architectures",
                "Secure Infrastructure",
                "Customer-Centric Design",
                "Agile Product Development",
                "Integrated DevOps",
                "Data Security",
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pink-700 font-bold mr-3 text-2xl">›</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Full Image */}
          <div className="flex-1 relative h-[500px] md:h-auto">
            <Image
              src="/images/fintech-solutions.jpg"
              alt="Fintech Product Management"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* ================= WHY PAVES SECTION ================= */}
        <section className="py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-10">
            Why Paves Technologies?
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Fintech Expertise",
              "Product Management Excellence",
              "Modern Tech Stack",
              "End-to-End Support",
              "Future-Ready Solutions",
              "Collaborative Approach",
            ].map((point, index) => (
              <li
                key={index}
                className="bg-blue-50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl px-8 py-6 flex items-center border border-blue-100"
              >
                <span className="text-pink-700 text-3xl font-bold mr-4 flex-shrink-0 w-6 text-center">›</span>
                <p className="text-lg text-gray-800 font-medium">{point}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ================= EMAIL CTA SECTION ================= */}
      <div className="bg-[#0F1E63] text-white text-center py-20 px-6 mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build the Future of Finance Together
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          We deliver secure, scalable, and customer-focused solutions that empower your business to succeed in the fast-evolving financial and technology landscape.
        </p>
        <a
          href="mailto:info@pavestechnologies.com"
          className="inline-block bg-white text-[#0F1E63] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-100 transition"
        >
          Send Us an Email
        </a>
      </div>
    </div>
  );
}
