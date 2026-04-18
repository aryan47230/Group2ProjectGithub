# Brancher (Group 10) — Project Context for Claude

## What This Project Is

Brancher is a unified React + Node/Express web app that combines two learning tools:

1. **Skill Tree Generator** — Enter a topic, Gemini generates a prerequisite learning tree with descriptions, tips, key concepts, outcomes, common mistakes, and curated resources. Users can save trees (requires auth).
2. **Wiki Hopper** (aka Wiki Loop / concept explorer) — Explore Wikipedia concepts through an interactive knowledge graph. Search a concept → get a visual overview → see connected concepts on a force-directed graph → click to preview or jump. Optional AI Enrich replaces Wikipedia's algorithmic connections with Gemini-curated topics.

Authenticated users can save skill trees to Supabase. The two tools share auth, a unified top nav, and a consistent design system.

## Tech Stack

- **Frontend:** React 18 (Vite) with React Router, CSS Modules, d3-force for graph layout, three.js for visual effects
- **Backend:** Node/Express (ESM, `type: "module"`), port **3000**, single entry (`server.js`)
- **APIs:** Wikipedia REST API (primary data source), Google Gemini API (`gemini-2.5-flash`)
- **Database:** Supabase (users + saved skill trees)
- **Auth:** express-session + bcryptjs
- **State:** React Context + useReducer (`ExplorerContext`, `SkillTreeContext`, `AuthContext`)
- **Fonts:** Outfit (display) + JetBrains Mono (data/mono)

## Running the App

From the **`Project/`** directory:

```bash
# First time only
npm install
cd client && npm install && cd ..

# Dev — run server and client separately
npm start                    # server on http://localhost:3000
cd client && npm run dev     # Vite dev server on http://localhost:5173

# Production — build client then run server (single port)
cd client && npm run build && cd ..
# (The Vite build output should be copied/served from Project/public)
npm start                    # serves API + SPA at http://localhost:3000
```

The server serves `public/` as the SPA and falls back to `public/index.html` for any unmatched route so React Router handles client-side routing.

## Environment

Create `Project/.env`:

```
GEMINI_API_KEY=your_key_here
SESSION_SECRET=change_this_to_a_random_string
SUPABASE_URL=https://<your-project>.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

- Get a free Gemini key at https://aistudio.google.com/app/apikey
- Supabase project needs `users` and `skill_trees` tables — see `db.js` for schema expectations.

## Project Structure

```
Project/
├── server.js                 # Express entry — loads .env, auth, session, routes
├── db.js                     # Supabase client + user/tree CRUD
├── package.json              # server deps (express, supabase, bcrypt, etc.)
├── .env                      # secrets (gitignored)
├── public/                   # built SPA — served by Express
├── routes/
│   └── concepts.js           # GET search, GET :title, POST :title/enrich, GET :title/links
├── services/
│   ├── wikipedia.js          # Wikipedia API — search, article, links, image, sections, batch extracts
│   ├── wikiGemini.js         # Gemini — picks 8 most relevant Wikipedia connections on-demand
│   └── algorithmic.js        # Default — ranks connections via bidirectional link scoring
└── client/                   # React app (Vite)
    ├── package.json          # client deps (react, react-router-dom, d3-force, three)
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx           # Routes: /, /skill-tree, /explore
        ├── main.jsx
        ├── context/
        │   ├── AuthContext.jsx        # login / register / logout / session
        │   ├── SkillTreeContext.jsx   # skill tree state + saved trees
        │   └── ExplorerContext.jsx    # Wiki Hopper state (reducer)
        ├── routes/
        │   ├── SkillTreeRoute.jsx     # Skill Tree landing + tree view
        │   └── ExploreRoute.jsx       # Wiki Hopper shell (with ?q= auto-jump)
        ├── components/
        │   ├── AppHeader/             # Unified top nav (logo, sign in / sign up / user menu)
        │   ├── Auth/                  # AuthModal — login + register forms
        │   ├── LauncherScreen/        # Initial landing / loading screen
        │   ├── ImportBanner/          # Prompt to import/save from anon → account
        │   ├── KeyboardHelp/          # Keyboard shortcut overlay
        │   ├── SkillTree/             # Skill Tree prompt view, tree view, graph
        │   ├── Topbar/                # Wiki Hopper search bar + controls
        │   ├── ConceptPanel/          # Wiki Hopper left panel (hero card, facts, sections, connections)
        │   ├── KnowledgeGraph/        # Wiki Hopper graph (d3-force, SVG edges, node overlay)
        │   ├── TrailSidebar/          # Wiki Hopper trail history
        │   ├── JourneyOverlay/        # Full-screen journey map
        │   └── ErrorBoundary.jsx
        ├── utils/
        │   ├── api.js                 # client-side fetch wrappers
        │   └── clusters.js
        └── styles/                    # globals.css + design tokens
