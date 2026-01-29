# Procedure: Identity Model (AuthN/AuthZ Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to design and maintain the identity model (users, service accounts, identity providers, attributes). It ensures identity structure is documented, consistent with [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md), and usable by [Token/Session Procedure](./token-session-procedure.md), [Role/Permission Model Procedure](./role-permission-model-procedure.md), and [Authorization Enforcement Procedure](./authorization-enforcement-procedure.md).

**What problem it solves**

- Ad-hoc or inconsistent identity structure across services
- No single definition of “identity”; attributes or IdP mapping unclear
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or implementation cannot assume a stable identity model
- Multi-IdP or B2B identity not designed

**What "success" looks like at the end**

Identity model defined and documented with:
- Identity types (user, service account, etc.) and attributes
- IdP(s) and mapping (claims, attributes)
- Link to [Token/Session](./token-session-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), and enforcement; ready for implementation

---

### 2. Trigger

- New system or app requiring auth; identity model not yet defined
- [Feature Lifecycle AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md) or [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) reference identity; model must exist or be created
- New IdP, B2B, or identity type added; model update needed
- Governance or compliance requests identity model documentation

---

### 3. Required Inputs

**Artifacts:** Identity types and attributes (draft or existing); IdP(s) and claims; [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).  
**Decisions:** Owner (identity/auth team); scope (which systems use this model).  
**Constraints:** Standards compliance; consistency across consumers.

**Remediation:** Missing IdP or attributes → document “TBD” and owner; refine when available.

---

### 4. Plan Requirement

**Plan includes:** Scope, identity types, IdP mapping, attributes, links to token/role/enforcement. **Output:** Identity Model Plan.

---

### 5. Workflow

**Step 1: Define identity types and attributes.** Document identity types (user, service account, etc.) and attributes (id, email, roles, tenant, etc.). Map from IdP claims where applicable. **Outputs:** Identity types and attributes.

**Step 2: Document IdP(s) and mapping.** List IdP(s); document claim mapping, attribute derivation, and any enrichment. **Outputs:** IdP and mapping doc.

**Step 3: Publish and link.** Store model in agreed location; link [Token/Session](./token-session-procedure.md), [Role/Permission Model](./role-permission-model-procedure.md), [Authorization Enforcement](./authorization-enforcement-procedure.md). Update when IdP or identity structure changes. **Outputs:** Published identity model; links.

---

### 6. Output Contract

**Artifacts:** Identity model (types, attributes, IdP mapping). **State:** Model defined and published. **Signals:** “Identity model defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Identity types and attributes defined; IdP mapping documented; linked to token, role, enforcement. **Who approves:** Identity/auth owner, security.

---

### 8. Downstream Dependencies

**Output →:** [Token/Session Procedure](./token-session-procedure.md), [Role/Permission Model Procedure](./role-permission-model-procedure.md), [Authorization Enforcement Procedure](./authorization-enforcement-procedure.md), [Feature Lifecycle AuthN/AuthZ](../feature-lifecycle/authn-authz-procedure.md). **Depends on:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md).

---

### 9. Definition of Done

- [ ] Identity types and attributes defined
- [ ] IdP(s) and mapping documented
- [ ] Model published and linked to token, role, enforcement

---

### 10. Audit & Traceability

**Links to:** Identity model doc, IdP config, standards. **Audit trail:** Version, owner, change log.

---

### 11. Exit States

**✅ Completed successfully** – Identity model defined and published. **⚠️ Blocked** – IdP or attributes unclear; resolve and re-run. **❌ Aborted** – Model work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Identity / Auth owner
