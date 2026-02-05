import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";
import { Link } from "@/i18n/routing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: getCanonicalUrl('/terms', locale),
      languages: getAlternateLanguages('/terms'),
    },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const lastUpdated = "2024-12-16";

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          <span className="gradient-gold">{t("heading")}</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">{t("lastUpdated")}: {lastUpdated}</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. {t("section1.title")}</h2>
            <p className="mb-4">
              {t("section1.text1")}
            </p>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("section1.text2") }} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. {t("section2.title")}</h2>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: t("section2.text") }} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. {t("section3.title")}</h2>
            <p className="mb-4">
              {t("section3.text")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. {t("section4.title")}</h2>
            <p className="mb-4">
              {t("section4.text1")}
            </p>
            <p className="mb-4">
              {t("section4.text2")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. {t("section5.title")}</h2>
            <p className="mb-4">
              {t("section5.text")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. {t("section6.title")}</h2>
            <p className="mb-4">
              {t("section6.text")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. {t("section7.title")}</h2>
            <p className="mb-4">
              {t("section7.text")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. {t("section8.title")}</h2>
            <p className="mb-4">
              {t("section8.text")} <Link href="/contact" className="text-gold hover:underline">{t("section8.link")}</Link> {t("section8.linkText")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

