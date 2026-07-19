# Directory Structure

> Module boundaries for the React portfolio frontend.

## Application Shape

This is a single Vite application rather than a multi-package workspace. `src/main.tsx` mounts the application, while `src/App.tsx` owns top-level providers, section order, section IDs, and cross-section navigation callbacks.

```text
src/
├── components/        Shared UI used by multiple sections
│   └── cyber/         Reusable design-system primitives and barrel exports
├── contexts/          React context for genuinely shared UI state
├── data/              Static content, domain interfaces, constants, selectors
├── hooks/             Lifecycle and data-fetching hooks
├── sections/          Page-level portfolio sections composed by App
├── styles/            Base design tokens and theme-specific overrides
├── utils/             Pure calculations and transformations
├── App.tsx            Page composition and section navigation
├── index.css          CSS import order and global accessibility helpers
└── main.tsx           React DOM entry point

public/
├── img/               Images referenced with root-relative URLs
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Module Ownership

- Put a full page section in `src/sections/`. Examples: `Experience.tsx`, `GitHubShowcase.tsx`, and `Contact.tsx`.
- Put reusable page UI in `src/components/`. Examples: `ShowcaseCard.tsx`, `SectionDots.tsx`, and `LanguageDonut.tsx`.
- Put generic visual primitives in `src/components/cyber/` and export them through `src/components/cyber/index.ts`.
- Put static portfolio content and its domain interface together in `src/data/`. `showcases.ts` owns `Showcase`; `experience.ts` owns `ExperienceEntry`.
- Put React lifecycle, fetching, and cache ownership in `src/hooks/`. Pure selection logic stays outside hooks; `selectFeaturedRepos` is in `src/data/github.ts`, while `useGitHubRepos` invokes it.
- Put framework-independent transformations in `src/utils/`. `computeLanguageStats` in `src/utils/github-languages.ts` is the local example.
- Put global tokens and reusable utilities in `src/styles/cyber-base.css`; keep theme overrides isolated in `theme-light.css` and `theme-old.css`.
- Put deployable static assets in `public/` and reference them with root-relative paths such as `/img/aboutme2.jpg`.

## Dependency Direction

The normal dependency direction is:

```text
App -> sections -> shared components
                  -> hooks -> data / utils
                  -> data
contexts -> App and consumers
```

Shared components must not import page sections. Data modules and pure utilities must not import React components. Navigation stays in `App.tsx` and is passed to leaf sections through callbacks such as `IntroProps.onViewWork`.

## Naming Conventions

- React component files and exported components use PascalCase: `GitHubRepoCard.tsx`, `CyberSectionHeading`.
- Hooks use a `use` prefix: `useTheme`, `useGitHubRepos`.
- Data and utility modules use lower-case kebab names when multiple words are needed: `github-languages.ts`.
- Component prop interfaces are colocated and named `<Component>Props`.
- Section DOM IDs are stable kebab-case values defined centrally in `SECTION_IDS`.

## Adding New Work

- New portfolio content belongs in an existing `src/data/` module unless it introduces a genuinely separate domain.
- A component used by only one section can remain inside that section file; extract it when reuse or size makes ownership clearer.
- Do not add a global store, service layer, or feature-directory hierarchy for this small static site without a concrete requirement.
- Keep `App.tsx` focused on composition and cross-section behavior; section-specific presentation stays under `src/sections/`.

## Reference Implementations

- `src/App.tsx`: provider setup, stable section metadata, vertical navigation.
- `src/sections/Skills.tsx`: section-owned presentation with data imported from `src/data/skills.ts`.
- `src/hooks/useGitHubRepos.ts`: lifecycle ownership with pure selectors imported from data and utils modules.
- `src/components/cyber/CyberPanel.tsx`: reusable typed primitive that extends native element props.
