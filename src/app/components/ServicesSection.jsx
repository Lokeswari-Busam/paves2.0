"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    { title: "Software Development", description: "Custom applications built with modern frameworks." },
    { title: "Cloud Services", description: "AWS, Azure, GCP expertise with optimization & migration." },
    { title: "IT Consulting", description: "Strategic guidance for transforming your digital ecosystem." },
    { title: "DevOps & Automation", description: "CI/CD, IaC, and operational automation." },
    { title: "Product Engineering", description: "End-to-end scalable product development." },
    { title: "AI & Data Solutions", description: "Machine learning, analytics & data intelligence." },
    { title: "Web & Mobile Apps", description: "High-performance responsive applications." },
    { title: "Support & Maintenance", description: "24/7 monitoring, updates & system care." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // number of cards visible at a time

  const nextSlide = () => {
    if (currentIndex < services.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      className="relative w-full py-20 px-6 md:px-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/business-team-meeting-modern-office-with-city-view.jpg')",
      }}
    >
      {/* Removed dark overlay as you requested */}
      
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4 drop-shadow-lg">
          Our Services
        </h2>

        <p className="text-gray-200 text-center max-w-2xl mx-auto mb-10 drop-shadow">
          Comprehensive solutions designed to accelerate digital transformation.
        </p>

        {/* CAROUSEL */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / visibleCards)
              }%)`,
              width: `${(services.length / visibleCards) * 100}%`,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-white/20 to-secondary/60 backdrop-blur-lg rounded-xl shadow-xl
                           min-w-[260px] max-w-[260px] h-[260px] p-6 
                           flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION + ARROWS */}
        <div className="flex justify-center items-center gap-4 mt-8">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({
              length: services.length - visibleCards + 1,
            }).map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all 
                ${currentIndex === idx ? "bg-white" : "bg-white/50"}`}
              ></div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md"
          >
            <FaChevronRight className="text-gray-700" />
          </button>

        </div>
      </div>
    </section>
  );
}
