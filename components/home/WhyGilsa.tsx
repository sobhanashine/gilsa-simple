import {getTranslations} from 'next-intl/server';
import {BadgeCheck, Cpu, Gem, Headphones} from 'lucide-react';

const icons = [Gem, BadgeCheck, Cpu, Headphones];

export default async function WhyGilsa() {
  const t = await getTranslations('why');
  const rows = [1, 2, 3, 4] as const;

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-bold uppercase tracking-[.24em] text-[#25AAB3]">Engineering + Support</p>
          <h2 className="text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl md:text-6xl">{t('title')}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {rows.map((n, i) => {
            const Icon = icons[i];
            return (
              <article key={n} className="gold-card group rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-[#25AAB3]/60">
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-[#25AAB3]/12 text-[#25AAB3] shadow-[0_0_30px_rgba(37,170,179,.1)] transition group-hover:bg-[#25AAB3] group-hover:text-black">
                  <Icon />
                </div>
                <h3 className="text-xl font-black tracking-[-.025em]">{t(`r${n}_title`)}</h3>
                <p className="mt-3 leading-7 text-white/62">{t(`r${n}_desc`)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
