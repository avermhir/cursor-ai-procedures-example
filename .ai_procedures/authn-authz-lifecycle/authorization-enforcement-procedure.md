# Procedure: Authorization Enforcement (AuthN/AuthZ Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to implement and operate authorization checks at enforcement points (APIs, UI, services). It ensures enforcement is consistent with [Role/Permission Model](./role-permission-model-procedure.md) and [Token/Session](./token-session-procedure.md), applied at the right layers, and that failures are handled and logged.

**What problem it solves**

- Authorization checks missing, inconsistent, or only at UI layer
- Enforcement points not documented; bypass or inconsistency risk
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or implementation lacks clear enforcement guide
- No standard for “where” and “how” to enforce; each team invents locally

**What "success" looks like at the end**

Authorization enforcement defined and implemented with:
- Enforcement points identified (API, service, UI) and documented
- Check logic (role, permission, resource) aligned with [Role/Permission Model](./role-permission-model-procedure.md) and tokens
- Failure handling and logging ([Audit/Compliance Logging](./audit-compliance-logging-procedure.md)) specified
- Ready for implementation and review

---

### 2. Trigger

- New system or app requiring auth; enforcement not yet defined
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) reference enforcement; guide must exist or be created
- New API or UI surface; enforcement points added or changed
- Security review finds missing or inconsistent enforcement

---

### 3. Required Inputs

**Artifacts:** [Role/Permission Model](./role-permission-model-procedure.md), [Token/Session](./token-session-procedure.md) spec; [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md); API/service/UI inventory (or scope).  
**Decisions:** Owner (auth/backend/frontend); enforcement layer (API-first, plus UI where applicable).  
**Constraints:** Standards compliance; enforce at API/service layer, not UI-only.

**Remediation:** Role model or token spec missing → use those procedures first or document assumptions.

---

### 4. Plan Requirement

**Plan includes:** Enforcement points, check logic, failure handling, logging, links to role model and token. **Output:** Authorization Enforcement Plan.

---

### 5. Workflow

**Step 1: Identify enforcement points.** List APIs, services, and UI surfaces that perform authorization. Prefer API/service enforcement; document UI checks as supplementary. **Outputs:** Enforcement point list.

**Step 2: Define check logic and failure handling.** For each point: what is checked (role, permission, resource); how (middleware, decorator, guard); failure response (401, 403) and logging. Align with [Role/Permission Model](./role-permission-model-procedure.md) and [Token/Session](./token-session-procedure.md). **Outputs:** Check logic and failure handling.

**Step 3: Publish and link.** Store enforcement guide in agreed location; link [Role/Permission Model](./role-permission-model-procedure.md), [Token/Session](./token-session-procedure.md), [Audit/Compliance Logging](./audit-compliance-logging-procedure.md). Implement per guide; review in PRs. **Outputs:** Published guide; links.

---

### 6. Output Contract

**Artifacts:** Enforcement guide (points, logic, failure handling, logging). **State:** Enforcement defined and implemented per guide. **Signals:** “Authorization enforcement defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Enforcement points identified; check logic and failure handling defined; linked to role model, token, audit. **Who approves:** Auth owner, security.

---

### 8. Downstream Dependencies

**Output →:** [Audit/Compliance Logging](./audit-compliance-logging-procedure.md), Backend/Frontend/Middleware implementation, [Feature Lifecycle AuthN/AuthZ](../feature-lifecycle/authn-authz-procedure.md). **Depends on:** [Role/Permission Model](./role-permission-model-procedure.md), [Token/Session](./token-session-procedure.md), [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).

---

### 9. Definition of Done

- [ ] Enforcement points identified
- [ ] Check logic and failure handling defined
- [ ] Guide published and linked to role model, token, audit

---

### 10. Audit & Traceability

**Links to:** Enforcement guide, role model, token spec, audit. **Audit trail:** Version, owner, change log.

---

### 11. Exit States

**✅ Completed successfully** – Enforcement defined and implemented. **⚠️ Blocked** – Role model or token unclear; resolve and re-run. **❌ Aborted** – Enforcement work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Auth owner / Backend or platform
