import { useState, useEffect, useMemo, createContext, useContext } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Themes
// ─────────────────────────────────────────────────────────────────────────────
const ThemeContext = createContext(null);

const DARK = {
  bg:          "#111114",
  surface:     "#16161b",
  surfaceHov:  "#1a1a20",
  border:      "#222228",
  borderHov:   "#333338",
  text:        "#e0e0e0",
  textSec:     "#888888",
  textMuted:   "#555555",
  green:       "#4ade80",
  font:        "'JetBrains Mono', monospace",
  inputBg:     "#18181c",
  errorBg:     "#1a1010",
  errorBorder: "#3a2020",
  errorText:   "#aa5555",
  gridLine:    "rgba(255,255,255,0.02)",
  summaryText: "#777777",
  isDark:      true,
};

const LIGHT = {
  bg:          "#f0f0f4",
  surface:     "#ffffff",
  surfaceHov:  "#f5f5f8",
  border:      "#e2e2ea",
  borderHov:   "#c8c8d4",
  text:        "#111114",
  textSec:     "#555560",
  textMuted:   "#9999aa",
  green:       "#16a34a",
  font:        "'JetBrains Mono', monospace",
  inputBg:     "#f5f5f8",
  errorBg:     "#fff0f0",
  errorBorder: "#ffcccc",
  errorText:   "#cc3333",
  gridLine:    "rgba(0,0,0,0.04)",
  summaryText: "#666666",
  isDark:      false,
};

// Color per topic type
const TYPE_COLOR = {
  skill:   "#4ade80",
  tool:    "#60a5fa",
  project: "#f59e0b",
  field:   "#a78bfa",
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
// App
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [topic, setTopic]         = useState("");
  const [skillTree, setSkillTree] = useState(null);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [mastered, setMastered]   = useState(new Set());
  const [darkMode, setDarkMode]   = useState(true);

  const T = darkMode ? DARK : LIGHT;

  useEffect(() => { setMastered(new Set()); }, [skillTree]);

  async function handleGenerate(overrideTopic) {
    const t = (overrideTopic ?? topic).trim();
    if (!t) { setError("Please enter a topic!"); return; }
    if (overrideTopic) setTopic(overrideTopic);
    setLoading(true);
    setError(null);
    setSkillTree(null);
    try {
      const res = await fetch("http://localhost:5000/api/skill-tree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: t }),
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
    <ThemeContext.Provider value={T}>
      <div style={{
        height: "100vh", display: "flex", flexDirection: "column",
        background: T.bg, color: T.text, fontFamily: T.font,
      }}>

        {/* ── Header ── */}
        <header style={{
          height: 56, flexShrink: 0,
          background: T.surface, borderBottom: `1px solid ${T.border}`,
          display: "flex", alignItems: "center", padding: "0 24px", gap: 20,
          zIndex: 20,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, minWidth: 155 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%", background: T.green,
              boxShadow: `0 0 6px ${T.green}, 0 0 14px ${T.green}66`,
            }} />
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: T.text, letterSpacing: "2.5px", textTransform: "uppercase" }}>
                Skill Tree
              </div>
              <div style={{ fontSize: 9, color: T.textMuted, letterSpacing: "1.5px", textTransform: "uppercase", marginTop: 1 }}>
                AI Learning Path
              </div>
            </div>
          </div>

          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleGenerate()}
            placeholder="Enter topic — e.g. Calculus 3, React, Quantum Computing…"
            style={{
              flex: 1, padding: "8px 16px", fontSize: 12,
              background: T.inputBg, border: `1px solid ${T.border}`,
              borderRadius: 6, color: T.text, outline: "none",
              fontFamily: T.font, letterSpacing: "0.3px",
              transition: "border-color 0.15s",
            }}
            onFocus={e => (e.target.style.borderColor = T.borderHov)}
            onBlur={e  => (e.target.style.borderColor = T.border)}
          />

          <div style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
            {skillTree && (
              <span style={{ fontSize: 11, color: T.textMuted, whiteSpace: "nowrap", letterSpacing: "0.3px" }}>
                <span style={{ color: mastered.size === nodeCount && nodeCount > 0 ? T.green : T.textSec }}>
                  {mastered.size}
                </span>
                <span> / {nodeCount} mastered</span>
              </span>
            )}
            <button
              onClick={() => handleGenerate()}
              disabled={loading}
              style={{
                padding: "7px 16px", fontSize: 11, fontWeight: 700,
                letterSpacing: "1.5px", textTransform: "uppercase",
                background: loading ? "transparent" : T.green,
                color:      loading ? T.textMuted   : "#ffffff",
                border:     `1px solid ${loading ? T.border : T.green}`,
                borderRadius: 6, cursor: loading ? "not-allowed" : "pointer",
                fontFamily: T.font, transition: "all 0.15s",
              }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = `0 0 14px ${T.green}66`; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
            >
              {loading ? "Working…" : "Generate"}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(d => !d)}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                background: "none",
                border: `1px solid ${T.border}`,
                borderRadius: 6,
                cursor: "pointer",
                padding: "5px 8px",
                fontSize: 15,
                lineHeight: 1,
                color: T.textSec,
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = T.borderHov;
                e.currentTarget.style.color = T.text;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = T.border;
                e.currentTarget.style.color = T.textSec;
              }}
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </div>
        </header>

        {/* ── Error bar ── */}
        {error && (
          <div style={{
            padding: "8px 24px", flexShrink: 0,
            background: T.errorBg, borderBottom: `1px solid ${T.errorBorder}`,
            color: T.errorText, fontSize: 11, letterSpacing: "0.3px",
          }}>
            {error}
            {error.includes("fetch") && (
              <span style={{ color: T.textMuted }}> — is the server running? (node server.js)</span>
            )}
          </div>
        )}

        {/* ── Main ── */}
        <main style={{ flex: 1, overflow: "hidden", display: "flex" }}>
          {loading   && <LoadingScreen topic={topic} />}
          {!loading  && !skillTree && <EmptyState />}
          {!loading  && skillTree  && (
            <SkillTreeView
              key={skillTree.title}
              skillTree={skillTree}
              mastered={mastered}
              onToggle={toggleMastered}
              onGenerateTopic={handleGenerate}
            />
          )}
        </main>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
          *, *::before, *::after { box-sizing: border-box; }
          * { font-family: inherit; }
          body { margin: 0; background: ${T.bg}; }
          @keyframes spin     { to { transform: rotate(360deg); } }
          @keyframes dotPulse { 0%,100% { opacity:0.7; } 50% { opacity:1; box-shadow: 0 0 10px ${T.green}, 0 0 20px ${T.green}80; } }
          ::-webkit-scrollbar { width: 4px; height: 4px; }
          ::-webkit-scrollbar-track { background: ${T.bg}; }
          ::-webkit-scrollbar-thumb { background: ${T.border}; border-radius: 2px; }
          ::-webkit-scrollbar-thumb:hover { background: ${T.borderHov}; }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SkillTreeView
