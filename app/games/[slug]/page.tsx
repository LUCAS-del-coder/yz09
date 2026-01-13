import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import gamesData from "@/data/games.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

// 波動性緬甸語翻譯
const volatilityMap: Record<string, string> = {
  "high": "မြင့်မားသော",
  "medium": "အလယ်အလတ်",
  "low": "နည်းသော"
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const game = gamesData.find((g: any) => g.slug === params.slug);
  
  if (!game) {
    return {
      title: "ဂိမ်း မတွေ့ရှိပါ | Game Not Found | Myanmar Casino Reviews",
    };
  }

  const volatilityMM = volatilityMap[game.volatility] || game.volatility;
  
  return {
    // ✅ 標題：緬甸語 + 英文
    title: `${game.nameMm} - ဂိမ်း အပြည့်အစုံ သုံးသပ်ချက် | ${game.name} Review | Myanmar Casino Reviews`,
    
    // ✅ 描述：緬甸語為主（100字）+ 英文補充（30字）
    description: `${game.nameMm} ဆလော့ ဂိမ်းကို Myanmar Casino Reviews တွင် ကစားပါ။ RTP ${game.rtp}%၊ ${volatilityMM} ပြင်းထန်မှု၊ အမြင့်ဆုံး ဆုငွေ ${game.maxWin}။ ${game.provider} ၏ အကောင်းဆုံး ဂိမ်း။ Play ${game.name} slot - RTP ${game.rtp}%, Max win ${game.maxWin}, ${game.provider} game.`,
    
    // ✅ 關鍵字：緬甸語 60% + 混合 20% + 英文 20%
    keywords: [
      // 緬甸語核心（60%）
      game.nameMm,
      `${game.nameMm} ဂိမ်း`,
      "ဆလော့ ဂိမ်း မြန်မာ",
      "အွန်လိုင်း ကာစီနို",
      "ရွှေ ကာစီနို ဂိမ်းများ",
      `${game.provider} ဂိမ်းများ`,
      "အွန်လိုင်း ဆလော့",
      "မြန်မာ ကာစီနို ဂိမ်းများ",
      
      // 混合關鍵字（20%）
      `${game.name} Myanmar`,
      `${game.provider} Myanmar`,
      "online slots Myanmar",
      `${game.nameMm} online`,
      
      // 英文關鍵字（20%）
      `${game.name} slot`,
      `${game.provider} games`,
      "Myanmar Casino Reviews",
      "online casino games"
    ].join(", "),
    
    // ✅ OpenGraph：使用緬甸語
    openGraph: {
      title: `${game.nameMm} | ${game.name} | Myanmar Casino Reviews`,
      description: `${game.nameMm} - RTP ${game.rtp}%၊ အမြင့်ဆုံး ${game.maxWin}၊ ${game.provider} ဂိမ်း`,
      type: 'article',
      locale: 'my_MM',
      url: `${baseUrl}/games/${game.slug}`,
      images: game.images && game.images.length > 0 ? [{
        url: `${baseUrl}${game.images[0]}`,
        alt: `${game.nameMm} - ${game.name} Screenshot`
      }] : [],
    },
    
    // ✅ 其他重要設定
    alternates: {
      canonical: `${baseUrl}/games/${game.slug}`,
      languages: {
        'my-MM': `${baseUrl}/games/${game.slug}`,
        'en': `${baseUrl}/en/games/${game.slug}`
      }
    }
  };
}

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = gamesData.find((g: any) => g.slug === params.slug);
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  if (!game) {
    notFound();
  }

  const volatilityMM = volatilityMap[game.volatility] || game.volatility;
  const relatedGames = gamesData.filter((g: any) => 
    game.relatedGames?.includes(g.slug) && g.slug !== game.slug
  ).slice(0, 4);

  // Schema.org 結構化數據
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": game.name,
    "alternateName": game.nameMm,
    "description": game.descriptionMm || game.description,
    "genre": "Casino/Slot",
    "gamePlatform": "Web Browser, Mobile",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MMK"
    },
    "provider": {
      "@type": "Organization",
      "name": game.provider
    }
  };

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        {/* 麵包屑導航 */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">ဂိမ်းများ</Link>
          <span>/</span>
          <Link href={`/games/${game.category}`} className="hover:text-gold">
            {game.category === 'slots' ? 'စလော့ဂိမ်းများ' : 
             game.category === 'live-casino' ? 'လိုင်ဗ် ကာစီနို' :
             game.category === 'fishing' ? 'ငါးဖမ်းဂိမ်းများ' :
             game.category === 'table-games' ? 'စားပွဲဂိမ်းများ' : game.category}
          </Link>
          <span>/</span>
          <span className="text-white">{game.nameMm}</span>
        </nav>

        {/* H1 標題 - 緬甸語 + 英文 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{game.nameMm}</span>
          <span className="text-white"> - အပြည့်အစုံ ဂိမ်း သုံးသပ်ချက်</span>
          <span className="text-gray-400 text-2xl md:text-3xl block mt-2">| {game.name} Complete Review</span>
        </h1>

        {/* 遊戲主要資訊卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2">
            {game.images && game.images.length > 0 && (
              <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6">
                <Image
                  src={game.images[0]}
                  alt={`${game.nameMm} - ${game.name} Screenshot`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* 第一段 - 緬甸語為主 */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">ဂိမ်း အကြောင်း | About the Game</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {game.descriptionMm || game.description}
              </p>
              <p className="text-gray-400 text-sm">
                {game.name} is {game.description}
              </p>
            </div>

            {/* H2: ဂိမ်း အင်္ဂါရပ်များ | Game Features */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">ဂိမ်း အင်္ဂါရပ်များ | Game Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {game.features?.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gold text-xl">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* H2: အဓိက အင်္ဂါရပ်များ | Key Features */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">အဓိက အင်္ဂါရပ်များ | Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">RTP (ပြန်အမ်းနှုန်း)</div>
                  <div className="text-2xl font-bold text-gold">{game.rtp}%</div>
                  <div className="text-xs text-gray-500 mt-1">စျေးကွက်တွင် အမြင့်ဆုံး ပြန်အမ်းနှုန်း</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">အမြင့်ဆုံး အနိုင် (Max Win)</div>
                  <div className="text-2xl font-bold text-gold">{game.maxWin}</div>
                  <div className="text-xs text-gray-500 mt-1">သင်၏ လောင်းကြေး၏ {game.maxWin}</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">အနည်းဆုံး လောင်းကြေး (Min Bet)</div>
                  <div className="text-2xl font-bold text-gold">{game.minBet} MMK</div>
                  <div className="text-xs text-gray-500 mt-1">အလွန်သက်သာသော စတင်ခြင်း</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">ပြင်းထန်မှု (Volatility)</div>
                  <div className="text-2xl font-bold text-gold">{volatilityMM}</div>
                  <div className="text-xs text-gray-500 mt-1">{game.volatility} volatility</div>
                </div>
              </div>
            </div>

            {/* H2: ဘယ်လို ကစားမလဲ | How to Play */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">ဘယ်လို ကစားမလဲ | How to Play</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>Shwe Casino 99 တွင် အကောင့်ဖွင့်ပါ (Register at Shwe Casino 99)</li>
                <li>ငွေသွင်းပါ (Deposit money)</li>
                <li>{game.nameMm} ဂိမ်းကို ရွေးချယ်ပါ (Select {game.name} game)</li>
                <li>လောင်းကြေး သတ်မှတ်ပါ (Set your bet amount)</li>
                <li>စပင်လုပ်ပါ (Spin the reels)</li>
                <li>အနိုင်ရရှိပါ (Win prizes)</li>
              </ol>
            </div>

            {/* H2: အကောင်းဆုံး အကြံပြုချက်များ | Best Tips */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">အကောင်းဆုံး အကြံပြုချက်များ | Best Tips</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>ငွေကြေး စီမံခန့်ခွဲမှု လုပ်ပါ - သင်၏ ဘတ်ဂျက်ကို သတ်မှတ်ပြီး ထိုအတိုင်း လိုက်နာပါ (Manage your budget and stick to it)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>RTP {game.rtp}% ဖြင့် ဤဂိမ်းသည် စျေးကွက်တွင် အမြင့်ဆုံး ပြန်အမ်းနှုန်း ရရှိသော ဂိမ်းများထဲမှ တစ်ခု ဖြစ်သည် (This game offers one of the highest RTPs in the market)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>{volatilityMM} ပြင်းထန်မှု ရှိသောကြောင့် ကြီးမားသော ဆုလာဘ်များ ရရှိနိုင်သော်လည်း စိတ်ရှည်ရန် လိုအပ်သည် (High volatility means big wins but requires patience)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>အခမဲ့ စမ်းသပ်ကစားခြင်း ဖြင့် ဂိမ်းကို ရင်းနှီးကျွမ်းဝင်စေပါ (Try free play mode first to get familiar)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 側邊欄 */}
          <div className="md:col-span-1">
            <div className="bg-dark-lighter rounded-xl p-6 sticky top-4">
              <div className="text-center mb-6">
                {game.thumbnail && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={game.thumbnail}
                      alt={`${game.nameMm} Thumbnail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-white font-bold">{game.rating}/5</span>
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {game.provider} • {game.category}
                </div>
              </div>

              <CTAButton
                href={randomBrandLink}
                variant="gold"
                size="lg"
                className="w-full mb-4"
              >
                ဂိမ်း ကစားရန် | Play Now
              </CTAButton>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">RTP:</span>
                  <span className="text-white font-bold">{game.rtp}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Win:</span>
                  <span className="text-white font-bold">{game.maxWin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Volatility:</span>
                  <span className="text-white font-bold">{volatilityMM}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Bet:</span>
                  <span className="text-white font-bold">{game.minBet} MMK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Bet:</span>
                  <span className="text-white font-bold">{game.maxBet} MMK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 相關遊戲推薦 */}
        {relatedGames.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">သင့်အတွက် ထောက်ခံထားသော ဂိမ်းများ | Recommended Games</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedGames.map((relatedGame: any) => (
                <Link
                  key={relatedGame.id}
                  href={`/games/${relatedGame.slug}`}
                  className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all"
                >
                  {relatedGame.thumbnail && (
                    <div className="relative w-full h-32">
                      <Image
                        src={relatedGame.thumbnail}
                        alt={`${relatedGame.nameMm} - ${relatedGame.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-1">{relatedGame.nameMm}</h3>
                    <p className="text-gray-400 text-sm">{relatedGame.provider}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Schema.org 結構化數據 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
        />
      </div>
    </div>
  );
}

