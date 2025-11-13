"use client";

export default function WhyChoose() {
  return (
    <section className="relative bg-[#0F1E63] text-white py-20 px-6 md:px-20 overflow-hidden">

      {/* DIAGONAL LINE SVG BACKGROUND */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
        <defs>
          <pattern id="diag" patternUnits="userSpaceOnUse" width="40" height="40">
            <path d="M0 40L40 0" stroke="white" strokeWidth="2" opacity="0.3" />
            <path d="M-10 30L30 -10" stroke="white" strokeWidth="2" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          AI Powered Payments: Transforming <br /> Real-world Experiences
        </h2>

        <p className="mt-6 text-gray-200 max-w-2xl">
          Our mission is to empower businesses with smarter, faster, more secure payment solutions.
        </p>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Why Choose Paves?</h3>

          <ul className="space-y-3 text-gray-200">
            <li>› AI-Driven Payment Solutions</li>
            <li>› Seamless User Experience</li>
            <li>› Enhanced Security</li>
            <li>› Tailored for Every Business</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
