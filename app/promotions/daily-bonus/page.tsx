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
  title: "နေ့စဉ် ဘောနပ်စ် | Daily Bonus Myanmar | Myanmar Casino Reviews",
  description: "Myanmar Casino Reviews နေ့စဉ် ဘောနပ်စ် - နေ့စဉ် အပ်ငွေ 10-20% ဘောနပ်စ်။ ရယူရန် အချိန်နှင့် လိုအပ်ချက်များ၊ ထိုနေ့၏ အထူး ဂိမ်းများ၊ လောင်းကြေး လိုအပ်ချက်။ Get daily deposit bonus 10-20% - Check time and requirements.",
  keywords: [
    "နေ့စဉ် ဘောနပ်စ်",
    "daily bonus Myanmar",
    "ကာစီနို နေ့စဉ် ဘောနပ်စ်",
    "reload bonus",
    "daily deposit bonus"
  ].join(", "),
  openGraph: {
    title: "နေ့စဉ် ဘောနပ်စ် | Daily Bonus",
    locale: 'my_MM',
    url: `${baseUrl}/promotions/daily-bonus`,
  },
  alternates: {
    canonical: `${baseUrl}/promotions/daily-bonus`,
  }
};

export default function DailyBonusPage() {
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/bonuses" className="hover:text-gold">ဘောနပ်စ်များ</Link>
          <span>/</span>
          <span className="text-white">နေ့စဉ် ဘောနပ်စ်</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">နေ့စဉ် ဘောနပ်စ်</span>
          <span className="text-white"> | Daily Bonus</span>
        </h1>

        <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl p-8 border border-gold/30 mb-8 text-center">
          <div className="text-4xl font-bold text-gold mb-4">10-20%</div>
          <div className="text-2xl font-bold text-white mb-2">နေ့စဉ် အပ်ငွေ ဘောနပ်စ်</div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">နေ့စဉ် ဘောနပ်စ် အကြောင်း | About Daily Bonus</h2>
            <p className="text-gray-300 leading-relaxed">
              Myanmar Casino Reviews သည် သစ္စာရှိသော ကစားသမားများ အတွက် 
              နေ့စဉ် ဘောနပ်စ် ပေးပါသည်။ သင်သည် နေ့စဉ် အပ်ငွေ ပြုလုပ်သောအခါ 
              10-20% ဘောနပ်စ် ရရှိမည် ဖြစ်သည်။
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">ရယူရန် အချိန်နှင့် လိုအပ်ချက်များ | Time & Requirements</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">🕐</span>
                <span>ရယူရန် အချိန်: 00:00 - 23:59 (MMT) (Claim time: 00:00 - 23:59 MMT)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">💰</span>
                <span>အနည်းဆုံး အပ်ငွေ: 5,000 MMK (Minimum deposit: 5,000 MMK)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">📅</span>
                <span>နေ့စဉ် တစ်ကြိမ် ရယူနိုင်ပါသည် (Can claim once per day)</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">လောင်းကြေး လိုအပ်ချက် | Wagering Requirements</h2>
            <p className="text-gray-300 mb-4">
              နေ့စဉ် ဘောနပ်စ် ငွေကို ငွေထုတ်ယူရန် 15x လောင်းကြေး လိုအပ်ပါသည်။
            </p>
            <div className="bg-dark rounded-lg p-4">
              <div className="text-2xl font-bold text-gold">15x</div>
              <div className="text-sm text-gray-400 mt-1">ဘောနပ်စ် ပမာဏ × 15</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">နေ့စဉ် ဘောနပ်စ် ရယူရန် | Claim Daily Bonus</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

