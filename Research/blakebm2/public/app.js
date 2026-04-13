const form           = document.getElementById("form");
const topicInput     = document.getElementById("topic");
const statusEl       = document.getElementById("statusEl");
const promptView     = document.getElementById("prompt-view");
const treeView       = document.getElementById("tree-view");
const treeTitle      = document.getElementById("tree-title");
const backBtn        = document.getElementById("back-btn");
const graphContainer = document.getElementById("graph-container");
const svg            = document.getElementById("graph");
const detailPanel    = document.getElementById("detail-panel");
const detailName     = document.getElementById("detail-name");
const detailLevel    = document.getElementById("detail-level");
const detailRequires = document.getElementById("detail-requires");
const detailReqSection = document.getElementById("detail-requires-section");
const detailDesc     = document.getElementById("detail-description");
const detailTips     = document.getElementById("detail-tips");
const detailConceptsSection = document.getElementById("detail-concepts-section");
const detailConcepts = document.getElementById("detail-concepts");
const detailMistakesSection = document.getElementById("detail-mistakes-section");
const detailMistakes = document.getElementById("detail-mistakes");
const detailOutcomesSection = document.getElementById("detail-outcomes-section");
const detailOutcomes = document.getElementById("detail-outcomes");
const detailResourcesSection = document.getElementById("detail-resources-section");
const detailResources = document.getElementById("detail-resources");
const detailClose    = document.getElementById("detail-close");
const progressLabel  = document.getElementById("progress-label");
const progressFill   = document.getElementById("progress-fill");

const detailCompleteBtn = document.getElementById("detail-complete-btn");

const NS = "http://www.w3.org/2000/svg";

// ─── Tab switching ───────────────────────────────────────────────────────────
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
  });
});

function resetTabs() {
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === "overview"));
  document.querySelectorAll(".tab-pane").forEach(p => p.classList.toggle("active", p.id === "tab-overview"));
}
// ─────────────────────────────────────────────────────────────────────────────

const completedNodes = new Set();
// Maps node name → { circle, t, group }
const nodeCircleMap = new Map();
// Current tree nodes, kept in sync so helpers can look up requires
let currentNodes = [];
// Maps node name → { x, y } positions in the SVG
let nodePositions = {};
let currentTopic = "";

function el(tag, attrs) {
  const e = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
}

function addLabel(g, text, maxChars, className, startY = null) {
  const words = text.split(" ");
  const lines = [];
  let current = [];

  for (const word of words) {
    const attempt = [...current, word].join(" ");
    if (attempt.length > maxChars && current.length > 0) {
      lines.push(current.join(" "));
      current = [word];
    } else {
      current.push(word);
    }
  }
  if (current.length) lines.push(current.join(" "));

  const lineH = 14;
  const y0 = startY !== null ? startY : -((lines.length - 1) * lineH) / 2;

  for (let i = 0; i < lines.length; i++) {
    const t = el("text", { class: className, x: "0", y: String(y0 + i * lineH) });
    t.textContent = lines[i];
    g.appendChild(t);
  }
}

function isUnlocked(nodeName) {
  const node = currentNodes.find(n => n.name === nodeName);
  if (!node || node.requires.length === 0) return true;
  return node.requires.every(r => completedNodes.has(r));
}

function nodeColors(t, completed) {
  if (completed) return { fill: "hsl(142, 35%, 13%)", stroke: "hsl(142, 60%, 40%)" };
  return {
    fill:   `hsl(${265 + t * 20}, 30%, ${12 + t * 10}%)`,
    stroke: `hsl(${265 + t * 20}, ${50 + t * 40}%, ${40 + t * 25}%)`
  };
}

function updateProgress() {
  const total = currentNodes.length;
  const done  = completedNodes.size;
  progressLabel.textContent = `${done} / ${total}`;
  progressFill.style.width  = total ? `${(done / total) * 100}%` : "0%";
}

// Re-evaluate and redraw every node's locked/complete visual state
function updateAllNodeVisuals() {
  for (const node of currentNodes) {
    const entry = nodeCircleMap.get(node.name);
    if (!entry) continue;
    const locked    = !isUnlocked(node.name);
    const completed = completedNodes.has(node.name);
    const { stroke } = nodeColors(entry.t, completed);
    const gradId = completed ? "grad-completed" : entry.gradId;
    entry.circle.setAttribute("fill", `url(#${gradId})`);
    entry.circle.setAttribute("stroke", stroke);
    entry.ring.setAttribute("stroke", stroke);
    entry.group.classList.toggle("node-locked", locked);
    entry.group.classList.toggle("node-completed", completed);
  }
}

// Remove nodeName from completedNodes and cascade to anything that depended on it
function cascadeUncomplete(nodeName) {
  for (const node of currentNodes) {
    if (node.requires.includes(nodeName) && completedNodes.has(node.name)) {
      completedNodes.delete(node.name);
      cascadeUncomplete(node.name);
    }
  }
}

// ─── localStorage helpers ────────────────────────────────────────────────────
function loadAllSaved() {
  return JSON.parse(localStorage.getItem("skillTrees") || "[]");
}

