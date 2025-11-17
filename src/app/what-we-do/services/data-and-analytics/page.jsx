"use client";
import { Subtitles } from "lucide-react";
import Image from "next/image";

export default function DataAndAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[340px] md:h-[320px] bg-white overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Data & Analytics
            </h1>
            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; What We Do &gt; Data & Analytics
            </p>
          </div>
        </div>

        {/* RIGHT DECORATIVE SHAPES */}
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

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {/* Intro Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8">
          AI-Powered Data Solutions for Business Transformation
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-12">
          At Paves Technologies, we transform raw data into actionable
          intelligence using AI-driven analytics, machine learning, and
          real-time data processing. Whether you are in banking, payments,
          fintech, wealth management, capital markets, or digital enterprises,
          our data-driven solutions help you gain a competitive edge, optimize
          operations, and unlock new revenue streams.
        </p>

        {/* ===== THREE CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              title: "Data Science:",
              Subtitle:" Turning Data into Intelligence",
              points: [
                "Predictive Analytics",
                "AI and Machine Learning Models",
                "Natural Language Processing (NLP)",
                "Advanced Data Mining",
              ],
              image: "/images/data-science.jpg",
            },
            {
              title: "Data Engineering: ",
              Subtitle :"Building Scalable Data Foundations",     
              points: [
                "Data Pipeline Automation",
                "Cloud-Based Data Architecture",
                "Real-Time Data Streaming",
                "Data Quality and Governance",
              ],
              image: "/images/data-engineering.jpg",
            },
            {
              title: "Data Visualization & Analytics: ",
              Subtitle :"From Insights to Impact",   
              points: [
                "Interactive Dashboards",
                "Custom Reporting Solutions",
                "Data Storytelling",
                "Predictive & Prescriptive Analytics",
              ],
              image: "/images/data-visualization.jpg",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="rounded-xl mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-pink-700 mb-4">
                {card.title} {card.Subtitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== WHY PAVES SECTION ===== */}
        <div className="mt-16 ">
          <h2 className="text-4xl font-bold text-indigo-900 text-center mb-10">
            Why Paves Technologies?
          </h2>

     
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
            "Uncover new opportunities.",
            "Optimize operations.",
            "Enhance customer experiences.",
            "Make data-driven decisions with confidence.",
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



          <p className="text-center text-lg text-indigo-900 max-w-3xl mx-auto mt-12 font-bold">
            With a deep focus on scalability, accuracy, and user experience, we
            ensure that your data becomes your most valuable asset. Together, we
            unlock the full potential of your data for a smarter, more efficient
            future.
          </p>
        </div>
      </div>

      {/* ===== EMAIL SECTION ===== */}
      <div className="bg-[#0F1E63] text-white text-center py-20 px-6 mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Unlock Your Data’s Potential
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Partner with Paves Technologies to turn your data into actionable
          insights. From engineering to analytics, we deliver scalable, secure,
          and AI-powered data solutions for the future.
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
