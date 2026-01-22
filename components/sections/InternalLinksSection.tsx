"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function InternalLinksSection() {
  const t = useTranslations("internalLinks");
  const tGames = useTranslations("games");
  const tCommon = useTranslations("common");
  const tPromotions = useTranslations("promotions");
  const tBlog = useTranslations("blog");
  const tGuide = useTranslations("guide");
  
  const linkCategories = [
    {
      title: `${t("games")} | Games`,
      links: [
        { href: "/games/slots", label: `${tGames("slots")} | Slot Games` },
        { href: "/games/live-casino", label: `${tGames("liveCasino")} | Live Casino` },
        { href: "/games/fishing", label: `${tGames("fishing")} | Fishing Games` },
        { href: "/games/table-games", label: `${tGames("tableGames")} | Table Games` },
      ]
    },
    {
      title: `${t("bonuses")} | Bonuses`,
      links: [
        { href: "/promotions/welcome-bonus", label: `${tPromotions("welcomeBonusHeading")} | Welcome Bonus` },
        { href: "/promotions/daily-bonus", label: `${tPromotions("dailyBonusHeading")} | Daily Bonus` },
        { href: "/promotions/vip-program", label: `${tPromotions("vipProgramHeading")} | VIP Program` },
        { href: "/bonuses", label: `${tCommon("bonuses")} | All Bonuses` },
      ]
    },
    {
      title: `${t("guides")} | Guides`,
      links: [
        { href: "/guide/how-to-play", label: `How to Play | How to Play` },
        { href: "/guide/payment-methods", label: `${tCommon("payment")} | Payment Methods` },
        { href: "/guide/responsible-gaming", label: `Responsible Gaming | Responsible Gaming` },
        { href: "/guide", label: `${tCommon("guide")} | All Guides` },
      ]
    },
    {
      title: `${t("blog")} | Blog`,
      links: [
        { href: "/blog", label: `${tBlog("heading")} | Blog` },
        { href: "/blog/top-10-slot-games-2025", label: `Top 10 Slots | Top 10 Slots` },
        { href: "/blog/how-to-choose-online-casino", label: `Choose Casino | Choose Casino` },
        { href: "/blog/pragmatic-play-complete-guide", label: `Pragmatic Guide | Pragmatic Guide` },
      ]
    }
  ];

  return (
    <section className="py-16 bg-dark-lighter border-t border-dark-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">{t("heading")}</span>
            <span className="text-white"> | Useful Links</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {linkCategories.map((category, index) => (
            <div key={index} className="bg-dark rounded-xl p-6 border border-dark-lightest">
              <h3 className="text-xl font-bold text-gold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gold transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="text-gold">→</span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

