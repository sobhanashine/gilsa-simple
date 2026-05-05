import {getTranslations} from 'next-intl/server';
import {Award, BadgeCheck, Globe2, Layers3, Palette, ShieldCheck} from 'lucide-react';

const metricKeys = ['market', 'warranty', 'support', 'models'] as const;
const proofKeys = ['producer', 'international', 'palette'] as const;
const productKeys = ['switches', 'safety', 'panels', 'access', 'audio', 'special'] as const;
const metricIcons = [Award, ShieldCheck, BadgeCheck, Layers3];

export default async function CompanySnapshot() {
  const t = await getTranslations('snapshot');

  return (
    <section className="relative isolate overflow-hidden px-5 py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_20%_30%,rgba(37,170,179,.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,.07),transparent_24%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr] lg:items-start">
          <div className="luxury-panel overflow-hidden rounded-[2.25rem] p-7 lg:sticky lg:top-28 md:p-10">
            <div className="absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[#25AAB3]/25 blur-3xl rtl:-left-24 rtl:right-auto" />
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#25AAB3]/30 bg-[#25AAB3]/10 px-4 py-2 text-sm font-bold text-[#7FE3EA]">
              <Globe2 size={16} />
              {t('eyebrow')}
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-[-.045em] md:text-6xl">{t('title')}</h2>
            <p className="mt-6 text-lg leading-9 text-white/65">{t('body')}</p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {proofKeys.map((key) => (
                <div key={key} className="rounded-3xl border border-white/10 bg-white/[.035] p-4">
                  <p className="text-sm font-bold leading-7 text-white/76">{t(`proof.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {metricKeys.map((key, index) => {
                const Icon = metricIcons[index];
                return (
                  <article key={key} className="gold-card group overflow-hidden rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-[#25AAB3]/60">
                    <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25AAB3]/12 text-[#7FE3EA] transition group-hover:bg-[#25AAB3] group-hover:text-black">
                        <Icon size={23} />
                      </span>
                      <span className="ms-auto text-right font-sans text-[10px] font-black uppercase tracking-[.18em] text-white/35 sm:text-xs sm:tracking-[.22em]">
                        Gilsa
                      </span>
                    </div>
                    <p className="text-4xl font-black tracking-[-.05em] text-white md:text-5xl">{t(`metrics.${key}.value`)}</p>
                    <h3 className="mt-3 text-xl font-black tracking-[-.025em]">{t(`metrics.${key}.title`)}</h3>
                    <p className="mt-2 leading-7 text-white/58">{t(`metrics.${key}.desc`)}</p>
                  </article>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101014]/86 p-6 shadow-[0_24px_90px_rgba(0,0,0,.28)] md:p-8">
              <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#25AAB3]/15 blur-3xl rtl:-right-24 rtl:left-auto" />
              <div className="relative mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 font-bold uppercase tracking-[.22em] text-[#25AAB3]">
                    <Palette size={16} />
                    {t('portfolio_eyebrow')}
                  </p>
                  <h3 className="text-3xl font-black tracking-[-.04em] md:text-4xl">{t('portfolio_title')}</h3>
                </div>
                <p className="max-w-sm text-white/55">{t('portfolio_desc')}</p>
              </div>
              <div className="relative grid gap-3 sm:grid-cols-2">
                {productKeys.map((key) => (
                  <div key={key} className="rounded-2xl border border-white/10 bg-white/[.035] px-4 py-3 text-sm font-bold leading-7 text-white/72">
                    {t(`products.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
