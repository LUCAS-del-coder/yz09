"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { locales, localeNames } from "@/i18n/config";

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
  onSelect?: () => void;
}

export default function LanguageSelector({ variant = "desktop", onSelect }: LanguageSelectorProps) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangMenuOpen]);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangMenuOpen(false);
    onSelect?.();
  };

  if (variant === "mobile") {
    return (
      <div className="pt-2 border-t border-white/10 mt-2">
        <div className="px-4 py-2 text-xs text-white/60 uppercase tracking-wider mb-2">
          Language
        </div>
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              locale === loc
                ? 'text-white bg-casino-purple-800'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-lg">
              {loc === 'my' ? '🇲🇲' : '🇬🇧'}
            </span>
            <span>{localeNames[loc]}</span>
            {locale === loc && (
              <span className="ml-auto text-casino-green-500">✓</span>
            )}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={langMenuRef}>
      <button
        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Select language"
      >
        <span className="text-lg">
          {locale === 'my' ? '🇲🇲' : '🇬🇧'}
        </span>
        <span className="text-white text-sm font-medium">
          {locale.toUpperCase()}
        </span>
        <svg
          className={`w-4 h-4 text-white transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Language Dropdown */}
      {isLangMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-40 bg-casino-purple-900 rounded-lg shadow-xl border border-casino-purple-700 overflow-hidden z-50"
        >
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                locale === loc
                  ? 'bg-casino-purple-800 text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="text-lg">
                {loc === 'my' ? '🇲🇲' : '🇬🇧'}
              </span>
              <span className="text-sm font-medium">{localeNames[loc]}</span>
              {locale === loc && (
                <span className="ml-auto text-casino-green-500">✓</span>
              )}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}
