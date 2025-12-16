"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import CTAButton from "./CTAButton";

interface CasinoCardProps {
  casino: {
    id: string;
    name: string;
    nameMm: string;
    slug: string;
    rating: number;
    logo: string;
    hero: string;
    excerpt: string;
    ctaLink: string;
    features: {
      games: string;
      minDeposit: string;
    };
  };
  index?: number;
}

export default function CasinoCard({ casino, index = 0 }: CasinoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-dark-lighter rounded-xl overflow-hidden card-hover border border-dark-lightest"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={casino.hero}
          alt={casino.nameMm}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
        <div className="absolute top-4 right-4">
          <StarRating rating={casino.rating} size="sm" />
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{casino.nameMm}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">{casino.excerpt}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <span className="text-gray-400">ဂိမ်းများ:</span>
            <span className="text-gold font-semibold ml-2">{casino.features.games}</span>
          </div>
          <div>
            <span className="text-gray-400">အနည်းဆုံး:</span>
            <span className="text-gold font-semibold ml-2">{casino.features.minDeposit}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <CTAButton
            href={casino.ctaLink}
            variant="gold"
            size="md"
            className="flex-1"
          >
            အကောင့်ဖွင့်ရန်
          </CTAButton>
          <Link
            href={`/review/${casino.slug}`}
            className="px-4 py-3 bg-dark-lightest hover:bg-dark-light text-white rounded-lg transition-colors border border-dark-lighter"
          >
            ပိုမိုလေ့လာရန်
          </Link>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-gold to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

