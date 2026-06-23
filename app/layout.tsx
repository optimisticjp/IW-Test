import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav             from '@/components/layout/Nav'
import Footer          from '@/components/layout/Footer'
import WhatsAppButton  from '@/components/ui/WhatsAppButton'

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
})

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
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />

        {/*
          WhatsApp floating button — visible on all pages.
          To activate: add your WhatsApp number to lib/constants.ts
          Find the SITE object and add:
            whatsapp: '+447700000000',  (your number with country code)
          If whatsapp is missing or empty, the button won't render.
        */}
        <WhatsAppButton />
      </body>
    </html>
  )
}
