# Procedure: Token/Session (AuthN/AuthZ Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to specify and operate token and session management (JWT, OAuth, sessions). It ensures token format, lifecycle, validation, and storage align with [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) and support [Identity Model](./identity-model-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), and [Authorization Enforcement](./authorization-enforcement-procedure.md).

**What problem it solves**

- Token or session design ad-hoc; inconsistent across services
- Validation, expiry, or storage insecure or undocumented
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or implementation cannot assume a stable token/session spec
- Refresh, revocation, or logout not defined

**What "success" looks like at the end**

Token/session spec and operations defined with:
- Token type, structure, claims, expiry, refresh, and validation
- Session management (if used): creation, storage, invalidation
- Revocation and logout behavior
- Link to identity, roles, and enforcement; ready for implementation

---

### 2. Trigger

- New system or app requiring auth; token/session spec not yet defined
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) reference tokens/sessions; spec must exist or be created
- Token or session format change; rotation, revocation, or IdP change
- Security review or compliance requests token/session documentation

---

### 3. Required Inputs

**Artifacts:** [Identity Model](./identity-model-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md) (or equivalent); [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md); IdP or token issuer details.  
**Decisions:** Owner (auth/platform); token type (JWT, opaque, session).  
**Constraints:** Standards compliance; secure validation and storage.

**Remediation:** Identity or role model missing → use those procedures first or document assumptions.

---

### 4. Plan Requirement

**Plan includes:** Token type, structure, lifecycle, validation, storage, revocation, session (if used), links to identity and enforcement. **Output:** Token/Session Plan.

---

### 5. Workflow

**Step 1: Define token and session spec.** Document token type, structure, claims, expiry, refresh; session management if used; validation rules (signature, issuer, audience). Align with [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md). **Outputs:** Token/session spec.

**Step 2: Define lifecycle and revocation.** Document issuance, refresh, revocation, and logout; token storage (client/server) and transmission. **Outputs:** Lifecycle and revocation doc.

**Step 3: Publish and link.** Store spec in agreed location; link [Identity Model](./identity-model-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), [Authorization Enforcement](./authorization-enforcement-procedure.md). Update when IdP or token format changes. **Outputs:** Published spec; links.

---

### 6. Output Contract

**Artifacts:** Token/session spec (format, lifecycle, validation, revocation). **State:** Spec defined and published. **Signals:** “Token/session spec defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Token/session spec defined; lifecycle and revocation documented; linked to identity, roles, enforcement. **Who approves:** Auth owner, security.

---

### 8. Downstream Dependencies

**Output →:** [Authorization Enforcement Procedure](./authorization-enforcement-procedure.md), [Feature Lifecycle AuthN/AuthZ](../feature-lifecycle/authn-authz-procedure.md), Backend/Frontend/Middleware implementation. **Depends on:** [Identity Model](./identity-model-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).

---

### 9. Definition of Done

- [ ] Token/session spec defined
- [ ] Lifecycle and revocation documented
- [ ] Spec published and linked to identity, roles, enforcement

---

### 10. Audit & Traceability

**Links to:** Token/session spec, IdP config, standards. **Audit trail:** Version, owner, change log.

---

### 11. Exit States

**✅ Completed successfully** – Spec defined and published. **⚠️ Blocked** – IdP or format unclear; resolve and re-run. **❌ Aborted** – Token/session work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Auth owner / Platform
