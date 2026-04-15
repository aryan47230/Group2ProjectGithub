# 02 — AppHeader (top navigation)

> **Prerequisites:** Doc 01 (`refined-neon.css` + rebuilt `globals.css`) is merged. The `--rn-*` tokens referenced below must already resolve.

## Goal

Replace the glowing purple header with a tool-grade hairline topbar. The new header is:

- 56 px tall, deep `--rn-paper` background with a 1 px hairline bottom border (no gradient underline).
- Left: brand lockup — **STG** mono tag + "Skill Tree Generator" display title + a tiny uppercase "v1" chip.
- Center: two pill tabs (`Skill Tree` / `Explore`), active = gold border + gold text, hover = cyan border + cyan text.
- Right: auth cluster. Signed-out = ghost "Sign In" + cyan-bordered pill "Sign Up". Signed-in = `@username` in monospace + ghost "Logout".

No emojis. No dropshadow glow. No gradient underline. Everything is a 1 px hairline, a letter, or a pill.

## Files touched

**Modified:**
- `client/src/components/AppHeader/AppHeader.jsx`
- `client/src/components/AppHeader/AppHeader.module.css`

**Not touched:** routing, auth context, or any consumer of `AppHeader`. The exported component signature `({ onSignIn, onSignUp })` is preserved.

---

## Task 2.1 — Replace `AppHeader.jsx`

Replace the entire file with:

```jsx
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './AppHeader.module.css';

export default function AppHeader({ onSignIn, onSignUp }) {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const isExplore = pathname.startsWith('/explore');

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.brandTag}>STG</span>
        <span className={styles.brandTitle}>
          Skill Tree <span className={styles.brandItalic}>Generator</span>
        </span>
        <span className={styles.brandChip}>v1</span>
      </div>

      <nav className={styles.tabs} aria-label="Primary">
        <Link
          to="/"
          className={`${styles.tab} ${!isExplore ? styles.tabActive : ''}`}
        >
          Skill Tree
        </Link>
        <Link
          to="/explore"
          className={`${styles.tab} ${isExplore ? styles.tabActive : ''}`}
        >
          Explore
        </Link>
      </nav>

      <div className={styles.auth}>
        {user ? (
          <>
            <span className={styles.greeting}>@{user.username}</span>
            <button className={styles.btnGhost} onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <button className={styles.btnGhost} onClick={onSignIn}>Sign In</button>
            <button className={styles.btnPill} onClick={onSignUp}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
}
```

Structural changes from the original:

- Brand is now a three-element lockup: mono tag, display title with one italic accent word, uppercase version chip.
- Tabs get an `aria-label`.
- Auth buttons re-classed: both visible actions use `btnGhost` / `btnPill`. The ugly filled purple CTA is gone.
- Signed-in greeting is `@username` in monospace.

## Task 2.2 — Replace `AppHeader.module.css`

Replace the entire file with:

