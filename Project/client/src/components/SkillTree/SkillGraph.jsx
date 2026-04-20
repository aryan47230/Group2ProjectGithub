/**
 * SkillGraph.jsx
 *
 * Renders the skill tree as a horizontal left-to-right SVG graph.
 * Foundations (level 1) appear in the leftmost column; the apex/final node
 * appears in the rightmost column. Each level occupies a vertical column of
 * stacked nodes. Edges flow left → right as smooth cubic Bézier curves with
 * deterministic natural jitter so they feel organic rather than mechanical.
 *
 * ── Connectivity algorithm ────────────────────────────────────────────────────
 * The API may not connect every node to the level above it. To guarantee a
 * fully-connected visual tree (no orphaned nodes), the component runs a post-
 * process pass after receiving `nodes`:
 *
 *   For each level L from 1 to maxLevel-1:
 *     For each node N at level L:
 *       If no node at level L+1 lists N in its `requires` array:
 *         Find the node in level L+1 whose column index is proportionally
 *         closest to N's own column index (t = i / (colSize-1)).
 *         Add N as an extra prerequisite of that target node.
 *
 * This runs only on the local copy and never mutates the original `nodes` prop,
 * so the DetailPanel and the rest of the app continue to see unmodified data.
 *
 * ── Edge jitter ───────────────────────────────────────────────────────────────
 * Each edge's two cubic control points receive independent vertical offsets
 * computed via FNV-1a hash of the edge's "from|to" and "to|from" keys.
 * The same edge always gets the same jitter (deterministic), so no flicker on
 * re-renders, yet the overall graph feels handcrafted rather than algorithmic.
 *
 * ── Hover chain ───────────────────────────────────────────────────────────────
 * Hovering a node runs a two-direction BFS:
 *   • Backward (toward prerequisites): follows edges until it reaches nodes
 *     that are already completed — those are the "already-unlocked" boundaries.
 *   • Forward (toward apex): follows all upward edges unconditionally.
 * Every edge in the collected chain is highlighted; everything else is dimmed.
 *
 * ── Node symbols ─────────────────────────────────────────────────────────────
 * Nodes display an `icon` field from the API (expected to be a Unicode math /
 * technical symbol, e.g. ∑ ∂ λ ◈ ∇ μ σ ƒ π ∧∨ ✦). If the field is absent,
 * the component falls back to the first character of the node's name. No emoji
 * codepoints are used; all symbols render cleanly in JetBrains Mono.
 */

import { useEffect, useRef } from 'react';
import styles from './SkillTree.module.css';

const NS = 'http://www.w3.org/2000/svg';

function mk(tag, attrs = {}) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

/**
 * FNV-1a hash → deterministic vertical jitter for a single edge control point.
 * `range` is the maximum absolute offset in pixels (applied ±).
 */
function edgeJitter(from, to, range = 20) {
  const seed = `${from}|${to}`;
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i++) {
    h = (h ^ seed.charCodeAt(i)) >>> 0;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return ((h % (range * 2 + 1)) - range);
}

// ── Layout constants ──────────────────────────────────────────────────────────
const COL_GAP  = 220;   // px between level columns
const NODE_GAP = 145;   // px between nodes within a column
const PAD_L    = 85;    // left padding before first column
const PAD_R    = 140;   // right padding after apex (room for apex label)
const PAD_V    = 75;    // top/bottom padding

// Node radii by state
const R_APEX = 48;
const R_DONE = 40;
const R_OPEN = 36;
const R_LOCK = 30;

