import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedCasinos from "@/components/sections/FeaturedCasinos";
import TrustIndicators from "@/components/sections/TrustIndicators";
import LatestBonuses from "@/components/sections/LatestBonuses";

export const metadata: Metadata = {
  title: "2025 အကောင်းဆုံး Online Casino များ - Myanmar Casino Reviews",
  description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ။ ဘောနပ်စ် အများဆုံး၊ ငွေထုတ်ယူမှု မြန်ဆန်။",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustIndicators />
      <FeaturedCasinos />
      <LatestBonuses />
    </div>
  );
}

