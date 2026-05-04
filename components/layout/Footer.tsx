import {getTranslations} from 'next-intl/server';
import {Camera, Phone} from 'lucide-react';
import {Link, type Locale} from '@/i18n/routing';
import {instagramHref, phones} from '@/lib/constants';

export default async function Footer({locale}: {locale: Locale}) {
  const t = await getTranslations();
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><h2 className="text-2xl font-black">Gilsa <span className="text-[#C9922A]">Touch</span></h2><p className="mt-3 max-w-sm text-white/60">{t('footer.tagline')}</p></div>
        <div className="flex flex-col gap-2 text-white/70"><Link href="/products" locale={locale}>{t('nav.products')}</Link><Link href="/about" locale={locale}>{t('nav.about')}</Link><Link href="/contact" locale={locale}>{t('nav.contact')}</Link></div>
        <div className="space-y-3 text-white/70"><a className="flex items-center gap-2" href={phones[0].href}><Phone size={16}/>{phones[0].display}</a><a className="flex items-center gap-2" href={instagramHref} target="_blank" rel="noreferrer"><Camera size={16}/>@gilsatouch</a></div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-white/40">© {new Date().getFullYear()} Gilsa. {t('footer.rights')}</p>
    </footer>
  );
}
