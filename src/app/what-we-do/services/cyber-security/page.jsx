"use client";
import Image from "next/image";

export default function CybersecurityRedesign() {
  return (
    <div className="w-full bg-white">

      {/* ======================= HERO ======================= */}
      <section className="relative w-full py-20 px-6 md:px-20 overflow-hidden">

        {/* Background shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E63] via-[#13297A] to-[#0F1E63] opacity-90"></div>
        <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-pink-500/20 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-400/30 rounded-full blur-[110px]"></div>

        <div className="relative z-20 max-w-5xl">
          <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">
            Cybersecurity Solutions
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-snug">
            Re(AI)magining Cybersecurity<br />for the Digital Era
          </h1>

          <p className="mt-6 max-w-3xl text-blue-100 text-lg leading-relaxed">
            Paves Technologies delivers next-gen cybersecurity powered by 
            <span className="font-semibold text-white"> AI, automation,</span> and 
            <span className="font-semibold text-white"> predictive analytics</span>, 
            helping enterprises stay ahead of evolving threats.
          </p>
        </div>
      </section>

      {/* ======================= SECTION 1 ======================= */}
      <section className="py-10 px-6 md:px-20 bg-[#F7F9FF] grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-bold text-[#0F1E63]">
            AI-Driven Security Integration & Threat Management
          </h2>

          <p className="mt-4 text-gray-700">
            Strengthen your cybersecurity foundation with 
            <span className="font-semibold"> intelligent automation</span>, 
            <span className="font-semibold"> predictive analytics</span>, and 
            <span className="font-semibold"> real-time threat response</span>.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ AI-Powered Threat Detection & Response</li>
            <li>✔ Integrated Security Solutions</li>
            <li>✔ Endpoint & Network Security</li>
            <li>✔ SIEM-Powered Event Management</li>
          </ul>
        </div>

        <Image
          src="/assets/cyber-ai-threat.png"
          width={450}
          height={450}
          alt="Cyber Threat Illustration"
          className="rounded-xl"
        />
      </section>

      {/* ======================= SECTION 2 ======================= */}
      <section className="py-5 px-6 md:px-20 bg-[#0F1E63] grid md:grid-cols-2 gap-16 items-center text-white">

        <Image
          src="/assets/cyber-zero-trust.png"
          width={650}
          height={450}
          alt="Zero Trust Illustration"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold">Zero Trust Security Framework</h2>

          <p className="mt-4 text-blue-100">
            Achieve bulletproof digital defense with 
            <span className="font-semibold text-white"> automated compliance</span> and 
            <span className="font-semibold text-white"> zero-trust identity architecture</span>.
          </p>

          <ul className="mt-6 space-y-3 text-blue-100">
            <li>✔ Compliance Automation</li>
            <li>✔ Risk Assessment & Penetration Testing</li>
            <li>✔ Data Protection & Encryption</li>
            <li>✔ Security Awareness Training</li>
          </ul>
        </div>
      </section>

      {/* ======================= SECTION 3 ======================= */}
      <section className="py-5 px-6 md:px-20 bg-[#F7F9FF] grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-3xl font-bold text-[#0F1E63]">
            Cyber Risk & Compliance Management
          </h2>

          <p className="mt-4 text-gray-700">
            Enhance your defense posture through 
            <span className="font-semibold"> automated threat detection</span>, 
            <span className="font-semibold"> governance workflows</span>, and 
            <span className="font-semibold"> real-time analytics</span>.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Threat Detection & Response</li>
            <li>✔ Governance & Risk Compliance</li>
            <li>✔ Endpoint Monitoring</li>
            <li>✔ SIEM Automation</li>
          </ul>
        </div>

        <Image
          src="/assets/risk-compliance.png"
          width={650}
          height={450}
          alt="Risk & Compliance Illustration"
          className="rounded-xl"
        />
      </section>

      {/* ======================= SECTION 4 ======================= */}
      <section className="py-20 px-6 md:px-20 bg-[#0F1E63] grid md:grid-cols-2 gap-16 items-center text-white">

        <Image
          src="/assets/cyber-mssp.png"
          width={650}
          height={450}
          alt="MSSP Illustration"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold">Managed Security Services (MSSP)</h2>

          <p className="mt-4 text-blue-100">
            Leverage our <span className="font-semibold text-white">24/7 cybersecurity experts</span> 
            for real-time monitoring, patching, threat analysis, and SOC operations.
          </p>

          <ul className="mt-6 space-y-3 text-blue-100">
            <li>✔ SOC as a Service</li>
            <li>✔ SIEM & Log Monitoring</li>
            <li>✔ Patch Automation</li>
            <li>✔ Threat Hunting</li>
            <li>✔ Security Outsourcing</li>
          </ul>
        </div>
      </section>

      {/* ======================= WHY CHOOSE ======================= */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-[#0F1E63]">
          Why Paves Technologies for Cybersecurity?
        </h2>

        <ul className="mt-6 text-gray-700 space-y-2">
          <li>✔ AI-First Security</li>
          <li>✔ Zero Trust & Cloud Expertise</li>
          <li>✔ Compliance-Driven Processes</li>
          <li>✔ Full-Time 24/7 Security Monitoring</li>
        </ul>

        <p className="mt-10 text-gray-700 font-medium">
          Re(AI)magine Cybersecurity with Paves Technologies
        </p>

        <p className="text-gray-600 max-w-3xl mt-2">
          Secure your business—<span className="font-semibold">smarter, faster, and AI-powered</span>.
        </p>
      </section>
    </div>
  );
}
