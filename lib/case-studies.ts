/**
 * INFINITE WEBLINKS — CASE STUDIES
 *
 * Add new case studies here. They appear automatically on /results.
 *
 * HOW TO ADD A CASE STUDY:
 * 1. Copy the object below
 * 2. Fill in all fields
 * 3. Add it to the CASE_STUDIES array
 * 4. Done — it appears on the results page automatically
 */

export interface CaseStudy {
  id:             string
  /** Short category label shown in the eyebrow — e.g. "Ecommerce", "Creator", "Startup" */
  category:       string
  /** e.g. "D2C Skincare Brand" — don't use real names unless you have permission */
  client:         string
  location:       string
  /** 1–2 sentences: what was the problem before you got involved? */
  challenge:      string
  /** Bullet list: what did you actually do? */
  approach:       string[]
  /** The headline number — e.g. "£8k → £34k/month" */
  result:         string
  /** Short context — e.g. "in 90 days" */
  resultContext:  string
  /** Which of your 6 services were involved */
  services:       string[]
  /** Optional testimonial quote */
  quote?:         string
  quoteName?:     string
  quoteRole?:     string
  /** Accent colour for this card — use one of your brand colours */
  accentColor:    string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id:            'uk-ecommerce-shopify',
    category:      'Ecommerce',
    client:        'D2C Brand',
    location:      'United Kingdom',
    challenge:
      'A UK ecommerce brand with a slow, underperforming Shopify store and Meta ads that were eating budget without returning revenue. Their mobile conversion rate was half the industry average.',
    approach: [
      'Full Shopify store rebuild — mobile-first, conversion-optimised',
      'Meta ads restructured around real customer segments and margins',
      'Klaviyo email flows set up: welcome, abandoned cart, post-purchase',
      'Product page copy rewritten for clarity and urgency',
    ],
    result:        '£8k → £34k/month',
    resultContext: 'in 90 days',
    services:      ['Shopify Build', 'Meta Ads', 'Email & Klaviyo'],
    quote:
      'They rebuilt our Shopify store and we went from £8k to £34k a month in 90 days. Their Meta ads team actually knows what they\'re doing.',
    quoteName:   'Sarah M.',
    quoteRole:   'Founder · D2C Brand, UK',
    accentColor: '#075aaa',
  },
  {
    id:            'us-coach-course-launch',
    category:      'Creator',
    client:        'Business Coach',
    location:      'United States',
    challenge:
      'A business coach with a strong Instagram following but no system for monetising it. Selling was ad-hoc — a story here, a DM there — with no funnel, no email list and no course platform.',
    approach: [
      'New website and sales landing page built around the coaching offer',
      'Instagram growth strategy — content pillars, hook frameworks, posting system',
      'Kajabi course platform set up, branded and connected to payments',
      'Full course launch funnel: waitlist, pre-launch emails, open cart, close sequence',
      'Email list built from scratch using a lead magnet',
    ],
    result:        '$22k',
    resultContext: 'on first course launch',
    services:      ['Landing Page', 'Social Growth', 'Course Funnel', 'Email'],
    quote:
      'Infinite Weblinks built my entire coaching funnel — website, Instagram growth strategy and course launch. My first launch did $22k.',
    quoteName:   'James T.',
    quoteRole:   'Business Coach · Creator, US',
    accentColor: '#5b21b6',
  },
  {
    id:            'au-startup-user-growth',
    category:      'Startup',
    client:        'Early-Stage Startup',
    location:      'Australia',
    challenge:
      'An Australian startup launching a new product with no digital presence, no tracking and a tight budget. They needed to look credible and start acquiring users immediately — not in six months.',
    approach: [
      'Website built and live within one week — credible, fast and conversion-focused',
      'GA4 and Google Tag Manager wired in from day one with full event tracking',
      'Google Ads campaigns launched targeting high-intent search terms',
      'Conversion tracking set up so every dollar of spend was accountable',
    ],
    result:        '1,000 users',
    resultContext: 'in 6 weeks from launch',
    services:      ['Website Build', 'Google Ads', 'Analytics & Tracking'],
    quote:
      'We launched our startup with their team and hit our first 1,000 users in 6 weeks. The site and the Google Ads they set up were a big part of that.',
    quoteName:   'Priya K.',
    quoteRole:   'Co-founder · Startup, Australia',
    accentColor: '#0891b2',
  },

  // ── ADD NEW CASE STUDIES BELOW ───────────────────────────────────────────
  // Copy the block above, fill in your real numbers and paste it here.
]

/** Aggregate stats shown at the top of the Results page.
 *  Update these as you add more case studies. */
export const RESULTS_STATS = [
  { number: '4×',    label: 'Average revenue growth for ecommerce clients'    },
  { number: '90',    label: 'Days to first significant result on average'       },
  { number: '75+',   label: 'Services delivered in-house'                      },
  { number: '3',     label: 'Client types: ecommerce, creators, startups'      },
  { number: '6',     label: 'Countries we\'ve delivered results in'            },
]
