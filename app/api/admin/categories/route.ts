import {NextResponse} from 'next/server';
import {createAdminSupabase, requireUser} from '@/lib/supabase/server';
import {validateCategory} from '@/lib/validation';

export async function GET() { const {user} = await requireUser(); if (!user) return NextResponse.json({error: 'Unauthorized'}, {status: 401}); const {data, error} = await createAdminSupabase().from('categories').select('*').order('sort_order'); return error ? NextResponse.json({error: error.message}, {status: 500}) : NextResponse.json({categories: data ?? []}); }
export async function POST(request: Request) { const {user} = await requireUser(); if (!user) return NextResponse.json({error: 'Unauthorized'}, {status: 401}); const parsed = validateCategory(await request.json().catch(() => ({}))); if ('error' in parsed) return NextResponse.json({error: parsed.error}, {status: 400}); const {data, error} = await createAdminSupabase().from('categories').insert(parsed.value).select().single(); return error ? NextResponse.json({error: error.message}, {status: 400}) : NextResponse.json({category: data}); }
