"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

interface BonusCardProps {
  type: string;
  amount: string;
  description: string;
  ctaLink: string;
  index?: number;
}

export default function BonusCard({
  type,
  amount,
  description,
  ctaLink,
  index = 0,
}: BonusCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-gradient-to-br from-dark-lighter to-dark p-6 rounded-xl border border-gold/30 overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10">
        <div className="inline-block px-3 py-1 bg-gold/20 rounded-full mb-4">
          <span className="text-sm font-semibold text-gold">{type}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2 gradient-gold">
          {amount}
        </h3>
        
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
        
        <CTAButton
          href={ctaLink}
          variant="gold"
          size="md"
          className="w-full"
        >
          ဘောနပ်စ် ရယူရန်
        </CTAButton>
      </div>
    </motion.div>
  );
}

