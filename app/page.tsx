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

export const metadata: Metadata = {
  title:       'Infinite Weblinks — Growth Agency for Ecommerce, Creators & Startups',
  description: 'We build your website first — no upfront fee. Then we run the ads, funnels, social growth and AI search that turn it into your best salesperson.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Social Proof Strip */}
      <ProofStrip />

      {/* 3. Who We Help */}
      <WhoWeHelp />

      {/* 4. Six Growth Pillars */}
      <Pillars />

      {/* 5. Free Website Feature (dark) */}
      <FreeWebsite />

      {/* 6. AI Search Edge (dark) */}
      <AISearch />

      {/* 7. Social Growth Spotlight */}
      <SocialGrowthSpotlight />

      {/* Stats strip */}
      <StatsStrip />

      {/* 8. Results Highlights */}
      <ResultsHighlights />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Full Services Grid */}
      <ServicesGrid />

      {/* 11. Final CTA */}
      <FinalCTA />
    </>
  )
}
