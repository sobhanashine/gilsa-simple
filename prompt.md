# Claude Code Prompt — Gilsa Touch Website

## Project Overview

Build a **trilingual (English / Persian / Arabic) product catalog and lead-generation website** for **Gilsa Touch** (گیلسا), an Iranian manufacturer of modern smart touch switches (کلید لمسی هوشمند). The website must drive phone calls and WhatsApp contacts — this is the single most important conversion goal.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **i18n**: `next-intl` (EN / FA / AR — FA and AR are RTL)
- **Database & Auth & Storage**: Supabase (PostgreSQL + Auth + Storage)
- **Deployment**: Vercel (serverless, no custom server)
- **Email** (optional): Resend for contact form submissions
- **Font**: Use Google Fonts — a premium sans-serif for EN (e.g. DM Sans or Plus Jakarta Sans) and a beautiful Persian-compatible font for FA/AR (e.g. Vazirmatn from Google Fonts)

---

## Brand Information

- **Brand name**: Gilsa / گیلسا / جيلسا
- **Product**: Smart touch light switches — modern, premium, IoT-ready
- **Tone**: Modern, trustworthy, premium tech manufacturer
- **Contact numbers**:
  - Mobile 1: +98 910 313 8438
  - Mobile 2: +98 912 515 4955
  - Office: +98 21 2214 1590
  - Office 2: +98 21 2214 1591
- **Instagram**: @gilsatouch
- **Primary CTA**: Call us / WhatsApp — customers must be able to reach the company in one tap

---

## Design Direction

Design a **luxury-industrial** aesthetic:
- Dark backgrounds (near-black `#0A0A0B`) with warm gold/brass accents (`#C9922A`) and clean white text
- Think: premium electronics brand, Apple-level whitespace discipline but with warmth
- Large hero typography, crisp product photography placeholders
- Subtle grid texture or dot-grid background pattern
- Smooth entrance animations (fade-up, stagger)
- RTL layout must feel equally polished — not an afterthought

---

## Project Structure

```
/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx            ← sets <html lang dir>
│   │   ├── page.tsx              ← homepage
│   │   ├── products/
│   │   │   ├── page.tsx          ← product catalog
│   │   │   └── [slug]/
│   │   │       └── page.tsx      ← product detail
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── admin/                    ← NO locale prefix, protected
│   │   ├── layout.tsx            ← auth guard
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx          ← list all products
│   │   │   ├── new/page.tsx      ← create product
│   │   │   └── [id]/page.tsx     ← edit product
│   │   ├── categories/
│   │   │   └── page.tsx
│   │   └── contacts/
│   │       └── page.tsx          ← view contact form submissions
│   └── api/
│       ├── products/
│       │   └── route.ts
│       ├── contact/
│       │   └── route.ts
│       └── admin/
│           ├── products/
│           │   └── route.ts
│           └── categories/
│               └── route.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── LocaleSwitcher.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ContactCTA.tsx        ← THE most important component
│   │   ├── FeaturedProducts.tsx
│   │   ├── WhyGilsa.tsx
│   │   └── StatsBar.tsx
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductGallery.tsx
│   └── ui/
│       ├── CallButton.tsx        ← reusable sticky call button
│       ├── WhatsAppButton.tsx
│       └── LanguageSwitcher.tsx
├── messages/
│   ├── en.json
│   ├── fa.json
│   └── ar.json
├── lib/
│   ├── supabase/
│   │   ├── client.ts             ← browser client
│   │   ├── server.ts             ← server client
│   │   └── middleware.ts
│   └── utils.ts
├── middleware.ts                  ← locale detection + admin auth
└── supabase/
    └── schema.sql                ← full DB setup script
```

---

## Database Schema (Supabase / PostgreSQL)

Create this file at `supabase/schema.sql`:

```sql
-- Categories
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name_en TEXT NOT NULL,
  name_fa TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  name_en TEXT NOT NULL,
  name_fa TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  description_en TEXT,
  description_fa TEXT,
  description_ar TEXT,
  specs JSONB DEFAULT '{}',         -- { "voltage": "220V", "gang": "2", ... }
  images TEXT[] DEFAULT '{}',       -- array of Supabase Storage URLs
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact form submissions
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  locale TEXT DEFAULT 'en',
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Public can read published products and categories
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read products" ON products FOR SELECT USING (published = true);

-- Only authenticated admins can write
CREATE POLICY "Admin all categories" ON categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin all products" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin read contacts" ON contacts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Public insert contacts" ON contacts FOR INSERT WITH CHECK (true);

-- Storage bucket for product images (run in Supabase dashboard)
-- Create bucket named: product-images (public)
```

