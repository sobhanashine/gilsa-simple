import {getTranslations} from 'next-intl/server';
import {getBlogs} from '@/lib/blogs';
import type {Locale} from '@/i18n/routing';
import {Link} from '@/i18n/routing';
import {Calendar} from 'lucide-react';

export default async function BlogsPage({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations('blogs');
  const blogs = getBlogs();

  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl md:text-5xl lg:text-7xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-white/60 sm:mt-5 sm:text-base sm:leading-8 md:text-lg lg:text-xl">
          {t('subtitle')}
        </p>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            const title = locale === 'fa' ? blog.title_fa : locale === 'ar' ? blog.title_ar : blog.title_en;
            const excerpt = locale === 'fa' ? blog.excerpt_fa : locale === 'ar' ? blog.excerpt_ar : blog.excerpt_en;
            const date = new Date(blog.published_at).toLocaleDateString(
              locale === 'fa' ? 'fa-IR' : locale === 'ar' ? 'ar-SA' : 'en-US',
              {year: 'numeric', month: 'long', day: 'numeric'}
            );

            return (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                locale={locale}
                className="group luxury-panel flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.02] p-6 shadow-[0_8px_32px_rgba(0,0,0,.3)] transition-all hover:-translate-y-1 hover:border-[#25AAB3]/30 hover:bg-white/[.04] hover:shadow-[0_12px_48px_rgba(37,170,179,.15)]"
              >
                {blog.thumbnail && (
                  <div className="mb-5 aspect-video w-full overflow-hidden rounded-2xl bg-white/5">
                    <img src={blog.thumbnail} alt={title} className="h-full w-full object-cover" />
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Calendar size={14} />
                  <time dateTime={blog.published_at}>{date}</time>
                </div>

                <h2 className="mt-3 text-lg font-black leading-snug tracking-tight text-white transition-colors group-hover:text-[#7FE3EA] sm:text-xl md:text-2xl">
                  {title}
                </h2>

                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/60 sm:mt-3 sm:text-sm sm:leading-7 md:text-base">
                  {excerpt}
                </p>

                <div className="mt-4 text-xs font-bold text-[#25AAB3] transition-colors group-hover:text-[#7FE3EA] sm:mt-5 sm:text-sm">
                  {t('read_more')} →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
