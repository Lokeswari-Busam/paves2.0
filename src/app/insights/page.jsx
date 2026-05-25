"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import { Navigation } from "@/components/navbar";
//import { Footer } from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function InsightsPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      if (!sec) return;
      gsap.from(sec, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <>
      {/* <Navigation /> */}

      {/* Hero */}
      <section
        className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center text-center px-4 sm:px-6"
        style={{
          backgroundImage: "url('https://myvistage.com/hub/wp-content/uploads/sites/4/2024/12/Inspirational-leadership-featured-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Insights & Thought Leadership</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300">
            We stand at the forefront of change, delivering insights, strategies, and solutions that help businesses thrive in an AI-first era.  
          </p>
        </motion.div>
      </section>

      {/* Content Intro */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-10 text-[#2a3990]">Why Our Insights Matter</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          At Paves Technologies, our Thought Leadership hub brings together deep expertise in AI, cloud, fintech and enterprise transformation.  
          We share pioneering research, executive perspectives, and forward-looking commentary to empower decision makers and technologists.  
        </p>
      </section>

      {/* Latest Articles Grid */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="pb-12 sm:pb-20 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-[#2a3990]">Latest Articles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Replace the following sample items with real articles fetched or static placeholders */}
          {[
            {
              title: "AI-Powered Banking: The Next Frontier",
              snippet: "Explore how banking is being transformed by machine learning, automation and real-time data intelligence.",
              img: "https://i0.wp.com/swisscognitive.ch/wp-content/uploads/2021/07/ai-in-banking-and-insurance-use-cases.jpeg?w=1440&ssl=1",
              link: "/insights/ai-powered-banking",
            },
            {
              title: "Embedding Trust in Next-Gen Payment Systems",
              snippet: "Why building trust in payments infrastructure is critical as digital ecosystems expand globally.",
              img: "https://hbr.org/resources/images/article_assets/2024/08/Forrester-HBR_AI-Trust-Image-1-1024x576.png",
              link: "/insights/embed-trust-payments",
            },
            {
              title: "Generative AI for Enterprise Services",
              snippet: "How generative models are being used to automate enterprise workflows and deliver customer-centric experiences.",
              img: "https://www.mindinventory.com/blog/wp-content/uploads/2025/03/the-role-of-ai-in-enterprise.webp",
              link: "/insights/gen-ai-enterprise",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              className="group block overflow-hidden rounded-2xl bg-white shadow-lg border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2a3990] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.snippet}</p>
                <div className="mt-4 text-[#d23369] font-semibold">Read more →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
