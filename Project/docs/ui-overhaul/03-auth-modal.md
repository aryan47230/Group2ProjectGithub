# 03 — Auth Modal

> **Prerequisites:** Doc 01 merged.

## Goal

Restyle `AuthModal` to match the Refined Neon system: deep-space panel card with hairline borders, segmented pill tabs, mono uppercase labels, cyan-focused inputs, cyan-outlined submit, ghost cancel. No purple fill, no emoji close, no harsh `#666` metal grey.

The JSX stays almost identical — only the close button glyph and a couple of structural tweaks change. The bulk of the work is CSS.

## Files touched

**Modified:**
- `client/src/components/Auth/AuthModal.jsx` (tiny)
- `client/src/components/Auth/AuthModal.module.css` (rewrite)

---

## Task 3.1 — Minor `AuthModal.jsx` tweaks

The existing component (see `client/src/components/Auth/AuthModal.jsx`) is fine structurally. Apply these three small edits:

1. **Replace the `✕` close glyph with the word "Cancel"** (already the button label — confirm the JSX uses text, not an emoji; it already does at line 81). **No change needed if the file matches.**
2. **Add a `data-mode` attribute to the modal** so CSS can tint based on signin vs signup without extra class logic:

   ```jsx
   <div className={styles.modal} data-mode={mode}>
   ```
3. **Wrap the form heading area in an `.modalHeader` div** holding a small mono eyebrow and the tabs. Insert between `<div className={styles.modal}>` and `<div className={styles.tabs}>`:

   ```jsx
   <div className={styles.modalHeader}>
     <span className={styles.eyebrow}>
       {mode === 'login' ? 'ACCESS' : 'JOIN'} · STG
     </span>
     <div className={styles.tabs}>
       {/* existing tab buttons unchanged */}
     </div>
   </div>
   ```

   Remove the now-duplicated outer `.tabs` div so there's only one tabs element inside `.modalHeader`.

Everything else in the file is unchanged.

## Task 3.2 — Rewrite `AuthModal.module.css`

Replace the entire file with:

