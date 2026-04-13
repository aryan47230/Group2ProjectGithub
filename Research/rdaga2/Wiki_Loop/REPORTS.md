# Wiki Loop — Comprehensive Testing Reports

*Generated from hands-on browser testing on 2026-04-07*

---

## Report 1: Bug & Error Report

### CRITICAL — App-Crashing Bugs

#### BUG-01: d3-force crash — "node not found" on navigation
- **Severity:** CRITICAL (app becomes a black screen, unrecoverable without page reload)
- **Reproduction:** Search "Quantum mechanics" → Click any primary node → Click "JUMP HERE" → If the Wikipedia API returns a redirected title (e.g., node ID is "Accuracy" but API returns "Accuracy and precision"), or when navigating from one concept to another via search bar while a concept is already loaded
- **Root Cause:** Orphaned edges in `graphData.edges` reference node IDs that don't exist in `graphData.nodes`. When `useForceLayout.js` (line 60-61) passes these edges to `forceLink(links).id((d) => d.id)`, d3-force throws `Error: node not found: <title>` and React crashes because there is no error boundary.
- **Affected Code:**
  - `ExplorerContext.jsx` — `LOAD_SUCCESS` reducer (lines 106-133): When a new concept loads, old primary nodes become "dormant" and new primary nodes + edges are added. However, edges from previous states that reference old node IDs (which may have been renamed by Wikipedia redirect) are never cleaned up.
  - `useForceLayout.js` (lines 53-61): Passes `graphData.edges` directly to d3-force without filtering out edges whose source/target nodes don't exist in the current nodes array.
- **Fix Required:** Filter edges against actual node IDs before passing to d3-force. Add: `const nodeIds = new Set(nodes.map(n => n.id)); const links = graphData.edges.filter(e => nodeIds.has(e.source) && nodeIds.has(e.target)).map(...)` in `useForceLayout.js`.

#### BUG-02: No React Error Boundary
- **Severity:** CRITICAL
- **Description:** When any component (particularly `<KnowledgeGraph>`) throws an error, the entire app crashes to a black screen with no recovery option. The console error explicitly says "Consider adding an error boundary to your tree."
- **Fix Required:** Wrap the main app (or at least `<KnowledgeGraph>`) in a React Error Boundary component that shows a "Something went wrong — click to reload" message instead of a black screen.

#### BUG-03: Wikipedia title redirect mismatch
- **Severity:** HIGH
- **Description:** When a user clicks JUMP HERE on a node like "Accuracy", the app calls `jumpTo("Accuracy")`, which fetches from Wikipedia. Wikipedia redirects "Accuracy" → "Accuracy and precision" and returns `{ title: "Accuracy and precision" }`. In `LOAD_SUCCESS`, the code checks `n.id === concept.title` to promote the existing node to center, but the existing node's ID is "Accuracy" while `concept.title` is "Accuracy and precision". This means:
  1. The old "Accuracy" node is never promoted to center
  2. A new center node "Accuracy and precision" is created
  3. Edges pointing to "Accuracy" become orphaned
  4. This triggers BUG-01
- **Fix Required:** Resolve Wikipedia redirects before adding edges, or normalize node IDs to match the canonical Wikipedia title.

### HIGH — Functional Issues

#### BUG-04: Search bar doesn't update on navigation
- **Severity:** MEDIUM
- **Description:** When navigating via RANDOM, JUMP HERE, or Back button, the search input retains the last manually searched text (e.g., still shows "Quantum mechanics" after jumping to "Alexander Holevo"). This is confusing — the user might think they're still viewing the searched concept.
- **Fix Required:** Update the search input value to reflect `currentConcept.title` on navigation, or clear it.

#### BUG-05: Wikipedia maintenance categories displayed as primary categories
- **Severity:** MEDIUM
- **Description:** The category badge (prominent cyan badge below the hero image) and fact chips show Wikipedia internal maintenance categories instead of meaningful topic categories. Examples observed:
  - "ALL ARTICLES LACKING RELIABLE REFERENCES"
  - "ALL WIKIPEDIA ARTICLES WRITTEN IN BRITISH ENGLISH"
  - "ARTICLES CONTAINING VIDEO CLIPS"
  - "ARTICLES CONTAINING FRENCH-LANGUAGE TEXT"
  - "ALL ARTICLES WITH UNSOURCED STATEMENTS"
  These are Wikipedia quality-control metadata, not useful content categories. They make the app look broken.
- **Fix Required:** Filter out Wikipedia maintenance/hidden categories. These typically start with "All articles", "Articles with", "Articles containing", "Articles lacking", "Pages using", "Webarchive template", "CS1", "Use dmy dates", "Use mdy dates", etc. Only show categories that are actual topic categories.

#### BUG-06: EXPAND button is misleading
- **Severity:** LOW-MEDIUM
- **Description:** In the PreviewPopover, the "EXPAND" button calls `showNodeDetail()` (opens a full-screen detail overlay), NOT `expandNode()` (which adds secondary sub-links to the graph). Users expect "Expand" to expand the node on the graph (show sub-connections), not open a detail view. Meanwhile, the auto-expand of top-3 primary nodes happens silently in the background.
- **Fix Required:** Rename "EXPAND" to "DETAILS" or "VIEW", and add a separate button for actual graph expansion.

#### BUG-07: Back/Forward navigation re-fetches instead of using cached data
- **Severity:** LOW
- **Description:** `goBack()` calls `jumpTo(prevTitle)` which makes a fresh API call. Combined with `LOAD_SUCCESS` adding new trail entries, this means going back adds ANOTHER entry to the trail (so the trail shows "Quantum mechanics" → "Abdus Salam" → "Quantum mechanics" as 3 entries). The trail should simply move the index without re-fetching or duplicating entries.
- **Fix Required:** `goBack()`/`goForward()` should use cached concept data and only adjust `trailIndex` without pushing new entries.

### LOW — Minor Issues

#### BUG-08: Node click handler inconsistency
- **Severity:** LOW
- **Description:** Clicking on graph nodes via `.click()` sometimes doesn't trigger the React synthetic event handler. The click needs to be dispatched as `new MouseEvent('click', {bubbles: true})` to reliably trigger React's event delegation. This suggests the click target area may be too small or the event propagation is being stopped somewhere.

#### BUG-09: 3 overlapping node pairs in graph
- **Severity:** LOW
- **Description:** With 44 nodes on screen, 3 pairs of nodes overlapped despite `forceCollide` being configured. This happens when the simulation settles before fully resolving all collisions, likely due to the `alphaDecay: 0.035` causing the simulation to cool too quickly with many nodes.

---

## Report 2: Feature Improvement Report

### High-Priority Features

#### FEAT-01: Loading state indicator
- **Description:** When a concept is loading (after clicking JUMP HERE or searching), there is no visible loading indicator on the graph side. The left panel may show a loading state, but the graph area provides no feedback. Add a loading skeleton or spinner overlay.

#### FEAT-02: "No results found" state for search
- **Description:** When searching for nonsense text like "xyznonexistent12345", the dropdown simply doesn't appear. There's no feedback telling the user nothing was found. Add a "No results found" dropdown item.

