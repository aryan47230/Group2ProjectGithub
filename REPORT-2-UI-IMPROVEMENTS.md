# UI Cohesion Report - Brancher (Skill Tree Generator + Wiki Hopper)

> **Self-contained instructions for Claude Sonnet.** The goal is to make the ENTIRE website feel like ONE cohesive modern website with the same dark cosmic / black hole aesthetic throughout. The launcher screen (with the glowing gold ring on pure black) sets the design language. Currently some sections feel disconnected. Do NOT make major changes to how nodes/branches look in the skill tree graph or the knowledge graph - those are fine. Focus on everything else.

## Project Structure

- **Project root:** The folder containing this file (with `Project/` subfolder)
- **Frontend:** `Project/client/` (React + Vite)
- **Components:** `Project/client/src/components/`
- **Styles:** `Project/client/src/styles/`
- **Design tokens:** `Project/client/src/styles/refined-neon.css` (CSS variables)

## Design Language Reference (from the Launcher)

The launcher screen establishes the visual identity:
- **Background:** Pure black `#000000`
- **Primary accent:** Warm gold `#ffaa40` / `#ffd27a` with glow `rgba(255,170,64,0.5)`
- **Secondary accent:** Cyan/teal `#00ffd5` / `rgba(0,255,213,0.7)` for interactive elements
- **Text:** White with reduced opacity for secondary text `rgba(255,255,255,0.55)`
- **Typography:** `Outfit` for display, `JetBrains Mono` for mono, `Instrument Serif` for italic accents
- **Effects:** Subtle glows, shadows radiating from elements, particle effects
- **Borders:** Thin gold or cyan borders with glow, NOT thick solid borders
- **Cards/Panels:** Dark semi-transparent backgrounds `rgba(7,9,24,0.95)` with subtle border
- **Letter-spacing:** Wide tracking on labels (`letter-spacing: 3-5px`, `text-transform: uppercase`)

---

## Improvement 1: SkillTree PromptView (Home Page) Feels Flat

**Files:** `Project/client/src/components/SkillTree/PromptView.jsx` and the associated CSS in `Project/client/src/components/SkillTree/SkillTree.module.css`

**Problem:** The PromptView (the "What do you want to learn?" page) has the right colors but feels flat compared to the launcher. It lacks the ambient glow, depth, and cosmic atmosphere. The background is plain black with no texture or ambient light. The heading and input box feel like a standard web form rather than part of a cosmic interface.

**Changes to make:**

1. **Add a subtle radial gradient background** to the PromptView container to create depth and ambient glow:
   - Find the `.prompt` or similar class that wraps the PromptView
   - Add: `background: radial-gradient(ellipse at 50% 30%, rgba(255,170,64,0.04) 0%, transparent 60%), #000000;`
   - This creates a very subtle warm glow behind the heading area

2. **Enhance the main heading** ("What do you want to learn?"):
   - Add a subtle text shadow: `text-shadow: 0 0 40px rgba(255,170,64,0.15);`
   - This makes it feel like it's glowing slightly

3. **Enhance the input field** ("e.g. cooking, archery, guitar..."):
   - The input currently has a simple border. Add a subtle glow on focus:
   - `box-shadow: 0 0 20px rgba(255,170,64,0.1);` on the default state
   - `box-shadow: 0 0 30px rgba(255,170,64,0.2), inset 0 0 15px rgba(255,170,64,0.05);` on focus
   - Add `transition: box-shadow 0.3s ease;`

4. **Enhance the "OR EXPLORE A WIKIPEDIA CONCEPT" divider:**
   - Currently it's just text with horizontal lines. Add glow to the lines:
   - The lines should have `box-shadow: 0 0 8px rgba(255,170,64,0.15);`
   - The text should have `text-shadow: 0 0 12px rgba(255,170,64,0.3);`

5. **Style the "Your Trees" saved section cards:**
   - Add a subtle border glow: `box-shadow: 0 0 15px rgba(0,255,213,0.05);`
   - Add `transition: box-shadow 0.3s ease, border-color 0.3s ease;`
   - On hover, increase the glow: `box-shadow: 0 0 20px rgba(0,255,213,0.1);`

---

## Improvement 2: Auth Modal Styling Inconsistency

**Files:** `Project/client/src/components/Auth/AuthModal.module.css`

**Problem:** The auth modal looks decent but has some inconsistencies with the launcher's design language:
- The Sign In/Sign Up submit button uses a thick gold/cyan border that feels heavier than the launcher's more subtle, glowing borders
- The input fields have a hard border that doesn't glow subtly like the launcher's text input
- The modal backdrop blur is good but the modal card itself could use more depth

**Changes to make:**

1. **Input fields** - find the `.input` class:
   - Change border to thinner: `border: 1px solid rgba(255,170,64,0.25);`
   - Add default glow: `box-shadow: 0 0 10px rgba(255,170,64,0.05);`
   - On focus, enhance: `box-shadow: 0 0 20px rgba(0,255,213,0.15), inset 0 0 10px rgba(0,255,213,0.03);`
   - Add `transition: border-color 0.3s ease, box-shadow 0.3s ease;`

