# Procedure: Alerting (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to define, configure, and operate alerts so that on-call and [Incident Lifecycle](../incident-lifecycle/) are triggered by actionable signals from [Metrics](./metrics-procedure.md), [Logging](./logging-procedure.md), or [Tracing](./tracing-procedure.md). It ensures alerts are specific, routed, and tuned to avoid fatigue and that [SLO/SLA](./slo-sla-procedure.md) and [Runbook](./runbook-procedure.md) are linked.

**What problem it solves**

- No or noisy alerts; incidents missed or alert fatigue
- Alerts not actionable; no runbook or SLO context
- [Incident Lifecycle](../incident-lifecycle/) or [On-Call Handoff](./on-call-handoff-procedure.md) lack alert standards
- [Metrics](./metrics-procedure.md), [Logging](./logging-procedure.md), [SLO/SLA](./slo-sla-procedure.md) not used consistently for alerting

**What "success" looks like at the end**

Alerting operational with:
- Alert rules defined from [Metrics](./metrics-procedure.md), [Logging](./logging-procedure.md), or [SLO/SLA](./slo-sla-procedure.md); thresholds and routing configured
- Alerts actionable; [Runbook](./runbook-procedure.md) and [On-Call Handoff](./on-call-handoff-procedure.md) linked
- Tuning and review process; fatigue avoided
- Links to [Metrics](./metrics-procedure.md), [SLO/SLA](./slo-sla-procedure.md), [Runbook](./runbook-procedure.md), [On-Call Handoff](./on-call-handoff-procedure.md), [Incident Lifecycle](../incident-lifecycle/)

---

### 2. Trigger

- New service or SLO; alerts required per [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) or [Observability Review](../pr-lifecycle/observability-review-procedure.md)
- [SLO/SLA](./slo-sla-procedure.md) or [Incident Lifecycle](../incident-lifecycle/) need alerting; [Runbook](./runbook-procedure.md) or [On-Call Handoff](./on-call-handoff-procedure.md) need alert triggers
- Alert fatigue or missed incidents; tuning or new rules
- [Post-Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md) or [Third-Party Monitoring](../third-party-integration-lifecycle/monitoring-alerting-procedure.md) require alert consistency

---

### 3. Required Inputs

**Artifacts:** [Metrics](./metrics-procedure.md), [Logging](./logging-procedure.md), [SLO/SLA](./slo-sla-procedure.md) outputs; alerting platform; [Runbook](./runbook-procedure.md), [On-Call Handoff](./on-call-handoff-procedure.md) for routing and response.  
**Decisions:** Owner (platform, SRE); routing, severity, runbook linkage.  
**Constraints:** Alerts must be actionable; avoid alert fatigue.

**Remediation:** SLO or runbook missing → define minimal alerts and runbooks; refine with SLO and runbook procedures.

---

### 4. Plan Requirement

**Plan includes:** Alert rules, thresholds, routing, severity, runbook links, tuning. **Output:** Alerting Plan.

---

### 5. Workflow

**Step 1: Define rules and routing.** Define alert rules from metrics, logs, or SLO; set thresholds and severity. Configure routing to [On-Call Handoff](./on-call-handoff-procedure.md) and link [Runbook](./runbook-procedure.md). **Outputs:** Alert rules; routing; runbook links.

**Step 2: Configure and operate.** Configure alerts in platform; operate and monitor. **Outputs:** Alerts configured; operational.

**Step 3: Tune and review.** Tune thresholds and rules to reduce noise; review periodically. Ensure [Incident Lifecycle](../incident-lifecycle/) is triggered appropriately. **Outputs:** Tuning process; review cadence.

---

### 6. Output Contract

**Artifacts:** Alert rules, routing, runbook links, tuning process. **State:** Alerting operational. **Signals:** “Alerting defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Rules and routing defined; runbooks linked; tuning and review in place. **Who approves:** Platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [Metrics Procedure](./metrics-procedure.md), [SLO/SLA Procedure](./slo-sla-procedure.md), [Runbook Procedure](./runbook-procedure.md), [On-Call Handoff Procedure](./on-call-handoff-procedure.md), [Incident Lifecycle](../incident-lifecycle/). **Depends on:** Alerting platform.

---

### 9. Definition of Done

- [ ] Rules and routing defined; runbooks linked
- [ ] Alerts configured and operational
- [ ] Tuning and review process in place

---

### 10. Audit & Traceability

**Links to:** Alert rules, runbooks, on-call, SLO. **Audit trail:** Rule changes, tuning.

---

### 11. Exit States

**✅ Completed successfully** – Alerting operational. **⚠️ Blocked** – Metrics, SLO, or runbook missing; define minimal and refine. **❌ Aborted** – Alerting work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / SRE
