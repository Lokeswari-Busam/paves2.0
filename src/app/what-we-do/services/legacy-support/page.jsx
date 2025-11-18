"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronsRight  , ArrowUpRight} from "lucide-react";

export default function LegacyModernizationPage() {
  return (
    <div className="bg-white text-gray-900">
     
      {/* --- Intro Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-pink-700 mb-4"
        >
          Re(AI)magining Legacy Systems for the Digital Era
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Paves Technologies, we help businesses modernize while maintaining
          stability, ensuring seamless transformation with AI-driven automation,
          cloud migration, and future-ready architectures.
        </p>
      </section>
        
        
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0F1E63] text-center mb-12">
          Product Excellence Pillars
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 w-[220px] hover:shadow-lg transition-shadow duration-300">
            <ArrowUpRight className="text-indigo-900 mb-4 w-10 h-10" size={48} />
            <h3 className="font-semibold text-lg text-pink-700">
              Regulatory-Compliant Product Strategies
            </h3>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 w-[220px] hover:shadow-lg transition-shadow duration-300">
            <ArrowUpRight className="text-indigo-900 mb-4 w-10 h-10" size={48} />
            <h3 className="font-semibold text-lg text-pink-700">
              Customer-Centric Design
            </h3>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 w-[220px] hover:shadow-lg transition-shadow duration-300">
            <ArrowUpRight className="text-indigo-900 mb-4 w-10 h-10" size={48} />
            <h3 className="font-semibold text-lg text-pink-700">
              Agile Development for Financial Products
            </h3>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 w-[220px] hover:shadow-lg transition-shadow duration-300">
            <ArrowUpRight className="text-indigo-900 mb-4 w-10 h-10 rounded-full" size={48} />
            <h3 className="font-semibold text-lg text-pink-700">
              End-to-End Product Strategy
            </h3>
          </div>
        </div>
      </div>
    </section>




      {/* --- Main Content Section --- */}
     <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* --- Column 1 --- */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
          Legacy System Support: Keeping Your Core Running
        </h3>
        <ul className="space-y-3 text-gray-800 text-lg">
          {[
            "AI-Driven System Monitoring & Optimization",
            "Mainframe & Monolithic System Support",
            "Automated Documentation & Knowledge Retention",
            "Seamless API & System Integration",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-pink-600 text-xl font-bold">›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* --- Column 2 --- */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
          Legacy Modernization: Transitioning to Future-Ready Infrastructure
        </h3>
        <ul className="space-y-3 text-gray-800 text-lg">
          {[
            "Cloud & Hybrid Migration",
            "Microservices & API Enablement",
            "AI-Powered Code Refactoring",
            "Data Modernization & AI Integration",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-pink-700 text-xl font-bold">›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* --- Column 3 --- */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
          Intelligent Automation & Optimization
        </h3>
        <ul className="space-y-3 text-gray-800 text-lg">
          {[
            "RPA for Legacy Systems",
            "Predictive Maintenance & Performance Monitoring",
            "Low-Code/No-Code Solutions",
            "Cybersecurity & Compliance",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-pink-700 text-xl font-bold">›</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
 <section className="py-16 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-10">
            Why Paves Technologies for Legacy Support & Modernization?
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
                "AI-First Approach",
              "Scalable Architectures",
              "Secure Infrastructure",
              "Customer-Centric Design",
             
            ].map((point, index) => (
              <li
                key={index}
                className="bg-blue-50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl px-8 py-6 flex items-center border border-blue-100"
              >
                <span className="text-indigo-900 text-3xl font-bold mr-4 flex-shrink-0 w-6 text-center">›</span>
                <p className="text-lg text-gray-800 font-medium">{point}</p>
              </li>
            ))}
          </ul>
        </section>

      {/* --- Final CTA Section --- */}
      <section className="bg-[#0F1E63] text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Re(AI)magine IT with Paves Technologies</h2>
        <p className="text-lg mb-8">
          Let’s modernize, automate, and future-proof your business — smarter, faster, and AI-driven.
        </p>
        <button className="bg-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
}
