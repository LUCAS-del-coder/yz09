"use client";

interface AvailabilityBadgeProps {
  country?: string;
  className?: string;
}

export default function AvailabilityBadge({ 
  country = "Myanmar", 
  className = "" 
}: AvailabilityBadgeProps) {
  const getCountryFlag = (country: string) => {
    // 简化的国旗映射
    const flags: Record<string, string> = {
      Myanmar: "🇲🇲",
      "United Kingdom": "🇬🇧",
      "United States": "🇺🇸",
      Singapore: "🇸🇬",
      Thailand: "🇹🇭",
    };
    return flags[country] || "🌍";
  };

  return (
    <div className={`flex items-center gap-2 text-gray-600 text-sm ${className}`}>
      <span className="text-lg">{getCountryFlag(country)}</span>
      <span>Available in {country.toUpperCase()}</span>
    </div>
  );
}

