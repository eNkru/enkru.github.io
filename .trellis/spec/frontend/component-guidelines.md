# Component Guidelines

> How components are built in this portfolio (React + Vite + Tailwind).

---

## Overview

Sections live under `src/sections/`, shared UI under `src/components/`. Data is static TS modules in `src/data/` unless fetched (GitHub). Prefer props/callbacks over new global state for section navigation.

---

## Component Structure

- Functional components, TypeScript props interfaces colocated in the same file.
- Motion wrappers stay close to the section; keep presentational cards dumb when possible.

---

## Props Conventions

- Navigation callbacks from `App` (e.g. `onViewWork`) rather than importing scroll/section state into leaf sections.
- Optional expand state for long copy stays local to the card (`useState`), not in parent lists.

---

## Styling Patterns

- Tailwind utility classes; global a11y helpers (e.g. `.skip-link`) in `src/index.css`.
- Theme colors via CSS variables / ThemeContext — do not hardcode a second theme system.

---

## Accessibility

### Section navigation

- All viewport sizes use one native vertical document flow; do not reintroduce viewport-sized horizontal slides or custom wheel/swipe interception.
- Stable `id`s remain `section-intro`, `section-about`, … (`SECTION_IDS` in `App.tsx`). Navigation callbacks use `scrollIntoView` rather than owning section translation state.
- `PaperHeader` owns navigation: in-page anchor links that expose the section observed near the viewport centre through `aria-current`. Desktop shows one row; below `768px` the links move to a second, horizontally scrollable row with a distinct `aria-label`.
- Anchor targets carry `scroll-margin-top` in `src/index.css` so the sticky header never covers a section title.
- Section shells use `w-full` and `overflow-x-clip`, not `w-screen`. `100vw` can include the browser scrollbar width and create unwanted horizontal overflow on a vertically scrolling page.
- Tall sections such as Open Source and Experience grow with their content. Avoid fixed viewport heights and nested `overflow-y-auto` containers unless the product explicitly requires an independent scroll region.

### Skip link

- Root skip link targets `#main-content`.
- Style with `position: fixed` + off-screen `transform`; on `:focus` bring it into view.

### Cards with secondary detail

- Default view: image, title, role, tech, one-line impact.
- Description / problem behind a **clickable** control (`button` or `<details>`), not hover-only (touch devices).
- Expand control: `aria-expanded`, `aria-controls` + matching panel `id`.

### Decorative chrome

- Icon-only glyphs and decorative rules: `aria-hidden="true"`.
- Theme switches: `type="button"`, `aria-pressed`, `role="group"` with a label, visible `focus-visible` ring.

### Editorial primitives

- Section headings go through `PaperSectionHeading` (`index` + `kicker` + `title` + optional `lede`); do not hand-roll a heading block per section.
- Reuse the `v-*` utilities from `cyber-base.css` (`v-page`, `v-section`, `v-kicker`, `v-title`, `v-lede`, `v-cell`, `v-cell-hover`, `v-pill`, `v-meta`, `v-btn`) instead of repeating Tailwind chains. Themes retune them through tokens, so a section restyled with raw utilities will not follow the theme switch.
- Spacing between a heading and its content is the caller's job; `PaperSectionHeading` intentionally ships without a bottom margin.

---

## Common Mistakes

- Using `loading="lazy"` on the LCP hero avatar — use `eager` + `fetchPriority="high"` + `width`/`height`.
- Hover-only “more details” on Showcase cards.
- Using `w-screen` for vertical section shells, which can produce a horizontal scrollbar when the browser reserves space for its vertical scrollbar.
- Adding nested section scrollbars to compensate for fixed viewport heights; prefer natural document height.
- Hardcoding `text-white` / `#94a3b8` inside SVG or chart code — use `var(--color-*)` so the theme switch applies.
- Applying an opacity modifier to a `var()` colour (e.g. `bg-[var(--x)]/10`): Tailwind resolves the fallback to a literal hex, so the value stops following the theme. Use `color-mix()` or a token instead.
