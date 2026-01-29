# Procedure: Design System Documentation

### 1. Purpose

**Why this procedure exists**

This procedure defines how to document the design system—tokens, components, patterns, and usage guidelines—so that designers and developers can discover, use, and comply with it consistently.

**What problem it solves**

- Design system exists but is poorly documented; adoption and compliance suffer
- No single place for tokens, components, patterns, or usage
- Unclear how to use components or when to request new ones
- Documentation drifts from implementation

**What "success" looks like at the end**

Design system documentation that includes:
- Token reference (colors, typography, spacing, etc.) and how to use them
- Component reference (props, variants, examples) and usage guidelines
- Pattern and usage guidelines; when to use what
- Accessible to designers and developers; kept in sync with implementation

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) includes documentation (Step 4)
- New or updated tokens, components, or patterns need documentation
- [Design System Component Procedure](./design-system-component-procedure.md) completes and component docs are needed
- Periodic documentation review or refresh

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Design system** – Tokens, components, patterns (from [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) or design system repo)
- [ ] **Documentation location** – Where docs live (e.g. storybook, docs site, wiki, markdown in repo)
- [ ] **Scope** – What to document (full system, tokens only, new components, etc.)

**Decisions already made:**
- [ ] **Documentation format** – Style guide, storybook, static site, etc.
- [ ] **Ownership** – Who maintains design system docs

**Constraints:**
- [ ] **Accuracy** – Documentation must reflect current tokens, components, and patterns
- [ ] **Discoverability** – Docs must be findable by designers and developers

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing design system** → Invoke [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) first
- **Missing documentation location** → Define location (e.g. storybook, docs site); create if needed; then proceed

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Scope, token docs, component docs, patterns/usage, publish and maintain
- **Procedures to be invoked** – None typically; this procedure is invoked by Creation/Update or Component
- **Dependencies between steps** – Tokens → Components → Patterns → Publish
- **Risks & unknowns** – Docs out of sync with code, multiple sources of truth
- **Validation points** – After each section, after publish

**Plan must be reviewed before execution begins**

**Output:**
- Design System Documentation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Confirm Scope and Location

**Purpose**
- Lock what to document and where it will live

**Inputs**
- **From:** Required Inputs (design system, documentation location, scope)

**Actions**
- Confirm scope (full system, tokens, components, patterns, or subset).
- Confirm documentation location and format (e.g. storybook, docs site).
- Ensure location is accessible to designers and developers.

**Decisions / Evaluations**
- **Go:** Scope and location confirmed → Step 2  
- **No-Go:** Define scope and location; then re-run

**Outputs**
- Scope and location confirmed

**Failure Handling**
- **Failure:** No location or unclear scope  
  - **Action:** Define both; create location if needed; re-run Step 1

---

#### Step 2: Document Tokens

**Purpose**
- Document design tokens (colors, typography, spacing, etc.) and usage

**Inputs**
- **From:** Step 1; design system tokens

**Actions**
- List all tokens with names, values, and usage guidelines.
- Document where tokens come from (e.g. design system package, CSS vars) and how to consume them.
- Add examples (e.g. color palette, type scale) and any accessibility notes (e.g. contrast).

**Decisions / Evaluations**
- **Go:** Token docs complete for scope → Step 3  
- **Skip:** Tokens not in scope → Step 3  
- **No-Go:** Complete token docs; re-validate

**Outputs**
- Token reference (names, values, usage, examples)

**Failure Handling**
- **Failure:** Tokens unclear or missing  
  - **Action:** Align with design system owner; document what exists; flag gaps

---

#### Step 3: Document Components

**Purpose**
- Document each in-scope component (props, variants, examples, usage)

**Inputs**
- **From:** Step 2; design system components

**Actions**
- For each component: name, purpose, props, variants, and examples.
- Add usage guidelines (when to use, when not to use) and accessibility notes.
- Link to implementation (e.g. storybook, code) and keep in sync.
- If using storybook or similar, ensure stories cover variants and key states.

**Decisions / Evaluations**
- **Go:** Component docs complete for scope → Step 4  
- **Skip:** Components not in scope → Step 4  
- **No-Go:** Complete component docs; re-validate

**Outputs**
- Component reference (props, variants, examples, usage)

**Failure Handling**
- **Failure:** Component API unclear or out of date  
  - **Action:** Align with implementation; update docs; re-validate

---

#### Step 4: Document Patterns and Usage

**Purpose**
- Document patterns (e.g. forms, navigation, feedback) and usage guidelines

**Inputs**
- **From:** Steps 2–3; design system patterns

**Actions**
- Document patterns: what they are, when to use them, which tokens/components they use.
- Add usage guidelines (dos and don’ts, accessibility, responsive behaviour).
- Include links to tokens and components; keep consistent with token and component docs.

**Decisions / Evaluations**
- **Go:** Patterns and usage docs complete for scope → Step 5  
- **Skip:** Patterns not in scope → Step 5  
- **No-Go:** Complete pattern docs; re-validate

**Outputs**
- Pattern and usage guidelines

**Failure Handling**
- **Failure:** Patterns vague or inconsistent  
  - **Action:** Clarify with design system owner; document and flag follow-ups

---

#### Step 5: Publish and Maintain

**Purpose**
- Publish documentation and ensure it stays up to date

**Inputs**
- **From:** Steps 2–4 (token, component, pattern docs)

**Actions**
- Publish docs to agreed location (e.g. storybook deploy, docs site).
- Add links from design system package or repo so consumers can find docs.
- Define maintenance cadence (e.g. update on design system release) and owner.
- Add changelog or “last updated” where helpful.

**Decisions / Evaluations**
- **Go:** Published and maintenance defined → procedure complete  
- **No-Go:** Fix publish or maintenance plan; re-validate

**Outputs**
- Published design system documentation; maintenance process defined

**Failure Handling**
- **Failure:** Publish fails or location inaccessible  
  - **Action:** Fix publish or permissions; re-run Step 5

---

### 6. Output Contract

**Artifacts produced:** Token reference; component reference; pattern and usage guidelines; published docs.  
**State changes:** Design system documented and discoverable; consumers can use it correctly.  
**Signals emitted:** “Design system documentation ready”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Token docs complete for scope (names, values, usage)
- [ ] Component docs complete for scope (props, variants, examples, usage)
- [ ] Pattern and usage docs complete for scope
- [ ] Docs published and accessible; maintenance defined

**Who can approve:** Design system owner, tech lead, or docs owner (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Design system documentation → [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md), [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md), [Design System Compliance Procedure](./design-system-compliance-procedure.md).

**Procedures that depend on this:**
- [Design System Creation/Update Procedure](./design-system-creation-update-procedure.md) – Invokes this in Step 4 (document patterns and usage)
- [Design System Component Procedure](./design-system-component-procedure.md) – Uses this for component documentation
- [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md) – Uses design system docs
- [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) – Uses design system docs
- [Design System Compliance Procedure](./design-system-compliance-procedure.md) – Uses docs as reference for compliance

---

### 9. Definition of Done

- [ ] Scope and location confirmed
- [ ] Tokens documented (if in scope)
- [ ] Components documented (if in scope)
- [ ] Patterns and usage documented (if in scope)
- [ ] Docs published and maintenance defined

---

### 10. Audit & Traceability

**Links to:** Documentation location, design system version, changelog.  
**Audit trail:** Last updated, owner, scope.

---

### 11. Exit States

**✅ Completed successfully** – Design system documentation complete and published.  
**⚠️ Blocked** – Design system or location missing; resolve and re-run.  
**❌ Aborted** – Documentation work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Design system owner / Tech lead
