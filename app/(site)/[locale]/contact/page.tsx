import {getTranslations} from 'next-intl/server';
import ContactCTA from '@/components/home/ContactCTA';
import ContactForm from './ContactForm';
export default async function ContactPage() { const t = await getTranslations('contact'); return <><section className="px-5 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2"><div><h1 className="text-5xl font-black md:text-7xl">{t('title')}</h1><p className="mt-5 text-xl text-white/60">{t('subtitle')}</p></div><ContactForm/></div></section><ContactCTA/></>; }
