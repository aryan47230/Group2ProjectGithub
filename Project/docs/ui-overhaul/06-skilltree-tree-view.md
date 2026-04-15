# 06 — Skill Tree View (header + DetailPanel)

> **Prerequisites:** Doc 01 merged. This doc owns the `TreeView` **frame** — its top bar and right-side `DetailPanel`. The SVG graph itself is doc 07.

## Goal

Wrap the skill graph in Refined Neon chrome: a slim hairline sub-topbar with a monospace progress readout, and a rebuilt `DetailPanel` that feels like Wiki Loop's `ConceptPanel` — deep-ink card, hairline dividers, mono eyebrow labels, segmented pill tab bar, coloured list-bullets that use the RN accent system, and a clear cyan-or-gold complete button.

Visual target for the TreeView header (46 px tall, under AppHeader):

- Left: a pill-shaped **← Back** ghost button.
- Middle: the tree topic in Outfit medium + a small mono "TOPIC" eyebrow above it.
- Right: mono `03/12 · 25%` progress text + a 160 × 4 px hairline track with a cyan glowing fill.

Visual target for the DetailPanel:

- 420 px wide, `--rn-ink` background, hairline left border, soft inner cyan glow.
- Header: level badge pill (`LVL 3`), skill name in display medium, close button as an X drawn from two 1 px lines (no emoji `✕`).
- Segmented pill tab bar (`OVERVIEW / LEARN / RESOURCES`) — same pattern as the AppHeader tabs but scoped in-panel.
- Section labels are mono uppercase with tracked letter-spacing. List bullets use gold (overview), cyan (learn), violet (concepts), gold again (resources).
- Complete button: cyan pill when not done, gold pill when done.

## Files touched

**Modified:**
- `client/src/components/SkillTree/TreeView.jsx` (small structural tweaks)
- `client/src/components/SkillTree/DetailPanel.jsx` (replace `✕` with styled span)
- `client/src/components/SkillTree/SkillTree.module.css` — **only** the `.treeView` / `.treeHeader` / `.backBtn` / `.treeTitle` / `.treeBody` / `.graphContainer` / `.progressWrap` / `.progressLabel` / `.progressTrack` / `.progressFill` / `.detailPanel` / `.detailPanelOpen` / `.detailHeader` / `.detailName` / `.detailClose` / `.detailLevel` / `.tabBar` / `.tabBtn` / `.tabBtnActive` / `.tabPane` / `.detailLabel` / `.detailDescription` / `.list` / `.requires` / `.tips` / `.outcomes` / `.mistakes` / `.concepts` / `.resources` / `.resourceType` / `.resourceDesc` / `.completeBtn` / `.completeBtnDone` / `.exploreWikiLink` selectors. Do NOT touch the landing selectors (doc 05) or the SVG node selectors (doc 07).

---

## Task 6.1 — Add a topic eyebrow to `TreeView.jsx`

Replace the `<div className={styles.treeHeader}>` block with:

```jsx
<div className={styles.treeHeader}>
  <button className={styles.backBtn} onClick={closeTree}>
    <span className={styles.backArrow}>←</span>
    <span>Back</span>
  </button>

  <div className={styles.treeTitleWrap}>
    <span className={styles.treeEyebrow}>TOPIC</span>
    <h2 className={styles.treeTitle}>{currentTopic}</h2>
  </div>

  <div className={styles.progressWrap}>
    <span className={styles.progressLabel}>
      {done.toString().padStart(2, '0')}/{total.toString().padStart(2, '0')} · {Math.round(pct)}%
    </span>
    <div className={styles.progressTrack}>
      <div className={styles.progressFill} style={{ width: `${pct}%` }} />
    </div>
  </div>
</div>
```

Everything else in `TreeView.jsx` is unchanged.

## Task 6.2 — Replace the close glyph in `DetailPanel.jsx`

Find the close button:

```jsx
<button className={styles.detailClose} onClick={onClose} aria-label="Close details">✕</button>
```

