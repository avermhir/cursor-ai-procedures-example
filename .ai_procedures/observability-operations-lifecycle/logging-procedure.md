# Procedure: Logging (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to implement and operate application and operational logging so that systems are observable and [Metrics](./metrics-procedure.md), [Alerting](./alerting-procedure.md), and [Incident Lifecycle](../incident-lifecycle/) can use log data. It ensures log format, levels, and retention are consistent and that [Security Logging](../security-lifecycle/security-logging-procedure.md) and [Audit Logging](../data-lifecycle/audit-logging-procedure.md) remain distinct where required.

**What problem it solves**

- Inconsistent or missing logs; debugging and investigation difficult
- No structure or retention; log volume unmanaged or lost too soon
- [Incident Lifecycle](../incident-lifecycle/) or [Observability Review](../pr-lifecycle/observability-review-procedure.md) lack logging standards
- Security or audit logging conflated with application logs

**What "success" looks like at the end**

Logging operational with:
- Log format, levels, and structure defined; retention and storage configured
- Application and operational logs emitted and queryable; [Metrics](./metrics-procedure.md) and [Alerting](./alerting-procedure.md) can use log-derived signals where needed
- Distinct from [Security Logging](../security-lifecycle/security-logging-procedure.md) and [Audit Logging](../data-lifecycle/audit-logging-procedure.md) where required
- Links to [Metrics](./metrics-procedure.md), [Alerting](./alerting-procedure.md), [Incident Lifecycle](../incident-lifecycle/)

---

### 2. Trigger

- New service or feature; logging required per [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) or [Observability Review](../pr-lifecycle/observability-review-procedure.md)
- [Incident Lifecycle](../incident-lifecycle/) or ops need structured logs; standards missing
- Log volume, cost, or retention review
- [Security Logging](../security-lifecycle/security-logging-procedure.md) or [Audit Logging](../data-lifecycle/audit-logging-procedure.md) boundary clarification

---

### 3. Required Inputs

**Artifacts:** Logging platform (e.g. centralized logging); [Metrics](./metrics-procedure.md), [Alerting](./alerting-procedure.md) scope if log-derived; [Security Logging](../security-lifecycle/security-logging-procedure.md), [Audit Logging](../data-lifecycle/audit-logging-procedure.md) scope to keep distinct.  
**Decisions:** Owner (platform, SRE); format, levels, retention.  
**Constraints:** No PII or secrets in application logs; retention per policy.

**Remediation:** Platform or format unclear → define minimal (structured JSON, levels, retention); refine with platform.

---

### 4. Plan Requirement

**Plan includes:** Format, levels, structure, storage, retention, links to metrics, alerting, security/audit. **Output:** Logging Plan.

---

### 5. Workflow

**Step 1: Define format and levels.** Define log format (e.g. structured JSON), levels (debug, info, warn, error), and mandatory fields (timestamp, service, level, message, trace id). **Outputs:** Format and levels.

**Step 2: Implement and store.** Emit logs per format; ship to centralized logging; configure retention and access. **Outputs:** Logging implemented; storage and retention.

**Step 3: Operate and link.** Operate logging pipeline; link [Metrics](./metrics-procedure.md) and [Alerting](./alerting-procedure.md) where log-derived signals used. Keep distinct from [Security](../security-lifecycle/security-logging-procedure.md) and [Audit](../data-lifecycle/audit-logging-procedure.md) per scope. **Outputs:** Operational logging; links.

---

### 6. Output Contract

**Artifacts:** Logging format, levels, storage, retention. **State:** Logging operational. **Signals:** “Logging defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Format and levels defined; logging implemented; retention configured; distinct from security/audit where required. **Who approves:** Platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [Metrics Procedure](./metrics-procedure.md), [Alerting Procedure](./alerting-procedure.md), [Incident Lifecycle](../incident-lifecycle/), [Observability Review](../pr-lifecycle/observability-review-procedure.md). **Depends on:** Logging platform.

---

### 9. Definition of Done

- [ ] Format and levels defined
- [ ] Logging implemented; storage and retention configured
- [ ] Operated and linked to metrics, alerting; security/audit boundary clear

---

### 10. Audit & Traceability

**Links to:** Logging config, retention, platform. **Audit trail:** Retention changes, access.

---

### 11. Exit States

**✅ Completed successfully** – Logging operational. **⚠️ Blocked** – Platform or format missing; resolve and re-run. **❌ Aborted** – Logging work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / SRE
