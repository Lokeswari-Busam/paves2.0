"use client";
import Image from "next/image";

export default function CloudAndDevopsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
     

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <p className="text-lg leading-relaxed text-gray-700 mb-10">
          Whether you’re in banking, payments, capital markets, wealth
          management, or fintech, our cloud-native approach helps you scale
          seamlessly, optimize costs, and drive operational excellence.
        </p>

        <h2 className="text-3xl font-bold text-[#2a3990] mb-8">
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
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-white font-semibold rounded-full shadow">
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
            <h2 className="text-3xl font-bold text-[#2a3990] mb-10">
              Why Choose Paves Technologies for Cloud & DevOps?
            </h2>

            <ul className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="text-primary mr-4 text-3xl font-bold">›</span>
                Cloud-Native Transformation & Infrastructure Modernization
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 text-3xl font-bold">›</span>
                End-to-End DevOps Automation
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 text-3xl font-bold">›</span>
                Cloud Security & Regulatory Compliance
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 text-3xl font-bold">›</span>
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

    </div>
  );
}
