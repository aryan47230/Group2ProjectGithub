# Neon Minimal / Operator Console UI Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Wiki Loop's UI from the current multi-color neon aesthetic into a brutalist "Operator Console" design — pure black canvas, one dominant mint-cyan laser accent (`#00ffc6`), Unbounded display font, viewfinder chrome, engineering grid, and a bottom status bar — while keeping the full node-system design (gold center, blue/cyan/violet relation-colored primaries, hexagonal secondaries).

**Architecture:** Frontend-only refactor. No API/server/state changes. We replace design tokens (`globals.css`), restyle every component to match Direction B's operator-console aesthetic, add new chrome elements (viewfinder corners, status bar, graph crosshairs, vertical toolbar), and apply the node-system's exact colors/sizes/edges. The app keeps running between every commit.

**Tech Stack:** React 18 (Vite), CSS Modules, d3-force, SVG. Fonts: `Unbounded` (display — replacing Outfit), `JetBrains Mono` (data/mono — kept), `Instrument Serif` (italic accent — new). No new runtime dependencies.

**Pre-reading required:** `CLAUDE.md` in the project root. It documents the architecture, state shape, edge dedup rules, accumulating-graph behavior, and known bugs. Do not skip it — several tasks below assume that context.

---

## Design Reference — Direction B Key Principles

1. **One hot accent color:** Mint-cyan `#00ffc6` used like a single highlighter on an otherwise monochrome field. Gold `#ffaa40` is reserved for center/trail nodes only (per the node-system), never for UI chrome.
2. **Pure black canvas:** `--void: #000000`, `--ink: #050507`, `--paper: #0a0a0d`. Much darker than current `#050810`.
3. **Floating typography:** The left panel has NO box/card — title, summary, and facts float on the black canvas, separated by hairlines only.
4. **Viewfinder chrome:** Camera viewfinder brackets at shell corners, viewfinder ticks on the graph frame, crosshairs at graph center.
5. **Status bar:** Bottom bar with live session data in monospace (STATUS · NODES · EDGES · HOPS · CURSOR · ZOOM · SESSION).
6. **Engineering grid:** Faint grid lines visible through mask on the graph background.
7. **Font change:** Unbounded replaces Outfit for all display text. Letter-spacing is wider (0.22em–0.42em). Everything is uppercase.
8. **Node system:** Uses the full node-system design (gold center 112px, blue/cyan/gold primaries 68px, violet hexagon secondaries 58px, etc.) — NOT the tiny-dot version from the Direction B mockup.

---

## Design Tokens Reference (source of truth)

### Color palette (CSS variables, defined in Task 1)

| Variable | Value | Role |
|----------|-------|------|
| `--nm-void` | `#000000` | Shell background |
| `--nm-ink` | `#050507` | Cards, graph background |
| `--nm-paper` | `#0a0a0d` | Surfaces |
| `--nm-hair` | `rgba(255,255,255,.06)` | Hairline divider (dim) |
| `--nm-hair-2` | `rgba(255,255,255,.12)` | Hairline divider (medium) |
| `--nm-hair-3` | `rgba(255,255,255,.22)` | Hairline divider (bright) |
| `--nm-txt-1` | `#f0f0f2` | Headlines |
| `--nm-txt-2` | `#6b6b72` | Body text / meta |
| `--nm-txt-3` | `#35353c` | Disabled / dim |
| `--nm-neon` | `#00ffc6` | Primary UI accent (mint-cyan laser) |
| `--nm-neon-d` | `rgba(0,255,198,.35)` | Accent dimmed |
| `--nm-neon-g` | `rgba(0,255,198,.18)` | Accent glow |
| `--nm-hot` | `#ff2e63` | Error / destructive accent |
| `--nm-gold` | `#ffaa40` | Center node · Trail · Application relation |
| `--nm-gold-g` | `rgba(255,170,64,.55)` | Gold glow |
| `--nm-blue` | `#4d9fff` | Core relation |
| `--nm-blue-g` | `rgba(77,159,255,.55)` | Blue glow |
| `--nm-cyan` | `#00fff2` | Related relation · Focused state |
| `--nm-cyan-g` | `rgba(0,255,242,.5)` | Cyan glow |
| `--nm-violet` | `#a78bfa` | Foundation · Secondary hex |
| `--nm-violet-g` | `rgba(167,139,250,.5)` | Violet glow |
| `--nm-grey` | `#5a6a85` | Constellation dot |

### Node sizing (from node-system.html)

| Type | Size (px) | Border (px) | Shape | Color |
|------|-----------|-------------|-------|-------|
| `center` | 112 | 1.5 | circle + dashed ring (-14px) + hairline ring (-28px) | `--nm-gold` |
| `primary` (core) | 68 | 1.5 | circle | `--nm-blue` |
| `primary` (related) | 68 | 1.5 | circle | `--nm-cyan` |
| `primary` (application) | 68 | 1.5 | circle | `--nm-gold` |
| `secondary` | 58 | gradient clip-path border | hexagon | `--nm-violet` |
| `trail` (hop 0/1/2/3) | 80/80/64/32 | 1.5 | circle, gold dim, 0.88 opacity | `--nm-gold` @ 0.75 |
| `dormant` (hop 0/1/2/3) | 60/60/48/28 | 1 | circle, color-locked, 0.6 opacity | original color @ 0.28 |
| `constellation` (hop 3+) | 10 | 1 | dot | `--nm-grey` @ 0.35 |
| `hover` state | +scale(1.12) | 1.8 | outer ring at -12px | 2x bloom |
| `focused` state | same size | 1.5 | double bloom | `--nm-cyan` ring |

### Edge styling (from node-system.html)

| Edge | Stroke | Width | Opacity | Dash | Glow stdDev |
|------|--------|-------|---------|------|-------------|
| `trail` direct | `#ffaa40` | 2.2 | 0.55 (glow 0.9) | none | 2.2 |
| `trail` indirect | `#ffaa40` | 2.8 | 0.55 (dash 0.85) | `6 4` | 2.5 |
| `connection` active | by relation color | 1.6 | 0.85 (glow 0.45) | none | 1.8 |
| `connection` aged | base color @ 0.35 | 0.8 | 0.4 | none | none |
| `secondary` branch | `#a78bfa` | 1 | 0.55 | `2 4` | none |
| `hover` highlight | `#00fff2` | 2 (glow 3.5) | 1 (glow 0.45) | none | 3 |

### Typography

- Display (titles, buttons, labels): **Unbounded** 200/300/400/500/700
- Data / metadata / coordinates / status: **JetBrains Mono** 300/400/500/600
- Italic luxury accent (used **only** in concept title): **Instrument Serif** italic 400
- All labels uppercase. Letter-spacing range: 0.14em – 0.42em.

### Spacing scale

`4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 44 · 56` px.

---

## File Structure

**New files:**
- `client/src/styles/neon-minimal.css` — design tokens for the new theme (Task 1)
- `client/src/components/StatusBar/StatusBar.jsx` — bottom status bar component (Task 12)
- `client/src/components/StatusBar/StatusBar.module.css` — status bar styles (Task 12)
- `client/src/components/KnowledgeGraph/GraphChrome.jsx` — viewfinder ticks, crosshairs, graph header label, vertical control tab (Task 10)
- `client/src/components/KnowledgeGraph/GraphChrome.module.css` — styles for above (Task 10)

**Modified files:**
- `client/index.html` — swap Outfit for Unbounded font import (Task 1)
- `client/src/styles/globals.css` — new token bridge + body styles (Task 1)
- `client/src/components/Topbar/Topbar.jsx` — restructure for operator-console topbar (Task 2)
- `client/src/components/Topbar/Topbar.module.css` — complete restyle (Task 2)
- `client/src/components/ConceptPanel/ConceptPanel.jsx` — remove corner decorations, add viewfinder brackets (Task 3)
- `client/src/components/ConceptPanel/ConceptPanel.module.css` — floating typography, no card boxes (Task 3)
- `client/src/components/ConceptPanel/HeroCard.jsx` — eyebrow row + large Unbounded title + Instrument Serif accent (Task 4)
- `client/src/components/ConceptPanel/HeroCard.module.css` — full restyle (Task 4)
- `client/src/components/ConceptPanel/BacktrackBar.jsx` — simplified mono breadcrumb (Task 5)
- `client/src/components/ConceptPanel/BacktrackBar.module.css` — restyle (Task 5)
- `client/src/components/ConceptPanel/ConnectedConcepts.jsx` — list format with relation dots (Task 6)
- `client/src/components/ConceptPanel/ConnectedConcepts.module.css` — restyle (Task 6)
- `client/src/components/KnowledgeGraph/GraphNode.jsx` — updated sizes, colors, remove particles/radar (Task 7)
- `client/src/components/KnowledgeGraph/GraphNode.module.css` — node-system exact styles (Task 8)
- `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx` — edge rendering update, grid background, remove nebula/particles (Task 9)
- `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css` — engineering grid, remove nebula/particles (Task 9)
- `client/src/components/KnowledgeGraph/PreviewPopover.jsx` — minor label updates (Task 11)
- `client/src/components/KnowledgeGraph/PreviewPopover.module.css` — restyle to match operator-console (Task 11)
- `client/src/components/KnowledgeGraph/NodeDetailOverlay.jsx` — minor updates (Task 11)
- `client/src/components/KnowledgeGraph/NodeDetailOverlay.module.css` — restyle (Task 11)
- `client/src/components/TrailSidebar/TrailSidebar.module.css` — restyle (Task 13)
- `client/src/components/JourneyOverlay/JourneyOverlay.module.css` — restyle (Task 13)
- `client/src/App.jsx` — add StatusBar + viewfinder corners to shell (Task 14)

**Files NOT touched:** `ExplorerContext.jsx`, `useForceLayout.js`, anything under `server/`, `routes/`, `services/`, or `utils/`. If you find yourself wanting to edit one, stop and re-read the relevant task.

---

## Workflow notes

- This project does not have component tests. Each task's verification is **manual visual inspection in the browser** plus `npm run build` (production build). Treat a successful Vite build with no warnings as the "tests pass" equivalent.
- Run `npm run dev` from the project root once at the start; keep it running. The Vite dev server hot-reloads. After every task, refresh `http://localhost:5173`, search for "Quantum mechanics", and confirm the screen still works.
- Commit after **every task**, not every step. Use the commit message at the end of each task.
- All file paths in this plan are relative to the project root: `c:/Users/revaa/AI Projects/Wiki_Loop`.

---

## Task 1: Add Neon Minimal design tokens + swap font

**Files:**
- Create: `client/src/styles/neon-minimal.css`
- Modify: `client/index.html`
- Modify: `client/src/styles/globals.css`

**Purpose:** Centralize every color, hairline, and typography token. Swap Outfit for Unbounded in the Google Fonts link. Add Instrument Serif. Bridge legacy CSS variables so existing components don't break.

