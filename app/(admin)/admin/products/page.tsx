import Link from 'next/link';
import AdminShell from '@/components/admin-shell';
import {createAdminSupabase, requireUser} from '@/lib/supabase/server';
import type {Product} from '@/lib/types';

export default async function ProductsAdmin() {
  const {user} = await requireUser();
  if (!user) return null;
  const {data} = await createAdminSupabase().from('products').select('*, categories(*)').order('sort_order');
  const products = (data ?? []) as Product[];
  return <AdminShell><div className="mb-5"><Link href="/admin/products/new" className="rounded-full bg-[#C9922A] px-5 py-3 font-black text-black">Add New Product</Link></div><div className="overflow-x-auto rounded-2xl border border-white/10"><table className="w-full text-sm"><thead className="bg-white/10"><tr><th className="p-3 text-left">Image</th><th className="p-3 text-left">Name EN</th><th className="p-3 text-left">Category</th><th className="p-3">Featured</th><th className="p-3">Published</th><th className="p-3">Edit</th></tr></thead><tbody>{products.map((p) => <tr key={p.id} className="border-t border-white/10"><td className="p-3"><div className="h-12 w-12 rounded bg-white/20"/></td><td className="p-3 font-bold">{p.name_en}</td><td className="p-3">{p.categories?.name_en ?? '-'}</td><td className="p-3 text-center">{p.featured ? 'Yes' : 'No'}</td><td className="p-3 text-center">{p.published ? 'Yes' : 'No'}</td><td className="p-3 text-center"><Link className="text-[#F3CA70]" href={`/admin/products/${p.id}`}>Edit</Link></td></tr>)}</tbody></table></div></AdminShell>;
}
