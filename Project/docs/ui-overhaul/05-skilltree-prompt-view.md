# 05 — Skill Tree Prompt View (landing page)

> **Prerequisites:** Doc 01 merged. Docs 02–04 are independent but recommended first so the header/banner above match.

## Goal

Rebuild the landing page (`PromptView` + `SavedTreesList`) as the hero of the Refined Neon UI. This is the first screen a user sees, so it sets the tone for the whole app.

Visual target:

- Centered hero layout: a mono eyebrow, a large Outfit display headline with **one Instrument Serif italic accent word**, a subtitle line, the primary generate-a-tree search pill, a hairline divider, then the secondary "Explore Wikipedia" pill, then the saved-trees grid.
- Generate input is a big 56 px pill with an inset gold "Generate" button on the right.
- Explore input is a smaller 44 px pill with a cyan "Explore" button.
- Saved trees become hairline cards in a 2-column grid (1 column on narrow viewports). Each card has a mono progress chip, a hairline progress bar, and a two-button footer (`OPEN` / `DELETE`).
- Background has a faint animated dot grid (CSS only, no canvas).

## Files touched

**Modified:**
- `client/src/components/SkillTree/PromptView.jsx`
- `client/src/components/SkillTree/SavedTreesList.jsx`
- `client/src/components/SkillTree/SkillTree.module.css` — **only the landing-page sections** (`.promptView`, `.heading`, `.form`, `.topicInput`, `.generateBtn`, `.status`, `.exploreCta`, `.ctaDivider`, `.exploreForm`, `.exploreInput`, `.exploreBtn`, `.savedSection`, `.savedHeading`, `.savedList`, `.savedItem`, `.savedInfo`, `.savedTopic`, `.savedProgress`, `.savedBarTrack`, `.savedBarFill`, `.savedActions`, `.savedOpen`, `.savedDelete`). Do not touch the `.treeView` / `.detailPanel` / `.tabBar` / `.graph` selectors — those belong to docs 06 and 07.

---

## Task 5.1 — Restructure `PromptView.jsx`

Replace the return JSX with the following. Behavior (hooks, `submitGenerate`, `handleExplore`, `autoRan`) is unchanged.

```jsx
return (
  <main className={styles.promptView}>
    <div className={styles.dotGrid} aria-hidden="true" />

    <header className={styles.hero}>
      <span className={styles.eyebrow}>SKILL TREE GENERATOR · v1</span>
      <h1 className={styles.heading}>
        What do you want <span className={styles.headingItalic}>to learn</span>?
      </h1>
      <p className={styles.subtitle}>
        Type anything — a hobby, a language, a field. We'll chart a layered skill tree.
      </p>
    </header>

    <form className={styles.form} onSubmit={handleSubmit}>
      <span className={styles.formIcon}>▸</span>
      <input
        className={styles.topicInput}
        type="text"
        placeholder="e.g. cooking, archery, guitar..."
        required
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button type="submit" className={styles.generateBtn} disabled={generating}>
        {generating ? 'Generating…' : 'Generate'}
      </button>
    </form>

    <div className={styles.status} aria-live="polite">{shownStatus}</div>

    <div className={styles.divider}>
      <span className={styles.dividerLine} />
      <span className={styles.dividerLabel}>OR EXPLORE A WIKIPEDIA CONCEPT</span>
      <span className={styles.dividerLine} />
    </div>

    <form className={styles.exploreForm} onSubmit={handleExplore}>
      <input
        className={styles.exploreInput}
        type="text"
        placeholder="e.g. quantum mechanics, stoicism..."
        value={exploreTopic}
        onChange={(e) => setExploreTopic(e.target.value)}
      />
      <button type="submit" className={styles.exploreBtn}>Explore →</button>
    </form>

    <SavedTreesList />
  </main>
);
```

Notes:
- New `<span className={styles.headingItalic}>to learn</span>` for the serif-italic accent.
- The old `<div className={styles.exploreCta}>` wrapper is gone — the divider is its own element, and the form sits directly below.
- The dot grid is a sibling absolute div — the rest of `.promptView` sits on top via `position: relative`.

## Task 5.2 — Restructure `SavedTreesList.jsx`

Replace the return JSX with:

