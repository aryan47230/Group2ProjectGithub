// ── DOM refs ──────────────────────────────────────────────────────────────────
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
const detailConceptsSection  = document.getElementById("detail-concepts-section");
const detailConcepts         = document.getElementById("detail-concepts");
const detailMistakesSection  = document.getElementById("detail-mistakes-section");
const detailMistakes         = document.getElementById("detail-mistakes");
const detailOutcomesSection  = document.getElementById("detail-outcomes-section");
const detailOutcomes         = document.getElementById("detail-outcomes");
const detailResourcesSection = document.getElementById("detail-resources-section");
const detailResources        = document.getElementById("detail-resources");
const detailClose        = document.getElementById("detail-close");
const detailCompleteBtn  = document.getElementById("detail-complete-btn");
const progressLabel      = document.getElementById("progress-label");
const progressFill       = document.getElementById("progress-fill");

// Auth
const userGreeting  = document.getElementById("user-greeting");
const logoutBtn     = document.getElementById("logout-btn");
const signinBtn     = document.getElementById("signin-btn");
const signupBtn     = document.getElementById("signup-btn");
const authOverlay   = document.getElementById("auth-overlay");
const authModal     = document.getElementById("auth-modal");
const authTabs      = document.querySelectorAll(".auth-tab");
const authForm      = document.getElementById("auth-form");
const authUsername   = document.getElementById("auth-username");
const authPassword   = document.getElementById("auth-password");
const authError      = document.getElementById("auth-error");
const authSubmit     = document.getElementById("auth-submit");
const authClose      = document.getElementById("auth-close");
const importBanner   = document.getElementById("import-banner");
const importMsg      = document.getElementById("import-msg");
const importYes      = document.getElementById("import-yes");
const importNo       = document.getElementById("import-no");

const NS = "http://www.w3.org/2000/svg";

// ── Tab switching ─────────────────────────────────────────────────────────────
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

// ── State ─────────────────────────────────────────────────────────────────────
let currentUser  = null;
let serverTrees  = [];
const completedNodes = new Set();
const nodeCircleMap  = new Map();
let currentNodes   = [];
let nodePositions  = {};
let edgeList       = [];
let currentTopic   = "";
let authMode       = "login";

// ── Auth ──────────────────────────────────────────────────────────────────────
async function initAuth() {
  try {
    const res  = await fetch("/api/me");
    const data = await res.json();
    currentUser = data.user;
  } catch (_) {
    currentUser = null;
  }
  updateAuthUI();
  if (currentUser) await loadTreesFromServer();
  renderSavedList();
}

function updateAuthUI() {
  if (currentUser) {
    userGreeting.textContent = `Hi, ${currentUser.username}`;
    userGreeting.hidden = false;
    logoutBtn.hidden    = false;
    signinBtn.hidden    = true;
    signupBtn.hidden    = true;
  } else {
    userGreeting.hidden = true;
    logoutBtn.hidden    = true;
    signinBtn.hidden    = false;
    signupBtn.hidden    = false;
  }
}

function openAuthModal(mode) {
  authMode = mode;
  authError.hidden = true;
  authForm.reset();
  authTabs.forEach(t => t.classList.toggle("active", t.dataset.tab === (mode === "login" ? "login" : "register")));
  authSubmit.textContent = mode === "login" ? "Sign In" : "Sign Up";
  authOverlay.hidden = false;
  authUsername.focus();
}

authTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    authMode = tab.dataset.tab === "login" ? "login" : "register";
    authTabs.forEach(t => t.classList.toggle("active", t === tab));
    authSubmit.textContent = authMode === "login" ? "Sign In" : "Sign Up";
    authError.hidden = true;
  });
});

signinBtn.addEventListener("click", () => openAuthModal("login"));
signupBtn.addEventListener("click", () => openAuthModal("register"));
authClose.addEventListener("click", () => { authOverlay.hidden = true; });
authOverlay.addEventListener("click", e => { if (e.target === authOverlay) authOverlay.hidden = true; });

