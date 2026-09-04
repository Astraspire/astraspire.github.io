# CODE STATUS — Living Changelog

> **Plan ID:** PLAN-2026-08-27-D (current planning session)
> **Last updated:** 2026-08-26
> **Purpose:** Track repo state, context-collapse notes, and what must be preserved. Read this before planning to avoid redundant work.

---

## Current Repository Status

- **Branch:** `main` (HEAD `245b8be`). Working tree clean at plan start. `edits` exists as an older branch — **not** the target for this repo's current work.
- **Last commit:** `245b8be` "PLAN-2026-09-04-E: baseline before planning (footer/link/A.S. degree plan)".
- **Stack:** React 19 + Vite 7 + MUI 7. No runtime deps added for this plan.
- **Build model:** `cd my-app && npm run build` → writes to repo **root** (`index.html`, `vite.svg`, `assets/`). `emptyOutDir: false` → stale hashed files accumulate → prune after build.

## Plan-E Session Notes (2026-09-04, PLAN-MODE)

- **New plan:** `PLAN-2026-09-04-E` — footer GitHub profile link + project repo links on timeline cards + SNHU A.S. degree card.
- **Branch target = `main`** (not `edits`): main already contains PLAN-2026-08-26-D education centering fixes + new profile pic; editing edits would drop them.
- **SNHU A.S. PDF exists** at `my-app/src/assets/SNHU-Associate-Degree_Danny-Fetter_CS-2026.pdf` (2 pages, Letter portrait). Plan renders page 1 → PNG via PyMuPDF (one-time helper; NOT added to package.json).
- **Danny's decision:** show only the A.S. degree prominently in Education + a note that he's now pursuing the B.S. Render-to-image chosen over a view/download link.
- **Public GitHub URLs** confirmed from background log §13: profile `github.com/Astraspire`; repos memory_tool_owui, AstroBeatLab, YGO_LP, LetsMath_StudyBuddy, EPK. Identity filter stays off-site (unchanged in AI-Systems tab).
- **Background log update (§9 live site)** flagged for Danny's confirmation — not auto-edited (it lives outside the repo).

- **Branch:** `edits` (ahead of `origin/edits` by 1 commit: `e6024c0`). `main` exists as base.
- **Last commit:** `e6024c0` "PLAN-2026-08-27-D: baseline commit before planning (profile pic mode sync)".
- **Stack:** React 19 + Vite 7 + MUI 7. No new dependencies required for this plan.
- **Build model:** `cd my-app && npm run build` → writes to repo **root** (`index.html`, `vite.svg`, `assets/`). `emptyOutDir: false` → stale hashed files accumulate → prune after build.
- **Last committed docs:** 2026-08-25 13:58 (REPOSITORY_MAP.md, CODE_STATUS.md). IMPLEMENTATION_PLAN.md and REPOSITORY_MAP.md were written in PLAN-MODE and need committing.

## What Already Exists (do NOT re-plan)

