# Procedure: Rate Limit & Quota (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to handle rate limits and quotas when integrating with third-party APIs. It ensures we respect vendor limits, implement throttling and backoff, and avoid quota exhaustion so that integrations remain reliable and [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) are met.

**What problem it solves**

- Hitting vendor rate limits or quotas; integration failures or bans
- No throttling or backoff; burst traffic causes 429s or errors
- [Failure Mode Procedure](./failure-mode-procedure.md) or [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md) lack rate-limit context
- [Contract & SLA Procedure](./contract-sla-procedure.md) quotas not reflected in implementation

**What "success" looks like at the end**

Rate limit and quota handling defined and implemented with:
- Vendor limits and quotas documented; our usage and throttling strategy defined
- Throttling, backoff, and optional queuing implemented
- Monitoring and alerts for approaching or exceeded limits
- Links to [Contract & SLA](./contract-sla-procedure.md), [Failure Mode](./failure-mode-procedure.md), [Monitoring & Alerting](./monitoring-alerting-procedure.md)

---

### 2. Trigger

- New third-party integration; rate limits or quotas apply
- [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) or [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) require rate-limit handling
- Quota or limit changes; incidents from limit exhaustion
- [Contract & SLA Procedure](./contract-sla-procedure.md) defines quotas; implementation must align

---

### 3. Required Inputs

**Artifacts:** Vendor rate limits and quotas; [Contract & SLA](./contract-sla-procedure.md) if applicable; [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md); usage patterns (expected throughput).  
**Decisions:** Owner (backend/platform); throttling and backoff strategy.  
**Constraints:** Stay within vendor limits; handle 429/quotas gracefully.

**Remediation:** Vendor limits unknown → document “TBD”; implement conservative throttling and backoff; update when limits known.

---

### 4. Plan Requirement

**Plan includes:** Vendor limits, our strategy (throttle, backoff, queue), implementation, monitoring. **Output:** Rate Limit & Quota Plan.

---

### 5. Workflow

**Step 1: Document vendor limits and quotas.** Capture rate limits (per second/minute), quotas (daily/monthly), and any per-key or per-tenant caps. **Outputs:** Limits and quotas doc.

**Step 2: Define throttling and backoff.** Choose strategy (client-side throttle, exponential backoff, queue). Define behavior on 429 or quota exceeded; link to [Failure Mode Procedure](./failure-mode-procedure.md). **Outputs:** Throttling and backoff strategy.

**Step 3: Implement and monitor.** Implement throttling and backoff; add metrics and alerts per [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md) for limit approach or breach. **Outputs:** Implementation; monitoring and alerts.

---

### 6. Output Contract

**Artifacts:** Limits and quotas doc, throttling/backoff strategy, implementation, monitoring. **State:** Rate limit and quota handling operational. **Signals:** “Rate limit & quota handling defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Vendor limits documented; throttling and backoff implemented; monitoring in place. **Who approves:** Platform owner, integration owner.

---

### 8. Downstream Dependencies

**Output →:** [Failure Mode Procedure](./failure-mode-procedure.md), [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md), [Contract & SLA Procedure](./contract-sla-procedure.md). **Depends on:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md).

---

### 9. Definition of Done

- [ ] Vendor limits and quotas documented
- [ ] Throttling and backoff implemented
- [ ] Monitoring and alerts for limits in place

---

### 10. Audit & Traceability

**Links to:** Limits doc, implementation, monitoring. **Audit trail:** Strategy changes, incidents.

---

### 11. Exit States

**✅ Completed successfully** – Rate limit and quota handling defined and operational. **⚠️ Blocked** – Vendor limits unknown; implement conservative strategy and document. **❌ Aborted** – Rate-limit work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / Integration owner
