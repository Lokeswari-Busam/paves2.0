"use client";
import { ArrowRight, Users, Rocket, Brain, Award, Building, Globe, Heart, Clock, Gift } from "lucide-react";

const whyWork = [
  { icon: Users, title: "Great Work Culture", desc: "A collaborative, respectful, and supportive environment." },
  { icon: Rocket, title: "Unlimited Growth Opportunities", desc: "Grow your career with constant upskilling and mentorship." },
  { icon: Brain, title: "Continuous Learning", desc: "Access workshops, training, certifications, and more." },
  { icon: Award, title: "Innovative Projects", desc: "Work on modern AI, ML, automation, and next-gen products." },
  { icon: Globe, title: "Inclusive Workplace", desc: "We celebrate diversity and promote equal opportunities." },
  { icon: Heart, title: "Supportive Leadership", desc: "Open-door leaders who guide your growth." },
];

const benefits = [
  { icon: Heart, title: "Health Insurance" },
  { icon: Clock, title: "Flexible Timings" },
  { icon: Building, title: "Work-from-Home Option" },
  { icon: Award, title: "Professional Training" },
  { icon: Gift, title: "Rewards & Bonuses" },
  { icon: Brain, title: "Learning Allowances" },
];

const departments = [
  { title: "Engineering", link: "/careers/departments/engineering" },
  { title: "AI & Machine Learning", link: "/careers/departments/ai-ml" },
  { title: "Design", link: "/careers/departments/design" },
  { title: "Marketing", link: "/careers/departments/marketing" },
  { title: "Sales", link: "/careers/departments/sales" },
];

const featuredJobs = [
  {
    title: "Frontend Developer",
    exp: "1–3 Years",
    type: "Full-time",
    location: "Hyderabad",
    summary: "Work on modern UI/UX using React & Next.js.",
  },
  {
    title: "AI/ML Engineer",
    exp: "0–2 Years",
    type: "Full-time",
    location: "Remote",
    summary: "Build ML pipelines and AI-driven systems.",
  },
  {
    title: "UI/UX Designer",
    exp: "0–1 Years",
    type: "Internship",
    location: "Bangalore",
    summary: "Design clean, modern UI components.",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br bg-[#2a3990] text-white py-12 px-3 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-blue-200 font-semibold tracking-wide mb-3">
              Build the Future With Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Join Our Team and Shape What’s Next
            </h1>
            <p className="text-blue-100 text-lg max-w-xl">
              Be part of a culture that values innovation, growth,
              creativity, and meaningful impact.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#jobs" className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90">
                View Openings
              </a>
              <a href="/careers/apply" className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20">
                Apply Now
              </a>
            </div>
          </div>

          <div className="hidden md:block ">
            <img
            //   src="/assets/professional-businesswoman-holding-plan.jpg"
                src="/assets/group-three-modern-architects.jpg"
              className=" w-[600px] h-[500px] shadow-lg  object-cover"
              alt="Team"
            />
          </div>

        </div>
      </section>

      {/* ---------------------- WHY WORK WITH US ---------------------- */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Why Work With Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {whyWork.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <item.icon className="w-12 h-12 text-blue-700 mb-5" />
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- LIFE AT COMPANY (GALLERY) ---------------------- */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center">
            Life at Paves Technologies
          </h2>
          <p className="text-gray-600 text-center mt-2">
            A glimpse into our culture and people.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <img className="rounded-xl shadow-md" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
            <img className="rounded-xl shadow-md" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a" />
            <img className="rounded-xl shadow-md" src="https://images.unsplash.com/photo-1556761175-4b46a572b786" />
          </div>
        </div>
      </section>

      {/* ---------------------- BENEFITS ---------------------- */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-900 text-center">Benefits & Perks</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          {benefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-md">
              <b.icon className="text-blue-700 w-10 h-10 mb-4" />
              <p className="font-semibold text-blue-900">{b.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- DEPARTMENTS ---------------------- */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center">Explore Departments</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {departments.map((d, i) => (
              <a
                key={i}
                href={d.link}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:border-blue-600 border transition"
              >
                <h3 className="text-xl font-semibold text-blue-900">{d.title}</h3>
                <p className="text-blue-700 mt-3 flex items-center gap-1">
                  View Roles <ArrowRight size={18} />
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- FEATURED JOBS ---------------------- */}
      <section id="jobs" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-blue-900">Featured Jobs</h2>

        <div className="mt-10 grid gap-8">
          {featuredJobs.map((job, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md border hover:border-blue-700 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-900">{job.title}</h3>
              <p className="text-gray-600 mt-1">{job.summary}</p>

              <div className="flex flex-wrap gap-4 mt-5 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-lg">{job.exp}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-lg">{job.type}</span>
                <span className="px-3 py-1 bg-gray-200 rounded-lg">{job.location}</span>
              </div>

              <a href="/careers/job-details" className="inline-flex items-center text-blue-700 mt-5 font-semibold">
                View Details <ArrowRight className="ml-1" size={18} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- FINAL CTA ---------------------- */}
      <section className="bg-blue-800 text-white text-center py-24 px-6 mt-20">
        <h2 className="text-4xl font-bold">Ready to Build Your Career With Us?</h2>
        <p className="mt-3 text-blue-200 text-lg">
          Explore openings in engineering, AI, product, marketing, and more.
        </p>

        <a
          href="/careers/jobs"
          className="inline-block mt-8 bg-white text-blue-900 font-semibold px-8 py-3 rounded-xl shadow-lg hover:opacity-90"
        >
          Explore All Roles
        </a>
      </section>

    </div>
  );
}
