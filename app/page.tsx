import type { Metadata } from 'next'

import Hero                  from '@/components/sections/Hero'
import ProofStrip             from '@/components/sections/ProofStrip'
import WhoWeHelp              from '@/components/sections/WhoWeHelp'
import Pillars                from '@/components/sections/Pillars'
import FreeWebsite            from '@/components/sections/FreeWebsite'
import AISearch               from '@/components/sections/AISearch'
import SocialGrowthSpotlight  from '@/components/sections/SocialGrowthSpotlight'
import StatsStrip             from '@/components/sections/StatsStrip'
import ResultsHighlights      from '@/components/sections/ResultsHighlights'
import Testimonials           from '@/components/sections/Testimonials'
import ServicesGrid           from '@/components/sections/ServicesGrid'
import FinalCTA               from '@/components/sections/FinalCTA'
import ArcDivider             from '@/components/ui/ArcDivider'

export const metadata: Metadata = {
  title:       'Infinite Weblinks — Growth Agency for Ecommerce, Creators & Startups',
  description: 'We build your website first — no upfront fee. Then we run the ads, funnels, social growth and AI search that turn it into your best salesperson.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — bg-surface-soft */}
      <Hero />

      {/* surface-soft → white */}
      <ArcDivider fill="white" className="bg-surface-soft" />

      {/* 2. Social Proof Strip — bg-white */}
      <ProofStrip />

      {/* white → surface-soft */}
      <ArcDivider fill="#f0f4f8" className="bg-white" />

      {/* 3. Who We Help — bg-surface-soft */}
      <WhoWeHelp />

      {/* surface-soft → surface-soft (no divider — Pillars also uses surface-soft) */}

      {/* 4. Six Growth Pillars — bg-surface-soft */}
      <Pillars />

      {/* 5. Free Website Feature — brand gradient (its own section, no extra divider needed) */}
      <FreeWebsite />

      {/* 6. AI Search Edge — bg-surface-soft */}
      <AISearch />

      {/* 7. Social Growth Spotlight — bg-surface-soft */}
      <SocialGrowthSpotlight />

      {/* surface-soft → white */}
      <ArcDivider fill="white" className="bg-surface-soft" />

      {/* Stats strip — bg-white */}
      <StatsStrip />

      {/* 8. Results Highlights — bg-white */}
      <ResultsHighlights />

      {/* white → surface-soft */}
      <ArcDivider fill="#f0f4f8" className="bg-white" />

      {/* 9. Testimonials — bg-surface-soft */}
      <Testimonials />

      {/* 10. Full Services Grid — bg-surface-soft */}
      <ServicesGrid />

      {/* 11. Final CTA — bg-surface-soft */}
      <FinalCTA />
    </>
  )
}
