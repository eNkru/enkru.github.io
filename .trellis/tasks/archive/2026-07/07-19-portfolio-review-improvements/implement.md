# Implement: Portfolio 评审改进

## Order

1. **P0-1** Meta → `index.html` 全部 `https://enkru.github.io`
2. **P0-2** Hero 头像 → `src/sections/Intro.tsx`
3. **P1-3** Experience 文案 → `src/data/experience.ts`
4. **P1-4** Showcase 文案 → `src/data/showcases.ts`
5. **P1-6** View work CTA → `Intro` + `App`（分区索引/移动 id）
6. **P2-8** ShowcaseCard 精简默认视图（触屏可展开）
7. **P2-9** pin 列表 + featured 选择逻辑 → `github.ts` + hook/section
8. **P2-7** 删除未引用 PNG/covers（grep 后再删）
9. **P3-a** JSON-LD + `public/robots.txt` + `public/sitemap.xml`
10. **P3-b** skip-link + 键盘缺口
11. **P3-c** Contact 前缀 `aria-hidden`
12. **Verify** `npm run build`；抽查路径与 meta

## Validation

```bash
npm run build
# 源码无 howardju.com（任务范围）
rg -n 'howardju\.com' index.html src public || true
# 未引用 cover / 旧 showcase png 不应再存在（按删除结果）
```

## Risky files / rollback

| 风险 | 回滚 |
|------|------|
| 误删仍引用图片 | `git checkout -- public/img/...` |
| 分区跳转破坏横向 scroll | 还原 App/Intro 导航改动 |
| GitHub pin 写错仓库名 | 空 pin 或修名字；fallback 仍工作 |

## Review gate before start

- [x] prd / design / implement 齐全
- [x] 用户确认可 `task.py start`
