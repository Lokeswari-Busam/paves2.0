"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function WhyPavesSection() {
  const items = [
    {
      heading: "Always Ahead of the Curve",
      title: "Innovating Financial Services",
      desc: "Our AI-first solutions are revolutionizing the financial services landscape, empowering institutions to operate faster, smarter, and more efficiently.",
      image: "/assets/man-walks-through-tunnel-with-light-ceiling.jpg",
    },
    {
      heading: "A Culture Built to Innovate",
      title: "Trusted Innovation",
      desc: "The financial world thrives on trust and innovation. At Paves Technologies, we've built a culture that embraces both, ensuring that every solution.",
      image: "/assets/creative-designers-team-working-project.jpg",
    },
    {
      heading: "Transformative Solutions",
      title: "Impactful Results",
      desc: "Whether it's enabling instant payments, embedding financial services into everyday ecosystems, or creating AI-driven capital market strategies.",
      image: "/assets/people-office-analyzing-checking-finance-graphs.jpg",
    },
    {
      heading: "Human-Driven Intelligence",
      title: "Meaningful Impact",
      desc: "At the heart of AI-driven innovation is human intelligence. Paves Technologies believes in AI that augments human decision-making.",
      image: "/assets/qualified-technicians-brainstorm-ways-use-ai-cognitive-computing-extract-usable-information-from-complex-data-team-specialists-implement-artificial-intelligence-process-massive-datasets.jpg",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);
  const [timer, setTimer] = useState(null);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
      return;
    }
    setActiveCard(index);

    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setActiveCard(null);
    }, 3000);
    setTimer(newTimer);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative bg-[#E3F4FF] overflow-hidden">
      {/* Background Shapes */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="shape-grad" x1="10%" y1="10%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#a1204c" />
            <stop offset="100%" stopColor="#501128" />
          </linearGradient>
        </defs>

        <rect width="1440" height="800" fill="url(#shape-grad)" opacity="0" />

        <circle cx="1200" cy="180" r="260" fill="#8b2c5f" opacity="0.04" />
        <circle cx="300" cy="650" r="220" fill="#7a234f" opacity="0.05" />
        <circle cx="700" cy="400" r="180" fill="#9c2f65" opacity="0.04" />
        <circle cx="100" cy="200" r="150" fill="#b04178" opacity="0.05" />
        <circle cx="1300" cy="600" r="200" fill="#a53c70" opacity="0.05" />

        <polygon points="400,0 500,300 600,0" fill="#b34a7a" opacity="0.05" />
        <polygon
          points="1000,500 1100,800 1200,500"
          fill="#c2528b"
          opacity="0.05"
        />
        <polygon points="600,600 700,800 800,600" fill="#d76ea1" opacity="0.06" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#2a3990]"
        >
          Why <span className="text-primary">Paves</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-center mt-3 sm:mt-4 text-[#2a3990] max-w-3xl mx-auto px-4"
        >
          Explore our values and solutions that drive innovation and impact.
        </motion.p>

        {/* Cards Wrapper */}
        <div
          className="
          mt-10 sm:mt-12 md:mt-16 lg:mt-20
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-8 sm:gap-6 md:gap-8
          place-items-center
        "
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center w-full max-w-sm sm:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Card Heading */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2a3990] mb-3 sm:mb-4 text-center px-2">
                {item.heading}
              </h3>

              {/* Flip Card */}
              <FlipCard
                title={item.title}
                desc={item.desc}
                image={item.image}
                flipped={activeCard === index}
                onClick={() => handleCardClick(index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Flip Card Component
function FlipCard({ image, title, desc, flipped, onClick }) {
  return (
    <div
      className="w-full max-w-[240px] xs:max-w-[260px] h-[240px] xs:h-[260px] sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 perspective cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 256px"
            />
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#2a3990] to-[#1e2870] p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}