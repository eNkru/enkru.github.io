# Quality Guidelines

> Code quality standards for this portfolio frontend.

---

## Overview

Static marketing site on GitHub Pages (`https://enkru.github.io`). Prefer small, defensible copy and correct SEO over fabricated metrics.

---

## Forbidden Patterns

- **Wrong production domain in meta**: do not use `howardju.com` in `index.html` / OG / Twitter / canonical / JSON-LD / robots / sitemap. Base URL is `https://enkru.github.io`.
- **Invented KPIs** in experience or showcase copy (percentages, “X users”, unverified degrees wording). Scope language must be defensible from existing facts.
- **Shipping unreferenced large PNG covers** under `public/img/experience/*_cover*` or legacy showcase PNGs when WebP is the source of truth.
- **Hover-only disclosure** for primary secondary content on touch-critical cards.

---

## Required Patterns

- Site SEO assets: Person JSON-LD, `public/robots.txt` (`Allow: /` + Sitemap), `public/sitemap.xml` (single-page `/`).
- Hero LCP image: `loading="eager"`, `fetchPriority="high"`, explicit `width`/`height`.
- Before deleting assets: `rg` for path references; keep logos and referenced WebP.
- After SEO or domain edits: `rg 'howardju\.com' index.html src public` must be empty in task scope.
- Verify with `npm run build` and `npx tsc --noEmit` when TypeScript changed.

---

## Testing Requirements

- No unit test framework required for this site yet.
- Manual / build gate: build passes; smoke critical paths (View work → Showcases, featured repos render).

---

## Code Review Checklist

- [ ] Domain strings are `enkru.github.io` only
- [ ] Copy has no new unverified numbers
- [ ] Featured repo selection is pin → starred → recent, N=4
- [ ] A11y: skip-link, inert off-screen sections, decorative `aria-hidden`
- [ ] Images: no broken refs after asset cleanup
- [ ] Build + tsc clean
