import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/privacy`,
      languages: {
        'my-MM': `${baseUrl}/privacy`,
        'en-US': `${baseUrl}/en/privacy`,
      }
    },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
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
            <h2 className="text-2xl font-bold text-white mb-4">1. မိတ်ဆက်</h2>
            <p className="mb-4">
              Myanmar Casino Reviews သည် သင်၏ ကိုယ်ရေးလုံခြုံမှုကို အလေးထားပါသည်။
              ဤ Privacy Policy သည် ကျွန်ုပ်တို့အနေဖြင့် သင်၏ သတင်းအချက်အလက်များကို 
              မည်သို့ ကောက်ယူ၊ အသုံးပြု၊ သိုလှောင်၊ နှင့် ကာကွယ်သည်ကို ရှင်းလင်းစွာ ဖော်ပြပါသည်။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. ကောက်ယူသော သတင်းအချက်အလက်များ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.1 အလိုအလျောက် ကောက်ယူသော သတင်းအချက်အလက်များ</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP Address</li>
                  <li>Browser Type နှင့် Version</li>
                  <li>Operating System</li>
                  <li>Referral URLs</li>
                  <li>ဝဘ်ဆိုဒ် အသုံးပြုမှု ဒေတာ</li>
                  <li>Access Times နှင့် Dates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">2.2 Cookie နှင့် Tracking Technologies</h3>
                <p className="mb-4">
                  ကျွန်ုပ်တို့သည် Cookie များ၊ Web Beacons များ၊ နှင့် အလားတူ 
                  tracking technologies များကို အသုံးပြုနိုင်ပါသည်။
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookie အသုံးပြုမှု</h2>
            <p className="mb-4">
              Cookie များသည် သေးငယ်သော text files များ ဖြစ်ပြီး၊ 
              သင်၏ device ပေါ်တွင် သိုလှောင်ထားပါသည်။
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">ကျွန်ုပ်တို့ အသုံးပြုသော Cookie အမျိုးအစားများ:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies</strong>: ဝဘ်ဆိုဒ် လုပ်ဆောင်ရန် လိုအပ်သော cookies</li>
                  <li><strong>Analytics Cookies</strong>: ဝဘ်ဆိုဒ် အသုံးပြုမှု ကို ဆန်းစစ်ရန်</li>
                  <li><strong>Functional Cookies</strong>: ဝန်ဆောင်မှု လုပ်ဆောင်မှု ကို မှတ်မိရန်</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. သတင်းအချက်အလက်များ အသုံးပြုမှု</h2>
            <p className="mb-4">ကျွန်ုပ်တို့သည် ကောက်ယူသော သတင်းအချက်အလက်များကို အောက်ပါ ရည်ရွယ်ချက်များအတွက် အသုံးပြုပါသည်:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ဝဘ်ဆိုဒ် ဝန်ဆောင်မှု ပေးရန်</li>
              <li>ဝဘ်ဆိုဒ် လုပ်ဆောင်မှု ကောင်းမွန်အောင် ပြုလုပ်ရန်</li>
              <li>ဝဘ်ဆိုဒ် အသုံးပြုမှု ကို ဆန်းစစ်ရန်</li>
              <li>သုံးစွဲသူ အတွေ့အကြုံ ကောင်းမွန်အောင် ပြုလုပ်ရန်</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. တတိယပါတီ ဝန်ဆောင်မှုများ</h2>
            <p className="mb-4">
              ကျွန်ုပ်တို့သည် Google Analytics ကဲ့သို့သော တတိယပါတီ ဝန်ဆောင်မှုများကို 
              အသုံးပြုနိုင်ပါသည်။ ထိုဝန်ဆောင်မှုများသည် သင်၏ သတင်းအချက်အလက်များကို 
              ကောက်ယူနိုင်ပါသည်။
            </p>
            <p className="mb-4">
              ဤဝန်ဆောင်မှုများ၏ Privacy Policy များကို သက်ဆိုင်ရာ 
              ဝန်ဆောင်မှု ပေးသော ကုမ္ပဏီများ၏ ဝဘ်ဆိုဒ်များတွင် ကြည့်ရှုနိုင်ပါသည်။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. သုံးစွဲသူ အခွင့်အရေးများ</h2>
            <p className="mb-4">သင်၏ သတင်းအချက်အလက်များနှင့် ပတ်သက်၍ သင့်တွင် အောက်ပါ အခွင့်အရေးများ ရှိပါသည်:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>သတင်းအချက်အလက်များကို ကြည့်ရှုခွင့်</li>
              <li>သတင်းအချက်အလက်များကို တောင်းဆိုခွင့်</li>
              <li>သတင်းအချက်အလက်များကို ပြင်ဆင်ခွင့်</li>
              <li>သတင်းအချက်အလက်များကို ဖျက်ဆီးခွင့်</li>
              <li>Cookie အသုံးပြုမှုကို ငြင်းဆိုခွင့်</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. လုံခြုံရေး</h2>
            <p className="mb-4">
              ကျွန်ုပ်တို့သည် SSL encryption နှင့် အခြား လုံခြုံရေး နည်းလမ်းများကို 
              အသုံးပြု၍ သင်၏ သတင်းအချက်အလက်များကို ကာကွယ်ရန် ကြိုးစားပါသည်။
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. ဆက်သွယ်ရန်</h2>
            <p className="mb-4">
              ဤ Privacy Policy နှင့် ပတ်သက်၍ မေးခွန်းများ ရှိပါက၊ 
              ကျေးဇူးပြု၍ <a href="/contact" className="text-gold hover:underline">Contact</a> 
              စာမျက်နှာကို ကြည့်ရှုပါ။
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

