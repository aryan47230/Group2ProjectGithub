# Futuristic UI/UX Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement all 15 UI/UX improvements from Report 3 to make Wiki Loop more futuristic, immersive, and eye-catching.

**Architecture:** Pure CSS animations + minimal JSX additions. No new dependencies. All effects use CSS keyframes, pseudo-elements, CSS variables, and SVG filters. JSX changes are limited to adding wrapper elements for new visual layers and enhancing existing component markup.

**Tech Stack:** CSS Modules, CSS keyframes, SVG filters, React JSX

---

## File Map

| File | Changes |
|------|---------|
| `client/src/components/ConceptPanel/HeroCard.module.css` | UI-01: Hero image scanlines, chromatic aberration, height increase |
| `client/src/components/ConceptPanel/HeroCard.jsx` | UI-01: Add scanline overlay div + loading text |
| `client/src/components/KnowledgeGraph/GraphNode.module.css` | UI-02: Center node radar rings, particle emission, heartbeat pulse. UI-08: Hex node refinement, materialize animation. UI-09: Visited node ring indicator. UI-10: Trail node opacity adjustments |
| `client/src/components/KnowledgeGraph/GraphNode.jsx` | UI-02: Add radar ring elements. UI-08: Add vertex dots |
| `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css` | UI-03: Edge hover glow. UI-04: Starfield, color-shifting nebula, scanline overlay, shooting stars |
| `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx` | UI-03: Edge energy pulse on new connections. UI-04: Add starfield + shooting star elements. UI-15: Mini ambient data streams |
| `client/src/components/ConceptPanel/ConceptPanel.module.css` | UI-05: Glassmorphism panel, animated gradient border, corner brackets, glitch transition. UI-07: Enrich button pulsing glow, scan beam effect |
| `client/src/components/ConceptPanel/ConceptPanel.jsx` | UI-05: Add corner bracket elements. UI-07: Enrich state-based class toggling |
| `client/src/components/ConceptPanel/HeroCard.module.css` | UI-06: Fact chip data-terminal styling with blinking dots and monospace values |
| `client/src/components/Topbar/Topbar.module.css` | UI-12: Bottom accent line, hex badge hop counter, search scanning animation |
| `client/src/components/Topbar/Topbar.jsx` | UI-12: Hop counter badge markup |
| `client/src/components/KnowledgeGraph/PreviewPopover.module.css` | UI-14: Hover scan ring, glitch button hover |
| `client/src/components/ConceptPanel/ConnectedConcepts.module.css` | UI-14: Hologram flicker on card hover |
| `client/src/styles/globals.css` | UI-13: Global warp/pulse transition keyframes. UI-11: Cursor blink keyframe |

---

### Task 1: Hero Image Treatment (UI-01)

**Files:**
- Modify: `client/src/components/ConceptPanel/HeroCard.module.css`
- Modify: `client/src/components/ConceptPanel/HeroCard.jsx`

- [ ] **Step 1: Update hero image CSS — increase height, opacity, add scanline + chromatic aberration**

In `HeroCard.module.css`, replace the `.image` and `.img` rules:

```css
.image {
  width: 100%;
  height: 220px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.82;
  filter: saturate(0.85);
  transition: opacity 0.4s ease, filter 0.4s ease;
}

.image:hover .img {
  opacity: 1;
  filter: saturate(1) brightness(1.05);
}

/* Scanline overlay */
.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 212, 255, 0.03) 2px,
    rgba(0, 212, 255, 0.03) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* Chromatic aberration on hover */
.image:hover .img {
  animation: chromaShift 0.3s ease forwards;
}

@keyframes chromaShift {
  0% { filter: saturate(1) brightness(1.05); }
  30% { filter: saturate(1.2) brightness(1.1) hue-rotate(2deg); text-shadow: -2px 0 red, 2px 0 cyan; }
  100% { filter: saturate(1) brightness(1.05); }
}

/* Loading scan text */
.scanText {
  position: absolute;
  top: 10px;
  left: 12px;
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--accent-cyan);
  opacity: 0;
  z-index: 2;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  animation: scanTextIn 1.5s ease forwards;
}

@keyframes scanTextIn {
  0% { opacity: 0; }
  10% { opacity: 0.6; }
  70% { opacity: 0.6; }
  100% { opacity: 0; }
}
```

- [ ] **Step 2: Add scanline overlay and scan text to HeroCard.jsx**

In `HeroCard.jsx`, inside the `.image` div, add after the `<img>` tag:

