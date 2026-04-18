# Report 5 — UI & UX Improvements

**Date:** 2026-04-17
**Companion report:** `REPORT-4-BUGS-FOUND.md` (functional bugs).
**Method:** Same live Playwright-driven test session. These items are not bugs — the app works, but these changes would make it feel smoother, clearer, and more trustworthy.

Items are grouped by area and tagged with a rough effort (S = small, M = medium, L = large) and expected impact (★–★★★).

---

## 1 · Knowledge Graph (`/explore`)

### 1.1 Node labels — word-aware truncation + hover tooltip  `★★★ · S`
Current: nodes crop mid-word (`Quant mecha`, `Absol zero`, `Acti at`). Truncation happens at a fixed character count regardless of word boundaries.

**Change:** split the label on spaces, render the largest prefix that fits the node's radius, and add `title={fullLabel}` so native browser tooltips always show the full title on hover. For very long single-word labels, ellipsize with `…`.

This is one of the highest-leverage changes — every exploration session currently surfaces cryptic truncations.

### 1.2 Connection ranking — filter out biographical / awards / journal articles  `★★★ · M`
See B7 in Report 4 for the bug framing. The user-facing consequence is that the default graph of "Quantum mechanics" has almost no conceptual nodes — it's mostly people and awards. Even as a UX improvement alone, adding a simple category-based filter on the server would dramatically increase the perceived value of the graph.

**Suggested knobs:**
- Filter: drop `*biography*`, `*awards*`, `*journals*`, `*alumni*` categories.
- UI: show a small "Showing 8 of 31 related articles · [show people & awards]" toggle so power users can still reach the full list.

### 1.3 Focus mode — add a tooltip & discoverability affordance  `★★ · S`
The `FOCUS` button in the graph header is not labeled or explained. On first visit users have no idea what it does.

**Change:** add a native `title="Focus on selected node and its connections"` plus a quick visual demo the first time it's activated (e.g., a `?` badge next to the button for 3 s or until clicked once).

### 1.4 Graph clutter after repeated hops  `★★ · M`
After 3 jumps, the canvas holds 30+ nodes, many of them "dormant" (previously visited). There is no quick way to clean up.

**Change:** add a `CLEAR OLD` affordance that keeps the current concept + its direct connections and fades the rest to 0 opacity. This is half-implemented (dormant nodes already fade), but doesn't shrink — they still take click space and visually crowd.

### 1.5 Keyboard shortcut key caps are hidden in a subtitle line  `★ · S`
The header subtitle reads `TAB cycle · ENTER preview · DBL-CLICK jump · ESC close · drag to pan`. This is a lot of plain text that blends into the page.

**Change:** style each shortcut as a `<kbd>` pill:
```
[TAB] cycle  [ENTER] preview  [⎵⎵] jump  [ESC] close
```
Use the existing `.rn-kbd` token already defined in `01-design-tokens-and-fonts.md`.

---

## 2 · Concept Panel (`/explore` left column)

### 2.1 Collapse panel width when no image  `★★ · S`
Articles like `Action at a distance` have no thumbnail, so the image block renders as a large empty card with "No image available" text. The panel keeps the full 500 px width.

**Change:** (a) hide the `<img>` when there is no source (see B11). (b) Allow the panel to shrink to `min-width: 380px` so the knowledge graph gets more room when the hero is compact.

### 2.2 "Related topics · 50 connected articles" is unclickable  `★★ · S`
The fact chip advertises 50 connected articles but does nothing when clicked. Users naturally expect it to open the full list.

**Change:** make the chip a button that opens a simple modal or drawer showing all connections, with a search/filter box.

### 2.3 "Also known as" chip often repeats the main title  `★ · S`
For `Quantum mechanics` it says `Also known as: Quantum mechanics`. If the alias equals the title, hide the chip.

### 2.4 Deep Dive (+) section is not skimmable  `★ · M`
The expand-collapse `Deep Dive` header hides the Wikipedia sections behind a single `+`. Users don't know how many sections they're about to reveal or what they are.

**Change:** show the section count and the first 3 section titles as a preview, then expand to all 24 on click.

---

## 3 · Node Detail Overlay

### 3.1 De-duplicate description text  `★★★ · S`
See B4. Even as a UX issue (separate from the bug): rendering the same paragraph twice undermines trust.

### 3.2 Correct label pill  `★★ · S`
See B5. Users should be able to tell at a glance whether a node is *current*, *directly connected*, or *found through another article*.