```css
/* ── AuthModal — Refined Neon ───────────────────────── */

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(3, 6, 15, 0.72);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: rn-overlay-in 0.18s ease-out;
}

@keyframes rn-overlay-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.modal {
  position: relative;
  width: 100%;
  max-width: 400px;
  background: var(--rn-ink);
  border: 1px solid var(--rn-hair-2);
  border-radius: var(--rn-radius-lg);
  padding: 28px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* Soft outer glow + inner hairline highlight */
  box-shadow:
    0 0 0 1px var(--rn-hair),
    0 24px 60px -20px rgba(0, 0, 0, 0.75),
    0 0 80px -20px var(--rn-cyan-glow);

  animation: rn-modal-in 0.22s cubic-bezier(0.2, 0.7, 0.2, 1);
}

@keyframes rn-modal-in {
  from { opacity: 0; transform: translateY(8px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0)   scale(1); }
}

/* Corner hairline brackets (pure decoration) */
.modal::before,
.modal::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--rn-gold);
  border-style: solid;
  opacity: 0.55;
  pointer-events: none;
}
.modal::before {
  top: -1px; left: -1px;
  border-width: 1px 0 0 1px;
  border-top-left-radius: var(--rn-radius-lg);
}
.modal::after {
  bottom: -1px; right: -1px;
  border-width: 0 1px 1px 0;
  border-bottom-right-radius: var(--rn-radius-lg);
}

/* ── Header ── */
.modalHeader {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.eyebrow {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  letter-spacing: var(--rn-tracked-4);
  color: var(--rn-txt-2);
  text-transform: uppercase;
}

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  padding: 3px;
  background: var(--rn-void);
  border: 1px solid var(--rn-hair);
  border-radius: var(--rn-radius-pill);
}

.tab {
  background: transparent;
  color: var(--rn-txt-2);
  border: 1px solid transparent;
  border-radius: var(--rn-radius-pill);
  font-family: var(--rn-font-display);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  padding: 8px 0;
  cursor: pointer;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
}

.tab:hover {
  color: var(--rn-cyan);
}

.tabActive {
  color: var(--rn-gold);
  background: var(--rn-gold-glow);
  border-color: var(--rn-gold);
}

/* ── Form ── */
.form {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form label {
  font-family: var(--rn-font-mono);
  font-size: 10px;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
  margin-top: 10px;
}

.form input {
  padding: 11px 14px;
  border-radius: var(--rn-radius-md);
  border: 1px solid var(--rn-hair-2);
  background: var(--rn-void);
  color: var(--rn-txt-0);
  font-size: 14px;
  font-family: var(--rn-font-display);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s, background 0.15s;
}

.form input::placeholder { color: var(--rn-txt-3); }

.form input:focus {
  border-color: var(--rn-cyan);
  background: rgba(0, 255, 242, 0.025);
  box-shadow: 0 0 0 3px var(--rn-cyan-glow);
}

.error {
  font-family: var(--rn-font-mono);
  font-size: 11px;
  color: var(--rn-red);
  margin-top: 6px;
  letter-spacing: var(--rn-tracked-1);
}
.error::before {
  content: '! ';
  color: var(--rn-red);
  opacity: 0.7;
}

/* ── Submit ── */
.submit {
  margin-top: 12px;
  width: 100%;
  padding: 12px;
  border-radius: var(--rn-radius-pill);
  border: 1px solid var(--rn-cyan);
  background: transparent;
  color: var(--rn-cyan);
  font-family: var(--rn-font-display);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, box-shadow 0.15s;
}

.submit:hover {
  background: var(--rn-cyan-glow);
  color: var(--rn-cyan-h);
  box-shadow: 0 0 28px -6px var(--rn-cyan-glow);
}

.submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: transparent;
  box-shadow: none;
}

/* ── Cancel ── */
.close {
  background: transparent;
  color: var(--rn-txt-2);
  border: none;
  font-family: var(--rn-font-display);
  font-weight: 500;
  padding: 4px 0;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: var(--rn-tracked-2);
  text-transform: uppercase;
  transition: color 0.15s;
  align-self: center;
}
.close:hover { color: var(--rn-cyan); }

/* Mode-specific tint: signup leans cyan, login leans gold */
.modal[data-mode="register"] .submit {
  border-color: var(--rn-gold);
  color: var(--rn-gold);
}
.modal[data-mode="register"] .submit:hover {
  background: var(--rn-gold-glow);
  color: var(--rn-gold-h);
  box-shadow: 0 0 28px -6px var(--rn-gold-glow);
}
```

### Notes

- Gold corner brackets on the modal are pure decoration and echo the Wiki Loop "tool chrome" feel.
- Sign In defaults to a cyan submit pill; Sign Up flips to gold via the `[data-mode="register"]` selector — a visual cue that the two paths are distinct.
- All inputs land on the `--rn-void` surface to push them visually below the card.
- Error message prefixed with a subtle `!` via `::before` — no icon library.

## Task 3.3 — Smoke test

1. Click **Sign In** in the header → modal opens with cyan submit pill, gold corner brackets, `ACCESS · STG` eyebrow, both tabs pill-style inside a track.
2. Switch to **Sign Up** tab → `JOIN · STG` eyebrow updates, submit pill flips to gold.
3. Focus an input → cyan 3 px glow ring appears.
4. Submit with bad credentials → red hairline error prefixed with `!`.
5. Click outside / Cancel → modal closes with subtle fade.

## Verification checklist

- [ ] `AuthModal.module.css` matches Task 3.2 verbatim.
- [ ] `data-mode` attribute is present on `.modal`.
- [ ] `.modalHeader` wraps eyebrow + tabs.
- [ ] No purple fill, no `#666`, no `#a78bfa` literals anywhere in the file.
- [ ] Build succeeds.
- [ ] Modal visuals match the smoke test above.

## Out of scope

- AuthContext logic, fetch error handling, validation.
- Social/OAuth (none exists).
- Keyboard escape handler (existing overlay click-outside stays).
