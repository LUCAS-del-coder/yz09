import { Metadata } from "next";
import BonusCard from "@/components/ui/BonusCard";
import casinosData from "@/data/casinos.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: "ဘောနပ်စ် နှင့် ပရိုမိုးရှင်းများ - Myanmar Casino Reviews",
  description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို ဘောနပ်စ်များ နှင့် ပရိုမိုးရှင်းများ။",
  alternates: {
    canonical: `${baseUrl}/bonuses`,
  },
  openGraph: {
    title: "ဘောနပ်စ် နှင့် ပရိုမိုးရှင်းများ",
    description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို ဘောနပ်စ်များ နှင့် ပရိုမိုးရှင်းများ။",
    url: `${baseUrl}/bonuses`,
  },
};

export default function BonusesPage() {
  const casinos = casinosData;
  const brandLinks = [
    "https://www.yes8.io/m/home?affiliateCode=seom1802",
    "https://www.ygn9.net/m/home?affiliateCode=seom1902",
    "https://www.pya777.net/m/home?affiliateCode=seom2002",
    "https://www.mmk99.net/m/home?affiliateCode=seom2102",
    "https://www.kbz999.net/m/home?affiliateCode=seom2202",
    "https://www.mmk123.net/m/home?affiliateCode=seom2302",
  ];

  const allBonuses = casinos.flatMap((casino) =>
    casino.bonuses.map((bonus) => ({
      ...bonus,
      ctaLink: brandLinks[Math.floor(Math.random() * brandLinks.length)],
      casinoName: casino.name,
    }))
  );

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">ဘောနပ်စ်</span>{" "}
            <span className="text-white">နှင့် ပရိုမိုးရှင်းများ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            အထူးဘောနပ်စ်များ နှင့် ပရိုမိုးရှင်းများကို ရယူပါ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allBonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              type={bonus.type}
              amount={bonus.amount}
              description={bonus.description}
              ctaLink={bonus.ctaLink}
              index={index}
            />
          ))}
        </div>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest">
          <h2 className="text-2xl font-bold text-white mb-4">
            ဘောနပ်စ် အသုံးပြုနည်း
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              ဘောနပ်စ်များသည် အကောင့်ဖွင့်လှစ်ပြီး ငွေဖြည့်သွင်းမှုအတွက် အထူးပရိုမိုးရှင်းများ ဖြစ်သည်။
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>အကောင့်ဖွင့်လှစ်ပြီး ပထမဆုံးအကြိမ် ငွေဖြည့်သွင်းမှုအတွက် Welcome Bonus</li>
              <li>ပုံမှန် ငွေဖြည့်သွင်းမှုအတွက် Reload Bonus</li>
              <li>အထူးအစီအစဉ်များအတွက် Free Spins</li>
              <li>VIP အစီအစဉ်များအတွက် အထူးဘောနပ်စ်များ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

