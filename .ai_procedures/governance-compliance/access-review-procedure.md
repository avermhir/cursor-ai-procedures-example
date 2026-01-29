# Procedure: Access Review (Governance & Compliance)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to perform access reviews (who has access to what) so that [IAM Least Privilege](../security-lifecycle/iam-least-privilege-procedure.md) is enforced, over-permissioning is removed, and [Audit Evidence](./audit-evidence-procedure.md) can demonstrate periodic review. It ensures access reviews are scheduled, executed, and recorded per compliance and governance policy.

**What problem it solves**

- No access reviews; stale or excessive access accumulates
- [IAM Least Privilege](../security-lifecycle/iam-least-privilege-procedure.md) or [AuthN/AuthZ](../authn-authz-lifecycle/) lack periodic review process
- Compliance or [Audit Evidence](./audit-evidence-procedure.md) require access review documentation
- Offboard or role change; access not revoked or updated

**What "success" looks like at the end**

Access review operational with:
- Review scope (identities, roles, permissions, systems) and cadence defined
- Reviews executed; excess access removed or justified; [Audit Evidence](./audit-evidence-procedure.md) collected
- Links to [IAM Least Privilege](../security-lifecycle/iam-least-privilege-procedure.md), [Role/Permission Model](../authn-authz-lifecycle/role-permission-model-procedure.md), [Audit Evidence](./audit-evidence-procedure.md)

---

### 2. Trigger

- Periodic access review (e.g. quarterly, annually) per policy
- [IAM Least Privilege](../security-lifecycle/iam-least-privilege-procedure.md) or compliance requires access review
- Offboard or role change; access must be reviewed and updated
- [Audit Evidence](./audit-evidence-procedure.md) or regulatory request for access review proof

---

### 3. Required Inputs

**Artifacts:** Identity and access inventory; [Role/Permission Model](../authn-authz-lifecycle/role-permission-model-procedure.md) or IAM data; [IAM Least Privilege](../security-lifecycle/iam-least-privilege-procedure.md) baseline; review cadence and owner.  
**Decisions:** Owner (compliance, security); scope and cadence.  
**Constraints:** Review recorded; excess removed or justified; evidence retained.

**Remediation:** Inventory or baseline missing → use [IAM Least Privilege Procedure](../security-lifecycle/iam-least-privilege-procedure.md) to establish; then run access review.

---

### 4. Plan Requirement

**Plan includes:** Scope, cadence, process, evidence, links to IAM least privilege and audit evidence. **Output:** Access Review Plan.

---

### 5. Workflow

**Step 1: Define scope and cadence.** Define what is in scope (identities, roles, systems); set review cadence and owner. **Outputs:** Scope; cadence.

**Step 2: Execute review.** Review access against [IAM Least Privilege](../security-lifecycle/iam-least-privilege-procedure.md) baseline; remove excess or document justification. **Outputs:** Review results; remediations.

**Step 3: Record and evidence.** Record review (who, when, findings, remediation); provide [Audit Evidence](./audit-evidence-procedure.md). **Outputs:** Review record; audit evidence.

---

### 6. Output Contract

**Artifacts:** Access review scope, results, remediation, record, audit evidence. **State:** Access review operational. **Signals:** “Access review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and cadence defined; review executed; excess removed or justified; evidence recorded. **Who approves:** Compliance, security.

---

### 8. Downstream Dependencies

**Output →:** [Audit Evidence Procedure](./audit-evidence-procedure.md), [IAM Least Privilege Procedure](../security-lifecycle/iam-least-privilege-procedure.md), [Role/Permission Model](../authn-authz-lifecycle/role-permission-model-procedure.md). **Depends on:** Identity and access inventory.

---

### 9. Definition of Done

- [ ] Scope and cadence defined
- [ ] Review executed; excess removed or justified
- [ ] Record and audit evidence

---

### 10. Audit & Traceability

**Links to:** Review records, IAM, audit evidence. **Audit trail:** Review dates, findings, remediation.

---

### 11. Exit States

**✅ Completed successfully** – Access review operational. **⚠️ Blocked** – Inventory or baseline missing; resolve and re-run. **❌ Aborted** – Access review work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Compliance / Security
