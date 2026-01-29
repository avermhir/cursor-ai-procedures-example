# Procedure: Refactor

### 1. Purpose

**Why this procedure exists**

This procedure guides planned refactoring of code or architecture. It ensures refactors are scoped, impact is assessed, and changes are validated so that quality improves without introducing regressions or breaking dependencies.

**What problem it solves**

- Ad-hoc refactors that introduce bugs or break callers
- No impact analysis; dependencies or consumers not considered
- Refactor scope creep or incomplete validation
- No link to tech debt or ADRs

**What "success" looks like at the end**

A refactor that includes:
- Scope and goal defined; impact assessed (using dependency graph where available)
- Refactor plan approved; changes implemented and tested
- No unintended regressions; refactor validated and documented

---

### 2. Trigger

**What causes this procedure to be invoked**

- Tech debt or improvement item scheduled for refactor
- [Tech Debt Intake Procedure](./tech-debt-intake-procedure.md) or backlog assigns refactor work
- [Architecture Compliance Validation Procedure](../feature-lifecycle/architecture-compliance-validation-procedure.md) or review identifies refactor need
- Team or architect proposes a refactor for quality or maintainability

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Refactor goal** – What will be improved (e.g. simplify API, remove duplication, align with ADR)
- [ ] **Scope** – Code/components in scope; out of scope
- [ ] **Dependency graph or impact view** – From [Dependency Graph Procedure](./dependency-graph-procedure.md) or equivalent (if available)
- [ ] **Tests** – Existing tests that will validate behavior before and after

**Decisions already made:**
- [ ] **Refactor approved** – Work is approved and scheduled (e.g. from backlog or tech debt)

**Constraints:**
- [ ] **No behavior change** – Refactor preserves observable behavior unless explicitly a behavior change (then treat as feature)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing dependency view** – Do lightweight impact analysis (callers, dependents); document assumptions
- **Missing tests** – Add minimal tests for critical behavior before refactor; then proceed

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – From scope and impact through implementation and validation
- **Scope and goal** – What is being refactored and why
- **Impact** – Callers, dependents, tests affected
- **Approach** – Incremental vs big-bang; order of steps
- **Validation** – How behavior will be verified (tests, smoke, review)
- **Risks & unknowns** – Breaking changes, missing tests

**Plan must be reviewed before execution begins**

**Output:**
- Refactor Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Scope and Assess Impact

**Purpose**
- Agree scope and identify all affected code and dependents

**Inputs**
- **From:** Procedure Required Inputs (refactor goal, scope, dependency graph, tests)

**Actions**
- Document refactor goal and success criteria (what “done” looks like).
- Define scope (files, modules, services) and explicit out-of-scope.
- Use dependency graph or code search to list callers and dependents.
- List tests that cover affected behavior; note gaps.
- Identify risks (e.g. external callers, undocumented dependencies).
- Get plan reviewed (tech lead or architect); adjust scope or approach if needed.

**Decisions / Evaluations**
- **Decision:** Is scope and impact understood and plan approved?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, extend analysis or reduce scope and re-plan

**Outputs**
- Refactor scope and impact assessment
- Approved refactor plan

**Failure Handling**
- **Failure:** Impact too large or unclear
  - **Action:** Narrow scope or add tests first; re-assess

---

#### Step 2: Implement Refactor and Validate

**Purpose**
- Implement refactor and verify behavior is preserved

**Inputs**
- **From:** Step 1 outputs (scope, plan)

**Actions**
- Implement refactor in line with plan (incremental steps if planned).
- Run existing tests after each logical step; fix regressions before continuing.
- Run full test suite and any smoke or integration checks before considering done.
- Update docs or ADRs if structure or contracts changed (e.g. module layout, public API).
- Document what was refactored and any follow-up debt or improvements.

**Decisions / Evaluations**
- **Decision:** Are all tests passing and behavior preserved?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, fix regressions and re-validate

**Outputs**
- Refactor implemented
- Tests passing; behavior preserved
- Docs/ADRs updated as needed; follow-up recorded

**Failure Handling**
- **Failure:** Tests fail or regression found
  - **Action:** Fix before merge; do not ship refactor with failing tests

---

### 6. Output Contract

**Artifacts produced:** Refactored code, updated tests/docs, refactor summary.  
**State changes:** Code quality improved; behavior preserved; dependency graph or baseline updated if needed.  
**Signals emitted:** “Refactor complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Scope and impact assessed; plan approved
- [ ] Refactor implemented; tests passing
- [ ] No unintended behavior change; docs updated as needed

**Who can approve:** Tech lead or code owner

---

### 8. Downstream Dependencies

**Output → Input:** Refactor summary → [Dependency Graph Procedure](./dependency-graph-procedure.md) (update if structure changed), [Tech Debt Intake Procedure](./tech-debt-intake-procedure.md) (close or update debt item).

---

### 9. Definition of Done

- [ ] Scope and impact defined; plan approved
- [ ] Refactor implemented and tests passing
- [ ] Behavior preserved; docs/ADRs updated; follow-up recorded

---

### 10. Audit & Traceability

**Links to:** Refactor plan, PR(s), dependency graph, tech debt item. **Audit trail:** Refactor date, scope, validation result.

---

### 11. Exit States

**✅ Completed successfully** – Refactor done, tests pass, behavior preserved.  
**⚠️ Blocked** – Scope too large, tests missing, or approval withheld; resolve and re-plan.  
**❌ Aborted** – Refactor cancelled; document reason and any partial work.

---

**Status:** Active Procedure  
**Owner:** Tech lead / Developer
