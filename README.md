# Ballage Pet Concierge

> **More than dog care. Peace of mind.**

The official website for **Ballage Pet Concierge** (legally Ballage Pet Concierge
LLC) — a premium dog-care company serving **New Albany, Clarksville,
Sellersburg, Jeffersonville, Floyds Knobs**, and the greater **Southern Indiana
/ Louisville metro area**.

Built as a fast, accessible, SEO-optimized, mobile-first site with **Next.js 14
(App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 📚 Business & Growth Guides

Downloadable PDF guides for running and growing Ballage Pet Concierge (editable
HTML sources live alongside them in [`docs/`](docs/)):

- **[Getting Started & Growth Guide](docs/Ballage-Pet-Concierge-Getting-Started-Guide.pdf)**
  — how to launch with free Founding Family sessions, build photo/review proof,
  and grow through two warm referral channels: the **Carepets vet** (existing
  dog owners) and **local breeders** (new puppy owners, via the New Puppy
  Starter offer). Also covers what makes Ballage different from competitors, the
  research behind the site, and insurance/bonding costs.
- **[Certifications & Credentials Guide](docs/Ballage-Pet-Concierge-Certifications-Guide.pdf)**
  — the licenses and certifications you need and the ones that give you an edge
  (Red Cross Pet First Aid, Fear Free, PSI/NAPPS), with real costs and priorities.
- **[New Puppy Welcome Packet](docs/Ballage-Pet-Concierge-New-Puppy-Welcome-Packet.pdf)**
  — a printable one-page handout for breeder partners to tuck into puppy
  go-home folders: a first-week checklist plus the New Puppy Starter offer.
  *(Update the phone/website before printing.)*
- **[Vet Partner Flyer & Referral Cards](docs/Ballage-Pet-Concierge-Carepets-Partner-Flyer.pdf)**
  — a waiting-room flyer (leading with Vet Visit Rides) plus a page of cut-out
  referral cards for the Carepets front desk. *(Display only once Carepets
  agrees; update the phone/website before printing.)*
- **[Gym Flyer](docs/Ballage-Pet-Concierge-Gym-Flyer.pdf)** — a letter-size
  bulletin-board flyer for a gym, with tear-off phone tabs. Angle: busy, active
  people who want their dog exercised (Adventure Outings + Workday Dog Care).
  *(Add a QR code and update the phone/website before printing.)*
- **[School Staff Flyer](docs/Ballage-Pet-Concierge-Staff-Flyer.pdf)** — a
  letter-size flyer for a school staff lounge, written as a personal note from a
  fellow staff member, with tear-off tabs and an Educator & Staff discount.
  *(Fill in your school, add a QR code, and update the phone/website before
  printing. Check your school/district policy on posting personal-business
  materials first.)*

---

## 📖 Documentation

All project docs, in one place:

- **[README](README.md)** — this file: overview, features, structure, and setup.
- **[Deployment Guide](docs/DEPLOYMENT.md)** — step-by-step Vercel deploy,
  environment variables, custom domain, and launch-day SEO.
- **[Research Resource Database](docs/RESEARCH-RESOURCES.md)** — curated market,
  business, certification, and marketing research sources.
- **Business & Growth Guides** (above) — HTML sources + PDFs in [`docs/`](docs/):
  [Getting Started](docs/getting-started-guide.html) ·
  [Certifications](docs/certifications-guide.html) ·
  [New Puppy Welcome Packet](docs/new-puppy-welcome-packet.html) ·
  [Gym Flyer](docs/gym-flyer.html) ·
  [School Staff Flyer](docs/staff-flyer.html)

---

## ✨ Features

- **Full marketing site** — Home, About, Services (overview + 6 detail pages),
  Pricing, Reviews, FAQ, Policies, Contact, and Blog (index + article pages).
- **Six dog-care services** — Daily Dog Care, Puppy Foundations™, Adventure
  Outings™, Senior Companion Care™, Vet Visit Rides, and Final Journey Care™.
- **Lead-capture forms** — Meet & Greet booking request, general contact, a
  detailed dog intake questionnaire, and newsletter signup.
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

### Forms & email delivery

All forms (booking, contact, pet intake, newsletter) POST to a single Next.js
route handler at **`src/app/api/submit/route.ts`**, which emails each
submission to the business using **[Resend](https://resend.com)**. Features:

- Server-side validation of required fields + email format
- Honeypot spam protection (hidden `company` field)
- Loading, success, and error states in the UI
- Reply-to set to the submitter's email so you can respond in one click

**To receive leads, set `RESEND_API_KEY`** (see `.env.example`):

1. Create a free account at [resend.com](https://resend.com) and copy an API key.
2. Add `RESEND_API_KEY` to `.env.local` (dev) and to your host's env vars (prod).
3. For production, verify your domain in Resend and set `CONTACT_FROM_EMAIL` to
   a sender on that domain (e.g. `hello@ballagepetconcierge.com`). Set
   `CONTACT_TO_EMAIL` to wherever leads should land.

> Without the key, submissions still succeed and are logged server-side (so the
> UX works in dev) — but no email is sent. Set the key before launch.

**Newsletter:** currently emails signups like the other forms. To push straight
into Mailchimp/ConvertKit instead, handle the `"newsletter"` type separately in
the route handler.

### Google reviews

`src/app/reviews/page.tsx` includes a ready-to-fill placeholder block. Connect
the Google Places / Business Profile API and map results onto the existing
`<ReviewCard />` component.

---

## 🌐 Deployment

📖 **Full step-by-step walkthrough: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)** —
covers Vercel deploy, environment variables, connecting your domain, and
launch-day SEO setup (Search Console + Google Business Profile).

### Vercel (recommended) — quick version

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed. Add the `RESEND_API_KEY`
   env var (see [Forms & email delivery](#forms--email-delivery)), then **Deploy**.
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
