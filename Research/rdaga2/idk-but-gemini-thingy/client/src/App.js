import { useState, useEffect, useMemo } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Theme
// ─────────────────────────────────────────────────────────────────────────────
const T = {
  bg:         "#111114",
  surface:    "#16161b",
  surfaceHov: "#1a1a20",
  border:     "#222228",
  borderHov:  "#333338",
  text:       "#e0e0e0",
  textSec:    "#888888",
  textMuted:  "#555555",
  green:      "#4ade80",
  greenDim:   "rgba(74,222,128,0.15)",
  font:       "'JetBrains Mono', monospace",
};

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function splitText(text, maxChars) {
  if (!text) return [""];
  if (text.length <= maxChars) return [text];
  const mid = Math.ceil(text.length / 2);
  let split = text.lastIndexOf(" ", mid);
  if (split <= 0) split = mid;
  const l1 = text.substring(0, split).trim();
  let l2 = text.substring(split).trim();
  if (l2.length > maxChars) l2 = l2.substring(0, maxChars - 1) + "…";
  return [l1, l2];
}

/** All recursive prerequisites of a node */
function getAncestors(nodeId, nodes) {
  const result = new Set();
  function walk(id) {
    const node = nodes.find(n => n.id === id);
    if (!node) return;
    for (const preId of (node.prerequisites ?? [])) {
      if (!result.has(preId)) { result.add(preId); walk(preId); }
    }
  }
  walk(nodeId);
  return result;
}

/** All nodes that (directly or transitively) require a given node */
function getDescendants(nodeId, nodes) {
  const result = new Set();
  function walk(id) {
    for (const node of nodes) {
      if ((node.prerequisites ?? []).includes(id) && !result.has(node.id)) {
        result.add(node.id);
        walk(node.id);
      }
    }
  }
  walk(nodeId);
  return result;
}

