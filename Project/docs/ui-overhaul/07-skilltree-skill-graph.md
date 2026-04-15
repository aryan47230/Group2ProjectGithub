# 07 — Skill Graph (full SVG revamp)

> **Prerequisites:** Doc 01 merged. Doc 06 strongly recommended first so the graph sits inside the new `.graphContainer` chrome.

## Goal

Completely rebuild `SkillGraph.jsx` so every node, edge, label, level-rule, and hover effect matches the Refined Neon "node system" from Wiki Loop. This is not a recolor — the node geometry, edge styling, layout math, and interaction are all replaced.

### Visual target

**Node types** (by level + completion + lock state):

| State | Shape | Fill | Stroke | Glow | Size |
|------|-------|------|--------|------|------|
| Level 1 (foundation) | Hex (clip-path via `<polygon>`) | `var(--rn-ink)` | `var(--rn-violet)` | `var(--rn-violet-glow)` | 56 |
| Level 2+ (core) | Circle | `var(--rn-ink)` | `var(--rn-blue)` | `var(--rn-blue-glow)` | 64 |
| Highest level (apex) | Circle with dashed inner ring | `var(--rn-ink)` | `var(--rn-gold)` | `var(--rn-gold-glow)` | 72 |
| Completed (any) | same shape | `rgba(0, 255, 242, 0.08)` | `var(--rn-cyan)` | `var(--rn-cyan-glow)` (stronger) | base |
| Locked (any) | same shape | `var(--rn-void)` | `var(--rn-grey)` | none | base × 0.88, 0.42 opacity |
| Hover (any) | same shape | unchanged | brightened + 2 px outer glow | stronger | base × 1.06 |

**Edges:**

- Base: 1 px hairline `var(--rn-hair-3)` cubic bezier, no arrowhead marker.
- Connected-to-hovered: 1.5 px, `var(--rn-cyan)`, glow `stdDeviation=2`.
- Completed prereq: 1.5 px, `var(--rn-gold)`, dashed `4 6`, glow.
- Locked node's incoming edges: 0.8 px, `var(--rn-hair-2)`, dashed `2 5`.
- Flowing particle animation on hovered edges: small cyan circle with bloom, travels along the path. Keep the existing `animateMotion` technique, just recolor.

**Level rules (horizontal gridlines):**

- 1 px `var(--rn-hair)` hairline with `stroke-dasharray: 1 4`.
- Left-margin label: `LVL ${n}` in mono 10 px uppercase `var(--rn-txt-2)` with a tiny leading tick.

**Background:**

- The `.graphContainer` already supplies the radial glow (from doc 06). The SVG itself adds a faint dot grid via a `<pattern>` in `<defs>` and a full-bounds `<rect>` fill.

**Labels:**

- Level badge (`L${n}`): dropped — replaced by node shape/color coding.
- Emoji: dropped entirely. The old `node.emoji` is no longer rendered.
- Name label below the node: Outfit 12 px `var(--rn-txt-0)`, wrapped to ≤ 2 lines.

**Layout math (unchanged shape, tightened values):**

- Column spacing is even across each level row.
- Row spacing (`levelGap`) increases from 150 → 170.
- Top padding from 60 → 80 (room for the new header already at 46 px).
- Vertical ordering stays inverted (level 1 at the bottom) to preserve the "tree growing up" feel.

## Files touched

**Modified:**
- `client/src/components/SkillTree/SkillGraph.jsx` — full replacement.
- `client/src/components/SkillTree/SkillTree.module.css` — replace the **SVG-global `.graph :global(...)` block + the `.nodeClickable / .nodeCompleted / .nodeLocked / .nodeDimmed / .edgeDimmed` classes only**. Everything else in the file (tree view header from doc 06, prompt view from doc 05) is left alone.

**Not touched:** `SkillTreeContext`, `DetailPanel`, any model shape. Node objects continue to have `{ name, level, requires, description, tips, outcomes, keyConcepts, commonMistakes, resources }`. We just ignore `node.emoji` now.

---

## Task 7.1 — Replace `SkillGraph.jsx`

Replace the entire file with:

