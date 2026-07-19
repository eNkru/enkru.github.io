# Design: Portfolio 评审改进

## Boundaries

| 区域 | 触点 | 不做 |
|------|------|------|
| SEO meta | `index.html` | 自定义域名运维 |
| Hero / nav | `Intro.tsx`, `App.tsx`（分区跳转） | 新导航系统 |
| 文案 | `experience.ts`, `showcases.ts` | 虚构指标 |
| 卡片 UI | `ShowcaseCard.tsx` | 全站卡片重构 |
| 资产 | `public/img/**` 未引用文件 | 改 WebP 生成流水线 |
| GitHub | `github.ts`, `useGitHubRepos` / 展示层 | 换 API 提供方 |
| SEO 文件 | `public/robots.txt`, `public/sitemap.xml`, JSON-LD in `index.html` 或 App | 服务端渲染 |
| a11y | App root skip-link, `Contact.tsx` 前缀 | 完整 WCAG 审计 |

## Contracts

### 分区导航（View work）

- 桌面：`currentSection` 设为 Showcases 索引（`SECTION_LABELS` 中 `'Showcases'`，当前为 3）。
- 移动：`document` 滚动到 Showcases 容器；给该 section 稳定 `id`（如 `section-showcases`）。
- Intro 不直接依赖 hook 内部实现：通过 callback props 或轻量 context/事件；优先最小改动——在 `App` 注入 `onNavigate(sectionIndex)` 或 `navigateToLabel('Showcases')`。

### Showcase 卡默认视图

- 始终：images, title, role, techStack, impact（一行）
- 次要：description, problem — `details` 展开或 hover 显示（触屏需可点展开，不能只靠 hover）

### Open Source 选择

```
featured = pinRepos (order preserved, exist in API results)
if len < N: append starred (desc stars) excluding already picked
if still < N: append recent (updated_at) excluding already picked
slice(0, N)
```

- `PINNED_REPOS: string[]` in `github.ts`
- Charts 可继续用全量 stats；仅「Featured」列表改选择逻辑

### SEO

- Base URL constant mental model: `https://enkru.github.io`
- `og:image` → `https://enkru.github.io/img/aboutme2.jpg`
- `sitemap.xml` 单页站即可：`/`
- `robots.txt`: `Allow: /` + Sitemap 行
- Person JSON-LD: name, url, jobTitle, sameAs (GitHub, LinkedIn)

## Data flow

```
User click View work → App setSection(Showcases) | scrollIntoView
GitHub API → hook → selectFeatured(pin, starred, recent, N) → cards
Static public assets → only referenced webp/logos ship
```

## Trade-offs

- **单任务 vs 子任务**：交付点多但同一站点 polish；保留单任务 + 有序 implement 清单，避免过度拆分。
- **hover 详情 vs 始终展开**：触屏必须有展开；用 `<details>` 或本地 state 优先于纯 hover。
- **pin 空列表**：完全回退 starred/recent，行为不劣于现状。

## Compatibility / rollback

- 删 PNG 前 grep 确认无引用；可用 git 恢复文件
- Meta 域名改回一行即可回滚
- 文案可 git 还原 `experience.ts` / `showcases.ts`

## Rollout

- `npm run build` 验证；部署仍 `npm run deploy`（用户自行）
