# CODE STATUS — Living Changelog

> **Plan ID:** PLAN-2026-08-25-A
> **Last updated:** 2026-08-25
> **Purpose:** Track repo state, context-collapse notes, and what must be preserved. Read this before planning to avoid redundant work.

---

## Current Repository Status

- **Branch:** `edits` (in sync with `origin/edits`). `main` exists as base.
- **Last commit:** `3d3d6a3` "revise resume assets" (Danny's asset renames, uncommitted at time of this plan).
- **Stack:** React 19 + Vite 7 + MUI 7. No new dependencies required for this plan.
- **Build model:** `cd my-app && npm run build` → writes to repo **root** (`index.html`, `vite.svg`, `assets/`). `emptyOutDir: false` → stale hashed files accumulate → prune after build.

## What Already Exists (do NOT re-plan)

- **Content is fully updated in `my-app/src/App.jsx`:** summary (no GPA), AI/ML skills, 5 projects (Astro Beat Lab, EPK, Memory Controller, LetsMath, YGO), education. The old `SITE_UPDATE_PLAN.md` content fixes (#1–#5) are **already applied**.
- **New assets in place:** `dannyFetter-2026portfolioPicture.jpg`, `dannyFetter-resume2026.pdf`, `dannyFetter-resume2026.docx` (in `my-app/src/assets/`).
- **Old plan:** `AgentPlan-docs/SITE_UPDATE_PLAN.md` (historical; superseded by IMPLEMENTATION_PLAN.md). Left in place.

## Context-Collapse Notes (CRITICAL to preserve)

1. **Build writes to repo root.** Never hand-edit root `index.html` / `assets/` / `vite.svg`. Edit `my-app/src/`, rebuild.
2. **Stale assets** pile up in root `assets/` because `emptyOutDir: false`. Prune after every build (see REPOSITORY_MAP §4).
3. **Phase 3 is CSS-only.** Do NOT refactor JSX or class names. Keep all existing class names as hooks.
4. **No new npm deps.** The dropdown uses only React `useState`/`useRef`/`useEffect` + native `<a download>`.
5. **Design token approach:** light/dark is a 10-line `:root` swap. Plan built around light default.

## Changes Made During This Planning Session

- Created `AgentPlan-docs/IMPLEMENTATION_PLAN.md` — full step-by-step (Asset swap → Resume dropdown → CSS modernization → index.css cleanup → build/sync → housekeeping).
- Created `AgentPlan-docs/REPOSITORY_MAP.md` — full inventory + naming conventions + stale-asset tracking.
- Created `AgentPlan-docs/CODE_STATUS.md` — this file.
- Left `SITE_UPDATE_PLAN.md` untouched (historical reference).

## Git References

| Commit | Message |
|---|---|
| `3d3d6a3` | revise resume assets (HEAD → edits) |
| `e76dcc0` | added assets and doc |
| `ece501d` | Restore favicon (vite.svg) removed during build sync |
| `b684063` | Update memory controller repo link + Open WebUI integration; fix education; clean up project bullets |
| `5bfc50a` | updatePlanning_01 |
| `d12f8fa` | Add resume, images, assets, and update config (main) |
| `a7ed253` | Remove README and update Vite base path |
| `2c85be5` | Initialize React + Vite project with assets |
| `98e6402` | Initial commit |

## Suggestions for Act-Mode (from execution feedback / analysis)

- Optimize `dannyFetter-2026portfolioPicture.jpg` (1.28MB) before deploy if size matters — optional.
- The "AI Integration & Workflow Engineer — Independent" experience line is on the resume but NOT the site. Add if Danny wants it (open Q3).
- Consider making the profile picture a link to GitHub if Danny wants (currently non-linked; alt-text fix is in scope).
- Verify external links (LinkedIn, Handshake, GitHub repos, Open WebUI, Horizon game) resolve — link rot check.

## Open Questions (block ACT-MODE start)

1. Design direction: light professional *(recommended)* / dark refined / creative freedom?
2. Resume dropdown confirm: PDF first, DOCX second, native `<a download>`?
3. Add "AI Integration & Workflow Engineer" experience line to site, or keep content as-is?

---

*Update this file after each planning/execution cycle. Record what changed and what must be preserved.*
