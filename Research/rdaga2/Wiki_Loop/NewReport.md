## Report 6: Implementation Plan — Making Navigation Feel Natural Yet Structured

*Self-contained implementation guide. No prior conversation context required. Read CLAUDE.md for project overview.*

This plan implements 8 features from Report 5 across 7 ordered steps. Each feature specifies exact files, line-level locations, current code, and replacement code. The implementation order minimizes merge conflicts and builds features incrementally.

### Project Context (Quick Reference)

- **Stack:** React 18 + Vite, CSS Modules, d3-force for graph physics
- **State:** `ExplorerContext.jsx` uses `useReducer` with actions dispatched via `useCallback` wrappers
- **Graph layout:** `useForceLayout.js` — runs d3 `forceSimulation` with `forceLink`, `forceCollide`, `forceX`, `forceY` (no `forceManyBody`)
- **Node types:** `center` (current), `primary` (direct connections), `secondary` (sub-links, hexagonal), `trail` (old centers), `dormant` (old primaries)
- **`hopDistance`:** Tracks how many jumps ago a node was active. 0 = current, 1 = one jump ago, capped at 4. Drives opacity, repulsion, visual prominence.
- **Edges:** SVG quadratic bezier paths with animated particles on active edges. Rendered in `KnowledgeGraph.jsx` via `renderedEdges` useMemo.
- **Camera:** CSS `transform: translate(...)` on the canvas div. `isAutoPanning` flag triggers CSS transition for smooth movement.
- **No zoom is implemented** — only panning exists.

### Current Node Sizes (GraphNode.jsx line 67)

```js
const size = isCenter ? 96 : isSecondary ? 48 : isDormant ? 56 : 68;
```

### Current Collision Radii (useForceLayout.js lines 343-349)

```js
.force('collide', forceCollide().radius((d) => {
  if (d.type === 'center') return 80;
  if (d.type === 'primary') return 60;
  if (d.type === 'trail') return 50;
  if (d.type === 'dormant') return 46;
  return 36; // secondary
}).strength(0.9).iterations(2))
```

### Current Primary Node Spawn Radius (useForceLayout.js lines 251-261)

```js
if (n.type === 'primary') {
  radius = 280 + densityBonus + hopDist * 40 + (Math.random() - 0.5) * 40;
  const fanSpread = Math.PI * 0.9;
  if (primaryCount > 1 && primaryIdx >= 0) {
    const t = primaryIdx / (primaryCount - 1);
    nodeAngle = spawnAngle + (t - 0.5) * fanSpread;
  } else {
    nodeAngle = spawnAngle + (Math.random() - 0.5) * fanSpread;
  }
}
```

### Current Link Distances (useForceLayout.js lines 315-319)

```js
.distance((d) => {
  if (d.edgeType === 'trail') return 500;
  if (d.edgeType === 'secondary') return 90;
  return 280;
})
```

### Current Edge Rendering (KnowledgeGraph.jsx lines 256-309)

Edges use quadratic bezier curves with a glow layer, main stroke, and animated particle circles on active edges. `edgeOpacity` is computed from `sourceNode.hopDistance` (0→1, 1→0.6, 2+→0.3). Particles only render on edges connected to `centerNodeId`.

### Current Click Handler (KnowledgeGraph.jsx lines 205-208)

```js
function handleNodeClick(node) {
  if (node.type === 'center') return;
  setPreview(node);
}
```

### Current Auto-Pan (KnowledgeGraph.jsx lines 112-140)

On concept change, computes target pan to center the new center node, sets `isAutoPanning = true`, applies CSS `transition: transform 0.5s ease-out` for 600ms.

### Current ExplorerContext State (ExplorerContext.jsx lines 33-48)

```js
const initialState = {
  currentConcept: null, trail: [], trailIndex: -1, graphData: null,
  loading: false, enriching: false, enriched: false, error: null,
  trailOpen: false, journeyOpen: false, previewNode: null,
  expandedNode: null, detailLoading: false, prevCenterTitle: null,
};
```

### Current ConnectedConcepts Card (ConnectedConcepts.jsx lines 22-43)

Each card is a `<div className={styles.card}>` with strength dots, relation label, title, description, and Jump/Preview actions. No hover handlers.

### Current GraphNode Memo (GraphNode.jsx lines 146-153)

