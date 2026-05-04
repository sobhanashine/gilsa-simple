import {getTranslations} from 'next-intl/server';
import WhyGilsa from '@/components/home/WhyGilsa';
export default async function AboutPage() { const t = await getTranslations('about'); return <><section className="px-5 py-24"><div className="mx-auto max-w-4xl"><h1 className="text-5xl font-black md:text-7xl">{t('title')}</h1><p className="mt-8 text-xl leading-10 text-white/70">{t('body')}</p></div></section><WhyGilsa/></>; }
