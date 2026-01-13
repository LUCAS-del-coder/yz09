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
  // ✅ 標題：緬甸語 + 英文
  title: "ကြိုဆို ဘောနပ်စ် 100% | Welcome Bonus အမြင့်ဆုံး 50,000 MMK | Myanmar Casino Reviews",
  
  // ✅ 描述：緬甸語為主
  description: "Myanmar Casino Reviews ကြိုဆို ဘောနပ်စ် - ပထမဆုံး အပ်ငွေ 100% အမြင့်ဆုံး 50,000 MMK။ အလွယ်တကူ ရယူနိုင်၊ မြန်ဆန်သော အတည်ပြုချက်၊ နည်းသော လောင်းကြေး လိုအပ်ချက်များ။ အခုပဲ စာရင်းသွင်းပြီး ကြီးမားသော ဘောနပ်စ် ရယူပါ။ Get 100% welcome bonus up to 50,000 MMK - Easy claim, low wagering requirements.",
  
  // ✅ 關鍵字
  keywords: [
    "ကြိုဆို ဘောနပ်စ်",
    "ကာစီနို ဘောနပ်စ် မြန်မာ",
    "ပထမဆုံး အပ်ငွေ ဘောနပ်စ်",
    "Myanmar Casino ဘောနပ်စ်",
    "အခမဲ့ ဘောနပ်စ် 2025",
    "100% ဘောနပ်စ်",
    "welcome bonus Myanmar",
    "casino bonus 100%",
    "Myanmar casino promotion",
    "first deposit bonus"
  ].join(", "),
  
  openGraph: {
    title: "ကြိုဆို ဘောနပ်စ် 100% | Welcome Bonus Myanmar",
    description: "ပထမဆုံး အပ်ငွေ 100% အမြင့်ဆုံး 50,000 MMK",
    locale: 'my_MM',
    url: `${baseUrl}/promotions/welcome-bonus`,
  },
  
  alternates: {
    canonical: `${baseUrl}/promotions/welcome-bonus`,
  }
};

