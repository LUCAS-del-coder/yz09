import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export const metadata: Metadata = {
  title: "တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း | Responsible Gaming | Myanmar Casino Reviews",
  description: "Myanmar Casino Reviews သည် တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း ကို အားပေးပါသည်။ ကိုယ့်ကိုယ်ကို အကဲဖြတ်ခြင်း၊ ဂိမ်း ကန့်သတ်ချက်များ သတ်မှတ်ခြင်း၊ ကိုယ့်ကိုယ်ကို ဖယ်ရှားခြင်း ရွေးချယ်ခွင့် ပေးထားပါသည်။ Responsible gaming tools - Self-assessment, limits, self-exclusion options.",
  keywords: [
    "တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း",
    "responsible gaming Myanmar",
    "လောင်းကစား ကန့်သတ်ချက်",
    "ဂိမ်း ကန့်သတ်ချက်",
    "gaming limits Myanmar"
  ].join(", "),
  openGraph: {
    title: "တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း | Responsible Gaming",
    locale: 'my_MM',
    url: `${baseUrl}/guide/responsible-gaming`,
  },
  alternates: {
    canonical: `${baseUrl}/guide/responsible-gaming`,
  }
};

export default function ResponsibleGamingPage() {
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-gold">လမ်းညွှန်</Link>
          <span>/</span>
          <span className="text-white">တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း</span>
          <span className="text-white"> | Responsible Gaming</span>
        </h1>

        <div className="space-y-8 mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း ဆိုတာ ဘာလဲ | What is Responsible Gaming?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              တာဝန်ယူမှု ရှိသော လောင်းကစားခြင်း ဆိုသည်မှာ အွန်လိုင်း ကာစီနို ကို 
              ဖျော်ဖြေရန် သာ အသုံးပြုပြီး သင်၏ ဘတ်ဂျက် နှင့် အချိန် ကို ထိန်းချုပ်နိုင်ခြင်း 
              ဖြစ်သည်။ Myanmar Casino Reviews သည် ကစားသမားများ အတွက် လုံခြုံပြီး 
              ကျန်းမာသော ဂိမ်း အတွေ့အကြုံ ပေးရန် ကတိပြုထားပါသည်။
            </p>
            <p className="text-gray-400 text-sm">
              Responsible gaming means using online casino for entertainment only while maintaining 
              control over your budget and time. Myanmar Casino Reviews is committed to providing 
              a safe and healthy gaming experience.
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">ကိုယ့်ကိုယ်ကို အကဲဖြတ်ခြင်း | Self-Assessment</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              အောက်ပါ မေးခွန်းများကို မေးခွန်းထုတ်ပြီး သင်၏ လောင်းကစားခြင်း 
              အလေ့အထ ကို အကဲဖြတ်ပါ။
            </p>
            <div className="space-y-3">
              {[
                "ဂိမ်း ကစားရန် ဘတ်ဂျက် ထက် ပိုမို အသုံးပြုမိပါသလား?",
                "ဂိမ်း ကစားရန် အချိန် ကို ထိန်းချုပ်နိုင်ပါသလား?",
                "ဂိမ်း ကစားရန် အတွက် အလုပ်နှင့် မိသားစု အချိန် ကို စွန့်လွှတ်မိပါသလား?",
                "ဂိမ်း ကစားရန် အတွက် ငွေချေးယူမိပါသလား?"
              ].map((question, index) => (
                <div key={index} className="bg-dark rounded-lg p-4">
                  <p className="text-gray-300">{question}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">ဂိမ်း ကန့်သတ်ချက်များ သတ်မှတ်ခြင်း | Setting Gaming Limits</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-dark rounded-lg p-4">
                <h3 className="text-gold font-bold mb-2">ငွေသွင်း ကန့်သတ်ချက်</h3>
                <p className="text-gray-300 text-sm">နေ့စဉ်၊ ပတ်စဉ်၊ လစဉ် ငွေသွင်း ပမာဏ သတ်မှတ်ပါ</p>
              </div>
              <div className="bg-dark rounded-lg p-4">
                <h3 className="text-gold font-bold mb-2">လောင်းကြေး ကန့်သတ်ချက်</h3>
                <p className="text-gray-300 text-sm">တစ်ကြိမ် လောင်းကြေး ပမာဏ သတ်မှတ်ပါ</p>
              </div>
              <div className="bg-dark rounded-lg p-4">
                <h3 className="text-gold font-bold mb-2">အချိန် ကန့်သတ်ချက်</h3>
                <p className="text-gray-300 text-sm">နေ့စဉ် ဂိမ်း ကစားရန် အချိန် သတ်မှတ်ပါ</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">ကိုယ့်ကိုယ်ကို ဖယ်ရှားခြင်း | Self-Exclusion</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              အကယ်၍ သင်သည် လောင်းကစားခြင်း ကို ထိန်းချုပ်နိုင်ခြင်း မရှိဟု ခံစားရပါက၊ 
              သင်သည် ကိုယ့်ကိုယ်ကို ဖယ်ရှားခြင်း ရွေးချယ်ခွင့် ကို အသုံးပြုနိုင်ပါသည်။ 
              ဤရွေးချယ်ခွင့် ဖြင့် သင်သည် 7 ရက်၊ 30 ရက်၊ 90 ရက် သို့မဟုတ် 1 နှစ် 
              အတွက် အကောင့် ကို ပိတ်ထားနိုင်ပါသည်။
            </p>
            <div className="bg-dark rounded-lg p-4 mt-4">
              <p className="text-gold font-bold mb-2">⚠️ အရေးကြီးသော အချက်</p>
              <p className="text-gray-300 text-sm">
                ကိုယ့်ကိုယ်ကို ဖယ်ရှားခြင်း ရွေးချယ်ခွင့် ကို အသုံးပြုပြီးနောက် 
                သတ်မှတ်ထားသော အချိန် ကုန်ဆုံးမှသာ အကောင့် ကို ပြန်လည် ဖွင့်နိုင်ပါသည်။
              </p>
            </div>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 border border-red-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">ပြဿနာ လောင်းကစားခြင်း လက္ခဏာများ | Problem Gambling Signs</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400">⚠️</span>
                <span>ဘတ်ဂျက် ထက် ပိုမို အသုံးပြုမိခြင်း (Spending more than budget)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">⚠️</span>
                <span>ဂိမ်း ကစားရန် အတွက် အလုပ်နှင့် မိသားစု ကို လစ်လျူရှုခြင်း (Neglecting work and family)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">⚠️</span>
                <span>ငွေချေးယူပြီး ဂိမ်း ကစားခြင်း (Borrowing money to gamble)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">⚠️</span>
                <span>ဂိမ်း ကစားရန် အတွက် လျှို့ဝှက်ဆန်းကြယ်မှု ထားရှိခြင်း (Hiding gambling activities)</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 border border-green-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">အကူအညီ ရယူရန် | Getting Help</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              အကယ်၍ သင်သည် လောင်းကစားခြင်း ပြဿနာ ရှိဟု ခံစားရပါက၊ 
              အောက်ပါ အကူအညီ ရယူရန် နည်းလမ်းများ ကို အသုံးပြုနိုင်ပါသည်။
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400">📞</span>
                <span>Myanmar Casino Reviews ဖောက်သည်ဝန်ဆောင်မှု: 24/7 အကူအညီ (24/7 customer support)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">🌐</span>
                <span>လောင်းကစားခြင်း အကူအညီ ဝက်ဘ်ဆိုက် များ (Gambling help websites)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400">👨‍⚕️</span>
                <span>စိတ်ကျန်းမာရေး ကျွမ်းကျင်သူများ (Mental health professionals)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">ကျန်းမာသော ဂိမ်း ကစားခြင်း | Healthy Gaming</h2>
          <p className="text-gray-300 mb-6 text-lg">
            အွန်လိုင်း ကာစီနို ကို ဖျော်ဖြေရန် သာ အသုံးပြုပြီး တာဝန်ယူမှု ရှိစွာ ကစားပါ
          </p>
        </div>
      </div>
    </div>
  );
}

