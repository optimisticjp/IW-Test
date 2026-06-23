# Infinite Weblinks — Phase 1: Homepage

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
│   ├── layout.tsx        ← Root layout, metadata, fonts
│   ├── page.tsx          ← Homepage (assembles sections)
│   └── globals.css       ← Tailwind + custom utilities
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx       ← Sticky nav with scroll blur
│   │   └── Footer.tsx    ← Site footer with all links
│   ├── sections/         ← One file per homepage section
│   │   ├── Hero.tsx
│   │   ├── ProofStrip.tsx
│   │   ├── WhoWeHelp.tsx
│   │   ├── Pillars.tsx
│   │   ├── FreeWebsite.tsx
│   │   ├── AISearch.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   └── ui/
│       └── Button.tsx    ← Reusable button/link component
│
├── lib/
│   ├── constants.ts      ← ⭐ ALL SITE CONTENT LIVES HERE
│   └── utils.ts          ← cn() utility for Tailwind classes
│
├── tailwind.config.ts    ← Design system (colors, fonts, shadows)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Editing Content

**All text, links, stats and testimonials live in one file:**

```
lib/constants.ts
```

Open that file and change anything. It flows through to every page automatically.
No need to hunt through component files.

---

## Design System

Colors are defined in `tailwind.config.ts`:

| Token        | Value     | Usage                          |
|--------------|-----------|--------------------------------|
| `brand`      | `#0a5bc4` | Primary blue, buttons, links   |
| `violet`     | `#5b21b6` | Gradient end, accents          |
| `ink`        | `#070e1c` | Dark section backgrounds       |
| `ink-mid`    | `#0c1527` | Stats strip background         |
| `ink-card`   | `#101e36` | Dark section cards             |
| `ink-border` | `#1c3558` | Dark section borders           |
| `snow`       | `#f7f9ff` | Light section backgrounds      |

Gradient text: add class `gradient-text` to any element.

---

## Deploying to Cloudflare Pages

1. Push to your GitHub repo
2. Cloudflare Pages will auto-build on push
3. Build command: `npm run build`
4. Output directory: `.next`

**For fully static hosting** (no server, maximum performance):
Uncomment these lines in `next.config.ts`:
```ts
output: 'export',
images: { unoptimized: true },
```
Then output directory becomes `out`.

---

## Formspree Setup (for Contact page in Phase 3)

1. Create a form at formspree.io
2. Copy your form ID (looks like `xabcdefg`)
3. Paste it in `lib/constants.ts` → `SITE.formspreeId`

---

## Phase Roadmap

- **Phase 1** ✅ Homepage + Nav + Footer
- **Phase 2** — Service pillar pages (6 pages)
- **Phase 3** — Audience pages + Free Website + Contact with Formspree
- **Phase 4** — About + Results / Case Studies template
