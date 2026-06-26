import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'About Infinite Weblinks | Our Story and Values',
  description: 'We started Infinite Weblinks to give businesses a full growth team without the agency runaround. Learn how we work and what we stand for.',
  alternates:  { canonical: 'https://infiniteweblinks.com/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
