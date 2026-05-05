import {getTranslations} from 'next-intl/server';

export default async function StatsBar() {
  const t = await getTranslations('stats');
  const keys = ['followers', 'experience', 'products', 'support'] as const;

  return (
    <section className="px-5">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_26px_90px_rgba(0,0,0,.22)] md:grid-cols-4">
        {keys.map((key, index) => (
          <div key={key} className="animate-fade-up bg-[#121216]/92 p-6 text-center" style={{animationDelay: `${index * .07}s`}}>
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#25AAB3]" />
            <p className="font-extrabold leading-7 text-white/86">{t(key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
