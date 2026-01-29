# Testing Standards

## Overview

This document defines standards and requirements for testing. These standards define **what tests must cover**, **how tests must be written and maintained**, and **what documentation is required**. They serve as reference material for the Test Plan Procedure, Test Coverage Procedure, and implementation procedures (backend, frontend, API).

**Note:** These are **standards/guidelines** (reference material), not executable procedures. For executable workflows, see:
- [Test Plan Procedure](../../.ai_procedures/feature-lifecycle/test-plan-procedure.md) - Creates test plans
- [Test Coverage Procedure](../../.ai_procedures/pr-lifecycle/test-coverage-procedure.md) - Reviews test coverage in PRs
- [Integration Testing Procedure](../../.ai_procedures/feature-lifecycle/integration-testing-procedure.md) - Integration tests
- [End-to-End Testing Procedure](../../.ai_procedures/feature-lifecycle/end-to-end-testing-procedure.md) - E2E tests
- [API Testing Procedure](../../.ai_procedures/api-lifecycle/api-testing-procedure.md) - API tests

---

## Test Coverage Requirements

### Minimum Coverage Expectations

- **Critical paths** - All user- and API-critical paths must have automated test coverage (unit and/or integration). Critical paths include: main success flows, auth/authz, payment or data-mutation flows, and error handling that affects user or system state.
- **New code** - New production code must be covered by tests unless explicitly exempted (e.g., trivial glue, generated code). Exemptions must be documented in the PR.
- **Coverage metrics** - Use line and branch coverage as a signal, not the sole gate. Minimum thresholds (e.g., 80% for new code in critical modules) may be set per repo or service; gaps must be justified and tracked.
- **Regression** - Changes to existing behavior must be covered by existing or new tests to prevent regressions.

### What Must Be Tested

- **Unit tests** - Business logic, utilities, and pure functions. Fast, deterministic, no external I/O where possible.
- **Integration tests** - Database, APIs, and external services. Use test doubles or test environments; avoid production data.
- **API tests** - Contract (request/response), auth/authz, error codes, and critical success paths. See [API Testing Procedure](../../.ai_procedures/api-lifecycle/api-testing-procedure.md).
- **E2E tests** - Critical user journeys that span UI and backend. Keep the set focused and maintainable; run in CI with clear ownership.
- **Security-related tests** - Auth, authorization boundaries, input validation, and injection resistance. Align with [Security Review Procedure](../../.ai_procedures/feature-lifecycle/security-review-procedure.md) and threat model.

---

## Test Quality Requirements

### Test Design

- **Independent** - Tests must not depend on each other’s order or shared mutable state. Use setup/teardown or fixtures so runs are repeatable.
- **Deterministic** - No flakiness from time, randomness, or external availability unless explicitly testing those. Flaky tests must be fixed or quarantined and tracked.
- **Readable** - Test names and structure should describe scenario and expected outcome. Prefer one logical assertion per test where it aids clarity.
- **Maintainable** - Shared setup and helpers should be centralized (e.g., test utilities, factories). Avoid duplication that makes refactors costly.

### Test Implementation

- **No production secrets** - Tests must not use production credentials or live secrets. Use env-specific config, mocks, or test-only secrets.
- **Cleanup** - Tests that create or modify data or resources must clean up (or use ephemeral resources) so CI and local runs do not leak state.
- **Speed** - Unit tests should run quickly; integration and E2E suites may be slower but must complete within CI limits. Slow tests should be optimized or split.

### Test Failures

- **Failures must be actionable** - Assertion messages and logs should make it clear what failed and in which scenario. Avoid generic "expected true" style assertions where a descriptive message helps.
- **CI** - Failing tests must block merge unless a documented exception (e.g., known flake under repair, temporary quarantine with a ticket).

---

## Test Documentation Requirements

### Test Plans

- **Feature-level test plans** - For significant features, a test plan (from [Test Plan Procedure](../../.ai_procedures/feature-lifecycle/test-plan-procedure.md)) must describe scope, test types, scenarios, and acceptance criteria. It should be updated when scope or behavior changes.
- **PR-level** - PRs that change behavior should describe how the change was tested (manual and/or automated) and reference test plan or coverage where applicable.

### Test Code and Repositories

- **Location** - Tests live next to the code they test (e.g., `*.test.ts`, `__tests__/`) or in a dedicated test directory structure agreed per repo. Shared test utilities should be discoverable and documented.
- **Documentation** - Complex test setup (e.g., test databases, mock servers) must be documented so new contributors can run tests locally and in CI.

### Coverage and Reporting

- **Reporting** - Coverage reports (e.g., line/branch) should be generated in CI and visible for PRs. Gaps and exemptions should be documented in the PR or in the test plan.
- **Trends** - Coverage should not regress without justification (e.g., removal of dead code, exemption with ticket). New code should not lower overall coverage for critical modules.

---

## Alignment with Procedures

- **Test Plan Procedure** - Produces test plans that satisfy the scope and documentation requirements above.
- **Test Coverage Procedure** - Ensures PRs meet coverage and quality expectations and that exemptions are documented.
- **Integration / E2E / API Testing Procedures** - Implement these standards for their test type and feed into test plans and PR review.

---

## Related Standards

- [Code Review Standards](./code-review-standards.md) - Review must confirm tests and coverage
- [API Security Standards](../security-standards/api-security-standards.md) - Security testing
- [Data Design Standards](./data-design-standards.md) - Data and schema testing
