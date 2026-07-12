# Ballage Pet Concierge

> **More than pet care. Peace of mind.**

The official website for **Ballage Pet Concierge LLC** — a premium pet care
company serving **New Albany, Clarksville, Sellersburg, Jeffersonville, Floyds
Knobs**, and the greater **Southern Indiana / Louisville metro area**.

Built as a fast, accessible, SEO-optimized, mobile-first site with **Next.js 14
(App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Full marketing site** — Home, About, Services (overview + 4 detail pages),
  Reviews, Contact, and Blog (index + article pages).
- **Four concierge services** — Daily Pet Concierge, Puppy Foundations™, Senior
  Companion Care™, and Final Journey Care™.
- **Lead-capture forms** — Meet & Greet booking request, general contact, a
  detailed pet intake questionnaire, and newsletter signup.
- **Local SEO** — per-page metadata, `JSON-LD` structured data
  (`ProfessionalService`, `Service`, `BreadcrumbList`, `BlogPosting`,
  `AggregateRating`), dynamic `sitemap.xml`, and `robots.txt`.
- **Accessibility** — semantic HTML, skip-to-content link, focus styles, ARIA
  labels, and `prefers-reduced-motion` support.
- **Design system** — evergreen + warm-gold palette, Fraunces display + Inter
  body type, reusable UI primitives. Luxury-healthcare / boutique-concierge feel.
- **Future-ready architecture** — the pet intake maps cleanly to a future
  `PetProfile` model for a **client portal**, **pet profiles**, and a **mobile app**.

---

## 🗂 Project Structure

```
ballage-pet-concierge/
├── public/                       # static assets
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # root layout, fonts, global metadata + JSON-LD
│   │   ├── page.tsx              # Home
│   │   ├── globals.css           # Tailwind + base styles
│   │   ├── sitemap.ts            # dynamic sitemap
│   │   ├── robots.ts             # robots.txt
│   │   ├── manifest.ts           # PWA manifest
│   │   ├── icon.svg              # favicon
│   │   ├── not-found.tsx         # 404
│   │   ├── about/
│   │   ├── services/
│   │   │   ├── page.tsx          # services overview
│   │   │   ├── dog-walking/      # Daily Pet Concierge
│   │   │   ├── puppy-care/       # Puppy Foundations™
│   │   │   ├── senior-care/      # Senior Companion Care™
│   │   │   └── final-journey-care/  # Final Journey Care™
│   │   ├── reviews/
│   │   ├── contact/
│   │   └── blog/
│   │       ├── page.tsx          # blog index
│   │       └── [slug]/page.tsx   # article template
│   ├── components/
│   │   ├── layout/               # Header, Footer, Logo
│   │   ├── home/                 # Home page sections
│   │   ├── forms/                # Contact, Booking, Pet Intake, Newsletter
│   │   └── shared/               # Section, Button, Icon, cards, CTAs, JSON-LD
│   ├── lib/                      # site config + content data + schema helpers
│   │   ├── site.ts               # business info, service areas, nav
│   │   ├── services.ts           # service content
│   │   ├── reviews.ts            # testimonials
│   │   ├── blog.ts               # blog posts
│   │   └── schema.ts             # JSON-LD generators
│   └── types/                    # shared TypeScript types
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 🚀 Getting Started

Requires **Node.js 18.17+**.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm start
```

---

## ⚙️ Configuration

Nearly all business details live in **`src/lib/site.ts`** — update the phone,
email, production `url`, and social links there and they propagate across
metadata, schema markup, header, and footer.

Content is data-driven and easy to edit without touching components:

| Edit… | In… |
| --- | --- |
| Services | `src/lib/services.ts` |
| Reviews | `src/lib/reviews.ts` |
| Blog posts | `src/lib/blog.ts` |
| Service areas / nav | `src/lib/site.ts` |

### Wiring the forms

Forms currently validate and show a confirmation state client-side. Each has a
clearly marked `// TODO` where you connect a backend:

- **Booking / Contact / Intake** → a Next.js route handler, [Resend](https://resend.com),
  [Formspree](https://formspree.io), or your CRM.
- **Newsletter** → Mailchimp, ConvertKit, or similar ESP.

### Google reviews

`src/app/reviews/page.tsx` includes a ready-to-fill placeholder block. Connect
the Google Places / Business Profile API and map results onto the existing
`<ReviewCard />` component.

---

## 🌐 Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Add your custom domain and update `site.url` in `src/lib/site.ts`.

### Any Node host

```bash
npm run build
npm start   # serves on PORT (default 3000)
```

The site can also be deployed to Netlify, AWS Amplify, or any platform that
supports Next.js 14.

---

## 🧭 Roadmap (future-ready)

- **Client portal** — authenticated dashboard for booking and reports.
- **Pet profiles** — the intake questionnaire already maps to a `PetProfile` model.
- **Daily Paw Reports** — in-app photo/video/activity delivery.
- **Mobile app** — shared content layer makes a companion app straightforward.

---

© Ballage Pet Concierge LLC. All rights reserved.