#### FEAT-03: Concept caching
- **Description:** Each navigation (including Back/Forward) makes a fresh API call. Implement a simple in-memory cache for fetched concepts to:
  - Speed up Back/Forward navigation
  - Avoid redundant API calls for previously visited concepts
  - Enable offline browsing of visited concepts

#### FEAT-04: Graph node search/filter
- **Description:** After several jumps, the graph accumulates dozens of nodes and becomes hard to navigate. Add a filter/search within the graph to highlight specific nodes, or add a button to focus/zoom on a specific node.

#### FEAT-05: Deep link / URL routing
- **Description:** The app has no URL routing. Opening `localhost:5173` always starts fresh. Implement URL-based routing (e.g., `/explore/Quantum_mechanics`) so users can:
  - Share links to specific concepts
  - Use browser back/forward buttons
  - Bookmark concepts

### Medium-Priority Features

#### FEAT-06: Graph zoom controls
- **Description:** The graph supports panning but has no zoom. As nodes accumulate, the fixed 2400x1800 canvas gets crowded. Add zoom in/out controls (scroll wheel + buttons) so users can zoom into clusters or zoom out for overview.

#### FEAT-07: Node context menu with more actions
- **Description:** The PreviewPopover only offers JUMP HERE and EXPAND (detail view). Add more useful actions:
  - "Open on Wikipedia" — direct link to the Wikipedia article
  - "Expand connections" — add secondary sub-links to the graph
  - "Remove from graph" — declutter by removing uninteresting nodes
  - "Pin node" — fix node position on the graph

#### FEAT-08: Export journey
- **Description:** The Journey Map overlay shows a nice visualization, but there's no way to save or share it. Add export options:
  - Export journey as shareable link
  - Export as image/PNG
  - Export as text list (for note-taking)

#### FEAT-09: Keyboard shortcut improvements
- **Description:** Currently Tab cycles through nodes and Enter opens preview. Add:
  - `J` — jump to focused node
  - `E` — expand/show details for focused node
  - `R` — random jump
  - `B` — go back
  - `/` — focus search bar
  - `?` — show keyboard shortcuts help

#### FEAT-10: Auto-pan to new center on jump
- **Description:** When jumping to a new concept, the graph doesn't auto-center on the new node. If the user has panned away, the new center node may be off-screen. Auto-pan (with smooth animation) to center the new node in the viewport after each jump.

### Lower-Priority Features

#### FEAT-11: Concept comparison mode
- **Description:** Allow users to select 2+ concepts from their trail and see a side-by-side comparison of their Wikipedia extracts, categories, and connections.

#### FEAT-12: Graph layout options
- **Description:** The force-directed layout is the only option. For large graphs, offer alternative layouts:
  - Radial (concentric circles from center)
  - Tree/hierarchy
  - Timeline (based on trail order)

#### FEAT-13: Sound design
- **Description:** Subtle ambient sounds for the futuristic theme:
  - Soft "whoosh" on jump
  - Gentle "ping" on node click
  - Ambient space/electronic hum (toggleable)

#### FEAT-14: Dark/light theme toggle
- **Description:** The app only has a dark theme. While it fits the futuristic aesthetic, some users may prefer a light mode for readability in bright environments.

#### FEAT-15: Concept "bookmarks" or favorites
- **Description:** Let users bookmark interesting concepts for later. Show bookmarked concepts in a separate panel or as highlighted nodes on the graph.

---

## Report 3: UI/UX Design Report — Making It More Futuristic & Eye-Catching

### High-Impact Visual Improvements

#### UI-01: Hero image treatment is too muted
- **Current:** Images are shown at `opacity: 0.6` with `saturate(0.8)` and only go to `0.75` on hover. The image height is only 140px.
- **Recommendation:** Make the hero image a full statement piece:
  - Increase height to 200-240px
  - Bump opacity to 0.8-0.85 default, 1.0 on hover
  - Add a holographic/scan-line overlay effect (thin horizontal lines at 2px intervals with low opacity) for a "sci-fi data terminal" feel
  - Add a subtle RGB split/chromatic aberration effect on hover (shift R and B channels 1-2px) for that cyberpunk look
  - Add a "SCANNING..." or data-readout animation when the image first loads (typewriter-style text overlay that disappears)

#### UI-02: Center node needs more visual impact
- **Current:** The center node is a 96px circle with a pulsing glow. It's distinctive but could be more dramatic.
- **Recommendation:**
  - Add concentric rotating rings around the center node (like a radar/scanner effect) — thin dotted/dashed circles that slowly rotate
  - Add a subtle particle emission effect — tiny dots emanating outward from the center
  - Make the glow pulse sync with a "heartbeat" rhythm (double-pulse pattern) rather than a simple sine wave
  - Add a hexagonal wireframe overlay on the center circle that slowly rotates

#### UI-03: Edge animations need more depth
- **Current:** Edges have flowing particle dots, which is nice, but they're very subtle.
- **Recommendation:**
  - Add a "data flow" effect — small dashes or encoded characters flowing along edges (like Matrix rain but along paths)
  - When a node is hovered, its connected edges should "light up" with increased brightness and faster particle flow
  - Add a brief "energy pulse" animation along the edge when a new connection is formed (a bright wave traveling from source to target)
  - Use gradient strokes on edges (brighter near nodes, dimmer in the middle)

#### UI-04: Background needs more atmosphere
- **Current:** Dark background with nebula blobs, dot grid, and floating particles. It's good but could be more immersive.
- **Recommendation:**
  - Add a subtle star field behind the graph (tiny random white dots at varying opacities, some twinkling)
  - Make the nebula blobs slowly shift colors over time (animated gradient)
  - Add a very subtle parallax effect on the background layers when panning (nebula moves slower than grid which moves slower than nodes)
  - Add occasional "shooting star" or "comet" streaks across the background
  - Consider a subtle scanline overlay (horizontal lines at 0.02 opacity) across the entire graph area for a CRT monitor feel

### Panel & Card Design

#### UI-05: Concept panel needs glassmorphism upgrade
- **Current:** The left panel has a solid dark background with basic borders.
- **Recommendation:**
  - Apply glassmorphism: `backdrop-filter: blur(20px); background: rgba(6, 9, 15, 0.7);` with a subtle border glow
  - Add a thin animated gradient border (slowly cycling through accent colors) on the panel edge
  - Add corner bracket decorations (╔ ╗ ╚ ╝ style) made from thin accent-colored lines for a HUD/terminal feel
  - When the concept changes, add a brief "glitch" transition effect (horizontal slice displacement for 200ms)

#### UI-06: Fact chips could be more data-terminal styled
- **Current:** Simple bordered chips with label/value.
- **Recommendation:**
  - Add a small animated "data tick" indicator (a tiny blinking dot or line) in each chip
  - Use a monospace "digital readout" style for values with slight letter-spacing
  - Add a micro "loading" animation when facts first appear (values count up to their final number, text characters appear one by one)
  - Consider a horizontal bar/progress indicator style for numeric facts

#### UI-07: Enrich button needs more visual flair
- **Current:** A simple bordered button.
- **Recommendation:**
  - Add a pulsing glow animation to draw attention (subtle border-color animation)
  - While enriching, show a "neural network" loading animation (connected dots forming and dissolving)
  - After enrichment, change the button to show "AI Enhanced" with a different color (green/gold) and a subtle shimmer
  - Add a brief "scan beam" effect that sweeps across the panel when enrichment completes

