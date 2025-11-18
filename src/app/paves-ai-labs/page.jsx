"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import { Navigation } from "@/components/navbar";
//import { Footer } from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function PavesAILabs() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      if (!sec) return;
      gsap.from(sec, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <>
      {/* <Navigation /> */}

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,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')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-md">
            Paves AI Labs
          </h1>

          <p className="text-gray-200 mt-6 text-lg md:text-xl leading-relaxed">
            Innovating with AI to empower employees, customers, and partners —
            driving intelligent transformation for modern enterprises.
          </p>

          <button className="mt-8 px-8 py-3 bg-[#d23369] text-white text-lg rounded-full hover:bg-[#86163c] transition-all">
            Explore Our AI Vision
          </button>
        </motion.div>
      </section>

      {/* ================= WHAT IS AI LABS ================= */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          What is Paves AI Labs?
        </h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg leading-relaxed">
          Paves AI Labs is the innovation hub of Paves Technologies dedicated to
          pioneering advancements in Artificial Intelligence. We focus on
          developing cutting-edge AI solutions that enhance digital ecosystems,
          streamline operations, elevate customer experiences, and bring
          measurable value across industries.
        </p>
      </section>

      {/* ================= KEY FOCUS AREAS ================= */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="bg-[#f8f9ff] py-24 px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Key Focus Areas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Applied AI for Businesses",
              desc:
                "Building intelligent systems that optimize workflows, automate tasks, and power decision-making across critical enterprise functions.",
              img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://pavestechnologies.com/wp-content/uploads/2024/07/applied-ai.jpg",
            },
            {
              title: "Data-Driven Intelligence",
              desc:
                "Leveraging enterprise data to power predictive analytics, pattern recognition, and actionable insights.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_ZcLPZXa28L5j-TNaogNI7IqMZSmnjlInOTrxksa7WOzm43g-hIkolMo6S80QohbX3o&usqp=CAU",
            },
            {
              title: "Next-Gen AI Engineering",
              desc:
                "Developing custom LLMs, RAG pipelines, and domain-focused AI models aligned with industry requirements.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DAkbM1UwkNN1cBrh9Aax0P0Mt_n6PV8MJZt-DQ66RqNVYCDpvfXJoZcKHnhTJN3S50A&usqp=CAU",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl bg-white border shadow-lg"
            >
              <img src={card.img} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 mt-3">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INNOVATION INITIATIVES ================= */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Innovation Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-gray-900">
              AI-Enhanced Productivity
            </h3>
            <p className="mt-4 text-gray-700">
              We design AI-powered tools that empower teams to do more with
              less—automating repetitive tasks and enabling faster decision
              cycles.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-gray-900">
              Cognitive Process Automation
            </h3>
            <p className="mt-4 text-gray-700">
              Blending AI with enterprise workflows to enable systems that
              understand, learn, and adapt—driving intelligent automation at
              scale.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-gray-900">
              AI for Customer Engagement
            </h3>
            <p className="mt-4 text-gray-700">
              Creating personalized, conversational, and predictive customer
              journeys powered by advanced AI models.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-gray-900">
              Enterprise LLM Integrations
            </h3>
            <p className="mt-4 text-gray-700">
              Helping enterprises deploy secure, domain-tuned LLMs while
              ensuring governance, reliability, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="bg-[#0f172a] text-white py-24 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Our Vision for AI-Driven Enterprises
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Paves AI Labs aims to create a world where businesses operate with
            intelligence at their core—where every process, decision, and
            customer interaction is enhanced through the power of Artificial
            Intelligence.
          </p>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
