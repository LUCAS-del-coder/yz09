"use client";

import { useTranslations } from "next-intl";

interface AvailabilityBadgeProps {
  country?: string;
  className?: string;
}

export default function AvailabilityBadge({
  country = "Myanmar",
  className = "",
}: AvailabilityBadgeProps) {
  const t = useTranslations("availabilityBadge");

  const getCountryFlag = (countryName: string) => {
    const flags: Record<string, string> = {
      Myanmar: "🇲🇲",
      "United Kingdom": "🇬🇧",
      "United States": "🇺🇸",
      Singapore: "🇸🇬",
      Thailand: "🇹🇭",
    };
    return flags[countryName] || "🌍";
  };

  return (
    <div className={`flex items-center gap-2 text-gray-600 text-sm ${className}`}>
      <span className="text-lg">{getCountryFlag(country)}</span>
      <span>{t("availableIn", { country: country.toUpperCase() })}</span>
    </div>
  );
}

