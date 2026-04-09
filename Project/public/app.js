// ── DOM refs ──────────────────────────────────────────────────────────────────
const form             = document.getElementById("form");
const topicInput       = document.getElementById("topic");
const statusEl         = document.getElementById("statusEl");
const promptView       = document.getElementById("prompt-view");
const treeView         = document.getElementById("tree-view");
const treeTitle        = document.getElementById("tree-title");
const backBtn          = document.getElementById("back-btn");
const graphContainer   = document.getElementById("graph-container");
const svg              = document.getElementById("graph");
const detailPanel      = document.getElementById("detail-panel");
const detailName       = document.getElementById("detail-name");
const detailLevel      = document.getElementById("detail-level");
const detailRequires   = document.getElementById("detail-requires");
const detailReqSection = document.getElementById("detail-requires-section");
const detailDesc       = document.getElementById("detail-description");
const detailTips       = document.getElementById("detail-tips");
const detailClose      = document.getElementById("detail-close");
const detailCompleteBtn = document.getElementById("detail-complete-btn");

// Auth
const userGreeting  = document.getElementById("user-greeting");
const logoutBtn     = document.getElementById("logout-btn");
const signinBtn     = document.getElementById("signin-btn");
const signupBtn     = document.getElementById("signup-btn");
const authOverlay   = document.getElementById("auth-overlay");
const authModal     = document.getElementById("auth-modal");
const authTabs      = document.querySelectorAll(".auth-tab");
const authForm      = document.getElementById("auth-form");
const authUsername  = document.getElementById("auth-username");
const authPassword  = document.getElementById("auth-password");
const authError     = document.getElementById("auth-error");
const authSubmit    = document.getElementById("auth-submit");
const authClose     = document.getElementById("auth-close");
const importBanner  = document.getElementById("import-banner");
const importMsg     = document.getElementById("import-msg");
const importYes     = document.getElementById("import-yes");
const importNo      = document.getElementById("import-no");

const NS = "http://www.w3.org/2000/svg";

// ── State ─────────────────────────────────────────────────────────────────────
let currentUser  = null;  // { id, username } | null
let serverTrees  = [];    // cache of server-side trees when logged in
const completedNodes = new Set();
const nodeCircleMap  = new Map();
let currentNodes = [];
let currentTopic = "";
let authMode     = "login"; // "login" | "register"

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

    // Offer to import local trees after login/register
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

// ── Graph rendering ───────────────────────────────────────────────────────────
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

