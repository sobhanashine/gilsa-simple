import {notFound} from 'next/navigation';
import AdminShell from '@/components/admin-shell';
import ProductForm from '@/components/ProductForm';
import {createAdminSupabase} from '@/lib/supabase/server';
import {getCategories} from '@/lib/supabase/queries';
import type {Product} from '@/lib/types';
export default async function EditProduct({params}: {params: Promise<{id: string}>}) { const {id} = await params; const [{data}, categories] = await Promise.all([createAdminSupabase().from('products').select('*').eq('id', id).single(), getCategories()]); if (!data) notFound(); return <AdminShell><ProductForm product={data as Product} categories={categories}/></AdminShell>; }