```js
export default memo(GraphNode, (prev, next) => {
  return prev.x === next.x && prev.y === next.y &&
    prev.focused === next.focused &&
    prev.node.type === next.node.type &&
    prev.node.id === next.node.id &&
    prev.node.visited === next.node.visited &&
    prev.node.hopDistance === next.node.hopDistance;
});
```

---

### STEP 1: Progressive Node Shrinking + Edge Simplification

*Files: `GraphNode.jsx`, `GraphNode.module.css`, `useForceLayout.js`, `KnowledgeGraph.jsx`*

These two features are tightly coupled — both key off `hopDistance`.

#### 1A. Node Shrinking

**`client/src/components/KnowledgeGraph/GraphNode.jsx`**

Replace the fixed size line (line 67):
```js
const size = isCenter ? 96 : isSecondary ? 48 : isDormant ? 56 : 68;
```
with a function that shrinks trail/dormant nodes with hopDistance:
```js
function getNodeSize(type, hopDistance) {
  if (type === 'center') return 96;
  if (type === 'secondary') return 48;
  if (type === 'primary') return 68;
  // Trail/dormant shrink with age: hop 1→56, 2→44, 3+→28 (constellation)
  const hop = Math.min(hopDistance || 0, 3);
  return [56, 56, 44, 28][hop];
}
```
Call it: `const size = getNodeSize(node.type, node.hopDistance);`

**Constellation mode for hop 3+ trail/dormant nodes:** Before the secondary/circle rendering block (around line 104), add an early return:
```jsx
const isConstellation = (isTrail || isDormant) && (node.hopDistance || 0) >= 3;

if (isConstellation) {
  return (
    <div
      className={`${styles.node} ${styles.constellation}`}
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
```

**`client/src/components/KnowledgeGraph/GraphNode.module.css`**

Add after the `.trailDot` block (end of file):
```css
/* ─── Constellation mode (hop 3+ aged nodes) ─── */
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
  background: var(--node-fill, rgba(0, 30, 50, 0.6));
  border: 1px solid var(--node-border, rgba(0, 212, 255, 0.3));
  opacity: 0.5;
  transition: opacity 0.3s;
}
.constellation:hover .constellationDot {
  opacity: 0.9;
  box-shadow: 0 0 12px var(--node-border);
}
```

**`client/src/components/KnowledgeGraph/useForceLayout.js`**

Update `forceCollide` radius (lines 343-349) to match new sizes:
```js
.force('collide', forceCollide().radius((d) => {
  if (d.type === 'center') return 80;
  if (d.type === 'primary') return 60;
  if (d.type === 'secondary') return 36;
  const hop = d.hopDistance || 0;
  if (hop >= 3) return 20;
  if (hop >= 2) return 32;
  return 46;
}).strength(0.9).iterations(2))
```

#### 1B. Edge Simplification

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

In the `renderedEdges` useMemo (starting at line 256), change the edge rendering logic. After computing `source` and `target` positions and doing viewport culling, add hop-based edge aging:

