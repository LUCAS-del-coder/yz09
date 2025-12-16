export interface Casino {
  id: string;
  name: string;
  nameMm: string;
  slug: string;
  rating: number;
  featured: boolean;
  ctaLink: string;
  ctaBrand: string;
  logo: string;
  hero: string;
  excerpt: string;
  pros: string[];
  cons: string[];
  features: {
    games: string;
    providers: string;
    minDeposit: string;
    withdrawalTime: string;
    support: string;
    license: string;
  };
  bonuses: Array<{
    type: string;
    amount: string;
    description: string;
  }>;
  paymentMethods: string[];
  gameCategories: string[];
}

