import AdminShell from '@/components/admin-shell';
import ProductForm from '@/components/ProductForm';
import {getCategories} from '@/lib/supabase/queries';
export default async function NewProduct() { const categories = await getCategories(); return <AdminShell><ProductForm categories={categories}/></AdminShell>; }
