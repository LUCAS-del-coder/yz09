"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterSidebarProps {
  providers?: FilterOption[];
  rtpRange?: { min: number; max: number };
  volatility?: FilterOption[];
  onFilterChange?: (filters: any) => void;
  className?: string;
}

export default function FilterSidebar({
  providers = [],
  rtpRange,
  volatility = [],
  onFilterChange,
  className = ""
}: FilterSidebarProps) {
  const t = useTranslations("filterSidebar");
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedVolatility, setSelectedVolatility] = useState<string[]>([]);
  const [rtpMin, setRtpMin] = useState(rtpRange?.min || 0);
  const [rtpMax, setRtpMax] = useState(rtpRange?.max || 100);

  const handleProviderToggle = (value: string) => {
    const newProviders = selectedProviders.includes(value)
      ? selectedProviders.filter(p => p !== value)
      : [...selectedProviders, value];
    setSelectedProviders(newProviders);
    onFilterChange?.({ providers: newProviders, volatility: selectedVolatility, rtp: { min: rtpMin, max: rtpMax } });
  };

  const handleVolatilityToggle = (value: string) => {
    const newVolatility = selectedVolatility.includes(value)
      ? selectedVolatility.filter(v => v !== value)
      : [...selectedVolatility, value];
    setSelectedVolatility(newVolatility);
    onFilterChange?.({ providers: selectedProviders, volatility: newVolatility, rtp: { min: rtpMin, max: rtpMax } });
  };

  const handleRtpChange = (type: 'min' | 'max', value: number) => {
    if (type === 'min') {
      setRtpMin(value);
    } else {
      setRtpMax(value);
    }
    onFilterChange?.({ providers: selectedProviders, volatility: selectedVolatility, rtp: { min: type === 'min' ? value : rtpMin, max: type === 'max' ? value : rtpMax } });
  };

  const clearFilters = () => {
    setSelectedProviders([]);
    setSelectedVolatility([]);
    setRtpMin(rtpRange?.min || 0);
    setRtpMax(rtpRange?.max || 100);
    onFilterChange?.({ providers: [], volatility: [], rtp: { min: rtpRange?.min || 0, max: rtpRange?.max || 100 } });
  };

  return (
    <aside className={`bg-dark-lighter rounded-xl p-6 border border-dark-lightest ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">{t("filters")}</h3>
        {(selectedProviders.length > 0 || selectedVolatility.length > 0 || rtpMin > (rtpRange?.min || 0) || rtpMax < (rtpRange?.max || 100)) && (
          <button
            onClick={clearFilters}
            className="text-sm text-gold hover:text-gold/80 transition-colors"
          >
            {t("clearAll")}
          </button>
        )}
      </div>

      {/* Providers Filter */}
      {providers.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">{t("providers")}</h4>
          <div className="space-y-2">
            {providers.map((provider) => (
              <label
                key={provider.value}
                className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedProviders.includes(provider.value)}
                  onChange={() => handleProviderToggle(provider.value)}
                  className="w-4 h-4 text-gold bg-dark border-dark-lightest rounded focus:ring-gold"
                />
                <span className="text-gray-300 text-sm">
                  {provider.label}
                  {provider.count !== undefined && (
                    <span className="text-gray-500 ml-1">({provider.count})</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* RTP Range Filter */}
      {rtpRange && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">{t("rtpRange")}</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm w-16">{t("min")}</label>
              <input
                type="number"
                min={rtpRange.min}
                max={rtpRange.max}
                value={rtpMin}
                onChange={(e) => handleRtpChange('min', Number(e.target.value))}
                className="flex-1 px-3 py-2 bg-dark border border-dark-lightest rounded text-white text-sm"
              />
              <span className="text-gray-400 text-sm">%</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-300 text-sm w-16">{t("max")}</label>
              <input
                type="number"
                min={rtpRange.min}
                max={rtpRange.max}
                value={rtpMax}
                onChange={(e) => handleRtpChange('max', Number(e.target.value))}
                className="flex-1 px-3 py-2 bg-dark border border-dark-lightest rounded text-white text-sm"
              />
              <span className="text-gray-400 text-sm">%</span>
            </div>
          </div>
        </div>
      )}

      {/* Volatility Filter */}
      {volatility.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">{t("volatility")}</h4>
          <div className="space-y-2">
            {volatility.map((vol) => (
              <label
                key={vol.value}
                className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedVolatility.includes(vol.value)}
                  onChange={() => handleVolatilityToggle(vol.value)}
                  className="w-4 h-4 text-gold bg-dark border-dark-lightest rounded focus:ring-gold"
                />
                <span className="text-gray-300 text-sm">{vol.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

