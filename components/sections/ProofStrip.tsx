const ROW1 = ['Ecommerce Brands', 'Shopify Stores', 'Coaches', 'Startups', 'Local Businesses', 'Personal Brands', 'B2B Companies', 'Creators']
const ROW2 = ['Google Ads', 'Meta Ads', 'SEO', 'AI Search', 'Email Marketing', 'Sales Funnels', 'Social Growth', 'Web Design']

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const content = (
    <span className="flex items-center">
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-3 px-5 text-sm font-medium text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" />
          {item}
        </span>
      ))}
    </span>
  )

  return (
    <div className="overflow-hidden">
      <div className={`flex will-change-transform ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {content}
        <span aria-hidden="true" className="flex items-center">
          {items.map((item) => (
            <span key={`dup-${item}`} className="inline-flex items-center gap-3 px-5 text-sm font-medium text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-300 flex-shrink-0" />
              {item}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}

export default function ProofStrip() {
  return (
    <div className="bg-surface-soft border-y border-slate-100 overflow-hidden py-5">
      <div className="space-y-3">
        <MarqueeRow items={ROW1} />
        <MarqueeRow items={ROW2} reverse />
      </div>
    </div>
  )
}
