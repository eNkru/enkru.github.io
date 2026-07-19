# Type Safety

> TypeScript contracts and runtime-boundary practices for the portfolio.

## Compiler Contract

`tsconfig.json` enables `strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`, and `noEmit`. New code must pass:

```bash
npx tsc --noEmit
```

Do not suppress errors to make the build pass. Keep imports, parameters, and branches genuinely used.

## Type Organization

- Colocate component prop interfaces with the component: `ShowcaseCardProps`, `SectionDotsProps`, and `IntroProps`.
- Define static domain interfaces next to their data: `Showcase` in `src/data/showcases.ts`, `ExperienceEntry` in `src/data/experience.ts`, and `GitHubRepo` in `src/data/github.ts`.
- Keep hook-only result and cache shapes inside the hook module when no other module constructs them (`CachedData`, `GitHubReposResult`).
- Export a type only when another module consumes it. Use `import type` when importing types without runtime values.

## Preferred Patterns

### Closed unions and exhaustive maps

Use literal unions for finite variants and `Record` when every variant needs configuration:

```ts
export type Theme = 'old' | 'matrix' | 'light'
const THEME_FONTS: Record<Theme, string> = { /* every theme */ }
```

Other local examples include `CyberPanelVariant` and the `StatPill` icon union.

### Native element prop extension

Reusable primitives extend the native element contract rather than recreating common DOM props. `CyberPanelProps` uses `ComponentPropsWithoutRef<'div'>`, adds its own options, and forwards `...rest`.

### Explicit nullable state

Represent absence directly:

```ts
const [error, setError] = useState<string | null>(null)
const [expandedId, setExpandedId] = useState<string | null>(null)
```

Use optional properties only when the data itself is optional, as in `Showcase.description?: string`.

### Typed function boundaries

Public helpers and hooks declare useful return types (`selectFeaturedRepos(...): GitHubRepo[]`, `useGitHubRepos(): GitHubReposResult`). Callback props describe their argument and return shapes instead of using generic `Function`.

## Runtime Boundaries

The project does not currently use a schema-validation library. Apply the existing defensive boundary behavior:

- Check `Response.ok` before consuming GitHub responses.
- Handle fetch failures with `unknown` narrowing through `err instanceof Error`.
- Wrap `JSON.parse` and browser storage access in `try/catch`; invalid cache data is treated as a cache miss.
- Narrow DOM assertions to the exact nullable element type, as in `HTMLLinkElement | null`.
- Context hooks must validate that a provider exists before returning a non-null typed value.

The GitHub API payload is currently assigned to `GitHubRepo[]` after the HTTP status check rather than validated field-by-field. If a future feature accepts user-authored JSON or depends on new external fields for correctness, add explicit runtime validation at that boundary rather than spreading assertions through consumers.

## Collection and Inference Rules

- Preserve source arrays when sorting derived views: `selectFeaturedRepos` uses `[...repos]` before `.sort()`.
- Use `typeof collection[number]` for a type derived from an existing constant collection when appropriate, as `SkillCard` does with `typeof skills[number]`.
- Use `as const` for stable literal metadata such as `SECTION_LABELS` and `SECTION_IDS`.
- Prefer inferred local types when the initializer is unambiguous; add explicit interfaces at module boundaries.

## Forbidden Patterns

- Do not introduce `any`, `@ts-ignore`, or broad double assertions.
- Do not use non-null assertions for values that can be checked or given a safe default.
- Do not duplicate shared domain shapes inside components.
- Do not mutate imported static arrays while sorting or selecting derived values.
- Do not type callbacks as `Function` or external data as an unstructured object when known fields are required.

## Verification

For TypeScript changes, run both:

```bash
npx tsc --noEmit
npm run build
```
