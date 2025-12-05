"use client";

import { useEffect, useState, useRef } from "react";


export default function IndustryVerticals() {
  const sliderRef = useRef(null);

  const items = [
  {
    title: "Payments",
    description:
      "Payment services comprise a variety of solutions that facilitate secure and efficient financial transactions. These include digital payments, real-time money transfers, mobile wallets, merchant acquiring, and cross-border remittances. Advanced encryption, tokenization, and fraud-prevention frameworks ensure high levels of security and full compliance with global financial regulations.",
    image: "/assets/istockpay.jpg",
    link: "/what-we-do/industry-verticals/payments",
  },
  {
    title: "Banking",
    description:
      "Banking encompasses a broad spectrum of financial services, including savings and current accounts, loans, credit solutions, investment products, and corporate banking services. Modern banking emphasizes digital transformation through online platforms, mobile banking apps, automated workflows, and advanced customer verification for faster and more secure financial operations.",
    image: "/assets/banking.png",
    link: "/what-we-do/industry-verticals/banking",
  },
  {
    title: "Payments Fraud & AML",
    description:
      "Payments Fraud & AML services involve robust mechanisms designed to detect, prevent, and respond to financial crime. These include real-time transaction monitoring, anomaly detection, customer risk scoring, KYC screening, regulatory reporting, and compliance with global AML standards such as FATF and OFAC. The goal is to safeguard financial systems from fraud, money laundering, and emerging cyber threats.",
    image: "/assets/aml fraud.avif",
    link: "/what-we-do/industry-verticals/payments-fraud-and-aml",
  },
  {
    title: "Governance Risk & Compliance",
    description:
      "GRC frameworks help organizations identify risks, enforce governance structures, meet regulatory requirements, and ensure ethical business conduct. This includes policy management, internal audits, risk assessments, regulatory compliance tracking, incident reporting, and enterprise-wide controls. Effective GRC practices enhance transparency, reduce vulnerabilities, and promote long-term operational stability.",
    image: "/assets/GRC-in-Cybersecurity.jpg",
    link: "/what-we-do/industry-verticals/governance-risk-and-compliance",
  },
  {
    title: "Insurance",
    description:
      "Insurance services provide comprehensive financial protection against uncertainties such as accidents, health emergencies, property damage, natural disasters, and business interruptions. This includes underwriting, claims processing, risk modeling, actuarial analysis, and digital insurance platforms that offer faster onboarding, automated assessments, and improved customer experience.",
    image: "/assets/types-of-insurance.webp",
    link: "/what-we-do/industry-verticals/insurance",
  },
  {
    title: "Capital Markets",
    description:
      "Capital Markets encompass trading, investment, and funding activities across equities, bonds, derivatives, and other financial instruments. These markets support liquidity, wealth creation, and corporate fundraising. Technology-driven platforms now enable algorithmic trading, real-time analytics, market surveillance, and automated clearing & settlement for improved market efficiency and transparency.",
    image: "/assets/business-person-futuristic-business-environment.jpg",
    link: "/what-we-do/industry-verticals/capital-markets",
  },
];


  

  const loopItems = [...items, ...items]; // 1–6–1–6 infinite loop
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!sliderRef.current) return;
    const total = items.length;
    if (index === total) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setIndex(0);
      }, 900);

      setTimeout(() => {
        if (sliderRef.current)
          sliderRef.current.style.transition = "transform 0.9s ease";
      }, 950);
    }
  }, [index, items.length]);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => prev + 1);

  return (
    <section className="relative w-full py-20 bg-blue-50 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2a338b] text-center mb-12">
        Industry Verticals
      </h2>

      <div className="relative overflow-hidden w-full max-w-6xl mx-auto">

        {/* Slider Track */}
         {/* Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <circle cx="20%" cy="30%" r="250" fill="#d7e3ff" />
        <circle cx="80%" cy="60%" r="300" fill="#bccaff" />
        <circle cx="20%" cy="90%" r="200" fill="#e4e9ff" />
      </svg>

        <div
          ref={sliderRef}
          className="flex transition-transform duration-[900ms] ease-linear"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {loopItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex flex-col md:flex-row gap-10 px-6 items-center"
            >
              <img
                src={item.image}
                className="w-full md:w-1/2 h-[350px] md:h-[450px] object-cover rounded-xl shadow-xl"
                alt=""
              />

              <div className="w-full md:w-1/2 text-[#2a338b]">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-sm md:text-sm mb-6">{item.description}</p>

                 {/* <button className="font-semibold text-[#2a338b] hover:underline inline-flex items-center">
                   Read more <span className="ml-2 text-xl">➔</span>
                 </button>  */}
                 <button
              onClick={() => (window.location.href = item.link)}
              className="font-semibold text-[#2a338b] hover:underline inline-flex items-center"
            >
              Read more <span className="ml-2 text-xl">➔</span>
            </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Controls: fully below slider */}
        <div className="mt-8 flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            className="bg-blue-900 p-3 shadow text-white  hover:bg-blue-100 transition"
          >
            &#8592;
          </button>

          <span className="font-semibold text-[#2a338b]">
            {index % items.length + 1} / {items.length}
          </span>

          <button
            onClick={handleNext}
            className="bg-blue-900 p-3 shadow text-white  hover:bg-blue-100 transition"
          >
             &#8594;
          </button>
        </div>

      </div>
    </section>
  );
}
