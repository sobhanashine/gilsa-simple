import {Plus_Jakarta_Sans} from 'next/font/google';
import '@/app/globals.css';

const latin = Plus_Jakarta_Sans({subsets: ['latin'], variable: '--font-latin'});

export default async function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="ltr" className={`${latin.variable} ${latin.className}`}>
      <body className="bg-[#0a0a0b] text-white">
        {children}
      </body>
    </html>
  );
}
