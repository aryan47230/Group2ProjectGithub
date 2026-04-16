# Feature Improvements Report - Brancher (Skill Tree Generator + Wiki Hopper)

> **Self-contained instructions for Claude Sonnet.** Each improvement is an independent feature that can be implemented separately. Read the full project context before starting any feature.

## Project Structure

- **Project root:** The folder containing this file (with `Project/` subfolder)
- **Backend:** `Project/server.js` (Express on port 3000, uses Gemini API for skill trees, Wikipedia API for concepts)
- **Frontend:** `Project/client/` (React 18 + Vite, React Router v6, Three.js for launcher, D3-force for knowledge graph)
- **Components:** `Project/client/src/components/`
- **Contexts:** `Project/client/src/context/`
- **Routes:** `Project/client/src/routes/`
- **Styles:** `Project/client/src/styles/` (CSS modules, design tokens in `refined-neon.css`)
- **Design language:** Dark cosmic / black hole theme. Pure black backgrounds, gold `#ffaa40` and cyan `#00ffd5` accents, glow effects, `Outfit` font, wide letter-spacing on labels.

---

## Feature 1: Keyboard Shortcut Help Overlay

**Difficulty:** Easy  
**Files to create/modify:**
- Create `Project/client/src/components/KeyboardHelp/KeyboardHelp.jsx`
- Create `Project/client/src/components/KeyboardHelp/KeyboardHelp.module.css`
- Modify `Project/client/src/routes/ExploreRoute.jsx`
- Modify `Project/client/src/routes/SkillTreeRoute.jsx`

**What:** The Explore page already has keyboard hints shown as text in the Knowledge Graph area ("TAB cycle - ENTER preview - DBL-CLICK jump - ESC close - drag to pan"), but they're easy to miss and not available as a proper overlay. Add a `?` keyboard shortcut that opens a small help overlay showing all available keyboard shortcuts for the current page.

**Implementation:**

1. Create a `KeyboardHelp` component that renders a modal overlay:
   - Toggle with `?` key (listen for `keydown` on `window`, ignore if an input is focused)
   - Display a grid of shortcut keys and their descriptions
   - Style to match the cosmic theme: dark card with gold border glow, key badges with cyan background

2. Shortcuts to show on the Explore page:
   - `Tab` - Cycle through graph nodes
   - `Enter` - Preview focused node
   - `Escape` - Close preview / overlay
   - `Double-click` - Jump to concept
   - `Drag` - Pan the graph
   - `/` - Focus search bar
   - `?` - Toggle this help

3. Shortcuts to show on the Skill Tree page:
   - `Click node` - View details
   - `Escape` - Close detail panel
   - `?` - Toggle this help

4. The overlay should close on `Escape` or clicking outside.

5. Add a small `?` button in the bottom-right corner of both pages (subtle, 28px circle with thin gold border) that also opens this overlay.

---

## Feature 2: Skill Tree Progress Animation on Node Completion

**Difficulty:** Easy  
**Files to modify:**
- `Project/client/src/components/SkillTree/SkillGraph.jsx`
- `Project/client/src/components/SkillTree/SkillTree.module.css`

**What:** When a user clicks "MARK COMPLETE" on a skill node, the node just changes color from blue/grey to cyan. Add a satisfying completion animation: a brief radial pulse/burst effect emanating from the node when it's marked complete, and a subtle particle scatter.

**Implementation:**

1. In `SkillGraph.jsx`, when a node transitions to "done" state:
   - Create a temporary SVG `<circle>` element at the node's position
   - Animate it with CSS: scale from 1 to 3, opacity from 0.8 to 0, over 600ms
   - Remove it after animation completes
   - Color: cyan `#00ffd5` with glow

2. Add the CSS animation to `SkillTree.module.css`:
   ```css
   @keyframes nodeComplete {
     0% { transform: scale(1); opacity: 0.8; }
     100% { transform: scale(3); opacity: 0; }
   }
   .completePulse {
     animation: nodeComplete 0.6s ease-out forwards;
     fill: none;
     stroke: #00ffd5;
     stroke-width: 2;
     pointer-events: none;
   }
   ```

3. Also briefly flash the connecting edges from the completed node to its dependents, showing which skills are now unlocked.

---

## Feature 3: Topic Suggestions / Autocomplete on Skill Tree Input

