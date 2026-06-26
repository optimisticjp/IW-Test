import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import MeshGradient from '@/components/ui/MeshGradient'
import ArcDivider from '@/components/ui/ArcDivider'
import FaqAccordion from '@/components/ui/FaqAccordion'
import WebsiteFormSection from '@/components/sections/WebsiteFormSection'

export const metadata: Metadata = {
  title:       'Get a Free Website | Infinite Weblinks',
  description: 'We build your website first at no cost. See it live on a real link before anything changes hands. Custom design, mobile-first, SEO ready from day one.',
  alternates:  { canonical: 'https://infiniteweblinks.com/website' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is the website free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We build it first because we believe you should see real work before money changes hands. Most clients who love their new site go on to use our growth services. That's how we sustain the model. But there's no obligation. If you decide not to continue, the site is still yours.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the website is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You get a live link to review. Tell us what to change. Once you're happy, we connect your domain and hand it over. From there, you can manage it yourself, or we can run the ads, SEO, funnels and email that turn it into your best sales tool.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I have to sign a long contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The free website has no strings attached. If you decide to add growth services later, those are month-to-month. You can pause or stop at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I already have a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We rebuild it. You see both side by side and keep whichever one works better. Most clients find the difference significant, particularly on mobile and page speed.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most websites are live on a preview link within 3 to 5 business days of receiving your brief. More complex builds take a little longer. We will tell you upfront.',
      },
    },
  ],
}

const WHATS_INCLUDED = [
  {
    title: 'Custom design for your industry',
    desc:  'Built around your brand and your customers — not a generic template. Every site is designed specifically for what you sell and who you are selling to.',
  },
  {
    title: 'Mobile-first, fast loading',
    desc:  'We target 90+ on Google PageSpeed. Most of your visitors are on a phone. Your site will load in under 2 seconds.',
  },
  {
    title: 'SEO foundations built in from day one',
    desc:  'Title tags, meta descriptions, clean URL structure, sitemap and schema markup — all in place before we hand it over.',
  },
  {
    title: 'Contact and lead capture forms',
    desc:  'Every site includes a contact form connected to your email. We also set up WhatsApp notifications if you want them.',
  },
  {
    title: 'Connected to WhatsApp and email',
    desc:  'New enquiries land in your inbox and WhatsApp immediately. No leads fall through the cracks while you are busy.',
  },
  {
    title: 'Hosted and maintained by us',
    desc:  'We handle hosting, security updates and uptime monitoring. You focus on the business; we keep the site running.',
  },
]

const HOW_IT_WORKS = [
  {
    step:  '01',
    title: 'Fill in the brief',
    desc:  'Takes about 2 minutes. Tell us your business name, what you do and what you want visitors to do. No call required.',
  },
  {
    step:  '02',
    title: 'We design and build your website',
    desc:  'Our team builds a real, working site around your brand — not a template. Usually ready on a live preview link within 3 to 5 business days.',
  },
  {
    step:  '03',
    title: 'You review, approve and go live',
    desc:  'We send you a live link. Test it on your phone. Tell us what to change. When you love it, we connect your domain. No payment until you are happy.',
  },
]

const AUDIENCE_TILES = [
  { label: 'Ecommerce & Shopify',    desc: 'Stores that convert visitors into buyers',       href: '/for/ecommerce', icon: '🛒' },
  { label: 'Creators & Coaches',     desc: 'Your home base to sell courses and services',     href: '/for/creators',  icon: '🎯' },
  { label: 'Startups',               desc: 'Launch looking credible from day one',             href: '/for/startups',  icon: '🚀' },
  { label: 'Local Businesses',       desc: 'Get found in your area, fill your calendar',      href: '/for/local',     icon: '📍' },
]

