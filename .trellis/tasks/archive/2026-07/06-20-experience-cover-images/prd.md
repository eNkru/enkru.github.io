# Experience 封面图片移除

## 问题描述

Experience 卡片封面图片区域太小（h-24 sm:h-28），图片几乎看不清。尝试调整透明度/渐变后效果仍不理想。

## 解决方案

移除封面图片，将 logo + 标题 + 职位信息整合到卡片内容区顶部。

## 改动

1. `src/sections/Experience.tsx` — 移除封面图片容器（含图片、扫描线、渐变遮罩），logo + title + role 改为卡片内容区顶部的行内布局
2. `src/data/experience.ts` — 从 `ExperienceEntry` 接口和所有条目中移除 `cover` 字段
3. `public/img/experience/*_cover.png` — 保留不动（未被引用的文件不会被打包）

## 验收标准

- [x] 卡片不再显示封面图片
- [x] logo + 公司名 + 职位显示清晰
- [x] 构建通过
