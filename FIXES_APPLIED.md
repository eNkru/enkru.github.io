# Fixes Applied — 2026-06-23

## Issue #1: TypeScript error — unused import ✅
**Fixed:** Removed unused `cn` import from `GitHubRepoCard.tsx`

```bash
npx tsc --noEmit  # Now passes with no errors
```

---

## Issue #4: Skills categories don't match CATEGORY_CONFIG ✅
**Fixed:** Updated `src/data/skills.ts` to match the icon/color configuration

**Before:**
- Categories: "Core Strengths", "Current Stack", "Legacy Experience"
- Result: All cards used default wrench icon + grey colors

**After:**
- Categories: "Backend & Integration", "Frontend", "Artificial Intelligence", "Other Skills"
- Result: Each category now gets its correct icon and accent color:
  - Backend & Integration → Server icon, green accent
  - Frontend → Monitor icon, cyan accent
  - Artificial Intelligence → Brain icon, magenta accent
  - Other Skills → Wrench icon, grey accent

---

## Issue #6: Theme CSS selectors depend on Tailwind class names ✅
**Fixed:** Replaced fragile Tailwind class selectors with semantic `data-` attributes

**Problem:** CSS rules like `.theme-old .w-9.h-9.bg-muted.border.border-border` would silently break if Tailwind classes changed.

**Solution:** Added explicit data attributes to themed elements:

### Components updated:
- `src/sections/Intro.tsx` — `data-theme-avatar`, `data-theme-avatar-frame`, `data-theme-status`
- `src/sections/Skills.tsx` — `data-theme-icon`, `data-theme-pill`
- `src/sections/Contact.tsx` — `data-theme-form-prefix`
- `src/components/ShowcaseCard.tsx` — `data-theme-showcase-image`, `data-theme-hud-corner`

### CSS updated:
- `src/index.css` — both `.theme-old` and `.theme-light` sections now use `[data-theme-*]` selectors

**Example:**
```css
/* Before (fragile): */
.theme-old .w-9.h-9.bg-muted.border.border-border {
  border-radius: 0.75rem;
}

/* After (stable): */
.theme-old [data-theme-icon] {
  border-radius: 0.75rem;
}
```

---

## Issue #12: CyberButton outline variant has broken clip-path ✅
**Fixed:** Replaced invalid CSS syntax in className with proper Tailwind utility

**Problem:** `'clip-path: var(--clip-chamfer-sm)'` in the className string was invalid — browsers ignored it.

**Solution:** Added `'cyber-chamfer-sm'` utility class (which already exists in `index.css` and applies the clip-path).

```tsx
// Before:
'clip-path: var(--clip-chamfer-sm)',  // ❌ Not a valid class

// After:
'cyber-chamfer-sm',  // ✅ Proper utility class
```

---

## Verification

```bash
✓ npx tsc --noEmit       # No TypeScript errors
✓ npx vite build         # Build succeeds
✓ Bundle size unchanged  # ~410KB JS, ~65KB CSS (gzipped: 128KB JS, 11KB CSS)
```

All skill category icons and colors now render correctly across all three themes.
