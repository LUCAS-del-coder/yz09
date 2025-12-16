import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import casinosData from "@/data/casinos.json";
import StarRating from "@/components/ui/StarRating";
import ProsCons from "@/components/ui/ProsCons";
import BonusCard from "@/components/ui/BonusCard";
import CTAButton from "@/components/ui/CTAButton";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return casinosData.map((casino) => ({
    slug: casino.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const casino = casinosData.find((c) => c.slug === params.slug);

  if (!casino) {
    return {
      title: "Casino Not Found",
    };
  }

  return {
    title: `${casino.nameMm} - စုံစမ်းစစ်ဆေးချက် | Myanmar Casino Reviews`,
    description: `${casino.excerpt} ${casino.nameMm} အပြည့်အစုံ စုံစမ်းစစ်ဆေးချက်။`,
    openGraph: {
      title: `${casino.nameMm} - စုံစမ်းစစ်ဆေးချက်`,
      description: casino.excerpt,
      type: "website",
    },
  };
}

export default function CasinoReviewPage({ params }: PageProps) {
  const casino = casinosData.find((c) => c.slug === params.slug);

  if (!casino) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={casino.hero}
            alt={casino.nameMm}
            fill
            className="object-cover"
            priority
            onError={(e) => {
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'%3E%3Crect fill='%231A1A1A' width='1200' height='600'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='48' fill='%23FFD700' text-anchor='middle' dy='.3em'%3E" + casino.nameMm + "%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-xl bg-dark-lighter border-2 border-gold p-2">
                <Image
                  src={casino.logo}
                  alt={casino.nameMm}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%231A1A1A' width='80' height='80'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23FFD700' text-anchor='middle' dy='.3em'%3E" + casino.nameMm + "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {casino.nameMm}
                </h1>
                <StarRating rating={casino.rating} size="lg" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-6">{casino.excerpt}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href={casino.ctaLink} variant="gold" size="lg">
                ဒီ Casino မှာ ကစားရန်
              </CTAButton>
              <CTAButton href={casino.ctaLink} variant="primary" size="lg">
                ဘောနပ်စ် ရယူရန်
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Quick Facts */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest text-center">
              <div className="text-2xl font-bold text-gold mb-2">{casino.features.games}</div>
              <div className="text-sm text-gray-400">ဂိမ်းများ</div>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest text-center">
              <div className="text-2xl font-bold text-gold mb-2">{casino.features.providers}</div>
              <div className="text-sm text-gray-400">ဂိမ်း ထုတ်လုပ်သူများ</div>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest text-center">
              <div className="text-2xl font-bold text-gold mb-2">{casino.features.minDeposit}</div>
              <div className="text-sm text-gray-400">အနည်းဆုံး ဖြည့်သွင်းမှု</div>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest text-center">
              <div className="text-2xl font-bold text-gold mb-2">{casino.features.withdrawalTime}</div>
              <div className="text-sm text-gray-400">ငွေထုတ်ယူမှု</div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">အားသာချက်များ နှင့် အားနည်းချက်များ</h2>
            <ProsCons pros={casino.pros} cons={casino.cons} />
          </div>

          {/* Bonuses */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">ဘောနပ်စ်များ နှင့် ပရိုမိုးရှင်းများ</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {casino.bonuses.map((bonus, index) => (
                <BonusCard
                  key={index}
                  type={bonus.type}
                  amount={bonus.amount}
                  description={bonus.description}
                  ctaLink={casino.ctaLink}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Game Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">ဂိမ်း အမျိုးအစားများ</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {casino.gameCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest hover:border-gold/50 transition-colors text-center"
                >
                  <div className="text-2xl mb-2">
                    {category === "Slots" && "🎰"}
                    {category === "Live Casino" && "🎲"}
                    {category === "Sports Betting" && "⚽"}
                    {category === "Fishing" && "🎣"}
                    {category === "Poker" && "🃏"}
                    {category === "Lottery" && "🎫"}
                    {category === "Arcade" && "🕹️"}
                  </div>
                  <div className="font-semibold text-white">{category}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">ငွေလွှဲနည်းလမ်းများ</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {casino.paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-dark-lighter rounded-lg p-4 border border-dark-lightest hover:border-primary transition-colors text-center"
                >
                  <div className="font-semibold text-white">{method}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Verdict */}
          <div className="bg-gradient-to-br from-dark-lighter to-dark rounded-xl p-8 border border-gold/30 mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-gold">⭐</span>
              ကျွမ်းကျင်သူ၏ ဆုံးဖြတ်ချက်
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {casino.nameMm} သည် မြန်မာနိုင်ငံရှိ အကောင်းဆုံး အွန်လိုင်း ကာစီနို များထဲမှ တစ်ခု ဖြစ်သည်။
              ဘောနပ်စ် အများဆုံး၊ ငွေထုတ်ယူမှု မြန်ဆန်၊ နှင့် 24/7 ဖောက်သည်ဝန်ဆောင်မှု ရရှိနိုင်သည်။
              ဂိမ်း အရည်အသွေး မြင့်မားပြီး မြန်မာဘာသာ ထောက်ပံ့မှု ရှိသည်။
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href={casino.ctaLink} variant="gold" size="lg">
                အကောင့်ဖွင့်ရန်
              </CTAButton>
              <CTAButton href={casino.ctaLink} variant="primary" size="lg">
                ဘောနပ်စ် ရယူရန်
              </CTAButton>
            </div>
          </div>

          {/* Security & Support */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest">
              <h3 className="text-xl font-bold text-white mb-4">လုံခြုံရေး နှင့် လစ်ဆင်</h3>
              <p className="text-gray-300 mb-4">{casino.features.license}</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✅ SSL လုံခြုံရေး လက်မှတ်</li>
                <li>✅ လစ်ဆင်ရရှိထားသော ကာစီနို</li>
                <li>✅ လုံခြုံရေး အထူးကောင်းမွန်</li>
              </ul>
            </div>
            <div className="bg-dark-lighter rounded-lg p-6 border border-dark-lightest">
              <h3 className="text-xl font-bold text-white mb-4">ဖောက်သည်ဝန်ဆောင်မှု</h3>
              <p className="text-gray-300 mb-4">{casino.features.support}</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>✅ 24/7 Live Chat</li>
                <li>✅ မြန်မာဘာသာ ထောက်ပံ့မှု</li>
                <li>✅ Email ထောက်ပံ့မှု</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

