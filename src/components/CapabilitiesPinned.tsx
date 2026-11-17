"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "qms",
    number: "01",
    tag: "QUALITY & REGULATORY",
    title: "FDA QMSR & ISO 13485 / 9001",
    subtitle: "Practical quality systems built for compliance and the way your business actually works.",
    scope: "Fixed-Fee Implementation",
  },
  {
    id: "mdr",
    number: "02",
    tag: "QUALITY & REGULATORY",
    title: "EU MDR Technical Documentation",
    subtitle: "Build and maintain defensible technical files and classification support for the European market.",
    scope: "Technical File Build",
  },
  {
    id: "udi",
    number: "03",
    tag: "ENGINEERING",
    title: "UDI & Direct Laser Marking",
    subtitle: "From 2D Data Matrix marking to process validation on the machine shop floor.",
    scope: "Shop-Floor Validation",
  },
  {
    id: "risk",
    number: "04",
    tag: "ENGINEERING",
    title: "Risk & Manufacturing Support",
    subtitle: "Engineering and risk documentation connected directly to manufacturing.",
    scope: "ISO 14971 & IQ/OQ/PQ",
  },
];

export default function CapabilitiesPinned() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [maxScrollX, setMaxScrollX] = useState(1000);

  // Bind scroll progress across container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamically calculate horizontal distance to scroll
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const distance = Math.max(0, trackWidth - viewportWidth + 80);
        setMaxScrollX(distance);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  // Smooth horizontal translation driven by vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScrollX]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let nextIdx = 0;
    if (latest >= 0.75) {
      nextIdx = 3;
    } else if (latest >= 0.5) {
      nextIdx = 2;
    } else if (latest >= 0.25) {
      nextIdx = 1;
    } else {
      nextIdx = 0;
    }
    setActiveIdx(nextIdx);
  });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative h-[260vh] bg-[#F5F7FA] dark:bg-[#06090e] transition-colors duration-300"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden border-b border-neutral-200 dark:border-white/[0.08]">
        {/* Top Header Row matching Reference */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4 sm:mb-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              What we do.
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm md:text-base text-neutral-600 dark:text-zinc-400 font-normal">
              Quality and regulatory consulting paired with hands-on engineering, all under one roof.
            </p>
          </div>

          {/* Right Text & Counter Indicator */}
          <div className="flex flex-col sm:items-end text-left sm:text-right">
            <span className="text-xs sm:text-sm font-normal text-neutral-600 dark:text-zinc-400">
              Scroll to explore. Class I to II QA/RA &amp; engineering scopes.
            </span>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="font-mono text-xs font-semibold text-brand-600 dark:text-brand-400">
                0{activeIdx + 1} <span className="text-neutral-400 dark:text-zinc-600">/ 04</span>
              </span>
              <div className="w-24 sm:w-32 h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-brand-500 rounded-full"
                  style={{
                    width: useTransform(scrollYProgress, [0, 1], ["25%", "100%"]),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Track of Simple, Elegant Cards */}
        <div className="relative z-10 w-full flex-1 flex items-center overflow-visible my-auto">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-stretch gap-5 sm:gap-6 pl-6 sm:pl-10 lg:pl-[calc(max(1.5rem,(100vw-80rem)/2+3rem))] pr-12 will-change-transform"
          >
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={cn(
                  "group relative w-[290px] sm:w-[330px] lg:w-[350px] shrink-0 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between h-[340px] sm:h-[370px] shadow-sm hover:shadow-xl dark:shadow-none overflow-hidden",
                  "bg-white dark:bg-[#090e17] border",
                  activeIdx === idx
                    ? "border-brand-500/50 dark:border-brand-500/40"
                    : "border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20"
                )}
              >
                {/* Top: Category Tag + Subtle Line */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-neutral-500 dark:text-zinc-400 uppercase font-medium">
                    {service.tag}
                  </span>
                  <span className="size-1.5 rounded-full bg-brand-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Center: Prominent, Simple, Bold Numbering */}
                <div className="my-auto py-2">
                  <span className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-brand-500 dark:text-brand-400 select-none leading-none">
                    {service.number}
                  </span>
                </div>

                {/* Bottom: Title + Description */}
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 dark:text-zinc-400 font-normal leading-relaxed">
                    {service.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-400 dark:text-zinc-500 uppercase">
                      {service.scope}
                    </span>
                    <ArrowUpRight className="size-3.5 text-neutral-400 dark:text-zinc-500 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            ))}

            {/* Ending Simple CTA Card */}
            <div className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between h-[340px] sm:h-[370px] bg-neutral-900 dark:bg-white/[0.03] border border-neutral-800 dark:border-white/10 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-brand-400 uppercase font-medium">
                  NEXT STEP
                </span>
                <span className="size-1.5 rounded-full bg-brand-500" />
              </div>

              <div className="my-auto py-2">
                <span className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-white/20 select-none leading-none">
                  05
                </span>
              </div>

              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  Start an engagement.
                </h4>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Transparent fixed-fee scopes for Class I to II compliance.
                </p>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <span>Book free consultation</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footnote Bar */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-zinc-500 border-t border-neutral-200/60 dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-500" />
            <span>Class I Specialized &middot; Seamless Class II Expansion Path</span>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <span>FDA 21 CFR 820</span>
            <span>&middot;</span>
            <span>MDR 2017/745</span>
            <span>&middot;</span>
            <span>ISO 13485</span>
          </div>
        </div>
      </div>
    </section>
  );
}