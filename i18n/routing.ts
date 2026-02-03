import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { defaultLocale, locales } from './config';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
  // Disable automatic locale detection - always use default locale
  localeDetection: false,
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);

