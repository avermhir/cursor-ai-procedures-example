# Procedure: Contract Testing (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to implement and maintain API contract tests (consumer and provider) so that API contracts remain validated per [API Lifecycle](../api-lifecycle/) and [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). It ensures contract drift is detected and [CI Quality Gates](./ci-quality-gates-procedure.md) enforce contract compatibility.

**What problem it solves**

- No contract tests; API changes break consumers unexpectedly
- Consumer and provider expectations diverge; integration failures in staging or production
- [API Contract Procedure](../feature-lifecycle/api-contract-procedure.md) or [Backwards Compatibility](../api-lifecycle/backwards-compatibility-procedure.md) lack executable contract validation
- [PR Lifecycle](../pr-lifecycle/) cannot gate on contract compatibility

**What "success" looks like at the end**

Contract testing operational with:
- Consumer and/or provider contract tests defined and run
- Contract schema (e.g. OpenAPI) used as source of truth; tests aligned
- [CI Quality Gates](./ci-quality-gates-procedure.md) run contract tests; failures block incompatible changes
- Links to [API Lifecycle](../api-lifecycle/), [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)

---

### 2. Trigger

- New or changed API; contract tests required per [API Contract](../feature-lifecycle/api-contract-procedure.md) and [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- [CI Quality Gates](./ci-quality-gates-procedure.md) or [API Contract Compatibility](../pr-lifecycle/api-contract-compatibility-procedure.md) require contract tests
- Consumer or provider change; contract compatibility must be verified
- Contract drift or integration failure; need contract tests to prevent recurrence

---

### 3. Required Inputs

**Artifacts:** API contract (OpenAPI or equivalent); consumer and provider codebases; [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); contract testing tool (e.g. Pact, Spring Cloud Contract).  
**Decisions:** Owner (API team, platform); consumer vs provider-driven approach.  
**Constraints:** Contract as source of truth; no production calls in contract tests.

**Remediation:** Contract missing → use [API Contract Procedure](../feature-lifecycle/api-contract-procedure.md) first; add contract tests when contract exists.

---

### 4. Plan Requirement

**Plan includes:** Contract source, consumer/provider tests, CI integration, tooling. **Output:** Contract Testing Plan.

---

### 5. Workflow

**Step 1: Define contract and tooling.** Use API contract (OpenAPI, etc.) as source of truth; choose contract testing tool. Define consumer and/or provider contract tests. **Outputs:** Contract; tooling; test approach.

**Step 2: Implement contract tests.** Implement consumer and/or provider contract tests per tool; ensure they validate request/response shape and critical behavior. **Outputs:** Contract tests.

**Step 3: Integrate and maintain.** Run contract tests in CI per [CI Quality Gates](./ci-quality-gates-procedure.md); block incompatible changes. Update tests when contract changes. **Outputs:** CI integration; maintenance process.

---

### 6. Output Contract

**Artifacts:** Contract tests, CI integration, contract as source of truth. **State:** Contract testing operational. **Signals:** “Contract tests pass”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Contract tests implemented and run in CI; failures block incompatible changes. **Who approves:** API owner, platform owner.

---

### 8. Downstream Dependencies

**Output →:** [CI Quality Gates Procedure](./ci-quality-gates-procedure.md), [API Contract Compatibility Procedure](../pr-lifecycle/api-contract-compatibility-procedure.md), [API Lifecycle](../api-lifecycle/). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md), [API Contract Procedure](../feature-lifecycle/api-contract-procedure.md).

---

### 9. Definition of Done

- [ ] Contract and tooling defined
- [ ] Contract tests implemented and run in CI
- [ ] Incompatible changes blocked by contract tests

---

### 10. Audit & Traceability

**Links to:** Contract, contract tests, CI, API lifecycle. **Audit trail:** Contract changes, test updates.

---

### 11. Exit States

**✅ Completed successfully** – Contract testing operational. **⚠️ Blocked** – Contract or tooling missing; resolve and re-run. **❌ Aborted** – Contract testing work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** API owner / Platform
