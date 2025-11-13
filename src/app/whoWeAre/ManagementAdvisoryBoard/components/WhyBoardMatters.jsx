"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhyBoardMatters() {
  const sections = [
    {
      title: "Why Our Advisory Board Matters to Our Customers",
      points: [
        "Strategic Guidance from Industry Veterans",
        "Deep Domain Expertise",
        "A Vision for Innovation",
        "Ensuring Customer Success",
      ],
      bg: "from-indigo-50 to-indigo-100",
      arrowColor: "text-pink-700",
      textColor: "text-indigo-900",
      image: "/assets/business-people-meeting.jpg",
    },
    {
      title: "How Our Advisory Board Impacts Paves Technologies",
      points: [
        "Bridging Strategy and Execution",
        "Expanding Market Relevance",
        "Strengthening Thought Leadership",
      ],
      bg: "from-pink-50 to-rose-100",
      arrowColor: "text-pink-700",
      textColor: "text-rose-900",
      image: "/assets/business-corporate-technology-people-graphic-concept.jpg",
    },
    {
      title: "Why Customers Trust Our Advisory Board",
      points: [
        "Customer-Centric Expertise",
        "A Commitment to Excellence",
        "Innovating for the Future",
      ],
      bg: "from-indigo-50 to-indigo-100",
      arrowColor: "text-pink-700",
      textColor: "text-indigo-900",
      image: "/assets/business-data-analysis-strategy-marketing-graph-concept.jpg",
    },
  ];

  return (
    <main className="flex flex-col w-full overflow-hidden">
      {sections.map((section, idx) => (
        <section
          key={idx}
          className={`py-20 px-6 md:px-16 bg-gradient-to-r ${section.bg}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Alternating layout */}
            <div
              className={`flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-2xl overflow-hidden ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* Text side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 text-left">
                <h2
                  className={`text-2xl md:text-3xl font-semibold ${section.textColor} mb-5`}
                >
                  {section.title}
                </h2>

                <ul className="space-y-3">
                  {section.points.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-800 text-lg leading-snug"
                    >
                      <ArrowRight
                        className={`w-5 h-5 ${section.arrowColor} mt-1 flex-shrink-0`}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <div className="relative w-full md:w-1/2 h-60 md:h-80">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>
      ))}
    </main>
  );
}
