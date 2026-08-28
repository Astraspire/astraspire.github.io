# [Website Link](https://astraspire.github.io)

Personal portfolio & interactive resume site for **Danny Fetter** —
full-stack development with an edge-driven AI workflow.

Built as a React single-page app and deployed on GitHub Pages.

## What this is

A tabbed resume / portfolio experience with a dark/light theme toggle,
AI-assisted-work badges on each project, and theme-aware styling that adapts
across day and night modes.

Sections:

- **Summary** — professional overview
- **Technical Skills** — languages, AI/ML, frameworks, tools, audio
- **Projects** — AI Memory Controller, Astro Beat Lab, YGO Life Point Tracker,
  LetsMath Study Buddy, EPK Sites (each with an AI Info badge)
- **Education** — SNHU B.S. CS and SAE Diploma of Audio Technology
- **AI Systems** — Identity Engineering & Runtime Filter, Calculus Tutoring Workflow

## Tech stack

| Layer      | Stack                          |
| ---------- | ------------------------------ |
| UI         | React 19                       |
| Component  | MUI (Material UI)              |
| Build tool | Vite 7                         |
| Language   | TypeScript / JavaScript        |
| Hosting    | GitHub Pages (deploy branch)   |

## Repository layout

```
astraspire.github.io/
├── index.html          # entry HTML (served at repo root)
├── vite.svg            # favicon
├── assets/             # production build output (built by Vite)
├── my-app/             # React + Vite source (everything editable lives here)
│   ├── public/
│   ├── src/
│   │   ├── App.jsx     # main app, tabs, sections
│   │   ├── App.css     # all styles
│   │   ├── main.jsx    # React entry
│   │   └── index.css
│   └── package.json
└── docs/               # project documentation
```

The editable source lives in `my-app/`. The build output is emitted to the
repo root (`index.html`) and `assets/` folder.

## Getting started

Install dependencies:

```bash
cd my-app
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Deploying

The site deploys from the `main` branch via GitHub Pages.
Build output (`index.html` + `assets/`) is committed to the repo root.

## Git workflow

- `main` — the live/deployed branch
- `edits` — working branch for active changes

Active work happens on `edits`; finished work is merged and the production
build is committed to `main`.