### Node Design

#### UI-08: Hexagonal secondary nodes need refinement
- **Current:** Hexagonal clip-path with basic styling.
- **Recommendation:**
  - Add a thin inner hexagonal border (double-line effect) for more detail
  - Add a subtle rotation animation on hover (slight tilt, 5-10 degrees)
  - When secondary nodes first appear (on auto-expand), animate them "materializing" — fade in with a scale-up from 0 + a brief glow flash
  - Add tiny connector dots at each hex vertex

#### UI-09: Visited node indicator could be more visible
- **Current:** Small cyan dot — easy to miss.
- **Recommendation:**
  - Add a thin checkmark or "completed" ring around visited nodes (a partial arc, like a progress ring at 100%)
  - Change the node border to a different style (double-line or dashed) for visited nodes
  - Add a subtle "ghost trail" effect — a very faint duplicate of the node offset by 2-3px to indicate "you've been here"

#### UI-10: Trail/dormant nodes fade too quickly
- **Current:** Opacity drops to 0.5 at hopDistance 2 and 0.3 beyond. Dormant nodes at hopDistance 1 are already at 0.7.
- **Recommendation:**
  - Slow the fade: 1.0 → 0.85 → 0.65 → 0.45 (keep nodes visible longer)
  - Add a "constellation" effect for distant trail nodes — connect them with very thin dotted lines to form a visible path of exploration
  - When hovering a trail node, temporarily boost its opacity back to 1.0 and show a tooltip with "Visited 3 hops ago"

### Typography & Motion

#### UI-11: The typing animation on node labels is charming but could be enhanced
- **Current:** Characters appear one at a time at 50ms intervals.
- **Recommendation:**
  - Add a blinking cursor (█) at the end of the text during typing
  - Add a very subtle "keystroke" style — each character appears with a microscopic vertical offset that settles, like keys being stamped
  - Vary the typing speed slightly (faster for common letters, micro-pause before capitals) for a more organic feel

#### UI-12: Topbar needs more futuristic treatment
- **Current:** Simple dark bar with logo, search, and buttons.
- **Recommendation:**
  - Add a thin accent-color line at the bottom of the topbar (animated gradient sweep left-to-right on page load)
  - The hop counter could be styled as a "mission control" readout — larger number with a small unit label, maybe in a hexagonal badge
  - Add a subtle "signal strength" indicator or "connection quality" animation near the logo (animated bars or dots)
  - The search input could have a "scanning" animation — a thin light bar that sweeps across the input field while typing

#### UI-13: Transitions between concepts need more drama
- **Current:** Content simply replaces on jump.
- **Recommendation:**
  - Add a brief "warp" or "tunnel" effect when jumping (radial blur outward from center for 300ms)
  - The concept panel content could slide in from the bottom with staggered timing (image first, then title, then text, then facts)
  - The graph could do a brief "pulse" effect from the center node outward (expanding ring of light)
  - Add a "quantum teleportation" effect — the old center briefly splits into particles that reform at the new center position

### Micro-interactions

#### UI-14: Hover states need more personality
- **Recommendation:**
  - Graph nodes: On hover, show a brief "scan ring" animation (expanding circle from the node center)
  - Buttons: Add a "glitch" hover effect (brief horizontal displacement/color shift)
  - Search results: Add a thin left-border accent color that slides in on hover
  - Connected concept cards: Add a subtle "hologram flicker" on hover

#### UI-15: Add ambient data visualization
- **Recommendation:**
  - Show a small "connection strength" visualization near edges (tiny bar chart or signal dots)
  - Add a mini-map in the corner of the graph area showing the overall graph layout with a viewport indicator
  - Show category distribution as a small pie/ring chart somewhere in the UI
  - Add "data stream" decorations in empty areas — columns of slowly scrolling hex codes or binary at very low opacity (0.03-0.05) for atmosphere

---

## Report 4: Bugs, Errors & UX Fixes (April 8 Testing Session)

*Tested by navigating: Python (programming language) -> APL -> ABC -> ALGOL 68 -> ALGOL -> Black hole -> Music, plus back/forward navigation, popover interactions, breadcrumb clicks, Trail/Map overlays, and NodeDetailOverlay.*

### Already Fixed in This Session

These bugs were identified and patched during this session:

#### FIXED-01: ConnectedConcepts "Preview" button broken
- **Severity:** HIGH
- **What happened:** Clicking "Preview" on a connected concept card in the left panel did nothing. No popover appeared.
- **Root cause:** `setPreview(conn)` passed a connection object with `title` but no `id` or `label`. The `PreviewPopover` checks `positions[previewNode.id]` which was `undefined`.
- **File:** `ConnectedConcepts.jsx:39`
- **Fix applied:** Spread `id` and `label` from `title` when calling `setPreview`.

#### FIXED-02: Duplicate edges accumulate on revisits
- **Severity:** MEDIUM
- **What happened:** Jumping back to a previously visited concept (or jumping to it from a different path) created duplicate edges. The edge array grew on every revisit.
- **Root cause:** `LOAD_SUCCESS` in `ExplorerContext.jsx` merged `[...preEdges, ...newEdges, ...trailEdges]` without deduplication.
- **File:** `ExplorerContext.jsx:164-168`
- **Fix applied:** Deduplicate edges using a `source->target` key set.

#### FIXED-03: hopDistance inflation on every jump
- **Severity:** MEDIUM
- **What happened:** Trail and dormant nodes drifted further from center with each jump, eventually becoming invisible. After 5-6 jumps, early nodes were pushed far off-canvas.
- **Root cause:** Every jump incremented `hopDistance` for ALL trail/dormant nodes (`n.hopDistance + 1`), regardless of their actual distance from the new center.
- **File:** `ExplorerContext.jsx:141-148`
- **Fix applied:** Only increment hopDistance for nodes directly transitioning (center->trail, primary->dormant). Existing trail/dormant nodes keep their current hopDistance, capped at 4.

#### FIXED-04: Auto-expand re-firing on every navigation
- **Severity:** LOW-MEDIUM
- **What happened:** The auto-expand of the top primary node would fire again on back/forward navigation, adding duplicate secondary nodes and edges.
- **Root cause:** `expandedRef.current` was reset to `new Set()` on every concept change, losing memory of previously expanded nodes. Also `ADD_SECOND_LAYER` didn't deduplicate edges.
- **File:** `KnowledgeGraph.jsx:142-156`, `ExplorerContext.jsx:285-301`
- **Fix applied:** Persist `expandedRef` across jumps (no reset). Added edge deduplication to `ADD_SECOND_LAYER`.

### Open Bugs

#### BUG-10: NodeDetailOverlay action buttons hidden below fold
- **Severity:** HIGH
- **Reproduction:** Click any node -> Preview popover -> DETAILS -> Overlay opens. If the concept has an image + long extract text, the JUMP HERE and CLOSE buttons are pushed below the visible area.
- **Root cause:** The `.card` has `max-height: 80vh` and `overflow-y: auto`, but the content (top + image + body + actions) exceeds 80vh. The card scrolls, but the action buttons at the bottom are not visible without scrolling. Users see the overlay but can't find the buttons — they can only close by clicking the dark backdrop.
- **Fix needed:** Make the `.actions` div sticky at the bottom of the card with `position: sticky; bottom: 0; background: var(--bg-secondary);` so buttons are always visible. Alternatively, restructure the card to use `display: flex; flex-direction: column;` with the body as the scrollable area and actions pinned.

