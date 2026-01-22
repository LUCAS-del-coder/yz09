import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import blogPostsData from "@/data/blog-posts.json";
import { getBaseUrl } from "@/lib/config";

const baseUrl = getBaseUrl();

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      url: `${baseUrl}/blog`,
    },
    alternates: {
      canonical: `${baseUrl}/blog`,
      languages: {
        'my-MM': `${baseUrl}/blog`,
        'en-US': `${baseUrl}/en/blog`,
      }
    }
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-gold">{t("heading")}</span>
          <span className="text-white"> | Blog</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          {t("subheading")}
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

