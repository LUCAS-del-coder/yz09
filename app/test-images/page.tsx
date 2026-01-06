"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import casinosData from "@/data/casinos.json";
import gamesData from "@/data/games.json";

export default function TestImagesPage() {
  const [imageStatus, setImageStatus] = useState<Record<string, boolean>>({});

  const checkImage = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };

  useEffect(() => {
    const checkAllImages = async () => {
      const status: Record<string, boolean> = {};
      
      // 檢查所有 casino logo
      for (const casino of casinosData) {
        status[casino.logo] = await checkImage(casino.logo);
        status[casino.hero] = await checkImage(casino.hero);
      }
      
      // 檢查所有遊戲圖片
      for (const game of gamesData) {
        status[game.image] = await checkImage(game.image);
      }
      
      setImageStatus(status);
    };
    
    checkAllImages();
  }, []);

  return (
    <div className="min-h-screen bg-dark p-8">
      <h1 className="text-3xl font-bold text-white mb-8">圖片診斷工具</h1>
      
      <div className="space-y-8">
        {/* Casino Logos */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Casino Logos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {casinosData.map((casino) => (
              <div key={casino.id} className="bg-dark-lighter p-4 rounded-lg">
                <div className="mb-2">
                  <span className={`text-sm ${imageStatus[casino.logo] ? 'text-green-400' : 'text-red-400'}`}>
                    {imageStatus[casino.logo] ? '✓' : '✗'} {casino.name}
                  </span>
                </div>
                <div className="w-32 h-32 bg-white/10 rounded flex items-center justify-center">
                  {imageStatus[casino.logo] ? (
                    <Image
                      src={casino.logo}
                      alt={casino.name}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-red-400 text-xs">圖片不存在</span>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-400 break-all">
                  {casino.logo}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casino Heroes */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Casino Hero 圖片</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {casinosData.map((casino) => (
              <div key={casino.id} className="bg-dark-lighter p-4 rounded-lg">
                <div className="mb-2">
                  <span className={`text-sm ${imageStatus[casino.hero] ? 'text-green-400' : 'text-red-400'}`}>
                    {imageStatus[casino.hero] ? '✓' : '✗'} {casino.name} Hero
                  </span>
                </div>
                <div className="w-full h-48 bg-white/10 rounded overflow-hidden">
                  {imageStatus[casino.hero] ? (
                    <Image
                      src={casino.hero}
                      alt={`${casino.name} Hero`}
                      width={600}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-red-400">圖片不存在: {casino.hero}</span>
                    </div>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-400 break-all">
                  {casino.hero}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Game Images */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">遊戲圖片</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gamesData.map((game) => (
              <div key={game.id} className="bg-dark-lighter p-4 rounded-lg">
                <div className="mb-2">
                  <span className={`text-sm ${imageStatus[game.image] ? 'text-green-400' : 'text-red-400'}`}>
                    {imageStatus[game.image] ? '✓' : '✗'} {game.name}
                  </span>
                </div>
                <div className="w-full h-32 bg-white/10 rounded overflow-hidden">
                  {imageStatus[game.image] ? (
                    <Image
                      src={game.image}
                      alt={game.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-red-400 text-xs">圖片不存在</span>
                    </div>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-400 break-all">
                  {game.image}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