function saveCurrentTree() {
  if (!currentTopic || currentNodes.length === 0) return;
  const all = loadAllSaved();
  const idx = all.findIndex(t => t.topic.toLowerCase() === currentTopic.toLowerCase());
  const entry = {
    topic: currentTopic,
    nodes: currentNodes,
    completed: [...completedNodes],
    savedAt: Date.now()
  };
  if (idx >= 0) all[idx] = entry;
  else all.unshift(entry);
  localStorage.setItem("skillTrees", JSON.stringify(all));
}

function deleteSavedTree(topic) {
  const all = loadAllSaved().filter(t => t.topic !== topic);
  localStorage.setItem("skillTrees", JSON.stringify(all));
}

function openSavedTree(saved) {
  currentTopic = saved.topic;
  completedNodes.clear();
  saved.completed.forEach(n => completedNodes.add(n));

  promptView.hidden = true;
  treeView.hidden = false;
  treeTitle.textContent = saved.topic;
  detailPanel.hidden = true;

  renderGraph(saved.nodes);
  updateProgress();
}

function renderSavedList() {
  const all = loadAllSaved();
  const section = document.getElementById("saved-section");
  const list    = document.getElementById("saved-list");

  if (all.length === 0) { section.hidden = true; return; }
  section.hidden = false;

  list.innerHTML = all.map((tree, i) => {
    const done  = tree.completed.length;
    const total = tree.nodes.length;
    const pct   = Math.round((done / total) * 100);
    return `
      <li class="saved-item">
        <div class="saved-info">
          <span class="saved-topic">${tree.topic}</span>
          <span class="saved-progress">${done}/${total} complete</span>
        </div>
        <div class="saved-bar-track">
          <div class="saved-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="saved-actions">
          <button class="saved-open" data-i="${i}">Open</button>
          <button class="saved-delete" data-i="${i}">Delete</button>
        </div>
      </li>`;
  }).join("");

  list.querySelectorAll(".saved-open").forEach(btn =>
    btn.addEventListener("click", () => openSavedTree(all[+btn.dataset.i]))
  );
  list.querySelectorAll(".saved-delete").forEach(btn =>
    btn.addEventListener("click", () => {
      deleteSavedTree(all[+btn.dataset.i].topic);
      renderSavedList();
    })
  );
}
// ─────────────────────────────────────────────────────────────────────────────

// Tracks edge elements: [{ el, from, to }]
let edgeList = [];

