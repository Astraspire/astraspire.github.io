# ISSUE-1 — Education Section Alignment, Sizing, Projects/AI-Tab Reorder

> **Plan ID:** PLAN-2026-08-27-D
> **Opened:** 2026-08-26 (planning session 2026-08-27)
> **Author:** Danny (via Plan-Mode)
> **Status:** Open — awaiting ACT-MODE execution under PLAN-2026-08-27-D
> **Branch target:** `edits` (in sync with `origin/edits`)

---

## The Problem

The Education tab renders two stacked cards (SNHU B.S. + SAE Diploma), but:

1. **Right-shift / cutoff (centering bug).** Both individual certification cards are shifted right and cut off by the right edge of the screen. They must be **squarely centered on all displays**.
2. **Logo sizing mismatch.** The SNHU logo sits in a wide white rounded box; the SAE diploma renders tiny with no surrounding box. Both must be **the same size effectively** — the SAE diploma enlarged and given a wide box matching the SNHU logo's box width, both clearly visible but **not larger than the card**.
3. **"ai" button rename.** The hover badge on Projects cards reads just "ai" — ambiguous. Rename to **"AI Info"**.
4. **Projects reorder.** Reorder the Projects timeline to **latest-first** (by start date; started-first shows later). Ties broken by showcasing more complex/diverse projects first.
5. **AI-Systems tab consolidation.** The identity-engineering work and the Python runtime identity filter should be **consolidated into one card**, placed **first** in the AI-Systems list.

---

## Reference

- Screenshot: `AgentPlan-docs/screenshots/misaligned_educationSection_august26-2026.jpg`
- Full step-by-step: `AgentPlan-docs/IMPLEMENTATION_PLAN.md` (PLAN-2026-08-27-D)
- Inventory: `AgentPlan-docs/REPOSITORY_MAP.md`

---

## Expected Outcome (acceptance)

- Education cards are centered (no right-edge cutoff) on all screen widths.
- SNHU and SAE logos are the same effective size, each in a matching wide white box, clearly visible, not exceeding the card.
- Projects cards show an "AI Info" hover badge.
- Projects listed latest-first.
- AI-Systems tab leads with a consolidated Identity Engineering & Runtime Filter card.
