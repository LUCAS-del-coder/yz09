import type { Metadata } from "next";
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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  // 添加地理定位設定
  other: {
    'geo.region': 'MM',
    'geo.country': 'MM',
    'geo.placename': 'Myanmar',
    'language': 'my-MM',
    'content-language': 'my-MM',
  },
  title: {
    // 改為緬甸文優先
    default: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Myanmar Casino Reviews",
    template: "%s | Myanmar Casino Reviews",
  },
  description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ - Shwe Casino (ရွှေ), 888, 777, Win8, 999, PGLucky88, FaFaFa အကြောင်း ကျွမ်းကျင်သူများ၏ အကဲဖြတ်ချက်များ၊ ဘောနပ်စ်များနှင့် လမ်းညွှန်များ",
  openGraph: {
    title: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Myanmar Casino Reviews",
    description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ - ဘောနပ်စ်များ၊ အဆင့်သတ်မှတ်ချက်များနှင့် လမ်းညွှန်များ",
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
      'en': baseUrl + '/en', // 為未來的英文版預留
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Myanmar Casino Reviews - မြန်မာ ကာစီနို သုံးသပ်ချက်များ",
    "url": baseUrl,
    "description": "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
    "inLanguage": "my-MM",
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Country",
        "name": "Myanmar"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Myanmar Casino Reviews",
    "url": baseUrl,
    "description": "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM"
    }
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

