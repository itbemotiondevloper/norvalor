"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TIERS = [
  {
    name: "Scoped projects",
    type: "Fixed fee",
    desc: "Defined deliverables and a set price for quality systems, technical files and validations.",
    popular: true,
  },
  {
    name: "Monthly support",
    type: "Retainer",
    desc: "Ongoing quality and regulatory coverage with a set number of hours each month.",
    popular: false,
  },
  {
    name: "On-demand consulting",
    type: "Hourly",
    desc: "Expert help for reviews, questions and urgent needs.",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-28 md:py-36 bg-[#F5F7FA] dark:bg-[#080d14] border-b border-neutral-200 dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      <div id="engage" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Pricing you can plan around
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-zinc-400 font-normal leading-relaxed">
            Three ways to work with us. Scope and fees are agreed up front, in writing.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`relative p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${tier.popular
                  ? "bg-white dark:bg-[#0c121d] border-brand-500/40 shadow-md dark:shadow-none ring-1 ring-brand-500/30"
                  : "bg-white dark:bg-[#090e16]/80 hover:bg-neutral-50 dark:hover:bg-[#0c121d]/80 border-neutral-200 dark:border-white/[0.08] shadow-sm hover:shadow-md"
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-wider text-brand-600 dark:text-brand-400 uppercase">
                    {tier.type}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                  {tier.name}
                </h3>

                <p className="text-base text-neutral-600 dark:text-zinc-400 mt-4 leading-relaxed font-normal">
                  {tier.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-white/[0.06]">
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${tier.popular
                      ? "bg-brand-500 hover:bg-brand-400 text-black shadow-sm hover:scale-[1.02]"
                      : "bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.05] dark:hover:bg-white/10 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/10"
                    }`}
                >
                  <span>Get a scoped quote</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA Link */}

      </div>
    </section>
  );
}
