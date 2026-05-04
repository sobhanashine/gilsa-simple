# Gilsa Touch Website

Trilingual product catalog and lead-generation site for Gilsa Touch, built with Next.js App Router, Tailwind CSS v4, next-intl, and Supabase.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables:

```bash
cp .env.local.example .env.local
```

Fill in `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`. `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are optional for email notifications.

3. Configure Supabase:

- Run `supabase/schema.sql` in the SQL editor.
- Create a public Storage bucket named `product-images`.
- Create admin users with Supabase Auth and disable public signups if only staff should log in.

4. Run locally:

```bash
npm run dev
```

Public routes are `/en`, `/fa`, and `/ar`. Admin routes are unlocalized under `/admin`.

## Notes

- Next.js 16 calls Middleware `Proxy`, so the request guard lives in `proxy.ts` instead of legacy `middleware.ts`.
- The public catalog uses safe sample products when Supabase env vars are not configured, so the site still renders locally.
- Contact and admin writes validate input server-side; Supabase RLS policies provide database-level protection.
