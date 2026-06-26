import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'
import { SERVICE_PAGES } from '@/lib/service-pages'

const data = SERVICE_PAGES['social-growth']

export const metadata: Metadata = {
  title:       data.seoTitle,
  description: data.seoDesc,
  alternates:  { canonical: 'https://infiniteweblinks.com/services/social-growth' },
}

export default function SocialGrowthPage() {
  return <ServicePageTemplate data={data} />
}
