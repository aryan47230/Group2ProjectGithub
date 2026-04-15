import { useEffect, useRef } from 'react';
import styles from './SkillTree.module.css';

const NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

function addLabel(g, text, maxChars, className, startY = null) {
  const words = text.split(' ');
  const lines = [];
  let current = [];
  for (const word of words) {
    const attempt = [...current, word].join(' ');
    if (attempt.length > maxChars && current.length > 0) {
      lines.push(current.join(' '));
      current = [word];
    } else {
      current.push(word);
    }
  }
  if (current.length) lines.push(current.join(' '));

  const lineH = 14;
  const y0 = startY !== null ? startY : -((lines.length - 1) * lineH) / 2;
  for (let i = 0; i < lines.length; i++) {
    const t = el('text', { class: className, x: '0', y: String(y0 + i * lineH) });
    t.textContent = lines[i];
    g.appendChild(t);
  }
}

function nodeColors(t, completed) {
  if (completed) return { fill: 'hsl(142, 35%, 13%)', stroke: 'hsl(142, 60%, 40%)' };
  return {
    fill: `hsl(${265 + t * 20}, 30%, ${12 + t * 10}%)`,
    stroke: `hsl(${265 + t * 20}, ${50 + t * 40}%, ${40 + t * 25}%)`,
  };
}