```jsx
<div className={s.scanlines} />
{concept.image && <span className={s.scanText} key={concept.title}>SCANNING...</span>}
```

The `key={concept.title}` ensures the animation replays on each new concept.

- [ ] **Step 3: Verify visually — run dev server, search a concept, check hero image**

Run: `npm run dev` (if not already running)
Expected: Taller image (220px), scanlines visible, "SCANNING..." text fades in/out on load, chromatic shift on hover.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/ConceptPanel/HeroCard.module.css client/src/components/ConceptPanel/HeroCard.jsx
git commit -m "feat(ui-01): enhance hero image with scanlines, chromatic aberration, and scan text"
```

---

### Task 2: Center Node Visual Impact (UI-02)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.module.css`
- Modify: `client/src/components/KnowledgeGraph/GraphNode.jsx`

- [ ] **Step 1: Add radar rings and heartbeat pulse CSS**

In `GraphNode.module.css`, after the existing `.centerGlow` rules, add:

```css
/* Rotating radar rings */
.radarRing {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(0, 212, 255, 0.15);
  pointer-events: none;
}

.radarRing1 {
  inset: -20px;
  animation: radarSpin 12s linear infinite;
}

.radarRing2 {
  inset: -35px;
  border-style: dotted;
  animation: radarSpin 18s linear infinite reverse;
}

.radarRing3 {
  inset: -50px;
  border-style: dashed;
  border-color: rgba(0, 212, 255, 0.08);
  animation: radarSpin 25s linear infinite;
}

@keyframes radarSpin {
  to { transform: rotate(360deg); }
}

/* Particle emission from center */
.centerParticles {
  position: absolute;
  inset: -40px;
  pointer-events: none;
}

.centerParticle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--accent-cyan);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  animation: particleEmit 3s ease-out infinite;
}

.centerParticle:nth-child(2) { animation-delay: 0.5s; animation-duration: 3.5s; }
.centerParticle:nth-child(3) { animation-delay: 1s; animation-duration: 2.8s; }
.centerParticle:nth-child(4) { animation-delay: 1.5s; animation-duration: 3.2s; }
.centerParticle:nth-child(5) { animation-delay: 2s; animation-duration: 2.6s; }
.centerParticle:nth-child(6) { animation-delay: 2.5s; animation-duration: 3.8s; }

@keyframes particleEmit {
  0% { transform: translate(0, 0) scale(1); opacity: 0.7; }
  100% { transform: translate(var(--dx, 40px), var(--dy, -30px)) scale(0); opacity: 0; }
}
```

Replace the existing `glowPulse` keyframe with a heartbeat rhythm:

```css
@keyframes glowPulse {
  0% { opacity: 0.5; transform: scale(1); }
  15% { opacity: 1; transform: scale(1.1); }
  25% { opacity: 0.6; transform: scale(1.02); }
  35% { opacity: 0.95; transform: scale(1.08); }
  50% { opacity: 0.5; transform: scale(1); }
  100% { opacity: 0.5; transform: scale(1); }
}
```

- [ ] **Step 2: Add radar ring and particle elements to GraphNode.jsx**

In `GraphNode.jsx`, inside the center node render (the block that renders when `type === 'center'`), add after the `.centerGlow` div:

```jsx
<div className={s.radarRing + ' ' + s.radarRing1} />
<div className={s.radarRing + ' ' + s.radarRing2} />
<div className={s.radarRing + ' ' + s.radarRing3} />
<div className={s.centerParticles}>
  {[0,1,2,3,4,5].map(i => (
    <div key={i} className={s.centerParticle} style={{
      '--dx': `${Math.cos(i * 1.047) * 50}px`,
      '--dy': `${Math.sin(i * 1.047) * 50}px`,
    }} />
  ))}
</div>
```

- [ ] **Step 3: Verify visually**

Expected: Rotating dashed/dotted rings around center node, small particles emanating outward, heartbeat double-pulse glow rhythm.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.module.css client/src/components/KnowledgeGraph/GraphNode.jsx
git commit -m "feat(ui-02): add radar rings, particle emission, and heartbeat pulse to center node"
```

---

### Task 3: Edge Animation Depth (UI-03)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`

- [ ] **Step 1: Add edge hover glow and energy pulse CSS**

In `KnowledgeGraph.module.css`, add:

