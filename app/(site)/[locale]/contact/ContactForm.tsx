'use client';
import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [status, setStatus] = useState<string | null>(null);
  async function submit(formData: FormData) {
    setStatus(null);
    const payload = Object.fromEntries(formData);
    const res = await fetch('/api/contact', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({...payload, locale})});
    setStatus(res.ok ? t('success') : t('error'));
    if (res.ok) (document.getElementById('contact-form') as HTMLFormElement)?.reset();
  }
  return <form id="contact-form" action={submit} className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[.04] p-6"><input name="name" required maxLength={120} placeholder={t('name')} className="rounded-2xl bg-white/10 px-4 py-4 outline-none ring-[#C9922A] focus:ring-2"/><input name="email" type="email" placeholder={t('email')} className="rounded-2xl bg-white/10 px-4 py-4 outline-none ring-[#C9922A] focus:ring-2"/><input name="phone" placeholder={t('phone')} className="rounded-2xl bg-white/10 px-4 py-4 outline-none ring-[#C9922A] focus:ring-2"/><textarea name="message" required maxLength={2000} rows={5} placeholder={t('message')} className="rounded-2xl bg-white/10 px-4 py-4 outline-none ring-[#C9922A] focus:ring-2"/><button className="min-h-14 rounded-full bg-[#C9922A] font-black text-black">{t('send')}</button>{status && <p className="text-[#F3CA70]">{status}</p>}</form>;
}
