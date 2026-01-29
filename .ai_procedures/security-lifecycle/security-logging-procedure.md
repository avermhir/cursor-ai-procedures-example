# Procedure: Security Logging (Security Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to collect, store, and use security-relevant logs (auth events, access denials, privilege use, security alerts) so that security events are auditable and support [Incident Response](./incident-response-procedure.md), [Secure Design Review](./secure-design-review-procedure.md), and compliance. It aligns with [Data Lifecycle Audit Logging](../data-lifecycle/audit-logging-procedure.md) and [AuthN/AuthZ Audit/Compliance Logging](../authn-authz-lifecycle/audit-compliance-logging-procedure.md) where applicable.

**What problem it solves**

- Security events not logged or not retained; investigation or audit impossible
- No standard for what to log or where; inconsistent across services
- [Incident Response](./incident-response-procedure.md) or [Incident Lifecycle](../incident-lifecycle/) lack security log context
- Compliance requires security event logging and retention

**What "success" looks like at the end**

Security logging operational with:
- Scope (auth, access denial, privilege use, security alerts) and format defined
- Logs stored, retained, and accessible for investigation and audit
- Links to [Incident Response](./incident-response-procedure.md), [Audit Logging](../data-lifecycle/audit-logging-procedure.md), [AuthN/AuthZ Audit](../authn-authz-lifecycle/audit-compliance-logging-procedure.md), compliance

---

### 2. Trigger

- New system or security-sensitive component; security logging required
- [Secure Design Review](./secure-design-review-procedure.md) or [Incident Response](./incident-response-procedure.md) requires security logs
- Compliance or audit requires security event logging
- Security investigation; need structured security logs

---

### 3. Required Inputs

**Artifacts:** Scope (what to log); [Audit Logging](../data-lifecycle/audit-logging-procedure.md), [AuthN/AuthZ Audit](../authn-authz-lifecycle/audit-compliance-logging-procedure.md) (or scope); retention and access policy.  
**Decisions:** Owner (security, platform); retention and access.  
**Constraints:** No PII in logs beyond policy; immutable or append-only where required.

**Remediation:** Retention or scope unclear → define minimal scope and retention; align with compliance.

---

### 4. Plan Requirement

**Plan includes:** Scope, format, storage, retention, access, links to incident response and audit. **Output:** Security Logging Plan.

---

### 5. Workflow

**Step 1: Define scope and format.** Document what to log (auth, access denial, privilege use, alerts); log format and schema. **Outputs:** Scope and format.

**Step 2: Implement and store.** Emit security logs from apps and services; store in approved sink; enforce retention and access. **Outputs:** Logging implemented; storage and retention.

**Step 3: Use for incident and audit.** Support [Incident Response](./incident-response-procedure.md) and investigations; support compliance audits. **Outputs:** Incident and audit use; maintenance.

---

### 6. Output Contract

**Artifacts:** Security logging scope, format, storage, retention. **State:** Security logging operational. **Signals:** “Security logging defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and format defined; logging implemented; retention and access enforced. **Who approves:** Security owner, compliance.

---

### 8. Downstream Dependencies

**Output →:** [Incident Response Procedure](./incident-response-procedure.md), [Audit Logging Procedure](../data-lifecycle/audit-logging-procedure.md), [AuthN/AuthZ Audit](../authn-authz-lifecycle/audit-compliance-logging-procedure.md), compliance. **Depends on:** Org security and retention policy.

---

### 9. Definition of Done

- [ ] Scope and format defined
- [ ] Logging implemented; retention and access enforced
- [ ] Used for incident and audit

---

### 10. Audit & Traceability

**Links to:** Scope, format, storage, retention. **Audit trail:** Log access, retention deletions.

---

### 11. Exit States

**✅ Completed successfully** – Security logging operational. **⚠️ Blocked** – Scope or retention unclear; resolve and re-run. **❌ Aborted** – Security logging work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Security / Platform