```css
/* Edge hover glow */
.edgeGroup:hover .edgePath {
  stroke-opacity: 0.5;
  filter: url(#edgeGlow);
}

.edgeGroup:hover .edgeParticle {
  r: 3;
}

/* Energy pulse along new edges */
.energyPulse {
  fill: none;
  stroke: var(--accent-cyan);
  stroke-width: 3;
  stroke-opacity: 0;
  animation: edgePulse 1s ease-out forwards;
}

@keyframes edgePulse {
  0% { stroke-opacity: 0.8; stroke-dashoffset: 100%; stroke-dasharray: 20 200; }
  100% { stroke-opacity: 0; stroke-dashoffset: 0; stroke-dasharray: 20 200; }
}

/* Gradient edge strokes */
.edgePath {
  transition: stroke-opacity 0.3s ease;
}
```

- [ ] **Step 2: Update edge rendering in KnowledgeGraph.jsx**

Wrap each edge `<g>` in a group with `className={s.edgeGroup}` and add `pointer-events="stroke"` so hover works. Add `className={s.edgePath}` to the main path elements.

For newly created edges (edges whose source/target include a node at hopDistance 0), add an extra `<path>` with `className={s.energyPulse}` that uses the same `d` attribute — it will auto-animate once and fade.

- [ ] **Step 3: Verify visually**

Expected: Hovering near an edge brightens it and enlarges particles. New edges flash with a traveling energy pulse.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/KnowledgeGraph/KnowledgeGraph.module.css client/src/components/KnowledgeGraph/KnowledgeGraph.jsx
git commit -m "feat(ui-03): add edge hover glow, gradient strokes, and energy pulse animation"
```

---

### Task 4: Background Atmosphere (UI-04)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`

- [ ] **Step 1: Add starfield, color-shifting nebula, scanlines, and shooting star CSS**

In `KnowledgeGraph.module.css`, add:

```css
/* Starfield */
.starfield {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle var(--dur, 4s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

@keyframes twinkle {
  0%, 100% { opacity: var(--min-op, 0.1); }
  50% { opacity: var(--max-op, 0.5); }
}

/* Color-shifting nebula */
.blob {
  animation: nebPulse 12s ease-in-out infinite, nebColorShift 20s ease-in-out infinite;
}

@keyframes nebColorShift {
  0%, 100% { filter: hue-rotate(0deg); }
  33% { filter: hue-rotate(30deg); }
  66% { filter: hue-rotate(-20deg); }
}

/* CRT scanline overlay */
.scanlineOverlay {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 212, 255, 0.015) 2px,
    rgba(0, 212, 255, 0.015) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* Shooting stars */
.shootingStar {
  position: absolute;
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, rgba(0, 212, 255, 0.6), transparent);
  animation: shoot var(--dur, 1.5s) linear forwards;
  animation-delay: var(--delay, 0s);
  transform-origin: left center;
  opacity: 0;
}

@keyframes shoot {
  0% { transform: translateX(0) rotate(var(--angle, -30deg)); opacity: 0; }
  10% { opacity: 0.8; }
  100% { transform: translateX(600px) rotate(var(--angle, -30deg)); opacity: 0; }
}
```

- [ ] **Step 2: Add starfield and shooting star elements to KnowledgeGraph.jsx**

Before the `.canvas` div (inside the container), add:

```jsx
{/* Starfield */}
<div className={s.starfield}>
  {Array.from({length: 40}, (_, i) => (
    <div key={i} className={s.star} style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      '--dur': `${3 + Math.random() * 4}s`,
      '--delay': `${Math.random() * 5}s`,
      '--min-op': `${0.05 + Math.random() * 0.1}`,
      '--max-op': `${0.3 + Math.random() * 0.4}`,
      width: `${1 + Math.random() * 2}px`,
      height: `${1 + Math.random() * 2}px`,
    }} />
  ))}
</div>

{/* Scanline overlay */}
<div className={s.scanlineOverlay} />
```

Add a shooting star that appears periodically using a `useEffect` + `useState`:

```jsx
const [shootingStars, setShootingStars] = useState([]);

useEffect(() => {
  const interval = setInterval(() => {
    setShootingStars(prev => [...prev.slice(-2), {
      id: Date.now(),
      x: Math.random() * 80 + 10,
      y: Math.random() * 40,
      angle: -20 - Math.random() * 25,
      dur: 1 + Math.random() * 1,
    }]);
  }, 6000 + Math.random() * 8000);
  return () => clearInterval(interval);
}, []);
```

Render them inside the starfield div:

```jsx
{shootingStars.map(ss => (
  <div key={ss.id} className={s.shootingStar} style={{
    left: `${ss.x}%`, top: `${ss.y}%`,
    '--angle': `${ss.angle}deg`,
    '--dur': `${ss.dur}s`,
  }} />
))}
```

