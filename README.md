# Online Portfolio

The online portfolio for [Howard Ju](https://enkru.github.io/) (Myself).

## Tech Stack

React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion

## Design system

Three themes share one token-driven structure:

| Theme | Class | Notes |
|---|---|---|
| Paper (default) | `theme-paper` | Warm paper, ink text, sage accent, hairline rules, 20px surfaces |
| Slate | `theme-old` | Cool dark, blue accent, rounded |
| Matrix | `theme-matrix` | Neon terminal, chamfered corners, scanlines |

- Structural styles and the `v-*` editorial utilities live in `src/styles/base.css`.
- Each theme only retunes tokens (`--color-*`, `--radius-*`, `--paper-*`) and a
  few surface treatments, so section markup stays theme-agnostic.
- The theme switch lives in the sticky header; the active theme is set on
  `<html>` by `src/contexts/ThemeContext.tsx`.

## Development

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

### 1. Check `vite.config.js` base path

- User/org site (`enkru.github.io`) — keep `base: '/'`
- Project site (`enkru.github.io/my-repo`) — change to `base: '/my-repo/'`

### 2. Deploy

```bash
npm run deploy
```

This builds the project and pushes the output to the `gh-pages` branch.

### 3. Enable GitHub Pages

In your repo on GitHub: Settings → Pages → Source → `gh-pages` branch, root `/`.

Your site will be live at your GitHub Pages URL within a minute or two.
