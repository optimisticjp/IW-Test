# Infinite Weblinks — Growth Agency Website

Built with Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

---

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
# → open http://localhost:3000

# Build for production
npm run build

# Type check
npm run type-check
```

---

## File Structure

```
├── app/
│   ├── layout.tsx              ← Root layout, metadata, fonts, JSON-LD schema
│   ├── page.tsx                ← Homepage (assembles sections)
│   ├── globals.css             ← Tailwind + custom utilities
│   ├── website/page.tsx        ← Free website conversion page (primary CTA)
│   ├── contact/page.tsx        ← Contact page with Formspree form
│   ├── services/
│   │   ├── page.tsx            ← Services index (6 pillar cards)
│   │   ├── build/              ← Websites & Stores pillar
│   │   ├── paid-ads/           ← Paid Growth pillar
│   │   ├── social-growth/      ← Social & Creator Growth pillar
│   │   ├── ai-search/          ← SEO & AI Search pillar
│   │   ├── funnels/            ← Funnels & Conversion pillar
│   │   └── retain-scale/       ← Email / CRM / Retention pillar
│   ├── for/
│   │   ├── ecommerce/          ← Ecommerce & Shopify audience page
│   │   ├── creators/           ← Creators & Coaches audience page
│   │   ├── startups/           ← Startups audience page
│   │   └── local/              ← Local & Service Businesses audience page
│   ├── about/page.tsx          ← About page with story, values, team facts
│   └── results/page.tsx        ← Case studies and results page
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx             ← Sticky nav with mobile overlay
│   │   └── Footer.tsx          ← Site footer with all links
│   ├── sections/               ← Homepage sections + shared form
│   │   ├── Hero.tsx
│   │   ├── ProofStrip.tsx
│   │   ├── WhoWeHelp.tsx
│   │   ├── Pillars.tsx
│   │   ├── FreeWebsite.tsx
│   │   ├── AISearch.tsx
│   │   ├── SocialGrowthSpotlight.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── ResultsHighlights.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── ContactForm.tsx     ← Shared Formspree form (website + contact)
│   │   └── WebsiteFormSection.tsx  ← Dark gradient form wrapper for /website
│   ├── templates/
│   │   ├── ServicePageTemplate.tsx    ← Renders all 6 service pillar pages
│   │   └── AudiencePageTemplate.tsx   ← Renders all 4 audience pages
│   └── ui/
│       ├── Button.tsx          ← Reusable button/link with variants
│       ├── GlassCard.tsx       ← Glassmorphism card component
│       ├── MeshGradient.tsx    ← Animated mesh background
│       ├── ArcDivider.tsx      ← SVG arc section transition
│       └── FaqAccordion.tsx    ← Accessible FAQ accordion
│
├── lib/
│   ├── constants.ts            ← Site-wide content (SITE, PILLARS, AUDIENCES)
│   ├── service-pages.ts        ← Content for all 6 service pillar pages
│   ├── audience-pages.ts       ← Content for all 4 audience pages
│   ├── case-studies.ts         ← Case study data for /results
│   ├── analytics.ts            ← GA4 event helpers (trackCTA, trackFormSubmit)
│   └── utils.ts                ← cn() utility for Tailwind classes
│
├── public/
│   ├── sitemap.xml             ← All 19 pages, canonical URLs
│   ├── robots.txt              ← Allows GPTBot, PerplexityBot, ClaudeBot
│   ├── llms.txt                ← Plain-text site description for AI agents
│   └── _headers                ← Security headers for Netlify
│
├── tailwind.config.ts          ← Full design system
├── vercel.json                 ← Security headers for Vercel
└── next.config.mjs             ← Static export config
```

---

## Editing Content

Content is split into four data files:

| File | What it controls |
|------|-----------------|
| `lib/constants.ts` | SITE meta, nav, PILLARS, AUDIENCES, hero stats, markets |
| `lib/service-pages.ts` | Content for all 6 service pillar pages |
| `lib/audience-pages.ts` | Content for all 4 audience landing pages |
| `lib/case-studies.ts` | Case study cards and stats strip on /results |

Edit those files and the changes flow through to every page automatically.

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `brand` / `brand-600` | `#075aaa` | Primary blue, buttons, links, highlights |
| `brand-50` | `#edf4fb` | Light tint backgrounds |
| `brand-900` | `#0a2d54` | Dark accent sections (where-we-work) |
| `surface-soft` | `#f0f4f8` | Section backgrounds (light grey-blue) |
| `snow` | `#f7f9ff` | Legacy light surface |
| `ink` | `#0f172a` | Primary text colour |

Font families:
- `font-display` — Plus Jakarta Sans (headings, H1, H2)
- `font-sans` — Inter (body text, UI)

Custom classes:
- `gradient-text` — brand-to-indigo gradient on text
- `glass` — glassmorphism utility
- `dot-grid` — subtle dot pattern overlay (light mode)
- `animate-float-slow` — 9s ambient float for hero cards
- `animate-gradient-shift` — 9s mesh gradient animation

Shadow scale: `shadow-glass`, `shadow-card`, `shadow-card-hover`, `shadow-btn`

---

## Deploying

**Vercel:** Push to main. Auto-deploys. Security headers via `vercel.json`.

**Netlify / Cloudflare Pages:**
- Build command: `npm run build`
- Output directory: `out`
- Security headers via `public/_headers`

---

## Formspree Setup

1. Create a form at formspree.io
2. Copy your form ID (looks like `xabcdefg`)
3. Paste it in `lib/constants.ts` → `SITE.formspreeId`

---

## Analytics (GA4)

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your environment to enable tracking.
The `GoogleAnalytics` component injects gtag.js automatically.
Use `trackCTA(label, location)` and `trackFormSubmit(formType)` from `lib/analytics.ts`.

---

## Phase Roadmap

- **Phase 1** ✅ Homepage + Nav + Footer + design system
- **Phase 2** ✅ Visual redesign (Stripe-inspired, light mode, glassmorphism, MeshGradient, ArcDivider)
- **Phase 3** ✅ All inner pages: /website, /contact, /services, 6 pillar pages, 4 audience pages, /about, /results
- **Phase 4** — Fill in real testimonials, case study data, founder name and year (search for TODO in codebase)

---

## Before Going Live — TODOs

Search the codebase for `TODO` to find everything that needs real data:

- `lib/constants.ts` → `SITE.whatsapp` — add your WhatsApp number with country code
- `lib/constants.ts` → `SITE.formspreeId` — add your Formspree form ID
- `app/about/page.tsx` → `FOUNDER_NAME`, `FOUNDED_YEAR` — fill in real details
- `lib/case-studies.ts` → replace placeholder testimonials with real client quotes
- `lib/audience-pages.ts` → replace placeholder testimonial quotes with real ones
- `public/sitemap.xml` → update dates when content changes
