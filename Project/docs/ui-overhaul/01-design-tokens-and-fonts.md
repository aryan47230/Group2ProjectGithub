# 01 — Design Tokens & Fonts (foundation)

> **Prerequisites:** None. This is the first doc. Every other doc in this series assumes the work here is complete.

## Goal

Establish a single source of truth for the Refined Neon design language: colors, hairlines, typography, spacing, and sizing. Retire the purple-dominant "Skill Tree" palette and the scoped `.exploreScope` hack. After this doc, the entire app — Skill Tree *and* Explore — uses the same deep-space look by default.

## Visual target

- **Backgrounds:** near-black deep space (`#03060f` void → `#070b18` ink → `#0a0f1a` paper)
- **Structure:** 1 px hairline borders in a faint blue tint, never flat grey
- **Accents:** gold (center/trail), blue (core), cyan (related/focus), violet (foundation/secondary)
- **Typography:** Outfit for display, JetBrains Mono for data/labels, Instrument Serif *italic* only as a luxury accent word in page hero titles
- **Spacing scale:** `4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 44 · 56` px

## Files touched

**Created:**
- `client/src/styles/refined-neon.css`

**Modified:**
- `client/src/styles/globals.css`

**Deleted:**
- Any `.exploreScope` class body (kept as empty shim for one commit if components still reference it — removed entirely in doc 08).

**Not touched:** any component file. This doc is pure tokens. Components pick them up through existing legacy aliases (`--accent-purple`, `--bg-card`, etc.) which are now re-mapped to Refined Neon vars.

---

## Task 1.1 — Create `refined-neon.css`

Create a new file at `client/src/styles/refined-neon.css` with the following content verbatim. This is the canonical token file — every other doc refers to these `--rn-*` names.

```css
/* Refined Neon — design tokens
 * Source of truth for the Skill Tree Generator UI.
 * Do not hardcode colors elsewhere. Reference these vars by name. */

:root {
  /* ─── Surfaces ─── */
  --rn-void:    #03060f;                 /* canvas base */
  --rn-ink:     #070b18;                 /* cards, panels */
  --rn-paper:   #0a0f1a;                 /* topbar, toolbars */
  --rn-card:    rgba(10, 16, 32, 0.85);  /* translucent cards over graph */
  --rn-card-h:  rgba(14, 22, 42, 0.92);  /* hover */

  /* ─── Hairlines (blue-tinted, never grey) ─── */
  --rn-hair:    rgba(130, 170, 220, 0.08);
  --rn-hair-2:  rgba(130, 170, 220, 0.16);
  --rn-hair-3:  rgba(130, 170, 220, 0.28);

  /* ─── Text ─── */
  --rn-txt-0: #eef2fb;  /* headlines */
  --rn-txt-1: #9aa7c0;  /* body */
  --rn-txt-2: #556278;  /* meta / labels */
  --rn-txt-3: #35353c;  /* disabled */

  /* ─── Neon accents ─── */
  --rn-gold:        #ffaa40;
  --rn-gold-h:      #ffc266;
  --rn-gold-glow:   rgba(255, 170, 64, 0.22);
  --rn-gold-glow-2: rgba(255, 170, 64, 0.45);

  --rn-blue:        #4d9fff;
  --rn-blue-h:      #7ab7ff;
  --rn-blue-glow:   rgba(77, 159, 255, 0.32);

  --rn-cyan:        #00fff2;
  --rn-cyan-h:      #66fff6;
  --rn-cyan-glow:   rgba(0, 255, 242, 0.28);

  --rn-violet:       #a78bfa;
  --rn-violet-h:     #c4b5fd;
  --rn-violet-glow:  rgba(167, 139, 250, 0.28);

  --rn-green:       #34d399;
  --rn-red:         #ff4466;
  --rn-grey:        #5a6a85;

  /* ─── Typography ─── */
  --rn-font-display: 'Outfit', system-ui, sans-serif;
  --rn-font-mono:    'JetBrains Mono', 'Fira Code', monospace;
  --rn-font-serif:   'Instrument Serif', Georgia, serif;

  --rn-tracked-1: 0.04em;
  --rn-tracked-2: 0.08em;
  --rn-tracked-3: 0.14em;
  --rn-tracked-4: 0.18em;
  --rn-tracked-5: 0.22em;

  /* ─── Sizing ─── */
  --rn-topbar-height:   56px;
  --rn-subtopbar-height: 46px;
  --rn-panel-width:     480px;
  --rn-radius-sm: 6px;
  --rn-radius-md: 10px;
  --rn-radius-lg: 14px;
  --rn-radius-pill: 999px;
}
```

## Task 1.2 — Rewrite `globals.css`

Replace the entire contents of `client/src/styles/globals.css` with the block below. This does four things:

1. Imports Instrument Serif (Outfit + JetBrains Mono are already loaded by the existing `<link>` tags in `client/index.html` — verify those exist; if not, add them at the top of `<head>`).
2. Imports `refined-neon.css`.
3. Rebinds every legacy alias (`--bg-primary`, `--accent-purple`, `--border-color`, etc.) to a Refined Neon token so unmodified components keep working.
4. Drops the `.exploreScope` override (now unnecessary — the whole app uses this palette).

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');
@import './refined-neon.css';

