# Procedure: End-to-End Testing (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to implement and maintain end-to-end (E2E) tests for critical user journeys per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). It ensures E2E tests are focused, maintainable, and run in CI with clear ownership, and that [Feature E2E Testing](../feature-lifecycle/end-to-end-testing-procedure.md) and [CI Quality Gates](./ci-quality-gates-procedure.md) use consistent practices.

**What problem it solves**

- No or brittle E2E tests; critical user flows untested or flaky
- E2E suite too large or slow; CI blocked or unreliable
- [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md) or [User Journey/UX](../feature-lifecycle/user-journey-ux-procedure.md) outcomes not validated by E2E
- No clear ownership or maintenance of E2E suite

**What "success" looks like at the end**

E2E testing practices defined and used with:
- Scope (critical user journeys only), structure, and quality rules per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- E2E tests run in CI; [CI Quality Gates](./ci-quality-gates-procedure.md) enforce; flaky tests fixed or quarantined
- Clear ownership and maintenance; [Feature E2E](../feature-lifecycle/end-to-end-testing-procedure.md) aligns with lifecycle practices

---

### 2. Trigger

- New critical user journey; E2E tests required per [Test Plan](../feature-lifecycle/test-plan-procedure.md) and [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- [Feature E2E Testing](../feature-lifecycle/end-to-end-testing-procedure.md) invokes lifecycle practices
- [CI Quality Gates](./ci-quality-gates-procedure.md) or PR review flag missing or failing E2E tests
- Flaky or slow E2E tests; need fix or quarantine

---

### 3. Required Inputs

**Artifacts:** User journeys (from [User Journey/UX](../feature-lifecycle/user-journey-ux-procedure.md) or [Test Plan](../feature-lifecycle/test-plan-procedure.md)); [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); E2E tooling (e.g. Playwright, Cypress).  
**Decisions:** Owner (dev, QA, platform); scope (which journeys), run frequency.  
**Constraints:** Focused set; deterministic; no production data; cleanup or ephemeral env.

**Remediation:** User journeys unclear → define minimal critical journeys; refine with product.

---

### 4. Plan Requirement

**Plan includes:** Scope (journeys), structure, tooling, CI integration, ownership. **Output:** E2E Testing Plan (or team standard).

---

### 5. Workflow

**Step 1: Define scope and structure.** Document critical user journeys to cover; keep set focused and maintainable. Define structure (layout, naming, fixtures). Align with [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). **Outputs:** Scope and structure.

**Step 2: Implement E2E tests.** Implement E2E tests per scope; use test env and [Test Data Management](./test-data-management-procedure.md) where applicable; avoid production. **Outputs:** E2E tests.

**Step 3: Integrate and maintain.** Run E2E tests in CI per [CI Quality Gates](./ci-quality-gates-procedure.md); fix flaky tests or quarantine with ticket. Maintain clear ownership. **Outputs:** CI integration; ownership and maintenance process.

---

### 6. Output Contract

**Artifacts:** E2E tests, CI integration, ownership. **State:** E2E testing operational per standards. **Signals:** “E2E tests pass”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and structure defined; E2E tests implemented and run in CI; flaky tests addressed; ownership clear. **Who approves:** Tech lead, QA, platform owner.

---

### 8. Downstream Dependencies

**Output →:** [CI Quality Gates Procedure](./ci-quality-gates-procedure.md), [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md), [Feature E2E Testing](../feature-lifecycle/end-to-end-testing-procedure.md), [Test Data Management Procedure](./test-data-management-procedure.md). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md).

---

### 9. Definition of Done

- [ ] Scope and structure defined
- [ ] E2E tests implemented and run in CI
- [ ] Ownership and maintenance process in place; flaky tests fixed or quarantined

---

### 10. Audit & Traceability

**Links to:** E2E tests, user journeys, CI, standards. **Audit trail:** Scope changes, quarantine tickets.

---

### 11. Exit States

**✅ Completed successfully** – E2E testing operational. **⚠️ Blocked** – Tooling or env missing; resolve and re-run. **❌ Aborted** – E2E work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Dev / QA / Platform
