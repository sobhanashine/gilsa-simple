import { getAllPostsSlugs } from '@/lib/wp';

export async function generateStaticParams() {
  const slugs = await getAllPostsSlugs();
  return slugs.map((slug) => ({ slug }));
}