```jsx
return (
  <section className={styles.savedSection}>
    <header className={styles.savedHeader}>
      <span className={styles.savedTag}>SAVED</span>
      <h2 className={styles.savedHeading}>Your Trees</h2>
      <span className={styles.savedCount}>{savedTrees.length.toString().padStart(2, '0')}</span>
    </header>

    <ul className={styles.savedList}>
      {savedTrees.map((tree) => {
        const done = tree.completed?.length || 0;
        const total = tree.nodes?.length || 0;
        const pct = total ? Math.round((done / total) * 100) : 0;
        return (
          <li key={tree.topic} className={styles.savedItem}>
            <div className={styles.savedInfo}>
              <span className={styles.savedTopic}>{tree.topic}</span>
              <span className={styles.savedProgress}>
                {done.toString().padStart(2, '0')}/{total.toString().padStart(2, '0')} · {pct}%
              </span>
            </div>
            <div className={styles.savedBarTrack}>
              <div className={styles.savedBarFill} style={{ width: `${pct}%` }} />
            </div>
            <div className={styles.savedActions}>
              <button className={styles.savedOpen} onClick={() => openTree(tree)}>Open →</button>
              <button className={styles.savedDelete} onClick={() => deleteTree(tree.topic)}>Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);
```

Behavior unchanged. The list is wider (2-column grid) via CSS.

## Task 5.3 — Replace the landing sections of `SkillTree.module.css`

In `client/src/components/SkillTree/SkillTree.module.css`, replace **everything from the `.promptView` selector down to and including `.savedDelete:hover`** (roughly lines 1–216 in the current file) with the block below. Keep the rest of the file (`.treeView`, `.treeHeader`, `.detailPanel`, `.tabBar`, `.graph :global` blocks, etc.) untouched — those are covered in docs 06 and 07.

```css
/* ── Prompt screen (landing) ── */

.promptView {
  position: relative;
  min-height: calc(100vh - var(--rn-topbar-height));
  padding: 88px 24px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  overflow-x: hidden;
}

.dotGrid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(var(--rn-hair-2) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%);
  opacity: 0.55;
}

.promptView > * { position: relative; z-index: 1; }

/* ── Hero ── */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 720px;
  text-align: center;
}

.eyebrow {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-4);
  padding: 4px 10px;
  border: 1px solid var(--rn-hair-2);
  border-radius: var(--rn-radius-pill);
}

.heading {
  font-family: var(--rn-font-display);
  font-weight: 400;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--rn-txt-0);
  margin: 0;
}

.headingItalic {
  font-family: var(--rn-font-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--rn-gold);
}

.subtitle {
  font-family: var(--rn-font-display);
  font-size: 14px;
  color: var(--rn-txt-1);
  max-width: 520px;
  line-height: 1.6;
  letter-spacing: var(--rn-tracked-1);
}

/* ── Generate form (primary pill) ── */
.form {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 620px;
  height: 56px;
  padding: 4px 4px 4px 20px;
  background: var(--rn-ink);
  border: 1px solid var(--rn-hair-2);
  border-radius: var(--rn-radius-pill);
  gap: 12px;
  transition: border-color 0.18s, box-shadow 0.18s;
}

.form:focus-within {
  border-color: var(--rn-gold);
  box-shadow: 0 0 0 4px var(--rn-gold-glow);
}

.formIcon {
  font-family: var(--rn-font-mono);
  color: var(--rn-gold);
  font-size: 14px;
  flex-shrink: 0;
}

.topicInput {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--rn-font-display);
  font-size: 16px;
  color: var(--rn-txt-0);
  letter-spacing: var(--rn-tracked-1);
}
.topicInput::placeholder { color: var(--rn-txt-3); }

.generateBtn {
  height: 100%;
  padding: 0 26px;
  border-radius: var(--rn-radius-pill);
  border: 1px solid var(--rn-gold);
  background: var(--rn-gold-glow);
  color: var(--rn-gold);
  font-family: var(--rn-font-display);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}

.generateBtn:hover:not(:disabled) {
  background: var(--rn-gold);
  color: var(--rn-void);
  box-shadow: 0 0 24px -4px var(--rn-gold-glow-2);
}

.generateBtn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.status {
  font-family: var(--rn-font-mono);
  font-size: 11px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-2);
  min-height: 1.2em;
}

/* ── Divider ── */
.divider {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  max-width: 620px;
  margin-top: 12px;
}

.dividerLine {
  flex: 1;
  height: 1px;
  background: var(--rn-hair-2);
}

.dividerLabel {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-4);
}

/* ── Explore form ── */
.exploreForm {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 620px;
  height: 44px;
  padding: 3px 3px 3px 18px;
  background: var(--rn-ink);
  border: 1px solid var(--rn-hair);
  border-radius: var(--rn-radius-pill);
  gap: 10px;
  transition: border-color 0.18s, box-shadow 0.18s;
}

.exploreForm:focus-within {
  border-color: var(--rn-cyan);
  box-shadow: 0 0 0 3px var(--rn-cyan-glow);
}

.exploreInput {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--rn-font-display);
  font-size: 14px;
  color: var(--rn-txt-0);
  letter-spacing: var(--rn-tracked-1);
}
.exploreInput::placeholder { color: var(--rn-txt-3); }

.exploreBtn {
  height: 100%;
  padding: 0 20px;
  border-radius: var(--rn-radius-pill);
  border: 1px solid var(--rn-cyan);
  background: transparent;
  color: var(--rn-cyan);
  font-family: var(--rn-font-display);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}

.exploreBtn:hover {
  background: var(--rn-cyan-glow);
  color: var(--rn-cyan-h);
  box-shadow: 0 0 18px -4px var(--rn-cyan-glow);
}

/* ── Saved trees ── */
.savedSection {
  width: 100%;
  max-width: 900px;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.savedHeader {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rn-hair);
}

.savedTag {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-gold);
  letter-spacing: var(--rn-tracked-4);
  padding: 3px 8px;
  border: 1px solid var(--rn-gold);
  border-radius: var(--rn-radius-sm);
  background: var(--rn-gold-glow);
  line-height: 1.4;
}

.savedHeading {
  font-family: var(--rn-font-display);
  font-size: 16px;
  font-weight: 500;
  color: var(--rn-txt-0);
  letter-spacing: var(--rn-tracked-1);
  text-transform: none;
}

.savedCount {
  margin-left: auto;
  font-family: var(--rn-font-mono);
  font-size: 11px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-2);
}

.savedList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 14px;
}

.savedItem {
  background: var(--rn-ink);
  border: 1px solid var(--rn-hair-2);
  border-radius: var(--rn-radius-md);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.15s, background 0.15s, transform 0.15s;
}

.savedItem:hover {
  border-color: var(--rn-hair-3);
  background: var(--rn-card-h);
  transform: translateY(-1px);
}

.savedInfo {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.savedTopic {
  font-family: var(--rn-font-display);
  font-weight: 500;
  font-size: 14px;
  color: var(--rn-txt-0);
  letter-spacing: var(--rn-tracked-1);
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.savedProgress {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-2);
  flex-shrink: 0;
}

.savedBarTrack {
  height: 2px;
  background: var(--rn-hair);
  border-radius: 2px;
  overflow: hidden;
}

.savedBarFill {
  height: 100%;
  background: var(--rn-gold);
  box-shadow: 0 0 8px var(--rn-gold-glow);
  transition: width 0.3s ease;
}

.savedActions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.savedOpen {
  padding: 5px 14px;
  font-family: var(--rn-font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  background: transparent;
  color: var(--rn-cyan);
  border: 1px solid var(--rn-cyan);
  border-radius: var(--rn-radius-pill);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.savedOpen:hover {
  background: var(--rn-cyan-glow);
  color: var(--rn-cyan-h);
}

.savedDelete {
  padding: 5px 12px;
  font-family: var(--rn-font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  background: transparent;
  color: var(--rn-txt-2);
  border: 1px solid transparent;
  border-radius: var(--rn-radius-pill);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}

.savedDelete:hover {
  color: var(--rn-red);
  border-color: var(--rn-red);
}
```

