"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function CookieConsent() {
  const t = useTranslations("cookieConsent");
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 延迟 2 秒显示，避免与年龄验证冲突
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookieConsent");
      if (!consent) {
        setShowBanner(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-dark-lighter border-t-2 border-gold/50 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🍪</span>
                  <h3 className="text-lg font-bold text-white">{t("title")}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-2">
                  {t("text")}
                </p>
                <p className="text-gray-400 text-xs">
                  {t("moreInfo")}{" "}
                  <Link href="/privacy" className="text-gold hover:underline ml-1">
                    {t("privacyPolicy")}
                  </Link>
                  .
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 bg-dark-light hover:bg-dark text-white rounded-lg transition-colors text-sm font-medium"
                >
                  {t("reject")}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all text-sm"
                >
                  {t("accept")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