// ─────────────────────────────────────────────────────────────────────────────
function SkillTreeView({ skillTree, mastered, onToggle, onGenerateTopic }) {
  const T = useContext(ThemeContext);
  const [selectedId, setSelectedId]     = useState(null);
  const [hoveredId, setHoveredId]       = useState(null);
  const [visibleNodes, setVisibleNodes] = useState(new Set());
  const [sidebarOpen, setSidebarOpen]   = useState(true);

  const nodes        = skillTree.nodes;
  const selectedNode = nodes.find(n => n.id === selectedId) ?? null;

  // Layout constants
  const NW = 180, NH = 64, HG = 100, VG = 40, PX = 64, PY = 60;
  const NEXT_W = 190, NEXT_GAP = 80;

  const byLevel = useMemo(() => {
    const m = {};
    for (const n of nodes) (m[n.level] ??= []).push(n);
    return m;
  }, [nodes]);

  const allLevels = useMemo(
    () => Object.keys(byLevel).map(Number).sort((a, b) => a - b),
    [byLevel]
  );
  const minLvl = Math.min(...allLevels);
  const maxLvl = Math.max(...allLevels);

  const maxPerCol = Math.max(...allLevels.map(l => byLevel[l].length));
  const nextSteps = skillTree.nextSteps ?? [];
  const nextColX  = PX + allLevels.length * (NW + HG) - HG + NEXT_GAP;

  const canvasW = Math.max(1100, nextColX + NEXT_W + PX);
  const canvasH = Math.max(480, PY * 2 + maxPerCol * NH + (maxPerCol - 1) * VG);

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
          fromId: preId, toId: node.id,
          d: `M ${fx} ${fy} C ${mx} ${fy}, ${mx} ${ty}, ${tx} ${ty}`,
        });
      }
    }
    return res;
  }, [nodes, pos]);

  // Staged reveal: highest level first, staggered
  useEffect(() => {
    setVisibleNodes(new Set());
    const levelsDesc = [...allLevels].sort((a, b) => b - a);
    const timeouts   = [];
    let delay        = 300;
    levelsDesc.forEach(lvl => {
      byLevel[lvl].forEach(node => {
        const t = setTimeout(() => {
          setVisibleNodes(prev => new Set([...prev, node.id]));
        }, delay);
        timeouts.push(t);
        delay += 200;
      });
      delay += 400;
    });
    return () => timeouts.forEach(clearTimeout);
  }, [allLevels, byLevel]);

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
    <div style={{ flex: 1, display: "flex", overflow: "hidden", position: "relative" }}>

      {/* ── Canvas ── */}
      <div style={{
        flex: 1, overflow: "auto", position: "relative",
        minWidth: 0,
        backgroundImage: `
          linear-gradient(${T.gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}>
        {/* Radial glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
          background: `radial-gradient(ellipse at 55% 50%, ${T.green}08 0%, transparent 65%)`,
        }} />

        <div style={{ position: "relative", width: canvasW, height: canvasH, zIndex: 1 }}>

          {/* ── SVG edges ── */}
          <svg style={{
            position: "absolute", inset: 0, width: canvasW, height: canvasH,
            pointerEvents: "none", overflow: "visible", zIndex: 0,
          }}>
            <defs>
              <linearGradient id="edgeDef" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor={T.green} stopOpacity="0.3" />
                <stop offset="100%" stopColor={T.green} stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="edgeHl" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor={T.green} stopOpacity="0.85" />
                <stop offset="100%" stopColor={T.green} stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="edgeMastered" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor={T.green} stopOpacity="0.5" />
                <stop offset="100%" stopColor={T.green} stopOpacity="0.15" />
              </linearGradient>
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
                  style={{ transition: "stroke-dashoffset 0.8s ease, opacity 0.3s ease, stroke-width 0.15s" }}
                />
              );
            })}
          </svg>

          {/* ── Nodes ── */}
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

            let bg     = T.surface;
            let border = T.border;
            let shadow = "none";
            let textC  = isAvailable && !isMastered && !isGoal ? T.text : T.textSec;

            if (isMastered) {
              border = `${T.green}59`;
              textC  = T.green;
              shadow = `0 0 12px ${T.green}1f, inset 0 0 24px ${T.green}07`;
            } else if (isGoal) {
              border = `${T.green}38`;
              textC  = T.text;
              shadow = `0 0 18px ${T.green}17`;
            } else if (isLocked) {
              textC = T.textMuted;
            }

            if (isSelected) {
              bg     = T.surfaceHov;
              border = `${T.green}73`;
              shadow = `0 0 20px ${T.green}33`;
            } else if (isDirectHov && !dimmed && !isMastered) {
              border = T.borderHov;
              shadow = `0 0 8px ${T.green}12`;
            } else if (isInChain && isHl && !isMastered && !isGoal) {
              border = `${T.green}33`;
            }

            const nodeOpacity   = !isVisible ? 0 : dimmed ? 0.12 : 1;
            const nodeTransform = isVisible ? "translateX(0px)" : "translateX(20px)";
            const lines         = splitText(node.name, 17);

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
                {isGoal && (
                  <span style={{ position: "absolute", top: 7, left: 10, fontSize: 10, color: `${T.green}73`, lineHeight: 1 }}>⬡</span>
                )}
                {isMastered ? (
                  <div style={{
                    position: "absolute", top: 9, right: 9,
                    width: 8, height: 8, borderRadius: "50%",
                    background: T.green,
                    boxShadow: `0 0 6px ${T.green}, 0 0 12px ${T.green}73`,
                    animation: "dotPulse 2.5s ease-in-out infinite",
                  }} />
                ) : isLocked ? (
                  <div style={{
                    position: "absolute", top: 9, right: 9,
                    width: 8, height: 8, borderRadius: "50%",
                    border: `1px solid ${T.textMuted}`, opacity: 0.5,
                  }} />
                ) : null}

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
              <div key={`lbl-${lvl}`} style={{
                position: "absolute", top: PY / 2 - 8, left: x,
                transform: "translateX(-50%)",
                fontSize: 9, fontWeight: 600,
                color: lvl === maxLvl ? `${T.green}80` : T.textMuted,
                letterSpacing: "2px", textTransform: "uppercase",
              }}>
                {lvl === maxLvl ? "GOAL" : `LVL ${lvl}`}
              </div>
            );
          })}

          {/* ── What's Next column ── */}
          {nextSteps.length > 0 && (
            <NextStepsColumn
              nextSteps={nextSteps}
              x={nextColX}
              canvasH={canvasH}
              PY={PY}
              NH={54}
              VG={10}
              W={NEXT_W}
              onGenerateTopic={onGenerateTopic}
            />
          )}
        </div>
      </div>

      {/* ── Sidebar toggle tab ── */}
      <button
        onClick={() => setSidebarOpen(o => !o)}
        title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        style={{
          position: "absolute", right: sidebarOpen ? 284 : 0, top: "50%",
          transform: "translateY(-50%)",
          zIndex: 30, width: 18, height: 48,
          background: T.surface,
          border: `1px solid ${T.border}`,
          borderRight: sidebarOpen ? "none" : `1px solid ${T.border}`,
          borderLeft:  sidebarOpen ? `1px solid ${T.border}` : "none",
          borderRadius: sidebarOpen ? "6px 0 0 6px" : "0 6px 6px 0",
          cursor: "pointer", padding: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 10, color: T.textMuted,
          transition: "right 0.25s ease, color 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = T.text)}
        onMouseLeave={e => (e.currentTarget.style.color = T.textMuted)}
      >
        {sidebarOpen ? "›" : "‹"}
      </button>

      {/* ── Right sidebar ── */}
      <div style={{
        width: sidebarOpen ? 284 : 0,
        flexShrink: 0,
        background: T.surface,
        borderLeft: `1px solid ${T.border}`,
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        transition: "width 0.25s ease",
      }}>
        <div style={{ width: 284, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {selectedNode ? (
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
          ) : (
            <RelatedSidebar
              skillTree={skillTree}
              onGenerateTopic={onGenerateTopic}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// What's Next column — rendered at the right end of the canvas
// ─────────────────────────────────────────────────────────────────────────────
function NextStepsColumn({ nextSteps, x, canvasH, PY, NH, VG, W, onGenerateTopic }) {
  const T = useContext(ThemeContext);

  const totalH = nextSteps.length * NH + (nextSteps.length - 1) * VG;
  const startY = (canvasH - totalH) / 2;

  return (
    <>
      {/* Vertical divider */}
      <div style={{
        position: "absolute",
        left: x - 40,
        top: PY,
        width: 1,
        height: canvasH - PY * 2,
        background: `linear-gradient(to bottom, transparent, ${T.border} 20%, ${T.border} 80%, transparent)`,
      }} />

      {/* Column label */}
      <div style={{
        position: "absolute",
        top: PY / 2 - 8,
        left: x + W / 2,
        transform: "translateX(-50%)",
        fontSize: 9, fontWeight: 600,
        color: T.textMuted,
        letterSpacing: "2px", textTransform: "uppercase",
      }}>
        WHAT'S NEXT
      </div>

      {/* Step cards */}
      {nextSteps.map((step, i) => {
        const y     = startY + i * (NH + VG);
        const color = TYPE_COLOR[step.type] ?? T.textSec;
        return (
          <div
            key={step.name}
            onClick={() => onGenerateTopic(step.name)}
            style={{
              position: "absolute", left: x, top: y,
              width: W, height: NH,
              background: T.surface,
              border: `1px solid ${T.border}`,
              borderRadius: 8,
              padding: "0 14px",
              cursor: "pointer",
              display: "flex", flexDirection: "column",
              justifyContent: "center", gap: 5,
              transition: "border-color 0.15s, box-shadow 0.15s",
              userSelect: "none",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = color + "55";
              e.currentTarget.style.boxShadow = `0 0 10px ${color}18`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = T.border;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{
                width: 5, height: 5, borderRadius: "50%", flexShrink: 0,
                background: color,
                boxShadow: `0 0 5px ${color}90`,
              }} />
              <span style={{ fontSize: 11, fontWeight: 500, color: T.text, letterSpacing: "0.2px" }}>
                {step.name}
              </span>
            </div>
            <div style={{
              fontSize: 9, color: T.textMuted, lineHeight: 1.5,
              letterSpacing: "0.2px", paddingLeft: 12,
            }}>
              {step.reason.length > 60 ? step.reason.substring(0, 57) + "…" : step.reason}
            </div>
          </div>
        );
      })}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Related sidebar — shown when no node is selected
// ─────────────────────────────────────────────────────────────────────────────
function RelatedSidebar({ skillTree, onGenerateTopic }) {
  const T = useContext(ThemeContext);

  return (
    <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>

      {/* Tree info */}
      <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
        <div style={{
          fontSize: 13, fontWeight: 600, color: T.text,
          marginBottom: 6, letterSpacing: "-0.2px", lineHeight: 1.3,
        }}>
          {skillTree.title}
        </div>
        <div style={{ fontSize: 11, color: T.textMuted, lineHeight: 1.65, letterSpacing: "0.2px" }}>
          {skillTree.description}
        </div>
        <div style={{
          marginTop: 10, display: "inline-block",
          padding: "3px 8px", borderRadius: 4,
          border: `1px solid ${T.border}`,
          fontSize: 9, color: T.textMuted, letterSpacing: "1.5px", textTransform: "uppercase",
        }}>
          {skillTree.scale}
        </div>
      </div>

      {/* Related Topics */}
      {(skillTree.relatedTopics ?? []).length > 0 && (
        <div style={{ padding: "16px 20px", borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
          <SectionLabel>Related Topics</SectionLabel>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
            {skillTree.relatedTopics.map(item => (
              <RelatedCard
                key={item.name}
                item={item}
                color={TYPE_COLOR[item.type] ?? T.textSec}
                onClick={() => onGenerateTopic(item.name)}
              />
            ))}
          </div>
        </div>
      )}

      {/* After Mastery */}
      {(skillTree.nextSteps ?? []).length > 0 && (
        <div style={{ padding: "16px 20px", flexShrink: 0 }}>
          <SectionLabel>After Mastery</SectionLabel>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
            {skillTree.nextSteps.map(item => (
              <RelatedCard
                key={item.name}
                item={item}
                color={TYPE_COLOR[item.type] ?? T.textSec}
                onClick={() => onGenerateTopic(item.name)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Hint */}
      <div style={{ padding: "0 20px 20px", marginTop: "auto" }}>
        <div style={{
          fontSize: 10, color: T.textMuted, letterSpacing: "0.2px", lineHeight: 1.6,
          padding: "10px 12px", border: `1px solid ${T.border}`,
          borderRadius: 6, background: T.bg,
        }}>
          Click any node to see details and mark it mastered.
        </div>
      </div>
    </div>
  );
}

function RelatedCard({ item, color, onClick }) {
  const T = useContext(ThemeContext);

  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px 12px",
        background: T.bg,
        border: `1px solid ${T.border}`,
        borderRadius: 7,
        cursor: "pointer",
        transition: "border-color 0.15s, background 0.15s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color + "50";
        e.currentTarget.style.background  = T.surfaceHov;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = T.border;
        e.currentTarget.style.background  = T.bg;
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
        <div style={{
          width: 5, height: 5, borderRadius: "50%",
          background: color, flexShrink: 0,
          boxShadow: `0 0 4px ${color}80`,
        }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: T.text, letterSpacing: "0.2px" }}>
          {item.name}
        </span>
        <span style={{
          marginLeft: "auto", fontSize: 9, color: color,
          letterSpacing: "1px", textTransform: "uppercase", flexShrink: 0,
        }}>
          {item.type}
        </span>
      </div>
      <div style={{
        fontSize: 10, color: T.textMuted, lineHeight: 1.55,
        letterSpacing: "0.2px", paddingLeft: 12,
      }}>
        {item.reason}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Detail panel — shown in sidebar when a node is selected
// ─────────────────────────────────────────────────────────────────────────────
function DetailPanel({ node, nodes, mastered, maxLvl, canMaster, onClose, onToggle, onNavigate }) {
  const T = useContext(ThemeContext);

  const isMastered = mastered.has(node.id);
  const isGoal     = node.level === maxLvl;
  const isLocked   = !isMastered && !canMaster;
  const filledBars = Math.max(1, Math.round((node.level / maxLvl) * 4));

  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column", overflow: "hidden",
    }}>

      {/* Header */}
      <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${T.border}`, flexShrink: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <h3 style={{
            margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.35,
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
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {isGoal     && <Badge color={T.green}>⬡ FINAL GOAL</Badge>}
          {isMastered && <Badge color={T.green}>MASTERED</Badge>}
          {isLocked   && <Badge color={T.textMuted}>LOCKED</Badge>}
          {!isMastered && !isLocked && !isGoal && <Badge color={T.textSec}>AVAILABLE</Badge>}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflowY: "auto", padding: "18px 20px" }}>
        <p style={{
          margin: "0 0 22px", fontSize: 11, color: T.summaryText,
          lineHeight: 1.75, letterSpacing: "0.2px",
        }}>
          {node.summary}
        </p>

        {/* Level indicator */}
        <div style={{ marginBottom: 22 }}>
          <SectionLabel>Level</SectionLabel>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 8 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{
                width: 20, height: 3, borderRadius: 2,
                background: i <= filledBars ? T.green : T.border,
                boxShadow: i <= filledBars ? `0 0 5px ${T.green}80` : "none",
                transition: "background 0.2s",
              }} />
            ))}
            <span style={{ marginLeft: 8, fontSize: 10, color: T.textMuted, letterSpacing: "0.3px" }}>
              {isGoal ? "GOAL" : `${node.level} / ${maxLvl}`}
            </span>
          </div>
        </div>

        {/* Prerequisites */}
        {node.prerequisites?.length > 0 && (
          <div style={{ marginBottom: 18 }}>
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
                      e.currentTarget.style.background  = T.surfaceHov;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = T.border;
                      e.currentTarget.style.background  = T.bg;
                    }}
                  >
                    <div style={{
                      width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                      background: done ? T.green : "transparent",
                      border: done ? "none" : `1px solid ${T.textMuted}`,
                      boxShadow: done ? `0 0 5px ${T.green}80` : "none",
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

        {isLocked && (
          <div style={{
            padding: "10px 12px", borderRadius: 6,
            background: T.isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
            border: `1px solid ${T.border}`,
            fontSize: 11, color: T.textMuted, lineHeight: 1.6, letterSpacing: "0.2px",
          }}>
            Complete all prerequisites to unlock.
          </div>
        )}
      </div>

      {/* Action */}
      <div style={{ padding: "14px 20px", borderTop: `1px solid ${T.border}`, flexShrink: 0 }}>
        <button
          onClick={onToggle}
          disabled={isLocked}
          style={{
            width: "100%", padding: "11px", fontSize: 11,
            fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase",
            background:  isMastered ? "transparent" : isLocked ? "transparent" : T.green,
            color:       isMastered ? T.textMuted   : isLocked ? T.textMuted   : T.isDark ? "#111114" : "#ffffff",
            border:      `1px solid ${isMastered ? T.border : isLocked ? T.border : T.green}`,
            borderRadius: 6, cursor: isLocked ? "not-allowed" : "pointer",
            transition: "all 0.15s", fontFamily: T.font,
          }}
          onMouseEnter={e => {
            if (!isLocked && !isMastered) e.currentTarget.style.boxShadow = `0 0 16px ${T.green}66`;
          }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
        >
          {isMastered ? "Unmark Mastered" : isLocked ? "Complete Prerequisites First" : "Mark Mastered"}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared micro-components
// ─────────────────────────────────────────────────────────────────────────────
function Badge({ children, color }) {
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
  const T = useContext(ThemeContext);
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
function LoadingScreen({ topic }) {
  const T = useContext(ThemeContext);
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 24,
      backgroundImage: `
        linear-gradient(${T.gridLine} 1px, transparent 1px),
        linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}>
      <div style={{
        width: 36, height: 36,
        border: `2px solid ${T.border}`,
        borderTopColor: T.green,
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
        boxShadow: `0 0 10px ${T.green}33`,
      }} />
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 12, color: T.text, letterSpacing: "0.5px" }}>
          Analyzing <span style={{ color: T.green }}>"{topic}"</span>
        </div>
        <div style={{ fontSize: 10, color: T.textMuted, marginTop: 6, letterSpacing: "0.3px" }}>
          Building skill tree…
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  const T = useContext(ThemeContext);
  return (
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: 14,
      backgroundImage: `
        radial-gradient(ellipse at 50% 50%, ${T.green}07 0%, transparent 65%),
        linear-gradient(${T.gridLine} 1px, transparent 1px),
        linear-gradient(90deg, ${T.gridLine} 1px, transparent 1px)
      `,
      backgroundSize: "100% 100%, 40px 40px, 40px 40px",
    }}>
      <div style={{ fontSize: 26, letterSpacing: "12px", color: T.green, opacity: 0.15 }}>⬡ ⬡ ⬡</div>
      <div style={{ fontSize: 11, color: T.textMuted, letterSpacing: "0.5px" }}>
        Enter a topic above to generate a skill tree
      </div>
    </div>
  );
}
