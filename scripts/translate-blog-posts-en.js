/**
 * Translate blog-posts-en.json from Myanmar to English using Anthropic Claude API.
 * Requires: ANTHROPIC_API_KEY
 * Run: node scripts/translate-blog-posts-en.js
 *
 * Options:
 *   LIMIT=N          - translate first N posts only (default: all)
 *   CONTENT_HTML_ONLY=1 - only translate content_html (skip title, excerpt, content)
 */
const fs = require('fs');
const path = require('path');

const EN_PATH = path.join(__dirname, '../data/blog-posts-en.json');
const LIMIT = parseInt(process.env.LIMIT || '0', 10) || 999;
const CONTENT_HTML_ONLY = process.env.CONTENT_HTML_ONLY === '1';
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const TAG_MAP = {
  'စလော့': 'Slots',
  'ကာစီနို': 'Casino',
  'ငါးပစ်': 'Fishing',
  'အခမဲ့ဘောနပ်စ်': 'Free Bonus',
  'အကျဉ်းချုပ်': 'Summary',
  'အနှစ်ချုပ်': 'Summary',
};

function mapTag(tag) {
  if (typeof tag !== 'string') return tag;
  return TAG_MAP[tag] || tag;
}

function hasMyanmar(text) {
  return typeof text === 'string' && /[\u1000-\u109F]/.test(text);
}

async function translateWithClaude(text) {
  if (!ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is required. Set it in your environment.');
  }
  const prompt = `Translate the following text from Myanmar (Burmese) to English. Preserve meaning and tone. Keep any HTML tags and URLs unchanged. Return ONLY the translated text, no explanation or extra text.

Text to translate:
${text}`;

  const models = [
    'claude-3-5-sonnet-20240620',
    'claude-3-sonnet-20240229',
    'claude-3-haiku-20240307',
  ];

  for (const model of models) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model,
          max_tokens: 8192,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`${res.status}: ${err}`);
      }
      const data = await res.json();
      const out = data.content?.[0]?.text?.trim() || '';
      return out;
    } catch (e) {
      console.warn(`  [${model}] ${e.message}`);
      continue;
    }
  }
  throw new Error('All models failed');
}

async function translateLongText(text, label) {
  if (!hasMyanmar(text)) return text;
  const chunkSize = 6000;
  if (text.length <= chunkSize) {
    return translateWithClaude(text);
  }
  const parts = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    const chunk = text.slice(i, i + chunkSize);
    const translated = await translateWithClaude(chunk);
    parts.push(translated);
    await delay(800);
  }
  return parts.join('');
}

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.error('Set ANTHROPIC_API_KEY in your environment, then run:');
    console.error('  node scripts/translate-blog-posts-en.js');
    console.error('Optional: LIMIT=3 node scripts/translate-blog-posts-en.js');
    process.exit(1);
  }

  const raw = fs.readFileSync(EN_PATH, 'utf8');
  const posts = JSON.parse(raw);
  const total = Math.min(posts.length, LIMIT);
  console.log(
    `Translating ${total} posts (Myanmar → English) via Anthropic...${CONTENT_HTML_ONLY ? ' [content_html only]' : ''}`
  );

  for (let i = 0; i < total; i++) {
    const post = posts[i];
    const needsContentHtml = hasMyanmar(post.content_html);
    if (CONTENT_HTML_ONLY && !needsContentHtml) continue;
    console.log(`[${i + 1}/${total}] id=${post.id} slug=${post.slug}`);

    try {
      if (!CONTENT_HTML_ONLY) {
        if (hasMyanmar(post.title)) {
          post.title = await translateWithClaude(post.title);
          await delay(600);
        }
        if (hasMyanmar(post.excerpt)) {
          post.excerpt = await translateWithClaude(post.excerpt);
          await delay(600);
        }
        if (hasMyanmar(post.content)) {
          post.content = await translateLongText(post.content, 'content');
          await delay(600);
        }
      }
      if (hasMyanmar(post.content_html)) {
        post.content_html = await translateLongText(post.content_html, 'content_html');
        await delay(600);
      }
      if (!CONTENT_HTML_ONLY && Array.isArray(post.tags)) {
        post.tags = post.tags.map(mapTag);
      }
      if (!CONTENT_HTML_ONLY && post.category && TAG_MAP[post.category]) {
        post.category = TAG_MAP[post.category];
      }
    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }
    // Save every 5 posts so progress is not lost if the script stops
    if ((i + 1) % 5 === 0) {
      fs.writeFileSync(EN_PATH, JSON.stringify(posts, null, 2), 'utf8');
      console.log(`  ... saved (${i + 1}/${total})`);
    }
  }

  fs.writeFileSync(EN_PATH, JSON.stringify(posts, null, 2), 'utf8');
  console.log('Done. Written to data/blog-posts-en.json');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
