"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#050811] dark:bg-[#04060a] text-white border-t border-neutral-200 dark:border-white/[0.08] transition-colors duration-300 overflow-hidden select-none"
    >


      {/* Center: 100% Full-Width Outlined Wireframe NORVALOR with Small, Subtle Center Light */}
      <div className="relative w-full my-6 sm:my-10 lg:my-14 overflow-hidden flex items-center justify-center select-none pointer-events-none">
        {/* Small, soft, subtle amber center light (matching reference image) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[480px] h-[130px] sm:h-[160px] rounded-full pointer-events-none select-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 153, 51, 0.28) 0%, rgba(255, 153, 51, 0.12) 40%, transparent 75%)",
            filter: "blur(35px)",
          }}
        />

        <svg
          viewBox="0 0 1440 220"
          className="w-full h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[340px] lg:max-h-[400px] overflow-visible relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: CAD Blueprint Wireframe Shadow Offset */}
          <text
            x="724"
            y="166"
            textAnchor="middle"
            textLength="1380"
            lengthAdjust="spacingAndGlyphs"
            fill="none"
            stroke="#FF9933"
            strokeWidth="1.6"
            strokeOpacity="0.4"
            fontFamily="Montserrat, system-ui, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="180"
          >
            NORVALOR
          </text>

          {/* Layer 2: Primary Crisp Razor-Sharp Outline */}
          <text
            x="720"
            y="162"
            textAnchor="middle"
            textLength="1380"
            lengthAdjust="spacingAndGlyphs"
            fill="none"
            stroke="#FF9933"
            strokeWidth="3.2"
            strokeOpacity="0.95"
            fontFamily="Montserrat, system-ui, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="180"
          >
            NORVALOR
          </text>
        </svg>
      </div>

      {/* Bottom Section: Constrained within max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-8 relative z-10 w-full">
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} NORVALOR. All rights reserved.
          </div>

          <div className="flex items-center gap-5 sm:gap-6 text-zinc-400">
            <Link href="/privacy" className="hover:text-brand-500 transition-colors">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:text-brand-500 transition-colors">
              Terms of Service
            </Link>
            <span>&middot;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-brand-500 transition-colors focus:outline-none"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}