**Difficulty:** Easy  
**Files to modify:**
- `Project/client/src/components/SkillTree/PromptView.jsx`
- `Project/client/src/components/SkillTree/SkillTree.module.css`

**What:** The skill tree input ("e.g. cooking, archery, guitar...") has no autocomplete or suggestions. Show a dropdown of popular/suggested topics when the user starts typing, making the experience more guided and inspiring.

**Implementation:**

1. Create a static list of ~30 curated topic suggestions organized by category:
   ```js
   const SUGGESTIONS = [
     { category: 'Creative', topics: ['Guitar', 'Digital Art', 'Photography', 'Creative Writing', 'Music Production'] },
     { category: 'Tech', topics: ['Python', 'Machine Learning', 'Web Development', 'React', 'Data Science'] },
     { category: 'Science', topics: ['Quantum Physics', 'Organic Chemistry', 'Astronomy', 'Neuroscience'] },
     { category: 'Languages', topics: ['Japanese', 'Spanish', 'Mandarin Chinese', 'Sign Language'] },
     { category: 'Life Skills', topics: ['Cooking', 'Public Speaking', 'Personal Finance', 'Chess'] },
     { category: 'Fitness', topics: ['Calisthenics', 'Yoga', 'Rock Climbing', 'Swimming'] },
   ];
   ```

2. When the input is focused and empty, show a dropdown with all categories and topics as a grid.

3. When the user types, filter suggestions that match the typed text (case-insensitive substring match).

4. Style the dropdown to match the cosmic theme:
   - Background: `rgba(7,9,24,0.97)` with `backdrop-filter: blur(12px)`
   - Border: `1px solid rgba(255,170,64,0.15)` with subtle glow
   - Category labels: gold uppercase with letter-spacing
   - Topic pills: dark with thin border, glow on hover
   - Clicking a suggestion fills the input and triggers generation

5. Close the dropdown when clicking outside, pressing Escape, or selecting a suggestion.

---

## Feature 4: Breadcrumb Trail for Explore Page Navigation History

**Difficulty:** Medium  
**Files to modify:**
- `Project/client/src/components/Topbar/Topbar.jsx`
- `Project/client/src/components/Topbar/Topbar.module.css`
- `Project/client/src/context/ExplorerContext.jsx`

**What:** The Explore page has a "TRAIL" button and a TrailSidebar, but the actual navigation path through concepts isn't visible at a glance. Add a compact breadcrumb trail below the search bar showing the path of concepts visited (like "Quantum mechanics > Absolute zero > Kelvin"), allowing quick back-navigation.

**Implementation:**

1. The `ExplorerContext` already tracks a `trail` array of visited concepts. Use this data.

2. In the Topbar or just below it, render a horizontal breadcrumb:
   - Show the last 5 concepts in the trail (if more than 5, show "..." at the start)
   - Each breadcrumb item is clickable and calls `jumpTo(conceptTitle)` or navigates back in the trail
   - Use the ">" or ">" separator between items
   - Current concept is highlighted in gold, previous concepts in dimmed white

3. Style:
   - Container: `display: flex; align-items: center; gap: 8px; padding: 6px 20px;`
   - Items: `font-size: 11px; letter-spacing: 1px; color: rgba(255,255,255,0.4); cursor: pointer;`
   - Active item: `color: #ffaa40; text-shadow: 0 0 8px rgba(255,170,64,0.3);`
   - Separator: `color: rgba(255,255,255,0.15);`
   - On hover: `color: rgba(255,255,255,0.8);`

4. The breadcrumb should animate smoothly when a new concept is added (slide in from right).

---

## Feature 5: Skill Tree Node Emoji Display

**Difficulty:** Easy  
**Files to modify:**
- `Project/client/src/components/SkillTree/SkillGraph.jsx`

**What:** The Gemini API returns an `emoji` field for each skill node (e.g., a guitar emoji for "Parts of the Guitar"), but the current tree graph only shows the first letter of the skill name inside each circle. Display the emoji instead of (or alongside) the letter, making the tree more visually distinct and scannable.

**Implementation:**

1. In `SkillGraph.jsx`, find where node circles are rendered in the SVG (the `<text>` element inside each node that shows the first letter).

