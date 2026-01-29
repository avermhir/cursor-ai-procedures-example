# Procedure: Performance Review

### 1. Purpose

**Why this procedure exists**

This procedure reviews performance implications of pull request changes. It validates that performance requirements are considered, that obvious regressions or bottlenecks are avoided, and that performance-related tests or evidence are adequate so that performance is maintained or improved before merge.

**What problem it solves**

- Performance regressions merged without review
- Missing or inadequate performance tests or benchmarks for critical paths
- Obvious bottlenecks (N+1, blocking I/O, unbounded loops) not caught
- Resource usage (CPU, memory, I/O) not considered for new or changed code
- No performance acceptance criteria or evidence for performance-sensitive changes

**What "success" looks like at the end**

A performance review that includes:
- Performance-sensitive changes identified and reviewed
- Performance requirements and acceptance criteria considered
- Code and design checked for obvious bottlenecks and regressions
- Performance test results or evidence reviewed (where applicable)
- Findings documented and addressed or accepted
- PR approved from performance perspective or changes requested

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains performance-sensitive changes (algorithms, I/O, queries, caching, concurrency)
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags Performance Review as required or recommended
- Reviewer performs performance-focused review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with performance-related changes
- [ ] **Code changes** – Code that affects latency, throughput, or resource usage
- [ ] **Performance requirements or baselines** – If project defines them (SLAs, benchmarks)

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **No obvious regressions** – Critical paths must not regress without explicit acceptance
- [ ] **Performance tests** – New performance-critical code should have tests or benchmarks where feasible

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete PR Preparation first
- **Performance requirements unclear** – Review against code patterns and best practices only

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through approval
- **Scope** – Code paths and components in scope for performance review
- **Reference** – Performance requirements, baselines, or benchmarks (if any)
- **Validation points** – After code/design review, after test/evidence review, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Performance Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Performance Review Scope

**Purpose**
- Identify all performance-sensitive changes in the PR

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes)

**Actions**
- List changed code paths that affect latency, throughput, or resource usage (e.g. APIs, queries, loops, I/O, caching).
- Note new or changed algorithms, data structures, or concurrency.
- Note new or changed external calls, DB queries, or file/network I/O.
- If no performance-sensitive changes, document “No performance-sensitive changes” and skip to Step 5 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no performance-sensitive changes, proceed to Step 5

**Outputs**
- Performance review scope
- List of relevant files and paths

**Failure Handling**
- **Failure:** Unclear if changes affect performance
  - **Action:** Treat as in-scope; review likely performance touchpoints

---

#### Step 2: Review Code and Design for Performance

**Purpose**
- Check for obvious bottlenecks, regressions, and anti-patterns

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (code changes)

**Actions**
- **Bottlenecks and anti-patterns:**
  - N+1 queries or repeated I/O in loops.
  - Blocking I/O on hot paths; missing async or batching.
  - Unbounded loops, collections, or allocations in hot paths.
  - Missing or incorrect caching where it would help.
- **Resource usage:**
  - Unbounded memory growth, large allocations, or connection leaks.
  - CPU-heavy work on critical path without justification.
- **Design:**
  - Concurrency and locking; risk of deadlocks or contention.
  - Algorithm complexity (e.g. O(n²) where n can be large).
- Document concerns and recommendations.

**Decisions / Evaluations**
- **Decision:** No obvious regressions or critical bottlenecks?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, fix or document accepted risk; re-review

**Outputs**
- Code/design performance result
- Findings documented

**Failure Handling**
- **Failure:** Critical bottleneck or regression
  - **Action:** Fix or add test/benchmark and re-review

---

#### Step 3: Review Performance Tests and Evidence

**Purpose**
- Ensure performance-critical changes have adequate tests or evidence

**Inputs**
- **From:** Step 2 outputs
- **From:** Procedure Required Inputs (code changes, performance requirements)

**Actions**
- **Tests and benchmarks:**
  - Check for unit tests that cover performance-critical logic.
  - Check for benchmarks, load tests, or performance tests if project uses them.
  - If requirements or baselines exist, verify they are met or regression is documented.
- **Evidence:**
  - PR description or comments: any manual or automated performance results.
  - Profiling or monitoring evidence if provided.
- Document gaps or follow-ups.

**Decisions / Evaluations**
- **Decision:** Performance tests/evidence adequate or gap accepted?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, add tests/evidence or document and track follow-up; re-review

**Outputs**
- Performance test/evidence review result
- Findings documented

**Failure Handling**
- **Failure:** Performance regression with no acceptance
  - **Action:** Fix regression or add test and document; do not approve without resolution

---

#### Step 4: Review Against Performance Standards

**Purpose**
- Check alignment with project performance standards or conventions

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (performance requirements)

**Actions**
- **Standards:**
  - SLAs, latency/throughput targets, or resource limits per project.
  - Naming, instrumentation, or benchmarking conventions.
- **Documentation:**
  - Performance implications or trade-offs documented in PR or code.
- Document findings.

**Decisions / Evaluations**
- **Decision:** Standards and documentation acceptable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, fix and re-review

**Outputs**
- Standards review result
- Findings documented

**Failure Handling**
- **Failure:** Significant standards gap
  - **Action:** Fix and re-review

---

#### Step 5: Document Findings and Approve or Request Changes

**Purpose**
- Summarize review and approve or request changes

**Inputs**
- **From:** Steps 2–4 outputs (or Step 1 skip)

**Actions**
- Compile performance review summary:
  - Scope, code/design, tests/evidence, standards
  - Findings and follow-ups
- **Approve** if no blocking issues.
- **Request changes** if blocking; list required fixes.
- Add review comment to PR.

**Decisions / Evaluations**
- **Decision:** Review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- Performance review summary
- Approve or request changes on PR

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Artifacts produced:** Scope, code/design, tests/evidence, standards results, review summary.  
**State changes:** PR has performance review completed.  
**Signals emitted:** “Performance review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Code and design reviewed for performance
- [ ] Performance tests or evidence reviewed
- [ ] Standards and documentation reviewed
- [ ] Findings documented and resolved or accepted

**Who can approve:** Performance owner or designated reviewer

---

### 8. Downstream Dependencies

**Output → Input:** Performance review result → PR workflow, [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md).

---

### 9. Definition of Done

- [ ] Scope defined or “no performance-sensitive changes” documented
- [ ] Code and design reviewed for performance
- [ ] Performance tests or evidence reviewed
- [ ] Standards and documentation reviewed
- [ ] Findings documented; blocking items resolved or accepted
- [ ] PR approved or changes requested from performance perspective

---

### 10. Audit & Traceability

**Links to:** PR, performance requirements (if any). **Audit trail:** Review date, reviewer, result, findings.

---

### 11. Exit States

**✅ Completed successfully** – Review done, no blocking findings, approved.  
**⚠️ Blocked** – Blocking findings; fix and re-review.  
**❌ Aborted** – PR closed or review no longer required.

---

**Status:** Active Procedure  
**Owner:** Performance owner / Tech lead / Designated reviewer
