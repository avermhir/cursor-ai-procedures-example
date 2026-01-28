# Procedure: Data/Migration Review

### 1. Purpose

**Why this procedure exists**

This procedure reviews database schema changes, migration scripts, and data access patterns in pull requests. It validates data safety, migration correctness, and alignment with [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md), reducing risk of data loss, corruption, or inconsistent schema across environments.

**What problem it solves**

- Schema or migration bugs merged and deployed
- Data loss or corruption from migrations
- Migrations not reversible or not tested
- Data access patterns that bypass design or cause performance issues
- Violations of data design standards
- Missing or incorrect indexes, constraints, or relationships

**What "success" looks like at the end**

A data/migration review that includes:
- Schema and migration changes reviewed
- Migration safety and reversibility assessed
- Data access patterns and indexing checked
- Alignment with Data Design Standards verified
- Data safety concerns documented and addressed
- PR approved from data perspective or changes requested

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains database schema changes, migrations, or significant data-access changes
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags Data/Migration Review as required
- Reviewer performs data/migration-focused review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with schema/migration/data-access changes
- [ ] **Code changes** – Migration files, schema definitions, repository/service code that touches data
- [ ] **Data design** – Data design document or schema spec (if applicable)

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **Data Design Standards** – Must align with [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)
- [ ] **Migration safety** – No destructive or irreversible migrations without explicit approval

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete PR Preparation first
- **Data design missing** – Review schema and migrations against Data Design Standards and project conventions only

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through approval
- **Scope** – Which migrations, schema changes, and data-access paths are in scope
- **Reference** – Data Design Standards, migration and naming conventions
- **Validation points** – After migration review, after data-access review, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Data/Migration Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Review Scope

**Purpose**
- Identify all schema, migration, and data-access changes in the PR

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes)

**Actions**
- List migration files (e.g. Prisma migrations, SQL, DynamoDB table changes)
- List schema or model changes (entities, DTOs, table definitions)
- List repository, service, or API code that touches data (queries, updates, deletes)
- Note which stores are affected (Postgres, DynamoDB, etc.)
- If no schema/migration/data-access changes, document “No data/migration changes” and skip to Step 5 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no data/migration changes, proceed to Step 5

**Outputs**
- Review scope (migrations, schema, data-access)
- List of relevant files

**Failure Handling**
- **Failure:** Unclear if changes affect data
  - **Action:** Treat as in-scope; review likely data touchpoints

---

#### Step 2: Review Migration Safety and Correctness

**Purpose**
- Ensure migrations are safe, reversible where required, and correctly ordered

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (migration files)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) – Migration Plan, Postgres/DynamoDB migration standards

**Actions**
- For each migration:
  - **Correctness:** SQL/DSL is valid; migrations apply cleanly (up and down if applicable).
  - **Safety:** No unintended data loss (e.g. `DROP` without backup, destructive `ALTER`).
  - **Reversibility:** Down migration exists and is correct, or justify why not.
  - **Ordering:** Migration order and dependencies are correct; no broken references.
  - **Idempotency:** Where required, migrations can be run repeatedly without error.
- Check for long-running or locking operations; ensure they are acceptable or mitigated.
- Document any concerns.

**Decisions / Evaluations**
- **Decision:** Migrations safe and correct?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, request fixes and re-review

**Outputs**
- Migration review result
- Findings documented

**Failure Handling**
- **Failure:** Unsafe or incorrect migrations
  - **Action:** Fix migrations, re-test up/down, re-review

---

#### Step 3: Review Schema and Data Design Alignment

**Purpose**
- Verify schema and model changes align with Data Design Standards and data design doc

**Inputs**
- **From:** Step 2 outputs
- **From:** Procedure Required Inputs (schema changes, data design)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)

**Actions**
- Check tables/entities:
  - Naming (tables, columns, indexes) per standards
  - Primary keys, foreign keys, constraints
  - Indexes for access patterns; no missing indexes for new queries
- Check relationships and cardinality match design.
- If using both Postgres and DynamoDB, check cross-store consistency and design alignment.
- Note any deviations and whether they are acceptable.

**Decisions / Evaluations**
- **Decision:** Schema and design alignment acceptable?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, align with design or update design and doc; re-review

**Outputs**
- Schema/design alignment result
- Findings documented

**Failure Handling**
- **Failure:** Significant misalignment
  - **Action:** Update schema or design; re-review

---

#### Step 4: Review Data Access Patterns and Queries

**Purpose**
- Ensure new or changed queries and data access are correct, efficient, and safe

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (code changes)

**Actions**
- Review data access in changed code:
  - Use of parameterized queries / ORM (no raw concatenation); avoid injection.
  - Appropriate use of indexes (no unnecessary full scans).
  - N+1 or similar inefficiencies; use of batching/joining where appropriate.
  - Transaction boundaries for multi-step updates; consistency and rollback.
- Check for proper error handling and logging (no sensitive data in logs).
- Check access control (e.g. tenant isolation, row-level security) if applicable.

**Decisions / Evaluations**
- **Decision:** Data access patterns and queries acceptable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, request fixes and re-review

**Outputs**
- Data access review result
- Findings documented

**Failure Handling**
- **Failure:** Unsafe or inefficient data access
  - **Action:** Refactor and re-review

---

#### Step 5: Document Findings and Approve or Request Changes

**Purpose**
- Summarize review, document findings, and approve or request changes

**Inputs**
- **From:** Steps 2–4 outputs (or Step 1 skip)

**Actions**
- Compile data/migration review summary:
  - Scope, migration safety, schema alignment, data access
  - Findings and follow-ups
- **Approve** if no blocking issues.
- **Request changes** if blocking issues; list required fixes.
- Add review comment to PR with summary.

**Decisions / Evaluations**
- **Decision:** Review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- Data/migration review summary
- Approve or request changes on PR

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Artifacts produced:**
- Review scope, migration safety, schema alignment, data-access results
- Data/migration review summary

**State changes:**
- PR has data/migration review completed (approve or request changes)

**Signals emitted:**
- “Data/migration review complete” – PR reviewed from data perspective

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Migrations reviewed for safety and correctness
- [ ] Schema aligned with Data Design Standards (and design doc if exists)
- [ ] Data access patterns and queries reviewed
- [ ] Findings documented and either resolved or explicitly accepted

**Who can approve:** Data/DBA reviewer or designated tech lead

---

### 8. Downstream Dependencies

**Output → Input:** Data/migration review result → PR review workflow, [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md)

---

### 9. Definition of Done

- [ ] Scope defined or “no data/migration changes” documented
- [ ] Migration safety and correctness reviewed
- [ ] Schema and design alignment reviewed
- [ ] Data access patterns and queries reviewed
- [ ] Findings documented; blocking items resolved or accepted
- [ ] PR approved or changes requested from data perspective

---

### 10. Audit & Traceability

**Links to:** PR, Data Design Standards, data design doc (if any). **Audit trail:** Review date, reviewer, result, findings.

---

### 11. Exit States

**✅ Completed successfully** – Review done, no blocking findings, approved.  
**⚠️ Blocked** – Blocking findings; fix and re-review.  
**❌ Aborted** – PR closed or review no longer required.

---

**Status:** Active Procedure  
**Owner:** Data/Database reviewer / Tech lead
