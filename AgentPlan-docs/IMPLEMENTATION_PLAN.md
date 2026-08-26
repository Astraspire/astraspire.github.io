# IMPLEMENTATION PLAN — Astraspire Portfolio / Resume Site

> **Plan ID:** PLAN-2026-08-26-D
> **Created:** 2026-08-26 (09:02 America/New_York)
> **Supersedes / builds on:** PLAN-2026-08-25-C (committed `3237684`), PLAN SNHU-link fix (committed `1267c93`).
> **Scope:** Two surgical CSS-only refinements to the **Education** tab on **dark mode**. No JSX, no new files, no new CSS classes, no new npm deps.
> **Build model:** `cd my-app && npm run build` → output to repo root (`index.html`, `vite.svg`, `assets/`). `emptyOutDir: false` → prune stale hashed files after build.

---

## 0. Context (read before editing)

- **Source of truth:** `my-app/src/`. **NEVER** hand-edit root `index.html` / `assets/` / `vite.svg` — they are Vite build output.
- **Stack:** React 19 + Vite 7 + MUI 7. This plan touches **CSS only**.
- **Theme:** `.dark` class toggled on `document.documentElement` (`<html>`). `:root.dark { … }` overrides light tokens. No logic changes needed.
- **Existing education styling (already committed, PLAN-C):** `.educationContainer` is `flex-direction: column`; each `.eduSNHUContainerItem` / `.eduSAEContainerItem` is a full-width card (`width:100%`, `min-width:0`, bg/border/radius/shadow). SNHU link already theme-aware high-contrast (PLAN SNHU fix).
- **Baseline commit for this plan:** current `main` HEAD (working tree clean). Do a fresh `git commit` after ACT-Mode's build if they land source changes on a branch.

---

## 1. Objective

Two fixes, both in the **Education → Formal Education** tab, visible specifically on **dark mode**:

1. **SNHU logo visibility (dark mode):** The SNHU logo (`<img src={snhuLogo}>`) is barely legible against the dark teal card (`--surface: #002b36`). Add a **white rounded box-shadow / backing plate** behind it so it stands out.
2. **Card centering:** The two education cards are skewed to the right. **Center them** horizontally within the card.

That is the entire scope. Do nothing else.

---

## 2. Where to Edit (exact files)

| File | Change |
|---|---|
| `my-app/src/App.css` | Add logo backing plate + center the education cards. **This is the ONLY file that changes.** |
| `my-app/src/App.jsx` | **No change.** |

---

## 3. Fix 1 — SNHU Logo Backing Plate (dark mode)

### 3.1 The element (current JSX, `App.jsx` line 236–239)
```jsx
<p>
  <img src={snhuLogo} alt="SNHU logo"/>
</p>
```
The logo sits inside `.eduSNHUContainerItem p > img`. The CSS currently styles it at `.eduSNHUContainerItem img` (lines 252–256): `max-height: 80px; width: auto;`.

### 3.2 Required CSS change

Add a backing plate to the **`<p>`** that wraps the logo (not the `<img>` itself), so the plate is a rounded white box that the logo sits on top of. Target it with a child selector.

**Add these rules** immediately after the existing `.eduSNHUContainerItem img` block (after line 256):

```css
/* PLAN-2026-08-26-D: white rounded backing plate behind SNHU logo on dark mode
   so it stands out against the dark teal card (--surface: #002b36). */
.eduSNHUContainerItem p {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: var(--sp-2) 0;
  padding: 12px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
}
```

- **Why the `<p>`, not the `<img>`:** a box-shadow on the `<img>` alone would shadow only the (transparent) image pixels. Wrapping the `<p>` in a white rounded box gives a solid backing plate the logo sits on.
- **`display: inline-flex` + centering:** keeps the plate sized to its content and centered in the card's text-aligned context.
- **`background: #ffffff`:** solid white so the SNHU logo (which has dark/red elements) reads clearly.
- **`border-radius: 12px`:** rounded corners as requested.
- **`box-shadow`:** white box with a soft dark shadow so the plate itself "pops" off the card.
- **Scope note — dark mode only:** The plate is white in both themes. If you want it to be subtle/absent in light mode, gate it under `:root.dark` (see 3.3). **Danny's complaint is specifically dark mode**, so the white plate is the correct primary behavior. If light mode already looks fine, keep the plate white everywhere (it reads fine on the light card too).

### 3.3 Optional light-mode gate (only if light mode looks off)

If you judge the white plate clashes in light mode, move the block under a dark-only selector:

