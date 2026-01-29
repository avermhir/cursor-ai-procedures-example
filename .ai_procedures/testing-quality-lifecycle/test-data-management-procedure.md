# Procedure: Test Data Management (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to create, manage, and sanitize test data for unit, integration, contract, and E2E tests per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md). It ensures tests use consistent, safe data; no production data in tests; and [Data Classification](../data-lifecycle/data-classification-procedure.md) and [Data Retention & Deletion](../data-lifecycle/data-retention-deletion-procedure.md) are respected for test data.

**What problem it solves**

- Tests use production data or ad-hoc data; unsafe or inconsistent
- No test data strategy; flaky tests from shared or missing data
- [Integration Testing](./integration-testing-procedure.md), [E2E](./end-to-end-testing-procedure.md), or [Mocking/Stubbing](../third-party-integration-lifecycle/mocking-stubbing-procedure.md) lack structured test data
- PII or sensitive data in test fixtures; compliance risk

**What "success" looks like at the end**

Test data management operational with:
- Test data strategy (synthetic, sanitized, or minimal fixtures) and ownership
- Test data creation, refresh, and cleanup process; no production data
- [Integration](./integration-testing-procedure.md) and [E2E](./end-to-end-testing-procedure.md) use managed test data; [Data Classification](../data-lifecycle/data-classification-procedure.md) and retention considered

---

### 2. Trigger

- New tests requiring data; [Integration Testing](./integration-testing-procedure.md), [E2E](./end-to-end-testing-procedure.md), or [Mocking/Stubbing](../third-party-integration-lifecycle/mocking-stubbing-procedure.md) need test data
- [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md) require no production data and consistent test data
- Test data quality or security issue; need strategy and process
- Compliance or [Data Classification](../data-lifecycle/data-classification-procedure.md) review of test data

---

### 3. Required Inputs

**Artifacts:** Test types and scope (unit, integration, E2E); [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); [Data Classification](../data-lifecycle/data-classification-procedure.md) if test data contains PII/sensitive.  
**Decisions:** Owner (dev, QA, platform); synthetic vs sanitized vs fixtures.  
**Constraints:** No production data in tests; cleanup or ephemeral; PII/sensitive handled per policy.

**Remediation:** Classification unclear → treat test data as internal; avoid real PII; refine with data/compliance.

---

### 4. Plan Requirement

**Plan includes:** Strategy, creation, refresh, cleanup, ownership, links to data lifecycle. **Output:** Test Data Management Plan.

---

### 5. Workflow

**Step 1: Define strategy and ownership.** Choose approach (synthetic, sanitized, minimal fixtures); define ownership and refresh/cleanup. Ensure no production data; consider [Data Classification](../data-lifecycle/data-classification-procedure.md) and retention for test data. **Outputs:** Strategy and ownership.

**Step 2: Implement creation and cleanup.** Implement test data creation (seed scripts, factories, sanitization); cleanup or ephemeral env so tests do not leak state. **Outputs:** Creation and cleanup process.

**Step 3: Integrate with tests.** [Integration Testing](./integration-testing-procedure.md) and [E2E](./end-to-end-testing-procedure.md) use managed test data. Document how to add or update test data. **Outputs:** Integration with test procedures; maintenance process.

---

### 6. Output Contract

**Artifacts:** Test data strategy, creation/cleanup process, integration with tests. **State:** Test data management operational. **Signals:** “Test data managed”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Strategy and ownership defined; creation and cleanup implemented; no production data; tests use managed data. **Who approves:** Tech lead, QA, data owner (if PII).

---

### 8. Downstream Dependencies

**Output →:** [Integration Testing Procedure](./integration-testing-procedure.md), [E2E Testing Procedure](./end-to-end-testing-procedure.md), [Mocking/Stubbing Procedure](../third-party-integration-lifecycle/mocking-stubbing-procedure.md). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md), [Data Classification Procedure](../data-lifecycle/data-classification-procedure.md) (if PII).

---

### 9. Definition of Done

- [ ] Strategy and ownership defined
- [ ] Creation and cleanup implemented; no production data
- [ ] Integration and E2E tests use managed test data

---

### 10. Audit & Traceability

**Links to:** Test data docs, seed scripts, data classification. **Audit trail:** Strategy changes, cleanup runs.

---

### 11. Exit States

**✅ Completed successfully** – Test data management operational. **⚠️ Blocked** – Strategy or data source unclear; resolve and re-run. **❌ Aborted** – Test data work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Dev / QA / Platform
