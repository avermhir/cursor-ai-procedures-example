# Procedure: Cost Monitoring (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to monitor and optimize infrastructure and platform costs (compute, storage, data transfer, third-party services) so that cost is visible, attributed, and controlled. It ensures [Metrics](./metrics-procedure.md) or cost-specific metrics are used where applicable and that [Observability](./) and [Third-Party Integration](../third-party-integration-lifecycle/) cost context is available.

**What problem it solves**

- No cost visibility; spend grows unnoticed
- Cost not attributed to services or teams; optimization unclear
- [Observability](./) or [SLO/SLA](./slo-sla-procedure.md) lack cost context; [Third-Party](../third-party-integration-lifecycle/) or [Vendor](../third-party-integration-lifecycle/vendor-evaluation-procedure.md) cost not tracked
- Budget overruns or surprise bills

**What "success" looks like at the end**

Cost monitoring operational with:
- Cost metrics or dashboards (by service, team, vendor) defined and reviewed
- Attribution and anomaly detection; optimization actions identified and tracked
- Links to [Metrics](./metrics-procedure.md), [SLO/SLA](./slo-sla-procedure.md), [Third-Party](../third-party-integration-lifecycle/), [Vendor Evaluation](../third-party-integration-lifecycle/vendor-evaluation-procedure.md) where relevant

---

### 2. Trigger

- New service or vendor; cost must be tracked and attributed
- [Observability](./) or [Third-Party Integration](../third-party-integration-lifecycle/) require cost monitoring
- Budget or cost review; optimization needed
- [Vendor Evaluation](../third-party-integration-lifecycle/vendor-evaluation-procedure.md) or [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md) cost component

---

### 3. Required Inputs

**Artifacts:** Cost data source (cloud billing, vendor invoices, etc.); [Metrics](./metrics-procedure.md) or dashboards if cost-derived metrics used; attribution model (service, team, project).  
**Decisions:** Owner (platform, FinOps, leadership); review cadence and budgets.  
**Constraints:** Attribution consistent; anomalies and overruns surfaced.

**Remediation:** Attribution or data source missing → define minimal (e.g. by service or account); refine with finance/platform.

---

### 4. Plan Requirement

**Plan includes:** Data source, attribution, dashboards, alerts, review cadence, optimization process. **Output:** Cost Monitoring Plan.

---

### 5. Workflow

**Step 1: Define attribution and dashboards.** Define cost attribution (service, team, vendor); build dashboards and, if useful, cost-related [Metrics](./metrics-procedure.md). **Outputs:** Attribution; dashboards.

**Step 2: Monitor and alert.** Monitor cost; alert on anomalies or overrun. **Outputs:** Monitoring; alerts.

**Step 3: Review and optimize.** Periodic cost review; identify optimization (right-size, reserve, eliminate waste); track actions. **Outputs:** Review cadence; optimization process.

---

### 6. Output Contract

**Artifacts:** Cost attribution, dashboards, alerts, review and optimization process. **State:** Cost monitoring operational. **Signals:** “Cost monitoring defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Attribution and dashboards defined; monitoring and alerts in place; review and optimization process. **Who approves:** Platform owner, FinOps, leadership.

---

### 8. Downstream Dependencies

**Output →:** [Metrics Procedure](./metrics-procedure.md), [SLO/SLA Procedure](./slo-sla-procedure.md), [Third-Party Integration](../third-party-integration-lifecycle/), [Vendor Evaluation](../third-party-integration-lifecycle/vendor-evaluation-procedure.md). **Depends on:** Cost data source.

---

### 9. Definition of Done

- [ ] Attribution and dashboards defined
- [ ] Monitoring and alerts in place
- [ ] Review and optimization process

---

### 10. Audit & Traceability

**Links to:** Cost data, attribution, dashboards. **Audit trail:** Review dates, optimization actions.

---

### 11. Exit States

**✅ Completed successfully** – Cost monitoring operational. **⚠️ Blocked** – Data source or attribution missing; resolve and re-run. **❌ Aborted** – Cost monitoring work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / FinOps / Leadership