```jsx
import { useEffect, useRef } from 'react';
import styles from './SkillTree.module.css';

const NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

/* Wrap text into up to `maxLines` lines of at most `maxChars`. */
function wrapText(text, maxChars, maxLines = 2) {
  const words = text.split(' ');
  const lines = [];
  let current = [];
  for (const word of words) {
    const attempt = [...current, word].join(' ');
    if (attempt.length > maxChars && current.length > 0) {
      lines.push(current.join(' '));
      current = [word];
      if (lines.length === maxLines) break;
    } else {
      current.push(word);
    }
  }
  if (current.length && lines.length < maxLines) lines.push(current.join(' '));
  // If we truncated, ellipsize the final line.
  if (lines.length === maxLines && words.length > lines.join(' ').split(' ').length) {
    const last = lines[maxLines - 1];
    lines[maxLines - 1] = last.length > maxChars - 1 ? last.slice(0, maxChars - 1) + '…' : last + '…';
  }
  return lines;
}

/* Return { shape, size, stroke, fill, glow } for a node. */
function nodeStyle(node, maxLevel, completed, locked) {
  const isApex = node.level === maxLevel;
  const isFoundation = node.level === 1;

  let shape, size, stroke, fill, glow;

  if (completed) {
    shape = isFoundation ? 'hex' : 'circle';
    size = isApex ? 72 : isFoundation ? 56 : 64;
    stroke = 'var(--rn-cyan)';
    fill = 'rgba(0, 255, 242, 0.08)';
    glow = 'var(--rn-cyan-glow)';
  } else if (locked) {
    shape = isFoundation ? 'hex' : 'circle';
    size = (isApex ? 72 : isFoundation ? 56 : 64) * 0.88;
    stroke = 'var(--rn-grey)';
    fill = 'var(--rn-void)';
    glow = 'transparent';
  } else if (isApex) {
    shape = 'circle';
    size = 72;
    stroke = 'var(--rn-gold)';
    fill = 'var(--rn-ink)';
    glow = 'var(--rn-gold-glow)';
  } else if (isFoundation) {
    shape = 'hex';
    size = 56;
    stroke = 'var(--rn-violet)';
    fill = 'var(--rn-ink)';
    glow = 'var(--rn-violet-glow)';
  } else {
    shape = 'circle';
    size = 64;
    stroke = 'var(--rn-blue)';
    fill = 'var(--rn-ink)';
    glow = 'var(--rn-blue-glow)';
  }

  return { shape, size, stroke, fill, glow, isApex, isFoundation };
}

/* Build a hex polygon path (pointy-top) centered at 0,0 with the given radius. */
function hexPoints(r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${(r * Math.cos(angle)).toFixed(2)},${(r * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(' ');
}

export default function SkillGraph({ nodes, completedNodes, onNodeClick }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || !nodes?.length) return;

    svg.innerHTML = '';
    const entries = new Map(); // name -> { group, shapeEl, ringEl, fromEdges, toEdges }
    const edgeList = [];

    // ── Normalize ────────────────────────────────────────
    for (const node of nodes) {
      node.level = node.level || 1;
      node.requires = node.requires || [];
    }

    const levels = {};
    let maxLevel = 0;
    for (const node of nodes) {
      (levels[node.level] ||= []).push(node);
      if (node.level > maxLevel) maxLevel = node.level;
    }

    const isUnlocked = (name) => {
      const n = nodes.find((x) => x.name === name);
      if (!n || n.requires.length === 0) return true;
      return n.requires.every((r) => completedNodes.has(r));
    };

    // ── Layout math ──────────────────────────────────────
    const W = container.clientWidth || 900;
    const vPad = 80;
    const levelGap = 170;
    const topY = vPad;
    const totalH = topY + (maxLevel - 1) * levelGap + vPad + 64;

    svg.setAttribute('width', W);
    svg.setAttribute('height', totalH);
    svg.setAttribute('viewBox', `0 0 ${W} ${totalH}`);

    // ── Defs: dot grid pattern + glow filter ─────────────
    const defs = el('defs', {});

    // Dot grid pattern
    const pattern = el('pattern', {
      id: 'rn-dot-grid', x: '0', y: '0',
      width: '36', height: '36', patternUnits: 'userSpaceOnUse',
    });
    pattern.appendChild(el('circle', {
      cx: '0.5', cy: '0.5', r: '0.7',
      fill: 'rgba(130,170,220,0.10)',
    }));
    defs.appendChild(pattern);

    // Glow filter (shared)
    const glowFilter = el('filter', {
      id: 'rn-glow', x: '-50%', y: '-50%', width: '200%', height: '200%',
    });
    glowFilter.appendChild(el('feGaussianBlur', { stdDeviation: '2', result: 'blur' }));
    const merge = el('feMerge', {});
    merge.appendChild(el('feMergeNode', { in: 'blur' }));
    merge.appendChild(el('feMergeNode', { in: 'SourceGraphic' }));
    glowFilter.appendChild(merge);
    defs.appendChild(glowFilter);

    // Strong hover glow
    const hoverFilter = el('filter', {
      id: 'rn-glow-strong', x: '-100%', y: '-100%', width: '300%', height: '300%',
    });
    hoverFilter.appendChild(el('feGaussianBlur', { stdDeviation: '3.5', result: 'blur' }));
    const merge2 = el('feMerge', {});
    merge2.appendChild(el('feMergeNode', { in: 'blur' }));
    merge2.appendChild(el('feMergeNode', { in: 'SourceGraphic' }));
    hoverFilter.appendChild(merge2);
    defs.appendChild(hoverFilter);

    svg.appendChild(defs);

    // ── Background rect (dot grid) ───────────────────────
    svg.appendChild(el('rect', {
      x: '0', y: '0', width: String(W), height: String(totalH),
      fill: 'url(#rn-dot-grid)',
    }));

    // ── Level rules + left labels ────────────────────────
    for (let lvl = 1; lvl <= maxLevel; lvl++) {
      const y = topY + (maxLevel - lvl) * levelGap;

      // Hairline rule
      svg.appendChild(el('line', {
        x1: '60', y1: String(y), x2: String(W - 24), y2: String(y),
        class: 'rn-level-rule',
      }));

      // Left label group: "── LVL n"
      const labelG = el('g', { transform: `translate(24, ${y})` });
      labelG.appendChild(el('line', {
        x1: '0', y1: '0', x2: '20', y2: '0', class: 'rn-level-tick',
      }));
      const label = el('text', {
        x: '26', y: '3', class: 'rn-level-label',
      });
      label.textContent = `LVL ${String(lvl).padStart(2, '0')}`;
      labelG.appendChild(label);
      svg.appendChild(labelG);
    }

    // ── Position nodes ───────────────────────────────────
    const pos = {};
    for (let lvl = 1; lvl <= maxLevel; lvl++) {
      const row = levels[lvl] || [];
      const y = topY + (maxLevel - lvl) * levelGap;
      row.forEach((node, i) => {
        pos[node.name] = { x: (W / (row.length + 1)) * (i + 1), y };
      });
    }

    // ── Edges (drawn first, below nodes) ─────────────────
    for (const node of nodes) {
      const from = pos[node.name];
      if (!from) continue;
      for (const req of node.requires) {
        const to = pos[req];
        if (!to) continue;

        const sx = from.x, sy = from.y + 36;  // leaves bottom of target node
        const ex = to.x,   ey = to.y - 36;    // enters top of requirement
        const cp = Math.min(70, Math.abs(ey - sy) * 0.42);
        const d = `M ${sx},${sy} C ${sx},${sy + cp} ${ex},${ey - cp} ${ex},${ey}`;

        const reqDone = completedNodes.has(req);
        const nodeLocked = !isUnlocked(node.name);

        const edgeEl = el('path', {
          d, class: 'rn-edge', fill: 'none',
          'data-from': node.name, 'data-to': req,
        });

        if (reqDone) edgeEl.classList.add('rn-edge-done');
        if (nodeLocked) edgeEl.classList.add('rn-edge-locked');

        svg.appendChild(edgeEl);
        edgeList.push({ el: edgeEl, from: node.name, to: req, path: d });
      }
    }

    // ── Nodes ────────────────────────────────────────────
    for (const node of nodes) {
      const p = pos[node.name];
      if (!p) continue;

      const completed = completedNodes.has(node.name);
      const locked = !isUnlocked(node.name);
      const { shape, size, stroke, fill, glow, isApex } = nodeStyle(node, maxLevel, completed, locked);
      const r = size / 2;

      const g = el('g', {
        transform: `translate(${p.x},${p.y})`,
        class: 'rn-node',
        'data-name': node.name,
      });
      g.style.setProperty('--node-stroke', stroke);
      g.style.setProperty('--node-fill', fill);
      g.style.setProperty('--node-glow', glow);

      // Outer ambient ring (only for active non-locked)
      if (!locked) {
        const outerRing = el('circle', {
          r: String(r + 10), fill: 'none',
          stroke: stroke, 'stroke-width': '1',
          opacity: '0.22', class: 'rn-node-outer',
        });
        g.appendChild(outerRing);
      }

      // Main shape
      let shapeEl;
      if (shape === 'hex') {
        shapeEl = el('polygon', {
          points: hexPoints(r),
          fill,
          stroke,
          'stroke-width': '1.5',
          class: 'rn-node-shape',
          filter: locked ? '' : 'url(#rn-glow)',
        });
      } else {
        shapeEl = el('circle', {
          r: String(r),
          fill,
          stroke,
          'stroke-width': '1.5',
          class: 'rn-node-shape',
          filter: locked ? '' : 'url(#rn-glow)',
        });
      }
      g.appendChild(shapeEl);

      // Apex dashed inner ring
      if (isApex && !locked) {
        g.appendChild(el('circle', {
          r: String(r - 6), fill: 'none',
          stroke, 'stroke-width': '1', 'stroke-dasharray': '3 6',
          opacity: '0.75',
        }));
      }

      // Completed checkmark (tiny cyan ✓ in a dot)
      if (completed) {
        const cx = r * 0.55, cy = -r * 0.55;
        g.appendChild(el('circle', {
          cx: String(cx), cy: String(cy), r: '7',
          fill: 'var(--rn-void)', stroke: 'var(--rn-cyan)', 'stroke-width': '1',
        }));
        const check = el('text', {
          x: String(cx), y: String(cy + 3),
          class: 'rn-node-check',
        });
        check.textContent = '✓';
        g.appendChild(check);
      }

      // Node name label (below)
      const lines = wrapText(node.name, 14, 2);
      const labelY = r + 18;
      const lineH = 14;
      for (let i = 0; i < lines.length; i++) {
        const t = el('text', {
          x: '0',
          y: String(labelY + i * lineH),
          class: 'rn-node-label',
        });
        t.textContent = lines[i];
        g.appendChild(t);
      }

      g.classList.add(styles.nodeClickable);
      if (locked) g.classList.add(styles.nodeLocked);
      if (completed) g.classList.add(styles.nodeCompleted);

      g.addEventListener('click', () => onNodeClick(node));

      // Hover wiring
      g.addEventListener('mouseenter', () => {
        // Dim all others
        for (const [, entry] of entries) {
          if (entry.group !== g) entry.group.classList.add(styles.nodeDimmed);
        }

        // Highlight edges connected to this node
        const related = new Set([node.name, ...node.requires]);
        for (const edge of edgeList) {
          const isThisEdge =
            edge.from === node.name || edge.to === node.name ||
            (related.has(edge.from) && related.has(edge.to));
          edge.el.classList.toggle(styles.edgeDimmed, !isThisEdge);
          edge.el.classList.toggle('rn-edge-active', isThisEdge);
        }

        // Particles flowing along prerequisite edges (to → from, i.e. toward this node)
        const pulseGroup = el('g', { 'data-role': 'pulses' });
        svg.appendChild(pulseGroup);

        for (const edge of edgeList) {
          if (edge.to !== node.name && edge.from !== node.name) continue;
          const dur = '2.2s';
          for (let i = 0; i < 3; i++) {
            const begin = `${i * 0.73}s`;

            const bloom = el('circle', {
              r: '10', fill: 'var(--rn-cyan)', opacity: '0',
              filter: 'url(#rn-glow-strong)',
            });
            const bloomAnim = el('animate', {
              attributeName: 'opacity',
              values: '0;0.22;0.22;0',
              keyTimes: '0;0.15;0.75;1',
              dur, begin, repeatCount: 'indefinite',
            });
            bloom.appendChild(bloomAnim);

            const dot = el('circle', {
              r: '3.2', fill: 'var(--rn-cyan)', opacity: '0',
            });
            const dotAnim = el('animate', {
              attributeName: 'opacity',
              values: '0;1;1;0',
              keyTimes: '0;0.15;0.75;1',
              dur, begin, repeatCount: 'indefinite',
            });
            dot.appendChild(dotAnim);

            const orbG = el('g', {});
            const motion = el('animateMotion', {
              dur, begin, repeatCount: 'indefinite', path: edge.path,
            });
            orbG.appendChild(bloom);
            orbG.appendChild(dot);
            orbG.appendChild(motion);
            pulseGroup.appendChild(orbG);
          }
        }
      });

      g.addEventListener('mouseleave', () => {
        for (const [, entry] of entries) entry.group.classList.remove(styles.nodeDimmed);
        for (const edge of edgeList) {
          edge.el.classList.remove(styles.edgeDimmed);
          edge.el.classList.remove('rn-edge-active');
        }
        svg.querySelectorAll('[data-role="pulses"]').forEach((p) => p.remove());
      });

      entries.set(node.name, { group: g, shapeEl });
      svg.appendChild(g);
    }

    return () => { svg.innerHTML = ''; };
  }, [nodes, completedNodes, onNodeClick]);

  return (
    <div ref={containerRef} className={styles.graphContainer}>
      <svg ref={svgRef} className={styles.graph} />
    </div>
  );
}
```