```js
// Compute max hop of the two endpoints
const sourceNode = nodeMap[edge.source];
const targetNode = nodeMap[edge.target];
const maxHop = Math.max(sourceNode?.hopDistance || 0, targetNode?.hopDistance || 0);

// Hop 4+: hide edge entirely
if (maxHop >= 4) return null;

const dx = target.x - source.x;
const dy = target.y - source.y;

// Hop 2+: straight line instead of curve
const isAged = maxHop >= 2;
const path = isAged
  ? `M ${source.x} ${source.y} L ${target.x} ${target.y}`
  : `M ${source.x} ${source.y} Q ${source.x + dx * 0.5 + dy * 0.12} ${source.y + dy * 0.5 - dx * 0.12} ${target.x} ${target.y}`;

const color = COLOR_HEX[edge.color] || '#00d4ff';
const isTrail = edge.type === 'trail';
const isSecondary = edge.type === 'secondary';
const isActiveEdge = !isSecondary && !isAged && (edge.source === centerNodeId || edge.target === centerNodeId);

// Opacity and width degrade with hop distance
let strokeWidth, strokeOpacity, dashArray;
if (maxHop >= 3) {
  strokeWidth = 0.4;
  strokeOpacity = 0.08;
  dashArray = '1 5';
} else if (maxHop >= 2) {
  strokeWidth = 0.6;
  strokeOpacity = 0.15;
  dashArray = '3 6';
} else {
  strokeWidth = isTrail ? 1.8 : isSecondary ? 0.6 : 1;
  strokeOpacity = isTrail ? 0.5 : isSecondary ? 0.15 : 0.3;
  dashArray = isTrail ? '8 5' : isSecondary ? '2 4' : 'none';
}

return (
  <g key={`${edge.source}-${edge.target}-${i}`} className={styles.edgeGroup}>
    {/* Glow layer — only for active (hop 0-1) edges */}
    {!isAged && (
      <path d={path} fill="none" stroke={color}
        strokeWidth={isTrail ? 8 : isSecondary ? 3 : 5}
        opacity={isTrail ? 0.06 : 0.04} filter="url(#edgeGlow)" />
    )}
    {/* Main edge */}
    <path d={path} fill="none" stroke={color}
      strokeWidth={strokeWidth} opacity={strokeOpacity}
      strokeLinecap="round" strokeDasharray={dashArray} />
    {/* Particles only on active edges (hop 0, connected to center) */}
    {isActiveEdge && (
      <>
        <circle r={1.2} fill="#fff" opacity={0.6}>
          <animateMotion dur="4s" repeatCount="indefinite" path={path} />
        </circle>
        <circle r={0.8} fill={color} opacity={0.5}>
          <animateMotion dur="5s" repeatCount="indefinite" path={path} begin="1s" />
        </circle>
      </>
    )}
  </g>
);
```

Remove the old `edgeOpacity` variable and `opacity={edgeOpacity}` from the `<g>` tag — opacity is now applied per-path.

---

### STEP 2: Strength-Based Concentric Clustering

*Files: `useForceLayout.js`*

**`client/src/components/KnowledgeGraph/useForceLayout.js`**

Replace the primary node radius calculation (lines 251-261):
```js
if (n.type === 'primary') {
  // Strength-based orbits: stronger connections closer to center
  const strength = n.strength || 1;
  const baseRadius = strength === 3 ? 180 : strength === 2 ? 260 : 350;
  radius = baseRadius + densityBonus + (Math.random() - 0.5) * 30;
  const fanSpread = Math.PI * 0.9;
  if (primaryCount > 1 && primaryIdx >= 0) {
    const t = primaryIdx / (primaryCount - 1);
    nodeAngle = spawnAngle + (t - 0.5) * fanSpread;
  } else {
    nodeAngle = spawnAngle + (Math.random() - 0.5) * fanSpread;
  }
}
```

Update link distance (lines 315-319):
```js
.distance((d) => {
  if (d.edgeType === 'trail') return 500;
  if (d.edgeType === 'secondary') return 90;
  const str = d.strength || 1;
  return str === 3 ? 180 : str === 2 ? 260 : 350;
})
```

No other files change. The force simulation naturally positions stronger connections closer.

---

### STEP 3: Focus Mode Toggle

*Files: `ExplorerContext.jsx`, `KnowledgeGraph.jsx`, `KnowledgeGraph.module.css`*

**`client/src/context/ExplorerContext.jsx`**

Add to `initialState` (line 33):
```js
focusMode: false,
```

Add case to `reducer` (after `TOGGLE_JOURNEY` case, around line 349):
```js
case 'TOGGLE_FOCUS':
  return { ...state, focusMode: !state.focusMode };
```

Add callback in `ExplorerProvider` (after `toggleJourney`):
```js
const toggleFocus = useCallback(() => dispatch({ type: 'TOGGLE_FOCUS' }), []);
```

Add `toggleFocus` to the context `value` object (line 504) and expose `focusMode` (already spread via `...state`).

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Destructure `focusMode` and `toggleFocus` from `useExplorer()` at line 38.

In node rendering (around line 445), add focus filter:
```jsx
// After viewport culling check
if (focusMode && (node.hopDistance || 0) >= 3 && node.type !== 'center') return null;
```

In `renderedEdges` useMemo, add at the top of the map callback:
```js
// Focus mode: hide edges to distant nodes
if (focusMode) {
  const sn = nodeMap[edge.source];
  const tn = nodeMap[edge.target];
  if ((sn?.hopDistance || 0) >= 3 || (tn?.hopDistance || 0) >= 3) return null;
}
```

Add `focusMode` to the dependency arrays of both `renderedEdges` and the node rendering section.