#### BUG-11: Breadcrumb trail doesn't show current concept when trail is long
- **Severity:** MEDIUM
- **Reproduction:** Make 4+ jumps. The breadcrumb bar in the left panel shows the trail with `overflow-x: auto` but no auto-scroll-to-end. After several jumps, the current concept is past the right edge and invisible. The user sees old breadcrumbs but not where they currently are.
- **Root cause:** `BacktrackBar.jsx` renders all trail entries in a flex container with `overflow-x: auto`, but never scrolls to the end when new entries are added.
- **Fix needed:** Add a `useEffect` that scrolls the trail container to `scrollLeft = scrollWidth` whenever `trailIndex` changes. Or show only the last 2-3 entries with a "..." indicator.

#### BUG-12: Breadcrumb and TrailSidebar "Jump back" uses forward navigation
- **Severity:** MEDIUM
- **Reproduction:** After several jumps, click a breadcrumb entry or click "Jump back" in the TrailSidebar. This calls `jumpTo(entry.title)` which is a forward navigation — it adds a NEW trail entry instead of moving the trail index backward.
- **Expected:** Clicking "Quantum mechanics" in the breadcrumb while at jump 4 should navigate back to that trail position (index 0), not create a 5th jump.
- **Root cause:** Both `BacktrackBar.jsx:15` and `TrailSidebar.jsx:33` call `jumpTo()` instead of a proper `goToTrailIndex(i)` function.
- **Fix needed:** Add a `goToIndex(targetIndex)` function to ExplorerContext that navigates to a specific trail position (like `goBack`/`goForward` but to an arbitrary index). Use it in breadcrumbs and Trail sidebar.

#### BUG-13: TrailSidebar uses emoji in title
- **Severity:** LOW
- **Reproduction:** Click TRAIL button — sidebar header shows "🛤 Your Trail".
- **Root cause:** `TrailSidebar.jsx:16` hardcodes the emoji.
- **Fix needed:** Remove the emoji. The CLAUDE.md style guide says "No emojis anywhere in the UI."

#### BUG-14: "Domains" stat is meaningless
- **Severity:** LOW
- **Reproduction:** Open Trail or MAP. The "Domains" stat uses `trail.map(t => t.title.split(' ')[0])` — it counts unique first words of titles. "Python" and "Python (programming language)" count as the same "domain" while "Black hole" and "Black swan" would be different "domains". This has no semantic meaning.
- **Root cause:** `TrailSidebar.jsx:11` and `JourneyOverlay.jsx:10` use the same naive first-word heuristic.
- **Fix needed:** Use the existing `assignCluster(categories)` function from ExplorerContext to determine domains. Trail entries already store `categories`, so: `new Set(trail.map(t => assignCluster(t.categories)))`.

#### BUG-15: No loading indicator when fetching node details
- **Severity:** LOW
- **Reproduction:** Click a node -> Preview popover -> DETAILS. If the node hasn't been fetched yet (`!node.extract`), `showNodeDetail` makes an API call to `fetchNodeSummary`. During this fetch, there's no loading indicator — the UI freezes momentarily then the overlay appears.
- **Fix needed:** Show a loading state in the overlay (or a spinner) while the detail fetch is in progress.

#### BUG-16: Popover positioned off-screen for nodes near canvas edge
- **Severity:** LOW
- **Reproduction:** Click a node near the right edge of the visible graph area. The popover appears at `x + 76, y - 28` by default and attempts to reposition, but the repositioning logic uses `getBoundingClientRect` after the initial render, causing a brief flash at the wrong position before correcting.
- **Root cause:** `PreviewPopover.jsx` sets offset in a `useEffect` after mount, so the first frame shows the popover at the uncorrected position.
- **Fix needed:** Calculate the correct offset before render, or use `visibility: hidden` until the position is computed.

---

## Report 5: Making Navigation Feel Natural Yet Structured

*Focus: How jumping, graph accumulation, and navigation should feel organic during casual exploration but stay structured and readable as complexity grows.*

### Problem: The Graph Feels Like a Database, Not an Exploration

Currently, every node ever visited stays on screen forever. After 5-6 jumps across different topics (e.g., Python -> APL -> ALGOL -> Black hole -> Music), the graph becomes a dense web of 45+ nodes where unrelated domains overlap. The user can't distinguish "my current exploration cluster" from "stuff I looked at 10 minutes ago." The graph accumulates but doesn't organize.

### Principle 1: Organic Proximity — Related Things Should Feel Close

**Current state:** New primary nodes fan out in a semicircle from the center based on a density-avoidance algorithm. The direction is smart (away from parent), but nodes have no semantic grouping. "Wave function" and "Schrodinger's cat" might end up on opposite sides of the center.

**What to improve:**
- **Cluster by relation type:** Core connections should orbit closer to center than "related" or "application" connections. Use the `strength` value (1-3) to influence distance: strength 3 = close orbit (180px), strength 1 = far orbit (350px). This creates natural concentric rings.
- **Angular grouping by category:** If multiple connections share categories (e.g., both are "Physics" concepts), place them in the same angular sector. This creates visible clusters even without explicit cluster boundaries.
- **Organic jitter:** Add small random offsets (+-15px) to prevent perfectly circular patterns. Perfect geometry feels mechanical; slight imperfection feels organic.

### Principle 2: Graceful Aging — Old Nodes Should Fade Into Constellation

**Current state:** Old nodes become `trail`/`dormant` with reduced opacity and increased repulsion, but they maintain their full size and edge connections. After many jumps, the graph looks like a spider web with threads going everywhere.

**What to improve:**
- **Size reduction with age:** Trail nodes at hopDistance 2+ should shrink (68px -> 48px -> 36px). Dormant nodes similarly. This naturally de-emphasizes old content while keeping it accessible.
- **Edge simplification:** After 2 hops, convert detailed curved edges to simple straight dotted lines. Remove particle animations from non-active edges. After 4 hops, hide edges entirely (the nodes become standalone landmarks).
- **Constellation mode:** When nodes are 3+ hops old, treat them as "constellation" markers — very small dots (12-16px) with just a label tooltip on hover. They're still clickable but don't dominate the visual space. This lets the user see their exploration history as a starfield pattern.
- **Automatic cleanup option:** Add a "Focus mode" toggle that hides all nodes beyond hopDistance 2, giving a clean view of just the current neighborhood. Toggling it off reveals the full accumulated graph.

### Principle 3: Camera Should Follow the Story

**Current state:** The camera auto-pans to center the new center node, which works. But panning is abrupt when the new center is far from the old one (e.g., jumping from a trail node on the opposite side of the graph).

**What to improve:**
- **Smooth pursuit camera:** Instead of snapping to the new center, animate along a curved path from old center to new center over 600ms. This gives the user a sense of spatial movement — "I traveled from here to there."
- **Zoom-to-fit on complexity thresholds:** When the graph exceeds 30 active nodes, automatically zoom out slightly so more context is visible. When it drops below 15 (after focus mode), zoom back in.
- **Contextual framing:** After a jump settles, slightly adjust the camera to frame both the center and its primary connections in the viewport, rather than strictly centering the center node.

