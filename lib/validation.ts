import {safeText, slugify} from './utils';

export function validateContact(body: Record<string, unknown>) {
  const name = safeText(body.name, 120);
  const email = safeText(body.email, 180);
  const phone = safeText(body.phone, 60);
  const message = safeText(body.message, 2000);
  const locale = ['en', 'fa', 'ar'].includes(String(body.locale)) ? String(body.locale) : 'en';
  if (!name || !message || (!email && !phone)) return {error: 'Name, message, and phone or email are required'};
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return {error: 'Invalid email'};
  return {value: {name, email: email || null, phone: phone || null, message, locale}};
}

export function validateCategory(body: Record<string, unknown>) {
  const name_en = safeText(body.name_en, 140), name_fa = safeText(body.name_fa, 140), name_ar = safeText(body.name_ar, 140);
  const slug = slugify(safeText(body.slug, 160) || name_en);
  if (!slug || !name_en || !name_fa || !name_ar) return {error: 'Slug and all category names are required'};
  return {value: {slug, name_en, name_fa, name_ar, sort_order: Number(body.sort_order) || 0}};
}

export function validateProduct(body: Record<string, unknown>) {
  const name_en = safeText(body.name_en, 180), name_fa = safeText(body.name_fa, 180), name_ar = safeText(body.name_ar, 180);
  const slug = slugify(safeText(body.slug, 180) || name_en);
  if (!slug || !name_en || !name_fa || !name_ar) return {error: 'Slug and all product names are required'};
  const specs = typeof body.specs === 'object' && body.specs && !Array.isArray(body.specs) ? body.specs : {};
  const images = Array.isArray(body.images) ? body.images.filter((x): x is string => typeof x === 'string').slice(0, 12) : [];
  return {value: {slug, name_en, name_fa, name_ar, description_en: safeText(body.description_en, 3000), description_fa: safeText(body.description_fa, 3000), description_ar: safeText(body.description_ar, 3000), category_id: safeText(body.category_id, 80) || null, images, specs, featured: Boolean(body.featured), published: body.published !== false, sort_order: Number(body.sort_order) || 0}};
}
