import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#0B0E14",
          900: "#10141D",
          850: "#131826",
          800: "#181F30",
        },
        ink: {
          50: "#F4F6FA",
          200: "#D8DCE8",
          300: "#C4CADC",
          500: "#8B93A7",
          700: "#4B5165",
        },
        line: {
          DEFAULT: "#222838",
          soft: "#1B2130",
        },
        teal: {
          DEFAULT: "#5EEAD4",
          600: "#2DD4BF",
          900: "#0F3A35",
        },
        amber: {
          DEFAULT: "#F2C94C",
          600: "#D9A62E",
          900: "#3A2F0F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(94,234,212,0.12), transparent)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
