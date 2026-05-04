import {getTranslations} from 'next-intl/server';
import {getProducts} from '@/lib/supabase/queries';
import ProductGrid from '@/components/products/ProductGrid';
import type {Locale} from '@/i18n/routing';

export default async function ProductsPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations('products');
  const products = await getProducts();
  return <section className="px-5 py-20"><div className="mx-auto max-w-7xl"><h1 className="text-5xl font-black md:text-7xl">{t('title')}</h1><p className="mt-5 text-xl text-white/60">{t('subtitle')}</p><div className="mt-12">{products.length ? <ProductGrid products={products} locale={locale}/> : <p>{t('empty')}</p>}</div></div></section>;
}
