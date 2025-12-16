import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DC2626",
          dark: "#8B0000",
          light: "#EF4444",
        },
        gold: {
          DEFAULT: "#FFD700",
          light: "#FFE55C",
          dark: "#D4AF37",
        },
        dark: {
          DEFAULT: "#1A1A1A",
          lighter: "#2A2A2A",
          lightest: "#3A3A3A",
        },
      },
      fontFamily: {
        myanmar: ["var(--font-myanmar)", "sans-serif"],
        english: ["var(--font-english)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)",
      },
      animation: {
        "shimmer": "shimmer 3s infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