2. **Submit button** - find the `.submit` class:
   - Reduce border width to `1px` if it's thicker
   - Add glow: `box-shadow: 0 0 15px rgba(0,255,213,0.2);`
   - On hover: `box-shadow: 0 0 25px rgba(0,255,213,0.35);`

3. **Modal card** - find the `.modal` or `.card` class:
   - Add subtle outer glow: `box-shadow: 0 0 60px rgba(255,170,64,0.08), 0 0 120px rgba(255,170,64,0.03);`
   - This creates a "portal" feeling consistent with the black hole theme

4. **Cancel button** - should have a subtle hover glow effect:
   - On hover: `text-shadow: 0 0 10px rgba(255,255,255,0.3);`

---

## Improvement 3: Skill Tree TreeView Header Bar Feels Different From Explorer

**Files:** `Project/client/src/components/SkillTree/SkillTree.module.css`

**Problem:** When viewing a generated skill tree, the subheader bar (with "Back", "TOPIC: Guitar", and progress "00/23 - 0%") uses a different visual treatment than the Topbar on the Explore page. The Explore page Topbar has a bottom border glow and scan-line animation. The skill tree subheader is more utilitarian.

**Changes to make:**

1. **Find the subheader/toolbar class** in `SkillTree.module.css` (likely `.toolbar` or `.subheader`):
   - Add a bottom border with subtle glow: `border-bottom: 1px solid rgba(255,170,64,0.15);`
   - Add: `box-shadow: 0 1px 15px rgba(255,170,64,0.05);`
   - Set background to `rgba(0,0,0,0.8)` with `backdrop-filter: blur(12px);`

2. **"TOPIC" label** - add the same letter-spacing and gold accent style used in the launcher's "SKILL TREE MODE" / "WIKI HOPPER MODE" labels:
   - `letter-spacing: 3px;`
   - `font-size: 10px;`
   - `color: rgba(255,170,64,0.7);`
   - `text-transform: uppercase;`

3. **Progress indicator** ("00/23 - 0%"):
   - Add a subtle glow: `text-shadow: 0 0 8px rgba(255,170,64,0.3);`

---

## Improvement 4: Detail Panel (Skill Node Sidebar) Needs More Cosmic Polish

**Files:** `Project/client/src/components/SkillTree/SkillTree.module.css` (the detail panel section)

**Problem:** The right sidebar that opens when clicking a skill node is functional but feels like a standard dark sidebar. It doesn't match the cosmic depth of the Explore page's ConceptPanel. The tab buttons (Overview, Learn, Resources) and the "MARK COMPLETE" button could use more cohesive styling.

**Changes to make:**

1. **Panel background** - find the detail panel / aside class:
   - Change from flat dark to: `background: linear-gradient(180deg, rgba(7,9,24,0.97) 0%, rgba(3,4,12,0.99) 100%);`
   - Add left border glow: `border-left: 1px solid rgba(255,170,64,0.12);`
   - Add: `box-shadow: -5px 0 30px rgba(0,0,0,0.5);`

2. **Tab buttons** (Overview / Learn / Resources):
   - The active tab already has a gold pill style. Enhance inactive tabs:
   - Inactive: `color: rgba(255,255,255,0.45);` with hover: `color: rgba(255,255,255,0.7); text-shadow: 0 0 8px rgba(255,170,64,0.2);`
   - Add `transition: all 0.25s ease;`

3. **Section headings** ("HOW TO DEVELOP", "PRACTICE TIPS", etc.):
   - These have the right uppercase tracking. Add subtle gold tint:
   - `color: rgba(255,170,64,0.6);` (instead of pure grey)
   - Add the em-dash prefix style: `&::before { content: '— '; color: rgba(255,170,64,0.3); }`

4. **"MARK COMPLETE" button:**
   - Currently has a cyan border. Add glow matching the launcher button style:
   - `box-shadow: 0 0 15px rgba(0,255,213,0.15);`
   - On hover: `box-shadow: 0 0 25px rgba(0,255,213,0.3); background: rgba(0,255,213,0.08);`
   - Add `transition: all 0.3s ease;`

5. **Resource links** - the "arrow" icons and link titles should glow subtly on hover:
   - On hover: `text-shadow: 0 0 8px rgba(255,170,64,0.4);`

---

## Improvement 5: Explore Page ConceptPanel - Minor Polish

**Files:** `Project/client/src/components/ConceptPanel/ConceptPanel.module.css`

**Problem:** The ConceptPanel (left sidebar on the Explore page showing Wikipedia article info) is already well-styled but could use a couple of small tweaks to better match the launcher's depth.

**Changes to make:**