export default function WelcomeBonusPage() {
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/bonuses" className="hover:text-gold">ဘောနပ်စ်များ</Link>
          <span>/</span>
          <span className="text-white">ကြိုဆို ဘောနပ်စ်</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">ကြိုဆို ဘောနပ်စ် 100%</span>
          <span className="text-white"> | Welcome Bonus</span>
        </h1>

        {/* 獎金總覽 */}
        <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl p-8 border border-gold/30 mb-8 text-center">
          <div className="text-6xl font-bold text-gold mb-4">100%</div>
          <div className="text-3xl font-bold text-white mb-2">အမြင့်ဆုံး 50,000 MMK</div>
          <p className="text-gray-300 text-lg">ပထမဆုံး အပ်ငွေ အတွက် နှစ်ဆ ဘောနပ်စ်</p>
        </div>

        {/* 內容區塊 */}
        <div className="space-y-6 mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">ဘောနပ်စ် အကြောင်း | About the Bonus</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Myanmar Casino Reviews ကြိုဆို ဘောနပ်စ် သည် အကောင့်အသစ် ဖွင့်လှစ်ထားသော 
              ကစားသမားများ အတွက် အထူး ဘောနပ်စ် ဖြစ်သည်။ သင်သည် ပထမဆုံး အပ်ငွေ 
              ပြုလုပ်သောအခါ 100% ဘောနပ်စ် ရရှိမည် ဖြစ်ပြီး အမြင့်ဆုံး 50,000 MMK 
              အထိ ရရှိနိုင်ပါသည်။
            </p>
            <p className="text-gray-400 text-sm">
              The welcome bonus is a special offer for new players. When you make your first deposit, 
              you'll receive a 100% bonus up to 50,000 MMK.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">လက်ခံရရှိရန် လိုအပ်ချက်များ | Claim Requirements</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>အကောင့် အသစ် ဖွင့်လှစ်ရမည် (Must be a new account)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>အနည်းဆုံး 1,000 MMK အပ်ငွေ ပြုလုပ်ရမည် (Minimum deposit 1,000 MMK)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>ဘောနပ်စ် ရယူရန် အကောင့် အတည်ပြုရမည် (Account must be verified)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span>ဘောနပ်စ် ရယူပြီးနောက် 30 ရက်အတွင်း အသုံးပြုရမည် (Must be used within 30 days)</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">လောင်းကြေး လိုအပ်ချက် | Wagering Requirements</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ဘောနပ်စ် ငွေကို ငွေထုတ်ယူရန် သင်သည် ဘောနပ်စ် ပမာဏကို 20 ဆ 
              လောင်းကြေး ပြုလုပ်ရမည် ဖြစ်သည်။ ဥပမာ - 10,000 MMK ဘောနပ်စ် 
              ရရှိပါက 200,000 MMK လောင်းကြေး ပြုလုပ်ရမည်။
            </p>
            <div className="bg-dark rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-2">လောင်းကြေး လိုအပ်ချက်</div>
              <div className="text-2xl font-bold text-gold">20x</div>
              <div className="text-xs text-gray-500 mt-1">ဘောနပ်စ် ပမာဏ × 20</div>
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">အသုံးပြုနိုင်သော ဂိမ်းများ | Eligible Games</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ဘောနပ်စ် ငွေကို အောက်ပါ ဂိမ်းများတွင် အသုံးပြုနိုင်ပါသည်။
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {["စလော့ ဂိမ်းများ", "လိုင်ဗ် ကာစီနို", "ငါးဖမ်းဂိမ်းများ", "စားပွဲဂိမ်းများ"].map((game, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="text-gold">✓</span>
                  <span>{game}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">ဘယ်လို ရယူမလဲ | How to Claim</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
              <li>Myanmar Casino Reviews တွင် အကောင့် အသစ် ဖွင့်လှစ်ပါ (Register new account)</li>
              <li>အကောင့် အတည်ပြုပါ (Verify your account)</li>
              <li>ပထမဆုံး အပ်ငွေ ပြုလုပ်ပါ (Make first deposit)</li>
              <li>ဘောနပ်စ် အလိုအလျောက် ရရှိမည် (Bonus will be credited automatically)</li>
              <li>ဂိမ်း ကစားပြီး လောင်းကြေး လိုအပ်ချက် ပြည့်မီပါ (Play games and meet wagering requirements)</li>
            </ol>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">အမေးများသော မေးခွန်းများ | FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">ဘောနပ်စ် ဘယ်လောက် ကြာမှ ရရှိမလဲ?</h3>
                <p className="text-gray-300">ဘောနပ်စ် သည် အပ်ငွေ ပြုလုပ်ပြီးနောက် 5 မိနစ်အတွင်း အလိုအလျောက် ရရှိမည် ဖြစ်သည်။</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">ဘောနပ်စ် ငွေကို ဘယ်လို အသုံးပြုမလဲ?</h3>
                <p className="text-gray-300">ဘောနပ်စ် ငွေကို စလော့၊ လိုင်ဗ် ကာစီနို စသည့် ဂိမ်းများတွင် အသုံးပြုနိုင်ပါသည်။</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">လောင်းကြေး လိုအပ်ချက် ပြည့်မီပြီးနောက် ဘယ်လို ငွေထုတ်ယူမလဲ?</h3>
                <p className="text-gray-300">လောင်းကြေး လိုအပ်ချက် ပြည့်မီပြီးနောက် သင်သည် ဘောနပ်စ် ငွေနှင့် အနိုင်ရရှိသော ငွေကို ငွေထုတ်ယူနိုင်ပါသည်။</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ကြိုဆို ဘောနပ်စ် ရယူရန် | Claim Welcome Bonus
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            အခုပဲ စာရင်းသွင်းပြီး 100% ဘောနပ်စ် ရယူပါ
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

