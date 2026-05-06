import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import {getBlogBySlug, getBlogs} from '@/lib/blogs';
import type {Locale} from '@/i18n/routing';
import {Link} from '@/i18n/routing';
import {Calendar, ChevronRight, Home} from 'lucide-react';

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({slug: blog.slug}));
}

export default async function BlogDetailPage({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations('blogs');
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  const title = locale === 'fa' ? blog.title_fa : locale === 'ar' ? blog.title_ar : blog.title_en;
  const content = locale === 'fa' ? blog.content_fa : locale === 'ar' ? blog.content_ar : blog.content_en;
  const date = new Date(blog.published_at).toLocaleDateString(
    locale === 'fa' ? 'fa-IR' : locale === 'ar' ? 'ar-SA' : 'en-US',
    {year: 'numeric', month: 'long', day: 'numeric'}
  );

  return (
    <section className="relative isolate overflow-hidden px-5 py-12 sm:py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(37,170,179,.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(37,170,179,.08),transparent_40%)] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
      <div className="absolute right-[10%] top-16 -z-10 h-48 w-48 rounded-full bg-[#25AAB3]/20 blur-3xl rtl:left-[10%] rtl:right-auto sm:top-24 sm:h-72 sm:w-72" />

      <div className="mx-auto max-w-4xl">
        <nav className="mb-8 flex items-center gap-2 text-xs font-medium text-white/40 sm:mb-16 sm:text-sm">
          <Link href="/" locale={locale} className="transition-colors hover:text-white">
            <Home size={16} />
          </Link>
          <ChevronRight size={14} className="rtl:rotate-180" />
          <Link href="/blogs" locale={locale} className="transition-colors hover:text-white">
            {t('title')}
          </Link>
          <ChevronRight size={14} className="rtl:rotate-180" />
          <span className="truncate text-white/80">{title}</span>
        </nav>

        <article>
          <header className="mb-8 sm:mb-12">
            <div className="mb-4 flex items-center gap-2 text-xs text-white/50 sm:mb-5 sm:text-sm">
              <Calendar size={14} />
              <time dateTime={blog.published_at}>{date}</time>
            </div>

            <h1 className="text-3xl font-black leading-[1.2] tracking-[-.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </header>

          {blog.image && (
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-2xl bg-white/5 shadow-[0_16px_48px_rgba(0,0,0,.45)] sm:mb-12 sm:rounded-3xl sm:shadow-[0_24px_80px_rgba(0,0,0,.45)]">
              <img src={blog.image} alt={title} className="h-full w-full object-cover" />
            </div>
          )}

          <div className="prose prose-invert max-w-none prose-p:text-base prose-p:leading-relaxed sm:prose-p:text-lg sm:prose-p:leading-8 md:prose-lg md:prose-p:text-xl md:prose-p:leading-9">
            {content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-5 text-white/75 sm:mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16 sm:pt-10">
            <Link
              href="/blogs"
              locale={locale}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#25AAB3] transition-colors hover:text-[#7FE3EA] sm:text-base"
            >
              ← {t('back_to_blogs')}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
