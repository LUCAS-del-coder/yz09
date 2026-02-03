"use client";

import { useTranslations, useLocale } from "next-intl";
import CasinoCard from "../ui/CasinoCard";
import { getCasinos } from "@/lib/get-casinos";

export default function FeaturedCasinos() {
  const t = useTranslations("featuredCasinos");
  const locale = useLocale();
  const casinos = getCasinos(locale);
  const featuredCasinos = casinos.filter((casino) => casino.featured).slice(0, 3);

  return (
    <section id="casinos" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t.rich("subheading", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
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
            {t("viewAllCasinos")}
          </a>
        </div>
      </div>
    </section>
  );
}