```css
:root.dark .eduSNHUContainerItem p {
  /* same rules as 3.2 */
}
```

**Recommendation:** apply the plate in **both** themes (do not gate). The white rounded plate reads correctly on both the light `--surface` and dark `--surface`. Keeping it un-gated is simpler and matches "make it stand out."

---

## 4. Fix 2 — Center the Two Education Cards

### 4.1 Current state (why they skew right)

`.educationContainer` is a `display: flex; flex-direction: column;` container. Its children (`.eduSNHUContainerItem`, `.eduSAEContainerItem`) are `width: 100%`. Inside a flex column, children stretch to fill the cross-axis (row width) by default, so width should be fine — **but the skew suggests the flex container is not centered within the parent `.card`, or the children are not actually taking full width.**

### 4.2 Required CSS change

Add **horizontal centering** to the `.educationContainer` so the two cards sit centered within the `.card` regardless of their rendered width. Add these rules to the `.educationContainer` block (lines 225–231):

```css
.educationContainer {
  display: flex;
  flex-direction: column;
  gap: var(--sp-5);
  padding: var(--sp-4) 0;
  /* PLAN-2026-08-26-D: center the stacked cards horizontally */
  align-self: center;
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
}
```

- **`align-self: center`:** centers the flex container along the main axis of the parent (the `.card`'s flex/flow context). This is the primary fix for the right-skew.
- **`margin-inline: auto`:** belt-and-suspenders centering — forces equal left/right margins so the block is centered even if the parent applies any flex behavior.
- **`width: 100%; max-width: 100%;`:** keeps the container flush with the card's content box so centering is unambiguous.

### 4.3 Also center the child cards (defense in depth)

Ensure each card centers its own content. Add to the existing `.eduSNHUContainerItem, .eduSAEContainerItem` block (lines 233–243). Add `margin-inline: auto;` there too:

```css
.eduSNHUContainerItem,
.eduSAEContainerItem {
  width: 100%;
  min-width: 0;
  padding: var(--sp-5);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  text-align: center;
  /* PLAN-2026-08-26-D: ensure each card is centered within the container */
  margin-inline: auto;
  max-width: 100%;
}
```

- If the cards are somehow narrower than the container, `margin-inline: auto` centers them. If they're already full-width, this is a harmless no-op.

---

## 5. Verification (ACT-Mode, before committing)

1. **Build:** `cd my-app && npm run build` → exit 0. (If a JSX parse error appears, check for a dropped brace — see 6.1.)
2. **Dark mode — SNHU logo:** flip to dark mode, open **Education** tab. The SNHU logo should now sit on a **white rounded plate** that clearly stands out against the dark teal card. (Screenshot + WebAIM contrast check optional; the plate itself is the fix.)
3. **Dark mode — card centering:** the two education cards should be **centered horizontally** within the card, not pushed right. Resize the window narrow → wide; they stay centered.
4. **Light mode sanity:** flip back to light mode. The white plate + centered cards should still look correct (no regression).
5. **Stale assets:** `emptyOutDir: false` accumulates stale hashed files. After build, in root `assets/`, keep only the JS/CSS referenced by the regenerated root `index.html`, plus `vite.svg` and the images/PDF/DOCX. Delete any other `index-<hash>.js` / `index-<hash>.css`.

---

## 6. Notes / Known Pitfalls

### 6.1 Edit-integrity (from PLAN-C prior run)
When making CSS replacements, preserve every brace. A dropped `{` produces an esbuild/parse error that fails the build. After each `replace`/`write`, grep for balanced `{`/`}` in the edited region.

### 6.2 Do NOT expand scope
- No new React components, no new CSS classes, no new npm dependencies, no JSX edits.
- No changes to the SNHU merit-page link colors (already fixed in PLAN SNHU fix `1267c93`).
- No changes to the SAE card, timeline, AI Systems tab, theme toggle, or any other tab.

### 6.3 Theme token references
Use existing tokens where possible (`--sp-5`, `--radius`, `--shadow`, `--surface`, `--line`). The white plate intentionally uses literal `#ffffff` (a material color, not a theme token).

---

## 7. Commit Protocol (ACT-Mode)

1. Commit the build + source changes on the working branch with a clear message:
   `PLAN-2026-08-26-D: SNHU logo white rounded backing plate + center education cards (dark mode)`
2. Push to `origin/edits` only after Danny confirms (per CODE_STATUS Phase 5 recommendation — do not auto-push).
3. Report build exit code and the two visual verifications in the diagnostic.

---

*Continuously updated. If scope changes, re-baseline and re-commit before editing.*
