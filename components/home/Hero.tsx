import {getTranslations} from 'next-intl/server';
import {ArrowDown, CircuitBoard, Sparkles, Zap} from 'lucide-react';
import {Link, type Locale} from '@/i18n/routing';

export default async function Hero({locale}: {locale: Locale}) {
  const t = await getTranslations('hero');
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden px-5 py-24">
      <div className="animate-slow-pan absolute inset-0 -z-20 bg-[radial-gradient(circle_at_22%_28%,rgba(37,170,179,.18),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,.08),transparent_24%)]" />
      <div className="absolute right-[8%] top-24 -z-10 h-72 w-72 rounded-full bg-[#25AAB3]/25 blur-3xl rtl:left-[8%] rtl:right-auto" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.03fr_.97fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#25AAB3]/40 bg-[#25AAB3]/10 px-4 py-2 text-sm font-bold text-[#7FE3EA] shadow-[0_0_34px_rgba(37,170,179,.16)]">
            <Sparkles size={16}/>{t('badge')}
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.01] tracking-[-.055em] text-white md:text-7xl lg:text-8xl">
            {t('title')}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
            {t('subtitle')}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact-cta" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25AAB3] px-7 font-black text-black shadow-[0_0_50px_rgba(37,170,179,.38)] transition hover:-translate-y-0.5 hover:bg-[#2fc2cb]">
              {t('cta_call')} <ArrowDown className="ms-2" size={18}/>
            </a>
            <Link href="/products" locale={locale} className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/[.03] px-7 font-bold text-white transition hover:border-[#25AAB3] hover:bg-[#25AAB3]/10">
              {t('cta_products')}
            </Link>
          </div>
        </div>
        <div className="luxury-panel animate-fade-up relative min-h-[450px] overflow-hidden rounded-[2.25rem] p-5 md:p-7" style={{animationDelay: '.15s'}}>
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#25AAB3]/25 blur-3xl rtl:-left-24 rtl:right-auto" />
          <div className="absolute inset-x-10 top-10 h-10 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 text-xs font-bold text-white/65 rtl:left-auto rtl:right-7">
            <CircuitBoard size={14}/> IoT Ready
          </div>
          <div className="mx-auto mt-16 h-82 max-w-[20rem] rounded-[2.25rem] border border-white/30 bg-gradient-to-br from-white via-zinc-200 to-zinc-600 p-5 shadow-[inset_0_0_30px_rgba(0,0,0,.18),0_24px_80px_rgba(0,0,0,.45)]">
            <div className="h-full rounded-[1.7rem] bg-[#080809] p-7 shadow-[inset_0_0_45px_rgba(37,170,179,.08)]">
              <div className="mb-10 flex items-center justify-between">
                <div className="h-1.5 w-24 rounded-full bg-[#25AAB3] shadow-[0_0_22px_rgba(37,170,179,.75)]" />
                <Zap className="text-[#25AAB3]" size={20}/>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[0, .18, .34, .52].map((delay, i) => (
                  <div key={i} className="switch-glow aspect-square rounded-3xl border border-[#25AAB3]/35 bg-[radial-gradient(circle_at_50%_38%,rgba(37,170,179,.24),transparent_32%),rgba(255,255,255,.055)] shadow-[0_0_34px_rgba(37,170,179,.2)]" style={{animationDelay: `${delay}s`}} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/70 backdrop-blur rtl:left-auto rtl:right-7">41K+ social proof</div>
        </div>
      </div>
    </section>
  );
}
