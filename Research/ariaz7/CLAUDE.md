# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Skill Tree Generator — user enters a topic, Gemini generates an interactive prerequisite graph. Built in ariaz7's research section.

## Structure

```
ariaz7/
├── server.js          Express backend, port 5000
├── package.json       Server dependencies
├── .env               GEMINI_API_KEY goes here (copy from .env.example)
└── client/
    ├── package.json
    └── src/App.js     Entire frontend — all components in one file
```

## Running

```bash
# 1. Server (from Research/ariaz7)
npm install
node server.js

# 2. Client (separate terminal, from Research/ariaz7/client)
npm install
npm start              # http://localhost:3000
```

## Architecture

```
[React :3000] ── POST /api/skill-tree ──> [Express :5000] ──> [Gemini 2.5-flash]
```

- Server returns one JSON object: `{ title, description, scale, nodes[], relatedTopics[], nextSteps[] }`
- `nodes` — the skill tree (id, name, summary, level, prerequisites[])
- `relatedTopics` — adjacent skills/tools not in the tree (shown in sidebar)
- `nextSteps` — what to learn after mastery (shown in sidebar + canvas end column)

## Frontend layout

- **Header**: topic input + generate button + mastery counter
- **Canvas** (horizontal scroll): skill tree columns left→right, then a "WHAT'S NEXT" column after the goal
- **Right sidebar** (284px, always visible):
  - No node selected → `RelatedSidebar` (tree info, related topics, after-mastery next steps)
  - Node selected → `DetailPanel` (summary, prerequisites, mark mastered button)

## Key design tokens (theme object `T`)

`#111114` bg · `#16161b` surface · `#4ade80` green · JetBrains Mono font

Type accent colors: skill=green, tool=blue(`#60a5fa`), project=amber(`#f59e0b`), field=purple(`#a78bfa`)
