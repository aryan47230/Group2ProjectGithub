# Wiki Loop — Project Context for Claude

## What This Project Is

Wiki Loop is a React + Node/Express web app that lets users explore Wikipedia concepts through an interactive, futuristic knowledge graph. The core experience is a "rabbit hole" explorer: search a concept → get a visual overview → see connected concepts on a force-directed graph → click to preview or expand → jump to make it the new center. An optional AI enrich button replaces Wikipedia's algorithmic connections with Gemini-curated relevant topics.

## Tech Stack

- **Frontend:** React 18 (Vite), CSS Modules, d3-force for graph layout
- **Backend:** Node/Express (ESM, `type: "module"`), port 3001
- **APIs:** Wikipedia REST API (primary data source), Google Gemini API (on-demand enrichment only)
- **State:** React Context + useReducer (`ExplorerContext`)
- **Fonts:** Outfit (display) + JetBrains Mono (data/mono)

## Running the App

```bash
# From project root
npm run dev
```

Starts both server (port 3001) and client (port 5173) concurrently. Open `http://localhost:5173`.

First time only:
```bash
npm install && cd server && npm install && cd ../client && npm install && cd ..
```

## Environment

Add your Gemini API key to `.env` in the project root:
```
GEMINI_API_KEY=your_key_here
```

Get a free key at https://aistudio.google.com/app/apikey

## Architecture

### Backend (`server/`)

```
server/
├── index.js                  # Express entry, loads .env, mounts routes
├── routes/
│   └── concepts.js           # GET search, GET :title, POST :title/enrich, GET :title/links
└── services/
    ├── wikipedia.js           # Wikipedia API — search, article, links, image, sections, batch extracts
    ├── gemini.js              # Gemini AI — picks 8 most relevant Wikipedia connections on-demand
    └── algorithmic.js         # Default — ranks connections via bidirectional link scoring
```

