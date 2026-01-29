# Procedure: Audit/Compliance Logging (AuthN/AuthZ Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to log authentication and authorization events for audit and compliance. It ensures login, logout, permission checks, and privileged actions are logged consistently, retained per policy, and available for [Authorization Enforcement](./authorization-enforcement-procedure.md), [Privileged Operations](./privileged-operations-procedure.md), and governance.

**What problem it solves**

- Auth events not logged or logged inconsistently
- No retention or access policy; audit or compliance gaps
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or implementation lacks audit logging spec
- Security or compliance review cannot trace access or changes

**What "success" looks like at the end**

Auth audit logging defined and operational with:
- Scope (login, logout, authz checks, privileged ops) and log format
- Storage, retention, and access controls
- Integration with [Authorization Enforcement](./authorization-enforcement-procedure.md) and [Privileged Operations](./privileged-operations-procedure.md)
- Ready for implementation and audit

---

### 2. Trigger

- New or existing system requires auth audit logging; spec not yet defined
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) reference audit/logging
- Compliance or governance requires auth event logs
- Security review finds missing or inconsistent auth logging

---

### 3. Required Inputs

**Artifacts:** [Authorization Enforcement](./authorization-enforcement-procedure.md), [Privileged Operations](./privileged-operations-procedure.md) (or scope); [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md); retention and access policy.  
**Decisions:** Owner (auth/security/compliance); retention period.  
**Constraints:** No PII in logs beyond what compliance allows; immutable or append-only where required.

**Remediation:** Retention or access policy missing → define default; align with compliance; refine later.

---

### 4. Plan Requirement

**Plan includes:** Scope, format, storage, retention, access, links to enforcement and privileged ops. **Output:** Auth Audit/Compliance Logging Plan.

---

### 5. Workflow

**Step 1: Define scope and format.** Document what to log (login, logout, authz success/failure, privileged ops); log format (actor, action, resource, timestamp, result, etc.). Align with [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md). **Outputs:** Scope and format.

**Step 2: Define storage, retention, and access.** Choose storage; set retention per policy; define who can access logs and how. **Outputs:** Storage, retention, access rules.

**Step 3: Implement and link.** Implement logging per scope; ensure [Authorization Enforcement](./authorization-enforcement-procedure.md) and [Privileged Operations](./privileged-operations-procedure.md) emit events. Publish spec; link enforcement and privileged ops. **Outputs:** Logging implemented; spec published; links.

---

### 6. Output Contract

**Artifacts:** Auth audit logging spec (scope, format, storage, retention, access). **State:** Logging implemented and operational. **Signals:** “Auth audit logging defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and format defined; storage, retention, access documented; enforcement and privileged ops integrated. **Who approves:** Auth owner, security, or compliance.

---

### 8. Downstream Dependencies

**Output →:** [Authorization Enforcement](./authorization-enforcement-procedure.md), [Privileged Operations](./privileged-operations-procedure.md), [Data Lifecycle Audit Logging](../data-lifecycle/audit-logging-procedure.md) (if unified), compliance, [Governance & Compliance](../governance-compliance/). **Depends on:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).

---

### 9. Definition of Done

- [ ] Scope and format defined
- [ ] Storage, retention, access documented
- [ ] Logging implemented and linked to enforcement and privileged ops

---

### 10. Audit & Traceability

**Links to:** Audit logging spec, enforcement, privileged ops, retention. **Audit trail:** Log access, retention deletions, spec changes.

---

### 11. Exit States

**✅ Completed successfully** – Auth audit logging defined and operational. **⚠️ Blocked** – Scope or retention unclear; resolve and re-run. **❌ Aborted** – Audit logging work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Auth owner / Security / Compliance
