# Deploying Ballage Pet Concierge

A step-by-step guide to take this site live on **Vercel** (recommended for
Next.js), connect your domain, turn on lead emails, and finish the local-SEO
setup. Budget ~30–45 minutes end to end.

---

## Before you start — 5-minute prep

Update your real business details so they flow into metadata, schema, and the
footer. Edit **`src/lib/site.ts`**:

- `url` → your real domain (e.g. `https://ballagepetconcierge.com`)
- `email` → the inbox where leads should land
- `phone` / `phoneHref` → your real number (keep `phoneHref` in `tel:+1...` form)
- `social` → your real Facebook / Instagram URLs (or remove)

Commit and push the change:

```bash
git add src/lib/site.ts
git commit -m "Set production business details"
git push
```

---

## Step 1 — Deploy to Vercel

1. Go to **[vercel.com/new](https://vercel.com/new)** and sign in with GitHub.
2. Click **Import** next to the `BALLAGE-PET-CONCIERGE` repository.
   - If you don't see it, click **Adjust GitHub App Permissions** and grant
     access to the repo.
3. Vercel auto-detects **Next.js** — leave every build setting at its default:
   - Framework Preset: `Next.js`
   - Build Command: `next build` (default)
   - Output: handled automatically — **no `vercel.json` needed**
4. Before clicking Deploy, expand **Environment Variables** and add the ones in
   Step 2 below (you can also add them afterward under Settings).
5. Click **Deploy**. In ~1–2 minutes you'll get a live URL like
   `ballage-pet-concierge.vercel.app`.

---

## Step 2 — Environment variables (turns on lead emails)

In Vercel: **Project → Settings → Environment Variables**. Add:

| Name | Value | Required |
| --- | --- | --- |
| `RESEND_API_KEY` | Your key from [resend.com](https://resend.com) | ✅ Yes — no key, no emails |
| `CONTACT_TO_EMAIL` | Inbox for leads (defaults to `site.email`) | Optional |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Ballage Pet Concierge <hello@yourdomain.com>` | Recommended for production |

Set them for the **Production** (and Preview) environments, then **redeploy**
(Deployments → ⋯ → Redeploy) so they take effect.

### Getting the Resend key

1. Create a free account at **[resend.com](https://resend.com)**.
2. **API Keys → Create API Key** → copy it into `RESEND_API_KEY`.
3. For real sending from your domain: **Domains → Add Domain**, add the DNS
   records Resend shows you (same place you manage your domain), and once
   verified set `CONTACT_FROM_EMAIL` to an address on that domain.
   - *Testing shortcut:* leave `CONTACT_FROM_EMAIL` unset to use Resend's
     `onboarding@resend.dev` sender, which delivers only to the email on your
     own Resend account — fine for a first test.

### Test it

Submit the contact form on your live site. You should receive the email within
seconds. If not, check **Vercel → Deployments → (latest) → Functions logs** for
`[submit]` messages.

---

## Step 3 — Connect your domain

1. Buy a domain if you don't have one (Namecheap, Google Domains, Cloudflare…).
2. In Vercel: **Project → Settings → Domains → Add** → enter your domain.
3. Vercel shows the DNS records to set at your registrar:
   - Apex (`yourdomain.com`) → an **A record** to Vercel's IP, **or** follow
     Vercel's nameserver option.
   - `www` → a **CNAME** to `cname.vercel-dns.com`.
4. Wait for DNS to propagate (minutes to a few hours). Vercel issues HTTPS
   automatically.
5. Update `url` in `src/lib/site.ts` to the final domain if you haven't yet,
   then push (redeploys automatically).

---

## Step 4 — Local SEO setup (do this at launch)

The site already ships metadata, JSON-LD schema, `sitemap.xml`, and
`robots.txt`. Finish the off-site pieces:

1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
   - Add your domain, verify (DNS TXT record is easiest), then submit
     `https://yourdomain.com/sitemap.xml` under **Sitemaps**.
2. **Google Business Profile** — [business.google.com](https://business.google.com/)
   - **This is the single biggest local-SEO lever.** Create/claim the listing
     for Ballage Pet Concierge, set the service area (New Albany, Clarksville,
     Sellersburg, Jeffersonville, Floyds Knobs, Louisville metro), add photos,
     hours, and your website link. Reviews collected here feed the Reviews page.
3. **Bing Webmaster Tools** (optional) — [bing.com/webmasters](https://www.bing.com/webmasters) — import from Search Console in one click.

---

## Ongoing: how updates deploy

Every push to the `main` branch on GitHub **auto-deploys** to production. Pull
requests get their own preview URL automatically. To edit content, change the
data files (`src/lib/services.ts`, `reviews.ts`, `blog.ts`), commit, and push —
no other steps.

---

## Quick reference

| Task | Where |
| --- | --- |
| Business details, phone, email, domain | `src/lib/site.ts` |
| Services content | `src/lib/services.ts` |
| Testimonials | `src/lib/reviews.ts` |
| Blog posts | `src/lib/blog.ts` |
| Form email logic | `src/app/api/submit/route.ts` |
| Env vars | Vercel → Settings → Environment Variables |
| Deploy logs / function logs | Vercel → Deployments |

*More than pet care. Peace of mind.*
