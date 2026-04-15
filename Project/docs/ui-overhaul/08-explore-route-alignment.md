# 08 — Explore Route Alignment

> **Prerequisites:** Doc 01 merged. Ideally doc 02 (AppHeader) is also merged so the explore route's top chrome matches the Skill Tree side.

## Goal

The `/explore` route already uses the Wiki-Loop-derived components (`Topbar`, `ConceptPanel`, `KnowledgeGraph`, `TrailSidebar`, `JourneyOverlay`) and is the closest thing to the target design in the current codebase. However, it leans on a now-obsolete scoping mechanism (`.exploreScope` on `documentElement`) that was needed before doc 01 made Refined Neon the global default.

This doc retires the scoping hack and audits the explore components for any hard-coded colors or legacy variable references that must be swapped over so the route matches the rest of the app pixel-for-pixel.

## Files touched

**Modified:**
- `client/src/routes/ExploreRoute.jsx` — remove the `documentElement.classList.add('exploreScope')` side effect.
- `client/src/routes/ExploreRoute.module.css` — audit + replace any legacy tokens.
- `client/src/components/Topbar/Topbar.module.css` — align with new hairline design system.
- `client/src/components/ConceptPanel/*.module.css` — audit for legacy tokens.
- `client/src/components/KnowledgeGraph/*.module.css` — audit for legacy tokens.
- `client/src/components/TrailSidebar/TrailSidebar.module.css` — audit.
- `client/src/components/JourneyOverlay/JourneyOverlay.module.css` — audit.

**Possibly modified (depends on content):**
- `client/src/styles/globals.css` — if the `.exploreScope` class body is still present from doc 01's transitional shim, delete it now.

**Not touched:** any JS/JSX in the Topbar, ConceptPanel, KnowledgeGraph, TrailSidebar, or JourneyOverlay components. This is a pure token and cleanup pass.

---

## Task 8.1 — Remove the `.exploreScope` runtime toggle

Open `client/src/routes/ExploreRoute.jsx`. Find the `useEffect` at the top of `ExploreRoute`:

```jsx
useEffect(() => {
  document.documentElement.classList.add('exploreScope');
  return () => document.documentElement.classList.remove('exploreScope');
}, []);
```

