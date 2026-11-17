"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    num: "01",
    tag: "SPECIALTY NICHE",
    title: "Deliberate Class I focus",
    subtitle:
      "An underserved niche handled as a dedicated specialty, not a scaled-down afterthought of higher-class work.",
    points: ["Dedicated Class I focus", "Lean, audit-ready systems", "Fixed-fee scope"],
    detail: "Focused specialty · Not a scaled-down afterthought",
  },
  {
    num: "02",
    tag: "ZERO HANDOFFS",
    title: "Quality, regulatory & engineering together",
    subtitle:
      "Fewer handoffs. The same team understands the regulatory standard and the machine shop floor.",
    points: ["Zero consultant handoffs", "Standard connected to machines", "Direct validation"],
    detail: "The standard connected directly to the machine",
  },
  {
    num: "03",
    tag: "DIRECT ENGAGEMENT",
    title: "Hands-on, senior-led",
    subtitle:
      "10+ years across leading orthopedic and surgical medtech. B.S. Mechanical Engineering, M.S. Industrial Engineering.",
    points: ["Direct founder lead", "B.S. ME & M.S. IE credentials", "Zero delegate handoffs"],
    detail: "Direct senior leadership · Zero junior delegate handoffs",
  },
];

export default function FoundersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Bind scroll progress across container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track scroll position to advance the active pillar
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextIdx = 0;
    if (latest >= 0.65) {
      nextIdx = 2;
    } else if (latest >= 0.3) {
      nextIdx = 1;
    } else {
      nextIdx = 0;
    }
    setActiveIdx(nextIdx);
  });

  const scrollToStep = (idx: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll = containerTop + (idx / (PILLARS.length - 1)) * totalHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
    setActiveIdx(idx);
  };

  return (
    <section
      id="why"
      ref={containerRef}
      className="relative h-[260vh] bg-[#F5F7FA] dark:bg-[#06090e] transition-colors duration-300"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-16 sm:py-20 lg:py-10 px-6 lg:px-12 overflow-hidden border-b border-neutral-200 dark:border-white/[0.08]">
        <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col justify-between my-auto h-full max-h-[820px]">
          
          {/* Main 2-Column Split matching Reference Video */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto">
            
            {/* Left Column: Title, Subtitle, and Circular Radial Gauge */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="text-[11px] font-mono tracking-widest text-brand-600 dark:text-brand-400 uppercase mb-3">
                // THE NORVALOR ADVANTAGE
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
                Why Norvalor.
              </h2>

              <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-zinc-400 font-normal leading-relaxed max-w-md">
                A focused alternative to large generalist consulting firms. Scroll to step through our core pillars.
              </p>

              {/* Circular Progress Gauge with Smooth Rotation & Fill */}
              <div className="mt-8 sm:mt-10 flex items-center gap-6">
                <div className="relative size-24 sm:size-28 flex items-center justify-center">
                  <svg className="size-full -rotate-90" viewBox="0 0 110 110">
                    <circle
                      cx="55"
                      cy="55"
                      r="46"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      fill="transparent"
                      className="text-neutral-200 dark:text-white/10"
                    />
                    <motion.circle
                      cx="55"
                      cy="55"
                      r="46"
                      stroke="#FF9933"
                      strokeWidth="3.5"
                      strokeDasharray="289"
                      animate={{ strokeDashoffset: 289 - (289 * (activeIdx + 1)) / 3 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>

                  {/* Center Number with Smooth Vertical Animation */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={activeIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="font-mono text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white"
                      >
                        0{activeIdx + 1}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Founder Credential Capsule */}
                <div className="flex flex-col gap-1 text-xs font-mono">
                  <span className="text-neutral-900 dark:text-white font-medium">
                    10+ Years in MedTech
                  </span>
                  <span className="text-neutral-500 dark:text-zinc-400">
                    B.S. ME &middot; M.S. IE
                  </span>
                  <span className="text-[11px] text-brand-600 dark:text-brand-400 mt-1">
                    Founder direct lead
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Scroll-Driven Interactive Steps */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-neutral-200 dark:divide-white/[0.08] border-t border-b border-neutral-200 dark:border-white/[0.08]">
              {PILLARS.map((pillar, idx) => {
                const isActive = activeIdx === idx;

                return (
                  <div
                    key={pillar.num}
                    onClick={() => scrollToStep(idx)}
                    className={cn(
                      "group py-5 sm:py-6 cursor-pointer transition-all duration-300 relative select-none",
                      isActive ? "opacity-100" : "opacity-45 hover:opacity-75"
                    )}
                  >
                    {/* Active Left Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="whyScrollActiveBar"
                        className="absolute -left-3 sm:-left-4 top-5 bottom-5 w-1 bg-brand-500 rounded-full"
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}

                    {/* Header Row: Step Tag + Progress Counter */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            "font-mono text-xs font-bold transition-colors",
                            isActive
                              ? "text-brand-600 dark:text-brand-400"
                              : "text-neutral-400 dark:text-zinc-600"
                          )}
                        >
                          STEP {pillar.num}
                        </span>
                        <span className="text-neutral-300 dark:text-zinc-700">&middot;</span>
                        <span className="text-[10px] font-mono tracking-wider text-neutral-500 dark:text-zinc-400 uppercase">
                          {pillar.tag}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-neutral-400 dark:text-zinc-600">
                        0{idx + 1} / 03
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mt-2 leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Expandable Active Narrative Body Driven by Scroll */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2.5 text-sm sm:text-base text-neutral-600 dark:text-zinc-300 font-normal leading-relaxed">
                            {pillar.subtitle}
                          </p>

                          {/* Interactive Pill Badges */}
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            {pillar.points.map((pt, pIdx) => (
                              <span
                                key={pIdx}
                                className="px-3 py-1 rounded-full text-xs font-mono bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-zinc-300"
                              >
                                {pt}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Minimal Footnote Strip */}
          <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-neutral-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brand-500" />
              <span>Scroll down to advance through all three pillars</span>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-brand-600 dark:text-brand-400 hover:text-brand-500 font-semibold transition-colors"
            >
              <span>Book a free consultation</span>
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}