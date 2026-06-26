import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Our Services | Infinite Weblinks',
  description: 'Websites, paid ads, SEO, social growth, funnels and email. One team for everything your business needs to grow online, with no upfront cost to start.',
  alternates:  { canonical: 'https://infiniteweblinks.com/services' },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