- [ ] **Step 3: Verify visually**

Expected: Twinkling stars in background, subtle CRT scanlines, nebula blobs shift color over time, occasional shooting stars streak across.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/KnowledgeGraph/KnowledgeGraph.module.css client/src/components/KnowledgeGraph/KnowledgeGraph.jsx
git commit -m "feat(ui-04): add starfield, CRT scanlines, color-shifting nebula, and shooting stars"
```

---

### Task 5: Glassmorphism Panel + Corner Brackets (UI-05)

**Files:**
- Modify: `client/src/components/ConceptPanel/ConceptPanel.module.css`
- Modify: `client/src/components/ConceptPanel/ConceptPanel.jsx`

- [ ] **Step 1: Update panel CSS for glassmorphism and animated border**

In `ConceptPanel.module.css`, replace `.panel`:

```css
.panel {
  padding: 18px;
  height: 100%;
  overflow-y: auto;
  background: rgba(6, 9, 15, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid var(--border-dim);
  position: relative;
}

/* Animated gradient border on right edge */
.panel::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    180deg,
    var(--accent-cyan),
    var(--accent-purple),
    var(--accent-gold),
    var(--accent-cyan)
  );
  background-size: 100% 300%;
  animation: borderGradient 6s ease-in-out infinite;
  opacity: 0.3;
}

@keyframes borderGradient {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 0% 100%; }
}

/* Corner brackets HUD decoration */
.cornerTL, .cornerTR, .cornerBL, .cornerBR {
  position: absolute;
  width: 16px;
  height: 16px;
  pointer-events: none;
  z-index: 2;
}

.cornerTL {
  top: 6px; left: 6px;
  border-top: 1.5px solid rgba(0, 212, 255, 0.25);
  border-left: 1.5px solid rgba(0, 212, 255, 0.25);
}

.cornerTR {
  top: 6px; right: 6px;
  border-top: 1.5px solid rgba(0, 212, 255, 0.25);
  border-right: 1.5px solid rgba(0, 212, 255, 0.25);
}

.cornerBL {
  bottom: 6px; left: 6px;
  border-bottom: 1.5px solid rgba(0, 212, 255, 0.25);
  border-left: 1.5px solid rgba(0, 212, 255, 0.25);
}

.cornerBR {
  bottom: 6px; right: 6px;
  border-bottom: 1.5px solid rgba(0, 212, 255, 0.25);
  border-right: 1.5px solid rgba(0, 212, 255, 0.25);
}

/* Glitch transition on concept change */
.panelGlitch {
  animation: glitchSlice 0.25s ease-out;
}

@keyframes glitchSlice {
  0% { clip-path: inset(0); }
  20% { clip-path: inset(10% 0 80% 0); transform: translateX(3px); }
  40% { clip-path: inset(40% 0 30% 0); transform: translateX(-3px); }
  60% { clip-path: inset(70% 0 5% 0); transform: translateX(2px); }
  80% { clip-path: inset(0); transform: translateX(-1px); }
  100% { clip-path: inset(0); transform: translateX(0); }
}
```

- [ ] **Step 2: Add corner bracket elements and glitch trigger to ConceptPanel.jsx**

In `ConceptPanel.jsx`, add corner bracket divs inside the panel div:

```jsx
<div className={s.cornerTL} />
<div className={s.cornerTR} />
<div className={s.cornerBL} />
<div className={s.cornerBR} />
```

Add glitch class on concept change using a `key` prop or a short-lived state toggle:

```jsx
const [glitch, setGlitch] = useState(false);

useEffect(() => {
  if (currentConcept) {
    setGlitch(true);
    const t = setTimeout(() => setGlitch(false), 300);
    return () => clearTimeout(t);
  }
}, [currentConcept?.title]);
```

Apply: `className={`${s.panel} ${glitch ? s.panelGlitch : ''}`}`

- [ ] **Step 3: Verify visually**

Expected: Frosted glass panel, animated gradient border on right edge, corner brackets visible, brief glitch effect on concept change.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/ConceptPanel/ConceptPanel.module.css client/src/components/ConceptPanel/ConceptPanel.jsx
git commit -m "feat(ui-05): glassmorphism panel with animated border, corner brackets, glitch transition"
```

---

### Task 6: Fact Chips Data-Terminal Style (UI-06)

**Files:**
- Modify: `client/src/components/ConceptPanel/HeroCard.module.css`

- [ ] **Step 1: Update fact chip CSS for data-terminal look**