Replace with:

```jsx
<button className={styles.detailClose} onClick={onClose} aria-label="Close details">
  <span className={styles.closeIcon} />
</button>
```

Also find the level display:

```jsx
<div className={styles.detailLevel}>Level {node.level}</div>
```

Replace with:

```jsx
<div className={styles.detailLevelRow}>
  <span className={styles.detailLevel}>LVL {node.level}</span>
  {locked && <span className={styles.detailLocked}>LOCKED</span>}
  {done && <span className={styles.detailDone}>COMPLETE</span>}
</div>
```

(The `done` and `locked` variables already exist in scope — see [DetailPanel.jsx](../../client/src/components/SkillTree/DetailPanel.jsx).)

Also replace the completed button text:

```jsx
{done ? '✓ Completed' : 'Mark as Complete'}
```

with:

```jsx
{done ? 'COMPLETED' : 'MARK COMPLETE'}
```

No other JSX changes.

## Task 6.3 — Replace the relevant CSS block

In `client/src/components/SkillTree/SkillTree.module.css`, locate the section starting with `/* ── Tree screen ── */` (currently around line 218) and replace everything from that comment through the end of `.exploreWikiLink a { ... }` (currently around line 550, the end of the file) with the block below.

```css
/* ── Tree screen ── */
.treeView {
  display: flex;
  flex-direction: column;
  position: fixed;
  inset: 0;
  top: var(--rn-topbar-height);
  background: var(--rn-void);
  z-index: 50;
}

/* ── Header ── */
.treeHeader {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  height: var(--rn-subtopbar-height);
  background: var(--rn-paper);
  border-bottom: 1px solid var(--rn-hair-2);
  flex-shrink: 0;
}

.backBtn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 12px;
  font-family: var(--rn-font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  background: transparent;
  color: var(--rn-txt-1);
  border: 1px solid var(--rn-hair-2);
  border-radius: var(--rn-radius-pill);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
}

.backBtn:hover {
  color: var(--rn-cyan);
  border-color: var(--rn-cyan);
  background: var(--rn-cyan-glow);
}

.backArrow {
  font-family: var(--rn-font-mono);
  font-size: 13px;
  line-height: 1;
  transform: translateY(-0.5px);
}

.treeTitleWrap {
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-self: center;
  align-items: center;
  min-width: 0;
}

.treeEyebrow {
  font-family: var(--rn-font-mono);
  font-size: 9px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-4);
  line-height: 1;
}

.treeTitle {
  font-family: var(--rn-font-display);
  font-size: 15px;
  font-weight: 500;
  color: var(--rn-gold);
  letter-spacing: var(--rn-tracked-1);
  text-transform: capitalize;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Progress cluster ── */
.progressWrap {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
}

.progressLabel {
  font-family: var(--rn-font-mono);
  font-size: 11px;
  color: var(--rn-cyan);
  letter-spacing: var(--rn-tracked-2);
  white-space: nowrap;
}

.progressTrack {
  width: 160px;
  height: 3px;
  background: var(--rn-hair);
  border-radius: 2px;
  overflow: hidden;
}

.progressFill {
  height: 100%;
  background: var(--rn-cyan);
  box-shadow: 0 0 10px var(--rn-cyan-glow);
  transition: width 0.3s ease;
  width: 0%;
}

/* ── Body / graph container ── */
.treeBody {
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
}

.graphContainer {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  background:
    radial-gradient(1000px 700px at 50% 30%, rgba(77, 159, 255, 0.04), transparent 60%),
    var(--rn-void);
}

.graphContainer svg { display: block; }

/* ── Detail panel ── */
.detailPanel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  background: var(--rn-ink);
  border-left: 1px solid var(--rn-hair-2);
  overflow-y: auto;
  padding: 24px 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transform: translateX(100%);
  transition: transform 0.22s cubic-bezier(0.2, 0.7, 0.2, 1);
  z-index: 10;
  visibility: hidden;
  pointer-events: none;
  box-shadow: -40px 0 80px -40px rgba(0, 0, 0, 0.65),
              inset 1px 0 0 var(--rn-hair);
}

.detailPanelOpen {
  transform: translateX(0);
  visibility: visible;
  pointer-events: auto;
}

.detailHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--rn-hair);
}

.detailName {
  font-family: var(--rn-font-display);
  font-size: 20px;
  font-weight: 500;
  color: var(--rn-txt-0);
  letter-spacing: var(--rn-tracked-1);
  line-height: 1.25;
}

.detailClose {
  background: transparent;
  border: 1px solid var(--rn-hair-2);
  color: var(--rn-txt-1);
  width: 28px;
  height: 28px;
  border-radius: var(--rn-radius-pill);
  cursor: pointer;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s, border-color 0.15s;
}

.detailClose:hover {
  color: var(--rn-cyan);
  border-color: var(--rn-cyan);
}

/* X icon from two hairlines */
.closeIcon {
  width: 10px;
  height: 10px;
  position: relative;
}
.closeIcon::before,
.closeIcon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform-origin: center;
}
.closeIcon::before { transform: rotate(45deg); }
.closeIcon::after  { transform: rotate(-45deg); }

/* Level row (level pill + optional locked/done pill) */
.detailLevelRow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: -4px;
}

.detailLevel {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-gold);
  letter-spacing: var(--rn-tracked-3);
  padding: 3px 8px;
  border: 1px solid var(--rn-gold);
  border-radius: var(--rn-radius-sm);
  background: var(--rn-gold-glow);
  line-height: 1.4;
}

.detailLocked {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-3);
  padding: 3px 8px;
  border: 1px solid var(--rn-hair-2);
  border-radius: var(--rn-radius-sm);
}

.detailDone {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-cyan);
  letter-spacing: var(--rn-tracked-3);
  padding: 3px 8px;
  border: 1px solid var(--rn-cyan);
  border-radius: var(--rn-radius-sm);
  background: var(--rn-cyan-glow);
}

/* ── Tab bar ── */
.tabBar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding: 3px;
  background: var(--rn-void);
  border: 1px solid var(--rn-hair);
  border-radius: var(--rn-radius-pill);
  margin-top: 4px;
}

.tabBtn {
  padding: 7px 0;
  font-family: var(--rn-font-display);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  background: transparent;
  color: var(--rn-txt-2);
  border: 1px solid transparent;
  border-radius: var(--rn-radius-pill);
  cursor: pointer;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}

.tabBtn:hover { color: var(--rn-cyan); }

.tabBtnActive {
  color: var(--rn-gold);
  background: var(--rn-gold-glow);
  border-color: var(--rn-gold);
}

.tabPane {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* ── Labels + text ── */
.detailLabel {
  font-family: var(--rn-font-mono);
  font-size: 9.5px;
  color: var(--rn-txt-2);
  font-weight: 500;
  letter-spacing: var(--rn-tracked-4);
  text-transform: uppercase;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.detailLabel::before {
  content: '';
  width: 14px;
  height: 1px;
  background: var(--rn-hair-3);
}

.detailDescription {
  font-family: var(--rn-font-display);
  font-size: 13px;
  color: var(--rn-txt-1);
  line-height: 1.7;
  letter-spacing: var(--rn-tracked-1);
}

/* ── Bulleted lists ── */
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.list li {
  font-family: var(--rn-font-display);
  font-size: 12.5px;
  color: var(--rn-txt-1);
  padding-left: 18px;
  position: relative;
  line-height: 1.55;
  letter-spacing: var(--rn-tracked-1);
}

.requires li::before  { content: "→"; position: absolute; left: 0; color: var(--rn-gold);   font-family: var(--rn-font-mono); }
.tips li::before      { content: "•"; position: absolute; left: 4px; color: var(--rn-gold); font-size: 14px; top: -2px; }
.outcomes li::before  { content: "✓"; position: absolute; left: 0; color: var(--rn-cyan);   font-family: var(--rn-font-mono); font-size: 11px; top: 1px; }
.mistakes li::before  { content: "×"; position: absolute; left: 0; color: var(--rn-red);    font-family: var(--rn-font-mono); font-size: 13px; top: 0; }
.concepts li::before  { content: "◆"; position: absolute; left: 0; color: var(--rn-violet); font-size: 10px; top: 2px; }
.resources li::before { content: "↗"; position: absolute; left: 0; color: var(--rn-gold);   font-family: var(--rn-font-mono); }

.concepts li strong {
  color: var(--rn-violet);
  font-weight: 500;
}

.resources a {
  color: var(--rn-cyan);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s;
}

.resources a:hover {
  text-decoration: underline;
  color: var(--rn-cyan-h);
}

.resourceType {
  font-family: var(--rn-font-mono);
  font-size: 9px;
  color: var(--rn-txt-2);
  margin-left: 6px;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
}

.resourceDesc {
  font-family: var(--rn-font-display);
  font-size: 11.5px;
  color: var(--rn-txt-2);
  margin: 4px 0 0;
  line-height: 1.5;
}

.exploreWikiLink a {
  color: var(--rn-gold);
}
.exploreWikiLink a:hover { color: var(--rn-gold-h); }

/* ── Complete button ── */
.completeBtn {
  width: 100%;
  padding: 12px;
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
  transition: background 0.15s, color 0.15s, box-shadow 0.15s, border-color 0.15s;
  margin-top: auto;
}

.completeBtn:hover {
  background: var(--rn-cyan-glow);
  color: var(--rn-cyan-h);
  box-shadow: 0 0 24px -4px var(--rn-cyan-glow);
}

.completeBtnDone {
  border-color: var(--rn-gold);
  color: var(--rn-gold);
  background: var(--rn-gold-glow);
}

.completeBtnDone:hover {
  background: var(--rn-gold);
  color: var(--rn-void);
  box-shadow: 0 0 24px -4px var(--rn-gold-glow-2);
}
```

