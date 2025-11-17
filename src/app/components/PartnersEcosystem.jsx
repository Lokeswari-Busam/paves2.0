'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PartnersEcosystem() {
  return (
    <div className="w-full bg-[#F3F2FF] px-6 md:px-20 py-24">

      <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 text-center mb-16">
        PARTNERS ECOSYSTEM
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-14">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/partners-handshake.jpg"
            alt="Partnership Handshake"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Devoted to Progress
          </h3>

          {/* Partner Logos */}
          <div className="flex items-center gap-6 mb-8">
            <Image src="/aws.png" alt="AWS" width={55} height={55} />
            <Image src="/microsoft.png" alt="Microsoft" width={55} height={55} />
            <Image src="/gcp.png" alt="Google Cloud" width={55} height={55} />
            <Image src="/vmware.png" alt="VMWare" width={55} height={55} />
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Strategic Alliances and Partnerships<br />
            Explore our growing ecosystem of partners, shaping the future of
            technology together.
          </p>

          <motion.a
            whileHover={{ x: 5 }}
            href="#"
            className="text-indigo-700 text-lg font-semibold underline underline-offset-4"
          >
            Learn More →
          </motion.a>
        </motion.div>

      </div>
    </div>
  )
}