### Notes

- The dot-grid background is CSS-only (`radial-gradient` dots + a radial mask to fade the edges). No JS or canvas.
- The generate form and explore form are both **pill-shaped wrappers** that contain the input and its action button. Focus ring is on the wrapper, not the input.
- Saved trees grid switches from a vertical stack (max 500 px) to an auto-fill grid (max 900 px). Screens < 640 px naturally collapse to one column.
- "Your Trees" loses its all-caps heading treatment — it now gets a saved-count monospace chip instead.

## Task 5.4 — Smoke test

1. Visit `/` — hero reads "What do you want *to learn*?" with a gold italic accent on the last two words.
2. Dot grid visible around the hero but fades out at the edges.
3. Focus the generate input → gold glow ring on the pill.
4. Type "cooking" and submit → status line in mono beneath the form.
5. Generate succeeds → navigates to the TreeView (that screen is restyled in doc 06).
6. Return, see saved trees as hairline cards in 2 columns. Hover one → border brightens, card lifts 1 px.
7. The explore input below shows a cyan focus ring and a cyan "Explore →" button.

## Verification checklist

- [ ] `PromptView.jsx` matches Task 5.1 structure.
- [ ] `SavedTreesList.jsx` matches Task 5.2 structure.
- [ ] Only the **landing-page selectors** in `SkillTree.module.css` were replaced; the `.treeView`, `.treeHeader`, `.detailPanel`, `.tabBar`, `.graph :global` blocks are untouched.
- [ ] No `#333`, `#666`, `#888`, `#a78bfa`, or `hsl(142...` literals in the new block.
- [ ] Build succeeds.
- [ ] Hero headline has a serif italic accent word.

## Out of scope

- `TreeView` screen and its header / detail panel — doc 06.
- `SkillGraph` SVG node styling — doc 07.
- Any change to `generateTree` / `openTree` / `deleteTree` behavior.
