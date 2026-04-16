# Wiki Loop — Launcher UI Implementation

## What this file is
A self-contained implementation brief. Read it fully before touching any code.
This describes exactly what to build, what to leave alone, and why.

---

## Project context

**Stack:** React 18 + Vite, CSS Modules, d3-force, Node/Express backend on port 3001.  
**Run:** `npm run dev` from project root → client on `localhost:5173`, server on `localhost:3001`.  
**Design tokens** (already defined in `client/src/styles/globals.css`):
```
--bg-primary: #050810        (deep black, use as launcher background)
--neon-amber: #ffaa40        (gold — use for ALL launcher node borders/glows)
--neon-cyan:  #00fff2        (wiki hopper accent, already used for center node)
--neon-blue:  #4d9fff
--neon-purple:#8b5cf6
--font-display: 'Outfit'
--font-mono:   'JetBrains Mono'
```

---

## What to build

A **launcher screen** that replaces the current entry experience. The existing app
(`Topbar`, `ConceptPanel`, `KnowledgeGraph`, `TrailSidebar`, `JourneyOverlay`) is
**untouched and fully preserved**. The launcher sits in front of it and dissolves
away once a topic is submitted.

### Four states of the launcher

```
STATE 1 (idle)
  → black canvas, dot-grid bg, single gold node centred, soft pulse animation
  → click node → STATE 2

STATE 2 (selecting)
  → parent node dims (opacity ~0.4) and stays centred
  → two child nodes bloom outward: SW (left-bottom) = Skill Tree, SE (right-bottom) = Wiki Hopper
  → dashed connector lines from parent to each child
  → click either child → STATE 3, storing chosen mode

STATE 3 (prompting)
  → the unchosen child fades out; chosen child moves to top-centre (small)
  → input panel slides up: assistive text, textarea, Generate button
  → Enter or button click → call jumpTo(topic) → STATE 4

STATE 4 (active app)
  → launcher fades out (opacity 0 → display:none)
  → Topbar fades in
  → existing KnowledgeGraph + ConceptPanel + TrailSidebar appear normally
```

---

## Critical constraints — read carefully

### DO NOT CHANGE:
- `KnowledgeGraph.jsx` and all its sub-files (`GraphNode.jsx`, `useForceLayout.js`, `PreviewPopover.jsx`, `NodeDetailOverlay.jsx`) — zero modifications
- `ExplorerContext.jsx` — zero modifications
- `ConceptPanel/` — all files untouched
- `TrailSidebar/` and `JourneyOverlay/` — untouched
- `server/` — untouched
- `globals.css` — untouched
- Node visual style inside the graph — must remain identical to current

### MAY CHANGE:
- `App.jsx` — add launcher state, conditionally render launcher vs app
- `App.module.css` — add launcher layout rules
- `Topbar.jsx` / `Topbar.module.css` — add fade-in transition, hide when launcher active
- Add new files: `LauncherScreen.jsx` + `LauncherScreen.module.css`

---

## Node visual style for launcher nodes

**Copy the visual language of the existing center node** (from `GraphNode.jsx` and `KnowledgeGraph.module.css`) — do not invent new visuals. The launcher nodes must feel like they are part of the same universe as the graph nodes:

- **Gold outline:** `border: 2px solid var(--neon-amber)` with `border-radius: 50%`
- **Inner glow:** `box-shadow: 0 0 18px rgba(255,170,64,0.55), 0 0 50px rgba(255,170,64,0.18), inset 0 0 16px rgba(255,170,64,0.08)`
- **Background fill:** `background: radial-gradient(circle, rgba(255,170,64,0.12) 0%, transparent 70%)`
- **Pulse animation** (STATE 1 only):
  ```css
  @keyframes launcherPulse {
    0%, 100% { box-shadow: 0 0 18px rgba(255,170,64,0.55), 0 0 50px rgba(255,170,64,0.18), inset 0 0 16px rgba(255,170,64,0.08); }
    50%       { box-shadow: 0 0 28px rgba(255,170,64,0.75), 0 0 80px rgba(255,170,64,0.28), inset 0 0 24px rgba(255,170,64,0.12); }
  }
  animation: launcherPulse 2.8s ease-in-out infinite;
  ```