### Principle 4: Navigation Should Feel Like Exploring, Not Clicking

**Current state:** Jump = click popover button. Back = click Back button. The interactions are functional but feel transactional.

**What to improve:**
- **Double-click to jump:** Allow double-clicking a node to jump directly, bypassing the popover. Single click still shows the popover for deliberate exploration. This makes rapid exploration feel fluid.
- **Hover preview:** When hovering over a node for 800ms+, show a lightweight tooltip with the first sentence of the description. No need to click for basic info.
- **Drag-to-connect (stretch goal):** Let users drag from one node to another to see if a Wikipedia connection exists between them. If it does, highlight the path; if not, show "No direct connection."
- **Trail breadcrumb as interactive timeline:** Replace the horizontal breadcrumb with a vertical mini-timeline on the left edge showing the last 3-4 entries. Each entry shows a small icon (based on domain) and the title. Clicking navigates properly via history (not forward jump).

### Principle 5: Structure Should Emerge, Not Be Imposed

**Current state:** Cluster ellipses and category labels are drawn around node groups, but the clusters are based on a keyword heuristic that often assigns "Unknown." The structure feels forced.

**What to improve:**
- **Let structure emerge from connections:** Instead of imposing category clusters, let the graph's own topology create visible structure. Nodes connected by more edges will naturally cluster together via the force simulation. Strengthen the link force for same-category nodes.
- **Domain boundaries as atmosphere, not lines:** Instead of explicit ellipse borders, use subtle background color gradients that fade out from cluster centers. If 3+ Science nodes are near each other, the background in that region gets a very faint blue tint. This creates "neighborhoods" without rigid borders.
- **Progressive detail:** At low zoom, show only node labels. At medium zoom, show relation types on edges. At high zoom, show descriptions and strength indicators. This keeps the graph clean at overview level but detailed when you look closely.

### Principle 6: The Left Panel Should Breathe With the Graph

**Current state:** The left panel (ConceptPanel) is a fixed 500px sidebar that's independent of the graph. Scrolling the panel has no effect on the graph and vice versa.

**What to improve:**
- **Highlight on hover sync:** When hovering over a connection card in the left panel, highlight the corresponding node on the graph (add a temporary glow or border pulse). When hovering a node on the graph, scroll the left panel to show that connection's card.
- **Scroll-to-node:** When the user scrolls down to a connected concept card in the panel, the graph should subtly pan to keep that node visible.
- **Collapsible panel:** Allow the left panel to collapse to a thin strip (just showing the concept title and a few icons), giving more space to the graph for exploration-heavy sessions. A keyboard shortcut (e.g., `[`) toggles this.

### Summary of Priority Actions

| Priority | Action | Impact |
|----------|--------|--------|
| 1 | Shrink old nodes progressively (size + edge simplification) | Dramatically reduces visual clutter |
| 2 | Add hover preview tooltip (800ms delay, first sentence) | Makes exploration feel lightweight |
| 3 | Cluster primary nodes by strength (concentric distance) | Creates natural visual hierarchy |
| 4 | Add "Focus mode" toggle to hide 3+ hop nodes | Instant declutter for complex graphs |
| 5 | Double-click to jump | Faster exploration flow |
| 6 | Sync panel hover with graph highlight | Connects the two halves of the UI |
| 7 | Smooth pursuit camera on jump | Spatial storytelling |
| 8 | Progressive edge simplification | Reduces spider-web effect |

---

## Report 6: Implementation Plan — Making Navigation Feel Natural Yet Structured

*Self-contained implementation guide. No prior conversation context required. Read CLAUDE.md for project overview.*

This plan implements 8 features from Report 5 across 7 ordered steps. Each feature specifies exact files, line-level locations, current code, and replacement code. The implementation order minimizes merge conflicts and builds features incrementally.

### Project Context (Quick Reference)

- **Stack:** React 18 + Vite, CSS Modules, d3-force for graph physics
- **State:** `ExplorerContext.jsx` uses `useReducer` with actions dispatched via `useCallback` wrappers
- **Graph layout:** `useForceLayout.js` — runs d3 `forceSimulation` with `forceLink`, `forceCollide`, `forceX`, `forceY` (no `forceManyBody`)
- **Node types:** `center` (current), `primary` (direct connections), `secondary` (sub-links, hexagonal), `trail` (old centers), `dormant` (old primaries)
- **`hopDistance`:** Tracks how many jumps ago a node was active. 0 = current, 1 = one jump ago, capped at 4. Drives opacity, repulsion, visual prominence.
- **Edges:** SVG quadratic bezier paths with animated particles on active edges. Rendered in `KnowledgeGraph.jsx` via `renderedEdges` useMemo.
- **Camera:** CSS `transform: translate(...)` on the canvas div. `isAutoPanning` flag triggers CSS transition for smooth movement.
- **No zoom is implemented** — only panning exists.

### Current Node Sizes (GraphNode.jsx line 67)

```js
const size = isCenter ? 96 : isSecondary ? 48 : isDormant ? 56 : 68;
```

### Current Collision Radii (useForceLayout.js lines 343-349)

```js
.force('collide', forceCollide().radius((d) => {
  if (d.type === 'center') return 80;
  if (d.type === 'primary') return 60;
  if (d.type === 'trail') return 50;
  if (d.type === 'dormant') return 46;
  return 36; // secondary
}).strength(0.9).iterations(2))
```

### Current Primary Node Spawn Radius (useForceLayout.js lines 251-261)

```js
if (n.type === 'primary') {
  radius = 280 + densityBonus + hopDist * 40 + (Math.random() - 0.5) * 40;
  const fanSpread = Math.PI * 0.9;
  if (primaryCount > 1 && primaryIdx >= 0) {
    const t = primaryIdx / (primaryCount - 1);
    nodeAngle = spawnAngle + (t - 0.5) * fanSpread;
  } else {
    nodeAngle = spawnAngle + (Math.random() - 0.5) * fanSpread;
  }
}
```

### Current Link Distances (useForceLayout.js lines 315-319)

```js
.distance((d) => {
  if (d.edgeType === 'trail') return 500;
  if (d.edgeType === 'secondary') return 90;
  return 280;
})
```

### Current Edge Rendering (KnowledgeGraph.jsx lines 256-309)

Edges use quadratic bezier curves with a glow layer, main stroke, and animated particle circles on active edges. `edgeOpacity` is computed from `sourceNode.hopDistance` (0→1, 1→0.6, 2+→0.3). Particles only render on edges connected to `centerNodeId`.

### Current Click Handler (KnowledgeGraph.jsx lines 205-208)

```js
function handleNodeClick(node) {
  if (node.type === 'center') return;
  setPreview(node);
}
```

### Current Auto-Pan (KnowledgeGraph.jsx lines 112-140)

On concept change, computes target pan to center the new center node, sets `isAutoPanning = true`, applies CSS `transition: transform 0.5s ease-out` for 600ms.

### Current ExplorerContext State (ExplorerContext.jsx lines 33-48)

```js
const initialState = {
  currentConcept: null, trail: [], trailIndex: -1, graphData: null,
  loading: false, enriching: false, enriched: false, error: null,
  trailOpen: false, journeyOpen: false, previewNode: null,
  expandedNode: null, detailLoading: false, prevCenterTitle: null,
};
```