Delete that entire `useEffect`. Also remove the `useEffect` import if it becomes unused (check — it's also used by `AutoJump` so it will still be needed).

The route body after this change:

```jsx
export default function ExploreRoute() {
  const [authMode, setAuthMode] = useState(null);

  return (
    <ExplorerProvider>
      <div className={styles.app}>
        <AppHeader
          onSignIn={() => setAuthMode('login')}
          onSignUp={() => setAuthMode('register')}
        />
        <Topbar />
        <div className={styles.main}>
          <div className={styles.leftPanel}><ConceptPanel /></div>
          <div className={styles.rightPanel}>
            <ErrorBoundary>
              <KnowledgeGraph />
            </ErrorBoundary>
            <TrailSidebar />
          </div>
        </div>
      </div>
      <JourneyOverlay />
      <AutoJump />
      {authMode && (
        <AuthModal initialMode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </ExplorerProvider>
  );
}
```

## Task 8.2 — Delete the `.exploreScope` CSS override

Open `client/src/styles/globals.css`. If the `.exploreScope` selector still exists (carried over from the old `:root` block), delete the entire `.exploreScope { ... }` rule. Doc 01 removed the palette override; this task removes the class entirely.

Search the whole `client/src/` tree for any other use of `exploreScope` and delete those as well. Only `ExploreRoute.jsx` and `globals.css` should reference it.

## Task 8.3 — Audit `ExploreRoute.module.css`

Open `client/src/routes/ExploreRoute.module.css` and confirm every color/border/background reference points at an `--rn-*` token or a legacy alias (`--bg-primary`, `--border-color`, `--text-primary`, etc.) that is already rebound by doc 01.

If the file uses any of these literals, replace them:

| Literal | Replace with |
|--------|--------------|
| `#06090f` / `#0a0e18` | `var(--rn-void)` |
| `#0c1020` / `#080c16` | `var(--rn-ink)` |
| `#111828` / `#0a0f1a` | `var(--rn-paper)` |
| `#7c8aff` / `#a78bfa` | `var(--rn-violet)` (or gold/cyan — decide by role) |
| `#4d9fff` | `var(--rn-blue)` |
| `#00fff2` | `var(--rn-cyan)` |
| `#ffaa40` | `var(--rn-gold)` |
| `#d0d6e0` / `#e0e0e0` | `var(--rn-txt-0)` |
| `#888` / `#666` / `#7a8599` | `var(--rn-txt-1)` or `var(--rn-txt-2)` |
| `rgba(80, 160, 255, 0.06)` | `var(--rn-hair)` |
| `rgba(80, 160, 255, 0.12)` | `var(--rn-hair-2)` |
| `rgba(80, 160, 255, 0.22)` | `var(--rn-hair-3)` |

Also ensure the layout accounts for the new header height:

```css
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.main {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
}

.leftPanel {
  width: var(--rn-panel-width);
  flex-shrink: 0;
  border-right: 1px solid var(--rn-hair-2);
  overflow-y: auto;
  background: var(--rn-ink);
}

.rightPanel {
  flex: 1;
  position: relative;
  min-width: 0;
  background: var(--rn-void);
}
```

If the existing file already matches this structure, leave it. Only the token replacements are mandatory.

## Task 8.4 — Audit `Topbar.module.css`

Open `client/src/components/Topbar/Topbar.module.css` and run the same literal-to-token replacement from Task 8.3. Additionally:

- `height` must equal `var(--rn-subtopbar-height)` (46 px) — matching the TreeView sub-topbar in doc 06.
- Background should be `var(--rn-paper)`.
- Bottom border should be `1px solid var(--rn-hair-2)`.

If the file already uses `--topbar-height`, you're fine — doc 01 aliases it to `--rn-subtopbar-height`.

## Task 8.5 — Audit `ConceptPanel/*.module.css`

For every CSS module in `client/src/components/ConceptPanel/` (`ConceptPanel.module.css`, `BacktrackBar.module.css`, `HeroCard.module.css`, `Layer.module.css`, `DeepDive.module.css`, `ConnectedConcepts.module.css`):

1. Replace any literal colors with `--rn-*` tokens per the table in Task 8.3.
2. Confirm font families reference `var(--rn-font-display)` / `var(--rn-font-mono)` / `var(--rn-font-serif)`.
3. If a component uses the old `--accent-purple` literally and visually *is* the purple brand element, leave the alias — doc 01 has repointed it to gold.

## Task 8.6 — Audit `KnowledgeGraph/*.module.css`

Same treatment for:

- `KnowledgeGraph.module.css`
- `GraphNode.module.css`
- `PreviewPopover.module.css`
- `NodeDetailOverlay.module.css`

Verify:

- All edge stroke colors are `var(--rn-*)` references.
- All node backgrounds/fills use tokens.
- `forceCollide` and other d3 logic inside JS is untouched. This is a visual audit only.

## Task 8.7 — Audit `TrailSidebar.module.css` and `JourneyOverlay.module.css`

Same token replacement. Keep the file structure and class names unchanged. These are typically a single file each and should take a minute.

## Task 8.8 — Smoke test

1. Navigate to `/`. Confirm:
   - The AppHeader Skill Tree tab is active (gold).
   - Background and fonts match everything from docs 02–07.
2. Click the **Explore** tab.
3. Confirm:
   - The Explore tab is now active (gold), Skill Tree is dimmed.
   - The sub-topbar under AppHeader is 46 px with a hairline bottom.
   - The left concept panel has a hairline right border and `--rn-ink` background — no styling jump when switching routes.
   - The graph right panel uses the same `--rn-void` + subtle radial glow as `.graphContainer` on the Skill Tree side.
4. Search for a concept, walk the graph. Everything should feel like one product.
5. Return to `/`. There must be no lingering global side effects from the explore route — no class on `documentElement`, no overridden CSS vars.

## Verification checklist

- [ ] `ExploreRoute.jsx` no longer toggles `documentElement.classList`.
- [ ] `.exploreScope` does not exist in any CSS file.
- [ ] Every `#RRGGBB` / `rgba(...)` literal inside explore component CSS has been audited. Either it is now a `var(--rn-*)` call, or it was intentionally left (and that decision is documented in a 1-line comment on the same line).
- [ ] Topbar under AppHeader is 46 px with a hairline.
- [ ] No visual jump when switching routes.
- [ ] Build succeeds.

## Out of scope

- Rewriting the Wiki Loop components themselves. If a ConceptPanel styling is awkward, that is pre-existing from the reference project and is handled in doc 09 only if it is actively broken.
- Route-level state changes.
- Anything in `server/` or `routes/`.
