# Procedure: Architecture Baseline

### 1. Purpose

**Why this procedure exists**

This procedure establishes a documented architecture baseline for a system or subsystem. It captures the current state (components, boundaries, tech stack, key decisions) so that future changes can be evaluated against a known baseline and drift can be detected.

**What problem it solves**

- No single source of truth for “current architecture”
- Drift from intended design not detected
- New work or refactors lack a clear baseline to compare against
- Onboarding and audits lack a clear architecture snapshot

**What "success" looks like at the end**

An architecture baseline that includes:
- Current components and boundaries documented
- Technology stack and key dependencies documented
- Key architectural decisions and constraints captured
- Baseline approved and stored; ready for ADR and change evaluation

---

### 2. Trigger

**What causes this procedure to be invoked**

- New system or major subsystem needs a baseline before further work
- Architecture has evolved and baseline is stale or missing
- Audit, compliance, or onboarding requires a current architecture snapshot
- [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md) or governance requires an established baseline

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **System or scope** – System, subsystem, or bounded context to baseline
- [ ] **Existing docs and code** – Current architecture docs, ADRs, codebase structure
- [ ] **Deployment and infra** – Deployment topology, environments, infra (if available)

**Decisions already made:**
- [ ] **Scope agreed** – What is in scope for the baseline (system, services, boundaries)

**Constraints:**
- [ ] **Accuracy** – Baseline must reflect actual state (not aspirational only)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing scope** – Define scope with stakeholders before starting
- **Missing docs** – Infer from codebase and deployment; document assumptions

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Ordered steps from scope through approval
- **Scope** – System/subsystem, components, boundaries
- **Sources** – Code, docs, deployment, interviews
- **Validation** – How baseline will be validated (review, walkthrough)
- **Risks & unknowns** – Gaps in knowledge, stale info

**Plan must be reviewed before execution begins**

**Output:**
- Architecture Baseline Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Scope and Gather Current State

**Purpose**
- Agree scope and collect current architecture information

**Inputs**
- **From:** Procedure Required Inputs (system/scope, existing docs, deployment)

**Actions**
- Define and document scope (system, services, bounded context).
- Gather current state: components, boundaries, tech stack, key dependencies, deployment topology.
- Review existing ADRs, docs, and code structure.
- Identify gaps and assumptions; document them.
- Produce draft baseline (components, boundaries, stack, constraints).

**Decisions / Evaluations**
- **Decision:** Is current state gathered and draft baseline complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, fill gaps or document assumptions and re-gather

**Outputs**
- Scope and current-state summary
- Draft architecture baseline

**Failure Handling**
- **Failure:** Critical gaps or conflicting information
  - **Action:** Resolve with stakeholders or document as known gap; re-gather

---

#### Step 2: Validate Baseline and Obtain Approval

**Purpose**
- Validate baseline against reality and obtain approval

**Inputs**
- **From:** Step 1 outputs (draft baseline)

**Actions**
- Validate draft against codebase and deployment (spot-check components, boundaries, stack).
- Walk through baseline with relevant stakeholders (tech lead, architects, ops).
- Incorporate feedback; update baseline.
- Obtain approval from defined authority (e.g. tech lead, architect).
- Store baseline in agreed location (wiki, docs, repo); record version and date.

**Decisions / Evaluations**
- **Decision:** Is baseline validated and approved?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, update and re-validate

**Outputs**
- Approved architecture baseline document
- Baseline stored and versioned

**Failure Handling**
- **Failure:** Approval withheld (e.g. inaccuracies)
  - **Action:** Correct baseline and re-submit for approval

---

### 6. Output Contract

**Artifacts produced:** Architecture baseline document (scope, components, boundaries, tech stack, constraints).  
**State changes:** Baseline established and approved; available for ADR and change evaluation.  
**Signals emitted:** “Architecture baseline established”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Scope defined and current state gathered
- [ ] Baseline validated against code/deployment
- [ ] Baseline approved and stored

**Who can approve:** Tech lead, architect, or designated owner

---

### 8. Downstream Dependencies

**Output → Input:** Architecture baseline → [ADR Procedure](./adr-procedure.md), [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md), refactor and decommission procedures.

---

### 9. Definition of Done

- [ ] Scope agreed and current state gathered
- [ ] Baseline document produced and validated
- [ ] Baseline approved and stored with version and date

---

### 10. Audit & Traceability

**Links to:** Baseline document, ADRs, scope definition. **Audit trail:** Baseline date, approver, version.

---

### 11. Exit States

**✅ Completed successfully** – Baseline established, validated, approved, stored.  
**⚠️ Blocked** – Missing scope, data, or approval; resolve and re-run.  
**❌ Aborted** – Scope cancelled or baseline no longer required; document reason.

---

**Status:** Active Procedure  
**Owner:** Tech lead / Architect
