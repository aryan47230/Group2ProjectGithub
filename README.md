# Group 2

Group Name: Group 10

[MVP Link](https://docs.google.com/document/d/1PQcLiF4-t5XPePotztCDWo-Ed3tdx5FB/edit?usp=sharing&ouid=103913186610547567391&rtpof=true&sd=true)

Team Members: blakebm2, changl30, anaghs2, rdaga2, ariaz7

Project Manager: amath24, darshp3

## Project Layout

The shipped application lives entirely in [`Project/`](./Project/) — that's the single source of truth. See [`Project/CLAUDE.md`](./Project/CLAUDE.md) for architecture, setup, and API docs.

- **`Project/`** — Brancher (Skill Tree Generator + Wiki Hopper). Run from here.
- **`Project/docs/`** — design docs, UI overhaul notes, and historical bug-fix / UI / feature reports.
- **`Research/<teammate>/`** — personal research scratch spaces. Not part of the shipped app.

## Quick Start

```bash
cd Project
npm install
cd client && npm install && cd ..

# Dev (two terminals)
npm start                   # server: http://localhost:3000
cd client && npm run dev    # client: http://localhost:5173
```

You'll need a `Project/.env` with `GEMINI_API_KEY`, `SESSION_SECRET`, `SUPABASE_URL`, and `SUPABASE_ANON_KEY`. Full details in `Project/CLAUDE.md`.
