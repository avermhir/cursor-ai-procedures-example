# Procedure: Tracing (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to implement distributed tracing so that requests across services can be traced for latency and failure diagnosis. It ensures trace format, propagation, and retention align with [Metrics](./metrics-procedure.md) and [Logging](./logging-procedure.md) and support [Incident Lifecycle](../incident-lifecycle/) and [Observability Review](../pr-lifecycle/observability-review-procedure.md).

**What problem it solves**

- No tracing; cross-service latency or failure diagnosis difficult
- Inconsistent trace context or propagation; traces incomplete
- [Incident Lifecycle](../incident-lifecycle/) or [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) lack tracing standards
- [Logging](./logging-procedure.md) cannot be correlated across services reliably

**What "success" looks like at the end**

Tracing operational with:
- Trace format, propagation (e.g. W3C Trace Context), and sampling defined
- Traces emitted and stored; queryable for latency and failure analysis
- [Logging](./logging-procedure.md) and [Metrics](./metrics-procedure.md) can reference trace id; [Alerting](./alerting-procedure.md) or SLO can use trace-derived data where applicable
- Links to [Logging](./logging-procedure.md), [Metrics](./metrics-procedure.md), [Incident Lifecycle](../incident-lifecycle/)

---

### 2. Trigger

- New service or feature; tracing required per [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) or [Observability Review](../pr-lifecycle/observability-review-procedure.md)
- [Incident Lifecycle](../incident-lifecycle/) or debugging need distributed traces
- Trace format or propagation change; platform or sampling review
- [Logging](./logging-procedure.md) correlation; trace id in logs

---

### 3. Required Inputs

**Artifacts:** Tracing platform (e.g. Jaeger, Tempo, X-Ray); [Logging](./logging-procedure.md), [Metrics](./metrics-procedure.md) for correlation; [Observability Instrumentation](../feature-lifecycle/observability-instrumentation-procedure.md) or scope.  
**Decisions:** Owner (platform, SRE); format, propagation, sampling, retention.  
**Constraints:** Sampling and retention bounded; no PII in span attributes.

**Remediation:** Platform or format unclear → define minimal (W3C Trace Context, sampling); refine with platform.

---

### 4. Plan Requirement

**Plan includes:** Format, propagation, sampling, storage, retention, links to logging, metrics. **Output:** Tracing Plan.

---

### 5. Workflow

**Step 1: Define format and propagation.** Define trace format (e.g. W3C Trace Context); propagation across services (HTTP, messaging); sampling strategy. **Outputs:** Format; propagation; sampling.

**Step 2: Implement and store.** Instrument services to create and propagate spans; export to tracing platform; configure retention. **Outputs:** Tracing implemented; storage and retention.

**Step 3: Operate and link.** Operate tracing pipeline; ensure [Logging](./logging-procedure.md) includes trace id; [Metrics](./metrics-procedure.md) or [Alerting](./alerting-procedure.md) can use trace-derived data where applicable. **Outputs:** Operational tracing; links.

---

### 6. Output Contract

**Artifacts:** Trace format, propagation, sampling, storage, retention. **State:** Tracing operational. **Signals:** “Tracing defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Format and propagation defined; tracing implemented; logging correlation; retention configured. **Who approves:** Platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [Logging Procedure](./logging-procedure.md), [Metrics Procedure](./metrics-procedure.md), [Alerting Procedure](./alerting-procedure.md), [Incident Lifecycle](../incident-lifecycle/). **Depends on:** Tracing platform.

---

### 9. Definition of Done

- [ ] Format, propagation, sampling defined
- [ ] Tracing implemented; storage and retention configured
- [ ] Logging correlation; operational

---

### 10. Audit & Traceability

**Links to:** Trace config, platform, retention. **Audit trail:** Sampling, retention changes.

---

### 11. Exit States

**✅ Completed successfully** – Tracing operational. **⚠️ Blocked** – Platform or format missing; resolve and re-run. **❌ Aborted** – Tracing work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / SRE
