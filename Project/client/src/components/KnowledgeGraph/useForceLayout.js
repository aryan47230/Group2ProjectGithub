import { useState, useEffect, useRef, useCallback } from 'react';
import { forceSimulation, forceLink, forceCollide, forceX, forceY } from 'd3-force';

/**
 * Tree-like layout:
 * - First concept at canvas center, subsequent centers stay where they are
 * - New primary nodes fan out in a wide semicircle AWAY from parent direction
 * - Settled nodes anchor strongly (soft-pin) but can be nudged by collisions
 * - No many-body charge force — tree structure comes from link distances + anchoring
 * - Simulation auto-stops when alpha < 0.01
 * - Canvas expands dynamically when nodes approach edges
 */

// Fixed large canvas — large enough that nodes never reach the edges in practice.
// Dynamic expansion is kept as a safety net but should rarely trigger.
const INITIAL_WIDTH = 12000;
const INITIAL_HEIGHT = 9000;
const CANVAS_PADDING = 500;
const CANVAS_EXPAND = 2000;
const SETTLE_THRESHOLD = 0.01;

export default function useForceLayout(graphData, prevCenterTitle) {
  const [positions, setPositions] = useState({});
  const [canvasSize, setCanvasSize] = useState({ width: INITIAL_WIDTH, height: INITIAL_HEIGHT });
  const simRef = useRef(null);
  const positionRef = useRef({});
  const settledRef = useRef({});
  const isFirstConcept = useRef(true);
  const frameRef = useRef(null);
  const newNodeIds = useRef(new Set());
  const canvasSizeRef = useRef({ width: INITIAL_WIDTH, height: INITIAL_HEIGHT });
  const nudgeTotalRef = useRef({}); // tracks cumulative nudge distance per node

  // Keep canvas size in ref so simulation effect doesn't depend on it
  useEffect(() => {
    canvasSizeRef.current = canvasSize;
  }, [canvasSize]);

  const updateCanvasSize = useCallback((pos) => {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const id in pos) {
      const p = pos[id];
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }

    setCanvasSize((prev) => {
      let { width, height } = prev;
      let changed = false;
      if (minX < CANVAS_PADDING) { width += CANVAS_EXPAND; changed = true; }
      if (maxX > width - CANVAS_PADDING) { width += CANVAS_EXPAND; changed = true; }
      if (minY < CANVAS_PADDING) { height += CANVAS_EXPAND; changed = true; }
      if (maxY > height - CANVAS_PADDING) { height += CANVAS_EXPAND; changed = true; }
      return changed ? { width, height } : prev;
    });
  }, []);

  useEffect(() => {
    if (!graphData || !graphData.nodes.length) {
      setPositions({});
      positionRef.current = {};
      settledRef.current = {};
      isFirstConcept.current = true;
      return;
    }

    if (simRef.current) simRef.current.stop();
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const { width: cw, height: ch } = canvasSizeRef.current;
    const cx = cw / 2;
    const cy = ch / 2;

    // Find the center node and determine the best spawn direction
    const centerNode = graphData.nodes.find((n) => n.type === 'center');
    let centerAnchorX = cx, centerAnchorY = cy;

    if (centerNode && positionRef.current[centerNode.id]) {
      centerAnchorX = positionRef.current[centerNode.id].x;
      centerAnchorY = positionRef.current[centerNode.id].y;
    }

    // Score angular sectors around center (used as fallback when no directional context)
    const NUM_SECTORS = 12;
    const sectorDensity = new Array(NUM_SECTORS).fill(0);
    const DENSITY_RADIUS = 400; // only count nearby settled nodes

    for (const id in settledRef.current) {
      if (centerNode && id === centerNode.id) continue;
      const p = settledRef.current[id];
      const dx = p.x - centerAnchorX;
      const dy = p.y - centerAnchorY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > DENSITY_RADIUS) continue;
      // Closer nodes count more heavily
      const weight = 1 - (dist / DENSITY_RADIUS);
      const angle = Math.atan2(dy, dx); // -PI to PI
      const sector = Math.floor(((angle + Math.PI) / (2 * Math.PI)) * NUM_SECTORS) % NUM_SECTORS;
      sectorDensity[sector] += weight;
      // Also add weight to adjacent sectors (nodes block a wider arc)
      sectorDensity[(sector + 1) % NUM_SECTORS] += weight * 0.5;
      sectorDensity[(sector - 1 + NUM_SECTORS) % NUM_SECTORS] += weight * 0.5;
    }

    // Compute preferred direction: from old center toward the node just jumped to
    const prevCenterPos = prevCenterTitle ? positionRef.current[prevCenterTitle] : null;
    let preferredAngle = Math.random() * Math.PI * 2;
    if (centerNode && prevCenterPos && positionRef.current[centerNode.id]) {
      const newPos = positionRef.current[centerNode.id];
      const dx = newPos.x - prevCenterPos.x;
      const dy = newPos.y - prevCenterPos.y;
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        preferredAngle = Math.atan2(dy, dx);
      }
    }

    // Spawn direction: if we have a clear preferred direction (jumped to a specific node),
    // always honor it — new nodes extend in the direction the jumped node was facing.
    // Only fall back to density-based selection when there is no directional context.
    const hasPrevCenter = centerNode && prevCenterPos && positionRef.current[centerNode.id];
    let spawnAngle;
    if (hasPrevCenter) {
      // Always use the preferred direction regardless of density.
      // forceCollide will push existing nodes aside to make room.
      spawnAngle = preferredAngle;
    } else {
      // First concept or no directional info: pick the emptiest sector.
      let bestSector = 0;
      let bestScore = -Infinity;
      for (let i = 0; i < NUM_SECTORS; i++) {
        if (-sectorDensity[i] > bestScore) { bestScore = -sectorDensity[i]; bestSector = i; }
      }
      spawnAngle = (bestSector / NUM_SECTORS) * 2 * Math.PI - Math.PI;
    }

    // If area around center is dense, push spawn radius further out
    const nearbyCount = Object.values(settledRef.current).filter((p) => {
      const dx = p.x - centerAnchorX;
      const dy = p.y - centerAnchorY;
      return Math.sqrt(dx * dx + dy * dy) < 300;
    }).length;
    // Minimal density bonus — forceCollide handles separation, not extra spawn radius.
    // Large bonuses caused nodes to spawn very far away in dense graphs.
    const densityBonus = Math.min(nearbyCount * 8, 50); // at most 50px extra

    // Nudge nearby settled nodes outward from new center to create breathing room.
    // Nodes push strongly in their existing direction, with a slight drift toward open space.
    const NUDGE_RADIUS = 450;
    const NUDGE_STRENGTH = 180; // max px to push outward — push harder to clear space
    if (centerNode && positionRef.current[centerNode.id]) {
      // First pass: build a density map so we can steer nodes toward empty space
      const nudgeSectors = 12;
      const nudgeDensity = new Array(nudgeSectors).fill(0);
      for (const id in settledRef.current) {
        if (id === centerNode.id) continue;
        const p = settledRef.current[id];
        const ddx = p.x - centerAnchorX;
        const ddy = p.y - centerAnchorY;
        const dd = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dd < NUDGE_RADIUS && dd > 1) {
          const a = Math.atan2(ddy, ddx);
          const s = Math.floor(((a + Math.PI) / (2 * Math.PI)) * nudgeSectors) % nudgeSectors;
          nudgeDensity[s] += 1;
        }
      }

      // Second pass: push each nearby node outward with slight angular drift toward emptier space
      const MAX_CUMULATIVE_NUDGE = 300; // cap total drift per node
      for (const id in settledRef.current) {
        if (id === centerNode.id) continue;
        const settled = settledRef.current[id];
        const dx = settled.x - centerAnchorX;
        const dy = settled.y - centerAnchorY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < NUDGE_RADIUS && dist > 1) {
          // Check if this node has already been nudged too much
          const totalNudged = nudgeTotalRef.current[id] || 0;
          if (totalNudged >= MAX_CUMULATIVE_NUDGE) continue;

          const falloff = 1 - (dist / NUDGE_RADIUS);
          let pushAmount = NUDGE_STRENGTH * falloff * falloff;
          // Cap so we don't exceed max cumulative
          pushAmount = Math.min(pushAmount, MAX_CUMULATIVE_NUDGE - totalNudged);

          let outAngle = Math.atan2(dy, dx);

          const currentSector = Math.floor(((outAngle + Math.PI) / (2 * Math.PI)) * nudgeSectors) % nudgeSectors;
          const leftSector = (currentSector - 1 + nudgeSectors) % nudgeSectors;
          const rightSector = (currentSector + 1) % nudgeSectors;
          if (nudgeDensity[leftSector] < nudgeDensity[rightSector]) {
            outAngle -= 0.26 * falloff;
          } else if (nudgeDensity[rightSector] < nudgeDensity[leftSector]) {
            outAngle += 0.26 * falloff;
          }

          const nx = Math.cos(outAngle);
          const ny = Math.sin(outAngle);
          settledRef.current[id] = {
            x: settled.x + nx * pushAmount,
            y: settled.y + ny * pushAmount,
          };
          if (positionRef.current[id]) {
            positionRef.current[id] = {
              x: positionRef.current[id].x + nx * pushAmount,
              y: positionRef.current[id].y + ny * pushAmount,
            };
          }
          nudgeTotalRef.current[id] = totalNudged + pushAmount;
        }
      }
    }

    const newIds = new Set();

    const nodes = graphData.nodes.map((n, idx) => {
      const hopDist = n.hopDistance || 0;

      // Existing positioned node
      if (positionRef.current[n.id]) {
        const prev = positionRef.current[n.id];
        if (n.type === 'center') {
          if (isFirstConcept.current) {
            isFirstConcept.current = false;
            settledRef.current[n.id] = { x: cx, y: cy };
            return { ...n, x: cx, y: cy };
          }
          settledRef.current[n.id] = { x: prev.x, y: prev.y };
          return { ...n, x: prev.x, y: prev.y };
        }
        return { ...n, x: prev.x, y: prev.y };
      }

      // New node
      newIds.add(n.id);

      if (n.type === 'center') {
        if (isFirstConcept.current) {
          isFirstConcept.current = false;
          settledRef.current[n.id] = { x: cx, y: cy };
          return { ...n, x: cx, y: cy };
        }
        return { ...n, x: cx, y: cy };
      }

      // Count how many primary nodes exist to distribute evenly
      const primaryNodes = graphData.nodes.filter((nd) => nd.type === 'primary');
      const primaryIdx = primaryNodes.indexOf(n);
      const primaryCount = primaryNodes.length;

      let radius, nodeAngle;

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
      } else if (n.type === 'secondary') {
        // Secondary: spawn on the far side of parent (away from center), fanning outward
        radius = 90 + (Math.random() - 0.5) * 20;
        // Find parent position to compute outward direction from center
        const parentEdge = graphData.edges.find((e) => e.target === n.id && e.type === 'secondary');
        if (parentEdge && positionRef.current[parentEdge.source]) {
          const parentPos = positionRef.current[parentEdge.source];
          const toParent = Math.atan2(parentPos.y - centerAnchorY, parentPos.x - centerAnchorX);
          nodeAngle = toParent + (Math.random() - 0.5) * 1.2; // fan ~70deg around outward dir
        } else {
          nodeAngle = spawnAngle + (Math.random() - 0.5) * Math.PI;
        }
      } else if (n.type === 'trail') {
        radius = 400 + hopDist * 150;
        nodeAngle = spawnAngle + Math.PI + (Math.random() - 0.5) * 0.5;
      } else {
        // dormant
        radius = 350 + hopDist * 120;
        nodeAngle = Math.random() * Math.PI * 2;
      }

      // Anchor secondary around their parent, not the center
      let anchorX = centerAnchorX, anchorY = centerAnchorY;
      if (n.type === 'secondary') {
        const parentEdge = graphData.edges.find((e) => e.target === n.id && e.type === 'secondary');
        if (parentEdge && positionRef.current[parentEdge.source]) {
          anchorX = positionRef.current[parentEdge.source].x;
          anchorY = positionRef.current[parentEdge.source].y;
        }
      }

      return {
        ...n,
        x: anchorX + Math.cos(nodeAngle) * radius,
        y: anchorY + Math.sin(nodeAngle) * radius,
      };
    });

    newNodeIds.current = newIds;

    // Filter out dangling edges
    const nodeIds = new Set(nodes.map((n) => n.id));
    const links = graphData.edges
      .filter((e) => nodeIds.has(e.source) && nodeIds.has(e.target))
      .map((e) => ({
        source: e.source,
        target: e.target,
        strength: e.strength,
        edgeType: e.type,
      }));

    const sim = forceSimulation(nodes)
      .force('link', forceLink(links).id((d) => d.id)
        .distance((d) => {
          if (d.edgeType === 'trail') return 500;
          if (d.edgeType === 'secondary') return 90;
          const str = d.strength || 1;
          return str === 3 ? 180 : str === 2 ? 260 : 350;
        })
        .strength((d) => {
          if (d.edgeType === 'trail') return 0.03;
          if (d.edgeType === 'secondary') return 0.1;
          return 0.15;
        }))
      // NO forceManyBody — it creates clustering/swarming.
      // Tree structure comes from anchoring + link distances + collision.
      .force('anchorX', forceX().x((d) => {
        if (settledRef.current[d.id]) return settledRef.current[d.id].x;
        return d.x;
      }).strength((d) => {
        if (newNodeIds.current.has(d.id)) return 0.03;
        if (settledRef.current[d.id]) return 0.9;
        return 0.1;
      }))
      .force('anchorY', forceY().y((d) => {
        if (settledRef.current[d.id]) return settledRef.current[d.id].y;
        return d.y;
      }).strength((d) => {
        if (newNodeIds.current.has(d.id)) return 0.03;
        if (settledRef.current[d.id]) return 0.9;
        return 0.1;
      }))
      .force('collide', forceCollide().radius((d) => {
        if (d.type === 'center') return 110;
        if (d.type === 'trail') {
          const hop = d.hopDistance || 0;
          if (hop >= 3) return 40;
          if (hop >= 2) return 65;
          return 90;
        }
        if (d.type === 'primary') return 75;
        if (d.type === 'secondary') return 48;
        if (d.type === 'dormant') {
          const hop = d.hopDistance || 0;
          if (hop >= 3) return 30;
          if (hop >= 2) return 50;
          return 60;
        }
        return 55;
      }).strength(0.9).iterations(3))
      .alpha(0.4)
      .alphaDecay(0.06)
      .velocityDecay(0.6);

    sim.on('tick', () => {
      const pos = {};
      nodes.forEach((n) => {
        pos[n.id] = { x: n.x, y: n.y };
      });
      positionRef.current = pos;

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        setPositions({ ...pos });
      });

      if (sim.alpha() < SETTLE_THRESHOLD) {
        sim.stop();
        nodes.forEach((n) => {
          settledRef.current[n.id] = { x: n.x, y: n.y };
        });
        newNodeIds.current.clear();
        updateCanvasSize(pos);
      }
    });

    simRef.current = sim;
    return () => {
      sim.stop();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [graphData, prevCenterTitle, updateCanvasSize]);
  // NOTE: canvasSize deliberately NOT in deps — expansion must not restart simulation

  return { positions, canvasSize };
}
