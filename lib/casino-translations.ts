import { Casino } from "@/types/casino";

interface CasinoTranslations {
  excerpt: string;
  pros: string[];
  cons: string[];
  bonuses: {
    [key: string]: {
      amount: string;
      description: string;
    };
  };
}

/**
 * Maps bonus type from JSON to translation key
 */
function getBonusKey(type: string): string {
  const typeMap: { [key: string]: string } = {
    "Welcome Bonus": "welcome",
    "Reload Bonus": "reload",
    "Free Spins": "freeSpins",
  };
  return typeMap[type] || "welcome";
}

/**
 * Merges casino data with translations
 * @param casino - Base casino data from casinos.json
 * @param translations - Translations object from next-intl (useTranslations or getTranslations)
 * @returns Casino object with translated fields
 */
export function getTranslatedCasino(
  casino: Casino,
  translations: any
): Casino {
  const casinoId = casino.id;
  const casinoTranslations = translations.raw(`casinos.${casinoId}`) as CasinoTranslations | undefined;

  if (!casinoTranslations) {
    // Fallback to original data if translations not found
    return casino;
  }

  // Map bonuses from translations
  const translatedBonuses = casino.bonuses.map((bonus) => {
    const bonusKey = getBonusKey(bonus.type);
    const bonusTranslation = casinoTranslations.bonuses?.[bonusKey];
    
    return {
      ...bonus,
      amount: bonusTranslation?.amount || bonus.amount,
      description: bonusTranslation?.description || bonus.description,
    };
  });

  return {
    ...casino,
    excerpt: casinoTranslations.excerpt || casino.excerpt,
    pros: casinoTranslations.pros || casino.pros,
    cons: casinoTranslations.cons || casino.cons,
    bonuses: translatedBonuses,
  };
}

/**
 * Translates an array of casinos
 * @param casinos - Array of casino data from casinos.json
 * @param translations - Translations object from next-intl
 * @returns Array of casinos with translated fields
 */
export function getTranslatedCasinos(
  casinos: Casino[],
  translations: any
): Casino[] {
  return casinos.map((casino) => getTranslatedCasino(casino, translations));
}
