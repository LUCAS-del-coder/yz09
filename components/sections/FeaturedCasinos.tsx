"use client";

import CasinoCard from "../ui/CasinoCard";
import casinosData from "@/data/casinos.json";

export default function FeaturedCasinos() {
  const featuredCasinos = casinosData.filter((casino) => casino.featured).slice(0, 3);

  return (
    <section id="casinos" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">အကောင်းဆုံး</span>{" "}
            <span className="text-white">ကာစီနို များ</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCasinos.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/review/top-myanmar-casinos"
            className="inline-block px-8 py-4 bg-dark-lighter hover:bg-dark-light text-white rounded-lg font-semibold transition-colors border border-dark-lightest hover:border-primary"
          >
            ကာစီနို အားလုံးကို ကြည့်ရှုရန်
          </a>
        </div>
      </div>
    </section>
  );
}

