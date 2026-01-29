# Procedure: Security Testing (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to plan, run, and maintain security-related tests (auth, authz, input validation, injection resistance) per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md) and [Security Lifecycle](../security-lifecycle/). It ensures security tests are part of the test strategy and [CI Quality Gates](./ci-quality-gates-procedure.md) or [Security Review](../feature-lifecycle/security-review-procedure.md) can rely on automated security checks.

**What problem it solves**

- No security tests; auth, authz, or injection bugs reach production
- Security testing ad-hoc or only manual; not in CI
- [Threat Model](../feature-lifecycle/threat-model-procedure.md) or [Security Review](../feature-lifecycle/security-review-procedure.md) lack executable security test coverage
- [Security Lifecycle](../security-lifecycle/) and compliance require documented security testing

**What "success" looks like at the end**

Security testing operational with:
- Scope (auth, authz, validation, injection, etc.) and scenarios defined per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md) and threat model
- Security tests implemented and run in CI where feasible; [CI Quality Gates](./ci-quality-gates-procedure.md) enforce
- Links to [Security Review](../feature-lifecycle/security-review-procedure.md), [Threat Model](../feature-lifecycle/threat-model-procedure.md), [Security Lifecycle](../security-lifecycle/)

---

### 2. Trigger

- New or changed auth, authz, or security-sensitive path; security tests required per [Test Plan](../feature-lifecycle/test-plan-procedure.md) and [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md)
- [Threat Model](../feature-lifecycle/threat-model-procedure.md) or [Security Review](../feature-lifecycle/security-review-procedure.md) require automated security tests
- [CI Quality Gates](./ci-quality-gates-procedure.md) or [Security Lifecycle](../security-lifecycle/) include security testing
- Security incident or audit; need security test coverage and CI integration

---

### 3. Required Inputs

**Artifacts:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); [Threat Model](../feature-lifecycle/threat-model-procedure.md) or security requirements; [Security Review](../feature-lifecycle/security-review-procedure.md) scope; security testing tooling (e.g. OWASP ZAP, custom tests).  
**Decisions:** Owner (dev, security, platform); scope and CI integration.  
**Constraints:** No production used for security tests; tests must be repeatable and maintainable.

**Remediation:** Threat model missing → define minimal scope (auth, authz, basic validation); refine with security.

---

### 4. Plan Requirement

**Plan includes:** Scope, scenarios, tooling, CI integration, links to threat model and security review. **Output:** Security Testing Plan.

---

### 5. Workflow

**Step 1: Define scope and scenarios.** Document what to security test (auth, authz, validation, injection, etc.) per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md) and threat model. Define scenarios (e.g. unauthenticated access rejected, invalid input rejected). **Outputs:** Scope and scenarios.

**Step 2: Implement security tests.** Implement automated security tests (unit, integration, or dedicated security suite); use tooling where appropriate. **Outputs:** Security tests.

**Step 3: Integrate and maintain.** Run security tests in CI per [CI Quality Gates](./ci-quality-gates-procedure.md) where feasible. Fix failures or document accepted risk. Maintain as threat model or scope evolves. **Outputs:** CI integration; maintenance process.

---

### 6. Output Contract

**Artifacts:** Security test scenarios, tests, CI integration. **State:** Security testing operational. **Signals:** “Security tests pass”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and scenarios defined; security tests implemented and run in CI; failures addressed. **Who approves:** Tech lead, security owner.

---

### 8. Downstream Dependencies

**Output →:** [CI Quality Gates Procedure](./ci-quality-gates-procedure.md), [Security Review Procedure](../feature-lifecycle/security-review-procedure.md), [Threat Model Procedure](../feature-lifecycle/threat-model-procedure.md), [Security Lifecycle](../security-lifecycle/). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md).

---

### 9. Definition of Done

- [ ] Scope and scenarios defined
- [ ] Security tests implemented and run in CI
- [ ] Failures fixed or accepted risk documented

---

### 10. Audit & Traceability

**Links to:** Security tests, threat model, security review, CI. **Audit trail:** Scenario changes, failure resolution.

---

### 11. Exit States

**✅ Completed successfully** – Security testing operational. **⚠️ Blocked** – Threat model or tooling missing; resolve and re-run. **❌ Aborted** – Security testing work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Dev / Security / Platform
