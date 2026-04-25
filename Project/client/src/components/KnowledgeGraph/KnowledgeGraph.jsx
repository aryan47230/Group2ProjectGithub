import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import useForceLayout from './useForceLayout';
import GraphNode from './GraphNode';
import PreviewPopover from './PreviewPopover';
import NodeDetailOverlay from './NodeDetailOverlay';
import styles from './KnowledgeGraph.module.css';

const COLOR_HEX = {
  white: '#ffaa40', cyan: '#4d9fff', blue: '#4d9fff',
  gold: '#ffaa40', purple: '#8b5cf6', red: '#ff4466',
};

// No viewport culling constant needed — see isVisible() below

function buildClusterGroups(nodes, positions) {
  const groups = {};
  for (const node of nodes) {
    if (!node.cluster || node.cluster === 'Unknown' || !positions[node.id]) continue;
    if (!groups[node.cluster]) groups[node.cluster] = [];
    groups[node.cluster].push(positions[node.id]);
  }
  return groups;
}

function getBoundingEllipse(points) {
  if (points.length < 2) return null;
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  const rx = (Math.max(...xs) - Math.min(...xs)) / 2 + 60;
  const ry = (Math.max(...ys) - Math.min(...ys)) / 2 + 60;
  return { cx, cy, rx: Math.max(rx, 65), ry: Math.max(ry, 65) };
}