Add a toggle button near the KNOWLEDGE GRAPH label (around line 393):
```jsx
<button className={styles.focusBtn} onClick={toggleFocus}>
  {focusMode ? 'SHOW ALL' : 'FOCUS'}
</button>
```

**`client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`**

Add `.focusBtn` style:
```css
.focusBtn {
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 30;
  padding: 6px 14px;
  font-size: 10px;
  font-weight: 700;
  font-family: var(--font-display, 'Outfit', sans-serif);
  letter-spacing: 0.12em;
  color: rgba(0, 212, 255, 0.6);
  background: rgba(0, 212, 255, 0.04);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.focusBtn:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.35);
  color: rgba(0, 212, 255, 0.9);
}
```

---

### STEP 4: Hover Preview Tooltip

*Files: `KnowledgeGraph.jsx`, `KnowledgeGraph.module.css`*

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Add state and ref at the top of the component (after existing state declarations around line 46):
```js
const [hoverTooltip, setHoverTooltip] = useState(null);
const hoverTimerRef = useRef(null);
```

On each node wrapper div (around line 452), add hover handlers:
```jsx
<div
  key={node.id}
  data-node
  onMouseEnter={() => {
    if (node.type === 'center') return;
    hoverTimerRef.current = setTimeout(() => {
      const firstSentence = (node.description || '').split('. ')[0];
      if (firstSentence) {
        setHoverTooltip({ id: node.id, text: firstSentence + '.', x: pos.x, y: pos.y });
      }
    }, 800);
  }}
  onMouseLeave={() => {
    clearTimeout(hoverTimerRef.current);
    setHoverTooltip(null);
  }}
>
```

In `handleNodeClick`, clear the tooltip:
```js
function handleNodeClick(node) {
  clearTimeout(hoverTimerRef.current);
  setHoverTooltip(null);
  if (node.type === 'center') return;
  setPreview(node);
}
```

Render the tooltip inside the canvas div, after nodes but before PreviewPopover (around line 462):
```jsx
{hoverTooltip && positions[hoverTooltip.id] && !previewNode && (
  <div className={styles.hoverTooltip} style={{
    left: positions[hoverTooltip.id].x,
    top: positions[hoverTooltip.id].y - 50,
    transform: 'translateX(-50%)',
  }}>
    {hoverTooltip.text}
  </div>
)}
```

**`client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`**

Add:
```css
.hoverTooltip {
  position: absolute;
  max-width: 220px;
  padding: 8px 12px;
  background: rgba(12, 16, 28, 0.95);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 6px;
  font-size: 11px;
  color: rgba(200, 210, 225, 0.7);
  font-family: var(--font-body, 'Outfit', sans-serif);
  line-height: 1.5;
  pointer-events: none;
  z-index: 15;
  white-space: normal;
  animation: tooltipFadeIn 0.15s ease;
}
@keyframes tooltipFadeIn {
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
```

---

### STEP 5: Double-Click to Jump

*Files: `KnowledgeGraph.jsx`*

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Destructure `jumpTo` and `clearPreview` from `useExplorer()` at line 38 (add them to the existing destructuring — `jumpTo` may not be there yet, `clearPreview` is not currently destructured).

Add a ref for click discrimination (near other refs):
```js
const clickTimerRef = useRef(null);
```

Replace `handleNodeClick` (lines 205-208):
```js
function handleNodeClick(node) {
  clearTimeout(hoverTimerRef.current);
  setHoverTooltip(null);
  if (node.type === 'center') return;

  if (clickTimerRef.current && clickTimerRef.current.nodeId === node.id) {
    // Double-click: jump directly
    clearTimeout(clickTimerRef.current.timer);
    clickTimerRef.current = null;
    clearPreview();
    jumpTo(node.label || node.id);
    return;
  }

  // Single-click: wait 250ms to distinguish from double-click
  const timer = setTimeout(() => {
    clickTimerRef.current = null;
    setPreview(node);
  }, 250);
  clickTimerRef.current = { nodeId: node.id, timer };
}
```

Add to the hint text (line 394):
```jsx
<div className={styles.hint}>TAB cycle &middot; ENTER preview &middot; DBL-CLICK jump &middot; ESC close &middot; drag to pan</div>
```

---

### STEP 6: Panel-Graph Hover Sync