function updateAllNodeVisuals() {
  for (const node of currentNodes) {
    const entry = nodeCircleMap.get(node.name);
    if (!entry) continue;
    const locked    = !isUnlocked(node.name);
    const completed = completedNodes.has(node.name);
    const { fill, stroke } = nodeColors(entry.t, completed);
    entry.circle.setAttribute("fill", fill);
    entry.circle.setAttribute("stroke", stroke);
    entry.group.classList.toggle("node-locked", locked);
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

function renderGraph(nodes) {
  svg.innerHTML = "";
  nodeCircleMap.clear();
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

  const pos = {};
  for (let lvl = 1; lvl <= maxLevel; lvl++) {
    const row = levels[lvl] || [];
    const y = topY + (maxLevel - lvl) * levelGap;
    row.forEach((node, i) => {
      pos[node.name] = { x: (W / (row.length + 1)) * (i + 1), y, level: node.level };
    });
  }

  for (const node of nodes) {
    const from = pos[node.name];
    if (!from) continue;
    for (const req of node.requires) {
      const to = pos[req];
      if (!to) continue;
      svg.appendChild(el("line", { x1: from.x, y1: from.y, x2: to.x, y2: to.y, class: "edge" }));
    }
  }

  for (const node of nodes) {
    const p = pos[node.name];
    if (!p) continue;

    const g = el("g", { transform: `translate(${p.x},${p.y})` });
    const t = (node.level - 1) / Math.max(maxLevel - 1, 1);
    const { fill, stroke } = nodeColors(t, completedNodes.has(node.name));

    const locked = !isUnlocked(node.name);
    const circle = el("circle", { r: nodeR, fill, stroke, "stroke-width": "2" });
    nodeCircleMap.set(node.name, { circle, t, group: g });
    g.appendChild(circle);
    if (locked) g.classList.add("node-locked");

    const badge = el("text", { x: String(nodeR - 6), y: String(-nodeR + 10), class: "level-badge" });
    badge.textContent = `L${node.level}`;
    g.appendChild(badge);

    const emojiText = el("text", { x: "0", y: "10", class: "node-emoji" });
    emojiText.textContent = node.emoji || "⭐";
    g.appendChild(emojiText);

    addLabel(g, node.name, 10, "node-label-below", nodeR + 8);

    g.classList.add("node-clickable");
    g.addEventListener("click", () => showDetail(node));
    svg.appendChild(g);
  }
}

function updateCompleteBtn(nodeName) {
  const done = completedNodes.has(nodeName);
  detailCompleteBtn.textContent = done ? "✓ Completed" : "Mark as Complete";
  detailCompleteBtn.classList.toggle("completed", done);
}

function showDetail(node) {
  const locked = !isUnlocked(node.name);

  detailName.textContent  = node.name;
  detailLevel.textContent = `Level ${node.level}`;

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
    detailTips.innerHTML   = "";
    detailCompleteBtn.hidden = true;
  } else {
    detailDesc.textContent   = node.description || "No description available.";
    detailTips.innerHTML     = (node.tips || []).map(t => `<li>${t}</li>`).join("");
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
    { name: "Grip Basics", emoji: "✋", level: 1, requires: [], description: "A consistent, relaxed grip is the foundation of accurate shooting. The bow should rest on the thumb pad, not clenched in the fist.", tips: ["Hold the bow as if holding a small bird — firm but not tight", "Keep your knuckles at roughly a 45° angle", "Practice dry-firing the grip in front of a mirror"] },
    { name: "Stance", emoji: "🧍", level: 1, requires: [], description: "A stable, repeatable stance provides the platform for everything else. Square or open stances both work — consistency is what matters.", tips: ["Feet shoulder-width apart, perpendicular to the target", "Distribute weight evenly across both feet", "Practice standing without the bow to build muscle memory"] },
    { name: "Nocking", emoji: "🏹", level: 1, requires: [], description: "Nocking is placing the arrow on the string correctly and consistently. The index vane should always face away from the bow.", tips: ["Use a nocking point or loop for a consistent position each time", "Listen for the click of the arrow snap onto the string", "Practice nocking with eyes closed to build feel"] },
    { name: "Draw Technique", emoji: "💪", level: 2, requires: ["Grip Basics", "Stance"], description: "Drawing the bow using your back muscles rather than your arm prevents fatigue and improves consistency over many shots.", tips: ["Engage your shoulder blade as you draw — feel it squeeze toward your spine", "Keep your bow arm elbow rotated out to avoid string slap", "Use a resistance band to train the back-draw motion off the range"] },
    { name: "Anchor Point", emoji: "📍", level: 2, requires: ["Draw Technique"], description: "An anchor point is a fixed spot where your draw hand contacts your face at full draw. A consistent anchor is critical for repeatable accuracy.", tips: ["Common anchors: thumb to jaw, index finger to cheekbone, or string to nose", "Use a kisser button on the string as a tactile reference", "Check your anchor in a mirror or record yourself"] },
    { name: "Aiming", emoji: "🎯", level: 2, requires: ["Nocking", "Stance"], description: "Aiming connects your sight picture to the target. Whether using a sight pin, instinctive method, or gap shooting, focus is on the target not the arrow tip.", tips: ["Keep your dominant eye focused on the target, not the sight", "Use a peep sight to align your sight housing consistently", "Practice aiming without releasing to build hold strength"] },
    { name: "Release", emoji: "🤌", level: 3, requires: ["Anchor Point", "Aiming"], description: "A clean release means allowing the fingers or release aid to let go without disturbing the bow. Punching or flinching at the trigger is the most common flaw.", tips: ["Relax your fingers rather than actively opening them", "For release aids, think 'pull through the shot' rather than punching", "Blind bale practice (eyes closed, close range) removes target panic"] },
    { name: "Follow Through", emoji: "🔄", level: 3, requires: ["Release"], description: "Follow-through is maintaining your form after the arrow leaves the bow. Dropping the bow arm early is a major accuracy killer.", tips: ["Hold your bow arm up until the arrow hits the target", "Keep your draw hand relaxed and drifting back naturally after release", "Use a wrist sling so you can relax your grip without dropping the bow"] },
    { name: "Breath Control", emoji: "🌬️", level: 3, requires: ["Anchor Point"], description: "Breathing causes movement. Learning to pause breathing at the right moment — at the natural respiratory pause — reduces bow movement at release.", tips: ["Take a full breath, exhale halfway, then hold and shoot", "Keep the hold under 8 seconds to avoid muscle tremor", "Practice slow breathing exercises to increase your hold time"] },
    { name: "Long Range", emoji: "🔭", level: 4, requires: ["Release", "Breath Control"], description: "Shooting beyond 40 yards amplifies every flaw in your form. Wind reading and sight adjustment become essential skills.", tips: ["Dial in your sight marks at 20, 30, 40, 50, and 60 yards incrementally", "Use a wind flag at the target to learn to read wind drift", "Increase draw weight or arrow spine if arrows are fishtailing at distance"] },
    { name: "Moving Targets", emoji: "💨", level: 4, requires: ["Follow Through", "Aiming"], description: "Leading a moving target requires calculating angle, speed, and distance simultaneously. Used in field archery and bowhunting.", tips: ["Start with slow-moving targets on a track to find your lead distance", "Maintain smooth bow movement — swing through the shot", "Practice with clay pigeons or aerial targets for speed training"] },
    { name: "Master Archer", emoji: "🏆", level: 5, requires: ["Long Range", "Moving Targets"], description: "At this level, form is automatic and the archer focuses entirely on mental game, equipment tuning, and competition strategy.", tips: ["Develop a shot routine and stick to it under pressure", "Study arrow flight with a high-speed camera to catch subtle form flaws", "Compete regularly — pressure reveals what practice hides"] }
  ]
};

async function getSkillTree(topic) {
  // ── OPTION A: mock data — comment out to use real API ──
  return MOCK_DATA;

  // ── OPTION B: real Gemini API — uncomment and comment out Option A ──
  // const res = await fetch("/api/skill-tree", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ topic })
  // });
  // if (!res.ok) {
  //   const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
  //   throw new Error(err.error || res.status);
  // }
  // const data = await res.json();
  // if (!data.nodes || !Array.isArray(data.nodes)) throw new Error("Unexpected response format");
  // return { topic, nodes: data.nodes };
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

    await saveCurrentTree();
    renderGraph(nodes);
  } catch (err) {
    console.error("Error:", err);
    statusEl.textContent = "Error: " + err.message;
  } finally {
    btn.disabled = false;
  }
});

// ── Init ──────────────────────────────────────────────────────────────────────
initAuth();
