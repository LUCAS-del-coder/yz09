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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden casino-pattern">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-gold">2025 အကောင်းဆုံး</span>
              <br />
              <span className="text-white">Online Casino များ</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ
              <br />
              <span className="text-gold font-semibold">
                ဘောနပ်စ် အများဆုံး • ငွေထုတ်ယူမှု မြန်ဆန် • 24/7 ဝန်ဆောင်မှု
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <CTAButton
                href={randomBrandLink}
                variant="gold"
                size="lg"
              >
                အကောင့်ဖွင့်ပြီး ဘောနပ်စ်ရယူပါ
              </CTAButton>
              <a
                href="#casinos"
                className="px-8 py-4 bg-dark-lighter hover:bg-dark-light text-white rounded-lg font-semibold transition-colors border border-dark-lightest"
              >
                ကာစီနို စုံစမ်းစစ်ဆေးချက်များ
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
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

