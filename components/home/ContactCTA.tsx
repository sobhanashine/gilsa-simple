import {getTranslations} from 'next-intl/server';
import {Camera, MessageCircle, Phone, ArrowRight} from 'lucide-react';
import {instagramHref, phones, whatsappHref} from '@/lib/constants';

export default async function ContactCTA() {
  const t = await getTranslations('contact_cta');
  return (
    <section id="contact-cta" className="relative isolate overflow-hidden bg-black px-5 py-24 md:py-32">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_0%,rgba(37,170,179,.1),transparent_24%),linear-gradient(135deg,#050505,#0a0a0a_42%,#000000)]" />
      <div className="absolute inset-0 -z-10 opacity-10 [background-image:linear-gradient(90deg,rgba(37,170,179,.2)_1px,transparent_1px),linear-gradient(rgba(37,170,179,.2)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[.02] p-6 shadow-[0_20px_80px_rgba(0,0,0,.8)] backdrop-blur-3xl md:p-12 lg:p-16">
          {/* Inner Decorative Glows */}
          <div className="absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#25AAB3] opacity-[0.12] blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#7FE3EA] opacity-[0.08] blur-[100px] pointer-events-none" />

          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            
            {/* Left Content */}
            <div className="animate-fade-up relative z-10">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#25AAB3]/30 bg-[#25AAB3]/10 px-5 py-2.5 text-sm font-bold tracking-wide text-[#7FE3EA] backdrop-blur-md shadow-[0_0_20px_rgba(37,170,179,.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7FE3EA] opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#7FE3EA]"></span>
                </span>
                {t('availability')}
              </div>
              
              <h2 className="text-4xl font-black leading-[1.1] tracking-[-.02em] md:text-6xl lg:text-[4rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                {t('title')}
              </h2>
              
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl font-medium">
                {t('subtitle')}
              </p>
              
              <a 
                href={instagramHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#25AAB3]/50 hover:text-[#7FE3EA] hover:shadow-[0_0_30px_rgba(37,170,179,.2)]"
              >
                <div className="rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-1.5 text-white transition-transform group-hover:scale-110">
                  <Camera size={16} strokeWidth={2.5}/>
                </div>
                @gilsatouch
              </a>
            </div>

            {/* Right Content - Cards */}
            <div className="relative z-10 grid gap-4 sm:grid-cols-2">
              {phones.map((phone, index) => (
                <a
                  key={phone.key}
                  href={phone.href}
                  className={`group relative flex flex-col justify-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#25AAB3]/40 hover:bg-white/[.06] hover:shadow-[0_10px_40px_rgba(37,170,179,.15)] ${phone.key === 'office' ? 'sm:col-span-2 sm:flex-row sm:items-center sm:justify-between sm:p-8' : ''}`}
                  style={{animationDelay: `${index * .1}s`}}
                >
                  <div className="absolute -right-8 -top-8 z-0 h-32 w-32 rounded-full bg-[#25AAB3] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                  
                  <div className={`relative z-10 flex ${phone.key === 'office' ? 'items-center gap-5' : 'flex-col gap-4'}`}>
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#7FE3EA] shadow-[inset_0_1px_1px_rgba(255,255,255,.1)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25AAB3]/20 group-hover:border-[#25AAB3]/40">
                      <Phone size={24} strokeWidth={2} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40 transition-colors group-hover:text-[#7FE3EA]/80">
                        {phone.key === 'mobile1' ? t('mobile1') : phone.key === 'mobile2' ? t('mobile2') : t('office')}
                      </span>
                      <span className={`font-black text-white tracking-tight ${phone.key === 'office' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                        {phone.display}
                      </span>
                    </div>
                  </div>
                  
                  {phone.key === 'office' && (
                    <div className="relative z-10 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all group-hover:border-[#25AAB3]/30 group-hover:bg-[#25AAB3]/10 group-hover:text-[#7FE3EA]">
                      <ArrowRight size={20} className="rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </div>
                  )}
                </a>
              ))}

              <a 
                href={whatsappHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative flex items-center justify-between overflow-hidden rounded-3xl border border-[#25D366]/20 bg-[#25D366]/[0.03] p-6 sm:col-span-2 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#25D366]/50 hover:bg-[#25D366]/[0.08] hover:shadow-[0_10px_40px_rgba(37,211,102,.15)]"
              >
                <div className="absolute -left-8 -bottom-8 z-0 h-40 w-40 rounded-full bg-[#25D366] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                
                <div className="relative z-10 flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] shadow-[inset_0_1px_1px_rgba(255,255,255,.1)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/50">
                    <MessageCircle size={26} strokeWidth={2} />
                  </span>
                  <span className="text-2xl md:text-3xl font-black tracking-tight text-white">
                    {t('whatsapp')}
                  </span>
                </div>

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all group-hover:border-[#25D366]/30 group-hover:bg-[#25D366]/10 group-hover:text-[#25D366]">
                  <ArrowRight size={20} className="rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
