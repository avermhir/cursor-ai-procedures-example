# Procedure: Pen Test / Hardening (Security Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to plan, execute, and act on penetration tests and security hardening so that exploitable weaknesses are found and addressed. It ensures [Threat Model](../feature-lifecycle/threat-model-procedure.md) and [Secure Design Review](./secure-design-review-procedure.md) outcomes are validated and that [Dependency & Vulnerability](./dependency-vulnerability-procedure.md) and [Incident Response](./incident-response-procedure.md) are informed by pen-test findings.

**What problem it solves**

- No pen testing or hardening; exploitable vulnerabilities reach production
- Pen-test findings not triaged or remediated; same issues persist
- [Security Review](../feature-lifecycle/security-review-procedure.md) or compliance requires pen-test evidence
- [Incident Response](./incident-response-procedure.md) lacks proactive hardening context

**What "success" looks like at the end**

Pen test and hardening operational with:
- Pen-test scope, schedule, and rules of engagement defined
- Pen test executed; findings triaged and remediated or accepted with risk
- Hardening (config, patches, architecture) applied per findings and best practice
- Links to [Threat Model](../feature-lifecycle/threat-model-procedure.md), [Secure Design Review](./secure-design-review-procedure.md), [Dependency & Vulnerability](./dependency-vulnerability-procedure.md), [Incident Response](./incident-response-procedure.md)

---

### 2. Trigger

- Planned pen test (internal or external); scope and rules of engagement needed
- [Secure Design Review](./secure-design-review-procedure.md) or [Threat Model](../feature-lifecycle/threat-model-procedure.md) recommends pen test
- Compliance or [Security Review](../feature-lifecycle/security-review-procedure.md) requires pen test
- Post-incident; pen test or hardening to prevent recurrence

---

### 3. Required Inputs

**Artifacts:** Scope (systems, apps, boundaries); [Threat Model](../feature-lifecycle/threat-model-procedure.md), [Secure Design Review](./secure-design-review-procedure.md) output; pen-test provider or internal team; rules of engagement.  
**Decisions:** Owner (security); schedule and remediation SLA.  
**Constraints:** Authorized scope only; findings triaged and remediated or accepted.

**Remediation:** Threat model or scope missing → define scope and RoE; run [Threat Model](../feature-lifecycle/threat-model-procedure.md) or design review if needed.

---

### 4. Plan Requirement

**Plan includes:** Scope, schedule, RoE, provider, triage, remediation, hardening. **Output:** Pen Test / Hardening Plan.

---

### 5. Workflow

**Step 1: Plan and authorize.** Define scope, schedule, rules of engagement; authorize pen-test provider or team. **Outputs:** Plan; authorization.

**Step 2: Execute pen test.** Run pen test per RoE; collect findings (exploits, config issues, missing hardening). **Outputs:** Pen-test report; findings.

**Step 3: Triage, remediate, harden.** Triage findings; remediate (fix, patch, config change) or accept risk with justification. Apply hardening per best practice and findings. Re-test critical items if needed. **Outputs:** Triage; remediation and hardening; re-test where applicable.

---

### 6. Output Contract

**Artifacts:** Pen-test plan, report, findings, triage, remediation, hardening. **State:** Pen test done; findings addressed. **Signals:** “Pen test complete”; “Hardening applied”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Pen test planned and executed; findings triaged; critical/high remediated or accepted. **Who approves:** Security owner.

---

### 8. Downstream Dependencies

**Output →:** [Threat Model](../feature-lifecycle/threat-model-procedure.md), [Secure Design Review](./secure-design-review-procedure.md), [Dependency & Vulnerability](./dependency-vulnerability-procedure.md), [Incident Response](./incident-response-procedure.md). **Depends on:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md).

---

### 9. Definition of Done

- [ ] Pen test planned and executed
- [ ] Findings triaged; critical/high remediated or accepted
- [ ] Hardening applied per findings and best practice

---

### 10. Audit & Traceability

**Links to:** Plan, report, findings, remediation, hardening. **Audit trail:** Pen-test dates, findings, remediation.

---

### 11. Exit States

**✅ Completed successfully** – Pen test done; findings addressed. **⚠️ Blocked** – Scope or RoE unclear; resolve and re-run. **❌ Aborted** – Pen test cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Security
