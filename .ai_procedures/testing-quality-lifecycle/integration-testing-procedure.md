# Procedure: Integration Testing (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to write, run, and maintain integration tests (database, APIs, external services) per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). It ensures integration tests use test doubles or test environments, avoid production data, and are integrated with [CI Quality Gates](./ci-quality-gates-procedure.md) and [Test Data Management](./test-data-management-procedure.md).

**What problem it solves**

- No or ad-hoc integration tests; integration bugs reach production
- Tests hit production or shared state; flaky or unsafe
- [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md) or [Feature Integration Testing](../feature-lifecycle/integration-testing-procedure.md) lack lifecycle-level practices
- [Test Data Management](./test-data-management-procedure.md) or [Mocking/Stubbing](../third-party-integration-lifecycle/mocking-stubbing-procedure.md) not used consistently

**What "success" looks like at the end**

Integration testing practices defined and used with:
- Scope, structure, and quality rules per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- Test environments and [Test Data Management](./test-data-management-procedure.md); [Mocking/Stubbing](../third-party-integration-lifecycle/mocking-stubbing-procedure.md) for third-party
- Tests run in CI where feasible; [CI Quality Gates](./ci-quality-gates-procedure.md) enforce

---

### 2. Trigger

- New integration (DB, API, service); integration tests required per [Test Plan](../feature-lifecycle/test-plan-procedure.md) and [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- [CI Quality Gates](./ci-quality-gates-procedure.md) or PR review flag missing or failing integration tests
- [Feature Integration Testing](../feature-lifecycle/integration-testing-procedure.md) invokes lifecycle practices
- Flaky or slow integration tests; need fix or quarantine

---

### 3. Required Inputs

**Artifacts:** Code and integrations under test; [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); [Test Data Management](./test-data-management-procedure.md), [Mocking/Stubbing](../third-party-integration-lifecycle/mocking-stubbing-procedure.md) (or scope).  
**Decisions:** Owner (dev, platform); test env and tooling.  
**Constraints:** No production data; cleanup or ephemeral resources; deterministic where possible.

**Remediation:** Test data or mocks missing → use [Test Data Management](./test-data-management-procedure.md) and [Mocking/Stubbing](../third-party-integration-lifecycle/mocking-stubbing-procedure.md); document assumptions.

---

### 4. Plan Requirement

**Plan includes:** Scope, test env, test data, mocks, CI integration. **Output:** Integration Testing Plan (or team standard).

---

### 5. Workflow

**Step 1: Define scope and setup.** Document what to integration test (DB, APIs, services); test env; [Test Data Management](./test-data-management-procedure.md) and [Mocking/Stubbing](../third-party-integration-lifecycle/mocking-stubbing-procedure.md) usage. Align with [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). **Outputs:** Scope and setup.

**Step 2: Implement tests.** Write integration tests; use test DB, test doubles, or mocks per plan; cleanup or ephemeral resources. **Outputs:** Integration tests.

**Step 3: Integrate and maintain.** Run integration tests in CI per [CI Quality Gates](./ci-quality-gates-procedure.md); fix flaky tests or quarantine with ticket. **Outputs:** CI integration; maintenance process.

---

### 6. Output Contract

**Artifacts:** Integration tests, test env config, CI integration. **State:** Integration testing operational per standards. **Signals:** “Integration tests pass”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and setup defined; tests implemented and run in CI; no production data; flaky tests addressed. **Who approves:** Tech lead, platform owner.

---

### 8. Downstream Dependencies

**Output →:** [CI Quality Gates Procedure](./ci-quality-gates-procedure.md), [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md), [Test Data Management Procedure](./test-data-management-procedure.md), [Mocking/Stubbing Procedure](../third-party-integration-lifecycle/mocking-stubbing-procedure.md). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md).

---

### 9. Definition of Done

- [ ] Scope and setup defined
- [ ] Integration tests implemented and run in CI
- [ ] Test data and mocks used; flaky tests fixed or quarantined

---

### 10. Audit & Traceability

**Links to:** Test code, test env, test data, mocks, CI, standards. **Audit trail:** Coverage, quarantine tickets.

---

### 11. Exit States

**✅ Completed successfully** – Integration testing operational. **⚠️ Blocked** – Test env or data unclear; resolve and re-run. **❌ Aborted** – Integration testing work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Dev / Platform
