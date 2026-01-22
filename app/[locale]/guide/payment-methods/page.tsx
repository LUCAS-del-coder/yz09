import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import CTAButton from "@/components/ui/CTAButton";
import { getTranslations } from "next-intl/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export const metadata: Metadata = {
  title: "ငွေသွင်း ငွေထုတ် နည်းလမ်းများ | Payment Methods Guide Myanmar | Myanmar Casino Reviews",
  description: "Myanmar Casino Reviews သည် Wave Money, KBZ Pay, CB Pay, AYA Pay စသည့် လူကြိုက်များသော ငွေသွင်း နည်းလမ်းများ ထောက်ပံ့ပါသည်။ ငွေသွင်း ချက်ချင်း ရရှိပြီး ငွေထုတ် 1-24 နာရီ အတွင်း လုပ်ဆောင်ပါသည်။ လုံခြုံပြီး အဆင်ပြေသော နည်းလမ်းများ။ Supports Wave Money, KBZ Pay, CB Pay - Instant deposit, 1-24h withdrawal.",
  keywords: [
    "ငွေသွင်း နည်းလမ်း",
    "ငွေထုတ် နည်းလမ်း",
    "Wave Money ငွေသွင်း",
    "KBZ Pay ငွေသွင်း",
    "CB Pay ငွေသွင်း",
    "payment methods Myanmar",
    "deposit methods Myanmar",
    "withdrawal Myanmar"
  ].join(", "),
  openGraph: {
    title: "ငွေသွင်း ငွေထုတ် နည်းလမ်းများ | Payment Methods",
    locale: 'my_MM',
    url: `${baseUrl}/guide/payment-methods`,
  },
  alternates: {
    canonical: `${baseUrl}/guide/payment-methods`,
  }
};

const paymentMethods = [
  {
    name: "Wave Money",
    nameMm: "Wave Money",
    minAmount: "1,000 MMK",
    maxAmount: "1,000,000 MMK",
    processingTime: "ချက်ချင်း | Instant",
    fee: "အခမဲ့ | Free",
    steps: [
      "Wave Money အက်ပ်တွင် ဝင်ရောက်ပါ",
      "ငွေလွှဲရန် ရွေးချယ်ပါ",
      "Myanmar Casino Reviews အကောင့် နံပါတ် ထည့်သွင်းပါ",
      "ငွေသွင်းရန် ပမာဏ ထည့်သွင်းပါ",
      "PIN နံပါတ် ထည့်သွင်းပြီး အတည်ပြုပါ"
    ]
  },
  {
    name: "KBZ Pay",
    nameMm: "KBZ Pay",
    minAmount: "1,000 MMK",
    maxAmount: "2,000,000 MMK",
    processingTime: "ချက်ချင်း | Instant",
    fee: "အခမဲ့ | Free",
    steps: [
      "KBZ Pay အက်ပ်တွင် ဝင်ရောက်ပါ",
      "ငွေလွှဲရန် ရွေးချယ်ပါ",
      "Myanmar Casino Reviews အကောင့် နံပါတ် ထည့်သွင်းပါ",
      "ငွေသွင်းရန် ပမာဏ ထည့်သွင်းပါ",
      "အတည်ပြုပါ"
    ]
  },
  {
    name: "CB Pay",
    nameMm: "CB Pay",
    minAmount: "1,000 MMK",
    maxAmount: "1,500,000 MMK",
    processingTime: "ချက်ချင်း | Instant",
    fee: "အခမဲ့ | Free",
    steps: [
      "CB Pay အက်ပ်တွင် ဝင်ရောက်ပါ",
      "ငွေလွှဲရန် ရွေးချယ်ပါ",
      "Myanmar Casino Reviews အကောင့် နံပါတ် ထည့်သွင်းပါ",
      "ငွေသွင်းရန် ပမာဏ ထည့်သွင်းပါ",
      "အတည်ပြုပါ"
    ]
  },
  {
    name: "AYA Pay",
    nameMm: "AYA Pay",
    minAmount: "1,000 MMK",
    maxAmount: "1,000,000 MMK",
    processingTime: "ချက်ချင်း | Instant",
    fee: "အခမဲ့ | Free",
    steps: [
      "AYA Pay အက်ပ်တွင် ဝင်ရောက်ပါ",
      "ငွေလွှဲရန် ရွေးချယ်ပါ",
      "Myanmar Casino Reviews အကောင့် နံပါတ် ထည့်သွင်းပါ",
      "ငွေသွင်းရန် ပမာဏ ထည့်သွင်းပါ",
      "အတည်ပြုပါ"
    ]
  },
  {
    name: "Bank Transfer",
    nameMm: "ဘဏ် ငွေလွှဲ",
    minAmount: "10,000 MMK",
    maxAmount: "5,000,000 MMK",
    processingTime: "1-3 နာရီ | 1-3 hours",
    fee: "ဘဏ် လုပ်ဆောင်ခ ပေါ်မူတည်သည်",
    steps: [
      "ဘဏ် သို့မဟုတ် အွန်လိုင်း ဘဏ် အက်ပ်တွင် ဝင်ရောက်ပါ",
      "ငွေလွှဲရန် ရွေးချယ်ပါ",
      "Myanmar Casino Reviews ဘဏ် အချက်အလက် ထည့်သွင်းပါ",
      "ငွေသွင်းရန် ပမာဏ ထည့်သွင်းပါ",
      "ငွေလွှဲရန် အတည်ပြုပါ"
    ]
  }
];

export default async function PaymentMethodsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  const tCommon = await getTranslations({ locale, namespace: "common" });
  const t = await getTranslations({ locale, namespace: "guidePaymentMethods" });

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
          <span className="text-white"> | Payment Methods</span>
        </h1>

        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("supportedMethods")} | Supported Payment Methods</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("supportedMethodsText")}
          </p>
        </div>

        {/* 支付方式列表 */}
        <div className="space-y-6 mb-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest">
              <h3 className="text-2xl font-bold text-gold mb-4">{method.nameMm} | {method.name}</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{t("minAmount")}</div>
                  <div className="text-lg font-bold text-white">{method.minAmount}</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{t("maxAmount")}</div>
                  <div className="text-lg font-bold text-white">{method.maxAmount}</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{t("processingTime")}</div>
                  <div className="text-lg font-bold text-white">{method.processingTime}</div>
                </div>
                <div className="bg-dark rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">{t("fee")}</div>
                  <div className="text-lg font-bold text-white">{method.fee}</div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-bold text-white mb-3">{t("depositSteps")} | Deposit Steps</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                  {method.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        {/* 提款說明 */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t("withdrawal")} | Withdrawal</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            {t("withdrawalText")}
          </p>
          <div className="bg-dark rounded-lg p-4 mt-4">
            <div className="text-sm text-gray-400 mb-1">{t("withdrawalProcessingTime")}</div>
            <div className="text-2xl font-bold text-gold">{t("withdrawalTimeValue")}</div>
            <div className="text-xs text-gray-500 mt-1">Processing time: 1-24 hours</div>
          </div>
        </div>

        {/* 安全性說明 */}
        <div className="bg-dark-lighter rounded-xl p-6 mb-8 border border-green-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">🛡️ {t("security")} | Security</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400">🔒</span>
              <span>{t("securitySsl")} (Protected with SSL encryption)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">🔒</span>
              <span>{t("securityAccount")} (Account info stored securely)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">🔒</span>
              <span>{t("securityMonitoring")} (24/7 monitoring)</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t("heading")} {tCommon("playNow")} | Start Depositing</h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            {tCommon("openAccount")}
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

