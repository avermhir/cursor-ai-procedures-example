# Procedure: Schema Change (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure governs Postgres schema changes (migrations): creating, altering, or dropping tables, columns, indexes, and constraints. It ensures migrations are designed, reviewed, tested, and applied safely so that schema stays consistent and data is not lost or corrupted.

**What problem it solves**

- Ad-hoc or untested migrations; production schema drift or data loss
- Migrations not reviewed against [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) or data design
- No rollback or backwards-compatible strategy; deployments break consumers
- Multiple environments out of sync; migration order or dependencies wrong

**What "success" looks like at the end**

Schema change complete with:
- Migration designed and reviewed against Data Design Standards and [Data Ownership & Source-of-Truth](./data-ownership-source-of-truth-procedure.md)
- Migration tested (e.g. apply/rollback) in non-production
- Migration applied in target environment(s); schema consistent
- [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) or [Data Consistency Procedure](./data-consistency-procedure.md) invoked if data backfill or cross-store sync needed

---

### 2. Trigger

**What causes this procedure to be invoked**

- Feature work requires new or changed Postgres schema (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md))
- Refactor or tech debt; schema simplification or index changes
- [Query/Index Review Procedure](./query-index-review-procedure.md) recommends index or schema changes
- Compliance or [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) requires schema support

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Data design or migration spec** – What to change (tables, columns, indexes, constraints) and why; from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) or equivalent
- [ ] **Data Design Standards** – [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) (naming, types, constraints, migration rules)
- [ ] **Current schema** – Existing Postgres schema (migration history, current state) in target environment
- [ ] **Migration tooling** – Tool and format (e.g. Prisma, Flyway, raw SQL) and env-specific apply process

**Decisions already made:**
- [ ] **Data owner approval** – Owner (from [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md)) or delegate has approved schema change
- [ ] **Backwards compatibility** – Strategy for deploy order (e.g. additive-first, expand/contract) and rollback

**Constraints:**
- [ ] **No destructive change without backup** – Per Data Design Standards; [Backup & Restore Procedure](./backup-restore-procedure.md) if needed
- [ ] **Migration order** – Dependencies between migrations; apply order defined

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Data design missing** – Document migration spec (what, why, rollback); align with Data Design Standards; get owner approval
- **Backwards compatibility unclear** – Define expand/contract or additive-only approach; document rollback

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Design, review, implement migration, test, apply, verify; backfill if needed
- **Procedures to be invoked** – [Backfill / Reindex Procedure](./backfill-reindex-procedure.md), [Data Consistency Procedure](./data-consistency-procedure.md) (if cross-store), [Backup & Restore Procedure](./backup-restore-procedure.md) (if required)
- **Dependencies between steps** – Design → Review → Implement → Test → Apply → Verify
- **Risks & unknowns** – Long-running migration, lock time, rollback complexity
- **Validation points** – After review, after test, after apply

**Plan must be reviewed before execution begins**

**Output:**
- Schema Change Plan (migrations, order, rollback, backfill)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Design Migration

**Purpose**
- Produce migration(s) that implement the schema change per Data Design Standards

**Inputs**
- **From:** Procedure Required Inputs (data design, Data Design Standards, current schema)

**Actions**
- Draft migration(s): CREATE/ALTER/DROP for tables, columns, indexes, constraints.
- Follow naming, types, and constraints from [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md).
- Prefer additive, backwards-compatible changes (e.g. add column nullable, backfill, then make NOT NULL in later migration).
- Define rollback migration(s) where feasible (e.g. reversible ALTERs); document irreversible steps.
- Sequence migrations (dependencies, apply order).

**Decisions / Evaluations**
- **Go:** Migration(s) designed; rollback considered → Step 2  
- **No-Go:** Redesign for safety or compatibility; re-review  
- **Destructive** – Ensure [Backup & Restore Procedure](./backup-restore-procedure.md) or backup step before apply; explicit approval

**Outputs**
- Migration script(s) and rollback script(s)
- Migration order and dependencies

**Failure Handling**
- **Failure:** Irreversible change without backup  
  - **Action:** Do not proceed; add backup step or redesign

---

#### Step 2: Review and Approve

**Purpose**
- Review migration against Data Design Standards and data design; obtain approval

**Inputs**
- **From:** Step 1 (migrations); data owner; [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)

**Actions**
- Review migrations for correctness, naming, constraints, and safety (no unintended DROP, destructive ALTER without backup).
- Check alignment with data design and [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md).
- PR or equivalent review; data owner or delegate approval.
- [PR Lifecycle Data/Migration Review](../pr-lifecycle/data-migration-review-procedure.md) applies when migration is in a PR.

**Decisions / Evaluations**
- **Go:** Review passed; approved → Step 3  
- **No-Go:** Address feedback; re-review  
- **Blocked** – Fix blocking issues before apply

**Outputs**
- Reviewed and approved migration(s)
- Review record (PR, sign-off)

**Failure Handling**
- **Failure:** Review finds safety or standards violation  
  - **Action:** Fix migration; re-review; do not apply until approved

---

#### Step 3: Test Migration (Non-Production)

**Purpose**
- Apply and, if applicable, rollback migration in non-production; verify schema and app behavior

