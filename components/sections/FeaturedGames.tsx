"use client";

import { useState, useEffect } from "react";
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
  
  // 初始化时使用确定性的顺序（前6个游戏），确保 SSR 和客户端首次渲染一致
  const gamesToShow = 6;
  const initialGames = gamesData.slice(0, gamesToShow).map((game, index) => ({
    ...game,
    ctaLink: brandLinks[index % brandLinks.length],
  }));
  
  const [gamesWithLinks, setGamesWithLinks] = useState<Array<typeof gamesData[0] & { ctaLink: string }>>(initialGames);
  
  useEffect(() => {
    // 随机分配游戏，确保不重复，如果超过游戏数量才重复
    // 只在客户端执行，避免 hydration mismatch
    const games = [...gamesData];
    
    // Fisher-Yates 洗牌算法
    for (let i = games.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [games[i], games[j]] = [games[j], games[i]];
    }
    
    // 如果要显示的游戏数量超过可用游戏数量，则重复使用
    const displayGames = [];
    for (let i = 0; i < gamesToShow; i++) {
      displayGames.push(games[i % games.length]);
    }

    // 为每个游戏随机分配品牌链接
    const gamesWithLinksData = displayGames.map((game, index) => ({
      ...game,
      ctaLink: brandLinks[index % brandLinks.length],
    }));
    
    setGamesWithLinks(gamesWithLinksData);
  }, []);

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">{t("heading")}</span>{" "}
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
            {t("viewAllGames")}
          </Link>
        </div>
      </div>
    </section>
  );
}

