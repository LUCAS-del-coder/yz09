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
  title: "စလော့ဂိမ်းများ | 500+ Slot Games Myanmar | Myanmar Casino Reviews",
  
  // ✅ 描述：緬甸語為主（100字）+ 英文補充（30字）
  description: "Myanmar Casino Reviews တွင် 500+ ဆလော့ ဂိမ်းများ ကစားနိုင်ပါသည်။ Pragmatic Play, PG Soft, BGaming ၏ အကောင်းဆုံး ဂိမ်းများ။ အမြင့်ဆုံး RTP, အခမဲ့ စမ်းသပ်ခြင်း, ငွေစစ် ကစားခြင်း ရရှိနိုင်ပါသည်။ Play 500+ slot games - Top providers, Free play available, Real money betting.",
  
  // ✅ 關鍵字：緬甸語 60% + 混合 20% + 英文 20%
  keywords: [
    // 緬甸語核心（60%）
    "စလော့ ဂိမ်းများ",
    "ဆလော့ ဂိမ်း မြန်မာ",
    "အွန်လိုင်း ဆလော့",
    "မြန်မာ ကာစီနို ဆလော့",
    "ရွှေ ကာစီနို ဆလော့",
    "Pragmatic Play ဆလော့",
    "PG Soft ဆလော့",
    "အကောင်းဆုံး ဆလော့ ဂိမ်းများ",
    
    // 混合關鍵字（20%）
    "slot games Myanmar",
    "online slots မြန်မာ",
    "Myanmar casino slots",
    
    // 英文關鍵字（20%）
    "slot games",
    "online slots",
    "Myanmar Casino Reviews",
    "casino slot games"
  ].join(", "),
  
  // ✅ OpenGraph
  openGraph: {
    title: "စလော့ဂိမ်းများ | Slot Games Myanmar | Myanmar Casino Reviews",
    description: "500+ ဆလော့ ဂိမ်းများ - Pragmatic Play, PG Soft, BGaming",
    type: 'website',
    locale: 'my_MM',
    url: `${baseUrl}/games/slots`,
  },
  
  alternates: {
    canonical: `${baseUrl}/games/slots`,
    languages: {
      'my-MM': `${baseUrl}/games/slots`,
      'en': `${baseUrl}/en/games/slots`
    }
  }
};

export default function SlotsPage() {
  const slotsGames = gamesData.filter((game: any) => game.category === 'slots');
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        {/* 麵包屑 */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">ဂိမ်းများ</Link>
          <span>/</span>
          <span className="text-white">စလော့ဂိမ်းများ</span>
        </nav>

        {/* H1 標題 - 緬甸語 + 英文 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">စလော့ဂိမ်းများ</span>
          <span className="text-white"> | Slot Games</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Myanmar Casino Reviews တွင် 500+ ဆလော့ ဂိမ်းများ ကစားနိုင်ပါသည်။ 
          Pragmatic Play, PG Soft, BGaming စသည့် ထိပ်တန်း ဂိမ်းထုတ်လုပ်သူများ၏ 
          အကောင်းဆုံး ဂိမ်းများ။ Play 500+ slot games from top providers.
        </p>

        {/* 內容說明 - 緬甸語為主 */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">စလော့ ဂိမ်းများ အကြောင်း | About Slot Games</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            စလော့ ဂိမ်းများ သည် အွန်လိုင်း ကာစီနို တွင် အလွန်ရေပန်းစားသော 
            ဂိမ်းအမျိုးအစား တစ်ခု ဖြစ်သည်။ Myanmar Casino Reviews တွင် 
            သင်သည် Pragmatic Play, PG Soft, BGaming, Microgaming စသည့် 
            ကမ္ဘာကျော် ဂိမ်းထုတ်လုပ်သူများ၏ အကောင်းဆုံး စလော့ ဂိမ်းများကို 
            ကစားနိုင်ပါသည်။
          </p>
          <p className="text-gray-400 text-sm">
            Slot games are one of the most popular game types in online casinos. 
            At Myanmar Casino Reviews, you can play the best slot games from world-renowned 
            providers like Pragmatic Play, PG Soft, BGaming, and Microgaming.
          </p>
        </div>

        {/* 遊戲列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {slotsGames.map((game: any) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {game.thumbnail && (
                <div className="relative w-full h-48">
                  <Image
                    src={game.thumbnail}
                    alt={`${game.nameMm} - ${game.name} Slot Game`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                  {game.hot && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      🔥 HOT
                    </div>
                  )}
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-bold mb-1 line-clamp-1">{game.nameMm}</h3>
                <p className="text-gray-400 text-sm mb-2">{game.provider}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gold">RTP: {game.rtp}%</span>
                  <span className="text-gray-500">Max: {game.maxWin}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            စလော့ ဂိမ်းများကို အခုပဲ စတင် ကစားပါ | Start Playing Slots Now
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            ဘောနပ်စ် ရယူပြီး စလော့ ဂိမ်းများကို စတင် ကစားပါ
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

