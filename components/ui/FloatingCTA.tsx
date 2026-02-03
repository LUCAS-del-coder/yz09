"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import CTAButton from "./CTAButton";

export default function FloatingCTA() {
  const t = useTranslations("floatingCTA");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const brandLinks = [
    "https://www.yes8.io/m/home?affiliateCode=seom1802",
    "https://www.ygn9.net/m/home?affiliateCode=seom1902",
    "https://www.pya777.net/m/home?affiliateCode=seom2002",
    "https://www.mmk99.net/m/home?affiliateCode=seom2102",
    "https://www.kbz999.net/m/home?affiliateCode=seom2202",
    "https://www.mmk123.net/m/home?affiliateCode=seom2302",
  ];

  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-dark-lighter border border-gold/30 rounded-xl p-4 shadow-2xl">
            <CTAButton
              href={randomBrandLink}
              variant="gold"
              size="lg"
              className="w-full"
            >
              {t("text")}
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

