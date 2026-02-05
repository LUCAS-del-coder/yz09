import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";
import { Link } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "responsibleGaming" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: getCanonicalUrl('/responsible-gaming', locale),
      languages: getAlternateLanguages('/responsible-gaming'),
    },
  };
}

export default async function ResponsibleGamingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "responsibleGaming" });

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          <span className="gradient-gold">{t("heading")}</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest space-y-6 text-gray-300">
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⚠️</span>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  {t("warning")}
                </h2>
                <p className="text-white">
                  {t("warningText")}
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. {t("section1.title")}</h2>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("section1.text") }} />
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{t("section1.subtitle")}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {t.raw("section1.items").map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. {t("section2.title")}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t("section2.budget.title")}</h3>
                <p className="mb-4">
                  {t("section2.budget.text")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t("section2.time.title")}</h3>
                <p className="mb-4">
                  {t("section2.time.text")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t("section2.selfExclusion.title")}</h3>
                <p className="mb-4">
                  {t("section2.selfExclusion.text")}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. {t("section3.title")}</h2>
            <p className="mb-4">
              {t("section3.text")}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">{t("section3.gamCare.name")}</h3>
                <p className="text-gray-400 mb-4">{t("section3.gamCare.description")}</p>
                <p className="text-gold font-semibold">{t("section3.gamCare.website")}</p>
                <p className="text-gold font-semibold">{t("section3.gamCare.helpline")}</p>
              </div>
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">{t("section3.beGambleAware.name")}</h3>
                <p className="text-gray-400 mb-4">{t("section3.beGambleAware.description")}</p>
                <p className="text-gold font-semibold">{t("section3.beGambleAware.website")}</p>
                <p className="text-gold font-semibold">{t("section3.beGambleAware.helpline")}</p>
              </div>
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">{t("section3.gamblersAnonymous.name")}</h3>
                <p className="text-gray-400 mb-4">{t("section3.gamblersAnonymous.description")}</p>
                <p className="text-gold font-semibold">{t("section3.gamblersAnonymous.website")}</p>
              </div>
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">{t("section3.nationalHelpline.name")}</h3>
                <p className="text-gray-400 mb-4">{t("section3.nationalHelpline.description")}</p>
                <p className="text-gold font-semibold">{t("section3.nationalHelpline.helpline")}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. {t("section4.title")}</h2>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("section4.text") }} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. {t("section5.title")}</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.raw("section5.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. {t("section6.title")}</h2>
            <p className="mb-4">
              {t("section6.text")} <Link href="/contact" className="text-gold hover:underline">{t("section6.link")}</Link> {t("section6.linkText")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

