"use client";

const TICKER_ITEMS = [
  "FDA QMSR 21 CFR 820",
  "ISO 13485:2016",
  "EU MDR 2017/745",
  "UDI DIRECT MARKING",
  "2D DATA MATRIX GRADING",
  "IQ / OQ / PQ PROCESS VALIDATION",
  "ISO 14971 RISK MANAGEMENT",
  "CLASS I → CLASS II ROADMAP",
  "SURGICAL INSTRUMENT REUSABILITY",
];

export default function Ticker() {
  return (
    <div className="relative py-4 overflow-hidden bg-white dark:bg-[#070b12] border-y border-neutral-200 dark:border-white/[0.08] transition-colors duration-300">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F5F7FA] dark:from-[#06090e] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F5F7FA] dark:from-[#06090e] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee gap-8 items-center">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-mono text-xs font-semibold tracking-widest text-neutral-600 dark:text-zinc-400 uppercase">
              {item}
            </span>
            <span className="text-brand-500 font-bold text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
