# Procedure: Design System Compliance

### 1. Purpose

**Why this procedure exists**

This procedure validates that UX designs, wireframes, mockups, and frontend implementations align with the design system. It ensures features use design system components, tokens, and patterns correctly so that UI stays consistent and maintainable.

**What problem it solves**

- Designs or implementations drift from the design system
- Ad-hoc components or tokens used instead of design system ones
- No clear compliance check before implementation or code review
- Inconsistent UX across features

**What "success" looks like at the end**

A compliance check that results in:
- UX design (user journeys, wireframes, mockups) validated against the design system, or gaps documented and remediated
- Frontend implementation validated against the design system, or deviations documented and fixed
- Compliance findings recorded; ready for next phase (e.g. implementation or PR)

---

### 2. Trigger

**What causes this procedure to be invoked**

- After [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md) produces designs; before or during [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md)
- [Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md) mandates compliance checkpoints
- Before frontend code review or PR merge
- Design system owner requests periodic compliance review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Design system reference** – Tokens, components, patterns, usage docs (from [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) and [Design System Documentation Procedure](./design-system-documentation-procedure.md))
- [ ] **Subject of review** – UX designs (wireframes, mockups) and/or frontend implementation (code, UI)
- [ ] **Scope** – What is in scope (e.g. single feature, specific flows, specific components)

**Decisions already made:**
- [ ] **Design system is defined** – Design system exists and is documented

**Constraints:**
- [ ] **Compliance criteria** – What “compliant” means (use design system components/tokens, follow patterns, no unauthorised overrides)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing design system** → Invoke [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) first
- **Missing subject** → Obtain designs or implementation to review; then re-run

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Scope confirmation, review of designs and/or code, findings, remediation
- **Procedures to be invoked** – [Design System Component Procedure](./design-system-component-procedure.md) or [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) if gaps require new components or design system changes
- **Dependencies between steps** – Reference available → Review → Findings → Remediation or accept deviations
- **Risks & unknowns** – Unclear design system boundaries, legacy UI not yet migrated
- **Validation points** – After review, after remediation

**Plan must be reviewed before execution begins**

**Output:**
- Design System Compliance Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Confirm Scope and Reference

**Purpose**
- Lock scope and ensure design system reference is available

**Inputs**
- **From:** Required Inputs (design system reference, subject, scope)

**Actions**
- Confirm what is being reviewed (designs only, implementation only, or both).
- Confirm design system version and documentation to use.
- Document scope (features, flows, components).

**Decisions / Evaluations**
- **Go:** Scope and reference confirmed → Step 2  
- **No-Go:** Resolve missing reference or scope; re-run

**Outputs**
- Scope and reference confirmed

**Failure Handling**
- **Failure:** No design system or subject  
  - **Action:** Obtain design system and subject; re-run Step 1

---

#### Step 2: Review Against Design System

**Purpose**
- Compare designs and/or implementation to design system (tokens, components, patterns)

**Inputs**
- **From:** Step 1; design system reference; subject of review

**Actions**
- **Designs:** Check wireframes/mockups use design system components, tokens, and patterns; note deviations.
- **Implementation:** Check frontend code uses design system components and tokens; note custom components or overrides.
- Record findings (compliant, deviation, gap). Gaps = need design system change (e.g. new component).

**Decisions / Evaluations**
- **Go:** Review complete; findings documented → Step 3  
- **No-Go:** Complete review; re-document findings

**Outputs**
- Compliance findings (compliant / deviation / gap) per scope

**Failure Handling**
- **Failure:** Design system unclear or incomplete  
  - **Action:** Clarify with design system owner; or document “compliance deferred” and reason

---

#### Step 3: Remediate or Accept

**Purpose**
- Address findings: fix deviations, add components, or accept and document exceptions

**Inputs**
- **From:** Step 2 (findings)

**Actions**
- **Deviations:** Update designs or implementation to use design system; or document accepted exception and owner.
- **Gaps:** Invoke [Design System Component Procedure](./design-system-component-procedure.md) or [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) to add missing components/tokens; then re-check affected scope.
- **Compliant:** No changes; mark compliance passed for scope.

**Decisions / Evaluations**
- **Go:** All findings remediated or accepted → Step 4  
- **No-Go:** Complete remediation; re-run compliance for affected scope  
- **Blocked:** Gaps require design system work; block until done, then re-run

**Outputs**
- Remediation done or exceptions documented; compliance passed for scope

**Failure Handling**
- **Failure:** Critical deviations cannot be fixed or accepted  
  - **Action:** Escalate to design system owner / tech lead; block until resolved

---

#### Step 4: Record and Signal

**Purpose**
- Record compliance result and signal downstream (e.g. ready for implementation or PR)

**Inputs**
- **From:** Step 3 (remediation or acceptance)

**Actions**
- Document compliance result (pass / pass with exceptions) and any exceptions.
- Link to design system version, scope, and findings.
- Signal “Design system compliance passed” for scope (or “blocked” if applicable).

**Decisions / Evaluations**
- **Go:** Recorded and signalled → procedure complete

**Outputs**
- Compliance record; downstream can proceed

**Failure Handling**
- N/A (procedure complete)

---

### 6. Output Contract

**Artifacts produced:** Compliance findings; remediation or exceptions; compliance record for scope.  
**State changes:** Designs/implementation aligned with design system or exceptions documented.  
**Signals emitted:** “Design system compliance passed” (or “blocked”).

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Review performed against design system reference
- [ ] Findings documented (compliant / deviation / gap)
- [ ] Deviations remediated or accepted and documented
- [ ] Compliance record created and signalled

**Who can approve:** Design system owner, tech lead, or frontend lead (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Compliance result → [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) (proceed with implementation or PR), [Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md) (checkpoint).

**Procedures that depend on this:**
- [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md) – Compliance check during design review
- [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) – Compliance validated before/during implementation
- [Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md) – Invokes compliance at defined checkpoints

---

### 9. Definition of Done

- [ ] Scope and design system reference confirmed
- [ ] Review complete; findings documented
- [ ] Deviations remediated or accepted and documented
- [ ] Compliance record created and signalled

---

### 10. Audit & Traceability

**Links to:** Design system version, scope, findings, compliance record, any invoked procedures (Component, Creation/Update).  
**Audit trail:** Review date, reviewer, result, exceptions.

---

### 11. Exit States

**✅ Completed successfully** – Compliance passed for scope; downstream can proceed.  
**⚠️ Blocked** – Gaps require design system work; block until done, then re-run.  
**❌ Aborted** – Compliance check cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Design system owner / Frontend lead
