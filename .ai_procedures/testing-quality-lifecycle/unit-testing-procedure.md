# Procedure: Unit Testing (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to write, run, and maintain unit tests so that business logic, utilities, and pure functions are tested per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). It ensures unit tests are fast, deterministic, and integrated with [CI Quality Gates](./ci-quality-gates-procedure.md) and [Test Coverage](../pr-lifecycle/test-coverage-procedure.md) review.

**What problem it solves**

- No or inconsistent unit testing; logic bugs reach production
- Slow or flaky unit tests; CI blocked or unreliable
- [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md) or PR review cannot assume consistent unit-test practices
- Coverage gaps in critical paths

**What "success" looks like at the end**

Unit testing practices defined and used with:
- Scope (what to unit test), structure, and quality rules per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- Tests run in CI; [CI Quality Gates](./ci-quality-gates-procedure.md) and [Test Coverage](../pr-lifecycle/test-coverage-procedure.md) enforce
- Fast, deterministic, maintainable tests; flaky tests fixed or quarantined

---

### 2. Trigger

- New code or feature; unit tests required per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md) and [Test Plan](../feature-lifecycle/test-plan-procedure.md)
- [CI Quality Gates](./ci-quality-gates-procedure.md) or [Test Coverage](../pr-lifecycle/test-coverage-procedure.md) flag missing or failing unit tests
- Refactor or bug fix; unit tests added or updated
- Flaky or slow unit tests; need fix or quarantine

---

### 3. Required Inputs

**Artifacts:** Code under test; [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); [Test Plan](../feature-lifecycle/test-plan-procedure.md) or scope (if feature).  
**Decisions:** Owner (dev, platform); framework and conventions (e.g. Jest, pytest).  
**Constraints:** No production secrets; no shared mutable state; deterministic.

**Remediation:** Test plan missing → define minimal scope (critical paths, new code); align with standards.

---

### 4. Plan Requirement

**Plan includes:** Scope, framework, conventions, CI integration, coverage expectations. **Output:** Unit Testing Plan (or team standard).

---

### 5. Workflow

**Step 1: Define scope and conventions.** Document what to unit test (logic, utilities, pure functions); structure (file layout, naming); quality (independent, deterministic, readable). Align with [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). **Outputs:** Scope and conventions.

**Step 2: Implement tests.** Write unit tests per conventions; use setup/teardown or fixtures; no production secrets or external I/O. **Outputs:** Unit tests.

**Step 3: Integrate and maintain.** Run unit tests in CI per [CI Quality Gates](./ci-quality-gates-procedure.md); report coverage per [Test Coverage](../pr-lifecycle/test-coverage-procedure.md). Fix flaky tests or quarantine with ticket. **Outputs:** CI integration; maintenance process.

---

### 6. Output Contract

**Artifacts:** Unit tests, CI config, coverage reporting. **State:** Unit testing operational per standards. **Signals:** “Unit tests pass”; “Coverage reported”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and conventions defined; tests implemented and run in CI; flaky tests addressed. **Who approves:** Tech lead, platform owner.

---

### 8. Downstream Dependencies

**Output →:** [CI Quality Gates Procedure](./ci-quality-gates-procedure.md), [Test Coverage Procedure](../pr-lifecycle/test-coverage-procedure.md), [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md).

---

### 9. Definition of Done

- [ ] Scope and conventions defined
- [ ] Unit tests implemented and run in CI
- [ ] Coverage reported; flaky tests fixed or quarantined

---

### 10. Audit & Traceability

**Links to:** Test code, CI config, coverage reports, standards. **Audit trail:** Coverage trends, quarantine tickets.

---

### 11. Exit States

**✅ Completed successfully** – Unit testing operational per standards. **⚠️ Blocked** – Framework or CI unclear; resolve and re-run. **❌ Aborted** – Unit testing work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Dev / Platform