export default function KnowledgeGraph() {
  const { graphData, setPreview, clearPreview, previewNode, currentConcept, expandNode, clusterColors, prevCenterTitle, highlightedNodeId, setHighlight, clearHighlight, jumpTo } = useExplorer();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isAutoPanning, setIsAutoPanning] = useState(false);
  const panRef = useRef(pan);
  const expandedRef = useRef(new Set());
  const [focusedIdx, setFocusedIdx] = useState(-1);
  // viewportSize removed — no longer needed since viewport culling is disabled
  const [hoverTooltip, setHoverTooltip] = useState(null);
  const hoverTimerRef = useRef(null);
  const clickTimerRef = useRef(null);
  // Tracks previous canvas size so canvas expansion can compensate pan without a visual jump
  const prevCanvasSizeRef = useRef({ width: 12000, height: 9000 });

  useEffect(() => { panRef.current = pan; }, [pan]);

  // Shooting stars
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const spawn = () => {
      setShootingStars(prev => [...prev.slice(-2), {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 40,
        angle: -20 - Math.random() * 25,
        dur: 1 + Math.random() * 1,
      }]);
    };
    const interval = setInterval(spawn, 8000);
    return () => clearInterval(interval);
  }, []);

  // Jump pulse on concept change
  const [jumpPulse, setJumpPulse] = useState(false);
  useEffect(() => {
    if (currentConcept) {
      setJumpPulse(true);
      const t = setTimeout(() => setJumpPulse(false), 900);
      return () => clearTimeout(t);
    }
  }, [currentConcept?.title]);

  // Starfield stars (stable random positions)
  const stars = useMemo(() => Array.from({length: 40}, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    dur: `${3 + Math.random() * 4}s`,
    delay: `${Math.random() * 5}s`,
    minOp: `${0.05 + Math.random() * 0.1}`,
    maxOp: `${0.3 + Math.random() * 0.4}`,
    w: `${1 + Math.random() * 2}px`,
    h: `${1 + Math.random() * 2}px`,
  })), []);

  // Floating particles — memoized so random positions are stable across re-renders
  const particles = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    dur: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 10}s`,
    w: `${1 + Math.random() * 1.5}px`,
    h: `${1 + Math.random() * 1.5}px`,
  })), []);

  // Data streams removed — clean starfield aesthetic

  const { positions, canvasSize } = useForceLayout(graphData, prevCenterTitle);

  // ResizeObserver removed — viewport size no longer needed (culling disabled)

  // Auto-pan camera to center node when concept changes.
  // Canvas size changes are handled separately below — do NOT mix them here or the
  // expansion compensation will fight the jump animation.
  const lastPanConceptRef = useRef(null);
  useEffect(() => {
    if (!currentConcept || !graphData) return;
    const centerNode = graphData.nodes.find((n) => n.type === 'center');
    if (!centerNode || !positions[centerNode.id]) return;
    if (lastPanConceptRef.current === currentConcept.title) return; // already panned for this concept

    lastPanConceptRef.current = currentConcept.title;
    const pos = positions[centerNode.id];
    const targetPanX = -(pos.x - canvasSize.width / 2);
    const targetPanY = -(pos.y - canvasSize.height / 2);

    setIsAutoPanning(true);
    const curPan = panRef.current;
    const dx = targetPanX - curPan.x;
    const dy = targetPanY - curPan.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 200) {
      // Curved path: route through perpendicular midpoint
      const midX = curPan.x + dx * 0.5 + dy * 0.15;
      const midY = curPan.y + dy * 0.5 - dx * 0.15;
      setPan({ x: midX, y: midY });
      const t1 = setTimeout(() => setPan({ x: targetPanX, y: targetPanY }), 300);
      const t2 = setTimeout(() => setIsAutoPanning(false), 700);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setPan({ x: targetPanX, y: targetPanY });
      const t = setTimeout(() => setIsAutoPanning(false), 600);
      return () => clearTimeout(t);
    }
  }, [currentConcept?.title, positions, canvasSize.width, canvasSize.height]);

  // Canvas expansion compensation: when the canvas grows, shift pan by exactly half
  // the delta so the viewport stays on the same visual area. This prevents the
  // "redirects far away" bug where expansion used to override the jump animation.
  useEffect(() => {
    const prev = prevCanvasSizeRef.current;
    const dw = canvasSize.width - prev.width;
    const dh = canvasSize.height - prev.height;
    prevCanvasSizeRef.current = { width: canvasSize.width, height: canvasSize.height };
    if (dw === 0 && dh === 0) return;

    // Apply directly to DOM (no transition) so the correction is invisible
    const newX = panRef.current.x + dw / 2;
    const newY = panRef.current.y + dh / 2;
    panRef.current = { x: newX, y: newY };
    if (canvasRef.current) {
      canvasRef.current.style.transition = 'none';
      canvasRef.current.style.transform =
        `translate(calc(-50% + ${newX}px), calc(-50% + ${newY}px))`;
    }
    setPan({ x: newX, y: newY });
  }, [canvasSize.width, canvasSize.height]);

  // Auto-expand top 1 primary node for second layer (reduced from 3 for cleaner tree)
  // expandedRef persists across jumps so we never re-expand the same node
  useEffect(() => {
    if (!graphData) return;
    const top1 = graphData.nodes
      .filter((n) => n.type === 'primary')
      .sort((a, b) => (b.strength || 0) - (a.strength || 0))
      .slice(0, 1);
    top1.forEach((n) => {
      if (!expandedRef.current.has(n.id)) {
        expandedRef.current.add(n.id);
        expandNode(n.id);
      }
    });
  }, [currentConcept?.title]);

  // Manual click-and-drag panning
  const dragStateRef = useRef(null);
  const isDraggingRef = useRef(false);
  const [grabbing, setGrabbing] = useState(false);

  const handlePointerDown = useCallback((e) => {
    // Ignore drags that start on a node or interactive element
    if (e.target.closest('[data-node]') || e.target.closest('button')) return;
    if (e.button !== undefined && e.button !== 0) return;
    dragStateRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      panX: panRef.current.x,
      panY: panRef.current.y,
      moved: false,
      pointerId: e.pointerId,
    };
    if (e.currentTarget.setPointerCapture && e.pointerId !== undefined) {
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    }
    setIsAutoPanning(false);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const ds = dragStateRef.current;
    if (!ds) return;
    const dx = e.clientX - ds.startX;
    const dy = e.clientY - ds.startY;
    if (!ds.moved && Math.hypot(dx, dy) < 4) return;
    if (!ds.moved) {
      ds.moved = true;
      isDraggingRef.current = true;
      setGrabbing(true);
    }
    const newX = ds.panX + dx;
    const newY = ds.panY + dy;
    panRef.current = { x: newX, y: newY };
    if (canvasRef.current) {
      canvasRef.current.style.transition = 'none';
      canvasRef.current.style.transform =
        `translate(calc(-50% + ${newX}px), calc(-50% + ${newY}px))`;
    }
  }, []);

  const handlePointerUp = useCallback((e) => {
    const ds = dragStateRef.current;
    if (!ds) return;
    dragStateRef.current = null;
    if (e.currentTarget.releasePointerCapture && ds.pointerId !== undefined) {
      try { e.currentTarget.releasePointerCapture(ds.pointerId); } catch {}
    }
    if (ds.moved) {
      // Sync React state with the panRef we've been mutating during drag
      setPan({ x: panRef.current.x, y: panRef.current.y });
      setGrabbing(false);
      // Swallow the trailing click that follows a drag
      setTimeout(() => { isDraggingRef.current = false; }, 0);
    } else {
      isDraggingRef.current = false;
    }
  }, []);

  // Keyboard nav
  const navigableNodes = useMemo(() => {
    if (!graphData) return [];
    return graphData.nodes.filter((n) => n.type !== 'center' && n.type !== 'secondary');
  }, [graphData]);

  // O(1) index lookup instead of O(n) indexOf inside the render loop
  const navigableNodeIndexMap = useMemo(() => {
    const map = new Map();
    navigableNodes.forEach((n, i) => map.set(n.id, i));
    return map;
  }, [navigableNodes]);

  useEffect(() => {
    function onKey(e) {
      if (!graphData) return;
      if (document.activeElement?.tagName === 'INPUT') return;
      if (e.key === 'Tab') {
        e.preventDefault();
        setFocusedIdx((prev) => (prev + 1) % navigableNodes.length);
      } else if (e.key === 'Escape') {
        setPreview(null);
        setFocusedIdx(-1);
      } else if (e.key === 'Enter') {
        if (focusedIdx >= 0 && navigableNodes[focusedIdx]) setPreview(navigableNodes[focusedIdx]);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [graphData, focusedIdx, navigableNodes, setPreview]);

  function handleNodeClick(node) {
    if (isDraggingRef.current) return;
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

  // No viewport culling — all nodes within canvas are rendered.
  // Previously we culled to save React work during pan, but since pan now bypasses
  // React state entirely (direct DOM), there are no re-renders during pan.
  // Culling caused edges to terminate mid-air when destination nodes disappeared.
  function isVisible(_x, _y) { return true; }

  // Build node map for O(1) lookups in edge rendering
  const nodeMap = useMemo(() => {
    if (!graphData) return {};
    const map = {};
    for (const n of graphData.nodes) map[n.id] = n;
    return map;
  }, [graphData]);

  // Find current center node ID for particle optimization
  const centerNodeId = useMemo(() => {
    if (!graphData) return null;
    const c = graphData.nodes.find((n) => n.type === 'center');
    return c ? c.id : null;
  }, [graphData]);

  // Cluster ellipses — only recompute when positions actually change meaningfully
  const clusterEllipses = useMemo(() => {
    if (!graphData) return [];
    const groups = buildClusterGroups(graphData.nodes, positions);
    return Object.entries(groups)
      .map(([name, pts]) => ({ name, ellipse: getBoundingEllipse(pts), color: clusterColors[name] || '#445' }))
      .filter((g) => g.ellipse);
  }, [graphData, positions, clusterColors]);

  // Memoized edge rendering
  const renderedEdges = useMemo(() => {
    if (!graphData) return [];
    return graphData.edges.map((edge, i) => {
      const source = positions[edge.source];
      const target = positions[edge.target];
      if (!source || !target) return null;

      // Compute max hop of the two endpoints
      const sourceNode = nodeMap[edge.source];
      const targetNode = nodeMap[edge.target];
      const maxHop = Math.max(sourceNode?.hopDistance || 0, targetNode?.hopDistance || 0);

      // Hop 4+: hide edge entirely (but always show trail edges)
      if (maxHop >= 4 && edge.type !== 'trail') return null;

      const dx = target.x - source.x;
      const dy = target.y - source.y;

      const color = COLOR_HEX[edge.color] || '#00d4ff';
      const isTrail = edge.type === 'trail';
      const isIndirectTrail = isTrail && edge.trailType === 'indirect';

      // Hop 2+: straight line instead of curve (trail edges always get curves)
      const isAged = !isTrail && maxHop >= 2;
      const path = isAged
        ? `M ${source.x} ${source.y} L ${target.x} ${target.y}`
        : `M ${source.x} ${source.y} Q ${source.x + dx * 0.5 + dy * 0.12} ${source.y + dy * 0.5 - dx * 0.12} ${target.x} ${target.y}`;

      const isSecondary = edge.type === 'secondary';
      const isActiveEdge = !isSecondary && !isAged && (edge.source === centerNodeId || edge.target === centerNodeId);

      // Neon edge styling — opacity and width degrade with hop distance
      // Trail edges are exempt from hop-based degradation
      let strokeWidth, strokeOpacity, dashArray, edgeColor;
      edgeColor = isTrail ? '#ffaa40' : color;
      if (isTrail) {
        // Direct trail: solid golden line; Indirect trail: dotted, slightly thicker
        strokeWidth = isIndirectTrail ? 2.8 : 2.2;
        strokeOpacity = 0.55;
        dashArray = isIndirectTrail ? '6 4' : 'none';
      } else if (maxHop >= 3) {
        strokeWidth = 0.5;
        strokeOpacity = 0.1;
        dashArray = '2 6';
      } else if (maxHop >= 2) {
        strokeWidth = 0.7;
        strokeOpacity = 0.18;
        dashArray = '3 6';
      } else if (isActiveEdge) {
        // Active edges (connected to center) — brighter and thicker, no particles
        strokeWidth = 1.8;
        strokeOpacity = 0.55;
        dashArray = 'none';
      } else {
        strokeWidth = isSecondary ? 0.7 : 1.2;
        strokeOpacity = isSecondary ? 0.18 : 0.35;
        dashArray = isSecondary ? '2 4' : 'none';
      }

      return (
        <g key={`${edge.source}-${edge.target}-${i}`} className={styles.edgeGroup}>
          {/* Neon glow layer — for trail edges and active (hop 0-1) edges */}
          {(isTrail || !isAged) && (
            <path d={path} fill="none" stroke={edgeColor}
              strokeWidth={isTrail ? 10 : isActiveEdge ? 8 : isSecondary ? 4 : 6}
              opacity={isTrail ? 0.1 : isActiveEdge ? 0.08 : 0.03}
              filter="url(#edgeGlow)" />
          )}
          {/* Main neon edge */}
          <path d={path} fill="none" stroke={edgeColor}
            strokeWidth={strokeWidth} opacity={strokeOpacity}
            strokeLinecap="round" strokeDasharray={dashArray}
            filter={isActiveEdge || isTrail ? 'url(#neonGlow)' : 'none'} />
        </g>
      );
    });
  }, [graphData, positions, nodeMap, centerNodeId]);

  if (!graphData || !currentConcept) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <p className={styles.emptyText}>Search a concept to begin exploring</p>
        </div>
      </div>
    );
  }

  // Determine transition style for auto-pan (manual pan transition set directly via DOM)
  const panTransition = isAutoPanning
    ? 'transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)'
    : 'transform 0.08s ease-out';

  return (
    <div
      className={styles.container}
      ref={containerRef}
      tabIndex={0}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ userSelect: 'none', WebkitUserSelect: 'none', cursor: grabbing ? 'grabbing' : 'grab' }}
    >
      {/* Vignette for depth */}
      <div className={styles.vignette} />

      {/* Starfield */}
      <div className={styles.starfield}>
        {stars.map((star, i) => (
          <div key={i} className={styles.star} style={{
            left: star.left, top: star.top,
            '--dur': star.dur, '--delay': star.delay,
            '--min-op': star.minOp, '--max-op': star.maxOp,
            width: star.w, height: star.h,
          }} />
        ))}
        {shootingStars.map(ss => (
          <div key={ss.id} className={styles.shootingStar} style={{
            left: `${ss.x}%`, top: `${ss.y}%`,
            '--angle': `${ss.angle}deg`,
            '--dur': `${ss.dur}s`,
          }} />
        ))}
      </div>

      {/* Subtle ambient nebula */}
      <div className={styles.nebula}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      {/* Floating particles — rendered from memoized array, stable across re-renders */}
      <div className={styles.particles}>
        {particles.map((p, i) => (
          <div key={i} className={styles.particle} style={{
            left: p.left,
            top: p.top,
            animationDuration: p.dur,
            animationDelay: p.delay,
            width: p.w,
            height: p.h,
          }} />
        ))}
      </div>

      <div className={styles.label}>KNOWLEDGE GRAPH</div>
      <div className={styles.hint}>DRAG to pan &middot; TAB cycle &middot; ENTER preview &middot; DBL-CLICK jump &middot; ESC close</div>

      <div
        ref={canvasRef}
        className={styles.canvas}
        style={{
          width: canvasSize.width,
          height: canvasSize.height,
          transform: `translate(calc(-50% + ${pan.x}px), calc(-50% + ${pan.y}px))`,
          transition: panTransition,
        }}
      >
        {jumpPulse && positions[currentConcept.title] && (
          <div className={styles.jumpPulse} style={{
            left: positions[currentConcept.title].x,
            top: positions[currentConcept.title].y,
          }} />
        )}

        <svg className={styles.svg} viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}>
          <defs>
            <filter id="edgeGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="blur" in2="SourceGraphic" operator="over" />
            </filter>
          </defs>

          {/* Cluster regions */}
          {clusterEllipses.map(({ name, ellipse, color }) => (
            <g key={name} opacity={0.7}>
              <ellipse
                cx={ellipse.cx} cy={ellipse.cy}
                rx={ellipse.rx} ry={ellipse.ry}
                fill={color + '08'} stroke={color + '18'} strokeWidth={1}
                strokeDasharray="6 8"
              />
              <text
                x={ellipse.cx} y={ellipse.cy - ellipse.ry - 10}
                textAnchor="middle" fontSize={10}
                fill={color + '44'}
                fontFamily="'Outfit', sans-serif"
                fontWeight="600"
                letterSpacing="0.15em"
              >
                {name.toUpperCase()}
              </text>
            </g>
          ))}

          {renderedEdges}
        </svg>

        {graphData.nodes.map((node) => {
          const pos = positions[node.id];
          if (!pos) return null;
          // Viewport culling for nodes
          if (!isVisible(pos.x, pos.y)) return null;
          const navIdx = navigableNodeIndexMap.get(node.id) ?? -1;
          return (
            <div
              key={node.id}
              data-node
              onMouseEnter={() => {
                setHighlight(node.id);
                if (node.type === 'center') return;
                hoverTimerRef.current = setTimeout(() => {
                  const firstSentence = (node.description || '').split('. ')[0];
                  if (firstSentence) {
                    setHoverTooltip({ id: node.id, text: firstSentence + '.', x: pos.x, y: pos.y });
                  }
                }, 800);
              }}
              onMouseLeave={() => {
                clearHighlight();
                clearTimeout(hoverTimerRef.current);
                setHoverTooltip(null);
              }}
            >
              <GraphNode
                node={node} x={pos.x} y={pos.y}
                onClick={handleNodeClick}
                focused={navIdx >= 0 && navIdx === focusedIdx}
                highlighted={highlightedNodeId === node.id}
              />
            </div>
          );
        })}

        {hoverTooltip && positions[hoverTooltip.id] && !previewNode && (() => {
          const tx = positions[hoverTooltip.id].x;
          const ty = positions[hoverTooltip.id].y;
          // Place tooltip to the right of node by default; if node is in right 40% of canvas,
          // place it to the left so it stays visible.
          const toLeft = tx > canvasSize.width * 0.6;
          return (
            <div className={styles.hoverTooltip} style={{
              left: toLeft ? tx - 80 : tx + 80,
              top: ty,
              transform: toLeft ? 'translate(-100%, -50%)' : 'translateY(-50%)',
            }}>
              {hoverTooltip.text}
            </div>
          );
        })()}

        {previewNode && positions[previewNode.id] && (
          <PreviewPopover
            node={previewNode}
            x={positions[previewNode.id].x}
            y={positions[previewNode.id].y}
          />
        )}
      </div>

      <NodeDetailOverlay />
    </div>
  );
}
