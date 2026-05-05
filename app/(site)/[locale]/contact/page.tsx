import {getTranslations} from 'next-intl/server';
import ContactCTA from '@/components/home/ContactCTA';
import ContactForm from './ContactForm';
export default async function ContactPage() { const t = await getTranslations('contact'); return <><section className="px-5 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2"><div><h1 className="text-4xl font-black leading-tight tracking-[-.04em] sm:text-5xl md:text-7xl">{t('title')}</h1><p className="mt-5 text-base leading-8 text-white/60 sm:text-lg md:text-xl">{t('subtitle')}</p></div><ContactForm/></div></section><ContactCTA/></>; }
