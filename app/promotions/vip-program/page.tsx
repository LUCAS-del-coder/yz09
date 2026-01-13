import { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export const metadata: Metadata = {
  title: "VIP အစီအစဉ် | 5 လွှာ အကောင့် စနစ် | Myanmar Casino Reviews",
  description: "Myanmar Casino Reviews VIP အစီအစဉ်တွင် ပါဝင်ပြီး ဂုဏ်ယူစွာ ခံစားရယူပါ။ 5 လွှာ အကောင့် စနစ်၊ အထူး ဘောနပ်စ်၊ ပိုမိုမြင့်မားသော ပြန်လည်ပေးအပ်မှု၊ ဦးစားပေး ငွေထုတ်ယူမှု၊ မွေးနေ့ လက်ဆောင်ငွေ။ Join VIP program - 5 tier system, exclusive bonuses, higher rebate, priority withdrawal.",
  keywords: [
    "VIP အစီအစဉ်",
    "VIP program Myanmar",
    "ကာစီနို VIP",
    "VIP membership",
    "VIP benefits Myanmar"
  ].join(", "),
  openGraph: {
    title: "VIP အစီအစဉ် | VIP Program Myanmar",
    locale: 'my_MM',
    url: `${baseUrl}/promotions/vip-program`,
  },
  alternates: {
    canonical: `${baseUrl}/promotions/vip-program`,
  }
};

const vipLevels = [
  {
    name: "Bronze",
    nameMm: "ကြေးဝါ",
    benefits: ["5% ပြန်လည်ပေးအပ်မှု", "VIP ဖောက်သည်ဝန်ဆောင်မှု", "ဦးစားပေး ငွေထုတ်ယူမှု"],
    requirements: "အနည်းဆုံး 100,000 MMK အပ်ငွေ"
  },
  {
    name: "Silver",
    nameMm: "ငွေ",
    benefits: ["8% ပြန်လည်ပေးအပ်မှု", "အထူး ဘောနပ်စ်", "ပိုမိုမြန်ဆန်သော ငွေထုတ်ယူမှု"],
    requirements: "အနည်းဆုံး 500,000 MMK အပ်ငွေ"
  },
  {
    name: "Gold",
    nameMm: "ရွှေ",
    benefits: ["12% ပြန်လည်ပေးအပ်မှု", "အထူး ဘောနပ်စ်", "ပုဂ္ဂိုလ်ရေး ဖောက်သည်ဝန်ဆောင်မှု"],
    requirements: "အနည်းဆုံး 1,000,000 MMK အပ်ငွေ"
  },
  {
    name: "Platinum",
    nameMm: "ပတ္တမြား",
    benefits: ["15% ပြန်လည်ပေးအပ်မှု", "အထူး ဘောနပ်စ်", "အထူး ဖြစ်ရပ်များ ဖိတ်ခေါ်ခြင်း"],
    requirements: "အနည်းဆုံး 2,500,000 MMK အပ်ငွေ"
  },
  {
    name: "Diamond",
    nameMm: "စိန်",
    benefits: ["20% ပြန်လည်ပေးအပ်မှု", "အထူး ဘောနပ်စ်", "အထူး လက်ဆောင်များ"],
    requirements: "အနည်းဆုံး 5,000,000 MMK အပ်ငွေ"
  }
];

export default function VIPProgramPage() {
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/bonuses" className="hover:text-gold">ဘောနပ်စ်များ</Link>
          <span>/</span>
          <span className="text-white">VIP အစီအစဉ်</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">VIP အစီအစဉ်</span>
          <span className="text-white"> | VIP Program</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">VIP အစီအစဉ် အကြောင်း | About VIP Program</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Myanmar Casino Reviews VIP အစီအစဉ် သည် သစ္စာရှိသော ကစားသမားများ 
            အတွက် ဒီဇိုင်းထုတ်ထားသော အထူး အစီအစဉ် ဖြစ်သည်။ 5 လွှာ အကောင့် 
            စနစ် ဖြင့် သင်သည် ပိုမိုမြင့်မားသော ဘောနပ်စ်၊ ပိုမိုမြန်ဆန်သော 
            ငွေထုတ်ယူမှု၊ နှင့် အထူး ဖောက်သည်ဝန်ဆောင်မှု ရရှိမည် ဖြစ်သည်။
          </p>
          <p className="text-gray-400 text-sm">
            The VIP program is designed for loyal players with a 5-tier system offering 
            higher bonuses, faster withdrawals, and exclusive customer service.
          </p>
        </div>

        {/* VIP 等級 */}
        <div className="space-y-6 mb-8">
          {vipLevels.map((level, index) => (
            <div key={index} className="bg-dark-lighter rounded-xl p-6 border border-gold/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gold">{level.nameMm} | {level.name}</h3>
                <div className="text-sm text-gray-400">{level.requirements}</div>
              </div>
              <ul className="space-y-2">
                {level.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <span className="text-gold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* VIP 福利詳情 */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">VIP အထူး ခံစားခွင့်များ | VIP Exclusive Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">ပိုမိုမြင့်မားသော ပြန်လည်ပေးအပ်မှု</h4>
              <p className="text-gray-300 text-sm">VIP အဆင့် မြင့်လာလေ ပြန်လည်ပေးအပ်မှု နှုန်း ပိုမိုမြင့်မားလာလေ</p>
            </div>
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">ဦးစားပေး ငွေထုတ်ယူမှု</h4>
              <p className="text-gray-300 text-sm">VIP အကောင့်များသည် ငွေထုတ်ယူမှု အတွက် ဦးစားပေး လုပ်ဆောင်ခြင်း ရရှိမည်</p>
            </div>
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">ပုဂ္ဂိုလ်ရေး ဖောက်သည်ဝန်ဆောင်မှု</h4>
              <p className="text-gray-300 text-sm">VIP အကောင့်များသည် ပုဂ္ဂိုလ်ရေး ဖောက်သည်ဝန်ဆောင်မှု ရရှိမည်</p>
            </div>
            <div className="bg-dark rounded-lg p-4">
              <h4 className="text-gold font-bold mb-2">မွေးနေ့ လက်ဆောင်ငွေ</h4>
              <p className="text-gray-300 text-sm">VIP အကောင့်များသည် မွေးနေ့တွင် အထူး လက်ဆောင်ငွေ ရရှိမည်</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">VIP အစီအစဉ် ပါဝင်ရန် | Join VIP Program</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

