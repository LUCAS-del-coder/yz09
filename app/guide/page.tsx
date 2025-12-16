import { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "အစပြုသူများအတွက် လမ်းညွှန် - Myanmar Casino Reviews",
  description: "အွန်လိုင်း ကာစီနို အစပြုသူများအတွက် လမ်းညွှန်။",
};

const guides = [
  {
    title: "အကောင့်ဖွင့်လှစ်နည်း",
    steps: [
      "ကာစီနို ဝဘ်ဆိုဒ်သို့ သွားရောက်ပါ",
      "Register / Sign Up ကို နှိပ်ပါ",
      "အီးမေးလ်၊ ဖုန်းနံပါတ်၊ စကားဝှက်ထည့်သွင်းပါ",
      "အတည်ပြုလွှာကို နှိပ်ပါ",
      "အကောင့် ဖွင့်လှစ်ပြီးပါပြီ",
    ],
  },
  {
    title: "ငွေဖြည့်သွင်းနည်း",
    steps: [
      "အကောင့်သို့ ဝင်ရောက်ပါ",
      "Deposit / ငွေဖြည့်သွင်းမှု ကို နှိပ်ပါ",
      "ငွေလွှဲနည်းလမ်း ရွေးချယ်ပါ (KBZ Pay, Wave Money, etc.)",
      "ငွေပမာဏ ထည့်သွင်းပါ",
      "အတည်ပြုပါ - ငွေသည် လက်ငင်း ရောက်ရှိမည်",
    ],
  },
  {
    title: "ဂိမ်း ကစားနည်း",
    steps: [
      "ဂိမ်း အမျိုးအစား ရွေးချယ်ပါ (Slots, Live Casino, etc.)",
      "ဂိမ်း တစ်ခုကို ရွေးချယ်ပါ",
      "လောင်းကြေး သတ်မှတ်ပါ",
      "Play / ကစားရန် ကို နှိပ်ပါ",
      "အနိုင်ရရှိမှု ကို ခံစားပါ",
    ],
  },
  {
    title: "ငွေထုတ်ယူနည်း",
    steps: [
      "အကောင့်သို့ ဝင်ရောက်ပါ",
      "Withdraw / ငွေထုတ်ယူမှု ကို နှိပ်ပါ",
      "ငွေလွှဲနည်းလမ်း ရွေးချယ်ပါ",
      "ငွေပမာဏ ထည့်သွင်းပါ",
      "အတည်ပြုပါ - 24-48 နာရီအတွင်း ရောက်ရှိမည်",
    ],
  },
];

const tips = [
  {
    icon: "💡",
    title: "ဘောနပ်စ် အသုံးပြုနည်း",
    content: "Welcome Bonus နှင့် Reload Bonus များကို အသုံးပြု၍ ဂိမ်း ကစားနိုင်သည်။",
  },
  {
    icon: "🎯",
    title: "အနိုင်ရရှိမှု အခွင့်အလမ်း",
    content: "RTP (Return to Player) မြင့်မားသော ဂိမ်းများကို ရွေးချယ်ပါ။",
  },
  {
    icon: "⚖️",
    title: "တာဝန်ယူမှုရှိသော ဂိမ်းကစားခြင်း",
    content: "ဘတ်ဂျက် သတ်မှတ်ပြီး ဂိမ်းကစားပါ။ မလိုအပ်သော ငွေများ မသုံးစွဲပါနှင့်။",
  },
  {
    icon: "🔒",
    title: "လုံခြုံရေး",
    content: "လစ်ဆင်ရရှိထားသော ကာစီနို များကို ရွေးချယ်ပါ။ SSL လုံခြုံရေး လက်မှတ် ရှိသော ဝဘ်ဆိုဒ်များကို အသုံးပြုပါ။",
  },
];

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export default function GuidePage() {
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">အစပြုသူများအတွက်</span>{" "}
            <span className="text-white">လမ်းညွှန်</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            အွန်လိုင်း ကာစီနို အစပြုသူများအတွက် အပြည့်အစုံ လမ်းညွှန်
          </p>
        </div>

        {/* Step by Step Guides */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  {index + 1}
                </span>
                {guide.title}
              </h2>
              <ol className="space-y-4">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 mt-0.5">
                      {stepIndex + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="gradient-gold">အကြံပြုချက်များ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest hover:border-gold/50 transition-colors"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            မေးခွန်းများ
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                အွန်လိုင်း ကာစီနို ကစားရန် လုံခြုံပါသလား?
              </h3>
              <p className="text-gray-300">
                ဟုတ်ပါသည်။ လစ်ဆင်ရရှိထားသော ကာစီနို များသည် လုံခြုံပါသည်။
                SSL လုံခြုံရေး လက်မှတ် ရှိသော ဝဘ်ဆိုဒ်များကို အသုံးပြုပါ။
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                ဘောနပ်စ် ရယူရန် ဘာလိုအပ်ပါသလဲ?
              </h3>
              <p className="text-gray-300">
                အကောင့်ဖွင့်လှစ်ပြီး ပထမဆုံးအကြိမ် ငွေဖြည့်သွင်းမှု လိုအပ်သည်။
                Welcome Bonus ကို အလိုအလျောက် ရရှိမည်။
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                ငွေထုတ်ယူမှု ဘယ်လောက် ကြာပါသလဲ?
              </h3>
              <p className="text-gray-300">
                ယေဘူယျအားဖြင့် 24-48 နာရီအတွင်း ပြီးမြောက်သည်။
                အချို့သော ငွေလွှဲနည်းလမ်းများသည် ပိုမို မြန်ဆန်နိုင်သည်။
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            အခုပဲ စတင် ကစားရန် အဆင်သင့် ဖြစ်ပါပြီ
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            အကောင့်ဖွင့်လှစ်ပြီး ဘောနပ်စ် ရယူကာ ဂိမ်း ကစားရန် စတင်ပါ
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန်
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

