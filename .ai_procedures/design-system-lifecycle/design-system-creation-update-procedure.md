# Procedure: Design System Creation/Update

### 1. Purpose

**Why this procedure exists**

This procedure defines how to create a new design system or update an existing one. It ensures the design system is structured, documented, and evolved in a consistent way so that UX, frontend implementation, and compliance checks can rely on a single source of truth.

**What problem it solves**

- No shared design system; inconsistent UI across features
- Ad-hoc updates; tokens, components, or patterns drift
- Unclear ownership or versioning; consumers unsure what to use
- Design system gaps discovered late (e.g. during frontend implementation)

**What "success" looks like at the end**

A design system (new or updated) that includes:
- Design tokens (colors, typography, spacing, etc.) defined and versioned
- Component library and/or style guide available to consumers
- Documented patterns and usage; compliance check possible
- Ready for [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md), [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md), and [Design System Compliance Procedure](./design-system-compliance-procedure.md)

---

### 2. Trigger

**What causes this procedure to be invoked**

- New product or app with no design system; UX/frontend work blocked
- [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md) or [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) identifies missing design system
- Design system gaps (new tokens, components, or patterns) identified during feature work
- Planned design system evolution (rebrand, accessibility, new platform)
- [Design System Component Procedure](./design-system-component-procedure.md) or compliance review surfaces need for foundational updates

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Scope** – Create new vs update existing; which areas (tokens, components, patterns, docs)
- [ ] **Consumers** – Who uses the design system (e.g. web app, docs site, internal tools)
- [ ] **Design system repository or package** – Where tokens, components, and docs live (or where they will be created)
- [ ] **Brand / accessibility constraints** – Brand guidelines, WCAG level, platform requirements (if applicable)

**Decisions already made:**
- [ ] **Ownership** – Team or role responsible for design system
- [ ] **Tech stack** – Framework/tooling for components (e.g. React, Vue, CSS-only) if creating components

**Constraints:**
- [ ] **Accessibility** – WCAG compliance level for design system outputs
- [ ] **Versioning** – How design system versions are released (e.g. semver, changelog)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing scope** – Define create vs update and in-scope areas; document and proceed
- **Missing consumers** – Identify primary consumers (e.g. main app); refine later
- **Missing repo/package** – Create repo or package location as first step; then continue

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – From scope confirmation through tokens, components (if applicable), patterns, and documentation
- **Procedures to be invoked** – [Design System Component Procedure](./design-system-component-procedure.md) (for new components), [Design System Documentation Procedure](./design-system-documentation-procedure.md) (for documenting)
- **Dependencies between steps** – Tokens → components → patterns → docs; updates may touch only a subset
- **Risks & unknowns** – Unclear brand rules, missing accessibility specs, breaking changes for consumers
- **Validation points** – After tokens, after component additions/updates, after documentation

**Plan must be reviewed before execution begins**

**Output:**
- Design System Creation/Update Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Confirm Scope and Location

**Purpose**
- Lock scope (create vs update) and ensure repository/package exists

**Inputs**
- **From:** Required Inputs (scope, consumers, repo/package)

**Actions**
- Confirm create vs update; list areas in scope (tokens, components, patterns, docs).
- Ensure design system repo or package exists; create if missing.
- Document ownership and versioning approach.

**Decisions / Evaluations**
- **Go:** Scope and location confirmed → Step 2  
- **No-Go:** Resolve gaps (e.g. create repo, assign owner) and re-confirm

**Outputs**
- Scope document; repo/package ready

**Failure Handling**
- **Failure:** No owner or repo  
  - **Action:** Assign owner, create repo; then re-run Step 1

---

#### Step 2: Define or Update Design Tokens

**Purpose**
- Establish or evolve design tokens (colors, typography, spacing, motion, etc.)

**Inputs**
- **From:** Step 1; brand/accessibility constraints

**Actions**
- Define tokens (e.g. color palette, type scale, spacing scale, radii, shadows).
- Ensure accessibility (e.g. contrast) where applicable.
- Export tokens in consumable format (CSS vars, JSON, etc.) and version.

**Decisions / Evaluations**
- **Go:** Tokens defined and exported → Step 3  
- **No-Go:** Complete token set and re-validate

**Outputs**
- Design tokens (versioned); consumable by components and apps

