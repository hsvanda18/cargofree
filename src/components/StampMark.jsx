import { useId, useMemo } from 'react'

// Deterministic pseudo-noise so the "hand-stamped" ring reads irregular
// without differing between renders.
function seededJitter(index, seed) {
  const v = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
  return v - Math.floor(v)
}

function roughCirclePath(cx, cy, r, points, seed, wobble) {
  const coords = []
  for (let i = 0; i <= points; i += 1) {
    const angle = (i / points) * Math.PI * 2
    const j = (seededJitter(i, seed) - 0.5) * wobble
    const rr = r + j
    coords.push([cx + Math.cos(angle) * rr, cy + Math.sin(angle) * rr])
  }
  return coords
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(' ') + ' Z'
}

/**
 * The page's signature asset: a customs-clearance stamp built from the
 * CargoFree mark. Used sparingly — CTA, client "cleared" badges, service
 * line numbers, contact watermark.
 */
export default function StampMark({
  label = 'CARGO FREE · DESPACHADO',
  size = 132,
  ink = '#EA6B48',
  seed = 7,
  className = '',
}) {
  const uid = useId()
  const cx = 100
  const cy = 100
  const outerR = 92
  const innerR = 68
  const textR = 78

  const outerPath = useMemo(
    () => roughCirclePath(cx, cy, outerR, 64, seed, 3.2),
    [seed],
  )
  const innerPath = useMemo(
    () => roughCirclePath(cx, cy, innerR, 48, seed + 3, 2.1),
    [seed],
  )

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
    >
      <defs>
        <path id={`stamp-arc-${uid}`} d={`M ${cx - textR},${cy} A ${textR},${textR} 0 1 1 ${cx + textR},${cy}`} />
      </defs>
      <g stroke={ink} fill="none" strokeWidth="2.5" strokeLinejoin="round" opacity="0.94">
        <path d={outerPath} />
        <path d={innerPath} />
      </g>
      <text fill={ink} fontFamily="'JetBrains Mono', monospace" fontSize="11.5" letterSpacing="2.5" fontWeight="600">
        <textPath href={`#stamp-arc-${uid}`} startOffset="50%" textAnchor="middle">
          {label}
        </textPath>
      </text>
      <g transform={`translate(${cx} ${cy + 6})`} stroke={ink} strokeWidth="6" strokeLinecap="round" fill="none">
        <path d="M -26 -14 L 2 -14 L 26 0 L 2 14 L -26 14" />
        <line x1="-38" y1="8" x2="-30" y2="8" strokeWidth="4" opacity="0.75" />
        <line x1="-42" y1="16" x2="-30" y2="16" strokeWidth="4" opacity="0.5" />
      </g>
    </svg>
  )
}