### Notes

- The `.treeHeader` is 46 px (sub-topbar height) and sits beneath the 56 px main header, so the two share a vertical rhythm without feeling doubled.
- The detail panel width went from 380 px → 420 px to give the new mono labels room to breathe.
- The `locked` state pill and `done` state pill are added to `DetailPanel.jsx` in Task 6.2 — the CSS for both lives here.
- Bullet glyphs are plain characters (`→ • ✓ × ◆ ↗`), colored by category, avoiding icon fonts.

## Task 6.4 — Smoke test

1. From `/`, generate any tree → TreeView opens.
2. Header is 46 px, `← Back` pill on the left, `TOPIC / topic name` centered, progress on the right in cyan mono.
3. Click a node → panel slides in from the right.
4. Panel shows level pill + status pill (locked/complete/both absent).
5. Tab bar is a 3-column pill track; active tab is gold.
6. Overview shows requires with `→` gold arrows, tips with gold bullets, outcomes with cyan checks.
7. Learn tab shows concepts with violet `◆`, mistakes with red `×`.
8. Resources tab has gold `↗` bullets, cyan links.
9. Click **MARK COMPLETE** → button flips to gold pill, label reads **COMPLETED**.

## Verification checklist

- [ ] `TreeView.jsx` header uses the new `.treeTitleWrap` / `.treeEyebrow` / `.backArrow` structure.
- [ ] `DetailPanel.jsx` uses `.closeIcon`, `.detailLevelRow`, and the new status pills.
- [ ] CSS block from `.treeView` down to `.completeBtnDone:hover` matches Task 6.3.
- [ ] No `#a78bfa`, `#1e1a2e`, `hsl(142...` literals remain in the replaced block.
- [ ] Build succeeds.
- [ ] Panel open/close animation is smooth and doesn't jump.

## Out of scope

- Any SVG node styling — doc 07.
- Any hover dim/highlight behavior inside the graph — doc 07.
- Prompt/landing-page selectors — doc 05.