- **Content is fully updated in `my-app/src/App.jsx`:** summary (no GPA), AI/ML skills, 5 projects (Astro Beat Lab, EPK, Memory Controller, LetsMath, YGO), education. The old `SITE_UPDATE_PLAN.md` content fixes (#1–#5) are **already applied**.
- **New assets in place (verified 2026-08-26):** `dannyFetter-2026portfolioPicture.jpg` (**136KB, 512x512** — optimized; was 1.28MB, byte-identical to `main`), `dannyFetter-resume2026.pdf` (27KB), `dannyFetter-resume2026.docx` (29KB) — all in `my-app/src/assets/`.
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
2. **Profile pic optimization** — RESOLVED: `dannyFetter-2026portfolioPicture.jpg` is now **136KB, 512x512**, byte-identical to `main`. Already live. No action.
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

---

## Phase 5 — PLAN-C Execution Diagnostic Report (ACT-Mode run 2026-08-26)

> **Plan ID:** PLAN-2026-08-25-C
> **Executed:** 2026-08-26 ~01:41–02:11 UTC
> **Branch:** `edits` (in sync with `origin/edits`)

### 0. Critical finding at startup (context integrity)

The commit `205e3b4` titled "PLAN-C: follow-up fixes" **only updated the three documentation files** (`CODE_STATUS.md`, `IMPLEMENTATION_PLAN.md`, `REPOSITORY_MAP.md`). It made **zero changes** to `my-app/src/`. The source was still in the original PLAN-B state. Verified by reading `App.jsx`/`App.css` and `git show --stat 205e3b4` (3 files changed, 176 insertions, 0 source edits). All four PLAN-C items were therefore **not yet implemented** and were executed in this run.

### 1. Plan Adherence

| Item | Plan spec | Status | Notes |
|---|---|---|---|
| Item 1 | `.educationContainer` → column, each item a full-width card | **DONE** | Committed `3237684`. Added `@media (max-width:480px)` logo shrink. |
| Item 2 | LetsMath `dateRange="2024"` | **DONE** | `3237684`. Used `"2024"` (Danny said early 2024). |
| Item 3 | Badge `aiUsage` → `aiNotes` | **DONE** | `3237684`. Dropped unused `aiUsage` from destructuring. |
| Item 4 | Toggle 40×40, font 20px, active state, scale 1.08 | **DONE** | `3237684`. Added `active` state + hover enter/leave; CSS dimmed rest. |
| Phase 8 | Build + prune stale assets | **DONE** | Build succeeded; pruned 2 stale hashed files. |
| Phase 9 | Housekeeping | **N/A** | README + meta already done in prior run (PLAN-B Phase 9). Not re-run. |

**Deviation:** none from the plan's four items. One build error occurred and was fixed (see §2).

### 2. Observed Failures

1. **Build failed — JSX parse error (esbuild):** `App.jsx:474:20: ERROR: Expected "{" but found "["` while adding the `dateRange` prop to the LetsMath `<TimelineCard>`. The `bullets={[}` opening brace was dropped during the replacement, producing `bullets=[`. Fixed by restoring `bullets={[}`. Build then succeeded (`36 modules transformed`, exit 0). This is an edit-integrity issue, **not** a plan bug.
2. **Two Vite warnings (benign, pre-existing):** `build.outDir must not be the same directory of root…` and `publicDir … not separate folders`. These stem from `vite.config.js` (`outDir: '../'`) and are the established deploy model. Not errors; build completed and output is correct.
3. **Stale-asset accumulation (expected, `emptyOutDir: false`):** `assets/index-DFOYFqCS.js` and `assets/index-DtmgoHuJ.css` from the prior PLAN-B build were orphaned. Pruned; final `assets/` contains only the referenced JS/CSS + images/PDF/DOCX + `vite.svg`.

### 3. Implementation Summary

- **`my-app/src/App.css`** (Item 1): `.educationContainer` → `flex-direction: column`; `.eduSNHUContainerItem/.eduSAEContainerItem` now full-width cards (bg/border/radius/shadow, `width:100%`, `min-width:0`, `padding:sp-5`); logos shrink under 480px.
- **`my-app/src/App.css`** (Item 4): `.themeToggle` 48→40px, font 24→20px, rest opacity 0.45→0.5 / brightness 0.6→0.7, hover scale 1.15→1.08.
- **`my-app/src/App.jsx`** (Item 2): LetsMath `<TimelineCard>` got `dateRange="2024"`.
- **`my-app/src/App.jsx`** (Item 3): `TimelineCard` signature dropped `aiUsage`; badge condition `aiUsage &&` → `aiNotes &&` (renders on all 5 cards).
- **`my-app/src/App.jsx`** (Item 4): `ThemeToggle` gained `active` state; `onClick` sets `active(true)`; `onMouseEnter`/`onMouseLeave` toggle it; className interpolates `${active ? "active" : ""}`.
- **Build:** `cd my-app && npm run build` → regenerated root `index.html` referencing `index-h_VuNwtp.js` + `index-UuFsO87G.css`; pruned stale JS/CSS.

### 4. Commit History (this run)

| Commit | Message |
|---|---|
| `3237684` | PLAN-C: four follow-up fixes (education stacked, LetsMath 2024, ai badge via aiNotes, toggle resize+active) — **HEAD** |
| `205e3b4` | PLAN-C: follow-up fixes (docs only — no source edits; see §0) |

### 5. Recommended next steps

- **Push** `edits` to `origin/edits` to sync the deployment branch (GitHub Pages source of truth). Not auto-pushed — confirm with Danny before remote push.
- **Profile pic note:** `assets/dannyFetter-2026portfolioPicture-QPqCyiQ3.jpg` is still **1.28 MB** (the plan recommended ~150–250 KB). Optimization was listed as optional (Phase 1.4 / open Q in prior CODE_STATUS). Consider optimizing before final deploy for page-load speed.
- **Verify in browser** (or `npm run preview`): education stacking on narrow screens, ai badge hover on all 5 cards, LetsMath date, toggle dim/resize.

*Update this file after each planning/execution cycle. Record what changed and what must be preserved.*

---

## Phase 6 — PLAN-D Planning Report (PLAN-MODE session 2026-08-26)

> **Plan ID:** PLAN-2026-08-27-D
> **Status:** PLANNED — awaiting ACT-MODE execution
> **Issue:** `AgentPlan-docs/ISSUE-1.md` (the problem/spec)
> **Full step-by-step:** `AgentPlan-docs/IMPLEMENTATION_PLAN.md` (PLAN-2026-08-27-D)

### 0. Context / Problem

Danny reviewed the deployed site and requested five changes:
1. **Education right-shift / cutoff** — the two certification cards are shifted right and cut off by the screen edge; they must be squarely centered on all displays.
2. **Logo size consistency** — SNHU logo and SAE diploma must be the same effective size; enlarge the SAE diploma and give it a wide box matching the SNHU box width; both clearly visible, not larger than the card.
3. **"ai" → "AI Info"** — rename the hover badge on Projects cards so it's less ambiguous.
4. **Projects reorder (latest-first)** — by start date (started-first shows later); ties broken by complexity/diversity.
5. **AI-Systems consolidation** — merge identity-engineering work + Python runtime identity filter into one card, placed first.

### 1. Root-Cause Diagnosis (verified before planning)

- **Right-shift root cause:** `.eduSNHUContainerItem`/`.eduSAEContainerItem` use `width: 100%` + `padding: var(--sp-5)` (48px total) under **default `content-box`**. **`box-sizing` is never set anywhere in `my-app/src/`** (`index.css` is empty). So each card renders at 100% + 48px → overflows the card container by 48px each side → right-shift + cutoff. Fix: `box-sizing: border-box` on those two items.
- **Logo aspect ratios:** SNHU logo = 1560×720 (wide, ~2.17:1); SAE diploma = 2179×3575 (tall, ~0.61:1). Cannot be same *pixel* size — matched via **matching white rounded boxes** of equal width (200px) + SAE enlarged.
- **Profile pic:** `dannyFetter-2026portfolioPicture.jpg` is **already 512×512 and optimized to 136KB**, byte-identical to `main`, already live. **No action.** (Also resolves the open profile-pic-optimization question.)
- **gh CLI** not available/authenticated → cannot open a live GitHub issue; used a local `ISSUE-1.md` as the problem artifact.

### 2. Plan Scope (PLAN-MODE only — no source edits)

Five surgical edits to `my-app/src/` planned (NO new files, NO new npm deps, NO new React components, NO new CSS classes):
1. `App.css`: edu items `box-sizing: border-box` (centering fix).
2. `App.css`: SNHU + SAE logos in matching wide white rounded boxes (200px, `margin-inline: auto`); SAE max-height 130px vs SNHU 92px; 480px media → 100px/72px.
3. `App.jsx` + `App.css`: badge text `ai` → `AI Info`; `.aiInfoCircle` restyled from 28×28px circle to rounded pill (padding, min-width, border-radius 6px).
4. `App.jsx`: Projects reorder → Memory Controller → Astro Beat Lab → LetsMath → YGO → EPK (content unchanged).
5. `App.jsx`: merge Automated Personalization + Prompt Engineering/Identity into "Identity Engineering & Runtime Filter" card, FIRST; Calculus Tutoring Workflow second.

### 3. Judgment Calls (confirm with Danny in ACT-MODE)

- **SNHU framing:** plan frames *both* logos in white boxes (consistency = what "same size effectively" demands). If Danny wants SNHU left unframed (dark-on-dark), ACT-MODE may apply the box to SAE only.
- **Order (confirmed by Danny):** Memory (ongoing) -> Astro (2025, Danny still actively working it) -> YGO (2025, completed standalone test) -> LetsMath (2024) -> EPK (2020). YGO is 2025 (not 2024), so it correctly leads LetsMath by date. Astro leads YGO because it's still ongoing. Cheap to reorder if Danny changes his mind.

### 4. Git References

| Commit | Message |
|---|---|
| `e6024c0` | PLAN-2026-08-27-D: baseline commit before planning (profile pic mode sync) — HEAD |

### 5. Recommended Next Steps (ACT-MODE)

- Execute Phases 1–6 in `IMPLEMENTATION_PLAN.md` (PLAN-2026-08-27-D).
- Build (`cd my-app && npm run build`), prune stale assets, visual-verify all five items in both themes.
- Commit on `edits`: `PLAN-2026-08-27-D: five follow-up fixes (education centering, logo sizing, AI Info badge, projects reorder, AI-Systems consolidation)`.
- Push to `origin/edits` only after Danny confirms.

*Update this file after each planning/execution cycle. Record what changed and what must be preserved.*
