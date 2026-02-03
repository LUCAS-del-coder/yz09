import { MetadataRoute } from 'next';
import casinosEn from '@/data/casinos-en.json';
import gamesData from '@/data/games.json';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/get-blog-posts';
import { locales, defaultLocale } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yz09.com';

  // Helper function to create URL with locale prefix
  const createUrl = (path: string, locale: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // Default locale (my) doesn't need prefix, others do
    if (locale === defaultLocale) {
      return `${baseUrl}${cleanPath}`;
    }
    return `${baseUrl}/${locale}${cleanPath}`;
  };

  // Helper function to create sitemap entries for all locales
  const createSitemapEntries = (
    path: string,
    lastModified: Date = new Date(),
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly',
    priority: number = 0.8
  ): MetadataRoute.Sitemap => {
    return locales.map((locale) => ({
      url: createUrl(path, locale),
      lastModified,
      changeFrequency,
      priority,
    }));
  };

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    ...createSitemapEntries('', new Date(), 'daily', 1),
    ...createSitemapEntries('/compare', new Date(), 'weekly', 0.9),
    ...createSitemapEntries('/bonuses', new Date(), 'weekly', 0.8),
    ...createSitemapEntries('/games', new Date(), 'weekly', 0.8),
    ...createSitemapEntries('/payment', new Date(), 'monthly', 0.7),
    ...createSitemapEntries('/guide', new Date(), 'monthly', 0.7),
    ...createSitemapEntries('/review/top-myanmar-casinos', new Date(), 'daily', 0.9),
    // Promotions pages
    ...createSitemapEntries('/promotions/welcome-bonus', new Date(), 'weekly', 0.9),
    ...createSitemapEntries('/promotions/daily-bonus', new Date(), 'weekly', 0.8),
    ...createSitemapEntries('/promotions/vip-program', new Date(), 'monthly', 0.8),
    // Guide pages
    ...createSitemapEntries('/guide/how-to-play', new Date(), 'monthly', 0.8),
    ...createSitemapEntries('/guide/payment-methods', new Date(), 'monthly', 0.8),
    ...createSitemapEntries('/guide/responsible-gaming', new Date(), 'monthly', 0.7),
  ];

  // Dynamic casino review pages (slug is the same in both languages)
  const casinoPages: MetadataRoute.Sitemap = casinosEn.flatMap((casino) =>
    createSitemapEntries(`/review/${casino.slug}`, new Date(), 'weekly', 0.8)
  );

  // Game category pages
  const gameCategoryPages: MetadataRoute.Sitemap = [
    ...createSitemapEntries('/games/slots', new Date(), 'weekly', 0.9),
    ...createSitemapEntries('/games/live-casino', new Date(), 'weekly', 0.9),
    ...createSitemapEntries('/games/fishing', new Date(), 'weekly', 0.9),
    ...createSitemapEntries('/games/table-games', new Date(), 'weekly', 0.9),
  ];

  // Dynamic game detail pages
  const gamePages: MetadataRoute.Sitemap = gamesData.flatMap((game: any) =>
    createSitemapEntries(`/games/${game.slug}`, new Date(), 'weekly', 0.8)
  );

  // Blog pages
  const blogListPage: MetadataRoute.Sitemap = createSitemapEntries('/blog', new Date(), 'daily', 0.8);

  // Dynamic blog post pages (each slug has entries for all locales)
  const blogPostsEn = getBlogPosts('en');
  const blogPostsMy = getBlogPosts('my');
  const allBlogSlugs = [...new Set([...blogPostsEn.map((p) => p.slug), ...blogPostsMy.map((p) => p.slug)])];
  const blogPostPages: MetadataRoute.Sitemap = allBlogSlugs.flatMap((slug) => {
    const post = getBlogPostBySlug(slug, 'my') ?? getBlogPostBySlug(slug, 'en');
    const lastMod = post ? new Date(post.lastModified || post.publishDate) : new Date();
    return createSitemapEntries(`/blog/${slug}`, lastMod, 'weekly', 0.7);
  });

  return [
    ...staticPages,
    ...casinoPages,
    ...gameCategoryPages,
    ...gamePages,
    ...blogListPage,
    ...blogPostPages,
  ];
}

