"use client";

const sections = [
  {
    title: "AI-Powered Trading & Market Intelligence",
    desc:
      "Stay ahead with real-time analytics, predictive modeling, and AI-driven automation.",
    bullets: [
      "AI-Driven Market Insights",
      "Algorithmic Trading & Automation",
      "Sentiment Analysis & NLP",
      "Risk Analytics & Portfolio Optimization",
    ],
    bg: "bg-pink-50", // pink strip
  },
  {
    title: "Digital Transformation for Capital Markets",
    desc:
      "Future-proof operations with cloud-based, AI-optimized, and scalable solutions.",
    bullets: [
      "Cloud-Based Trading Infrastructure",
      "Real-Time Data Processing",
      "Blockchain & Digital Assets",
      "Intelligent Workflow Automation",
    ],
    bg: "bg-pink-50",
  },
  {
    title: "Risk & Compliance Automation",
    desc:
      "Ensure regulatory compliance, fraud detection, and risk mitigation with AI-powered solutions.",
    bullets: [
      "AI-Powered Regulatory Compliance",
      "Real-time Fraud Detection",
      "Credit & Market Risk Management",
      "Automated Trade Surveillance",
    ],
    bg: "bg-slate-100", // light slate
  },
  {
    title: "AI-Enhanced Wealth & Asset Management",
    desc:
      "Deliver personalized investment experiences and optimize asset performance with AI-powered solutions.",
    bullets: [
      "Robo-Advisory & AI-Powered Recommendations",
      "Automated Portfolio Rebalancing",
      "Blockchain & Digital Assets",
      "Intelligent Workflow Automation",
    ],
    bg: "bg-slate-100",
  },
];

export default function FeatureSections() {
  return (
    <div className="w-full">
      {/* two-column stacked blocks — first row (2 columns) pink bg */}
      <div className="grid md:grid-cols-2 gap-0">
        {sections.slice(0, 2).map((s, idx) => (
          <section
            key={s.title}
            className={`py-16 px-8 md:px-16 ${s.bg} border-b border-gray-200`}
          >
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-[#0F1E63]">{s.title}</h3>
              <p className="mt-4 text-gray-700">{s.desc}</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-pink-600 mr-2">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* second row (2 columns) slate bg */}
      <div className="grid md:grid-cols-2 gap-0">
        {sections.slice(2).map((s) => (
          <section
            key={s.title}
            className={`py-16 px-8 md:px-16 ${s.bg} border-b border-gray-200`}
          >
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold text-[#0F1E63]">{s.title}</h3>
              <p className="mt-4 text-gray-700">{s.desc}</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="text-pink-600 mr-2">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
