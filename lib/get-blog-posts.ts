export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  content_html?: string;
  author: string;
  category: string;
  tags: string[];
  publishDate: string;
  lastModified: string;
  featuredImage?: string;
  readTime: string;
  link: string;
}

import blogPostsEn from "@/data/blog-posts-en.json";
import blogPostsMy from "@/data/blog-posts-my.json";

/**
 * Get blog posts for a specific locale
 * @param locale - The locale ('en' or 'my')
 * @returns Array of blog posts in the specified language
 */
export function getBlogPosts(locale: string): BlogPost[] {
  if (locale === "en") {
    return blogPostsEn as BlogPost[];
  }
  return blogPostsMy as BlogPost[];
}

/**
 * Get a single blog post by slug for a specific locale
 * @param slug - The post slug
 * @param locale - The locale ('en' or 'my')
 * @returns Blog post or undefined
 */
export function getBlogPostBySlug(slug: string, locale: string): BlogPost | undefined {
  const posts = getBlogPosts(locale);
  return posts.find((p) => p.slug === slug);
}

/**
 * Get all unique blog post slugs across locales (for sitemap)
 */
export function getAllBlogSlugs(): { slug: string }[] {
  const mySlugs = (blogPostsMy as BlogPost[]).map((p) => ({ slug: p.slug }));
  const enSlugs = (blogPostsEn as BlogPost[]).map((p) => ({ slug: p.slug }));
  const seen = new Set<string>();
  return [...mySlugs, ...enSlugs].filter(({ slug }) => {
    if (seen.has(slug)) return false;
    seen.add(slug);
    return true;
  });
}
