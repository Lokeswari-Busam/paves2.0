"use client";

export default function EnterpriseStartup() {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-white overflow-hidden">

      {/* GEOMETRIC SVG BACKGROUND */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" preserveAspectRatio="none">
        <polygon points="0,0 60%,0 30%,100" fill="#E8ECF9" />
        <polygon points="30%,0 100%,0 70%,100" fill="#DDE3F7" />
        <polygon points="0,100 40%,40 100%,100" fill="#EEF2FD" />
      </svg>

      <div className="relative z-10 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E63]">
          For Enterprise Clients and Startups: AI-Driven Payments
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-10">
          
          <div>
            <h3 className="text-xl font-bold text-[#0F1E63]">For Enterprises:</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>› Scalable Integration</li>
              <li>› Global Compliance</li>
              <li>› Data-Driven Personalization</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-600">For Startups:</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>› Rapid Deployment</li>
              <li>› Cost-Effective Growth</li>
              <li>› Customer Engagement</li>
            </ul>
          </div>

        </div>

        <p className="mt-8 text-gray-600 max-w-3xl">
          At Paves Technologies, we empower businesses of every size to succeed in the AI revolution. With secure, scalable, and customer-centric solutions, we redefine payments 
          and embedded finance for a smarter, faster, and more innovative financial ecosystem.
        </p>
      </div>

    </section>
  );
}
