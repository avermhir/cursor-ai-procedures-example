# Procedure: Backwards Compatibility (PR Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure reviews pull requests for backwards compatibility. It ensures no unapproved breaking changes are introduced, validates deprecation and migration strategy when breaking changes are intentional, and coordinates with [API Lifecycle Backwards Compatibility Procedure](../api-lifecycle/backwards-compatibility-procedure.md) and [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md) so that compatibility is explicitly checked at PR level.

**What problem it solves**

- Breaking changes merged without approval or migration plan
- Consumers broken by API, data, or behavior changes
- Deprecation or migration strategy missing or unclear
- Inconsistent compatibility checks across PRs

**What "success" looks like at the end**

A backwards-compatibility review that includes:
- Compatibility impact of PR changes assessed
- Breaking changes identified and either rejected or approved with strategy
- Migration/deprecation requirements documented when applicable
- PR approved from compatibility perspective or changes requested

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR may affect consumers (API, data, config, behavior)
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags Backwards Compatibility review as required
- PR contains API, schema, or contract changes
- Reviewer performs compatibility-focused review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with potentially breaking changes
- [ ] **Code changes** – API, schema, config, or behavior changes
- [ ] **Change summary & risk** – From [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) (if run)
- [ ] **Breaking changes list** – From PR description or [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md) (if run)

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **No unapproved breaking changes** – Breaking changes require explicit approval and migration/deprecation strategy
- [ ] **Compatibility policy** – Follow project compatibility policy (e.g. semver, compatibility windows)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete PR Preparation first
- **Breaking changes unclear** – Run [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md) or manually assess; document assumptions

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through approval
- **Scope** – API, data, config, behavior in scope for compatibility
- **Reference** – [API Lifecycle Backwards Compatibility Procedure](../api-lifecycle/backwards-compatibility-procedure.md), [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md)
- **Validation points** – After compatibility assessment, after migration/deprecation check, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Backwards Compatibility Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Compatibility Review Scope

**Purpose**
- Identify what could affect compatibility (API, data, config, behavior)

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes, change summary)

**Actions**
- List areas that affect compatibility:
  - **API:** Endpoints, request/response schema, status codes, errors.
  - **Data:** Schema, migrations, stored data shape.
  - **Config:** Env vars, feature flags, config keys, defaults.
  - **Behavior:** Semantics, side effects, invariants.
- Note known consumers (services, clients, versions) if available.
- If no compatibility-relevant changes, document “No compatibility impact” and skip to Step 5 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no compatibility impact, proceed to Step 5

**Outputs**
- Compatibility review scope
- List of compatibility-relevant areas

**Failure Handling**
- **Failure:** Unclear if changes affect compatibility
  - **Action:** Treat as in-scope; perform lightweight compatibility check

---

#### Step 2: Assess Breaking vs. Non-Breaking Changes

**Purpose**
- Classify changes as breaking or non-breaking and list them explicitly

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (code changes, breaking changes list)
- **Reference:** [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md), [API Lifecycle Backwards Compatibility Procedure](../api-lifecycle/backwards-compatibility-procedure.md)

**Actions**
- For each compatibility-relevant change:
  - **Non-breaking:** Additive (new optional fields, new endpoints), clarifications, better errors without changing contract.
  - **Breaking:** Removals, renames, type changes, changed required fields, changed behavior.
- Reuse breaking changes from [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md) if already run.
- Document each breaking change and affected surface (API, data, config, behavior).

**Decisions / Evaluations**
- **Decision:** Breaking vs. non-breaking classification complete?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, complete classification

**Outputs**
- Breaking changes list (or “None”)
- Non-breaking changes noted

**Failure Handling**
- **Failure:** Ambiguous breaking change
  - **Action:** Treat as breaking; require explicit acceptance and strategy

---

#### Step 3: Verify Migration or Deprecation Strategy

**Purpose**
- Ensure every intentional breaking change has an approved strategy

**Inputs**
- **From:** Step 2 outputs (breaking changes)
- **From:** Procedure Required Inputs (PR description, ticket)

