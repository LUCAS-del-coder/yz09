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
  const tGames = await getTranslations({ locale, namespace: "games" });
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
              <span className="text-gold">1.</span> {t("step1.title")} | Register Account
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step1.step1")} (Visit Myanmar Casino Reviews website)</li>
              <li>{t("step1.step2")} (Click \"Register\" button)</li>
              <li>{t("step1.step3")} (Enter your email, phone number, and password)</li>
              <li>{t("step1.step4")} (Read and agree to terms and privacy policy)</li>
              <li>{t("step1.step5")} (Confirm to create account)</li>
            </ol>
          </div>

          {/* 步驟 2 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">2.</span> {t("step2.title")} | Account Verification
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("step2.text")}
            </p>
            <p className="text-gray-400 text-sm">
              After registration, verify your account by clicking the verification link sent to your email 
              or entering the code received via SMS.
            </p>
          </div>

          {/* 步驟 3 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">3.</span> {t("step3.title")} | First Deposit
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step3.step1")} (Log in to your account)</li>
              <li>{t("step3.step2")} (Click \"Deposit\" or \"ငွေသွင်း\")</li>
              <li>{t("step3.step3")} (Wave Money, KBZ Pay, CB Pay, etc.)</li>
              <li>{t("step3.step4")} (Enter deposit amount)</li>
              <li>{t("step3.step5")} (Confirm deposit)</li>
              <li>{t("step3.step6")} (Wait for transaction to complete)</li>
            </ol>
            <div className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/20">
              <p className="text-gold font-bold mb-2">💡 အကြံပြုချက် | Tip:</p>
              <p className="text-gray-300 text-sm">
                {t("step3.tip")} (First deposit gets 100% welcome bonus)
              </p>
            </div>
          </div>

          {/* 步驟 4 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">4.</span> {t("step4.title")} | Choosing Games
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t("step4.text")}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Link href="/games/slots" className="bg-dark rounded-lg p-4 hover:border-gold/50 border border-dark-lightest transition-all">
                <div className="text-gold font-bold mb-1">{tGames("slots")}</div>
                <div className="text-gray-400 text-sm">Slot Games</div>
              </Link>
              <Link href="/games/live-casino" className="bg-dark rounded-lg p-4 hover:border-gold/50 border border-dark-lightest transition-all">
                <div className="text-gold font-bold mb-1">{tGames("liveCasino")}</div>
                <div className="text-gray-400 text-sm">Live Casino</div>
              </Link>
            </div>
          </div>

          {/* 步驟 5 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">5.</span> {t("step5.title")} | Playing Games
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step5.step1")} (Click on selected game)</li>
              <li>{t("step5.step2")} (Set bet amount)</li>
              <li>{t("step5.step3")} (Click start/play button)</li>
              <li>{t("step5.step4")} (Win prizes if successful)</li>
              <li>{t("step5.step5")} (Play again after game ends)</li>
            </ol>
          </div>

          {/* 步驟 6 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gold">6.</span> {t("step6.title")} | Withdrawal
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-300 ml-4">
              <li>{t("step6.step1")} (Log in to account)</li>
              <li>{t("step6.step2")} (Click \"Withdraw\" or \"ငွေထုတ်\")</li>
              <li>{t("step6.step3")} (Choose withdrawal method)</li>
              <li>{t("step6.step4")} (Enter withdrawal amount)</li>
              <li>{t("step6.step5")} (Request withdrawal)</li>
              <li>{t("step6.step6")} (Wait for approval - usually 1-24 hours)</li>
            </ol>
          </div>

          {/* 常見錯誤 */}
          <div className="bg-dark-lighter rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{t("commonMistakes.title")} | Common Mistakes & Solutions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">{t("commonMistakes.mistake1.title")}</h3>
                <p className="text-gray-300">{t("commonMistakes.mistake1.solution")}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">{t("commonMistakes.mistake2.title")}</h3>
                <p className="text-gray-300">{t("commonMistakes.mistake2.solution")}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">{t("commonMistakes.mistake3.title")}</h3>
                <p className="text-gray-300">{t("commonMistakes.mistake3.solution")}</p>
              </div>
            </div>
          </div>

          {/* 安全提醒 */}
          <div className="bg-dark-lighter rounded-xl p-6 border border-red-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">🛡️ {t("securityTips.title")} | Security Tips</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip1")} (Use strong password)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip2")} (Don't share account info)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip3")} (Set budget and stick to it)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">🔒</span>
                <span>{t("securityTips.tip4")} (Use for entertainment only)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("startNow")} | Start Now</h2>
          <p className="text-gray-300 mb-6 text-lg">
            {t("startNowText")}
          </p>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {t("registerNow")} | Register Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

