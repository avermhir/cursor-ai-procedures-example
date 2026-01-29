# Procedure: Incident Response (Security Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to respond to security incidents (breach, abuse, malware, unauthorized access). It ensures security-specific detection, containment, and escalation are coordinated with [Incident Lifecycle](../incident-lifecycle/) (Triage, Mitigation, Communications, RCA, Postmortem) and that [Security Logging](./security-logging-procedure.md), [Secrets Management](./secrets-management-procedure.md), and [Dependency & Vulnerability](./dependency-vulnerability-procedure.md) are used during response.

**What problem it solves**

- Security incidents handled ad-hoc; no clear ownership or escalation
- [Incident Lifecycle](../incident-lifecycle/) used but security-specific steps (containment, forensics, notification) missing or inconsistent
- [Security Logging](./security-logging-procedure.md) or [Secrets Management](./secrets-management-procedure.md) not leveraged during response
- Compliance or regulatory notification (breach, etc.) not triggered

**What "success" looks like at the end**

Security incident response integrated with:
- Security incident detection and classification; escalation to [Incident Lifecycle](../incident-lifecycle/) (Triage, Mitigation, etc.)
- Security-specific containment (revoke access, rotate secrets, isolate) and use of [Security Logging](./security-logging-procedure.md), [Secrets Management](./secrets-management-procedure.md)
- RCA and postmortem via [Incident Lifecycle](../incident-lifecycle/); compliance or regulatory notification where required
- Links to [Incident Lifecycle](../incident-lifecycle/), [Security Logging](./security-logging-procedure.md), [Secrets Management](./secrets-management-procedure.md), [Pen Test / Hardening](./pen-test-hardening-procedure.md)

---

### 2. Trigger

- Security incident detected (breach, abuse, malware, unauthorized access, etc.)
- [Incident Lifecycle Triage](../incident-lifecycle/triage-procedure.md) or [Mitigation](../incident-lifecycle/mitigation-procedure.md) identifies security nature; security-specific response needed
- [Security Logging](./security-logging-procedure.md) or monitoring alerts security event
- Compliance or regulatory requirement to respond and report security incidents

---

### 3. Required Inputs

**Artifacts:** [Incident Lifecycle](../incident-lifecycle/) procedures (Triage, Mitigation, Communications, RCA, Postmortem); [Security Logging](./security-logging-procedure.md), [Secrets Management](./secrets-management-procedure.md); incident channel or tracker.  
**Decisions:** Owner (security, incident lead); escalation path and compliance notification trigger.  
**Constraints:** Containment before root cause; preserve evidence where applicable; comply with notification requirements.

**Remediation:** Incident lifecycle not established → run [Triage](../incident-lifecycle/triage-procedure.md) and [Mitigation](../incident-lifecycle/mitigation-procedure.md) with security-specific steps; formalize lifecycle integration.

---

### 4. Plan Requirement

**Plan includes:** Detection, classification, escalation to incident lifecycle, security-specific containment, use of security logging and secrets management, compliance notification. **Output:** Security Incident Response Plan.

---

### 5. Workflow

**Step 1: Detect and classify.** Detect security incident (alert, report, monitoring); classify (breach, abuse, malware, unauthorized access, etc.). Open incident per [Incident Lifecycle](../incident-lifecycle/); invoke [Triage](../incident-lifecycle/triage-procedure.md). **Outputs:** Incident record; triage.

**Step 2: Contain (security-specific).** Alongside [Mitigation](../incident-lifecycle/mitigation-procedure.md): contain via revoke access, rotate secrets ([Secrets Management](./secrets-management-procedure.md)), isolate systems, preserve evidence. Use [Security Logging](./security-logging-procedure.md) for investigation. **Outputs:** Containment actions; use of security logging and secrets management.

**Step 3: Escalate to lifecycle and comply.** Continue [Mitigation](../incident-lifecycle/mitigation-procedure.md), [Communications](../incident-lifecycle/communications-procedure.md), [RCA](../incident-lifecycle/root-cause-analysis-procedure.md), [Postmortem](../incident-lifecycle/postmortem-procedure.md). Trigger compliance or regulatory notification if required (breach, etc.). **Outputs:** Lifecycle completed; compliance notification if applicable.

---

### 6. Output Contract

**Artifacts:** Security incident response plan, containment actions, integration with incident lifecycle, compliance notification if applicable. **State:** Security incidents handled via lifecycle with security-specific steps. **Signals:** “Security incident contained”; “Compliance notified” (if applicable).

---

### 7. Validation & Acceptance Criteria

**Checks:** Detection and classification; containment using security logging and secrets management; lifecycle and compliance notification. **Who approves:** Security owner, incident lead.

---

### 8. Downstream Dependencies

**Output →:** [Incident Lifecycle](../incident-lifecycle/) (Triage, Mitigation, Communications, RCA, Postmortem), [Security Logging](./security-logging-procedure.md), [Secrets Management](./secrets-management-procedure.md), compliance. **Depends on:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) (incident scenarios).

---

### 9. Definition of Done

- [ ] Incident detected and classified; triage done
- [ ] Security-specific containment; logging and secrets management used
- [ ] Lifecycle completed; compliance notification if required

---

### 10. Audit & Traceability

**Links to:** Incident record, containment, lifecycle, compliance notification. **Audit trail:** Detection, containment, notification.

---

### 11. Exit States

**✅ Completed successfully** – Security incident handled; lifecycle and compliance done. **⚠️ Blocked** – Escalation or containment blocked; resolve and continue. **❌ Aborted** – Response cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Security / Incident lead
