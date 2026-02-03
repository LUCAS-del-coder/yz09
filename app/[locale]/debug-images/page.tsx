"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { getCasinos } from "@/lib/get-casinos";

export default function DebugImagesPage() {
  const locale = useLocale();
  const casinos = getCasinos(locale);
  
  return (
    <div className="min-h-screen bg-dark p-8">
      <h1 className="text-3xl font-bold text-white mb-8">圖片調試頁面</h1>
      
      <div className="space-y-8">
        {casinos.map((casino) => (
          <div key={casino.id} className="bg-dark-lighter p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">{casino.name}</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Logo */}
              <div>
                <h3 className="text-white mb-2">Logo: {casino.logo}</h3>
                <div className="w-64 h-64 bg-white/10 rounded flex items-center justify-center">
                  <Image
                    src={casino.logo}
                    alt={`${casino.name} Logo`}
                    width={256}
                    height={256}
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Hero */}
              <div>
                <h3 className="text-white mb-2">Hero: {casino.hero}</h3>
                <div className="w-full h-64 bg-white/10 rounded overflow-hidden">
                  <Image
                    src={casino.hero}
                    alt={`${casino.name} Hero`}
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* 直接連結測試 */}
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm">
                直接訪問 Logo: <a href={casino.logo} target="_blank" rel="noopener" className="text-blue-400 hover:underline">{casino.logo}</a>
              </p>
              <p className="text-gray-400 text-sm">
                直接訪問 Hero: <a href={casino.hero} target="_blank" rel="noopener" className="text-blue-400 hover:underline">{casino.hero}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

