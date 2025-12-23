"use client";

import { motion } from "framer-motion";

const indicators = [
  {
    icon: "🔒",
    title: "လုံခြုံရေး",
    description: "SSL လုံခြုံရေး လက်မှတ်",
  },
  {
    icon: "✅",
    title: "လစ်ဆင်ရရှိထားသော",
    description: "Curacao Gaming License",
  },
  {
    icon: "💬",
    title: "24/7 ဝန်ဆောင်မှု",
    description: "ဖောက်သည်ဝန်ဆောင်မှု",
  },
  {
    icon: "⚡",
    title: "ငွေထုတ်ယူမှု မြန်ဆန်",
    description: "24 နာရီအတွင်း",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-dark-lighter border-y border-dark-lightest">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-dark rounded-xl border border-dark-lightest hover:border-gold/50 transition-colors"
            >
              <div className="text-4xl mb-4">{indicator.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{indicator.title}</h3>
              <p className="text-sm text-gray-400">{indicator.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

