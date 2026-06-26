/**
 * INFINITE WEBLINKS — AUDIENCE PAGE CONTENT
 *
 * Content for the four audience-specific pages:
 * /for/ecommerce · /for/creators · /for/startups · /for/local
 *
 * Edit headlines, pain points and services here.
 * The AudiencePageTemplate reads from this file automatically.
 */

export interface AudienceService {
  icon: string
  name: string
  desc: string
  href: string
}

export interface JourneyStep {
  number: string
  title:  string
  desc:   string
}

export interface AudiencePageData {
  slug:         string
  label:        string
  title:        string
  subtitle:     string
  accentColor:  string
  seoTitle:     string
  seoDesc:      string
  painPoints:   string[]
  services:     AudienceService[]
  journey:      JourneyStep[]
  result: {
    stat:    string
    context: string
    quote:   string
    name:    string
    role:    string
  }
}

export const AUDIENCE_PAGES: Record<string, AudiencePageData> = {

  // ── ECOMMERCE ─────────────────────────────────────────────
  ecommerce: {
    slug:        'ecommerce',
    label:       'Ecommerce & Shopify',
    title:       'More traffic. More conversions. More repeat buyers.',
    subtitle:    'We build Shopify stores that convert, run the paid ads that fill them, and set up the email and retention systems that turn one-time buyers into customers for life.',
    accentColor: '#0a5bc4',
    seoTitle:    'Ecommerce & Shopify Growth Agency — Ads, Email, SEO & Store Builds',
    seoDesc:     'Full-stack ecommerce growth for D2C and Shopify brands. Store builds, Google and Meta ads, Klaviyo email, ecommerce SEO, CRO and loyalty programs. US, UK, Australia and beyond.',
    painPoints: [
      'Paying for traffic that hits a site which doesn\'t convert',
      'Ad spend going up but revenue not following it',
      'Customers who buy once and never come back',
      'SEO that\'s an afterthought rather than a real channel',
      'Managing five different agencies with no joined-up strategy',
    ],
    services: [
      {
        icon: '🌐',
        name: 'Shopify Store Builds & Redesigns',
        desc: 'Conversion-first Shopify builds from scratch or a full rebuild of what you have. Fast, mobile-first and designed to sell.',
        href: '/services/build',
      },
      {
        icon: '📢',
        name: 'Google & Meta Ads',
        desc: 'Search, Shopping, Meta and TikTok campaigns managed around your margins — not just your click volume.',
        href: '/services/paid-ads',
      },
      {
        icon: '📧',
        name: 'Email & Klaviyo',
        desc: 'All core Klaviyo flows built and running — welcome, abandoned cart, post-purchase, win-back — plus regular broadcast campaigns.',
        href: '/services/retain-scale',
      },
      {
        icon: '🔍',
        name: 'Ecommerce SEO',
        desc: 'Product and category pages that rank for buying-intent keywords and convert when people land on them.',
        href: '/services/ai-search',
      },
      {
        icon: '🔧',
        name: 'CRO & Funnel Optimisation',
        desc: 'Find what\'s stopping people from adding to cart and checking out — then fix it with data, not guesswork.',
        href: '/services/funnels',
      },
      {
        icon: '🎁',
        name: 'Loyalty & Referral Programs',
        desc: 'Points, rewards and referral systems that bring buyers back and turn your customers into your best marketing channel.',
        href: '/services/retain-scale',
      },
    ],
    journey: [
      {
        number: '01',
        title:  'Start with a free website',
        desc:   'We build your new Shopify store or landing page first — you see it live before any money changes hands.',
      },
      {
        number: '02',
        title:  'Turn on the ads',
        desc:   'Once your site converts, we launch Google Shopping, Meta and TikTok campaigns built around your actual margins.',
      },
      {
        number: '03',
        title:  'Set up email and retention',
        desc:   'Klaviyo flows go live — welcome, cart abandonment, post-purchase and win-back — so every buyer is followed up automatically.',
      },
      {
        number: '04',
        title:  'Build organic and loyalty',
        desc:   'Ecommerce SEO and a loyalty program compound your growth month on month without increasing your ad spend.',
      },
    ],
    result: {
      stat:    '£8k → £34k/month',
      context: 'in 90 days',
      quote:   'They rebuilt our Shopify store and we went from £8k to £34k a month in 90 days. Their Meta ads team actually knows what they\'re doing.',
      name:    'Sarah M.',
      role:    'Founder · Ecommerce Brand, UK',
    },
  },

  // ── CREATORS ──────────────────────────────────────────────
  creators: {
    slug:        'creators',
    label:       'Creators & Coaches',
    title:       'Grow your audience. Build your system. Sell while you sleep.',
    subtitle:    'We help creators and coaches turn followers into buyers — with the website, Instagram and YouTube growth, course funnels and email systems that make it happen without burning out.',
    accentColor: '#5b21b6',
    seoTitle:    'Digital Marketing for Creators & Coaches — Instagram Growth, Course Funnels & More',
    seoDesc:     'We help creators and coaches grow on Instagram and YouTube, launch courses, build funnels and create websites that sell. Serving coaches, influencers and educators worldwide.',
    painPoints: [
      'Followers who engage with your content but never become buyers',
      'Selling from a link in bio instead of a proper site that works',
      'No system for launching — just posting and hoping something converts',
      'One algorithm change wipes out your reach overnight',
      'Doing everything yourself with no team and no leverage',
    ],
    services: [
      {
        icon: '🌐',
        name: 'Website & Landing Pages',
        desc: 'Your home base — a conversion-first website that turns visitors into subscribers, clients and buyers. Built around what you sell, not just how you look.',
        href: '/services/build',
      },
      {
        icon: '📈',
        name: 'Instagram & YouTube Growth',
        desc: 'Strategy, hooks, scripts and coaching to grow real audiences on the platforms where your buyers actually are.',
        href: '/services/social-growth',
      },
      {
        icon: '🔧',
        name: 'Course Launch Funnels',
        desc: 'The full launch sequence — waitlist, pre-launch emails, sales page and cart close — built and ready before you open.',
        href: '/services/funnels',
      },
      {
        icon: '🎓',
        name: 'Course Platform Setup',
        desc: 'Kajabi, Teachable or Thinkific built, branded and connected to your payment system, email list and checkout flow.',
        href: '/services/funnels',
      },
      {
        icon: '📧',
        name: 'Email & Newsletter',
        desc: 'An email list you own — independent of any algorithm. Welcome sequences, launch emails and Beehiiv or Substack setup.',
        href: '/services/retain-scale',
      },
      {
        icon: '📢',
        name: 'Meta & YouTube Ads',
        desc: 'Once your organic is working, we scale it with paid — promoting your best content and driving traffic to your funnels.',
        href: '/services/paid-ads',
      },
    ],
    journey: [
      {
        number: '01',
        title:  'Build your home base',
        desc:   'A website and landing page that gives your audience somewhere to go — and something to buy — beyond a link in bio.',
      },
      {
        number: '02',
        title:  'Grow your audience',
        desc:   'Instagram growth strategy, YouTube SEO and viral reel frameworks that build real followers in your niche.',
      },
      {
        number: '03',
        title:  'Capture and nurture',
        desc:   'A lead magnet and email sequence that turns new followers into subscribers you can sell to without relying on the algorithm.',
      },
      {
        number: '04',
        title:  'Launch and scale',
        desc:   'A course launch funnel that converts your list into buyers — and paid ads that scale what already works organically.',
      },
    ],
    result: {
      stat:    '$22k',
      context: 'on first course launch',
      quote:   'Infinite Weblinks built my entire coaching funnel — website, Instagram growth strategy and course launch. My first launch did $22k.',
      name:    'James T.',
      role:    'Business Coach · Creator, US',
    },
  },

  // ── STARTUPS ──────────────────────────────────────────────
  startups: {
    slug:        'startups',
    label:       'Startups',
    title:       'Launch looking like an established brand. Grow like one too.',
    subtitle:    'We give startups the marketing infrastructure that most don\'t build until Series A — a site that converts, tracked from day one, with the right acquisition channels running from week one.',
    accentColor: '#0891b2',
    seoTitle:    'Digital Marketing for Startups — Website, Ads, SEO & Growth Strategy',
    seoDesc:     'Full-stack digital marketing for startups and small businesses. Website builds, paid ads, SEO, analytics setup, funnels and growth strategy. Serving startups across the US, UK, Australia and Europe.',
    painPoints: [
      'A website that makes you look like a startup instead of a serious business',
      'Burning early budget on ads before your site can convert the traffic',
      'No tracking — making decisions based on gut feel instead of data',
      'Trying to run five marketing channels at once with a tiny team',
      'Agencies that want you to sign 12-month retainers before you have product-market fit',
    ],
    services: [
      {
        icon: '🌐',
        name: 'Website Design & Development',
        desc: 'A site that makes you look established from day one — fast, credible and built around the one action you want visitors to take.',
        href: '/services/build',
      },
      {
        icon: '📊',
        name: 'Analytics & Tracking Setup',
        desc: 'GA4, GTM and server-side tracking wired in from launch — so you know where every user comes from and what they do.',
        href: '/services/retain-scale',
      },
      {
        icon: '📢',
        name: 'Paid Acquisition',
        desc: 'Google and Meta ads that find your first customers efficiently, with tracking that tells you what\'s actually working.',
        href: '/services/paid-ads',
      },
      {
        icon: '🔍',
        name: 'SEO & Content',
        desc: 'Technical SEO and content that builds organic traffic alongside your paid channels — so you\'re not dependent on ad spend forever.',
        href: '/services/ai-search',
      },
      {
        icon: '🔧',
        name: 'Lead Gen Funnels',
        desc: 'Landing pages, lead magnets and email sequences that capture and nurture leads while your team focuses on the product.',
        href: '/services/funnels',
      },
      {
        icon: '🤖',
        name: 'GEO & AI Search Visibility',
        desc: 'Get your brand cited in ChatGPT, Perplexity and AI Overviews — the channels early movers are winning right now.',
        href: '/services/ai-search',
      },
    ],
    journey: [
      {
        number: '01',
        title:  'Launch with a site that converts',
        desc:   'We build your website first — free, on a live link, before you pay anything. You approve it, we connect your domain.',
      },
      {
        number: '02',
        title:  'Wire in tracking from day one',
        desc:   'GA4, GTM and server-side tracking set up at launch — not retrofitted later when you\'ve already lost 6 months of data.',
      },
      {
        number: '03',
        title:  'Turn on acquisition',
        desc:   'Paid ads on the channel where your buyers actually are — tested quickly, scaled on what the data says is working.',
      },
      {
        number: '04',
        title:  'Build organic alongside paid',
        desc:   'SEO and GEO running in parallel so your cost of acquisition drops as the business matures.',
      },
    ],
    result: {
      stat:    '1,000 users',
      context: 'in 6 weeks',
      quote:   'We launched our startup with their team and hit our first 1,000 users in 6 weeks. The site and the Google Ads they set up were a big part of that.',
      name:    'Priya K.',
      role:    'Co-founder · Startup, Australia',
    },
  },

  // ── LOCAL & SERVICE BUSINESSES ────────────────────────────
  local: {
    slug:        'local',
    label:       'Local & Service Businesses',
    title:       'More calls, more bookings, more customers from your local area.',
    subtitle:    'We build the website, set up Google Search, run local SEO and connect a booking and follow-up system — so your phone stops being quiet.',
    accentColor: '#059669',
    seoTitle:    'Digital Marketing for Local & Service Businesses — Get More Leads',
    seoDesc:     'We help local trades, service providers and small businesses get found on Google, generate more enquiries and convert them into customers. No upfront cost to start.',
    painPoints: [
      'Customers search on Google but your business is nowhere to be seen',
      'You rely on referrals but want a consistent flow of new enquiries',
      'Your current website looks outdated and sends people to a competitor',
      'You have no system to follow up with leads who enquired but did not book',
      'You are paying for ads but not sure if they are actually working',
    ],
    services: [
      {
        icon: '🌐',
        name: 'Professional Website',
        desc: 'A clean, fast, mobile-first website that tells people exactly what you do, where you operate and how to get in touch. Built and ready within a week.',
        href: '/services/build',
      },
      {
        icon: '📍',
        name: 'Local SEO',
        desc: 'Google Business Profile setup and optimisation, local citations, geo-targeted pages and review management — so you appear when people in your area search.',
        href: '/services/ai-search',
      },
      {
        icon: '📢',
        name: 'Google Search Ads',
        desc: 'Ads targeted to your exact service area, showing up for the searches your customers actually type. Tracked so you know exactly what each lead costs.',
        href: '/services/paid-ads',
      },
      {
        icon: '📅',
        name: 'Booking & Enquiry Flow',
        desc: 'An online booking form or enquiry page that captures the right information and sends instant confirmation — so you spend less time on the phone.',
        href: '/services/funnels',
      },
      {
        icon: '📧',
        name: 'Lead Follow-Up System',
        desc: 'Automated email and SMS sequences that follow up with enquiries who did not book, remind past customers you exist and ask for reviews.',
        href: '/services/retain-scale',
      },
      {
        icon: '🤖',
        name: 'AI Search Visibility',
        desc: 'Get your business showing up when people ask ChatGPT, Perplexity or Google AI for recommendations in your area and category.',
        href: '/services/ai-search',
      },
    ],
    journey: [
      {
        number: '01',
        title:  'Get a professional website',
        desc:   'We build it first at no upfront cost. You see a live version before anything changes hands.',
      },
      {
        number: '02',
        title:  'Show up on Google',
        desc:   'We set up your Google Business Profile, sort your local SEO and turn on Google Search Ads for your area.',
      },
      {
        number: '03',
        title:  'Capture every lead',
        desc:   'A booking or enquiry form that works on mobile, sends you instant notifications and captures all the details you need.',
      },
      {
        number: '04',
        title:  'Follow up automatically',
        desc:   'Email and SMS sequences that chase up leads, re-engage past customers and ask happy clients for reviews.',
      },
    ],
    result: {
      stat:    '3× more enquiries',
      context: 'in 60 days',
      quote:   'Before Infinite Weblinks, I was getting maybe two or three enquiries a week from my website. Now it is closer to ten. The Google Ads and the new site made a big difference.',
      name:    'Mark D.',
      role:    'Owner · Local Service Business, UK',
    },
  },
}
