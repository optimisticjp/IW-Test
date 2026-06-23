import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?:  Variant
  size?:     Size
  href?:     string
  external?: boolean
  className?: string
  onClick?:  () => void
  type?:     'button' | 'submit' | 'reset'
  disabled?: boolean
  children:  React.ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-gradient-brand text-white shadow-btn hover:shadow-btn-lg hover:-translate-y-0.5 transition-all duration-200',
  outline: 'bg-transparent text-ink border-[1.5px] border-slate-300 hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-200',
  ghost:   'bg-white/10 text-slate-100 border-[1.5px] border-white/20 hover:bg-white/20 transition-all duration-200',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs font-bold rounded-lg',
  md: 'px-[26px] py-[13px] text-sm font-bold rounded-xl',
  lg: 'px-8 py-[15px] text-base font-bold rounded-xl',
}

export default function Button({
  variant  = 'primary',
  size     = 'md',
  href,
  external = false,
  className,
  onClick,
  type     = 'button',
  disabled = false,
  children,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer select-none',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className,
  )

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
