# Procedure: Secrets & Credentials (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to manage secrets and credentials for third-party integrations (API keys, tokens, certs). It ensures secrets are stored, rotated, and accessed securely and that [Vendor Evaluation](./vendor-evaluation-procedure.md) and [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) outcomes are reflected in credential handling.

**What problem it solves**

- Secrets in code or config; exposure risk
- No rotation or access policy; stale or over-shared credentials
- [Security Lifecycle](../security-lifecycle/) and compliance require structured secrets management
- Integrations fail or are insecure due to credential misuse

**What "success" looks like at the end**

Secrets management for integrations defined and operational with:
- Secret types and storage (vault, managed secret store) defined
- Access, rotation, and revocation process documented and used
- No secrets in code or config; runtime access via secure mechanism
- Links to [Vendor Evaluation](./vendor-evaluation-procedure.md), [Security Lifecycle](../security-lifecycle/), compliance

---

### 2. Trigger

- New third-party integration; credentials must be created and stored
- [Vendor Evaluation](./vendor-evaluation-procedure.md) or [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) requires secrets approach
- Rotation, compromise, or access review
- Security or compliance audit of integration credentials

---

### 3. Required Inputs

**Artifacts:** Integration and vendor context; secret types (API key, token, cert); [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md); org secrets policy (storage, rotation, access).  
**Decisions:** Owner (platform, security); rotation and access policy.  
**Constraints:** No secrets in code or config; use approved secret store.

**Remediation:** Org secrets policy missing → define minimal (store in vault, rotate periodically, least privilege); align with security.

---

### 4. Plan Requirement

**Plan includes:** Secret types, storage, access, rotation, revocation, links to vendor evaluation and security. **Output:** Secrets & Credentials Plan.

---

### 5. Workflow

**Step 1: Define storage and access.** Choose secret store (vault, cloud secret manager); define who can access what, how (e.g. runtime only, no dev access to prod). **Outputs:** Storage and access rules.

**Step 2: Create and store credentials.** Generate or obtain credentials per vendor; store in secret store; configure apps to retrieve at runtime. Never commit secrets. **Outputs:** Credentials stored; apps configured.

**Step 3: Establish rotation and revocation.** Define rotation cadence and process; document revocation (e.g. on offboard, compromise). Rotate and revoke per policy. **Outputs:** Rotation and revocation process; execution per policy.

---

### 6. Output Contract

**Artifacts:** Secrets plan (storage, access, rotation, revocation); credentials in secret store. **State:** Secrets managed securely; rotation and revocation operational. **Signals:** “Secrets & credentials defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Storage and access defined; no secrets in code/config; rotation and revocation in place. **Who approves:** Security, platform owner.

---

### 8. Downstream Dependencies

**Output →:** [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md), [Security Lifecycle](../security-lifecycle/), [Vendor Evaluation](./vendor-evaluation-procedure.md). **Depends on:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) (security).

---

### 9. Definition of Done

- [ ] Storage and access defined
- [ ] Credentials stored; apps use secret store
- [ ] Rotation and revocation process in place and used

---

### 10. Audit & Traceability

**Links to:** Secret store, rotation log, access policy. **Audit trail:** Creation, rotation, revocation, access.

---

### 11. Exit States

**✅ Completed successfully** – Secrets managed; rotation and revocation operational. **⚠️ Blocked** – Secret store or policy missing; resolve and re-run. **❌ Aborted** – Secrets work cancelled; document; secure any existing credentials.

---

**Status:** Active Procedure  
**Owner:** Platform / Security
