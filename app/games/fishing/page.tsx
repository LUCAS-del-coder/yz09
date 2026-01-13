import { Metadata } from "next";
import Link from "next/link";
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
  title: "ငါးဖမ်းဂိမ်းများ | Fishing Games Myanmar | Myanmar Casino Reviews",
  description: "စိတ်လှုပ်ရှားဖွယ် ငါးဖမ်းဂိမ်း အတွေ့အကြုံ။ မျိုးကွဲများစွာ၊ ကြွယ်ဝသော ဆုလာဘ်များ၊ ရိုးရှင်းသော ကစားနည်း။ Myanmar Casino Reviews တွင် အခုပဲ ငါးဖမ်းခရီးကို စတင်ပါ။ Most exciting fishing game experience. Multiple themes, rich prizes, simple gameplay.",
  keywords: [
    "ငါးဖမ်းဂိမ်း",
    "ငါးဖမ်း ဂိမ်း မြန်မာ",
    "PG Fishing",
    "JILI Fishing",
    "fishing games Myanmar",
    "online fishing games",
    "Myanmar fishing casino"
  ].join(", "),
  openGraph: {
    title: "ငါးဖမ်းဂိမ်းများ | Fishing Games Myanmar",
    locale: 'my_MM',
    url: `${baseUrl}/games/fishing`,
  },
  alternates: {
    canonical: `${baseUrl}/games/fishing`,
  }
};

export default function FishingPage() {
  const fishingGames = gamesData.filter((game: any) => game.category === 'fishing');
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">ဂိမ်းများ</Link>
          <span>/</span>
          <span className="text-white">ငါးဖမ်းဂိမ်းများ</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">ငါးဖမ်းဂိမ်းများ</span>
          <span className="text-white"> | Fishing Games</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">ငါးဖမ်းဂိမ်း အကြောင်း | About Fishing Games</h2>
          <p className="text-gray-300 leading-relaxed">
            ငါးဖမ်းဂိမ်းများ သည် စိတ်လှုပ်ရှားဖွယ် အွန်လိုင်း ဂိမ်းအမျိုးအစား တစ်ခု ဖြစ်သည်။ 
            သင်သည် ရေပုံစံ ပတ်ဝန်းကျင်တွင် ငါးများကို ဖမ်းယူပြီး ကြီးမားသော ဆုလာဘ်များ 
            ရရှိနိုင်ပါသည်။
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fishingGames.map((game: any) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {game.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={game.thumbnail}
                    alt={`${game.nameMm} - ${game.name} Fishing Game`}
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
          <h2 className="text-3xl font-bold text-white mb-4">ငါးဖမ်းဂိမ်း ကစားရန် | Play Fishing Games</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

