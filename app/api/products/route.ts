import {NextRequest, NextResponse} from 'next/server';
import {getProducts} from '@/lib/supabase/queries';
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const products = await getProducts({category: params.get('category') ?? undefined, featured: params.get('featured') === 'true', limit: Number(params.get('limit')) || undefined});
  return NextResponse.json({products, total: products.length});
}
