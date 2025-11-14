// "use client";

// export default function TechCouncilExpertise() {
//   const expertise = [
//     {
//       title: "AI-First Strategy & Data-Driven Transformation",
//       description:
//         "We help businesses adopt AI at their core, leveraging data analytics and machine learning to make smarter decisions, optimize operations, and unlock new revenue streams.",
//       textColor: "text-white",
//     },
//     {
//       title: "Cloud & DevOps Advisory",
//       description:
//         "Our experts guide organizations in migrating to cloud environments efficiently, implementing DevOps practices to accelerate development cycles, improve scalability, and enhance reliability.",
//       textColor: "text-white",
//     },
//     {
//       title: "Open Banking & API Economy",
//       description:
//         "We assist financial institutions and fintechs in building robust APIs and open banking solutions that enable seamless integrations, foster innovation, and create new digital financial services.",
    
//       textColor: "text-white",
//     },
//     {
//       title: "Cybersecurity & Fraud Prevention",
//       description:
//         "Our team helps secure critical infrastructure and sensitive data by implementing advanced cybersecurity measures, fraud detection systems, and risk management strategies to safeguard your business.",
//       textColor: "text-white",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-6xl">
//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-900">
//           Future-Ready Tech & Innovation Expertise
//         </h2>

//         {/* Main Content Paragraph */}
//         <p className="text-center text-gray-700 text-lg  font-bold leading-relaxed mb-7">
//           At the heart of <b>Paves Technologies’</b>  Advisory Consulting is our Technology Council—a group of <b>visionary technologists</b>, <b>AI/ML experts</b>, and <b>fintech innovators</b>. 
//           Together, they provide strategic guidance to organizations seeking to leverage cutting-edge technologies and data-driven solutions. 
//           From AI-first transformation to secure and scalable cloud implementations, open banking innovation, and robust cybersecurity frameworks, 
//           our council ensures businesses are ready for the future and positioned for sustained growth.
//         </p>

//         {/* Expertise Cards */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {expertise.map((item, index) => (
//             <div
//               key={index}
//               className={`bg-white} p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 hover:scale-105 transition duration-500`}
//             >
//               <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-pink-700">
//                 {item.title}
//               </h3>
//               <p className="text-center text-base md:text-lg leading-relaxed text-gray-700">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-900">
        Future-Ready Tech & Innovation Expertise
        </h2>

        {/* Main Content Paragraph */}
        <p className="text-center text-lg md:text-xl mb-12 text-gray-700 leading-relaxed">
          At the heart of <b>Paves Technologies’</b> Advisory Consulting is our Technology Council—a group of <b>visionary technologists</b>, <b>AI/ML experts</b>, and <b>fintech innovators</b>. 
          They provide strategic guidance to organizations seeking cutting-edge solutions, from AI-first transformation to secure cloud practices, open banking innovation, and robust cybersecurity.
        </p>

        {/* Redesigned Vertical Cards */}
        <div className="flex flex-col gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 p-8 rounded-3xl shadow-xl border border-pink-200 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2"
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
        <button className="bg-indigo-800 hover:bg-indigo-900 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3">
            Our Expertise 
            <span className="w-8 h-8 flex items-center justify-center bg-white text-pink-700 rounded-full transition duration-300 group-hover:bg-pink-700 group-hover:text-white">
                ➔
            </span>
        </button>
        </div>


      </div>
    </section>
  );
}
