"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyPavesSection() {
  const items = [
    {
      title: "Born from Innovation",
      desc: "Founded by technologists with a passion for solving complex challenges, Paves Technologies emerged from a vision to create intelligent solutions that drive business transformation.",
      image: "/assets/CapMarkets.png",
    },
    {
      title: "Our Mission",
      desc: "Driving technology adoption through smart engineering, strategic consulting, and scalable cloud solutions that empower businesses to thrive in the digital age.",
      image: "/assets/cyber-ai-threat.png",
    },
    {
      title: "Our Promise",
      desc: "Reliable delivery, creative problem-solving, and transparent communication. We partner with you at every step, ensuring your success is our success.",
      image: "/assets/digital-banking.png",
    },
    {
      title: "Our Vision",
      desc: "To become a trusted global IT partner for the next generation, enabling organizations to innovate fearlessly and scale sustainably.",
      image: "/assets/iam-hero.png",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#E3F4FF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center text-[#0A2A43]"
        >
          Why <span className="text-[#C83267]">Paves</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-center mt-4 text-[#24516B]"
        >
          Hover to explore our values that drive excellence and innovation.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.07 }}
              className="relative h-80 bg-white rounded-2xl overflow-hidden shadow-lg
                         cursor-pointer group transition-all duration-500"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-100 group-hover:opacity-10
                           transition-all duration-700 ease-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700"></div>

              {/* Content Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">

                {/* Title */}
                <h3
                  className="text-2xl font-extrabold text-[#0A2A43]
                             group-hover:scale-[1.10] group-hover:text-[#C83267]
                             transition-all duration-500 drop-shadow"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#24516B] mt-3 text-sm leading-relaxed
                             opacity-50 group-hover:opacity-100
                             transition-all duration-500"
                >
                  {item.desc}
                </p>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                           transition duration-700 pointer-events-none
                           shadow-[0_0_35px_5px_rgba(200,50,103,0.35)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