export default function SkillGraph({ nodes, completedNodes, justCompleted, onNodeClick }) {
  const containerRef = useRef(null);
  const svgRef       = useRef(null);
  const tooltipRef   = useRef(null);

  useEffect(() => {
    const svg       = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || !nodes?.length) return;
    svg.innerHTML = '';

    // ── 1. Normalize incoming data (do not mutate props) ───────────────────
    const normalised = nodes.map(n => ({
      ...n,
      level:    n.level    ?? 1,
      requires: n.requires ?? [],
      icon:     n.icon     || n.name[0] || '◆',
    }));

    const maxLevel = Math.max(...normalised.map(n => n.level));
    const byLevel  = {};
    for (const n of normalised) (byLevel[n.level] ||= []).push(n);

    // ── 2. Ensure connectivity ─────────────────────────────────────────────
    // Build a local augmented-requires map (Set per node name).
    const augReq = {};
    for (const n of normalised) augReq[n.name] = new Set(n.requires);

    for (let lv = 1; lv < maxLevel; lv++) {
      const col      = byLevel[lv]     || [];
      const nextCol  = byLevel[lv + 1] || [];
      if (!nextCol.length) continue;

      col.forEach((node, i) => {
        const alreadyLinked = nextCol.some(n => augReq[n.name].has(node.name));
        if (!alreadyLinked) {
          // Proportional index mapping: place this node's "slot" into the next column
          const t          = col.length > 1 ? i / (col.length - 1) : 0.5;
          const targetIdx  = Math.round(t * (nextCol.length - 1));
          augReq[nextCol[Math.min(targetIdx, nextCol.length - 1)].name].add(node.name);
        }
      });
    }

    const isUnlocked = name => {
      const reqs = [...(augReq[name] || [])];
      return reqs.length === 0 || reqs.every(r => completedNodes.has(r));
    };

    // ── 3. SVG dimensions & node positions ────────────────────────────────
    const maxPerCol = Math.max(...Object.values(byLevel).map(a => a.length));
    const SVG_H     = (maxPerCol - 1) * NODE_GAP + PAD_V * 2;
    const SVG_W     = PAD_L + (maxLevel - 1) * COL_GAP + PAD_R;

    // Per-node positional jitter — keeps the layout deterministic per name so
    // the same tree never reshuffles, but breaks the rigid grid feel by giving
    // each node a stable random offset around its column slot.
    // Apex (highest level) and level-1 foundations stay aligned for readability.
    const X_JITTER = 18; // px around the column x
    const Y_JITTER = 22; // px around the row y
    const pos = {};
    for (let lv = 1; lv <= maxLevel; lv++) {
      const col    = byLevel[lv] || [];
      const x      = PAD_L + (lv - 1) * COL_GAP;
      const colH   = (col.length - 1) * NODE_GAP;
      const startY = SVG_H / 2 - colH / 2;
      const isAnchor = lv === 1 || lv === maxLevel;
      col.forEach((n, i) => {
        const jx = isAnchor ? 0 : edgeJitter(n.name, 'x', X_JITTER);
        const jy = isAnchor ? 0 : edgeJitter(n.name, 'y', Y_JITTER);
        pos[n.name] = { x: x + jx, y: startY + i * NODE_GAP + jy };
      });
    }

    svg.setAttribute('width',   SVG_W);
    svg.setAttribute('height',  SVG_H);
    svg.setAttribute('viewBox', `0 0 ${SVG_W} ${SVG_H}`);

    // ── 4. SVG defs ────────────────────────────────────────────────────────
    const defs = mk('defs');

    // Dot grid background pattern
    const pat = mk('pattern', { id: 'rn-dots', width: '30', height: '30', patternUnits: 'userSpaceOnUse' });
    pat.appendChild(mk('circle', { cx: '0.5', cy: '0.5', r: '.65', fill: 'rgba(130,170,220,0.08)' }));
    defs.appendChild(pat);

    // Bloom filter — soft radial glow used behind each node on hover (wikiloop-style)
    const bloomF = mk('filter', { id: 'rn-bloom', x: '-150%', y: '-150%', width: '400%', height: '400%' });
    bloomF.appendChild(mk('feGaussianBlur', { stdDeviation: '14' }));
    defs.appendChild(bloomF);

    // Glow filters (feGaussianBlur + feFlood composite)
    [
      ['rn-glA', 9,  '#ffaa40'],  // apex gold
      ['rn-glD', 5,  '#00fff2'],  // done cyan
      ['rn-glO', 4,  '#4d9fff'],  // open blue
      ['rn-glH', 10, '#00fff2'],  // hover highlight
    ].forEach(([id, std, col]) => {
      const f = mk('filter', { id, x: '-80%', y: '-80%', width: '260%', height: '260%' });
      f.appendChild(mk('feGaussianBlur', { in: 'SourceAlpha', stdDeviation: String(std), result: 'b' }));
      f.appendChild(mk('feFlood',        { 'flood-color': col, result: 'c' }));
      f.appendChild(mk('feComposite',    { in: 'c', in2: 'b', operator: 'in', result: 'g' }));
      const m = mk('feMerge');
      m.appendChild(mk('feMergeNode', { in: 'g' }));
      m.appendChild(mk('feMergeNode', { in: 'SourceGraphic' }));
      f.appendChild(m);
      defs.appendChild(f);
    });

    svg.appendChild(defs);
    svg.appendChild(mk('rect', { width: SVG_W, height: SVG_H, fill: 'url(#rn-dots)' }));

    // ── 5. Edges ───────────────────────────────────────────────────────────
    // Each edge goes from the right-edge of the prerequisite node (leftward)
    // to the left-edge of the dependent node (rightward).
    // Control points receive independent vertical jitter for a natural look.
    const edgeLayer = mk('g');
    const edgeList  = [];  // { el, from, to, bothDone, isLocked }

    for (const skill of normalised) {
      const sp      = pos[skill.name];
      if (!sp) continue;
      const isDoneSk = completedNodes.has(skill.name);

      for (const req of [...(augReq[skill.name] || [])]) {
        const rp = pos[req];
        if (!rp) continue;

        const isDoneReq = completedNodes.has(req);
        const bothDone  = isDoneSk && isDoneReq;
        const isLocked  = !isUnlocked(skill.name);

        // Edge endpoints sit at the node perimeter, not the centre
        const rSrc = isDoneReq ? R_DONE : (isUnlocked(req) ? R_OPEN : R_LOCK);
        const rDst = skill.level === maxLevel ? R_APEX
                   : isDoneSk ? R_DONE : isLocked ? R_LOCK : R_OPEN;

        const x1 = rp.x + rSrc;  // right side of prerequisite
        const y1 = rp.y;
        const x2 = sp.x - rDst;  // left side of dependent
        const y2 = sp.y;
        const cp = (x2 - x1) * 0.48;

        // Two independent jitters keep each curve feeling unique
        const j1 = edgeJitter(skill.name, req,       18);
        const j2 = edgeJitter(req,        skill.name, 18);
        const d  = `M ${x1},${y1} C ${x1+cp},${y1+j1} ${x2-cp},${y2+j2} ${x2},${y2}`;

        const e = mk('path', { d, fill: 'none', 'pointer-events': 'none' });

        if (bothDone) {
          e.setAttribute('stroke', 'rgba(0,255,242,0.58)');
          e.setAttribute('stroke-width', '2');
          e.style.filter = 'drop-shadow(0 0 3px rgba(0,255,242,0.44))';
        } else if (isLocked) {
          e.setAttribute('stroke', 'rgba(80,95,115,0.14)');
          e.setAttribute('stroke-width', '1');
        } else {
          e.setAttribute('stroke', 'rgba(77,159,255,0.15)');
          e.setAttribute('stroke-width', '1.5');
        }

        edgeList.push({ el: e, from: skill.name, to: req, bothDone, isLocked });
        edgeLayer.appendChild(e);
      }
    }
    svg.appendChild(edgeLayer);

    // ── 6. Nodes ───────────────────────────────────────────────────────────
    const nodeLayer  = mk('g');
    const nodeGroups = new Map();  // name → { g, skill, isApex, isDone, isLock }

    for (const skill of normalised) {
      const p = pos[skill.name];
      if (!p) continue;

      const isApex = skill.level === maxLevel;
      const isDone = completedNodes.has(skill.name);
      const isLock = !isUnlocked(skill.name);
      const r      = isApex ? R_APEX : isDone ? R_DONE : isLock ? R_LOCK : R_OPEN;

      let strokeCol, fillColor, glowId, textCol, strokeW;
      if      (isApex) { strokeCol = '#ffaa40'; fillColor = 'none';                  glowId = 'rn-glA'; textCol = '#ffaa40'; strokeW = '2.5'; }
      else if (isDone) { strokeCol = '#00fff2'; fillColor = 'none';                  glowId = 'rn-glD'; textCol = '#00fff2'; strokeW = '1.8'; }
      else if (isLock) { strokeCol = '#3d4e62'; fillColor = 'rgba(20,30,45,0.15)';  glowId = '';        textCol = '#3d4e62'; strokeW = '1.0'; }
      else             { strokeCol = '#4d9fff'; fillColor = 'none';                  glowId = 'rn-glO'; textCol = '#6aacff'; strokeW = '1.5'; }

      const g = mk('g', { transform: `translate(${p.x},${p.y})`, 'data-name': skill.name });

      // ── Bloom circle — blurred radial glow rendered behind the node on hover ─
      const bloom = mk('circle', {
        r: String(r + 15), fill: strokeCol,
        opacity: '0', 'pointer-events': 'none',
      });
      bloom.setAttribute('filter', 'url(#rn-bloom)');
      g.appendChild(bloom);

      // ── Transparent hit area ──────────────────────────────────────────────
      // Sits on top of all children. Every child has pointer-events:none so
      // only this element fires pointer events → no spurious mouseenter/leave.
      g.appendChild(mk('circle', { r: String(r + 16), fill: 'transparent', stroke: 'none' }));

      // ── Ambient pulse ring (non-apex, non-locked) ─────────────────────────
      if (!isApex && !isLock) {
        const ring = mk('circle', {
          r: String(r + 12), fill: 'none', stroke: strokeCol,
          'stroke-width': '0.8', 'pointer-events': 'none',
        });
        ring.classList.add(styles.nodeRing);
        g.appendChild(ring);
      }

      // ── Main circle ───────────────────────────────────────────────────────
      const circle = mk('circle', {
        r: String(r), fill: fillColor,
        stroke: strokeCol, 'stroke-width': strokeW, 'pointer-events': 'none',
      });
      if (glowId) circle.setAttribute('filter', `url(#${glowId})`);
      g.appendChild(circle);

      // ── Apex inner ring (solid, bold — no dash, no animation) ─────────────
      if (isApex) {
        g.appendChild(mk('circle', {
          r: String(r - 9), fill: 'none', stroke: '#ffaa40',
          'stroke-width': '1.5', opacity: '.40', 'pointer-events': 'none',
        }));
      }

      // ── Icon — upper half of node ──────────────────────────────────────────
      // Uses node.icon (Unicode math/technical symbol from API) or first char.
      // JetBrains Mono guarantees consistent rendering for all Unicode symbols.
      const icon   = skill.icon;
      const iconSz = isApex ? 17 : icon.length > 2 ? 11.5 : 15;
      const iconEl = mk('text', {
        x: '0', y: isApex ? '-10' : '-7',
        'text-anchor': 'middle', 'dominant-baseline': 'middle',
        fill: textCol, 'font-family': "'JetBrains Mono', monospace",
        'font-size': String(iconSz), 'font-weight': '600', 'pointer-events': 'none',
      });
      iconEl.textContent = icon;
      g.appendChild(iconEl);

      // ── Short label — lower half of node ──────────────────────────────────
      const short  = skill.name.length > 8 ? skill.name.slice(0, 7) + '…' : skill.name;
      const inLbl  = mk('text', {
        x: '0', y: isApex ? '12' : '10',
        'text-anchor': 'middle', 'dominant-baseline': 'middle',
        fill: textCol, 'font-family': "'Outfit', sans-serif",
        'font-size': isApex ? '9' : '8', 'font-weight': '500',
        'letter-spacing': '.04em', opacity: '.70', 'pointer-events': 'none',
      });
      inLbl.textContent = short;
      g.appendChild(inLbl);

      // ── External label ────────────────────────────────────────────────────
      if (isApex) {
        // Apex label sits to the right of the node
        const lbl = mk('text', {
          x: String(r + 15), y: '1',
          'text-anchor': 'start', 'dominant-baseline': 'middle',
          fill: '#ffaa40', 'font-family': "'Outfit', sans-serif",
          'font-size': '13.5', 'font-weight': '600',
          'letter-spacing': '.04em', 'pointer-events': 'none',
        });
        lbl.textContent = skill.name;
        g.appendChild(lbl);
      } else {
        // All other nodes: label centred below the circle
        const labelColor = isDone ? '#aabbd0' : isLock ? '#252f3c' : '#7a94b8';
        const lbl = mk('text', {
          x: '0', y: String(r + 16),
          'text-anchor': 'middle', 'dominant-baseline': 'hanging',
          fill: labelColor, 'font-family': "'Outfit', sans-serif",
          'font-size': '11', 'font-weight': isDone ? '500' : '400',
          'letter-spacing': '.025em', 'pointer-events': 'none',
        });
        lbl.textContent = skill.name;
        g.appendChild(lbl);
      }

      // ── Completed check badge (top-right corner) ──────────────────────────
      if (isDone && !isApex) {
        const bx = r * 0.62, by = -r * 0.62;
        g.appendChild(mk('circle', {
          cx: String(bx), cy: String(by), r: '7.5',
          fill: '#070b18', stroke: '#00fff2', 'stroke-width': '1.1', 'pointer-events': 'none',
        }));
        const ck = mk('text', {
          x: String(bx), y: String(by + 0.5),
          'text-anchor': 'middle', 'dominant-baseline': 'middle',
          fill: '#00fff2', 'font-family': "'JetBrains Mono', monospace",
          'font-size': '9', 'font-weight': '700', 'pointer-events': 'none',
        });
        ck.textContent = '✓';
        g.appendChild(ck);
      }

      // ── Completion pulse animation ────────────────────────────────────────
      if (justCompleted === skill.name && isDone) {
        const pulse = mk('circle', {
          r: String(r), fill: 'none',
          stroke: '#00fff2', 'stroke-width': '2', 'pointer-events': 'none',
          opacity: '0.8',
        });
        pulse.style.transformOrigin = 'center';
        pulse.classList.add(styles.completePulse);
        g.appendChild(pulse);
        // Second delayed ring
        const pulse2 = mk('circle', {
          r: String(r), fill: 'none',
          stroke: '#00fff2', 'stroke-width': '1.5', 'pointer-events': 'none',
          opacity: '0.5',
        });
        pulse2.style.transformOrigin = 'center';
        pulse2.style.animationDelay = '0.15s';
        pulse2.classList.add(styles.completePulse);
        g.appendChild(pulse2);
      }

      g.addEventListener('click', () => {
        if (tooltipRef.current) tooltipRef.current.style.opacity = '0';
        onNodeClick(skill);
      });

      nodeGroups.set(skill.name, { g, skill, isApex, isDone, isLock, strokeCol, bloom, px: p.x, py: p.y });
      nodeLayer.appendChild(g);
    }
    svg.appendChild(nodeLayer);

    // ── 7. Hover interactions ─────────────────────────────────────────────
    // collectChain: two-direction BFS from the hovered node.
    //   • Backward (prerequisite direction): follows edges until it reaches
    //     nodes that are already completed ("already-unlocked" boundary).
    //   • Forward (apex direction): follows all upward edges unconditionally.
    // This shows the user both what they need (incomplete chain) and where
    // the skill leads (forward chain to the final node).

    function collectChain(startName) {
      const result = new Set();

      // Backward BFS — follows prerequisite edges only (left direction toward foundations)
      const qB = [startName], visB = new Set();
      while (qB.length) {
        const cur = qB.shift();
        if (visB.has(cur)) continue;
        visB.add(cur);
        for (const ed of edgeList) {
          if (ed.from === cur) {
            result.add(ed);
            // Stop descending into already-completed prerequisites
            if (!completedNodes.has(ed.to) && !visB.has(ed.to)) qB.push(ed.to);
          }
        }
      }

      return result;
    }

    function resetEdges() {
      for (const ed of edgeList) {
        ed.el.style.opacity = '';
        if (ed.bothDone) {
          ed.el.setAttribute('stroke', 'rgba(0,255,242,0.58)');
          ed.el.setAttribute('stroke-width', '2');
          ed.el.style.filter = 'drop-shadow(0 0 3px rgba(0,255,242,0.44))';
        } else if (ed.isLocked) {
          ed.el.setAttribute('stroke', 'rgba(80,95,115,0.14)');
          ed.el.setAttribute('stroke-width', '1');
          ed.el.style.filter = '';
        } else {
          ed.el.setAttribute('stroke', 'rgba(77,159,255,0.15)');
          ed.el.setAttribute('stroke-width', '1.5');
          ed.el.style.filter = '';
        }
      }
    }

    for (const [name, { g, skill, isApex, bloom, px, py }] of nodeGroups) {
      g.addEventListener('mouseenter', () => {
        // Scale up and reveal the bloom — radial shine behind the node (wikiloop-style)
        g.setAttribute('transform', `translate(${px},${py}) scale(1.13)`);
        bloom.setAttribute('opacity', isApex ? '0.32' : '0.24');

        // Show tooltip
        const tip = tooltipRef.current;
        if (tip) {
          const reqs = skill.requires?.length ? skill.requires.join(', ') : null;
          tip.innerHTML = `<div class="${styles.tooltipName}">${skill.name}</div>`
            + `<div class="${styles.tooltipLevel}">LVL ${skill.level}</div>`
            + (skill.description ? `<div class="${styles.tooltipDesc}">${skill.description.slice(0, 120)}${skill.description.length > 120 ? '...' : ''}</div>` : '')
            + (reqs ? `<div class="${styles.tooltipReqs}">Requires: ${reqs}</div>` : '');
          // Position relative to the container
          const containerRect = containerRef.current.getBoundingClientRect();
          const svgRect = svgRef.current.getBoundingClientRect();
          const scrollLeft = containerRef.current.scrollLeft;
          const scrollTop = containerRef.current.scrollTop;
          const tipX = px - scrollLeft + (svgRect.left - containerRect.left);
          const tipY = py - scrollTop + (svgRect.top - containerRect.top) - 20;
          tip.style.left = `${tipX}px`;
          tip.style.top = `${tipY}px`;
          tip.style.opacity = '1';
          tip.style.pointerEvents = 'none';
        }

        // Dim every other node (softened — less harsh than before)
        for (const [n, { g: og }] of nodeGroups) {
          if (n !== name) og.style.opacity = '0.38';
        }

        // Highlight prerequisite chain edges, dim everything else
        const chain = collectChain(name);
        for (const ed of edgeList) {
          if (chain.has(ed)) {
            ed.el.setAttribute('stroke', ed.bothDone
              ? 'rgba(0,255,242,0.95)'
              : 'rgba(77,159,255,0.88)');
            ed.el.setAttribute('stroke-width', '2.5');
            ed.el.style.filter = ed.bothDone
              ? 'drop-shadow(0 0 6px rgba(0,255,242,0.60))'
              : 'drop-shadow(0 0 5px rgba(77,159,255,0.46))';
            ed.el.style.opacity = '1';
          } else {
            ed.el.style.opacity = '0.04';
          }
        }
      });

      g.addEventListener('mouseleave', () => {
        // Reset scale and hide bloom
        g.setAttribute('transform', `translate(${px},${py})`);
        bloom.setAttribute('opacity', '0');
        for (const [, { g: og }] of nodeGroups) og.style.opacity = '';
        resetEdges();
        // Hide tooltip
        if (tooltipRef.current) tooltipRef.current.style.opacity = '0';
      });
    }

    return () => { svg.innerHTML = ''; };
  }, [nodes, completedNodes, justCompleted, onNodeClick]);

  return (
    <div ref={containerRef} className={styles.graphContainer}>
      <svg ref={svgRef} className={styles.graph} />
      <div ref={tooltipRef} className={styles.nodeTooltip} />
    </div>
  );
}
