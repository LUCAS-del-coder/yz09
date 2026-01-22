import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/contact`,
      languages: {
        'my-MM': `${baseUrl}/contact`,
        'en-US': `${baseUrl}/en/contact`,
      }
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          <span className="gradient-gold">{t("heading")}</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("information")}</h2>
            <p className="mb-4">
              {t("informationText")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("aboutWebsite")}</h2>
            <p className="mb-4">
              {t("aboutWebsiteText1")}
            </p>
            <p className="mb-4">
              {t("aboutWebsiteText2")}
            </p>
            <p className="mb-4">
              {t("aboutWebsiteText3")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("office")}</h2>
            <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
              <p className="mb-2"><strong className="text-white">{t("name")}:</strong> {t("nameValue")}</p>
              <p className="mb-2"><strong className="text-white">{t("language")}:</strong> {t("languageValue")}</p>
              <p className="mb-2"><strong className="text-white">{t("website")}:</strong> <span className="text-gold">{t("websiteValue")}</span></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("workingHours")}</h2>
            <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
              <p className="mb-2"><strong className="text-white">{t("websiteHours")}:</strong> {t("websiteHoursValue")}</p>
              <p className="mb-2"><strong className="text-white">{t("help")}:</strong> {t("helpValue")}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("suggestions")}</h2>
            <p className="mb-4">
              {t("suggestionsText")}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.raw("suggestionsList").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("warning")}</h2>
            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
              <p className="text-white mb-2">
                <strong>⚠️ {t("warningTitle")}</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white">
                {t.raw("warningList").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("thankYou")}</h2>
            <p className="mb-4">
              {t("thankYouText")}
            </p>
            <p>
              {t("thankYouLink")} <a href="/responsible-gaming" className="text-gold hover:underline">{t("responsibleGamingLink")}</a> {t("thankYouLinkEnd")}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