### Current ConnectedConcepts Card (ConnectedConcepts.jsx lines 22-43)

Each card is a `<div className={styles.card}>` with strength dots, relation label, title, description, and Jump/Preview actions. No hover handlers.

### Current GraphNode Memo (GraphNode.jsx lines 146-153)

```js
export default memo(GraphNode, (prev, next) => {
  return prev.x === next.x && prev.y === next.y &&
    prev.focused === next.focused &&
    prev.node.type === next.node.type &&
    prev.node.id === next.node.id &&
    prev.node.visited === next.node.visited &&
    prev.node.hopDistance === next.node.hopDistance;
});
```

---

### STEP 1: Progressive Node Shrinking + Edge Simplification

*Files: `GraphNode.jsx`, `GraphNode.module.css`, `useForceLayout.js`, `KnowledgeGraph.jsx`*

These two features are tightly coupled — both key off `hopDistance`.

#### 1A. Node Shrinking

**`client/src/components/KnowledgeGraph/GraphNode.jsx`**

Replace the fixed size line (line 67):
```js
const size = isCenter ? 96 : isSecondary ? 48 : isDormant ? 56 : 68;
```
with a function that shrinks trail/dormant nodes with hopDistance:
```js
function getNodeSize(type, hopDistance) {
  if (type === 'center') return 96;
  if (type === 'secondary') return 48;
  if (type === 'primary') return 68;
  // Trail/dormant shrink with age: hop 1→56, 2→44, 3+→28 (constellation)
  const hop = Math.min(hopDistance || 0, 3);
  return [56, 56, 44, 28][hop];
}
```
Call it: `const size = getNodeSize(node.type, node.hopDistance);`

**Constellation mode for hop 3+ trail/dormant nodes:** Before the secondary/circle rendering block (around line 104), add an early return:
```jsx
const isConstellation = (isTrail || isDormant) && (node.hopDistance || 0) >= 3;

if (isConstellation) {
  return (
    <div
      className={`${styles.node} ${styles.constellation}`}
      style={{
        left: x - half, top: y - half, width: size, height: size, opacity,
        '--node-border': colors.border, '--node-fill': colors.fill,
      }}
      onClick={handleClick}
      data-node-id={node.id}
    >
      <div className={styles.constellationDot} />
      <div className={`${styles.nodeLabel} ${styles.labelSmall}`}>{node.label}</div>
    </div>
  );
}
```

**`client/src/components/KnowledgeGraph/GraphNode.module.css`**

Add after the `.trailDot` block (end of file):
```css
/* ─── Constellation mode (hop 3+ aged nodes) ─── */
.constellation {
  transition: opacity 0.5s ease, transform 0.3s;
}
.constellation:hover {
  transform: scale(1.8);
  opacity: 0.9 !important;
  z-index: 12;
}
.constellationDot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--node-fill, rgba(0, 30, 50, 0.6));
  border: 1px solid var(--node-border, rgba(0, 212, 255, 0.3));
  opacity: 0.5;
  transition: opacity 0.3s;
}
.constellation:hover .constellationDot {
  opacity: 0.9;
  box-shadow: 0 0 12px var(--node-border);
}
```

**`client/src/components/KnowledgeGraph/useForceLayout.js`**

Update `forceCollide` radius (lines 343-349) to match new sizes:
```js
.force('collide', forceCollide().radius((d) => {
  if (d.type === 'center') return 80;
  if (d.type === 'primary') return 60;
  if (d.type === 'secondary') return 36;
  const hop = d.hopDistance || 0;
  if (hop >= 3) return 20;
  if (hop >= 2) return 32;
  return 46;
}).strength(0.9).iterations(2))
```

#### 1B. Edge Simplification

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

In the `renderedEdges` useMemo (starting at line 256), change the edge rendering logic. After computing `source` and `target` positions and doing viewport culling, add hop-based edge aging:

```js
// Compute max hop of the two endpoints
const sourceNode = nodeMap[edge.source];
const targetNode = nodeMap[edge.target];
const maxHop = Math.max(sourceNode?.hopDistance || 0, targetNode?.hopDistance || 0);

// Hop 4+: hide edge entirely
if (maxHop >= 4) return null;

const dx = target.x - source.x;
const dy = target.y - source.y;

// Hop 2+: straight line instead of curve
const isAged = maxHop >= 2;
const path = isAged
  ? `M ${source.x} ${source.y} L ${target.x} ${target.y}`
  : `M ${source.x} ${source.y} Q ${source.x + dx * 0.5 + dy * 0.12} ${source.y + dy * 0.5 - dx * 0.12} ${target.x} ${target.y}`;

const color = COLOR_HEX[edge.color] || '#00d4ff';
const isTrail = edge.type === 'trail';
const isSecondary = edge.type === 'secondary';
const isActiveEdge = !isSecondary && !isAged && (edge.source === centerNodeId || edge.target === centerNodeId);

// Opacity and width degrade with hop distance
let strokeWidth, strokeOpacity, dashArray;
if (maxHop >= 3) {
  strokeWidth = 0.4;
  strokeOpacity = 0.08;
  dashArray = '1 5';
} else if (maxHop >= 2) {
  strokeWidth = 0.6;
  strokeOpacity = 0.15;
  dashArray = '3 6';
} else {
  strokeWidth = isTrail ? 1.8 : isSecondary ? 0.6 : 1;
  strokeOpacity = isTrail ? 0.5 : isSecondary ? 0.15 : 0.3;
  dashArray = isTrail ? '8 5' : isSecondary ? '2 4' : 'none';
}

return (
  <g key={`${edge.source}-${edge.target}-${i}`} className={styles.edgeGroup}>
    {/* Glow layer — only for active (hop 0-1) edges */}
    {!isAged && (
      <path d={path} fill="none" stroke={color}
        strokeWidth={isTrail ? 8 : isSecondary ? 3 : 5}
        opacity={isTrail ? 0.06 : 0.04} filter="url(#edgeGlow)" />
    )}
    {/* Main edge */}
    <path d={path} fill="none" stroke={color}
      strokeWidth={strokeWidth} opacity={strokeOpacity}
      strokeLinecap="round" strokeDasharray={dashArray} />
    {/* Particles only on active edges (hop 0, connected to center) */}
    {isActiveEdge && (
      <>
        <circle r={1.2} fill="#fff" opacity={0.6}>
          <animateMotion dur="4s" repeatCount="indefinite" path={path} />
        </circle>
        <circle r={0.8} fill={color} opacity={0.5}>
          <animateMotion dur="5s" repeatCount="indefinite" path={path} begin="1s" />
        </circle>
      </>
    )}
  </g>
);
```

Remove the old `edgeOpacity` variable and `opacity={edgeOpacity}` from the `<g>` tag — opacity is now applied per-path.

---

### STEP 2: Strength-Based Concentric Clustering

*Files: `useForceLayout.js`*

**`client/src/components/KnowledgeGraph/useForceLayout.js`**

Replace the primary node radius calculation (lines 251-261):
```js
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
}
```

Update link distance (lines 315-319):
```js
.distance((d) => {
  if (d.edgeType === 'trail') return 500;
  if (d.edgeType === 'secondary') return 90;
  const str = d.strength || 1;
  return str === 3 ? 180 : str === 2 ? 260 : 350;
})
```