In `HeroCard.module.css`, replace the `.fact`, `.factLabel`, `.factValue` rules:

```css
.fact {
  background: rgba(0, 212, 255, 0.03);
  border: 1px solid var(--border-dim);
  border-radius: 6px;
  padding: 6px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  overflow: hidden;
}

.fact::before {
  content: '';
  position: absolute;
  top: 4px;
  right: 6px;
  width: 4px;
  height: 4px;
  background: var(--accent-cyan);
  border-radius: 50%;
  animation: dataTick 2s ease-in-out infinite;
  opacity: 0.4;
}

@keyframes dataTick {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.6; }
}

.factLabel {
  font-size: 8px;
  text-transform: uppercase;
  font-family: var(--font-mono);
  opacity: 0.25;
  letter-spacing: 0.5px;
}

.factValue {
  font-size: 11px;
  font-weight: bold;
  opacity: 0.6;
  font-family: var(--font-mono);
  letter-spacing: 0.3px;
}
```

- [ ] **Step 2: Verify visually**

Expected: Fact chips have monospace values, blinking cyan dot indicator in corner, terminal aesthetic.

- [ ] **Step 3: Commit**

```bash
git add client/src/components/ConceptPanel/HeroCard.module.css
git commit -m "feat(ui-06): data-terminal styled fact chips with blinking indicators"
```

---

### Task 7: Enrich Button Flair (UI-07)

**Files:**
- Modify: `client/src/components/ConceptPanel/ConceptPanel.module.css`
- Modify: `client/src/components/ConceptPanel/ConceptPanel.jsx`

- [ ] **Step 1: Add pulsing glow, scan beam, and enriched state CSS**

In `ConceptPanel.module.css`, update the `.enrichBtn` rules and add new classes:

```css
/* Pulsing attention glow */
.enrichBtn:not(:disabled) {
  animation: enrichPulse 3s ease-in-out infinite;
}

@keyframes enrichPulse {
  0%, 100% { box-shadow: 0 0 0 rgba(0, 212, 255, 0); }
  50% { box-shadow: 0 0 15px rgba(0, 212, 255, 0.15), inset 0 0 10px rgba(0, 212, 255, 0.05); }
}

/* Scan beam effect after enrichment */
.enrichBtn.enrichComplete {
  background: linear-gradient(135deg, rgba(92, 255, 160, 0.08), rgba(92, 255, 160, 0.02));
  border-color: rgba(92, 255, 160, 0.3);
  color: rgba(92, 255, 160, 0.7);
  animation: none;
  position: relative;
  overflow: hidden;
}

.enrichBtn.enrichComplete::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(92, 255, 160, 0.12), transparent);
  animation: scanBeam 1.5s ease forwards;
}

@keyframes scanBeam {
  to { left: 100%; }
}
```

- [ ] **Step 2: Update ConceptPanel.jsx to apply enriched class**

When `enriched` is true, add the `.enrichComplete` class to the enrich button. Change the button text from "Enrich with AI" to "AI Enhanced" when enriched:

```jsx
<button
  className={`${s.enrichBtn} ${enriched ? s.enrichComplete : ''}`}
  onClick={enrich}
  disabled={enriching || enriched}
>
  {enriching ? (
    <><span className={s.enrichSpinner} /> Enriching...</>
  ) : enriched ? (
    'AI Enhanced'
  ) : (
    'Enrich with AI'
  )}
</button>
```

- [ ] **Step 3: Verify visually**

Expected: Enrich button has subtle pulsing glow, turns green with "AI Enhanced" text and scan beam effect after enrichment.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/ConceptPanel/ConceptPanel.module.css client/src/components/ConceptPanel/ConceptPanel.jsx
git commit -m "feat(ui-07): enrich button pulsing glow, scan beam, and enriched state"
```

---

### Task 8: Hexagonal Node Refinement (UI-08)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.module.css`

- [ ] **Step 1: Add inner border, hover tilt, and materialize animation**

In `GraphNode.module.css`, update hex node styles:

```css
/* Double-line inner hex border */
.hex::after {
  content: '';
  position: absolute;
  inset: 3px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 1px solid rgba(160, 124, 255, 0.15);
  pointer-events: none;
}

/* Hover tilt */
.hexNode:hover {
  transform: rotate(5deg);
}

/* Materialize animation for new secondary nodes */
.hexMaterialize {
  animation: materialize 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes materialize {
  0% { transform: scale(0); opacity: 0; filter: brightness(2); }
  60% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; filter: brightness(1); }
}
```

- [ ] **Step 2: Verify visually**

