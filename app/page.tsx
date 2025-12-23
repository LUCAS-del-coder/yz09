import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedCasinos from "@/components/sections/FeaturedCasinos";
import TrustIndicators from "@/components/sections/TrustIndicators";
import FeaturedGames from "@/components/sections/FeaturedGames";
import LatestBonuses from "@/components/sections/LatestBonuses";
import FAQ from "@/components/sections/FAQ";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Shwe, 888, 777, Win8, 999",
  description: "မြန်မာနိုင်ငံအတွက် နံပါတ် ၁ ကာစီနို သုံးသပ်ချက် ဝဘ်ဆိုဒ် - Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88 နှင့် FaFaFa ကို နှိုင်းယှဉ်ပါ။ မြန်မာ ကစားသမားများအတွက် ကျွမ်းကျင်သူ သုံးသပ်ချက်များ၊ ဘောနပ်စ်များနှင့် အဆင့်သတ်မှတ်ချက်များ။",
  keywords: [
    // 緬甸文關鍵字優先
    "မြန်မာ ကာစီနို",
    "ရွှေ ကာစီနို",
    "၈၈၈ ကာစီနို",
    "၇၇၇ ကာစီနို",
    "အွန်လိုင်း ကာစီနို မြန်မာ",
    "Myanmar casino",
    "Shwe Casino",
    "888 Casino Myanmar", 
    "777 Casino",
    "Win8 Casino",
    "999 Casino",
    "PGLucky88",
    "FaFaFa Casino",
    "online casino Myanmar"
  ].join(", "),
  alternates: {
    canonical: baseUrl,
    languages: {
      'my-MM': baseUrl,
    }
  },
  openGraph: {
    title: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Casino များ | Shwe, 888, 777, Win8",
    description: "Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino အကြောင်း ကျွမ်းကျင်သူ သုံးသပ်ချက်များ။ မြန်မာ ကစားသမားများအတွက် အကောင်းဆုံး ဘောနပ်စ်များနှင့် ဂိမ်းများကို ရှာပါ။",
    url: baseUrl,
    locale: "my_MM",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustIndicators />
      <FeaturedCasinos />
      <FeaturedGames />
      <LatestBonuses />
      <FAQ />
    </div>
  );
}