function renderGraph(nodes) {
  svg.innerHTML = "";
  nodeCircleMap.clear();
  edgeList = [];
  currentNodes = nodes;

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

  const W = graphContainer.clientWidth || 800;
  const nodeR    = 42;
  const vPad     = 60;
  const levelGap = 150;

  const topY   = vPad + nodeR;
  const totalH = topY + (maxLevel - 1) * levelGap + nodeR + vPad;

  svg.setAttribute("width", W);
  svg.setAttribute("height", totalH);

  // ── Defs: gradients + arrowhead marker ───────────────────────────────────
  const defsEl = document.createElementNS(NS, "defs");

  // Arrowhead marker (uses context-stroke to match edge color automatically)
  const marker = el("marker", {
    id: "arrowhead", markerWidth: "8", markerHeight: "8",
    refX: "4", refY: "4", orient: "auto"
  });
  const arrowPath = el("path", { d: "M 0 0 L 8 4 L 0 8 Z", fill: "#7c6aaa" });
  marker.appendChild(arrowPath);
  defsEl.appendChild(marker);

  // Per-level radial gradients (glassy lit-from-above look)
  for (let lvl = 1; lvl <= maxLevel; lvl++) {
    const t   = (lvl - 1) / Math.max(maxLevel - 1, 1);
    const hue = 265 + t * 20;
    const grad = el("radialGradient", {
      id: `grad-lvl-${lvl}`, cx: "40%", cy: "35%", r: "65%", fx: "40%", fy: "35%"
    });
    const s1 = el("stop", { offset: "0%",   "stop-color": `hsl(${hue}, 28%, ${26 + t * 14}%)` });
    const s2 = el("stop", { offset: "100%", "stop-color": `hsl(${hue}, 35%, ${8  + t * 8}%)` });
    grad.appendChild(s1);
    grad.appendChild(s2);
    defsEl.appendChild(grad);
  }

  // Completed-node gradient
  const gradC = el("radialGradient", { id: "grad-completed", cx: "40%", cy: "35%", r: "65%", fx: "40%", fy: "35%" });
  gradC.appendChild(el("stop", { offset: "0%",   "stop-color": "hsl(142, 30%, 22%)" }));
  gradC.appendChild(el("stop", { offset: "100%", "stop-color": "hsl(142, 40%, 8%)"  }));
  defsEl.appendChild(gradC);

  svg.appendChild(defsEl);
  // ─────────────────────────────────────────────────────────────────────────

  // Position map: name -> {x, y}
  const pos = {};
  for (let lvl = 1; lvl <= maxLevel; lvl++) {
    const row = levels[lvl] || [];
    const y = topY + (maxLevel - lvl) * levelGap;
    row.forEach((node, i) => {
      pos[node.name] = { x: (W / (row.length + 1)) * (i + 1), y, level: node.level };
    });
  }
  nodePositions = pos;

  // Level labels + guide lines
  for (let lvl = 1; lvl <= maxLevel; lvl++) {
    const y = topY + (maxLevel - lvl) * levelGap;
    const label = el("text", { x: "10", y: String(y + 5), class: "level-axis-label" });
    label.textContent = `Lvl ${lvl}`;
    svg.appendChild(label);
    svg.appendChild(el("line", { x1: "0", y1: y, x2: W, y2: y, class: "level-rule" }));
  }

  // Curved edges with arrowheads
  for (const node of nodes) {
    const from = pos[node.name];
    if (!from) continue;
    for (const req of node.requires) {
      const to = pos[req];
      if (!to) continue;
      const sx = from.x, sy = from.y + nodeR + 2;
      const ex = to.x,   ey = to.y   - nodeR - 9;
      const cp = Math.min(55, Math.abs(ey - sy) * 0.38);
      const d  = `M ${sx},${sy} C ${sx},${sy + cp} ${ex},${ey - cp} ${ex},${ey}`;
      const edgeEl = el("path", { d, class: "edge", "marker-end": "url(#arrowhead)" });
      svg.appendChild(edgeEl);
      edgeList.push({ el: edgeEl, from: node.name, to: req });
    }
  }

  // Skill nodes
  for (const node of nodes) {
    const p = pos[node.name];
    if (!p) continue;

    const g = el("g", { transform: `translate(${p.x},${p.y})` });

    const t         = (node.level - 1) / Math.max(maxLevel - 1, 1);
    const completed = completedNodes.has(node.name);
    const { stroke } = nodeColors(t, completed);
    const gradId    = `grad-lvl-${node.level}`;
    const locked    = !isUnlocked(node.name);

    // Outer halo ring
    const ring = el("circle", {
      r: String(nodeR + 6), fill: "none", stroke, "stroke-width": "1", opacity: "0.28"
    });
    g.appendChild(ring);

    // Main circle with gradient
    const circle = el("circle", {
      r: String(nodeR),
      fill: completed ? "url(#grad-completed)" : `url(#${gradId})`,
      stroke,
      "stroke-width": "2.5"
    });
    nodeCircleMap.set(node.name, { circle, ring, t, group: g, gradId });
    g.appendChild(circle);

    if (locked)    g.classList.add("node-locked");
    if (completed) g.classList.add("node-completed");

    const badge = el("text", { x: String(nodeR - 6), y: String(-nodeR + 10), class: "level-badge" });
    badge.textContent = `L${node.level}`;
    g.appendChild(badge);

    const emojiText = el("text", { x: "0", y: "10", class: "node-emoji" });
    emojiText.textContent = node.emoji || "⭐";
    g.appendChild(emojiText);

    addLabel(g, node.name, 10, "node-label-below", nodeR + 10);

    g.classList.add("node-clickable");
    g.addEventListener("click", () => showDetail(node));

    g.addEventListener("mouseenter", () => {
      const active = new Set([node.name, ...node.requires]);
      for (const [name, entry] of nodeCircleMap) {
        entry.group.classList.toggle("node-dimmed", !active.has(name));
      }
      for (const edge of edgeList) {
        const isConnected = edge.from === node.name && active.has(edge.to);
        edge.el.classList.toggle("edge-dimmed", !isConnected);
        if (isConnected) {
          const done = completedNodes.has(edge.to);
          edge.el.style.stroke = done ? "hsl(142, 60%, 40%)" : "#6d5aad";
          edge.el.style.strokeWidth = done ? "2.5" : "2";
        }
      }

      // Glowing orb pulses toward dependent nodes
      const pulseGroup = document.createElementNS(NS, "g");
      pulseGroup.dataset.role = "pulses";
      svg.appendChild(pulseGroup);

      for (const edge of edgeList) {
        if (edge.to !== node.name) continue;
        const from = nodePositions[node.name];
        const to   = nodePositions[edge.from];
        if (!from || !to) continue;

        const done  = completedNodes.has(edge.from);
        const color = done ? "hsl(142, 60%, 45%)" : "#ffffff";
        // Start from the arrowhead (top of hovered node) and travel up to dependent
        const sx = from.x, sy = from.y - nodeR - 9;
        const ex = to.x,   ey = to.y   + nodeR + 2;
        const cp = Math.min(55, Math.abs(sy - ey) * 0.38);
        const pathD = `M ${sx},${sy} C ${sx},${sy - cp} ${ex},${ey + cp} ${ex},${ey}`;
        const dur   = "2.2s";

        for (let i = 0; i < 3; i++) {
          const begin = `${i * 0.73}s`;
          const orbG  = document.createElementNS(NS, "g");

          // Bloom glow circle
          const bloom = document.createElementNS(NS, "circle");
          bloom.setAttribute("r", "11");
          bloom.setAttribute("fill", color);
          bloom.setAttribute("opacity", "0");
          const bloomAnim = document.createElementNS(NS, "animate");
          bloomAnim.setAttribute("attributeName", "opacity");
          bloomAnim.setAttribute("values", "0;0.22;0.22;0");
          bloomAnim.setAttribute("keyTimes", "0;0.15;0.75;1");
          bloomAnim.setAttribute("dur", dur);
          bloomAnim.setAttribute("begin", begin);
          bloomAnim.setAttribute("repeatCount", "indefinite");
          bloom.appendChild(bloomAnim);

          // Core dot
          const dot = document.createElementNS(NS, "circle");
          dot.setAttribute("r", "5");
          dot.setAttribute("fill", color);
          dot.setAttribute("opacity", "0");
          const dotAnim = document.createElementNS(NS, "animate");
          dotAnim.setAttribute("attributeName", "opacity");
          dotAnim.setAttribute("values", "0;0.95;0.95;0");
          dotAnim.setAttribute("keyTimes", "0;0.15;0.75;1");
          dotAnim.setAttribute("dur", dur);
          dotAnim.setAttribute("begin", begin);
          dotAnim.setAttribute("repeatCount", "indefinite");
          dot.appendChild(dotAnim);

          // Motion along curved path
          const animMotion = document.createElementNS(NS, "animateMotion");
          animMotion.setAttribute("dur", dur);
          animMotion.setAttribute("begin", begin);
          animMotion.setAttribute("repeatCount", "indefinite");
          animMotion.setAttribute("path", pathD);

          orbG.appendChild(bloom);
          orbG.appendChild(dot);
          orbG.appendChild(animMotion);
          pulseGroup.appendChild(orbG);
        }
      }
    });

    g.addEventListener("mouseleave", () => {
      for (const entry of nodeCircleMap.values()) entry.group.classList.remove("node-dimmed");
      for (const edge of edgeList) {
        edge.el.classList.remove("edge-dimmed");
        edge.el.style.stroke = "";
        edge.el.style.strokeWidth = "";
      }
      svg.querySelectorAll("[data-role='pulses']").forEach(p => p.remove());
    });

    svg.appendChild(g);
  }
}

