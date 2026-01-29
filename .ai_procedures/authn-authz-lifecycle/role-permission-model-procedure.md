# Procedure: Role/Permission Model (AuthN/AuthZ Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to design and maintain the role and permission model (RBAC, ABAC, or hybrid). It ensures roles, permissions, and policies are documented, aligned with [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md), and used by [Authorization Enforcement Procedure](./authorization-enforcement-procedure.md) and [Token/Session Procedure](./token-session-procedure.md).

**What problem it solves**

- Roles or permissions ad-hoc; inconsistent across services
- No single source of truth for “who can do what”
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or implementation cannot assume a stable model
- Over-permission or under-permission; no review process

**What "success" looks like at the end**

Role/permission model defined and published with:
- Roles and permissions (and optional policies) documented
- Mapping from identity (or tokens) to roles/permissions
- Link to [Authorization Enforcement](./authorization-enforcement-procedure.md) and [Token/Session](./token-session-procedure.md); ready for implementation

---

### 2. Trigger

- New system or app requiring auth; role/permission model not yet defined
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) reference roles/permissions; model must exist or be created
- New role, permission, or policy added; model update needed
- Access review or compliance requests role/permission documentation

---

### 3. Required Inputs

**Artifacts:** Roles and permissions (draft or existing); [Identity Model](./identity-model-procedure.md) or equivalent; [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).  
**Decisions:** Owner (auth/governance); scope (which systems use this model).  
**Constraints:** Standards compliance; least privilege considered.

**Remediation:** Identity model missing → use [Identity Model Procedure](./identity-model-procedure.md) first or document assumption.

---

### 4. Plan Requirement

**Plan includes:** Scope, roles, permissions, policies, mapping to identity/tokens, links to enforcement. **Output:** Role/Permission Model Plan.

---

### 5. Workflow

**Step 1: Define roles and permissions.** Document roles, permissions, and optional policies (ABAC). Ensure least privilege; avoid over-broad roles. **Outputs:** Roles and permissions.

**Step 2: Map to identity and tokens.** Define how identity or token claims map to roles/permissions (e.g. role claim, permission lookup). **Outputs:** Mapping documented.

**Step 3: Publish and link.** Store model in agreed location; link [Authorization Enforcement](./authorization-enforcement-procedure.md), [Token/Session](./token-session-procedure.md). Update when roles or permissions change. **Outputs:** Published model; links.

---

### 6. Output Contract

**Artifacts:** Role/permission model (roles, permissions, policies, mapping). **State:** Model defined and published. **Signals:** “Role/permission model defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Roles and permissions defined; mapping to identity/tokens documented; linked to enforcement and token. **Who approves:** Auth owner, security, or governance.

---

### 8. Downstream Dependencies

**Output →:** [Authorization Enforcement Procedure](./authorization-enforcement-procedure.md), [Token/Session Procedure](./token-session-procedure.md), [Feature Lifecycle AuthN/AuthZ](../feature-lifecycle/authn-authz-procedure.md). **Depends on:** [Identity Model Procedure](./identity-model-procedure.md), [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).

---

### 9. Definition of Done

- [ ] Roles and permissions defined
- [ ] Mapping to identity/tokens documented
- [ ] Model published and linked to enforcement and token

---

### 10. Audit & Traceability

**Links to:** Role/permission model doc, identity model, standards. **Audit trail:** Version, owner, change log.

---

### 11. Exit States

**✅ Completed successfully** – Model defined and published. **⚠️ Blocked** – Roles or mapping unclear; resolve and re-run. **❌ Aborted** – Model work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Auth owner / Governance
