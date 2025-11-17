"use client";

export default function TechCouncilExpertise() {
  const expertise = [
    {
      title: "AI-First Strategy & Data-Driven Transformation",
      description:
        "We help businesses adopt AI at their core, leveraging data analytics and machine learning to make smarter decisions, optimize operations, and unlock new revenue streams.",
      icon: "🤖",
    },
    {
      title: "Cloud & DevOps Advisory",
      description:
        "Our experts guide organizations in migrating to cloud environments efficiently, implementing DevOps practices to accelerate development cycles, improve scalability, and enhance reliability.",
      icon: "☁️",
    },
    {
      title: "Open Banking & API Economy",
      description:
        "We assist financial institutions and fintechs in building robust APIs and open banking solutions that enable seamless integrations, foster innovation, and create new digital financial services.",
      icon: "💳",
    },
    {
      title: "Cybersecurity & Fraud Prevention",
      description:
        "Our team helps secure critical infrastructure and sensitive data by implementing advanced cybersecurity measures, fraud detection systems, and risk management strategies to safeguard your business.",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-20 bg-[#2a3990]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
        Future-Ready Tech & Innovation Expertise
        </h2>

        {/* Main Content Paragraph */}
        <p className="text-center text-lg md:text-xl mb-12 text-white leading-relaxed">
          At the heart of <b>Paves Technologies’</b> Advisory Consulting is our Technology Council—a group of <b>visionary technologists</b>, <b>AI/ML experts</b>, and <b>fintech innovators</b>. 
          They provide strategic guidance to organizations seeking cutting-edge solutions, from AI-first transformation to secure cloud practices, open banking innovation, and robust cybersecurity.
        </p>

        {/* Redesigned Vertical Cards */}
        <div className="flex flex-col gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gradient-to-r from-white via-white to-white p-8 rounded-3xl shadow-xl border border-pink-200 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl">{item.icon}</div>

              {/* Text Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-pink-700">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
       <div className="flex justify-center mt-12">
        <button className="bg-white hover:bg-indigo-900 text-[#2a3990] font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3">
            Our Expertise 
            <span className="w-8 h-8 flex items-center justify-center bg-white text-primary rounded-full transition duration-300 group-hover:bg-pink-700 group-hover:text-white">
                ➔
            </span>
        </button>
        </div>


      </div>
    </section>
  );
}
