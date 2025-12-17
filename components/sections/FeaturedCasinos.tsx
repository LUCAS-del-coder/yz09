"use client";

import CasinoCard from "../ui/CasinoCard";
import casinosData from "@/data/casinos.json";

export default function FeaturedCasinos() {
  const featuredCasinos = casinosData.filter((casino) => casino.featured).slice(0, 3);

  return (
    <section id="casinos" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Top Rated Myanmar Casinos 2025
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We've reviewed and ranked Myanmar's most popular online casinos including{" "}
            <strong>Shwe Casino</strong>, <strong>888 Casino</strong>,{" "}
            <strong>777 Casino</strong>, <strong>Win8</strong>,{" "}
            <strong>999 Casino</strong>, <strong>PGLucky88</strong> and{" "}
            <strong>FaFaFa Casino</strong>. Compare ratings, bonuses and features.
          </p>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {featuredCasinos.map((casino, index) => (
            <CasinoCard 
              key={casino.id} 
              casino={casino} 
              rank={index + 1}
              index={index} 
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/review/top-myanmar-casinos"
            className="inline-block px-8 py-4 bg-casino-purple-600 hover:bg-casino-purple-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
          >
            View All Casinos
          </a>
        </div>
      </div>
    </section>
  );
}