- [ ] **Step 1: Create the neon-minimal.css token file**

Create `client/src/styles/neon-minimal.css` with this exact content:

```css
/* Neon Minimal / Operator Console — design tokens
 * Source of truth for the new UI. Do not hardcode colors elsewhere. */

:root {
  /* Surfaces — pure black canvas */
  --nm-void:    #000000;
  --nm-ink:     #050507;
  --nm-paper:   #0a0a0d;

  /* Hairlines — white-based, not blue-tinted */
  --nm-hair:    rgba(255, 255, 255, 0.06);
  --nm-hair-2:  rgba(255, 255, 255, 0.12);
  --nm-hair-3:  rgba(255, 255, 255, 0.22);

  /* Text */
  --nm-txt-1: #f0f0f2;
  --nm-txt-2: #6b6b72;
  --nm-txt-3: #35353c;

  /* Primary UI accent — mint-cyan laser */
  --nm-neon:    #00ffc6;
  --nm-neon-d:  rgba(0, 255, 198, 0.35);
  --nm-neon-g:  rgba(0, 255, 198, 0.18);
  --nm-hot:     #ff2e63;

  /* Node-system neon palette */
  --nm-gold:       #ffaa40;
  --nm-gold-h:     #ffc266;
  --nm-gold-g:     rgba(255, 170, 64, 0.55);
  --nm-gold-g2:    rgba(255, 170, 64, 0.22);

  --nm-blue:       #4d9fff;
  --nm-blue-g:     rgba(77, 159, 255, 0.55);

  --nm-cyan:       #00fff2;
  --nm-cyan-g:     rgba(0, 255, 242, 0.5);

  --nm-violet:     #a78bfa;
  --nm-violet-g:   rgba(167, 139, 250, 0.5);

  --nm-grey:       #5a6a85;

  /* Typography */
  --nm-font-display: 'Unbounded', system-ui, sans-serif;
  --nm-font-mono:    'JetBrains Mono', 'Fira Code', monospace;
  --nm-font-serif:   'Instrument Serif', Georgia, serif;

  /* Sizing */
  --nm-topbar-height: 64px;
  --nm-statusbar-height: 36px;
  --nm-panel-width: 46%;
}
```

- [ ] **Step 2: Update index.html to load Unbounded + Instrument Serif (drop Outfit)**

In `client/index.html`, replace line 9:

```html
  <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@200;300;400;500;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet" />
```

- [ ] **Step 3: Import neon-minimal.css and bridge legacy variables in globals.css**

Replace the entire contents of `client/src/styles/globals.css` with:

```css
@import './neon-minimal.css';

:root {
  /* Legacy aliases → neon-minimal tokens */
  --bg-primary:    var(--nm-void);
  --bg-secondary:  var(--nm-ink);
  --bg-tertiary:   var(--nm-paper);
  --bg-card:       rgba(5, 5, 7, 0.8);
  --bg-card-hover: rgba(10, 10, 13, 0.92);

  --border-dim:    var(--nm-hair);
  --border-medium: var(--nm-hair-2);
  --border-bright: var(--nm-hair-3);

  --neon-cyan:    var(--nm-neon);
  --neon-blue:    var(--nm-blue);
  --neon-amber:   var(--nm-gold);
  --neon-purple:  var(--nm-violet);
  --neon-magenta: #f472b6;
  --neon-green:   #34d399;
  --neon-red:     var(--nm-hot);

  --accent-cyan:   var(--neon-cyan);
  --accent-blue:   var(--neon-blue);
  --accent-green:  var(--neon-green);
  --accent-amber:  var(--neon-amber);
  --accent-gold:   var(--neon-amber);
  --accent-red:    var(--neon-red);
  --accent-purple: var(--neon-purple);
  --accent-white:  var(--nm-txt-1);

  --text-primary:   var(--nm-txt-1);
  --text-secondary: var(--nm-txt-2);
  --text-dim:       var(--nm-txt-3);
  --text-muted:     #1a1a1f;

  --topbar-height: var(--nm-topbar-height);

  --font-display: var(--nm-font-display);
  --font-mono:    var(--nm-font-mono);
  --font-main:    var(--nm-font-display);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--nm-void);
  color: var(--nm-txt-1);
  font-family: var(--nm-font-display);
  overflow: hidden;
  height: 100vh;
  user-select: none;
  -webkit-user-select: none;
}

a {
  color: var(--nm-neon);
  text-decoration: none;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: rgba(0, 255, 198, 0.1); border-radius: 4px; }
::-webkit-scrollbar-track { background: transparent; }
```

- [ ] **Step 4: Verify build**

