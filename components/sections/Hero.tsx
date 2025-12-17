"use client";

import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";

export default function Hero() {
  const brandLinks = [
    "https://www.yes8.io/m/home?affiliateCode=seom1802",
    "https://www.ygn9.net/m/home?affiliateCode=seom1902",
    "https://www.pya777.net/m/home?affiliateCode=seom2002",
  ];

  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-casino-purple-950 via-casino-purple-800 to-casino-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-casino-purple-600/20 rounded-full blur-3xl animate-float-3d" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-casino-pink-500/20 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Content (60%) */}
          <div className="lg:col-span-3 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best Online Casinos For
                <br />
                <span className="gradient-gold">Real Money in Myanmar</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                Expert reviews of <strong>Shwe Casino</strong>, <strong>888 Casino</strong>,{" "}
                <strong>777 Casino</strong>, <strong>Win8</strong>, <strong>999 Casino</strong> & more.
                <br />
                <span className="text-gold font-semibold">
                  Compare bonuses, games & ratings for မြန်မာ players
                </span>
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <CTAButton
                  href={randomBrandLink}
                  variant="gold"
                  size="lg"
                >
                  PLAY NOW
                </CTAButton>
                <a
                  href="#casinos"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
                >
                  View Reviews
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Illustration (40%) */}
          <div className="lg:col-span-2 relative h-64 lg:h-80">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative w-full h-full float-3d"
            >
              {/* 3D 轮盘 SVG */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Outer ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="4"
                  className="spin-slow"
                  transform-origin="200 200"
                />
                {/* Inner circles */}
                <circle cx="200" cy="200" r="120" fill="rgba(139,92,246,0.2)" />
                <circle cx="200" cy="200" r="60" fill="rgba(233,75,139,0.3)" />
                {/* Chips */}
                <g>
                  <circle cx="100" cy="100" r="25" fill="#FFD700" opacity="0.8">
                    <animate attributeName="cy" values="100;90;100" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="150" r="25" fill="#00D95F" opacity="0.8">
                    <animate attributeName="cy" values="150;140;150" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="300" r="25" fill="#E94B8B" opacity="0.8">
                    <animate attributeName="cy" values="300;290;300" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

