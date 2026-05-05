import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {ClipboardCheck, Cog, Headset, Ruler} from 'lucide-react';

const serviceKeys = ['design', 'sampling', 'technical', 'budget'] as const;
const supportKeys = ['installation', 'quality', 'drawings', 'afterSales'] as const;
const serviceIcons = [Ruler, Cog, ClipboardCheck, Headset];

export default async function ServicesSection() {
  const t = await getTranslations('services');

  return (
    <section className="relative isolate overflow-hidden px-5 py-24">
      <div className="absolute inset-x-0 top-20 -z-10 h-80 bg-[radial-gradient(circle_at_50%_40%,rgba(37,170,179,.16),transparent_55%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[.86fr_1.14fr] lg:items-end">
          <div>
            <p className="mb-3 font-bold uppercase tracking-[.24em] text-[#25aab3]">{t('eyebrow')}</p>
            <h2 className="text-4xl font-black tracking-[-.045em] md:text-6xl">{t('title')}</h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-white/62">{t('body')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] shadow-[0_24px_90px_rgba(0,0,0,.28)]">
            <div className="relative aspect-[3/1] border-b border-white/10">
              <Image
                src="/company/gilsa-services.jpg"
                alt={t('image_alt_services')}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent rtl:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-black">{t('before_title')}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {serviceKeys.map((key, index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <div key={key} className="rounded-2xl border border-[#25aab3]/18 bg-[#25aab3]/[.055] p-4">
                      <Icon className="mb-4 text-[#25aab3]" size={22} />
                      <p className="font-bold leading-7 text-white/78">{t(`before.${key}`)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035] shadow-[0_24px_90px_rgba(0,0,0,.28)]">
            <div className="relative aspect-[3/1] border-b border-white/10">
              <Image
                src="/company/gilsa-company-profile.jpg"
                alt={t('image_alt_profile')}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent rtl:bg-gradient-to-l" />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-black">{t('after_title')}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {supportKeys.map((key) => (
                  <div key={key} className="rounded-2xl border border-white/10 bg-white/[.045] px-4 py-3 font-bold leading-7 text-white/74">
                    {t(`after.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
