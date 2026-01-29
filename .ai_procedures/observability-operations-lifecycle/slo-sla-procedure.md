# Procedure: SLO/SLA (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to define, measure, and report SLOs (service level objectives) and SLAs (service level agreements) so that [Metrics](./metrics-procedure.md), [Alerting](./alerting-procedure.md), and [Incident Lifecycle](../incident-lifecycle/) have clear targets. It ensures SLOs are defined, tracked, and used for alerting and [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md) alignment where applicable.

**What problem it solves**

- No SLOs or SLAs; availability and latency targets unclear
- [Alerting](./alerting-procedure.md) or [Incident Lifecycle](../incident-lifecycle/) lack SLO-based triggers
- [Metrics](./metrics-procedure.md) collected but not tied to objectives; [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md) or internal SLAs not measured
- [Post-Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md) or [Performance Testing](../testing-quality-lifecycle/performance-testing-procedure.md) lack SLO context

**What "success" looks like at the end**

SLO/SLA operational with:
- SLOs defined (availability, latency, error budget) and measured via [Metrics](./metrics-procedure.md)
- [Alerting](./alerting-procedure.md) and [Incident Lifecycle](../incident-lifecycle/) use SLO; error budget tracked
- Internal or external SLAs documented and reported; [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md) aligned where relevant
- Links to [Metrics](./metrics-procedure.md), [Alerting](./alerting-procedure.md), [Incident Lifecycle](../incident-lifecycle/), [Post-Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md)

---

### 2. Trigger

- New service or product; SLOs or SLAs required
- [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) or [Observability Review](../pr-lifecycle/observability-review-procedure.md) require SLO definition
- [Alerting](./alerting-procedure.md) or [Incident Lifecycle](../incident-lifecycle/) need SLO-based triggers
- [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md) or [Post-Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md) need SLO/SLA measurement

---

### 3. Required Inputs

**Artifacts:** [Metrics](./metrics-procedure.md) for SLO measurement; [Alerting](./alerting-procedure.md) for SLO-based alerts; [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md) if external SLA.  
**Decisions:** Owner (product, platform, SRE); SLO targets (e.g. 99.9% availability, p99 latency).  
**Constraints:** SLOs must be measurable via metrics; error budget and alerting linked.

**Remediation:** Metrics missing → use [Metrics Procedure](./metrics-procedure.md) first; define SLOs when metrics exist.

---

### 4. Plan Requirement

**Plan includes:** SLO definitions, measurement (metrics), error budget, alerting, reporting, SLA alignment. **Output:** SLO/SLA Plan.

---

### 5. Workflow

**Step 1: Define SLOs and error budget.** Define SLOs (availability, latency, etc.); set targets and error budget. Ensure [Metrics](./metrics-procedure.md) can measure them. **Outputs:** SLO definitions; error budget.

**Step 2: Measure and alert.** Measure SLOs via metrics; configure [Alerting](./alerting-procedure.md) for SLO breach or error-budget burn. **Outputs:** SLO measurement; alerting.

**Step 3: Report and maintain.** Report SLO/SLA internally or to customers per [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md) if applicable. Review and update SLOs periodically. **Outputs:** Reporting; maintenance process.

---

### 6. Output Contract

**Artifacts:** SLO definitions, error budget, measurement, alerting, reporting. **State:** SLO/SLA operational. **Signals:** “SLO/SLA defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** SLOs defined and measurable; alerting and error budget in place; reporting and maintenance. **Who approves:** Product, platform, SRE.

---

### 8. Downstream Dependencies

**Output →:** [Metrics Procedure](./metrics-procedure.md), [Alerting Procedure](./alerting-procedure.md), [Incident Lifecycle](../incident-lifecycle/), [Post-Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md), [Contract & SLA](../third-party-integration-lifecycle/contract-sla-procedure.md). **Depends on:** [Metrics Procedure](./metrics-procedure.md).

---

### 9. Definition of Done

- [ ] SLOs and error budget defined
- [ ] Measurement and alerting in place
- [ ] Reporting and maintenance process

---

### 10. Audit & Traceability

**Links to:** SLO definitions, metrics, alerting, reporting. **Audit trail:** SLO changes, error-budget consumption.

---

### 11. Exit States

**✅ Completed successfully** – SLO/SLA operational. **⚠️ Blocked** – Metrics or targets missing; resolve and re-run. **❌ Aborted** – SLO/SLA work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Product / Platform / SRE
