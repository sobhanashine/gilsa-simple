import {NextResponse} from 'next/server';
import {createAdminSupabase, requireUser} from '@/lib/supabase/server';
import {validateProduct} from '@/lib/validation';

export async function PUT(request: Request, {params}: {params: Promise<{id: string}>}) {
  const {user} = await requireUser();
  if (!user) return NextResponse.json({error: 'Unauthorized'}, {status: 401});
  const {id} = await params;
  const parsed = validateProduct(await request.json().catch(() => ({})));
  if ('error' in parsed) return NextResponse.json({error: parsed.error}, {status: 400});
  const {data, error} = await createAdminSupabase().from('products').update(parsed.value).eq('id', id).select().single();
  console.info('Admin product update', {user: user.id, id});
  return error ? NextResponse.json({error: error.message}, {status: 400}) : NextResponse.json({product: data});
}

export async function DELETE(_request: Request, {params}: {params: Promise<{id: string}>}) {
  const {user} = await requireUser();
  if (!user) return NextResponse.json({error: 'Unauthorized'}, {status: 401});
  const {id} = await params;
  const {error} = await createAdminSupabase().from('products').delete().eq('id', id);
  console.info('Admin product delete', {user: user.id, id});
  return error ? NextResponse.json({error: error.message}, {status: 400}) : NextResponse.json({success: true});
}
