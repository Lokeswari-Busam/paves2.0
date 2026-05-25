"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export default function ServicesSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Increase scroll travel so ALL cards appear
  const cardsY = useTransform(scrollYProgress, [0, 1.05], ["0%", "-650%"]);

  const services = [
    {
      title: "Business & Technology Advisory Consulting",
      desc: "We help organizations align business goals with advanced technology strategies to drive operational excellence.",
      image: "/assets/business and technology advisory.jpeg",
      link: "what-we-do/services/business-and-technology",
    },
    {
      title: "Artificial Intelligence",
      desc: "We build AI systems that automate workflows, enhance predictions, and accelerate decision-making.",
      image: "/assets/artificial intelligence.webp",
      link: "what-we-do/services/artificial-intelligence",
    },
    {
      title: "Cloud Engineering And DevOps",
      desc: "We architect scalable cloud systems with automated CI/CD pipelines for faster deployments.",
      image: "/assets/cloud engineering and devops.jpeg",
      link: "what-we-do/services/cloud-and-devops",
    },
    {
      title: "Data And Analytics",
      desc: "We deliver analytics platforms, dashboards, and predictive modeling to power data-driven decisions.",
      image: "/assets/data analytics.jpg",
      link: "what-we-do/services/data-and-analytics",
    },
    {
      title: "Product Management & Engineering",
      desc: "We build scalable digital products focused on usability, engineering excellence, and innovation.",
      image: "/assets/product management and engineering.jpg",
      link: "what-we-do/services/product-management",
    },
    {
      title: "Enterprise Automation",
      desc: "We automate repetitive workflows using AI, bots, and workflow orchestration tools.",
      image: "/assets/enterprise automation.jpg",
      link: "/what-we-do/services/enterprise-automation",
    },
    {
      title: "Legacy Support & Modernization",
      desc: "We modernize legacy apps, refactor systems, and migrate workloads to modern platforms.",
      image: "/assets/legacy support and modernisation.png",
      link: "what-we-do/services/legacy-support",
    },
    {
      title: "Cyber Security",
      desc: "We implement secure architectures, access control, and threat detection systems.",
      image: "/assets/cyber security.jpg",
      link: "what-we-do/services/cyber-security",
    },
    {
      title: "Identity And Access Management",
      desc: "We deploy SSO, MFA, and RBAC to secure identity access across applications.",
      image: "/assets/Identity-and-Access-Management.jpg",
      link: "what-we-do/services/identity-and-access-management",
    },
    {
      title: "Next Gen Technologies",
      desc: "We build solutions using IoT, Blockchain, AR/VR, and intelligent edge systems.",
      image: "/assets/next gen technologies.webp",
      link: "what-we-do/services/next-gen-technologies",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/services_bg.jpg')" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black/40 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 lg:px-16
          flex flex-col lg:flex-row gap-6 lg:gap-12 xl:gap-16 py-6 sm:py-10 lg:py-0">

          {/* LEFT TEXT */}
          <div className="text-white flex-col justify-center max-w-full lg:max-w-lg xl:max-w-xl hidden lg:flex">
            <div className="inline-block px-5 py-1.5 border border-blue-300 text-blue-200 uppercase tracking-widest text-[10px] font-bold mb-4 self-start">
              Our Core Services
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-3 h-3 rounded-sm bg-blue-400 rotate-45 flex-shrink-0 mt-2" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Empowering Businesses Through Technology & Innovation
              </h1>
            </div>

            <div className="h-0.5 w-12 bg-blue-400 rounded-full mb-4 opacity-70" />

            <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-full lg:max-w-md">
              Discover our powerful range of services designed to accelerate digital transformation and enable future-ready businesses.
            </p>
          </div>

          {/* RIGHT — SCROLLING CARDS */}
          <motion.div
            style={{ y: cardsY }}
            className="space-y-4 sm:space-y-6 pt-4 sm:pt-8 lg:pt-20 w-full lg:w-[480px] xl:w-[520px]"
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/${service.link}`}
                className="block"
              >
                <motion.div 
                  className="bg-white/90 backdrop-blur-md rounded-lg sm:rounded-xl shadow-xl overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-full h-40 sm:h-48 md:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      width={800}
                      height={580}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      alt={service.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 480px"
                    />
                  </div>

                  <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-3 sm:pt-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-900 mb-1.5 sm:mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}