No other files change. The force simulation naturally positions stronger connections closer.

---

### STEP 3: Focus Mode Toggle

*Files: `ExplorerContext.jsx`, `KnowledgeGraph.jsx`, `KnowledgeGraph.module.css`*

**`client/src/context/ExplorerContext.jsx`**

Add to `initialState` (line 33):
```js
focusMode: false,
```

Add case to `reducer` (after `TOGGLE_JOURNEY` case, around line 349):
```js
case 'TOGGLE_FOCUS':
  return { ...state, focusMode: !state.focusMode };
```

Add callback in `ExplorerProvider` (after `toggleJourney`):
```js
const toggleFocus = useCallback(() => dispatch({ type: 'TOGGLE_FOCUS' }), []);
```

Add `toggleFocus` to the context `value` object (line 504) and expose `focusMode` (already spread via `...state`).

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Destructure `focusMode` and `toggleFocus` from `useExplorer()` at line 38.

In node rendering (around line 445), add focus filter:
```jsx
// After viewport culling check
if (focusMode && (node.hopDistance || 0) >= 3 && node.type !== 'center') return null;
```

In `renderedEdges` useMemo, add at the top of the map callback:
```js
// Focus mode: hide edges to distant nodes
if (focusMode) {
  const sn = nodeMap[edge.source];
  const tn = nodeMap[edge.target];
  if ((sn?.hopDistance || 0) >= 3 || (tn?.hopDistance || 0) >= 3) return null;
}
```

Add `focusMode` to the dependency arrays of both `renderedEdges` and the node rendering section.

Add a toggle button near the KNOWLEDGE GRAPH label (around line 393):
```jsx
<button className={styles.focusBtn} onClick={toggleFocus}>
  {focusMode ? 'SHOW ALL' : 'FOCUS'}
</button>
```

**`client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`**

Add `.focusBtn` style:
```css
.focusBtn {
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 30;
  padding: 6px 14px;
  font-size: 10px;
  font-weight: 700;
  font-family: var(--font-display, 'Outfit', sans-serif);
  letter-spacing: 0.12em;
  color: rgba(0, 212, 255, 0.6);
  background: rgba(0, 212, 255, 0.04);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.focusBtn:hover {
  background: rgba(0, 212, 255, 0.1);
  border-color: rgba(0, 212, 255, 0.35);
  color: rgba(0, 212, 255, 0.9);
}
```

---

### STEP 4: Hover Preview Tooltip

*Files: `KnowledgeGraph.jsx`, `KnowledgeGraph.module.css`*

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Add state and ref at the top of the component (after existing state declarations around line 46):
```js
const [hoverTooltip, setHoverTooltip] = useState(null);
const hoverTimerRef = useRef(null);
```

On each node wrapper div (around line 452), add hover handlers:
```jsx
<div
  key={node.id}
  data-node
  onMouseEnter={() => {
    if (node.type === 'center') return;
    hoverTimerRef.current = setTimeout(() => {
      const firstSentence = (node.description || '').split('. ')[0];
      if (firstSentence) {
        setHoverTooltip({ id: node.id, text: firstSentence + '.', x: pos.x, y: pos.y });
      }
    }, 800);
  }}
  onMouseLeave={() => {
    clearTimeout(hoverTimerRef.current);
    setHoverTooltip(null);
  }}
>
```

In `handleNodeClick`, clear the tooltip:
```js
function handleNodeClick(node) {
  clearTimeout(hoverTimerRef.current);
  setHoverTooltip(null);
  if (node.type === 'center') return;
  setPreview(node);
}
```

Render the tooltip inside the canvas div, after nodes but before PreviewPopover (around line 462):
```jsx
{hoverTooltip && positions[hoverTooltip.id] && !previewNode && (
  <div className={styles.hoverTooltip} style={{
    left: positions[hoverTooltip.id].x,
    top: positions[hoverTooltip.id].y - 50,
    transform: 'translateX(-50%)',
  }}>
    {hoverTooltip.text}
  </div>
)}
```

**`client/src/components/KnowledgeGraph/KnowledgeGraph.module.css`**

Add:
```css
.hoverTooltip {
  position: absolute;
  max-width: 220px;
  padding: 8px 12px;
  background: rgba(12, 16, 28, 0.95);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: 6px;
  font-size: 11px;
  color: rgba(200, 210, 225, 0.7);
  font-family: var(--font-body, 'Outfit', sans-serif);
  line-height: 1.5;
  pointer-events: none;
  z-index: 15;
  white-space: normal;
  animation: tooltipFadeIn 0.15s ease;
}
@keyframes tooltipFadeIn {
  from { opacity: 0; transform: translateX(-50%) translateY(4px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}
```

---

### STEP 5: Double-Click to Jump

*Files: `KnowledgeGraph.jsx`*

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Destructure `jumpTo` and `clearPreview` from `useExplorer()` at line 38 (add them to the existing destructuring — `jumpTo` may not be there yet, `clearPreview` is not currently destructured).

Add a ref for click discrimination (near other refs):
```js
const clickTimerRef = useRef(null);
```

Replace `handleNodeClick` (lines 205-208):
```js
function handleNodeClick(node) {
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
```

Add to the hint text (line 394):
```jsx
<div className={styles.hint}>TAB cycle &middot; ENTER preview &middot; DBL-CLICK jump &middot; ESC close &middot; drag to pan</div>
```

---

### STEP 6: Panel-Graph Hover Sync

*Files: `ExplorerContext.jsx`, `ConnectedConcepts.jsx`, `GraphNode.jsx`, `GraphNode.module.css`, `KnowledgeGraph.jsx`*

This is the most cross-cutting feature. Two directions: panel→graph highlight, and graph→panel scroll.

#### 6A. State Setup

**`client/src/context/ExplorerContext.jsx`**

Add to `initialState`:
```js
highlightedNodeId: null,
```

Add reducer cases (after `CLEAR_PREVIEW`):
```js
case 'SET_HIGHLIGHT':
  return { ...state, highlightedNodeId: action.payload };
case 'CLEAR_HIGHLIGHT':
  return { ...state, highlightedNodeId: null };
```

Add callbacks in `ExplorerProvider`:
```js
const setHighlight = useCallback((nodeId) => dispatch({ type: 'SET_HIGHLIGHT', payload: nodeId }), []);
const clearHighlight = useCallback(() => dispatch({ type: 'CLEAR_HIGHLIGHT' }), []);
```

Add `setHighlight` and `clearHighlight` to the context `value` object.

#### 6B. Panel → Graph (hover card highlights node)

**`client/src/components/ConceptPanel/ConnectedConcepts.jsx`**

Destructure `setHighlight` and `clearHighlight` from `useExplorer()`.

Add hover handlers to each card div:
```jsx
<div
  key={conn.title}
  className={styles.card}
  data-node-id={conn.title}
  onMouseEnter={() => setHighlight(conn.title)}
  onMouseLeave={() => clearHighlight()}
>
```

#### 6C. Graph Node Highlight Rendering

**`client/src/components/KnowledgeGraph/GraphNode.jsx`**

Add `highlighted` prop to function signature:
```js
function GraphNode({ node, x, y, onClick, focused, highlighted }) {
```

