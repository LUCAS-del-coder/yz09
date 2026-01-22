"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import GameCard from "../ui/GameCard";
import gamesData from "@/data/games.json";

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
  "https://www.mmk99.net/m/home?affiliateCode=seom2102",
];

export default function FeaturedGames() {
  const t = useTranslations("featuredGames");
  
  // 随机分配游戏，确保不重复，如果超过游戏数量才重复
  const shuffledGames = useMemo(() => {
    // 创建游戏数组的副本
    const games = [...gamesData];
    
    // Fisher-Yates 洗牌算法
    for (let i = games.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [games[i], games[j]] = [games[j], games[i]];
    }
    
    return games;
  }, []);

  // 如果要显示的游戏数量超过可用游戏数量，则重复使用
  const gamesToShow = 6;
  const displayGames = [];
  for (let i = 0; i < gamesToShow; i++) {
    displayGames.push(shuffledGames[i % shuffledGames.length]);
  }

  // 为每个游戏随机分配品牌链接
  const gamesWithLinks = displayGames.map((game, index) => ({
    ...game,
    ctaLink: brandLinks[index % brandLinks.length],
  }));

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">{t("heading")}</span>{" "}
            <span className="text-white">Hot Games</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {gamesWithLinks.map((game, index) => (
            <GameCard key={`${game.id}-${index}`} game={game} ctaLink={game.ctaLink} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/games"
            className="inline-block px-8 py-4 bg-gradient-to-r from-casino-purple-500 to-casino-purple-600 hover:from-casino-purple-600 hover:to-casino-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ဂိမ်းအားလုံးကို ကြည့်ရှုရန် | View All Games
          </Link>
        </div>
      </div>
    </section>
  );
}

