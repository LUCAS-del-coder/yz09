import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import blogPostsData from "@/data/blog-posts.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: "ဘလော့ | Blog - Myanmar Casino Reviews",
  description: "အွန်လိုင်း ကာစီနို သတင်းများ၊ ဂိမ်း သုံးသပ်ချက်များ၊ နည်းဗျူဟာ လမ်းညွှန်များ နှင့် အခြား အသုံးဝင်သော အကြောင်းအရာများ။ Online casino news, game reviews, strategy guides and more useful content.",
  keywords: [
    "ကာစီနို ဘလော့",
    "အွန်လိုင်း ကာစီနို သတင်းများ",
    "ဂိမ်း သုံးသပ်ချက်",
    "casino blog Myanmar",
    "online casino news"
  ].join(", "),
  openGraph: {
    title: "ဘလော့ | Blog - Myanmar Casino Reviews",
    locale: 'my_MM',
    url: `${baseUrl}/blog`,
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  }
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">ဘလော့</span>
          <span className="text-white"> | Blog</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          အွန်လိုင်း ကာစီနို သတင်းများ၊ ဂိမ်း သုံးသပ်ချက်များ၊ နည်းဗျူဟာ လမ်းညွှန်များ
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsData.map((post: any) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all group"
            >
              {post.featuredImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={post.featuredImage}
                    alt={`${post.title} - ${post.titleEn}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-gold mb-2">{post.category} | {post.categoryEn}</div>
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.publishDate}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