1. **Panel background:**
   - Add subtle inner glow at top: `background: linear-gradient(180deg, rgba(255,170,64,0.02) 0%, transparent 15%), rgba(7,9,24,0.95);`

2. **"Enrich with AI" button:**
   - This is a standout CTA. Ensure it has the gold glow treatment:
   - `box-shadow: 0 0 15px rgba(255,170,64,0.15);`
   - On hover: `box-shadow: 0 0 25px rgba(255,170,64,0.3);`

3. **Connected concept cards** (the "Jump" / "Preview" action cards):
   - On hover, add subtle glow: `box-shadow: 0 0 12px rgba(0,255,213,0.08);`
   - The "Related" badge should have a subtle glow: `text-shadow: 0 0 6px currentColor;`

4. **Scrollbar styling** - if not already styled, add custom scrollbar for the panel:
   ```css
   .panel::-webkit-scrollbar { width: 4px; }
   .panel::-webkit-scrollbar-track { background: transparent; }
   .panel::-webkit-scrollbar-thumb {
     background: rgba(255,170,64,0.2);
     border-radius: 2px;
   }
   .panel::-webkit-scrollbar-thumb:hover {
     background: rgba(255,170,64,0.4);
   }
   ```

---

## Improvement 6: Global Scrollbar and Selection Styling

**Files:** `Project/client/src/styles/globals.css`

**Problem:** The default browser scrollbar breaks the dark cosmic immersion. Page-level scrollbars should match the theme.

**Changes to make:**

Add to `globals.css` if not already present:

```css
/* Custom scrollbar for the entire page */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #000000;
}

::-webkit-scrollbar-thumb {
  background: rgba(255,170,64,0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255,170,64,0.4);
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(255,170,64,0.2) #000000;
}
```

Check if these are already in globals.css before adding - don't duplicate.

---

## Improvement 7: Topbar Search Bar Consistency

**Files:** `Project/client/src/components/Topbar/Topbar.module.css`

**Problem:** The Topbar search bar on the Explore page has a nice scan-line animation but the search input styling could better match the launcher's input fields. The slash `/` prefix indicator is a nice touch.

**Changes to make:**

1. The search input wrapper already has a border. Enhance with glow on focus:
   - On focus-within: `box-shadow: 0 0 20px rgba(255,170,64,0.12);`

2. **Button styling** (RANDOM, TRAIL, MAP buttons):
   - These should have consistent hover effects matching the launcher button style
   - On hover: `box-shadow: 0 0 10px rgba(255,170,64,0.15); border-color: rgba(255,170,64,0.4);`
   - Add `transition: all 0.25s ease;`

---

## Improvement 8: Loading States Consistency

**Files:** `Project/client/src/routes/ExploreRoute.jsx` (ExploreLoader) and `Project/client/src/components/LauncherScreen/LauncherScreen.jsx`

**Problem:** The Explore page's loading state is a simple pulsing dot with "LOADING CONCEPT" text. The Launcher's loading state is the full black hole animation with "GROWING SKILL TREE". The Explore loader feels minimal in comparison.

**Changes to make:**

In `ExploreRoute.jsx`, enhance the `ExploreLoader` component:

1. Add a subtle radial gradient backdrop:
   ```jsx
   background: 'radial-gradient(ellipse at 50% 50%, rgba(255,170,64,0.03) 0%, transparent 50%), #000000',
   ```

2. Make the pulsing dot slightly larger (18px instead of 14px) and add a second outer ring:
   ```jsx
   <div style={{
     width: 18, height: 18, borderRadius: '50%',
     background: '#ffd27a',
     boxShadow: '0 0 12px rgba(255,200,90,0.9), 0 0 28px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)',
     animation: 'branchPulse 1.6s ease-in-out infinite',
   }} />
   <div style={{
     position: 'absolute',
     width: 50, height: 50, borderRadius: '50%',
     border: '1px solid rgba(255,170,64,0.15)',
     animation: 'branchPulse 1.6s ease-in-out infinite 0.3s',
   }} />
   ```

3. Add the topic name in the same style as the launcher (white at 55% opacity, 13px, letter-spacing 1):
   - This is already done, just make sure the styles match exactly.

---

## Testing Checklist

After implementing these changes, verify visually:

- [ ] PromptView ("What do you want to learn?") has subtle ambient glow, not flat black
- [ ] Auth modal inputs glow on focus, submit button has depth
- [ ] Skill tree subheader bar has bottom border glow
- [ ] Detail panel (skill node sidebar) has gradient background and left border glow
- [ ] "MARK COMPLETE" button glows on hover
- [ ] Scrollbars throughout the site are dark with gold thumb
- [ ] Explore page loading state has radial gradient backdrop
- [ ] All hover states have smooth transitions (no jarring pops)
- [ ] The overall feel going from Launcher -> PromptView -> TreeView -> Explore is cohesive
- [ ] Do NOT break the skill tree node/branch graph or the knowledge graph visuals
