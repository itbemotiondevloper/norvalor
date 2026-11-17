"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    id: "qms",
    text: "A documented quality management system",
  },
  {
    id: "class",
    text: "Device classification and intended use confirmed",
  },
  {
    id: "mdr",
    text: "EU MDR technical documentation in place",
  },
  {
    id: "udi",
    text: "UDI assigned and direct marking validated (if reusable)",
  },
  {
    id: "capa",
    text: "CAPA, internal audit and supplier processes running",
  },
];

export default function ReadinessAudit() {
  const [selected, setSelected] = useState<string[]>([]);
  const [hasEvaluated, setHasEvaluated] = useState(false);

  const toggleItem = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const score = selected.length;

  const getResultText = () => {
    if (score >= 5) {
      return "Strong position. Let us pressure-test it before your next audit.";
    }
    if (score >= 3) {
      return "Partly there. A gap assessment would close the rest quickly.";
    }
    return "Early stage. A fixed-fee quality system build is a good first step.";
  };

  return (
    <section id="check" className="relative py-28 md:py-36 bg-[#F5F7FA] dark:bg-[#06090e] border-b border-neutral-200 dark:border-white/[0.08] transition-colors duration-300 overflow-hidden">
      <div id="readiness" className="absolute -top-20" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Result Verdict */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Class I <span className="text-brand-500">readiness check</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-zinc-400 font-normal leading-relaxed">
              Tick what you already have in place. Takes two minutes.
            </p>

            {/* Score & Verdict Card */}
            <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0a0f19] border border-neutral-200 dark:border-white/10 shadow-sm dark:shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 dark:text-zinc-400 uppercase tracking-wider">
                  Readiness Score
                </span>
                <span className="font-mono text-xs text-brand-600 dark:text-brand-400 font-bold">
                  {score} OF {QUESTIONS.length} SELECTED
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-2 w-full bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{ width: `${(score / QUESTIONS.length) * 100}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-full bg-brand-500 rounded-full"
                />
              </div>

              {/* Evaluated Result Text */}
              <AnimatePresence mode="wait">
                {hasEvaluated ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 pt-5 border-t border-neutral-200 dark:border-white/[0.08]"
                  >
                    <div className="text-xs font-mono text-brand-600 dark:text-brand-400 uppercase font-semibold mb-2">
                      Result
                    </div>
                    <p className="text-base text-neutral-900 dark:text-white leading-relaxed font-medium">
                      {getResultText()}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold text-black bg-brand-500 hover:bg-brand-400 transition-all duration-300 shadow-sm"
                    >
                      <span>Book a free consultation</span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 pt-5 border-t border-neutral-200 dark:border-white/[0.08] text-xs text-neutral-500 dark:text-zinc-400"
                  >
                    Select the items you currently have in place, then click &ldquo;See my result&rdquo;.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: 5 Checkbox Items */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {QUESTIONS.map((q) => {
              const isChecked = selected.includes(q.id);
              return (
                <div
                  key={q.id}
                  onClick={() => toggleItem(q.id)}
                  className={cn(
                    "cursor-pointer group p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4",
                    isChecked
                      ? "bg-white dark:bg-[#0c121d] border-brand-500/40 shadow-sm"
                      : "bg-white/80 dark:bg-[#080d16] hover:bg-white dark:hover:bg-[#0c121d]/70 border-neutral-200 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/15"
                  )}
                >
                  <div
                    className={cn(
                      "size-6 rounded-md border flex items-center justify-center shrink-0 transition-all duration-200",
                      isChecked
                        ? "bg-brand-500 border-brand-500 text-black"
                        : "border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/[0.03] group-hover:border-brand-500/40"
                    )}
                  >
                    {isChecked && <Check className="size-4 stroke-[3]" />}
                  </div>

                  <span className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white select-none">
                    {q.text}
                  </span>
                </div>
              );
            })}

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setHasEvaluated(true)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-black bg-brand-500 hover:bg-brand-400 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>See my result</span>
                <ArrowUpRight className="size-4" />
              </button>

              <span className="text-xs font-mono text-neutral-500 dark:text-zinc-400">
                {score} of 5 selected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
