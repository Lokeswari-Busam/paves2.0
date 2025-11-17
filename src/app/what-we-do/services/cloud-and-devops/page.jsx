"use client";
import Image from "next/image";

export default function CloudAndDevopsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[340px] md:h-[320px] bg-white overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Cloud & DevOps
            </h1>
            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; What We Do &gt; Cloud & DevOps
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
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          Whether you’re in banking, payments, capital markets, wealth
          management, or fintech, our cloud-native approach helps you scale
          seamlessly, optimize costs, and drive operational excellence.
        </p>

        <h2 className="text-3xl font-bold text-indigo-900 mb-8">
          Cloud Engineering & DevOps: Smarter, Faster, More Secure.
        </h2>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          At Paves Technologies, we integrate AI, automation, and DevOps best
          practices into cloud environments, enabling:
        </p>

        {/* ===== FOUR KEY POINTS ===== */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {[
            "Cloud-Native Transformation & Infrastructure Modernization",
            "End-to-End DevOps Automation",
            "Cloud Security & Regulatory Compliance",
            "Cloud Cost Optimization & AI-Powered Monitoring",
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-900 text-white font-semibold rounded-full shadow">
                {`0${index + 1}`}
              </div>
              <p className="text-lg text-gray-800 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        {/* ===== WHY PAVES SECTION (2-COLUMN) ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          {/* LEFT SIDE — TEXT LIST */}
          <div>
            <h2 className="text-3xl font-bold text-pink-700 mb-10">
              Why Choose Paves Technologies for Cloud & DevOps?
            </h2>

            <ul className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="text-pink-700 mr-4 text-3xl font-bold">›</span>
                Cloud-Native Transformation & Infrastructure Modernization
              </li>
              <li className="flex items-start">
                <span className="text-pink-700 mr-4 text-3xl font-bold">›</span>
                End-to-End DevOps Automation
              </li>
              <li className="flex items-start">
                <span className="text-pink-700 mr-4 text-3xl font-bold">›</span>
                Cloud Security & Regulatory Compliance
              </li>
              <li className="flex items-start">
                <span className="text-pink-700 mr-4 text-3xl font-bold">›</span>
                Cloud Cost Optimization & AI-Powered Monitoring
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/assets/3d-rendering-biorobots-concept.jpg"
              alt="Why Choose Paves Technologies"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* ===== EMAIL SECTION ===== */}
      <div className="bg-[#0F1E63] text-white text-center py-20 px-6 mt-16">
        <h2 className="text-3xl font-bold mb-6">Let’s Build Your Cloud Future</h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Partner with Paves Technologies to modernize your infrastructure,
          accelerate your software delivery, and secure your cloud environments.
          Together, we’ll create scalable, reliable, and agile systems that power
          your business for the future.
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
