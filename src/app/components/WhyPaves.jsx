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
    const newTimer = setTimeout(() => setActiveCard(null), 3000);
    setTimer(newTimer);
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 relative bg-[#f0f5ff] overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,57,144,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(42,57,144,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        {/* Badge + Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16"
        >
          <div className="inline-block px-6 py-2 border-2 border-[#2a3990] text-[#2a3990] uppercase tracking-widest text-[11px] font-bold mb-5">
            Why Choose Us
          </div>

          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-sm bg-[#2a3990] rotate-45 flex-shrink-0" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2a3990]">
              Why <span className="text-blue-600">Paves</span>
            </h2>
            <div className="w-3 h-3 rounded-sm bg-[#2a3990] rotate-45 flex-shrink-0" />
          </div>

          <div className="h-0.5 w-16 bg-blue-500 rounded-full mx-auto mt-3 mb-4" />

          <p className="text-base sm:text-lg text-[#2a3990]/75 max-w-2xl mx-auto">
            Explore our values and solutions that drive innovation and impact.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 place-items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center w-full max-w-sm sm:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Large faded index number */}
              <div className="absolute -top-5 right-0 select-none pointer-events-none text-[5rem] font-extrabold text-[#2a3990] opacity-[0.06] leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Card Heading */}
              <h3 className="text-base sm:text-lg font-bold text-[#2a3990] mb-3 text-center px-2 relative z-10">
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

              {/* Accent underline */}
              <div className="mt-3 h-0.5 w-10 bg-blue-500 rounded-full opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ image, title, desc, flipped, onClick }) {
  return (
    <div
      className="w-full max-w-[240px] xs:max-w-[260px] h-[240px] xs:h-[260px] sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 cursor-pointer"
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
          className="absolute inset-0 rounded-xl overflow-hidden shadow-md border border-[#2a3990]/15 hover:shadow-xl hover:ring-2 hover:ring-[#2a3990]/30 transition-all duration-300 bg-white"
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
          className="absolute inset-0 rounded-xl overflow-hidden shadow-md border border-[#2a3990] bg-gradient-to-br from-[#2a3990] to-[#1e2870] p-5 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
            {title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
            {desc}
          </p>
          <div className="mt-4 h-0.5 w-10 bg-blue-300 rounded-full opacity-70" />
        </div>
      </motion.div>
    </div>
  );
}
