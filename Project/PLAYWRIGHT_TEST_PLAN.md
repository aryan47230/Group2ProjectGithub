# Playwright Test Plan — React Migration Verification

## Context

The project at `c:/Users/revaa/AI Projects/CS124H/Group2ProjectGithub/Project/` was migrated from vanilla JS to React. The server lives at `server.js` (Express, port 3000). The new unified React app is in `client/`, built into `public/`. The old `public/app.js` + `public/index.html` + `public/style.css` and the old `explore/` folder are gone; the React build replaces them.

## Prerequisites

1. Ensure any stray process on port 3000 is stopped.
2. In one terminal: `cd Project && node server.js`
3. Verify it prints `Server running at http://localhost:3000`.
4. Use Playwright MCP against `http://localhost:3000/` (NOT the Vite dev server).

## What to Verify

### Skill Tree route (`/`)

1. **Page loads** — hero heading "What do you want to learn?" is visible.
2. **Header** — shows "Skill Tree Generator" logo, "Skill Tree" / "Explore" tabs, "Sign In" + "Sign Up" buttons.
3. **Sign Up flow** — click "Sign Up", fill username (e.g. `testuser_<random>`) + password `testpass1`, submit. Modal closes, header shows "Hi, testuser_…" + "Logout".
4. **Tree generation** — type `guitar` into the topic input, click Generate. Status shows "Generating skill tree..." then the tree view takes over: title "guitar", progress `0 / N`, SVG graph with nodes visible.
   - *Note: requires `GEMINI_API_KEY` env var — if unset, expect an error message instead of a tree. Still valid if it's an error rather than a crash.*
5. **Node click → Detail panel** — click any visible node circle. Right-side detail panel slides in with Overview/Learn/Resources tabs, description, "Mark as Complete" button. Locked nodes instead show "Complete X to unlock".
6. **Tab switching** — in the detail panel, click "Learn" and "Resources" tabs — content changes accordingly.
7. **Mark complete** — click "Mark as Complete" on a level-1 (unlocked) node. Button becomes "✓ Completed", progress counter increments (e.g. `1 / N`), progress bar fills, the node is visually greener in the graph.
8. **Back button** — click the `← Back` button in the tree header. Returns to prompt view. The new tree now appears under "Your Trees" with progress.
9. **Re-open saved tree** — click "Open" on the saved tree. Tree reloads with the completion state preserved.
10. **Delete saved tree** — click "Delete" on the saved tree. Item disappears.
11. **Logout** — click Logout. Header returns to Sign In / Sign Up state.

### Explore route (`/explore`)

1. **Navigate** — click the "Explore" tab in the header. URL becomes `/explore`. AppHeader is still visible. A secondary toolbar with a `/` search bar, `TRAIL`, `MAP` buttons appears below it.
2. **Search** — type `quantum mechanics` into the search bar. A dropdown of Wikipedia results appears. Click one.
3. **Graph loads** — left panel populates with the concept details (title, summary, connections). Right panel shows the force-directed knowledge graph with the center node + surrounding connection nodes.
4. **Node click** — click a secondary node in the graph. Concept panel updates, trail hop counter in the topbar increments.
5. **TRAIL button** — click TRAIL in the topbar. Trail sidebar slides open showing the visited concepts. Click again to close.
6. **Back nav to skill tree** — click the "Skill Tree" tab. URL returns to `/`.

### Cross-route

1. **Deep link `/explore?q=stoicism`** — navigate directly. Explore route loads and auto-jumps to the "Stoicism" concept.
2. **Refresh on `/explore`** — hit browser refresh. Page still loads (SPA catch-all in server.js works).
3. **From a skill detail panel** — in the Resources tab of any unlocked node, there's an "Explore '<node>' on Wikipedia" link. Clicking should navigate to `/explore?q=<node>` and load that concept.

## What to Report

For each numbered item above: pass / fail with a one-line note. Screenshot anything unexpected. Flag console errors — the migration should produce zero new console errors beyond what the old app had.

## Known Gotchas

- The skill-tree generation calls the Gemini API; failures there are environmental, not migration bugs. Note them separately.
- The SVG graph uses imperative DOM (`document.createElementNS`) inside a React useEffect — this is intentional (preserves animation fidelity with the old vanilla version). If you see nodes render but no hover pulses, something broke.
- LocalStorage imports: if a logged-out user generates a tree, then signs in, an "Import" banner should appear. Clicking Import migrates the local trees to the server.

## Files of interest if debugging is needed

- [client/src/App.jsx](client/src/App.jsx) — router
- [client/src/context/AuthContext.jsx](client/src/context/AuthContext.jsx) — auth + import flow
- [client/src/context/SkillTreeContext.jsx](client/src/context/SkillTreeContext.jsx) — tree CRUD + completion cascade
- [client/src/components/SkillTree/SkillGraph.jsx](client/src/components/SkillTree/SkillGraph.jsx) — SVG renderer
- [server.js](server.js) — Express with SPA catch-all at the bottom
