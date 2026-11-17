"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "Who We Serve", href: "/#who" },
  { name: "Process", href: "/#process" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Readiness Check", href: "/#check" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[min(1240px,calc(100%-2rem))] z-50 transition-all duration-500",
          isScrolled ? "scale-[0.99]" : "scale-100"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between px-5 md:px-7 py-3 md:py-3.5 rounded-full border transition-all duration-300",
            isScrolled
              ? "bg-white/90 dark:bg-[#090e17]/90 border-neutral-200 dark:border-white/15 backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
              : "bg-white/60 dark:bg-[#090e17]/60 border-neutral-200/60 dark:border-white/10 backdrop-blur-xl"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Norvalor Homepage"
          >
            <div className="flex items-center font-logo text-xl md:text-2xl font-extrabold italic tracking-tight text-brand-500 transition-transform duration-300 group-hover:scale-105">
              NORVALOR
            </div>

          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-600 hover:text-black hover:bg-neutral-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-white/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Theme Toggle & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-full border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-zinc-300 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/40 bg-neutral-100 dark:bg-white/5 transition-all"
            >
              {theme === "dark" ? (
                <Sun className="size-4 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="size-4 transition-transform hover:-rotate-12" />
              )}
            </button>

            <a
              href="#contact"
              className="relative inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold text-black bg-brand-500 hover:bg-brand-400 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Free consultation</span>
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-full border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-zinc-300 bg-neutral-100 dark:bg-white/5"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 dark:text-zinc-300 hover:text-black dark:hover:text-white rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 p-6 rounded-2xl bg-white/95 dark:bg-[#090e17]/95 border border-neutral-200 dark:border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 lg:hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-800 dark:text-zinc-200 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-200 dark:border-white/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-xs font-semibold text-black bg-brand-500 hover:bg-brand-400 transition-colors"
            >
              Book Free Consultation ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
