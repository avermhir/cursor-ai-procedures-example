# Procedure: Secure Design Review (Security Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to perform security design reviews so that architecture, data flows, and trust boundaries are assessed for security before implementation. It ensures [Threat Model](../feature-lifecycle/threat-model-procedure.md), [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md), and [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) are applied and that [Security Review](../feature-lifecycle/security-review-procedure.md) and [Security Logging](./security-logging-procedure.md) have design context.

**What problem it solves**

- No security design review; architecture or data-flow risks late or missed
- Threat model or standards not consistently applied at design time
- [Feature Lifecycle](../feature-lifecycle/) security review lacks design-level input
- Security issues discovered only in implementation or production

**What "success" looks like at the end**

Secure design review complete with:
- Design reviewed against [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) and [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- Threats and mitigations documented; design updated or accepted with residual risk
- Review record linked to [Threat Model](../feature-lifecycle/threat-model-procedure.md), [Security Review](../feature-lifecycle/security-review-procedure.md); ready for implementation

---

### 2. Trigger

- New or significant architecture or feature design; security review required before build
- [Threat Model Procedure](../feature-lifecycle/threat-model-procedure.md) or [Architecture Review](../feature-lifecycle/architecture-review-procedure.md) invokes secure design review
- [Security Review](../feature-lifecycle/security-review-procedure.md) requires design-level assessment
- Post-incident or audit; design review needed for security-sensitive components

---

### 3. Required Inputs

**Artifacts:** Architecture or design doc; data flows; [Threat Model](../feature-lifecycle/threat-model-procedure.md) output if any; [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md), [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md).  
**Decisions:** Owner (security, architect); review format and sign-off.  
**Constraints:** Review before implementation; threats and mitigations documented.

**Remediation:** Threat model missing → run [Threat Model Procedure](../feature-lifecycle/threat-model-procedure.md) or perform lightweight threat assessment as part of review.

---

### 4. Plan Requirement

**Plan includes:** Scope, reviewers, criteria (standards), output format, links to threat model and security review. **Output:** Secure Design Review Plan.

---

### 5. Workflow

**Step 1: Scope and prepare.** Define scope (components, data flows, trust boundaries); gather design doc and threat model. **Outputs:** Scope and materials.

**Step 2: Review against standards.** Assess design against [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) and [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md); identify threats and mitigations. **Outputs:** Review findings; threats and mitigations.

**Step 3: Document and close.** Document review; update design or accept residual risk. Link to [Threat Model](../feature-lifecycle/threat-model-procedure.md), [Security Review](../feature-lifecycle/security-review-procedure.md). **Outputs:** Review record; design updated or accepted.

---

### 6. Output Contract

**Artifacts:** Secure design review record, threats, mitigations, design updates. **State:** Design reviewed and accepted. **Signals:** “Secure design review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Design reviewed against standards; threats and mitigations documented; design updated or residual risk accepted. **Who approves:** Security owner, architect.

---

### 8. Downstream Dependencies

**Output →:** [Threat Model Procedure](../feature-lifecycle/threat-model-procedure.md), [Security Review Procedure](../feature-lifecycle/security-review-procedure.md), [Security Logging Procedure](./security-logging-procedure.md), implementation. **Depends on:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md), [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md).

---

### 9. Definition of Done

- [ ] Design reviewed against standards
- [ ] Threats and mitigations documented
- [ ] Design updated or residual risk accepted; review linked

---

### 10. Audit & Traceability

**Links to:** Design doc, threat model, review record, standards. **Audit trail:** Review date, reviewers, findings.

---

### 11. Exit States

**✅ Completed successfully** – Design reviewed and accepted. **⚠️ Blocked** – Design or threat model missing; resolve and re-run. **❌ Aborted** – Review cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Security / Architect
