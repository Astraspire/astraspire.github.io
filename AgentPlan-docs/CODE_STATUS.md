# CODE STATUS — Living Changelog

> **Plan ID:** PLAN-2026-08-25-C
> **Last updated:** 2026-08-25
> **Purpose:** Track repo state, context-collapse notes, and what must be preserved. Read this before planning to avoid redundant work.

---

## Current Repository Status

- **Branch:** `edits` (in sync with `origin/edits`). `main` exists as base.
- **Last commit:** `3d3d6a3` "revise resume assets" (Danny's asset renames, uncommitted at time of this plan).
- **Stack:** React 19 + Vite 7 + MUI 7. No new dependencies required for this plan.
- **Build model:** `cd my-app && npm run build` → writes to repo **root** (`index.html`, `vite.svg`, `assets/`). `emptyOutDir: false` → stale hashed files accumulate → prune after build.
- **Last committed docs:** 2026-08-25 13:58 (REPOSITORY_MAP.md, CODE_STATUS.md). IMPLEMENTATION_PLAN.md and REPOSITORY_MAP.md were written in PLAN-MODE and need committing.

## What Already Exists (do NOT re-plan)

- **Content is fully updated in `my-app/src/App.jsx`:** summary (no GPA), AI/ML skills, 5 projects (Astro Beat Lab, EPK, Memory Controller, LetsMath, YGO), education. The old `SITE_UPDATE_PLAN.md` content fixes (#1–#5) are **already applied**.
- **New assets in place (verified 2026-08-25):** `dannyFetter-2026portfolioPicture.jpg` (1.28MB), `dannyFetter-resume2026.pdf` (27KB), `dannyFetter-resume2026.docx` (29KB) — all in `my-app/src/assets/`.
- **Old plan:** `AgentPlan-docs/SITE_UPDATE_PLAN.md` (historical; superseded by IMPLEMENTATION_PLAN.md). Left in place.

---

## Context-Collapse Notes (CRITICAL to preserve)

1. **Build writes to repo root.** Never hand-edit root `index.html` / `assets/` / `vite.svg`. Edit `my-app/src/`, rebuild.
2. **Stale assets** pile up in root `assets/` because `emptyOutDir: false`. Prune after every build (see REPOSITORY_MAP §4).
3. **No new npm deps.** The dropdown uses only React `useState`/`useRef`/`useEffect` + native `<a download>`. The theme toggle uses only React `useState`/`useEffect` + `localStorage`.
4. **Theme switch on `<html>`:** the `.dark` class is toggled on `document.documentElement`. The `:root.dark` selector overrides light tokens. No other CSS changes needed to switch themes.
5. **CSS custom properties:** light/solarized-dark is a token swap — no component logic changes.

---

## Plan Evolution (PLAN-MODE history)

### PLAN-2026-08-25-A (superseded)
- Covered: asset swap + resume dropdown + CSS modernization (light professional theme).
- Open questions at that time: design direction, dropdown confirm, AI experience line.

### PLAN-2026-08-25-C (current — this plan)
- **Follow-up to B.** B is fully implemented & committed (`1b852f3`). C fixes four refinements (see IMPLEMENTATION_PLAN.md §15):
  1. **Education** → vertical stacked cards (was `flex-direction: row`).
  2. **LetsMath** timeline date → `2024` (Danny confirmed early 2024).
  3. **AI-info badge bug fix** → `TimelineCard` badge keyed on `aiNotes` (was `aiUsage`, never passed → badge never rendered on any card).
  4. **Theme toggle** → smaller (40×40, font 20px), clearer rest dim, hover scale 1.08, `active` state.
- **Scope:** surgical edits to `my-app/src/App.jsx` + `App.css` only. No new deps/files/CSS classes.

### PLAN-2026-08-25-B (implemented — superseded by C)
- **Supersedes A entirely.** Adds:
  - **Theme system** (Phase 3): floating sun/moon toggle in top-right corner, auto-detect browser color scheme on first visit (default to light if none), `localStorage` persistence, light (white/resume-match, solar accents) + solarized dark themes.
  - **Tagline** (Phase 4): *"Full-Stack Development • Edge-Driven AI Workflow"* under "Danny Fetter".
  - **AI-progression timeline** (Phase 5): Projects tab becomes a vertical scrolling timeline of AI-usage cards, each with a date range + "ai info" hover badge showing degree of AI usage. Order: LetsMath (vibe-coded) → EPK (none) → Astro Beat Lab (research-assisted) → YGO (pure local AI) → AI Memory Controller (local AI orchestration).
  - **New "AI Systems" tab** (Phase 6): automated personalization setup, calculus tutoring workflow, prompt engineering & identity customization, and the Python runtime identity filter.

---

## Decisions Locked (from Danny)

1. **Tagline:** *"Full-Stack Development • Edge-Driven AI Workflow"* (edge AI = local/consumer devices, matches his niche).
2. **Theme first-visit:** AutoSense browser preference first; if none detected → default **light**.
3. **Toggle:** floating top-right corner, detached. Semi-dimmed at rest → undims + pops on click/hover → dims back on mouse leave. Emoji ☀️/🌙.
4. **Resume dropdown:** PDF first, DOCX second, click-outside + Esc to close, native downloads.
5. **AI focus:** tagline + AI Integration experience.
6. **AI projects structure:** vertical **timeline** (not a split), with "ai info" hover badges showing degree of AI usage per project.
7. **LetsMath:** placed first in timeline as "vibe-coded experiment" (before Astro Beat Lab). Compiled open-source textbooks, had Perplexity generate quizzes.
8. **AI Systems tab** covers: automated personalization, calculus tutoring (treated like a repo — agentic workflow showcase), prompt engineering/identity pillars, and the Python runtime identity filter (direct API-call coding experience).

---

## Open Questions (block ACT-MODE start)

1. **LetsMath exact year** — RESOLVED: omit the year (Danny couldn't recall). Card shows title with no date range.
2. **Profile pic optimization** — RESOLVED: optimize before deploy to ~150-250KB (Danny confirmed).
3. **LetsMath AI-usage wording** — RESOLVED: Danny planned + documented it; Perplexity (both the "computer" variant and regular Perplexity) actually built the app.
4. **README** rewrite — do it now or leave? Optional (Phase 9).

---

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

---

## Phase 4 — Diagnostic Report (ACT-Mode: resuming context crash)

> PLAN-2026-08-25-B execution — completed 2026-08-25 ~18:55 (after a context crash).

### 1. Plan Adherence

| Phase | Plan step | Status | Notes |
|---|---|---|---|
| Phase 1 | Asset swap (profile pic + PDF/DOCX imports + alt text) | **DONE** | Committed `82d985a` by prior Act instance. |
| Phase 2 | ResumeDownload PDF/DOCX dropdown | **DONE** | Committed `82d985a` (prior instance). |
| Phase 3 | Theme system + floating toggle (light/solarized-dark) | **DONE** | Committed `6386832` (prior instance). |
| Phase 4 | Tagline under name | **DONE** | Committed `a3eee00` (prior instance). |
| Phase 5 | AI-progression timeline | **DONE** | Timeline content present but **UNCOMMITTED** at crash; committed as INIT baseline `e9c9d08` this run. |
| Phase 6 | New "AI Systems" tab | **DONE** | Present but UNCOMMITTED at crash; committed via baseline `e9c9d08`. |
| Phase 7 | Clean index.css | **DONE** | Rewrote `my-app/src/index.css` to neutral baseline (removed green `rgb(91,228,0)`, `#242424` bg, `3.2em` h1, purple hover). Defers to `App.css` tokens. |
| Phase 8 | Build & deploy sync | **DONE + 1 deviation (see Observed Failures)**. | Build succeeded; stale assets pruned; favicon restored from `public/`.
| Phase 9a | README rewrite | **DONE** | Replaced Vite boilerplate with real description + build/deploy guidance. |
| Phase 9b | Meta description | **DONE** | Added to `my-app/index.html` (builds into root `index.html`). |

**Deviations (all benign, documented in commit log + plan §14):**
- **PDF/DOCX `?url` import:** The plan did not specify how to import binary PDF/DOCX. Vite's default import parser treats them as JS and rejected the binary (see Observed Failures). Fixed by importing with `?url` suffix, which returns a string URL for the native `<a download>`. This is the standard Vite fix and is documented in an inline comment in `App.jsx`.

### 2. Observed Failures

1. **Build failed on `dannyFetter-resume2026.docx` (binary import).** Vite/Rollup's default parser tries to interpret binary files as JS and errored: `Unexpected character '\u{4}'`. Fix: import with `?url` suffix for both PDF and DOCX.
2. **Favicon missing from root `assets/` after build.** Vite's build copied `public/` files verbatim (JS/CSS/images/PDFs/DOCX) but did NOT copy `my-app/public/vite.svg` to root `assets/`. The generated `index.html` still references `./vite.svg`. Restored by copying from `my-app/public/vite.svg`. This is a Vite behavior detail (public-folder icons are not auto-relocated) — not a plan bug.
3. **`emptyOutDir: false` stale-asset accumulation (expected, not a failure).** Build added new hashed files but left old ones. Pruned 4 stale JS, 1 stale CSS, 1 old resume PDF, 1 old profile pic from root `assets/`. Final state is clean (only referenced files remain).

### 3. Implementation Summary (this run — Phases 7–9)

- **Phase 7:** `my-app/src/index.css` rewritten to neutral baseline deferring to `App.css` (`var(--font)`, `var(--page-bg, #eef1f7)`, muted `body`, removed `3.2em` h1 / green / purple button styling).
- **Phase 8:** Ran `npm run build`; fixed binary imports; verified regenerated `index.html` references `index-DFOYFqCS.js` + `index-DtmgoHuJ.css`; pruned stale assets; restored favicon.
- **Phase 9a:** `my-app/README.md` — real project description, stack, build/deploy workflow, editing guidance, structure, planning-doc pointer.
- **Phase 9b:** `my-app/index.html` — added meta description + SEO title "Danny Fetter — Full-Stack Development • Edge-Driven AI Workflow".

### 4. Commit history (Act-Mode continuation, 2026-08-25)

| Commit | Message |
|---|---|
| `815c1ee` | Phase 7-9: index.css baseline, build sync, README + meta description (FINAL) |
| `e9c9d08` | INIT: baseline before Phase 7-9 (committed uncommitted Phase 5/6 timeline + AI Systems) |
| `6386832` | Phase 3 CSS: full App.css rewrite from neon-on-dark to token-driven design system (prior instance) |

### 5. Recommended next steps

- **Push to `origin/edits`** to sync the deployment branch (GitHub Pages source of truth).
- **Deploy** the updated root `index.html` + `assets/` to GitHub Pages.
- **Plan-Mode note:** if a follow-up plan (PLAN-2026-08-25-C) exists, read `AgentPlan-docs/` for any pending items. None detected in the working tree.

*Update this file after each planning/execution cycle. Record what changed and what must be preserved.*
