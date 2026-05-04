# Feature: Gilsa Touch Trilingual Catalog And Lead Generation

## Requirements (EARS Format)
- While a visitor browses any localized page, when they need sales help, the system shall expose one-tap call and WhatsApp actions.
- While a visitor selects English, Persian, or Arabic, when a page renders, the system shall use localized copy, correct `lang`, and correct text direction.
- While a visitor browses products, when products exist in Supabase, the system shall show published products and hide unpublished rows.
- While an admin is authenticated, when they manage products, categories, or contacts, the system shall persist changes through protected API routes.
- While any API receives user input, when input is invalid, the system shall reject it with safe error messages.

## Architecture
- Frontend: Next.js App Router route groups for localized public pages and unlocalized admin pages; server components for catalog pages; client forms for contact/admin mutations.
- Backend: Route Handlers under `app/api`; Supabase PostgreSQL as data store; Storage upload from authenticated admin client; optional Resend email after contact insert.
- Security: Supabase Auth guards for admin API/layout/proxy, server-side validation for all writes, explicit response fields, RLS in SQL, no secrets in client bundles except public anon config.

## Implementation Plan
- [x] Add i18n routing, dictionaries, fonts, and localized layouts.
- [x] Add Supabase schema, typed helpers, and env examples.
- [x] Build public conversion pages with dramatic contact CTA and mobile sticky buttons.
- [x] Build protected admin pages and API routes for catalog/contact management.
- [x] Run lint/build validation and document residual setup work.

## Security Checkpoint
- Auth: Admin layout/proxy and all admin API write/read routes require a Supabase session.
- Authz: Admin operations are limited to authenticated users; production should restrict admin signups in Supabase.
- Input: Contact, product, and category payloads are validated and trimmed server-side; client validation is convenience only.
- Output: Public product APIs expose catalog fields only; contact submissions only appear in protected admin UI.
- Rate Limit: Contact endpoint includes an in-memory best-effort IP limiter for serverless instances; use a durable limiter for high traffic.
- Logging: Admin mutations and contact validation/rate-limit failures are logged without dumping secrets.
