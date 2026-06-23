import type { Metadata } from 'next'
import AudiencePageTemplate from '@/components/templates/AudiencePageTemplate'
import { AUDIENCE_PAGES } from '@/lib/audience-pages'

const data = AUDIENCE_PAGES.creators

export const metadata: Metadata = {
  title:       data.seoTitle,
  description: data.seoDesc,
}

export default function CreatorsPage() {
  return <AudiencePageTemplate data={data} />
}
