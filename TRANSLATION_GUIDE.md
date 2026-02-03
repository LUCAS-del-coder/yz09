# Translation Guide for Next-intl

This guide explains how to update all pages in `app/[locale]/` to use Next-intl translations.

## Translation Files

Translation files are located in `messages/`:
- `messages/en.json` - English translations
- `messages/my.json` - Myanmar translations

## How to Update Pages

### 1. Server Components (Pages)

For server components, use `getTranslations`:

```typescript
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tCommon = await getTranslations({ locale, namespace: "common" });
  
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{tCommon("home")}</p>
    </div>
  );
}
```

### 2. Client Components

For client components, use `useTranslations`:

```typescript
"use client";
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations("common");
  
  return <button>{t("playNow")}</button>;
}
```

## Translation Namespaces

- `common` - Common UI elements (buttons, labels, navigation)
- `home` - Home page content
- `games` - Games pages content
- `notFound` - 404 page content
- Add more namespaces as needed for other pages

## Steps to Update Each Page

1. **Add translations to JSON files** - Add all text strings to both `en.json` and `my.json`
2. **Update metadata** - Replace hardcoded metadata with `generateMetadata` function using translations
3. **Update page content** - Replace hardcoded text with `t("key")` calls
4. **Update params** - Ensure params are awaited: `const { locale } = await params;`

## Example: Updating a Page

### Before:
```typescript
export const metadata: Metadata = {
  title: "စလော့ဂိမ်းများ",
  description: "Myanmar Casino Reviews..."
};

export default function Page() {
  return <h1>စလော့ဂိမ်းများ</h1>;
}
```

### After:
```typescript
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  
  return {
    title: t("slotsTitle"),
    description: t("slotsDescription"),
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "games" });
  
  return <h1>{t("slotsHeading")}</h1>;
}
```

## Pages That Need Updates

All pages in `app/[locale]/` need to be updated:
- ✅ `page.tsx` (Home) - Partially updated
- ✅ `not-found.tsx` - Updated
- ✅ `games/slots/page.tsx` - Updated (example)
- ⏳ `games/page.tsx`
- ⏳ `games/live-casino/page.tsx`
- ⏳ `games/fishing/page.tsx`
- ⏳ `games/table-games/page.tsx`
- ⏳ `games/[slug]/page.tsx`
- ⏳ `bonuses/page.tsx`
- ⏳ `compare/page.tsx`
- ⏳ `contact/page.tsx`
- ⏳ `payment/page.tsx`
- ⏳ `guide/page.tsx`
- ⏳ `guide/how-to-play/page.tsx`
- ⏳ `guide/payment-methods/page.tsx`
- ⏳ `guide/responsible-gaming/page.tsx`
- ⏳ `privacy/page.tsx`
- ⏳ `terms/page.tsx`
- ⏳ `responsible-gaming/page.tsx`
- ⏳ `review/[slug]/page.tsx`
- ⏳ `review/top-myanmar-casinos/page.tsx`
- ⏳ `blog/page.tsx`
- ⏳ `blog/[slug]/page.tsx`
- ⏳ `promotions/welcome-bonus/page.tsx`
- ⏳ `promotions/daily-bonus/page.tsx`
- ⏳ `promotions/vip-program/page.tsx`

## Components That Need Updates

- ✅ `components/layout/Header.tsx` - Updated
- ⏳ `components/sections/Hero.tsx`
- ⏳ `components/sections/FeaturedCasinos.tsx`
- ⏳ `components/sections/FeaturedGames.tsx`
- ⏳ `components/sections/LatestBonuses.tsx`
- ⏳ `components/sections/InternalLinksSection.tsx`
- ⏳ `components/sections/FAQ.tsx`
- ⏳ `components/ui/GameCard.tsx`
- ⏳ Other UI components with hardcoded text