---

## i18n Translation Keys

### `messages/en.json`
```json
{
  "nav": {
    "home": "Home",
    "products": "Products",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "badge": "Smart Home Solutions",
    "title": "Modern Touch Switches for the Smart Home",
    "subtitle": "Premium-grade smart touch switches engineered for reliability, elegance, and seamless smart home integration.",
    "cta_call": "Call Us Now",
    "cta_products": "View Products"
  },
  "contact_cta": {
    "title": "Ready to upgrade your space?",
    "subtitle": "Our team is available to answer your questions and help you choose the right switches for your project.",
    "call_now": "Call Now",
    "whatsapp": "WhatsApp",
    "office": "Office Line",
    "or": "or"
  },
  "sticky_call": {
    "label": "Call Us"
  },
  "why": {
    "title": "Why Gilsa?",
    "r1_title": "4+ Years of Manufacturing",
    "r1_desc": "Trusted by contractors and homeowners across Iran.",
    "r2_title": "Modern Design",
    "r2_desc": "Sleek touch surfaces that complement any interior.",
    "r3_title": "Smart Integration",
    "r3_desc": "Compatible with leading smart home systems.",
    "r4_title": "After-sales Support",
    "r4_desc": "Dedicated team ready to assist you."
  },
  "stats": {
    "followers": "41K+ Instagram Followers",
    "experience": "4+ Years Experience",
    "products": "Wide Product Range",
    "support": "Full After-sales Support"
  },
  "products": {
    "title": "Our Products",
    "subtitle": "Explore our full range of smart touch switches",
    "view_details": "View Details",
    "all_categories": "All",
    "contact_for_price": "Contact for pricing"
  },
  "contact": {
    "title": "Get in Touch",
    "subtitle": "We'd love to hear from you",
    "name": "Full Name",
    "email": "Email Address",
    "phone": "Phone Number",
    "message": "Your Message",
    "send": "Send Message",
    "success": "Message sent! We'll be in touch shortly.",
    "phones_title": "Call or WhatsApp",
    "address_title": "Our Office"
  },
  "about": {
    "title": "About Gilsa",
    "body": "Gilsa is a leading Iranian manufacturer of modern smart touch switches. With over 4 years of experience, we design and produce premium switches that combine elegant aesthetics with smart home technology. Our products are trusted by contractors, architects, and homeowners across Iran."
  },
  "footer": {
    "tagline": "Modern smart switches for every space.",
    "rights": "All rights reserved."
  }
}
```

### `messages/fa.json`
```json
{
  "nav": {
    "home": "خانه",
    "products": "محصولات",
    "about": "درباره ما",
    "contact": "تماس"
  },
  "hero": {
    "badge": "راهکارهای خانه هوشمند",
    "title": "کلیدهای لمسی مدرن برای خانه هوشمند",
    "subtitle": "کلیدهای لمسی هوشمند با کیفیت برتر، طراحی‌شده برای قابلیت اطمینان، زیبایی و ادغام آسان با سیستم خانه هوشمند.",
    "cta_call": "همین حالا تماس بگیرید",
    "cta_products": "مشاهده محصولات"
  },
  "contact_cta": {
    "title": "آماده ارتقای فضای خود هستید؟",
    "subtitle": "تیم ما آماده پاسخگویی به سوالات شما و کمک در انتخاب کلیدهای مناسب پروژه‌تان است.",
    "call_now": "تماس بگیرید",
    "whatsapp": "واتساپ",
    "office": "خط اداری",
    "or": "یا"
  },
  "sticky_call": {
    "label": "تماس"
  },
  "why": {
    "title": "چرا گیلسا؟",
    "r1_title": "بیش از ۴ سال تجربه تولید",
    "r1_desc": "مورد اعتماد پیمانکاران و صاحبان خانه در سراسر ایران.",
    "r2_title": "طراحی مدرن",
    "r2_desc": "سطوح لمسی شیک که با هر دکوراسیونی هماهنگ می‌شوند.",
    "r3_title": "ادغام با خانه هوشمند",
    "r3_desc": "سازگار با سیستم‌های پیشرو خانه هوشمند.",
    "r4_title": "پشتیبانی پس از فروش",
    "r4_desc": "تیم متخصص آماده کمک به شما."
  },
  "stats": {
    "followers": "بیش از ۴۱ هزار دنبال‌کننده اینستاگرام",
    "experience": "بیش از ۴ سال تجربه",
    "products": "طیف گسترده محصولات",
    "support": "پشتیبانی کامل پس از فروش"
  },
  "products": {
    "title": "محصولات ما",
    "subtitle": "سبد کامل کلیدهای لمسی هوشمند ما را کاوش کنید",
    "view_details": "مشاهده جزئیات",
    "all_categories": "همه",
    "contact_for_price": "برای قیمت تماس بگیرید"
  },
  "contact": {
    "title": "تماس با ما",
    "subtitle": "مشتاق شنیدن از شما هستیم",
    "name": "نام کامل",
    "email": "آدرس ایمیل",
    "phone": "شماره تلفن",
    "message": "پیام شما",
    "send": "ارسال پیام",
    "success": "پیام ارسال شد! به زودی با شما تماس می‌گیریم.",
    "phones_title": "تماس یا واتساپ",
    "address_title": "دفتر ما"
  },
  "about": {
    "title": "درباره گیلسا",
    "body": "گیلسا یکی از تولیدکنندگان پیشرو کلیدهای لمسی هوشمند مدرن در ایران است. با بیش از ۴ سال تجربه، ما کلیدهای برتری طراحی و تولید می‌کنیم که زیبایی ظاهری را با فناوری خانه هوشمند ترکیب می‌کنند."
  },
  "footer": {
    "tagline": "کلیدهای لمسی هوشمند مدرن برای هر فضایی.",
    "rights": "تمامی حقوق محفوظ است."
  }
}
```

