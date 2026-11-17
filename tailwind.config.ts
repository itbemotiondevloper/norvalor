import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF9933",
          50: "#FFF6ED",
          100: "#FFEAD4",
          200: "#FFD4A8",
          300: "#FFBD7A",
          400: "#FFA84D",
          500: "#FF9933",
          600: "#E67E17",
          700: "#B85E0A",
          800: "#8A4305",
          900: "#5C2B02",
        },
        obsidian: {
          950: "#05070A",
          900: "#090D14",
          850: "#0E1420",
          800: "#141D2D",
          700: "#1D283C",
          600: "#2B3A52",
        },
        surface: {
          dark: "#080B10",
          card: "#0D121B",
          cardBorder: "rgba(255, 255, 255, 0.08)",
          cardHover: "#121926",
          glass: "rgba(13, 18, 27, 0.7)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        logo: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(255, 153, 51, 0.25)",
        "glow-lg": "0 0 100px -20px rgba(255, 153, 51, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
