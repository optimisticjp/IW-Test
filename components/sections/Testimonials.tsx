const TESTIMONIALS = [
  {
    quote: 'They built our Shopify site in under two weeks and our conversion rate jumped straight away. The ads team then took over and we were profitable within the first month.',
    name:  'Sarah T.',
    role:  'Ecommerce Founder',
  },
  {
    quote: 'I had no website at all. Now I have a proper site, a full email funnel and my coaching programme sells out every time I open it.',
    name:  'Marcus D.',
    role:  'Business Coach',
  },
  {
    quote: 'We went from invisible on Google to ranking on the first page in three months. Their SEO team actually explains what they\'re doing and why.',
    name:  'Priya R.',
    role:  'Local Service Business',
  },
  {
    quote: 'The free website offer is real. They built it, we approved it, and we were live. Then the growth work began. Highly recommend.',
    name:  'James K.',
    role:  'Startup Founder',
  },
  {
    quote: 'Our Instagram went from 800 followers to 14,000 in five months. More importantly, those followers actually buy from us now.',
    name:  'Aisha M.',
    role:  'Creator & Coach',
  },
  {
    quote: 'Honestly the best agency experience we\'ve had. One team, one invoice, no excuses. They just get on with it.',
    name:  'Tom B.',
    role:  'Marketing Director',
  },
]

function TestimonialCard({ quote, name, role }: typeof TESTIMONIALS[number]) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 w-[320px] flex-shrink-0 mx-3 shadow-xs flex flex-col">
      <div className="text-brand-400 text-sm mb-4">★★★★★</div>
      <p className="text-slate-600 text-base leading-relaxed italic flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="w-8 h-px bg-slate-100 my-4" />
      <p className="font-display font-bold text-sm text-slate-900">{name}</p>
      <p className="text-slate-400 text-xs mt-1">{role}</p>
    </div>
  )
}

function MarqueeRow({ items, reverse }: { items: typeof TESTIMONIALS; reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <div className={`flex will-change-transform ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        <div className="flex flex-shrink-0">
          {items.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
        <div className="flex flex-shrink-0" aria-hidden="true">
          {items.map((t, i) => <TestimonialCard key={`dup-${i}`} {...t} />)}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 3)
  const row2 = TESTIMONIALS.slice(3, 6)

  return (
    <section className="bg-surface-soft section-pad overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight text-slate-900">
          What our{' '}
          <span className="text-gradient">clients say</span>
        </h2>
      </div>

      <div className="space-y-6">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  )
}
