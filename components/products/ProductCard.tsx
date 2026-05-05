import {getTranslations} from 'next-intl/server';
import {ArrowUpRight, Layers3} from 'lucide-react';
import {Link, type Locale} from '@/i18n/routing';
import type {Product} from '@/lib/types';

function localized(product: Product, locale: Locale) {
  return {
    name: locale === 'fa' ? product.name_fa : locale === 'ar' ? product.name_ar : product.name_en,
    desc: locale === 'fa' ? product.description_fa : locale === 'ar' ? product.description_ar : product.description_en
  };
}

export default async function ProductCard({product, locale}: {product: Product; locale: Locale}) {
  const t = await getTranslations('products');
  const item = localized(product, locale);
  const image = product.images?.[0];

  return (
    <article className="group overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.03))] shadow-[0_24px_80px_rgba(0,0,0,.18)] transition duration-300 hover:-translate-y-1 hover:border-[#25AAB3]/45">
      <div className="relative m-3 aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-zinc-50 via-zinc-300 to-zinc-700">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="relative h-36 w-28 rounded-[1.7rem] border border-white/60 bg-[#0a0a0b] p-4 shadow-[0_18px_60px_rgba(0,0,0,.35)]">
              <div className="mb-5 h-1 w-14 rounded-full bg-[#25AAB3]" />
              <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((i) => <span key={i} className="aspect-square rounded-2xl border border-[#25AAB3]/45 bg-white/5" />)}
              </div>
            </div>
          </div>
        )}
        <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-xs font-black text-black backdrop-blur rtl:left-auto rtl:right-4">
          Gilsa
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#7FE3EA]"><Layers3 size={14}/> Smart Switch</div>
        <h3 className="text-2xl font-black tracking-[-.03em] text-white">{item.name}</h3>
        <p className="mt-3 line-clamp-2 min-h-12 text-white/58">{item.desc}</p>
        <p className="mt-5 font-bold text-[#7FE3EA]">{t('contact_for_price')}</p>
        <Link href={`/products/${product.slug}`} locale={locale} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-4 py-2 text-sm font-bold text-white transition group-hover:border-[#25AAB3] group-hover:bg-[#25AAB3]/10">
          {t('view_details')}<ArrowUpRight size={16}/>
        </Link>
      </div>
    </article>
  );
}
