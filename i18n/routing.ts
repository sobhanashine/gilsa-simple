import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'fa', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);
export const getDirection = (locale: Locale) => (locale === 'en' ? 'ltr' : 'rtl');
