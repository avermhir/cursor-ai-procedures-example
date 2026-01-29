# Procedure: Metrics (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to collect, store, and use metrics (counters, gauges, histograms) for availability, latency, and throughput so that [SLO/SLA](./slo-sla-procedure.md), [Alerting](./alerting-procedure.md), and [Incident Lifecycle](../incident-lifecycle/) have consistent metric sources. It ensures metrics are defined, emitted, and retained per [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) and [Observability Review](../pr-lifecycle/observability-review-procedure.md).

**What problem it solves**

- No or ad-hoc metrics; SLOs and alerts lack reliable data
- Inconsistent naming or cardinality; dashboards and alerts fragile
- [Incident Lifecycle](../incident-lifecycle/) or [Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md) cannot assume standard metrics
- [Logging](./logging-procedure.md) or [Tracing](./tracing-procedure.md) used for metrics where proper metrics would be better

**What "success" looks like at the end**

Metrics operational with:
- Metric taxonomy (naming, types, labels) and key metrics (availability, latency, throughput) defined
- Metrics emitted and stored; [SLO/SLA](./slo-sla-procedure.md) and [Alerting](./alerting-procedure.md) use them
- Links to [Logging](./logging-procedure.md), [Tracing](./tracing-procedure.md), [Alerting](./alerting-procedure.md), [SLO/SLA](./slo-sla-procedure.md)

---

### 2. Trigger

- New service or feature; metrics required per [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) or [Observability Review](../pr-lifecycle/observability-review-procedure.md)
- [SLO/SLA](./slo-sla-procedure.md) or [Alerting](./alerting-procedure.md) need new or changed metrics
- [Incident Lifecycle](../incident-lifecycle/) or [Post-Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md) require standard metrics
- Metric Cardinality or cost review

---

### 3. Required Inputs

**Artifacts:** Metrics platform (e.g. Prometheus, cloud metrics); [SLO/SLA](./slo-sla-procedure.md), [Alerting](./alerting-procedure.md) requirements; [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) or scope.  
**Decisions:** Owner (platform, SRE); taxonomy and retention.  
**Constraints:** Cardinality and retention bounded; no PII in labels.

**Remediation:** Taxonomy or platform unclear → define minimal (RED Golden Signals, naming); refine with platform.

---

### 4. Plan Requirement

**Plan includes:** Taxonomy, key metrics, storage, retention, links to SLO/SLA, alerting. **Output:** Metrics Plan.

---

### 5. Workflow

**Step 1: Define taxonomy and key metrics.** Define naming, types (counter, gauge, histogram), labels; define key metrics (availability, latency, throughput, errors). **Outputs:** Taxonomy; key metrics.

**Step 2: Implement and store.** Emit metrics per taxonomy; scrape or push to metrics platform; configure retention. **Outputs:** Metrics implemented; storage and retention.

**Step 3: Operate and link.** Operate metrics pipeline; [SLO/SLA](./slo-sla-procedure.md) and [Alerting](./alerting-procedure.md) use metrics. **Outputs:** Operational metrics; links.

---

### 6. Output Contract

**Artifacts:** Metric taxonomy, key metrics, storage, retention. **State:** Metrics operational. **Signals:** “Metrics defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Taxonomy and key metrics defined; metrics implemented; SLO/SLA and alerting use them. **Who approves:** Platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [SLO/SLA Procedure](./slo-sla-procedure.md), [Alerting Procedure](./alerting-procedure.md), [Logging Procedure](./logging-procedure.md), [Tracing Procedure](./tracing-procedure.md), [Incident Lifecycle](../incident-lifecycle/). **Depends on:** Metrics platform.

---

### 9. Definition of Done

- [ ] Taxonomy and key metrics defined
- [ ] Metrics implemented; storage and retention configured
- [ ] SLO/SLA and alerting use metrics

---

### 10. Audit & Traceability

**Links to:** Metric definitions, platform, retention. **Audit trail:** Taxonomy changes, retention.

---

### 11. Exit States

**✅ Completed successfully** – Metrics operational. **⚠️ Blocked** – Platform or taxonomy missing; resolve and re-run. **❌ Aborted** – Metrics work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / SRE
