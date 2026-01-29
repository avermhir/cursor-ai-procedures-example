# Procedure: Mocking/Stubbing (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to mock or stub third-party services for testing. It ensures tests can run without live vendor calls, behave consistently, and cover success and failure cases per [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) and [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md).

**What problem it solves**

- Tests depend on live vendor; flaky or blocked when vendor down or rate-limited
- No structured mocks; inconsistent or incomplete coverage of success/failure
- [Failure Mode Procedure](./failure-mode-procedure.md) or [Rate Limit & Quota Procedure](./rate-limit-quota-procedure.md) behavior not testable
- CI or local dev blocked by third-party availability

**What "success" looks like at the end**

Mocking/stubbing defined and implemented with:
- Mock or stub strategy (in-process, test double, contract) and scope
- Success and failure scenarios (timeouts, errors, rate limits) covered
- Tests use mocks; CI and local dev do not require live vendor
- Links to [Failure Mode](./failure-mode-procedure.md), [Rate Limit & Quota](./rate-limit-quota-procedure.md), [Testing & Quality Lifecycle](../testing-quality-lifecycle/)

---

### 2. Trigger

- New third-party integration; tests need to run without live vendor
- [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) or [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) require mocking/stubbing strategy
- Flaky or blocked tests due to vendor dependency; need reliable mocks
- [Testing & Quality Lifecycle](../testing-quality-lifecycle/) integration or contract tests

---

### 3. Required Inputs

**Artifacts:** Integration and vendor API surface; [Failure Mode](./failure-mode-procedure.md), [Rate Limit & Quota](./rate-limit-quota-procedure.md) behavior to test; [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md).  
**Decisions:** Owner (platform, QA); mock approach (in-process, wire mock, contract).  
**Constraints:** Mocks must reflect real API contract and key failure modes.

**Remediation:** API contract unclear → document assumptions; update mocks when contract finalized.

---

### 4. Plan Requirement

**Plan includes:** Mock strategy, scope, scenarios (success, errors, timeouts, rate limits), maintenance. **Output:** Mocking/Stubbing Plan.

---

### 5. Workflow

**Step 1: Define mock strategy and scope.** Choose approach (in-process stub, wire mock, contract tests). Define what is mocked (all calls, specific flows, or smoke only). **Outputs:** Strategy and scope.

**Step 2: Implement mocks and scenarios.** Implement mocks per vendor API; add scenarios for success, errors, timeouts, rate limits (429), circuit breaker. Keep mocks in sync with API and [Failure Mode](./failure-mode-procedure.md). **Outputs:** Mocks and scenario coverage.

**Step 3: Integrate and maintain.** Wire tests to use mocks; CI and local dev use mocks by default. Document how to update mocks when API or failure behavior changes. **Outputs:** Tests using mocks; maintenance process.

---

### 6. Output Contract

**Artifacts:** Mocking strategy, mocks, scenarios, integration with tests. **State:** Tests run without live vendor; failure modes testable. **Signals:** “Mocking/stubbing defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Mock strategy and scope defined; mocks implement key scenarios; tests use mocks; maintenance process documented. **Who approves:** Platform owner, QA.

---

### 8. Downstream Dependencies

**Output →:** [Failure Mode Procedure](./failure-mode-procedure.md), [Rate Limit & Quota Procedure](./rate-limit-quota-procedure.md), [Testing & Quality Lifecycle](../testing-quality-lifecycle/). **Depends on:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) (testing).

---

### 9. Definition of Done

- [ ] Mock strategy and scope defined
- [ ] Mocks and scenarios implemented; tests use mocks
- [ ] Maintenance process documented

---

### 10. Audit & Traceability

**Links to:** Mock implementation, API contract, failure modes. **Audit trail:** Mock updates, scenario changes.

---

### 11. Exit States

**✅ Completed successfully** – Mocking/stubbing defined and used in tests. **⚠️ Blocked** – API or failure behavior unclear; implement minimal mocks and document. **❌ Aborted** – Mocking work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / QA
