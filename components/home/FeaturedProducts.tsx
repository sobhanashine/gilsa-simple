import {getTranslations} from 'next-intl/server';
import {getProducts} from '@/lib/supabase/queries';
import ProductGrid from '@/components/products/ProductGrid';
import type {Locale} from '@/i18n/routing';

export default async function FeaturedProducts({locale}: {locale: Locale}) {
  const t = await getTranslations('products');
  const products = await getProducts({featured: true, limit: 6});

  return (
    <section className="relative px-5 py-24">
      <div className="absolute inset-x-0 top-20 -z-10 h-64 bg-[radial-gradient(circle_at_50%_50%,rgba(37,170,179,.12),transparent_55%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[.24em] text-[#25AAB3]">Gilsa Touch</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.045em] md:text-6xl">{t('featured')}</h2>
          </div>
          <p className="max-w-md text-white/55">{t('subtitle')}</p>
        </div>
        {products.length ? <ProductGrid products={products} locale={locale} /> : <p className="text-white/60">{t('empty')}</p>}
      </div>
    </section>
  );
}
