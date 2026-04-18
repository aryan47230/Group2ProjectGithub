# Report 4 — Bugs Found During End-to-End Testing

**Date:** 2026-04-17
**Method:** Live Playwright-driven smoke test of the running app at `http://localhost:3000`, covering the launcher, `/skill-tree`, `/explore`, and `/api/*` endpoints.
**Scope:** Functional bugs only (degraded or broken behavior). UI polish suggestions live in `REPORT-5-UI-IMPROVEMENTS.md`.

Bugs are ordered by severity (highest first). Each entry lists the reproduction path, the affected file(s), and a suggested fix.

---

## B1 · CRITICAL — `/api/register` always returns 409 "Username already taken"

### Symptom
Every registration attempt — even with a guaranteed-unique username such as `qa_fresh_<epoch_ms>` — fails with `409 Username already taken`. Confirmed by calling the endpoint directly via `fetch('/api/register', …)` from the browser console: the body was always `{"error":"Username already taken"}`.

### Root cause
`Project/db.js:27-34` (`createUser`) treats **any** Supabase error as a unique-constraint violation:

```js
async createUser(username, passwordHash) {
  const { data, error } = await supabase
    .from("users")
    .insert({ username, password_hash: passwordHash })
    .select()
    .single();
  if (error) return null; // unique constraint violation = username taken
  return { … };
},
```

`Project/server.js:37-38` then turns the null into a 409:

```js
const user = await db.createUser(username, hash);
if (!user) return res.status(409).json({ error: "Username already taken" });
```

So a missing/invalid `SUPABASE_URL`, a missing `users` table, an RLS permission denial, a network blip, or any transient Supabase error **all surface as a 409 to the user** — and the user is given a misleading "pick another name" message they can never satisfy.

### Impact
Registration is effectively broken for any environment where the Supabase error is not a real unique-key collision. Users (and QA) cannot progress past sign-up → cannot sign in → cannot save skill trees.

### Suggested fix
Differentiate the error types in `db.createUser`:

```js
if (error) {
  // Postgres 23505 = unique_violation. Anything else is an infrastructure error.
  if (error.code === "23505") return { taken: true };
  console.error("createUser supabase error:", error);
  throw error;
}
return { user: { … } };
```

Then in `server.js`, map the three cases distinctly:
- `{ taken: true }` → `409 Username already taken`
- thrown error → `503 Authentication service unavailable` (plus server-side log)
- success → `200` with session set

---

## B2 · HIGH — Gemini/upstream failures in `/api/skill-tree` leak as raw `500` with internal error text

### Symptom
Console during skill-tree generation:

```
[ERROR] Failed to load resource: the server responded with a status of 500 (Internal Server Error) @ http://localhost:3000/api/skill-tree:0
```

### Root cause
`Project/server.js` (skill-tree route) returns the upstream Gemini error verbatim:

```js
res.status(500).json({ error: `Gemini API error ${response.status}: ${errText}` });
```

This means a Gemini `503 Service Unavailable` (common during quota exhaustion) surfaces as a 500 **with the raw upstream body** concatenated into our error string. Two problems:
1. We lose the caller-actionable distinction between "our server crashed" (5xx) and "upstream is temporarily rate-limited" (502/503/429).
2. We risk leaking internal messages/IDs/keys that future versions of the Gemini response payload might include.

### Suggested fix
```js
if (response.status === 429 || response.status === 503) {
  return res.status(503).json({ error: "AI generator is temporarily unavailable. Please try again in a moment." });
}
console.error(`Gemini error ${response.status}:`, errText);
return res.status(502).json({ error: "AI generator failed. Please try again." });
```

Log the upstream detail server-side; never echo it to the client.

---

## B3 · HIGH — Left `ConceptPanel` summary intercepts clicks on nearby graph nodes

### Symptom
On `/explore`, attempting to click a graph node that visually sits close to the left edge of the canvas (e.g. "Absolute zero" with `Quantum mechanics` center) fails. Playwright reports the element is intercepted by:

```
<p class="_summary_yspve_157">Quantum mechanics is the fundamental physical theory that describes…</p>
```

Clicking a node farther right on the same graph succeeds.

### Root cause
The `_summary` paragraph in `HeroCard` (inside `ConceptPanel`) spans the full 500 px panel width and does not opt out of pointer events. The left column is positioned above the graph layer in stacking order, so any portion of the panel that overlaps the SVG canvas hit-tests as the panel.

### Suggested fix
Either:
- Give `.leftPanel` / the panel scroll region `pointer-events: auto` but make the graph area a sibling that receives pointer events in its own region via strict flex widths (no overflow into the graph viewport). OR
- Simpler: clip the panel with `overflow: hidden; contain: layout paint;` and verify via DevTools that no descendant bleeds past `width: 500px`. The current SASS/CSS-module `HeroCard.module.css` appears to let text nodes overflow visually.

