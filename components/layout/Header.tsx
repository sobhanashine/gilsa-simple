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
        <Link href="/" locale={locale} dir="ltr" className="group flex items-center gap-3 font-sans text-xl font-black tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#25AAB3]/35 bg-[#25AAB3]/12 text-sm text-[#7FE3EA] shadow-[0_0_24px_rgba(37,170,179,.14)]">G</span>
          <span>Gilsa <span className="text-[#25AAB3]">Touch</span></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/75 md:flex">
          <Link href="/" locale={locale} className="transition hover:text-[#25AAB3]">{t('home')}</Link>
          <Link href="/products" locale={locale} className="transition hover:text-[#25AAB3]">{t('products')}</Link>
          <Link href="/about" locale={locale} className="transition hover:text-[#25AAB3]">{t('about')}</Link>
          <Link href="/contact" locale={locale} className="transition hover:text-[#25AAB3]">{t('contact')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href={phones[0].href} dir="ltr" className="hidden items-center gap-2 rounded-full bg-[#25AAB3] px-4 py-2 font-sans text-sm font-black text-black shadow-[0_0_30px_rgba(37,170,179,.35)] transition hover:-translate-y-0.5 hover:bg-[#2fc2cb] sm:inline-flex">
            <Phone size={15}/> <span>{phones[0].display}</span>
          </a>
          <LocaleSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
