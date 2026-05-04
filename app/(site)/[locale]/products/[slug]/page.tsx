import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import ContactCTA from '@/components/home/ContactCTA';
import {getProducts} from '@/lib/supabase/queries';
import type {Locale} from '@/i18n/routing';

export default async function ProductDetail({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations('products');
  const product = (await getProducts()).find((item) => item.slug === slug);
  if (!product) notFound();
  const name = locale === 'fa' ? product.name_fa : locale === 'ar' ? product.name_ar : product.name_en;
  const desc = locale === 'fa' ? product.description_fa : locale === 'ar' ? product.description_ar : product.description_en;
  return <><section className="px-5 py-20"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2"><div className="flex min-h-[420px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-zinc-100 to-zinc-600 text-7xl font-black text-black/20">G</div><div><h1 className="text-5xl font-black md:text-7xl">{name}</h1><p className="mt-6 text-xl leading-9 text-white/65">{desc}</p><p className="mt-6 text-2xl font-black text-[#F3CA70]">{t('contact_for_price')}</p><h2 className="mt-10 text-2xl font-black">{t('specs')}</h2><dl className="mt-4 grid gap-3">{Object.entries(product.specs ?? {}).map(([key, value]) => <div key={key} className="flex justify-between rounded-2xl bg-white/5 p-4"><dt className="text-white/55">{key}</dt><dd className="font-bold">{value}</dd></div>)}</dl></div></div></section><ContactCTA/></>;
}
