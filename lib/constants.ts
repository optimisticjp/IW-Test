/**
 * INFINITE WEBLINKS — SITE CONTENT
 *
 * This is the single source of truth for all text, links, and data on the site.
 * To update any content — headlines, testimonials, stats, services — edit it here.
 * Components read from this file; you never need to hunt through component code.
 */

// ── SITE META ────────────────────────────────────────────────
export const SITE = {
  name:        'Infinite Weblinks',
  tagline:     'Grow your business digitally!',
  description: 'We build your website first — no upfront fee. Then we run the ads, funnels, social growth and AI search that turn it into your best salesperson.',
  url:         'https://infiniteweblinks.com',
  email:       'hello@infiniteweblinks.com',
  /** WhatsApp number with country code — e.g. '+447700000000'. Leave empty to hide button. */
  whatsapp:    '',
  instagram:   'https://www.instagram.com/infiniteweblinks',
  linkedin:    'https://www.linkedin.com/company/infiniteweblinks',
  /** Replace this with your actual Formspree form ID */
  formspreeId: 'YOUR_FORMSPREE_FORM_ID',
}

// ── NAVIGATION ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services',    href: '/services'      },
  { label: 'Who We Help', href: '/for/ecommerce' },
  { label: 'Results',     href: '/results'       },
  { label: 'About',       href: '/about'         },
]

// ── MARKETS (PROOF STRIP) ────────────────────────────────────
export const MARKETS = [
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇳🇿', name: 'New Zealand' },
  { flag: '🇪🇺', name: 'Europe' },
]

// ── HERO STATS ───────────────────────────────────────────────
export const HERO_STATS = [
  { number: '$0',  label: 'Upfront to start'    },
  { number: '6',   label: 'Countries served'     },
  { number: '7+',  label: 'Person in-house team' },
  { number: '75+', label: 'Services offered'     },
]

// ── AUDIENCE CARDS (WHO WE HELP) ─────────────────────────────
export const AUDIENCES = [
  {
    accentColor: '#075aaa',
    label:       'Ecommerce & Shopify',
    title:       'More traffic, more conversions, more repeat buyers',
    desc:        'Shopify builds, paid ads, email automation, ecommerce SEO and loyalty programs for D2C brands ready to scale.',
    services:    [
      'Shopify Builds & Redesigns',
      'Google & Meta Ads',
      'Email & Klaviyo',
      'Ecommerce SEO',
      'Loyalty & Referral Programs',
    ],
    cta:  'See ecommerce services',
    href: '/for/ecommerce',
  },
  {
    accentColor: '#5b21b6',
    label:       'Creators & Coaches',
    title:       'Grow your audience and sell while you sleep',
    desc:        'Instagram and YouTube growth strategy, course funnels and the website to anchor it all.',
    services:    [
      'Instagram Growth Sprint',
      'YouTube Strategy & SEO',
      'Course Launch Funnels',
      'Digital Product Sales Pages',
      'Email & Newsletter',
    ],
    cta:  'See creator services',
    href: '/for/creators',
  },
  {
    accentColor: '#0891b2',
    label:       'Startups',
    title:       'Launch looking like an established brand',
    desc:        'Everything from your first website to your first campaign — built to grow from day one.',
    services:    [
      'Website Design',
      'Paid Ads Setup',
      'SEO & Content',
      'Lead Gen Funnels',
      'Analytics & Tracking',
    ],
    cta:  'See startup services',
    href: '/for/startups',
  },
]

