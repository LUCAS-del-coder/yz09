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
  title: {
    default: "Myanmar Casino Reviews | Shwe, 888, 777, Win8, 999 & More",
    template: "%s | Myanmar Casino Reviews",
  },
  description: "Expert reviews & comparisons of Myanmar's top online casinos: Shwe Casino (ရွှေ), 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88, FaFaFa. Get exclusive bonuses, ratings & guides for မြန်မာ players in 2025.",
  openGraph: {
    title: "2025 အကောင်းဆုံး Online Casino များ",
    description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
    type: "website",
    locale: "my_MM",
    siteName: "Myanmar Casino Reviews",
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "2025 အကောင်းဆုံး Online Casino များ",
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
  };

  return (
    <html lang="my" className={`${myanmarFont.variable} ${englishFont.variable}`}>
      <head>
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${myanmarFont.variable} ${englishFont.variable}`}>
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