authForm.addEventListener("submit", async e => {
  e.preventDefault();
  authError.hidden = true;
  authSubmit.disabled = true;

  const username = authUsername.value.trim();
  const password = authPassword.value;
  const endpoint = authMode === "login" ? "/api/login" : "/api/register";

  try {
    const res  = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();

    if (!res.ok) {
      authError.textContent = data.error || "Something went wrong";
      authError.hidden = false;
      return;
    }

    currentUser = data.user;
    authOverlay.hidden = true;
    updateAuthUI();

    const localTrees = JSON.parse(localStorage.getItem("skillTrees") || "[]");
    if (localTrees.length > 0) {
      importMsg.textContent = `You have ${localTrees.length} local tree${localTrees.length > 1 ? "s" : ""}. Import to your account?`;
      importBanner.hidden = false;
    } else {
      await loadTreesFromServer();
      renderSavedList();
    }
  } catch (err) {
    authError.textContent = "Network error — is the server running?";
    authError.hidden = false;
  } finally {
    authSubmit.disabled = false;
  }
});

importYes.addEventListener("click", async () => {
  const localTrees = JSON.parse(localStorage.getItem("skillTrees") || "[]");
  for (const tree of localTrees) {
    await fetch("/api/trees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tree)
    });
  }
  localStorage.removeItem("skillTrees");
  importBanner.hidden = true;
  await loadTreesFromServer();
  renderSavedList();
});

importNo.addEventListener("click", async () => {
  importBanner.hidden = true;
  await loadTreesFromServer();
  renderSavedList();
});

logoutBtn.addEventListener("click", async () => {
  await fetch("/api/logout", { method: "POST" });
  currentUser = null;
  serverTrees = [];
  updateAuthUI();
  renderSavedList();
});

// ── Tree storage ──────────────────────────────────────────────────────────────
async function loadTreesFromServer() {
  try {
    const res = await fetch("/api/trees");
    if (res.ok) serverTrees = await res.json();
  } catch (_) {}
}

function loadAllSaved() {
  if (currentUser) return serverTrees;
  return JSON.parse(localStorage.getItem("skillTrees") || "[]");
}

async function saveCurrentTree() {
  if (!currentTopic || currentNodes.length === 0) return;
  const entry = {
    topic: currentTopic,
    nodes: currentNodes,
    completed: [...completedNodes],
    savedAt: Date.now()
  };

  if (currentUser) {
    await fetch("/api/trees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry)
    });
    const idx = serverTrees.findIndex(t => t.topic.toLowerCase() === currentTopic.toLowerCase());
    if (idx >= 0) serverTrees[idx] = entry;
    else serverTrees.unshift(entry);
  } else {
    const all = JSON.parse(localStorage.getItem("skillTrees") || "[]");
    const idx = all.findIndex(t => t.topic.toLowerCase() === currentTopic.toLowerCase());
    if (idx >= 0) all[idx] = entry;
    else all.unshift(entry);
    localStorage.setItem("skillTrees", JSON.stringify(all));
  }
}

async function deleteSavedTree(topic) {
  if (currentUser) {
    await fetch(`/api/trees/${encodeURIComponent(topic)}`, { method: "DELETE" });
    serverTrees = serverTrees.filter(t => t.topic !== topic);
  } else {
    const all = JSON.parse(localStorage.getItem("skillTrees") || "[]").filter(t => t.topic !== topic);
    localStorage.setItem("skillTrees", JSON.stringify(all));
  }
}

function openSavedTree(saved) {
  currentTopic = saved.topic;
  completedNodes.clear();
  saved.completed.forEach(n => completedNodes.add(n));
  promptView.hidden = true;
  treeView.hidden   = false;
  treeTitle.textContent = saved.topic;
  detailPanel.hidden = true;
  renderGraph(saved.nodes);
  updateProgress();
}

function renderSavedList() {
  const all     = loadAllSaved();
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
    btn.addEventListener("click", async () => {
      await deleteSavedTree(all[+btn.dataset.i].topic);
      renderSavedList();
    })
  );
}

// ── Graph helpers ─────────────────────────────────────────────────────────────
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

function cascadeUncomplete(nodeName) {
  for (const node of currentNodes) {
    if (node.requires.includes(nodeName) && completedNodes.has(node.name)) {
      completedNodes.delete(node.name);
      cascadeUncomplete(node.name);
    }
  }
}

