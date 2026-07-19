# Convert portfolio to vertical scrolling

## Goal

Replace the viewport-sized horizontal slide experience with one continuous page that uses native vertical scrolling at every screen size. This removes the current dependency on desktop viewport dimensions and lets visitors read all section content naturally.

## Confirmed Facts

- The portfolio currently renders seven sections in this order: Intro, About, Skills, Showcases, Open Source, Experience, and Contact.
- Viewports narrower than `1000px` already use a vertically stacked layout; wider viewports use a Framer Motion horizontal slider.
- Desktop wheel, keyboard, and touch navigation is implemented by `useHorizontalScroll` and includes special handling for the internally scrollable Open Source and Experience sections.
- The Intro "View work" action already scrolls to Showcases in the stacked layout.
- Open Source and Experience use nested vertical scrolling on desktop because the horizontal layout constrains each section to the viewport height.

## Requirements

- Render all seven sections in a single vertical document flow on every viewport size.
- Use native page scrolling instead of translating a horizontal slide container.
- Preserve the existing section order, content, themes, responsive layouts, and in-view animations.
- Keep the Intro "View work" action and make it smoothly scroll to the Showcases section.
- Preserve the desktop section dots as scroll-to-section navigation, update their active state as the visitor scrolls, and keep them hidden on small screens.
- Let tall sections grow to their content height rather than requiring nested desktop scroll containers.
- Update horizontal-navigation wording and icons so the Intro guidance accurately describes vertical scrolling.
- Prevent unintended horizontal page overflow.
- Remove horizontal-scroll-only state, listeners, utilities, and dependencies when they are no longer used.

## Acceptance Criteria

- [x] Mouse wheel, trackpad, touch, Page Up/Down, and browser-native keyboard scrolling move through one continuous vertical page.
- [x] Desktop and mobile use the same vertical section flow without a width-based layout mode switch.
- [x] All Open Source and Experience content is reachable through the main page scroll, including expanded experience cards.
- [x] "View work" smoothly scrolls to Showcases.
- [x] On desktop, clicking a section dot smoothly scrolls to its section and the active dot follows the section currently in view.
- [x] Section dots remain hidden on small screens.
- [x] No horizontal section translation or custom horizontal wheel/swipe navigation remains active.
- [x] The page has no horizontal scrollbar at supported viewport sizes.
- [x] Existing theme switching and section entrance animations continue to work.
- [x] The production build succeeds.

## Out of Scope

- Rewriting portfolio copy or changing section order.
- Redesigning cards, themes, or the overall visual language.
- Adding new portfolio sections or content.

## Open Questions

- None.

## Validation

- `npx tsc --noEmit`
- `npm run build`
- `git diff --check`
- Local Vite entry returned HTTP 200.
- Source scan confirmed no remaining horizontal navigation, compact viewport, `w-screen`, fixed desktop section-height, or nested section-scroll references.
