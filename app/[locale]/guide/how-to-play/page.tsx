import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guideHowToPlay" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: `${baseUrl}/guide/how-to-play`,
    },
    alternates: {
      canonical: `${baseUrl}/guide/how-to-play`,
      languages: {
        'my-MM': `${baseUrl}/guide/how-to-play`,
        'en-US': `${baseUrl}/en/guide/how-to-play`,
      }
    }
  };
}

export default async function HowToPlayPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guideHowToPlay" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">{tCommon("home")}</Link>
          <span>/</span>
          <Link href="/guide" className="hover:text-gold">{tCommon("guide")}</Link>
          <span>/</span>
          <span className="text-white">{t("heading")}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{t("heading")}</span>
          <span className="text-white"> | How to Play Guide</span>
        </h1>

        <div className="space-y-8 mb-8">
          {/* 步驟 1 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">1.</span> အကောင့် ဖွင့်လှစ်ခြင်း | Register Account
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>Myanmar Casino Reviews ဝက်ဘ်ဆိုက် သို့ သွားရောက်ပါ (Visit Myanmar Casino Reviews website)</li>
              <li>"အကောင့်ဖွင့်ရန်" ခလုတ်ကို နှိပ်ပါ (Click "Register" button)</li>
              <li>သင်၏ အီးမေးလ် လိပ်စာ၊ ဖုန်းနံပါတ်၊ နှင့် စကားဝှက် ထည့်သွင်းပါ (Enter your email, phone number, and password)</li>
              <li>စည်းမျဉ်းများနှင့် လျှို့ဝှက်ဆန်းကြယ်မှု မူဝါဒကို ဖတ်ရှုပြီး သဘောတူပါ (Read and agree to terms and privacy policy)</li>
              <li>အကောင့် ဖွင့်လှစ်ရန် အတည်ပြုပါ (Confirm to create account)</li>
            </ol>
          </div>

          {/* 步驟 2 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">2.</span> အကောင့် အတည်ပြုခြင်း | Account Verification
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              အကောင့် ဖွင့်လှစ်ပြီးနောက် သင်သည် အကောင့် အတည်ပြုရမည် ဖြစ်သည်။ 
              သင်၏ အီးမေးလ် သို့ ပို့ထားသော အတည်ပြုလင့်ခ် ကို နှိပ်ပါ သို့မဟုတ် 
              SMS ဖြင့် ရရှိသော ကုဒ် ကို ထည့်သွင်းပါ။
            </p>
            <p className="text-gray-400 text-sm">
              After registration, verify your account by clicking the verification link sent to your email 
              or entering the code received via SMS.
            </p>
          </div>

          {/* 步驟 3 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">3.</span> ပထမဆုံး အပ်ငွေ ပြုလုပ်ခြင်း | First Deposit
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>အကောင့် အတွင်း ဝင်ရောက်ပါ (Log in to your account)</li>
              <li>"ငွေသွင်း" သို့မဟုတ် "Deposit" ကို နှိပ်ပါ (Click "Deposit" or "ငွေသွင်း")</li>
              <li>ငွေသွင်းရန် နည်းလမ်း ရွေးချယ်ပါ (Wave Money, KBZ Pay, CB Pay, etc.)</li>
              <li>ငွေသွင်းရန် ပမာဏ ထည့်သွင်းပါ (Enter deposit amount)</li>
              <li>ငွေသွင်းရန် အတည်ပြုပါ (Confirm deposit)</li>
              <li>ငွေသွင်းရန် လုပ်ငန်းစဉ် ပြီးဆုံးသည်အထိ စောင့်ဆိုင်းပါ (Wait for transaction to complete)</li>
            </ol>
            <div className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/20">
              <p className="text-gold font-bold mb-2">💡 အကြံပြုချက် | Tip:</p>
              <p className="text-gray-300 text-sm">
                ပထမဆုံး အပ်ငွေ ပြုလုပ်သောအခါ 100% ကြိုဆို ဘောနပ်စ် ရရှိမည် ဖြစ်သည်။ 
                (First deposit gets 100% welcome bonus)
              </p>
            </div>
          </div>

          {/* 步驟 4 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">4.</span> ဂိမ်း ရွေးချယ်ခြင်း | Choosing Games
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Myanmar Casino Reviews တွင် သင်သည် စလော့ ဂိမ်းများ၊ လိုင်ဗ် ကာစီနို၊ 
              ငါးဖမ်းဂိမ်းများ၊ စားပွဲဂိမ်းများ စသည့် ဂိမ်းအမျိုးမျိုး ကစားနိုင်ပါသည်။ 
              "ဂိမ်းများ" စာမျက်နှာ သို့ သွားရောက်ပြီး သင်နှစ်သက်သော ဂိမ်း ကို 
              ရွေးချယ်ပါ။
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link href="/games/slots" className="bg-dark rounded-lg p-4 hover:border-gold/50 border border-dark-lightest transition-all">
                <div className="text-gold font-bold mb-1">စလော့ ဂိမ်းများ</div>
                <div className="text-gray-400 text-sm">Slot Games</div>
              </Link>
              <Link href="/games/live-casino" className="bg-dark rounded-lg p-4 hover:border-gold/50 border border-dark-lightest transition-all">
                <div className="text-gold font-bold mb-1">လိုင်ဗ် ကာစီနို</div>
                <div className="text-gray-400 text-sm">Live Casino</div>
              </Link>
            </div>
          </div>

          {/* 步驟 5 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">5.</span> ဂိမ်း ကစားခြင်း | Playing Games
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>ရွေးချယ်ထားသော ဂိမ်း ကို နှိပ်ပါ (Click on selected game)</li>
              <li>လောင်းကြေး ပမာဏ သတ်မှတ်ပါ (Set bet amount)</li>
              <li>ဂိမ်း စတင်ရန် ခလုတ် ကို နှိပ်ပါ (Click start/play button)</li>
              <li>အနိုင်ရရှိပါက ဆုလာဘ် ရရှိမည် (Win prizes if successful)</li>
              <li>ဂိမ်း ပြီးဆုံးပါက နောက်တစ်ကြိမ် ကစားနိုင်ပါသည် (Play again after game ends)</li>
            </ol>
          </div>

          {/* 步驟 6 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">6.</span> ငွေထုတ်ယူခြင်း | Withdrawal
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>အကောင့် အတွင်း ဝင်ရောက်ပါ (Log in to account)</li>
              <li>"ငွေထုတ်" သို့မဟုတ် "Withdraw" ကို နှိပ်ပါ (Click "Withdraw" or "ငွေထုတ်")</li>
              <li>ငွေထုတ်ယူရန် နည်းလမ်း ရွေးချယ်ပါ (Choose withdrawal method)</li>
              <li>ငွေထုတ်ယူရန် ပမာဏ ထည့်သွင်းပါ (Enter withdrawal amount)</li>
              <li>ငွေထုတ်ယူရန် တောင်းဆိုပါ (Request withdrawal)</li>
              <li>အတည်ပြုချက် စောင့်ဆိုင်းပါ (Wait for approval - usually 1-24 hours)</li>
            </ol>
          </div>

          {/* 常見錯誤 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">အဖြစ်များသော အမှားများနှင့် ဖြေရှင်းနည်းများ | Common Mistakes & Solutions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">❌ အမှား: အကောင့် အတည်ပြုမထားခြင်း</h3>
                <p className="text-gray-300">✅ ဖြေရှင်းနည်း: အီးမေးလ် သို့မဟုတ် SMS ဖြင့် ရရှိသော အတည်ပြုကုဒ် ကို ထည့်သွင်းပါ</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">❌ အမှား: လောင်းကြေး လိုအပ်ချက် မပြည့်မီခြင်း</h3>
                <p className="text-gray-300">✅ ဖြေရှင်းနည်း: ဘောနပ်စ် ငွေ ငွေထုတ်ယူရန် လောင်းကြေး လိုအပ်ချက် ပြည့်မီရမည် (usually 20x)</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">❌ အမှား: အကောင့် အချက်အလက် မမှန်ကန်ခြင်း</h3>
                <p className="text-gray-300">✅ ဖြေရှင်းနည်း: အကောင့် အချက်အလက် များကို စစ်ဆေးပြီး မှန်ကန်စွာ ထည့်သွင်းပါ</p>
              </div>
            </div>
          </div>

          {/* 安全提醒 */}
          <div className="bg-dark-lighter rounded-xl p-6 border border-red-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">🛡️ လုံခြုံရေး အကြံပြုချက်များ | Security Tips</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>စကားဝှက် ကို ခိုင်မာစွာ ထားရှိပါ (Use strong password)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>အကောင့် အချက်အလက် ကို အခြားသူများနှင့် မျှဝေပါ (Don't share account info)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>ဘတ်ဂျက် သတ်မှတ်ပြီး ထိုအတိုင်း လိုက်နာပါ (Set budget and stick to it)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>အွန်လိုင်း ကာစီနို ကို ဖျော်ဖြေရန် သာ အသုံးပြုပါ (Use for entertainment only)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">အခုပဲ စတင်ပါ | Start Now</h2>
          <p className="text-gray-300 mb-6 text-lg">
            အကောင့် ဖွင့်လှစ်ပြီး အွန်လိုင်း ကာစီနို ကစားရန် စတင်ပါ
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန် | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

