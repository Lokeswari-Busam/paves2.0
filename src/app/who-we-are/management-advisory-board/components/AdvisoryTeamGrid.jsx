"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const members = [
  { name: "Sambi R Eada", title: "Founder and CEO", region: "Management", image: "/assets/who-we-are/CEO-removebg-preview.png" },

  { name: "Oliver Chang", title: "Advisory Board", region: "Americas", image: "/assets/who-we-are/oliver chang.png" },
  { name: "Vikram Ramani", title: "Advisory Board", region: "Americas", image: "/assets/who-we-are/vikram ramani.png" },
  { name: "Satyavan Panda", title: "Advisory Board", region: "Americas", image: "/assets/who-we-are/satyavan panda.png" },
  { name: "Uday Shetgeri", title: "Advisory Board", region: "Americas", image: "/assets/who-we-are/uday shetgeri.png" },
  { name: "Puneet Chandra", title: "Advisory Board", region: "Americas", image: "/assets/who-we-are/puneet chandra.png" },

  { name: "Kamal Kant", title: "Advisory Board", region: "Middle East & Africa", image: "/assets/who-we-are/kamal kant.png" },
];

// Group by region
const groupedMembers = members.reduce((acc, member) => {
  acc[member.region] = acc[member.region] || [];
  acc[member.region].push(member);
  return acc;
}, {});

export default function AdvisoryTeamGrid() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-[#2a3990]">

      {/* ===== SVG BACKGROUND ===== */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e1b3f" />
            <stop offset="100%" stopColor="#1b2c5e" />
          </linearGradient>
        </defs>

        <rect width="1440" height="800" fill="url(#grad1)" />

        <path
          d="M200 0 L600 800 L1000 0"
          stroke="#3b5998"
          strokeWidth="80"
          opacity="0.15"
          fill="none"
        />

        <path
          d="M0 400 L1440 600"
          stroke="#4c6edb"
          strokeWidth="120"
          opacity="0.1"
          fill="none"
        />
      </svg>

      {/* ===== CONTENT ===== */}
      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 md:mb-12">
          Our Management & Advisory Board
        </h2>

        {Object.entries(groupedMembers).map(([region, regionMembers], idx) => (
          <RegionSection
            key={region}
            region={region}
            members={regionMembers}
            showDivider={idx !== Object.keys(groupedMembers).length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}

/* ============================
      REGION SECTION
============================= */
function RegionSection({ region, members, showDivider }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -500 : 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div className="h-[2px] w-8 sm:w-12 bg-pink-600 rounded-full"></div>
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-pink-400">{region}</h3>
        <div className="h-[2px] w-8 sm:w-12 bg-pink-600 rounded-full"></div>
      </div>

      {members.length === 1 ? (
        <div className="flex justify-center">
          <MemberCard {...members[0]} />
        </div>
      ) : (
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 sm:-left-5 md:-left-8 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 sm:p-3 rounded-full hover:bg-indigo-100 z-10"
          >
            <ChevronLeft className="text-indigo-700 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          {/* Cards Row */}
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-8 md:gap-10 overflow-x-auto scroll-smooth px-2 sm:px-4 md:px-6 hide-scrollbar"
          >
            {members.map((m, i) => (
              <MemberCard key={i} {...m} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 sm:-right-5 md:-right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 sm:p-3 rounded-full hover:bg-indigo-100 z-10"
          >
            <ChevronRight className="text-indigo-700 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </div>
      )}

      {showDivider && (
        <div className="mt-20 border-t border-indigo-300/40 w-full mx-auto"></div>
      )}
    </div>
  );
}

/* ============================
      MEMBER CARD
============================= */
function MemberCard({ name, title, image }) {
  return (
    <motion.div
      className="bg-white/90 backdrop-blur
                 w-[260px] h-[310px]
                 sm:w-[300px] sm:h-[360px]
                 md:w-[330px] md:h-[390px]
                 lg:w-[350px] lg:h-[400px]
                 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md
                 border border-indigo-100 hover:shadow-xl transition-transform
                 hover:-translate-y-2 flex flex-col items-center justify-center shrink-0"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative
                      w-44 h-44
                      sm:w-56 sm:h-56
                      md:w-64 md:h-64
                      lg:w-72 lg:h-72
                      mb-3 sm:mb-4 md:mb-5">
        <Image
          src={image || "/assets/default-user.png"}
          alt={name}
          fill
          className="object-cover rounded-full"
        />
      </div>

      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-900 mb-1">{name}</h4>
      <p className="text-gray-600 text-sm sm:text-base">{title}</p>
    </motion.div>
  );
}
