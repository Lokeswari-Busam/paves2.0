"use client";
import Image from "next/image";
export default function IAMPage() {
  return (
    <div className="w-full">

      {/* ---------------------------------------------- */}
      {/* HERO (Same as your existing hero component) */}
      {/* ---------------------------------------------- */}
      <section className="relative w-full h-[340px] md:h-[380px] bg-white overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="absolute left-0 top-0 h-full flex items-center px-6 md:px-20 z-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F1E63]">
              Managed IAM &<br />Outsourcing Services
            </h1>

            <p className="mt-4 text-gray-600 uppercase tracking-wide text-sm">
              Paves Technologies &gt; What We Do &gt; Cybersecurity &gt; IAM
            </p>
          </div>
        </div>

        {/* BG WAVES (same as your hero) */}
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden z-10">
          <svg
            className="absolute left-[-25%] top-[18%] w-[200%] h-[160%] opacity-[0.45]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 260
                C300 140, 600 340, 950 250
                C1300 160, 1650 310, 2000 230
                L2000 600
                L0 600
                Z
              "
              fill="#E6ECFF"
            />
          </svg>

          <svg
            className="absolute left-[-22%] top-[22%] w-[200%] h-[160%] opacity-[0.7]"
            viewBox="0 0 2000 600"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0 310
                C350 180, 700 290, 1050 260
                C1400 220, 1750 330, 2100 260
                L2000 600
                L0 600
                Z
              "
              fill="#C9D4FF"
            />
          </svg>

          {/* COLOR GLOWS */}
          <div className="absolute right-10 top-14 w-48 h-48 bg-pink-400 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute right-32 bottom-16 w-20 h-20 bg-blue-500/40 rounded-full blur-xl"></div>
        </div>

        {/* WHITE FADE LEFT → RIGHT */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>

      </section>

      {/* ---------------------------------------------- */}
      {/* FOUR-DECK IAM CONTENT (Exactly like screenshot) */}
      {/* ---------------------------------------------- */}

      {/* SECTION WRAPPER */}
      <section className="w-full">

      

          {/* TOP HALF 2-COLUMNS */}
<div className="grid md:grid-cols-2">

  {/* LEFT BLOCK */}
  <div className="bg-[#F7F7F7] p-10 md:p-14">
    <h2 className="text-2xl font-bold text-[#0F1E63]">
      Managed IAM & Outsourcing Services
    </h2>

    <p className="mt-4 text-gray-700">
      Let <span className="font-semibold">Paves Technologies</span> handle
      IAM management, monitoring, and security enforcement while you focus on growth.
    </p>

    <ul className="mt-5 space-y-2 text-gray-700">
      <li>› Identity Lifecycle Management</li>
      <li>› AI-Powered User Behavior Analytics</li>
      <li>› Multi-Factor Authentication (MFA)</li>
      <li>› Single Sign-On (SSO) & Federated Identity</li>
    </ul>
  </div>

  {/* RIGHT BLOCK WITH IMAGE */}
  <div className="p-0 md:p-0">
    <Image
      src="/assets/iam-hero.png"
      alt="IAM Security"
      width={400}
      height={600}
      className="w-full object-cover"
    />
  </div>

</div>


        {/* ======= DEEP MAROON SECTION LIKE YOUR SCREENSHOT ======= */}
        <div className="bg-[#7A003C] text-white grid md:grid-cols-2 gap-10 px-6 md:px-20 py-16 relative">
          
          {/* TOP LEFT */}
          <div>
            <h3 className="text-xl font-bold">Intelligent Identity Security & Access Control</h3>
            <ul className="mt-4 space-y-2 text-white/90 text-sm md:text-base">
              <li>› Identity Lifecycle Management</li>
              <li>› AI-Powered User Behavior Analytics</li>
              <li>› MFA & Password-less Access</li>
              <li>› SSO & Federated Identity</li>
            </ul>
          </div>

          {/* TOP RIGHT */}
          <div>
            <h3 className="text-xl font-bold">Zero Trust & Privileged Access Management (PAM)</h3>
            <ul className="mt-4 space-y-2 text-white/90 text-sm md:text-base">
              <li>› Privileged Access Management (PAM)</li>
              <li>› Just-In-Time (JIT) Access</li>
              <li>› Zero Trust Network Access (ZTNA)</li>
              <li>› Cloud Identity Governance</li>
            </ul>
          </div>

          {/* BOTTOM LEFT */}
          <div>
            <h3 className="text-xl font-bold">Compliance & Identity Governance</h3>
            <ul className="mt-4 space-y-2 text-white/90 text-sm md:text-base">
              <li>› Regulatory Compliance Automation</li>
              <li>› Role-Based & Attribute-Based Access Control</li>
              <li>› Identity Risk Scoring & Access Reviews</li>
              <li>› Automated Audit & Reporting</li>
            </ul>
          </div>

          {/* BOTTOM RIGHT */}
          <div>
            <h3 className="text-xl font-bold">Managed IAM & Outsourcing Services</h3>
            <ul className="mt-4 space-y-2 text-white/90 text-sm md:text-base">
              <li>› IAM as a Service (IDaaS)</li>
              <li>› Managed Identity & Compliance Services</li>
              <li>› SSO & Access Federation</li>
              <li>› Dark Web Identity Threat Monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- */}
      {/* WHY PAVES SECTION (Matches screenshot) */}
      {/* ---------------------------------------------- */}
      <section className="py-20 px-6 md:px-20 bg-white relative">

        {/* light pattern bg */}
        <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] opacity-10"></div>

        <div className="relative z-20">
          <h2 className="text-3xl font-bold text-[#0F1E63]">
            Why Paves Technologies for IAM?
          </h2>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>› Seamless System Integration</li>
            <li>› AI-Driven Identity Security</li>
            <li>› Comprehensive IAM Services</li>
            <li>› Regulatory Compliance & Risk Management</li>
          </ul>

          <p className="mt-10 text-gray-700 font-semibold">
            Re(AI)magine Identity Security with Paves Technologies
          </p>

          <p className="text-gray-600 max-w-3xl mt-2">
            Let’s secure, automate, and optimize access control.
          </p>
        </div>
      </section>

    </div>
  );
}
