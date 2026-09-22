# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Tailwind (Vite), content-managed via Sanity (project `t2t3490q`, dataset `production`) as of 2026-09-22. See "Content Management (Sanity)" below.

## Users

Two audiences read this one-pager:
1. **Importadores/exportadores angolanos** (empresas industriais, construção, mineração, tecnologia, imobiliário — see client roster) deciding whether to trust CargoFree with a shipment moving through customs between an origin and destination customs post.
2. **Prospective partners/stakeholders** (the tagline names "stakeholders" explicitly) evaluating CargoFree's credibility, track record, and operational seriousness before a first conversation.

Both arrive with a practical, non-technical need: move goods across a border reliably, at a fair price, without friction with customs.

## Product Purpose

CARGO FREE is an Angolan integrated logistics services company and transport agent ("empresa de serviços logísticos integrados e agente de transporte") coordinating and optimizing import/export transport and logistics operations for diverse goods, by land, sea, and air. The client retired the earlier "empresa transitária" (freight forwarder) positioning on 2026-09-14 — do not reintroduce it in copy or metadata. The page exists to convert institutional trust into a first contact (a call or an email to the company's own commercial line).

## Positioning

Not a tech-forward logistics SaaS. A young (jovem, disruptivo) but operationally experienced Angolan team executing real customs/freight operations with integrity, discipline, and direct/empathetic client relationships — the differentiator is direct human contact — one company line answered by people who decide, no ticket queue — plus end-to-end customs/consultancy expertise, not a booking platform or self-serve product.

## Operating Context

Core scenario: a shipment moves from an origin customs post ("estância aduaneira de saída") to a destination customs post ("estância aduaneira de entrada"). CargoFree's actual scope of work: cost/insurance/cargo-management advisory, customs negotiation intermediation, international transport document processing, quotation preparation, transport-mode advice, and route planning (by cargo type, security, cost, duration) — plus acting as transport/logistics agent nationally by road, sea, and air. Real-world materials: shipping containers, trucks, ports, airports, customs paperwork — not abstract "supply chain dashboard" imagery.

## Capabilities and Constraints

- Two services only, asymmetric in depth: (1) Consultoria em importação/exportação — 6 concrete sub-services; (2) Agente de Transporte e logística nacional (terrestre, marítima, aérea) — one line, no sub-detail given. Do not invent parity between them.
- No pricing, no online quote/booking flow, no client portal — contact is human (phone or email), not self-serve.
- No case studies, metrics, or testimonials exist for this company yet; the client roster (16 logos) is the only proof asset. Do not fabricate stats, years-in-business, shipment counts, or quotes.

## Brand Commitments

- Name: CARGO FREE, wordmark set as "CARGO" regular + "FREE" italic.
- Mark: stylized "C" fusing into a right-pointing arrow/chevron (motion, forward delivery), with three shrinking horizontal speed-lines to its left.
- Verified brand orange (sampled from the source logo file, not the user's approximate hex): **#EA6B48** (core), lighter facet **#F77D5B**, wordmark black.
- Tagline: "Confiança construída na satisfação dos nossos stakeholders."
- Tone: young/disruptive but trustworthy, integrity-driven, operational (not startup-tech).
- Real assets on hand and already extracted at full quality with true alpha transparency from the source PDF (`CARGOFREE_APRESENTAÇÃO.cleaned.pdf`):
  - `assets/cargofree-lockup.png` — full logo lockup (mark + wordmark).
  - `assets/cargofree-icon.png` — mark only, cropped tight.
  - `assets/clients/*.png` — all 16 real client logos, individually extracted, transparent where the source supported it (ATC ships on its native white chip). The four newest were keyed out of flat-background JPEGs by `scripts/process_client_logos.py`. As of the Sanity migration these files are no longer the page's source for the roster (Sanity's `client` documents are) — they stay in the repo as the seed script's source and as the offline fallback in `src/content/fallback.js`.
  - Sector photography (containers at dusk, aircraft on tarmac, road/highway motion-blur) extracted from the same PDF at 2666×1499 — approved for reuse over generic stock or illustration per user decision.

## Evidence on Hand

- Full institutional copy (quem somos, missão, visão, valores, serviços) — verbatim in the original brief, Portuguese (pt-PT/Angola usage), must be used as-is, no invented copy.
- 16 real client names + logos (see Brand Commitments). The roster grew from 12 on 2026-09-10 with Admac Gráfica, Electro Panga, Smartec and Shamlan Tobacco. The count shown on the page is derived from the array, not typed, so it cannot drift again; the "empresas angolanas" wording was dropped to "empresas" because the four additions were not confirmed as Angolan-registered.
- Company contacts, as supplied by the client on 2026-09-10: one phone line (+244 976 547 901), two mailboxes (comercial@grupocargofree.com, geral@grupocargofree.com), and the Luanda office address (Rua 28 de Maio n° 17, Edifício KENDE, Maianga). The directors' personal mobile numbers and personal mailboxes (António Lucas, Edilson Pires) were published in an earlier build and were withdrawn at the client's request — do not reinstate them. Whether the company line carries WhatsApp is unconfirmed, so no WhatsApp link ships.
- No testimonials, no press, no numeric KPIs exist — must not be fabricated.

## Product Principles

1. Institutional trust over startup flash — the page must read as a serious, operational Angolan company, not a logistics-tech demo.
2. Content asymmetry is signal, not a layout bug — the two services, and the missão/visão/valores triad, should never be forced into false visual parity.
3. Real assets only — every logo, client mark, and photo used must be one of the extracted real files; no stock placeholders, no invented metrics.
4. Human contact is the conversion — the page's job is to get a stakeholder to call the company line or email it, not to self-serve a quote.
5. Avoid the terracotta/cream AI-generated-logistics-page cliché explicitly flagged by the user (see brief) — deliberate, sector-specific art direction, not a generic "warm SaaS" template.

## Content Management (Sanity)

As of 2026-09-22, the institutional copy, contacts, and client roster moved
out of the React components and into a Sanity project (`t2t3490q`, dataset
`production`), so the client can edit them without touching code or asking
for a deploy.

**What's in Sanity:** Hero (headline, intro), Quem somos (intro + missão/
visão/valores), Serviços (consultancy title + 6-item list, transport-agent
title), Contactos (phone, two emails, address), Definições do site (footer
tagline), and the `client` collection (16 documents: name, logo image, tone,
compact flag, order). Each of the first five is a true singleton — one fixed
document id (`hero`, `about`, `services`, `contact`, `siteSettings`), pinned
in `studio/structure.ts` so nobody can accidentally create a second one.

