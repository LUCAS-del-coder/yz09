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
  // ✅ 標題：緬甸語 + 英文
  title: "လိုင်ဗ် ကာစီနို | Live Casino Myanmar | Myanmar Casino Reviews",
  
  // ✅ 描述：緬甸語為主
  description: "လက်တွေ့ ကာစီနို အတွေ့အကြုံကို ရယူပါ။ ပရော်ဖက်ရှင်နယ် ဒိုင်လာ၊ HD လိုင်ဗ်၊ 24/7 လည်ပတ်မှု။ ဘာကရာ၊ ရူလက်တ်၊ ဒရာဂွန် တိုကာ စသည့် ရွေးချယ်စရာ များစွာ။ Experience real casino with professional dealers, HD live streaming, 24/7 operation.",
  
  // ✅ 關鍵字
  keywords: [
    "လိုင်ဗ် ကာစီနို",
    "လက်တွေ့ ကာစီနို မြန်မာ",
    "ဘာကရာ လိုင်ဗ်",
    "ရူလက်တ် လိုင်ဗ်",
    "ဒရာဂွန် တိုကာ",
    "live casino Myanmar",
    "online live casino",
    "Myanmar live dealer",
    "live baccarat Myanmar",
    "live roulette Myanmar"
  ].join(", "),
  
  openGraph: {
    title: "လိုင်ဗ် ကာစီနို | Live Casino Myanmar",
    description: "လက်တွေ့ ကာစီနို - ပရော်ဖက်ရှင်နယ် ဒိုင်လာ၊ HD လိုင်ဗ်",
    locale: 'my_MM',
    url: `${baseUrl}/games/live-casino`,
  },
  
  alternates: {
    canonical: `${baseUrl}/games/live-casino`,
  }
};

export default function LiveCasinoPage() {
  const liveGames = gamesData.filter((game: any) => game.category === 'live-casino');
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">ဂိမ်းများ</Link>
          <span>/</span>
          <span className="text-white">လိုင်ဗ် ကာစီနို</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">လိုင်ဗ် ကာစီနို</span>
          <span className="text-white"> | Live Casino</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          လက်တွေ့ ကာစီနို အတွေ့အကြုံကို ရယူပါ။ ပရော်ဖက်ရှင်နယ် ဒိုင်လာ၊ 
          HD လိုင်ဗ် စီးဆင်းမှု၊ 24/7 လည်ပတ်မှု။ Experience real casino with professional dealers.
        </p>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">လိုင်ဗ် ကာစီနို အကြောင်း | About Live Casino</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            လိုင်ဗ် ကာစီနို သည် အွန်လိုင်း ကာစီနို တွင် အလွန်ရေပန်းစားသော 
            ဂိမ်းအမျိုးအစား တစ်ခု ဖြစ်သည်။ သင်သည် လက်တွေ့ ဒိုင်လာ နှင့် 
            HD လိုင်ဗ် စီးဆင်းမှု ဖြင့် ဘာကရာ၊ ရူလက်တ်၊ ဒရာဂွန် တိုကာ 
            စသည့် ဂိမ်းများကို ကစားနိုင်ပါသည်။
          </p>
          <p className="text-gray-400 text-sm">
            Live casino is one of the most popular game types in online casinos. 
            You can play games like baccarat, roulette, and dragon tiger with real dealers via HD live streaming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {liveGames.map((game: any) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {game.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={game.thumbnail}
                    alt={`${game.nameMm} - ${game.name} Live Casino`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-bold mb-1">{game.nameMm}</h3>
                <p className="text-gray-400 text-sm mb-2">{game.provider}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gold">RTP: {game.rtp}%</span>
                  <span className="text-gray-500">Live Dealer</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            လိုင်ဗ် ကာစီနို ကစားရန် | Play Live Casino
          </h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

