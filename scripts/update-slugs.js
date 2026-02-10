#!/usr/bin/env node
/**
 * Update blog slugs to SEO-friendly English-title slugs.
 * - Source of truth: data/blog-posts-en.json titles
 * - Applies same slug to EN and MY datasets by matching id
 * - Updates both `slug` and `link` fields
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EN_PATH = path.join(__dirname, "../data/blog-posts-en.json");
const MY_PATH = path.join(__dirname, "../data/blog-posts-my.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildSlugMap(enPosts) {
  const used = new Set();
  const slugById = new Map();

  for (const post of enPosts) {
    let base = toSlug(post.title || "");
    if (!base) base = `post-${post.id}`;

    let candidate = base;
    let n = 2;
    while (used.has(candidate)) {
      candidate = `${base}-${n}`;
      n += 1;
    }

    used.add(candidate);
    slugById.set(post.id, candidate);
  }

  return slugById;
}

function applySlugs(posts, slugById, label) {
  let changed = 0;
  for (const post of posts) {
    const slug = slugById.get(post.id);
    if (!slug) {
      throw new Error(`${label}: missing English title source for id=${post.id}`);
    }
    const link = `/blog/${slug}`;
    if (post.slug !== slug || post.link !== link) {
      post.slug = slug;
      post.link = link;
      changed += 1;
    }
  }
  return changed;
}

function main() {
  const enPosts = readJson(EN_PATH);
  const myPosts = readJson(MY_PATH);

  const slugById = buildSlugMap(enPosts);
  const changedEn = applySlugs(enPosts, slugById, "EN");
  const changedMy = applySlugs(myPosts, slugById, "MY");

  writeJson(EN_PATH, enPosts);
  writeJson(MY_PATH, myPosts);

  console.log(`Updated EN posts: ${changedEn}`);
  console.log(`Updated MY posts: ${changedMy}`);
  console.log(`Total slugs: ${slugById.size}`);
  console.log("Done.");
}

main();
