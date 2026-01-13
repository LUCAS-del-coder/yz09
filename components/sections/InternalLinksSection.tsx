"use client";

import Link from "next/link";

export default function InternalLinksSection() {
  const linkCategories = [
    {
      title: "ဂိမ်းများ | Games",
      links: [
        { href: "/games/slots", label: "စလော့ ဂိမ်းများ | Slot Games" },
        { href: "/games/live-casino", label: "လိုင်ဗ် ကာစီနို | Live Casino" },
        { href: "/games/fishing", label: "ငါးဖမ်းဂိမ်းများ | Fishing Games" },
        { href: "/games/table-games", label: "စားပွဲဂိမ်းများ | Table Games" },
      ]
    },
    {
      title: "ဘောနပ်စ်များ | Bonuses",
      links: [
        { href: "/promotions/welcome-bonus", label: "ကြိုဆို ဘောနပ်စ် | Welcome Bonus" },
        { href: "/promotions/daily-bonus", label: "နေ့စဉ် ဘောနပ်စ် | Daily Bonus" },
        { href: "/promotions/vip-program", label: "VIP အစီအစဉ် | VIP Program" },
        { href: "/bonuses", label: "ဘောနပ်စ်အားလုံး | All Bonuses" },
      ]
    },
    {
      title: "လမ်းညွှန် | Guides",
      links: [
        { href: "/guide/how-to-play", label: "ကစားနည်း | How to Play" },
        { href: "/guide/payment-methods", label: "ငွေသွင်း ငွေထုတ် | Payment Methods" },
        { href: "/guide/responsible-gaming", label: "တာဝန်ယူမှု | Responsible Gaming" },
        { href: "/guide", label: "လမ်းညွှန်အားလုံး | All Guides" },
      ]
    },
    {
      title: "ဘလော့ | Blog",
      links: [
        { href: "/blog", label: "ဘလော့ | Blog" },
        { href: "/blog/top-10-slot-games-2025", label: "အကောင်းဆုံး ဆလော့ 10 မျိုး | Top 10 Slots" },
        { href: "/blog/how-to-choose-online-casino", label: "ကာစီနို ရွေးချယ်နည်း | Choose Casino" },
        { href: "/blog/pragmatic-play-complete-guide", label: "Pragmatic Play လမ်းညွှန် | Pragmatic Guide" },
      ]
    }
  ];

  return (
    <section className="py-16 bg-dark-lighter border-t border-dark-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-gold">အသုံးဝင်သော လင့်ခ်များ</span>
            <span className="text-white"> | Useful Links</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Myanmar Casino Reviews တွင် သင်ရှာဖွေနေသော အကြောင်းအရာ အားလုံး
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

