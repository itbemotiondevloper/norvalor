"use client";

import { useRef } from "react";
import { ArrowUpRight, Check, ScanLine, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

const AUDIENCES = [
  {
    id: "instruments",
    num: "01",
    tag: "SURGICAL INSTRUMENTS",
    title: "Surgical instrument manufacturers",
    desc: "Meet the marking, quality and documentation demands of your customers and regulators.",
    challenges: [
      "26 May 2027 EU MDR direct marking deadline approaches without a validated laser process.",
      "Customer audits demand ISO 15415 Grade A barcode readability after 100+ autoclave cycles.",
    ],
    solutions: [
      "End-to-end 2D Data Matrix laser marking parameter optimization & process validation (IQ/OQ/PQ).",
      "Complete Annex II/III EU MDR technical documentation and passivation verification.",
    ],
    schematic: "scanner",
  },
  {
    id: "startups",
    num: "02",
    tag: "STARTUPS & INNOVATORS",
    title: "Medical device startups",
    desc: "Launch with a right-sized quality system that scales as you grow.",
    challenges: [
      "500-page enterprise QMS templates stall engineering progress and burn early runway.",
      "Unclear device classification and intended use strategy before investor diligence.",
    ],
    solutions: [
      "Right-sized, audit-ready ISO 13485:2016 quality system tailored to your actual team size.",
      "Early classification defense and clear regulatory roadmap built for investor confidence.",
    ],
    schematic: "growth",
  },
  {
    id: "oems",
    num: "03",
    tag: "OEMS & CONTRACT PARTNERS",
    title: "OEMs & contract manufacturers",
    desc: "Qualify as a supplier to large medtech and turn regulatory strength into new revenue.",
    challenges: [
      "Tier-1 medtech OEMs requiring rigorous supplier audits and validation proof before awarding contracts.",
      "Gap between shop-floor machining capability and customer quality agreement requirements.",
    ],
    solutions: [
      "Supplier audit preparation, process capability studies (Cp/Cpk > 1.67), and risk management files.",
      "Turn regulatory and validation excellence into a competitive advantage to win new OEM contracts.",
    ],
    schematic: "precision",
  },
];

export default function AudienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="who"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-[#F5F7FA] dark:bg-[#070b12] border-b border-neutral-200 dark:border-white/[0.08] transition-colors duration-300 overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Header & Subtitle */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest">
                01 / 03
              </span>
              <svg className="w-8 h-2 text-brand-500/60" viewBox="0 0 32 8" fill="none">
                <path d="M1 4C6 1 10 1 15 4C20 7 24 7 31 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-mono text-xs text-neutral-500 dark:text-zinc-400 uppercase tracking-widest">
                WHO WE SERVE
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Who we{" "}
              <span className="relative inline-block text-neutral-900 dark:text-white">
                serve.
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 text-brand-500"
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

            <div className="flex items-center gap-2.5 mt-6 text-sm sm:text-base text-neutral-600 dark:text-zinc-300 font-normal">
              <span className="text-brand-500 font-mono text-base">↳</span>
              <span>Specialists in the work most firms treat as an afterthought.</span>
            </div>

            {/* Quick Segment Highlights */}
            <div className="mt-8 hidden lg:flex flex-col gap-2.5 pt-6 border-t border-neutral-200 dark:border-white/[0.08]">
              {AUDIENCES.map((item) => (
                <div key={item.id} className="flex items-center gap-3 text-xs font-mono text-neutral-600 dark:text-zinc-400">
                  <span className="size-1.5 rounded-full bg-brand-500" />
                  <span className="text-neutral-800 dark:text-zinc-300 font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Stacked Card Deck */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-10 pb-8">
            {AUDIENCES.map((card, idx) => (
              <div
                key={card.id}
                style={{
                  top: `calc(13vh + ${idx * 28}px)`,
                }}
                className="lg:sticky group relative rounded-3xl bg-white dark:bg-[#090e17] border border-neutral-200 dark:border-white/10 hover:border-brand-500/40 p-6 sm:p-8 md:p-9 shadow-md dark:shadow-[0_16px_50px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden"
              >
                {/* Top Card Header */}
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-white/[0.08] pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-brand-600 dark:text-brand-400">
                      {card.num}
                    </span>
                    <svg className="w-6 h-2 text-brand-500/60" viewBox="0 0 24 6" fill="none">
                      <path d="M1 3C5 1 8 1 12 3C16 5 19 5 23 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="font-mono text-[10px] sm:text-xs text-neutral-500 dark:text-zinc-400 tracking-wider uppercase">
                      {card.tag}
                    </span>
                  </div>

                  <span className="size-2 rounded-full bg-brand-500" />
                </div>

                {/* Main 2-Column Split inside Card */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Side: Illustration & Title */}
                  <div className="md:col-span-6 flex flex-col justify-between h-full">
                    
                    {/* Technical Schematic Illustration */}
                    <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#06090e] border border-neutral-200 dark:border-white/[0.06] mb-6 flex flex-col items-center justify-center relative overflow-hidden h-36">
                      {card.schematic === "scanner" && (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="relative size-16 rounded-xl bg-white dark:bg-zinc-950 border border-brand-500/30 flex items-center justify-center shadow-sm">
                            <ScanLine className="size-10 text-brand-500 animate-pulse" />
                            <motion.div
                              className="absolute inset-x-1 h-0.5 bg-brand-400"
                              animate={{ y: [-15, 15, -15] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500 dark:text-zinc-400 uppercase tracking-widest mt-1">
                            UDI 2D Data Matrix &middot; Grade A
                          </span>
                        </div>
                      )}

                      {card.schematic === "growth" && (
                        <div className="w-full flex flex-col items-center justify-center">
                          <svg className="w-48 h-20" viewBox="0 0 200 80" fill="none">
                            <path
                              d="M 10 70 C 60 70, 100 45, 190 15"
                              stroke="#FF9933"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <circle cx="20" cy="69" r="4" fill="#71717a" />
                            <circle cx="90" cy="50" r="4.5" fill="#FF9933" />
                            <circle cx="185" cy="17" r="5" fill="#FF9933" />
                            <line x1="20" y1="75" x2="20" y2="69" stroke="#9ca3af" strokeWidth="2" />
                            <line x1="90" y1="75" x2="90" y2="50" stroke="#FF9933" strokeWidth="2" strokeOpacity="0.5" />
                            <line x1="185" y1="75" x2="185" y2="17" stroke="#FF9933" strokeWidth="2" />
                          </svg>
                          <span className="text-[10px] font-mono text-neutral-500 dark:text-zinc-400 uppercase tracking-widest">
                            Class I &rarr; Class II Scaling Curve
                          </span>
                        </div>
                      )}

                      {card.schematic === "precision" && (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="flex items-center gap-3">
                            <div className="size-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500">
                              <Settings2 className="size-7 animate-spin-slow" />
                            </div>
                            <div className="flex flex-col gap-1 text-[11px] font-mono">
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Cp/Cpk &gt; 1.67 PASS</span>
                              <span className="text-neutral-500 dark:text-zinc-400">Supplier Qualified</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-400 dark:text-zinc-500 uppercase tracking-widest mt-1">
                            Precision Process Validation
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight leading-snug">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm text-neutral-600 dark:text-zinc-400 font-normal leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  {/* Right Side: Challenges & Where We Help */}
                  <div className="md:col-span-6 flex flex-col justify-between h-full space-y-6 md:border-l md:border-neutral-200 dark:md:border-white/[0.08] md:pl-6">
                    
                    {/* Common Challenges */}
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-500 dark:text-zinc-400 block mb-3">
                        COMMON CHALLENGES
                      </span>
                      <div className="space-y-2.5">
                        {card.challenges.map((ch, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-zinc-300 leading-relaxed">
                            <span className="text-neutral-400 dark:text-zinc-500 font-mono mt-0.5">&compfn;</span>
                            <span>{ch}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Where Norvalor Helps */}
                    <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06]">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-3">
                        HOW NORVALOR HELPS
                      </span>
                      <div className="space-y-2.5">
                        {card.solutions.map((sol, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-zinc-200 leading-relaxed">
                            <Check className="size-3.5 text-brand-500 shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-4">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black bg-brand-500 hover:bg-brand-400 transition-all duration-300 shadow-sm hover:scale-[1.02]"
                      >
                        <span>Explore solutions</span>
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
