'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import type {Locale} from '@/i18n/routing';

const labels: Record<Locale, string> = {en: 'EN', fa: 'فا', ar: 'عر'};
const locales: Locale[] = ['en', 'fa', 'ar'];

export default function LocaleSwitcher({locale}: {locale: Locale}) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(en|fa|ar)/, '') || '/';
  return <div className="flex rounded-full border border-white/15 bg-white/5 p-1 text-xs">{locales.map((item) => <Link key={item} href={`/${item}${suffix === '/' ? '' : suffix}`} className={`rounded-full px-2.5 py-1 ${item === locale ? 'bg-white text-black' : 'text-white/70 hover:text-white'}`}>{labels[item]}</Link>)}</div>;
}