**What stayed in code, deliberately:** the hero/services/about photography.
It ships through a specific Python grading/cropping pipeline
(`scripts/process_deck_photos.py`) tied to source files the client supplied
as a one-off deck export, not something meant to be swapped casually from a
CMS field — see DESIGN.md's "Asset provenance" note. Nav labels, section
numerals, button microcopy ("Ligar agora", "Ver serviços"), and other
structural UI strings also stayed in code — the brief that scoped this
migration was explicitly "texto institucional, roteiro de clientes,
contactos," not every string on the page.

**Fetching:** client-side, once per page load, via `@sanity/client` with
`useCdn: true` (`src/lib/sanity.js`, `src/lib/useSiteContent.js`) — there is
no build/deploy pipeline in this repo to hook a rebuild-on-publish webhook
into, so a runtime fetch is the only way a Studio edit reaches the live page
without a manual redeploy. A published change is visible within the CDN's
short cache window, not instantly — acceptable for a low-traffic institutional
page; revisit if that ever needs to be instant.

**Resilience doctrine:** `src/content/fallback.js` holds an exact snapshot of
this content from cutover time and renders immediately; the Sanity fetch
only overwrites it on success. This mirrors the project's existing motion
rule (DESIGN.md: "the page must render its real content with no animation
firing at all") — a CMS fetch is progressive enhancement, not a gate. Keep
the fallback file roughly in sync when you notice real drift; it is a safety
net for an API outage or CORS misconfiguration, not the source of truth.

**Phone number:** Sanity's `contact` document stores one field, `phone`, in
display format ("+244 976 547 901"). Both Header.jsx's call pill and
Contact.jsx's `tel:` link derive the dial string from it in code
(`phone.replace(/[^\d+]/g, '')`) instead of Sanity holding two separate
fields — this exists specifically because an earlier build (2026-09-14) had
the display and dial formats hand-typed in two places and they could have
drifted; deriving one from the other makes that class of bug structurally
impossible now.

**Studio access & seeding:** `studio/` is a separate Sanity Studio app (own
`package.json`, not an npm workspace) deployable to a free
`*.sanity.studio` address. `scripts/seed-sanity.mjs` is the one-time cutover
script that pushed the pre-Sanity copy and uploaded the 16 client logos as
image assets; it's idempotent (fixed `_id`s, `createOrReplace`) and only
useful again if the dataset needs rebuilding from scratch. It requires a
Sanity API token with Editor rights, read from `SANITY_API_TOKEN` in the
runner's own shell — never pass that token through a chat or store it in
the repo. The Studio's read access for the live site further requires the
site's origin(s) to be added under sanity.io/manage → API → CORS Origins.

## Accessibility & Inclusion

No standard specified by the user; brief explicitly requires visible keyboard focus and `prefers-reduced-motion` support. Treat as baseline WCAG AA hygiene (contrast, focus states, semantic structure) given the institutional/trust-driven audience.
