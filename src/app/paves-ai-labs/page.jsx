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
            "url('https://assets.everspringpartners.com/dims4/default/4370b69/2147483647/strip/true/crop/1027x360+0+0/resize/1600x560!/format/webp/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.us-east-1.amazonaws.com%2Fdf%2Fee%2F106592af4d508f76b29662e456db%2Fadvanced-ai.jpg')",
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
        <h2 className="text-5xl font-bold text-center mb-10 text-[#2a3990]">
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
        <h2 className="text-5xl font-bold text-center mb-10 text-[#2a3990]">
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
                <h3 className="text-xl font-semibold text-[#2a3990]">
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
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2a3990]">
          Innovation Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-[#2a3990]">
              AI-Enhanced Productivity
            </h3>
            <p className="mt-4 text-gray-700">
              We design AI-powered tools that empower teams to do more with
              less—automating repetitive tasks and enabling faster decision
              cycles.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-[#2a3990]">
              Cognitive Process Automation
            </h3>
            <p className="mt-4 text-gray-700">
              Blending AI with enterprise workflows to enable systems that
              understand, learn, and adapt—driving intelligent automation at
              scale.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-[#2a3990]">
              AI for Customer Engagement
            </h3>
            <p className="mt-4 text-gray-700">
              Creating personalized, conversational, and predictive customer
              journeys powered by advanced AI models.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-[#2a3990]">
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
      {/* <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="bg-[#051029] text-white py-24 px-6"
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
      </section> */}

      {/* <Footer /> */}
    </>
  );
}
