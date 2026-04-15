# 09 — Final Pass (cleanup, build, smoke test)

> **Prerequisites:** Docs 01–08 merged. This doc is the integration / verification pass.

## Goal

Eliminate dead CSS, verify every surface uses Refined Neon tokens, run a production build, and walk through a full end-to-end smoke test across both routes. After this doc, the app should look unified and no orphaned legacy styles should remain.

## Files touched

- `client/src/styles/globals.css` — orphan sweep
- `client/src/components/SkillTree/SkillTree.module.css` — orphan sweep
- Any CSS module flagged by Task 9.2
- No JSX changes unless Task 9.3 uncovers a bug

---

## Task 9.1 — Grep for legacy tokens

Run each of these greps from `client/src/`. Any hit is a finding — either convert it to an `--rn-*` token or add a 1-line comment justifying why it stays.

```bash
# Hard-coded hex colors
rg -n '#[0-9a-fA-F]{3,6}\b' client/src --glob '*.css' --glob '*.module.css'

# Legacy HSL rainbow values
rg -n 'hsl\(\s*\d' client/src --glob '*.css' --glob '*.module.css'

# Old purple literals
rg -n '#a78bfa|#c4b5fd|#7c6aaa|#6d5aad|#4c3f7a|#1e1a2e' client/src

# Old grey text literals
rg -n '#888|#666|#444|#333|#2a2d3e' client/src

# The dropped helper
rg -n 'exploreScope|nodeColors|level-badge|node-emoji' client/src
```

Fix each hit. For `#RRGGBB` values that belong to fonts.googleapis.com `@import` URLs or similar, ignore.

## Task 9.2 — Orphan selector sweep

Open `client/src/components/SkillTree/SkillTree.module.css`. Walk the whole file top to bottom. For each selector, search for its usage:

```bash
rg -n "styles\.<className>" client/src
```

Delete any selector that has zero matches. Candidates based on docs 05–07 changes:

- `.exploreCta` (removed in doc 05)
- `.ctaDivider` (removed in doc 05)
- Old `.graph :global(.edge)` / `.graph :global(.node-emoji)` / `.graph :global(.node-label-below)` / `.graph :global(.level-rule)` / `.graph :global(.level-axis-label)` / `.graph :global(.level-badge)` — replaced by `rn-*` selectors in doc 07.
- Any leftover `.detailPanel` substyles that no longer match (e.g. `.detailClose` glyph rules).

Delete them. Do not rename — the consumers were replaced with new class names in docs 05–07.

## Task 9.3 — Production build

```bash
cd "c:/Users/revaa/AI Projects/CS124H/Group2ProjectGithub/Project/client"
npm run build
```

Required: zero errors, zero warnings. Investigate any warning that mentions unused CSS, undefined variables, or invalid `url(#...)` references.

## Task 9.4 — End-to-end smoke test

Run `npm run dev` from the project root. Walk through this checklist in a real browser, not just visual inspection.

### Landing (`/`)

- [ ] Near-black background with faint radial glow and dot grid.
- [ ] Hero headline: "What do you want *to learn*?" — last two words in serif italic gold.
- [ ] Mono eyebrow above the headline.
- [ ] Generate pill has a gold focus ring and gold "Generate" button inset.
- [ ] Explore pill below is smaller with a cyan focus ring and a cyan "Explore →" button.
- [ ] Saved trees render in a hairline card grid, 2 columns on a 1200 px viewport.
- [ ] Hovering a saved card lifts it 1 px and brightens the border.

### AppHeader (always visible)

- [ ] 56 px tall with a hairline bottom, no gradient underline.
- [ ] Brand lockup: `STG` mono tag, "Skill Tree *Generator*" with serif italic, `v1` chip.
- [ ] Tabs live inside a pill track; active = gold halo, hover = cyan.
- [ ] Right side: ghost "Sign In" + cyan pill "Sign Up". Signed in: `@username` mono + ghost "Logout".

### Auth modal

- [ ] Deep-space card with gold corner brackets.
- [ ] `ACCESS · STG` / `JOIN · STG` eyebrow.
- [ ] Sign In submit is a cyan pill; Sign Up submit flips to gold.
- [ ] Input focus shows a 3 px cyan glow ring.
- [ ] Error messages start with a red `!` prefix in monospace.