### 3.3 Add "Open on Wikipedia" link  `★★ · S`
The overlay has only `JUMP HERE` / `CLOSE`. Readers often want to see the full Wikipedia article without jumping (which changes the graph state).

**Change:** add a third button `OPEN ON WIKIPEDIA ↗` that opens the article in a new tab.

### 3.4 Make `ESC` close the overlay  `★ · S`
Currently `ESC` closes popovers but not the full-screen detail overlay.

---

## 4 · Topbar / Navigation

### 4.1 "Hops" counter label is ambiguous  `★★ · S`
See B10. A user cannot tell if `3 hops` means "3 concepts visited" or "3 jumps made". Rename to `Visited · 3` or change the count semantics to true jumps (0-indexed from the first concept).

### 4.2 Search bar `/` hint is invisible at first  `★ · S`
The search field has a small `/` glyph on the left as a keyboard hint. Consider moving it to the right and adding a faint `(press / to search)` placeholder on first-mount only, dismissed after first interaction.

### 4.3 Consolidate TRAIL vs MAP  `★★ · M`
The `TRAIL` sidebar and `MAP` overlay display almost the same data (visited concepts, time, domains) with different visual styles. Users must learn both to discover which UI they prefer.

**Change options:**
- Keep `TRAIL` as the always-visible, lightweight sidebar and remove the `MAP` button (let double-click on `TRAIL` open the richer view).
- OR keep both but make the MAP overlay strictly zoomed-out-graph-only (no redundant stats).

---

## 5 · Skill Tree Route

### 5.1 Generation progress feedback  `★★★ · M`
See B8. This is the single most important perceived-reliability improvement for the app. A 50 s silent spinner makes the product feel broken even when it is not.

**Phase labels to stream:**
1. Understanding your prompt…
2. Fetching Wikipedia context…
3. Generating the skill graph…
4. Finding resources for each skill…

### 5.2 Node-locked state — show `Complete [prereq]` CTA inline  `★★ · S`
Locked nodes show a clear padlock icon (good) but the CTA to unlock them lives only in the side panel. Hover on a locked node could show an inline button: `Complete "Linear algebra" first →`.

### 5.3 Show a compact "You are here" breadcrumb in the detail panel  `★ · S`
When the user is deep in the tree, the detail panel should show a root → current breadcrumb above the title so they don't need to visually re-trace.

### 5.4 Right-side node labels truncate at viewport edge  `★★ · S`
Nodes near the right edge of the tree canvas have their labels clipped by the detail panel. Either push the tree viewport left by the detail-panel width when open, or render the label to the left of the node when the node is in the right 30 % of the canvas.

---

## 6 · Auth Modal

### 6.1 Confirm-password field  `★★ · S`
See B12. Prevents a class of silent lockouts.

### 6.2 Password-visibility toggle  `★ · S`
Small `show` / `hide` eye icon inside the password input. Very common pattern, two lines of JSX.

### 6.3 Submit-disabled visual state  `★ · S`
The modal's submit button does not visually disable when fields are empty. Make it a proper `disabled` state with reduced opacity and `cursor: not-allowed` so users see the form is not submittable.

### 6.4 Role-appropriate error styling  `★ · S`
The "Username already taken" / "Invalid credentials" message renders inline with the form. Wrap it in a `role="alert" aria-live="polite"` so screen readers announce the failure. Also give it a slight red accent from the existing token palette (`--rn-red` if defined, else `#ff5c5c`).

### 6.5 Focus trap within modal  `★ · S`
Tabbing past the last field currently escapes to the page behind the modal. Trap focus within the dialog (first → last → first cycle), and restore focus to the invoking trigger when closed. This is ~20 lines using `useEffect` + a small `getTabbable` helper.

---

## 7 · Launcher Screen

### 7.1 Event-driven dismissal  `★★ · S`
See B9. Tie the launcher fade-out to an explicit `ready` event per route rather than a 50 ms timeout.

### 7.2 Launcher progress text  `★ · S`
If the launcher is going to stay on-screen for a few seconds during hydration, let it display a single progress line (`Loading your journey…`). Silent splash screens feel slower than ones that talk.

---

## 8 · Cross-route integration

