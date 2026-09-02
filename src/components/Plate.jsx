/**
 * Manifest annex plate: the system's one way of presenting a photograph —
 * a bordered, rounded frame with a mono caption strip under an orange rule,
 * the way an attachment is stapled to a customs file.
 */
export default function Plate({
  webp,
  jpg,
  alt,
  caption,
  icon: Icon,
  frameClass = '',
  imgClass = 'h-[420px] sm:h-[480px]',
  width,
  height,
  loading,
  tone = 'dark',
}) {
  const border = tone === 'light' ? 'border-graphite/15' : 'border-paper/15'
  return (
    <figure
      className={`relative overflow-hidden rounded-[24px] border-2 ${border} bg-graphite-soft ${frameClass}`}
    >
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img
          src={jpg}
          alt={alt}
          className={`w-full object-cover ${imgClass}`}
          width={width}
          height={height}
          loading={loading}
        />
      </picture>
      <figcaption className="flex items-center gap-2.5 border-t-2 border-orange/70 bg-graphite/90 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/70">
        {Icon ? <Icon className="h-4 w-4 shrink-0 text-orange" stroke="currentColor" /> : null}
        {caption}
      </figcaption>
    </figure>
  )
}