2. If the node has an `emoji` property, display the emoji in the circle instead of the first letter:
   - The emoji should be centered in the circle
   - Use `font-size` slightly smaller than the circle (e.g., if the circle is 35px radius, use font-size 22px for the emoji)
   - Keep the abbreviated text label BELOW the circle as-is

3. If no emoji is present (fallback), keep the current first-letter behavior.

4. The abbreviated text below the node can remain showing the skill name truncated.

---

## Feature 6: Dark Mode "Star Field" Background for All Pages

**Difficulty:** Easy  
**Files to modify:**
- `Project/client/src/styles/globals.css`
- `Project/client/src/components/SkillTree/SkillTree.module.css`

**What:** The Knowledge Graph page has a beautiful starfield background with nebula blobs and drifting particles. The Skill Tree pages (PromptView and TreeView) have plain black backgrounds. Add a subtle star field to all pages for visual consistency, but much more subtle than the Knowledge Graph's to avoid distraction.

**Implementation:**

1. In `globals.css`, add a CSS-only subtle starfield to the `body` or `#root`:

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 100%),
    radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.1) 0%, transparent 100%),
    radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.12) 0%, transparent 100%),
    radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 100%),
    radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.1) 0%, transparent 100%),
    radial-gradient(1px 1px at 70% 90%, rgba(255,255,255,0.12) 0%, transparent 100%),
    radial-gradient(1px 1px at 35% 15%, rgba(255,255,255,0.08) 0%, transparent 100%),
    radial-gradient(1px 1px at 85% 35%, rgba(255,255,255,0.1) 0%, transparent 100%);
  pointer-events: none;
}
```

2. Make sure the Launcher screen's Blackhole WebGL canvas is NOT affected (its container should have `z-index` above this pseudo-element, which it already does since it uses fixed positioning with high z-index).

3. Make sure the Knowledge Graph's own starfield particles don't clash - the KnowledgeGraph component already has its own star rendering, so this subtle body background should just provide a base layer for pages that don't have their own.

---

## Feature 7: Smooth Page Transitions

**Difficulty:** Medium  
**Files to modify:**
- `Project/client/src/App.jsx`
- `Project/client/src/styles/globals.css`

**What:** Currently, navigating between Skill Tree and Explore pages is an instant swap with no transition. Add a subtle fade transition when switching between routes to make the experience feel more polished.

**Implementation:**

1. Wrap route content in a transition container. Since the app uses React Router v6, you can use CSS transitions triggered by route changes.

2. In `App.jsx`, wrap the `<Routes>` in a div with a class and use the `useLocation` hook to trigger transitions:

```jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <SkillTreeProvider>
        <LauncherScreen />
        <div className={`route-container ${transitioning ? 'route-entering' : 'route-visible'}`}>
          <Routes>
            <Route path="/" element={<SkillTreeRoute />} />
            <Route path="/skill-tree" element={<SkillTreeRoute hideExplore />} />
            <Route path="/explore" element={<ExploreRoute />} />
            <Route path="/explore/*" element={<ExploreRoute />} />
            <Route path="*" element={<SkillTreeRoute />} />
          </Routes>
        </div>
      </SkillTreeProvider>
    </AuthProvider>
  );
}
```

3. Add CSS transitions in `globals.css`:
```css
.route-container {
  transition: opacity 0.2s ease;
}
.route-entering {
  opacity: 0.7;
}
.route-visible {
  opacity: 1;
}
```

Keep it subtle - 200ms fade, not a full slide or scale animation.

---

## Feature 8: "Generate Skill Tree" Button on Explore Page Concept Cards

**Difficulty:** Easy  
**Files to modify:**
- `Project/client/src/components/ConceptPanel/ConceptPanel.jsx` (or the specific sub-component)

**What:** There is already a "Generate Skill Tree" link in the ConceptPanel on the Explore page that navigates to `/?generate=Quantum%20mechanics`. This is a great cross-feature link. Make sure this button is visually prominent and consistent. Also consider adding a similar "Explore on Wikipedia" link in the Skill Tree's detail panel Resources tab - this already exists (the `[wiki]` resource link), but verify it works correctly and is styled prominently.

**Implementation:**

1. Find the "Generate Skill Tree" button/link in the ConceptPanel components. Ensure it:
   - Has the gold accent styling (matching the "Enrich with AI" button nearby)
   - Uses `box-shadow: 0 0 12px rgba(255,170,64,0.15);`
   - Has a hover glow effect
   - Has a small icon or emoji prefix (e.g., a tree icon or "🌳")

2. In the Skill Tree's `DetailPanel.jsx`, find the Resources tab's Wikipedia link (the `[wiki]` item). Ensure:
   - It's visually distinct from other resources (since it links within the app, not externally)
   - It uses a different badge color or style to indicate "in-app" navigation
   - The link text clearly says "Explore in Wiki Hopper" or similar

---

## Feature 9: Export/Share Skill Tree

**Difficulty:** Medium  
**Files to create/modify:**
- Create `Project/client/src/components/SkillTree/ShareButton.jsx`
- Modify `Project/client/src/components/SkillTree/TreeView.jsx`
- Modify `Project/client/src/components/SkillTree/SkillTree.module.css`

**What:** Users can generate skill trees but cannot share them. Add an "Export" button that lets users:
1. Copy a shareable URL with the topic pre-filled (so someone can generate the same tree)
2. Export the skill tree data as a JSON file for backup

**Implementation:**

1. Create a `ShareButton` component with a dropdown showing two options:
   - "Copy Link" - copies `{window.location.origin}/?generate={encodeURIComponent(topic)}` to clipboard and shows a brief "Copied!" confirmation
   - "Export JSON" - downloads a `.json` file with the skill tree data including nodes, completion state, and topic

2. Place this button in the TreeView subheader, next to the progress indicator.

3. Style:
   - Button: small icon button (share/export icon) with gold border
   - Dropdown: dark card matching the auth modal style
   - "Copied!" toast: brief green flash notification

4. The copy-link approach is the simplest "share" mechanism since the skill tree is generated fresh from the API each time (the same topic will produce a similar tree).

---

## Feature 10: Tooltip Preview on Skill Tree Node Hover

**Difficulty:** Easy  
**Files to modify:**
- `Project/client/src/components/SkillTree/SkillGraph.jsx`
- `Project/client/src/components/SkillTree/SkillTree.module.css`

**What:** Currently, hovering over a skill tree node only highlights the prerequisite chain (connected edges glow). Add a small tooltip popup showing the node's description and level when hovering, giving users a quick preview without having to click.

**Implementation:**

1. In `SkillGraph.jsx`, on node hover (the `mouseenter` event handler):
   - Create a tooltip div positioned near the hovered node (above or to the side)
   - Show: skill name (full, not truncated), level badge, and the description (1-2 sentences)
   - Also show prerequisite names if any: "Requires: X, Y"
   - Auto-position to avoid going off-screen

2. Style the tooltip:
   - Background: `rgba(7,9,24,0.95)` with `backdrop-filter: blur(8px)`
   - Border: `1px solid rgba(255,170,64,0.2)` with glow
   - Max width: 280px
   - Font: 12px for description, 10px uppercase for "LVL X" badge
   - Appear with fade-in animation (opacity 0 to 1 over 150ms)
   - Disappear immediately on mouseout (no delay)

3. On click (opening the full detail panel), the tooltip should disappear.

---

## Implementation Priority

Recommended order (easiest wins first):

1. **Feature 5** - Emoji in nodes (very easy, high visual impact)
2. **Feature 6** - Star field background (easy, huge atmosphere boost)
3. **Feature 2** - Completion animation (easy, satisfying UX)
4. **Feature 10** - Node hover tooltip (easy, better usability)
5. **Feature 3** - Topic suggestions (easy, better onboarding)
6. **Feature 1** - Keyboard shortcut overlay (easy, better discoverability)
7. **Feature 8** - Cross-feature link polish (easy, existing code)
8. **Feature 4** - Breadcrumb trail (medium, nice navigation)
9. **Feature 7** - Page transitions (medium, polish)
10. **Feature 9** - Export/Share (medium, new functionality)

---

## Testing Checklist

After implementing any feature, verify:

- [ ] The feature works on first load (no stale state)
- [ ] The feature doesn't break existing functionality
- [ ] Visual styling matches the cosmic dark theme (gold/cyan accents, black backgrounds, glow effects)
- [ ] The feature is responsive (doesn't break on smaller viewports)
- [ ] No new console errors or warnings
- [ ] Run `npm run dev` in the client folder to verify no build errors