*Files: `ExplorerContext.jsx`, `ConnectedConcepts.jsx`, `GraphNode.jsx`, `GraphNode.module.css`, `KnowledgeGraph.jsx`*

This is the most cross-cutting feature. Two directions: panel→graph highlight, and graph→panel scroll.

#### 6A. State Setup

**`client/src/context/ExplorerContext.jsx`**

Add to `initialState`:
```js
highlightedNodeId: null,
```

Add reducer cases (after `CLEAR_PREVIEW`):
```js
case 'SET_HIGHLIGHT':
  return { ...state, highlightedNodeId: action.payload };
case 'CLEAR_HIGHLIGHT':
  return { ...state, highlightedNodeId: null };
```

Add callbacks in `ExplorerProvider`:
```js
const setHighlight = useCallback((nodeId) => dispatch({ type: 'SET_HIGHLIGHT', payload: nodeId }), []);
const clearHighlight = useCallback(() => dispatch({ type: 'CLEAR_HIGHLIGHT' }), []);
```

Add `setHighlight` and `clearHighlight` to the context `value` object.

#### 6B. Panel → Graph (hover card highlights node)

**`client/src/components/ConceptPanel/ConnectedConcepts.jsx`**

Destructure `setHighlight` and `clearHighlight` from `useExplorer()`.

Add hover handlers to each card div:
```jsx
<div
  key={conn.title}
  className={styles.card}
  data-node-id={conn.title}
  onMouseEnter={() => setHighlight(conn.title)}
  onMouseLeave={() => clearHighlight()}
>
```

#### 6C. Graph Node Highlight Rendering

**`client/src/components/KnowledgeGraph/GraphNode.jsx`**

Add `highlighted` prop to function signature:
```js
function GraphNode({ node, x, y, onClick, focused, highlighted }) {
```

Add `${highlighted ? styles.highlighted : ''}` to the className of the `.node` div (line 115):
```jsx
className={`${styles.node} ${focused ? styles.focused : ''} ${highlighted ? styles.highlighted : ''} ${isSecondary ? styles.hexNode : styles.circleNode}`}
```

Also apply to constellation nodes if applicable:
```jsx
className={`${styles.node} ${styles.constellation} ${highlighted ? styles.highlighted : ''}`}
```

Update memo (line 146):
```js
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

**`client/src/components/KnowledgeGraph/GraphNode.module.css`**

Add:
```css
/* ─── Highlight sync (panel hover) ─── */
.highlighted {
  z-index: 15 !important;
  opacity: 1 !important;
  transform: scale(1.2);
}
.highlighted .circle,
.highlighted .hex {
  box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2);
}
.highlighted .constellationDot {
  opacity: 1;
  box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.6), 0 0 20px rgba(0, 212, 255, 0.3);
}
```

#### 6D. Graph → Panel (hover node scrolls panel)

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Destructure `highlightedNodeId`, `setHighlight`, `clearHighlight` from `useExplorer()`.

Pass `highlighted` prop to GraphNode:
```jsx
<GraphNode
  node={node} x={pos.x} y={pos.y}
  onClick={handleNodeClick}
  focused={navIdx >= 0 && navIdx === focusedIdx}
  highlighted={highlightedNodeId === node.id}
/>
```

On the node wrapper div's `onMouseEnter` (same div that already has hover tooltip logic from Step 4), also call `setHighlight`:
```jsx
onMouseEnter={() => {
  setHighlight(node.id);
  if (node.type === 'center') return;
  hoverTimerRef.current = setTimeout(() => { /* tooltip logic */ }, 800);
}}
onMouseLeave={() => {
  clearHighlight();
  clearTimeout(hoverTimerRef.current);
  setHoverTooltip(null);
}}
```

**`client/src/components/ConceptPanel/ConnectedConcepts.jsx`**

Destructure `highlightedNodeId` from `useExplorer()`.

Add a `useEffect` + `useRef` for auto-scroll:
```jsx
import { useRef, useEffect } from 'react';

const gridRef = useRef(null);

