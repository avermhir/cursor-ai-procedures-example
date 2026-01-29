# Procedure: Design System Component

### 1. Purpose

**Why this procedure exists**

This procedure defines how to create, document, and maintain individual design system components. It ensures components are reusable, use design tokens, follow accessibility standards, and are documented for consumers.

**What problem it solves**

- Ad-hoc or one-off components that don’t fit the design system
- Components missing documentation, props, or usage guidelines
- Inconsistent implementation (e.g. token usage, a11y) across components
- No clear process for adding or updating design system components

**What "success" looks like at the end**

A design system component that:
- Uses design tokens; supports required variants and props
- Meets accessibility requirements (e.g. WCAG)
- Is documented (props, variants, examples) and published
- Can be consumed by [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) and checked by [Design System Compliance Procedure](./design-system-compliance-procedure.md)

---

### 2. Trigger

**What causes this procedure to be invoked**

- New component needed (from [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md), [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md), or [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md))
- Existing component update (props, variants, accessibility, tokens)
- [Design System Compliance Procedure](./design-system-compliance-procedure.md) identifies a gap that requires a new component

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Design system reference** – Tokens, patterns, existing components (from [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md))
- [ ] **Component spec** – Name, purpose, props, variants, and usage context (from design, frontend, or design system owner)
- [ ] **Design system repo/package** – Where the component will be implemented and published

**Decisions already made:**
- [ ] **Component is in scope** – Design system owner or team has agreed to add/update this component
- [ ] **Tech stack** – Framework and tooling (e.g. React, Vue) for implementation

**Constraints:**
- [ ] **Accessibility** – WCAG level and any component-specific a11y requirements
- [ ] **Token usage** – Components must use design tokens; no hard-coded colors/spacing per design system standards

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing component spec** – Draft spec (name, props, variants) with designer/frontend; then proceed
- **Missing design system** – Invoke [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) first

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Spec lock, implementation, tokens/a11y, documentation, publish
- **Procedures to be invoked** – [Design System Documentation Procedure](./design-system-documentation-procedure.md) (for documenting the component)
- **Dependencies between steps** – Spec → Implement → Validate → Document → Publish
- **Risks & unknowns** – Breaking API changes, unclear a11y requirements
- **Validation points** – After implementation, after documentation

**Plan must be reviewed before execution begins**

**Output:**
- Design System Component Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Lock Component Spec

**Purpose**
- Agree on component name, props, variants, and usage

**Inputs**
- **From:** Required Inputs (component spec, design system reference)

**Actions**
- Confirm name, purpose, props, variants, and usage context.
- Check for overlap with existing components; reuse or extend where possible.
- Document spec (in ticket, wiki, or design system repo).
- Get sign-off from design system owner or design/frontend lead.

**Decisions / Evaluations**
- **Go:** Spec locked and signed off → Step 2  
- **No-Go:** Revise spec; re-review  
- **Reuse:** Existing component sufficient → Skip implementation; update docs if needed → Step 4

**Outputs**
- Component spec (name, props, variants, usage) signed off

**Failure Handling**
- **Failure:** Spec disputed or unclear  
  - **Action:** Resolve with stakeholders; re-document and re-review

---

#### Step 2: Implement Component

**Purpose**
- Implement component using tokens and meeting accessibility requirements

**Inputs**
- **From:** Step 1 (spec); design system tokens, tech stack

**Actions**
- Implement component in design system repo/package.
- Use design tokens only (no hard-coded colors, spacing, etc.).
- Support specified props and variants.
- Apply accessibility requirements (focus, labels, ARIA, keyboard, etc.); test with a11y tools.
- Add unit tests for behaviour and snapshot where appropriate.

**Decisions / Evaluations**
- **Go:** Implementation complete and a11y met → Step 3  
- **No-Go:** Fix implementation or a11y issues; re-validate

**Outputs**
- Component implementation; tests passing; a11y requirements met

**Failure Handling**
- **Failure:** A11y or token violations  
  - **Action:** Fix before proceeding; escalate if requirements unclear

---

#### Step 3: Validate and Integrate

**Purpose**
- Validate component in isolation and in design system; integrate into library

**Inputs**
- **From:** Step 2 (implementation)

**Actions**
- Run existing design system tests and lint; ensure no regressions.
- Validate component in storybook or equivalent (visual, variants, a11y).
- Integrate into component library; export and version per design system practices.

**Decisions / Evaluations**
- **Go:** Validated and integrated → Step 4  
- **No-Go:** Fix issues; re-validate

**Outputs**
- Component in design system library; validated

**Failure Handling**
- **Failure:** Regressions or integration issues  
  - **Action:** Fix; re-run tests and validation

---

#### Step 4: Document and Publish

**Purpose**
- Document component and publish for consumers

**Inputs**
- **From:** Step 3 (component); spec

**Actions**
- Follow [Design System Documentation Procedure](./design-system-documentation-procedure.md) for component docs: props, variants, examples, usage guidelines.
- Update design system package version and changelog; publish per design system release process.
- Notify consumers of new/updated component.

**Decisions / Evaluations**
- **Go:** Documented and published → procedure complete  
- **No-Go:** Complete docs or release; re-validate

**Outputs**
- Component documented and published; ready for use

**Failure Handling**
- **Failure:** Docs incomplete or release failed  
  - **Action:** Complete docs; fix release; then mark done

---

### 6. Output Contract

**Artifacts produced:** Component implementation; component documentation (props, variants, examples); design system package update.  
**State changes:** Design system includes new/updated component; consumers can use it.  
**Signals emitted:** “Design system component ready”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Spec locked and signed off
- [ ] Component implemented with tokens; a11y met
- [ ] Component validated and integrated
- [ ] Component documented and published

**Who can approve:** Design system owner, frontend lead, or designer (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Component → [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md), [Design System Compliance Procedure](./design-system-compliance-procedure.md), [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) (when adding components as part of creation/update).

**Procedures that depend on this:**
- [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) – Invokes this when adding components
- [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) – Uses design system components
- [Design System Compliance Procedure](./design-system-compliance-procedure.md) – Validates use of components

---

### 9. Definition of Done

- [ ] Component spec locked and signed off
- [ ] Component implemented with tokens; a11y met; tests passing
- [ ] Component validated and integrated into design system
- [ ] Component documented and published

---

### 10. Audit & Traceability

**Links to:** Component spec, implementation (repo/PR), design system version, documentation.  
**Audit trail:** Spec, implementer, publish date, changelog.

---

### 11. Exit States

**✅ Completed successfully** – Component added/updated, documented, published.  
**⚠️ Blocked** – Spec or design system unclear; resolve and re-run.  
**❌ Aborted** – Component work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Design system owner / Frontend lead