Expected: Hex nodes have inner border line, slight tilt on hover, materialize with scale+glow when first appearing.

- [ ] **Step 3: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.module.css
git commit -m "feat(ui-08): hex node double border, hover tilt, materialize animation"
```

---

### Task 9: Visited Node Ring + Trail Opacity (UI-09, UI-10)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.module.css`
- Modify: `client/src/components/KnowledgeGraph/GraphNode.jsx`

- [ ] **Step 1: Update visited indicator and trail opacity CSS**

In `GraphNode.module.css`, replace `.visited`:

```css
/* Completed ring indicator for visited nodes */
.visited {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 212, 255, 0.3);
  pointer-events: none;
  animation: visitedRing 0.5s ease forwards;
}

@keyframes visitedRing {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Ghost trail effect for visited nodes */
.visitedGhost {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--node-fill, rgba(0, 212, 255, 0.05));
  transform: translate(2px, 2px);
  opacity: 0.15;
  pointer-events: none;
  z-index: -1;
}
```

- [ ] **Step 2: Update opacity scale in GraphNode.jsx**

Change the `hopOpacity` function (lines 4-9) to use slower fade:

```javascript
const hopOpacity = (h) =>
  h === 0 ? 1 : h === 1 ? 0.85 : h === 2 ? 0.65 : 0.45;
```

- [ ] **Step 3: Add ghost div for visited nodes in JSX**

For visited nodes, render `<div className={s.visitedGhost} />` alongside the visited ring indicator.

- [ ] **Step 4: Verify visually**

Expected: Visited nodes have a ring border (not just a dot), ghost shadow offset, trail nodes stay more visible.

- [ ] **Step 5: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.module.css client/src/components/KnowledgeGraph/GraphNode.jsx
git commit -m "feat(ui-09/10): visited node ring indicator, ghost trail effect, slower opacity fade"
```

---

### Task 10: Typing Animation Enhancement (UI-11)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.jsx`
- Modify: `client/src/components/KnowledgeGraph/GraphNode.module.css`

- [ ] **Step 1: Add blinking cursor CSS**

In `GraphNode.module.css`, add:

```css
.cursor {
  display: inline-block;
  width: 1px;
  height: 1em;
  background: var(--accent-cyan);
  margin-left: 1px;
  vertical-align: text-bottom;
  animation: cursorBlink 0.6s step-end infinite;
}

@keyframes cursorBlink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

- [ ] **Step 2: Update typing animation in GraphNode.jsx**

In the typing effect section, show a blinking cursor while typing is in progress:

```jsx
// Inside the label render:
<span className={s.centerLabel || s.circleLabel || s.hexLabel}>
  {displayedText}
  {isTyping && <span className={s.cursor} />}
</span>
```

Where `isTyping` is true while `charIdx < fullText.length`.

- [ ] **Step 3: Verify visually**

Expected: Node labels type in with a blinking cursor that disappears when typing completes.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.module.css client/src/components/KnowledgeGraph/GraphNode.jsx
git commit -m "feat(ui-11): blinking cursor on typing animation"
```

---

### Task 11: Topbar Futuristic Treatment (UI-12)

**Files:**
- Modify: `client/src/components/Topbar/Topbar.module.css`
- Modify: `client/src/components/Topbar/Topbar.jsx`

- [ ] **Step 1: Add bottom accent line, hex badge, and search scanning CSS**

In `Topbar.module.css`, add to `.topbar`:

```css
.topbar::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-cyan), var(--accent-purple), var(--accent-gold), transparent);
  background-size: 200% 100%;
  animation: topbarLine 3s ease-in-out forwards;
  opacity: 0.4;
}

@keyframes topbarLine {
  from { background-position: 100% 0; }
  to { background-position: 0% 0; }
}
```

Replace `.jumpCount`:

```css
.jumpCount {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent-cyan);
  opacity: 0.7;
  padding: 4px 14px;
  clip-path: polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
  background: rgba(0, 212, 255, 0.06);
  border: 1px solid rgba(0, 212, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 4px;
  letter-spacing: 0.05em;
}

.jumpCountLabel {
  font-size: 8px;
  opacity: 0.4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

Add search scanning animation:

```css
.searchBar::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.06), transparent);
  pointer-events: none;
  border-radius: 8px;
}

.searchBar.scanning::after {
  animation: searchScan 1.5s ease-in-out;
}

@keyframes searchScan {
  to { left: 200%; }
}
```

- [ ] **Step 2: Update Topbar.jsx**

Update the hop counter to use the hex badge with label:

```jsx
<div className={s.jumpCount}>
  <span>{trail.length}</span>
  <span className={s.jumpCountLabel}>hops</span>
