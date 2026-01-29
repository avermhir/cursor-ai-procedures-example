# Procedure: Failure Mode (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to handle third-party integration failures: timeouts, retries, circuit breakers, and fallbacks. It ensures integrations degrade gracefully and [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) and [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) failure-mode requirements are implemented.

**What problem it solves**

- No timeouts or retries; cascading failures or hung calls
- No circuit breaker; repeatedly calling failing vendors
- [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md) and [Rate Limit & Quota Procedure](./rate-limit-quota-procedure.md) lack failure-mode context
- User-facing errors or data inconsistency when vendor is down

**What "success" looks like at the end**

Failure-mode handling defined and implemented with:
- Timeouts, retries (with backoff), and circuit breaker (where appropriate) specified and implemented
- Fallback or graceful degradation defined and used
- Monitoring and alerts for failure modes
- Links to [Rate Limit & Quota](./rate-limit-quota-procedure.md), [Monitoring & Alerting](./monitoring-alerting-procedure.md), [Data Mapping & Privacy](./data-mapping-privacy-procedure.md) if fallback affects data

---

### 2. Trigger

- New third-party integration; failure handling not yet defined
- [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) or [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) require failure-mode design
- Incidents from vendor outages or latency; need better timeouts, retries, or circuit breakers
- [Contract & SLA Procedure](./contract-sla-procedure.md) or vendor behavior change

---

### 3. Required Inputs

**Artifacts:** Integration and vendor behavior; [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md); [Rate Limit & Quota](./rate-limit-quota-procedure.md) if applicable.  
**Decisions:** Owner (backend/platform); timeout, retry, and circuit-breaker thresholds.  
**Constraints:** No unbounded retries; circuit breaker to protect our system and vendor.

**Remediation:** Vendor behavior unclear → use conservative timeouts and retries; add circuit breaker; refine with observation.

---

### 4. Plan Requirement

**Plan includes:** Timeouts, retries, backoff, circuit breaker, fallback, monitoring. **Output:** Failure Mode Plan.

---

### 5. Workflow

**Step 1: Define timeouts, retries, and circuit breaker.** Set timeout per call; retry count and backoff (exponential or similar). Define circuit breaker (threshold, half-open, reset). Align with [Rate Limit & Quota](./rate-limit-quota-procedure.md) to avoid overwhelming vendor. **Outputs:** Timeout, retry, circuit-breaker spec.

**Step 2: Define fallback or degradation.** When circuit open or retries exhausted: fallback (cached, default, or degraded flow) or clear error to caller. Document data consistency implications; link [Data Mapping & Privacy](./data-mapping-privacy-procedure.md) if relevant. **Outputs:** Fallback or degradation behavior.

**Step 3: Implement and monitor.** Implement timeouts, retries, circuit breaker, fallback. Add metrics and alerts per [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md) for failures, circuit state, fallback use. **Outputs:** Implementation; monitoring and alerts.

---

### 6. Output Contract

**Artifacts:** Failure-mode spec (timeouts, retries, circuit breaker, fallback), implementation, monitoring. **State:** Failure handling operational. **Signals:** “Failure mode handling defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Timeouts, retries, circuit breaker, fallback defined and implemented; monitoring in place. **Who approves:** Platform owner, integration owner.

---

### 8. Downstream Dependencies

**Output →:** [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md), [Rate Limit & Quota Procedure](./rate-limit-quota-procedure.md), [Data Mapping & Privacy Procedure](./data-mapping-privacy-procedure.md) (if fallback affects data). **Depends on:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md).

---

### 9. Definition of Done

- [ ] Timeouts, retries, circuit breaker, fallback defined and implemented
- [ ] Monitoring and alerts for failure modes in place

---

### 10. Audit & Traceability

**Links to:** Failure-mode spec, implementation, monitoring. **Audit trail:** Incidents, spec changes.

---

### 11. Exit States

**✅ Completed successfully** – Failure-mode handling defined and operational. **⚠️ Blocked** – Thresholds or fallback unclear; implement conservative defaults and document. **❌ Aborted** – Failure-mode work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / Integration owner