Run: `cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build`
Expected: build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add client/index.html client/src/styles/neon-minimal.css client/src/styles/globals.css
git commit -m "feat(ui): add neon-minimal design tokens, swap Outfit for Unbounded font"
```

---

## Task 2: Topbar — operator-console style

**Files:**
- Modify: `client/src/components/Topbar/Topbar.jsx`
- Modify: `client/src/components/Topbar/Topbar.module.css`

**Purpose:** Restyle the topbar to 64px height, add a glowing neon dot logo with wide letter-spacing, center the search bar with a `/` prefix and `⌘ K` hint, convert nav links to uppercase mono, and add a session counter in the logo area. The golden gradient underline becomes a single neon hairline.

- [ ] **Step 1: Update Topbar.jsx**

Replace the entire contents of `client/src/components/Topbar/Topbar.jsx` with:

```jsx
import { useState, useRef, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import { searchConcepts } from '../../utils/api';
import styles from './Topbar.module.css';

export default function Topbar() {
  const { trail, trailIndex, toggleTrail, toggleJourney, trailOpen, journeyOpen, pickCuriosity, currentConcept } = useExplorer();
  const { jumpTo } = useExplorer();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [scanning, setScanning] = useState(false);
  const searchRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleInput(value) {
    setQuery(value);
    setScanning(true);
    setTimeout(() => setScanning(false), 1500);
    clearTimeout(debounceRef.current);
    if (value.trim().length < 2) { setResults([]); setShowResults(false); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await searchConcepts(value);
        setResults(res.slice(0, 6));
        setShowResults(true);
      } catch { setResults([]); }
    }, 300);
  }

  function handleSelect(title) {
    setQuery(title);
    setShowResults(false);
    jumpTo(title);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && query.trim()) {
      setShowResults(false);
      jumpTo(query.trim());
    }
  }

  useEffect(() => {
    if (currentConcept) {
      setQuery('');
      setShowResults(false);
    }
  }, [currentConcept?.title]);

  const jumpCount = trailIndex + 1;

  return (
    <div className={styles.topbar}>
      <div className={styles.logo}>
        <span className={styles.dot} />
        <span className={styles.mark}>WIKILOOP</span>
        <span className={styles.slash}>/</span>
        <span className={styles.idx}>SESSION {String(jumpCount).padStart(2, '0')}</span>
      </div>

      <div className={styles.searchArea} ref={searchRef}>
        <div className={`${styles.searchBar} ${scanning ? styles.scanning : ''}`}>
          <span className={styles.searchPrefix}>/</span>
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

      <div className={styles.topnav}>
        {currentConcept && (
          <a className={styles.navLink} onClick={pickCuriosity}>Random</a>
        )}
        <a className={`${styles.navLink} ${trailOpen ? styles.active : ''}`} onClick={toggleTrail}>Trail</a>
        <a className={`${styles.navLink} ${journeyOpen ? styles.active : ''}`} onClick={toggleJourney}>Map</a>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Replace Topbar.module.css**

Replace the entire contents of `client/src/components/Topbar/Topbar.module.css` with:

```css
.topbar {
  height: var(--nm-topbar-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 44px;
  border-bottom: 1px solid var(--nm-hair);
  position: relative;
  z-index: 100;
  background: var(--nm-void);
}

/* ── Logo ── */
.logo {
  display: flex;
  align-items: baseline;
  gap: 14px;
  font: 300 14px/1 var(--nm-font-display);
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: var(--nm-txt-1);
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--nm-neon);
  box-shadow: 0 0 12px var(--nm-neon), 0 0 24px var(--nm-neon-g);
  margin-right: 10px;
  align-self: center;
}

.mark {
  font-weight: 500;
}

.slash {
  color: var(--nm-txt-3);
}

.idx {
  font: 500 10px var(--nm-font-mono);
  color: var(--nm-txt-2);
  letter-spacing: 0.1em;
}

/* ── Search ── */
.searchArea {
  flex: 0 0 auto;
  width: 380px;
  position: relative;
}

.searchBar {
  height: 36px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 18px;
  border: 1px solid var(--nm-hair-2);
  background: rgba(255, 255, 255, 0.015);
  font: 400 12px var(--nm-font-mono);
  color: var(--nm-txt-2);
  letter-spacing: 0.02em;
  transition: border-color 0.2s;
}

.searchBar:focus-within {
  border-color: var(--nm-neon-d);
  box-shadow: 0 0 0 1px var(--nm-neon-g);
}

.searchBar.scanning {
  border-color: var(--nm-neon-d);
}

.searchPrefix {
  color: var(--nm-neon);
  font-weight: 600;
  font-family: var(--nm-font-mono);
}

.searchInput {
  flex: 1;
  background: transparent;
  border: 0;
  outline: 0;
  color: var(--nm-txt-1);
  font: 400 12px var(--nm-font-mono);
  letter-spacing: 0.02em;
}

.searchInput::placeholder {
  color: var(--nm-txt-2);
}

.kbd {
  font-size: 10px;
  color: var(--nm-txt-3);
  border: 1px solid var(--nm-hair-2);
  padding: 2px 5px;
  font-family: var(--nm-font-mono);
}

/* ── Dropdown ── */
.dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--nm-ink);
  border: 1px solid var(--nm-hair-2);
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8);
  z-index: 200;
}

.dropdownItem {
  padding: 10px 18px;
  cursor: pointer;
  border-bottom: 1px solid var(--nm-hair);
  transition: background 0.15s;
}

.dropdownItem:last-child { border-bottom: none; }

.dropdownItem:hover {
  background: rgba(0, 255, 198, 0.04);
}

.dropdownTitle {
  font: 500 12px var(--nm-font-display);
  color: var(--nm-txt-1);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.dropdownSnippet {
  font: 400 10px var(--nm-font-mono);
  color: var(--nm-txt-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ── Nav links ── */
.topnav {
  display: flex;
  align-items: center;
  gap: 32px;
  font: 500 10px var(--nm-font-display);
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.navLink {
  color: var(--nm-txt-2);
  cursor: pointer;
  transition: color 0.2s;
  position: relative;
  padding-bottom: 22px;
  margin-bottom: -22px;
}

.navLink:hover {
  color: var(--nm-txt-1);
}

.navLink.active {
  color: var(--nm-neon);
}

.navLink.active::after {
  content: '';
  position: absolute;
  left: -10px;
  right: -10px;
  bottom: 0;
  height: 1px;
  background: var(--nm-neon);
  box-shadow: 0 0 10px var(--nm-neon-d);
}
```

- [ ] **Step 3: Verify build and visuals**

Run: `cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build`
Expected: build succeeds. Topbar should show the dot-logo, search with `/` prefix, and uppercase nav links.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/Topbar/Topbar.jsx client/src/components/Topbar/Topbar.module.css
git commit -m "feat(ui): restyle topbar to operator-console with neon dot logo and mono search"
```

---

## Task 3: ConceptPanel — floating typography, no card boxes

**Files:**
- Modify: `client/src/components/ConceptPanel/ConceptPanel.jsx`
- Modify: `client/src/components/ConceptPanel/ConceptPanel.module.css`

**Purpose:** Remove corner decorations, boxed card backgrounds, and rounded borders. The panel becomes a floating typography area on the black canvas — content separated by hairlines only. Keep the stagger-in animation. Remove the hero image card wrapper — the title and content float directly.

- [ ] **Step 1: Update ConceptPanel.jsx**

Replace the entire contents of `client/src/components/ConceptPanel/ConceptPanel.jsx` with:

```jsx
import { useState, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import BacktrackBar from './BacktrackBar';
import HeroCard from './HeroCard';
import Layer from './Layer';
import DeepDive from './DeepDive';
import ConnectedConcepts from './ConnectedConcepts';
import styles from './ConceptPanel.module.css';

export default function ConceptPanel() {
  const { currentConcept, loading, error, enriching, enriched, enrich } = useExplorer();

  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    if (currentConcept) {
      setGlitch(true);
      const t = setTimeout(() => setGlitch(false), 300);
      return () => clearTimeout(t);
    }
  }, [currentConcept?.title]);

  if (!currentConcept && !loading) {
    return (
      <div className={styles.panel}>
        <div className={styles.empty}>
          <h2>Begin Exploring</h2>
          <p>Search for any concept to start</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.panel}>
        <div className={styles.empty}>
          <div className={styles.spinner} />
          <p>Exploring the knowledge map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.panel}>
        <div className={styles.empty}>
          <p className={styles.error}>Something went wrong: {error}</p>
        </div>
      </div>
    );
  }

  const c = currentConcept;

  return (
    <div className={`${styles.panel} ${glitch ? styles.panelGlitch : ''}`}>
      <div className={styles.staggerIn} key={c.title}>
        <BacktrackBar />
        <HeroCard concept={c} />

        <div className={styles.actions}>
          <button
            className={`${styles.cta} ${enriched ? styles.ctaComplete : ''}`}
            onClick={enrich}
            disabled={enriching || enriched}
          >
            {enriching ? 'Enriching...' : enriched ? 'AI Enhanced' : 'Enrich with AI'}
          </button>
          {c.wikiUrl && (
            <a className={styles.ghost} href={c.wikiUrl} target="_blank" rel="noopener noreferrer">
              Read full entry
            </a>
          )}
        </div>

        {c.sections?.length > 0 && (
          <Layer title="Deep Dive" hint="Full Wikipedia sections">
            <DeepDive sections={c.sections} wikiUrl={c.wikiUrl} />
          </Layer>
        )}

        <ConnectedConcepts connections={c.connections} />
        <div style={{ height: 30 }} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Replace ConceptPanel.module.css**

Replace the entire contents of `client/src/components/ConceptPanel/ConceptPanel.module.css` with:

```css
.panel {
  width: var(--nm-panel-width);
  padding: 60px 56px 0;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  background: transparent;
}

.panelGlitch {
  animation: fadeSlide 0.3s ease-out;
}

@keyframes fadeSlide {
  from { opacity: 0.8; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.staggerIn > *:nth-child(1) { animation: slideUp 0.4s ease-out 0.05s both; }
.staggerIn > *:nth-child(2) { animation: slideUp 0.4s ease-out 0.12s both; }
.staggerIn > *:nth-child(3) { animation: slideUp 0.4s ease-out 0.19s both; }
.staggerIn > *:nth-child(4) { animation: slideUp 0.4s ease-out 0.26s both; }
.staggerIn > *:nth-child(5) { animation: slideUp 0.4s ease-out 0.33s both; }
.staggerIn > *:nth-child(6) { animation: slideUp 0.4s ease-out 0.40s both; }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
  gap: 10px;
}

.empty h2 {
  font: 300 18px var(--nm-font-display);
  color: var(--nm-txt-2);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.empty p {
  font: 400 11px var(--nm-font-mono);
  color: var(--nm-txt-3);
}

.error { color: var(--nm-hot); font-size: 13px; }

.spinner {
  width: 28px;
  height: 28px;
  border: 2px solid var(--nm-hair-2);
  border-top-color: var(--nm-neon);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 14px;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ─── Actions row ─── */
.actions {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 28px;
  padding-bottom: 32px;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font: 500 11px var(--nm-font-display);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--nm-neon);
  padding: 16px 28px;
  border: 1px solid var(--nm-neon);
  background: rgba(0, 255, 198, 0.04);
  cursor: pointer;
  transition: all 0.25s;
}

.cta::after {
  content: '→';
  font-family: var(--nm-font-mono);
  font-size: 13px;
}

.cta:hover:not(:disabled) {
  background: var(--nm-neon);
  color: var(--nm-void);
  box-shadow: 0 0 30px var(--nm-neon-g);
}

.cta:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.ctaComplete {
  border-color: var(--nm-txt-3);
  color: var(--nm-txt-2);
  background: transparent;
}

.ctaComplete::after {
  content: '✓';
}

.ghost {
  font: 400 10px var(--nm-font-display);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--nm-txt-2);
  cursor: pointer;
  border-bottom: 1px dashed var(--nm-hair-3);
  padding-bottom: 2px;
  transition: color 0.2s;
}

.ghost:hover {
  color: var(--nm-txt-1);
  border-color: var(--nm-txt-1);
}
```

- [ ] **Step 3: Verify build**

Run: `cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build`
Expected: build succeeds. Panel should show floating text on black canvas with no card boxes.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/ConceptPanel/ConceptPanel.jsx client/src/components/ConceptPanel/ConceptPanel.module.css
git commit -m "feat(ui): concept panel floating typography, remove card boxes"
```

---

## Task 4: HeroCard — eyebrow row, large Unbounded title, Instrument Serif accent

**Files:**
- Modify: `client/src/components/ConceptPanel/HeroCard.jsx`
- Modify: `client/src/components/ConceptPanel/HeroCard.module.css`

**Purpose:** Replace the boxed hero card with the Direction B floating layout: an eyebrow row (index / line / category label), a massive 78px title with the second word in Instrument Serif italic neon, the summary in JetBrains Mono, and a hairline-separated facts row at the bottom.

- [ ] **Step 1: Update HeroCard.jsx**

Replace the entire contents of `client/src/components/ConceptPanel/HeroCard.jsx` with:

```jsx
import styles from './HeroCard.module.css';

export default function HeroCard({ concept }) {
  const category = concept.categories?.[0] || 'Concept';
  const factList = concept.facts || [];
  
  // Split title for accent styling — second word gets Instrument Serif italic
  const words = concept.title.split(' ');
  const firstLine = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondLine = words.slice(Math.ceil(words.length / 2)).join(' ');

  // Find specific fact values
  const alsoKnown = factList.find(f => f.label === 'Also known as')?.value;
  const sections = factList.find(f => f.label === 'Sections')?.value;
  const links = factList.find(f => f.label === 'Related topics')?.value;

  return (
    <div className={styles.hero}>
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowNum}>01 / {String(concept.connections?.length || 0).padStart(2, '0')}</span>
        <span className={styles.eyebrowLine} />
        <span className={styles.eyebrowLabel}>{category}</span>
      </div>

      <h1 className={styles.title}>
        <span className={styles.thin}>{firstLine}</span>
        {secondLine && <><br /><span className={styles.accent}>{secondLine}</span></>}
      </h1>

      <p className={styles.summary}>
        {concept.summary}
      </p>

      <div className={styles.facts}>
        {alsoKnown && (
          <div className={styles.fact}>
            <div className={styles.factKey}>Also</div>
            <div className={styles.factVal}>{alsoKnown}</div>
          </div>
        )}
        {sections && (
          <div className={styles.fact}>
            <div className={styles.factKey}>Sections</div>
            <div className={`${styles.factVal} ${styles.factNeon}`}>{sections}</div>
          </div>
        )}
        {links && (
          <div className={styles.fact}>
            <div className={styles.factKey}>Links</div>
            <div className={`${styles.factVal} ${styles.factNeon}`}>{links}</div>
          </div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Replace HeroCard.module.css**

Replace the entire contents of `client/src/components/ConceptPanel/HeroCard.module.css` with:

```css
.hero {
  margin-bottom: 0;
}

/* ── Eyebrow row ── */
.eyebrow {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 56px;
}

.eyebrowNum {
  font: 400 11px var(--nm-font-mono);
  color: var(--nm-neon);
  letter-spacing: 0.1em;
}

.eyebrowLine {
  flex: 1;
  height: 1px;
  background: var(--nm-hair-2);
  max-width: 80px;
}

.eyebrowLabel {
  font: 500 10px var(--nm-font-display);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--nm-txt-2);
}

/* ── Title — massive Unbounded + Instrument Serif italic accent ── */
.title {
  font: 200 78px/0.88 var(--nm-font-display);
  letter-spacing: -0.035em;
  color: var(--nm-txt-1);
  margin: 0 0 6px;
}

.thin {
  font-weight: 200;
}

.accent {
  font: 400 italic 82px/0.88 var(--nm-font-serif);
  letter-spacing: -0.01em;
  color: var(--nm-neon);
  text-shadow: 0 0 30px var(--nm-neon-g);
}

/* ── Summary — JetBrains Mono body text ── */
.summary {
  font: 300 13px/1.7 var(--nm-font-mono);
  color: var(--nm-txt-2);
  max-width: 440px;
  margin: 28px 0 0;
  letter-spacing: 0.005em;
}

/* ── Facts — hairline-separated row ── */
.facts {
  margin-top: auto;
  display: flex;
  gap: 0;
  border-top: 1px solid var(--nm-hair);
  padding-top: 24px;
  margin-top: 28px;
}

.fact {
  flex: 1;
  padding-right: 20px;
  border-right: 1px solid var(--nm-hair);
}

.fact:last-child {
  border-right: 0;
  padding-right: 0;
}

.factKey {
  font: 400 9px var(--nm-font-display);
  color: var(--nm-txt-2);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.factVal {
  font: 500 14px var(--nm-font-mono);
  color: var(--nm-txt-1);
  letter-spacing: 0.02em;
}

.factNeon {
  color: var(--nm-neon);
}
```

- [ ] **Step 3: Verify build**

Run: `cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build`
Expected: build succeeds. Title should be massive Unbounded with neon Instrument Serif italic.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/ConceptPanel/HeroCard.jsx client/src/components/ConceptPanel/HeroCard.module.css
git commit -m "feat(ui): hero card with eyebrow row, 78px title, Instrument Serif accent"
```

---

## Task 5: BacktrackBar — simplified mono breadcrumb

**Files:**
- Modify: `client/src/components/ConceptPanel/BacktrackBar.jsx`
- Modify: `client/src/components/ConceptPanel/BacktrackBar.module.css`

**Purpose:** Minimalist breadcrumb with Back arrow pill, `/` separators, and JetBrains Mono text. No card background.

- [ ] **Step 1: Update BacktrackBar.jsx**

Replace the entire contents of `client/src/components/ConceptPanel/BacktrackBar.jsx` with:

```jsx
import { useRef, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './BacktrackBar.module.css';

export default function BacktrackBar() {
  const { trail, trailIndex, goBack, goToIndex } = useExplorer();
  const trailRef = useRef(null);

  useEffect(() => {
    if (trailRef.current) {
      trailRef.current.scrollLeft = trailRef.current.scrollWidth;
    }
  }, [trailIndex]);

  if (trail.length === 0) return null;
  const visibleTrail = trail.slice(0, trailIndex + 1);
  return (
    <div className={styles.bar}>
      <button className={`${styles.backBtn} ${trailIndex <= 0 ? styles.disabled : ''}`} onClick={goBack} disabled={trailIndex <= 0}>
        ← Back
      </button>
      <div className={styles.trail} ref={trailRef}>
        {visibleTrail.map((entry, i) => (
          <span key={`${entry.title}-${i}`} className={styles.crumbWrap}>
            {i > 0 && <span className={styles.sep}>/</span>}
            <span
              className={`${styles.crumb} ${i === trailIndex ? styles.current : ''}`}
              onClick={() => i !== trailIndex && goToIndex(i)}
            >
              {entry.title}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Replace BacktrackBar.module.css**

Replace the entire contents of `client/src/components/ConceptPanel/BacktrackBar.module.css` with:

```css
.bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.backBtn {
  background: transparent;
  border: 1px solid var(--nm-hair-2);
  padding: 5px 12px;
  font: 400 10px var(--nm-font-mono);
  color: var(--nm-txt-2);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  letter-spacing: 0.04em;
}

.backBtn:hover:not(.disabled) {
  color: var(--nm-neon);
  border-color: var(--nm-neon-d);
}

.backBtn.disabled { opacity: 0.25; cursor: default; }

.trail {
  display: flex;
  align-items: center;
  gap: 0;
  flex: 1;
  overflow-x: auto;
}

.trail::-webkit-scrollbar { height: 0; }

.crumbWrap {
  display: flex;
  align-items: center;
  gap: 6px;
}

.sep {
  color: var(--nm-txt-3);
  font: 400 10px var(--nm-font-mono);
}

.crumb {
  font: 400 10px var(--nm-font-mono);
  color: var(--nm-txt-3);
  white-space: nowrap;
  cursor: pointer;
  padding: 2px 4px;
  transition: color 0.2s;
  letter-spacing: 0.04em;
}

.crumb:hover { color: var(--nm-txt-1); }
.crumb.current { color: var(--nm-neon); cursor: default; }
```

- [ ] **Step 3: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/ConceptPanel/BacktrackBar.jsx client/src/components/ConceptPanel/BacktrackBar.module.css
git commit -m "feat(ui): minimal mono breadcrumb with slash separators"
```

---

## Task 6: ConnectedConcepts — list format with relation color dots

**Files:**
- Modify: `client/src/components/ConceptPanel/ConnectedConcepts.jsx`
- Modify: `client/src/components/ConceptPanel/ConnectedConcepts.module.css`

**Purpose:** Replace the 2-column card grid with a vertical list. Each connection shows a color dot, the title, and a relation label. Hairline separators. Jump/Preview actions appear on hover.

- [ ] **Step 1: Update ConnectedConcepts.jsx**

Replace the entire contents of `client/src/components/ConceptPanel/ConnectedConcepts.jsx` with:

```jsx
import { useRef, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './ConnectedConcepts.module.css';

const RELATION_COLORS = {
  core: 'var(--nm-blue)',
  related: 'var(--nm-cyan)',
  application: 'var(--nm-gold)',
  foundation: 'var(--nm-violet)',
};

const RELATION_LABELS = {
  core: 'Core',
  related: 'Related',
  application: 'Application',
  foundation: 'Foundation',
};

export default function ConnectedConcepts({ connections }) {
  const { jumpTo, setPreview, setHighlight, clearHighlight, highlightedNodeId } = useExplorer();
  const listRef = useRef(null);

  useEffect(() => {
    if (!highlightedNodeId || !listRef.current) return;
    const item = listRef.current.querySelector(`[data-node-id="${CSS.escape(highlightedNodeId)}"]`);
    if (item) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [highlightedNodeId]);

  if (!connections || connections.length === 0) return null;
  return (
    <div className={styles.section}>
      <div className={styles.header}>Connected concepts</div>
      <div className={styles.list} ref={listRef}>
        {connections.map((conn) => {
          const dotColor = RELATION_COLORS[conn.relation] || 'var(--nm-grey)';
          return (
            <div
              key={conn.title}
              className={styles.item}
              data-node-id={conn.title}
              onMouseEnter={() => setHighlight(conn.title)}
              onMouseLeave={() => clearHighlight()}
            >
              <span className={styles.dot} style={{ background: dotColor, boxShadow: `0 0 6px ${dotColor}` }} />
              <span className={styles.itemTitle}>{conn.title}</span>
              <span className={styles.relation}>{RELATION_LABELS[conn.relation] || conn.relation}</span>
              <div className={styles.actions}>
                <span onClick={() => jumpTo(conn.title)}>Jump</span>
                <span onClick={() => setPreview({ ...conn, id: conn.title, label: conn.title })}>Preview</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Replace ConnectedConcepts.module.css**

Replace the entire contents of `client/src/components/ConceptPanel/ConnectedConcepts.module.css` with:

```css
.section {
  margin-top: 0;
}

.header {
  font: 600 11px var(--nm-font-display);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--nm-txt-1);
  padding: 14px 0 12px;
  border-top: 1px solid var(--nm-hair);
  cursor: default;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--nm-hair);
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
}

.item:hover {
  background: rgba(255, 255, 255, 0.02);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.itemTitle {
  font: 500 13px var(--nm-font-display);
  color: var(--nm-txt-1);
  flex: 1;
  letter-spacing: 0.04em;
}

.relation {
  font: 500 9px var(--nm-font-display);
  color: var(--nm-txt-2);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
  font: 400 9px var(--nm-font-mono);
  color: var(--nm-neon-d);
  opacity: 0;
  transition: opacity 0.2s;
  margin-left: 8px;
}

.item:hover .actions { opacity: 1; }
.actions span { cursor: pointer; }
.actions span:hover { color: var(--nm-neon); }
```

- [ ] **Step 3: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/ConceptPanel/ConnectedConcepts.jsx client/src/components/ConceptPanel/ConnectedConcepts.module.css
git commit -m "feat(ui): connected concepts as vertical list with relation color dots"
```

---

## Task 7: GraphNode.jsx — node-system sizes, colors, remove particles/radar

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.jsx`

**Purpose:** Update the node component to match the node-system design exactly: center node 112px with double concentric rings (dashed inner + hairline outer), no particles or radar animation. Update the ACCENT_COLORS to use the node-system's violet (`#a78bfa`) and proper glow values. Update `getNodeSize` to match the spec. Font changes from Outfit to Unbounded (inherited from CSS variables).

- [ ] **Step 1: Replace GraphNode.jsx**

Replace the entire contents of `client/src/components/KnowledgeGraph/GraphNode.jsx` with:

```jsx
import { useEffect, useRef, useState, memo } from 'react';
import styles from './GraphNode.module.css';

function getOpacity(hopDistance) {
  if (hopDistance === 0) return 1;
  if (hopDistance === 1) return 0.88;
  if (hopDistance === 2) return 0.65;
  return 0.45;
}

// Node-system neon palette — exact values from node-system.html
const ACCENT_COLORS = {
  white:  { border: '#00fff2', fill: 'rgba(0, 255, 242, 0.04)',  glow: 'rgba(0,255,242,0.28)',   text: '#00fff2' },
  cyan:   { border: '#00fff2', fill: 'rgba(0, 255, 242, 0.04)',  glow: 'rgba(0,255,242,0.28)',   text: '#00fff2' },
  blue:   { border: '#4d9fff', fill: 'rgba(77, 159, 255, 0.05)', glow: 'rgba(77,159,255,0.32)',  text: '#4d9fff' },
  gold:   { border: '#ffaa40', fill: 'rgba(255, 170, 64, 0.04)', glow: 'rgba(255,170,64,0.25)',  text: '#ffaa40' },
  purple: { border: '#a78bfa', fill: 'rgba(167, 139, 250, 0.06)',glow: 'rgba(167,139,250,0.28)', text: '#a78bfa' },
  red:    { border: '#ff2e63', fill: 'rgba(255, 46, 99, 0.05)',  glow: 'rgba(255,46,99,0.15)',   text: '#ff2e63' },
};

function useTypingAnimation(label, active) {
  const [displayed, setDisplayed] = useState(active ? '' : label);
  const [isTyping, setIsTyping] = useState(false);
  const prevLabel = useRef(label);

  useEffect(() => {
    if (!active || label === prevLabel.current) {
      setDisplayed(label);
      setIsTyping(false);
      return;
    }
    prevLabel.current = label;
    setDisplayed('');
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(label.slice(0, i));
      if (i >= label.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [label, active]);

  return { displayed, isTyping };
}

function abbreviate(label) {
  if (!label) return '';
  if (label.length <= 10) return label;
  const words = label.split(' ');
  if (words.length >= 3) return words.slice(0, 2).map((w) => w.slice(0, 4)).join(' ');
  if (words.length === 2) return words.map((w) => w.slice(0, 5)).join(' ');
  return label.slice(0, 9) + '…';
}

function getNodeSize(type, hopDistance) {
  if (type === 'center') return 112;
  if (type === 'secondary') return 58;
  if (type === 'primary') return 68;
  if (type === 'trail') {
    const hop = Math.min(hopDistance || 0, 3);
    return [80, 80, 64, 32][hop];
  }
  if (type === 'dormant') {
    const hop = Math.min(hopDistance || 0, 3);
    return [60, 60, 48, 28][hop];
  }
  return 56;
}

function GraphNode({ node, x, y, onClick, focused, highlighted }) {
  const isCenter = node.type === 'center';
  const isSecondary = node.type === 'secondary';
  const isDormant = node.type === 'dormant';
  const isTrail = node.type === 'trail';
  const opacity = getOpacity(node.hopDistance || 0);
  const colors = ACCENT_COLORS[node.color] || ACCENT_COLORS.blue;

  const size = getNodeSize(node.type, node.hopDistance);
  const half = size / 2;

  const shortLabel = abbreviate(node.label);
  const { displayed: typedLabel, isTyping } = useTypingAnimation(shortLabel, isCenter || (!isDormant && !isTrail));

  if (isCenter) {
    return (
      <div
        className={styles.center}
        style={{ left: x - half, top: y - half, width: size, height: size }}
        onClick={() => onClick?.(node)}
        data-node-id={node.id}
      >
        {/* Outer hairline ring */}
        <div className={styles.centerOuterRing} />
        {/* Inner dashed ring */}
        <div className={styles.centerDashedRing} />
        {/* Main circle */}
        <div className={styles.centerCircle}>
          <span className={styles.centerLabel}>
            {typedLabel}
            {isTyping && <span className={styles.cursor} />}
          </span>
        </div>
        <div className={styles.centerMeta}>× <b>CENTER</b></div>
      </div>
    );
  }

  const shapeClass = isSecondary ? styles.hex : styles.circle;
  const labelClass = isSecondary ? styles.hexLabel : styles.circleLabel;

  function handleClick(e) {
    e.stopPropagation();
    onClick?.(node);
  }

  const isConstellation = (isTrail || isDormant) && (node.hopDistance || 0) >= 3;

  if (isConstellation) {
    return (
      <div
        className={`${styles.node} ${styles.constellation} ${highlighted ? styles.highlighted : ''}`}
        style={{
          left: x - half, top: y - half, width: size, height: size, opacity,
          '--node-border': colors.border, '--node-fill': colors.fill,
        }}
        onClick={handleClick}
        data-node-id={node.id}
      >
        <div className={styles.constellationDot} />
        <div className={`${styles.nodeLabel} ${styles.labelSmall}`}>{node.label}</div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.node} ${focused ? styles.focused : ''} ${highlighted ? styles.highlighted : ''} ${isSecondary ? styles.hexNode : styles.circleNode}`}
      style={{
        left: x - half, top: y - half,
        width: size, height: size,
        opacity,
        '--node-border': colors.border,
        '--node-fill': colors.fill,
        '--node-glow': colors.glow,
        '--node-text': colors.text,
      }}
      onClick={handleClick}
      data-node-id={node.id}
    >
      <div className={shapeClass}>
        <span className={labelClass}>
          {typedLabel}
          {isTyping && <span className={styles.cursor} />}
        </span>
      </div>
      <div className={`${styles.nodeLabel} ${isSecondary ? styles.labelSmall : ''}`}>
        {node.label}
      </div>
    </div>
  );
}

export default memo(GraphNode, (prev, next) => {
  return prev.x === next.x && prev.y === next.y &&
    prev.focused === next.focused &&
    prev.highlighted === next.highlighted &&
    prev.node.type === next.node.type &&
    prev.node.id === next.node.id &&
    prev.node.visited === next.node.visited &&
    prev.node.hopDistance === next.node.hopDistance;
});
```

- [ ] **Step 2: Verify build**

Run: `cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build`
Expected: build succeeds. Center node should be 112px with concentric rings, no spinning radar.

- [ ] **Step 3: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.jsx
git commit -m "feat(ui): GraphNode uses node-system sizes and colors, remove particles/radar"
```

---

## Task 8: GraphNode.module.css — node-system exact visual styles

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.module.css`

**Purpose:** Completely restyle every node type/state to match the node-system design: gold center with double concentric rings, relation-colored primaries with proper glow values, hexagonal secondaries with gradient border, trail/dormant/constellation/hover/focused states.

- [ ] **Step 1: Replace GraphNode.module.css**

Replace the entire contents of `client/src/components/KnowledgeGraph/GraphNode.module.css` with:

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
  border: 1.5px solid var(--nm-gold);
  background: radial-gradient(circle, rgba(255, 170, 64, 0.08) 0%, transparent 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  box-shadow:
    0 0 0 1px rgba(255, 170, 64, 0.18),
    0 0 32px rgba(255, 170, 64, 0.35),
    0 0 60px rgba(255, 170, 64, 0.15),
    inset 0 0 24px rgba(255, 170, 64, 0.08);
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.center:hover .centerCircle {
  transform: scale(1.06);
  box-shadow:
    0 0 0 1px rgba(255, 170, 64, 0.25),
    0 0 40px rgba(255, 170, 64, 0.45),
    0 0 80px rgba(255, 170, 64, 0.2),
    inset 0 0 30px rgba(255, 170, 64, 0.12);
}

/* Inner dashed ring — 14px inset from edge */
.centerDashedRing {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1px dashed rgba(255, 170, 64, 0.22);
  pointer-events: none;
  z-index: 1;
}

/* Outer hairline ring — 28px inset from edge */
.centerOuterRing {
  position: absolute;
  inset: -28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 170, 64, 0.09);
  pointer-events: none;
  z-index: 0;
}

.centerLabel {
  font: 600 11px var(--nm-font-display);
  letter-spacing: 0.06em;
  color: var(--nm-gold);
  text-align: center;
  line-height: 1.25;
  padding: 0 8px;
  text-shadow: 0 0 14px rgba(255, 170, 64, 0.5);
  text-transform: uppercase;
}

.centerMeta {
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  font: 400 9px var(--nm-font-mono);
  color: var(--nm-txt-2);
  letter-spacing: 0.14em;
  text-align: center;
  white-space: nowrap;
}

.centerMeta b {
  color: var(--nm-txt-1);
  font-weight: 500;
}

/* ─────────── Generic Node Container ─────────── */
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

/* ─────────── Circular Nodes (primary, trail, dormant) ─────────── */

/* Bloom on hover */
.circleNode::after {
  content: '';
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--node-glow, rgba(77,159,255,0.12)) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: -2;
}

.circleNode:hover::after {
  opacity: 1;
}

/* Hover outer ring */
.circleNode:hover::before {
  content: '';
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 1px solid var(--node-border, rgba(77,159,255,0.35));
  pointer-events: none;
  z-index: -1;
}

.circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--node-fill, rgba(77, 159, 255, 0.05));
  border: 1.5px solid var(--node-border, #4d9fff);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: box-shadow 0.3s, border-color 0.3s;
  box-shadow:
    0 0 18px var(--node-glow, rgba(77,159,255,0.32)),
    0 0 40px color-mix(in srgb, var(--node-glow, rgba(77,159,255,0.12)) 40%, transparent),
    inset 0 0 12px color-mix(in srgb, var(--node-glow, rgba(77,159,255,0.08)) 40%, transparent);
}

.circleNode:hover .circle {
  border-width: 1.8px;
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--node-border, #4d9fff) 25%, transparent),
    0 0 30px var(--node-glow, rgba(77,159,255,0.55)),
    0 0 60px color-mix(in srgb, var(--node-glow, rgba(77,159,255,0.2)) 40%, transparent),
    inset 0 0 16px color-mix(in srgb, var(--node-glow, rgba(77,159,255,0.12)) 40%, transparent);
}

.circleLabel {
  font: 600 10px var(--nm-font-display);
  color: var(--node-text, #4d9fff);
  text-align: center;
  letter-spacing: 0.04em;
  line-height: 1.15;
  padding: 0 6px;
  text-shadow: 0 0 8px color-mix(in srgb, var(--node-glow, rgba(77,159,255,0.4)) 60%, transparent);
}

/* ─── Focused state (panel sync) — cyan double bloom ─── */
.focused .circle {
  border-color: var(--nm-cyan);
  box-shadow:
    0 0 0 2px rgba(0, 255, 242, 0.5),
    0 0 28px rgba(0, 255, 242, 0.45),
    0 0 60px rgba(0, 255, 242, 0.18),
    inset 0 0 14px rgba(0, 255, 242, 0.1);
}

/* ─────────── Hexagonal Nodes (secondary) ─────────── */

.hexNode {
  position: relative;
}

.hexNode::before {
  content: '';
  position: absolute;
  inset: -3px;
  clip-path: polygon(50% 2%, 93% 25%, 93% 75%, 50% 98%, 7% 75%, 7% 25%);
  background: linear-gradient(135deg, var(--nm-violet), rgba(167, 139, 250, 0.3));
  z-index: -1;
  transition: opacity 0.3s;
}

.hexNode::after {
  content: '';
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.18), transparent 65%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: -2;
}

.hexNode:hover::after {
  opacity: 1;
}

.hex {
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 2%, 93% 25%, 93% 75%, 50% 98%, 7% 75%, 7% 25%);
  background: rgba(167, 139, 250, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hexNode:hover {
  transform: scale(1.15) rotate(5deg);
}

.hexLabel {
  font: 600 9px var(--nm-font-display);
  color: var(--nm-violet);
  text-align: center;
  letter-spacing: 0.03em;
  line-height: 1.15;
  padding: 0 4px;
}

.focused .hex {
  box-shadow: 0 0 0 2px rgba(0, 255, 242, 0.5), 0 0 24px rgba(0, 255, 242, 0.2);
}

/* ─── Label below node ─── */
.nodeLabel {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  font: 500 9px var(--nm-font-mono);
  white-space: nowrap;
  color: var(--nm-txt-2);
  pointer-events: none;
  transition: color 0.3s;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.04em;
}

.labelSmall {
  font-size: 8px;
  bottom: -16px;
  max-width: 70px;
  color: var(--nm-txt-3);
}

.node:hover .nodeLabel {
  color: var(--nm-txt-1);
}

/* ─── Typing cursor ─── */
.cursor {
  display: inline-block;
  width: 1px;
  height: 1em;
  background: var(--nm-neon);
  margin-left: 1px;
  vertical-align: text-bottom;
  box-shadow: 0 0 4px var(--nm-neon);
  animation: cursorBlink 0.6s step-end infinite;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* ─── Constellation mode (hop 3+) ─── */
.constellation {
  transition: opacity 0.5s ease, transform 0.3s;
}
.constellation:hover {
  transform: scale(1.8);
  opacity: 0.9 !important;
  z-index: 12;
}
.constellationDot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(200, 220, 255, 0.35);
  background: rgba(200, 220, 255, 0.08);
  box-shadow: 0 0 6px rgba(200, 220, 255, 0.2);
  opacity: 0.4;
  transition: opacity 0.3s, box-shadow 0.3s;
}
.constellation:hover .constellationDot {
  opacity: 1;
  box-shadow: 0 0 14px rgba(200, 220, 255, 0.5);
}

/* ─── Highlight sync (panel hover) ─── */
.highlighted {
  z-index: 15 !important;
  opacity: 1 !important;
  transform: scale(1.2);
}
.highlighted .circle {
  box-shadow:
    0 0 0 2px rgba(0, 255, 242, 0.5),
    0 0 25px rgba(0, 255, 242, 0.35);
}
.highlighted .hex {
  box-shadow: 0 0 0 2px rgba(0, 255, 242, 0.5), 0 0 25px rgba(0, 255, 242, 0.2);
}
.highlighted .constellationDot {
  opacity: 1;
  box-shadow: 0 0 0 2px rgba(0, 255, 242, 0.5), 0 0 18px rgba(0, 255, 242, 0.25);
}
```

- [ ] **Step 2: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/KnowledgeGraph/GraphNode.module.css
git commit -m "feat(ui): node-system exact styles — gold center rings, relation colors, hex borders"
```

---

## Task 9: KnowledgeGraph — edge rendering, engineering grid, remove nebula/particles

**Files:**
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`

**Purpose:** Update edge stroke widths/dash patterns/glow filters to match the node-system. Replace the nebula blobs and floating particles with a faint engineering grid. Keep the starfield and shooting stars. Update the SVG filter definitions.

- [ ] **Step 1: Update edge rendering in KnowledgeGraph.jsx**

In `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`, find the `renderedEdges` useMemo (around line 283). Replace the entire block from `let strokeWidth, strokeOpacity, dashArray, edgeColor;` (line 328) through the `return (` of the edge JSX (up to the closing `</g>` on line 369) with this updated edge rendering:

```jsx
      let strokeWidth, strokeOpacity, dashArray, edgeColor, glowStd;
      edgeColor = isTrail ? '#ffaa40' : color;
      glowStd = 0;
      if (isTrail) {
        strokeWidth = isIndirectTrail ? 2.8 : 2.2;
        strokeOpacity = isIndirectTrail ? 0.85 : 0.9;
        dashArray = isIndirectTrail ? '6 4' : 'none';
        glowStd = isIndirectTrail ? 2.5 : 2.2;
      } else if (maxHop >= 3) {
        strokeWidth = 0.5;
        strokeOpacity = 0.08;
        dashArray = 'none';
      } else if (maxHop >= 2) {
        strokeWidth = 0.8;
        strokeOpacity = 0.4;
        dashArray = 'none';
      } else if (isActiveEdge) {
        strokeWidth = 1.6;
        strokeOpacity = 0.85;
        dashArray = 'none';
        glowStd = 1.8;
      } else {
        strokeWidth = isSecondary ? 1 : 1.2;
        strokeOpacity = isSecondary ? 0.55 : 0.5;
        dashArray = isSecondary ? '2 4' : 'none';
      }

      return (
        <g key={`${edge.source}-${edge.target}-${i}`} className={styles.edgeGroup}>
          {/* Glow layer — only for trail edges and active connections */}
          {glowStd > 0 && (
            <path d={path} fill="none" stroke={edgeColor}
              strokeWidth={strokeWidth + (isTrail ? 1.2 : 0.6)}
              opacity={isTrail ? 0.55 : 0.45}
              filter={`url(#edgeGlow)`} />
          )}
          {/* Main edge */}
          <path d={path} fill="none" stroke={edgeColor}
            strokeWidth={strokeWidth} opacity={strokeOpacity}
            strokeLinecap="round" strokeDasharray={dashArray}
            filter={glowStd > 0 ? 'url(#neonGlow)' : 'none'} />
        </g>
      );
```

- [ ] **Step 2: Update SVG filter definitions in KnowledgeGraph.jsx**

In `KnowledgeGraph.jsx`, find the `<defs>` block inside the SVG (around line 462-471). Replace it with:

```jsx
          <defs>
            <filter id="edgeGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feComposite in="blur" in2="SourceGraphic" operator="over" />
            </filter>
          </defs>
```

- [ ] **Step 3: Remove nebula and floating particles from the JSX**

In `KnowledgeGraph.jsx`, in the return JSX, find and **remove** these blocks:

1. The nebula section (around lines 419-423):
```jsx
      {/* Subtle ambient nebula */}
      <div className={styles.nebula}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>
```

2. The floating particles section (around lines 426-437):
```jsx
      {/* Floating particles */}
      <div className={styles.particles}>
        ...
      </div>
```

3. Replace the `KNOWLEDGE GRAPH` label (line 439) with:
```jsx
      <div className={styles.label}><span className={styles.labelIdx}>K-GRAPH</span> KNOWLEDGE FIELD</div>
```

- [ ] **Step 4: Update KnowledgeGraph.module.css**

In `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`, replace the container background and remove nebula/particle styles. Replace the entire file contents with:

```css
/* ─── Container ─── */
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--nm-ink);
  outline: none;
}

/* ─── Engineering grid ─── */
.container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 56px 56px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse 80% 70% at 60% 45%, #000 20%, transparent 80%);
  z-index: 0;
}

/* ─── Vignette ─── */
.vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    ellipse at center,
    transparent 25%,
    rgba(0, 0, 0, 0.45) 75%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

/* ─── Faint neon glow at center ─── */
.container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0, 255, 198, 0.035) 0%, transparent 55%);
  pointer-events: none;
  z-index: 0;
}

/* ─── Empty state ─── */
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 12px;
}

.emptyText {
  font: 300 13px var(--nm-font-display);
  color: var(--nm-txt-3);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ─── Corner label ─── */
.label {
  position: absolute;
  top: 16px;
  left: 22px;
  font: 500 9px var(--nm-font-display);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--nm-txt-2);
  z-index: 10;
  pointer-events: none;
}

.labelIdx {
  color: var(--nm-neon);
  font-family: var(--nm-font-mono);
  letter-spacing: 0.1em;
  margin-right: 8px;
}

.hint {
  position: absolute;
  top: 40px;
  right: 22px;
  font: 400 9px var(--nm-font-mono);
  color: var(--nm-txt-3);
  z-index: 10;
  letter-spacing: 0.03em;
  pointer-events: none;
}

/* ─── Canvas ─── */
.canvas {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 5;
}

.svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* ─── Edge interactions ─── */
.edgeGroup {
  pointer-events: stroke;
  cursor: default;
}

.edgeGroup:hover path {
  stroke-opacity: 0.8;
}

/* ─── Starfield ─── */
.starfield {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.star {
  position: absolute;
  background: rgba(220, 230, 245, 0.8);
  border-radius: 50%;
  animation: twinkle var(--dur, 4s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

@keyframes twinkle {
  0%, 100% { opacity: var(--min-op, 0.05); }
  50% { opacity: var(--max-op, 0.4); }
}

/* ─── Shooting stars ─── */
.shootingStar {
  position: absolute;
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, rgba(200, 220, 255, 0.6), transparent);
  animation: shoot var(--dur, 1.5s) linear forwards;
  transform-origin: left center;
  opacity: 0;
}

@keyframes shoot {
  0% { transform: translateX(0) rotate(var(--angle, -30deg)); opacity: 0; }
  10% { opacity: 0.7; }
  100% { transform: translateX(600px) rotate(var(--angle, -30deg)); opacity: 0; }
}

/* ─── Jump pulse ring ─── */
.jumpPulse {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 2px solid var(--nm-neon);
  transform: translate(-50%, -50%);
  animation: jumpRing 0.8s ease-out forwards;
  pointer-events: none;
  z-index: 5;
  box-shadow: 0 0 15px var(--nm-neon-g);
}

@keyframes jumpRing {
  0% { width: 0; height: 0; opacity: 0.7; border-width: 2px; }
  100% { width: 500px; height: 500px; opacity: 0; border-width: 1px; }
}

/* ─── Focus mode toggle ─── */
.focusBtn {
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 30;
  padding: 6px 14px;
  font: 500 9px var(--nm-font-display);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--nm-txt-2);
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--nm-hair-2);
  cursor: pointer;
  transition: all 0.2s;
}
.focusBtn:hover {
  color: var(--nm-neon);
  border-color: var(--nm-neon);
}

/* ─── Hover tooltip ─── */
.hoverTooltip {
  position: absolute;
  max-width: 220px;
  padding: 8px 12px;
  background: rgba(5, 5, 7, 0.95);
  border: 1px solid var(--nm-hair-2);
  font: 400 10px var(--nm-font-mono);
  color: var(--nm-txt-2);
  line-height: 1.5;
  pointer-events: none;
  z-index: 15;
  white-space: normal;
  animation: tooltipFadeIn 0.15s ease;
  letter-spacing: 0.02em;
}
@keyframes tooltipFadeIn {
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
```

- [ ] **Step 5: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/KnowledgeGraph/KnowledgeGraph.jsx client/src/components/KnowledgeGraph/KnowledgeGraph.module.css
git commit -m "feat(ui): node-system edge rendering, engineering grid, remove nebula/particles"
```

---

## Task 10: GraphChrome — viewfinder ticks, crosshairs, vertical control tab

**Files:**
- Create: `client/src/components/KnowledgeGraph/GraphChrome.jsx`
- Create: `client/src/components/KnowledgeGraph/GraphChrome.module.css`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`

**Purpose:** Add the operator-console graph chrome: viewfinder corner ticks on the graph frame, crosshair lines at center, and a vertical control tab on the right edge (zoom +/-, focus toggle, reset). Then import and render `GraphChrome` inside `KnowledgeGraph`.

- [ ] **Step 1: Create GraphChrome.jsx**

Create `client/src/components/KnowledgeGraph/GraphChrome.jsx` with:

```jsx
import { useExplorer } from '../../context/ExplorerContext';
import styles from './GraphChrome.module.css';

export default function GraphChrome({ nodeCount, edgeCount }) {
  const { focusMode, toggleFocus, trail, trailIndex } = useExplorer();
  const hopCount = trailIndex + 1;

  return (
    <>
      {/* Viewfinder corner ticks */}
      <div className={`${styles.tick} ${styles.tl}`} />
      <div className={`${styles.tick} ${styles.tr}`} />
      <div className={`${styles.tick} ${styles.bl}`} />
      <div className={`${styles.tick} ${styles.br}`} />

      {/* Crosshairs at center */}
      <div className={styles.crossV} />
      <div className={styles.crossH} />

      {/* Vertical control tab */}
      <div className={styles.controls}>
        <button className={`${styles.ctrl} ${focusMode ? styles.ctrlActive : ''}`} onClick={toggleFocus} title={focusMode ? 'Show all' : 'Focus'}>
          ◉
        </button>
      </div>

      {/* Graph header label */}
      <div className={styles.ghead}>
        <span className={styles.gheadIdx}>K-GRAPH</span>
        KNOWLEDGE FIELD
      </div>
    </>
  );
}
```

- [ ] **Step 2: Create GraphChrome.module.css**

Create `client/src/components/KnowledgeGraph/GraphChrome.module.css` with:

```css
/* ── Viewfinder corner ticks ── */
.tick {
  position: absolute;
  width: 14px;
  height: 14px;
  pointer-events: none;
  z-index: 8;
}

.tl { top: 0; left: 0; border-left: 1.5px solid var(--nm-neon); border-top: 1.5px solid var(--nm-neon); }
.tr { top: 0; right: 0; border-right: 1.5px solid var(--nm-neon); border-top: 1.5px solid var(--nm-neon); }
.bl { bottom: 0; left: 0; border-left: 1.5px solid var(--nm-neon); border-bottom: 1.5px solid var(--nm-neon); }
.br { bottom: 0; right: 0; border-right: 1.5px solid var(--nm-neon); border-bottom: 1.5px solid var(--nm-neon); }

/* ── Crosshairs ── */
.crossV {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--nm-hair);
  pointer-events: none;
  z-index: 2;
}

.crossH {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--nm-hair);
  pointer-events: none;
  z-index: 2;
}

/* ── Vertical control tab ── */
.controls {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1px;
  z-index: 20;
}

.ctrl {
  width: 32px;
  height: 32px;
  border: 1px solid var(--nm-hair-2);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--nm-txt-2);
  font: 500 13px var(--nm-font-mono);
  cursor: pointer;
  transition: all 0.2s;
}

.ctrl:hover {
  color: var(--nm-neon);
  border-color: var(--nm-neon);
}

.ctrlActive {
  color: var(--nm-neon);
  border-color: var(--nm-neon);
  background: rgba(0, 255, 198, 0.06);
}

/* ── Graph header label ── */
.ghead {
  position: absolute;
  top: 16px;
  left: 22px;
  font: 500 9px var(--nm-font-display);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--nm-txt-2);
  z-index: 10;
  pointer-events: none;
}

.gheadIdx {
  color: var(--nm-neon);
  font-family: var(--nm-font-mono);
  letter-spacing: 0.1em;
  margin-right: 8px;
}
```

- [ ] **Step 3: Import and render GraphChrome inside KnowledgeGraph.jsx**

In `KnowledgeGraph.jsx`, add the import at the top (after the other imports, around line 7):

```jsx
import GraphChrome from './GraphChrome';
```

Then in the return JSX, **remove** the existing `.label` div (the one we updated in Task 9 step 3) and the `.focusBtn` button. Replace them with:

```jsx
      <GraphChrome
        nodeCount={graphData?.nodes?.length || 0}
        edgeCount={graphData?.edges?.length || 0}
      />
```

Place this right after the `<div className={styles.vignette} />` line.

- [ ] **Step 4: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/KnowledgeGraph/GraphChrome.jsx client/src/components/KnowledgeGraph/GraphChrome.module.css client/src/components/KnowledgeGraph/KnowledgeGraph.jsx
git commit -m "feat(ui): graph chrome — viewfinder ticks, crosshairs, vertical control tab"
```

---

## Task 11: PreviewPopover + NodeDetailOverlay — operator-console restyle

**Files:**
- Modify: `client/src/components/KnowledgeGraph/PreviewPopover.module.css`
- Modify: `client/src/components/KnowledgeGraph/NodeDetailOverlay.module.css`

**Purpose:** Restyle both overlays to match the operator-console aesthetic: no rounded corners, hairline borders, Unbounded/JetBrains Mono fonts, neon mint accent.

- [ ] **Step 1: Replace PreviewPopover.module.css**

Replace the entire contents of `client/src/components/KnowledgeGraph/PreviewPopover.module.css` with:

```css
.popover {
  position: absolute;
  z-index: 20;
  width: 280px;
  background: rgba(5, 5, 7, 0.96);
  border: 1px solid var(--nm-hair-2);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  backdrop-filter: blur(12px);
  animation: popIn 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.94) translateY(4px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.header {
  padding: 14px 16px 10px;
  border-bottom: 1px solid var(--nm-hair);
}

.category {
  font: 500 8px var(--nm-font-display);
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: var(--nm-neon);
  margin-bottom: 6px;
}

.title {
  font: 500 14px var(--nm-font-display);
  color: var(--nm-txt-1);
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.summary {
  font: 400 10px var(--nm-font-mono);
  color: var(--nm-txt-2);
  line-height: 1.6;
  letter-spacing: 0.02em;
}

.actions {
  padding: 10px 16px;
  display: flex;
  gap: 6px;
}

.jumpBtn {
  flex: 1;
  padding: 9px;
  font: 500 10px var(--nm-font-display);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--nm-neon);
  background: rgba(0, 255, 198, 0.04);
  color: var(--nm-neon);
  transition: all 0.2s;
}

.jumpBtn:hover {
  background: var(--nm-neon);
  color: var(--nm-void);
}

.expandBtn {
  flex: 1;
  padding: 9px;
  font: 500 10px var(--nm-font-display);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--nm-hair-2);
  background: transparent;
  color: var(--nm-txt-2);
  transition: all 0.2s;
}

.expandBtn:hover {
  border-color: var(--nm-txt-1);
  color: var(--nm-txt-1);
}

.dismissBtn {
  padding: 9px 14px;
  font: 400 12px var(--nm-font-mono);
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--nm-hair);
  color: var(--nm-txt-3);
  transition: all 0.2s;
}

.dismissBtn:hover {
  border-color: var(--nm-hair-3);
  color: var(--nm-txt-2);
}
```

- [ ] **Step 2: Replace NodeDetailOverlay.module.css**

Read `client/src/components/KnowledgeGraph/NodeDetailOverlay.module.css` first, then replace its entire contents with:

```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;
  backdrop-filter: blur(8px);
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.card {
  width: 560px;
  max-height: 80vh;
  background: var(--nm-ink);
  border: 1px solid var(--nm-hair-2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.top {
  padding: 24px 28px;
  border-bottom: 1px solid var(--nm-hair);
}

.category {
  font: 500 8px var(--nm-font-display);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--nm-neon);
  margin-bottom: 8px;
}

.title {
  font: 500 22px var(--nm-font-display);
  color: var(--nm-txt-1);
  letter-spacing: -0.01em;
}

.imageWrap {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  filter: saturate(0.8);
}

.imageOverlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(transparent, var(--nm-ink));
}

.body {
  padding: 20px 28px;
  overflow-y: auto;
  flex: 1;
}

.extract {
  font: 300 12px/1.7 var(--nm-font-mono);
  color: var(--nm-txt-2);
  letter-spacing: 0.005em;
}

.summary {
  font: 400 13px/1.6 var(--nm-font-display);
  color: var(--nm-txt-1);
  margin-bottom: 16px;
}

.actions {
  padding: 16px 28px;
  display: flex;
  gap: 8px;
  border-top: 1px solid var(--nm-hair);
}

.jumpBtn {
  flex: 1;
  padding: 14px;
  font: 500 11px var(--nm-font-display);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--nm-neon);
  background: rgba(0, 255, 198, 0.04);
  color: var(--nm-neon);
  transition: all 0.2s;
}

.jumpBtn:hover {
  background: var(--nm-neon);
  color: var(--nm-void);
  box-shadow: 0 0 30px var(--nm-neon-g);
}

.closeBtn {
  flex: 1;
  padding: 14px;
  font: 500 11px var(--nm-font-display);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--nm-hair-2);
  background: transparent;
  color: var(--nm-txt-2);
  transition: all 0.2s;
}

.closeBtn:hover {
  color: var(--nm-txt-1);
  border-color: var(--nm-txt-1);
}

.spinner {
  width: 28px;
  height: 28px;
  border: 2px solid var(--nm-hair-2);
  border-top-color: var(--nm-neon);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 40px auto;
}

@keyframes spin { to { transform: rotate(360deg); } }
```

- [ ] **Step 3: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/KnowledgeGraph/PreviewPopover.module.css client/src/components/KnowledgeGraph/NodeDetailOverlay.module.css
git commit -m "feat(ui): operator-console restyle for preview popover and detail overlay"
```

---

## Task 12: StatusBar — bottom flight-instrument bar

**Files:**
- Create: `client/src/components/StatusBar/StatusBar.jsx`
- Create: `client/src/components/StatusBar/StatusBar.module.css`

**Purpose:** Add a 36px bottom status bar that displays live session data in JetBrains Mono: STATUS (live dot), NODES count, EDGES count, HOPS count, CURSOR position (mock), ZOOM level (mock), SESSION elapsed time.

- [ ] **Step 1: Create StatusBar.jsx**

Create `client/src/components/StatusBar/StatusBar.jsx` with:

```jsx
import { useState, useEffect } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './StatusBar.module.css';

export default function StatusBar() {
  const { graphData, trail, trailIndex } = useExplorer();
  const [elapsed, setElapsed] = useState('00:00:00');

  useEffect(() => {
    if (trail.length === 0) return;
    const start = trail[0].timestamp;
    const tick = () => {
      const ms = Date.now() - start;
      const s = Math.floor(ms / 1000) % 60;
      const m = Math.floor(ms / 60000) % 60;
      const h = Math.floor(ms / 3600000);
      setElapsed(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [trail.length > 0 ? trail[0].timestamp : 0]);

  const nodeCount = graphData?.nodes?.length || 0;
  const edgeCount = graphData?.edges?.length || 0;
  const hops = trailIndex + 1;

  return (
    <div className={styles.bar}>
      <div className={styles.grp}>
        <div className={styles.cell}>
          <span className={styles.live} />
          <span className={styles.k}>Status</span>
          <span className={`${styles.v} ${styles.neon}`}>OPERATIONAL</span>
        </div>
        <div className={styles.cell}>
          <span className={styles.k}>Nodes</span>
          <span className={styles.v}>{nodeCount}</span>
        </div>
        <div className={styles.cell}>
          <span className={styles.k}>Edges</span>
          <span className={styles.v}>{edgeCount}</span>
        </div>
        <div className={styles.cell}>
          <span className={styles.k}>Hops</span>
          <span className={`${styles.v} ${styles.neon}`}>{String(hops).padStart(2, '0')}</span>
        </div>
      </div>
      <div className={styles.grp}>
        <div className={styles.cell}>
          <span className={styles.k}>Zoom</span>
          <span className={styles.v}>1.00x</span>
        </div>
        <div className={styles.cell}>
          <span className={styles.k}>Session</span>
          <span className={styles.v}>{elapsed}</span>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create StatusBar.module.css**

Create `client/src/components/StatusBar/StatusBar.module.css` with:

```css
.bar {
  height: var(--nm-statusbar-height);
  border-top: 1px solid var(--nm-hair);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 44px;
  font: 400 10px var(--nm-font-mono);
  color: var(--nm-txt-2);
  letter-spacing: 0.06em;
  background: var(--nm-void);
  z-index: 10;
  position: relative;
}

.grp {
  display: flex;
  align-items: center;
  gap: 28px;
}

.cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.k {
  color: var(--nm-txt-3);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 9px;
}

.v {
  color: var(--nm-txt-1);
}

.neon {
  color: var(--nm-neon);
}

.live {
  width: 6px;
  height: 6px;
  background: var(--nm-neon);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--nm-neon);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  50% { opacity: 0.4; }
}
```

- [ ] **Step 3: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/StatusBar/StatusBar.jsx client/src/components/StatusBar/StatusBar.module.css
git commit -m "feat(ui): bottom status bar with live session data"
```

---

## Task 13: TrailSidebar + JourneyOverlay — operator-console restyle

**Files:**
- Modify: `client/src/components/TrailSidebar/TrailSidebar.module.css`
- Modify: `client/src/components/JourneyOverlay/JourneyOverlay.module.css`

**Purpose:** Restyle both overlays to match the operator-console aesthetic: no rounded corners, neon mint accent instead of cyan, Unbounded/JetBrains Mono fonts.

- [ ] **Step 1: Replace TrailSidebar.module.css**

Replace the entire contents of `client/src/components/TrailSidebar/TrailSidebar.module.css` with:

```css
.sidebar {
  position: absolute; top: 0; right: 0; bottom: 0; width: 280px;
  background: rgba(0, 0, 0, 0.97);
  border-left: 1px solid var(--nm-hair);
  z-index: 30; padding: 20px; overflow-y: auto;
  backdrop-filter: blur(12px);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

.header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }

.title {
  font: 500 12px var(--nm-font-display);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--nm-txt-1);
}

.close {
  width: 28px; height: 28px;
  background: transparent;
  border: 1px solid var(--nm-hair-2);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--nm-txt-3); font: 400 13px var(--nm-font-mono);
  transition: all 0.2s;
}

.close:hover { color: var(--nm-neon); border-color: var(--nm-neon); }

.stats { display: flex; gap: 6px; margin-bottom: 18px; }

.stat {
  flex: 1; background: transparent;
  border: 1px solid var(--nm-hair); padding: 8px; text-align: center;
}

.statVal { font: 600 18px var(--nm-font-mono); color: var(--nm-neon); }
.statLabel { font: 400 8px var(--nm-font-display); color: var(--nm-txt-3); text-transform: uppercase; letter-spacing: 0.18em; margin-top: 2px; }

.trail { position: relative; padding-left: 20px; }
.trail::before { content: ''; position: absolute; left: 12px; top: 8px; bottom: 8px; width: 1.5px; background: var(--nm-hair-2); }

.item { position: relative; padding: 6px 0 18px; display: flex; gap: 10px; }

.dot {
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font: 700 8px var(--nm-font-mono); flex-shrink: 0; margin-top: 2px;
}

.dotVisited { background: transparent; border: 1.5px solid var(--nm-hair-3); color: var(--nm-txt-2); }
.dotCurrent { background: rgba(0, 255, 198, 0.06); border: 2px solid var(--nm-neon); color: var(--nm-neon); box-shadow: 0 0 10px var(--nm-neon-g); }

.itemTitle { font: 500 12px var(--nm-font-display); color: var(--nm-txt-1); letter-spacing: 0.04em; }
.meta { font: 400 9px var(--nm-font-mono); color: var(--nm-txt-3); margin-top: 2px; }

.back {
  margin-top: 3px; font: 400 9px var(--nm-font-mono); color: var(--nm-neon-d);
  cursor: pointer; opacity: 0; transition: opacity 0.2s;
}

.item:hover .back { opacity: 1; }
```

- [ ] **Step 2: Replace JourneyOverlay.module.css**

Replace the entire contents of `client/src/components/JourneyOverlay/JourneyOverlay.module.css` with:

```css
.overlay {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.94);
  z-index: 200; display: flex; align-items: center; justify-content: center;
  animation: fadeIn 0.2s ease;
  backdrop-filter: blur(8px);
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.card {
  width: 700px; max-height: 80vh;
  background: var(--nm-ink);
  border: 1px solid var(--nm-hair-2);
  overflow: hidden;
}

.top {
  padding: 24px 28px 18px;
  border-bottom: 1px solid var(--nm-hair);
}

.top h2 { font: 500 16px var(--nm-font-display); color: var(--nm-txt-1); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 4px; }
.top p { font: 400 11px var(--nm-font-mono); color: var(--nm-txt-3); }

.graph {
  padding: 24px 28px; display: flex; align-items: center; justify-content: center;
  flex-wrap: wrap; gap: 0; overflow-x: auto;
}

.pathWrap { display: flex; align-items: center; }

.arrow { font: 400 14px var(--nm-font-mono); color: var(--nm-txt-3); padding: 0 4px; margin-top: -16px; }

.node { display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 6px; }

.circle {
  width: 52px; height: 52px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font: 700 9px var(--nm-font-display); text-align: center; letter-spacing: 0.06em;
  cursor: pointer; transition: transform 0.2s;
}

.circle:hover { transform: scale(1.1); }

.start { background: transparent; border: 2px solid var(--nm-neon); color: var(--nm-neon); }
.mid { background: transparent; border: 1.5px solid var(--nm-hair-3); color: var(--nm-txt-2); }
.end { background: transparent; border: 2px solid var(--nm-gold); color: var(--nm-gold); }

.nodeLabel { font: 400 9px var(--nm-font-mono); color: var(--nm-txt-3); max-width: 72px; text-align: center; line-height: 1.3; }

.statsRow { display: flex; gap: 1px; padding: 0 28px 20px; background: transparent; }

.stat {
  flex: 1; background: transparent;
  border: 1px solid var(--nm-hair); padding: 12px; text-align: center;
}

.statVal { font: 600 22px var(--nm-font-mono); color: var(--nm-neon); }
.statLabel { font: 400 9px var(--nm-font-display); color: var(--nm-txt-3); text-transform: uppercase; letter-spacing: 0.18em; margin-top: 2px; }

.closeBtn {
  display: block; margin: 0 28px 20px; padding: 12px; width: calc(100% - 56px);
  background: transparent;
  border: 1px solid var(--nm-hair-2);
  color: var(--nm-txt-2); font: 500 10px var(--nm-font-display);
  letter-spacing: 0.22em; text-transform: uppercase;
  cursor: pointer; text-align: center;
  transition: all 0.2s;
}

.closeBtn:hover { color: var(--nm-neon); border-color: var(--nm-neon); }
```

- [ ] **Step 3: Verify build and commit**

```bash
cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build
```

```bash
git add client/src/components/TrailSidebar/TrailSidebar.module.css client/src/components/JourneyOverlay/JourneyOverlay.module.css
git commit -m "feat(ui): operator-console restyle for trail sidebar and journey overlay"
```

---

## Task 14: App shell — viewfinder corners, StatusBar, layout

**Files:**
- Modify: `client/src/App.jsx`

**Purpose:** Add viewfinder corner brackets to the outer shell, import and render `StatusBar` at the bottom, and ensure the overall layout accounts for the 64px topbar + 36px status bar.

- [ ] **Step 1: Read current App.jsx**

Read `client/src/App.jsx` to understand the current layout structure.

- [ ] **Step 2: Update App.jsx**

Add the StatusBar import at the top:

```jsx
import StatusBar from './components/StatusBar/StatusBar';
```

Add the StatusBar component after the main body `</div>` and before the closing shell wrapper. Also add viewfinder corner bracket divs to the outermost shell. The exact changes depend on the current App.jsx structure — but the goal is:

1. The outer shell div gets `position: relative` and `overflow: hidden`
2. Four viewfinder corner divs (position: absolute, 22x22px, neon borders) at corners with 12px offset
3. The body area height is `calc(100vh - var(--nm-topbar-height) - var(--nm-statusbar-height))`
4. `<StatusBar />` renders at the bottom

Style the viewfinder corners inline or add them to a small CSS block:

```css
/* Viewfinder brackets — add to globals.css or a shell stylesheet */
.viewfinder { position: absolute; width: 22px; height: 22px; pointer-events: none; z-index: 5; }
.viewfinder.tl { top: 12px; left: 12px; border-left: 1.5px solid var(--nm-neon); border-top: 1.5px solid var(--nm-neon); }
.viewfinder.tr { top: 12px; right: 12px; border-right: 1.5px solid var(--nm-neon); border-top: 1.5px solid var(--nm-neon); }
.viewfinder.bl { bottom: 12px; left: 12px; border-left: 1.5px solid var(--nm-neon); border-bottom: 1.5px solid var(--nm-neon); }
.viewfinder.br { bottom: 12px; right: 12px; border-right: 1.5px solid var(--nm-neon); border-bottom: 1.5px solid var(--nm-neon); }
```

- [ ] **Step 3: Verify build and full visual test**

Run: `cd "c:/Users/revaa/AI Projects/Wiki_Loop/client" && npm run build`

Then do a full visual check:
1. Open `http://localhost:5173`
2. Search "Quantum mechanics"
3. Verify: Viewfinder corners visible at shell edges
4. Verify: Status bar shows at bottom with live data
5. Verify: Topbar has neon dot, `/` search, uppercase nav
6. Verify: Left panel has floating title with Instrument Serif accent
7. Verify: Graph has engineering grid, crosshairs, viewfinder ticks
8. Verify: Nodes match node-system sizes and colors
9. Verify: Edges have correct widths and glow
10. Click a node, verify popover works
11. Open Trail sidebar, verify styling
12. Open Journey overlay, verify styling

- [ ] **Step 4: Commit**

```bash
git add client/src/App.jsx client/src/styles/globals.css
git commit -m "feat(ui): app shell viewfinder corners and status bar integration"
```

---

## Self-Review Checklist

**1. Spec coverage:**
- [x] Font swap: Unbounded replaces Outfit (Task 1)
- [x] Color system: Pure black canvas, mint-cyan accent (Task 1)
- [x] Topbar: Neon dot logo, letter-spaced, `/` search, `⌘ K`, uppercase nav (Task 2)
- [x] Floating typography panel: No card boxes (Task 3)
- [x] Eyebrow row + massive title + Instrument Serif accent (Task 4)
- [x] Monospace breadcrumb (Task 5)
- [x] Connected concepts list format (Task 6)
- [x] Node-system sizes and colors (Tasks 7-8)
- [x] Node-system edge rendering (Task 9)
- [x] Engineering grid background (Task 9)
- [x] Viewfinder ticks, crosshairs, control tab (Task 10)
- [x] Preview/Detail overlays (Task 11)
- [x] Bottom status bar (Task 12)
- [x] Trail + Journey restyle (Task 13)
- [x] Shell viewfinder corners (Task 14)

**2. Placeholder scan:** No TBDs, TODOs, or vague instructions found.

**3. Type consistency:** All variable names (`--nm-*`), font families (`var(--nm-font-display)`), and component names are consistent across all tasks.