### `messages/ar.json`
```json
{
  "nav": {
    "home": "الرئيسية",
    "products": "المنتجات",
    "about": "من نحن",
    "contact": "اتصل بنا"
  },
  "hero": {
    "badge": "حلول المنزل الذكي",
    "title": "مفاتيح لمس حديثة للمنزل الذكي",
    "subtitle": "مفاتيح لمس ذكية عالية الجودة مصممة للموثوقية والأناقة والتكامل السلس مع أنظمة المنزل الذكي.",
    "cta_call": "اتصل بنا الآن",
    "cta_products": "عرض المنتجات"
  },
  "contact_cta": {
    "title": "هل أنت مستعد لترقية مساحتك؟",
    "subtitle": "فريقنا متاح للإجابة على أسئلتك ومساعدتك في اختيار المفاتيح المناسبة لمشروعك.",
    "call_now": "اتصل الآن",
    "whatsapp": "واتساب",
    "office": "خط المكتب",
    "or": "أو"
  },
  "sticky_call": {
    "label": "اتصل"
  },
  "why": {
    "title": "لماذا جيلسا؟",
    "r1_title": "أكثر من 4 سنوات من التصنيع",
    "r1_desc": "موثوق به من قبل المقاولين وأصحاب المنازل في جميع أنحاء إيران.",
    "r2_title": "تصميم عصري",
    "r2_desc": "أسطح لمس أنيقة تتناسب مع أي ديكور داخلي.",
    "r3_title": "تكامل المنزل الذكي",
    "r3_desc": "متوافق مع أنظمة المنزل الذكي الرائدة.",
    "r4_title": "دعم ما بعد البيع",
    "r4_desc": "فريق متخصص جاهز لمساعدتك."
  },
  "stats": {
    "followers": "أكثر من 41 ألف متابع على إنستغرام",
    "experience": "أكثر من 4 سنوات خبرة",
    "products": "مجموعة واسعة من المنتجات",
    "support": "دعم كامل بعد البيع"
  },
  "products": {
    "title": "منتجاتنا",
    "subtitle": "استكشف مجموعتنا الكاملة من مفاتيح اللمس الذكية",
    "view_details": "عرض التفاصيل",
    "all_categories": "الكل",
    "contact_for_price": "اتصل للسعر"
  },
  "contact": {
    "title": "تواصل معنا",
    "subtitle": "يسعدنا الاستماع إليك",
    "name": "الاسم الكامل",
    "email": "البريد الإلكتروني",
    "phone": "رقم الهاتف",
    "message": "رسالتك",
    "send": "إرسال الرسالة",
    "success": "تم إرسال الرسالة! سنتواصل معك قريباً.",
    "phones_title": "اتصل أو واتساب",
    "address_title": "مكتبنا"
  },
  "about": {
    "title": "عن جيلسا",
    "body": "جيلسا هي شركة إيرانية رائدة في تصنيع مفاتيح اللمس الذكية الحديثة. مع أكثر من 4 سنوات من الخبرة، نصمم وننتج مفاتيح متميزة تجمع بين الجماليات الأنيقة وتقنية المنزل الذكي."
  },
  "footer": {
    "tagline": "مفاتيح لمس ذكية حديثة لكل مساحة.",
    "rights": "جميع الحقوق محفوظة."
  }
}
```

---

## Middleware (`middleware.ts`)

