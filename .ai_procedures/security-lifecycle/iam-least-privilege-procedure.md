# Procedure: IAM Least Privilege (Security Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to implement and maintain IAM (identity and access management) with least privilege so that identities have only the access they need. It ensures [AuthN/AuthZ Lifecycle](../authn-authz-lifecycle/) role/permission model is applied with least privilege and that [Authorization Enforcement](../authn-authz-lifecycle/authorization-enforcement-procedure.md) and [Privileged Operations](../authn-authz-lifecycle/privileged-operations-procedure.md) align.

**What problem it solves**

- Over-permissioned identities; excessive access risk
- No least-privilege review; roles or policies accumulate unnecessary permissions
- [AuthN/AuthZ](../authn-authz-lifecycle/) and [Security Lifecycle](../security-lifecycle/) lack explicit least-privilege process
- Compliance or audit requires least-privilege evidence

**What "success" looks like at the end**

IAM least privilege operational with:
- Roles and permissions reviewed for necessity; excess removed
- Process for granting, reviewing, and revoking access; least privilege maintained
- Links to [Role/Permission Model](../authn-authz-lifecycle/role-permission-model-procedure.md), [Authorization Enforcement](../authn-authz-lifecycle/authorization-enforcement-procedure.md), [Privileged Operations](../authn-authz-lifecycle/privileged-operations-procedure.md), [Access Review](../governance-compliance/)

---

### 2. Trigger

- New role, permission, or identity; access must be least privilege
- [AuthN/AuthZ Lifecycle](../authn-authz-lifecycle/) or [Governance Access Review](../governance-compliance/) requires least-privilege review
- Periodic access review; remove excessive permissions
- Security or compliance audit of IAM

---

### 3. Required Inputs

**Artifacts:** [Role/Permission Model](../authn-authz-lifecycle/role-permission-model-procedure.md) or IAM roles/policies; identity and access inventory; [Authorization Enforcement](../authn-authz-lifecycle/authorization-enforcement-procedure.md) context.  
**Decisions:** Owner (security, platform); review cadence and approval.  
**Constraints:** Grant minimum required access; document justification for elevated permissions.

**Remediation:** Role model missing → use [Role/Permission Model Procedure](../authn-authz-lifecycle/role-permission-model-procedure.md) first or document current roles and refine.

---

### 4. Plan Requirement

**Plan includes:** Scope, review criteria, grant/review/revoke process, links to auth and access review. **Output:** IAM Least Privilege Plan.

---

### 5. Workflow

**Step 1: Define roles and baseline.** Document roles and permissions; establish baseline “minimum necessary” per function. **Outputs:** Roles and baseline.

**Step 2: Review and reduce.** Review existing access against baseline; remove excess permissions; document exceptions. **Outputs:** Reviewed access; exceptions documented.

**Step 3: Maintain.** Grant new access with least privilege; periodic review per [Access Review](../governance-compliance/) or org policy; revoke on role change or offboard. **Outputs:** Grant/review/revoke process; ongoing maintenance.

---

### 6. Output Contract

**Artifacts:** IAM least-privilege baseline, review results, grant/review/revoke process. **State:** Least privilege maintained. **Signals:** “IAM least privilege reviewed”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Roles and baseline defined; access reviewed and excess removed; grant/review/revoke process in place. **Who approves:** Security owner, platform owner.

---

### 8. Downstream Dependencies

**Output →:** [Role/Permission Model](../authn-authz-lifecycle/role-permission-model-procedure.md), [Authorization Enforcement](../authn-authz-lifecycle/authorization-enforcement-procedure.md), [Privileged Operations](../authn-authz-lifecycle/privileged-operations-procedure.md), [Access Review](../governance-compliance/). **Depends on:** [AuthN/AuthZ Lifecycle](../authn-authz-lifecycle/).

---

### 9. Definition of Done

- [ ] Roles and baseline defined
- [ ] Access reviewed; excess removed
- [ ] Grant/review/revoke process in place and used

---

### 10. Audit & Traceability

**Links to:** Roles, permissions, review records, access review. **Audit trail:** Grants, reviews, revocations.

---

### 11. Exit States

**✅ Completed successfully** – IAM least privilege operational. **⚠️ Blocked** – Role model or inventory missing; resolve and re-run. **❌ Aborted** – IAM work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Security / Platform
