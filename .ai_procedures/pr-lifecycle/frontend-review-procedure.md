# Procedure: Frontend Review

### 1. Purpose

**Why this procedure exists**

This procedure reviews frontend code changes in pull requests. It checks UI/UX consistency, accessibility, design system usage, component structure, and frontend testing so that frontend quality and user experience are maintained before merge.

**What problem it solves**

- Inconsistent UI or violation of design system
- Accessibility regressions
- Poor component structure or reusability
- Missing or inadequate frontend tests
- UX or performance issues in frontend code

**What "success" looks like at the end**

A frontend review that includes:
- UI/UX and design system usage verified
- Accessibility and semantics checked
- Component structure and patterns reviewed
- Frontend tests and coverage reviewed
- Findings documented and addressed or accepted
- PR approved from frontend perspective or changes requested

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains frontend changes (UI, components, styles, client-side logic)
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags Frontend Review as required
- Reviewer performs frontend-focused review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with frontend changes
- [ ] **Code changes** – Components, pages, styles, hooks, client utilities
- [ ] **Design system / UI guidelines** – If project has them

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **Design system** – Use shared components and tokens (if defined)
- [ ] **Accessibility** – Meet accessibility requirements (e.g. WCAG, project standards)
- [ ] **Static Analysis Checklist** – Align with [Static Analysis Checklist](../../.cursor/rules/static-analysis-checklist.mdc) for frontend items

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete PR Preparation first
- **Design system unclear** – Review against existing patterns and conventions only

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through approval
- **Scope** – Components, pages, styles, and client logic in scope
- **Reference** – Design system, accessibility standards, Static Analysis Checklist
- **Validation points** – After design system check, after a11y check, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Frontend Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Frontend Review Scope

**Purpose**
- Identify all frontend-related changes in the PR

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes)

**Actions**
- List changed components, pages, hooks, styles, and client-side utilities.
- Note routing, state, or data-fetching changes.
- Note use of shared UI library, design system, or design tokens.
- If no frontend changes, document “No frontend changes” and skip to Step 5 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no frontend changes, proceed to Step 5

**Outputs**
- Frontend review scope
- List of relevant files

**Failure Handling**
- **Failure:** Unclear if changes are frontend
  - **Action:** Treat as in-scope; review likely frontend touchpoints

---

#### Step 2: Review Design System and UI/UX Consistency

**Purpose**
- Ensure design system usage and UI/UX consistency

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (code changes, design system / UI guidelines)

**Actions**
- Check use of shared components vs. custom markup:
  - Prefer design system components (buttons, inputs, layout, etc.) over one-off implementations.
  - Use design tokens (spacing, colors, typography) where defined.
- Check consistency:
  - Patterns match existing screens (layout, feedback, loading, errors).
  - No hardcoded colors, spacing, or typography that bypass design tokens.
- Check responsive behavior if applicable (breakpoints, mobile).
- Note violations or recommendations.

**Decisions / Evaluations**
- **Decision:** Design system and UI/UX consistency acceptable?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, request updates and re-review

**Outputs**
- Design system / UI review result
- Findings documented

**Failure Handling**
- **Failure:** Significant design system or UX violations
  - **Action:** Refactor to use design system; re-review

---

#### Step 3: Review Accessibility and Semantics

**Purpose**
- Check accessibility and semantic correctness

**Inputs**
- **From:** Step 2 outputs
- **From:** Procedure Required Inputs (code changes)
- **Reference:** [Static Analysis Checklist](../../.cursor/rules/static-analysis-checklist.mdc) – Accessibility & Semantics

**Actions**
- Check semantics and a11y:
  - Interactive elements have appropriate roles, labels, and keyboard access.
  - Images use appropriate `alt` text or equivalent.
  - Form fields have associated labels; errors are announced.
  - Focus order and focus visibility are sensible.
- Check color contrast and touch targets if relevant.
- Run a11y linters or automated checks if available; triage findings.

**Decisions / Evaluations**
- **Decision:** Accessibility and semantics acceptable?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, fix and re-review

**Outputs**
- Accessibility review result
- Findings documented

**Failure Handling**
- **Failure:** Critical a11y issues
  - **Action:** Fix and re-review

---

#### Step 4: Review Component Structure and Frontend Testing

**Purpose**
- Review component structure, hooks, and frontend tests

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (code changes)

**Actions**
- **Structure:**
  - Components are reasonably scoped and reusable where appropriate.
  - Hooks and effects follow rules-of-hooks; dependency arrays correct.
  - State and props are clear; no unnecessary prop drilling or global state.
- **Testing:**
  - New or changed behavior has frontend tests (unit, component, or e2e as appropriate).
  - Tests are meaningful (not only snapshots without assertions).
  - Critical user flows covered where feasible.

**Decisions / Evaluations**
- **Decision:** Component structure and frontend testing acceptable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, improve structure or tests and re-review

**Outputs**
- Structure and testing review result
- Findings documented

**Failure Handling**
- **Failure:** Missing tests for critical behavior or structural issues
  - **Action:** Add tests or refactor; re-review

---

#### Step 5: Document Findings and Approve or Request Changes

**Purpose**
- Summarize review and approve or request changes

**Inputs**
- **From:** Steps 2–4 outputs (or Step 1 skip)

**Actions**
- Compile frontend review summary:
  - Scope, design system, a11y, structure, testing
  - Findings and follow-ups
- **Approve** if no blocking issues.
- **Request changes** if blocking; list required fixes.
- Add review comment to PR.

**Decisions / Evaluations**
- **Decision:** Review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- Frontend review summary
- Approve or request changes on PR

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Artifacts produced:** Scope, design system, a11y, structure, testing results, review summary.  
**State changes:** PR has frontend review completed.  
**Signals emitted:** “Frontend review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Design system and UI/UX consistency reviewed
- [ ] Accessibility and semantics reviewed
- [ ] Component structure and frontend testing reviewed
- [ ] Findings documented and resolved or accepted

**Who can approve:** Frontend tech lead or designated frontend reviewer

---

### 8. Downstream Dependencies

**Output → Input:** Frontend review result → PR workflow, [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md).

---

### 9. Definition of Done

- [ ] Scope defined or “no frontend changes” documented
- [ ] Design system and UI/UX reviewed
- [ ] Accessibility and semantics reviewed
- [ ] Component structure and frontend testing reviewed
- [ ] Findings documented; blocking items resolved or accepted
- [ ] PR approved or changes requested from frontend perspective

---

### 10. Audit & Traceability

**Links to:** PR, design system / UI guidelines, Static Analysis Checklist. **Audit trail:** Review date, reviewer, result, findings.

---

### 11. Exit States

**✅ Completed successfully** – Review done, no blocking findings, approved.  
**⚠️ Blocked** – Blocking findings; fix and re-review.  
**❌ Aborted** – PR closed or review no longer required.

---

**Status:** Active Procedure  
**Owner:** Frontend tech lead / Frontend reviewer
