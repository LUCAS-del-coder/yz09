"use client";

import { useState } from "react";
import Image from "next/image";
import StarRating from "./StarRating";
import CTAButton from "./CTAButton";
import Link from "next/link";
import CasinoLogo from "./CasinoLogo";
import { Casino } from "@/types/casino";

interface ComparisonTableProps {
  casinos: Casino[];
}

export default function ComparisonTable({ casinos }: ComparisonTableProps) {
  const [sortBy, setSortBy] = useState<"rating" | "games">("rating");

  const sortedCasinos = [...casinos].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "games") {
      const aGames = parseInt(a.features.games.replace(/\D/g, ""));
      const bGames = parseInt(b.features.games.replace(/\D/g, ""));
      return bGames - aGames;
    } else {
      // Sort by withdrawal time (already removed deposit sorting)
      return 0;
    }
  });

  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex gap-2 flex-wrap">
        <button
          onClick={() => setSortBy("rating")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            sortBy === "rating"
              ? "bg-primary text-white"
              : "bg-dark-lighter text-gray-400 hover:bg-dark-light"
          }`}
        >
          အဆင့်သတ်မှတ်ချက်ဖြင့်
        </button>
        <button
          onClick={() => setSortBy("games")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            sortBy === "games"
              ? "bg-primary text-white"
              : "bg-dark-lighter text-gray-400 hover:bg-dark-light"
          }`}
        >
          ဂိမ်းအရေအတွက်ဖြင့်
        </button>
      </div>

      <div className="bg-dark-lighter rounded-xl overflow-hidden border border-dark-lightest">
        <table className="w-full">
          <thead>
            <tr className="bg-dark border-b border-dark-lightest">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gold">
                ကာစီနို
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gold">
                အဆင့်သတ်မှတ်ချက်
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gold">
                ဂိမ်းများ
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gold">
                ငွေထုတ်ယူမှု
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gold">
                လုပ်ဆောင်ချက်
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCasinos.map((casino, index) => (
              <tr
                key={casino.id}
                className={`border-b border-dark-lightest hover:bg-dark transition-colors ${
                  index % 2 === 0 ? "bg-dark-lighter" : "bg-dark"
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-dark-light overflow-hidden flex-shrink-0">
                      <CasinoLogo
                        src={casino.logo}
                        alt={`${casino.name} Casino Logo`}
                        width={48}
                        height={48}
                        className="object-cover"
                        fallbackImage={casino.hero}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{casino.name}</div>
                      <Link
                        href={`/review/${casino.slug}`}
                        className="text-sm text-primary hover:underline"
                      >
                        ပိုမိုလေ့လာရန်
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StarRating rating={casino.rating} size="sm" />
                </td>
                <td className="px-6 py-4 text-white">{casino.features.games}</td>
                <td className="px-6 py-4 text-white text-sm">
                  {casino.features.withdrawalTime}
                </td>
                <td className="px-6 py-4">
                  <CTAButton
                    href={casino.ctaLink}
                    variant="primary"
                    size="sm"
                  >
                    ကစားရန်
                  </CTAButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

