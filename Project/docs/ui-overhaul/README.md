# Refined Neon UI Overhaul — Document Index

This folder contains nine self-contained implementation plans that together replace the existing Skill Tree Generator UI with the "Refined Neon" design language already used by the Wiki Loop reference project.

Every document is designed to be dropped into a fresh Claude Code window by itself. Each doc opens with its own **Prerequisites**, **Goal**, **Files touched**, and **Tasks**, and closes with a **Verification checklist**.

## Read order

| # | Doc | Scope |
|---|-----|-------|
| 01 | [01-design-tokens-and-fonts.md](01-design-tokens-and-fonts.md) | Foundation — CSS tokens, fonts, global bridge. All other docs assume this is done. |
| 02 | [02-app-header.md](02-app-header.md) | Top nav (`AppHeader`) |
| 03 | [03-auth-modal.md](03-auth-modal.md) | `AuthModal` |
| 04 | [04-import-banner.md](04-import-banner.md) | `ImportBanner` slim strip |
| 05 | [05-skilltree-prompt-view.md](05-skilltree-prompt-view.md) | Landing page (`PromptView` + `SavedTreesList`) |
| 06 | [06-skilltree-tree-view.md](06-skilltree-tree-view.md) | `TreeView` header + `DetailPanel` |
| 07 | [07-skilltree-skill-graph.md](07-skilltree-skill-graph.md) | `SkillGraph` SVG — full revamp (node system, edges, atmospherics) |
| 08 | [08-explore-route-alignment.md](08-explore-route-alignment.md) | Audit `/explore` so it matches the rest pixel-for-pixel |
| 09 | [09-final-pass.md](09-final-pass.md) | Orphan style cleanup, build, smoke test |

## Dependency graph

```
01  ──┬──>  02  ──┐
      ├──>  03  ──┤
      ├──>  04  ──┤
      ├──>  05  ──┤
      ├──>  06  ──┼──>  09
      ├──>  07  ──┤
      └──>  08  ──┘
```

Docs 02–08 are all independent after 01. You can execute them in parallel if dispatching to multiple fresh sessions. Doc 09 is the final integration pass and must come last.

## Project root for paths

All file paths in every doc are relative to:

```
c:/Users/revaa/AI Projects/CS124H/Group2ProjectGithub/Project
```

The React client lives under `client/` and is the only part of the project that changes. No server/routes/services touched.

## Source of truth for design tokens

The full token table lives in [01-design-tokens-and-fonts.md](01-design-tokens-and-fonts.md). Every subsequent doc references tokens by name (`--rn-gold`, `--rn-hair-2`, etc.) rather than inlining hex values. Do not hard-code hex outside doc 01.

## Reference project

The visual target is Wiki Loop's "Refined Neon" system at:

```
Group2ProjectGithub/Research/rdaga2/Wiki_Loop/
```

Its original implementation plan is at
`Research/rdaga2/Wiki_Loop/docs/superpowers/plans/2026-04-09-refined-neon-ui-overhaul.md`
and should be consulted when a detail is ambiguous.
