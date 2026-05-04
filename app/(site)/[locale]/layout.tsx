import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Plus_Jakarta_Sans, Vazirmatn} from 'next/font/google';
import '@/app/globals.css';
import {getDirection, locales, routing, type Locale} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyCallButton from '@/components/ui/CallButton';

const latin = Plus_Jakarta_Sans({subsets: ['latin'], variable: '--font-latin'});
const arabic = Vazirmatn({subsets: ['arabic'], variable: '--font-arabic'});

type Props = {children: React.ReactNode; params: Promise<{locale: string}>};

export function generateStaticParams() { return locales.map((locale) => ({locale})); }

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  return {
    title: locale === 'fa' ? 'گیلسا | کلید لمسی هوشمند' : locale === 'ar' ? 'جيلسا | مفاتيح لمس ذكية' : 'Gilsa | Smart Touch Switches',
    description: locale === 'fa' ? 'تولید کننده کلید لمسی هوشمند مدرن در ایران' : locale === 'ar' ? 'مصنّع مفاتيح اللمس الذكية الحديثة في إيران' : 'Iranian manufacturer of modern smart touch switches',
    alternates: {canonical: `/${locale}`, languages: {en: '/en', fa: '/fa', ar: '/ar'}}
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const typedLocale = locale as Locale;
  const messages = await getMessages();

  return (
    <html lang={typedLocale} dir={getDirection(typedLocale)} className={`${latin.variable} ${arabic.variable} ${typedLocale === 'en' ? latin.className : arabic.className}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header locale={typedLocale} />
          <main>{children}</main>
          <Footer locale={typedLocale} />
          <StickyCallButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
