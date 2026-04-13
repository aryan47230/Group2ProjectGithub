# Tree Graph Redesign — Design Spec

## Goal
Transform the knowledge graph from a force-centered radial layout into an expanding tree structure where the camera follows the user's exploration path, nodes are mostly static, and performance scales to hundreds of nodes.

## Approach: Soft-Pin Tree

### Camera & Navigation
- First concept placed at canvas center. Subsequent jumps: node stays at its current canvas position.
- Camera smooth-pans (500ms ease-out CSS transition) to center the new node in the viewport.
- Manual drag-to-pan still works layered on top of auto-pan offset.

### Force Layout — Soft-Pin Behavior
- New primary nodes spawn in a semicircle facing away from the parent trail direction.
- Each node tracks a `settledPosition`. A `forceX`/`forceY` anchor pulls settled nodes back (strength ~0.8), new nodes start unanchored.
- Simulation restarts with `alpha = 0.3` on graph change (not full 1.0 reset).
- `alphaDecay = 0.05` for fast cooldown (~1-2s settle).
- Auto-stop: simulation stops when `alpha < 0.01`. Zero CPU when idle.
- Collision force still runs so new branches nudge old nodes to accommodate.

### Performance Fixes
- **Viewport culling**: 200px buffer beyond viewport. Nodes/edges outside are not rendered.
- **Edge particles**: only on edges connected to current center node. All others are static lines.
- **nodeMap**: O(1) lookup replacing O(n) `nodes.find()` in edge render loop.
- **Edge memoization**: `useMemo` keyed on `[graphData.edges, positions]`.
- **React.memo on GraphNode**: only re-renders when own position/data changes.
- **Throttle setPositions**: max 60fps instead of every d3 tick.

### Dynamic Canvas
- Start at 2400x1800. Track node bounding box.
- Expand by 800px in any direction when nodes approach within 200px of canvas edge.
- SVG viewBox and canvas div dimensions update together.

## Files Changed
- `useForceLayout.js` — soft-pin, auto-stop, directional spawning, dynamic canvas
- `KnowledgeGraph.jsx` — camera pan, viewport culling, edge memoization, particle optimization
- `GraphNode.jsx` — React.memo wrapper
- `ExplorerContext.jsx` — pass previous center position for directional spawning

## Unchanged
- All background effects, node visual design, popover/overlay, topbar, concept panel, backend.
