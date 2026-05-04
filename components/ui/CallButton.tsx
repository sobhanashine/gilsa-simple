'use client';
import {MessageCircle, Phone} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {phones, whatsappHref} from '@/lib/constants';

export default function StickyCallButton() {
  const t = useTranslations('sticky_call');
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 rtl:right-auto rtl:left-5 md:hidden">
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 font-black text-black shadow-lg"><MessageCircle size={20}/><span>{t('whatsapp')}</span></a>
      <a href={phones[0].href} className="animate-pulse-slow flex h-14 items-center gap-2 rounded-full bg-[#C9922A] px-5 font-black text-black shadow-lg"><Phone size={20}/><span>{t('label')}</span></a>
    </div>
  );
}