---

## B4 · MEDIUM — `NodeDetailOverlay` renders the description twice

### Symptom
Clicking **DETAILS** on any graph-node preview popover opens the full-screen overlay. Inspection of the overlay (ref snapshot captured during the American Physical Society test) shows two `<p>` siblings with the same information:

```
<p>The American Physical Society (APS) is a not-for-profit membership organization … led by chief executive officer Jonathan Bagger.</p>
<p>The American Physical Society (APS) is a not-for-profit membership organization … of physics.</p>
```

The first paragraph is the full Wikipedia extract, the second is a truncated version of the same text — redundant and confusing to readers.

### Root cause
Likely an artifact of `NodeDetailOverlay` rendering both `node.description` and `node.extract` without de-duping when they come from the same Wikipedia payload. `getShortExtracts` already returns the short form, and the full article read adds the longer form.

### Suggested fix
In `client/src/components/KnowledgeGraph/NodeDetailOverlay.jsx`:
- Pick one field based on length (`extract || description`).
- If both exist and the shorter is a strict prefix of the longer, render only the longer.
- If both exist and diverge, render the longer under a `Summary` heading and the shorter under `Quick facts`.

---

## B5 · MEDIUM — `NodeDetailOverlay` labels every node as "SECONDARY"

### Symptom
`American Physical Society` is a direct (primary) connection of `Quantum mechanics`, yet the overlay pill reads `SECONDARY`. The same was observed for `Action at a distance`, another direct connection.

### Root cause
The overlay reads the graph node's type **at the time of the click**, but any node that has not been expanded yet is internally tagged `secondary` (or the label mapping in the component hard-codes "SECONDARY" without consulting `node.type`).

### Suggested fix
In `NodeDetailOverlay`, compute the label from the actual `node.type`:

```js
const label = {
  center: "CURRENT",
  primary: "DIRECT CONNECTION",
  secondary: "SUB-LINK",
  trail: "VISITED",
  dormant: "PREVIOUS CONNECTION",
}[node.type] ?? "RELATED";
```

---

## B6 · MEDIUM — Preview popover shows placeholder "A topic related to X." / "Explore this concept." when Wikipedia description is missing

### Symptom
Graph nodes whose Wikipedia extract was not fetched (or returned empty) show a generic stub in the popover summary and the connected-concepts list:

```
Accuracy — "A topic related to Quantum mechanics."
ArXiv (identifier) — "A topic related to Absolute zero."
```

The popover additionally shows "Explore this concept." when `description` is entirely missing.

### Root cause
`routes/concepts.js` and `services/wikipedia.js` return this placeholder whenever `getShortExtracts` does not provide an extract for a given title (disambiguation pages, lists, redirects, cache misses, or articles whose REST summary endpoint returned 404).

### Impact
Preview popovers become information-free — the whole point of the popover is context before jumping.

### Suggested fix
- If the extract is missing, try one more lightweight fetch: `wikipedia.summary(title)` REST endpoint (free, fast).
- If that too fails, show an honest empty state: `"No Wikipedia summary is available for this article. Click JUMP HERE to read the full page."` rather than a meaningless stub.

---

## B7 · MEDIUM — Wikipedia algorithmic ranking surfaces low-value connections ahead of core concepts

### Symptom
Direct connections shown for **Quantum mechanics** (a foundational physics topic) include:

```
A. Douglas Stone            (a physicist)
Abdus Salam                 (a Nobel laureate)
Abraham Pais                (a physicist)
Acta Physica Polonica B     (a journal)
Alfred P. Sloan Fellowship  (a fellowship)
Phi Beta Kappa Award …      (an award)
Oxford University           (an institution)
American Physical Society   (a society)
```

Meanwhile topics like *Wave function*, *Schrödinger equation*, *Superposition*, *Entanglement* are either absent or pushed below these alphabetical/biographical artifacts.

### Root cause
`services/algorithmic.js` ranks connections by bidirectional link density. Physicist articles tend to link heavily back to "Quantum mechanics", so they bubble up. Alphabetical proximity ("A…" titles) also seems to influence the sort in the current implementation.

### Impact
New users exploring a topic receive a noisy, biography-heavy graph that obscures the conceptual structure the app is supposed to teach.

### Suggested fix
Three low-cost improvements to the ranker:
1. **Category filter** — drop connections whose Wikipedia categories include `*biography*`, `*living people*`, `*fellows of …*`, `*awards*`, `*journals*`, `*alumni*`. Categories are already fetched in `wikipedia.js`.
2. **Concept bias** — bump ranks for titles whose category set overlaps with the seed topic's category set (physics → physics).
3. **De-alphabetize** — as a tiebreaker use a stable hash of the title rather than sort order.

