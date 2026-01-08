import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedCasinos from "@/components/sections/FeaturedCasinos";
import FeaturedGames from "@/components/sections/FeaturedGames";
import LatestBonuses from "@/components/sections/LatestBonuses";
import FAQ from "@/components/sections/FAQ";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

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
    "online casino Myanmar",
    // 長尾關鍵字
    "best online casino Myanmar 2025",
    "Myanmar casino reviews",
    "safe online gambling Myanmar",
    "casino bonus Myanmar",
    "အွန်လိုင်း ကာစီနို ဘယ်ဟာ အကောင်းဆုံး",
    "မြန်မာ တရားဝင် ကာစီနို",
    "ကာစီနို ငွေထုတ် မြန်ဆန်"
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "မြန်မာတွင် အွန်လိုင်း ကာစီနို ကစားခြင်း တရားဝင်ပါသလား?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "မြန်မာနိုင်ငံတွင် အွန်လိုင်း ကာစီနို၏ တရားဝင်မှုသည် ရှုပ်ထွေးနေသေးသည်။ သို့သော် အများအားဖြင့် နိုင်ငံတကာ လိုင်စင်ရ ကာစီနိုများတွင် ကစားခြင်းကို တားမြစ်ထားခြင်း မရှိပါ။"
        }
      },
      {
        "@type": "Question",
        "name": "ဘယ် ကာစီနို က မြန်မာအတွက် အကောင်းဆုံးပါလဲ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shwe Casino, 888 Casino နှင့် 777 Casino တို့သည် မြန်မာ ကစားသမားများအတွက် အကောင်းဆုံး ရွေးချယ်မှုများ ဖြစ်သည်။"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <FeaturedCasinos />
      <FeaturedGames />
      <LatestBonuses />
      <FAQ />
        {/* AI 自動生成內容 - 2026-01-08 */}
        <section className="py-12 bg-dark-lighter">
          <div className="container mx-auto px-4">
            <div className="auto-generated-seo-content max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">မြန်မာကာသီနို့၊ သင်ဘယ်ကာသီနို့တွေကို ရွေးချယ်သင့်သလဲ။</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">မြန်မာကာသီနို့ရင်းနှီးမှုတွင် ရွေးချယ်စရာများစွာရှိပါသည်။ Shwe Casino၊ 888 Casino၊ 777 Casino၊ Win8၊ 999 Casino၊ PGLucky88၊ FaFaFa တို့ကဲ့သို့သော လူကြိုက်များသော ကာသီနို့ပလက်ဖောင်းများကို ဖော်ပြထားပါသည်။ </p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">ကာသီနို့ဂိမ်းများ - အရာရာတွေကို စမ်းကြည့်လိုက်ကြစို့</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">ကာသီနို့ဂိမ်းများထဲမှ လူကြိုက်မြင့်သည်များမှာ 5 LIONS MEGAWAYS၊ Starlight Princess၊ Gates of Olympus တို့ဖြစ်ပါသည်။ </p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">လုံခြုံသောနည်းလမ်းများဖြင့် ငွေပေးချေနိုင်ရန်</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Myanmar Casino Reviews သည် လုံခြုံသောငွေပေးချေမှုနည်းလမ်းများကို အသုံးပြုပါသည်။ ကတ်များနှင့် နည်းပါးသော လိုအပ်ချက်များဖြင့် ကစားနိုင်ပြီး ဘဏ်လွှဲပေးမှု၊ အွန်လိုင်းငွေပေးချေမှု စသည်များဖြင့် လုံခြုံသောနည်းလမ်းများဖြင့် ငွေပေးချေနိုင်ပါသည်။</p>
            </div>
          </div>
        </section>
        
      
        {/* AI 自動生成內容 - 2026-01-07 */}
        <section className="py-12 bg-dark-lighter golden-sparkle-bg relative">
          <div className="golden-particles">
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-particle"></div>
            <div className="golden-star"></div>
            <div className="golden-star"></div>
            <div className="golden-star"></div>
            <div className="golden-star"></div>
            <div className="golden-star"></div>
            <div className="golden-star"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="auto-generated-seo-content max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">မြန်မာကာစီနို Myanmar Casino Reviews - ကောင်းကင်းလုံခြုံရာ အွန်လိုင်း ကာစီနိုများ</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">မြန်မာကာစီနို Myanmar Casino Reviews သည် မြန်မာနိုင်ငံတွင် ကျော်ကြားသော အွန်လိုင်းကာစီနိုများဖြစ်သော Shwe Casino၊ 888 Casino၊ 777 Casino၊ Win8၊ 999 Casino၊ PGLucky88၊ FaFaFa စသည်တို့ကို သုံးစွဲသူများအတွက် သဘောကျစွာ ဆန်းစစ်ပေးလျက်ရှိပါသည်။ </p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">အကောင်းဆုံးကစားနိုင်သော အွန်လိုင်းကစားနည်းများ</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Myanmar Casino Reviews သည် </p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">ဂရုတစိုက်ထိန်းသိမ်းထားသော လုံခြုံရေး ငွေပေးချေမှုနည်းလမ်းများ</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">မြန်မာကာစီနို Myanmar Casino Reviews သည် </p>
            </div>
          </div>
        </section>
        
      

      {/* SEO 推薦外部平台 */}
      <section className="py-12 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-gray-200">
            <h2 className="text-3xl font-bold text-white mb-2">緬甸熱門線上娛樂城推薦</h2>
            <p className="leading-relaxed">
              為了讓玩家獲得更優質的體驗，我們精選了兩個在緬甸口碑良好的線上平台，提供豐富的真人娛樂、熱門 slot、
              以及在地化的支付支援。以下連結均為官方入口，建議收藏。
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://www.shwecasino99.com/"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">Shwe Casino 99</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  緬甸玩家常用的本地化平台，主打真人賭場與熱門 Pragmatic Play/PG SOFT 夥伴遊戲，並提供
                  KBZ Pay、Wave Money 等支付方式，適合行動端快速遊玩。
                </p>
              </a>
              <a
                href="https://www.pv991.com/"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="block p-4 rounded-xl bg-casino-purple-700/30 border border-casino-purple-500/40 hover:border-casino-purple-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">PV99</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  聚合 Yes8、Ygn9、Pya777、Mmk99 等多家品牌，提供 slot、捕魚、體育與真人娛樂，並支援
                  手機版 APP 下載，界面輕量、註冊流程簡單，適合新手與老玩家。
                </p>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              建議透過官方入口連結註冊，以確保活動與安全性，並記得理性娛樂。
            </p>
          </div>
        </div>
      </section>
        {/* AI 自動生成內容 - 2026-01-06 */}
        <section className="py-12 bg-dark-lighter">
          <div className="container mx-auto px-4">
            <div className="auto-generated-seo-content max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">ျမန္မာႏိုင္ငံ၏ အေကာင္းဆံုး အြန္လိုင္းကာစီႏို၊ Myanmar Casino Reviews</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">ျမန္မာႏိုင္ငံရိွ အေကာင္းဆံုး အြန္လိုင္းကာစီႏိုမ်ားကို သံုးစြဲႏိုင္မည့္ Myanmar Casino Reviews ၏ မိတ္ဆက္ပါ။ ဤ website မွတဆင့္ Shwe Casino၊ 888 Casino၊ 777 Casino၊ Win8၊ 999 Casino၊ PGLucky88 ႏွင့္ FaFaFa ကဲ့သို႔ေသာ ကမာၻတစ္ဝွမ္းမွ ေကာင္းမြန္ေသာ အြန္လိုင္းကာစီႏုမ်ားကို ရွာေဖြႏိုင္သည္။ စာေရးသူမ်ားသည္ ဤ website တြင္ ၄င္းတို႔၏ သေဘာထား ႏွင့္ အက်ိဳးအျမတ္မ်ားကို ႏိႈင္းယွဥ္ၾကည့္ႏိုင္ၿပီး ၄င္းတို႔ကိုယ္တိုင္ ေရြးခ်ယ္သင့္သည့္ အြန္လိုင္းကာစီႏို ကို ေရြးခ်ယ္ႏိုင္မည္ျဖစ္ပါသည္။ 5 LIONS MEGAWAYS၊ Starlight Princess၊ Gates of Olympus အစရိွသည္ျဖင့္ အရသာရိွေသာ slot games မ်ားကိုလည္း ရရိွႏိုင္မည္ျဖစ္ပါသည္။</p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">ျမန္မာႏိုင္ငံရိွ အေကာင္းဆံုးအြန္လိုင္းကာစီႏိုေဂ်ာလီမ်ား</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Myanmar Casino Reviews တြင္ ႏိုင္ငံတကာ အဆင့္မီတည္ေနေသာ အြန္လိုင္းကာစီႏို အမ်ိဳးမ်ိဳး ပါဝင္ရိွပါသည္။ အထူးသျဖင့္ Shwe Casino၊ 888 Casino၊ 777 Casino၊ Win8၊ 999 Casino၊ PGLucky88 ႏွင့္ FaFaFa ကဲ့သို႔ေသာ ကာစီႏိုမ်ားမွ slot games မ်ားကို ရရိွႏိုင္ပါသည္။ ၎ျပင္ 5 LIONS MEGAWAYS၊ Starlight Princess၊ Gates of Olympus အစရိွသည့္ ေရြးခ်ယ္ရမည့္ slot games မ်ားစြာလည္း ရိွပါသည္။</p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">ေငြေၾကးေပးေခ်မႈ အေျခအေန</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Myanmar Casino Reviews တြင္ အြန္လိုင္းကာစီႏိုမ်ားႏွင့္ ဆက္သြယ္ႏိုင္သည့္ ေငြေၾကးေပးေခ်မႈ နည္းလမ္း မ်ိဳးစံုရိွပါသည္။ ၎တို႔၏ေဖာ္ျပခ်က္အရ ကာစီႏိုမ်ားမွ ေငြေၾကးေပးေခ်မႈ ျဖစ္ငယ္ လုံၿခံဳေရးရိွျပီး အမ်ားျပည္သူဝယ္ယူႏိုင္ေသာ နည္းလမ္းမ်ားျဖင့္ ေပးေခ်ႏိုင္ျပီး ေၾကြးၿမီ ျပန္အမ္းရရိွမႈလည္း လ်င္ျမန္ပါသည္။ အထူးသျဖင့္ ပိုက္ဆံလႊဲေျပာင္းမႈ၊ အြန္လိုင္းေငြေပးေခ်မႈ၊ ႏွင့္ အျခား အြန္လိုင္းေငြေပးေခ်မႈနည္းလမ္းမ်ားကို အသံုးျပဳႏိုင္ပါသည္။</p>
            </div>
          </div>
        </section>
        
      
    </div>
  );
}