// ─────────────────────────────────────────────────────────────────────────────
// App  (owns mastered state so header can show the counter)
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [topic, setTopic]         = useState("");
  const [skillTree, setSkillTree] = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [mastered, setMastered]   = useState(new Set());

  // Reset mastery whenever a new tree is generated
  useEffect(() => { setMastered(new Set()); }, [skillTree]);

  async function handleGenerate() {
    if (!topic.trim()) { setError("Please enter a topic!"); return; }
    setLoading(true);
    setError(null);
    setSkillTree(null);
    try {
      const res = await fetch("http://localhost:5000/api/skill-tree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || `Server error: ${res.status}`);
      }
      setSkillTree(await res.json());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function toggleMastered(nodeId) {
    const nodes = skillTree?.nodes ?? [];
    if (mastered.has(nodeId)) {
      // cascade-unmaster all dependents
      setMastered(prev => {
        const next = new Set(prev);
        next.delete(nodeId);
        getDescendants(nodeId, nodes).forEach(id => next.delete(id));
        return next;
      });
    } else {
      const node = nodes.find(n => n.id === nodeId);
      if (!(node?.prerequisites ?? []).every(id => mastered.has(id))) return;
      setMastered(prev => new Set([...prev, nodeId]));
    }
  }

  const nodeCount = skillTree?.nodes.length ?? 0;

  return (
    <div style={{
      height: "100vh", display: "flex", flexDirection: "column",
      background: T.bg, color: T.text, fontFamily: T.font,
    }}>

      {/* ── Top bar ── */}
      <header style={{
        height: 56, flexShrink: 0,
        background: T.surface, borderBottom: `1px solid ${T.border}`,
        display: "flex", alignItems: "center", padding: "0 24px", gap: 20,
        zIndex: 20,
      }}>
        {/* Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, minWidth: 155 }}>
          <div style={{
            width: 8, height: 8, borderRadius: "50%", background: T.green,
            boxShadow: `0 0 6px ${T.green}, 0 0 14px rgba(74,222,128,0.4)`,
          }} />
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: T.text,
              letterSpacing: "2.5px", textTransform: "uppercase",
            }}>Skill Tree</div>
            <div style={{
              fontSize: 9, color: T.textMuted,
              letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 1,
            }}>AI Learning Path</div>
          </div>
        </div>

        {/* Input */}
        <input
          type="text"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleGenerate()}
          placeholder="Enter topic — e.g. Calculus 3, React, Quantum Computing…"
          style={{
            flex: 1, padding: "8px 16px", fontSize: 12,
            background: "#18181c", border: `1px solid ${T.border}`,
            borderRadius: 6, color: T.text, outline: "none",
            fontFamily: T.font, letterSpacing: "0.3px",
            transition: "border-color 0.15s",
          }}
          onFocus={e => (e.target.style.borderColor = T.borderHov)}
          onBlur={e  => (e.target.style.borderColor = T.border)}
        />

        {/* Counter + Generate */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexShrink: 0 }}>
          {skillTree && (
            <span style={{ fontSize: 11, color: T.textMuted, whiteSpace: "nowrap", letterSpacing: "0.3px" }}>
              <span style={{ color: mastered.size === nodeCount && nodeCount > 0 ? T.green : T.textSec }}>
                {mastered.size}
              </span>
              <span> / {nodeCount} mastered</span>
            </span>
          )}
          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              padding: "7px 16px", fontSize: 11, fontWeight: 700,
              letterSpacing: "1.5px", textTransform: "uppercase",
              background: loading ? "transparent" : T.green,
              color:      loading ? T.textMuted   : "#111114",
              border:     `1px solid ${loading ? T.border : T.green}`,
              borderRadius: 6, cursor: loading ? "not-allowed" : "pointer",
              fontFamily: T.font, transition: "all 0.15s",
            }}
            onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = "0 0 14px rgba(74,222,128,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
          >
            {loading ? "Working…" : "Generate"}
          </button>
        </div>
      </header>

      {/* ── Error bar ── */}
      {error && (
        <div style={{
          padding: "8px 24px", flexShrink: 0,
          background: "#1a1010", borderBottom: "1px solid #3a2020",
          color: "#aa5555", fontSize: 11, letterSpacing: "0.3px",
        }}>
          {error}
          {error.includes("fetch") && (
            <span style={{ color: T.textMuted }}> — server not running</span>
          )}
        </div>
      )}

      {/* ── Canvas ── */}
      <main style={{ flex: 1, overflow: "hidden", display: "flex" }}>
        {loading   && <LoadingScreen topic={topic} />}
        {!loading  && !skillTree && <EmptyState />}
        {!loading  && skillTree  && (
          <SkillTreeView
            key={skillTree.title}
            skillTree={skillTree}
            mastered={mastered}
            onToggle={toggleMastered}
          />
        )}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        * { font-family: inherit; }
        body { margin: 0; background: #111114; }
        @keyframes spin      { to { transform: rotate(360deg); } }
        @keyframes dotPulse  { 0%,100% { opacity:0.7; } 50% { opacity:1; box-shadow: 0 0 10px #4ade80, 0 0 20px rgba(74,222,128,0.5); } }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #111114; }
        ::-webkit-scrollbar-thumb { background: #222228; border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: #333338; }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SkillTreeView
// ─────────────────────────────────────────────────────────────────────────────
function SkillTreeView({ skillTree, mastered, onToggle }) {
  const [selectedId, setSelectedId]     = useState(null);
  const [hoveredId, setHoveredId]       = useState(null);
  const [visibleNodes, setVisibleNodes] = useState(new Set());

  const nodes        = skillTree.nodes;
  const selectedNode = nodes.find(n => n.id === selectedId) ?? null;

  // ── Layout: horizontal, goal on RIGHT ─────────────────────────────────────
  const NW = 180, NH = 64, HG = 100, VG = 40, PX = 64, PY = 60;

  const byLevel = useMemo(() => {
    const m = {};
    for (const n of nodes) (m[n.level] ??= []).push(n);
    return m;
  }, [nodes]);

  const allLevels = useMemo(
    () => Object.keys(byLevel).map(Number).sort((a, b) => a - b),
    [byLevel]
  );
  const minLvl    = Math.min(...allLevels);
  const maxLvl    = Math.max(...allLevels);

  const maxPerCol = Math.max(...allLevels.map(l => byLevel[l].length));
  const canvasW   = Math.max(1100, PX * 2 + allLevels.length * NW + (allLevels.length - 1) * HG);
  const canvasH   = Math.max(480,  PY * 2 + maxPerCol * NH + (maxPerCol - 1) * VG);

  // Node positions: x by level (left → right), y centered per column
  const pos = useMemo(() => {
    const p = {};
    allLevels.forEach(lvl => {
      const col      = lvl - minLvl;
      const x        = PX + col * (NW + HG);
      const colNodes = byLevel[lvl];
      const colH     = colNodes.length * NH + (colNodes.length - 1) * VG;
      const startY   = (canvasH - colH) / 2;
      colNodes.forEach((node, i) => {
        const y = startY + i * (NH + VG);
        p[node.id] = { x, y, cx: x + NW / 2, cy: y + NH / 2 };
      });
    });
    return p;
  }, [allLevels, byLevel, minLvl, canvasH]);

  // Edges: right-center of prereq → left-center of dependent, cubic bezier
  const edges = useMemo(() => {
    const res = [];
    for (const node of nodes) {
      const to = pos[node.id];
      if (!to) continue;
      for (const preId of (node.prerequisites ?? [])) {
        const from = pos[preId];
        if (!from) continue;
        const fx = from.x + NW, fy = from.cy;
        const tx = to.x,        ty = to.cy;
        const mx = (fx + tx) / 2;
        res.push({
          id: `${preId}→${node.id}`,
          fromId: preId,
          toId:   node.id,
          d: `M ${fx} ${fy} C ${mx} ${fy}, ${mx} ${ty}, ${tx} ${ty}`,
        });
      }
    }
    return res;
  }, [nodes, pos]);

  // ── Staged reveal: goal first, then each prerequisite level, nodes staggered
  // one at a time (200ms between nodes, 400ms pause between levels).
  useEffect(() => {
    setVisibleNodes(new Set());

    const levelsDesc = [...allLevels].sort((a, b) => b - a); // highest first
    const timeouts   = [];
    let delay        = 300;

    levelsDesc.forEach(lvl => {
      byLevel[lvl].forEach(node => {
        const t = setTimeout(() => {
          setVisibleNodes(prev => new Set([...prev, node.id]));
        }, delay);
        timeouts.push(t);
        delay += 200; // 200ms between each node
      });
      delay += 400; // 400ms extra pause after each level
    });

    return () => timeouts.forEach(clearTimeout);
  }, [allLevels, byLevel]);

  // ── Lighting: hovered/selected node + full ancestor chain ─────────────────
  // (functionality preserved as-is per user instruction)
  const hlSource = hoveredId ?? selectedId;
  const hlIds = useMemo(() => {
    if (!hlSource) return new Set();
    const s = getAncestors(hlSource, nodes);
    s.add(hlSource);
    return s;
  }, [hlSource, nodes]);
  const isHl = !!hlSource;

  function canMasterNode(node) {
    return (node.prerequisites ?? []).every(id => mastered.has(id));
  }

  return (
    <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

      {/* ── Canvas area ── */}
      <div style={{
        flex: 1, overflow: "auto", position: "relative",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}>
        {/* Radial center glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          background: "radial-gradient(ellipse at 55% 50%, rgba(74,222,128,0.03) 0%, transparent 65%)",
        }} />

        {/* Sized container */}
        <div style={{ position: "relative", width: canvasW, height: canvasH, zIndex: 1 }}>

          {/* ── SVG edge layer ── */}
          <svg style={{
            position: "absolute", inset: 0, width: canvasW, height: canvasH,
            pointerEvents: "none", overflow: "visible", zIndex: 0,
          }}>
            <defs>
              {/* Default edge gradient (left→right, low opacity) */}
              <linearGradient id="edgeDef" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.08" />
              </linearGradient>
              {/* Highlighted edge gradient */}
              <linearGradient id="edgeHl" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.35" />
              </linearGradient>
              {/* Mastered edge gradient */}
              <linearGradient id="edgeMastered" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0.15" />
              </linearGradient>
              {/* Glow filter for highlighted edges */}
              <filter id="edgeGlow" x="-20%" y="-50%" width="140%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {edges.map(e => {
                const lineVisible = visibleNodes.has(e.fromId) && visibleNodes.has(e.toId);
                const hi          = isHl && hlIds.has(e.fromId) && hlIds.has(e.toId);
                const bothMast    = mastered.has(e.fromId) && mastered.has(e.toId);
                const gradId      = hi ? "edgeHl" : bothMast ? "edgeMastered" : "edgeDef";
                // Opacity: hidden until both endpoints visible, then honour highlight dimming
                const edgeOpacity = lineVisible ? (isHl ? (hi ? 1 : 0.08) : 1) : 0;
                return (
                  <path
                    key={e.id}
                    d={e.d}
                    fill="none"
                    stroke={`url(#${gradId})`}
                    strokeWidth={hi ? 2 : 1}
                    strokeDasharray="1000"
                    strokeDashoffset={lineVisible ? 0 : 1000}
                    opacity={edgeOpacity}
                    filter={hi ? "url(#edgeGlow)" : "none"}
                    style={{
                      transition: "stroke-dashoffset 0.8s ease, opacity 0.3s ease, stroke-width 0.15s",
                    }}
                  />
                );
              })}
          </svg>

          {/* ── HTML nodes ── */}
          {nodes.map(node => {
            const p = pos[node.id];
            if (!p) return null;

            const isVisible   = visibleNodes.has(node.id);
            const isMastered  = mastered.has(node.id);
            const isSelected  = selectedId === node.id;
            const isGoal      = node.level === maxLvl;
            const isAvailable = canMasterNode(node);
            const isLocked    = !isMastered && !isAvailable;
            const isDirectHov = hoveredId === node.id;
            const isInChain   = hlIds.has(node.id);
            const dimmed      = isHl && !isInChain;

            // ── Visual state resolution ──
            let bg     = T.surface;
            let border = T.border;
            let shadow = "none";
            // Available nodes get full bright text so users can see what's actionable
            let textC  = isAvailable && !isMastered && !isGoal ? T.text : T.textSec;

            if (isMastered) {
              border = "rgba(74,222,128,0.35)";
              textC  = T.green;
              shadow = "0 0 12px rgba(74,222,128,0.12), inset 0 0 24px rgba(74,222,128,0.025)";
            } else if (isGoal) {
              border = "rgba(74,222,128,0.22)";
              textC  = T.text;
              shadow = "0 0 18px rgba(74,222,128,0.09)";
            } else if (isLocked) {
              textC = T.textMuted;
            }

            if (isSelected) {
              bg     = T.surfaceHov;
              border = "rgba(74,222,128,0.45)";
              shadow = "0 0 20px rgba(74,222,128,0.2)";
            } else if (isDirectHov && !dimmed && !isMastered) {
              border = T.borderHov;
              shadow = "0 0 8px rgba(74,222,128,0.07)";
            } else if (isInChain && isHl && !isMastered && !isGoal) {
              border = "rgba(74,222,128,0.2)";
            }

            // Entrance animation: slide in from the right when node becomes visible.
            // While dimmed by hover-chain, drop opacity to 0.12.
            const nodeOpacity   = !isVisible ? 0 : dimmed ? 0.12 : 1;
            const nodeTransform = isVisible ? "translateX(0px)" : "translateX(20px)";

            const lines = splitText(node.name, 17);

            return (
              <div
                key={node.id}
                onClick={() => { if (isVisible) setSelectedId(isSelected ? null : node.id); }}
                onMouseEnter={() => { if (isVisible) setHoveredId(node.id); }}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: "absolute", left: p.x, top: p.y,
                  width: NW, height: NH, zIndex: isSelected ? 3 : 1,
                  background: bg, border: `1px solid ${border}`,
                  borderRadius: 8,
                  cursor: isVisible ? "pointer" : "default",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  padding: "0 20px",
                  boxShadow: shadow,
                  opacity: nodeOpacity,
                  transform: nodeTransform,
                  pointerEvents: isVisible ? "auto" : "none",
                  transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.15s, box-shadow 0.15s, background 0.15s",
                  userSelect: "none",
                }}
              >
                {/* Goal hex badge */}
                {isGoal && (
                  <span style={{
                    position: "absolute", top: 7, left: 10,
                    fontSize: 10, color: "rgba(74,222,128,0.45)",
                    lineHeight: 1,
                  }}>⬡</span>
                )}

                {/* Status dot (top-right) */}
                {isMastered ? (
                  <div style={{
                    position: "absolute", top: 9, right: 9,
                    width: 8, height: 8, borderRadius: "50%",
                    background: T.green,
                    boxShadow: `0 0 6px ${T.green}, 0 0 12px rgba(74,222,128,0.45)`,
                    animation: "dotPulse 2.5s ease-in-out infinite",
                  }} />
                ) : isLocked ? (
                  <div style={{
                    position: "absolute", top: 9, right: 9,
                    width: 8, height: 8, borderRadius: "50%",
                    border: `1px solid ${T.textMuted}`,
                    opacity: 0.5,
                  }} />
                ) : null}

                {/* Node label */}
                <div style={{
                  textAlign: "center", lineHeight: 1.45,
                  fontSize: 11, fontWeight: 500, letterSpacing: "0.3px",
                  color: textC, transition: "color 0.15s",
                }}>
                  {lines.map((line, i) => <div key={i}>{line}</div>)}
                </div>
              </div>
            );
          })}

          {/* ── Level labels ── */}
          {allLevels.map(lvl => {
            const col = lvl - minLvl;
            const x   = PX + col * (NW + HG) + NW / 2;
            return (
              <div
                key={`lbl-${lvl}`}
                style={{
                  position: "absolute", top: PY / 2 - 8, left: x,
                  transform: "translateX(-50%)",
                  fontSize: 9, fontWeight: 600,
                  color: lvl === maxLvl ? "rgba(74,222,128,0.5)" : T.textMuted,
                  letterSpacing: "2px", textTransform: "uppercase",
                }}
              >
                {lvl === maxLvl ? "GOAL" : `LVL ${lvl}`}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Side panel — slides in from right ── */}
      <div style={{
        width: selectedNode ? 320 : 0,
        overflow: "hidden", flexShrink: 0,
        transition: "width 0.2s ease",
      }}>
        {selectedNode && (
          <DetailPanel
            node={selectedNode}
            nodes={nodes}
            mastered={mastered}
            maxLvl={maxLvl}
            canMaster={canMasterNode(selectedNode)}
            onClose={() => setSelectedId(null)}
            onToggle={() => { onToggle(selectedNode.id); setSelectedId(null); }}
            onNavigate={id => setSelectedId(id)}
          />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DetailPanel
// ─────────────────────────────────────────────────────────────────────────────
function DetailPanel({ node, nodes, mastered, maxLvl, canMaster, onClose, onToggle, onNavigate }) {
  const isMastered = mastered.has(node.id);
  const isGoal     = node.level === maxLvl;
  const isLocked   = !isMastered && !canMaster;

  // Level indicator: 4 bars, filled proportionally
  const filledBars = Math.max(1, Math.round((node.level / maxLvl) * 4));

  return (
    <div style={{
      width: 320, height: "100%",
      background: T.surface, borderLeft: `1px solid ${T.border}`,
      display: "flex", flexDirection: "column", overflow: "hidden",
    }}>

      {/* Header */}
      <div style={{ padding: "24px 24px 18px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <h3 style={{
            margin: 0, fontSize: 15, fontWeight: 600, lineHeight: 1.35,
            color: isMastered ? T.green : T.text,
            paddingRight: 10, letterSpacing: "-0.2px",
          }}>
            {node.name}
          </h3>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "none", color: T.textMuted,
              cursor: "pointer", fontSize: 18, lineHeight: 1,
              padding: "2px 4px", flexShrink: 0, transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = T.textSec)}
            onMouseLeave={e => (e.currentTarget.style.color = T.textMuted)}
          >×</button>
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {isGoal && (
            <Badge color={T.green}>⬡ FINAL GOAL</Badge>
          )}
          {isMastered  && <Badge color={T.green}>MASTERED</Badge>}
          {isLocked    && <Badge color={T.textMuted}>LOCKED</Badge>}
          {!isMastered && !isLocked && !isGoal && <Badge color={T.textSec}>AVAILABLE</Badge>}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>

        {/* Description */}
        <p style={{
          margin: "0 0 24px", fontSize: 12, color: "#777",
          lineHeight: 1.75, letterSpacing: "0.2px",
        }}>
          {node.summary}
        </p>

        {/* Level indicator */}
        <div style={{ marginBottom: 24 }}>
          <SectionLabel>Level</SectionLabel>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                style={{
                  width: 20, height: 3, borderRadius: 2,
                  background: i <= filledBars ? T.green : T.border,
                  boxShadow: i <= filledBars ? "0 0 5px rgba(74,222,128,0.5)" : "none",
                  transition: "background 0.2s",
                }}
              />
            ))}
            <span style={{
              marginLeft: 8, fontSize: 10, color: T.textMuted,
              letterSpacing: "0.3px",
            }}>
              {isGoal ? "GOAL" : `${node.level} / ${maxLvl}`}
            </span>
          </div>
        </div>

        {/* Prerequisites */}
        {node.prerequisites?.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <SectionLabel>Prerequisites</SectionLabel>
            <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
              {node.prerequisites.map(preId => {
                const pre  = nodes.find(n => n.id === preId);
                if (!pre) return null;
                const done = mastered.has(preId);
                return (
                  <div
                    key={preId}
                    onClick={() => onNavigate(preId)}
                    style={{
                      display: "flex", alignItems: "center", gap: 10,
                      padding: "8px 12px", borderRadius: 6,
                      background: T.bg, border: `1px solid ${T.border}`,
                      cursor: "pointer", transition: "border-color 0.15s, background 0.15s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = T.borderHov;
                      e.currentTarget.style.background = T.surfaceHov;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = T.border;
                      e.currentTarget.style.background = T.bg;
                    }}
                  >
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                      background: done ? T.green : "transparent",
                      border: done ? "none" : `1px solid ${T.textMuted}`,
                      boxShadow: done ? "0 0 5px rgba(74,222,128,0.5)" : "none",
                    }} />
                    <span style={{
                      fontSize: 11, fontWeight: 500, letterSpacing: "0.3px",
                      color: done ? T.green : T.textSec,
                    }}>
                      {pre.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Locked warning */}
        {isLocked && (
          <div style={{
            padding: "10px 12px", borderRadius: 6,
            background: "rgba(255,255,255,0.02)",
            border: `1px solid ${T.border}`,
            fontSize: 11, color: T.textMuted, lineHeight: 1.6, letterSpacing: "0.2px",
          }}>
            Complete all prerequisites to unlock this concept.
          </div>
        )}
      </div>

      {/* Action button */}
      <div style={{ padding: "16px 24px", borderTop: `1px solid ${T.border}` }}>
        <button
          onClick={onToggle}
          disabled={isLocked}
          style={{
            width: "100%", padding: "12px", fontSize: 11,
            fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
            background:  isMastered ? "transparent" : isLocked ? "transparent" : T.green,
            color:       isMastered ? T.textMuted   : isLocked ? T.textMuted   : "#111114",
            border:      `1px solid ${isMastered ? T.border : isLocked ? T.border : T.green}`,
            borderRadius: 6, cursor: isLocked ? "not-allowed" : "pointer",
            transition: "all 0.15s",
          }}
          onMouseEnter={e => {
            if (!isLocked && !isMastered) e.currentTarget.style.boxShadow = "0 0 16px rgba(74,222,128,0.4)";
          }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
        >
          {isMastered
            ? "Unmark Mastered"
            : isLocked
            ? "Complete Prerequisites First"
            : "Mastered"}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Small shared components
// ─────────────────────────────────────────────────────────────────────────────
function Badge({ children, color }) {
  // Append 33 (≈20% opacity) to 6-digit hex colors for the border
  const borderCol = color.startsWith("#") ? color + "40" : color;
  return (
    <span style={{
      display: "inline-block", padding: "3px 8px", borderRadius: 4,
      fontSize: 10, fontWeight: 600, letterSpacing: "1px",
      color, border: `1px solid ${borderCol}`, background: "transparent",
    }}>
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 600, color: T.textMuted,
      letterSpacing: "2px", textTransform: "uppercase",
    }}>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Loading / Empty states
// ─────────────────────────────────────────────────────────────────────────────
const gridBg = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
  `,
  backgroundSize: "40px 40px",
};

function LoadingScreen({ topic }) {
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 24,
      ...gridBg,
    }}>
      <div style={{
        width: 36, height: 36,
        border: `2px solid ${T.border}`,
        borderTopColor: T.green,
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
        boxShadow: "0 0 10px rgba(74,222,128,0.2)",
      }} />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 12, color: T.text, letterSpacing: "0.5px" }}>
          Analyzing{" "}
          <span style={{ color: T.green }}>"{topic}"</span>
        </div>
        <div style={{ fontSize: 10, color: T.textMuted, marginTop: 6, letterSpacing: "0.3px" }}>
          Building skill tree…
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 14,
      backgroundImage: `
        radial-gradient(ellipse at 50% 50%, rgba(74,222,128,0.025) 0%, transparent 65%),
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
      backgroundSize: "100% 100%, 40px 40px, 40px 40px",
    }}>
      <div style={{
        fontSize: 26, letterSpacing: "12px",
        color: T.green, opacity: 0.1,
      }}>⬡ ⬡ ⬡</div>
      <div style={{
        fontSize: 11, color: T.textMuted, letterSpacing: "0.5px",
      }}>
        Enter a topic above to generate a skill tree
      </div>
    </div>
  );
}