function updateCompleteBtn(nodeName) {
  const done = completedNodes.has(nodeName);
  detailCompleteBtn.textContent = done ? "✓ Completed" : "Mark as Complete";
  detailCompleteBtn.classList.toggle("completed", done);
}

function showDetail(node) {
  resetTabs();
  const locked = !isUnlocked(node.name);

  detailName.textContent = node.name;
  detailLevel.textContent = `Level ${node.level}`;

  // Always show requires, highlighting incomplete ones when locked
  if (node.requires && node.requires.length > 0) {
    detailReqSection.hidden = false;
    detailRequires.innerHTML = node.requires.map(r => {
      const done = completedNodes.has(r);
      return `<li style="color:${done ? "hsl(142,55%,55%)" : ""}">${done ? "✓ " : ""}${r}</li>`;
    }).join("");
  } else {
    detailReqSection.hidden = true;
  }

  if (locked) {
    const missing = node.requires.filter(r => !completedNodes.has(r));
    detailDesc.textContent = `Complete ${missing.join(" and ")} to unlock this skill.`;
    detailTips.innerHTML = "";
    detailConceptsSection.hidden = true;
    detailMistakesSection.hidden = true;
    detailOutcomesSection.hidden = true;
    detailResourcesSection.hidden = true;
    detailCompleteBtn.hidden = true;
  } else {
    detailDesc.textContent = node.description || "No description available.";
    detailTips.innerHTML = (node.tips || []).map(t => `<li>${t}</li>`).join("");

    if (node.keyConcepts && node.keyConcepts.length > 0) {
      detailConceptsSection.hidden = false;
      detailConcepts.innerHTML = node.keyConcepts.map(c =>
        typeof c === "object"
          ? `<li><strong>${c.term}</strong> — ${c.explanation}</li>`
          : `<li>${c}</li>`
      ).join("");
    } else {
      detailConceptsSection.hidden = true;
    }

    if (node.commonMistakes && node.commonMistakes.length > 0) {
      detailMistakesSection.hidden = false;
      detailMistakes.innerHTML = node.commonMistakes.map(m => `<li>${m}</li>`).join("");
    } else {
      detailMistakesSection.hidden = true;
    }

    if (node.outcomes && node.outcomes.length > 0) {
      detailOutcomesSection.hidden = false;
      detailOutcomes.innerHTML = node.outcomes.map(o => `<li>${o}</li>`).join("");
    } else {
      detailOutcomesSection.hidden = true;
    }

    if (node.resources && node.resources.length > 0) {
      detailResourcesSection.hidden = false;
      detailResources.innerHTML = node.resources.map(r =>
        `<li>
          <a href="${r.url}" target="_blank" rel="noopener noreferrer">${r.name}</a>
          <span class="resource-type">[${r.type}]</span>
          ${r.description ? `<p class="resource-desc">${r.description}</p>` : ""}
        </li>`
      ).join("");
    } else {
      detailResourcesSection.hidden = true;
    }

    detailCompleteBtn.hidden = false;
    updateCompleteBtn(node.name);

    detailCompleteBtn.onclick = () => {
      if (completedNodes.has(node.name)) {
        completedNodes.delete(node.name);
        cascadeUncomplete(node.name);
      } else {
        completedNodes.add(node.name);
      }
      updateCompleteBtn(node.name);
      updateAllNodeVisuals();
      updateProgress();
      saveCurrentTree();
      showDetail(node);
    };
  }

  detailPanel.hidden = false;
}

detailClose.addEventListener("click", () => {
  detailPanel.hidden = true;
});

// Back button: return to prompt screen
backBtn.addEventListener("click", () => {
  treeView.hidden = true;
  promptView.hidden = false;
  svg.innerHTML = "";
  detailPanel.hidden = true;
  renderSavedList();
});

