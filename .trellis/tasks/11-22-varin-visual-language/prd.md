# Apply Varin visual language to portfolio

## Goal

Rework the portfolio's presentation to borrow the visual language of
[varin.dev](https://varin.dev/) — warm paper surface, ink text, sage accent,
hairline rules, mono kickers, generous rounding, quiet motion — without
changing the content, section order or navigation model.

## Why

The previous default theme was an "editorial luxury" light theme (Playfair +
gold) layered on a cyberpunk token base. It fought the cyberpunk structure it
sat on, and the cyberpunk theme carried heavy chrome (scanlines, glitch,
chamfered corners) that made the page read as a demo rather than a portfolio.

## Reference characteristics (varin.dev)

Extracted from the live CSS (`/_astro/Base.*.css`, `/_astro/social-card.*.css`):

- Tokens: `--paper:#fcfbf9`, `--card:#fffefd`, `--ink:#1b1a18`, `--muted:#615e59`,
  `--sage:#77837f`, `--band:#20272a`, hairline borders at ~12–15% ink alpha.
- Type: Inter for UI, JetBrains Mono for kickers/labels, tight negative tracking
  on titles (`-0.032em`), uppercase mono kickers at `0.14em` tracking, 11.5px.
- Layout: 1160px page, `clamp(18px, 3vw, 28px)` gutters, `clamp(80px,11vw,120px)`
  section padding, hairline rules between sections.
- Surfaces: 20px card radius, 12px button radius, pill tags, near-flat shadows,
  a dark "band" block used for stat rows.
- Chrome: sticky blurred header, 0.045-opacity multiply grain over the page,
  `cubic-bezier(.22,1,.36,1)` easing, 17/28/52ms-free (`0.17s/0.28s/0.52s`) durations.

## Scope

In scope:

- New default theme `paper` replacing `light` (Playfair/gold removed).
- Token-driven `v-*` editorial utilities in `cyber-base.css` so all three themes
  share structure and only retune values.
- Sticky `PaperHeader` (wordmark, section anchors, appearance switch) replacing
  the floating bottom-left theme toggle and the floating section dots.
- `PaperSectionHeading` primitive: numbered mono kicker + tight title + lede.
- Section-by-section restyle: Intro, About, Skills, Showcases, Open Source,
  Experience, Contact.
- Keep `old` (Slate) and `matrix` themes working; matrix keeps the cyberpunk
  identity as an explicit opt-in.
- Sync `.trellis/spec/frontend/*` with the new conventions.

Out of scope:

- Copy rewrites beyond trimming to fit the new layout. No new metrics.
- Routing, i18n, dark/light system preference detection.
- Any change to `src/data/*` content.

## Mapping — reference pattern → portfolio section

| Section | Borrowed pattern |
|---|---|
| Intro | Hero: kicker → oversized tight-tracked name → lede → primary/ghost CTA pair, portrait card with a glass caption bar, dark stat band, scroll cue |
| About | Two-column editorial split: numbered heading + stat row on the left, prose + hairline-separated fact list on the right |
| Skills | Section header with trailing "See it on GitHub" ghost action; three equal cards with icon tile, mono category tag, note, pill cloud, entry count |
| Showcases | Feature card (full row, capped media height) + 2×2 grid; meta/impact/pills; "More details" disclosure kept touch-friendly |
| Open Source | Dark-band aggregate stats, two chart cards, featured repo cards, ghost CTA |
| Experience | Sticky year/org rail on desktop + stacked expandable cards, mono period labels |
| Contact | Left pitch with email card + socials, right form card on a hairline surface, minimal footer |

## Acceptance criteria

- [x] `npm run build` and `npx tsc --noEmit` pass.
- [x] No console errors on load; no horizontal overflow at 390px or 1440px.
- [x] All three themes switch live and remain legible.
- [x] Hero avatar keeps `loading="eager"`, `fetchPriority="high"`, explicit dimensions.
- [x] Section IDs unchanged (`section-intro` … `section-contact`); header links
      scroll to them with the sticky header accounted for.
- [x] Card secondary detail stays behind a clickable disclosure with
      `aria-expanded` / `aria-controls`.
- [x] No new unverified numbers in copy.
- [x] `rg 'howardju\.com'` still empty.

## Notes

- `theme-light.css` was deleted; `theme-paper.css` and `theme-matrix.css` added.
- Charts previously hardcoded `#ffffff` / `#94a3b8` / `rgba(255,255,255,…)` in
  SVG attributes; they now read `var(--color-*)` so the theme switch applies.
