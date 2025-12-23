import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export default function NotFound() {
  const brandLinks = [
    "https://www.yes8.io/m/home?affiliateCode=seom1802",
    "https://www.ygn9.net/m/home?affiliateCode=seom1902",
    "https://www.pya777.net/m/home?affiliateCode=seom2002",
  ];

  const randomBrandLink = brandLinks[Math.floor(Math.random() * brandLinks.length)];

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          စာမျက်နှာ မတွေ့ရှိပါ
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          သင်ရှာဖွေနေသော စာမျက်နှာကို မတွေ့ရှိပါ။
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-dark-lighter hover:bg-dark-light text-white rounded-lg font-semibold transition-colors border border-dark-lightest"
          >
            ပင်မစာမျက်နှာသို့ ပြန်သွားရန်
          </Link>
          <CTAButton href={randomBrandLink} variant="gold" size="md">
            အကောင့်ဖွင့်ရန်
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

