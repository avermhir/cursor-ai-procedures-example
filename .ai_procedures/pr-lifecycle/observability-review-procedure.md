# Procedure: Observability Review

### 1. Purpose

**Why this procedure exists**

This procedure reviews logging, metrics, tracing, and alerting changes in pull requests. It validates that observability coverage is adequate for operations and debugging and that changes align with observability standards so that production is observable and supportable after merge.

**What problem it solves**

- Insufficient or missing logging, metrics, or traces for new/changed behavior
- Sensitive data logged or exposed in metrics
- Alerting gaps or noisy alerts from changes
- Inconsistent observability patterns or standards
- Missing or incorrect correlation IDs, span context, or structured fields

**What "success" looks like at the end**

An observability review that includes:
- Logging, metrics, tracing, and alerting changes identified and reviewed
- Observability coverage and quality verified for changed behavior
- Sensitive data and PII handling checked
- Alignment with observability standards or conventions checked
- Findings documented and addressed or accepted
- PR approved from observability perspective or changes requested

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains logging, metrics, tracing, or alerting changes
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags Observability Review as required or recommended
- Reviewer performs observability-focused review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with observability-related changes
- [ ] **Code changes** – Logging, metrics, tracing, alerting config, dashboards
- [ ] **Observability standards or runbooks** – If project defines them

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **No sensitive data in logs/metrics** – PII, secrets, tokens must not be logged or exposed
- [ ] **Structured logging** – Use agreed format (e.g. JSON, level, message, context)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete PR Preparation first
- **Observability standards unclear** – Review against existing patterns and runbooks only

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through approval
- **Scope** – Logging, metrics, tracing, alerting files in scope
- **Reference** – Observability standards, runbooks, correlation/tracing conventions
- **Validation points** – After coverage check, after sensitive-data check, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Observability Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Observability Review Scope

**Purpose**
- Identify all observability-related changes in the PR

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes)

**Actions**
- List changed logging (log statements, log config, log levels).
- List changed metrics (counters, gauges, histograms, labels).
- List changed tracing (spans, context propagation, sampling).
- List changed alerting (alerts, thresholds, runbooks).
- List changed dashboards or visualization config if in repo.
- If no observability changes, document “No observability changes” and skip to Step 5 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no observability changes, proceed to Step 5

**Outputs**
- Observability review scope
- List of relevant files

**Failure Handling**
- **Failure:** Unclear if changes affect observability
  - **Action:** Treat as in-scope; review likely observability touchpoints

---

#### Step 2: Review Logging and Metrics Coverage

**Purpose**
- Ensure new or changed behavior has adequate logging and metrics for operations and debugging

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (code changes)

**Actions**
- **Logging:**
  - Check that critical paths (success, errors, retries) have appropriate log events.
  - Verify log level usage (e.g. error for failures, info for key events, debug for detail).
  - Check for structured fields (request ID, user ID, operation) where needed.
- **Metrics:**
  - Check that key operations or SLIs have metrics (latency, throughput, errors).
  - Verify metric names and labels follow project conventions.
  - Ensure new metrics are documented or discoverable.
- Document gaps or recommendations.

**Decisions / Evaluations**
- **Decision:** Coverage adequate for operations and debugging?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, add logging/metrics or document accepted gap; re-review

**Outputs**
- Logging and metrics coverage result
- Findings documented

**Failure Handling**
- **Failure:** Critical path without logs or metrics
  - **Action:** Add minimum observability or document and track follow-up

---

#### Step 3: Review Sensitive Data and Tracing

**Purpose**
- Ensure no sensitive data in logs/metrics and tracing is correct and safe

**Inputs**
- **From:** Step 2 outputs
- **From:** Procedure Required Inputs (code changes)

**Actions**
- **Sensitive data:**
  - Confirm no PII, secrets, tokens, or full request/response bodies in log messages or metric labels.
  - Check for redaction or hashing where needed.
- **Tracing:**
  - Verify span names and attributes do not expose sensitive data.
  - Check context propagation (trace ID, span ID) where applicable.
- Document any concerns.

**Decisions / Evaluations**
- **Decision:** No sensitive data exposed; tracing acceptable?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, fix and re-review

**Outputs**
- Sensitive-data and tracing review result
- Findings documented

**Failure Handling**
- **Failure:** Sensitive data in logs/metrics/traces
  - **Action:** Remove or redact; do not approve until fixed

---

#### Step 4: Review Alerting and Standards

**Purpose**
- Check alerting changes and alignment with observability standards or conventions

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (code changes, observability standards)

**Actions**
- **Alerting:**
  - If alerts added/changed: verify thresholds, runbooks, and severity are reasonable.
  - Check for alert fatigue (too many or duplicate alerts).
  - Ensure new alerts are actionable and documented.
- **Standards:**
  - Naming, structure, and patterns per project observability standards or conventions.
  - Correlation IDs, log levels, and metric naming consistent.
- Document findings.

**Decisions / Evaluations**
- **Decision:** Alerting and standards acceptable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, fix and re-review

**Outputs**
- Alerting and standards review result
- Findings documented

**Failure Handling**
- **Failure:** Critical standards or alerting gaps
  - **Action:** Fix and re-review

---

#### Step 5: Document Findings and Approve or Request Changes

**Purpose**
- Summarize review and approve or request changes

**Inputs**
- **From:** Steps 2–4 outputs (or Step 1 skip)

**Actions**
- Compile observability review summary:
  - Scope, coverage, sensitive data, tracing, alerting, standards
  - Findings and follow-ups
- **Approve** if no blocking issues.
- **Request changes** if blocking; list required fixes.
- Add review comment to PR.

**Decisions / Evaluations**
- **Decision:** Review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- Observability review summary
- Approve or request changes on PR

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Artifacts produced:** Scope, coverage, sensitive-data, tracing, alerting/standards results, review summary.  
**State changes:** PR has observability review completed.  
**Signals emitted:** “Observability review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Logging and metrics coverage reviewed
- [ ] Sensitive data and tracing reviewed
- [ ] Alerting and standards reviewed
- [ ] Findings documented and resolved or accepted

**Who can approve:** DevOps/SRE or designated observability reviewer

---

### 8. Downstream Dependencies

**Output → Input:** Observability review result → PR workflow, [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md).

---

### 9. Definition of Done

- [ ] Scope defined or “no observability changes” documented
- [ ] Logging and metrics coverage reviewed
- [ ] Sensitive data and tracing reviewed
- [ ] Alerting and standards reviewed
- [ ] Findings documented; blocking items resolved or accepted
- [ ] PR approved or changes requested from observability perspective

---

### 10. Audit & Traceability

**Links to:** PR, observability standards (if any). **Audit trail:** Review date, reviewer, result, findings.

---

### 11. Exit States

**✅ Completed successfully** – Review done, no blocking findings, approved.  
**⚠️ Blocked** – Blocking findings; fix and re-review.  
**❌ Aborted** – PR closed or review no longer required.

---

**Status:** Active Procedure  
**Owner:** DevOps / SRE / Observability reviewer
