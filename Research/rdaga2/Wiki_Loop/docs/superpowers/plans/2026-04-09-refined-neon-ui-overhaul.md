# Refined Neon UI Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing Wiki Loop UI with a polished "Refined Neon" design — same dark/space/golden aesthetic, but with calmer typography, hairline structure, a real graph design system (every node/edge state defined), and tool-grade chrome (toolbar, legend, status readouts).

**Architecture:** This is a frontend-only refactor. No API/server changes. We touch design tokens (`globals.css`), the `Topbar`, `ConceptPanel` (and its sub-components), `KnowledgeGraph` (nodes, edges, chrome), `TrailSidebar`, and `JourneyOverlay`. State management (`ExplorerContext`) is unchanged. The plan is incremental and safe — we keep the app running between every commit.

**Tech Stack:** React 18 (Vite), CSS Modules, d3-force, SVG. Fonts: `Outfit` (display), `JetBrains Mono` (data/mono), `Instrument Serif` (italic accent — new). No new runtime dependencies.

**Pre-reading required:** `CLAUDE.md` in the project root. It documents the architecture, state shape, edge dedup rules, accumulating-graph behavior, and known bugs. Do not skip it — several tasks below assume that context.

---

## Design Tokens Reference (the source of truth for every task below)

These are the exact colors, sizes, and treatments every task must follow. They are derived from the approved mockups (`hero-shell.html` + `node-system.html`). Do not invent new values.

### Color palette (CSS variables, defined in Task 1)

| Variable | Hex | Role |
|----------|-----|------|
| `--rn-void` | `#03060f` | Canvas base |
| `--rn-ink` | `#070b18` | Cards, panels |
| `--rn-paper` | `#0a0f1a` | Topbar / surfaces |
| `--rn-hair` | `rgba(130,170,220,.08)` | Hairline divider (dim) |
| `--rn-hair-2` | `rgba(130,170,220,.16)` | Hairline divider (medium) |
| `--rn-hair-3` | `rgba(130,170,220,.28)` | Hairline divider (bright) |
| `--rn-txt-0` | `#eef2fb` | Headlines |
| `--rn-txt-1` | `#9aa7c0` | Body text |
| `--rn-txt-2` | `#556278` | Meta / labels |
| `--rn-txt-3` | `#35353c` | Disabled |
| `--rn-gold` | `#ffaa40` | Center · Trail · Application |
| `--rn-gold-glow` | `rgba(255,170,64,.22)` | Center / trail glow |
| `--rn-blue` | `#4d9fff` | Core relation · Dormant base |
| `--rn-blue-glow` | `rgba(77,159,255,.32)` | Core glow |
| `--rn-cyan` | `#00fff2` | Related relation · Focused state |
| `--rn-cyan-glow` | `rgba(0,255,242,.28)` | Related / focus glow |
| `--rn-violet` | `#a78bfa` | Foundation · Secondary hex |
| `--rn-violet-glow` | `rgba(167,139,250,.28)` | Violet glow |
| `--rn-grey` | `#5a6a85` | Constellation dot |

### Node sizing (matches `getNodeSize` in `GraphNode.jsx`)

| Type | Size (px) | Border (px) | Shape |
|------|-----------|-------------|-------|
| `center` | 112 | 1.5 | circle + dashed inner ring + hairline outer ring |
| `primary` | 68 | 1.5 | circle |
| `secondary` | 58 | 1 | hexagon (clip-path) |
| `trail` (hop 0/1/2/3) | 80 / 80 / 64 / 32 | 1.5 | circle, gold dim |
| `dormant` (hop 0/1/2/3) | 60 / 60 / 48 / 28 | 1 | circle, color-locked, 0.6α |
| `constellation` (hop 3+) | 10 | 1 | dot |

### Edge styling (must match `KnowledgeGraph.jsx` edge renderer)

| Edge | Stroke | Width | Opacity | Dash | Glow |
|------|--------|-------|---------|------|------|
| `trail` direct | `#ffaa40` | 2.2 | 0.55 | none | yes (stdDev 2.5) |
| `trail` indirect | `#ffaa40` | 2.8 | 0.55 (dash 0.85) | `6 4` | yes |
| `connection` active | by relation color | 1.6 | 0.85 (glow 0.45) | none | yes (stdDev 1.8) |
| `connection` aged | base color @ 0.45 | 0.8 | 0.4 | none | no |
| `secondary` branch | `#a78bfa` | 1 | 0.55 | `2 4` | no |
| `hover` highlight | `#00fff2` | 2 (glow 3.5) | 1 (glow 0.45) | none | yes |

### Typography

- Display (titles, buttons): **Outfit** 200/400/500/600/700
- Data / metadata / hops counter / coordinate readouts: **JetBrains Mono** 400/500
- Italic luxury accent (used **only** in ConceptPanel hero title): **Instrument Serif** italic 400. Loaded via Google Fonts.

### Spacing scale

`4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 44 · 56` px. Do not use values outside this scale.

---

## File Structure

**New files:**
- `client/src/styles/refined-neon.css` — design tokens for the new theme (Task 1)
- `client/src/components/KnowledgeGraph/GraphChrome.jsx` — toolbar, legend, coordinate readout (Task 11)
- `client/src/components/KnowledgeGraph/GraphChrome.module.css` — styles for above (Task 11)

**Modified files:**
- `client/src/styles/globals.css` — add font imports + theme bridge (Task 1)
- `client/src/components/Topbar/Topbar.jsx` — restructure (Task 2)
- `client/src/components/Topbar/Topbar.module.css` — restyle (Task 2/3)
- `client/src/components/ConceptPanel/ConceptPanel.jsx` — eyebrow + new title hierarchy (Task 4)
- `client/src/components/ConceptPanel/ConceptPanel.module.css` — restyle (Task 4)
- `client/src/components/ConceptPanel/HeroCard.jsx` + `.module.css` — new caption + frame (Task 5)
- `client/src/components/ConceptPanel/BacktrackBar.jsx` + `.module.css` — pill back button + crumbs (Task 6)
- `client/src/components/ConceptPanel/ConnectedConcepts.jsx` + `.module.css` — list with relation badges (Task 7)
- `client/src/components/KnowledgeGraph/GraphNode.module.css` — full restyle of every node state (Task 8)
- `client/src/components/KnowledgeGraph/GraphNode.jsx` — minor tweaks (label position, dashed ring, drop particles) (Task 9)
- `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx` — edge stroke widths/dashes/glow filters (Task 10)
- `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css` — graph background atmospherics (Task 10)
- `client/src/components/TrailSidebar/TrailSidebar.module.css` — restyle (Task 12)
- `client/src/components/JourneyOverlay/JourneyOverlay.module.css` — restyle (Task 13)

**Files NOT touched:** `ExplorerContext.jsx`, `useForceLayout.js`, anything under `server/`, `routes/`, `services/`, or `utils/`. If you find yourself wanting to edit one, stop and re-read the relevant task.

---

## Workflow notes

- This project does not have a Jest/React Testing Library setup for components. Each task's verification is **manual visual inspection in the browser** plus `npm run build` (production build). Treat a successful Vite build with no warnings as the equivalent of "tests pass".
- Run `npm run dev` from the project root once at the start; keep it running. The Vite dev server hot-reloads. After every task, refresh `http://localhost:5173`, search for "Quantum mechanics", and confirm the screen still works.
- Commit after **every task**, not every step. Use the commit message at the end of each task.
- All file paths in this plan are relative to the project root: `c:/Users/revaa/AI Projects/Wiki_Loop`.

---

## Task 1: Add Refined Neon design tokens

**Files:**
- Create: `client/src/styles/refined-neon.css`
- Modify: `client/src/styles/globals.css`

**Purpose:** Centralize every color, hairline, and typography token from the design system in one CSS file. Every later task references these variables. Also adds the `Instrument Serif` Google Font (the only new font).

- [ ] **Step 1: Create the refined-neon.css token file**

Create `client/src/styles/refined-neon.css` with this exact content:

