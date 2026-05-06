import {getTranslations} from 'next-intl/server';
import {Camera, Phone} from 'lucide-react';
import {Link, type Locale} from '@/i18n/routing';
import {instagramHref, phones} from '@/lib/constants';

export default async function Footer({locale}: {locale: Locale}) {
  const t = await getTranslations();
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h2 dir="ltr" className="inline-block text-2xl font-black font-sans">Gilsa <span className="text-[#25AAB3]">Touch</span></h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/60 sm:text-base">{t('footer.tagline')}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/70 sm:text-base">
          <Link href="/products" locale={locale} className="leading-6 transition hover:text-white">{t('nav.products')}</Link>
          <Link href="/blogs" locale={locale} className="leading-6 transition hover:text-white">{t('nav.blogs')}</Link>
          <Link href="/about" locale={locale} className="leading-6 transition hover:text-white">{t('nav.about')}</Link>
          <Link href="/contact" locale={locale} className="leading-6 transition hover:text-white">{t('nav.contact')}</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm text-white/70 sm:text-base">
          <a
            dir="ltr"
            className="inline-flex w-fit items-center gap-2 break-all font-sans leading-6 transition hover:text-white"
            href={phones[0].href}
          >
            <Phone size={16} className="shrink-0" />
            <span>{phones[0].display}</span>
          </a>
          <a
            dir="ltr"
            className="inline-flex w-fit items-center gap-2 break-all font-sans leading-6 transition hover:text-white"
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={16} className="shrink-0" />
            <span>@gilsatouch</span>
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center gap-x-1 gap-y-2 text-xs leading-6 text-white/40 sm:text-sm">
        <span dir="ltr" className="font-sans">© {new Date().getFullYear()} Gilsa.</span>
        <span>{t('footer.rights')}</span>
      </div>
    </footer>
  );
}
