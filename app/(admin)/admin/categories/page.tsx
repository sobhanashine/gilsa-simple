'use client';
import {useEffect, useState} from 'react';
import AdminShell from '@/components/admin-shell';
import type {Category} from '@/lib/types';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState('');
  async function load() { const res = await fetch('/api/admin/categories'); if (res.ok) setCategories((await res.json()).categories); }
  useEffect(() => { let cancelled = false; fetch('/api/admin/categories').then((res) => res.ok ? res.json() : {categories: []}).then((body) => { if (!cancelled) setCategories(body.categories); }); return () => { cancelled = true; }; }, []);
  async function submit(formData: FormData) { setError(''); const payload = Object.fromEntries(formData); const res = await fetch('/api/admin/categories', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload)}); if (!res.ok) setError((await res.json()).error); else { (document.getElementById('cat-form') as HTMLFormElement)?.reset(); load(); } }
  return <AdminShell><form id="cat-form" action={submit} className="mb-6 grid gap-3 rounded-2xl bg-white/5 p-5 md:grid-cols-5"><input name="slug" placeholder="slug" className="rounded bg-white/10 px-3 py-2"/><input name="name_en" required placeholder="name_en" className="rounded bg-white/10 px-3 py-2"/><input name="name_fa" required placeholder="name_fa" className="rounded bg-white/10 px-3 py-2"/><input name="name_ar" required placeholder="name_ar" className="rounded bg-white/10 px-3 py-2"/><button className="rounded bg-[#25AAB3] font-bold text-black">Add</button></form>{error && <p className="mb-4 text-red-300">{error}</p>}<div className="grid gap-3">{categories.map((c) => <div key={c.id} className="rounded-xl bg-white/5 p-4">{c.name_en} / {c.name_fa} / {c.name_ar}</div>)}</div></AdminShell>;
}