```

## API Endpoints

### Auth (`server.js`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/me` | Current session user (or `null`) |
| POST | `/api/register` | Create account — `{ username, password }` |
| POST | `/api/login` | Log in — `{ username, password }` |
| POST | `/api/logout` | Destroy session |

### Skill Trees (`server.js`, auth required)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/trees` | List current user's saved trees |
| POST | `/api/trees` | Upsert a tree — `{ topic, nodes, completed }` |
| DELETE | `/api/trees/:topic` | Delete a saved tree |
| POST | `/api/skill-tree` | Generate a new tree from Gemini — `{ topic }` (public) |

### Wiki Hopper (`routes/concepts.js`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/concepts/search?q=...` | Wikipedia search |
| GET | `/api/concepts/:title` | Full concept data (pure Wikipedia) |
| POST | `/api/concepts/:title/enrich` | Gemini replaces connections with curated picks |
| GET | `/api/concepts/:title/links` | Lightweight links for second-layer nodes |

### Concept Response Shape (`GET /api/concepts/:title`)

```json
{
  "title": "Quantum mechanics",
  "extract": "Full Wikipedia intro text...",
  "image": "https://upload.wikimedia.org/...",
  "sections": [{ "index": "1", "heading": "History", "level": 1 }],
  "categories": ["Quantum mechanics", "Physics"],
  "wikiUrl": "https://en.wikipedia.org/wiki/Quantum_mechanics",
  "summary": "First 2 sentences from Wikipedia extract.",
  "facts": [
    { "label": "Category", "value": "Quantum mechanics" },
    { "label": "Also known as", "value": "..." },
    { "label": "Related topics", "value": "50 connected articles" },
    { "label": "Sections", "value": "12 Wikipedia sections" }
  ],
  "connections": [
    { "title": "Wave function", "strength": 3, "relation": "related", "description": "2-sentence Wikipedia extract" }
  ]
}
```

### Enrich Response Shape (`POST /api/concepts/:title/enrich`)

```json
{
  "connections": [
    { "title": "Wave function", "relation": "core", "strength": 3, "description": "Wikipedia extract..." }
  ]
}
```

## Data Strategy (important)

**Wikipedia provides:** summary, facts, sections, connections (via algorithmic ranking), connection descriptions (via batch `getShortExtracts`)

**Gemini provides (Wiki Hopper):** curated connection replacement ONLY (on-demand via Enrich button)

**Gemini provides (Skill Tree):** full skill tree generation (nodes, descriptions, tips, key concepts, outcomes, common mistakes, resources)

The Wiki Hopper works fully without Gemini. When the user clicks "Enrich with AI":
1. Gemini reads the article and picks the 8 most relevant Wikipedia article titles
2. The route verifies each pick exists on Wikipedia via `getShortExtracts`
3. Frontend dispatches `REPLACE_CONNECTIONS` which swaps old primary nodes/edges for new curated ones
4. Trail, dormant, and center nodes are preserved — only primary + their secondary children are replaced

Gemini has an in-memory cache (same concept never calls Gemini twice per session) and a `disabled` flag — once quota is hit, stops trying for the rest of the session. Model: `gemini-2.5-flash`.

## ExplorerContext State (Wiki Hopper)

```javascript
{
  currentConcept,         // Full concept object from API
  trail,                  // [{ title, timestamp, categories }] — full history
  trailIndex,             // Current position (back/forward)
  graphData,              // { nodes: [], edges: [] } — accumulating graph
  loading,
  enriching,              // Gemini enrich in progress
  enriched,               // Whether current concept has been enriched (resets on jump)
  error,
  trailOpen,              // TrailSidebar visible
  journeyOpen,            // JourneyOverlay visible
  previewNode,            // Node clicked on graph (shows PreviewPopover)
  expandedNode,           // Node detail overlay (NodeDetailOverlay)
  detailLoading,          // loading indicator for node detail fetch
  prevCenterTitle,        // title of previous center node for directional spawning
  focusMode,              // focus mode toggle
  highlightedNodeId,      // highlighted node for filtering
}
```

Actions: `jumpTo(title)`, `goBack()`, `goForward()`, `goToIndex(i)`, `enrich()`, `pickCuriosity()`, `expandNode(id)`, `showNodeDetail(node)`, `clearExpanded()`, `setPreview(node)`, `clearPreview()`, `toggleTrail()`, `toggleJourney()`, `toggleFocus()`, `setHighlight(id)`, `clearHighlight()`

## Node Types & Visual Shapes

