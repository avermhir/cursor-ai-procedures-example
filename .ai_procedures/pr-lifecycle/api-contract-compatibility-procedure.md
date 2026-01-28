# Procedure: API/Contract Compatibility

### 1. Purpose

**Why this procedure exists**

This procedure reviews API and contract changes in pull requests. It validates backwards compatibility, ensures alignment with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md), checks for breaking changes, and confirms OpenAPI/spec and implementation stay in sync.

**What problem it solves**

- Breaking API changes merged without coordination
- OpenAPI/spec and implementation drift
- Incompatible request/response changes
- Security regressions in API layer
- Consumers broken by contract changes

**What "success" looks like at the end**

An API/contract review that includes:
- API and contract changes identified and reviewed
- Backwards compatibility assessed; breaking changes documented
- OpenAPI/spec and implementation consistency verified
- API Security Standards compliance checked
- Findings documented and addressed or accepted
- PR approved from API/contract perspective or changes requested

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains API or contract changes (endpoints, request/response, OpenAPI/spec)
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags API/Contract review as required
- Reviewer performs API/contract-focused review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with API/contract changes
- [ ] **Code changes** – API handlers, DTOs, OpenAPI/spec, client usage
- [ ] **OpenAPI/spec** – Current and proposed API contract (if applicable)

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **API Security Standards** – Must align with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **API contract stability** – No breaking changes without explicit approval and communication

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete PR Preparation first
- **OpenAPI/spec missing** – Review implementation and docstrings; note spec update required

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through approval
- **Scope** – Endpoints, DTOs, and spec sections in scope
- **Reference** – API Security Standards, [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md) for compatibility rules
- **Validation points** – After compatibility check, after spec consistency check, before approval

**Plan must be reviewed before execution begins**

**Output:**
- API/Contract Compatibility Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define API/Contract Review Scope

**Purpose**
- Identify all API and contract changes in the PR

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes)

**Actions**
- List changed endpoints (path, method), DTOs, and OpenAPI/spec.
- Identify new, modified, or removed operations and schema.
- Note which consumers or clients are affected (if known).
- If no API/contract changes, document “No API/contract changes” and skip to Step 5 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no API/contract changes, proceed to Step 5

**Outputs**
- API/contract review scope
- List of affected endpoints and schema

**Failure Handling**
- **Failure:** Unclear if changes affect API/contract
  - **Action:** Treat as in-scope; review implementation and any spec

---

#### Step 2: Assess Backwards Compatibility and Breaking Changes

**Purpose**
- Determine if changes are backwards compatible; explicitly call out breaking changes

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (code changes, OpenAPI/spec)
- **Reference:** [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md)

**Actions**
- For each changed endpoint/schema:
  - **Compatible:** New optional fields, new endpoints, additive enum values, etc.
  - **Breaking:** Removed or renamed fields, changed types, removed endpoints, changed status codes or error shapes, changed required fields.
- Document each breaking change and affected consumers.
- If breaking: ensure deprecation/migration strategy is documented and approved (e.g. in ticket, ADR, or release notes).

**Decisions / Evaluations**
- **Decision:** Breaking changes identified and approved (or none)?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If unapproved breaking changes, block merge until strategy and approval

**Outputs**
- Compatibility assessment
- Breaking changes list (or “None”)
- Deprecation/migration notes if applicable

**Failure Handling**
- **Failure:** Unapproved breaking changes
  - **Action:** Document strategy, get approval, or revert breaking changes; re-review

---

#### Step 3: Verify OpenAPI/Spec and Implementation Consistency

**Purpose**
- Ensure spec and implementation stay in sync

**Inputs**
- **From:** Step 2 outputs
- **From:** Procedure Required Inputs (code changes, OpenAPI/spec)

**Actions**
- Compare OpenAPI/spec to implementation:
  - Paths, methods, request/response schema match.
  - Status codes, error responses, headers reflected.
- Ensure generated types (if any) match spec.
- Run contract tests or spec validation if available; fix drift.

**Decisions / Evaluations**
- **Decision:** Spec and implementation consistent?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, update spec or implementation and re-review

**Outputs**
- Spec/implementation consistency result
- Findings documented

**Failure Handling**
- **Failure:** Spec/implementation drift
  - **Action:** Align spec and implementation; re-run validation; re-review

---

#### Step 4: Review API Security and Standards Compliance

**Purpose**
- Check API changes against API Security Standards

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (code changes)
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)

**Actions**
- For new or changed endpoints:
  - **Auth:** Protected routes require authentication; no auth regressions.
  - **AuthZ:** Authorization enforced; no privilege escalation.
  - **Input validation:** Request body, query, params validated; injection-resistant.
  - **Errors:** No sensitive data in error payloads or headers.
- Note any gaps; defer deep security review to [Security Review Procedure](./security-review-procedure.md) if needed.

**Decisions / Evaluations**
- **Decision:** API security and standards compliance acceptable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, fix and re-review

**Outputs**
- API security/compliance review result
- Findings documented

**Failure Handling**
- **Failure:** Security or standards gaps
  - **Action:** Address gaps; re-review

---

#### Step 5: Document Findings and Approve or Request Changes

**Purpose**
- Summarize review and approve or request changes

**Inputs**
- **From:** Steps 2–4 outputs (or Step 1 skip)

**Actions**
- Compile API/contract review summary:
  - Scope, compatibility, spec consistency, security/compliance
  - Breaking changes and migration/deprecation
  - Findings and follow-ups
- **Approve** if no blocking issues.
- **Request changes** if blocking; list required fixes.
- Add review comment to PR.

**Decisions / Evaluations**
- **Decision:** Review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- API/contract review summary
- Approve or request changes on PR

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Artifacts produced:** Scope, compatibility assessment, spec consistency and security/compliance results, review summary.  
**State changes:** PR has API/contract review completed.  
**Signals emitted:** “API/contract review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Backwards compatibility assessed; breaking changes documented and approved
- [ ] OpenAPI/spec and implementation consistent
- [ ] API Security Standards compliance checked
- [ ] Findings documented and resolved or accepted

**Who can approve:** API/contract owner or designated tech lead

---

### 8. Downstream Dependencies

**Output → Input:** API/contract review result → PR workflow, [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md).  
**Related:** [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md), [Security Review Procedure](./security-review-procedure.md).

---

### 9. Definition of Done

- [ ] Scope defined or “no API/contract changes” documented
- [ ] Compatibility and breaking changes assessed
- [ ] Spec and implementation consistency verified
- [ ] API security and standards compliance reviewed
- [ ] Findings documented; blocking items resolved or accepted
- [ ] PR approved or changes requested from API/contract perspective

---

### 10. Audit & Traceability

**Links to:** PR, OpenAPI/spec, API Security Standards. **Audit trail:** Review date, reviewer, result, findings.

---

### 11. Exit States

**✅ Completed successfully** – Review done, no blocking findings, approved.  
**⚠️ Blocked** – Blocking findings; fix and re-review.  
**❌ Aborted** – PR closed or review no longer required.

---

**Status:** Active Procedure  
**Owner:** API/contract owner / Tech lead