// ─── Fake data for front-end development (no API key needed) ─────────────────
const MOCK_DATA = {
  topic: "Archery",
  nodes: [
    {
      name: "Grip Basics", emoji: "✋", level: 1, requires: [],
      description: "A consistent, relaxed grip is the foundation of accurate shooting. The bow should rest on the thumb pad, not clenched in the fist.",
      tips: ["Hold the bow as if holding a small bird — firm but not tight", "Keep your knuckles at roughly a 45° angle", "Practice dry-firing the grip in front of a mirror"],
      keyConcepts: [
        { term: "Thumb pad contact", explanation: "The fleshy base of the thumb is the only part that should press against the bow grip, keeping the hand relaxed." },
        { term: "Knuckle angle", explanation: "Rotating knuckles to ~45° prevents the hand from torquing the bow left or right on release." },
        { term: "Grip tension", explanation: "Too much tension causes the bow to torque; the goal is consistent low pressure, not a firm clench." }
      ],
      outcomes: ["Hold the bow without gripping it — letting it rest naturally in the hand", "Repeat the same hand position on every shot without consciously thinking about it"],
      commonMistakes: ["Death-gripping the bow, which torques the riser and throws shots left or right", "Placing the bow in the palm instead of the thumb pad, causing inconsistent pressure"],
      resources: [
        { name: "NUSensei: How to Hold a Bow", type: "video", url: "https://www.google.com/search?q=NUSensei+how+to+hold+a+bow+archery", description: "Clear visual breakdown of hand placement and knuckle angle for beginners." },
        { name: "Archery 360: Bow Grip Guide", type: "article", url: "https://www.google.com/search?q=archery360+bow+grip+guide", description: "Step-by-step guide covering common grip styles and how to find what works for you." }
      ]
    },
    {
      name: "Stance", emoji: "🧍", level: 1, requires: [],
      description: "A stable, repeatable stance provides the platform for everything else. Square or open stances both work — consistency is what matters.",
      tips: ["Feet shoulder-width apart, perpendicular to the target", "Distribute weight evenly across both feet", "Practice standing without the bow to build muscle memory"],
      keyConcepts: [
        { term: "Square stance", explanation: "Both feet parallel to the shooting line, giving a symmetrical base that's easy for beginners to repeat." },
        { term: "Open stance", explanation: "Front foot angled toward the target, reducing string interference with the bow arm on release." },
        { term: "Weight distribution", explanation: "Even weight across both feet prevents swaying during the draw and release." }
      ],
      outcomes: ["Set up the same stable foot position every shot without looking down", "Identify whether a square or open stance suits your body type"],
      commonMistakes: ["Standing with feet too close together, making the stance unstable under draw tension", "Leaning back when drawing a heavy bow instead of keeping the torso upright"],
      resources: [
        { name: "World Archery: Beginner Stance Basics", type: "article", url: "https://www.google.com/search?q=world+archery+beginner+stance+basics", description: "Official World Archery guide covering foot position and body alignment for new archers." },
        { name: "NUSensei: Archery Stance Explained", type: "video", url: "https://www.google.com/search?q=NUSensei+archery+stance+explained", description: "Compares square vs open stance with on-range demonstrations." }
      ]
    },
    {
      name: "Nocking", emoji: "🏹", level: 1, requires: [],
      description: "Nocking is placing the arrow on the string correctly and consistently. The index vane should always face away from the bow.",
      tips: ["Use a nocking point or loop for a consistent position each time", "Listen for the click of the arrow snap onto the string", "Practice nocking with eyes closed to build feel"],
      keyConcepts: [
        { term: "Nocking point", explanation: "A small brass crimp or tied knot on the string that marks where the arrow is placed every shot." },
        { term: "Index vane orientation", explanation: "The odd-colored vane must face away from the bow so the other vanes clear the rest on release." },
        { term: "Nock height", explanation: "How high the arrow sits on the string relative to the arrow rest — affects clearance and flight consistency." }
      ],
      outcomes: ["Nock an arrow correctly in under three seconds without looking", "Identify and correct a mis-nocked arrow before drawing"],
      commonMistakes: ["Placing the index vane toward the bow, causing the arrow to deflect off the rest", "Not seating the nock fully on the string, leading to the arrow falling off mid-draw"],
      resources: [
        { name: "Archery 360: How to Nock an Arrow", type: "article", url: "https://www.google.com/search?q=archery360+how+to+nock+an+arrow", description: "Covers nocking point setup and correct vane orientation for recurve and compound bows." },
        { name: "LancasterArchery: Nocking Tutorial", type: "video", url: "https://www.google.com/search?q=Lancaster+Archery+nocking+tutorial", description: "Short video showing nocking technique with close-up detail of string and rest." }
      ]
    },
    {
      name: "Draw Technique", emoji: "💪", level: 2, requires: ["Grip Basics", "Stance"],
      description: "Drawing the bow using your back muscles rather than your arm prevents fatigue and improves consistency over many shots.",
      tips: ["Engage your shoulder blade as you draw — feel it squeeze toward your spine", "Keep your bow arm elbow rotated out to avoid string slap", "Use a resistance band to train the back-draw motion off the range"],
      keyConcepts: [
        { term: "Scapular retraction", explanation: "Pulling the shoulder blade toward the spine engages the larger back muscles, reducing arm fatigue over many shots." },
        { term: "Back tension", explanation: "Using rhomboid and trapezius muscles to drive the draw rather than biceps — the key to a consistent, effortless pull." },
        { term: "Draw elbow alignment", explanation: "The draw elbow should finish slightly behind the arrow line so back muscles are fully engaged at full draw." }
      ],
      outcomes: ["Draw to full draw using back muscles without shoulder pain after 20+ shots", "Feel the difference between an arm-pull and a back-pull draw"],
      commonMistakes: ["Pulling with the bicep instead of the back, causing fatigue and inconsistent draw length", "Shrugging the draw shoulder upward, which locks out the back muscles"],
      resources: [
        { name: "NUSensei: Back Tension in Archery", type: "video", url: "https://www.google.com/search?q=NUSensei+back+tension+archery", description: "Detailed explanation of how to engage back muscles and why it matters for consistency." },
        { name: "Archery 360: Drawing the Bow", type: "article", url: "https://www.google.com/search?q=archery360+drawing+the+bow+technique", description: "Step-by-step guide to the draw sequence with tips for building back muscle awareness." }
      ]
    },
    {
      name: "Anchor Point", emoji: "📍", level: 2, requires: ["Draw Technique"],
      description: "An anchor point is a fixed spot where your draw hand contacts your face at full draw. A consistent anchor is critical for repeatable accuracy.",
      tips: ["Common anchors: thumb to jaw, index finger to cheekbone, or string to nose", "Use a kisser button on the string as a tactile reference", "Check your anchor in a mirror or record yourself"],
      keyConcepts: [
        { term: "Anchor consistency", explanation: "Landing in the exact same spot every shot ensures the arrow is aligned identically each time, making your aim repeatable." },
        { term: "Kisser button", explanation: "A small plastic disc on the string that touches the corner of the mouth as a secondary tactile anchor reference." },
        { term: "Peep sight", explanation: "A small ring inserted into the string that frames the front sight at full draw, adding a second alignment reference." }
      ],
      outcomes: ["Land on the same anchor point every shot without consciously checking", "Use at least two tactile reference points to confirm full draw position"],
      commonMistakes: ["Anchoring at different depths shot to shot, causing vertical grouping spread", "Looking at the anchor hand instead of the target, breaking sight alignment"],
      resources: [
        { name: "NUSensei: Finding Your Anchor Point", type: "video", url: "https://www.google.com/search?q=NUSensei+archery+anchor+point", description: "Walks through different anchor positions and how to choose and lock in yours." },
        { name: "World Archery: Anchor Point Guide", type: "article", url: "https://www.google.com/search?q=world+archery+anchor+point+guide", description: "Official guide covering anchor points for recurve and compound styles." }
      ]
    },
    {
      name: "Aiming", emoji: "🎯", level: 2, requires: ["Nocking", "Stance"],
      description: "Aiming connects your sight picture to the target. Whether using a sight pin, instinctive method, or gap shooting, focus is on the target not the arrow tip.",
      tips: ["Keep your dominant eye focused on the target, not the sight", "Use a peep sight to align your sight housing consistently", "Practice aiming without releasing to build hold strength"],
      keyConcepts: [
        { term: "Sight picture", explanation: "The visual alignment of the peep sight, sight pin, and target seen at full draw — what you're trying to repeat each shot." },
        { term: "Gap shooting", explanation: "A sightless method where you learn the vertical gap between the arrow tip and target at different distances." },
        { term: "Pin float", explanation: "The natural small movement of the sight pin over the target at full draw — you shoot through the float, not waiting for it to stop." }
      ],
      outcomes: ["Align a sight pin or gap consistently to land arrows in a 6-inch group at 20 yards", "Identify your dominant eye and adjust stance or technique if needed"],
      commonMistakes: ["Focusing on the sight pin instead of the target, causing blur and inconsistent alignment", "Waiting for the pin to perfectly stop before releasing, leading to target panic"],
      resources: [
        { name: "NUSensei: How to Aim in Archery", type: "video", url: "https://www.google.com/search?q=NUSensei+how+to+aim+archery", description: "Covers the mechanics of aiming for both sight and sightless shooting methods." },
        { name: "Archery 360: Aiming Methods Compared", type: "article", url: "https://www.google.com/search?q=archery360+aiming+methods+compared", description: "Compares instinctive, gap, and sight-pin aiming to help you choose the right approach." }
      ]
    },
    {
      name: "Release", emoji: "🤌", level: 3, requires: ["Anchor Point", "Aiming"],
      description: "A clean release means allowing the fingers or release aid to let go without disturbing the bow. Punching or flinching at the trigger is the most common flaw.",
      tips: ["Relax your fingers rather than actively opening them", "For release aids, think 'pull through the shot' rather than punching", "Blind bale practice (eyes closed, close range) removes target panic"],
      keyConcepts: [
        { term: "Target panic", explanation: "A conditioned reflex where the archer punches the trigger or flinches before reaching full draw — the most common advanced flaw." },
        { term: "Surprise release", explanation: "A release technique where back tension builds until the shot fires unexpectedly, preventing the brain from anticipating and flinching." },
        { term: "Punching the trigger", explanation: "Jabbing the release aid trigger before the pin settles on target — the primary cause of shots pulling low." }
      ],
      outcomes: ["Execute a release that doesn't move the bow off aim before the arrow clears the rest", "Diagnose whether a shot was a punch or a genuine surprise release"],
      commonMistakes: ["Actively opening the fingers, which moves the draw hand and kicks the arrow sideways", "Anticipating the release and tensing the bow arm, causing the bow to drop before the arrow leaves"],
      resources: [
        { name: "NUSensei: How to Fix Target Panic", type: "video", url: "https://www.google.com/search?q=NUSensei+fix+target+panic+archery", description: "In-depth guide on diagnosing and retraining the release to eliminate target panic." },
        { name: "Archery 360: Clean Release Technique", type: "article", url: "https://www.google.com/search?q=archery360+clean+release+technique", description: "Explains the mechanics of a clean release for both finger shooters and release aid users." }
      ]
    },
    {
      name: "Follow Through", emoji: "🔄", level: 3, requires: ["Release"],
      description: "Follow-through is maintaining your form after the arrow leaves the bow. Dropping the bow arm early is a major accuracy killer.",
      tips: ["Hold your bow arm up until the arrow hits the target", "Keep your draw hand relaxed and drifting back naturally after release", "Use a wrist sling so you can relax your grip without dropping the bow"],
      keyConcepts: [
        { term: "Bow arm drop", explanation: "Dropping the bow arm before the arrow clears the rest deflects the arrow downward — caused by anticipating the shot." },
        { term: "Draw hand drift", explanation: "After release the draw hand should drift naturally backward along the face — a sign that back tension was maintained through the shot." },
        { term: "Wrist sling", explanation: "A strap around the wrist that catches the bow after release, allowing a relaxed grip without dropping the bow." }
      ],
      outcomes: ["Keep the bow arm on target until the arrow strikes, consistently", "Feel the draw hand drift back naturally after every clean release"],
      commonMistakes: ["Dropping the bow arm to watch the arrow flight before it clears the rest", "Grabbing the bow tightly after release to prevent it falling, which introduces torque"],
      resources: [
        { name: "NUSensei: Follow Through in Archery", type: "video", url: "https://www.google.com/search?q=NUSensei+follow+through+archery", description: "Explains why follow-through matters and how to train it with slow-motion form review." },
        { name: "LancasterArchery: Follow Through Tips", type: "article", url: "https://www.google.com/search?q=Lancaster+Archery+follow+through+tips", description: "Quick tips for maintaining form through the shot with drills to reinforce the habit." }
      ]
    },
    {
      name: "Breath Control", emoji: "🌬️", level: 3, requires: ["Anchor Point"],
      description: "Breathing causes movement. Learning to pause breathing at the right moment — at the natural respiratory pause — reduces bow movement at release.",
      tips: ["Take a full breath, exhale halfway, then hold and shoot", "Keep the hold under 8 seconds to avoid muscle tremor", "Practice slow breathing exercises to increase your hold time"],
      keyConcepts: [
        { term: "Respiratory pause", explanation: "The natural half-second gap between exhale and the next inhale — the calmest moment to release." },
        { term: "Shot window", explanation: "The brief window of stillness after exhaling where the archer should complete the shot before tremor begins." },
        { term: "Diaphragm control", explanation: "Using slow diaphragmatic breathing rather than shallow chest breathing reduces upper-body movement during the shot." }
      ],
      outcomes: ["Time every release within the respiratory pause consistently", "Maintain a steady aim for 6-8 seconds without muscle tremor"],
      commonMistakes: ["Holding the breath from the start of the draw instead of at the respiratory pause, causing early tremor", "Taking too long to shoot after the pause, leading to oxygen deprivation and shaking"],
      resources: [
        { name: "NUSensei: Breathing for Archery", type: "video", url: "https://www.google.com/search?q=NUSensei+breathing+technique+archery", description: "Covers the breathing cycle and when to time the shot for maximum stability." },
        { name: "World Archery: Mental Preparation", type: "article", url: "https://www.google.com/search?q=world+archery+mental+preparation+breathing", description: "World Archery's guide on mental and breathing routines used by competitive archers." }
      ]
    },
    {
      name: "Long Range", emoji: "🔭", level: 4, requires: ["Release", "Breath Control"],
      description: "Shooting beyond 40 yards amplifies every flaw in your form. Wind reading and sight adjustment become essential skills.",
      tips: ["Dial in your sight marks at 20, 30, 40, 50, and 60 yards incrementally", "Use a wind flag at the target to learn to read wind drift", "Increase draw weight or arrow spine if arrows are fishtailing at distance"],
      keyConcepts: [
        { term: "Sight tape", explanation: "A calibrated strip attached to the sight showing where to set the pin for each distance — removes guesswork at new ranges." },
        { term: "Arrow spine", explanation: "The stiffness of the arrow shaft — too weak at long range causes the arrow to fishtail in flight and drift unpredictably." },
        { term: "Wind drift", explanation: "Crosswind pushes lighter, slower arrows off course at long range — reading the wind and holding off-center compensates." }
      ],
      outcomes: ["Land consistent groups at 50+ yards after dialing in sight marks", "Read a crosswind and adjust aim accordingly to keep arrows on target"],
      commonMistakes: ["Using the same sight setting past its calibrated range, causing all arrows to hit low", "Ignoring arrow spine at distance — an under-spined arrow will drift even in calm conditions"],
      resources: [
        { name: "NUSensei: Long Distance Archery Tips", type: "video", url: "https://www.google.com/search?q=NUSensei+long+distance+archery", description: "Form adjustments and sight calibration strategies for shooting at 50-90 meters." },
        { name: "Archery 360: Reading the Wind", type: "article", url: "https://www.google.com/search?q=archery360+reading+wind+long+range", description: "Practical guide to wind flags, hold-off techniques, and wind reading at outdoor ranges." }
      ]
    },
    {
      name: "Moving Targets", emoji: "💨", level: 4, requires: ["Follow Through", "Aiming"],
      description: "Leading a moving target requires calculating angle, speed, and distance simultaneously. Used in field archery and bowhunting.",
      tips: ["Start with slow-moving targets on a track to find your lead distance", "Maintain smooth bow movement — swing through the shot", "Practice with clay pigeons or aerial targets for speed training"],
      keyConcepts: [
        { term: "Lead distance", explanation: "How far ahead of a moving target you must aim so the arrow and target arrive at the same point." },
        { term: "Swing-through technique", explanation: "Moving the bow with the target and releasing while still swinging, so the arrow intercepts the target's path." },
        { term: "Angular speed", explanation: "How fast the target moves across your field of view — closer targets appear faster and need more lead." }
      ],
      outcomes: ["Hit a target moving at walking pace at 20 yards using a consistent lead", "Maintain smooth bow movement through the shot without stopping before release"],
      commonMistakes: ["Stopping the bow swing to aim before releasing, causing the arrow to fall behind the target", "Underestimating lead distance — beginners almost always shoot behind moving targets"],
      resources: [
        { name: "Archery 360: 3D Archery Basics", type: "article", url: "https://www.google.com/search?q=archery360+3D+archery+moving+targets", description: "Introduction to 3D field archery courses where moving and angled targets are standard." },
        { name: "Bowhunting.com: Leading Moving Targets", type: "article", url: "https://www.google.com/search?q=bowhunting+leading+moving+targets+technique", description: "Bowhunting-focused guide on reading animal movement and calculating lead distance." }
      ]
    },
    {
      name: "Master Archer", emoji: "🏆", level: 5, requires: ["Long Range", "Moving Targets"],
      description: "At this level, form is automatic and the archer focuses entirely on mental game, equipment tuning, and competition strategy.",
      tips: ["Develop a shot routine and stick to it under pressure", "Study arrow flight with a high-speed camera to catch subtle form flaws", "Compete regularly — pressure reveals what practice hides"],
      keyConcepts: [
        { term: "Pre-shot routine", explanation: "A fixed sequence of physical and mental steps performed identically before every shot to reduce variability under pressure." },
        { term: "Paper tuning", explanation: "Shooting through paper at close range to read the arrow's flight path and adjust rest and nocking point for perfect arrow flight." },
        { term: "Mental imagery", explanation: "Visualizing the perfect shot sequence before stepping to the line — used by elite athletes to reinforce muscle memory without physical practice." }
      ],
      outcomes: ["Execute a full competition round with a consistent pre-shot routine on every arrow", "Tune equipment so bare-shaft and fletched arrows hit the same point at 20 yards"],
      commonMistakes: ["Abandoning the shot routine under pressure, reverting to rushed or inconsistent form", "Neglecting equipment tuning — even perfect form produces poor groups with a mis-tuned bow"],
      resources: [
        { name: "World Archery: Advanced Training Resources", type: "article", url: "https://www.worldarchery.sport/education", description: "Official World Archery education hub with training plans used by national-level coaches." },
        { name: "Lanny Bassham: With Winning in Mind (book)", type: "book", url: "https://www.google.com/search?q=Lanny+Bassham+With+Winning+in+Mind+book", description: "Mental management system for competitive archers — widely considered the standard text on archery psychology." },
        { name: "NUSensei: Arrow Tuning Guide", type: "video", url: "https://www.google.com/search?q=NUSensei+arrow+tuning+guide+archery", description: "Step-by-step paper and bare-shaft tuning walkthrough for recurve and compound setups." }
      ]
    },
  ]
};
// ─────────────────────────────────────────────────────────────────────────────

async function getSkillTree(topic) {
  const res = await fetch("/api/skill-tree", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || res.status);
  }
  const data = await res.json();
  if (!data.nodes || !Array.isArray(data.nodes)) throw new Error("Unexpected response format");
  return { topic, nodes: data.nodes };
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const topic = topicInput.value.trim();
  if (!topic) return;

  const btn = form.querySelector("button");
  btn.disabled = true;
  statusEl.textContent = "Generating skill tree...";

  try {
    const { topic: resolvedTopic, nodes } = await getSkillTree(topic);

    // Reset state for new tree
    currentTopic = resolvedTopic;
    completedNodes.clear();

    promptView.hidden = true;
    treeView.hidden = false;
    treeTitle.textContent = resolvedTopic;
    statusEl.textContent = "";

    saveCurrentTree();
    renderGraph(nodes);
    updateProgress();
  } catch (err) {
    console.error("Error:", err);
    statusEl.textContent = "Error: " + err.message;
  } finally {
    btn.disabled = false;
  }
});

// Populate saved list on page load
renderSavedList();
