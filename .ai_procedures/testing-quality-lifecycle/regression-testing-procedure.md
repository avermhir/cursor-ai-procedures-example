# Procedure: Regression Testing (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to run and maintain regression tests so that changes do not break existing behavior per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). It ensures regression coverage (unit, integration, contract, E2E) is defined, run in CI via [CI Quality Gates](./ci-quality-gates-procedure.md), and that gaps are tracked and addressed.

**What problem it solves**

- No regression strategy; changes break existing behavior unnoticed
- Regression suite unclear or incomplete; critical paths untested
- [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md) or PR merge does not enforce regression run
- Regressions found in production; need clearer regression coverage and gates

**What "success" looks like at the end**

Regression testing operational with:
- Regression scope (what we regress) and suite (unit, integration, contract, E2E) defined
- Regression run in CI per [CI Quality Gates](./ci-quality-gates-procedure.md); failures block merge unless exempted
- Gaps documented and tracked; suite maintained as behavior evolves

---

### 2. Trigger

- New or changed behavior; regression run required before merge per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- [CI Quality Gates](./ci-quality-gates-procedure.md) or [Test Coverage](../pr-lifecycle/test-coverage-procedure.md) include regression
- Production regression; need to add coverage and prevent recurrence
- Periodic review of regression scope and suite

---

### 3. Required Inputs

**Artifacts:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); unit, integration, contract, E2E procedures and suites; [CI Quality Gates](./ci-quality-gates-procedure.md) config.  
**Decisions:** Owner (dev, QA, platform); regression scope and run frequency.  
**Constraints:** Regression must cover critical paths and changed behavior; failures block merge unless documented exception.

**Remediation:** Suite incomplete → document gaps; add tests for critical paths; track backlog.

---

### 4. Plan Requirement

**Plan includes:** Regression scope, suite composition, CI integration, gap tracking. **Output:** Regression Testing Plan.

---

### 5. Workflow

**Step 1: Define regression scope and suite.** Document what “regression” covers (critical paths, changed behavior); which tests (unit, integration, contract, E2E) form the regression suite. **Outputs:** Regression scope and suite.

**Step 2: Run regression in CI.** Run regression suite in CI per [CI Quality Gates](./ci-quality-gates-procedure.md); failures block merge unless documented exception (e.g. quarantine with ticket). **Outputs:** CI integration; gate behavior.

**Step 3: Maintain and close gaps.** Maintain suite as behavior evolves; add tests for regressions and critical-path gaps. Track and close gaps. **Outputs:** Maintained suite; gap backlog.

---

### 6. Output Contract

**Artifacts:** Regression scope, suite, CI integration, gap backlog. **State:** Regression testing operational. **Signals:** “Regression tests pass”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Regression scope and suite defined; run in CI; failures block merge; gaps tracked. **Who approves:** Tech lead, QA, platform owner.

---

### 8. Downstream Dependencies

**Output →:** [CI Quality Gates Procedure](./ci-quality-gates-procedure.md), [Unit](./unit-testing-procedure.md), [Integration](./integration-testing-procedure.md), [Contract](./contract-testing-procedure.md), [E2E](./end-to-end-testing-procedure.md) procedures. **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md).

---

### 9. Definition of Done

- [ ] Regression scope and suite defined
- [ ] Regression run in CI; failures block merge unless exempted
- [ ] Gaps tracked and addressed over time

---

### 10. Audit & Traceability

**Links to:** Regression suite, CI, unit/integration/contract/E2E procedures. **Audit trail:** Scope changes, gap closure.

---

### 11. Exit States

**✅ Completed successfully** – Regression testing operational. **⚠️ Blocked** – Suite or CI unclear; resolve and re-run. **❌ Aborted** – Regression work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Dev / QA / Platform
