"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

export default function HeroImage({ src, alt, fallbackSrc, className = "" }: HeroImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
    }
  };

  // 如果圖片加載失敗且沒有備用圖片，使用漸變背景
  if (hasError && !fallbackSrc) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-casino-purple-900 via-casino-purple-800 to-casino-purple-900 ${className}`} />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      onError={handleError}
      priority
    />
  );
}

