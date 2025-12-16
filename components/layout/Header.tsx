"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import CTAButton from "../ui/CTAButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "ပင်မစာမျက်နှာ" },
    { href: "/review/top-myanmar-casinos", label: "ကာစီနို နှိုင်းယှဉ်ချက်" },
    { href: "/bonuses", label: "ဘောနပ်စ်များ" },
    { href: "/games", label: "ဂိမ်းများ" },
    { href: "/payment", label: "ငွေလွှဲနည်းလမ်းများ" },
    { href: "/guide", label: "လမ်းညွှန်" },
  ];

  const brandLinks = [
    "https://www.yes8.io/m/home?affiliateCode=seom1802",
    "https://www.ygn9.net/m/home?affiliateCode=seom1902",
    "https://www.pya777.net/m/home?affiliateCode=seom2002",
  ];

  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-dark">🎰</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-gold">Myanmar Casino</h1>
              <p className="text-xs text-gray-400">Reviews & Guide</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold bg-primary/10"
                    : "text-gray-300 hover:text-white hover:bg-dark-lighter"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CTAButton
              href={randomBrandLink}
              variant="gold"
              size="sm"
            >
              အကောင့်ဖွင့်ရန်
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-dark-lighter rounded-lg"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-dark-lightest"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-gold bg-primary/10"
                      : "text-gray-300 hover:text-white hover:bg-dark-lighter"
                  }`}
                >
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
                  အကောင့်ဖွင့်ရန်
                </CTAButton>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

