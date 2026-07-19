# State Management

> State ownership conventions for the React portfolio.

## Overview

The project uses React state and context directly. There is no Redux-style application store. Keep state as close as possible to the component or hook that owns the behavior, and promote it only when multiple distant consumers require the same source of truth.

## State Categories

### Local interaction state

Use `useState` inside the component that owns a transient interaction:

- `ShowcaseCard.tsx`: current carousel image and details disclosure.
- `Experience.tsx`: the currently expanded timeline entry.
- `SectionDots.tsx`: the hovered navigation label.

Prefer updater functions when the next value depends on the previous value:

```tsx
setDetailsOpen((open) => !open)
setCurrent((prev) => (prev + 1) % images.length)
```

### Parent-owned coordination state

When one component coordinates several sections, keep state in the nearest common parent and pass callbacks down. `App.tsx` owns the current observed section and passes `navigateToShowcases` to `Intro` rather than letting the section import application navigation state.

### Shared UI state

Use context only for state needed across unrelated branches. `ThemeContext.tsx` is the sole current example:

- `ThemeProvider` owns the `Theme` union state.
- The provider synchronizes document classes and the active font in an effect.
- `useTheme` throws when called outside the provider, making incorrect composition fail immediately.

Do not add a new context for state used by a parent and one child; use props instead.

### Server and cached state

`useGitHubRepos.ts` owns the complete GitHub repository lifecycle:

- Reads a five-minute `localStorage` cache once during initial state creation.
- Fetches only when no valid cache exists.
- Cancels state updates after unmount with a local `cancelled` flag.
- Stores fetch status as `loading` plus `error: string | null`.
- Falls back to `STATIC_REPOS` when the request fails.
- Returns one typed result object to `GitHubShowcase`.

Keep cache keys and TTLs beside the hook that owns them. Wrap storage reads and writes in `try/catch` because storage can be unavailable or full.

## Derived State

Do not store values that can be calculated safely from existing state.

- Totals are reduced directly from `repos`.
- `starredRepos`, `featuredRepos`, and `languageStats` use `useMemo` because they sort or transform collections.
- Reusable ranking and transformation rules remain pure functions (`selectFeaturedRepos`, `computeLanguageStats`) rather than being duplicated in components.

## External Library State

Allow focused libraries to own their domain state. `Contact.tsx` uses Formspree's `useForm` result and submit handler instead of copying form submission state into a second local model.

## When to Promote State

Promote local state only when at least one is true:

- Two sibling branches must update the same value.
- A provider-level side effect must stay synchronized with the value, as with theme document classes.
- A reusable hook owns a complete asynchronous lifecycle and exposes a stable result contract.

Otherwise keep state local. This preserves the simple component boundaries appropriate for a static portfolio.

## Common Mistakes

- Fetching GitHub data directly in `GitHubShowcase` instead of using `useGitHubRepos`.
- Storing featured or language lists separately from `repos`, which can let derived state drift.
- Creating global context for card expansion, carousel position, or hover state.
- Reading `localStorage` during every render rather than using lazy initial state or an effect.
- Updating state after an asynchronous effect has been cleaned up.
