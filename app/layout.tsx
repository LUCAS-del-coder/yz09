// Root layout - minimal, just for metadata
// import type { Metadata } from "next";
// import { getBaseUrl } from "@/lib/config";

// const baseUrl = getBaseUrl();

// export const metadata: Metadata = {
//   metadataBase: new URL(baseUrl),
//   title: {
//     default: "၂၀၂၅ မြန်မာ့အကောင်းဆုံး Online Casino များ | Myanmar Casino Reviews",
//     template: "%s | Myanmar Casino Reviews",
//   },
//   description: "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို စုံစမ်းစစ်ဆေးချက်များ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