```ts
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const intlMiddleware = createMiddleware({
  locales: ['en', 'fa', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export async function middleware(request: NextRequest) {
  // Protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: { get: (name) => request.cookies.get(name)?.value } }
    );
    const { data: { session } } = await supabase.auth.getSession();
    if (!session && !request.nextUrl.pathname.startsWith('/admin/login')) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    return NextResponse.next();
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
```

---

## MOST IMPORTANT COMPONENT — ContactCTA

This is the single most business-critical component. Build it as `components/home/ContactCTA.tsx`.

### Requirements:
1. **Full-width section** on the homepage — visually dramatic, impossible to miss
2. **Three large tap-to-call buttons**, one per phone number, with the phone icon
3. **One WhatsApp button** linking to `https://wa.me/989103138438` (first mobile number)
4. **Display all numbers clearly** in large, readable text
5. **On mobile**: buttons should be full-width, at least 56px tall — thumb-friendly
6. **Color**: Use a high-contrast gold/brass background (`#C9922A`) OR keep dark with glowing gold buttons — make it visually pop against the rest of the page
7. **Microcopy**: Include "Available Saturday–Thursday, 9am–6pm" in all three languages

### Phone numbers to display:
| Label | Number | Tel link |
|-------|--------|----------|
| Mobile 1 | 0910 313 8438 | `tel:+989103138438` |
| Mobile 2 | 0912 515 4955 | `tel:+989125154955` |
| Office | 021-2214 1590-91 | `tel:+982122141590` |

```tsx
// components/home/ContactCTA.tsx — structure guide
// This section must appear on the homepage between FeaturedProducts and Footer
// It must also be linked from the hero's primary CTA button

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="...">
      {/* Headline */}
      <h2>Ready to upgrade your space?</h2>
      <p>Our team is available Saturday–Thursday, 9am–6pm</p>

      {/* Call buttons — these are the primary CTA */}
      <div className="call-buttons">
        <a href="tel:+989103138438" className="call-btn">
          📞 0910 313 8438  {/* Mobile 1 */}
        </a>
        <a href="tel:+989125154955" className="call-btn">
          📞 0912 515 4955  {/* Mobile 2 */}
        </a>
        <a href="tel:+982122141590" className="call-btn office-btn">
          ☎ 021-2214 1590-91  {/* Office */}
        </a>
      </div>

      {/* WhatsApp */}
      <a href="https://wa.me/989103138438?text=Hello, I'd like to learn more about your products" 
         className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
        WhatsApp Us
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/gilsatouch" target="_blank" rel="noopener noreferrer">
        @gilsatouch
      </a>
    </section>
  );
}
```

---

## Sticky Call Button (`components/ui/CallButton.tsx`)

A **floating sticky button** that stays visible on ALL pages on mobile:

```tsx
// Sticky bottom-right (LTR) / bottom-left (RTL) floating button
// Shows on mobile only (hidden on desktop)
// Pulses gently to attract attention
// Links to tel:+989103138438

export default function StickyCallButton() {
  return (
    <a
      href="tel:+989103138438"
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 
                 z-50 flex items-center gap-2 
                 bg-[#C9922A] text-white 
                 px-5 py-3 rounded-full shadow-lg
                 animate-pulse-slow
                 md:hidden"   // hide on desktop
    >
      <PhoneIcon />
      <span>Call Us</span>
    </a>
  );
}
```

Also add a **WhatsApp floating button** stacked above the call button on mobile.

---

## Homepage Section Order

Build the homepage (`app/[locale]/page.tsx`) with sections in this exact order:

1. **`<Hero>`** — full-viewport, dark background, large headline, two buttons: "Call Us Now" (gold, links to `#contact-cta`) and "View Products" (outline)
2. **`<StatsBar>`** — 4 stats in a horizontal bar (41K followers / 4+ years / wide range / full support)
3. **`<FeaturedProducts>`** — 3–6 featured products from Supabase, grid layout
4. **`<WhyGilsa>`** — 4 reasons grid
5. **`<ContactCTA>`** — THE MOST IMPORTANT SECTION — large, dramatic, all phone numbers + WhatsApp ← never skip this
6. **`<Footer>`** — logo, nav links, social, copyright

---

## Admin Panel Requirements

Build a clean, functional admin panel at `/admin/*`. No need to be beautiful — functional and fast.

### `/admin/login`
- Email + password form
- Uses Supabase Auth `signInWithPassword`
- Redirects to `/admin/products` on success

### `/admin/products`
- Table list of all products (published + unpublished)
- Columns: image thumbnail, name (EN), category, featured toggle, published toggle, edit button
- "Add New Product" button → `/admin/products/new`

