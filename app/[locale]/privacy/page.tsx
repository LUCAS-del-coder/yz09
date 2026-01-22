import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getBaseUrl } from "@/lib/config";
import { Link } from "@/i18n/routing";

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/privacy`,
      languages: {
        'my-MM': `${baseUrl}/privacy`,
        'en-US': `${baseUrl}/en/privacy`,
      }
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
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
              {t("section1.text")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. {t("section2.title")}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.1 {t("section2.subsection1.title")}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {t.raw("section2.subsection1.items").map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.2 {t("section2.subsection2.title")}</h3>
                <p className="mb-4">
                  {t("section2.subsection2.text")}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. {t("section3.title")}</h2>
            <p className="mb-4">
              {t("section3.text")}
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{t("section3.cookieTypes.title")}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies</strong>: {t("section3.cookieTypes.essential")}</li>
                  <li><strong>Analytics Cookies</strong>: {t("section3.cookieTypes.analytics")}</li>
                  <li><strong>Functional Cookies</strong>: {t("section3.cookieTypes.functional")}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. {t("section4.title")}</h2>
            <p className="mb-4">{t("section4.text")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.raw("section4.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. {t("section5.title")}</h2>
            <p className="mb-4">
              {t("section5.text1")}
            </p>
            <p className="mb-4">
              {t("section5.text2")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. {t("section6.title")}</h2>
            <p className="mb-4">{t("section6.text")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {t.raw("section6.items").map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
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

