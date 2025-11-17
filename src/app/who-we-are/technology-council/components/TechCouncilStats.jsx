// "use client";

// import { useState, useEffect } from "react";

// export default function TechCouncilStats() {
//   const [experience, setExperience] = useState(150);
//   const [projects, setProjects] = useState(350);
//   const [triggerCount, setTriggerCount] = useState(false);

//   // Start counting
//   const startCount = () => setTriggerCount(true);

//   useEffect(() => {
//     let expInterval, projInterval;

//     if (triggerCount) {
//       // Experience: 150 → 200
//       expInterval = setInterval(() => {
//         setExperience((prev) => {
//           if (prev >= 200) {
//             clearInterval(expInterval);
//             return 200;
//           }
//           return prev + 1;
//         });
//       }, 30);

//       // Projects: 350 → 500
//       projInterval = setInterval(() => {
//         setProjects((prev) => {
//           if (prev >= 500) {
//             clearInterval(projInterval);
//             return 500;
//           }
//           return prev + 5;
//         });
//       }, 20);
//     }

//     return () => {
//       clearInterval(expInterval);
//       clearInterval(projInterval);
//     };
//   }, [triggerCount]);

//   return (
//     <section
//       className="py-20 bg-blue-50"
//       onMouseEnter={startCount} // Start count on hover
//     >
//       <div className="container mx-auto px-4 text-center max-w-6xl">
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
//           Our Reach & Achievements
//         </h2>

//         {/* Paragraph */}
//         <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
//           Paves Technologies has partnered with numerous companies, driving innovation through cutting-edge solutions in AI, cloud, fintech, and cybersecurity. 
//           Our dedication and expertise have resulted in a significant number of successful projects that deliver measurable impact and value to our clients.
//         </p>

//         {/* Stats Boxes with Different Shapes */}
//         <div className="flex flex-col md:flex-row w-full gap-12">
//           {/* Box 1 - Larger Rectangle */}
//           <div
//             className="flex-1 bg-indigo-900 h-60 md:h-65  text-white flex flex-col items-center justify-center hover:shadow-2xl transition duration-500 cursor-pointer"
//             onMouseEnter={startCount}
//           >
//             <p className="text-6xl md:text-6xl font-bold mb-4" >{experience}+ yrs</p>
//             <p className="text-lg md:text-xl mt-2 text-semibold" >Companies Served</p>
//           </div>

//           {/* Box 2 - Smaller Square */}
//           <div
//             className="flex-1 bg-pink-700 h-48 md:h-56  text-white flex flex-col items-center justify-center hover:shadow-2xl transition duration-500 cursor-pointer"
//             onMouseEnter={startCount}
//           >
//             <p className="text-6xl md:text-6xl font-bold mb-4">{projects}+ </p>
//             <p className="text-lg md:text-xl mt-2 text-semibold">Projects Completed</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState, useEffect } from "react";

export default function TechCouncilStats() {
  const [experience, setExperience] = useState(150);
  const [projects, setProjects] = useState(350);
  const [triggerCount, setTriggerCount] = useState(false);

  const startCount = () => setTriggerCount(true);

  useEffect(() => {
    let expInterval, projInterval;

    if (triggerCount) {
      // Animate Experience: 150 → 200
      expInterval = setInterval(() => {
        setExperience((prev) => {
          if (prev >= 200) {
            clearInterval(expInterval);
            return 200;
          }
          return prev + 1;
        });
      }, 30);

      // Animate Projects: 350 → 500
      projInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev >= 500) {
            clearInterval(projInterval);
            return 500;
          }
          return prev + 5;
        });
      }, 20);
    }

    return () => {
      clearInterval(expInterval);
      clearInterval(projInterval);
    };
  }, [triggerCount]);

  return (
    <section
      className="py-20 bg-blue-50"
      onMouseEnter={startCount} // Trigger count on hover
    >
      <div className="container mx-auto px-4 text-center max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
          Our Reach & Achievements
        </h2>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-semibold text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto ">
          <b>Paves Technologies</b> has partnered with numerous companies, driving innovation through cutting-edge solutions in<b>AI</b> , <b>cloud</b> , <b>fintech</b>, and <b>cybersecurity</b>. 
          Our dedication and expertise have resulted in a significant number of successful projects that deliver measurable impact and value to our clients.
        </p>

        {/* Stats Boxes */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
          {/* Bigger box (6r) */}
          <div className="bg-indigo-900 w-82 h-82 md:w-82 md:h-82 flex flex-col items-center justify-center text-white  shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
            <p className="text-6xl font-bold mb-4">{experience}+ yrs</p>
            <p className="text-lg md:text-xl font-semibold">Companies Served</p>
          </div>

          {/* Smaller box (4r) */}
          <div className="bg-pink-700 w-72 h-72 md:w-72 md:h-72 flex flex-col items-center justify-center text-white  shadow-lg hover:shadow-2xl transition duration-500 cursor-pointer">
            <p className="text-6xl md:text-6xl font-bold">{projects}+ </p>
            <p className="text-lg md:text-xl font-semibold mt-1">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

