import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeaturedCasinos from "@/components/sections/FeaturedCasinos";
import TrustIndicators from "@/components/sections/TrustIndicators";
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
      <TrustIndicators />
      <FeaturedCasinos />
      <FeaturedGames />
      <LatestBonuses />
      <FAQ />
        {/* AI 自動生成內容 - 2026-01-06 */}
        <section className="py-12 bg-dark-lighter">
          <div className="container mx-auto px-4">
            <div className="auto-generated-seo-content max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">ျမန္မာႏိုင္ငံ၏ အြန္လိုင္းကာစီႏိုေဈးကြက္ႏွင့္ပတ္သက္ေသာ သတင္းႏွင့္သံုးသပ္ခ်က္မ်ား</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">Myanmar Casino Reviews သည္ ျမန္မာႏိုင္ငံ၏ အႀကီးမားဆံုးအြန္လိုင္းကာစီႏိုေဈးကြက္ႏွင့္ ပတ္သက္ေသာ သတင္းႏွင့္သံုးသပ္ခ်က္မ်ား ဖူလံုစြာ ရရွိႏိုင္သည့္ ၀က္ဘ္ဆိုဒ္ျဖစ္ပါသည္။ ငါးႏွစ္ေက်ာ္ကာလ အတြင္း ႀကီးထြားလာခဲ့သည့္ ျမန္မာႏိုင္ငံရွိ အႀကီးမားဆံုးအြန္လိုင္းကာစီႏိုမ်ားျဖစ္ေသာ Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88, FaFaFa စသည့္ကာစီႏိုေပါင္းမ်ားစြာကို ယခု၀က္ဘ္ဆိုဒ္တြင္ ေဖာ္ျပထားပါသည္။ ထို႔ျပင္ 5 LIONS MEGAWAYS, Starlight Princess, Gates of Olympus စသည့္ ေကာင္းမြန္ေသာ ဂိမ္းမ်ားကိုလည္း ဒီ၀က္ဘ္ဆိုဒ္မွတစ္ဆင့္ ေဒါင္းလုပ္ရယူႏိုင္မည္ ျဖစ္ပါသည္။</p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">&quot;: ျမန္မာႏိုင္ငံရွိ အေကာင္းဆံုး အြန္လိုင္းကာစီႏိုဂိမ္းမ်ား&quot;,
  &quot;gamesParagraph&quot;: &quot;ငါးႏွစ္ေက်ာ္ကာလအတြင္း ပိုမိုႀကီးထြားလာခဲ့သည့္ ျမန္မာႏိုင္ငံရွိ အၾကီးဆံုးအြန္လိုင္းကာစီႏို ပလက္ေဖာင္းမ်ားျဖစ္ေသာ Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88, FaFaFa တို႔သည္ မ်ားစြာေသာ ျဖစ္ေပၚလာေသာ ဂိမ္းမ်ားကို ဆက္လက္ထည့္သြင္းေပးလ်က္ ရွိပါသည္။ 5 LIONS MEGAWAYS, Starlight Princess, Gates of Olympus စသည့္ ဂိမ္းမ်ားကို ဤ၀က္ဘ္ဆိုဒ္မွ ေလ့လာၾကည့္႐ႈႏိုင္ပါသည္။&quot;,
  &quot;paymentTitle&quot;: အေကာင္းဆံုးႏွင့္ လံုျခံဳေသာ ေငြေပးေခ်မႈ နည္းလမ္းမ်ား&quot;,
  &quot;paymentParagraph&quot;: &quot;Myanmar Casino Reviews သည္ အြန္လိုင္းကာစီႏိုဝန္ေဆာင္မႈမ်ားကို လံုျခံဳေသာ ႏွင့္ ယံုၾကည္စိတ္ခ်ရေသာ ပံ့ပိုးေပးေသာ ၀က္ဘ္ဆိုဒ္တစ္ခု ျဖစ္ပါသည္။ မေၾကာက္ရြံ႕ေသာ ေငြေပးေခ်မႈ နည္းလမ္းမ်ားျဖစ္ေသာ အြန္လိုင္းဘဏ္လႊဲေျပာင္းမႈ၊ အြန္လိုင္းဘဏ္အေကာက္ကဒ္မ်ား၊ ေငြအေျပာင္းအလဲနည္းမ်ား စသည့္တို႔ကို ဤ၀က္ဘ္ဆိုဒ္မွ ၀န္ေဆာင္မႈေပးလ်က္ရွိပါသည္။&quot;
}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">ငါးႏွစ္ေက်ာ္ကာလအတြင္း ပိုမိုႀကီးထြားလာခဲ့သည့္ ျမန္မာႏိုင္ငံရွိ အၾကီးဆံုးအြန္လိုင္းကာစီႏို ပလက္ေဖာင္းမ်ားျဖစ္ေသာ Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88, FaFaFa တို႔သည္ မ်ားစြာေသာ ျဖစ္ေပၚလာေသာ ဂိမ္းမ်ားကို ဆက္လက္ထည့္သြင္းေပးလ်က္ ရွိပါသည္။ 5 LIONS MEGAWAYS, Starlight Princess, Gates of Olympus စသည့္ ဂိမ္းမ်ားကို ဤ၀က္ဘ္ဆိုဒ္မွ ေလ့လာၾကည့္႐ႈႏိုင္ပါသည္။</p>
              <h3 className="text-2xl font-bold text-white mb-3 mt-8">&quot;: အေကာင္းဆံုးႏွင့္ လံုျခံဳေသာ ေငြေပးေခ်မႈ နည္းလမ္းမ်ား&quot;,
  &quot;paymentParagraph&quot;: &quot;Myanmar Casino Reviews သည္ အြန္လိုင္းကာစီႏိုဝန္ေဆာင္မႈမ်ားကို လံုျခံဳေသာ ႏွင့္ ယံုၾကည္စိတ္ခ်ရေသာ ပံ့ပိုးေပးေသာ ၀က္ဘ္ဆိုဒ္တစ္ခု ျဖစ္ပါသည္။ မေၾကာက္ရြံ႕ေသာ ေငြေပးေခ်မႈ နည္းလမ္းမ်ားျဖစ္ေသာ အြန္လိုင္းဘဏ္လႊဲေျပာင္းမႈ၊ အြန္လိုင္းဘဏ္အေကာက္ကဒ္မ်ား၊ ေငြအေျပာင္းအလဲနည္းမ်ား စသည့္တို႔ကို ဤ၀က္ဘ္ဆိုဒ္မွ ၀န္ေဆာင္မႈေပးလ်က္ရွိပါသည္။&quot;
}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">Myanmar Casino Reviews သည္ အြန္လိုင္းကာစီႏိုဝန္ေဆာင္မႈမ်ားကို လံုျခံဳေသာ ႏွင့္ ယံုၾကည္စိတ္ခ်ရေသာ ပံ့ပိုးေပးေသာ ၀က္ဘ္ဆိုဒ္တစ္ခု ျဖစ္ပါသည္။ မေၾကာက္ရြံ႕ေသာ ေငြေပးေခ်မႈ နည္းလမ္းမ်ားျဖစ္ေသာ အြန္လိုင္းဘဏ္လႊဲေျပာင္းမႈ၊ အြန္လိုင္းဘဏ္အေကာက္ကဒ္မ်ား၊ ေငြအေျပာင္းအလဲနည္းမ်ား စသည့္တို႔ကို ဤ၀က္ဘ္ဆိုဒ္မွ ၀န္ေဆာင္မႈေပးလ်က္ရွိပါသည္။</p>
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

