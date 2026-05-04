import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {createServerClient} from '@supabase/ssr';
import {routing} from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')) {
    const response = NextResponse.next();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => request.cookies.getAll(),
          setAll: (cookiesToSet) => cookiesToSet.forEach(({name, value, options}) => response.cookies.set(name, value, options))
        }
      }
    );
    const {data: {user}} = await supabase.auth.getUser();
    if (!user) return NextResponse.redirect(new URL('/admin/login', request.url));
    return response;
  }
  return intlMiddleware(request);
}

export const config = {matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']};
