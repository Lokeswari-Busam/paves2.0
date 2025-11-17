"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";


export default function EnterprisePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* ---------- HEADER SECTION ---------- */}
      <div className="relative w-full h-[340px] md:h-[320px] bg-white overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Enterprise And Automation
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

      {/* ---------- INTRO SECTION ---------- */}
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-[#0F1E63] mb-4"
        >
          Re(AI)magining Business Efficiency with Intelligent Automation
        </motion.h2>
        <p className="text-lg text-gray-700">
          At Paves Technologies, we help enterprises automate, optimize, and
          scale with AI-powered automation solutions.
        </p>
      </section>

      {/* ---------- SECTION 1 ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Enterprise Automation: AI-Driven Scalability & Efficiency
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We integrate AI, RPA, and workflow automation to create intelligent,
            self-optimizing ecosystems across IT, finance, HR, and operations.
          </p>
          <div className="space-y-3">
            {[
              "AI-Powered Workflow Automation",
              "Enterprise-Wide RPA",
              "Hyperautomation",
              "Enterprise AI & Decision Intelligence",
              "Legacy System Modernization",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-lg">
                <ChevronsRight className="text-indigo-900 mt-1" size={22} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/images/enterprise-automation.jpg"
            alt="Enterprise Automation"
            width={500}
            height={400}
            className=" shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* ---------- SECTION 2 ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-2 md:order-1"
        >
          <Image
            src="/images/rpa-automation.jpg"
            alt="Robotic Process Automation"
            width={500}
            height={400}
            className=" shadow-lg object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Robotic Process Automation (RPA): Intelligent, Scalable, and Efficient
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Eliminate repetitive tasks and boost productivity with AI-driven RPA.
          </p>
          <div className="space-y-3">
            {[
              "AI-Powered Process Automation",
              "Intelligent Bots & Workflows",
              "RPA for Financial Services",
              "End-to-End Automation",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-lg">
                <ChevronsRight className="text-pink-700 mt-1" size={22} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SECTION 3 ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            No-Code & Low-Code Platforms: Accelerating Innovation Without Complexity
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Build and deploy business applications faster with no-code and low-code
            solutions that integrate seamlessly.
          </p>
          <div className="space-y-3">
            {[
              "Rapid Application Development",
              "Process Automation with No-Code",
              "Seamless Integration",
              "AI-Driven Business Apps",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-lg">
                <ChevronsRight className="text-indigo-900 mt-1" size={22} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/images/lowcode-platform.jpg"
          alt="Low Code Platform"
          width={500}
          height={400}
          className=" shadow-lg object-cover"
        />
      </section>

      {/* ---------- SECTION 4 ---------- */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/business-optimization.jpg"
          alt="Business Process Optimization"
          width={500}
          height={400}
          className=" shadow-lg object-cover order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Business Process Optimization: AI-Powered Transformation
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We re(AI)magine business efficiency by leveraging automation,
            analytics, and AI to streamline workflows, improve accuracy, and
            drive operational excellence.
          </p>
          <div className="space-y-3">
            {[
              "AI-Driven Workflow Automation",
              "Process Mining & Analytics",
              "Hyperautomation Strategy",
              "Intelligent Document Processing",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-lg">
                <ChevronsRight className="text-pink-600 mt-1" size={22} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
