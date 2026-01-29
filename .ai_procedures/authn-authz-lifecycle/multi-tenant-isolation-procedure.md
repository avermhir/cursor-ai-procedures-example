# Procedure: Multi-Tenant Isolation (AuthN/AuthZ Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to design and implement multi-tenant isolation so that tenant data and access are strictly separated. It ensures isolation is explicit in [Identity Model](./identity-model-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), and [Authorization Enforcement](./authorization-enforcement-procedure.md), and that data and API access are always tenant-scoped.

**What problem it solves**

- Multi-tenant systems without clear isolation model; cross-tenant access risk
- Tenant context missing from identity, roles, or enforcement
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or implementation cannot assume tenant isolation
- Compliance or audit requires documented isolation

**What "success" looks like at the end**

Multi-tenant isolation defined and implemented with:
- Tenant model (tenant id, source of truth) and how it binds to identity/tokens
- Isolation strategy (logical vs physical) and tenant-scoping rules
- Enforcement: all tenant-scoped access checks documented and implemented
- Link to identity, roles, enforcement, and data access; ready for implementation

---

### 2. Trigger

- New or existing system is multi-tenant; isolation not yet defined
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) reference multi-tenant isolation
- New tenant dimension or isolation strategy change
- Security or compliance review of tenant isolation

---

### 3. Required Inputs

**Artifacts:** [Identity Model](./identity-model-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), [Authorization Enforcement](./authorization-enforcement-procedure.md) (or scope); tenant model (tenant id, hierarchy if any).  
**Decisions:** Owner (auth/data); isolation strategy (logical vs physical).  
**Constraints:** No cross-tenant access by default; tenant always in context.

**Remediation:** Identity or role model missing → use those procedures first or document assumptions.

---

### 4. Plan Requirement

**Plan includes:** Tenant model, isolation strategy, tenant binding to identity/tokens, scoping rules, enforcement. **Output:** Multi-Tenant Isolation Plan.

---

### 5. Workflow

**Step 1: Define tenant model and binding.** Document tenant id, source, and how it attaches to identity and tokens (e.g. claim, lookup). **Outputs:** Tenant model and binding.

**Step 2: Define isolation and scoping rules.** Document isolation strategy (logical vs physical); how data and API access are tenant-scoped; shared vs tenant-specific resources. **Outputs:** Isolation and scoping rules.

**Step 3: Align identity, roles, and enforcement.** Ensure [Identity Model](./identity-model-procedure.md) and [Role/Permission Model](./role-permission-model-procedure.md) include tenant; [Authorization Enforcement](./authorization-enforcement-procedure.md) enforces tenant-scoped access. Publish isolation doc; link related procedures. **Outputs:** Isolation doc; identity, roles, enforcement updated and linked.

---

### 6. Output Contract

**Artifacts:** Multi-tenant isolation doc (tenant model, binding, isolation, scoping, enforcement). **State:** Isolation defined and implemented. **Signals:** “Multi-tenant isolation defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Tenant model and binding defined; isolation and scoping rules documented; identity, roles, enforcement aligned. **Who approves:** Auth owner, security, or data owner.

---

### 8. Downstream Dependencies

**Output →:** [Identity Model](./identity-model-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), [Authorization Enforcement](./authorization-enforcement-procedure.md), data access layer, [Feature Lifecycle AuthN/AuthZ](../feature-lifecycle/authn-authz-procedure.md). **Depends on:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) (multi-tenant section).

---

### 9. Definition of Done

- [ ] Tenant model and binding defined
- [ ] Isolation and scoping rules documented
- [ ] Identity, roles, enforcement aligned and linked

---

### 10. Audit & Traceability

**Links to:** Isolation doc, identity, roles, enforcement. **Audit trail:** Version, owner, change log.

---

### 11. Exit States

**✅ Completed successfully** – Isolation defined and implemented. **⚠️ Blocked** – Tenant model or binding unclear; resolve and re-run. **❌ Aborted** – Isolation work cancelled; document reason. **Skip:** Not applicable (single-tenant); document and close.

---

**Status:** Active Procedure  
**Owner:** Auth owner / Data owner
