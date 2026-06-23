interface ArcDividerProps {
  fill:      string
  height?:   number
  flip?:     boolean
  className?: string
}

export default function ArcDivider({ fill, height = 64, flip = false, className }: ArcDividerProps) {
  const mid = Math.round(height * 0.65)
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className ?? ''}`}
      aria-hidden="true"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height }}
      >
        <path
          d={`M0,0 C360,${mid} 1080,${mid} 1440,0 L1440,${height} L0,${height} Z`}
          fill={fill}
        />
      </svg>
    </div>
  )
}
