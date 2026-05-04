import {NextResponse} from 'next/server';
import {createAdminSupabase, requireUser} from '@/lib/supabase/server';
import {validateProduct} from '@/lib/validation';

export async function GET() {
  const {user} = await requireUser();
  if (!user) return NextResponse.json({error: 'Unauthorized'}, {status: 401});
  const {data, error} = await createAdminSupabase().from('products').select('*, categories(*)').order('sort_order');
  return error ? NextResponse.json({error: 'Could not load products'}, {status: 500}) : NextResponse.json({products: data ?? []});
}

export async function POST(request: Request) {
  const {user} = await requireUser();
  if (!user) return NextResponse.json({error: 'Unauthorized'}, {status: 401});
  const parsed = validateProduct(await request.json().catch(() => ({})));
  if ('error' in parsed) return NextResponse.json({error: parsed.error}, {status: 400});
  const {data, error} = await createAdminSupabase().from('products').insert(parsed.value).select().single();
  console.info('Admin product create', {user: user.id, slug: 'value' in parsed ? parsed.value.slug : undefined});
  return error ? NextResponse.json({error: error.message}, {status: 400}) : NextResponse.json({product: data});
}
