/** @type {import('tailwindcss').Config} */
module.exports = {
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
        // 新的紫色主题
        'casino-purple': {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1B5B',
        },
        'casino-blue': {
          500: '#5865F2',
          600: '#4F56D8',
        },
        'casino-pink': {
          500: '#E94B8B',
          600: '#D63A7A',
        },
        'casino-green': {
          500: '#00D95F',
          600: '#00C054',
        },
        background: {
          light: '#F5F5F7',
          card: '#FFFFFF',
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
        "float-3d": "float-3d 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
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
        "float-3d": {
          "0%, 100%": { transform: "translateY(0) rotateX(0) rotateY(0)" },
          "50%": { transform: "translateY(-20px) rotateX(5deg) rotateY(5deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

