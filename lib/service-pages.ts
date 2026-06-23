/**
 * INFINITE WEBLINKS — SERVICE PAGE CONTENT
 *
 * All content for the 6 service pillar pages lives here.
 * Edit service names, descriptions and bullet points in this file.
 * The template component reads from here automatically.
 */

export interface ServiceItem {
  name:    string
  desc:    string
  bullets: string[]
}

export interface ConnectsToItem {
  icon:  string
  label: string
  href:  string
  desc:  string
}

export interface ServicePageData {
  slug:         string
  icon:         string
  pillarLabel:  string
  title:        string
  subtitle:     string
  accentColor:  string
  seoTitle:     string
  seoDesc:      string
  services:     ServiceItem[]
  connectsTo:   ConnectsToItem[]
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {

  // ── BUILD ───────────────────────────────────────────────────
  build: {
    slug:        'build',
    icon:        '🌐',
    pillarLabel: 'Build',
    title:       'Websites and digital products built to convert',
    subtitle:    'We design and build sites that do one thing well — turn visitors into customers. Fast, mobile-first and built around the action you want people to take.',
    accentColor: '#075aaa',
    seoTitle:    'Web Design & Development — Shopify, Landing Pages & Custom Builds',
    seoDesc:     'Custom websites, Shopify stores, landing pages and web apps built to convert. Based remotely, serving ecommerce brands, creators and startups worldwide.',
    services: [
      {
        name: 'Website Design & Development',
        desc: 'Custom websites built from scratch around your brand, your customers and one clear goal. Not a template — designed and coded specifically for your business.',
        bullets: ['Conversion-first design', 'Mobile-first build', 'Fast load times (90+ PageSpeed)', 'SEO-ready structure from day one', 'Clean, handoff-ready code'],
      },
      {
        name: 'Shopify / WooCommerce Store Builds',
        desc: 'Full ecommerce builds from zero — product pages, collections, cart, checkout and everything in between. Optimised for mobile shoppers and fast loading.',
        bullets: ['Product & collection pages', 'Cart and checkout flow', 'Payment gateway setup', 'Mobile-optimised throughout', 'Analytics wired in from launch'],
      },
      {
        name: 'Shopify Plus Development',
        desc: 'Advanced Shopify builds for high-volume brands that need custom checkout, B2B functionality or multi-store setups. Shopify Plus certified approach.',
        bullets: ['Custom checkout extensions', 'B2B / wholesale functionality', 'Multi-store setup', 'Advanced app integrations', 'Scripts and automations'],
      },
      {
        name: 'Landing Page Design & Build',
        desc: 'Single-goal pages built for ad campaigns, product launches and lead capture. Designed to convert the traffic you\'re already paying for.',
        bullets: ['Conversion-optimised layout', 'Fast to build and ship', 'A/B test ready', 'Formspree or Typeform integration', 'Matches your ad creative'],
      },
      {
        name: 'UI/UX Design',
        desc: 'Interface design before development — wireframes to high-fidelity screens. We work out how people move through your site before a line of code is written.',
        bullets: ['User journey mapping', 'Wireframes and prototypes', 'High-fidelity Figma designs', 'Design system and components', 'Handoff-ready files for developers'],
      },
      {
        name: 'Website Redesigns & Migrations',
        desc: 'Rebuild your existing site with better design and faster performance, or move it to a new platform without losing your SEO rankings.',
        bullets: ['Platform migrations (Shopify, Next.js, Webflow)', 'Design and UX refresh', 'Speed and performance improvements', 'SEO preservation throughout', 'Content migration'],
      },
      {
        name: 'Custom Web App Development',
        desc: 'Bespoke web software — client portals, internal tools, dashboards, booking systems and anything that needs custom logic beyond a standard website.',
        bullets: ['React / Next.js development', 'API and third-party integrations', 'Admin panels and dashboards', 'Authentication and user accounts', 'Database design'],
      },
      {
        name: 'Mobile App Development',
        desc: 'Native iOS and Android apps built for your users. From concept to App Store submission, handled by our in-house development team.',
        bullets: ['Native iOS and Android builds', 'React Native option available', 'App Store and Play Store submission', 'Push notifications', 'API integration with your backend'],
      },
      {
        name: 'CRO — Conversion Rate Optimization',
        desc: 'Turn more of your existing traffic into customers without spending more on ads. We find what\'s stopping people from converting and fix it.',
        bullets: ['Heat mapping and session recording', 'A/B and multivariate testing', 'UX and funnel analysis', 'Checkout optimisation', 'Form and CTA improvements'],
      },
    ],
    connectsTo: [
      { icon: '📢', label: 'Paid Ads',      href: '/services/paid-ads',     desc: 'Send the right traffic to your new site'          },
      { icon: '🤖', label: 'AI & Search',   href: '/services/ai-search',    desc: 'Get found organically and in AI answers'          },
      { icon: '🔧', label: 'Funnels & CRO', href: '/services/funnels',      desc: 'Turn more of that traffic into paying customers'  },
    ],
  },

  // ── PAID ADS ─────────────────────────────────────────────────
  'paid-ads': {
    slug:        'paid-ads',
    icon:        '📢',
    pillarLabel: 'Paid Ads',
    title:       'Ads that pay for themselves',
    subtitle:    'We manage Google, Meta, TikTok and YouTube ads with one goal — profitable growth. No vanity metrics, no fluff. Spend goes in, revenue comes out.',
    accentColor: '#075aaa',
    seoTitle:    'Paid Ads Management — Google, Meta, TikTok & YouTube Ads Agency',
    seoDesc:     'Performance-focused paid ads management across Google, Meta, TikTok, YouTube and Amazon. Ecommerce brands, creators and startups across the US, UK and beyond.',
    services: [
      {
        name: 'Google Ads (Search & Shopping)',
        desc: 'Capture buyers who are already searching for what you sell. Search and Shopping campaigns built around your margins, not just your click volume.',
        bullets: ['Search and Performance Max campaigns', 'Google Shopping setup and feed management', 'Keyword research and negative keyword lists', 'Bid strategy and budget management', 'Weekly performance optimisation'],
      },
      {
        name: 'Meta Ads (Facebook & Instagram)',
        desc: 'Paid social that builds audiences, drives conversions and retargets people who didn\'t buy first time. Creative strategy is built in — not an afterthought.',
        bullets: ['Campaign strategy and structure', 'Creative testing frameworks', 'Retargeting and lookalike audiences', 'Catalog and dynamic ads for ecommerce', 'iOS-privacy-proof tracking setup'],
      },
      {
        name: 'TikTok Ads',
        desc: 'Reach younger, high-intent audiences with video ad campaigns that feel native to the platform. We handle creative direction, targeting and optimisation.',
        bullets: ['Creative strategy for TikTok format', 'Hook and format testing', 'Interest and behavioural targeting', 'TopView, In-Feed and Spark Ads', 'Conversion tracking and pixel setup'],
      },
      {
        name: 'YouTube Ads',
        desc: 'Video advertising that reaches people when they\'re already watching content in your niche. Pre-roll, skippable and discovery formats.',
        bullets: ['Script and creative direction', 'In-stream and discovery ads', 'Audience targeting and remarketing', 'Thumbnail split testing', 'View-through conversion tracking'],
      },
      {
        name: 'Amazon & Marketplace Ads',
        desc: 'Sponsored Products, Brands and Display on Amazon — built to win the Buy Box and outrank competitors on product searches.',
        bullets: ['Sponsored Products and Brands', 'Product targeting and keyword bids', 'Listing quality improvements', 'ACoS and TACoS optimisation', 'Competitor conquest campaigns'],
      },
      {
        name: 'Programmatic / Display Ads',
        desc: 'Banner and retargeting campaigns across premium publishers — keeps your brand visible to people who\'ve visited your site but haven\'t converted yet.',
        bullets: ['Audience-based and contextual targeting', 'Retargeting across the web', 'Creative sets in all standard formats', 'Frequency capping and brand safety', 'Viewability and engagement reporting'],
      },
      {
        name: 'Ad Creative Production',
        desc: 'Graphics, short-form video and copy built specifically for paid campaigns — not repurposed brand assets. Creative that\'s designed to stop the scroll and drive clicks.',
        bullets: ['Static and animated graphics', 'Short-form video editing', 'Ad copywriting for all platforms', 'Platform-specific format variations', 'UGC-style creative for social ads'],
      },
    ],
    connectsTo: [
      { icon: '🌐', label: 'Build',          href: '/services/build',        desc: 'Make sure your site converts the traffic you\'re paying for' },
      { icon: '🔧', label: 'Funnels & CRO',  href: '/services/funnels',      desc: 'Build the landing pages and funnels ads send people to'       },
      { icon: '📊', label: 'Retain & Scale',  href: '/services/retain-scale', desc: 'Turn one-time buyers into repeat customers'                   },
    ],
  },

  // ── SOCIAL GROWTH ─────────────────────────────────────────────
  'social-growth': {
    slug:        'social-growth',
    icon:        '📈',
    pillarLabel: 'Social Growth',
    title:       'Instagram and YouTube growth that\'s actually a strategy',
    subtitle:    'We help ecommerce brands, creators and coaches build real audiences on Instagram and YouTube — with a system, not just a posting schedule.',
    accentColor: '#5b21b6',
    seoTitle:    'Social Media Growth — Instagram & YouTube Strategy, Coaching & Viral Content',
    seoDesc:     'Instagram growth sprints, YouTube channel strategy, viral reel frameworks and social media coaching for creators, ecommerce brands and coaches worldwide.',
    services: [
      {
        name: 'Social Media Growth Audit & Strategy',
        desc: 'A deep review of your current accounts — what\'s working, what\'s not, and a 90-day roadmap to fix it. The foundation before anything else.',
        bullets: ['Full account and content audit', 'Competitor and market analysis', 'Content gap identification', '90-day prioritised growth plan', 'Platform-specific recommendations'],
      },
      {
        name: 'Instagram Growth Sprint',
        desc: 'A focused 30, 60 or 90-day push on Instagram — profile, content, posting and engagement all working together toward a real follower and reach target.',
        bullets: ['Profile and bio optimisation', 'Content strategy and topic pillars', 'Hashtag and SEO strategy', 'Posting schedule and timing', 'Engagement and community tactics'],
      },
      {
        name: 'YouTube Channel Growth Strategy',
        desc: 'Build a YouTube channel that compounds — more subscribers, more views and more revenue over time. Built around your niche, your audience and a realistic posting cadence.',
        bullets: ['Channel audit and positioning', 'Niche and keyword research', 'Content series and topic strategy', 'Upload schedule and thumbnail system', 'Monetisation roadmap'],
      },
      {
        name: 'YouTube SEO & Optimization',
        desc: 'Get your videos found in YouTube search and Suggested. The right titles, descriptions, tags and thumbnails make the difference between 100 and 100,000 views.',
        bullets: ['Keyword research for YouTube search', 'Title and description optimisation', 'Tag strategy', 'Thumbnail direction and split testing', 'Playlist and chapter structure'],
      },
      {
        name: 'Viral Reel & Short-Form Strategy',
        desc: 'The framework for creating short-form content that actually reaches new audiences — hooks, formats, trends and the timing that the algorithm rewards.',
        bullets: ['Hook frameworks that stop the scroll', 'Trend research and timing strategy', 'Format templates for Reels and Shorts', 'Content angles that drive shares', 'Posting rhythm for maximum reach'],
      },
      {
        name: 'Video Scripts & Hooks Writing',
        desc: 'Attention-stopping scripts written specifically for short-form video. The first three seconds decide everything — we write hooks that make people stay.',
        bullets: ['Hook writing across proven formats', 'Full script structure', 'CTA scripting and placement', 'Platform-specific tone and pacing', 'Batch scripting (weekly or monthly)'],
      },
      {
        name: 'Content Calendar Planning',
        desc: 'A monthly roadmap that tells you exactly what to post, in what format, on which platform and when. No more staring at a blank screen.',
        bullets: ['30-day content calendar', 'Topic clusters and content pillars', 'Format mix (Reels, carousels, static, Stories)', 'Repurposing plan across platforms', 'Seasonal and campaign overlays'],
      },
      {
        name: 'Caption & Content Copywriting',
        desc: 'Captions, carousel copy and post text written in your brand voice — designed to drive saves, shares and comments, not just likes.',
        bullets: ['Caption writing for all post types', 'Carousel slide copy', 'CTA writing', 'Brand voice development', 'Monthly caption batches'],
      },
      {
        name: 'Social Media Coaching (Done-With-You)',
        desc: 'Strategy calls and content feedback on a regular cadence while you do the execution. You stay in control, we make sure you\'re doing the right things.',
        bullets: ['Bi-weekly or monthly strategy calls', 'Content review and feedback', 'Strategy adjustments as you grow', 'Q&A and direct message access', 'Growth tracking and accountability'],
      },
      {
        name: 'Social Media Templates & Playbooks',
        desc: 'Self-serve packs you buy once and use forever — hook templates, caption formulas, content calendars and growth checklists you can apply on your own.',
        bullets: ['Hook and opener template library', 'Caption formula pack', 'Content calendar template', 'Platform growth checklist', 'Repurposing workflow guide'],
      },
    ],
    connectsTo: [
      { icon: '🌐', label: 'Build',         href: '/services/build',     desc: 'Turn your audience into buyers with a site that converts'    },
      { icon: '📢', label: 'Paid Ads',      href: '/services/paid-ads',  desc: 'Amplify your best organic content with paid promotion'       },
      { icon: '🔧', label: 'Funnels & CRO', href: '/services/funnels',   desc: 'Monetise your audience with a proper funnel and offer'       },
    ],
  },

  // ── AI & SEARCH ──────────────────────────────────────────────
  'ai-search': {
    slug:        'ai-search',
    icon:        '🤖',
    pillarLabel: 'AI & Search',
    title:       'Get found on Google. Get recommended by AI.',
    subtitle:    'SEO gets you ranking on Google. GEO and AEO get your brand cited inside ChatGPT, Perplexity and AI Overviews. In 2026, you need both.',
    accentColor: '#0891b2',
    seoTitle:    'SEO, GEO & AEO Agency — Get Found on Google and in AI Search',
    seoDesc:     'Technical SEO, ecommerce SEO, GEO (Generative Engine Optimisation) and AEO (Answer Engine Optimisation) for brands that want to be found everywhere in 2026.',
    services: [
      {
        name: 'GEO — Generative Engine Optimization',
        desc: 'Get your brand cited inside AI-generated answers on ChatGPT, Perplexity and Google AI Overviews. The brands that appear there don\'t pay per click — they\'re just trusted sources.',
        bullets: ['Entity and brand authority building', 'Structured data and schema markup', 'Citation and mention building', 'LLM visibility tracking and reporting', 'Content structured for AI extraction'],
      },
      {
        name: 'AEO — Answer Engine Optimization',
        desc: 'Win the featured snippets, People Also Ask boxes and AI answer panels that sit above organic results. Your answer shows up before anyone has to scroll.',
        bullets: ['Question-based keyword research', 'Content restructuring for answers', 'Schema markup for rich results', 'Featured snippet targeting', 'Voice search optimisation'],
      },
      {
        name: 'Technical SEO',
        desc: 'Fix the foundations — crawlability, indexing, speed and Core Web Vitals. Technical issues silently kill rankings; a technical audit finds and fixes them.',
        bullets: ['Full technical site audit', 'Core Web Vitals improvement', 'Index coverage and crawl budget', 'Redirect management', 'Internal linking structure'],
      },
      {
        name: 'On-Page SEO',
        desc: 'Keyword research, page-level optimisation and metadata that tells Google exactly what every page is about — and makes users click when they see it.',
        bullets: ['Keyword research and mapping', 'Title tag and meta description writing', 'Header structure and content optimisation', 'Image alt text and compression', 'Page-level content improvements'],
      },
      {
        name: 'Local SEO',
        desc: 'Get found in Google Maps and local search results. For businesses that serve specific cities or regions and want customers to find them first.',
        bullets: ['Google Business Profile optimisation', 'Local citation building and cleanup', 'Review acquisition strategy', 'Local content and landing pages', 'Map Pack ranking improvements'],
      },
      {
        name: 'Ecommerce SEO',
        desc: 'Product and category pages that rank for buying-intent keywords and convert once people land on them. Built for Shopify, WooCommerce and custom stores.',
        bullets: ['Product and category page optimisation', 'Collection and navigation structure', 'Schema markup for products and reviews', 'Faceted navigation and pagination', 'Duplicate content cleanup'],
      },
      {
        name: 'Link Building & Digital PR',
        desc: 'Build domain authority through quality backlinks from relevant, real publications. Outreach campaigns, digital PR and content that earns links naturally.',
        bullets: ['Outreach campaigns to relevant publishers', 'Guest posting on industry sites', 'Digital PR story creation', 'Broken link building', 'Competitor backlink analysis'],
      },
      {
        name: 'Content Marketing & Blogging',
        desc: 'Articles, guides and resources that rank for commercial and informational keywords, build topical authority and bring in qualified traffic every month.',
        bullets: ['Content strategy and topic clusters', 'SEO article writing', 'Internal linking plan', 'Content refresh and update programme', 'Pillar page and cluster model'],
      },
    ],
    connectsTo: [
      { icon: '🌐', label: 'Build',          href: '/services/build',        desc: 'The technical foundation that SEO is built on'              },
      { icon: '📊', label: 'Retain & Scale',  href: '/services/retain-scale', desc: 'Track rankings, traffic and what\'s converting'             },
      { icon: '📢', label: 'Paid Ads',        href: '/services/paid-ads',     desc: 'Cover both paid and organic for maximum search visibility'  },
    ],
  },

  // ── FUNNELS ──────────────────────────────────────────────────
  funnels: {
    slug:        'funnels',
    icon:        '🔧',
    pillarLabel: 'Funnels & CRO',
    title:       'Funnels that turn visitors into buyers',
    subtitle:    'We build the full sequence — landing page, offer, email follow-up, upsell — so the traffic you send somewhere actually converts into revenue.',
    accentColor: '#075aaa',
    seoTitle:    'Funnel Building Agency — Sales Funnels, Course Launches, GoHighLevel & Copywriting',
    seoDesc:     'Sales funnels, course launch funnels, webinar funnels, GoHighLevel setups and high-converting funnel copy. For ecommerce brands, coaches and online businesses.',
    services: [
      {
        name: 'Lead Gen Funnel Strategy & Build',
        desc: 'A funnel designed to capture emails and book discovery calls at scale — with a landing page, thank-you page and an email sequence that nurtures leads until they\'re ready.',
        bullets: ['Lead capture landing page', 'Thank-you and confirmation page', 'Automated email welcome sequence', 'Calendar and booking integration', 'Formspree or HubSpot form setup'],
      },
      {
        name: 'Sales Funnel Design & Development',
        desc: 'An end-to-end funnel from visitor to buyer — sales page, order form, confirmation and post-purchase experience. Built to maximise revenue from every visitor.',
        bullets: ['Long-form sales page', 'Order form and payment integration', 'Upsell and downsell pages', 'Post-purchase confirmation and onboarding', 'Full mobile optimisation'],
      },
      {
        name: 'Webinar / VSL Funnel Build',
        desc: 'Watch → opt-in → buy. A full webinar or video sales letter funnel that warms up cold audiences and converts them through education before the ask.',
        bullets: ['Registration landing page', 'Webinar platform integration', 'Thank-you and reminder sequence', 'Replay page', 'Post-webinar conversion sequence'],
      },
      {
        name: 'Course Launch Funnel',
        desc: 'The full launch sequence for selling an online course — waitlist page, pre-launch emails, open cart sales page, launch week emails and close sequence.',
        bullets: ['Waitlist and pre-launch page', 'Pre-launch email sequence', 'Open cart sales page', 'Launch week email campaign', 'Cart close and urgency sequence'],
      },
      {
        name: 'Low-Ticket Tripwire Funnel ($7–$47)',
        desc: 'Turn cold traffic into buyers fast with a low-ticket entry offer. Build a real buyer list that\'s far more likely to purchase your higher-ticket products.',
        bullets: ['Tripwire landing page', 'One-click upsell', 'Order bump integration', 'Thank-you and onboarding page', 'Post-purchase email sequence'],
      },
      {
        name: 'GoHighLevel Setup & CRM Automation',
        desc: 'Full GoHighLevel build — CRM, pipeline, funnels, automations and reporting all set up and running. The all-in-one system for agencies and service businesses.',
        bullets: ['GHL account setup and branding', 'CRM pipeline and stages', 'Automation workflows and triggers', 'Email and SMS sequence setup', 'Reporting and dashboard configuration'],
      },
      {
        name: 'ClickFunnels / Kajabi Build',
        desc: 'Funnel builds on ClickFunnels or Kajabi for clients already on those platforms. Full page builds, email sequences, product setup and integrations.',
        bullets: ['Page builds in CF or Kajabi', 'Email sequence setup', 'Product and course setup', 'Payment integration', 'Third-party tool connections'],
      },
      {
        name: 'Lead Magnet Design & Creation',
        desc: 'The freebie that gets people to hand over their email. Strategy, design and delivery setup for checklists, guides, templates, mini-courses and more.',
        bullets: ['Lead magnet concept and format strategy', 'PDF design and copywriting', 'Delivery page and automation setup', 'Opt-in form and integration', 'Promotional copy for landing page'],
      },
      {
        name: 'Funnel Copywriting',
        desc: 'High-converting copy written for every stage of your funnel — from headline to button. Copy that speaks to your buyer\'s real objections and moves them forward.',
        bullets: ['Sales page copy (long-form)', 'Email sequence copy', 'Upsell and order bump copy', 'Ad copy aligned to funnel', 'Button and CTA copy'],
      },
    ],
    connectsTo: [
      { icon: '📢', label: 'Paid Ads',       href: '/services/paid-ads',     desc: 'Drive traffic into your funnel at scale'                   },
      { icon: '🌐', label: 'Build',           href: '/services/build',        desc: 'Custom-built funnel pages when platforms aren\'t enough'   },
      { icon: '📧', label: 'Retain & Scale',  href: '/services/retain-scale', desc: 'Follow up with buyers and turn them into repeat customers' },
    ],
  },

  // ── RETAIN & SCALE ───────────────────────────────────────────
  'retain-scale': {
    slug:        'retain-scale',
    icon:        '📧',
    pillarLabel: 'Retain & Scale',
    title:       'Keep customers coming back',
    subtitle:    'Acquiring a new customer costs 5× more than keeping one. Email, WhatsApp, loyalty and referral programs turn one-time buyers into your best source of growth.',
    accentColor: '#5b21b6',
    seoTitle:    'Email Marketing, Klaviyo, WhatsApp & Retention Agency — Loyalty & Referral Programs',
    seoDesc:     'Email automation, Klaviyo flows, WhatsApp marketing, loyalty programs, referral systems and newsletter growth for ecommerce brands, creators and coaches.',
    services: [
      {
        name: 'Email Marketing & Automation (Klaviyo)',
        desc: 'The full Klaviyo setup — all core flows built, campaigns planned and segmentation done properly. Email should be your highest-ROI channel and we make sure it is.',
        bullets: ['Welcome and onboarding flow', 'Abandoned cart and browse abandonment', 'Post-purchase and review request flow', 'Win-back and sunset flow', 'Broadcast campaign strategy and execution'],
      },
      {
        name: 'SMS Marketing',
        desc: 'Text-based campaigns and automations that get 90%+ open rates. Used alongside email for cart recovery, flash sales and VIP announcements.',
        bullets: ['SMS list building strategy', 'Abandoned cart SMS flow', 'Promotional and flash sale campaigns', 'Compliance and opt-in setup', 'Klaviyo or Postscript integration'],
      },
      {
        name: 'WhatsApp Marketing',
        desc: 'WhatsApp broadcast lists and automation for markets where WhatsApp is the primary messaging app — especially strong in the UK, Europe, Australia and Southeast Asia.',
        bullets: ['WhatsApp Business setup', 'Broadcast list management', 'Automated conversation flows', 'Customer support integration', 'WhatsApp API connection for scale'],
      },
      {
        name: 'Retention & Lifecycle Strategy',
        desc: 'Map your full customer lifecycle and build the campaigns and flows that move people from first purchase to loyal, high-LTV repeat buyers.',
        bullets: ['Customer lifecycle mapping', 'Segment strategy and RFM analysis', 'Re-engagement campaign calendar', 'LTV and repeat purchase optimisation', 'Churn prediction and prevention flows'],
      },
      {
        name: 'CRM Setup & Integration',
        desc: 'HubSpot, Klaviyo or Salesforce built from scratch or cleaned up — contacts imported, pipeline configured and tools connected so everything talks to each other.',
        bullets: ['CRM platform setup', 'Contact and list import', 'Pipeline and deal stages', 'Tool integrations (Shopify, forms, ads)', 'Team training and documentation'],
      },
      {
        name: 'Newsletter Strategy & Setup (Beehiiv / Substack)',
        desc: 'Build an audience you own — independent of any algorithm. Newsletter setup on Beehiiv or Substack, from platform to first issue strategy.',
        bullets: ['Platform setup and branding', 'Welcome sequence', 'Content strategy and posting cadence', 'Growth and list-building tactics', 'Monetisation planning'],
      },
      {
        name: 'Newsletter Growth & Monetization',
        desc: 'Grow your subscriber count and turn your newsletter into a revenue channel through sponsorships, paid tiers and product promotion.',
        bullets: ['Subscriber growth playbook', 'Referral programme setup', 'Sponsorship structure and outreach', 'Paid newsletter tier setup', 'Revenue tracking and reporting'],
      },
      {
        name: 'Loyalty Program Setup',
        desc: 'Points, rewards and VIP tiers that make customers want to come back. Built on Smile.io, Yotpo or a custom solution wired into your Shopify or ecommerce platform.',
        bullets: ['Program design and structure', 'Points and rewards configuration', 'VIP tier setup', 'Integration with email and Shopify', 'Launch and promotion plan'],
      },
      {
        name: 'Referral & Affiliate Program Setup',
        desc: 'Word-of-mouth growth that pays for itself. Referral programs for customers and affiliate programs for partners — built to generate revenue you\'re not paying a media cost for.',
        bullets: ['Program strategy and incentive design', 'Platform setup (ReferralCandy, Impact, Rewardful)', 'Affiliate onboarding and materials', 'Tracking and attribution', 'Performance reporting'],
      },
    ],
    connectsTo: [
      { icon: '📢', label: 'Paid Ads',       href: '/services/paid-ads',     desc: 'Use retention data to build better paid audiences'         },
      { icon: '🔧', label: 'Funnels & CRO',  href: '/services/funnels',      desc: 'Add upsell sequences after every purchase'                 },
      { icon: '📊', label: 'Analytics',       href: '/services/retain-scale', desc: 'Track LTV, repeat rate and which channels drive retention' },
    ],
  },
}