### Import banner (if shown)

- [ ] 36 px hairline strip with a cyan `IMPORT` tag.
- [ ] Message is single-line truncating display text.
- [ ] Cyan pill "Import" + ghost "Dismiss".

### TreeView (after generating)

- [ ] Sub-topbar 46 px, `← Back` ghost pill on the left.
- [ ] Centered eyebrow "TOPIC" + capitalized topic name in gold.
- [ ] Right side: mono `03/12 · 25%` progress + a 3 px cyan hairline progress track.
- [ ] Graph container has a faint radial glow plus the SVG's own dot grid.

### SkillGraph

- [ ] Level rules are dashed hairlines with left-aligned `LVL 01/02/...` labels and a tick mark.
- [ ] Level 1 nodes are violet hexagons, middle levels are blue circles, the top level is a gold circle with a dashed inner ring.
- [ ] Completed nodes glow cyan with a small cyan `✓` badge.
- [ ] Locked nodes are 42% opacity grey, smaller, non-interactive.
- [ ] Hover a node → scales to 1.06, others fade to 18%, connected edges turn cyan, cyan particles flow along them.
- [ ] Click a node → DetailPanel slides in.

### DetailPanel

- [ ] 420 px wide, `--rn-ink` background, hairline left border.
- [ ] Level pill + optional LOCKED/COMPLETE pill.
- [ ] Close button is a 28 px circle with a hairline-drawn X (no emoji).
- [ ] Tab bar is a 3-column pill track; active tab has a gold halo.
- [ ] List bullets are color-coded by category (gold `→`, gold `•`, cyan `✓`, red `×`, violet `◆`, gold `↗`).
- [ ] "Mark Complete" → cyan pill; when done flips to gold pill.
- [ ] Resources tab includes a "Explore '<node>' on Wikipedia" link in gold.

### Explore route (`/explore`)

- [ ] Switching tabs does not flash.
- [ ] Sub-topbar (search bar) is 46 px with a hairline, matching the TreeView sub-topbar.
- [ ] Left concept panel has `--rn-ink` background, hairline right border.
- [ ] Right graph panel matches the Skill Tree background exactly.
- [ ] `documentElement` has no class added by the route.
- [ ] Concept graph, trail sidebar, journey overlay all use `--rn-*` tokens — no purple literal leaks.

## Task 9.5 — Cross-browser spot check

- [ ] Chrome (primary)
- [ ] Firefox — verify SVG `filter` and `backdrop-filter` both render.
- [ ] Safari (if available) — backdrop-filter needs `-webkit-backdrop-filter`, already in the CSS.

## Verification checklist (overall)

- [ ] Every grep in Task 9.1 returns zero unexplained hits.
- [ ] Every selector in Task 9.2 that has zero usages is deleted.
- [ ] Production build is clean.
- [ ] Full smoke test passes on a 1440×900 viewport.
- [ ] No console errors in the dev tools on any screen.
- [ ] No visible jump when switching between `/` and `/explore`.
- [ ] The app feels like one product.

## Out of scope

- Responsive mobile layouts. The app is desktop-first.
- New features. No behavior changes.
- Server-side work.
- Icon library adoption — everything visual in the UI is a CSS pseudo-element or a 1 px SVG stroke.

## If something is broken

- **A legacy CSS selector is still referenced somewhere but its styles are gone.** → Grep for the class name, read the consumer, decide whether to reintroduce the selector in the Refined Neon palette or convert the consumer to a new class.
- **A new SVG filter doesn't render in Firefox.** → Confirm the filter `<defs>` is inside the same `<svg>` as the element using it. Cross-SVG filter references break silently.
- **Tab active state looks white instead of gold on the AppHeader.** → Confirm doc 01's `--accent-purple → --rn-gold` alias is present in `globals.css`. This flip is the single point of failure for the brand color swap.
- **The DetailPanel does not slide in.** → Confirm `.detailPanelOpen` class is toggled on the `aside` and the `transform` transition is not blocked by a parent's `overflow: hidden` without a stacking context.
