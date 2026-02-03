"use client";

import { useTranslations } from "next-intl";

interface RankBadgeProps {
  rank: number;
  className?: string;
}

export default function RankBadge({ rank, className = "" }: RankBadgeProps) {
  const t = useTranslations("rankBadge");

  const getRankColor = () => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-casino-purple-600 to-casino-purple-800 text-white";
      case 2:
        return "bg-gradient-to-r from-casino-blue-600 to-casino-blue-500 text-white";
      case 3:
        return "bg-gradient-to-r from-casino-pink-600 to-casino-pink-500 text-white";
      default:
        return "bg-casino-purple-100 text-casino-purple-800";
    }
  };

  const getRankText = () => {
    switch (rank) {
      case 1:
        return t("top1");
      case 2:
        return t("top2");
      case 3:
        return t("top3");
      default:
        return t("default", { rank });
    }
  };

  return (
    <div
      className={`inline-flex items-center px-4 py-2 rounded-t-xl ${getRankColor()} font-bold text-sm ${className}`}
    >
      <span className="mr-2">🏆</span>
      {getRankText()}
    </div>
  );
}

