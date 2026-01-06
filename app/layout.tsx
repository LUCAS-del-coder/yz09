import type { Metadata, Viewport } from "next";
import { Noto_Sans_Myanmar, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import AgeVerification from "@/components/ui/AgeVerification";
import CookieConsent from "@/components/ui/CookieConsent";
import { getBaseUrl } from "@/lib/config";

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

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  // 添加地理定位設定
  other: {
    'geo.region': 'MM',
    'geo.country': 'MM',
    'geo.placename': 'Myanmar',
    'geo.position': '16.8661;96.1951',
    'ICBM': '16.8661, 96.1951',
    'language': 'my-MM',
    'content-language': 'my-MM',
    'apple-mobile-web-app-capable': 'yes',
    'mobile-web-app-capable': 'yes',
  },
  authors: [{ name: 'Myanmar Casino Reviews Team' }],
  creator: 'Myanmar Casino Reviews',
  publisher: 'Myanmar Casino Reviews',
  category: 'Online Casino Reviews',
  verification: {
    google: '',
    yandex: '',
    bing: '',
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
    images: [
      {
        url: `${baseUrl}/images/site-logo.png`,
        width: 1200,
        height: 630,
        alt: "Myanmar Casino Reviews - အကောင်းဆုံး အွန်လိုင်း ကာစီနို",
      },
    ],
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Myanmar Casino Reviews",
    "image": `${baseUrl}/images/site-logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM",
      "addressRegion": "Yangon Region"
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
          id="external-link-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 獲取當前域名
                const currentHost = window.location.hostname;
                
                // 追蹤外部連結點擊的函數
                function trackOutboundLink(url, linkText) {
                  // 檢查 gtag 是否已載入
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                      'event_category': 'outbound',
                      'event_label': url,
                      'transport_type': 'beacon',
                      'event_callback': function() {
                        // 允許連結正常跳轉
                        return true;
                      }
                    });
                  }
                }
                
                // 監聽所有連結點擊
                document.addEventListener('click', function(e) {
                  let target = e.target;
                  
                  // 向上查找直到找到 <a> 標籤
                  while (target && target.tagName !== 'A') {
                    target = target.parentElement;
                  }
                  
                  if (!target || !target.href) return;
                  
                  const href = target.href;
                  const linkText = target.textContent || target.innerText || '';
                  
                  // 檢查是否為外部連結
                  try {
                    const url = new URL(href);
                    const isExternal = url.hostname !== currentHost && 
                                      (href.startsWith('http://') || href.startsWith('https://'));
                    
                    if (isExternal) {
                      // 追蹤外部連結點擊
                      trackOutboundLink(href, linkText);
                    }
                  } catch (e) {
                    // 如果 URL 解析失敗，忽略
                  }
                }, true);
              })();
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

