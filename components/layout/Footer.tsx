"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-dark-lightest mt-20">
      {/* Disclaimer Banner */}
      <div className="bg-red-900/20 border-b border-red-500/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">⚠️</span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-400 mb-2">
                သတိပေးချက် - Disclaimer
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                <strong>Myanmar Casino Reviews</strong> သည် <strong>သတင်းအချက်အလက် ပေးသော ဝဘ်ဆိုဒ်</strong> ဖြစ်ပြီး 
                အွန်လိုင်း ကာစီနို ကစားရန် ဝန်ဆောင်မှု <strong>မပေးပါ</strong>။ 
                ဤဝဘ်ဆိုဒ်သည် <strong>18+</strong> အသက်အရွယ် သာရှိသူများအတွက် ဖြစ်ပါသည်။
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="/responsible-gaming"
                  className="text-gold hover:underline font-semibold"
                >
                  တာဝန်ယူမှုရှိသော ဂိမ်းကစားခြင်း →
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-gold"
                >
                  အသုံးပြုရန် စည်းမျဉ်းများ
                </a>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-gold"
                >
                  ကိုယ်ရေးလုံခြုံမှု
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-gold mb-4">Myanmar Casino Reviews</h3>
            <p className="text-gray-400 text-sm mb-4">
              မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ။
              ဘောနပ်စ် အများဆုံး၊ ငွေထုတ်ယူမှု မြန်ဆန်၊ 24/7 ဝန်ဆောင်မှု။
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-dark-lighter flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-sm">💬</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">အမြန်လင့်ခ်များ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  ပင်မစာမျက်နှာ
                </Link>
              </li>
              <li>
                <Link href="/review/top-myanmar-casinos" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  ကာစီနို နှိုင်းယှဉ်ချက်
                </Link>
              </li>
              <li>
                <Link href="/bonuses" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  ဘောနပ်စ်များ
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  အစပြုသူများအတွက် လမ်းညွှန်
                </Link>
              </li>
            </ul>
          </div>

          {/* Casino Reviews */}
          <div>
            <h4 className="text-white font-semibold mb-4">ကာစီနို စုံစမ်းစစ်ဆေးချက်များ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/review/shwe-casino" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  ရွှေ ကာစီနို
                </Link>
              </li>
              <li>
                <Link href="/review/888-casino" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  888 ကာစီနို
                </Link>
              </li>
              <li>
                <Link href="/review/777-casino" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  777 ကာစီနို
                </Link>
              </li>
              <li>
                <Link href="/review/win8-casino" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  Win8 ကာစီနို
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">ဥပဒေရေးရာ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  အသုံးပြုရန် စည်းမျဉ်းများ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  ကိုယ်ရေးလုံခြုံမှု
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  တာဝန်ယူမှုရှိသော ဂိမ်းကစားခြင်း
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  ဆက်သွယ်ရန်
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-lightest pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Myanmar Casino Reviews. အခွင့်အရေး အားလုံး လုံခြုံထားသည်။
            </p>
            <p className="text-gray-500 text-xs text-center md:text-right">
              18+ အသက်အရွယ်သာရှိသူများသာ ဂိမ်းကစားရန် ခွင့်ပြုထားသည်။
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

