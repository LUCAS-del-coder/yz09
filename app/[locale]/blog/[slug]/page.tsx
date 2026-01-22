import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import blogPostsData from "@/data/blog-posts.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPostsData.find((p: any) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "ဆောင်းပါး မတွေ့ရှိပါ | Article Not Found | Myanmar Casino Reviews",
    };
  }

  return {
    // ✅ 標題：緬甸語 + 英文
    title: `${post.title} | ${post.titleEn} | Myanmar Casino Reviews`,
    
    // ✅ 描述：緬甸語為主
    description: `${post.excerpt} ${post.excerptEn}`,
    
    // ✅ 關鍵字
    keywords: [
      ...post.tags,
      "Myanmar casino blog",
      "online casino news",
      "casino guide Myanmar"
    ].join(", "),
    
    // ✅ OpenGraph
    openGraph: {
      title: `${post.title} | ${post.titleEn}`,
      description: post.excerpt,
      type: 'article',
      locale: 'my_MM',
      url: `${baseUrl}/blog/${post.slug}`,
      publishedTime: post.publishDate,
      authors: [post.author],
      images: post.featuredImage ? [{
        url: `${baseUrl}${post.featuredImage}`,
        alt: `${post.title} - ${post.titleEn}`
      }] : [],
    },
    
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    }
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p: any) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "alternateName": post.titleEn,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified,
    "image": post.featuredImage ? `${baseUrl}${post.featuredImage}` : undefined,
    "inLanguage": "my-MM"
  };

  // 相關文章
  const relatedPosts = blogPostsData
    .filter((p: any) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold">首頁</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold">ဘလော့</Link>
          <span>/</span>
          <span className="text-white">{post.title}</span>
        </nav>

        {/* H1 標題 */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-gold">{post.title}</span>
          <span className="text-gray-400 text-2xl md:text-3xl block mt-2">| {post.titleEn}</span>
        </h1>

        {/* 文章資訊 */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.publishDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="text-gold">{post.category}</span>
        </div>

        {/* 特色圖片 */}
        {post.featuredImage && (
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.featuredImage}
              alt={`${post.title} - ${post.titleEn}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* 文章內容 */}
        <article className="prose prose-invert max-w-none mb-8">
          <div className="bg-dark-lighter rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              {post.excerpt}
            </p>
            <p className="text-gray-400 text-sm">
              {post.excerptEn}
            </p>
          </div>

          <div className="bg-dark-lighter rounded-xl p-6 mt-6">
            <h2 className="text-2xl font-bold text-white mb-4">ဆောင်းပါး အကြောင်း | About This Article</h2>
            <p className="text-gray-300 leading-relaxed">
              {post.content || `${post.title} အကြောင်း အပြည့်အစုံ ဆောင်းပါး။`}
            </p>
          </div>

          {/* 標籤 */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-gray-300 border border-dark-lightest"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        {/* 相關文章 */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white mb-6">ဆက်စပ်သော ဆောင်းပါးများ | Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedPosts.map((relatedPost: any) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-dark-lighter rounded-xl overflow-hidden hover:border-gold/50 border border-dark-lightest transition-all"
                >
                  {relatedPost.featuredImage && (
                    <div className="relative w-full h-32">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-1 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-400 text-xs">{relatedPost.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </div>
    </div>
  );
}

