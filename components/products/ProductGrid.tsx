import ProductCard from './ProductCard';
import type {Locale} from '@/i18n/routing';
import type {Product} from '@/lib/types';

export default function ProductGrid({products, locale}: {products: Product[]; locale: Locale}) {
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} locale={locale} />)}</div>;
}
