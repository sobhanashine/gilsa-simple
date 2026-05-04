import {createServerSupabase} from './server';
import type {Category, Product} from '@/lib/types';

const fallbackProducts: Product[] = [
  {
    id: 'sample-1', slug: 'crystal-touch-switch', category_id: null,
    name_en: 'Crystal Touch Switch', name_fa: 'کلید لمسی کریستال', name_ar: 'مفتاح لمس كريستال',
    description_en: 'Premium glass touch switch with smart-home-ready control.',
    description_fa: 'کلید لمسی شیشه ای ممتاز آماده اتصال به خانه هوشمند.',
    description_ar: 'مفتاح لمس زجاجي فاخر جاهز للمنزل الذكي.',
    specs: {Voltage: '220V', Gang: '1-4', Finish: 'Glass'}, images: [], featured: true, published: true, sort_order: 0
  },
  {
    id: 'sample-2', slug: 'smart-dimmer-panel', category_id: null,
    name_en: 'Smart Dimmer Panel', name_fa: 'پنل دیمر هوشمند', name_ar: 'لوحة تعتيم ذكية',
    description_en: 'Elegant dimming for residential and hospitality projects.',
    description_fa: 'دیمر شیک برای پروژه های مسکونی و هتلی.',
    description_ar: 'تعتيم أنيق للمشاريع السكنية والفندقية.',
    specs: {Voltage: '220V', Load: 'LED', Color: 'White'}, images: [], featured: true, published: true, sort_order: 1
  },
  {
    id: 'sample-3', slug: 'iot-scene-switch', category_id: null,
    name_en: 'IoT Scene Switch', name_fa: 'کلید سناریو هوشمند', name_ar: 'مفتاح مشاهد ذكي',
    description_en: 'Programmable scene control for connected spaces.',
    description_fa: 'کنترل سناریو قابل برنامه ریزی برای فضاهای متصل.',
    description_ar: 'تحكم قابل للبرمجة للمساحات المتصلة.',
    specs: {Protocol: 'IoT ready', Gang: 'Scene', Finish: 'Matte'}, images: [], featured: true, published: true, sort_order: 2
  }
];

export async function getProducts(options: {featured?: boolean; limit?: number; category?: string; includeUnpublished?: boolean} = {}) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return fallbackProducts.slice(0, options.limit ?? fallbackProducts.length);
  }
  const supabase = await createServerSupabase();
  let query = supabase.from('products').select('*, categories(*)').order('sort_order', {ascending: true});
  if (!options.includeUnpublished) query = query.eq('published', true);
  if (options.featured) query = query.eq('featured', true);
  if (options.category) query = query.eq('categories.slug', options.category);
  if (options.limit) query = query.limit(options.limit);
  const {data, error} = await query;
  if (error) {
    console.error('Product query failed', error.message);
    return fallbackProducts.slice(0, options.limit ?? fallbackProducts.length);
  }
  return (data ?? []) as Product[];
}

export async function getCategories() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return [] as Category[];
  const supabase = await createServerSupabase();
  const {data, error} = await supabase.from('categories').select('*').order('sort_order');
  if (error) return [] as Category[];
  return (data ?? []) as Category[];
}
