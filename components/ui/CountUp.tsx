'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end:      number
  duration?: number
  suffix?:  string
  prefix?:  string
}

export default function CountUp({ end, duration = 1600, suffix = '', prefix = '' }: CountUpProps) {
  const [value, setValue]  = useState(0)
  const ref                = useRef<HTMLSpanElement>(null)
  const hasRun             = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true
        const start = performance.now()
        const tick  = (now: number) => {
          const t        = Math.min((now - start) / duration, 1)
          const eased    = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(eased * end))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{prefix}{value}{suffix}</span>
}