**Inputs**
- **From:** Step 2 (approved migrations); migration tooling; non-prod environment

**Actions**
- Apply migration(s) in non-production (e.g. dev, staging) using same tooling and order as production.
- Run rollback if rollback migration exists; verify schema reverts correctly.
- Run app and data-access tests; ensure no regressions.
- Measure apply duration and lock impact if relevant for production planning.

**Decisions / Evaluations**
- **Go:** Test passed; duration and impact acceptable → Step 4  
- **No-Go:** Fix migration or rollback; re-test  
- **Long-running** – Plan for maintenance window or use safe online migration approach per tooling

**Outputs**
- Migration tested successfully; rollback verified if applicable
- Duration and impact notes for production

**Failure Handling**
- **Failure:** Apply or rollback fails in non-prod  
  - **Action:** Fix migration; re-test; do not apply to production

---

#### Step 4: Apply in Target Environment(s)

**Purpose**
- Apply migration(s) in target environment(s) (e.g. staging, production)

**Inputs**
- **From:** Step 3 (tested migrations); migration tooling; target environment
- **From:** [Backup & Restore Procedure](./backup-restore-procedure.md) backup if required (destructive change)

**Actions**
- Take backup if required (destructive change) per [Backup & Restore Procedure](./backup-restore-procedure.md) or org policy.
- Apply migration(s) in order using standard tooling and process (e.g. deploy pipeline, runbook).
- Monitor apply; if failure, execute rollback if defined and do not leave schema half-applied.
- Document apply (time, environment, outcome).

**Decisions / Evaluations**
- **Go:** Migration applied successfully → Step 5  
- **No-Go:** Roll back if possible; investigate; fix and re-test before retry  
- **Partial failure** – Roll back; assess data impact; fix migration and re-test

**Outputs**
- Migration applied; schema updated
- Apply log; backup reference if taken

**Failure Handling**
- **Failure:** Apply fails in production  
  - **Action:** Roll back per plan; restore from backup if necessary; incident workflow if data at risk

---

#### Step 5: Verify and Trigger Backfill or Consistency

**Purpose**
- Verify schema and data; trigger backfill or consistency procedures if needed

**Inputs**
- **From:** Step 4 (applied migration); data design

**Actions**
- Verify schema in target (tables, columns, indexes present and correct).
- If migration requires data backfill (e.g. new column populated from existing data), invoke [Backfill / Reindex Procedure](./backfill-reindex-procedure.md).
- If change affects cross-store consistency, invoke [Data Consistency Procedure](./data-consistency-procedure.md) as applicable.
- Update schema docs and data design; close migration task.

**Decisions / Evaluations**
- **Go:** Verification complete; backfill/consistency triggered if needed → procedure complete  
- **No-Go:** Fix verification or backfill; re-verify  
- **Backfill required** – Do not consider schema change “done” until backfill complete per [Backfill / Reindex Procedure](./backfill-reindex-procedure.md)

**Outputs**
- Schema verified; backfill/consistency invoked if needed
- Docs updated; migration closed

**Failure Handling**
- **Failure:** Backfill or consistency fails  
  - **Action:** Handle per those procedures; schema may be valid but data incomplete until resolved

---

### 6. Output Contract

**Artifacts produced:** Migration script(s), rollback script(s), apply log, updated schema docs; backfill/consistency triggers if needed.  
**State changes:** Postgres schema updated in target(s); backfill or sync in progress if applicable.  
**Signals emitted:** “Schema change applied”; “Backfill required” (if applicable).

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Migration designed per Data Design Standards and data design
- [ ] Reviewed and approved; tested in non-prod
- [ ] Applied in target(s); rollback verified or backup taken if destructive
- [ ] Verified; backfill/consistency triggered if needed

**Who can approve:** Data owner or delegate; reviewer per PR process.

---

### 8. Downstream Dependencies

**Output → Input:** Schema change → [Backfill / Reindex Procedure](./backfill-reindex-procedure.md), [Data Consistency Procedure](./data-consistency-procedure.md), application deploy, [Query/Index Review Procedure](./query-index-review-procedure.md) (future optimizations). [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) and [PR Data/Migration Review](../pr-lifecycle/data-migration-review-procedure.md) feed into this procedure.

**Procedures that depend on this:**
- [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) – Uses new schema for backfill
- [Data Consistency Procedure](./data-consistency-procedure.md) – May need to sync after schema change
- [Backup & Restore Procedure](./backup-restore-procedure.md) – Backup before destructive migrations

---

### 9. Definition of Done

- [ ] Migration designed, reviewed, and approved
- [ ] Tested (apply and rollback) in non-prod
- [ ] Applied in target(s); verified
- [ ] Backfill or consistency triggered if needed; docs updated

---

### 10. Audit & Traceability

**Links to:** Data design, migration scripts, PR, apply log, backup, backfill. **Audit trail:** Design date, reviewer, apply date, environment.

---

### 11. Exit States

**✅ Completed successfully** – Schema change applied; backfill/consistency as needed.  
**⚠️ Blocked** – Review, test, or backup blocking; resolve and re-run.  
**❌ Aborted** – Migration cancelled; roll back if applied; document reason.

---

**Status:** Active Procedure  
**Owner:** Data owner / Backend or platform team
