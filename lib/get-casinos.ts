import { Casino } from "@/types/casino";
import casinosEn from "@/data/casinos-en.json";
import casinosMy from "@/data/casinos-my.json";

/**
 * Get casino data for a specific locale
 * @param locale - The locale ('en' or 'my')
 * @returns Array of casinos in the specified language
 */
export function getCasinos(locale: string): Casino[] {
  if (locale === 'en') {
    return casinosEn as Casino[];
  }
  // Default to Myanmar
  return casinosMy as Casino[];
}

/**
 * Get a single casino by slug for a specific locale
 * @param slug - The casino slug
 * @param locale - The locale ('en' or 'my')
 * @returns Casino object or undefined
 */
export function getCasinoBySlug(slug: string, locale: string): Casino | undefined {
  const casinos = getCasinos(locale);
  return casinos.find((casino) => casino.slug === slug);
}

/**
 * Get a single casino by ID for a specific locale
 * @param id - The casino ID
 * @param locale - The locale ('en' or 'my')
 * @returns Casino object or undefined
 */
export function getCasinoById(id: string, locale: string): Casino | undefined {
  const casinos = getCasinos(locale);
  return casinos.find((casino) => casino.id === id);
}