```css
/* ── AppHeader — Refined Neon ───────────────────────────── */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  height: var(--rn-topbar-height);
  padding: 0 24px;
  background: var(--rn-paper);
  border-bottom: 1px solid var(--rn-hair-2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* ── Brand ── */
.brand {
  display: flex;
  align-items: baseline;
  gap: 12px;
  min-width: 0;
}

.brandTag {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-4);
  color: var(--rn-gold);
  padding: 3px 6px;
  border: 1px solid var(--rn-hair-3);
  border-radius: var(--rn-radius-sm);
  text-transform: uppercase;
  line-height: 1;
  transform: translateY(-1px);
}

.brandTitle {
  font-family: var(--rn-font-display);
  font-size: 15px;
  font-weight: 500;
  color: var(--rn-txt-0);
  letter-spacing: var(--rn-tracked-1);
  white-space: nowrap;
}

.brandItalic {
  font-family: var(--rn-font-serif);
  font-style: italic;
  font-weight: 400;
  color: var(--rn-gold);
  font-size: 17px;
  margin-left: 2px;
}

.brandChip {
  font-family: var(--rn-font-mono);
  font-size: 9px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  padding: 2px 5px;
  border: 1px solid var(--rn-hair);
  border-radius: var(--rn-radius-sm);
  line-height: 1;
}

/* ── Tabs ── */
.tabs {
  display: flex;
  gap: 4px;
  justify-self: center;
  padding: 4px;
  background: var(--rn-ink);
  border: 1px solid var(--rn-hair);
  border-radius: var(--rn-radius-pill);
}

.tab {
  font-family: var(--rn-font-display);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  color: var(--rn-txt-2);
  padding: 7px 18px;
  border: 1px solid transparent;
  border-radius: var(--rn-radius-pill);
  background: transparent;
  text-decoration: none;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}

.tab:hover {
  color: var(--rn-cyan);
  border-color: var(--rn-hair-3);
}

.tabActive {
  color: var(--rn-gold);
  border-color: var(--rn-gold);
  background: var(--rn-gold-glow);
  box-shadow: 0 0 18px -4px var(--rn-gold-glow);
}

.tabActive:hover {
  color: var(--rn-gold-h);
  border-color: var(--rn-gold-h);
}

/* ── Auth cluster ── */
.auth {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-self: end;
}

.greeting {
  font-family: var(--rn-font-mono);
  font-size: 12px;
  color: var(--rn-txt-1);
  letter-spacing: var(--rn-tracked-1);
}

.btnGhost {
  background: transparent;
  border: 1px solid transparent;
  color: var(--rn-txt-1);
  font-family: var(--rn-font-display);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  padding: 7px 14px;
  border-radius: var(--rn-radius-pill);
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}

.btnGhost:hover {
  color: var(--rn-cyan);
  border-color: var(--rn-hair-3);
}

.btnPill {
  background: transparent;
  border: 1px solid var(--rn-cyan);
  color: var(--rn-cyan);
  font-family: var(--rn-font-display);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  padding: 7px 16px;
  border-radius: var(--rn-radius-pill);
  cursor: pointer;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}

.btnPill:hover {
  background: var(--rn-cyan-glow);
  color: var(--rn-cyan-h);
  box-shadow: 0 0 20px -4px var(--rn-cyan-glow);
}
```

### Notes

- The header is a 3-column grid so the tabs are truly centered regardless of brand/auth width.
- There is no `::after` gradient underline anymore. The hairline `border-bottom` is intentional.
- `tab` uses a 4 px inner padding to sit inside a pill-shaped track (the `.tabs` container). Active tab rides a gold glow halo.
- Ghost buttons never show a border until hover — this keeps the right side visually quiet.

## Task 2.3 — Smoke test

Start the dev server (`npm run dev`), visit `/`, verify:

- Header is 56 px tall with a hairline bottom.
- Brand tag **STG** is monospace gold with a rounded border.
- "Generator" is in Instrument Serif italic gold, "Skill Tree" is Outfit medium white.
- Tabs are pill-shaped inside a larger track; hover turns text cyan; active tab shows a gold halo.
- Right side has a ghost "Sign In" and a cyan-outlined "Sign Up" pill.
- Navigate to `/explore`: Explore tab becomes active (gold), Skill Tree tab dims to grey.
- Sign in: greeting shows `@username` in monospace, Logout is a ghost pill.

## Verification checklist

- [ ] `AppHeader.jsx` matches Task 2.1 structure.
- [ ] `AppHeader.module.css` matches Task 2.2 verbatim.
- [ ] No reference to `--accent-purple-light` or any removed class in either file.
- [ ] No emojis anywhere.
- [ ] Production build succeeds.
- [ ] Header renders correctly on both `/` and `/explore`.

## Out of scope

- The sub-topbar used on the Explore route (`Topbar.jsx`) — that's part of doc 08.
- The auth modal itself — doc 03.
- Import banner — doc 04.