The existing **Enrich with AI** button already fixes this, but it costs a Gemini call and the default experience should not be this noisy.

---

## B8 · MEDIUM — Skill-tree generation takes 50+ seconds with no progress feedback

### Symptom
Starting a skill-tree prompt (`/skill-tree` landing → "Generate") displays only a spinner for ~50 s before the tree renders (or for the full duration before a 500 error). There is no intermediate state to tell the user whether the server is working, stalled, or rate-limited.

### Impact
Users assume the app has hung and refresh, which wastes a Gemini call and loses their prompt.

### Suggested fix
`server.js` already performs multiple phases (prompt → skeleton → nodes → resources). Emit progress either:
- **Simple:** periodic `/api/skill-tree/status` polling (keep state in-memory keyed by job id)
- **Better:** Server-Sent Events (SSE) streaming phases: `{ phase: "analyzing_prompt" }`, `{ phase: "generating_skeleton" }`, `{ phase: "enriching_nodes", done: 3, total: 12 }`.

Client then displays meaningful progress text.

---

## B9 · MEDIUM — Launcher overlay can cover error states of the feature it's launching

### Symptom
When the skill tree generator errors out (e.g., from B2), the `LauncherScreen` can still be visible because its fade-out is time-based rather than event-based. The error UI underneath is present in the DOM but occluded.

### Root cause
`App.jsx` fires a `setTimeout(() => setTransitioning(false), 50)` decoupled from the route's ready/error signal. `LauncherScreen` has its own lifecycle and does not subscribe to the skill-tree state.

### Suggested fix
Treat the launcher as a gate: dismiss it only when *either* the route has emitted `ready` (e.g. `window.dispatchEvent(new CustomEvent('skilltree:ready'))` analogous to the existing `explore:ready`) *or* the route has emitted an error. Currently only Explore dispatches `explore:ready`; the Skill Tree route should do the equivalent.

---

## B10 · LOW — Wiki-hop count appears off by one

### Symptom
Loading `/explore` with a single concept already visited shows `1 hops`. After one further jump it shows `2 hops`. Expected behavior: the first concept is "hop 0" or the UI should say `1 concept, 0 hops`.

### Impact
Minor confusion; "hops" is a semantic label and the count is internally consistent.

### Suggested fix
Either rename the label to `Concepts` in `Topbar`, or subtract 1 from the display value so the initial concept shows `0 hops`.

---

## B11 · LOW — `Action at a distance` article renders with `No image available` placeholder

### Symptom
Navigating to `Action at a distance` shows `<img alt="Action at a distance">` that renders the text "No image available" rather than gracefully hiding the image block.

### Root cause
The Wikipedia REST API returns no `thumbnail` for this title. `HeroCard` still renders an `<img>` whose `alt` becomes the visible fallback text when the browser cannot resolve the source.

### Suggested fix
In `HeroCard`, gate the `<img>` entirely on `image`:
```jsx
{image ? <img src={image} alt={title} /> : null}
```
…and let the card gracefully collapse its image slot when there is no image.

---

## B12 · LOW — Auth modal has no confirm-password field and no password-strength affordance

### Symptom
Sign Up modal accepts any password of length ≥ 6 with no second-entry confirmation. A typo at registration silently locks the user out of their own account.

### Suggested fix
Add a "Confirm password" field to the Sign-Up form; require equality before enabling the submit button. This is three lines in `AuthModal.jsx`.

---

## B13 · LOW — Graph-node label text is truncated mid-word without ellipsis or hover tooltip

### Symptom
Node labels like `Quantum mechanics` render inside the graph as `Quant mecha`; `Absolute zero` becomes `Absol zero`; `Action at a distance` becomes `Acti at`. No tooltip on hover, no smart truncation boundary (e.g. word-aware).

### Suggested fix
Use CSS `text-overflow: ellipsis` on a word boundary, and add a `title={node.label}` attribute so the browser native tooltip shows the full label on hover. (Details in Report 5.)

---

## Appendix — Reproduction environment

| Item | Value |
|------|-------|
| Node / Vite | current `package.json` defaults |
| Server | `http://localhost:3000` via `npm start` |
| Client build | Vite served through Express at `/` |
| Browser driver | Playwright MCP (chromium) |
| Auth backend | Supabase (same env as prod config) |
| Time of test | 2026-04-17 |
| Console errors seen | 7 total: 1× 500 `/api/skill-tree`, 1× 400 `/api/register`, 3× 409 `/api/register`, 1× 401 `/api/login`, plus the 500 from B2 |

Every bug above is reproducible from a fresh session with no existing account and default env variables.
