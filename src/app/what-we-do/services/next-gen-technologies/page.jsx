"use client";
import Image from "next/image";

export default function NextGenTechnologies() {
  return (
    <div className="w-full bg-white">

     

      {/* ================= HEADER ================= */}
      <section className="px-6 md:px-20 pt-16 pb-10">
        <h1 className="text-2xl md:text-2xl font-bold text-[#0F1E63]">
          Next-Gen Technologies
        </h1>

        <p className="mt-4 text-gray-700 max-w-3xl leading-relaxed">
          Harness the Power of AI, Blockchain, Quantum Computing, and More to Drive Future Innovation
        </p>

        <p className="mt-4 text-gray-700 max-w-4xl leading-relaxed">
          At <span className="font-semibold">Paves Technologies</span>, we provide 
          cutting-edge technology solutions that help businesses 
          <span className="font-semibold"> leverage emerging innovations</span>, 
          optimize processes, and unlock new revenue streams.
        </p>

        <p className="mt-4 text-gray-700 max-w-3xl leading-relaxed">
          Whether you’re in <span className="font-semibold">banking, payments, capital markets, insurance, or fintech</span>,
          our next-gen technology expertise helps you accelerate transformation and 
          future-proof your operations.
        </p>
      </section>

      {/* ================= DOTTED BG SECTION ================= */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/assets/dotted-bg.svg')] opacity-20"></div>

        <section className="px-6 md:px-20 py-10 relative">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E63] mb-10">
            Unlocking the Power of Next-Gen Technologies
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* -------- 1 -------- */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F1E63] text-white flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#0F1E63]">
                  Artificial Intelligence (AI) & Machine Learning (ML)
                </h3>
              </div>

              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• AI-powered automation for decision intelligence</li>
                <li>• NLP & Conversational AI</li>
                <li>• AI-driven risk modeling & forecasting</li>
              </ul>
            </div>

            {/* -------- 2 -------- */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F1E63] text-white flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#0F1E63]">
                  Blockchain & Decentralized Finance (DeFi)
                </h3>
              </div>

              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Smart contract automation</li>
                <li>• Digital asset security & tokenization</li>
                <li>• Cross-border blockchain transactions</li>
              </ul>
            </div>

            {/* -------- 3 -------- */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F1E63] text-white flex items-center justify-center font-bold">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#0F1E63]">
                  Quantum Computing for Financial & Risk Modeling
                </h3>
              </div>

              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Quantum-powered simulations</li>
                <li>• Advanced cryptographic security</li>
                <li>• Quantum portfolio optimization</li>
              </ul>
            </div>

            {/* -------- 4 -------- */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F1E63] text-white flex items-center justify-center font-bold">
                  04
                </div>
                <h3 className="text-xl font-bold text-[#0F1E63]">
                  Edge Computing & 5G for Real-Time Financial Processing
                </h3>
              </div>

              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Ultra-low latency payments</li>
                <li>• AI-driven cybersecurity</li>
                <li>• Real-time 5G financial analytics</li>
              </ul>
            </div>

            {/* -------- 5 -------- */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F1E63] text-white flex items-center justify-center font-bold">
                  05
                </div>
                <h3 className="text-xl font-bold text-[#0F1E63]">
                  Metaverse & Web 3.0 for Financial Services
                </h3>
              </div>

              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• AI-powered digital banking in the metaverse</li>
                <li>• Web 3.0 decentralized identity</li>
                <li>• NFT-powered asset management</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F1E63]">
          Why Choose Paves Technologies for Next-Gen Technologies?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-700">
          <ul className="space-y-3">
            <li>✔ AI-First Innovation</li>
            <li>✔ Blockchain & Quantum Expertise</li>
            <li>✔ Regulatory & Compliance-Ready Solutions</li>
          </ul>

          <ul className="space-y-3">
            <li>✔ Cloud-Native & Scalable Infrastructure</li>
            <li>✔ Integration with Existing IT Ecosystems</li>
          </ul>
        </div>

        <h3 className="mt-10 text-2xl font-bold text-[#0F1E63]">
          Embrace the Future with Next-Gen Technologies
        </h3>

        <p className="mt-4 text-gray-700 max-w-4xl">
          The future of financial services lies in next-generation technologies.
          Whether enhancing security, AI automation, or leveraging quantum computing,
          Paves Technologies helps you stay ahead of the curve.
        </p>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          <Image
            src="/assets/blockchain-img.webp"
            width={500}
            height={350}
            alt="Blockchain"
            className="rounded-xl object-cover w-full h-[260px]"
          />

          <Image
            src="/assets/5g-img.webp"
            width={500}
            height={350}
            alt="5G Illustration"
            className="rounded-xl object-cover w-full h-[260px]"
          />

          <Image
            src="/assets/metaverse-img.webp"
            width={500}
            height={350}
            alt="Metaverse"
            className="rounded-xl object-cover w-full h-[260px]"
          />

        </div>
      </section>

    </div>
  );
}
