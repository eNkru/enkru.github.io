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

### Horizontal sections (desktop)

- Only the **active** section is interactive. Non-active slides use `inert` (and `aria-hidden`) so Tab cannot enter off-screen panels.
- Stable `id`s: `section-intro`, `section-about`, … (`SECTION_IDS` in `App.tsx`).

### Skip link

- Root skip link targets `#main-content`.
- Style with `position: fixed` + off-screen `transform`; on `:focus` bring into view. Avoid `top: -100%` alone (unreliable with full-viewport horizontal layout).

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
- Leaving off-screen horizontal sections focusable (missing `inert`).
