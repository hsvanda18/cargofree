---
name: CARGO FREE
description: A one-pager built as a stamped customs manifest, not a marketing scroll.
colors:
  graphite: "#1C1F1E"
  graphite-soft: "#262A29"
  paper: "#F6F3EC"
  orange: "#EA6B48"
  orange-ink: "#C63C17"
  kraft: "#A9825A"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.25em"
rounded:
  md: "16px"
  lg: "24px"
  xl: "28px"
  full: "9999px"
spacing:
  sm: "24px"
  md: "40px"
  lg: "80px"
  xl: "112px"
components:
  button-primary:
    backgroundColor: "rgba(234,107,72,0.1)"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.graphite}"
  tag-pill:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "10px 16px"
  card-client:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.graphite}"
    rounded: "{rounded.md}"
    padding: "20px"
  card-panel:
    backgroundColor: "{colors.graphite-soft}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "28px"
  plate-figure:
    backgroundColor: "{colors.graphite-soft}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
  plate-caption:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "12px 20px"
---

# Design System: CARGO FREE

## Overview

**Creative North Star: "The Stamped Manifest"**

CARGO FREE reads as a customs document, not a logistics landing page: a stakeholder scrolls through what feels like a manifest that has already been reviewed, initialed, and cleared — headline blocks that read like declaration fields, a mono-typeset ORIGEM/DESTINO routing line, thick rules standing in for the folds and cut-lines of a real form, and a hand-stamped circular mark standing in for a customs officer's ink. The page is confident and unhurried rather than salesy: long-form institutional copy set in full paragraphs, real client logos presented as a "cleared roster" rather than a marketing grid, and exactly one accent color used the way ink is used on paper — sparingly, and only where something is being certified.

The system explicitly refuses two genericisms. First, the "hero photo + icon cards" logistics template (a wide photo, three icon-in-a-box service cards, done) — CARGO FREE instead structures its two services as a numbered manifest list with real asymmetry (six-item consultancy vs. one-line transport agent, never forced into equal-height cards), and lets photography in only as captioned evidence — every photograph on the page sits inside a manifest annex plate, and the three-up plate row under service 02 is evidence attached to one service, not three services flattened into three cards. Second, the terracotta/cream "AI-generated logistics page" palette cliché — the system runs cooler and starker instead: near-black Graphite against warm-but-neutral Paper, with the brand's true sampled orange doing all the accent work.

Density is generous but not empty: sections run tall (80–112px vertical rhythm) with confident type scale rather than filler whitespace, and every section carries at least one piece of manifest-style data (a field label, a stamp, a route line) so the page never drifts into pure marketing copy.

**Key Characteristics:**
- Graphite/Paper ground alternates strictly by section — never two consecutive sections share a ground.
- Orange is stamp ink: rare, and only on things being certified or acted on (CTA, tags, checkmarks, focus states).
- Thick rules (2px minimum, 4px at section dividers) replace hairlines everywhere; nothing in the shipped build uses a sub-2px border.
- One signature asset — the hand-stamped `StampMark` circular seal — carries the brand's mark into the CTA and a background watermark.
- Photography appears only inside the manifest annex plate — full-colour, lightly graded, under a mono caption strip; five plates across Hero, Services and Clients.
- Content asymmetry (About's 0.85fr/1.15fr split, Services' 6-item vs. 1-line blocks) is left visible, never padded to false parity.

## Colors

A two-ground, one-accent palette: Graphite and Paper alternate as the page's two "sheets," Orange is reserved for stamp-ink moments, and Kraft appears once as a packing-material accent.

