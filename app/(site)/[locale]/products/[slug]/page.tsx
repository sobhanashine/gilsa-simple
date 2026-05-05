import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import ContactCTA from '@/components/home/ContactCTA';
import {getProducts} from '@/lib/supabase/queries';
import type {Locale} from '@/i18n/routing';
import {PhoneCall, CheckCircle2, ChevronRight, Home} from 'lucide-react';
import Image from 'next/image';
import {Link} from '@/i18n/routing';

export default async function ProductDetail({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const {locale, slug} = await params;
  const t = await getTranslations('products');
  const product = (await getProducts()).find((item) => item.slug === slug);
  
  if (!product) notFound();
  
  const name = locale === 'fa' ? product.name_fa : locale === 'ar' ? product.name_ar : product.name_en;
  const desc = locale === 'fa' ? product.description_fa : locale === 'ar' ? product.description_ar : product.description_en;
  const categoryName = product.categories ? (locale === 'fa' ? product.categories.name_fa : locale === 'ar' ? product.categories.name_ar : product.categories.name_en) : null;
  const primaryImage = product.images && product.images.length > 0 ? product.images[0] : null;

  return (
    <>
      <section className="relative isolate overflow-hidden px-5 py-20 md:py-32">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(37,170,179,.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(37,170,179,.08),transparent_40%)] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />
        <div className="absolute right-[10%] top-24 -z-10 h-72 w-72 rounded-full bg-[#25AAB3]/20 blur-3xl rtl:left-[10%] rtl:right-auto" />
        
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="mb-10 flex items-center gap-2 text-sm font-medium text-white/40 sm:mb-16">
            <Link href="/" locale={locale} className="transition-colors hover:text-white">
              <Home size={16} />
            </Link>
            <ChevronRight size={14} className="rtl:rotate-180" />
            <Link href="/products" locale={locale} className="transition-colors hover:text-white">
              {t('title')}
            </Link>
            <ChevronRight size={14} className="rtl:rotate-180" />
            <span className="truncate text-white/80">{name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start lg:gap-16">
            
            {/* Product Image Side */}
            <div className="luxury-panel relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2.5rem] p-8 shadow-[0_24px_80px_rgba(0,0,0,.45)] md:p-12">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,.05),transparent_60%)]" />
              {primaryImage ? (
                <Image 
                  src={primaryImage} 
                  alt={name} 
                  fill 
                  className="object-contain p-8 drop-shadow-[0_20px_40px_rgba(0,0,0,.5)]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-3xl border border-white/10 bg-white/[.02] shadow-[inset_0_0_40px_rgba(255,255,255,.03)]">
                  <span className="text-9xl font-black text-white/10 mix-blend-overlay">G</span>
                </div>
              )}
              
              {/* Decorative Corner Elements */}
              <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-[#25AAB3]/20 blur-2xl" />
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            </div>

            {/* Product Info Side */}
            <div className="flex flex-col">
              {categoryName && (
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#25AAB3]/30 bg-[#25AAB3]/10 px-4 py-2 text-sm font-bold text-[#7FE3EA]">
                  {categoryName}
                </div>
              )}
              
              <h1 className="text-4xl font-black leading-[1.1] tracking-[-.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {name}
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
                {desc}
              </p>

              {/* CTA Section */}
              <div className="mt-10 border-t border-white/10 pt-10">
                <a 
                  href="#contact-cta" 
                  className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-full bg-[#25AAB3] px-8 text-lg font-black text-black shadow-[0_0_40px_rgba(37,170,179,.3)] transition-all hover:-translate-y-1 hover:bg-[#2fc2cb] hover:shadow-[0_0_50px_rgba(37,170,179,.4)] sm:w-auto"
                >
                  <PhoneCall size={22} />
                  {t('contact_for_price')}
                </a>
              </div>

              {/* Specifications */}
              {product.specs && Object.keys(product.specs).length > 0 && (
                <div className="mt-16">
                  <h2 className="mb-6 text-2xl font-black tracking-[-.02em] text-white">{t('specs')}</h2>
                  <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div 
                        key={key} 
                        className="gold-card flex flex-col gap-1.5 rounded-2xl p-5 transition-colors hover:border-[#25AAB3]/40 hover:bg-white/[.04]"
                      >
                        <dt className="flex items-center gap-2 text-sm font-bold text-white/50">
                          <CheckCircle2 size={16} className="text-[#25AAB3]" />
                          {key}
                        </dt>
                        <dd className="ps-6 font-bold text-white/90">{String(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      
      <ContactCTA />
    </>
  );
}