### Implementation notes

- **No arrow markers.** Edges are directional by layout only (requires come from below).
- **No HSL rainbow.** Colors come exclusively from RN tokens via inline `var(--rn-*)` references on SVG elements. SVG accepts `var(...)` in presentation attributes.
- **Emoji dropped.** `node.emoji` is no longer read. The data shape is preserved; we just don't render it.
- **Hex nodes** use `<polygon>` with 6 points calculated from `hexPoints(r)`, pointy-top.
- **Particle animation** reuses `animateMotion`. The new version uses cyan only (matches the Refined Neon hover accent). Bloom uses the strong-glow filter.
- **Glow filters** are SVG-native (`feGaussianBlur` + `feMerge`). Each node that isn't locked gets `filter="url(#rn-glow)"`, so every non-locked node has a subtle bloom out of the box.
- **Level rules** are rendered as a `<line>` + a separate group containing a tick mark + text. That lets CSS style them via the `rn-*` classes (defined in Task 7.2).
- **`nodeClickable` / `nodeCompleted` / `nodeLocked` / `nodeDimmed` / `edgeDimmed`** class names on the `<g>` element are reused, but their CSS is replaced in Task 7.2.

## Task 7.2 — Replace the SVG-related CSS

In `client/src/components/SkillTree/SkillTree.module.css`, locate the block that starts at `/* ── SVG node states ── */` (near the end of the file, around line 491) and replace everything from that comment through the end of `.graph :global(.level-badge)` (around line 546) with the block below. The `.exploreWikiLink a { font-weight: 600; }` line just beneath that is already handled in doc 06 — leave it alone (if you are doing doc 07 in isolation and haven't run doc 06 yet, this line can remain unchanged).

```css
/* ── SkillGraph — Refined Neon ───────────────────────── */

.graph { display: block; user-select: none; }

/* Node group wrapper */
.nodeClickable {
  cursor: pointer;
  transition: opacity 0.15s, transform 0.18s;
  transform-origin: center;
}

.nodeClickable:hover {
  transform: scale(1.06);
}

.nodeClickable:hover .rn-node-shape {
  filter: url(#rn-glow-strong);
}

.nodeLocked {
  opacity: 0.42;
  cursor: default;
}

.nodeLocked:hover {
  transform: none;
}

.nodeLocked:hover .rn-node-shape {
  filter: none;
}

.nodeCompleted {
  /* extra soft outer glow via drop-shadow on the group */
  filter: drop-shadow(0 0 14px rgba(0, 255, 242, 0.35));
}

.nodeDimmed {
  opacity: 0.18;
  transition: opacity 0.18s;
}

.nodeDimmed:hover {
  opacity: 0.25;
}

/* Edges */
.graph :global(.rn-edge) {
  stroke: var(--rn-hair-3);
  stroke-width: 1;
  fill: none;
  transition: stroke 0.18s, stroke-width 0.18s, opacity 0.18s;
}

.graph :global(.rn-edge-done) {
  stroke: var(--rn-gold);
  stroke-width: 1.4;
  stroke-dasharray: 4 6;
  opacity: 0.85;
  filter: drop-shadow(0 0 4px var(--rn-gold-glow));
}

.graph :global(.rn-edge-locked) {
  stroke: var(--rn-hair-2);
  stroke-width: 0.8;
  stroke-dasharray: 2 5;
  opacity: 0.55;
}

.graph :global(.rn-edge-active) {
  stroke: var(--rn-cyan);
  stroke-width: 1.6;
  opacity: 1;
  filter: drop-shadow(0 0 5px var(--rn-cyan-glow));
}

.edgeDimmed {
  opacity: 0.08 !important;
}

/* Level rules + labels */
.graph :global(.rn-level-rule) {
  stroke: var(--rn-hair);
  stroke-width: 1;
  stroke-dasharray: 1 4;
}

.graph :global(.rn-level-tick) {
  stroke: var(--rn-hair-3);
  stroke-width: 1;
}

.graph :global(.rn-level-label) {
  fill: var(--rn-txt-2);
  font-family: var(--rn-font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  dominant-baseline: middle;
  pointer-events: none;
}

/* Node labels */
.graph :global(.rn-node-label) {
  fill: var(--rn-txt-0);
  font-family: var(--rn-font-display);
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-anchor: middle;
  dominant-baseline: hanging;
  pointer-events: none;
}

.nodeLocked :global(.rn-node-label) {
  fill: var(--rn-txt-2);
}

.nodeCompleted :global(.rn-node-label) {
  fill: var(--rn-cyan);
}

/* Completed check badge */
.graph :global(.rn-node-check) {
  fill: var(--rn-cyan);
  font-family: var(--rn-font-mono);
  font-size: 10px;
  font-weight: 700;
  text-anchor: middle;
  pointer-events: none;
}

/* Node outer ring pulse (apex + non-locked) */
.graph :global(.rn-node-outer) {
  animation: rn-pulse 3.6s ease-in-out infinite;
}

@keyframes rn-pulse {
  0%, 100% { opacity: 0.22; }
  50%      { opacity: 0.45; }
}

/* ── Remove the legacy global SVG selectors ── */
/* The blocks that used to style :global(.node-emoji), :global(.node-label-below),
 * :global(.edge), :global(.level-rule), :global(.level-axis-label),
 * :global(.level-badge) are intentionally gone. They are unused by the new
 * SkillGraph.jsx and have no consumers elsewhere. */
```

### Notes

- `.graph :global(...)` selectors are required because the SVG children are created through `createElementNS` and don't receive CSS-module scoping. Every SVG class used by the new implementation is prefixed `rn-` to avoid colliding with any legacy name.
- `transform-origin: center` on the node group together with `transform: scale(1.06)` gives a clean hover lift. Do not replace this with a `drop-shadow` pulse — it causes SVG bbox thrash on complex trees.
- `filter: url(#rn-glow-strong)` on hover requires the filter to exist in the SVG `<defs>`. `SkillGraph.jsx` defines it in Task 7.1.

## Task 7.3 — Smoke test

1. Generate a tree with 3+ levels and 2+ completed nodes.
2. Level rules run the full graph width with a tick + `LVL 01`/`LVL 02`/… label on the left.
3. Level 1 nodes are violet hexagons, mid levels are blue circles, the top level is a gold circle with a dashed inner ring.
4. Completed nodes glow cyan and show a small cyan `✓` circle badge in the upper-right.
5. Locked nodes are dim grey, smaller, non-interactive.
6. Hover an unlocked node:
   - Node scales to 1.06× with a stronger glow.
   - Other nodes fade to 18 % opacity.
   - Edges touching the node turn cyan with a drop-shadow.
   - Cyan particles flow along each connected edge, 3 staggered pulses.
7. Mouse leave → everything restores smoothly in 180 ms.
8. Click a node → DetailPanel opens (doc 06 styling).
9. Complete a node in the panel → the graph updates immediately: the node's stroke turns cyan, its check badge appears, and the edge from its dependent(s) turns gold-dashed.

## Verification checklist

- [ ] `SkillGraph.jsx` matches Task 7.1.
- [ ] No references to `hsl(`, `nodeColors`, `emoji`, or `level-badge` remain anywhere in the file.
- [ ] The CSS block for the SVG was replaced with Task 7.2.
- [ ] Level 1 is hex, level max is circle with dashed ring, everything between is plain circle.
- [ ] Hover animation feels smooth at 60 fps on a 20-node tree.
- [ ] Build succeeds. Dev server shows no console errors on graph render.
- [ ] `node.emoji` is ignored (no rendering).

## Out of scope

- Graph panning / zooming. The graph stays scrollable inside `.graphContainer`.
- Graph search / filter. None exists today.
- A force-directed layout. We keep the current level-row grid.
- Any change to `SkillTreeContext` or the tree generation API.
