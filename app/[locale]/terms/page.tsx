import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/terms`,
      languages: {
        'my-MM': `${baseUrl}/terms`,
        'en-US': `${baseUrl}/en/terms`,
      }
    },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  const lastUpdated = "2024-12-16";

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">
          <span className="gradient-gold">{t("heading")}</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">{t("lastUpdated")}: {lastUpdated}</p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. ဝဘ်ဆိုဒ် နှင့် ဝန်ဆောင်မှု</h2>
            <p className="mb-4">
              Myanmar Casino Reviews သည် အွန်လိုင်း ကာစီနို သတင်းအချက်အလက် နှင့် 
              စုံစမ်းစစ်ဆေးချက်များကို ပြသသော အခမဲ့ သတင်းအချက်အလက် ဝဘ်ဆိုဒ် ဖြစ်သည်။
            </p>
            <p className="mb-4">
              ဤဝဘ်ဆိုဒ်သည် <strong>အွန်လိုင်း ကာစီနို ကစားရန် ဝန်ဆောင်မှု မပေးပါ</strong>။
              ဤဝဘ်ဆိုဒ်သည် အချက်အလက် ပေးသော ဝန်ဆောင်မှု ဖြစ်ပြီး၊ 
              လူတစ်ဦးတစ်ယောက်၏ ဆုံးဖြတ်ချက် အတွက် တာဝန်ယူမှု မရှိပါ။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. အသက်အရွယ် ကန့်သတ်ချက်</h2>
            <p className="mb-4">
              ဤဝဘ်ဆိုဒ်ကို အသုံးပြုရန် သင်သည် <strong>18 နှစ် သို့မဟုတ် ထို့ထက် ကြီးရမည်</strong>။
              18 နှစ်အောက် လူများကို ဤဝဘ်ဆိုဒ်ကို အသုံးပြုခွင့် မပေးပါ။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Affiliate ဆက်ဆံရေး</h2>
            <p className="mb-4">
              ဤဝဘ်ဆိုဒ်သည် Affiliate Program များမှတဆင့် အမြတ်အစွန်း ရရှိနိုင်သည်။
              ဤဝဘ်ဆိုဒ်၏ စုံစမ်းစစ်ဆေးချက်များသည် ကျွန်ုပ်တို့၏ ဘဏ္ဍာရေး အကျိုးစီးပွားကို 
              ထိခိုက်နိုင်သော်လည်း၊ ကျွန်ုပ်တို့သည် တတ်နိုင်သမျှ တရားမျှတစွာ စုံစမ်းစစ်ဆေးချက်များ 
              ပြုလုပ်ရန် ကြိုးစားပါသည်။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. တာဝန်ယူမှု ကန့်သတ်ချက်</h2>
            <p className="mb-4">
              ဤဝဘ်ဆိုဒ်၏ အချက်အလက်များကို "as is" အဖြစ် ပေးထားပြီး၊ 
              မည်သည့် အာမခံချက်မျှ မပေးပါ။ ကျွန်ုပ်တို့သည် ဤဝဘ်ဆိုဒ်၏ အချက်အလက်များ၏ 
              တိကျမှု၊ ပြည့်စုံမှု၊ သို့မဟုတ် အသုံးဝင်မှုအတွက် တာဝန်ယူမှု မရှိပါ။
            </p>
            <p className="mb-4">
              သင်သည် ကာစီနို ဝန်ဆောင်မှု များကို အသုံးပြုရာတွင် သင်၏ ကိုယ်ပိုင် 
              တာဝန်ယူမှု ရှိပါသည်။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. ကာစီနို ဝန်ဆောင်မှု</h2>
            <p className="mb-4">
              ဤဝဘ်ဆိုဒ်သည် ကာစီနို ဝန်ဆောင်မှု များနှင့် ဆက်စပ်မှု မရှိပါ။
              ကာစီနို ဝန်ဆောင်မှု များ၏ စည်းမျဉ်းများ၊ ရည်ရွယ်ချက်များ၊ 
              နှင့် တာဝန်ယူမှု များသည် သက်ဆိုင်ရာ ကာစီနို ဝန်ဆောင်မှု ပိုင်ရှင်များနှင့် ဖြစ်ပါသည်။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. လုံခြုံရေး</h2>
            <p className="mb-4">
              ကျွန်ုပ်တို့သည် သင်၏ သတင်းအချက်အလက်များကို လုံခြုံစွာ ကိုင်တွယ်ရန် 
              ကြိုးစားပါသည်။ သို့သော်၊ အင်တာနက် ပေါ်ရှိ မည်သည့် ဒေတာ လွှဲအပ်မှုမျှ 
              လုံးဝ လုံခြုံသည်ဟု အာမမခံနိုင်ပါ။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. စည်းမျဉ်းများ ပြောင်းလဲမှု</h2>
            <p className="mb-4">
              ကျွန်ုပ်တို့သည် အချိန်မရွေး ဤစည်းမျဉ်းများကို ပြောင်းလဲနိုင်ပါသည်။
              ပြောင်းလဲမှုများ ပြီးနောက် ဤစာမျက်နှာကို အသုံးပြုခြင်းဖြင့် 
              သင်သည် ပြောင်းလဲမှုများကို လက်ခံသည်ဟု သတ်မှတ်ပါသည်။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. ဆက်သွယ်ရန်</h2>
            <p className="mb-4">
              ဤစည်းမျဉ်းများနှင့် ပတ်သက်၍ မေးခွန်းများ ရှိပါက၊ 
              ကျေးဇူးပြု၍ <a href="/contact" className="text-gold hover:underline">Contact</a> 
              စာမျက်နှာကို ကြည့်ရှုပါ။
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