export default function SkillGraph({ nodes, completedNodes, onNodeClick }) {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || !nodes?.length) return;

    svg.innerHTML = '';
    const nodeCircleMap = new Map();
    const edgeList = [];

    // Normalize
    for (const node of nodes) {
      node.level = node.level || 1;
      node.requires = node.requires || [];
    }

    const levels = {};
    let maxLevel = 0;
    for (const node of nodes) {
      if (!levels[node.level]) levels[node.level] = [];
      levels[node.level].push(node);
      maxLevel = Math.max(maxLevel, node.level);
    }

    const isUnlocked = (name) => {
      const node = nodes.find((n) => n.name === name);
      if (!node || node.requires.length === 0) return true;
      return node.requires.every((r) => completedNodes.has(r));
    };

    const W = container.clientWidth || 800;
    const nodeR = 42;
    const vPad = 60;
    const levelGap = 150;
    const topY = vPad + nodeR;
    const totalH = topY + (maxLevel - 1) * levelGap + nodeR + vPad;

    svg.setAttribute('width', W);
    svg.setAttribute('height', totalH);

    // Defs
    const defsEl = document.createElementNS(NS, 'defs');

    const marker = el('marker', {
      id: 'arrowhead', markerWidth: '8', markerHeight: '8',
      refX: '4', refY: '4', orient: 'auto',
    });
    marker.appendChild(el('path', { d: 'M 0 0 L 8 4 L 0 8 Z', fill: '#7c6aaa' }));
    defsEl.appendChild(marker);

    for (let lvl = 1; lvl <= maxLevel; lvl++) {
      const t = (lvl - 1) / Math.max(maxLevel - 1, 1);
      const hue = 265 + t * 20;
      const grad = el('radialGradient', {
        id: `grad-lvl-${lvl}`, cx: '40%', cy: '35%', r: '65%', fx: '40%', fy: '35%',
      });
      grad.appendChild(el('stop', { offset: '0%', 'stop-color': `hsl(${hue}, 28%, ${26 + t * 14}%)` }));
      grad.appendChild(el('stop', { offset: '100%', 'stop-color': `hsl(${hue}, 35%, ${8 + t * 8}%)` }));
      defsEl.appendChild(grad);
    }

    const gradC = el('radialGradient', { id: 'grad-completed', cx: '40%', cy: '35%', r: '65%', fx: '40%', fy: '35%' });
    gradC.appendChild(el('stop', { offset: '0%', 'stop-color': 'hsl(142, 30%, 22%)' }));
    gradC.appendChild(el('stop', { offset: '100%', 'stop-color': 'hsl(142, 40%, 8%)' }));
    defsEl.appendChild(gradC);

    svg.appendChild(defsEl);

    // Positions
    const pos = {};
    for (let lvl = 1; lvl <= maxLevel; lvl++) {
      const row = levels[lvl] || [];
      const y = topY + (maxLevel - lvl) * levelGap;
      row.forEach((node, i) => {
        pos[node.name] = { x: (W / (row.length + 1)) * (i + 1), y, level: node.level };
      });
    }

    // Level labels + rules
    for (let lvl = 1; lvl <= maxLevel; lvl++) {
      const y = topY + (maxLevel - lvl) * levelGap;
      const label = el('text', { x: '10', y: String(y + 5), class: 'level-axis-label' });
      label.textContent = `Lvl ${lvl}`;
      svg.appendChild(label);
      svg.appendChild(el('line', { x1: '0', y1: y, x2: W, y2: y, class: 'level-rule' }));
    }

    // Edges
    for (const node of nodes) {
      const from = pos[node.name];
      if (!from) continue;
      for (const req of node.requires) {
        const to = pos[req];
        if (!to) continue;
        const sx = from.x, sy = from.y + nodeR + 2;
        const ex = to.x, ey = to.y - nodeR - 9;
        const cp = Math.min(55, Math.abs(ey - sy) * 0.38);
        const d = `M ${sx},${sy} C ${sx},${sy + cp} ${ex},${ey - cp} ${ex},${ey}`;
        const edgeEl = el('path', { d, class: 'edge', 'marker-end': 'url(#arrowhead)' });
        svg.appendChild(edgeEl);
        edgeList.push({ el: edgeEl, from: node.name, to: req });
      }
    }

    // Nodes
    for (const node of nodes) {
      const p = pos[node.name];
      if (!p) continue;

      const g = el('g', { transform: `translate(${p.x},${p.y})` });
      const t = (node.level - 1) / Math.max(maxLevel - 1, 1);
      const completed = completedNodes.has(node.name);
      const { stroke } = nodeColors(t, completed);
      const gradId = `grad-lvl-${node.level}`;
      const locked = !isUnlocked(node.name);

      const ring = el('circle', {
        r: String(nodeR + 6), fill: 'none', stroke, 'stroke-width': '1', opacity: '0.28',
      });
      g.appendChild(ring);

      const circle = el('circle', {
        r: String(nodeR),
        fill: completed ? 'url(#grad-completed)' : `url(#${gradId})`,
        stroke,
        'stroke-width': '2.5',
      });
      nodeCircleMap.set(node.name, { circle, ring, t, group: g, gradId });
      g.appendChild(circle);

      g.classList.add(styles.nodeClickable);
      if (locked) g.classList.add(styles.nodeLocked);
      if (completed) g.classList.add(styles.nodeCompleted);

      const badge = el('text', { x: String(nodeR - 6), y: String(-nodeR + 10), class: 'level-badge' });
      badge.textContent = `L${node.level}`;
      g.appendChild(badge);

      const emojiText = el('text', { x: '0', y: '10', class: 'node-emoji' });
      emojiText.textContent = node.emoji || '\u2B50';
      g.appendChild(emojiText);

      addLabel(g, node.name, 10, 'node-label-below', nodeR + 10);

      g.addEventListener('click', () => onNodeClick(node));

      g.addEventListener('mouseenter', () => {
        const active = new Set([node.name, ...node.requires]);
        for (const [name, entry] of nodeCircleMap) {
          entry.group.classList.toggle(styles.nodeDimmed, !active.has(name));
        }
        for (const edge of edgeList) {
          const isConnected = edge.from === node.name && active.has(edge.to);
          edge.el.classList.toggle(styles.edgeDimmed, !isConnected);
          if (isConnected) {
            const done = completedNodes.has(edge.to);
            edge.el.style.stroke = done ? 'hsl(142, 60%, 40%)' : '#6d5aad';
            edge.el.style.strokeWidth = done ? '2.5' : '2';
          }
        }

        const pulseGroup = document.createElementNS(NS, 'g');
        pulseGroup.dataset.role = 'pulses';
        svg.appendChild(pulseGroup);

        for (const edge of edgeList) {
          if (edge.to !== node.name) continue;
          const from = pos[node.name];
          const to = pos[edge.from];
          if (!from || !to) continue;

          const done = completedNodes.has(edge.from);
          const color = done ? 'hsl(142, 60%, 45%)' : '#ffffff';
          const sx = from.x, sy = from.y - nodeR - 9;
          const ex = to.x, ey = to.y + nodeR + 2;
          const cp = Math.min(55, Math.abs(sy - ey) * 0.38);
          const pathD = `M ${sx},${sy} C ${sx},${sy - cp} ${ex},${ey + cp} ${ex},${ey}`;
          const dur = '2.2s';

          for (let i = 0; i < 3; i++) {
            const begin = `${i * 0.73}s`;
            const orbG = document.createElementNS(NS, 'g');

            const bloom = document.createElementNS(NS, 'circle');
            bloom.setAttribute('r', '11');
            bloom.setAttribute('fill', color);
            bloom.setAttribute('opacity', '0');
            const bloomAnim = document.createElementNS(NS, 'animate');
            bloomAnim.setAttribute('attributeName', 'opacity');
            bloomAnim.setAttribute('values', '0;0.22;0.22;0');
            bloomAnim.setAttribute('keyTimes', '0;0.15;0.75;1');
            bloomAnim.setAttribute('dur', dur);
            bloomAnim.setAttribute('begin', begin);
            bloomAnim.setAttribute('repeatCount', 'indefinite');
            bloom.appendChild(bloomAnim);

            const dot = document.createElementNS(NS, 'circle');
            dot.setAttribute('r', '5');
            dot.setAttribute('fill', color);
            dot.setAttribute('opacity', '0');
            const dotAnim = document.createElementNS(NS, 'animate');
            dotAnim.setAttribute('attributeName', 'opacity');
            dotAnim.setAttribute('values', '0;0.95;0.95;0');
            dotAnim.setAttribute('keyTimes', '0;0.15;0.75;1');
            dotAnim.setAttribute('dur', dur);
            dotAnim.setAttribute('begin', begin);
            dotAnim.setAttribute('repeatCount', 'indefinite');
            dot.appendChild(dotAnim);

            const animMotion = document.createElementNS(NS, 'animateMotion');
            animMotion.setAttribute('dur', dur);
            animMotion.setAttribute('begin', begin);
            animMotion.setAttribute('repeatCount', 'indefinite');
            animMotion.setAttribute('path', pathD);

            orbG.appendChild(bloom);
            orbG.appendChild(dot);
            orbG.appendChild(animMotion);
            pulseGroup.appendChild(orbG);
          }
        }
      });

      g.addEventListener('mouseleave', () => {
        for (const entry of nodeCircleMap.values()) entry.group.classList.remove(styles.nodeDimmed);
        for (const edge of edgeList) {
          edge.el.classList.remove(styles.edgeDimmed);
          edge.el.style.stroke = '';
          edge.el.style.strokeWidth = '';
        }
        svg.querySelectorAll("[data-role='pulses']").forEach((p) => p.remove());
      });

      svg.appendChild(g);
    }

    return () => {
      svg.innerHTML = '';
    };
  }, [nodes, completedNodes, onNodeClick]);

  return (
    <div ref={containerRef} className={styles.graphContainer}>
      <svg ref={svgRef} className={styles.graph} />
    </div>
  );
}
