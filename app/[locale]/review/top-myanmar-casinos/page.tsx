import { Metadata } from "next";
import ComparisonTable from "@/components/ui/ComparisonTable";
import casinosData from "@/data/casinos.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: "မြန်မာ့ အကောင်းဆုံး ကာစီနို နှိုင်းယှဉ်ချက် - Myanmar Casino Reviews",
  description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို များကို နှိုင်းယှဉ်ချက်။ ဘောနပ်စ်၊ ဂိမ်းများ၊ ငွေလွှဲနည်းလမ်းများ။",
  alternates: {
    canonical: `${baseUrl}/review/top-myanmar-casinos`,
  },
  openGraph: {
    title: "မြန်မာ့ အကောင်းဆုံး ကာစီနို နှိုင်းယှဉ်ချက်",
    description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို များကို နှိုင်းယှဉ်ချက်။",
    url: `${baseUrl}/review/top-myanmar-casinos`,
  },
};

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-gold">မြန်မာ့ အကောင်းဆုံး</span>{" "}
            <span className="text-white">ကာစီနို နှိုင်းယှဉ်ချက်</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            အကောင်းဆုံး အွန်လိုင်း ကာစီနို များကို အဆင့်သတ်မှတ်ချက်၊ ဘောနပ်စ်၊
            ဂိမ်းများ၊ နှင့် ငွေလွှဲနည်းလမ်းများဖြင့် နှိုင်းယှဉ်ကြည့်ပါ။
          </p>
        </div>

        <ComparisonTable casinos={casinosData} />
      </div>
    </div>
  );
}

