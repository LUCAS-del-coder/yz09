import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "responsibleGaming" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/responsible-gaming`,
      languages: {
        'my-MM': `${baseUrl}/responsible-gaming`,
        'en-US': `${baseUrl}/en/responsible-gaming`,
      }
    },
  };
}

export default async function ResponsibleGamingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "responsibleGaming" });

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          <span className="gradient-gold">{t("heading")}</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest space-y-6 text-gray-300">
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⚠️</span>
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-2">
                  {t("warning")}
                </h2>
                <p className="text-white">
                  {t("warningText")}
                </p>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. ကျန်းမာရေးနှင့် ညီညွတ်သော ဂိမ်းကစားခြင်း</h2>
            <p className="mb-4">
              ဂိမ်းကစားခြင်းသည် <strong>ပျော်ရွှင်မှု</strong> အတွက် ဖြစ်ရမည်၊ 
              ငွေရှာရန် နည်းလမ်း မဟုတ်ပါ။
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">အောက်ပါ အချက်များ ရှိပါက ဂိမ်းကစားခြင်းကို ရပ်တန့်ရန် လိုအပ်ပါသည်:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ဂိမ်းကစားရန် လိုအပ်သော ငွေကို မရှိဘဲ ငွေချေးယူခြင်း</li>
                <li>ဂိမ်းကစားရန် ငွေများကို မိသားစု သို့မဟုတ် မိတ်ဆွေ များထံမှ ယူခြင်း</li>
                <li>ဂိမ်းကစားခြင်းကြောင့် အလုပ်နှင့် မိသားစု တာဝန်များ ပျက်ကွက်ခြင်း</li>
                <li>ရှုံးနိမ့်မှုများကို ပြန်လည် ရယူရန် ဆက်လက် ဂိမ်းကစားခြင်း</li>
                <li>ဂိမ်းကစားခြင်းနှင့် ပတ်သက်၍ လျှို့ဝှက်ခြင်း</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. ကိုယ်ပိုင် ကန့်သတ်ချက်များ သတ်မှတ်ခြင်း</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">ဘတ်ဂျက် သတ်မှတ်ခြင်း</h3>
                <p className="mb-4">
                  ဂိမ်းကစားရန် ငွေ ပမာဏကို ကြိုတင် သတ်မှတ်ပါ။ 
                  သတ်မှတ်ထားသော ပမာဏကို ကျော်လွန် မသုံးစွဲပါနှင့်။
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">အချိန် သတ်မှတ်ခြင်း</h3>
                <p className="mb-4">
                  ဂိမ်းကစားရန် အချိန် ကန့်သတ်ချက်ကို သတ်မှတ်ပါ။
                  Timer ကို အသုံးပြု၍ အချိန် စီမံခန့်ခွဲပါ။
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Self-Exclusion (ကိုယ်ပိုင် ဖယ်ရှားခြင်း)</h3>
                <p className="mb-4">
                  ဂိမ်းကစားခြင်းကို ရပ်တန့်ရန် ခက်ခဲပါက၊ 
                  Self-Exclusion Program များကို အသုံးပြုနိုင်ပါသည်။
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. အကူအညီ ရယူရန်</h2>
            <p className="mb-4">
              သင်သည် ဂိမ်းကစားခြင်း စွဲလမ်းမှု ရှိသည်ဟု ထင်မြင်ပါက၊ 
              အောက်ပါ အကူအညီ ရယူနိုင်သော အဖွဲ့အစည်းများကို ဆက်သွယ်နိုင်ပါသည်:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">GamCare</h3>
                <p className="text-gray-400 mb-4">ဂိမ်းကစားခြင်း စွဲလမ်းမှု အတွက် အကူအညီ</p>
                <p className="text-gold font-semibold">Website: www.gamcare.org.uk</p>
                <p className="text-gold font-semibold">Helpline: 0808 8020 133</p>
              </div>
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">BeGambleAware</h3>
                <p className="text-gray-400 mb-4">တာဝန်ယူမှုရှိသော ဂိမ်းကစားခြင်း အဖွဲ့အစည်း</p>
                <p className="text-gold font-semibold">Website: www.begambleaware.org</p>
                <p className="text-gold font-semibold">Helpline: 0808 8020 133</p>
              </div>
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">Gamblers Anonymous</h3>
                <p className="text-gray-400 mb-4">ဂိမ်းကစားသူများ အဖွဲ့အစည်း</p>
                <p className="text-gold font-semibold">Website: www.gamblersanonymous.org</p>
              </div>
              <div className="bg-dark rounded-lg p-6 border border-dark-lightest">
                <h3 className="text-xl font-bold text-white mb-3">National Problem Gambling Helpline</h3>
                <p className="text-gray-400 mb-4">အမျိုးသား ဂိမ်းကစားခြင်း ပြဿနာ Helpline</p>
                <p className="text-gold font-semibold">Helpline: 1-800-522-4700</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. 18+ အသက်အရွယ်</h2>
            <p className="mb-4">
              ဤဝဘ်ဆိုဒ်ကို အသုံးပြုရန် သင်သည် <strong>18 နှစ် သို့မဟုတ် ထို့ထက် ကြီးရမည်</strong>။
              18 နှစ်အောက် လူများကို ဤဝဘ်ဆိုဒ်ကို အသုံးပြုခွင့် မပေးပါ။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. အကြံပြုချက်များ</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ဂိမ်းကစားခြင်းကို ပျော်ရွှင်မှု အတွက် သာ သတ်မှတ်ပါ</li>
              <li>ဘတ်ဂျက် ကန့်သတ်ချက်ကို လိုက်နာပါ</li>
              <li>အရက်နှင့် မူးယစ်ဆေးဝါး သောက်စားပြီး ဂိမ်းကစားခြင်း မပြုလုပ်ပါနှင့်</li>
              <li>အနိုင်ရရှိမှု အတွက် ဂိမ်းကစားခြင်း မပြုလုပ်ပါနှင့်</li>
              <li>စိတ်ဖိစီးမှု သို့မဟုတ် စိတ်ဓာတ်ကျမှု ရှိသော အချိန် ဂိမ်းကစားခြင်း ရှောင်ပါ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. ဆက်သွယ်ရန်</h2>
            <p className="mb-4">
              တာဝန်ယူမှုရှိသော ဂိမ်းကစားခြင်းနှင့် ပတ်သက်၍ မေးခွန်းများ ရှိပါက၊ 
              ကျေးဇူးပြု၍ <a href="/contact" className="text-gold hover:underline">Contact</a> 
              စာမျက်နှာကို ကြည့်ရှုပါ။
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

