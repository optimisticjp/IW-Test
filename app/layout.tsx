import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav              from '@/components/layout/Nav'
import Footer           from '@/components/layout/Footer'
import WhatsAppButton   from '@/components/ui/WhatsAppButton'
import GoogleAnalytics  from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets:  ['latin'],
  variable: '--font-plus-jakarta',
  display:  'swap',
  weight:   ['400', '500', '600', '700', '800'],
})

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Infinite Weblinks',
  url: 'https://infiniteweblinks.com',
  logo: 'https://infiniteweblinks.com/logo.png',
  description: 'Full-stack digital growth agency for ecommerce brands, creators and startups. We build your website first at no upfront cost.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@infiniteweblinks.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.instagram.com/infiniteweblinks',
    'https://www.linkedin.com/company/infiniteweblinks',
  ],
  areaServed: ['US', 'GB', 'CA', 'AU', 'NZ', 'EU'],
}

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Infinite Weblinks',
  url: 'https://infiniteweblinks.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://infiniteweblinks.com/?s={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const metadata: Metadata = {
  title: {
    default:  'Infinite Weblinks — Growth Agency for Ecommerce, Creators & Startups',
    template: '%s | Infinite Weblinks',
  },
  description:
    'We build your website first — no upfront fee. Then we run the ads, funnels, social growth and AI search that turn it into your best salesperson. Serving brands across the US, UK, Canada, Australia, NZ and Europe.',
  metadataBase: new URL('https://infiniteweblinks.com'),
  openGraph: {
    title:       'Infinite Weblinks — Growth Agency',
    description: 'We build your website first. Then we grow it with ads, funnels, social growth and AI search.',
    url:         'https://infiniteweblinks.com',
    siteName:    'Infinite Weblinks',
    type:        'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Infinite Weblinks' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Infinite Weblinks',
    description: 'Full-stack growth agency for ecommerce brands, creators and startups.',
    images:      ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  keywords: [
    'digital marketing agency', 'web design agency', 'Shopify agency', 'paid ads agency',
    'social media growth', 'SEO agency', 'ecommerce agency', 'funnel building',
    'GEO optimization', 'AEO', 'AI search optimization', 'Instagram growth',
    'YouTube growth', 'email marketing', 'Klaviyo agency',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLdOrganization, jsonLdWebSite]) }}
        />
      </head>
      <body className="font-sans">
        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
        >
          Skip to main content
        </a>

        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
