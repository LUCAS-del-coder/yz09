import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guideResponsibleGaming" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: `${baseUrl}/guide/responsible-gaming`,
    },
    alternates: {
      canonical: `${baseUrl}/guide/responsible-gaming`,
      languages: {
        'my-MM': `${baseUrl}/guide/responsible-gaming`,
        'en-US': `${baseUrl}/en/guide/responsible-gaming`,
      }
    }
  };
}

export default async function ResponsibleGamingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guideResponsibleGaming" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-gold">{tCommon("guide")}</Link>
          <span>/</span>
          <span className="text-white">{t("heading")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{t("heading")}</span>
        </h1>

        <div className="space-y-8 mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("whatIsResponsibleGaming")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("whatIsText")}
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("selfAssessment")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("selfAssessmentText")}
            </p>
            <div className="space-y-3">
              {t.raw("selfAssessmentQuestions").map((question: string, index: number) => (
                <div key={index} className="bg-dark rounded-lg p-4">
                  <p className="text-gray-300">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("settingLimits")}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-dark rounded-lg p-4">
                <h3 className="text-gold font-bold mb-2">{t("depositLimit")}</h3>
                <p className="text-gray-300 text-sm">{t("depositLimitText")}</p>
              </div>
              <div className="bg-dark rounded-lg p-4">
                <h3 className="text-gold font-bold mb-2">{t("betLimit")}</h3>
                <p className="text-gray-300 text-sm">{t("betLimitText")}</p>
              </div>
              <div className="bg-dark rounded-lg p-4">
                <h3 className="text-gold font-bold mb-2">{t("timeLimit")}</h3>
                <p className="text-gray-300 text-sm">{t("timeLimitText")}</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("selfExclusion")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("selfExclusionText")}
            </p>
            <div className="bg-dark rounded-lg p-4 mt-4">
              <p className="text-gold font-bold mb-2">⚠️ {t("selfExclusionImportant")}</p>
              <p className="text-gray-300 text-sm">
                {t("selfExclusionImportantText")}
              </p>
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 border border-red-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">{t("problemGamblingSigns")}</h2>
            <ul className="space-y-3 text-gray-300">
              {t.raw("problemGamblingList").map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-red-400">⚠️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">{t("gettingHelp")}</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("gettingHelpText")}
            </p>
            <ul className="space-y-3 text-gray-300">
              {t.raw("gettingHelpList").map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-400">📞</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("healthyGaming")}</h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("healthyGamingText")}
          </p>
        </div>
      </div>
    </div>
  );
}

