import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import gamesData from "@/data/games.json";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const game = gamesData.find((g: any) => g.slug === slug);
  const baseUrl = getBaseUrl();
  
  if (!game) {
    const t = await getTranslations({ locale, namespace: "common" });
    return {
      title: `${t("notFound")} | Game Not Found | Myanmar Casino Reviews`,
    };
  }

  const volatilityMM = volatilityMap[game.volatility] || game.volatility;
  
  return {
    title: `${game.nameMm} - ဂိမ်း အပြည့်အစုံ သုံးသပ်ချက် | ${game.name} Review | Myanmar Casino Reviews`,
    description: `${game.nameMm} ဆလော့ ဂိမ်းကို Myanmar Casino Reviews တွင် ကစားပါ။ RTP ${game.rtp}%၊ ${volatilityMM} ပြင်းထန်မှု၊ အမြင့်ဆုံး ဆုငွေ ${game.maxWin}။ ${game.provider} ၏ အကောင်းဆုံး ဂိမ်း။ Play ${game.name} slot - RTP ${game.rtp}%, Max win ${game.maxWin}, ${game.provider} game.`,
    openGraph: {
      title: `${game.nameMm} | ${game.name} | Myanmar Casino Reviews`,
      description: `${game.nameMm} - RTP ${game.rtp}%၊ အမြင့်ဆုံး ${game.maxWin}၊ ${game.provider} ဂိမ်း`,
      type: 'article',
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: `${baseUrl}/games/${game.slug}`,
      images: game.images && game.images.length > 0 ? [{
        url: `${baseUrl}${game.images[0]}`,
        alt: `${game.nameMm} - ${game.name} Screenshot`
      }] : [],
    },
    alternates: {
      canonical: `${baseUrl}/games/${game.slug}`,
      languages: {
        'my-MM': `${baseUrl}/games/${game.slug}`,
        'en-US': `${baseUrl}/en/games/${game.slug}`
      }
    }
  };
}

export default async function GameDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tGames = await getTranslations({ locale, namespace: "games" });
  const game = gamesData.find((g: any) => g.slug === slug);
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  if (!game) {
    notFound();
  }

  const volatilityMM = volatilityMap[game.volatility] || game.volatility;
  const relatedGames = gamesData.filter((g: any) => 
    game.relatedGames?.includes(g.slug) && g.slug !== game.slug
  ).slice(0, 4);
  
  const getCategoryLabel = (category: string) => {
    if (category === 'slots') return tGames("slots");
    if (category === 'live-casino') return tGames("liveCasino");
    if (category === 'fishing') return tGames("fishing");
    if (category === 'table-games') return tGames("tableGames");
    return category;
  };

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
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">{tCommon("games")}</Link>
          <span>/</span>
          <Link href={`/games/${game.category}`} className="hover:text-gold">
            {getCategoryLabel(game.category)}
          </Link>
          <span>/</span>
          <span className="text-white">{game.nameMm}</span>
        </nav>

        {/* H1 標題 - 緬甸語 + 英文 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{game.nameMm}</span>
          <span className="text-white"> - {tGames("completeReview")}</span>
          <span className="text-gray-400 text-2xl md:text-3xl block mt-2">| {game.name} {tGames("completeReview")}</span>
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
              <h2 className="text-2xl font-bold text-white mb-4">{tGames("aboutGame")} | About the Game</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {game.descriptionMm || game.description}
              </p>
              <p className="text-gray-400 text-sm">
                {game.name} is {game.description}
              </p>
            </div>

            {/* H2: ဂိမ်း အင်္ဂါရပ်များ | Game Features */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">{tGames("gameFeatures")} | Game Features</h2>
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
              <h2 className="text-2xl font-bold text-white mb-4">{tGames("keyFeatures")} | Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{tGames("rtp")}</div>
                  <div className="text-2xl font-bold text-gold">{game.rtp}%</div>
                  <div className="text-xs text-gray-500 mt-1">{tGames("highestReturnRate")}</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{tGames("maxWin")} (Max Win)</div>
                  <div className="text-2xl font-bold text-gold">{game.maxWin}</div>
                  <div className="text-xs text-gray-500 mt-1">{tGames("ofYourBet")} {game.maxWin}</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{tGames("minBet")} (Min Bet)</div>
                  <div className="text-2xl font-bold text-gold">{game.minBet} MMK</div>
                  <div className="text-xs text-gray-500 mt-1">{tGames("veryAffordableStart")}</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{tGames("volatility")} (Volatility)</div>
                  <div className="text-2xl font-bold text-gold">{volatilityMM}</div>
                  <div className="text-xs text-gray-500 mt-1">{game.volatility} {tGames("volatilityText")}</div>
                </div>
              </div>
            </div>

            {/* H2: ဘယ်လို ကစားမလဲ | How to Play */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">{tGames("howToPlay")} | How to Play</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>{tGames("registerAtCasino")} (Register at Shwe Casino 99)</li>
                <li>{tGames("depositMoney")} (Deposit money)</li>
                <li>{tGames("selectGame", { game: game.nameMm })} (Select {game.name} game)</li>
                <li>{tGames("setBetAmount")} (Set your bet amount)</li>
                <li>{tGames("spinReels")} (Spin the reels)</li>
                <li>{tGames("winPrizes")} (Win prizes)</li>
              </ol>
            </div>

            {/* H2: အကောင်းဆုံး အကြံပြုချက်များ | Best Tips */}
            <div className="bg-dark-lighter rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">{tGames("bestTips")} | Best Tips</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>{tGames("manageBudget")} (Manage your budget and stick to it)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>{tGames("highRtpGame", { rtp: game.rtp })} (This game offers one of the highest RTPs in the market)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>{tGames("highVolatility", { volatility: volatilityMM })} (High volatility means big wins but requires patience)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold text-xl">💡</span>
                  <span>{tGames("tryFreePlay")} (Try free play mode first to get familiar)</span>
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
                {tGames("playNow")} | Play Now
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
            <h2 className="text-3xl font-bold text-white mb-6">{tGames("recommendedGames")} | Recommended Games</h2>
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