**Failure Handling**
- **Failure:** Accessibility violations (e.g. contrast)  
  - **Action:** Adjust tokens to meet WCAG; re-validate

---

#### Step 3: Add or Update Components (If In Scope)

**Purpose**
- Create or update component library per scope

**Inputs**
- **From:** Step 2 (tokens); Required Inputs (tech stack)

**Actions**
- Implement or update components per [Design System Component Procedure](./design-system-component-procedure.md) when adding components.
- Use design tokens; document props, variants, and usage.
- Publish or link component library for consumers.

**Decisions / Evaluations**
- **Go:** In-scope components done and published → Step 4  
- **No-Go:** Complete component work; re-validate  
- **Skip:** Components not in scope (update-only) → Step 4

**Outputs**
- Component library (or updates); usable by frontend implementation

**Failure Handling**
- **Failure:** Component gaps or breaking changes  
  - **Action:** Fix or version; communicate to consumers; escalate if broad impact

---

#### Step 4: Document Patterns and Usage

**Purpose**
- Document patterns, usage, and governance so consumers and compliance can use the design system

**Inputs**
- **From:** Steps 2–3 (tokens, components); scope

**Actions**
- Follow [Design System Documentation Procedure](./design-system-documentation-procedure.md) to document patterns, usage, and release notes.
- Ensure style guide and/or storybook (or equivalent) are up to date.
- Publish docs and link from design system package or repo.

**Decisions / Evaluations**
- **Go:** Documentation complete and published → Step 5  
- **No-Go:** Complete docs; re-validate

**Outputs**
- Design system documentation; style guide / storybook current

**Failure Handling**
- **Failure:** Docs missing or stale  
  - **Action:** Complete documentation before marking procedure done

---

#### Step 5: Validate and Release

**Purpose**
- Validate design system outputs and release for consumers

**Inputs**
- **From:** Steps 2–4 (tokens, components, docs)

**Actions**
- Run [Design System Compliance Procedure](./design-system-compliance-procedure.md) on the design system itself (self-check) if applicable.
- Version and release (tag, changelog, package publish as appropriate).
- Notify consumers of updates; document breaking changes.

**Decisions / Evaluations**
- **Go:** Validated and released → procedure complete  
- **No-Go:** Address compliance or release issues; re-validate

**Outputs**
- Released design system (tokens, components, docs); consumers can adopt

**Failure Handling**
- **Failure:** Compliance or release failures  
  - **Action:** Fix issues; re-run validation and release

---

### 6. Output Contract

**Artifacts produced:** Design tokens (versioned); component library updates (if in scope); design system documentation (patterns, usage, style guide).  
**State changes:** Design system created or updated; consumers can use new/updated tokens, components, and docs.  
**Signals emitted:** “Design system ready” / “Design system updated”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Tokens defined and exported; accessibility met where required
- [ ] In-scope components implemented/updated and published
- [ ] Documentation complete and published
- [ ] Version released; consumers notified of changes

**Who can approve:** Design system owner, tech lead, or product (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Design system (tokens, components, docs) → [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md), [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md), [Design System Compliance Procedure](./design-system-compliance-procedure.md).

**Procedures that depend on this:**
- [User Journey/UX Procedure](../feature-lifecycle/user-journey-ux-procedure.md) – Uses design system for UX design
- [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) – Uses design system reference
- [Design System Compliance Procedure](./design-system-compliance-procedure.md) – Validates against design system

---

### 9. Definition of Done

- [ ] Scope (create/update) confirmed; repo/package ready
- [ ] Design tokens defined and versioned; accessibility satisfied
- [ ] In-scope components added/updated and published
- [ ] Documentation complete and published
- [ ] Design system validated and released; consumers notified

---

### 10. Audit & Traceability

**Links to:** Design system repo/package, version tags, changelog, compliance check results.  
**Audit trail:** Scope, owner, release date, breaking changes.

---

### 11. Exit States

**✅ Completed successfully** – Design system created or updated, released, ready for consumers.  
**⚠️ Blocked** – Missing scope, owner, or repo; resolve and re-run.  
**❌ Aborted** – Design system work cancelled; document reason and notify consumers.

---

**Status:** Active Procedure  
**Owner:** Design system owner / Tech lead
