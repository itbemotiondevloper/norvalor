"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const STEPS = [
  {
    num: "01",
    label: "PHASE",
    title: "Assess & gap review",
    desc: "Comprehensive gap review against FDA QMSR, EU MDR 2017/745 and your customers' quality requirements.",
    graphicType: "lines",
    colSpan: "lg:col-span-6",
  },
  {
    num: "02",
    label: "PHASE",
    title: "Quality system build",
    desc: "Audit-ready ISO 13485 / 9001 quality systems, technical documentation files and standard operating procedures.",
    graphicType: "dots",
    colSpan: "lg:col-span-6",
  },
  {
    num: "03",
    label: "PHASE",
    title: "Shop-floor validation",
    desc: "2D Data Matrix laser marking, Grade A readability verification and IQ/OQ/PQ process validation.",
    graphicType: "network",
    colSpan: "lg:col-span-4",
  },
  {
    num: "04",
    label: "PHASE",
    title: "Risk & supplier controls",
    desc: "ISO 14971 risk management files, manufacturing engineering and supplier qualification for big medtech.",
    graphicType: "bars",
    colSpan: "lg:col-span-4",
  },
  {
    num: "05",
    label: "PHASE",
    title: "Sustain & grow",
    desc: "Retainer support, periodic safety updates and a defined growth path into Class II and new markets.",
    graphicType: "document",
    colSpan: "lg:col-span-4",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative min-h-screen lg:h-screen lg:max-h-[960px] flex flex-col justify-center py-14 sm:py-16 lg:py-6 bg-[#F5F7FA] dark:bg-[#06090e] border-b border-neutral-200 dark:border-white/[0.08] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full">
        {/* Section Header with BeMotion Squiggle Wave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8 lg:mb-7"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            How an engagement{" "}
            <span className="relative inline-block text-neutral-900 dark:text-white">
              works.
              <svg
                className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 text-brand-500"
                viewBox="0 0 160 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7C14 2 26 2 38 7C50 12 62 12 74 7C86 2 98 2 110 7C122 12 134 12 146 7C152 4.5 156 3 158 3"
                  stroke="#FF9933"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <div className="flex items-center gap-2 mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base text-neutral-600 dark:text-zinc-300 font-normal">
            <span className="text-brand-500 font-mono text-base">↳</span>
            <span>One partner from first assessment to ongoing compliance.</span>
          </div>
        </motion.div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-4.5">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-5 sm:p-6 lg:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#090e17] border border-neutral-200 dark:border-white/[0.08] hover:border-brand-500/40 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none hover:-translate-y-1 flex flex-col justify-between min-h-[175px] sm:min-h-[195px] lg:min-h-[185px] overflow-hidden ${step.colSpan}`}
            >
              <div>
                {/* Top Row: Phase Tag & Circular Checkmark Badge */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-neutral-500 dark:text-zinc-400 group-hover:text-brand-500 transition-colors uppercase">
                    {step.num} &middot; {step.label}
                  </span>

                  <div className="size-6 sm:size-6.5 rounded-full border border-neutral-200 dark:border-white/10 group-hover:border-brand-500/40 bg-neutral-50 dark:bg-white/[0.03] group-hover:bg-brand-500/10 flex items-center justify-center text-neutral-500 dark:text-zinc-400 group-hover:text-brand-500 transition-all duration-300">
                    <Check className="size-3 stroke-[2.5]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-bold text-neutral-900 dark:text-white tracking-tight leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-[13px] text-neutral-600 dark:text-zinc-400 font-normal leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>

              {/* Geometric Shapes in Bottom Right */}
              <div className="mt-3 pt-2 flex justify-end items-end select-none pointer-events-none">
                {step.graphicType === "lines" && (
                  <div className="flex flex-col gap-1.5 opacity-40 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brand-500/80 to-brand-500/20 rounded-full" />
                    <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-neutral-400/60 dark:from-zinc-500/60 to-transparent rounded-full" />
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-brand-500/70 to-brand-500/10 rounded-full" />
                    <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-neutral-400/50 dark:from-zinc-500/50 to-transparent rounded-full" />
                  </div>
                )}

                {step.graphicType === "dots" && (
                  <div className="grid grid-cols-6 gap-1.5 opacity-35 group-hover:opacity-85 transition-opacity duration-300">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span
                        key={i}
                        className={`size-1 sm:size-1.5 rounded-full transition-colors ${
                          i % 4 === 0
                            ? "bg-brand-500"
                            : i % 3 === 0
                            ? "bg-neutral-400 dark:bg-zinc-400"
                            : "bg-neutral-300 dark:bg-zinc-700/60"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {step.graphicType === "network" && (
                  <svg className="w-20 h-10 sm:w-24 sm:h-12 opacity-40 group-hover:opacity-90 transition-opacity duration-300" viewBox="0 0 100 50" fill="none">
                    <circle cx="15" cy="38" r="3.5" fill="#FF9933" />
                    <circle cx="50" cy="15" r="4" fill="#71717a" />
                    <circle cx="85" cy="32" r="3.5" fill="#FF9933" />
                    <circle cx="55" cy="42" r="3" fill="#a1a1aa" />
                    <line x1="15" y1="38" x2="50" y2="15" stroke="#FF9933" strokeWidth="1.5" strokeOpacity="0.6" />
                    <line x1="50" y1="15" x2="85" y2="32" stroke="#a1a1aa" strokeWidth="1.5" strokeOpacity="0.5" />
                    <line x1="15" y1="38" x2="55" y2="42" stroke="#a1a1aa" strokeWidth="1.5" strokeOpacity="0.4" />
                    <line x1="55" y1="42" x2="85" y2="32" stroke="#a1a1aa" strokeWidth="1.5" strokeOpacity="0.4" />
                  </svg>
                )}

                {step.graphicType === "bars" && (
                  <div className="flex items-end gap-1.5 opacity-40 group-hover:opacity-90 transition-opacity duration-300 h-9 sm:h-11">
                    <div className="w-1.5 sm:w-2 h-3 bg-neutral-400 dark:bg-zinc-600 group-hover:bg-brand-500/50 rounded-full transition-all duration-300 group-hover:h-4" />
                    <div className="w-1.5 sm:w-2 h-6 bg-neutral-400 dark:bg-zinc-500 group-hover:bg-brand-500/70 rounded-full transition-all duration-300 group-hover:h-8" />
                    <div className="w-1.5 sm:w-2 h-4 bg-neutral-400 dark:bg-zinc-600 group-hover:bg-brand-500/60 rounded-full transition-all duration-300 group-hover:h-6" />
                    <div className="w-1.5 sm:w-2 h-8 sm:h-10 bg-brand-500 rounded-full transition-all duration-300 group-hover:h-11" />
                    <div className="w-1.5 sm:w-2 h-5 bg-neutral-400 dark:bg-zinc-500 group-hover:bg-brand-500/60 rounded-full transition-all duration-300 group-hover:h-7" />
                  </div>
                )}

                {step.graphicType === "document" && (
                  <div className="size-10 sm:size-12 rounded-xl border border-neutral-300 dark:border-white/20 group-hover:border-brand-500/50 bg-neutral-50 dark:bg-white/[0.02] p-2 flex flex-col justify-between opacity-45 group-hover:opacity-90 transition-all duration-300">
                    <div className="w-5 h-1 bg-brand-500 rounded-full" />
                    <div className="w-full h-0.5 bg-neutral-300 dark:bg-zinc-600 rounded-full" />
                    <div className="w-6 h-0.5 bg-neutral-300 dark:bg-zinc-600 rounded-full" />
                    <div className="w-4 h-0.5 bg-brand-500/60 rounded-full" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
