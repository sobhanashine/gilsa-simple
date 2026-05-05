'use client';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {createClient} from '@/lib/supabase/client';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  async function submit(formData: FormData) {
    setError('');
    const email = String(formData.get('email') ?? '');
    const password = String(formData.get('password') ?? '');
    const {error} = await createClient().auth.signInWithPassword({email, password});
    if (error) setError('Invalid login.'); else router.push('/admin/products');
  }
  return <main className="flex min-h-screen items-center justify-center px-5"><form action={submit} className="grid w-full max-w-md gap-4 rounded-3xl border border-white/10 bg-white/[.04] p-8"><h1 className="text-3xl font-black">Gilsa Admin</h1><input name="email" type="email" required placeholder="Email" className="rounded-xl bg-white/10 px-4 py-3"/><input name="password" type="password" required placeholder="Password" className="rounded-xl bg-white/10 px-4 py-3"/><button className="rounded-xl bg-[#25AAB3] px-4 py-3 font-black text-black">Sign in</button>{error && <p className="text-red-300">{error}</p>}</form></main>;
}
