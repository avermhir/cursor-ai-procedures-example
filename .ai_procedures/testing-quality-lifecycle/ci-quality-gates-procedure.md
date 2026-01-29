# Procedure: CI Quality Gates (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to configure and operate CI quality gates (build, lint, unit, integration, contract, E2E, security, coverage) so that only passing work is merged. It ensures [Unit](./unit-testing-procedure.md), [Integration](./integration-testing-procedure.md), [Contract](./contract-testing-procedure.md), [E2E](./end-to-end-testing-procedure.md), [Regression](./regression-testing-procedure.md), [Performance](./performance-testing-procedure.md), and [Security](./security-testing-procedure.md) testing are run in CI and that [Test Coverage](../pr-lifecycle/test-coverage-procedure.md) and PR merge requirements are enforced.

**What problem it solves**

- CI gates missing or inconsistent; failing tests or coverage regressions merged
- No single place defining what “CI must pass” means
- [PR Lifecycle](../pr-lifecycle/) or merge process cannot assume consistent CI gates
- Flaky or slow gates block or bypass; gate reliability unclear

**What "success" looks like at the end**

CI quality gates defined and operational with:
- Gates defined (build, lint, unit, integration, contract, E2E, security, coverage) and run on PR and/or main
- Failures block merge unless documented exception (e.g. quarantine with ticket)
- Flaky or slow gates identified and fixed or quarantined; gate reliability maintained
- Links to [Test Coverage](../pr-lifecycle/test-coverage-procedure.md), [Merge/Squash/Rebase](../pr-lifecycle/merge-squash-rebase-procedure.md), and all test procedures

---

### 2. Trigger

- New repo or pipeline; CI quality gates must be defined
- [Unit](./unit-testing-procedure.md), [Integration](./integration-testing-procedure.md), [Contract](./contract-testing-procedure.md), [E2E](./end-to-end-testing-procedure.md), [Regression](./regression-testing-procedure.md), [Performance](./performance-testing-procedure.md), or [Security](./security-testing-procedure.md) procedures add or change CI runs
- [PR Lifecycle](../pr-lifecycle/) or [Merge/Squash/Rebase](../pr-lifecycle/merge-squash-rebase-procedure.md) require CI pass; gates must be clear and reliable
- Flaky or slow CI; need gate tuning or quarantine process

---

### 3. Required Inputs

**Artifacts:** CI platform (e.g. GitHub Actions); test suites and coverage config; [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); [Test Coverage](../pr-lifecycle/test-coverage-procedure.md) requirements.  
**Decisions:** Owner (platform, dev); which gates run on PR vs main; block vs warn.  
**Constraints:** Failing tests block merge unless documented exception; no indefinite bypass.

**Remediation:** Coverage or test suites incomplete → define minimal gates; expand as coverage and suites grow.

---

### 4. Plan Requirement

**Plan includes:** Gates (build, lint, unit, integration, contract, E2E, security, coverage), run triggers, block vs warn, quarantine process. **Output:** CI Quality Gates Plan.

---

### 5. Workflow

**Step 1: Define gates and triggers.** Document which gates run (build, lint, unit, integration, contract, E2E, security, coverage); on what events (PR, push to main); block vs warn. Align with [Test Coverage](../pr-lifecycle/test-coverage-procedure.md) and test procedures. **Outputs:** Gates and triggers.

**Step 2: Implement and enforce.** Configure CI to run gates; failures block merge unless documented exception (e.g. quarantine with ticket). **Outputs:** CI config; enforcement behavior.

**Step 3: Maintain and tune.** Monitor gate reliability; fix flaky gates or quarantine with ticket. Tune for speed where needed; keep gates actionable. **Outputs:** Maintenance and quarantine process.

---

### 6. Output Contract

**Artifacts:** CI gate config, run triggers, block vs warn, quarantine process. **State:** CI quality gates operational. **Signals:** “CI passed”; “CI failed”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Gates defined and run in CI; failures block merge unless exempted; flaky gates addressed. **Who approves:** Platform owner, tech lead.

---

### 8. Downstream Dependencies

**Output →:** [Test Coverage Procedure](../pr-lifecycle/test-coverage-procedure.md), [Merge/Squash/Rebase Procedure](../pr-lifecycle/merge-squash-rebase-procedure.md), [Unit](./unit-testing-procedure.md), [Integration](./integration-testing-procedure.md), [Contract](./contract-testing-procedure.md), [E2E](./end-to-end-testing-procedure.md), [Regression](./regression-testing-procedure.md), [Performance](./performance-testing-procedure.md), [Security](./security-testing-procedure.md). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md).

---

### 9. Definition of Done

- [ ] Gates and triggers defined
- [ ] CI configured; failures block merge unless exempted
- [ ] Flaky gates fixed or quarantined; maintenance process in place

---

### 10. Audit & Traceability

**Links to:** CI config, test procedures, coverage, merge process. **Audit trail:** Gate changes, quarantine tickets.

---

### 11. Exit States

**✅ Completed successfully** – CI quality gates operational. **⚠️ Blocked** – CI platform or test suites missing; resolve and re-run. **❌ Aborted** – CI gates work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / Dev
