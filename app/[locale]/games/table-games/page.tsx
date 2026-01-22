import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import gamesData from "@/data/games.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export const metadata: Metadata = {
  title: "စားပွဲဂိမ်းများ | Table Games Myanmar | Myanmar Casino Reviews",
  description: "ဂန္ထဝင် စားပွဲဂိမ်းများ အွန်လိုင်း ကစားပါ။ ပိုကာ၊ 21 ပွိုင့်၊ ရူလက်တ်၊ ဆိုင်ဘော စသည့် ဂိမ်းများ။ စည်းမျဉ်းများ သင်ယူပါ၊ နည်းဗျူဟာ ကျွမ်းကျင်ပါ၊ Myanmar Casino Reviews တွင် ကျွမ်းကျင်သူ ဖြစ်လာပါ။ Play classic table games online - Poker, Blackjack, Roulette, Sic Bo.",
  keywords: [
    "စားပွဲဂိမ်း",
    "ပိုကာ ဂိမ်း",
    "ဘလက်ဂျက်",
    "ရူလက်တ်",
    "table games Myanmar",
    "online poker Myanmar",
    "blackjack Myanmar",
    "roulette Myanmar"
  ].join(", "),
  openGraph: {
    title: "စားပွဲဂိမ်းများ | Table Games Myanmar",
    locale: 'my_MM',
    url: `${baseUrl}/games/table-games`,
  },
  alternates: {
    canonical: `${baseUrl}/games/table-games`,
  }
};

export default function TableGamesPage() {
  const tableGames = gamesData.filter((game: any) => game.category === 'table-games');
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">ဂိမ်းများ</Link>
          <span>/</span>
          <span className="text-white">စားပွဲဂိမ်းများ</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">စားပွဲဂိမ်းများ</span>
          <span className="text-white"> | Table Games</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">စားပွဲဂိမ်း အကြောင်း | About Table Games</h2>
          <p className="text-gray-300 leading-relaxed">
            စားပွဲဂိမ်းများ သည် ဂန္ထဝင် ကာစီနို ဂိမ်းများ ဖြစ်ပြီး ပိုကာ၊ 21 ပွိုင့်၊ 
            ရူလက်တ်၊ ဆိုင်ဘော စသည့် ဂိမ်းများ ပါဝင်သည်။ ဤဂိမ်းများတွင် 
            နည်းဗျူဟာ နှင့် စဉ်းစားတွေးခေါ်မှု လိုအပ်ပါသည်။
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tableGames.map((game: any) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {game.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={game.thumbnail}
                    alt={`${game.nameMm} - ${game.name} Table Game`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-bold mb-1">{game.nameMm}</h3>
                <p className="text-gray-400 text-sm">{game.provider}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">စားပွဲဂိမ်း ကစားရန် | Play Table Games</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