Add `${highlighted ? styles.highlighted : ''}` to the className of the `.node` div (line 115):
```jsx
className={`${styles.node} ${focused ? styles.focused : ''} ${highlighted ? styles.highlighted : ''} ${isSecondary ? styles.hexNode : styles.circleNode}`}
```

Also apply to constellation nodes if applicable:
```jsx
className={`${styles.node} ${styles.constellation} ${highlighted ? styles.highlighted : ''}`}
```

Update memo (line 146):
```js
export default memo(GraphNode, (prev, next) => {
  return prev.x === next.x && prev.y === next.y &&
    prev.focused === next.focused &&
    prev.highlighted === next.highlighted &&
    prev.node.type === next.node.type &&
    prev.node.id === next.node.id &&
    prev.node.visited === next.node.visited &&
    prev.node.hopDistance === next.node.hopDistance;
});
```

**`client/src/components/KnowledgeGraph/GraphNode.module.css`**

Add:
```css
/* ─── Highlight sync (panel hover) ─── */
.highlighted {
  z-index: 15 !important;
  opacity: 1 !important;
  transform: scale(1.2);
}
.highlighted .circle,
.highlighted .hex {
  box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.6), 0 0 30px rgba(0, 212, 255, 0.2);
}
.highlighted .constellationDot {
  opacity: 1;
  box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.6), 0 0 20px rgba(0, 212, 255, 0.3);
}
```

#### 6D. Graph → Panel (hover node scrolls panel)

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Destructure `highlightedNodeId`, `setHighlight`, `clearHighlight` from `useExplorer()`.

Pass `highlighted` prop to GraphNode:
```jsx
<GraphNode
  node={node} x={pos.x} y={pos.y}
  onClick={handleNodeClick}
  focused={navIdx >= 0 && navIdx === focusedIdx}
  highlighted={highlightedNodeId === node.id}
/>
```

On the node wrapper div's `onMouseEnter` (same div that already has hover tooltip logic from Step 4), also call `setHighlight`:
```jsx
onMouseEnter={() => {
  setHighlight(node.id);
  if (node.type === 'center') return;
  hoverTimerRef.current = setTimeout(() => { /* tooltip logic */ }, 800);
}}
onMouseLeave={() => {
  clearHighlight();
  clearTimeout(hoverTimerRef.current);
  setHoverTooltip(null);
}}
```

**`client/src/components/ConceptPanel/ConnectedConcepts.jsx`**

Destructure `highlightedNodeId` from `useExplorer()`.

Add a `useEffect` + `useRef` for auto-scroll:
```jsx
import { useRef, useEffect } from 'react';

const gridRef = useRef(null);

useEffect(() => {
  if (!highlightedNodeId || !gridRef.current) return;
  const card = gridRef.current.querySelector(`[data-node-id="${CSS.escape(highlightedNodeId)}"]`);
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}, [highlightedNodeId]);
```

Add `ref={gridRef}` to the `.grid` div.

---

### STEP 7: Smooth Pursuit Camera

*Files: `KnowledgeGraph.jsx`*

**`client/src/components/KnowledgeGraph/KnowledgeGraph.jsx`**

Replace the auto-pan `useEffect` (lines 112-140). The key change: when the distance between old and new pan positions is large (>200px), route through a curved midpoint for spatial storytelling.

```js
useEffect(() => {
  if (!currentConcept || !graphData) return;
  const centerNode = graphData.nodes.find((n) => n.type === 'center');
  if (!centerNode || !positions[centerNode.id]) return;

  const conceptChanged = lastPanState.current.concept !== currentConcept.title;
  const canvasChanged = lastPanState.current.cw !== canvasSize.width ||
                        lastPanState.current.ch !== canvasSize.height;

  if (!conceptChanged && !canvasChanged) return;

  const oldConcept = lastPanState.current.concept;
  lastPanState.current = { concept: currentConcept.title, cw: canvasSize.width, ch: canvasSize.height };
  const pos = positions[centerNode.id];
  const targetPanX = -(pos.x - canvasSize.width / 2);
  const targetPanY = -(pos.y - canvasSize.height / 2);

  if (conceptChanged) {
    setIsAutoPanning(true);

    // Compute distance for curve decision
    const dx = targetPanX - pan.x;
    const dy = targetPanY - pan.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 200) {
      // Curved path: route through perpendicular midpoint
      const midX = pan.x + dx * 0.5 + dy * 0.15;
      const midY = pan.y + dy * 0.5 - dx * 0.15;
      setPan({ x: midX, y: midY });
      const t1 = setTimeout(() => setPan({ x: targetPanX, y: targetPanY }), 300);
      const t2 = setTimeout(() => setIsAutoPanning(false), 700);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      setPan({ x: targetPanX, y: targetPanY });
      const t = setTimeout(() => setIsAutoPanning(false), 600);
      return () => clearTimeout(t);
    }
  } else {
    setPan({ x: targetPanX, y: targetPanY });
  }
}, [currentConcept?.title, positions, canvasSize.width, canvasSize.height]);
```

Update the pan transition style (line 323):
```js
const panTransition = isAutoPanning
  ? 'transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)'
  : isPanning ? 'none' : 'transform 0.08s ease-out';
```

---

### Features Intentionally Excluded

These were mentioned in Report 5 but excluded from this plan due to scope/complexity:

| Feature | Why excluded |
|---------|-------------|
| Drag-to-connect | Report 5 marked as stretch goal. Complex gesture system, low priority. |
| Vertical mini-timeline | Replaces BacktrackBar entirely. Current BacktrackBar + TrailSidebar already cover this. |
| Domain boundary gradients | Cosmetic. Current cluster ellipses work. Can be a follow-up. |
| Progressive zoom-level detail | Requires implementing zoom (only pan exists). Large architectural change. |
| Zoom-to-fit on node count | Also requires zoom implementation. |
| Collapsible left panel | Nice-to-have but orthogonal to "natural + structured" goal. Simple to add separately. |
| Scroll-to-node (panel scroll → graph pan) | Requires scroll event debouncing. The reverse direction (graph→panel) is included. |

---

### Testing Checklist

After each step, verify:

- [ ] **Step 1:** Jump 5-6 times. Oldest nodes should be tiny dots (constellation). Edges to them should be thin dotted or invisible. New primary nodes remain full-size 68px circles.
- [ ] **Step 2:** After a jump, strength-3 (core) connections should cluster closer to center (~180px) than strength-1 (related, ~350px).
- [ ] **Step 3:** Click FOCUS button. Nodes with hopDistance 3+ disappear along with their edges. Click SHOW ALL to restore them.
- [ ] **Step 4:** Hover a non-center node for ~1 second. A small tooltip with the first sentence of its description appears. Moving away dismisses it. Clicking a node dismisses it and shows the popover.
- [ ] **Step 5:** Double-click a node. It should jump directly without showing the popover. Single-click should still show the popover after a 250ms delay.
- [ ] **Step 6:** Hover a connection card in the left panel — the corresponding graph node should glow. Hover a graph node — the left panel should scroll to show that connection's card.
- [ ] **Step 7:** Jump to a distant trail node. Camera should arc smoothly (slight curve) instead of moving in a straight line. Short-distance jumps should move normally.

---

*End of Report 6. This plan is fully self-contained — no prior conversation context needed.*
