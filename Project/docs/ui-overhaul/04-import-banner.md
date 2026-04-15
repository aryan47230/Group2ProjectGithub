# 04 — Import Banner

> **Prerequisites:** Doc 01 merged.

## Goal

Rebuild the local-tree import notification as a slim 36 px hairline strip that sits directly under the `AppHeader`. It should feel like a build-status bar, not a banner ad.

Visual target:

- Height: 36 px, `--rn-ink` background, hairline bottom border.
- Left: a mono `IMPORT` tag + the message in regular display text.
- Right: a cyan "Import" pill + a ghost "Dismiss" action.
- Slides in from the top with a 160 ms transform fade.

## Files touched

**Modified:**
- `client/src/components/ImportBanner/ImportBanner.jsx` (tiny)
- `client/src/components/ImportBanner/ImportBanner.module.css` (rewrite)

---

## Task 4.1 — Update `ImportBanner.jsx`

Replace the JSX return with:

```jsx
return (
  <div className={styles.banner} role="status" aria-live="polite">
    <div className={styles.left}>
      <span className={styles.tag}>IMPORT</span>
      <p className={styles.message}>
        {count} local tree{count > 1 ? 's' : ''} found — sync to your account?
      </p>
    </div>
    <div className={styles.actions}>
      <button className={styles.yes} onClick={acceptImport}>Import</button>
      <button className={styles.no} onClick={dismissImport}>Dismiss</button>
    </div>
  </div>
);
```

Wording change: "No thanks" → "Dismiss" (shorter, matches the tool-grade voice).

No other JSX or behavior changes. Hooks, imports, and early return are unchanged.

## Task 4.2 — Rewrite `ImportBanner.module.css`

Replace the entire file with:

```css
/* ── ImportBanner — Refined Neon ───────────────────── */

.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 36px;
  padding: 0 24px;
  background: var(--rn-ink);
  border-bottom: 1px solid var(--rn-hair-2);
  animation: rn-banner-in 0.18s ease-out;
}

@keyframes rn-banner-in {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0);    }
}

.left {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}

.tag {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  letter-spacing: var(--rn-tracked-3);
  color: var(--rn-cyan);
  padding: 2px 7px;
  border: 1px solid var(--rn-cyan);
  border-radius: var(--rn-radius-sm);
  background: var(--rn-cyan-glow);
  line-height: 1.4;
  flex-shrink: 0;
}

.message {
  font-family: var(--rn-font-display);
  font-size: 12.5px;
  color: var(--rn-txt-1);
  letter-spacing: var(--rn-tracked-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.yes {
  padding: 5px 14px;
  font-family: var(--rn-font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  border-radius: var(--rn-radius-pill);
  border: 1px solid var(--rn-cyan);
  background: transparent;
  color: var(--rn-cyan);
  cursor: pointer;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}

.yes:hover {
  background: var(--rn-cyan-glow);
  color: var(--rn-cyan-h);
  box-shadow: 0 0 16px -4px var(--rn-cyan-glow);
}

.no {
  padding: 5px 12px;
  font-family: var(--rn-font-display);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  border-radius: var(--rn-radius-pill);
  border: 1px solid transparent;
  background: transparent;
  color: var(--rn-txt-2);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}

.no:hover {
  color: var(--rn-txt-0);
  border-color: var(--rn-hair-3);
}
```

### Notes

- The `tag` pill on the left is the only saturated color in the bar — it anchors the eye without being loud.
- Horizontal layout; on narrow viewports the message ellipses rather than wrapping. No responsive reflow needed for a desktop-first tool.

## Task 4.3 — Smoke test

Trigger the import flow (sign up with local trees present) and verify:

- Banner height is 36 px, deep-ink background, hairline bottom.
- `IMPORT` tag on the left in cyan mono.
- Message text in display font, single line, truncates if long.
- "Import" is a cyan outline pill; "Dismiss" is ghost grey.
- Clicking either button removes the banner cleanly.

## Verification checklist

- [ ] `ImportBanner.module.css` matches Task 4.2 verbatim.
- [ ] JSX uses the new `.left` wrapper with `.tag` + `.message`.
- [ ] No purple styling, no emoji, no `#888` literals.
- [ ] Build succeeds.

## Out of scope

- Import business logic (accept/dismiss actions remain unchanged).
- Any animation beyond the 180 ms in-fade.
