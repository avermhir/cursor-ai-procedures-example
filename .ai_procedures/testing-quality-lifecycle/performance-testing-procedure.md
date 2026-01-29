# Procedure: Performance Testing (Testing & Quality Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to plan, run, and interpret performance tests (load, stress, latency) per [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md) and product SLOs. It ensures performance regressions are detected and [CI Quality Gates](./ci-quality-gates-procedure.md) or release gates can include performance criteria where appropriate.

**What problem it solves**

- No performance testing; latency or throughput regressions reach production
- Ad-hoc or one-off runs; no baseline or trend
- [Test Plan Procedure](../feature-lifecycle/test-plan-procedure.md) or [Performance & Resilience](../feature-lifecycle/performance-resilience-procedure.md) lack lifecycle-level performance-test practices
- SLOs or [Observability SLO/SLA](../observability-operations-lifecycle/) not validated by performance tests

**What "success" looks like at the end**

Performance testing operational with:
- Scope (what to performance test), scenarios, and acceptance criteria (latency, throughput, error rate)
- Performance tests run regularly (CI or pre-release); baseline and trends tracked
- Results interpreted and acted on; regressions fixed or accepted with justification
- Links to [CI Quality Gates](./ci-quality-gates-procedure.md), [Observability & Operations](../observability-operations-lifecycle/), [Performance & Resilience](../feature-lifecycle/performance-resilience-procedure.md)

---

### 2. Trigger

- New or changed critical path; performance impact must be assessed per [Test Plan](../feature-lifecycle/test-plan-procedure.md) or [Performance & Resilience](../feature-lifecycle/performance-resilience-procedure.md)
- [CI Quality Gates](./ci-quality-gates-procedure.md) or release process include performance gates
- Production performance issue; need baseline and regression prevention
- SLO or capacity review; performance tests validate

---

### 3. Required Inputs

**Artifacts:** Scenarios and endpoints to test; SLO or performance targets; [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md); performance tooling (e.g. k6, Artillery, JMeter).  
**Decisions:** Owner (dev, QA, platform); run frequency and environment.  
**Constraints:** Non-production env for load tests; no production impact from test traffic.

**Remediation:** SLO or targets missing → define minimal (e.g. p95 latency, error rate); refine with product/SRE.

---

### 4. Plan Requirement

**Plan includes:** Scope, scenarios, targets, tooling, run frequency, CI/release integration. **Output:** Performance Testing Plan.

---

### 5. Workflow

**Step 1: Define scope and targets.** Document what to performance test (critical paths, APIs); define acceptance criteria (latency, throughput, error rate). Align with SLOs or [Observability SLO/SLA](../observability-operations-lifecycle/) where applicable. **Outputs:** Scope and targets.

**Step 2: Implement and run performance tests.** Implement load/stress/latency scenarios; run in non-production. Establish baseline; track trends. **Outputs:** Performance tests; baseline and results.

**Step 3: Integrate and act on results.** Run performance tests in CI or pre-release per [CI Quality Gates](./ci-quality-gates-procedure.md) where feasible. Interpret results; fix regressions or document accepted degradation. **Outputs:** CI/release integration; result interpretation and action process.

---

### 6. Output Contract

**Artifacts:** Performance test scenarios, results, baseline, trends. **State:** Performance testing operational. **Signals:** “Performance tests pass”; “Performance baseline met”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and targets defined; performance tests implemented and run; results interpreted and regressions addressed. **Who approves:** Tech lead, platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [CI Quality Gates Procedure](./ci-quality-gates-procedure.md), [Observability & Operations Lifecycle](../observability-operations-lifecycle/), [Performance & Resilience Procedure](../feature-lifecycle/performance-resilience-procedure.md). **Depends on:** [Testing Standards](../../.ai_standards/sdlc-standards/testing-standards.md).

---

### 9. Definition of Done

- [ ] Scope and targets defined
- [ ] Performance tests implemented and run; baseline and trends tracked
- [ ] Results interpreted; regressions fixed or accepted

---

### 10. Audit & Traceability

**Links to:** Performance scenarios, results, baseline, SLOs. **Audit trail:** Run history, regression fixes.

---

### 11. Exit States

**✅ Completed successfully** – Performance testing operational. **⚠️ Blocked** – Targets or env unclear; resolve and re-run. **❌ Aborted** – Performance testing work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Dev / QA / Platform / SRE