**Actions**
- For each breaking change:
  - **Deprecation:** Old surface deprecated with timeline; consumers notified.
  - **Migration:** Migration path documented (e.g. new API, data migration, config changes).
  - **Communication:** Release notes, changelog, or consumer comms planned.
- Check that strategy is documented (in ticket, ADR, or PR) and approved per project policy.
- If breaking changes exist but no strategy: **block** until strategy is defined and approved.

**Decisions / Evaluations**
- **Decision:** All breaking changes have an approved migration/deprecation strategy?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, require strategy and approval; re-review

**Outputs**
- Migration/deprecation verification result
- Gaps documented (if any)

**Failure Handling**
- **Failure:** Breaking changes without strategy
  - **Action:** Do not approve; add strategy and approval, then re-review

---

#### Step 4: Check Compatibility Policy and Impact

**Purpose**
- Ensure PR aligns with project compatibility policy and document impact

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (PR, code changes)

**Actions**
- Apply project compatibility policy (e.g. semver, compatibility windows, consumer contracts).
- Assess impact on known consumers; note outreach or rollout requirements.
- Confirm versioning or feature flags are updated if required by policy.

**Decisions / Evaluations**
- **Decision:** Policy and impact acceptable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, align with policy or get exception; re-review

**Outputs**
- Policy and impact check result
- Follow-ups documented (e.g. release notes, consumer comms)

**Failure Handling**
- **Failure:** Policy violation or unclear impact
  - **Action:** Resolve policy alignment and impact; re-review

---

#### Step 5: Document Findings and Approve or Request Changes

**Purpose**
- Summarize compatibility review and approve or request changes

**Inputs**
- **From:** Steps 2–4 outputs (or Step 1 skip)

**Actions**
- Compile backwards-compatibility review summary:
  - Scope, breaking vs. non-breaking, migration/deprecation, policy, impact
  - Findings and follow-ups
- **Approve** if no unapproved breaking changes and strategy exists where required.
- **Request changes** if blocking; list required fixes (e.g. add migration, document deprecation).
- Add review comment to PR.

**Decisions / Evaluations**
- **Decision:** Review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- Backwards-compatibility review summary
- Approve or request changes on PR

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Artifacts produced:** Scope, breaking vs. non-breaking, migration/deprecation verification, policy/impact check, review summary.  
**State changes:** PR has backwards-compatibility review completed.  
**Signals emitted:** “Backwards-compatibility review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Compatibility scope defined
- [ ] Breaking vs. non-breaking assessed
- [ ] Migration/deprecation strategy verified for all breaking changes
- [ ] Compatibility policy and impact checked
- [ ] Findings documented and resolved or accepted

**Who can approve:** API/contract owner, tech lead, or designated compatibility reviewer

---

### 8. Downstream Dependencies

**Output → Input:** Compatibility review result → PR workflow, [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md).  
**Related:** [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md), [API Lifecycle Backwards Compatibility Procedure](../api-lifecycle/backwards-compatibility-procedure.md).

---

### 9. Definition of Done

- [ ] Scope defined or “no compatibility impact” documented
- [ ] Breaking vs. non-breaking assessed
- [ ] Migration/deprecation strategy verified for breaking changes
- [ ] Policy and impact checked
- [ ] Findings documented; blocking items resolved or accepted
- [ ] PR approved or changes requested from compatibility perspective

---

### 10. Audit & Traceability

**Links to:** PR, API/Contract Compatibility procedure, API Lifecycle Backwards Compatibility procedure. **Audit trail:** Review date, reviewer, result, findings.

---

### 11. Exit States

**✅ Completed successfully** – Review done, no unapproved breaking changes, approved.  
**⚠️ Blocked** – Unapproved breaking changes or missing strategy; fix and re-review.  
**❌ Aborted** – PR closed or review no longer required.

---

**Status:** Active Procedure  
**Owner:** API/contract owner / Tech lead / Compatibility reviewer