### 8.1 Cross-links between Skill Tree ↔ Wiki Hopper  `★★ · S`
Already half-done: the Wiki Hopper hero card has a `⟡ Generate Skill Tree` link, and the Skill Tree's detail panel has an `Explore on Wikipedia`. Both are great. **Extend it:**
- Skill Tree detail panel → add `↗ Open Wiki Hopper for this concept` next to the Wikipedia link. Behavior: `navigate('/explore?q=<skillName>')`.
- Wiki Hopper trail sidebar → add `Save this journey as a skill tree` button that seeds the skill-tree generator with the visited concepts.

### 8.2 Shared `?q=<topic>` convention  `★ · S`
The Wiki Hopper already parses `?q=`. The Skill Tree route parses `?generate=`. Unify under `?q=` and add a `?mode=` toggle to pick the behavior. Shareable links become one-parameter simple.

---

## 9 · Accessibility & Keyboarding

### 9.1 Modal / overlay `role="dialog"` + `aria-modal="true"`  `★★ · S`
Current `AuthModal` and `NodeDetailOverlay` are plain `<div>`s. Add the ARIA roles so assistive tech users know they are in a modal context.

### 9.2 Color-only state signaling  `★ · M`
Several graph interactions rely on color only (dormant = faded gold, current = bright gold, primary = cyan). Add a secondary cue — a small dashed outline for dormant, a solid outline for current — so color-blind users can still distinguish types.

### 9.3 Skip-to-content link  `★ · S`
For keyboard users on every route, the first tab should hit a visually-hidden `Skip to main content` link that focuses the primary canvas. Standard a11y pattern, small footprint.

---

## 10 · Platform & responsiveness

### 10.1 Small-viewport behavior is untested  `★★ · L`
At widths below ~1100 px the three-column explorer layout breaks (left panel overlaps graph). Either:
- Add a stacked layout at `max-width: 900px` (panel above graph).
- OR explicitly communicate a minimum-width requirement on first load.

Given Brancher's target audience (students on laptops), a stacked tablet view is worth the investment.

### 10.2 Dark-mode-only is fine but the contrast ratios should be audited  `★ · S`
Several secondary-text colors (e.g., `.rn-hair-2`, subtitle rows) fall below WCAG AA contrast on black backgrounds. A quick pass with the Chrome DevTools contrast checker and bumping one shade brighter solves this without compromising the aesthetic.

### 10.3 Print stylesheet  `★ · S`
Users occasionally want to print a skill tree as a study plan. A minimal `@media print` stylesheet (hide chrome, enforce ink-friendly colors, one-page-per-branch page break) would be a very well-received small touch.

---

## 11 · Functional enhancements (not bugs — just good-to-have)

### 11.1 Save / resume Wiki Hopper journeys  `★★ · M`
The TRAIL already tracks the visited path. Let signed-in users save a journey (`name`, `concepts`, `created_at`) and resume later. Persists in Supabase via a new `trails` table.

### 11.2 Export skill tree → Markdown / JSON  `★★ · S`
One-click export of a tree as Markdown (for notion/obsidian) and as JSON (for tools). Users currently have no way to get their work out of the app.

### 11.3 Suggested next concepts after a jump  `★ · M`
Right panel sidelink: after each jump, show 3 "common next hops" based on other users' trails (Supabase `trails` aggregate).

### 11.4 "Explain like I'm 5" toggle on the concept hero  `★★ · M`
Reuse the existing Gemini Enrich pathway with a different prompt: "Explain this Wikipedia extract as if to a beginner in two short paragraphs." Cache per-concept. Huge pedagogical value given the target audience.

### 11.5 Audio narration  `★ · L`
Web Speech API can read the current concept aloud with one button. Zero dependencies. Meaningful accessibility win.

### 11.6 Recently generated skill trees — quick-launch row  `★ · S`
On `/` the saved-trees list exists for signed-in users but is invisible otherwise. Also show a locally-cached "recent" row for anonymous users (localStorage), so they can resume without signing up.

---

## Priority summary

If the team can only ship five items from this report this sprint:

1. **1.1** Word-aware node labels + tooltip (★★★ · S) — instant polish.
2. **1.2** Filter biographical connections (★★★ · M) — biggest perceived-quality jump.
3. **3.1 & 3.2** De-dupe description & correct label pill in detail overlay (★★★ · S each) — trivially small, very visible.
4. **5.1** Skill-tree generation progress feedback (★★★ · M) — single biggest reliability perception win.
5. **6.1 & 6.5** Confirm-password + focus trap in auth modal (★★ · S) — professionalism + accessibility, almost free.

Items tagged `★★★` in the table above carry the highest return on engineering effort.
