import { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "ဂိမ်းအမျိုးအစားများ - Myanmar Casino Reviews",
  description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို ဂိမ်းအမျိုးအစားများ။",
};

const gameCategories = [
  {
    name: "Slots",
    nameMm: "စလော့ဂိမ်းများ",
    icon: "🎰",
    description: "အရောင်စုံ စလော့ဂိမ်းများ - PG Soft, Pragmatic Play, Microgaming",
    features: ["Jackpot ဂိမ်းများ", "Free Spins", "Bonus Rounds", "မြန်မာဘာသာ ထောက်ပံ့မှု"],
  },
  {
    name: "Live Casino",
    nameMm: "လိုင်းဗ် ကာစီနို",
    icon: "🎲",
    description: "လက်တွေ့ ကာစီနို အတွေ့အကြုံ - လက်တွေ့ဘူတာရုံမှ ဒိုင်လာ",
    features: ["Blackjack", "Baccarat", "Roulette", "Dragon Tiger"],
  },
  {
    name: "Sports Betting",
    nameMm: "အားကစား လောင်းကစား",
    icon: "⚽",
    description: "ကမ္ဘာတဝှမ်း အားကစား လောင်းကစား",
    features: ["ဘောလုံး", "ဘတ်စကတ်ဘော", "တင်းနစ်", "Boxing"],
  },
  {
    name: "Fishing",
    nameMm: "ငါးဖမ်းဂိမ်းများ",
    icon: "🎣",
    description: "ရေပုံစံ ငါးဖမ်းဂိမ်းများ - အနိုင်ရရှိမှု အခွင့်အလမ်း မြင့်မားသည်",
    features: ["PG Fishing", "PP Fishing", "JILI Fishing", "Big Win Potential"],
  },
  {
    name: "Poker",
    nameMm: "ပိုကာ",
    icon: "🃏",
    description: "ပိုကာဂိမ်းများ - Texas Hold'em, Omaha",
    features: ["Tournaments", "Cash Games", "Sit & Go", "Private Tables"],
  },
  {
    name: "Lottery",
    nameMm: "လော့စာရေးဂိမ်းများ",
    icon: "🎫",
    description: "လော့စာရေးဂိမ်းများ - နေ့စဉ် ရရှိနိုင်သည်",
    features: ["Daily Draws", "Big Prizes", "Easy to Play", "Instant Results"],
  },
];

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export default function GamesPage() {
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">ဂိမ်း</span>{" "}
            <span className="text-white">အမျိုးအစားများ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို ဂိမ်းအမျိုးအစားများ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {gameCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest hover:border-gold/50 transition-all card-hover"
            >
              <div className="text-5xl mb-4 text-center">{category.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{category.nameMm}</h2>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <ul className="space-y-2 mb-6">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-gold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <CTAButton
                href={randomBrandLink}
                variant="primary"
                size="md"
                className="w-full"
              >
                ဂိမ်း ကစားရန်
              </CTAButton>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ဂိမ်းများကို အခုပဲ စတင် ကစားပါ
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            ဘောနပ်စ် ရယူပြီး ဂိမ်းများကို စတင် ကစားပါ
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန်
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

