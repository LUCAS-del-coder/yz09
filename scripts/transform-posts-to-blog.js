#!/usr/bin/env node
/**
 * Transform scraped posts.json to blog-posts.json format for the project
 * - Convert external links to internal /blog/{slug}
 * - Clean excerpt (remove "[...]")
 * - Use content_html for full article display
 * - Fix lazy images (src from data-lazy-src), remove data-lazy-sizes/srcset
 * - Use blog-{id} slugs for reliable routing
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_PATH = path.join(__dirname, '../data/posts.json');
const BLOG_POSTS_PATH = path.join(__dirname, '../data/blog-posts.json');

// Decode HTML entities in title
function decodeHtmlEntities(str) {
  if (!str || typeof str !== 'string') return str;
  return str
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

// Extract first image URL from content_html
function extractFeaturedImage(contentHtml) {
  if (!contentHtml) return null;
  const imgMatch = contentHtml.match(/<img[^>]+src=["'](https:\/\/[^"']+)["']/i);
  if (imgMatch) return imgMatch[1];
  const srcMatch = contentHtml.match(/data-lazy-src=["'](https:\/\/[^"']+)["']/i);
  if (srcMatch) return srcMatch[1];
  return null;
}

// Replace img src with data-lazy-src value in content_html
// Remove data-lazy-sizes and data-lazy-srcset from all tags (img, source, etc.)
function fixLazyImages(html) {
  if (!html || typeof html !== 'string') return html;
  let out = html.replace(/<img([^>]*?)>/gi, (match, attrs) => {
    const lazySrcMatch = attrs.match(/data-lazy-src=["'](https:\/\/[^"']+)["']/i);
    if (!lazySrcMatch) return match;
    const lazySrc = lazySrcMatch[1];
    const newAttrs = attrs.replace(/(?<![a-z-])src="[^"]*"/i, 'src="' + lazySrc + '"');
    return '<img' + newAttrs + '>';
  });
  out = out.replace(/\s*data-lazy-sizes=["'][^"']*["']/gi, '');
  out = out.replace(/\s*data-lazy-srcset=["'][^"']*["']/gi, '');
  return out;
}

// Clean excerpt - remove "[...]" truncation
function cleanExcerpt(excerpt) {
  if (!excerpt || typeof excerpt !== 'string') return excerpt || '';
  return excerpt.replace(/\s*\[\.\.\.\]\s*$/, '').trim();
}

// Estimate read time from content length
function estimateReadTime(content) {
  if (!content) return '5 မိနစ်';
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.max(3, Math.ceil(wordCount / 150));
  return `${minutes} မိနစ်`;
}

// Use blog-{id} for reliable routing (Myanmar slugs cause URL encoding issues)
function transformPost(post, index) {
  const slug = `blog-${post.id}`;
  const title = decodeHtmlEntities(post.title);
  const excerpt = cleanExcerpt(post.excerpt);
  const featuredImage = extractFeaturedImage(post.content_html);

  return {
    id: post.id,
    slug,
    title,
    titleEn: title,
    excerpt,
    excerptEn: excerpt,
    content: post.content || '',
    content_html: post.content_html ? fixLazyImages(post.content_html) : null,
    author: 'Myanmar Casino Reviews Team',
    category: 'စလော့',
    categoryEn: 'Slots',
    tags: ['စလော့', 'ကာစီနို', 'slots', 'casino'],
    publishDate: post.date ? post.date.split('T')[0] : new Date().toISOString().split('T')[0],
    lastModified: post.date ? post.date.split('T')[0] : new Date().toISOString().split('T')[0],
    featuredImage: featuredImage ? (featuredImage.includes('https://mm7-res-1327201160.cos.ap-bangkok.myqcloud.com/resources/image/20240108/07e5152c7dc44c04921a454120c66fed.png') ? null: featuredImage) : null,
    readTime: estimateReadTime(post.content || post.content_html),
    readTimeEn: `${Math.ceil((post.content || '').split(/\s+/).length / 150) || 5} minutes`,
    link: `/blog/${slug}`,
  };
}

function main() {
  console.log('🔄 Transforming posts.json to blog-posts.json...');

  if (!fs.existsSync(POSTS_PATH)) {
    console.error('❌ posts.json not found at', POSTS_PATH);
    process.exit(1);
  }

  const posts = JSON.parse(fs.readFileSync(POSTS_PATH, 'utf-8'));
  const blogPosts = posts.map((post, i) => transformPost(post, i));

  fs.writeFileSync(BLOG_POSTS_PATH, JSON.stringify(blogPosts, null, 2), 'utf-8');

  console.log(`✅ Transformed ${blogPosts.length} posts`);
  console.log(`   - Output: ${BLOG_POSTS_PATH}`);
  console.log(`   - Links: /blog/blog-{id} (reliable, no encoding issues)`);
  console.log(`   - Excerpt: cleaned (no "[...]")`);
  console.log(`   - content_html: img src replaced with data-lazy-src value`);
}

main();