- **Hover:** scale to 1.08 + brighten glow (transition: transform 0.25s, box-shadow 0.25s)
- **Child nodes** (STATE 2): same style but 20% dimmer — reduce rgba alpha values by 0.2

### Background for launcher canvas
Reuse the existing graph background texture:
- Base: `var(--bg-primary)` (#050810)
- Dot grid: `background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: 30px 30px`
- Subtle radial nebula vignette centred: `radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,170,64,0.03) 0%, transparent 70%)`
- All layered via multiple `background` values or overlaid `::before` pseudo-element

---

## LauncherScreen component

### File: `client/src/components/LauncherScreen/LauncherScreen.jsx`

**Props:**
```js
{ onLaunch(mode, topic) }   // mode = 'wikihopper' | 'skilltree', topic = string
```

**Internal state:**
```js
const [phase, setPhase] = useState('idle');   // 'idle' | 'selecting' | 'prompting'
const [mode, setMode]   = useState(null);     // 'wikihopper' | 'skilltree'
const [topic, setTopic] = useState('');
```

**Behaviour:**
1. `idle` → click hero node → `setPhase('selecting')`
2. `selecting` → click child node → `setMode(choice); setPhase('prompting')`
3. `prompting` → type topic → press Enter or click Generate → `onLaunch(mode, topic)`

**Layout (all absolutely positioned within a 100vw × 100vh canvas):**

*STATE 1 (idle):*
- Hero node: 80px diameter, centred (`left: 50%; top: 50%; transform: translate(-50%, -50%)`)
- Tiny label inside (or just below): `WIKILOOP` in Outfit, 9px, letter-spacing 3px, gold at 60% opacity

*STATE 2 (selecting):*
- Parent: same position, dims to 40% opacity, shrinks to 48px (CSS transition 400ms ease)
- SW child: `left: calc(50% - 120px); top: calc(50% + 90px)` — 64px diameter
- SE child: `left: calc(50% + 120px); top: calc(50% + 90px)` — 64px diameter
- Both animate in: `opacity 0→1` + `transform: scale(0.4)→scale(1)` over 350ms ease-out with 80ms delay
- Dashed SVG lines from parent centre to each child centre, stroke `rgba(255,170,64,0.3)`, stroke-dasharray `4 4`
- Each child has a two-line label below it (10px, Outfit, gold 70%):
  - SW: `SKILL` / `TREE`
  - SE: `WIKI` / `HOPPER`

*STATE 3 (prompting):*
- Unchosen child fades out: `opacity 1→0` over 250ms, then `display:none`
- Chosen child moves to `left: 50%; top: 120px` (transition: left/top 400ms ease, width/height → 40px)
- Connector line fades out (250ms)
- Input panel fades+slides in from below: `opacity 0→1`, `translateY(30px)→translateY(0)` over 400ms
- Panel is centred, ~380px wide, containing:
  - Mode label (8px, letter-spacing 3px, gold 50%): e.g. `WIKI HOPPER MODE`
  - Assistive text (13px, `--text-secondary`): for wiki hopper: `"Enter a concept to explore — e.g. Quantum mechanics, Jazz, Byzantine Empire"` / for skill tree: `"Enter a topic or skill to map — e.g. Machine Learning, Music Theory, Photography"`
  - `<textarea>` (2 rows, resizable:none): gold border at 25% opacity, dark bg, gold placeholder text, full-width
  - Generate button: transparent bg, gold border at 50% opacity, `GENERATE` in letter-spacing 3px; shimmer sweep animation on hover; full-width

**Transitions summary:**
- All phase changes: CSS transitions only, no JS animation libraries
- Use `transition` on individual properties (`opacity`, `transform`, `width`, `height`, `left`, `top`)
- Never use `display:none` mid-transition — set opacity to 0 first, then after transition end set display:none via `onTransitionEnd` or a timeout matching the duration

---

## App.jsx changes

Add launcher state in `App.jsx` (not in context):

```jsx
const [launched, setLaunched] = useState(false);
const [appMode, setAppMode] = useState(null); // 'wikihopper' | 'skilltree'

function handleLaunch(mode, topic) {
  setAppMode(mode);
  setLaunched(true);
  // jumpTo is available via context — call it after launch
  // Use a wrapper component or pass jumpTo via prop drilling from a child
}
```

Because `jumpTo` is in the context, the cleanest approach is to make `LauncherScreen` sit **inside** `ExplorerProvider` so it can call `useExplorer().jumpTo` directly. Then `onLaunch` can be:
```jsx
function handleLaunch(mode, topic) {
  setAppMode(mode);
  setLaunched(true);
  jumpTo(topic);
}
```

**Render logic:**
```jsx
<ExplorerProvider>
  {/* Launcher: always mounted while !launched, fades out on launch */}
  <LauncherScreen onLaunch={handleLaunch} launched={launched} />

  {/* App shell: rendered but invisible until launched */}
  <div className={`${styles.app} ${launched ? styles.appVisible : styles.appHidden}`}>
    <Topbar />
    <div className={styles.main}>
      <div className={styles.leftPanel}><ConceptPanel /></div>
      <div className={styles.rightPanel}>
        <ErrorBoundary><KnowledgeGraph /></ErrorBoundary>
        <TrailSidebar />
      </div>
    </div>
  </div>
  <JourneyOverlay />
</ExplorerProvider>
```

Add to `App.module.css`:
```css
.appHidden {
  opacity: 0;
  pointer-events: none;
}
.appVisible {
  opacity: 1;
  transition: opacity 600ms ease 200ms; /* 200ms delay lets launcher fade first */
  pointer-events: all;
}
```

The `LauncherScreen` itself handles its own fade-out when `launched` prop becomes `true`:
- Watch `launched` prop; when it becomes true, start fade-out: `opacity 1→0` over 500ms
- After 500ms, set internal `hidden` state → render `null` or `display:none`

---

## Topbar changes

The Topbar should not flash visible during the launcher phase. It is already inside `.appHidden` which is `opacity:0 pointer-events:none`, so no Topbar changes are needed. Do not modify `Topbar.jsx` or `Topbar.module.css`.

---

## Skill tree mode vs Wiki hopper mode

For this implementation, **both modes use identical underlying behaviour** — they both call `jumpTo(topic)` and display the same KnowledgeGraph + ConceptPanel UI. The mode distinction is purely cosmetic at the launcher level (different assistive text, different node label). Do not attempt to build a separate skill tree graph data structure or API — that is out of scope for this task.

The `appMode` value is stored in `App.jsx` state in case future iterations need it. No component below `App.jsx` reads it yet.

---

## What NOT to do

- Do not modify any file inside `KnowledgeGraph/`
- Do not modify `ExplorerContext.jsx`
- Do not add new API endpoints or backend changes
- Do not add npm packages (no framer-motion, no gsap, no react-spring) — CSS transitions only
- Do not add emoji
- Do not show the Topbar until `launched === true`
- Do not build a real skill-tree graph algorithm — both modes call `jumpTo`
- Do not add a "back to launcher" button or route
- Do not use `react-router` — this is a single-page, single-route app

---

## File summary — only these files change

| File | Action |
|------|--------|
| `client/src/App.jsx` | Add `launched`/`appMode` state, render LauncherScreen, conditional visibility classes |
| `client/src/App.module.css` | Add `.appHidden` / `.appVisible` |
| `client/src/components/LauncherScreen/LauncherScreen.jsx` | New file — all launcher logic |
| `client/src/components/LauncherScreen/LauncherScreen.module.css` | New file — all launcher styles |

Everything else: **untouched**.

---

## Verification checklist (do these after implementing)

1. `npm run dev` → page loads as pure black canvas with single gold pulsing node
2. Click node → two children appear at SW/SE with dashed lines, parent dims
3. Click either child → other child fades, input panel appears
4. Type a topic, press Enter → launcher fades, graph loads, Topbar appears
5. KnowledgeGraph looks identical to how it looked before this change
6. No console errors on any state transition
7. Resizing window doesn't break node positions (use %, not px for launcher node positions)