### Primary
- **CargoFree Orange** (`#EA6B48`): the stamp-ink accent. Used on dark (Graphite) grounds and at large/CTA scale everywhere — the hero CTA stamp, ORIGEM/DESTINO field codes, section number glyphs (01/02), icon strokes, link hovers, `::selection`, `:focus-visible` outlines, and the scrollbar thumb.
- **Orange Ink** (`#C63C17`): a second, darker tier of the same accent, used only for small/body-weight mono text sitting on the Paper ground (About's MISSÃO/VISÃO/VALORES field labels). The base Orange fails WCAG AA at that weight and size on Paper (~2.8:1); Orange Ink was added specifically to fix that and is now the system's rule for small orange text on light ground, not a one-off patch.

### Secondary
- **Kraft** (`#A9825A`): a low-key packing-material accent, used once as a dashed offset frame (`border-kraft/40`) behind the hero annex plate — a crate-label texture note, not a general-purpose color.

### Neutral
- **Graphite** (`#1C1F1E`): primary dark ground (Hero, Services, Contact sections; page `<body>` default) and default text-on-Paper via near-black contrast.
- **Graphite Soft** (`#262A29`): elevated dark surface — the hero manifest-field panel, the Contact signatory cards and every annex plate frame sit on this, one step lighter than the section ground behind them.
- **Paper** (`#F6F3EC`): primary light ground (About, Clients, Footer sections) and default text color on Graphite grounds.

### Named Rules
**The Alternating Ground Rule.** Graphite and Paper alternate strictly section-by-section down the page — Hero (Graphite) → About (Paper) → Services (Graphite) → Clients (Paper) → Contact (Graphite) → Footer (Paper). No two adjacent sections share a ground; this is what makes the page read as a stack of alternating manifest sheets rather than a single scroll.

**The Stamp Ink Rule.** Orange is never a fill color for large surfaces and never the default body-text color. It appears only as: CTA/stamp ink, icon strokes, borders on active/interactive elements, field-code labels, and focus/selection states. Small mono text on Paper uses Orange Ink instead of base Orange.

**The Full-Colour Evidence Rule.** Photography ships in full colour with one light grade applied at build time (saturation ×0.92, contrast ×1.06) so the set reads as one batch of attachments. The palette is not imposed on the photographs: they carry CargoFree livery, and the brand orange inside them already rhymes with the page accent. An earlier duotone treatment (graphite → kraft → paper) was applied to the build's single original photo and was removed along with that asset; duotone, tinting and desaturation are not rules of this system.

## Typography

**Display Font:** Big Shoulders (with Arial Narrow, sans-serif fallback)
**Body Font:** Public Sans (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace fallback)

**Character:** A condensed, black-weight display face doing all the shouting (headlines, section numerals) against a humanist, restrained body face for reading, with a monospace third voice reserved strictly for anything that behaves like manifest data — codes, field labels, tallies, tags.

### Hierarchy
- **Display** (900, 2.75rem base → 3.6rem at `sm` → 4.1rem at `lg`, line-height 0.96, tracking -0.025em, uppercase): the hero H1 only.
- **Headline** (900, 2.25rem → 3rem at `sm`, line-height 0.95, tracking -0.025em, uppercase): every section H2 ("Quem somos", "Nossos serviços", "Principais clientes", "Contactos") — one consistent scale reused across all four.
- **Title** (700, 1.5rem → 1.875rem at `sm`, uppercase): service sub-headings and contact-signatory names.
- **Body** (400, 1.125rem lead / 1rem for dense rows, line-height ~1.625, max 46–62ch measure): paragraph copy — hero intro, About lead, manifest-row descriptions, contact copy.
- **Label** (500–600, 0.6875–0.75rem, tracking 0.16em–0.25em, uppercase): manifest-style data only — ORIGEM/DESTINO codes, field labels (MISSÃO/VISÃO/VALORES), nav-adjacent tags, figcaptions, role titles, stamp ring text.

### Named Rules
**The Manifest Data Rule.** Anything that functions as a code, field label, coordinate, or tag is set in JetBrains Mono, uppercase, at wide tracking (0.16em–0.25em). Prose — headlines, body copy, names — never uses the mono face. This is how the page distinguishes "document data" from "document prose" without extra chrome.

## Layout

A single max-width container (`1400px`) with consistent horizontal padding (24px mobile / 40px `sm+`) runs through every section; there is no full-bleed content and no secondary container width. Vertical rhythm is generous and consistent: major sections use 80px padding on mobile, 112px at `sm+`.

Two-column sections deliberately use asymmetric splits rather than an even 50/50 grid: Hero runs `1.05fr / 0.95fr` (copy slightly favored over the photo), About runs `0.85fr / 1.15fr` (the missão/visão/valores manifest rows get more room than the intro copy) — the ratio itself is a small, legible signal that the two sides aren't meant to carry equal weight.

Content subdivides inside a manifest row rather than breaking the container: service 02's copy column carries a three-up plate grid (one column on mobile, three at `sm+`, 20px gutter), and Clients runs one full-width plate between its section heading and the logo grid. No photograph is ever full-bleed; every one stays inside the 1400px container.

The Alternating Ground Rule (see Colors) is the page's primary structural device: it is what makes six flat sections read as a bound stack of sheets rather than one continuous scroll.

## Elevation & Depth

Mostly flat with a small number of deliberate, structural lifts rather than ambient hover glow everywhere. Two named shadow tokens exist in `--shadow-*` custom properties and are used at exactly one site each; a third ad hoc shadow pair is used specifically for the client-logo cards (see Components).

### Shadow Vocabulary
- **Stamp** (`--shadow-stamp: 0 18px 40px -20px rgb(0 0 0 / 0.55)`): under the floating rotated tag pill on the hero photo — a "this is physically sitting on top" cue.
- **Card** (`--shadow-card: 0 24px 48px -28px rgb(0 0 0 / 0.35)`): under the hero annex plate — the one large elevated surface on the page. The other four plates carry no shadow; elevation marks the hero plate specifically, not the plate pattern.

### Named Rules
**The Structural-Only Rule.** Shadows mark a specific physical claim (this is a stamped tag sitting on the photo; this is a lifted photo frame), not a generic card-hover pattern. Most surfaces — including the About/Services manifest rows and the Contact signatory cards — are flat or use only a border, never a shadow.

## Shapes

Two coexisting geometries, no third: the **stamp** (true circle, used only for the `StampMark` seal and small punch-hole/icon circles) and the **rounded manifest panel** (generous rectangle radii — 16px for cards and framed panels, 24px for every annex plate, 28px for the dashed Kraft offset frame nested behind the hero plate). There is no sharp-cornered (0-radius) rectangle anywhere in the shipped build except the thick rule dividers themselves, which are lines, not boxes.

Borders are never thinner than 2px anywhere in the system — card edges, pill outlines, and icon circles all use `border-2`; section-level dividers step up to `border-4`/`border-t-4`/`border-b-4`. This is the built-out form of the OWN-WORLD's "no hairlines" contract: the thinnest rule observed anywhere in the codebase is 2px.

## Components

### Buttons
- **Shape:** fully rounded (`rounded-full`, {rounded.full}).
- **Primary (header call pill):** transparent-orange fill (`rgba(234,107,72,0.1)`) with a 2px solid Orange border and Paper text; padding ~8px 16px; label set in Label typography.
- **Hover / Focus:** background flips to solid Orange, text flips to Graphite; `:focus-visible` everywhere in the system uses a 3px Orange outline with 3px offset, not a color-only change.
- **Signature CTA (not a conventional button):** the hero's primary action is the `StampMark` seal itself, wrapped in a circular link with a one-time `.animate-stamp-press` entrance (scale + rotate settle) and a hover scale-up — see Signature Component below.

### Tags / Badges
- **Tag Pill (signature small-badge pattern):** a rotated (-3deg) Graphite pill with a 2px Orange border, containing a small punch-hole dot (a bordered circle, no fill) plus a single size of uppercase mono label text — no numeral, no big-number/small-caption pairing. This replaced an earlier big-number-plus-label "stat card" badge that read as the generic logistics hero-metric template; the pill-tag is the system's only small-badge pattern going forward.
- **Checkmark seal:** a small filled Orange circle with a Graphite border and the icon set's check mark (SVG, not a text glyph), pinned to the top-right corner of each client-logo card — a "cleared" mark, not a decorative accent.

### Cards / Containers
- **Corner Style:** 16px radius (`rounded-2xl`, {rounded.md}) on every card-like surface (client-logo cards, hero manifest-field panel, Contact signatory panels).
- **Background:** client-logo cards use pure white (`#FFFFFF`), deliberately distinct from the Paper ground behind them — the white card reads as a printed label sitting on the manifest sheet. Contact/hero panels use Graphite Soft on the Graphite ground.
- **Shadow Strategy:** client-logo cards carry their own soft ambient shadow (`0 10px 24px -16px rgb(28 31 30 / 0.35)`) that intensifies and warms toward Orange on hover (`0 14px 30px -16px rgb(234 107 72 / 0.45)`), paired with a border color shift to Orange/50 — the only true hover-lift component in the system. Other panels are flat, bordered only.
- **Border:** 2px, low-opacity (`border-graphite/10` on white cards, `border-paper/15` on dark panels).
- **Internal Padding:** ~20px (client cards), ~28px (signatory/manifest panels).
- **The Hand-Stamped Roster Rule.** Client-logo cards each carry a small deterministic rotation (roughly ±0.6°–1.7°, varying per card from a fixed lookup table) so the grid reads as a hand-stamped roster of real, individually-cleared clients rather than a uniform logo wall.

### Manifest Rows (signature list pattern, used in place of generic cards)
About's missão/visão/valores and Services' two offerings are not card grids — they're `dl`/list rows separated by thick rules (4px top/bottom), each row pairing a short mono field label or numeral against full-measure body copy. This is the system's default way of presenting a short list of unequal-length items; reach for it before reaching for an icon-card grid.

### Manifest Annex Plate (signature component)

The system's single way of presenting a photograph — a `<figure>` framed the way an attachment is stapled to a customs file. A 2px border (`border-paper/15` on dark ground, `border-graphite/15` when `tone="light"`) around a 24px-radius frame on Graphite Soft, a `<picture>` element serving WebP with a JPEG fallback, and a caption strip sitting under a 2px Orange top rule: Graphite at 90% opacity, mono 11px uppercase at 0.18em tracking, optionally led by a 16px icon from the project's icon set. The caption strip stays dark under both tones — only the outer border changes — so a plate reads as the same physical object on either ground. Callers tune image height (`imgClass`) and may add a frame class; border, radius, rule and caption are fixed.

Five placements in the shipped build: the hero establishing shot (420px, 480px at `sm+` — the only plate carrying `shadow-card`, with the dashed Kraft offset frame behind it), a three-up row of transport-mode plates (176px, icon-led captions) under service 02, and one full-width `tone="light"` plate (224px / 288px at `sm+`) between the Clients heading and the logo grid.

**The Annexed Photograph Rule.** A photograph never appears outside a plate. No full-bleed hero image, no bare image block, no photo used as a section background — the caption strip is what makes an image read as an annexed exhibit rather than a mood shot.

**Asset provenance — record it, don't misread it.** The five shipped photographs are not conventional photography. Four of them (`hub`, `via-aerea`, `via-terrestre`, `operacao-remota`) are AI-generated brand-vision images supplied by the client, showing CargoFree livery on aircraft, a truck and a cargo terminal; each source carried a generator watermark in its bottom-right corner, which the crops in `scripts/process_supplied.py` deliberately exclude. The fifth (`via-maritima`) is a crop of a stock photograph taken from the client's own PDF presentation deck — `containers-raw.jpg` is kept in `src/assets/photos/` as that crop's source, not as a shipped page asset. None of them depict verified real company assets: treat them as brand vision, keep captions generic (mode of transport, type of operation), and never caption or describe them as a specific real vehicle, facility or shipment.

### Icons

One hand-drawn line set (`src/components/icons.jsx`): ten icons on 24/32 viewboxes, no fill, 2.4 stroke weight, round caps and joins, stroked in `currentColor` so they inherit Orange or Paper from context. Sizes in use are 16px (plate captions, the checkmark inside its bordered circle) and 32–40px (the hero route glyph). No icon font, no third-party icon package, and no emoji or dingbat glyphs anywhere in the build.

### Navigation
- **Style:** sticky header, Graphite ground at ~95% opacity with backdrop-blur, 4px solid Orange bottom border.
- **Typography:** nav links in Body font, uppercase, semibold, wide-ish tracking; hover is a color-only shift to Orange (no underline).
- **Mobile treatment:** nav links are hidden below `md`; mobile header shows only the wordmark lockup and the call-pill CTA (its label collapses to "Ligar"). There is no mobile menu/drawer in the shipped build — this is the extent of the mobile nav pattern actually implemented, not a placeholder to fill in later.

### StampMark (signature component)
The page's one true signature asset: an SVG customs-clearance stamp generated from a deterministic seeded-noise circle (two concentric "hand-inked" wobbly rings), Orange strokes, mono text running the ring on a `textPath`, and the CargoFree arrow-mark plus speed-lines centered inside. It takes a `seed` prop so each placement gets a slightly different hand-stamped irregularity while staying render-stable. Used twice in the shipped build: as the hero's primary CTA (92px, opaque) and as a large background watermark behind Contact (340px, ~7% opacity). Reserve it for moments that are genuinely about certification/contact — it is not a general decorative motif.

## Do's and Don'ts

### Do:
- **Do** alternate Graphite and Paper strictly section-by-section (The Alternating Ground Rule) — never repeat a ground on two consecutive sections.
- **Do** use Orange Ink (`#C63C17`), not base Orange, for any small/body-weight orange text on the Paper ground — base Orange fails WCAG AA there.
- **Do** set anything that functions as data (codes, field labels, tags, counts) in JetBrains Mono, uppercase, at 0.16em–0.25em tracking; keep prose off the mono face entirely.
- **Do** keep every border at 2px minimum, stepping to 4px for section-level dividers — no hairlines.
- **Do** let real content asymmetry show (unequal column splits, unequal-length list items) instead of forcing visual parity between things that aren't equal in substance.
- **Do** present every photograph inside a manifest annex plate — bordered frame, 2px Orange rule, mono caption — and ship it in full colour with the standard light grade (saturation ×0.92, contrast ×1.06).
- **Do** serve every photograph as a `<picture>` with a WebP source and a JPEG fallback, carrying explicit `width`/`height` and `loading="lazy"` below the fold.
- **Do** keep motion as a visible-by-default enhancement: entrance/hover animation may add polish, but the page must render its real content with no animation firing at all (baseline for `prefers-reduced-motion` and for any JS-entrance timing failure).

### Don't:
- **Don't** reintroduce a big-number/small-caption "stat card" badge (e.g., a numeral + label pairing as a small floating badge) — it was built, flagged as the generic logistics hero-metric template, and replaced with the rotated pill-tag pattern. Use the tag-pill for any future small badge.
- **Don't** gate real content behind scroll-triggered reveal-on-view animation. A stagger reveal was shipped on the client-logo grid and deliberately reverted mid-build because it left real logos at permanent `opacity: 0` when the entrance script didn't fire. Content must be visible without motion; motion is progressive enhancement only.
- **Don't** use hairline (≤1px) borders or dividers anywhere in the system — 2px is the observed floor.
- **Don't** use base Orange (`#EA6B48`) as a small-text color on the Paper ground — that's what Orange Ink exists to fix.
- **Don't** duotone, tint or desaturate the photography. The build's one duotoned image and its asset were removed; full colour with the standard grade is the current rule.
- **Don't** place a photograph bare on the page — no full-bleed hero image, no uncaptioned image block, no photo as a section background. The plate is the only photo container.
- **Don't** present the supplied images as documentary photography of real CargoFree assets, and don't re-crop them to bring the generator watermark in the bottom-right corner back into frame (see the plate's provenance note).
- **Don't** invent metrics, testimonials, or years-in-business claims. No numeric KPIs or testimonials exist for CargoFree yet (per PRODUCT.md); the 12-logo client roster is the only proof asset, and it must stay real logos only.
