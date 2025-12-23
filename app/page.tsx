import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedCasinos from "@/components/sections/FeaturedCasinos";
import TrustIndicators from "@/components/sections/TrustIndicators";
import FeaturedGames from "@/components/sections/FeaturedGames";
import LatestBonuses from "@/components/sections/LatestBonuses";
import FAQ from "@/components/sections/FAQ";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: "Myanmar Casino Reviews 2025 | Shwe Casino, 888, 777, Win8, 999 Reviews",
  description: "Myanmar's #1 casino review site. Compare Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88 & FaFaFa. Expert reviews, bonuses & ratings for မြန်မာ players.",
  keywords: [
    "Myanmar casino",
    "Shwe Casino",
    "888 Casino Myanmar", 
    "777 Casino",
    "Win8 Casino",
    "999 Casino",
    "PGLucky88",
    "FaFaFa Casino",
    "online casino Myanmar",
    "ရွှေ ကာစီနို",
    "၈၈၈ ကာစီနို",
    "၇၇၇ ကာစီနို"
  ].join(", "),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Best Myanmar Casinos 2025 | Shwe, 888, 777, Win8 Reviews",
    description: "Expert reviews of Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino & more. Find the best bonuses & games for Myanmar players.",
    url: baseUrl,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustIndicators />
      <FeaturedCasinos />
      <FeaturedGames />
      <LatestBonuses />
      <FAQ />
    </div>
  );
}