| Type | Shape | Description |
|------|-------|-------------|
| `center` | Circle (large, pulsing glow) | Current concept, fixed at canvas center |
| `primary` | Circle | Direct connections to center |
| `secondary` | Hexagon | Sub-links expanded from primary nodes |
| `trail` | Circle (faded) | Previously visited centers |
| `dormant` | Circle (faded) | Previously active primary nodes |

When a hexagonal secondary node is jumped to, it becomes `center` (circle) naturally via type promotion.

## Knowledge Graph

- Canvas size: 2400×1800 px, centered and pannable
- Center node: fixed at canvas center, pulsing cyan glow, circular
- Primary nodes: circular, colored by relation (blue=core, cyan=related, gold=application, purple=foundation)
- Secondary nodes: hexagonal clip-path, purple-tinted
- Visited nodes: small cyan dot indicator (no emoji)
- Edges: curved SVG quadratic bezier paths with animated particles
- Background: nebula blobs, dot grid overlay, floating particles, vignette
- d3-force config:
  - Trail link distance: 500, connection distance: 200, secondary: 90
  - Trail repulsion: -900 (scales with hopDistance), dormant: -700
  - `velocityDecay: 0.45`, `alphaDecay: 0.035` for stable settled layout
  - `forceCollide` prevents overlapping

## Accumulating Graph Architecture

Nodes are never removed during normal navigation — they accumulate:
- Old center → becomes `trail` node (hopDistance + 1)
- Old primary → becomes `dormant` node (hopDistance + 1)
- Trail/dormant nodes drift outward via increasing repulsion
- `hopDistance` drives opacity, repulsion force, and visual prominence

The only time nodes are removed is during `REPLACE_CONNECTIONS` (Enrich), which carefully:
- Removes old primary nodes and their secondary children
- Preserves trail, dormant, and center nodes
- Cleans up edges that referenced removed nodes (prevents orphan crashes)

## Routing

- `/` and `/skill-tree` → `SkillTreeRoute` (Skill Tree Generator — the default landing)
- `/explore` (optionally `?q=<topic>` for auto-jump) → `ExploreRoute` (Wiki Hopper)
- `/explore/*` → same route (catch sub-paths)
- `*` (anything else) → falls back to `SkillTreeRoute`

On the server, `app.get("*")` serves `public/index.html` so React Router owns client-side routing.

## Known Issues / Fixed Bugs

- **ESM + dotenv ordering:** `GoogleGenerativeAI` must be initialized inside `enrichConcept()`, not at module level — ES module imports are hoisted before `dotenv.config()` runs
- **Wikipedia User-Agent:** All fetch calls to Wikipedia must include `User-Agent` header or Wikipedia returns an HTML block page instead of JSON
- **Gemini quota:** Free tier exhausts quickly. App degrades gracefully — Wikipedia-only mode works fully for Wiki Hopper
- **Maintenance categories (BUG-05):** `routes/concepts.js` filters out Wikipedia maintenance/hidden category prefixes (e.g. "All articles", "Articles with", "CS1") so they never appear in fact chips
- **Wikipedia redirects (BUG-03):** When a searched title redirects to a canonical title, existing nodes with the requested ID are renamed to the canonical title so edges stay consistent
- **Trail back/forward (BUG-07):** History navigation preserves the trail and just moves `trailIndex`; concept cache (`conceptCache` ref) avoids refetches
- **Enrich crash (fixed):** `REPLACE_CONNECTIONS` filters edges against surviving node IDs to avoid orphan edges crashing d3-force

## CSS Design System

Defined in `client/src/styles/globals.css`:

```
--bg-primary: #06090f        Deep navy background
--accent-blue: #7c8aff       Primary accent (center node, core relation)
--accent-green: #5cffa0      Secondary accent (related, visited nodes)
--accent-gold: #ffd97c       Application relation
--accent-purple: #c8a0ff     Foundation relation
--accent-red: #ff7c7c        Error states
--topbar-height: 49px
```

## UI Guidelines

- No emojis in app chrome — professional, futuristic aesthetic. Emojis are allowed INSIDE Skill Tree content (per-skill icon) because Gemini generates them.
- Fonts: Outfit for display/labels, JetBrains Mono for data
- Layer component uses `+`/`-` text toggles, no icon props
- Button labels are plain text (RANDOM, TRAIL, MAP, Jump, Preview)
- Visited node indicator is a small cyan dot, not a checkmark emoji

## Repository Layout

This `Project/` folder is the **single source of truth** for the application. The repo root (`Group2ProjectGithub/`) also contains:

- `Research/<teammate>/` — personal research scratch spaces (not part of the shipped app)
- `README.md` — top-level repo README

Historical reports (bug fixes, UI improvements, feature work) live under `Project/docs/reports/`.
