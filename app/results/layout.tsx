import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Client Results | Infinite Weblinks',
  description: 'Real results from real clients. Revenue growth, user acquisition and business outcomes, not vanity metrics. See what we have actually delivered.',
  alternates:  { canonical: 'https://infiniteweblinks.com/results' },
}

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
