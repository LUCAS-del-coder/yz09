"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";
import SearchBar from "../ui/SearchBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "ပင်မစာမျက်နှာ", icon: "🏠" },
    { href: "/review/top-myanmar-casinos", label: "ကာစီနို နှိုင်းယှဉ်ချက်", icon: "⭐" },
    { href: "/bonuses", label: "ဘောနပ်စ်များ", icon: "🎁" },
    { href: "/games", label: "ဂိမ်းများ", icon: "🎮" },
    { href: "/payment", label: "ငွေလွှဲနည်းလမ်းများ", icon: "💳" },
    { href: "/guide", label: "လမ်းညွှန်", icon: "📖" },
  ];

  const brandLinks = [
    "https://www.yes8.io/m/home?affiliateCode=seom1802",
    "https://www.ygn9.net/m/home?affiliateCode=seom1902",
    "https://www.pya777.net/m/home?affiliateCode=seom2002",
  ];

  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <header className="sticky top-0 z-50 bg-casino-purple-950/95 backdrop-blur-md border-b border-casino-purple-800/30">
      <div className="container mx-auto px-4">
        {/* Top Row: Logo, Search, Actions */}
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-casino-purple-600 to-casino-purple-800 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-white">🎰</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Myanmar Casino</h1>
              <p className="text-xs text-white/70">Reviews & Guide</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <SearchBar placeholder="Search for casinos, games and more" />
          </div>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Language Selector */}
            <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <span className="text-lg">🇲🇲</span>
              <span className="text-white text-sm font-medium">MM</span>
            </button>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <CTAButton
                href={randomBrandLink}
                variant="gold"
                size="sm"
              >
                PLAY NOW
              </CTAButton>
            </div>

            {/* Mobile Search Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-white bg-casino-purple-800"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Search Bar */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <SearchBar placeholder="Search casinos, games..." />
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-white/10"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-white bg-casino-purple-800"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <CTAButton
                  href={randomBrandLink}
                  variant="gold"
                  size="md"
                  className="w-full"
                >
                  PLAY NOW
                </CTAButton>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