</div>
```

Add `.scanning` class to search bar when the user types (on input change, set scanning true briefly):

```jsx
const [scanning, setScanning] = useState(false);

const handleInput = (e) => {
  // existing search logic...
  setScanning(true);
  setTimeout(() => setScanning(false), 1500);
};
```

Apply: `className={`${s.searchBar} ${scanning ? s.scanning : ''}`}`

- [ ] **Step 3: Verify visually**

Expected: Accent gradient line sweeps across bottom on load, hop counter in hexagonal badge, search bar has scanning light sweep on type.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/Topbar/Topbar.module.css client/src/components/Topbar/Topbar.jsx
git commit -m "feat(ui-12): topbar accent line, hex hop badge, search scanning effect"
```

---

### Task 12: Concept Transition Drama (UI-13)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`
- Modify: `client/src/components/ConceptPanel/ConceptPanel.module.css`

- [ ] **Step 1: Add warp pulse CSS to KnowledgeGraph**

In `KnowledgeGraph.module.css`, add:

```css
/* Expanding ring pulse from center on jump */
.jumpPulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 2px solid var(--accent-cyan);
  transform: translate(-50%, -50%);
  animation: jumpRing 0.8s ease-out forwards;
  pointer-events: none;
  z-index: 5;
}

@keyframes jumpRing {
  0% { width: 0; height: 0; opacity: 0.6; border-width: 3px; }
  100% { width: 500px; height: 500px; opacity: 0; border-width: 1px; }
}
```

- [ ] **Step 2: Add staggered content slide-in to ConceptPanel**

In `ConceptPanel.module.css`, add:

```css
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
```

- [ ] **Step 3: Trigger jump pulse in KnowledgeGraph.jsx**

Add state to render the pulse ring on concept change:

```jsx
const [jumpPulse, setJumpPulse] = useState(false);

useEffect(() => {
  if (currentConcept) {
    setJumpPulse(true);
    const t = setTimeout(() => setJumpPulse(false), 900);
    return () => clearTimeout(t);
  }
}, [currentConcept?.title]);
```

Render inside canvas div: `{jumpPulse && <div className={s.jumpPulse} />}`

- [ ] **Step 4: Apply staggerIn class to ConceptPanel content wrapper**

In `ConceptPanel.jsx`, wrap the content children with `className={s.staggerIn}` and use `key={currentConcept.title}` to re-trigger on each concept change.

- [ ] **Step 5: Verify visually**

Expected: Expanding light ring from center on jump, panel content slides in with staggered timing.

- [ ] **Step 6: Commit**

```bash
git add client/src/components/KnowledgeGraph/KnowledgeGraph.module.css client/src/components/KnowledgeGraph/KnowledgeGraph.jsx client/src/components/ConceptPanel/ConceptPanel.module.css client/src/components/ConceptPanel/ConceptPanel.jsx
git commit -m "feat(ui-13): jump pulse ring and staggered panel content transitions"
```

---

### Task 13: Hover State Personality (UI-14)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/GraphNode.module.css`
- Modify: `client/src/components/KnowledgeGraph/PreviewPopover.module.css`
- Modify: `client/src/components/ConceptPanel/ConnectedConcepts.module.css`
- Modify: `client/src/components/Topbar/Topbar.module.css`

- [ ] **Step 1: Add scan ring on node hover**

In `GraphNode.module.css`, add:

```css
/* Scan ring on hover */
.node::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  border: 1px solid var(--node-border, rgba(0, 212, 255, 0.3));
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: none;
}

.node:hover::after {
  animation: scanRing 0.6s ease-out;
}

@keyframes scanRing {
  0% { width: 0; height: 0; opacity: 0.6; }
  100% { width: 120%; height: 120%; opacity: 0; }
}
```

- [ ] **Step 2: Add glitch hover to popover buttons**

In `PreviewPopover.module.css`, add:

```css
.jumpBtn:hover, .expandBtn:hover {
  animation: btnGlitch 0.3s ease;
}

@keyframes btnGlitch {
  0% { transform: translateX(0); }
  20% { transform: translateX(-2px); filter: hue-rotate(20deg); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-1px); filter: hue-rotate(-10deg); }
  80% { transform: translateX(1px); }
  100% { transform: translateX(0); filter: hue-rotate(0deg); }
}
```

- [ ] **Step 3: Add hologram flicker to connected concept cards**

In `ConnectedConcepts.module.css`, add:

```css
.card:hover {
  animation: holoFlicker 0.15s ease;
}

@keyframes holoFlicker {
  0% { opacity: 1; }
  30% { opacity: 0.85; }
  50% { opacity: 1; }
  70% { opacity: 0.9; }
  100% { opacity: 1; }
}
```

- [ ] **Step 4: Add search result hover accent bar**

In `Topbar.module.css`, update `.dropdownItem`:

```css
.dropdownItem {
  padding: 10px 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-dim);
  transition: background 0.15s ease, border-color 0.15s ease;
  position: relative;
  border-left: 2px solid transparent;
}

.dropdownItem:hover {
  background: rgba(0, 212, 255, 0.04);
  border-left-color: var(--accent-cyan);
}
```

- [ ] **Step 5: Verify visually**

Expected: Expanding scan ring on node hover, glitch shimmer on popover buttons, flicker on concept cards, cyan left accent on search results.

- [ ] **Step 6: Commit**

```bash
git add client/src/components/KnowledgeGraph/GraphNode.module.css client/src/components/KnowledgeGraph/PreviewPopover.module.css client/src/components/ConceptPanel/ConnectedConcepts.module.css client/src/components/Topbar/Topbar.module.css
git commit -m "feat(ui-14): scan ring hover, button glitch, card flicker, search accent"
```

---

### Task 14: Ambient Data Visualization (UI-15)

**Files:**
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`
- Modify: `client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`

- [ ] **Step 1: Add data stream decoration CSS**

In `KnowledgeGraph.module.css`, add:

```css
/* Ambient data streams */
.dataStream {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--accent-cyan);
  opacity: 0.04;
  writing-mode: vertical-lr;
  pointer-events: none;
  animation: streamScroll var(--dur, 15s) linear infinite;
  white-space: pre;
  line-height: 1.6;
  letter-spacing: 2px;
}

@keyframes streamScroll {
  from { transform: translateY(-100%); }
  to { transform: translateY(100vh); }
}
```

- [ ] **Step 2: Add data stream elements in KnowledgeGraph.jsx**

Add 3-4 data stream columns at low opacity:

```jsx
const dataStreams = useMemo(() => {
  const hex = '0123456789ABCDEF';
  return [10, 30, 70, 90].map((left, i) => ({
    left: `${left}%`,
    dur: `${12 + i * 4}s`,
    delay: `${i * 3}s`,
    text: Array.from({length: 40}, () =>
      Array.from({length: 2}, () => hex[Math.floor(Math.random() * 16)]).join('')
    ).join('\n'),
  }));
}, []);
```

Render them inside the container:

```jsx
{dataStreams.map((ds, i) => (
  <div key={i} className={s.dataStream} style={{
    left: ds.left,
    '--dur': ds.dur,
    animationDelay: ds.delay,
  }}>{ds.text}</div>
))}
```

- [ ] **Step 3: Verify visually**

Expected: Very subtle hex-code columns scrolling vertically at the edges of the graph area, atmospheric only.

- [ ] **Step 4: Commit**

```bash
git add client/src/components/KnowledgeGraph/KnowledgeGraph.module.css client/src/components/KnowledgeGraph/KnowledgeGraph.jsx
git commit -m "feat(ui-15): ambient hex data stream decorations"
```

---

### Task 15: Final Integration Verification

- [ ] **Step 1: Full app walkthrough**

Run the dev server and test the complete flow:
1. Open app — verify starfield, scanlines, data streams in background
2. Search "Quantum mechanics" — verify search scanning effect, topbar accent line
3. Concept loads — verify hero scanlines + scan text, glassmorphism panel, corner brackets, staggered content, fact chip terminal style
4. Graph renders — verify center node radar rings + particles + heartbeat, edge particles
5. Click a primary node — verify scan ring hover, popover button glitch
6. Click JUMP HERE — verify jump pulse ring, panel glitch transition
7. Hover connected concepts — verify hologram flicker
8. Click Enrich — verify pulsing glow, enriched state green + scan beam
9. Check hex secondary nodes — verify double border, hover tilt
10. Check visited/trail nodes — verify ring indicator, ghost shadow, improved opacity

- [ ] **Step 2: Performance check**

Ensure no dropped frames or excessive CPU from animations. All background animations use `pointer-events: none`, `will-change` is implicit via `animation`, and opacity/transform are GPU-composited properties.

- [ ] **Step 3: Final commit if any adjustments needed**

```bash
git add -A
git commit -m "fix: polish futuristic UI adjustments"
```
