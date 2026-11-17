"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowUpRight } from "lucide-react";

export default function MilestoneSection() {
  return (
    <section id="milestone" className="relative py-16 md:py-24 bg-[#F5F7FA] dark:bg-[#080d14] border-b border-neutral-200 dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-white dark:bg-[#0a0e17] border border-brand-500/30 p-8 sm:p-12 md:p-14 shadow-sm dark:shadow-none overflow-hidden">
          {/* Subtle Top Ambient Border Accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-brand-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column: Big Impact Date */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-wider mb-5">
                <AlertCircle className="size-3.5" />
                <span>Deadline to plan for</span>
              </div>

              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-none">
                26 MAY <br />
                <span className="text-brand-500">2027</span>
              </div>

              <p className="font-mono text-xs text-neutral-500 dark:text-zinc-400 mt-4 uppercase tracking-widest">
                EU MDR Reusable Class I Devices
              </p>
            </div>

            {/* Right Column: Context & Action */}
            <div className="lg:col-span-7 flex flex-col items-start border-t lg:border-t-0 lg:border-l border-neutral-200 dark:border-white/10 pt-6 lg:pt-0 lg:pl-10">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                UDI direct marking for reusable Class I devices applies from 26 May 2027 under EU MDR.
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 dark:text-zinc-300 mt-4 leading-relaxed font-normal">
                We handle 2D Data Matrix marking, grading and process validation end to end.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-brand-500 hover:bg-brand-400 transition-all duration-300 shadow-sm hover:scale-[1.02]"
                >
                  <span>Talk to us early</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
