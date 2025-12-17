import { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: "ငွေလွှဲနည်းလမ်းများ - Myanmar Casino Reviews",
  description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို ငွေလွှဲနည်းလမ်းများ။",
  alternates: {
    canonical: `${baseUrl}/payment`,
  },
  openGraph: {
    title: "ငွေလွှဲနည်းလမ်းများ",
    description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို ငွေလွှဲနည်းလမ်းများ။",
    url: `${baseUrl}/payment`,
  },
};

const paymentMethods = [
  {
    name: "KBZ Pay",
    icon: "💳",
    description: "မြန်မာ့ အသုံးအများဆုံး ငွေလွှဲနည်းလမ်း",
    features: ["မြန်ဆန်", "လုံခြုံ", "အနည်းဆုံး 1000 MMK"],
    minDeposit: "1000 MMK",
    maxDeposit: "10,000,000 MMK",
    processingTime: "လက်ငင်း",
  },
  {
    name: "Wave Money",
    icon: "📱",
    description: "Wave Money ဖြင့် လွယ်ကူစွာ ငွေဖြည့်သွင်းနိုင်သည်",
    features: ["အလွယ်တကူ", "မြန်ဆန်", "လုံခြုံ"],
    minDeposit: "1000 MMK",
    maxDeposit: "5,000,000 MMK",
    processingTime: "လက်ငင်း",
  },
  {
    name: "CB Pay",
    icon: "🏦",
    description: "CB Pay ဖြင့် ဘဏ်မှ တိုက်ရိုက် ငွေဖြည့်သွင်းနိုင်သည်",
    features: ["ဘဏ်မှ တိုက်ရိုက်", "လုံခြုံ", "မြန်ဆန်"],
    minDeposit: "2000 MMK",
    maxDeposit: "20,000,000 MMK",
    processingTime: "5-15 မိနစ်",
  },
  {
    name: "AYA Pay",
    icon: "💼",
    description: "AYA Pay ဖြင့် ငွေဖြည့်သွင်းနိုင်သည်",
    features: ["မြန်ဆန်", "လုံခြုံ", "အလွယ်တကူ"],
    minDeposit: "1000 MMK",
    maxDeposit: "10,000,000 MMK",
    processingTime: "လက်ငင်း",
  },
  {
    name: "Visa / Mastercard",
    icon: "💳",
    description: "ကမ္ဘာတဝှမ်း အသုံးပြုနိုင်သော ငွေလွှဲနည်းလမ်း",
    features: ["ကမ္ဘာတဝှမ်း", "လုံခြုံ", "မြန်ဆန်"],
    minDeposit: "5,000 MMK",
    maxDeposit: "50,000,000 MMK",
    processingTime: "10-30 မိနစ်",
  },
];

const brandLinks = [
  "https://www.yes8.io/m/home?affiliateCode=seom1802",
  "https://www.ygn9.net/m/home?affiliateCode=seom1902",
  "https://www.pya777.net/m/home?affiliateCode=seom2002",
];

export default function PaymentPage() {
  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">ငွေလွှဲနည်းလမ်းများ</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို ငွေလွှဲနည်းလမ်းများ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-dark-lighter rounded-xl p-6 border border-dark-lightest hover:border-gold/50 transition-all card-hover"
            >
              <div className="text-5xl mb-4 text-center">{method.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{method.name}</h2>
              <p className="text-gray-400 mb-4">{method.description}</p>
              
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-sm text-gray-400">အနည်းဆုံး:</span>
                  <span className="text-gold font-semibold ml-2">{method.minDeposit}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-400">အများဆုံး:</span>
                  <span className="text-gold font-semibold ml-2">{method.maxDeposit}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-400">အချိန်:</span>
                  <span className="text-gold font-semibold ml-2">{method.processingTime}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {method.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-gold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-dark-lighter rounded-xl p-8 border border-dark-lightest mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">ငွေထုတ်ယူမှု</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              ငွေထုတ်ယူမှုသည် ယေဘူယျအားဖြင့် 24-48 နာရီအတွင်း ပြီးမြောက်သည်။
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>အနည်းဆုံး ထုတ်ယူမှု: 5,000 MMK</li>
              <li>အများဆုံး ထုတ်ယူမှု: တစ်ရက်လျှင် 10,000,000 MMK</li>
              <li>ငွေထုတ်ယူမှု အချိန်: 24-48 နာရီ</li>
              <li>အခွန်မယူပါ</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ငွေဖြည့်သွင်းပြီး ဂိမ်း ကစားရန် အခုပဲ စတင်ပါ
          </h2>
          <CTAButton href={randomBrandLink} variant="gold" size="lg">
            အကောင့်ဖွင့်ရန်
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

