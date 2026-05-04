import {NextResponse} from 'next/server';
import {Resend} from 'resend';
import {createAdminSupabase} from '@/lib/supabase/server';
import {validateContact} from '@/lib/validation';

const hits = new Map<string, {count: number; reset: number}>();
function limited(ip: string) { const now = Date.now(); const hit = hits.get(ip); if (!hit || hit.reset < now) { hits.set(ip, {count: 1, reset: now + 60000}); return false; } hit.count += 1; return hit.count > 5; }

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
  if (limited(ip)) { console.warn('Contact rate limited', ip); return NextResponse.json({error: 'Too many requests'}, {status: 429}); }
  const parsed = validateContact(await request.json().catch(() => ({})));
  if ('error' in parsed) { console.warn('Invalid contact submission'); return NextResponse.json({error: parsed.error}, {status: 400}); }
  const supabase = createAdminSupabase();
  const {error} = await supabase.from('contacts').insert(parsed.value);
  if (error) return NextResponse.json({error: 'Could not save contact'}, {status: 500});
  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({from: 'Gilsa Website <onboarding@resend.dev>', to: process.env.CONTACT_TO_EMAIL, subject: 'New Gilsa contact lead', text: `${parsed.value.name}\n${parsed.value.phone ?? ''}\n${parsed.value.email ?? ''}\n\n${parsed.value.message}`}).catch(() => null);
  }
  return NextResponse.json({success: true});
}
