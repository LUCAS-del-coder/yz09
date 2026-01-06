"use client";

import { useState } from "react";
import Image from "next/image";

interface CasinoLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackText?: string;
  fallbackImage?: string; // 備用圖片路徑（例如 hero 圖片）
}

export default function CasinoLogo({ 
  src, 
  alt, 
  width = 120, 
  height = 120, 
  className = "",
  fallbackText,
  fallbackImage
}: CasinoLogoProps) {
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  const handleError = () => {
    // 如果還沒有嘗試過備用圖片，且提供了備用圖片
    if (!triedFallback && fallbackImage && currentSrc === src) {
      setTriedFallback(true);
      setCurrentSrc(fallbackImage);
      // 不設置 hasError，讓它嘗試加載備用圖片
      return;
    }
    // 如果備用圖片也失敗，或者沒有備用圖片，顯示文字備用
    setHasError(true);
  };

  // 如果出錯且沒有備用圖片，或備用圖片也失敗，顯示文字備用
  if (hasError) {
    return (
      <div 
        className={`bg-gradient-to-br from-casino-purple-600 to-casino-purple-800 flex items-center justify-center text-white font-bold text-sm ${className}`}
        style={{ width, height }}
      >
        {fallbackText || alt.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
}

