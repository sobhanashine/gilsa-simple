'use client';
import {MessageCircle, Phone, X} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {phones, whatsappHref} from '@/lib/constants';

export default function StickyCallButton() {
  const t = useTranslations('sticky_call');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 rtl:right-auto rtl:left-5 md:hidden">
      <div
        aria-hidden={!isOpen}
        className={`flex flex-col items-end gap-3 transition-all duration-200 ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isOpen ? 0 : -1}
          className="flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-5 font-black text-black shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          <MessageCircle size={20} />
          <span>{t('whatsapp')}</span>
        </a>
        <a
          href={phones[0].href}
          tabIndex={isOpen ? 0 : -1}
          className="flex h-14 items-center gap-2 rounded-full bg-[#25AAB3] px-5 font-black text-black shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          <Phone size={20} />
          <span>{t('label')}</span>
        </a>
      </div>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        onClick={() => setIsOpen((value) => !value)}
        className="animate-pulse-slow flex h-14 items-center gap-2 rounded-full bg-[#25AAB3] px-5 font-black text-black shadow-lg transition hover:bg-[#2fc2cb]"
      >
        {isOpen ? <X size={20} /> : <Phone size={20} />}
        <span>{t('label')}</span>
      </button>
    </div>
  );
}