```css
/* Refined Neon — design tokens
 * Source of truth for the new UI. Do not hardcode colors elsewhere. */

:root {
  /* Surfaces */
  --rn-void:    #03060f;
  --rn-ink:     #070b18;
  --rn-paper:   #0a0f1a;
  --rn-card:    rgba(10, 16, 32, 0.85);

  /* Hairlines */
  --rn-hair:    rgba(130, 170, 220, 0.08);
  --rn-hair-2:  rgba(130, 170, 220, 0.16);
  --rn-hair-3:  rgba(130, 170, 220, 0.28);

  /* Text */
  --rn-txt-0: #eef2fb;
  --rn-txt-1: #9aa7c0;
  --rn-txt-2: #556278;
  --rn-txt-3: #35353c;

  /* Neon accents */
  --rn-gold:       #ffaa40;
  --rn-gold-h:     #ffc266;
  --rn-gold-glow:  rgba(255, 170, 64, 0.22);
  --rn-gold-glow-2: rgba(255, 170, 64, 0.45);

  --rn-blue:       #4d9fff;
  --rn-blue-glow:  rgba(77, 159, 255, 0.32);

  --rn-cyan:       #00fff2;
  --rn-cyan-glow:  rgba(0, 255, 242, 0.28);

  --rn-violet:      #a78bfa;
  --rn-violet-glow: rgba(167, 139, 250, 0.28);

  --rn-grey: #5a6a85;

  /* Typography */
  --rn-font-display: 'Outfit', system-ui, sans-serif;
  --rn-font-mono:    'JetBrains Mono', 'Fira Code', monospace;
  --rn-font-serif:   'Instrument Serif', Georgia, serif;

  /* Letter-spacing scale */
  --rn-tracked-1: 0.04em;
  --rn-tracked-2: 0.08em;
  --rn-tracked-3: 0.14em;
  --rn-tracked-4: 0.18em;
  --rn-tracked-5: 0.22em;

  /* Sizing */
  --rn-topbar-height: 56px;
  --rn-statusbar-height: 32px;
  --rn-panel-width: 480px;
}
```

- [ ] **Step 2: Import refined-neon.css and the new font in globals.css**

