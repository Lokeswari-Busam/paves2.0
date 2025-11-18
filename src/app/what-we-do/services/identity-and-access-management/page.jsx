"use client";
import Image from "next/image";
export default function IAMPage() {
  return (
    <div className="w-full">

     
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
