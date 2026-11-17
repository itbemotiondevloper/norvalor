"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";

function HangingInteractiveVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates relative to card center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth physics spring configurations for responsive weight & damping
  const springConfig = { damping: 22, stiffness: 170, mass: 0.55 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D tilt angles based on cursor offset
  const rotateX = useTransform(smoothY, [-180, 180], [15, -15]);
  const rotateY = useTransform(smoothX, [-180, 180], [-15, 15]);

  // Positional magnetic shift toward cursor (giving the illusion of being pulled / swinging on cables)
  const shiftX = useTransform(smoothX, [-180, 180], [-18, 18]);
  const shiftY = useTransform(smoothY, [-180, 180], [-14, 14]);

  // Cable sway physics
  const leftCableAngle = useTransform(smoothX, [-180, 180], [-6, 6]);
  const rightCableAngle = useTransform(smoothX, [-180, 180], [-6, 6]);

  // Dynamic light sheen position
  const sheenX = useTransform(smoothX, [-180, 180], [10, 90]);
  const sheenY = useTransform(smoothY, [-180, 180], [10, 90]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] py-4 px-2 flex flex-col items-center justify-center select-none cursor-grab active:cursor-grabbing"
      style={{ perspective: 1200 }}
    >
      {/* Hanging Suspension Cables & Mounts */}
      <div className="w-full flex justify-between px-16 sm:px-20 -mb-1 z-20 pointer-events-none">
        {/* Left Cable Anchor */}
        <div className="flex flex-col items-center">
          <div className="size-2 rounded-full bg-neutral-400 dark:bg-zinc-600 ring-2 ring-brand-500/40 shadow-xs" />
          <motion.div
            style={{ rotate: isHovered ? leftCableAngle : 0 }}
            animate={
              isHovered
                ? {}
                : {
                    height: [26, 30, 26],
                    rotate: [0, -1, 0, 1, 0],
                  }
            }
            transition={{ repeat: isHovered ? 0 : Infinity, duration: 6, ease: "easeInOut" }}
            className="w-[1.5px] h-7 bg-gradient-to-b from-neutral-400 dark:from-white/40 via-neutral-300 dark:via-white/20 to-brand-500/80 origin-top"
          />
          <div className="w-2.5 h-1.5 rounded-xs bg-neutral-300 dark:bg-zinc-700 border border-neutral-400/60 dark:border-white/20 shadow-xs" />
        </div>

        {/* Right Cable Anchor */}
        <div className="flex flex-col items-center">
          <div className="size-2 rounded-full bg-neutral-400 dark:bg-zinc-600 ring-2 ring-brand-500/40 shadow-xs" />
          <motion.div
            style={{ rotate: isHovered ? rightCableAngle : 0 }}
            animate={
              isHovered
                ? {}
                : {
                    height: [30, 26, 30],
                    rotate: [0, 1, 0, -1, 0],
                  }
            }
            transition={{ repeat: isHovered ? 0 : Infinity, duration: 6, ease: "easeInOut" }}
            className="w-[1.5px] h-7 bg-gradient-to-b from-neutral-400 dark:from-white/40 via-neutral-300 dark:via-white/20 to-brand-500/80 origin-top"
          />
          <div className="w-2.5 h-1.5 rounded-xs bg-neutral-300 dark:bg-zinc-700 border border-neutral-400/60 dark:border-white/20 shadow-xs" />
        </div>
      </div>

      {/* Floating Hanging Medical Visual Frame */}
      <motion.div
        animate={
          isHovered
            ? {}
            : {
                y: [0, -9, 0, 9, 0],
                rotateZ: [0, 0.8, 0, -0.8, 0],
              }
        }
        transition={{
          repeat: isHovered ? 0 : Infinity,
          duration: 6.5,
          ease: "easeInOut",
        }}
        style={{
          rotateX,
          rotateY,
          x: shiftX,
          y: shiftY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl border border-neutral-300/80 dark:border-white/15 bg-neutral-950 shadow-2xl overflow-hidden group transition-shadow duration-300 hover:shadow-brand-500/15"
      >
        {/* Dynamic Specular Sheen (Reacts to Cursor Motion) */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [sheenX, sheenY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255, 153, 51, 0.24) 0%, rgba(255, 255, 255, 0.08) 25%, transparent 65%)`
            ),
          }}
        />

        {/* Corner Engineering Markers (Elevated in 3D Space) */}
        <div
          style={{ transform: "translateZ(32px)" }}
          className="absolute top-3 left-3.5 z-20 text-[10px] font-mono text-white/70 tracking-widest select-none pointer-events-none flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10"
        >
          <span className="size-1.5 rounded-full bg-brand-500 animate-ping" />
          <span>SPEC // TI-01</span>
        </div>

        <div
          style={{ transform: "translateZ(32px)" }}
          className="absolute top-3 right-3.5 z-20 text-[10px] font-mono text-brand-400 tracking-wider bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-brand-500/30 select-none pointer-events-none"
        >
          [UDI GRADE A]
        </div>

        {/* The Studio Render Image */}
        <div className="relative w-full h-full scale-[1.04]">
          <Image
            src="/images/hero-instrument.jpg"
            alt="Precision medical titanium surgical instrument with laser-etched 2D Data Matrix code"
            fill
            priority
            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>

        {/* Subtle Linear Vignette (Pure crisp contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

        {/* Live Technical Overlays / Telemetry HUD (Elevated with translateZ) */}
        <div
          style={{ transform: "translateZ(38px)" }}
          className="absolute inset-x-3 sm:inset-x-4 bottom-3 sm:bottom-4 z-20 flex flex-col gap-2 pointer-events-none"
        >
          <div className="flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-white shadow-lg">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs text-zinc-300 font-medium">
                LASER DPM VERIFIED
              </span>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-brand-400 font-semibold">
              ISO 15415 &middot; 4.0/A
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1">
            <span>Ti-6Al-4V ELI &middot; 17-4 PH SS</span>
            <span>QMSR 820.30 &middot; MDR</span>
          </div>
        </div>
      </motion.div>

      {/* Dynamic Ground Shadow Responding to Elevation */}
      <motion.div
        animate={
          isHovered
            ? { scale: 0.9, opacity: 0.3 }
            : { scale: [0.95, 0.85, 0.95], opacity: [0.35, 0.18, 0.35] }
        }
        transition={{ repeat: isHovered ? 0 : Infinity, duration: 6.5, ease: "easeInOut" }}
        className="w-3/4 h-3.5 rounded-full bg-black/40 dark:bg-black/90 blur-md mt-2.5 pointer-events-none"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen lg:max-h-[960px] flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-6 lg:px-12 bg-[#F5F7FA] dark:bg-[#06090e] border-b border-neutral-200 dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      {/* Precision Blueprint Grid (Subtle Lines, zero blur glows) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-neutral-300/30 dark:border-white/[0.03] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        {/* Main 2-Column Split: Content & Bespoke Medical Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Authentic Copy, Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            

            {/* Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]"
            >
              Class I medical device compliance.{" "}
              <span className="relative inline-block text-brand-500">
                Low risk, not low effort.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-neutral-600 dark:text-zinc-300 leading-relaxed max-w-xl font-normal"
            >
              Fixed-fee quality, regulatory and engineering support for surgical instrument makers, device startups and OEMs, built to grow with you from Class I into Class II and new markets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-black bg-brand-500 hover:bg-brand-400 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a free consultation</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#check"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-neutral-800 dark:text-zinc-300 hover:text-black dark:hover:text-white bg-white dark:bg-white/[0.04] hover:bg-neutral-100 dark:hover:bg-white/[0.08] border border-neutral-200 dark:border-white/10 hover:border-brand-500/30 transition-all duration-300 shadow-sm"
              >
                <span>Take readiness check</span>
                <ChevronRight className="size-3.5 text-neutral-400 dark:text-zinc-500" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-mono text-neutral-500 dark:text-zinc-400"
            >
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06]">
                <ShieldCheck className="size-3 text-brand-500" /> FDA QMSR Ready
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06]">
                <CheckCircle2 className="size-3 text-brand-500" /> EU MDR 2017/745
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06]">
                <Cpu className="size-3 text-brand-500" /> ISO 13485 &middot; ISO 9001
              </span>
            </motion.div>
          </div>

          {/* Right Column: Hanging Suspended Visual with 3D Cursor Shift */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center items-center"
          >
            <HangingInteractiveVisual />
          </motion.div>
        </div>
      </div>

      {/* Bottom Compact 4-Stat Metric Strip (Fits comfortably within single screen height) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-4 sm:pt-5 border-t border-neutral-200 dark:border-white/[0.08]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="flex flex-col p-3 sm:p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.06] shadow-sm">
            <span className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              10+ years
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-600 dark:text-zinc-400 mt-0.5 leading-snug">
              in orthopedic &amp; surgical medtech
            </span>
          </div>

          <div className="flex flex-col p-3 sm:p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.06] shadow-sm">
            <span className="font-display text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              FDA QMSR &middot; MDR
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-600 dark:text-zinc-400 mt-0.5 leading-snug">
              2017/745, ISO 13485, ISO 9001
            </span>
          </div>

          <div className="flex flex-col p-3 sm:p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.06] shadow-sm">
            <span className="font-display text-xl sm:text-2xl font-bold text-brand-600 dark:text-brand-400 tracking-tight">
              Fixed-fee scopes
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-600 dark:text-zinc-400 mt-0.5 leading-snug">
              clear deliverables, no surprises
            </span>
          </div>

          <div className="flex flex-col p-3 sm:p-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/[0.06] shadow-sm">
            <span className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Class I to II
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-600 dark:text-zinc-400 mt-0.5 leading-snug">
              a defined growth path
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}