import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import gamesData from "@/data/games.json";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });

  return {
    title: t("liveCasinoTitle"),
    description: t("liveCasinoDescription"),
    openGraph: {
      title: t("liveCasinoTitle"),
      description: t("liveCasinoDescription"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: `${baseUrl}/games/live-casino`,
    },
    alternates: {
      canonical: `${baseUrl}/games/live-casino`,
      languages: {
        'my-MM': `${baseUrl}/games/live-casino`,
        'en-US': `${baseUrl}/en/games/live-casino`,
      }
    }
  };
}

export default async function LiveCasinoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const liveGames = gamesData.filter((game: any) => game.category === 'live-casino');
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/games" className="hover:text-gold">{tCommon("games")}</Link>
          <span>/</span>
          <span className="text-white">{t("liveCasino")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">{t("liveCasinoHeading")}</span>
          <span className="text-white"> | Live Casino</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          {t("liveCasinoSubheading")}
        </p>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("liveCasinoHeading")} {tCommon("about")} | About Live Casino</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("liveCasinoDescription")}
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
            {t("liveCasinoHeading")} {tCommon("playNow")} | Play Live Casino
          </h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

