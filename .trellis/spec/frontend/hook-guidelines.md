# Hook Guidelines

> How hooks are used in this portfolio.

---

## Overview

Custom hooks live in `src/hooks/`. Data selection pure functions that do not need React belong in `src/data/` next to their constants.

---

## Custom Hook Patterns

- Hooks own fetch/lifecycle; pure ranking/filtering is exported from data modules and called inside the hook or section.
- Example: `selectFeaturedRepos` in `src/data/github.ts`; `useGitHubRepos` returns `featuredRepos` via `useMemo`.

---

## Data Fetching

### GitHub featured repos

Contract (`src/data/github.ts`):

```
featured = pin order (names in PINNED_REPOS that exist in API results)
if len < N: append starred desc (stargazers_count > 0), excluding picked
if still < N: append recent by updated_at, excluding picked
slice(0, FEATURED_REPO_LIMIT)  // N = 4
```

- Charts / language stats may still use the full repo list or star-sorted list.
- Empty `PINNED_REPOS` is valid — fallback is starred then recent (not worse than star-only).
- Missing pin names are skipped silently.

---

## Naming Conventions

- Hooks: `use*` (`useGitHubRepos`, `useHorizontalScroll`).
- Pure selectors: verb phrase without `use` (`selectFeaturedRepos`).

---

## Common Mistakes

- Embedding pin/star/recent ranking inside the component instead of a shared selector.
- Applying the featured limit to chart stats (charts should keep broader data).