useEffect(() => {
  if (!highlightedNodeId || !gridRef.current) return;
  const card = gridRef.current.querySelector(`[data-node-id="${CSS.escape(highlightedNodeId)}"]`);
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}, [highlightedNodeId]);
```

Add `ref={gridRef}` to the `.grid` div.

---

### STEP 7: Smooth Pursuit Camera

*Files: `KnowledgeGraph.jsx`*

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Replace the auto-pan `useEffect` (lines 112-140). The key change: when the distance between old and new pan positions is large (>200px), route through a curved midpoint for spatial storytelling.

```js
useEffect(() => {
  if (!currentConcept || !graphData) return;
  const centerNode = graphData.nodes.find((n) => n.type === 'center');
  if (!centerNode || !positions[centerNode.id]) return;

  const conceptChanged = lastPanState.current.concept !== currentConcept.title;
  const canvasChanged = lastPanState.current.cw !== canvasSize.width ||
                        lastPanState.current.ch !== canvasSize.height;

  if (!conceptChanged && !canvasChanged) return;

  const oldConcept = lastPanState.current.concept;
  lastPanState.current = { concept: currentConcept.title, cw: canvasSize.width, ch: canvasSize.height };
  const pos = positions[centerNode.id];
  const targetPanX = -(pos.x - canvasSize.width / 2);
  const targetPanY = -(pos.y - canvasSize.height / 2);

  if (conceptChanged) {
    setIsAutoPanning(true);

    // Compute distance for curve decision
    const dx = targetPanX - pan.x;
    const dy = targetPanY - pan.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 200) {
      // Curved path: route through perpendicular midpoint
      const midX = pan.x + dx * 0.5 + dy * 0.15;
      const midY = pan.y + dy * 0.5 - dx * 0.15;
      setPan({ x: midX, y: midY });
      const t1 = setTimeout(() => setPan({ x: targetPanX, y: targetPanY }), 300);
      const t2 = setTimeout(() => setIsAutoPanning(false), 700);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setPan({ x: targetPanX, y: targetPanY });
      const t = setTimeout(() => setIsAutoPanning(false), 600);
      return () => clearTimeout(t);
    }
  } else {
    setPan({ x: targetPanX, y: targetPanY });
  }
}, [currentConcept?.title, positions, canvasSize.width, canvasSize.height]);
```

Update the pan transition style (line 323):
```js
const panTransition = isAutoPanning
  ? 'transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)'
  : isPanning ? 'none' : 'transform 0.08s ease-out';
```

---

### Features Intentionally Excluded

These were mentioned in Report 5 but excluded from this plan due to scope/complexity:

| Feature | Why excluded |
|---------|-------------|
| Drag-to-connect | Report 5 marked as stretch goal. Complex gesture system, low priority. |
| Vertical mini-timeline | Replaces BacktrackBar entirely. Current BacktrackBar + TrailSidebar already cover this. |
| Domain boundary gradients | Cosmetic. Current cluster ellipses work. Can be a follow-up. |
| Progressive zoom-level detail | Requires implementing zoom (only pan exists). Large architectural change. |
| Zoom-to-fit on node count | Also requires zoom implementation. |
| Collapsible left panel | Nice-to-have but orthogonal to "natural + structured" goal. Simple to add separately. |
| Scroll-to-node (panel scroll → graph pan) | Requires scroll event debouncing. The reverse direction (graph→panel) is included. |

---

### Testing Checklist

After each step, verify:

- [ ] **Step 1:** Jump 5-6 times. Oldest nodes should be tiny dots (constellation). Edges to them should be thin dotted or invisible. New primary nodes remain full-size 68px circles.
- [ ] **Step 2:** After a jump, strength-3 (core) connections should cluster closer to center (~180px) than strength-1 (related, ~350px).
- [ ] **Step 3:** Click FOCUS button. Nodes with hopDistance 3+ disappear along with their edges. Click SHOW ALL to restore them.
- [ ] **Step 4:** Hover a non-center node for ~1 second. A small tooltip with the first sentence of its description appears. Moving away dismisses it. Clicking a node dismisses it and shows the popover.
- [ ] **Step 5:** Double-click a node. It should jump directly without showing the popover. Single-click should still show the popover after a 250ms delay.
- [ ] **Step 6:** Hover a connection card in the left panel — the corresponding graph node should glow. Hover a graph node — the left panel should scroll to show that connection's card.
- [ ] **Step 7:** Jump to a distant trail node. Camera should arc smoothly (slight curve) instead of moving in a straight line. Short-distance jumps should move normally.

---

*End of Report 6. This plan is fully self-contained — no prior conversation context needed.*