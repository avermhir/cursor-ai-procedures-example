# Procedure: Privileged Operations (AuthN/AuthZ Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to handle privileged operations (admin, support, DevOps, break-glass). It ensures privileged access is explicitly modeled, restricted, logged, and reviewed so that risk is controlled and [Audit/Compliance Logging](./audit-compliance-logging-procedure.md) supports accountability.

**What problem it solves**

- Privileged actions allowed without clear model or extra controls
- No audit trail or review for privileged access
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or implementation does not distinguish privileged ops
- Compliance or security review requires privileged-access controls

**What "success" looks like at the end**

Privileged operations defined and operational with:
- Privileged roles or permissions and scoped operations documented
- Access control (who, when, approval where applicable) and session restrictions
- Logging and review ([Audit/Compliance Logging](./audit-compliance-logging-procedure.md)); break-glass and revocation process
- Ready for implementation and audit

---

### 2. Trigger

- New or existing system has admin, support, or DevOps actions; privileged handling not yet defined
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) reference privileged operations
- New privileged capability; access model or review process change
- Security or compliance review of privileged access

---

### 3. Required Inputs

**Artifacts:** [Role/Permission Model](./role-permission-model-procedure.md), [Authorization Enforcement](./authorization-enforcement-procedure.md), [Audit/Compliance Logging](./audit-compliance-logging-procedure.md) (or scope); list of privileged operations.  
**Decisions:** Owner (auth/security); approval flow for sensitive privileged ops (if any).  
**Constraints:** Least privilege; all privileged actions logged and reviewable.

**Remediation:** Role model or audit logging missing → use those procedures first or document assumptions.

---

### 4. Plan Requirement

**Plan includes:** Privileged roles/ops, access and approval, logging, review, break-glass, revocation. **Output:** Privileged Operations Plan.

---

### 5. Workflow

**Step 1: Define privileged roles and operations.** List privileged roles and operations (admin, support, DevOps, break-glass). Ensure they are distinct from normal user permissions; document scope. **Outputs:** Privileged roles and operations.

**Step 2: Define access and approval.** Document who can use privileged ops; approval flow for high-risk actions (if any); session or scope restrictions (e.g. time-bound, resource-scoped). **Outputs:** Access and approval rules.

**Step 3: Align logging and review.** Ensure [Audit/Compliance Logging](./audit-compliance-logging-procedure.md) captures all privileged actions; define review cadence and owner. Document break-glass use and revocation process. Publish doc; link role model, enforcement, audit. **Outputs:** Logging and review aligned; break-glass and revocation doc.

---

### 6. Output Contract

**Artifacts:** Privileged operations doc (roles, ops, access, approval, logging, review, break-glass, revocation). **State:** Privileged ops defined and operational. **Signals:** “Privileged operations defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Privileged roles and operations defined; access and approval documented; logging and review aligned. **Who approves:** Auth owner, security, or compliance.

---

### 8. Downstream Dependencies

**Output →:** [Role/Permission Model](./role-permission-model-procedure.md), [Authorization Enforcement](./authorization-enforcement-procedure.md), [Audit/Compliance Logging](./audit-compliance-logging-procedure.md), [Feature Lifecycle AuthN/AuthZ](../feature-lifecycle/authn-authz-procedure.md). **Depends on:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).

---

### 9. Definition of Done

- [ ] Privileged roles and operations defined
- [ ] Access and approval documented
- [ ] Logging and review aligned; break-glass and revocation defined

---

### 10. Audit & Traceability

**Links to:** Privileged ops doc, role model, enforcement, audit. **Audit trail:** All privileged actions logged; review records.

---

### 11. Exit States

**✅ Completed successfully** – Privileged ops defined and operational. **⚠️ Blocked** – Roles or audit unclear; resolve and re-run. **❌ Aborted** – Privileged ops work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Auth owner / Security
