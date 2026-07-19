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

### Vertical section navigation

- All viewport sizes use one native vertical document flow; do not reintroduce viewport-sized horizontal slides or custom wheel/swipe interception.
- Stable `id`s remain `section-intro`, `section-about`, … (`SECTION_IDS` in `App.tsx`). Navigation callbacks use `scrollIntoView` rather than owning section translation state.
- Desktop section dots are hidden below `1000px`, scroll to the matching stable ID, and expose the section observed near the viewport centre through `aria-current`.
- Section shells use `w-full`, not `w-screen`. `100vw` can include the browser scrollbar width and create unwanted horizontal overflow on a vertically scrolling page.
- Tall sections such as Open Source and Experience grow with their content. Avoid fixed viewport heights and nested `overflow-y-auto` containers unless the product explicitly requires an independent scroll region.

### Skip link

- Root skip link targets `#main-content`.
- Style with `position: fixed` + off-screen `transform`; on `:focus` bring it into view.

### Cards with secondary detail

- Default view: image, title, role, tech, one-line impact.
- Description / problem behind a **clickable** control (`button` or `<details>`), not hover-only (touch devices).
- Expand control: `aria-expanded`, `aria-controls` + matching panel `id`.

### Decorative chrome

- Contact-style prefixes (`>`) and icon-only glyphs: `aria-hidden="true"`.
- Section dots / theme toggles: `type="button"`, visible `focus-visible` ring, `aria-current` when applicable.

---

## Common Mistakes

- Using `loading="lazy"` on the LCP hero avatar — use `eager` + `fetchPriority="high"` + `width`/`height`.
- Hover-only “more details” on Showcase cards.
- Using `w-screen` for vertical section shells, which can produce a horizontal scrollbar when the browser reserves space for its vertical scrollbar.
- Adding nested section scrollbars to compensate for fixed viewport heights; prefer natural document height.
