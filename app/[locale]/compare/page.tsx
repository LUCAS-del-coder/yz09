import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ComparisonTable from "@/components/ui/ComparisonTable";
import { getCasinos } from "@/lib/get-casinos";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compare" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${baseUrl}/compare`,
      languages: {
        'my-MM': `${baseUrl}/compare`,
        'en-US': `${baseUrl}/en/compare`,
      }
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/compare`,
      locale: locale === 'my' ? 'my_MM' : 'en_US',
    },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compare" });
  const casinos = getCasinos(locale);
  
  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            <span className="gradient-purple">{t("heading")}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        <ComparisonTable casinos={casinos} />

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">
            {t("howToChoose")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-dark mb-2">{t("considerBonuses")}</h3>
              <p>
                {t("considerBonusesText")}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">{t("checkWithdrawal")}</h3>
              <p>
                {t("checkWithdrawalText")}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">{t("gameSelection")}</h3>
              <p>
                {t("gameSelectionText")}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">{t("paymentMethods")}</h3>
              <p>
                {t("paymentMethodsText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