In `client/src/styles/globals.css`, add these two lines at the very top of the file (above any existing rule):

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
@import './refined-neon.css';
```

- [ ] **Step 3: Update existing globals.css token aliases to point at the new vars**

In `client/src/styles/globals.css`, replace the existing `:root` block (lines 1–46) with:

```css
:root {
  /* Background — deep space black (legacy aliases → refined-neon) */
  --bg-primary:    var(--rn-void);
  --bg-secondary:  var(--rn-ink);
  --bg-tertiary:   var(--rn-paper);
  --bg-card:       var(--rn-card);
  --bg-card-hover: rgba(12, 18, 35, 0.92);

  /* Borders */
  --border-dim:    var(--rn-hair);
  --border-medium: var(--rn-hair-2);
  --border-bright: var(--rn-hair-3);

  /* Neon accents */
  --neon-cyan:    var(--rn-cyan);
  --neon-blue:    var(--rn-blue);
  --neon-amber:   var(--rn-gold);
  --neon-purple:  var(--rn-violet);
  --neon-magenta: #f472b6;
  --neon-green:   #34d399;
  --neon-red:     #ff4466;

  /* Legacy aliases */
  --accent-cyan:   var(--neon-cyan);
  --accent-blue:   var(--neon-blue);
  --accent-green:  var(--neon-green);
  --accent-amber:  var(--neon-amber);
  --accent-gold:   var(--neon-amber);
  --accent-red:    var(--neon-red);
  --accent-purple: var(--neon-purple);
  --accent-white:  var(--rn-txt-0);

  /* Text */
  --text-primary:   var(--rn-txt-0);
  --text-secondary: var(--rn-txt-1);
  --text-dim:       var(--rn-txt-2);
  --text-muted:     var(--rn-txt-3);

  /* Sizing */
  --topbar-height: var(--rn-topbar-height);

  /* Fonts */
  --font-display: var(--rn-font-display);
  --font-mono:    var(--rn-font-mono);
  --font-main:    var(--rn-font-display);
}
```

This bridge keeps every existing component compiling. Later tasks switch them over to the `--rn-*` vars directly.

- [ ] **Step 4: Verify build**

Run: `cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build`
Expected: build succeeds with no errors. CSS bundles include both files.

- [ ] **Step 5: Commit**

```bash
git add client/src/styles/refined-neon.css client/src/styles/globals.css
git commit -m "feat(ui): add refined-neon design tokens and Instrument Serif font"
```

---

## Task 2: Topbar — structure, search pill, monospace hop counter

**Files:**
- Modify: `client/src/components/Topbar/Topbar.jsx`
- Modify: `client/src/components/Topbar/Topbar.module.css`

**Purpose:** Make the topbar 56px tall, center the search bar in a wider pill with a `⌘ K` kbd hint, convert the hop counter to a bordered monospace segment, give every button a uniform ghost-button style, and add a golden hairline gradient under the bar.

- [ ] **Step 1: Update the JSX structure of Topbar.jsx**

Open `client/src/components/Topbar/Topbar.jsx`. Replace the entire `return (...)` block (currently at lines 64–111) with this exact JSX:

```jsx
  return (
    <div className={styles.topbar}>
      <div className={styles.logoBlock}>
        <span className={styles.logoDot} />
        <span className={styles.logo}>WIKI<span>LOOP</span></span>
      </div>

      <div className={styles.searchArea} ref={searchRef}>
        <div className={`${styles.searchBar} ${scanning ? styles.scanning : ''}`}>
          <span className={styles.searchIcon}>/</span>
          <input
            value={query}
            onChange={(e) => handleInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Explore any concept..."
            className={styles.searchInput}
          />
          <span className={styles.kbd}>⌘ K</span>
        </div>
        {showResults && results.length > 0 && (
          <div className={styles.dropdown}>
            {results.map((r) => (
              <div key={r.title} className={styles.dropdownItem} onClick={() => handleSelect(r.title)}>
                <div className={styles.dropdownTitle}>{r.title}</div>
                <div className={styles.dropdownSnippet}>{r.snippet}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.right}>
        {jumpCount > 0 && (
          <div className={styles.jumpCount}>
            <span className={styles.jumpCountValue}>{String(jumpCount).padStart(2, '0')}</span>
            <span className={styles.jumpCountLabel}>HOPS</span>
          </div>
        )}
        {currentConcept && (
          <button className={`${styles.btn} ${styles.btnGold}`} onClick={pickCuriosity} title="Jump to a random unexplored node">
            RANDOM
          </button>
        )}
        <button className={`${styles.btn} ${trailOpen ? styles.active : ''}`} onClick={toggleTrail}>
          TRAIL
        </button>
        <button className={styles.btn} onClick={toggleJourney}>
          MAP
        </button>
      </div>
    </div>
  );
```

- [ ] **Step 2: Replace Topbar.module.css with the new style**

Open `client/src/components/Topbar/Topbar.module.css`. Replace its entire contents with:

```css
.topbar {
  height: var(--rn-topbar-height);
  background: rgba(7, 11, 24, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--rn-hair);
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  position: relative;
  z-index: 10;
}

.topbar::after {
  content: '';
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 170, 64, 0.18), transparent);
  pointer-events: none;
}

/* ── Logo ── */
.logoBlock {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logoDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--rn-gold);
  box-shadow: 0 0 10px var(--rn-gold-glow-2);
}
.logo {
  font: 700 15px/1 var(--rn-font-display);
  letter-spacing: var(--rn-tracked-5);
  color: var(--rn-txt-0);
}
.logo span {
  color: var(--rn-gold);
  font-weight: 300;
}

/* ── Search ── */
.searchArea {
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
}
.searchBar {
  width: 100%;
  max-width: 520px;
  height: 34px;
  background: rgba(10, 16, 32, 0.7);
  border: 1px solid var(--rn-hair-2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 10px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.searchBar:focus-within {
  border-color: rgba(77, 159, 255, 0.45);
  box-shadow: 0 0 0 1px rgba(77, 159, 255, 0.18), 0 0 18px rgba(77, 159, 255, 0.12);
}
.searchBar.scanning {
  border-color: rgba(0, 255, 242, 0.35);
}
.searchIcon {
  font: 600 13px var(--rn-font-mono);
  color: var(--rn-txt-2);
}
.searchInput {
  flex: 1;
  background: transparent;
  border: 0;
  outline: 0;
  color: var(--rn-txt-0);
  font: 400 13px/1 var(--rn-font-display);
  letter-spacing: 0.01em;
}
.searchInput::placeholder {
  color: var(--rn-txt-2);
}
.kbd {
  font: 500 10px/1 var(--rn-font-mono);
  color: var(--rn-txt-2);
  padding: 3px 6px;
  border: 1px solid var(--rn-hair-2);
  border-radius: 4px;
}

/* ── Dropdown (search results) ── */
.dropdown {
  position: absolute;
  top: 42px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 520px;
  background: rgba(7, 11, 24, 0.96);
  backdrop-filter: blur(14px);
  border: 1px solid var(--rn-hair-2);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  z-index: 20;
}
.dropdownItem {
  padding: 12px 16px;
  border-bottom: 1px solid var(--rn-hair);
  cursor: pointer;
  transition: background 0.15s;
}
.dropdownItem:last-child { border-bottom: 0; }
.dropdownItem:hover {
  background: rgba(77, 159, 255, 0.06);
}
.dropdownTitle {
  font: 500 13px/1.3 var(--rn-font-display);
  color: var(--rn-txt-0);
  margin-bottom: 4px;
}
.dropdownSnippet {
  font: 400 11px/1.5 var(--rn-font-display);
  color: var(--rn-txt-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Right cluster ── */
.right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.jumpCount {
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding: 6px 10px;
  border: 1px solid var(--rn-hair-2);
  border-radius: 6px;
}
.jumpCountValue {
  font: 600 13px/1 var(--rn-font-mono);
  color: var(--rn-gold);
  letter-spacing: 0.05em;
}
.jumpCountLabel {
  font: 500 9px/1 var(--rn-font-display);
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-3);
}

.btn {
  font: 500 10px/1 var(--rn-font-display);
  letter-spacing: var(--rn-tracked-4);
  color: var(--rn-txt-1);
  padding: 8px 14px;
  background: transparent;
  border: 1px solid var(--rn-hair-2);
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.btn:hover {
  color: var(--rn-cyan);
  border-color: rgba(77, 159, 255, 0.35);
}
.btn.active {
  color: var(--rn-cyan);
  border-color: rgba(0, 255, 242, 0.35);
  background: rgba(0, 255, 242, 0.05);
}
.btnGold {
  color: var(--rn-gold);
  border-color: rgba(255, 170, 64, 0.3);
  background: rgba(255, 170, 64, 0.04);
}
.btnGold:hover {
  color: var(--rn-gold-h);
  border-color: rgba(255, 170, 64, 0.55);
  background: rgba(255, 170, 64, 0.08);
}
```

- [ ] **Step 3: Refresh dev server, verify visually**

Run: `npm run dev` from project root if not already running. Open `http://localhost:5173`. Type "Quantum mechanics" in the search and press Enter.

Expected:
- 56px tall topbar with golden dot before WIKILOOP, gold "LOOP" half
- Centered pill search with `/` icon and `⌘ K` kbd hint
- After loading, hop counter shows `01 HOPS` in monospace inside a bordered segment
- All three buttons (RANDOM, TRAIL, MAP) are uniform ghost style
- Hairline golden gradient runs under the topbar

- [ ] **Step 4: Commit**

```bash
git add client/src/components/Topbar/Topbar.jsx client/src/components/Topbar/Topbar.module.css
git commit -m "feat(ui): refined-neon topbar — search pill, mono hops, ghost buttons"
```

---

## Task 3: Topbar dropdown — empty state and keyboard polish

**Files:**
- Modify: `client/src/components/Topbar/Topbar.jsx`

**Purpose:** Add an empty-state row to the dropdown when results come back empty so the user gets feedback. Tiny polish task; commit separately.

- [ ] **Step 1: Update the dropdown render block**

In `client/src/components/Topbar/Topbar.jsx`, find the `{showResults && results.length > 0 && (` block from Task 2 and replace it with this:

```jsx
        {showResults && (
          <div className={styles.dropdown}>
            {results.length > 0 ? (
              results.map((r) => (
                <div key={r.title} className={styles.dropdownItem} onClick={() => handleSelect(r.title)}>
                  <div className={styles.dropdownTitle}>{r.title}</div>
                  <div className={styles.dropdownSnippet}>{r.snippet}</div>
                </div>
              ))
            ) : (
              <div className={styles.dropdownEmpty}>No matches. Press Enter to jump anyway.</div>
            )}
          </div>
        )}
```

Also update the `handleInput` function to set `showResults` to `true` even when results are empty (so the empty state shows up). Find this block:

```js
      try {
        const res = await searchConcepts(value);
        setResults(res.slice(0, 6));
        setShowResults(true);
      } catch { setResults([]); }
```

Replace with:

```js
      try {
        const res = await searchConcepts(value);
        setResults(res.slice(0, 6));
        setShowResults(true);
      } catch {
        setResults([]);
        setShowResults(true);
      }
```

- [ ] **Step 2: Add the empty-state CSS**

In `client/src/components/Topbar/Topbar.module.css`, append:

```css
.dropdownEmpty {
  padding: 16px;
  font: 400 12px/1.5 var(--rn-font-mono);
  color: var(--rn-txt-2);
  text-align: center;
}
```

- [ ] **Step 3: Verify visually**

In the browser, type a nonsense string like "asdfqwer". You should see "No matches. Press Enter to jump anyway." Pressing Enter should still attempt the jump (it will likely fail and show an error toast — that's expected and out of scope).

- [ ] **Step 4: Commit**

```bash
git add client/src/components/Topbar/Topbar.jsx client/src/components/Topbar/Topbar.module.css
git commit -m "feat(ui): topbar dropdown empty state"
```

---

## Task 4: ConceptPanel — eyebrow + larger hero title with serif accent

**Files:**
- Modify: `client/src/components/ConceptPanel/ConceptPanel.jsx`
- Modify: `client/src/components/ConceptPanel/ConceptPanel.module.css`

**Purpose:** Restyle the panel container itself: 480px width, deep ink gradient background, hairline right border, generous interior padding. The actual title/hero/facts/connections live in sub-components handled by Tasks 5–7.

- [ ] **Step 1: Read the existing ConceptPanel.jsx**

Read `client/src/components/ConceptPanel/ConceptPanel.jsx` first to understand its current structure (Layer wrappers, what sub-components it imports). Do not modify yet.

- [ ] **Step 2: Replace ConceptPanel.module.css**

Open `client/src/components/ConceptPanel/ConceptPanel.module.css`. Replace its entire contents with:

```css
.panel {
  width: var(--rn-panel-width);
  height: 100%;
  background: linear-gradient(180deg, rgba(10, 16, 32, 0.85) 0%, rgba(7, 11, 24, 0.78) 100%);
  border-right: 1px solid var(--rn-hair);
  padding: 28px 32px;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  scrollbar-gutter: stable;
}

.panel::-webkit-scrollbar {
  width: 4px;
}
.panel::-webkit-scrollbar-thumb {
  background: var(--rn-hair-2);
  border-radius: 4px;
}

.empty {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.emptyTitle {
  font: 600 16px var(--rn-font-display);
  color: var(--rn-txt-1);
  letter-spacing: 0.02em;
}
.emptySubtitle {
  font: 400 12px var(--rn-font-mono);
  color: var(--rn-txt-2);
  letter-spacing: 0.04em;
}

/* Eyebrow + title block */
.eyebrow {
  font: 500 10px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-4);
  text-transform: uppercase;
  color: var(--rn-cyan);
  margin: 24px 0 8px;
}
.title {
  font: 700 28px/1.15 var(--rn-font-display);
  color: var(--rn-txt-0);
  letter-spacing: -0.01em;
  margin: 0 0 14px;
}
.title .accent {
  font: 400 italic 30px/1 var(--rn-font-serif);
  color: var(--rn-gold);
  text-shadow: 0 0 16px var(--rn-gold-glow);
  margin-left: 4px;
}
.summary {
  font: 400 14px/1.65 var(--rn-font-display);
  color: var(--rn-txt-1);
  margin-bottom: 24px;
}

/* Fact grid */
.facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--rn-hair);
  border: 1px solid var(--rn-hair);
  border-radius: 6px;
  margin-bottom: 24px;
  overflow: hidden;
}
.fact {
  background: var(--rn-ink);
  padding: 12px 14px;
}
.factLabel {
  font: 500 9px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  color: var(--rn-txt-2);
  margin-bottom: 4px;
}
.factValue {
  font: 600 13px var(--rn-font-mono);
  color: var(--rn-txt-0);
  letter-spacing: 0.02em;
}
.factValue.accent {
  color: var(--rn-cyan);
}

/* Enrich CTA */
.enrich {
  width: 100%;
  padding: 14px;
  background: rgba(255, 170, 64, 0.05);
  border: 1px solid rgba(255, 170, 64, 0.3);
  border-radius: 6px;
  color: var(--rn-gold);
  font: 500 11px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-4);
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
  transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.enrich::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--rn-gold);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--rn-gold);
}
.enrich:hover {
  background: rgba(255, 170, 64, 0.1);
  border-color: rgba(255, 170, 64, 0.5);
  box-shadow: 0 0 24px rgba(255, 170, 64, 0.18);
}
.enrich:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Section header (used by ConnectedConcepts and DeepDive) */
.sectionHeader {
  font: 600 11px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  color: var(--rn-txt-1);
  padding: 14px 0 12px;
  border-top: 1px solid var(--rn-hair);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.sectionHeader::after {
  content: '+';
  font: 400 16px var(--rn-font-display);
  color: var(--rn-txt-2);
}
.sectionHeader.open::after {
  content: '−';
}
```

- [ ] **Step 3: Verify build**

Run: `cd client && npm run build` from project root.
Expected: build passes. The browser will look "broken" (panel content unstyled) until Tasks 5–7 — that's fine.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/ConceptPanel/ConceptPanel.module.css
git commit -m "feat(ui): refined-neon ConceptPanel container styles"
```

---

## Task 5: HeroCard — bordered framed image with caption

**Files:**
- Modify: `client/src/components/ConceptPanel/HeroCard.jsx`
- Modify: `client/src/components/ConceptPanel/HeroCard.module.css`

**Purpose:** Replace the existing image card with a hairline-bordered frame, gradient atmospheric backdrop when no image, and a small uppercase caption ("WIKIMEDIA · ATOMIC ORBITAL"-style label) anchored bottom-left.

- [ ] **Step 1: Read HeroCard.jsx to understand props**

Read `client/src/components/ConceptPanel/HeroCard.jsx`. Note what props it currently takes (`image`, `title`, `summary`, etc.). The exact prop list determines what JSX you write below.

- [ ] **Step 2: Update HeroCard.module.css**

Replace the contents of `client/src/components/ConceptPanel/HeroCard.module.css` with:

```css
.hero {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.imageFrame {
  height: 160px;
  border-radius: 8px;
  background: linear-gradient(135deg, #1a2540, #0a1428);
  border: 1px solid var(--rn-hair);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.imageFrame::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 40%, rgba(255, 170, 64, 0.18), transparent 40%),
    radial-gradient(circle at 70% 60%, rgba(77, 159, 255, 0.14), transparent 40%);
  pointer-events: none;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
.imageCaption {
  position: absolute;
  bottom: 8px;
  left: 12px;
  font: 500 9px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  color: rgba(232, 238, 249, 0.55);
  z-index: 2;
}
.imageFallback {
  font: 500 11px var(--rn-font-mono);
  color: var(--rn-txt-2);
  letter-spacing: 0.04em;
  z-index: 1;
  position: relative;
}
```

- [ ] **Step 3: Update HeroCard.jsx markup**

Open `client/src/components/ConceptPanel/HeroCard.jsx`. Whatever its current return is, ensure it renders this structure (adapt prop names to what already exists; the component is small):

```jsx
import styles from './HeroCard.module.css';

export default function HeroCard({ image, title }) {
  return (
    <div className={styles.hero}>
      <div className={styles.imageFrame}>
        {image ? (
          <>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.imageCaption}>Wikimedia · {title}</div>
          </>
        ) : (
          <div className={styles.imageFallback}>NO IMAGE AVAILABLE</div>
        )}
      </div>
    </div>
  );
}
```

If the existing component takes more props (eyebrow, summary, facts), keep them as separate sub-components handled in Task 4's CSS (`.eyebrow`, `.title`, `.summary`, `.facts`, `.fact`). HeroCard's responsibility is the image frame only — anything else should move into the parent `ConceptPanel.jsx`.

- [ ] **Step 4: Wire eyebrow + title + summary in ConceptPanel.jsx**

In `client/src/components/ConceptPanel/ConceptPanel.jsx`, after the `<HeroCard ... />` line, ensure these elements render in this order using the classes defined in Task 4:

```jsx
<div className={styles.eyebrow}>{currentConcept.facts?.[0]?.value || 'Concept'}</div>
<h1 className={styles.title}>{currentConcept.title}</h1>
<p className={styles.summary}>{currentConcept.summary}</p>
```

Note: do not use the serif `.accent` span yet. We add it conditionally in Task 14 polish. For now, the title is plain Outfit 700 28px.

- [ ] **Step 5: Verify visually**

In browser, jump to "Quantum mechanics". Expected:
- Image is in a bordered frame with a subtle radial atmospheric backdrop
- Caption "Wikimedia · Quantum mechanics" floats bottom-left
- Below: cyan eyebrow line, large 28px title, 14px summary

- [ ] **Step 6: Commit**

```bash
git add client/src/components/ConceptPanel/HeroCard.jsx client/src/components/ConceptPanel/HeroCard.module.css client/src/components/ConceptPanel/ConceptPanel.jsx
git commit -m "feat(ui): refined-neon HeroCard frame + caption"
```

---

## Task 6: BacktrackBar — pill back button + breadcrumb crumbs

**Files:**
- Modify: `client/src/components/ConceptPanel/BacktrackBar.jsx`
- Modify: `client/src/components/ConceptPanel/BacktrackBar.module.css`

**Purpose:** Replace the current back UI with a small pill `< Back` button followed by breadcrumb crumbs separated by `/`. The active crumb is gold.

- [ ] **Step 1: Read BacktrackBar.jsx**

Read the existing component to see what context hooks/actions it uses (`goBack`, `trail`, `trailIndex`, etc.).

- [ ] **Step 2: Replace BacktrackBar.module.css**

```css
.bar {
  display: flex;
  align-items: center;
  gap: 10px;
  font: 500 10px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  color: var(--rn-txt-2);
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 9px;
  border: 1px solid var(--rn-hair-2);
  border-radius: 4px;
  color: var(--rn-txt-1);
  cursor: pointer;
  background: transparent;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.back:hover {
  color: var(--rn-cyan);
  border-color: rgba(0, 255, 242, 0.35);
  background: rgba(0, 255, 242, 0.04);
}
.back:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.back::before {
  content: '';
  width: 0;
  height: 0;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-right: 4px solid currentColor;
}

.crumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
}
.crumb {
  color: var(--rn-txt-2);
  cursor: pointer;
  white-space: nowrap;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s;
}
.crumb:hover {
  color: var(--rn-txt-1);
}
.crumb.active {
  color: var(--rn-gold);
  cursor: default;
}
.sep {
  color: var(--rn-txt-3);
}
```

- [ ] **Step 3: Update BacktrackBar.jsx**

Replace its return with:

```jsx
import { useExplorer } from '../../context/ExplorerContext';
import styles from './BacktrackBar.module.css';

export default function BacktrackBar() {
  const { trail, trailIndex, goBack, goToIndex } = useExplorer();
  if (!trail || trail.length === 0) return null;

  const visible = trail.slice(Math.max(0, trailIndex - 2), trailIndex + 1);
  const startIdx = Math.max(0, trailIndex - 2);

  return (
    <div className={styles.bar}>
      <button
        className={styles.back}
        onClick={goBack}
        disabled={trailIndex <= 0}
      >Back</button>
      <div className={styles.crumbs}>
        {visible.map((entry, i) => {
          const idx = startIdx + i;
          const isActive = idx === trailIndex;
          return (
            <span key={idx + entry.title} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                className={`${styles.crumb} ${isActive ? styles.active : ''}`}
                onClick={() => !isActive && goToIndex(idx)}
              >{entry.title}</span>
              {i < visible.length - 1 && <span className={styles.sep}>/</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify visually**

Jump to a few concepts in sequence. Expected: a `< Back` pill followed by up to 3 breadcrumb segments separated by `/`, with the rightmost (active) one in gold. Clicking older crumbs should navigate (via `goToIndex`).

- [ ] **Step 5: Commit**

```bash
git add client/src/components/ConceptPanel/BacktrackBar.jsx client/src/components/ConceptPanel/BacktrackBar.module.css
git commit -m "feat(ui): refined-neon BacktrackBar — back pill + crumbs"
```

---

## Task 7: ConnectedConcepts — list with relation badges and colored dots

**Files:**
- Modify: `client/src/components/ConceptPanel/ConnectedConcepts.jsx`
- Modify: `client/src/components/ConceptPanel/ConnectedConcepts.module.css`

**Purpose:** Replace the existing 2-column grid with a vertical list. Each row has a colored dot (matched to relation), the title, and a small uppercase relation badge (CORE / RELATED / FOUNDATION / APPLICATION). Hovering a row should sync to the graph via `setHighlight`.

- [ ] **Step 1: Read the current ConnectedConcepts.jsx**

Note: it currently uses `setHighlight` and `clearHighlight` from context. Preserve that behavior.

- [ ] **Step 2: Replace ConnectedConcepts.module.css**

```css
.list {
  display: flex;
  flex-direction: column;
}
.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 0;
  border-bottom: 1px solid var(--rn-hair);
  cursor: pointer;
  transition: background 0.15s;
}
.item:hover {
  background: rgba(77, 159, 255, 0.04);
}
.item:last-child {
  border-bottom: 0;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dot.core   { background: var(--rn-blue);   box-shadow: 0 0 6px var(--rn-blue); }
.dot.related{ background: var(--rn-cyan);   box-shadow: 0 0 6px var(--rn-cyan); }
.dot.foundation { background: var(--rn-violet); box-shadow: 0 0 6px var(--rn-violet); }
.dot.application{ background: var(--rn-gold);   box-shadow: 0 0 6px var(--rn-gold); }

.title {
  font: 500 13px var(--rn-font-display);
  color: var(--rn-txt-0);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.badge {
  font: 500 9px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  color: var(--rn-txt-2);
}
```

- [ ] **Step 3: Update ConnectedConcepts.jsx**

Replace its return with this structure (preserve any existing imports + hover sync logic):

```jsx
import { useExplorer } from '../../context/ExplorerContext';
import styles from './ConnectedConcepts.module.css';

const RELATION_CLASS = {
  core: 'core',
  related: 'related',
  foundation: 'foundation',
  application: 'application',
};

export default function ConnectedConcepts() {
  const { currentConcept, jumpTo, setHighlight, clearHighlight } = useExplorer();
  const connections = currentConcept?.connections || [];
  if (connections.length === 0) return null;

  return (
    <div className={styles.list}>
      {connections.map((c) => {
        const relClass = RELATION_CLASS[c.relation] || 'related';
        return (
          <div
            key={c.title}
            className={styles.item}
            onClick={() => jumpTo(c.title)}
            onMouseEnter={() => setHighlight && setHighlight(c.title)}
            onMouseLeave={() => clearHighlight && clearHighlight()}
          >
            <span className={`${styles.dot} ${styles[relClass]}`} />
            <span className={styles.title}>{c.title}</span>
            <span className={styles.badge}>{c.relation || 'related'}</span>
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 4: Verify visually**

Jump to "Quantum mechanics". Below the Enrich button (after Layer wraps it), the connected concepts list should show:
- Colored dot per row (blue/cyan/violet/gold by relation)
- Title flush left
- Small uppercase badge flush right (CORE / RELATED / etc.)
- Hovering a row highlights the matching node in the graph (panel→graph sync, already wired in context)

- [ ] **Step 5: Commit**

```bash
git add client/src/components/ConceptPanel/ConnectedConcepts.jsx client/src/components/ConceptPanel/ConnectedConcepts.module.css
git commit -m "feat(ui): refined-neon ConnectedConcepts list with relation badges"
```

---

## Task 8: GraphNode — restyle every node state

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.module.css`

**Purpose:** Apply the full node design system (10 states, exact glow/border/sizing) from the `node-system.html` mockup. This is the largest CSS-only task — no JSX changes.

- [ ] **Step 1: Replace GraphNode.module.css**

Open `client/src/components/KnowledgeGraph/GraphNode.module.css`. Replace its entire contents with the block below. This is the full new file — long but complete:

```css
/* ─────────── Center Node ─────────── */
.center {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.centerCircle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 170, 64, 0.06) 0%, transparent 70%);
  border: 1.5px solid var(--rn-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow:
    0 0 0 1px rgba(255, 170, 64, 0.18),
    0 0 32px rgba(255, 170, 64, 0.35),
    0 0 60px rgba(255, 170, 64, 0.15),
    inset 0 0 24px rgba(255, 170, 64, 0.08);
}

.centerCircle::before {
  content: '';
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 170, 64, 0.22);
  pointer-events: none;
}
.centerCircle::after {
  content: '';
  position: absolute;
  inset: -28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 170, 64, 0.09);
  pointer-events: none;
}

.center:hover .centerCircle {
  transform: scale(1.04);
  box-shadow:
    0 0 0 1px rgba(255, 170, 64, 0.28),
    0 0 44px rgba(255, 170, 64, 0.45),
    0 0 80px rgba(255, 170, 64, 0.18),
    inset 0 0 28px rgba(255, 170, 64, 0.12);
}

.centerLabel {
  font: 600 11px var(--rn-font-display);
  letter-spacing: 0.06em;
  color: var(--rn-gold);
  text-align: center;
  line-height: 1.25;
  padding: 0 8px;
  z-index: 3;
  position: relative;
  text-shadow: 0 0 14px rgba(255, 170, 64, 0.5);
}

.centerName {
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  font: 600 11px var(--rn-font-display);
  color: rgba(255, 170, 64, 0.8);
  white-space: nowrap;
  pointer-events: none;
  text-shadow: 0 0 10px rgba(255, 170, 64, 0.35);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ─────────── Generic Node ─────────── */
.node {
  position: absolute;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.5s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  padding: 6px;
  margin: -6px;
}
.node:hover {
  transform: scale(1.12);
  opacity: 1 !important;
  z-index: 12;
}

/* ─────────── Circular Nodes ─────────── */
.circleNode::after {
  content: '';
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--node-glow, rgba(77, 159, 255, 0.18)) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: -2;
}
.circleNode:hover::after { opacity: 1; }

.circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--node-fill, rgba(77, 159, 255, 0.05));
  border: 1.5px solid var(--node-border, var(--rn-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: box-shadow 0.3s, border-color 0.3s;
  box-shadow:
    0 0 18px var(--node-glow, rgba(77, 159, 255, 0.32)),
    inset 0 0 12px var(--node-glow, rgba(77, 159, 255, 0.08));
}
.circleNode:hover .circle {
  box-shadow:
    0 0 0 1px var(--node-border, var(--rn-blue)),
    0 0 30px var(--node-glow, rgba(77, 159, 255, 0.55)),
    0 0 60px var(--node-glow, rgba(77, 159, 255, 0.2)),
    inset 0 0 16px var(--node-glow, rgba(77, 159, 255, 0.12));
}

.circleLabel {
  font: 600 10px var(--rn-font-display);
  color: var(--node-text, var(--rn-blue));
  text-align: center;
  letter-spacing: 0.04em;
  line-height: 1.18;
  padding: 0 6px;
  text-shadow: 0 0 8px var(--node-glow, rgba(77, 159, 255, 0.4));
}

.focused .circle {
  border-color: var(--rn-cyan);
  box-shadow:
    0 0 0 2px rgba(0, 255, 242, 0.5),
    0 0 28px rgba(0, 255, 242, 0.45),
    0 0 60px rgba(0, 255, 242, 0.18),
    inset 0 0 14px rgba(0, 255, 242, 0.1);
}

/* ─────────── Hexagonal Nodes ─────────── */
.hexNode::before {
  content: '';
  position: absolute;
  inset: -2px;
  clip-path: polygon(50% 0%, 95% 24%, 95% 76%, 50% 100%, 5% 76%, 5% 24%);
  background: linear-gradient(135deg, var(--rn-violet), rgba(167, 139, 250, 0.3));
  z-index: -1;
  opacity: 0.5;
  transition: opacity 0.3s;
}
.hexNode:hover::before { opacity: 0.85; }
.hexNode::after {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--rn-violet-glow) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: -2;
}
.hexNode:hover::after { opacity: 1; }

.hex {
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 2%, 93% 25%, 93% 75%, 50% 98%, 7% 75%, 7% 25%);
  background: rgba(167, 139, 250, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: box-shadow 0.3s;
}

.hexLabel {
  font: 600 9px var(--rn-font-display);
  color: var(--rn-violet);
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 1.18;
  padding: 0 4px;
  text-shadow: 0 0 6px var(--rn-violet-glow);
}

.hexMaterialize {
  animation: materialize 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
@keyframes materialize {
  0%   { transform: scale(0);   opacity: 0; filter: brightness(2); }
  60%  { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1);   opacity: 1; filter: brightness(1); }
}

.hexNode:hover {
  transform: scale(1.12) rotate(4deg);
}

.focused .hex {
  filter: brightness(1.3);
}

/* ─────────── Label below node ─────────── */
.nodeLabel {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font: 500 10px var(--rn-font-display);
  white-space: nowrap;
  color: rgba(200, 215, 230, 0.6);
  pointer-events: none;
  transition: color 0.3s, text-shadow 0.3s;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.02em;
}
.labelSmall {
  font-size: 8px;
  bottom: -16px;
  max-width: 70px;
  color: rgba(200, 215, 230, 0.4);
  letter-spacing: 0.04em;
}
.node:hover .nodeLabel {
  color: var(--rn-txt-0);
  text-shadow: 0 0 8px rgba(226, 232, 240, 0.25);
}

/* ─────────── Typing cursor ─────────── */
.cursor {
  display: inline-block;
  width: 1px;
  height: 1em;
  background: var(--rn-cyan);
  margin-left: 1px;
  vertical-align: text-bottom;
  box-shadow: 0 0 4px var(--rn-cyan);
  animation: cursorBlink 0.6s step-end infinite;
}
@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
}

/* ─────────── Constellation (hop 3+) ─────────── */
.constellation {
  transition: opacity 0.5s ease, transform 0.3s;
}
.constellation:hover {
  transform: scale(1.8);
  opacity: 1 !important;
  z-index: 12;
}
.constellationDot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(200, 220, 255, 0.08);
  border: 1px solid rgba(200, 220, 255, 0.35);
  opacity: 0.5;
  transition: opacity 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 6px rgba(200, 220, 255, 0.2);
}
.constellation:hover .constellationDot {
  opacity: 1;
  box-shadow: 0 0 14px rgba(200, 220, 255, 0.55);
}

/* ─────────── Highlight sync (panel hover) ─────────── */
.highlighted {
  z-index: 15 !important;
  opacity: 1 !important;
  transform: scale(1.18);
}
.highlighted .circle,
.highlighted .hex {
  filter: brightness(1.3);
  box-shadow:
    0 0 0 2px rgba(0, 255, 242, 0.5),
    0 0 28px rgba(0, 255, 242, 0.35);
}
.highlighted .constellationDot {
  opacity: 1;
  box-shadow: 0 0 0 2px rgba(0, 255, 242, 0.5), 0 0 18px rgba(0, 255, 242, 0.25);
}
```

- [ ] **Step 2: Verify visually**

Open the graph in the browser. Expected:
- Center node has the new dashed inner ring + hairline outer ring (no spinning radar)
- Primary nodes have a uniform 1.5px border + soft glow + hover bloom
- Hex secondary nodes show the new violet gradient border ring effect
- Trail nodes (visit a couple of concepts) appear dim gold
- Constellation hop-3 nodes are tiny dots
- Hovering a connected concept in the panel highlights the matching graph node with a cyan ring

- [ ] **Step 3: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.module.css
git commit -m "feat(ui): refined-neon GraphNode — full node design system"
```

---

## Task 9: GraphNode — drop center particles + radar rings, move label below ring

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.jsx`

**Purpose:** The mockup specifies the center node has only two hairline rings (now in CSS as `::before` and `::after` of `.centerCircle`). Drop the JSX for `centerGlow`, `radarRing*`, and `centerParticles`. Also move the center node's label *below* the ring (it currently lives both inside and below — keep only the inside one for now and rely on the CSS pseudo-elements for rings).

- [ ] **Step 1: Read GraphNode.jsx for the center block**

The current center JSX (visible in your prior context, lines 89–117) renders `centerGlow`, three `radarRing` divs, and a `centerParticles` block with 6 particles. We're removing all of those.

- [ ] **Step 2: Replace the `if (isCenter)` block**

In `client/src/components/KnowledgeGraph/GraphNode.jsx`, find the entire `if (isCenter)` block and replace it with:

```jsx
  if (isCenter) {
    return (
      <div
        className={styles.center}
        style={{ left: x - half, top: y - half, width: size, height: size }}
        onClick={() => onClick?.(node)}
        data-node-id={node.id}
      >
        <div className={styles.centerCircle}>
          <span className={styles.centerLabel}>
            {typedLabel}
            {isTyping && <span className={styles.cursor} />}
          </span>
        </div>
        <div className={styles.centerName}>{node.label}</div>
      </div>
    );
  }
```

This drops `centerGlow`, all `radarRing`s, and `centerParticles` — they no longer exist in the CSS either (Task 8 removed them).

- [ ] **Step 3: Verify visually**

Reload the graph. Expected:
- Center node has no spinning rings, no orbiting particles
- Just the golden circle, a dashed ring around it, and a faint hairline ring further out (both from CSS pseudo-elements)
- The concept name still appears below the ring
- The typing cursor still works on first load

- [ ] **Step 4: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.jsx
git commit -m "refactor(ui): drop center radar rings and particles — calmer center"
```

---

## Task 10: KnowledgeGraph — edge stroke widths, glow filters, background atmospherics

**Files:**
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`

**Purpose:** Apply the edge styling table from the design tokens (Task 1) to every edge type. Also tighten the background — keep starfield/nebula but reduce nebula opacity slightly for a calmer feel.

- [ ] **Step 1: Locate the edge render block**

Open `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`. Find the section that maps `edges` to SVG `<path>` elements. It currently sets `strokeWidth`, `strokeOpacity`, `dashArray`, and conditionally applies aged styling.

- [ ] **Step 2: Update edge styling logic**

In the edges map block, replace the styling logic with these exact rules. The block already uses variables like `isTrail`, `isIndirectTrail`, `maxHop`, `isAged`. Keep those names; only adjust the literal values:

```js
const isTrail = edge.type === 'trail';
const isIndirectTrail = isTrail && edge.trailType === 'indirect';
const isSecondary = edge.type === 'secondary';
const isAged = !isTrail && !isSecondary && maxHop >= 2;

let strokeColor;
let strokeWidth;
let strokeOpacity;
let dashArray = 'none';
let useGlow = true;

if (isTrail) {
  strokeColor = '#ffaa40';
  strokeWidth = isIndirectTrail ? 2.8 : 2.2;
  strokeOpacity = 0.55;
  dashArray = isIndirectTrail ? '6 4' : 'none';
} else if (isSecondary) {
  strokeColor = '#a78bfa';
  strokeWidth = 1;
  strokeOpacity = 0.55;
  dashArray = '2 4';
  useGlow = false;
} else if (isAged) {
  strokeColor = (edge.color === 'gold' ? 'rgba(255,170,64,0.45)'
              : edge.color === 'cyan' ? 'rgba(0,255,242,0.45)'
              : edge.color === 'violet' || edge.color === 'purple' ? 'rgba(167,139,250,0.45)'
              : 'rgba(77,159,255,0.45)');
  strokeWidth = 0.8;
  strokeOpacity = 0.4;
  useGlow = false;
} else {
  strokeColor = (edge.color === 'gold' ? '#ffaa40'
              : edge.color === 'cyan' ? '#00fff2'
              : edge.color === 'violet' || edge.color === 'purple' ? '#a78bfa'
              : '#4d9fff');
  strokeWidth = 1.6;
  strokeOpacity = 0.85;
}

if (maxHop >= 4 && !isTrail) return null;
```

Then in the path render section, draw two stacked `<path>` elements when `useGlow` is true (the wider blurred underlay + the crisp top stroke):

```jsx
return (
  <g key={edgeKey}>
    {useGlow && (
      <path
        d={pathD}
        stroke={strokeColor}
        strokeWidth={strokeWidth + 1.2}
        fill="none"
        opacity={strokeOpacity * 0.55}
        strokeDasharray={dashArray}
        filter="url(#rnEdgeGlow)"
      />
    )}
    <path
      d={pathD}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="none"
      opacity={strokeOpacity}
      strokeDasharray={dashArray}
    />
  </g>
);
```

- [ ] **Step 3: Add the glow filter to the SVG defs**

In the same `KnowledgeGraph.jsx`, find the `<svg>` that holds the edges. Inside its `<defs>`, add (or replace any prior glow filter with) this:

```jsx
<filter id="rnEdgeGlow" x="-50%" y="-50%" width="200%" height="200%">
  <feGaussianBlur stdDeviation="1.8" />
</filter>
```

If a different glow filter was being used by the old code, update the `filter="url(...)"` references in the path block above to match (`url(#rnEdgeGlow)`).

- [ ] **Step 4: Tone the nebula in KnowledgeGraph.module.css**

In `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`, find any `.nebula` / `.nebulaBlob` rules and reduce their opacity. If their current opacity is `0.5` or higher, change to `0.32`. Same for shooting stars — drop their opacity to `0.4`. Leave starfield as-is.

If no such rules exist with those exact selectors, search for opacity values inside any background-related blocks and reduce them by ~30% across the board.

- [ ] **Step 5: Verify visually**

Reload the graph and walk a few concepts. Expected:
- Active connection edges are thinner with a soft glow underneath
- Trail edges (jump from concept A to concept B) are clearly golden and noticeably brighter
- Trail indirect edges (jump from search to a non-connected concept) show as golden dashed
- Secondary purple branches are dotted thin lines
- Aged connection edges (after multiple hops) become hairline dim
- Background nebula is calmer

- [ ] **Step 6: Commit**

```bash
git add client/src/components/KnowledgeGraph/KnowledgeGraph.jsx client/src/components/KnowledgeGraph/KnowledgeGraph.module.css
git commit -m "feat(ui): refined-neon edge styling system + calmer atmospherics"
```

---

## Task 11: GraphChrome — toolbar, legend, coordinate readout

**Files:**
- Create: `client/src/components/KnowledgeGraph/GraphChrome.jsx`
- Create: `client/src/components/KnowledgeGraph/GraphChrome.module.css`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`

**Purpose:** Add the three "tool-grade chrome" pieces from the mockup so the graph feels like an instrument: a vertical toolbar (top-right) with `+ − ◉ ⟳`, a legend card (bottom-left) explaining node colors, and a coordinate readout (bottom-right) showing pan + zoom.

- [ ] **Step 1: Create GraphChrome.module.css**

```css
.toolbar {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--rn-hair);
  border: 1px solid var(--rn-hair-2);
  border-radius: 6px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  z-index: 5;
}
.tool {
  background: rgba(7, 11, 24, 0.7);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--rn-txt-1);
  cursor: pointer;
  font: 500 14px var(--rn-font-display);
  border: 0;
  transition: color 0.2s, background 0.2s;
}
.tool:hover {
  color: var(--rn-cyan);
  background: rgba(10, 16, 32, 0.9);
}
.tool.active {
  color: var(--rn-gold);
  background: rgba(255, 170, 64, 0.08);
}

.legend {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(7, 11, 24, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid var(--rn-hair-2);
  border-radius: 8px;
  padding: 14px 16px;
  font: 500 10px var(--rn-font-display);
  color: var(--rn-txt-1);
  z-index: 5;
}
.legendLabel {
  font: 500 9px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  color: var(--rn-txt-2);
  margin-bottom: 8px;
}
.legendRow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  font-size: 11px;
}
.legendSwatch {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.legendSwatch.gold   { background: var(--rn-gold);   box-shadow: 0 0 6px var(--rn-gold); }
.legendSwatch.blue   { background: var(--rn-blue);   box-shadow: 0 0 6px var(--rn-blue); }
.legendSwatch.cyan   { background: var(--rn-cyan);   box-shadow: 0 0 6px var(--rn-cyan); }
.legendSwatch.violet { background: var(--rn-violet); box-shadow: 0 0 6px var(--rn-violet); }

.coords {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font: 500 10px var(--rn-font-mono);
  color: var(--rn-txt-2);
  letter-spacing: 0.05em;
  background: rgba(7, 11, 24, 0.6);
  padding: 6px 10px;
  border: 1px solid var(--rn-hair);
  border-radius: 4px;
  z-index: 5;
}
```

- [ ] **Step 2: Create GraphChrome.jsx**

```jsx
import { useExplorer } from '../../context/ExplorerContext';
import styles from './GraphChrome.module.css';

export default function GraphChrome({ pan, zoom, onZoomIn, onZoomOut, onResetView }) {
  const { focusMode, toggleFocus } = useExplorer();

  return (
    <>
      <div className={styles.toolbar}>
        <button className={styles.tool} onClick={onZoomIn} title="Zoom in">+</button>
        <button className={styles.tool} onClick={onZoomOut} title="Zoom out">−</button>
        <button
          className={`${styles.tool} ${focusMode ? styles.active : ''}`}
          onClick={toggleFocus}
          title="Focus mode (hide distant nodes)"
        >◉</button>
        <button className={styles.tool} onClick={onResetView} title="Reset view">⟳</button>
      </div>

      <div className={styles.legend}>
        <div className={styles.legendLabel}>Legend</div>
        <div className={styles.legendRow}><span className={`${styles.legendSwatch} ${styles.gold}`} />Current · Trail</div>
        <div className={styles.legendRow}><span className={`${styles.legendSwatch} ${styles.blue}`} />Core connection</div>
        <div className={styles.legendRow}><span className={`${styles.legendSwatch} ${styles.cyan}`} />Related</div>
        <div className={styles.legendRow}><span className={`${styles.legendSwatch} ${styles.violet}`} />Foundation · sub-node</div>
      </div>

      <div className={styles.coords}>
        x {Math.round(pan?.x ?? 0)} · y {Math.round(pan?.y ?? 0)} · zoom {(zoom ?? 1).toFixed(2)}
      </div>
    </>
  );
}
```

- [ ] **Step 3: Wire GraphChrome into KnowledgeGraph.jsx**

Open `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`. At the top, add:

```jsx
import GraphChrome from './GraphChrome';
```

Inside the component, locate the `pan` state (it should already exist as `[pan, setPan]`) and a `zoom` state if present. If `zoom` does not exist, default it to `1`. Add three handlers near the other handlers:

```jsx
const handleZoomIn  = () => setZoom?.((z) => Math.min(2, (z ?? 1) + 0.1));
const handleZoomOut = () => setZoom?.((z) => Math.max(0.5, (z ?? 1) - 0.1));
const handleResetView = () => { setPan({ x: 0, y: 0 }); setZoom?.(1); };
```

If `setZoom` does not exist (the current implementation may not support zoom), pass no-op handlers:

```jsx
const handleZoomIn  = () => {};
const handleZoomOut = () => {};
const handleResetView = () => setPan({ x: 0, y: 0 });
```

We treat the toolbar as visual for now; wiring real zoom is out of scope and tracked as a follow-up.

Then in the JSX, immediately after the SVG closes (or wherever the graph container's children end, before the closing wrapper div), insert:

```jsx
<GraphChrome
  pan={pan}
  zoom={typeof zoom !== 'undefined' ? zoom : 1}
  onZoomIn={handleZoomIn}
  onZoomOut={handleZoomOut}
  onResetView={handleResetView}
/>
```

- [ ] **Step 4: Verify visually**

Expected:
- Vertical toolbar of four buttons in the top-right of the graph
- Legend card bottom-left showing four color swatches with labels
- Coordinate readout bottom-right (mono `x 0 · y 0 · zoom 1.00`)
- Clicking the focus button (◉) toggles focus mode (hides hop ≥3 nodes via existing context behavior)
- Clicking reset view recenters the graph

- [ ] **Step 5: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphChrome.jsx client/src/components/KnowledgeGraph/GraphChrome.module.css client/src/components/KnowledgeGraph/KnowledgeGraph.jsx
git commit -m "feat(ui): graph chrome — toolbar, legend, coordinate readout"
```

---

## Task 12: TrailSidebar — restyle with hairline list and gold accents

**Files:**
- Modify: `client/src/components/TrailSidebar/TrailSidebar.module.css`

**Purpose:** Convert the trail sidebar into a thin dark panel with hairline-divided rows. Each entry has a small numeric prefix in mono and the concept title. The active entry is gold.

- [ ] **Step 1: Read TrailSidebar.jsx**

Read it to confirm class names (`.sidebar`, `.entry`, `.active`, etc.). Do not modify the JSX.

- [ ] **Step 2: Replace TrailSidebar.module.css**

Replace its entire contents with the block below. If you find class names that don't exist in your JSX, add them; if there are JSX classes not covered here, add a minimal style for them at the bottom (using the design tokens):

```css
.sidebar {
  position: fixed;
  top: var(--rn-topbar-height);
  right: 0;
  bottom: 0;
  width: 320px;
  background: linear-gradient(180deg, rgba(7, 11, 24, 0.96) 0%, rgba(3, 6, 15, 0.92) 100%);
  backdrop-filter: blur(14px);
  border-left: 1px solid var(--rn-hair-2);
  z-index: 50;
  display: flex;
  flex-direction: column;
  box-shadow: -20px 0 40px rgba(0, 0, 0, 0.5);
}

.header {
  padding: 24px 24px 16px;
  border-bottom: 1px solid var(--rn-hair);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.title {
  font: 600 12px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-4);
  text-transform: uppercase;
  color: var(--rn-txt-0);
}
.count {
  font: 500 10px var(--rn-font-mono);
  color: var(--rn-gold);
  letter-spacing: 0.05em;
}

.list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}
.entry {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 24px;
  border-bottom: 1px solid var(--rn-hair);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.entry:hover {
  background: rgba(77, 159, 255, 0.04);
}
.entry .num {
  font: 500 10px var(--rn-font-mono);
  color: var(--rn-txt-2);
  letter-spacing: 0.06em;
  width: 24px;
  text-align: right;
}
.entry .name {
  font: 500 13px var(--rn-font-display);
  color: var(--rn-txt-1);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.entry .time {
  font: 400 9px var(--rn-font-mono);
  color: var(--rn-txt-3);
  letter-spacing: 0.04em;
}

.entry.active .name {
  color: var(--rn-gold);
}
.entry.active .num {
  color: var(--rn-gold);
}

.empty {
  padding: 40px 24px;
  text-align: center;
  font: 400 12px var(--rn-font-mono);
  color: var(--rn-txt-2);
}
```

- [ ] **Step 3: Verify visually**

Click TRAIL in the topbar. Expected: a 320px right-side panel slides in (or appears, depending on existing animation), with hairline-divided rows numbered in mono, the current step in gold.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/TrailSidebar/TrailSidebar.module.css
git commit -m "feat(ui): refined-neon TrailSidebar"
```

---

## Task 13: JourneyOverlay — restyle with the new visual language

**Files:**
- Modify: `client/src/components/JourneyOverlay/JourneyOverlay.module.css`

**Purpose:** Convert the journey overlay to match the new design system: dark backdrop, bordered card, gold stat values in mono, single bordered close button.

- [ ] **Step 1: Read JourneyOverlay.jsx**

Read it to confirm class names.

- [ ] **Step 2: Replace JourneyOverlay.module.css**

```css
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(3, 6, 15, 0.78);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.25s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.modal {
  width: 560px;
  max-width: 92vw;
  background: linear-gradient(180deg, rgba(10, 16, 32, 0.96) 0%, rgba(7, 11, 24, 0.94) 100%);
  border: 1px solid var(--rn-hair-2);
  border-radius: 12px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  position: relative;
}
.modal::before {
  content: '';
  position: absolute;
  left: 24px;
  right: 24px;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 170, 64, 0.35), transparent);
}

.header {
  padding: 28px 32px 20px;
  border-bottom: 1px solid var(--rn-hair);
}
.title {
  font: 700 22px var(--rn-font-display);
  color: var(--rn-txt-0);
  letter-spacing: -0.01em;
  margin-bottom: 6px;
}
.subtitle {
  font: 400 13px var(--rn-font-display);
  color: var(--rn-txt-2);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 28px 32px;
  gap: 1px;
  background: var(--rn-hair);
}
.stat {
  background: var(--rn-ink);
  padding: 18px 16px;
  text-align: center;
}
.statValue {
  font: 700 28px var(--rn-font-mono);
  color: var(--rn-gold);
  letter-spacing: 0.02em;
  display: block;
  margin-bottom: 6px;
  text-shadow: 0 0 14px rgba(255, 170, 64, 0.35);
}
.statLabel {
  font: 500 10px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  color: var(--rn-txt-2);
}

.close {
  width: 100%;
  padding: 16px;
  background: transparent;
  border: 0;
  border-top: 1px solid var(--rn-hair);
  color: var(--rn-cyan);
  font: 500 11px var(--rn-font-display);
  letter-spacing: var(--rn-tracked-4);
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;
}
.close:hover {
  background: rgba(0, 255, 242, 0.05);
}
```

- [ ] **Step 3: Verify visually**

Click MAP in the topbar. Expected: a centered modal with a hairline gold gradient at the top, big monospace gold stats, and a full-width cyan "Close" button.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/JourneyOverlay/JourneyOverlay.module.css
git commit -m "feat(ui): refined-neon JourneyOverlay"
```

---

## Task 14: ConceptPanel polish — italicize the second word of the title (Instrument Serif accent)

**Files:**
- Modify: `client/src/components/ConceptPanel/ConceptPanel.jsx`

**Purpose:** The mockup's signature move is splitting the title so the second word renders in italic Instrument Serif gold (e.g., "Quantum *mechanics*"). This is a small, optional flourish — keep it subtle and contained to the panel hero.

- [ ] **Step 1: Add a `splitTitle` helper near the top of ConceptPanel.jsx**

```js
function splitTitle(title) {
  if (!title) return { head: '', tail: '' };
  const idx = title.indexOf(' ');
  if (idx === -1) return { head: title, tail: '' };
  return { head: title.slice(0, idx), tail: title.slice(idx + 1) };
}
```

- [ ] **Step 2: Use it in the title render**

Replace the line that currently renders the title (added in Task 5):

```jsx
<h1 className={styles.title}>{currentConcept.title}</h1>
```

with:

```jsx
{(() => {
  const { head, tail } = splitTitle(currentConcept.title);
  return (
    <h1 className={styles.title}>
      {head}{tail && <> <span className={styles.accent}>{tail}</span></>}
    </h1>
  );
})()}
```

- [ ] **Step 3: Verify visually**

Jump to "Quantum mechanics". Expected: the word "Quantum" in regular Outfit, the word "mechanics" in italic gold Instrument Serif. For one-word concepts ("Photon"), the whole title renders normally without italic accent.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/ConceptPanel/ConceptPanel.jsx
git commit -m "feat(ui): italic Instrument Serif accent on second word of concept title"
```

---

## Task 15: Final pass — kill orphan styles, run a clean build, smoke test

**Files:**
- Various (delete only)

**Purpose:** After all the structural changes, search for any leftover legacy class references that no longer exist, drop them, and confirm a clean production build.

- [ ] **Step 1: Run a clean build and read the output**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

Expected: build succeeds. Note any CSS warnings about unused selectors. The build will not fail on those — they're informational.

- [ ] **Step 2: Search for any remaining literal hex colors that should be tokens**

Use Grep on `client/src/components/` for these patterns and replace any direct hex usage with the matching `--rn-*` variable:

- `#ffaa40` → `var(--rn-gold)`
- `#4d9fff` → `var(--rn-blue)`
- `#00fff2` → `var(--rn-cyan)`
- `#a78bfa` → `var(--rn-violet)`
- `#8b5cf6` → `var(--rn-violet)` (legacy violet hex)

Skip any matches that are already inside `rgba(...)` glow boxshadows or filters — those are intentional. Only convert raw hex literals used as `color`, `background`, or `border-color` values.

- [ ] **Step 3: Smoke test the full flow**

Run `npm run dev` and walk through:
1. Search "Quantum mechanics" → load
2. Click a connected concept in the panel → jump
3. Click a primary node in the graph → preview popover
4. Click a hex secondary node → preview popover
5. Click RANDOM → jump to a random node
6. Click TRAIL → sidebar opens, shows numbered entries, click an old entry to navigate
7. Click MAP → journey overlay shows, close it
8. Click Back button in BacktrackBar → navigates back
9. Hover a connected concept in the panel → matching graph node highlights cyan
10. Click the focus toolbar button (◉) → distant constellation nodes fade

Any broken interaction is a bug to fix before committing.

- [ ] **Step 4: Final commit**

```bash
git add -u
git commit -m "chore(ui): refined-neon final pass — token migration + smoke test"
```

---

## Task 16: Update CLAUDE.md to reflect the new design system

**Files:**
- Modify: `CLAUDE.md`

**Purpose:** Document the new design tokens and the GraphChrome component so future Claude sessions have the right context.

- [ ] **Step 1: Add a "Refined Neon Design Tokens" section**

In `CLAUDE.md`, find the existing "CSS Design System" section. Replace it with this:

```markdown
## CSS Design System (Refined Neon)

The new theme is defined in `client/src/styles/refined-neon.css`. Every component imports tokens from there via `globals.css`.

### Surfaces
`--rn-void` `#03060f` · `--rn-ink` `#070b18` · `--rn-paper` `#0a0f1a` · `--rn-card` rgba

### Hairlines
`--rn-hair` (.08) · `--rn-hair-2` (.16) · `--rn-hair-3` (.28) — every divider in the app uses these.

### Neon accents
`--rn-gold` `#ffaa40` (center · trail · application)
`--rn-blue` `#4d9fff` (core relation · dormant base)
`--rn-cyan` `#00fff2` (related relation · focused state)
`--rn-violet` `#a78bfa` (foundation · secondary hex)
`--rn-grey` `#5a6a85` (constellation dot)

### Typography
`--rn-font-display` Outfit · `--rn-font-mono` JetBrains Mono · `--rn-font-serif` Instrument Serif (italic only, used as accent on the second word of the concept title)

### Sizing
`--rn-topbar-height: 56px` · `--rn-panel-width: 480px`

### Letter-spacing scale
`--rn-tracked-1` (.04em) through `--rn-tracked-5` (.22em)

Do not hardcode colors elsewhere. Always use the `--rn-*` tokens.
```

- [ ] **Step 2: Update the Knowledge Graph section to mention GraphChrome**

Find the "Knowledge Graph" section and add this line near the top:

```
- **GraphChrome**: vertical toolbar (top-right), legend card (bottom-left), coordinate readout (bottom-right) — all sourced from `GraphChrome.jsx`
```

- [ ] **Step 3: Update the UI Guidelines section**

Replace the existing UI Guidelines bullets with:

```markdown
## UI Guidelines

- No emojis anywhere in the UI — professional neon aesthetic
- Fonts: Outfit (display), JetBrains Mono (data), Instrument Serif (italic accent only)
- The second word of the concept title is rendered in italic Instrument Serif gold — this is the signature flourish
- All borders are hairline (`--rn-hair*` tokens), never solid contrasting lines
- Every button outside the Enrich CTA is a ghost button (transparent + hairline border)
- The hop counter is rendered in JetBrains Mono with two-digit zero-padding (e.g. `03 HOPS`)
- Every screen uses the `--rn-*` design tokens — no raw hex literals in components
- Center node has only two hairline rings (no spinning radar, no orbiting particles)
- Edges use a two-stroke render: a wide blurred underlay (when `useGlow` is true) plus a crisp top stroke
```

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for refined-neon design system"
```

---

## Out of Scope (explicitly)

These were considered and intentionally not included in this plan. Track them as follow-ups if needed:

1. **Real zoom handling.** The toolbar `+`/`−` buttons are wired but `setZoom` may be a no-op depending on the current `KnowledgeGraph.jsx` state. Real zoom requires changing the SVG `viewBox` and the d3 simulation domain, which is a larger change.
2. **PreviewPopover restyle.** The single-click preview overlay still uses its old style. It's still readable; restyle in a follow-up if you want it to match.
3. **NodeDetailOverlay restyle.** Same as above — full-screen overlay reachable from the EXPAND button. Still functional.
4. **Light mode.** The theme is dark-only. The token structure (`--rn-*`) is set up to make a future light mode possible by overriding tokens, but no light mode is implemented.
5. **Reduced motion preferences.** Animation polish is unchanged. Add `@media (prefers-reduced-motion)` overrides as a follow-up.
6. **Mobile layouts.** The 480px fixed concept panel and the absolute-positioned chrome are desktop-only. No responsive work is included.

---

## Verification checklist (run before declaring done)

- [ ] `npm run build` from `client/` succeeds with no errors
- [ ] Topbar is 56px, search pill centered, hop counter monospace
- [ ] Concept panel: eyebrow → 28px title with italic gold second word → summary → fact grid → Enrich pill → Connected concepts list → Deep Dive
- [ ] Knowledge graph: calmer center, primary/secondary/trail/dormant/constellation nodes match the design system, edge widths and dashes follow the table
- [ ] Toolbar, legend, coordinate readout visible on the graph
- [ ] Trail sidebar opens with hairline rows, current entry in gold
- [ ] Journey overlay matches the new modal style
- [ ] Hovering connected concepts in the panel highlights matching graph nodes (panel→graph sync still works)
- [ ] No raw hex literals remain in component CSS files (use Grep to verify)
- [ ] CLAUDE.md updated to reflect new tokens + GraphChrome