// ── Graph rendering ───────────────────────────────────────────────────────────
function renderGraph(nodes) {
  svg.innerHTML = "";
  nodeCircleMap.clear();
  edgeList = [];
  currentNodes = nodes;

  for (const node of nodes) {
    node.level    = node.level    || 1;
    node.requires = node.requires || [];
  }

  const levels = {};
  let maxLevel = 0;
  for (const node of nodes) {
    if (!levels[node.level]) levels[node.level] = [];
    levels[node.level].push(node);
    maxLevel = Math.max(maxLevel, node.level);
  }

  const W        = graphContainer.clientWidth || 800;
  const nodeR    = 42;
  const vPad     = 60;
  const levelGap = 150;
  const topY     = vPad + nodeR;
  const totalH   = topY + (maxLevel - 1) * levelGap + nodeR + vPad;

  svg.setAttribute("width", W);
  svg.setAttribute("height", totalH);

  // ── Defs: gradients + arrowhead marker ──────────────────────────────────
  const defsEl = document.createElementNS(NS, "defs");

  const marker = el("marker", {
    id: "arrowhead", markerWidth: "8", markerHeight: "8",
    refX: "4", refY: "4", orient: "auto"
  });
  marker.appendChild(el("path", { d: "M 0 0 L 8 4 L 0 8 Z", fill: "#7c6aaa" }));
  defsEl.appendChild(marker);

  for (let lvl = 1; lvl <= maxLevel; lvl++) {
    const t   = (lvl - 1) / Math.max(maxLevel - 1, 1);
    const hue = 265 + t * 20;
    const grad = el("radialGradient", {
      id: `grad-lvl-${lvl}`, cx: "40%", cy: "35%", r: "65%", fx: "40%", fy: "35%"
    });
    grad.appendChild(el("stop", { offset: "0%",   "stop-color": `hsl(${hue}, 28%, ${26 + t * 14}%)` }));
    grad.appendChild(el("stop", { offset: "100%", "stop-color": `hsl(${hue}, 35%, ${8  + t * 8}%)` }));
    defsEl.appendChild(grad);
  }

  const gradC = el("radialGradient", { id: "grad-completed", cx: "40%", cy: "35%", r: "65%", fx: "40%", fy: "35%" });
  gradC.appendChild(el("stop", { offset: "0%",   "stop-color": "hsl(142, 30%, 22%)" }));
  gradC.appendChild(el("stop", { offset: "100%", "stop-color": "hsl(142, 40%, 8%)"  }));
  defsEl.appendChild(gradC);

  svg.appendChild(defsEl);

  // Position map
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
    emojiText.textContent = node.emoji || "\u2B50";
    g.appendChild(emojiText);

    addLabel(g, node.name, 10, "node-label-below", nodeR + 10);

    g.classList.add("node-clickable");
    g.addEventListener("click", () => showDetail(node));

    // Hover: dim unrelated nodes + highlight edges + animated orb pulses
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
        const sx = from.x, sy = from.y - nodeR - 9;
        const ex = to.x,   ey = to.y   + nodeR + 2;
        const cp = Math.min(55, Math.abs(sy - ey) * 0.38);
        const pathD = `M ${sx},${sy} C ${sx},${sy - cp} ${ex},${ey + cp} ${ex},${ey}`;
        const dur   = "2.2s";

        for (let i = 0; i < 3; i++) {
          const begin = `${i * 0.73}s`;
          const orbG  = document.createElementNS(NS, "g");

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

// ── Detail panel ──────────────────────────────────────────────────────────────
function updateCompleteBtn(nodeName) {
  const done = completedNodes.has(nodeName);
  detailCompleteBtn.textContent = done ? "\u2713 Completed" : "Mark as Complete";
  detailCompleteBtn.classList.toggle("completed", done);
}

function showDetail(node) {
  resetTabs();
  const locked = !isUnlocked(node.name);

  detailName.textContent  = node.name;
  detailLevel.textContent = `Level ${node.level}`;

  if (node.requires && node.requires.length > 0) {
    detailReqSection.hidden = false;
    detailRequires.innerHTML = node.requires.map(r => {
      const done = completedNodes.has(r);
      return `<li style="color:${done ? "hsl(142,55%,55%)" : ""}">${done ? "\u2713 " : ""}${r}</li>`;
    }).join("");
  } else {
    detailReqSection.hidden = true;
  }

  if (locked) {
    const missing = node.requires.filter(r => !completedNodes.has(r));
    detailDesc.textContent = `Complete ${missing.join(" and ")} to unlock this skill.`;
    detailTips.innerHTML = "";
    detailConceptsSection.hidden  = true;
    detailMistakesSection.hidden  = true;
    detailOutcomesSection.hidden  = true;
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
      detailResources.innerHTML += `<li class="explore-wiki-link">
        <a href="/explore/?q=${encodeURIComponent(node.name)}">Explore "${node.name}" on Wikipedia</a>
        <span class="resource-type">[wiki]</span>
        <p class="resource-desc">Dive deeper with the interactive knowledge graph explorer.</p>
      </li>`;
    } else {
      detailResourcesSection.hidden = false;
      detailResources.innerHTML = `<li class="explore-wiki-link">
        <a href="/explore/?q=${encodeURIComponent(node.name)}">Explore "${node.name}" on Wikipedia</a>
        <span class="resource-type">[wiki]</span>
        <p class="resource-desc">Dive deeper with the interactive knowledge graph explorer.</p>
      </li>`;
    }

    detailCompleteBtn.hidden = false;
    updateCompleteBtn(node.name);

    detailCompleteBtn.onclick = async () => {
      if (completedNodes.has(node.name)) {
        completedNodes.delete(node.name);
        cascadeUncomplete(node.name);
      } else {
        completedNodes.add(node.name);
      }
      updateCompleteBtn(node.name);
      updateAllNodeVisuals();
      updateProgress();
      await saveCurrentTree();
      showDetail(node);
    };
  }

  detailPanel.hidden = false;
}

detailClose.addEventListener("click", () => { detailPanel.hidden = true; });

backBtn.addEventListener("click", () => {
  treeView.hidden   = true;
  promptView.hidden = false;
  svg.innerHTML     = "";
  detailPanel.hidden = true;
  renderSavedList();
});

// ── Gemini / mock data ────────────────────────────────────────────────────────
const MOCK_DATA = {
  topic: "Archery",
  nodes: [
    { name: "Grip Basics", emoji: "\u270B", level: 1, requires: [], description: "A consistent, relaxed grip is the foundation of accurate shooting. The bow should rest on the thumb pad, not clenched in the fist.", tips: ["Hold the bow as if holding a small bird — firm but not tight", "Keep your knuckles at roughly a 45\u00B0 angle", "Practice dry-firing the grip in front of a mirror"], keyConcepts: [{ term: "Thumb pad contact", explanation: "The fleshy base of the thumb is the only part that should press against the bow grip, keeping the hand relaxed." }, { term: "Knuckle angle", explanation: "Rotating knuckles to ~45\u00B0 prevents the hand from torquing the bow left or right on release." }, { term: "Grip tension", explanation: "Too much tension causes the bow to torque; the goal is consistent low pressure, not a firm clench." }], outcomes: ["Hold the bow without gripping it — letting it rest naturally in the hand", "Repeat the same hand position on every shot without consciously thinking about it"], commonMistakes: ["Death-gripping the bow, which torques the riser and throws shots left or right", "Placing the bow in the palm instead of the thumb pad, causing inconsistent pressure"], resources: [{ name: "NUSensei: How to Hold a Bow", type: "video", url: "https://www.google.com/search?q=NUSensei+how+to+hold+a+bow+archery", description: "Clear visual breakdown of hand placement and knuckle angle for beginners." }] },
    { name: "Stance", emoji: "\uD83E\uDDCD", level: 1, requires: [], description: "A stable, repeatable stance provides the platform for everything else.", tips: ["Feet shoulder-width apart, perpendicular to the target", "Distribute weight evenly across both feet", "Practice standing without the bow to build muscle memory"], keyConcepts: [{ term: "Square stance", explanation: "Both feet parallel to the shooting line — easy for beginners to repeat." }, { term: "Open stance", explanation: "Front foot angled toward the target, reducing string interference." }], outcomes: ["Set up the same stable foot position every shot without looking down"], commonMistakes: ["Standing with feet too close together, making the stance unstable"], resources: [{ name: "World Archery: Beginner Stance Basics", type: "article", url: "https://www.google.com/search?q=world+archery+beginner+stance+basics", description: "Official guide covering foot position and body alignment." }] },
    { name: "Nocking", emoji: "\uD83C\uDFF9", level: 1, requires: [], description: "Nocking is placing the arrow on the string correctly and consistently.", tips: ["Use a nocking point for a consistent position each time", "Listen for the click of the arrow snap onto the string", "Practice nocking with eyes closed to build feel"], keyConcepts: [{ term: "Nocking point", explanation: "A small crimp on the string that marks where the arrow is placed every shot." }], outcomes: ["Nock an arrow correctly in under three seconds without looking"], commonMistakes: ["Placing the index vane toward the bow, causing the arrow to deflect off the rest"], resources: [{ name: "Archery 360: How to Nock an Arrow", type: "article", url: "https://www.google.com/search?q=archery360+how+to+nock+an+arrow", description: "Covers nocking point setup and correct vane orientation." }] },
    { name: "Draw Technique", emoji: "\uD83D\uDCAA", level: 2, requires: ["Grip Basics", "Stance"], description: "Drawing the bow using your back muscles rather than your arm prevents fatigue and improves consistency.", tips: ["Engage your shoulder blade as you draw", "Keep your bow arm elbow rotated out", "Use a resistance band to train the motion"], keyConcepts: [{ term: "Back tension", explanation: "Using rhomboid and trapezius muscles to drive the draw rather than biceps." }], outcomes: ["Draw to full draw using back muscles without shoulder pain after 20+ shots"], commonMistakes: ["Pulling with the bicep instead of the back, causing fatigue"], resources: [{ name: "NUSensei: Back Tension in Archery", type: "video", url: "https://www.google.com/search?q=NUSensei+back+tension+archery", description: "How to engage back muscles and why it matters." }] },
    { name: "Anchor Point", emoji: "\uD83D\uDCCD", level: 2, requires: ["Draw Technique"], description: "A fixed spot where your draw hand contacts your face at full draw. Consistency is critical.", tips: ["Common anchors: thumb to jaw, index finger to cheekbone", "Use a kisser button as a tactile reference", "Check your anchor in a mirror"], keyConcepts: [{ term: "Anchor consistency", explanation: "Landing in the exact same spot every shot ensures repeatable alignment." }], outcomes: ["Land on the same anchor point every shot without consciously checking"], commonMistakes: ["Anchoring at different depths shot to shot, causing vertical spread"], resources: [{ name: "NUSensei: Finding Your Anchor Point", type: "video", url: "https://www.google.com/search?q=NUSensei+archery+anchor+point", description: "Different anchor positions and how to choose yours." }] },
    { name: "Aiming", emoji: "\uD83C\uDFAF", level: 2, requires: ["Nocking", "Stance"], description: "Whether using a sight pin or instinctive method, focus is on the target not the arrow tip.", tips: ["Keep your dominant eye focused on the target", "Use a peep sight for consistent alignment", "Practice aiming without releasing"], keyConcepts: [{ term: "Sight picture", explanation: "The visual alignment of peep sight, pin, and target at full draw." }], outcomes: ["Align consistently to land arrows in a 6-inch group at 20 yards"], commonMistakes: ["Focusing on the sight pin instead of the target"], resources: [{ name: "NUSensei: How to Aim in Archery", type: "video", url: "https://www.google.com/search?q=NUSensei+how+to+aim+archery", description: "Mechanics of aiming for sight and sightless methods." }] },
    { name: "Release", emoji: "\uD83E\uDD0C", level: 3, requires: ["Anchor Point", "Aiming"], description: "A clean release means letting go without disturbing the bow. Flinching is the most common flaw.", tips: ["Relax your fingers rather than actively opening them", "Think 'pull through the shot'", "Blind bale practice removes target panic"], keyConcepts: [{ term: "Target panic", explanation: "A conditioned flinch before reaching full draw — the most common advanced flaw." }], outcomes: ["Execute a release that doesn't move the bow off aim"], commonMistakes: ["Actively opening the fingers, which kicks the arrow sideways"], resources: [{ name: "NUSensei: How to Fix Target Panic", type: "video", url: "https://www.google.com/search?q=NUSensei+fix+target+panic", description: "Diagnosing and retraining the release." }] },
    { name: "Follow Through", emoji: "\uD83D\uDD04", level: 3, requires: ["Release"], description: "Maintaining form after the arrow leaves the bow. Dropping the bow arm early kills accuracy.", tips: ["Hold your bow arm up until the arrow hits", "Keep your draw hand relaxed and drifting back", "Use a wrist sling so you can relax your grip"], keyConcepts: [{ term: "Bow arm drop", explanation: "Dropping the arm before clearance deflects the arrow downward." }], outcomes: ["Keep the bow arm on target until impact, consistently"], commonMistakes: ["Dropping the bow arm to watch the arrow flight"], resources: [{ name: "Archery 360: Follow Through Guide", type: "article", url: "https://www.google.com/search?q=archery360+follow+through+technique", description: "Maintaining form through the shot." }] },
    { name: "Breath Control", emoji: "\uD83C\uDF2C\uFE0F", level: 3, requires: ["Anchor Point"], description: "Pausing breathing at the natural respiratory pause reduces bow movement at release.", tips: ["Exhale halfway, then hold and shoot", "Keep the hold under 8 seconds", "Practice slow breathing exercises"], keyConcepts: [{ term: "Respiratory pause", explanation: "The natural brief pause between exhale and inhale — the stillest moment." }], outcomes: ["Time shots to the respiratory pause consistently"], commonMistakes: ["Holding breath too long, causing muscle tremor"], resources: [{ name: "Archery GB: Breathing Technique", type: "article", url: "https://www.google.com/search?q=archery+breathing+technique+guide", description: "How to integrate breathing into your shot routine." }] },
    { name: "Long Range", emoji: "\uD83D\uDD2D", level: 4, requires: ["Release", "Breath Control"], description: "Beyond 40 yards every flaw is amplified. Wind reading and sight adjustment become essential.", tips: ["Dial in sight marks at 20-60 yards incrementally", "Use a wind flag at the target", "Increase draw weight if arrows fishtail at distance"], keyConcepts: [{ term: "Windage", explanation: "Horizontal adjustment for wind drift — critical past 40 yards." }], outcomes: ["Group arrows within 8 inches at 50 yards in calm conditions"], commonMistakes: ["Using the same aiming approach at 50 yards as at 20"], resources: [{ name: "NUSensei: Long Range Archery Tips", type: "video", url: "https://www.google.com/search?q=NUSensei+long+range+archery", description: "Adjustments needed for accurate long-distance shooting." }] },
    { name: "Moving Targets", emoji: "\uD83D\uDCA8", level: 4, requires: ["Follow Through", "Aiming"], description: "Leading a moving target requires calculating angle, speed, and distance simultaneously.", tips: ["Start with slow-moving targets on a track", "Maintain smooth bow movement — swing through", "Practice with clay pigeons for speed training"], keyConcepts: [{ term: "Swing-through", explanation: "Smoothly tracking the target and releasing as the sight passes through it." }], outcomes: ["Hit a walking-speed target at 20 yards consistently"], commonMistakes: ["Stopping the bow swing at the moment of release"], resources: [{ name: "Field Archery: Moving Target Guide", type: "article", url: "https://www.google.com/search?q=field+archery+moving+target+tips", description: "Techniques for 3D and field archery courses." }] },
    { name: "Master Archer", emoji: "\uD83C\uDFC6", level: 5, requires: ["Long Range", "Moving Targets"], description: "Form is automatic. Focus is on mental game, equipment tuning, and competition strategy.", tips: ["Develop a shot routine and stick to it under pressure", "Study arrow flight with a camera to catch subtle flaws", "Compete regularly — pressure reveals what practice hides"], keyConcepts: [{ term: "Shot routine", explanation: "A repeatable sequence of steps performed identically every shot, anchoring focus under pressure." }], outcomes: ["Compete confidently at a regional level or above"], commonMistakes: ["Changing equipment or technique right before competition"], resources: [{ name: "World Archery: Competition Preparation", type: "article", url: "https://www.google.com/search?q=world+archery+competition+preparation", description: "Mental and physical prep for competitive archery." }] }
  ]
};

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

form.addEventListener("submit", async e => {
  e.preventDefault();
  const topic = topicInput.value.trim();
  if (!topic) return;

  const btn    = form.querySelector("button");
  btn.disabled = true;
  statusEl.textContent = "Generating skill tree...";

  try {
    const { topic: resolvedTopic, nodes } = await getSkillTree(topic);
    currentTopic = resolvedTopic;
    completedNodes.clear();

    promptView.hidden = true;
    treeView.hidden   = false;
    treeTitle.textContent = resolvedTopic;
    statusEl.textContent  = "";

    renderGraph(nodes);
    updateProgress();
    await saveCurrentTree();
  } catch (err) {
    console.error("Error:", err);
    statusEl.textContent = "Error: " + err.message;
  } finally {
    btn.disabled = false;
  }
});

// ── Explore form ──────────────────────────────────────────────────────────────
const exploreForm = document.getElementById("explore-form");
const exploreTopic = document.getElementById("explore-topic");

exploreForm.addEventListener("submit", e => {
  e.preventDefault();
  const q = exploreTopic.value.trim();
  if (q) window.location.href = "/explore/?q=" + encodeURIComponent(q);
});

// ── Auto-generate from URL param ──────────────────────────────────────────────
const urlParams = new URLSearchParams(window.location.search);
const autoGenerate = urlParams.get("generate");
if (autoGenerate) {
  topicInput.value = autoGenerate;
  window.history.replaceState({}, "", "/");
  form.dispatchEvent(new Event("submit", { cancelable: true }));
}

// ── Init ──────────────────────────────────────────────────────────────────────
initAuth();
