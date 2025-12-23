import { Metadata } from "next";
import ComparisonTable from "@/components/ui/ComparisonTable";
import casinosData from "@/data/casinos.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: "Compare Myanmar Casinos | Shwe vs 888 vs 777 vs Win8 vs 999",
  description: "Side-by-side comparison of Myanmar's top casinos: Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88, FaFaFa. Compare bonuses, games, payouts & ratings.",
  keywords: [
    "Shwe Casino vs 888 Casino",
    "777 Casino vs Win8",
    "Myanmar casino comparison",
    "best casino Myanmar 2025",
    "ရွှေ vs ၈၈၈ ကာစီနို"
  ].join(", "),
  alternates: {
    canonical: `${baseUrl}/compare`,
  },
  openGraph: {
    title: "Compare Myanmar Casinos | Shwe vs 888 vs 777",
    description: "Compare bonuses, games, payouts & ratings of Myanmar's top casinos",
    url: `${baseUrl}/compare`,
  },
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-background-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            <span className="gradient-purple">Compare Myanmar Casinos</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Side-by-side comparison of Myanmar's top online casinos:{" "}
            <strong>Shwe Casino</strong>, <strong>888 Casino</strong>,{" "}
            <strong>777 Casino</strong>, <strong>Win8</strong>,{" "}
            <strong>999 Casino</strong>, <strong>PGLucky88</strong> and{" "}
            <strong>FaFaFa Casino</strong>. Compare ratings, bonuses, games, payouts and features.
          </p>
        </div>

        <ComparisonTable casinos={casinosData} />

        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-dark mb-4">
            How to Choose the Best Casino for You
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-dark mb-2">🎁 Consider Bonuses</h3>
              <p>
                Compare welcome bonuses, reload bonuses, and VIP programs. 
                <strong>Win8</strong> offers the highest welcome bonus (200%), while 
                <strong>888 Casino</strong> has the best ongoing promotions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">⚡ Check Withdrawal Speed</h3>
              <p>
                All top casinos including <strong>Shwe Casino</strong>, <strong>888 Casino</strong>, 
                and <strong>Win8</strong> offer withdrawals within 1 hour.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">🎮 Game Selection</h3>
              <p>
                <strong>999 Casino</strong> has the most games (1000+), while 
                <strong>PGLucky88</strong> specializes in PG Soft games.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-dark mb-2">💳 Payment Methods</h3>
              <p>
                All top casinos support <strong>KBZ Pay</strong> and <strong>Wave Money</strong>, 
                making deposits quick and easy for Myanmar players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

