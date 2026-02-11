import { MetadataRoute } from 'next';
import casinosEn from '@/data/casinos-en.json';
import gamesData from '@/data/games.json';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/get-blog-posts';
import { locales, defaultLocale } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'https://yz09.com').replace(/\/+$/, '');

  const createUrl = (path: string, locale: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (locale === defaultLocale) {
      return `${baseUrl}${cleanPath}`;
    }
    return `${baseUrl}/${locale}${cleanPath}`;
  };

  const languageAlternates = (path: string): Record<string, string> => {
    const out: Record<string, string> = {};
    for (const locale of locales) {
      out[locale] = createUrl(path, locale);
    }
    return out;
  };

  const createSitemapEntry = (
    path: string,
    lastModified: Date = new Date(),
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly',
    priority: number = 0.8
  ): MetadataRoute.Sitemap[0] => ({
    url: createUrl(path, defaultLocale),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: languageAlternates(path),
    },
  });

  const staticPages: MetadataRoute.Sitemap = [
    createSitemapEntry('', new Date(), 'daily', 1),
    createSitemapEntry('/compare', new Date(), 'weekly', 0.9),
    createSitemapEntry('/bonuses', new Date(), 'weekly', 0.8),
    createSitemapEntry('/games', new Date(), 'weekly', 0.8),
    createSitemapEntry('/payment', new Date(), 'monthly', 0.7),
    createSitemapEntry('/guide', new Date(), 'monthly', 0.7),
    createSitemapEntry('/review/top-myanmar-casinos', new Date(), 'daily', 0.9),
    createSitemapEntry('/promotions', new Date(), 'weekly', 0.9),
    createSitemapEntry('/promotions/welcome-bonus', new Date(), 'weekly', 0.9),
    createSitemapEntry('/promotions/daily-bonus', new Date(), 'weekly', 0.8),
    createSitemapEntry('/promotions/vip-program', new Date(), 'monthly', 0.8),
    createSitemapEntry('/guide/how-to-play', new Date(), 'monthly', 0.8),
    createSitemapEntry('/guide/payment-methods', new Date(), 'monthly', 0.8),
    createSitemapEntry('/guide/responsible-gaming', new Date(), 'monthly', 0.7),
  ];

  const casinoPages: MetadataRoute.Sitemap = casinosEn.map((casino: { slug: string }) =>
    createSitemapEntry(`/review/${casino.slug}`, new Date(), 'weekly', 0.8)
  );

  const gameCategoryPaths = ['/games/slots', '/games/live-casino', '/games/fishing', '/games/table-games'];
  const gameCategoryPages: MetadataRoute.Sitemap = gameCategoryPaths.map((path) =>
    createSitemapEntry(path, new Date(), 'weekly', 0.9)
  );

  const gamePages: MetadataRoute.Sitemap = gamesData.map((game: { slug: string }) =>
    createSitemapEntry(`/games/${game.slug}`, new Date(), 'weekly', 0.8)
  );

  const blogListPage: MetadataRoute.Sitemap = [createSitemapEntry('/blog', new Date(), 'daily', 0.8)];

  const allBlogSlugs = [...new Set([...getBlogPosts('en').map((p) => p.slug), ...getBlogPosts('my').map((p) => p.slug)])];
  const blogPostPages: MetadataRoute.Sitemap = allBlogSlugs.map((slug) => {
    const post = getBlogPostBySlug(slug, 'my') ?? getBlogPostBySlug(slug, 'en');
    const lastMod = post ? new Date(post.lastModified || post.publishDate) : new Date();
    return createSitemapEntry(`/blog/${slug}`, lastMod, 'weekly', 0.7);
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
