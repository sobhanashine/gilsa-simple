import {Phone} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {Link, type Locale} from '@/i18n/routing';
import LocaleSwitcher from './LocaleSwitcher';
import {phones} from '@/lib/constants';

export default async function Header({locale}: {locale: Locale}) {
  const t = await getTranslations('nav');
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0b]/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" locale={locale} className="group flex items-center gap-3 text-xl font-black tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#C9922A]/35 bg-[#C9922A]/12 text-sm text-[#F3CA70] shadow-[0_0_24px_rgba(201,146,42,.14)]">G</span>
          <span>Gilsa <span className="text-[#C9922A]">Touch</span></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          <Link href="/" locale={locale} className="transition hover:text-[#C9922A]">{t('home')}</Link>
          <Link href="/products" locale={locale} className="transition hover:text-[#C9922A]">{t('products')}</Link>
          <Link href="/about" locale={locale} className="transition hover:text-[#C9922A]">{t('about')}</Link>
          <Link href="/contact" locale={locale} className="transition hover:text-[#C9922A]">{t('contact')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href={phones[0].href} className="hidden items-center gap-2 rounded-full bg-[#C9922A] px-4 py-2 text-sm font-black text-black shadow-[0_0_30px_rgba(201,146,42,.35)] transition hover:-translate-y-0.5 hover:bg-[#e1ac45] sm:inline-flex">
            <Phone size={15}/>{phones[0].display}
          </a>
          <LocaleSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
