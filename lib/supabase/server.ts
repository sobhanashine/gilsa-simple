import {cookies} from 'next/headers';
import {createServerClient} from '@supabase/ssr';
import {createClient as createSupabaseClient} from '@supabase/supabase-js';

export async function createServerSupabase() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({name, value, options}) => cookieStore.set(name, value, options));
          } catch {
            // Server components cannot set cookies; route handlers can.
          }
        }
      }
    }
  );
}

export function createAdminSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Missing Supabase service role configuration');
  return createSupabaseClient(url, key, {auth: {persistSession: false}});
}

export async function requireUser() {
  const supabase = await createServerSupabase();
  const {data, error} = await supabase.auth.getUser();
  if (error || !data.user) return {supabase, user: null};
  return {supabase, user: data.user};
}
