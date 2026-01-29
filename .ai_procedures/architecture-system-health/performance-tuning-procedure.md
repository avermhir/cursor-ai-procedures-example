# Procedure: Performance Tuning

### 1. Purpose

**Why this procedure exists**

This procedure guides systematic performance tuning of a system or component. It ensures tuning is goal-driven, measured, and validated so that improvements are real and regressions are avoided.

**What problem it solves**

- Tuning without clear goals or baselines
- Changes that improve one metric and regress another
- No measurement before/after; “faster” unverified
- Optimization in the wrong place (e.g. wrong bottleneck)

**What "success" looks like at the end**

Performance tuning that includes:
- Goals and baselines defined; bottlenecks or targets identified
- Tuning changes implemented and measured
- Improvement verified; regressions checked; results documented

---

### 2. Trigger

**What causes this procedure to be invoked**

- Performance issue or goal identified (e.g. latency, throughput, resource use)
- [Tech Debt Intake Procedure](./tech-debt-intake-procedure.md) or backlog assigns performance work
- [Performance Review Procedure](../pr-lifecycle/performance-review-procedure.md) or monitoring flags degradation
- SLA or capacity planning requires improvement

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Performance goal** – What to improve (e.g. p99 latency &lt; X ms, throughput &gt; Y, reduce CPU Z%)
- [ ] **Baseline** – Current metrics (latency, throughput, CPU, memory, I/O) from monitoring or benchmarks
- [ ] **Scope** – Component, service, or code path in scope
- [ ] **Test or benchmark** – Way to reproduce load and measure (benchmark, load test, production metrics)

**Decisions already made:**
- [ ] **Tuning approved** – Work is scheduled and prioritized

**Constraints:**
- [ ] **No functional regressions** – Tuning must not break correctness; tests must pass

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing baseline** – Run current system under load and record metrics; establish baseline first
- **Missing benchmark** – Add minimal benchmark or use production metrics; document method

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – From baseline and bottleneck analysis through implementation and validation
- **Goal and baseline** – Target metrics and current metrics
- **Approach** – Hypothesis (e.g. “cache X will reduce DB load”); tuning steps
- **Measurement** – How and when metrics will be collected (before/after)
- **Risks** – Regressions (e.g. memory vs CPU trade-off), flaky benchmarks

**Plan must be reviewed before execution begins**

**Output:**
- Performance Tuning Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Establish Baseline and Identify Bottleneck or Target

**Purpose**
- Confirm current performance and where to focus tuning

**Inputs**
- **From:** Procedure Required Inputs (goal, baseline, scope, test/benchmark)

**Actions**
- Run benchmark or collect production metrics for scope; record baseline (latency, throughput, CPU, memory, I/O as relevant).
- Compare to goal; confirm gap and that tuning is justified.
- Identify bottleneck or target (e.g. DB query, lock contention, allocation hot spot) via profiling, metrics, or hypothesis.
- Document baseline and bottleneck/target; get plan approved if significant change.

**Decisions / Evaluations**
- **Decision:** Is baseline established and bottleneck/target identified?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, improve measurement or profiling and re-run

**Outputs**
- Baseline metrics documented
- Bottleneck or target identified
- Tuning approach (hypothesis) documented

**Failure Handling**
- **Failure:** No clear bottleneck or baseline unstable
  - **Action:** Stabilize benchmark or metrics; re-profile; narrow scope

---

#### Step 2: Implement Tuning and Validate

**Purpose**
- Apply tuning and verify improvement without regressions

**Inputs**
- **From:** Step 1 outputs (baseline, bottleneck, approach)

**Actions**
- Implement tuning (code, config, or infra change) per plan.
- Run same benchmark or collect same metrics; record after values.
- Verify improvement toward goal; check for regressions (e.g. memory up when latency down).
- Run functional tests; ensure no correctness regressions.
- Document results (before/after, methodology); update runbooks or ADRs if behavior changed.
- If goal not met: iterate (refine hypothesis, try different tuning) or document limitation and follow-up.

**Decisions / Evaluations**
- **Decision:** Is goal met (or clearly improved) with no unacceptable regressions?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, iterate or document and hand off follow-up

**Outputs**
- Tuning implemented and measured
- Results documented (before/after, methodology)
- Functional tests passing; regressions checked

**Failure Handling**
- **Failure:** Regression or no improvement
  - **Action:** Revert or adjust tuning; re-measure; do not ship regressions

---

### 6. Output Contract

**Artifacts produced:** Tuning change(s), before/after metrics, results summary.  
**State changes:** Performance improved per goal; baseline and methodology documented.  
**Signals emitted:** “Performance tuning complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Baseline and goal defined; bottleneck/target identified
- [ ] Tuning implemented and measured; improvement verified
- [ ] No functional regressions; results documented

**Who can approve:** Tech lead or performance owner

---

### 8. Downstream Dependencies

**Output → Input:** Results and methodology → Monitoring, capacity planning, [Tech Debt Intake Procedure](./tech-debt-intake-procedure.md) (close debt item if applicable).

---

### 9. Definition of Done

- [ ] Baseline and bottleneck/target documented
- [ ] Tuning implemented and measured
- [ ] Improvement verified; regressions checked; results documented

---

### 10. Audit & Traceability

**Links to:** Tuning plan, PR(s), benchmark or metrics, runbooks. **Audit trail:** Before/after metrics, date, owner.

---

### 11. Exit States

**✅ Completed successfully** – Goal met or clearly improved; no regressions; documented.  
**⚠️ Blocked** – Missing baseline or benchmark; resolve and re-run.  
**❌ Aborted** – Tuning cancelled or not beneficial; document reason and results.

---

**Status:** Active Procedure  
**Owner:** Tech lead / Performance owner
