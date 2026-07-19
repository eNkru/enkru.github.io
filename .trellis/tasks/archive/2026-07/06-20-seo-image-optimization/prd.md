# SEO & Image Optimization

## Goal
Improve metadata/favicon polish (P6) and optimize screenshots (P7) from the portfolio review suggestions. P4 (CV download) is explicitly out of scope.

## Requirements

### P6 — Metadata & favicon
- Replace `/vite.svg` favicon with a real favicon file
- Add `<meta name="description">` with a proper site description
- Add `<link rel="canonical">` pointing to production URL
- Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Add Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)

### P7 — Image optimization
- Convert showcase screenshots from PNG to WebP (or AVIF where beneficial)
- Add `loading="lazy"` for non-critical images (showcase cards, experience covers)
- Keep original PNGs or ensure WebP fallback is handled

### Out of scope
- P4 (CV download) — intentionally skipped

## Acceptance Criteria
- [ ] `index.html` has valid favicon, description, canonical, OG, and Twitter tags
- [ ] Favicon file exists in `/public/` and renders in browser
- [ ] Showcase images use WebP format with lazy loading
- [ ] Experience cover images use lazy loading
- [ ] `npm run build` passes
