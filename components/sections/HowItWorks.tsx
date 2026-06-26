const STEPS = [
  {
    num:   '1',
    title: 'Fill in a brief',
    desc:  'Two minutes online. Tell us about your business, your goals, and what you need. No technical knowledge required.',
  },
  {
    num:   '2',
    title: 'We design and build',
    desc:  'Our team creates your website. You give feedback before anything goes live. No surprises, no guessing.',
  },
  {
    num:   '3',
    title: 'Launch and grow',
    desc:  'Once you approve, we launch. Then we grow your traffic, leads and sales together — as long as you need us.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white section-pad">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight text-slate-900 mb-5">
            <span className="text-gradient">How it works</span>
          </h2>
          <p className="font-sans text-slate-500 text-lg">Simple for you. Comprehensive from us.</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connecting line */}
          <div className="absolute top-[calc(33%-1px)] left-1/6 right-1/6 h-px bg-slate-200 hidden md:block pointer-events-none" />

          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="relative bg-surface-soft border border-slate-100 rounded-3xl p-8 overflow-hidden">
              {/* Decorative number */}
              <span className="absolute -top-4 -right-2 font-display font-extrabold text-[100px] leading-none text-brand-100 pointer-events-none select-none">
                {num}
              </span>

              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white font-display font-bold text-sm mb-5">
                {num}
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{title}</h3>
              <p className="font-sans text-slate-500 text-base leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
