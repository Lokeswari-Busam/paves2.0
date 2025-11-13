"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, Compass, Handshake, Rocket } from "lucide-react";

const subsections = [
  {
    icon: Lightbulb,
    title: "Born from Innovation",
    description:
      "Founded by technologists with a passion for solving complex challenges, Paves Technologies emerged from a vision to create intelligent solutions that drive business transformation.",
  },
  {
    icon: Compass,
    title: "Our Mission",
    description:
      "Driving technology adoption through smart engineering, strategic consulting, and scalable cloud solutions that empower businesses to thrive in the digital age.",
  },
  {
    icon: Handshake,
    title: "Our Promise",
    description:
      "Reliable delivery, creative problem-solving, and transparent communication. We partner with you at every step, ensuring your success is our success.",
  },
  {
    icon: Rocket,
    title: "Our Vision",
    description:
      "To become a trusted global IT partner for the next generation, enabling organizations to innovate fearlessly and scale sustainably.",
  },
];

export function WhyPavesSection() {
  const [visibleItems, setVisibleItems] = useState([]);
  const whyPavesSectionRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const sectionRef = useRef(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let cleanup;

    import("../animations/whyPavesAnimation").then(
      ({ initWhyPavesAnimation }) => {
        cleanup = initWhyPavesAnimation({
          whyPavesSectionRef,
          titleRef,
          subTitleRef,
        });
      }
    );

    return () => cleanup && cleanup();
  }, [isClient]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const index = Number.parseInt(element.dataset.index || "0");
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={whyPavesSectionRef}
      id="about"
      className="relative w-full py-20 bg-background-dark"
    >
      {/* SVG Divider Top */}
      <svg
        className="absolute -top-1 left-0 w-full h-24 text-background-dark"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,10 600,50 T1200,50 L1200,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="overflow-hidden">
            <h2
              ref={titleRef}
              className="text-7xl font-bold mb-4 text-white"
            >
              Why{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #d23369, #86163c)",
                }}
              >
                Paves
              </span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <p
              ref={subTitleRef}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Six months young, but backed by decades of industry expertise. We
              combine innovation with proven methodologies.
            </p>
          </div>
        </div>

        <div ref={sectionRef} className="grid grid-cols-2 gap-8 ">
          {subsections.map((subsection, index) => {
            const Icon = subsection.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                data-index={index}
                className={`p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700/20 dark:to-slate-600/20 border border-gray-200 dark:border-slate-600/30 transition-all duration-700 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="flex items-center justify-center h-12 w-12 rounded-lg text-white"
                      style={{
                        background: "linear-gradient(135deg, #d23369, #86163c)",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {subsection.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {subsection.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SVG Divider Bottom */}
      <svg
        className="absolute -bottom-1 left-0 w-full h-24 text-slate-900 dark:text-slate-800"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,90 600,50 T1200,50 L1200,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