// ── SERVICE PILLARS ──────────────────────────────────────────
export const PILLARS = [
  {
    icon:     '🌐',
    title:    'Websites & Stores',
    desc:     'Websites, Shopify stores, landing pages, apps and custom web software built to convert',
    href:     '/services/build',
    services: [
      'Website Design & Development',
      'Shopify / WooCommerce Builds',
      'Landing Page Design',
      'UI/UX Design',
      'Custom Web Apps',
      'Mobile App Development',
    ],
  },
  {
    icon:     '📢',
    title:    'Paid Growth',
    desc:     'Google, Meta, TikTok and YouTube ads that pay for themselves — managed by specialists',
    href:     '/services/paid-ads',
    services: [
      'Google Ads (Search & Shopping)',
      'Meta Ads (Facebook & Instagram)',
      'TikTok Ads',
      'YouTube Ads',
      'Amazon & Marketplace Ads',
      'Ad Creative Production',
    ],
  },
  {
    icon:     '📈',
    title:    'Social & Creator Growth',
    desc:     'Instagram and YouTube growth strategy, viral content frameworks and hands-on coaching',
    href:     '/services/social-growth',
    services: [
      'Instagram Growth Sprint',
      'YouTube Channel Strategy',
      'YouTube SEO & Optimization',
      'Viral Reel & Short-Form Strategy',
      'Video Scripts & Hooks Writing',
      'Social Media Coaching (DWY)',
    ],
  },
  {
    icon:     '🤖',
    title:    'SEO & AI Search',
    desc:     'GEO, AEO and SEO so you get found on Google and recommended by AI',
    href:     '/services/ai-search',
    services: [
      'GEO – Generative Engine Optimization',
      'AEO – Answer Engine Optimization',
      'Technical & On-Page SEO',
      'Ecommerce SEO',
      'Content Marketing & Blogging',
      'Link Building & Digital PR',
    ],
  },
  {
    icon:     '🔧',
    title:    'Funnels & Conversion',
    desc:     'Sales funnels, course launches, CRO and conversion copywriting that moves people to act',
    href:     '/services/funnels',
    services: [
      'Sales Funnel Design & Build',
      'Course Launch Funnel',
      'Webinar / VSL Funnel',
      'Funnel Copywriting',
      'Digital Product Sales Pages',
      'GoHighLevel Setup & Automation',
    ],
  },
  {
    icon:     '📧',
    title:    'Email / CRM / Retention',
    desc:     'Email, WhatsApp, loyalty programs, referrals and analytics — your growth back-end',
    href:     '/services/retain-scale',
    services: [
      'Email Marketing & Klaviyo',
      'WhatsApp Marketing',
      'Loyalty Program Setup',
      'Referral & Affiliate Programs',
      'Newsletter Strategy (Beehiiv)',
      'GA4 & Analytics Setup',
    ],
  },
]

// ── FREE WEBSITE SECTION ─────────────────────────────────────
export const FREE_WEBSITE_POINTS = [
  { bold: '$0 upfront',       desc: 'See the site before anything changes hands'   },
  { bold: '100% yours',       desc: 'You own the domain and the code outright'      },
  { bold: 'Built to convert', desc: 'Every page points at one clear next step'      },
  { bold: 'Fast on mobile',   desc: '90+ PageSpeed is what we build toward'         },
]

export const WEBSITE_CARD_ROWS = [
  { label: 'Page Speed',   value: '94 / 100',            valueColor: '#22c55e' },
  { label: 'Mobile First', value: '✓ Built fast',         valueColor: '#82adf5' },
  { label: 'Setup Fee',    value: '$0 to start',          valueColor: '#075aaa' },
  { label: 'Ownership',    value: '100% yours',           valueColor: '#a78bfa' },
  { label: 'Goal',         value: 'Visitors → Customers', valueColor: '#64748b' },
]

// ── SITE-WIDE STATS (STATS STRIP) ────────────────────────────
export const SITE_STATS = [
  { number: '$0',   label: 'Upfront to start'        },
  { number: '90+',  label: 'Mobile PageSpeed target' },
  { number: '75+',  label: 'Services in-house'       },
  { number: '6',    label: 'Global markets'          },
  { number: '3',    label: 'Client types we serve'   },
]

// ── TESTIMONIALS ─────────────────────────────────────────────
// Replace these with real client testimonials before launch.
export const TESTIMONIALS = [
  {
    quote:   'They rebuilt our Shopify store and we went from £8k to £34k a month in 90 days. Their Meta ads team actually knows what they\'re doing.',
    name:    'Sarah M.',
    role:    'Founder',
    company: 'Ecommerce Brand, UK',
    initial: 'S',
  },
  {
    quote:   'Infinite Weblinks built my entire coaching funnel — website, Instagram growth strategy and course launch. My first launch did $22k.',
    name:    'James T.',
    role:    'Business Coach',
    company: 'Creator, US',
    initial: 'J',
  },
  {
    quote:   'We launched our startup with their team and hit our first 1,000 users in 6 weeks. The site and the Google Ads they set up were a big part of that.',
    name:    'Priya K.',
    role:    'Co-founder',
    company: 'Startup, Australia',
    initial: 'P',
  },
]

// ── FOOTER ───────────────────────────────────────────────────
export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Websites & Stores',     href: '/services/build'         },
      { label: 'Paid Growth',           href: '/services/paid-ads'      },
      { label: 'Social & Creator Growth', href: '/services/social-growth' },
      { label: 'SEO & AI Search',       href: '/services/ai-search'     },
      { label: 'Funnels & Conversion',  href: '/services/funnels'       },
      { label: 'Email / CRM / Retention', href: '/services/retain-scale' },
    ],
  },
  {
    title: 'For',
    links: [
      { label: 'Ecommerce & Shopify', href: '/for/ecommerce' },
      { label: 'Creators & Coaches',  href: '/for/creators'  },
      { label: 'Startups',            href: '/for/startups'  },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Free Website', href: '/website' },
      { label: 'Results',      href: '/results' },
      { label: 'About',        href: '/about'   },
      { label: 'Contact',      href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy',   href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms'          },
      { label: 'Cookie Policy',    href: '/cookie-policy'  },
    ],
  },
]
