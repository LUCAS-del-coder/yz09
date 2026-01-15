import type { Metadata, Viewport } from "next";
import { Noto_Sans_Myanmar, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import AgeVerification from "@/components/ui/AgeVerification";
import CookieConsent from "@/components/ui/CookieConsent";

const myanmarFont = Noto_Sans_Myanmar({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["myanmar"],
  variable: "--font-myanmar",
  display: "swap",
  preload: true,
});

const englishFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-english",
  display: "swap",
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yz09.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Myanmar Casino Reviews",
    template: "%s | Myanmar Casino Reviews",
  },
  description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ - Shwe Casino (ရွှေ), 888, 777, Win8, 999, PGLucky88, FaFaFa အကြောင်း ကျွမ်းကျင်သူများ၏ အကဲဖြတ်ချက်များ၊ ဘောနပ်စ်များနှင့် လမ်းညွှန်များ",
  openGraph: {
    title: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Myanmar Casino Reviews",
    description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
    type: "website",
    locale: "my_MM",
    siteName: "Myanmar Casino Reviews",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ",
    description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'my-MM': baseUrl,
      'en': `${baseUrl}/en`,
    },
  },
  other: {
    'geo.region': 'MM',
    'geo.country': 'MM',
    'geo.placename': 'Myanmar',
    'geo.position': '16.8661;96.1951',
    'ICBM': '16.8661, 96.1951',
    'language': 'my-MM',
    'content-language': 'my-MM',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a0b2e' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Myanmar Casino Reviews",
    "url": baseUrl,
    "description": "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
    "inLanguage": "my-MM",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Myanmar Casino Reviews",
    "url": baseUrl,
    "description": "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM",
      "addressRegion": "Yangon Region",
      "addressLocality": "Yangon"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["my", "en"],
      "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Myanmar Casino Reviews",
    "image": `${baseUrl}/images/site-logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM",
      "addressRegion": "Yangon Region",
      "addressLocality": "Yangon"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "16.8661",
      "longitude": "96.1951"
    },
    "url": baseUrl,
    "priceRange": "$$"
  };

  return (
    <html lang="my" className={`${myanmarFont.variable} ${englishFont.variable}`}>
      <body className={`${myanmarFont.variable} ${englishFont.variable}`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HRDGFWT9KP"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HRDGFWT9KP');
            `,
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <AgeVerification />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <CookieConsent />
      </body>
    </html>
  );
}