### `/admin/products/new` and `/admin/products/[id]`
- Form with fields for:
  - Name in EN / FA / AR (three text inputs)
  - Description in EN / FA / AR (three textareas)
  - Category (select from categories table)
  - Images (upload to Supabase Storage, show preview thumbnails, allow reordering)
  - Specs (dynamic key-value pairs, e.g. Voltage: 220V, Gang: 2, Color: White)
  - Featured (checkbox)
  - Published (checkbox)
  - Slug (auto-generated from EN name, editable)
- Save button calls `POST /api/admin/products` or `PUT /api/admin/products/[id]`

### `/admin/categories`
- Simple CRUD for categories
- Each category has slug, name_en, name_fa, name_ar, sort_order

### `/admin/contacts`
- Table of all contact form submissions
- Mark as read
- No delete (for record keeping)

---

## API Routes

### `GET /api/products`
```ts
// Returns published products, optionally filtered by category slug
// Query params: ?category=slug&featured=true&limit=6
// Returns: { products: Product[], total: number }
```

### `POST /api/contact`
```ts
// Validates: name (required), message (required), phone or email (at least one)
// Inserts into contacts table
// Optionally sends email via Resend
// Returns: { success: true } or { error: string }
```

### `GET/POST/PUT/DELETE /api/admin/products`
```ts
// All require valid Supabase session (check with supabase.auth.getUser())
// Return 401 if not authenticated
```

---

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key   # for admin API routes only
RESEND_API_KEY=your_resend_key                     # optional
```

---

## RTL / i18n Requirements

1. The `<html>` tag must have `lang` and `dir` set dynamically per locale:
   - `en` → `lang="en" dir="ltr"`
   - `fa` → `lang="fa" dir="rtl"`
   - `ar` → `lang="ar" dir="rtl"`

2. Use `next-intl`'s `useTranslations` hook in client components and `getTranslations` in server components

3. The locale switcher in the header must show: `EN | فا | عر`

4. All Tailwind layout must use `rtl:` variants for directional properties:
   - `ml-4 rtl:ml-0 rtl:mr-4`
   - `text-left rtl:text-right`
   - `rounded-l rtl:rounded-l-none rtl:rounded-r`

5. The font must switch:
   - EN: `font-sans` (Plus Jakarta Sans or DM Sans)
   - FA + AR: `font-arabic` (Vazirmatn from Google Fonts — covers both Persian and Arabic scripts)

6. Load both fonts in `app/[locale]/layout.tsx` and apply conditionally based on locale

---

## SEO

In `app/[locale]/layout.tsx`, generate metadata per locale:

```ts
export async function generateMetadata({ params: { locale } }: Props) {
  return {
    title: locale === 'fa' ? 'گیلسا | کلید لمسی هوشمند' :
           locale === 'ar' ? 'جيلسا | مفاتيح لمس ذكية' :
           'Gilsa | Smart Touch Switches',
    description: locale === 'fa' ? 'تولید کننده کلید لمسی هوشمند مدرن در ایران' :
                 locale === 'ar' ? 'مصنّع مفاتيح اللمس الذكية الحديثة في إيران' :
                 'Iranian manufacturer of modern smart touch switches',
    alternates: {
      canonical: `/${locale}`,
      languages: { 'en': '/en', 'fa': '/fa', 'ar': '/ar' }
    }
  };
}
```

---

## Package Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "next-intl": "^3.0.0",
    "@supabase/ssr": "^0.5.0",
    "@supabase/supabase-js": "^2.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "lucide-react": "latest",
    "resend": "^4.0.0"
  }
}
```

---

## Final Checklist for Claude Code

- [ ] `supabase/schema.sql` — complete, runnable SQL
- [ ] `middleware.ts` — locale routing + admin auth guard
- [ ] `messages/en.json`, `messages/fa.json`, `messages/ar.json` — all keys filled
- [ ] `app/[locale]/layout.tsx` — sets lang + dir, loads correct font, includes `StickyCallButton`
- [ ] `components/home/ContactCTA.tsx` — all 3 phone numbers + WhatsApp button, dramatic design
- [ ] `components/ui/CallButton.tsx` — floating sticky call button, mobile only, pulses
- [ ] Homepage has CTA button in hero that scrolls to `#contact-cta`
- [ ] Admin panel fully functional (login, product CRUD with image upload, contacts view)
- [ ] All API routes validate auth before write operations
- [ ] RTL layout works correctly for FA and AR
- [ ] Fonts switch correctly per locale (Latin vs Persian/Arabic)
- [ ] `.env.local.example` file provided
- [ ] `README.md` with setup instructions (Supabase setup, env vars, run dev)