const FAQ = [
  {
    q: 'Why is the website free?',
    a: "We build it first because we believe you should see real work before money changes hands. Most clients who love their new site go on to use our growth services. That's how we sustain the model. But there's no obligation. If you decide not to continue, the site is still yours.",
  },
  {
    q: 'What happens after the website is built?',
    a: "You get a live link to review. Tell us what to change. Once you're happy, we connect your domain and hand it over. From there, you can manage it yourself or we can run the ads, SEO, funnels and email that turn it into your best sales tool.",
  },
  {
    q: 'Do I have to sign a long contract?',
    a: 'No. The free website has no strings attached. If you decide to add growth services later, those are month-to-month. You can pause or stop at any time.',
  },
  {
    q: 'What if I already have a website?',
    a: "We rebuild it. You see both side by side and keep whichever one works better. Most clients find the difference significant, particularly on mobile and page speed.",
  },
  {
    q: 'How long does it take?',
    a: 'Most websites are live on a preview link within 3 to 5 business days of receiving your brief. More complex builds take a little longer. We will tell you upfront.',
  },
]

export default function WebsitePage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 px-5 text-center bg-surface-soft">
        <MeshGradient intensity="medium" />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative max-w-[760px] mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-brand-200 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.05em] uppercase text-brand-700 mb-5">
            No upfront cost. No setup fee. No contracts.
          </div>

          <h1
            className="text-slate-900 mb-5 leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(32px,5.5vw,60px)' }}
          >
            Your business deserves a website that{' '}
            <span className="gradient-text">actually brings in customers.</span>
          </h1>

          <p className="text-slate-500 text-[clamp(16px,2vw,18px)] leading-[1.7] max-w-[520px] mx-auto mb-10">
            We build it first at no cost. You see it live before anything changes hands.
            Then we run the ads, SEO and funnels that fill it with buyers.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Button href="#claim-form" size="lg">
              Claim your free website
            </Button>
            <Button href="/services" variant="outline" size="lg">
              See all services
            </Button>
          </div>
        </div>
      </section>

      <ArcDivider fill="white" className="bg-surface-soft" />

      {/* ── WHAT'S INCLUDED ──────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              What you get
            </p>
            <h2 className="text-slate-900">Everything included. Nothing hidden.</h2>
            <p className="text-slate-500 text-base mt-4 max-w-[480px] mx-auto leading-relaxed">
              This is not a basic template. Every site is custom, conversion-focused and
              ready to grow with the business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHATS_INCLUDED.map((item) => (
              <GlassCard key={item.title} className="p-6 h-full">
                <div className="w-2 h-2 rounded-full bg-brand-600 mb-4" />
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <ArcDivider fill="#F8FAFF" className="bg-white" />

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="bg-surface-soft py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              How it works
            </p>
            <h2 className="text-slate-900">Three steps, zero risk</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((s) => (
              <GlassCard key={s.step} className="p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white text-sm font-extrabold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
              </GlassCard>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-8 italic">
            No payment until you are happy and ready to grow.
          </p>
        </div>
      </section>

      <ArcDivider fill="white" className="bg-surface-soft" />

      {/* ── WHO IT'S FOR ─────────────────────────────────── */}
      <section className="bg-white py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[860px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              Who it is for
            </p>
            <h2 className="text-slate-900">We build for businesses like yours</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AUDIENCE_TILES.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group flex items-start gap-4 bg-surface-soft border-[1.5px] border-slate-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-3xl shrink-0">{tile.icon}</span>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-1">
                    {tile.label}
                  </h3>
                  <p className="text-[13px] text-slate-500">{tile.desc}</p>
                  <span className="inline-block mt-2 text-xs font-bold text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-surface-soft py-[clamp(60px,8vw,96px)] px-5">
        <div className="max-w-[680px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-extrabold tracking-widest uppercase text-slate-400 mb-3">
              Questions
            </p>
            <h2 className="text-slate-900">Honest answers</h2>
          </div>
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      {/* ── FORM SECTION (client component) ──────────────── */}
      <WebsiteFormSection />
    </>
  )
}
