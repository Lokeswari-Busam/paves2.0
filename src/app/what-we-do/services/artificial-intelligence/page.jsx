"use client";

import Image from "next/image";
import ShapeDivider from "@/app/components/ShapeDivider";

export default function ArtificialIntelligence() {
  return (
    <main className="bg-white min-h-screen">

      {/* 🔹 HERO SECTION */}
      <div className="relative w-full h-[340px] md:h-[400px] bg-white overflow-hidden">
        {/* LEFT TEXT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2a3990]">
              Artificial Intelligence
            </h1>
            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; What We Do &gt; Artificial Intelligence
            </p>
          </div>
        </div>

        {/* BACKGROUND SHAPES */}
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

      {/* 🔹 AI CONTENT SECTION (CENTERED POINTS ONLY) */}
      <section className="py-20 bg-[#2a3990] text-center">
        <div className="container mx-auto px-6 md:px-20 max-w-5xl">
          <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">
            Future with AI, Generative AI & Agentic AI
          </h2>

          <p className="text-white text-lg leading-relaxed mb-10">
            At Paves Technologies, we don’t just integrate AI — we redefine how businesses innovate,
            automate, and scale in an AI-first world.
          </p>

          <h3 className="text-3xl font-semibold text-primary mb-10">
            AI Solutions: Intelligence That Drives Business Growth
          </h3>

          {/* AI OFFERINGS */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-13 h-13 mx-auto rounded-full bg-primary text-white text-2xl font-bold mb-4">
                01
              </div>
              <h4 className="text-xl font-semibold text-[#2a3990] mb-3">
                Intelligent Automation
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Transforming Finance by harnessing AI for Intelligent Automation and Unprecedented Efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-13 h-13 mx-auto rounded-full bg-primary text-white text-2xl font-bold mb-4">
                02
              </div>
              <h4 className="text-xl font-semibold text-[#2a3990] mb-3">
                Predictive Analysis
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Leveraging AI for Data-Driven Insights and Strategic Financial Decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-13 h-13 mx-auto rounded-full bg-primary text-white text-2xl font-bold mb-4">
                03
              </div>
              <h4 className="text-xl font-semibold text-[#2a3990] mb-3">
                AI for Financial Services
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Revolutionizing Finance by unleashing the Power of AI for Enhanced Services and Innovation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 🔹 WHY PAVES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-5xl md:text-45xl font-bold text-indigo-900 mb-10">
            Why Paves Technologies?
          </h2>

          {/* TWO COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 text-left max-w-6xl mx-auto mb-15">
            <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="text-primary font-bold">&gt;</span>{" "}
                <span className="font-semibold text-primary">AI-First by Design —</span> AI is not an add-on; it’s the foundation of everything we do.
              </p>
              <p>
                <span className="text-primary font-bold">&gt;</span>{" "}
                <span className="font-semibold text-primary">Industry Expertise —</span> Deep domain knowledge in banking, payments, and financial services.
              </p>
            </div>

            <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="text-primary font-bold ">&gt;</span>{" "}
                <span className="font-semibold text-primary ">Scalable, Secure AI Solutions —</span> Built for performance, security, and compliance.
              </p>
              <p>
                <span className="text-primary font-bold">&gt;</span>{" "}
                <span className="font-semibold text-primary">End-to-End AI Integration —</span> From automation to fully autonomous AI-powered operations.
              </p>
            </div>
          </div>

          {/* IMAGES BELOW */}
          <div className="flex justify-center gap-12 mt-25 flex-wrap  mb-10">
            <div className="relative w-64 h-50 md:w-80 md:h-52">
              <Image
                src="/assets/futuristic-scene-with-high-tech-robot-used-construction-industry.jpg"
                alt="AI Concept 1"
                fill
                className="object-cover  shadow-md"
              />
            </div>
            <div className="relative w-64 h-40 md:w-80 md:h-52">
              <Image
                src="/assets/close-up-man-robotic-process-automation-concept.jpg"
                alt="AI Concept 2"
                fill
                className="object-cover  shadow-md"
              />
            </div>
            <div className="relative w-64 h-40 md:w-80 md:h-52">
              <Image
                src="/assets/qualified-technicians-brainstorm-ways-use-ai-cognitive-computing-extract-usable-information-from-complex-data-team-specialists-implement-artificial-intelligence-process-massive-datasets.jpg"
                alt="AI Concept 3"
                fill
                className="object-cover  shadow-md"
              />
            </div>
          </div>

          <p className="mt-14 text-lg font-bold  text-[#2a3990]">
            Let’s build the future—smarter, faster, and AI-driven.
          </p>
        </div>
      </section>
    </main>
  );
}


