# Portfolio 评审改进 P0–P3

## Goal

按线上 portfolio（https://enkru.github.io/）评审结论，落地已确认的 P0–P3 改进：SEO/性能、资深向文案、转化 CTA、资产瘦身、Showcase/Open Source 可读性、基础 SEO 与 a11y。不重做主题体系，不编造指标。

## User value

- 分享/收录域名正确，首屏更稳
- 经历与案例更像 Senior Consultant，扫读更省力
- 部署包更小；Open Source 展示可控
- 键盘/读屏基本可用

## Confirmed facts

- 栈：React 19 + Vite + TS + Tailwind v4 + Framer Motion；GitHub Pages `enkru.github.io`
- `index.html` meta 仍指向 `howardju.com`（需改）
- Hero 头像 `Intro.tsx`：`loading="lazy"`，原图 1024×1024
- 数据：`src/data/experience.ts`、`showcases.ts`、`skills.ts`、`github.ts`
- Showcase 用 WebP；`public` 仍有未引用 showcase PNG 与 experience covers
- 不做 CV 下载；邮箱本轮不改
- 相关任务：`06-20-experience-cover-images`（封面移除，与本任务资产清理可对齐）

## Decisions（全部已定）

| ID | 决策 |
|----|------|
| P0-1 | Meta/canonical/OG/Twitter 全部 `https://enkru.github.io` |
| P0-2 | 头像 `eager` + `fetchPriority=high` + width/height |
| P1-3 | Experience 基于现有事实重写为 senior consultant 语气 |
| P1-4 | Showcase impact/problem 无新数字，可辩护 scope 表述 |
| P1-5 | About「Vector」本轮跳过 |
| P1-6 | Hero「View work」→ Showcases（桌面分区 / 移动锚点） |
| P2-7 | 删除未引用 showcase PNG 与 `*_cover.png` |
| P2-8 | Showcase 默认：图+标题+role+tech+一行 impact；description/problem 折叠或 hover |
| P2-9 | pin 列表优先，不足用 starred/recent；N 建议 4 |
| P2-10 | 邮箱跳过，保留 hotmail |
| P3-a | Person JSON-LD + robots.txt + sitemap.xml |
| P3-b | skip-link + 补键盘可达缺口 |
| P3-c | Contact 装饰 `>` 加 `aria-hidden` |

## Requirements

- [x] P0-1：`index.html` 全部 URL/图片 meta 指向 `enkru.github.io`
- [x] P0-2：`Intro.tsx` 头像 eager + high + 尺寸属性
- [x] P1-3：`experience.ts` 文案 senior 化，事实不超出原文
- [x] P1-4：`showcases.ts` problem/impact 去空泛量化
- [x] P1-6：Hero View work → Showcases，桌面+移动可用
- [x] P2-7：删除未引用大 PNG/cover；无坏链
- [x] P2-8：ShowcaseCard 默认精简，详情可折叠/hover
- [x] P2-9：`github.ts` pin + hook 选择逻辑；上限 N=4
- [x] P3-a：JSON-LD + robots + sitemap（域名正确）
- [x] P3-b：skip-link + 键盘缺口
- [x] P3-c：Contact 前缀 `aria-hidden`

## Acceptance criteria

- [x] 全站源码/meta 无 `howardju.com`（任务范围内）
- [x] 首屏头像非 lazy，有 width/height
- [x] Experience/Showcase 无新增未证实数字；语气专业
- [x] View work 可进入 Showcases
- [x] public 无任务约定的未引用大图；构建通过且展示图正常
- [x] Showcase 默认更短；详情仍可看
- [x] Open Source 可用 pin 配置，不唯 star
- [x] robots/sitemap/JSON-LD 可访问且 URL 正确
- [x] skip-link 可用；主题/分区可键盘操作
- [x] Contact 装饰前缀不进入无障碍名称

## Out of scope

- CV 下载
- 重做主题 / 视觉体系
- 修复 `howardju.com` DNS
- About Vector 对齐
- 更换邮箱
- 编造 KPI 或新客户

## Open questions

- 无阻塞项。实现时 pin 仓库名需从当前 GitHub 账号取默认列表（可先空数组 + 合理 fallback）。
