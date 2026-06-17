"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Search } from "lucide-react";

const LCA_DATA = [
  {
    soc: "Software Quality Assurance Analysts and Testers",
    jobTitle: "Technical Lead / Sr Technical Lead",
    state: "Florida",
    city: "Lake Mary",
    datePosted: "05/20/2025",
    pdf: "/lca/2025-05-20-LCA-Posting-Paves-Technologies-Inc.pdf",
  },
  {
    soc: "Business Intelligence Analysts",
    jobTitle: "Data Engineer",
    state: "Georgia",
    city: "Roswell",
    datePosted: "03/27/2026",
    pdf: "/lca/LCA-Notice-of-Filing-2026-03-27.pdf",
  },
  {
    soc: "Business Intelligence Analysts",
    jobTitle: "Senior Data Analyst",
    state: "Florida",
    city: "Lake Mary",
    datePosted: "05/04/2026",
    pdf: "/lca/E_M_2_2026_LCA-Notice-of-Filing-SDA.pdf",
  },
  {
    soc: "Data Scientists",
    jobTitle: "Data Engineer",
    state: "Georgia",
    city: "Roswell, Atlanta",
    datePosted: "05/04/2026",
    pdf: "/lca/C_V_1_2026_LCA-Notice-of-Filing.pdf",
  },
];

const COLUMNS = [
  { field: "soc",        label: "SOC Title" },
  { field: "jobTitle",   label: "Paves Job Title" },
  { field: "state",      label: "State" },
  { field: "city",       label: "City" },
  { field: "datePosted", label: "Date of Posting (MM/DD/YYYY)" },
];

export default function LCANoticesPage() {
  const [search,   setSearch]   = useState("");
  const [sortField, setSortField] = useState("datePosted");
  const [sortDir,   setSortDir]   = useState("desc");

  const filtered = LCA_DATA
    .filter((item) => {
      const q = search.toLowerCase();
      return (
        item.soc.toLowerCase().includes(q)       ||
        item.jobTitle.toLowerCase().includes(q)  ||
        item.state.toLowerCase().includes(q)     ||
        item.city.toLowerCase().includes(q)      ||
        item.datePosted.includes(q)
      );
    })
    .sort((a, b) => {
      const av = a[sortField] ?? "";
      const bv = b[sortField] ?? "";
      return sortDir === "asc" ? av.localeCompare(bv) : bv.localeCompare(av);
    });

  const toggleSort = (field) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortField(field); setSortDir("asc"); }
  };

  const sortIcon = (field) =>
    sortField === field ? (sortDir === "asc" ? " ▲" : " ▼") : " ↕";

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1b4b 0%, #1a2a6c 60%, #2a3990 100%)",
        }}
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* decorative shape */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none overflow-hidden">
          <div
            className="absolute -right-16 top-[-30%] w-[600px] h-[600px] rounded-full"
            style={{ background: "rgba(192,57,90,0.35)" }}
          />
          <div
            className="absolute right-32 top-[30%] w-[300px] h-[300px] rounded-full"
            style={{ background: "rgba(192,57,90,0.2)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="inline-block px-4 py-1 border border-pink-300 text-pink-200 uppercase tracking-widest text-[10px] font-bold mb-4">
            Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            LCA Notices
          </h1>
          <nav className="text-sm text-blue-200 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition">Paves Technologies</Link>
            <span className="text-blue-400">›</span>
            <span className="text-white">LCA Notices</span>
          </nav>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">

          {/* Legal header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b4b] mb-5">
            US Labor Condition Application (LCA)
          </h2>

          <div className="bg-white border border-blue-100 rounded-xl p-5 sm:p-6 mb-8 text-sm sm:text-base leading-relaxed text-gray-700 space-y-3 shadow-sm">
            <p>
              Pursuant to{" "}
              <span className="font-semibold text-[#0d1b4b]">20 CFR 655.734</span>,
              Paves Technologies Inc. is providing notice to potentially affected workers that
              H-1B non-immigrant workers are being sought to fill positions at the worksites
              listed below.
            </p>
            <p>
              Each Labor Condition Application (LCA) is available for public inspection at the
              company&apos;s principal place of business:
            </p>
            <div className="text-[#0d1b4b] font-semibold pl-3 border-l-4 border-[#c0395a]">
              <p>Paves Technologies Inc.</p>
              <p>1540 International Parkway, Suite 2000</p>
              <p>Lake Mary, FL 32746</p>
            </div>
            <p className="text-gray-500 text-sm">
              Complaints alleging misrepresentation of material facts in the LCA and/or failure
              to comply with the terms of the LCA may be filed with the U.S. Department of
              Labor, Wage and Hour Division.
            </p>
          </div>

          {/* Controls row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-700">{filtered.length}</span> of{" "}
              <span className="font-medium text-gray-700">{LCA_DATA.length}</span> entries
            </p>
            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm
                           focus:outline-none focus:ring-2 focus:ring-[#c0395a] focus:border-transparent"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr style={{ background: "#fce8ef" }}>
                  {COLUMNS.map(({ field, label }) => (
                    <th
                      key={field}
                      onClick={() => toggleSort(field)}
                      className="text-left px-4 py-3 font-semibold text-gray-700 cursor-pointer
                                 select-none whitespace-nowrap transition-colors"
                      style={sortField === field ? { background: "#f4a7bf", color: "#6b1530" } : {}}
                    >
                      {label}
                      <span className="text-gray-400 text-xs ml-1">{sortIcon(field)}</span>
                    </th>
                  ))}
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 whitespace-nowrap"
                      style={{ background: sortField === "view" ? "#f4a7bf" : undefined }}>
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-gray-400">
                      No matching records found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((item, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-100 hover:bg-pink-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-gray-700">{item.soc}</td>
                      <td className="px-4 py-3 font-medium text-[#0d1b4b]">{item.jobTitle}</td>
                      <td className="px-4 py-3 text-gray-600">{item.state}</td>
                      <td className="px-4 py-3 text-gray-600">{item.city}</td>
                      <td className="px-4 py-3 text-gray-600">{item.datePosted}</td>
                      <td className="px-4 py-3">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium transition-colors"
                          style={{ color: "#c0395a" }}
                          onMouseOver={(e) => e.currentTarget.style.color = "#8b1a30"}
                          onMouseOut={(e)  => e.currentTarget.style.color = "#c0395a"}
                        >
                          <FileText className="w-4 h-4 flex-shrink-0" />
                          View
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            Showing 1 to {filtered.length} of {LCA_DATA.length} entries
          </p>
        </div>
      </section>
    </>
  );
}
