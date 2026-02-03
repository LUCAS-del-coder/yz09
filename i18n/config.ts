export const locales = ['en', 'my'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'my';

export const localeNames: Record<Locale, string> = {
  my: 'Myanmar',
  en: 'English',
};
