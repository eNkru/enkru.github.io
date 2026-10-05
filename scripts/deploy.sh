#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (dependency-free replacement
# for the `gh-pages` package, which pulled in an unfixable vulnerable tree).
set -euo pipefail
cd "$(dirname "$0")/.."

npm run build

url=$(git remote get-url origin)
sha=$(git rev-parse --short HEAD)

cd dist
git init -q
git checkout -qb gh-pages
git add -A
git commit -qm "deploy $sha"
git push -f "$url" gh-pages
