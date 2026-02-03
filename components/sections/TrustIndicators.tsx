"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const indicatorKeys = ["security", "licensed", "support", "fastWithdrawal"];
const indicatorIcons = ["🔒", "✅", "💬", "⚡"];

export default function TrustIndicators() {
  const t = useTranslations("trustIndicators");

  return (
    <section className="py-16 bg-dark-lighter border-y border-dark-lightest">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {indicatorKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-dark rounded-xl border border-dark-lightest hover:border-gold/50 transition-colors"
            >
              <div className="text-4xl mb-4">{indicatorIcons[index]}</div>
              <h3 className="text-lg font-bold text-white mb-2">{t(`${key}.title`)}</h3>
              <p className="text-sm text-gray-400">{t(`${key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

