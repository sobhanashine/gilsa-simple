import {getTranslations} from 'next-intl/server';
import CompanySnapshot from '@/components/home/CompanySnapshot';
import ServicesSection from '@/components/home/ServicesSection';
import WhyGilsa from '@/components/home/WhyGilsa';
export default async function AboutPage() { const t = await getTranslations('about'); return <><section className="px-5 py-24"><div className="mx-auto max-w-4xl"><h1 className="text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl md:text-7xl">{t('title')}</h1><p className="mt-8 text-base leading-8 text-white/70 sm:text-lg md:text-xl md:leading-10">{t('body')}</p></div></section><CompanySnapshot/><ServicesSection/><WhyGilsa/></>; }
