import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ComparisonTable from "@/components/ui/ComparisonTable";
import { getCanonicalUrl, getAlternateLanguages } from "@/lib/config";
import { getCasinos } from "@/lib/get-casinos";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "review" });
  const canonical = getCanonicalUrl('/review/top-myanmar-casinos', locale);

  return {
    title: t("topCasinosTitle"),
    description: t("topCasinosDescription"),
    alternates: {
      canonical,
      languages: getAlternateLanguages('/review/top-myanmar-casinos'),
    },
    openGraph: {
      title: t("topCasinosTitle"),
      description: t("topCasinosDescription"),
      url: canonical,
      locale: locale === 'my' ? 'my_MM' : 'en_US',
    },
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "review" });
  const casinos = getCasinos(locale);
  
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">{t("topCasinosHeading")}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {t("topCasinosSubheading")}
          </p>
        </div>

        <ComparisonTable casinos={casinos} />
      </div>
    </div>
  );
}