**Critical:** `dotenv.config()` runs in `index.js` but ES module imports are hoisted. This means `gemini.js` must NOT initialize `GoogleGenerativeAI` at module level — it must be initialized inside the function so `process.env.GEMINI_API_KEY` is read at call time, not import time.

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/concepts/search?q=...` | Wikipedia search |
| GET | `/api/concepts/:title` | Full concept data (pure Wikipedia) |
| POST | `/api/concepts/:title/enrich` | Gemini replaces connections with curated picks |
| GET | `/api/concepts/:title/links` | Lightweight links for second-layer nodes |

### API Response Shape (`GET /api/concepts/:title`)

```json
{
  "title": "Quantum mechanics",
  "extract": "Full Wikipedia intro text...",
  "image": "https://upload.wikimedia.org/...",
  "sections": [{ "index": "1", "heading": "History", "level": 1 }],
  "categories": ["Quantum mechanics", "Physics"],
  "wikiUrl": "https://en.wikipedia.org/wiki/Quantum_mechanics",
  "summary": "First 2 sentences from Wikipedia extract (no Gemini)",
  "facts": [
    { "label": "Category", "value": "Quantum mechanics" },
    { "label": "Also known as", "value": "..." },
    { "label": "Related topics", "value": "50 connected articles" },
    { "label": "Sections", "value": "12 Wikipedia sections" }
  ],
  "connections": [{ "title": "Wave function", "strength": 3, "relation": "related", "description": "2-sentence Wikipedia extract" }]
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

### Data Strategy (important)

**Wikipedia provides:** summary, facts, sections, connections (via algorithmic ranking), connection descriptions (via batch `getShortExtracts`)
**Gemini provides:** curated connection replacement ONLY (on-demand via Enrich button)

The app works fully without Gemini. When the user clicks "Enrich with AI":
1. Gemini reads the article and picks the 8 most relevant Wikipedia article titles
2. The route verifies each pick exists on Wikipedia via `getShortExtracts`
3. Frontend dispatches `REPLACE_CONNECTIONS` which swaps old primary nodes/edges for new curated ones
4. Trail, dormant, and center nodes are preserved — only primary + their secondary children are replaced

Gemini has:
- In-memory cache (same concept never calls Gemini twice per session)
- `disabled` flag — once quota is hit, stops trying for the rest of the session
- Model: `gemini-2.5-flash`

### Frontend (`client/src/`)

```
context/
  ExplorerContext.jsx      # Global state — concept, trail, graph, enriched, expandedNode

components/
  Topbar/                  # Search bar (debounced), jump count, Trail/Journey/Random buttons
  ConceptPanel/            # Left panel (500px fixed width)
    BacktrackBar           # Breadcrumb trail + Back button
    HeroCard               # Image, title, summary, fact chips
    Layer                  # Generic expandable section wrapper (+/- toggle)
    DeepDive               # Wikipedia sections list
    ConnectedConcepts      # 2-column grid of directly connected nodes
  KnowledgeGraph/          # Right panel (flex 1)
    useForceLayout         # d3-force hook — non-overlapping nodes via forceCollide
    GraphNode              # Center node (circle, pulsing glow) + primary (circle) + secondary (hexagon)
    KnowledgeGraph         # SVG edges with animated particles, nebula blobs, grid, pan
    PreviewPopover         # Click node → popover with JUMP HERE + EXPAND buttons
    NodeDetailOverlay      # Full-screen detail overlay with image, extract, jump
  TrailSidebar/            # Toggleable right sidebar — numbered journey history
  JourneyOverlay/          # Full-screen journey map with path visualization + stats
```

### ExplorerContext State

```javascript
{
  currentConcept,   // Full concept object from API
  trail,            // [{ title, timestamp, categories }] — full history
  trailIndex,       // Current position (for back/forward)
  graphData,        // { nodes: [], edges: [] } — accumulating graph
  loading,
  enriching,        // Gemini enrich in progress
  enriched,         // Whether current concept has been enriched (resets on jump)
  error,
  trailOpen,        // TrailSidebar visible
  journeyOpen,      // JourneyOverlay visible
  previewNode,      // Node clicked on graph (shows PreviewPopover)
  expandedNode,     // Node detail overlay (shows NodeDetailOverlay)
}
```

Actions: `jumpTo(title)`, `goBack()`, `goForward()`, `enrich()`, `pickCuriosity()`, `expandNode(id)`, `showNodeDetail(node)`, `clearExpanded()`, `setPreview(node)`, `clearPreview()`, `toggleTrail()`, `toggleJourney()`

### Node Types & Visual Shapes

| Type | Shape | Description |
|------|-------|-------------|
| `center` | Circle (large, pulsing glow) | Current concept, fixed at canvas center |
| `primary` | Circle | Direct connections to center |
| `secondary` | Hexagon | Sub-links expanded from primary nodes |
| `trail` | Circle (faded) | Previously visited centers |
| `dormant` | Circle (faded) | Previously active primary nodes |

When a hexagonal secondary node is jumped to, it becomes `center` (circle) naturally via type promotion.

### Knowledge Graph

- Canvas size: 2400x1800px, centered and pannable
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

### Accumulating Graph Architecture

Nodes are never removed during normal navigation — they accumulate:
- Old center → becomes `trail` node (hopDistance + 1)
- Old primary → becomes `dormant` node (hopDistance + 1)
- Trail/dormant nodes drift outward via increasing repulsion
- `hopDistance` drives opacity, repulsion force, and visual prominence

The only time nodes are removed is during `REPLACE_CONNECTIONS` (Enrich), which carefully:
- Removes old primary nodes and their secondary children
- Preserves trail, dormant, and center nodes
- Cleans up edges that referenced removed nodes (prevents orphan crashes)

## Known Issues / Fixed Bugs

- **ESM + dotenv ordering:** `GoogleGenerativeAI` must be initialized inside `enrichConcept()`, not at module level — ES module imports are hoisted before `dotenv.config()` runs
- **Wikipedia User-Agent:** All fetch calls to Wikipedia must include `User-Agent` header or Wikipedia returns an HTML block page instead of JSON
- **Gemini quota:** Free tier exhausts quickly. App degrades gracefully — Wikipedia-only mode works fully
- **Enrich crash (fixed):** Previous `REPLACE_CONNECTIONS` implementation left orphaned edges pointing to removed nodes, crashing d3-force. Fixed by filtering edges against surviving node IDs.
- **Node/edge misalignment (fixed):** CSS canvas dimensions must match SVG viewBox and d3 simulation dimensions (all 2400x1800). Mismatch causes SVG edges to scale differently than HTML node divs.
- **Windows Jest:** Test script uses `node --experimental-vm-modules ./node_modules/jest/bin/jest.js` (not the bash shim)

## CSS Design System

Defined in `client/src/styles/globals.css`:

```
--bg-primary: #06090f       Deep navy background
--accent-blue: #7c8aff      Primary accent (center node, core relation)
--accent-green: #5cffa0     Secondary accent (related, visited nodes)
--accent-gold: #ffd97c      Application relation
--accent-purple: #c8a0ff    Foundation relation
--accent-red: #ff7c7c       Error states
--topbar-height: 49px
```

## UI Guidelines

- No emojis anywhere in the UI — professional, futuristic aesthetic
- Fonts: Outfit for display/labels, JetBrains Mono for data
- Layer component uses +/- text toggles, no icon props
- Button labels are plain text (RANDOM, TRAIL, MAP, Jump, Preview)
- Visited node indicator is a small cyan dot, not a checkmark emoji
