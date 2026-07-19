# Showcases & Skills Refactor

## Goal
Implement P2 (case study format) and P5 (skills regrouping) from the portfolio review suggestions.

## Requirements

### P2 — Showcases → Case Studies
- Add `role`, `techStack`, `problem`, and `impact` fields to the `Showcase` interface
- Update `ShowcaseCard` to render the new fields in a readable layout
- Update `ShowcaseCardProps` to match
- ⚠️ Content for new fields (role, problem, impact) must be provided by the developer — the current description is too brief

### P5 — Skills Regrouping
- Regroup existing skills into three categories:
  - **Core Strengths** — modern primary stack (React/TypeScript, Java/SpringBoot, AWS, AI)
  - **Current Stack** — tools actively used right now
  - **Legacy Experience** — older tools still useful for context
- Eliminate the "Other Skills" bucket; fold relevant items into the above
- No new skills content needed, just re-categorization of existing `skills.ts` data

## Out of scope
- Reordering skill cards or changing the card visual design
- Adding/removing actual skill items (only regrouping)

## Acceptance Criteria
- [ ] `Showcase` interface has `role`, `techStack`, `problem`, `impact` fields
- [ ] `ShowcaseCard` renders new fields, with missing fields gracefully handled
- [ ] skills data is regrouped into Core Strengths / Current Stack / Legacy Experience
- [ ] `npm run build` passes
- [ ] `docs/portfolio-review-suggestions.md` updated for P2 and P5
