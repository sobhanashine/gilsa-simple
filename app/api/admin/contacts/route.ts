import {NextResponse} from 'next/server';
import {createAdminSupabase, requireUser} from '@/lib/supabase/server';
export async function GET() { const {user} = await requireUser(); if (!user) return NextResponse.json({error: 'Unauthorized'}, {status: 401}); const {data, error} = await createAdminSupabase().from('contacts').select('*').order('created_at', {ascending: false}); return error ? NextResponse.json({error: error.message}, {status: 500}) : NextResponse.json({contacts: data ?? []}); }
