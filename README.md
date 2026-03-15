# Online Portfolio

The online portfolio for [Howard Ju](https://enkru.github.io/) (Myself).

## Tech Stack

React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion

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
