# Procedure: Monitoring & Alerting (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to monitor and alert on third-party integration health, latency, errors, and SLA. It ensures we observe integration behavior, detect degradation or failure, and align with [Contract & SLA Procedure](./contract-sla-procedure.md), [Failure Mode Procedure](./failure-mode-procedure.md), and [Rate Limit & Quota Procedure](./rate-limit-quota-procedure.md).

**What problem it solves**

- No visibility into integration health; issues found only by user reports
- SLA, rate limits, or failure modes not monitored or alerted
- [Observability & Operations Lifecycle](../observability-operations-lifecycle/) integration metrics and runbooks missing
- Incident response delayed because integration failures not detected

**What "success" looks like at the end**

Integration monitoring and alerting operational with:
- Metrics (latency, error rate, throughput, circuit state, rate-limit usage) defined and collected
- Alerts for degradation, failures, SLA breach, rate-limit approach
- Runbooks or playbooks for common integration issues
- Links to [Contract & SLA](./contract-sla-procedure.md), [Failure Mode](./failure-mode-procedure.md), [Rate Limit & Quota](./rate-limit-quota-procedure.md), [Observability & Operations](../observability-operations-lifecycle/)

---

### 2. Trigger

- New third-party integration; monitoring and alerting not yet defined
- [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) or [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) require monitoring
- [Contract & SLA](./contract-sla-procedure.md), [Failure Mode](./failure-mode-procedure.md), or [Rate Limit & Quota](./rate-limit-quota-procedure.md) need observable signals
- Incidents from integration; need better detection and runbooks

---

### 3. Required Inputs

**Artifacts:** Integration and vendor API; [Contract & SLA](./contract-sla-procedure.md), [Failure Mode](./failure-mode-procedure.md), [Rate Limit & Quota](./rate-limit-quota-procedure.md) outputs; [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md); observability platform.  
**Decisions:** Owner (platform, SRE); alert thresholds and runbook owner.  
**Constraints:** Alerts must be actionable; avoid alert fatigue.

**Remediation:** Observability platform or SLAs missing → define minimal metrics and alerts; refine when available.

---

### 4. Plan Requirement

**Plan includes:** Metrics, dashboards, alerts, runbooks, links to SLA, failure mode, rate limit. **Output:** Monitoring & Alerting Plan.

---

### 5. Workflow

**Step 1: Define metrics and dashboards.** Define metrics (latency, error rate, throughput, circuit state, rate-limit usage). Create dashboards for operational visibility. **Outputs:** Metrics and dashboards.

**Step 2: Define alerts and runbooks.** Set alerts for degradation, failures, SLA breach, rate-limit approach. Write runbooks or playbooks for common issues (vendor down, rate limit, circuit open). **Outputs:** Alerts and runbooks.

**Step 3: Implement and operate.** Emit metrics from integration layer; configure alerts and dashboards. Review and tune alerts; update runbooks from incidents. **Outputs:** Monitoring and alerting live; review process.

---

### 6. Output Contract

**Artifacts:** Metrics, dashboards, alerts, runbooks. **State:** Integration monitored and alerted. **Signals:** “Monitoring & alerting defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Metrics and dashboards defined; alerts and runbooks in place; reviewed and tuned. **Who approves:** Platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [Contract & SLA Procedure](./contract-sla-procedure.md), [Failure Mode Procedure](./failure-mode-procedure.md), [Rate Limit & Quota Procedure](./rate-limit-quota-procedure.md), [Observability & Operations Lifecycle](../observability-operations-lifecycle/), [Incident Lifecycle](../incident-lifecycle/). **Depends on:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) (monitoring).

---

### 9. Definition of Done

- [ ] Metrics and dashboards defined and implemented
- [ ] Alerts and runbooks in place
- [ ] Monitoring operated and tuned

---

### 10. Audit & Traceability

**Links to:** Dashboards, alerts, runbooks, SLA, failure mode, rate limit. **Audit trail:** Alert tune, runbook updates.

---

### 11. Exit States

**✅ Completed successfully** – Monitoring and alerting defined and operational. **⚠️ Blocked** – Observability or SLA missing; implement minimal metrics and document. **❌ Aborted** – Monitoring work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / SRE