:root {
  /* Legacy background aliases → refined neon */
  --bg-primary:    var(--rn-void);
  --bg-secondary:  var(--rn-ink);
  --bg-tertiary:   var(--rn-paper);
  --bg-card:       var(--rn-card);
  --bg-card-hover: var(--rn-card-h);

  /* Legacy border aliases */
  --border-color:   var(--rn-hair-2);
  --border-dim:     var(--rn-hair);
  --border-medium:  var(--rn-hair-2);
  --border-bright:  var(--rn-hair-3);

  /* Legacy neon aliases */
  --neon-cyan:    var(--rn-cyan);
  --neon-blue:    var(--rn-blue);
  --neon-amber:   var(--rn-gold);
  --neon-purple:  var(--rn-violet);
  --neon-green:   var(--rn-green);
  --neon-red:     var(--rn-red);
  --neon-magenta: #f472b6;

  /* Legacy "accent-*" aliases — deliberately repoint the purple brand to gold.
     This single line is what flips the Skill Tree palette from purple to
     Refined Neon without touching any component file. */
  --accent-purple:       var(--rn-gold);
  --accent-purple-light: var(--rn-gold-h);
  --accent-cyan:  var(--rn-cyan);
  --accent-blue:  var(--rn-blue);
  --accent-green: var(--rn-green);
  --accent-amber: var(--rn-gold);
  --accent-gold:  var(--rn-gold);
  --accent-red:   var(--rn-red);
  --accent-white: var(--rn-txt-0);

  /* Legacy text aliases */
  --text-primary:   var(--rn-txt-0);
  --text-secondary: var(--rn-txt-1);
  --text-dim:       var(--rn-txt-2);
  --text-muted:     var(--rn-txt-3);

  /* Sizing aliases */
  --app-nav-height: var(--rn-topbar-height);
  --topbar-height:  var(--rn-subtopbar-height);

  /* Font aliases */
  --font-display: var(--rn-font-display);
  --font-mono:    var(--rn-font-mono);
  --font-main:    var(--rn-font-display);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* hidden attribute always wins */
[hidden] { display: none !important; }

html, body {
  background: var(--rn-void);
  color: var(--rn-txt-0);
  font-family: var(--rn-font-display);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  /* Subtle background atmospherics — faint radial glow from top-left */
  background:
    radial-gradient(1200px 800px at 15% -10%, rgba(77, 159, 255, 0.04), transparent 60%),
    radial-gradient(900px 700px at 85% 100%, rgba(255, 170, 64, 0.03), transparent 55%),
    var(--rn-void);
  background-attachment: fixed;
}

a {
  color: var(--rn-cyan);
  text-decoration: none;
  transition: color 0.15s;
}
a:hover { color: var(--rn-cyan-h); }

button {
  font-family: inherit;
}

/* Selection */
::selection {
  background: var(--rn-cyan-glow);
  color: var(--rn-txt-0);
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-thumb {
  background: var(--rn-hair-2);
  border-radius: var(--rn-radius-pill);
}
::-webkit-scrollbar-thumb:hover { background: var(--rn-hair-3); }
::-webkit-scrollbar-track { background: transparent; }

/* Utility: mono data label */
.rn-mono-label {
  font-family: var(--rn-font-mono);
  font-size: 0.72rem;
  color: var(--rn-txt-2);
  letter-spacing: var(--rn-tracked-3);
  text-transform: uppercase;
}

/* Utility: hairline rule */
.rn-hair {
  height: 1px;
  background: var(--rn-hair-2);
}
```

### Notes on legacy aliases

- `--accent-purple` is now **gold**, not violet. This is the single most important flip in this doc — it automatically restyles every button, header brand, and ring that references `--accent-purple` without touching any component.
- `--accent-purple-light` becomes `--rn-gold-h` (hover).
- The actual violet accent is still available to components that explicitly want it via `--rn-violet` / `--neon-purple`.
- `--border-color` now resolves to the hairline tint instead of the old 10 % alpha blue.

## Task 1.3 — Verify font loading

Open `client/index.html`. Make sure the `<head>` contains:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
>
```

Instrument Serif is imported through the CSS `@import` in Task 1.2 and does not need a `<link>`. If Outfit or JetBrains Mono are missing, add them now.

## Task 1.4 — Build + smoke test

```bash
cd "c:/Users/revaa/AI Projects/CS124H/Group2ProjectGithub/Project/client"
npm run build
```

Expected: build succeeds with no CSS errors. Then:

```bash
cd "c:/Users/revaa/AI Projects/CS124H/Group2ProjectGithub/Project"
npm run dev
```

Load `http://localhost:5173`. The Skill Tree landing page should render with:

- Near-black background with faint radial glows
- "What do you want to learn?" heading in **gold**, not purple (because `--accent-purple` is now gold)
- Hairline borders on inputs and cards
- Cyan link color on the "Explore" tab hover

Nothing should be broken — every component still compiles because the aliases are preserved. The page will still look somewhat mismatched (buttons are a gold-on-dark mashup); that gets cleaned up in docs 02–07.

## Verification checklist

- [ ] `client/src/styles/refined-neon.css` exists and matches Task 1.1 verbatim.
- [ ] `client/src/styles/globals.css` matches Task 1.2 verbatim.
- [ ] `client/index.html` loads Outfit + JetBrains Mono.
- [ ] `npm run build` succeeds.
- [ ] The app renders at `/` without console CSS errors.
- [ ] The old `.exploreScope` class body is gone (deferred class removal to doc 08).
- [ ] Brand heading on `/` is gold (`#ffaa40`), confirming the alias flip.

## Out of scope

- Any component structure change.
- Any JSX edit. This doc is tokens only.
- Topbar / header / modal restyles (those are docs 02, 03).
- `.exploreScope` class *removal* in `App.module.css` / component files (deferred to doc 08).
