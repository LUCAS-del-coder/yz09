import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import StarRating from "@/components/ui/StarRating";
import ProsCons from "@/components/ui/ProsCons";
import BonusCard from "@/components/ui/BonusCard";
import CTAButton from "@/components/ui/CTAButton";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import HeroImage from "@/components/ui/HeroImage";
import CasinoLogo from "@/components/ui/CasinoLogo";
import { getBaseUrl, getCanonicalUrl, getAlternateLanguages } from "@/lib/config";
import { getTranslations } from "next-intl/server";
import { getCasinos, getCasinoBySlug } from "@/lib/get-casinos";
import casinosEn from "@/data/casinos-en.json";

export async function generateStaticParams() {
  // Use English data for static params (slug is the same in both languages)
  return casinosEn.map((casino) => ({
    slug: casino.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const casino = getCasinoBySlug(slug, locale);
  const baseUrl = getBaseUrl();

  if (!casino) {
    const t = await getTranslations({ locale, namespace: "common" });
    return {
      title: `${t("notFound")} | Casino Not Found`,
    };
  }

  // Get competitor names (use English for competitor names in metadata)
  const casinosEn = getCasinos('en');
  const competitors = casinosEn
    .filter(c => c.slug !== slug)
    .slice(0, 3)
    .map(c => c.name)
    .join(", ");

  return {
    title: `${casino.name} Review 2025 | ${casino.name} vs ${competitors}`,
    description: `Comprehensive ${casino.name} review for Myanmar players. Compare with Shwe Casino, 888, 777, Win8. Rating: ${casino.rating}/5. Bonuses, games, withdrawal times & expert analysis.`,
    alternates: {
      canonical: getCanonicalUrl(`/review/${casino.slug}`, locale),
      languages: getAlternateLanguages(`/review/${casino.slug}`),
    },
    openGraph: {
      title: `${casino.name} Review | Compare with Shwe, 888, 777 Casinos`,
      description: `Expert ${casino.name} review. Rating: ${casino.rating}/5. Compare bonuses & features vs Shwe Casino, 888, 777, Win8. Best for Myanmar players.`,
      type: "article",
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: getCanonicalUrl(`/review/${casino.slug}`, locale),
      images: [
        {
          url: `${baseUrl}/images/casinos/${casino.slug}-hero.jpg`,
          width: 1200,
          height: 630,
          alt: `${casino.name} - ${casino.excerpt}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${casino.name} Review`,
      description: casino.excerpt,
    },
  };
}

export default async function CasinoReviewPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const casino = getCasinoBySlug(slug, locale);
  const baseUrl = getBaseUrl();
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const tReview = await getTranslations({ locale, namespace: "review" });

  if (!casino) {
    notFound();
  }

  // Schema.org structured data for Product and Review
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": casino.name,
    "description": casino.excerpt,
    "image": `${baseUrl}${casino.logo}`,
    "brand": {
      "@type": "Brand",
      "name": casino.name,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": casino.rating.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "127",
      "reviewCount": "89",
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "MMK",
    },
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": casino.name,
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": casino.rating.toString(),
      "bestRating": "5",
    },
    "author": {
      "@type": "Organization",
      "name": "Myanmar Casino Reviews",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Reviews",
        "item": `${baseUrl}/review`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": casino.name,
        "item": `${baseUrl}/review/${casino.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: tReview("home"), href: "/" },
          { label: tReview("reviews"), href: "/review/top-myanmar-casinos" },
          { label: casino.name, href: `/review/${casino.slug}` },
        ]}
      />
      <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroImage
            src={casino.hero}
            alt={`${casino.name} Casino - ${casino.excerpt}`}
            fallbackSrc={casino.logo}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-xl bg-dark-lighter border-2 border-gold p-2">
                <CasinoLogo
                  src={casino.logo}
                  alt={`${casino.name} Casino Logo`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  fallbackText={casino.name.charAt(0)}
                  fallbackImage={casino.hero}
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {casino.name}
                </h1>
                <StarRating rating={casino.rating} size="lg" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-6">{casino.excerpt}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href={casino.ctaLink} variant="gold" size="lg">
                {tReview("playAtCasino")}
              </CTAButton>
              <CTAButton href={casino.ctaLink} variant="primary" size="lg">
                {tReview("getBonus")}
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Quick Facts */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest text-center">
              <div className="text-2xl font-bold text-gold mb-2">{casino.features.games}</div>
              <div className="text-sm text-gray-400">{tReview("games")}</div>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest text-center">
              <div className="text-2xl font-bold text-gold mb-2">{casino.features.providers}</div>
              <div className="text-sm text-gray-400">{tReview("gameProviders")}</div>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest text-center">
              <div className="text-2xl font-bold text-gold mb-2">{casino.features.withdrawalTime}</div>
              <div className="text-sm text-gray-400">{tReview("withdrawal")}</div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">{tReview("prosAndCons")}</h2>
            <ProsCons pros={casino.pros} cons={casino.cons} />
          </div>

          {/* Bonuses */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">{tReview("bonusesAndPromotions")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {casino.bonuses.map((bonus, index) => (
                <BonusCard
                  key={index}
                  type={bonus.type}
                  amount={bonus.amount}
                  description={bonus.description}
                  ctaLink={casino.ctaLink}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Game Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">{tReview("gameCategories")}</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {casino.gameCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest hover:border-gold/50 transition-colors text-center"
                >
                  <div className="text-2xl mb-2">
                    {category === "Slots" && "🎰"}
                    {category === "Live Casino" && "🎲"}
                    {category === "Sports Betting" && "⚽"}
                    {category === "Fishing" && "🎣"}
                    {category === "Poker" && "🃏"}
                    {category === "Lottery" && "🎫"}
                    {category === "Arcade" && "🕹️"}
                  </div>
                  <div className="font-semibold text-white">{category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">{tReview("paymentMethods")}</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {casino.paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-dark-lighter rounded-lg p-4 border border-dark-lightest hover:border-primary transition-colors text-center"
                >
                  <div className="font-semibold text-white">{method}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Verdict */}
          <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-gold">⭐</span>
              {tReview("expertVerdict")}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {casino.name} {tReview("expertVerdictText")}
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href={casino.ctaLink} variant="gold" size="lg">
                {tReview("openAccount")}
              </CTAButton>
              <CTAButton href={casino.ctaLink} variant="primary" size="lg">
                {tReview("getBonus")}
              </CTAButton>
            </div>
          </div>

          {/* Security & Support */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest">
              <h3 className="text-xl font-bold text-white mb-4">{tReview("securityAndLicense")}</h3>
              <p className="text-gray-300 mb-4">{casino.features.license}</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✅ {tReview("securityFeatures.ssl")}</li>
                <li>✅ {tReview("securityFeatures.licensed")}</li>
                <li>✅ {tReview("securityFeatures.excellent")}</li>
              </ul>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest">
              <h3 className="text-xl font-bold text-white mb-4">{tReview("customerService")}</h3>
              <p className="text-gray-300 mb-4">{casino.features.support}</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✅ {tReview("supportFeatures.liveChat")}</li>
                <li>✅ {tReview("supportFeatures.myanmar")}</li>
                <li>✅ {tReview("supportFeatures.email")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

