# Procedure: Backfill / Reindex (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure runs data backfills and reindexing when new schema, shape, or index requires existing data to be updated or rebuilt. It ensures backfills are scoped, safe, traceable, and validated so that data and indexes stay consistent without corrupting production.

**What problem it solves**

- Ad-hoc or untested backfills; partial updates, duplicates, or data loss
- No idempotency or resume; failed runs leave inconsistent state
- Reindex or backfill not linked to [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md)
- No validation; backfill “done” but data or index incorrect

**What "success" looks like at the end**

Backfill/reindex complete with:
- Scope, strategy (batch, cursor, etc.), and validation defined
- Backfill or reindex run executed and validated (counts, sampling, checksums)
- [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md) unblocked; [Data Consistency Procedure](./data-consistency-procedure.md) updated if cross-store
- Run documented; idempotent or resumeable where applicable

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Schema Change Procedure](./schema-change-procedure.md) requires data backfill (e.g. new column populated from existing rows)
- [Shape Evolution Procedure](./shape-evolution-procedure.md) requires item updates or GSI key backfill
- New index or GSI; existing items must be reindexed
- [Data Consistency Procedure](./data-consistency-procedure.md) or repair requires bulk sync or backfill
- Data fix or migration (one-time correction) mandated by incident or compliance

---

### 3. Required Inputs

**Artifacts:**
- [ ] **Backfill/reindex spec** – What to backfill or reindex, source and target, format; from [Schema Change](./schema-change-procedure.md), [Shape Evolution](./shape-evolution-procedure.md), or migration plan
- [ ] **Scope** – Which tables, partitions, or key ranges; strategy (full vs partial)
- [ ] **Validation criteria** – How to verify correctness (counts, sampling, checksums, spot checks)
- [ ] **Run environment** – Where to run (staging, production), rate limits, maintenance window if needed

**Decisions already made:**
- [ ] **Data owner approval** – Owner approved backfill/reindex
- [ ] **Idempotency or resume** – Safe to re-run; checkpointing or cursor-based resume if long-running

**Constraints:**
- [ ] **No uncontrolled bulk writes** – Batching, throttling, and validation per org
- [ ] **Backup** – [Backup & Restore Procedure](./backup-restore-procedure.md) or snapshot before destructive backfill if required

**⚠️ If an input is missing → halt or remediate**

**Remediation paths:**
- **Validation unclear** – Define counts and sampling; add checksums if possible
- **Scope too large** – Split into phases; document order and dependencies

---

### 4. Plan Requirement

**Plan includes:** Scope, strategy (batch/cursor), validation, run plan, rollback or repair if failed. **Output:** Backfill/Reindex Plan.

---

### 5. Workflow

#### Step 1: Define Scope and Strategy

**Purpose:** Lock scope, batch strategy, and run order.

**Actions:** Define tables, key ranges, or partitions; choose batch size, cursor, or parallel workers; sequence if multiple backfills. Document scope and strategy.

**Outputs:** Scope, strategy, run order.

**Failure:** Scope or strategy unclear → narrow scope; define resume strategy.

---

#### Step 2: Implement and Test in Non-Production

**Purpose:** Implement backfill/reindex logic; test in non-prod.

**Actions:** Implement script or job (read source, transform, write target); ensure idempotent or resumeable. Run in non-prod; validate counts and sampling. Measure duration and resource use for production planning.

**Outputs:** Tested backfill/reindex implementation; duration and resource notes.

**Failure:** Test fails or data incorrect → fix logic; re-test.

---

#### Step 3: Execute in Target Environment

**Purpose:** Run backfill/reindex in target (e.g. production).

**Actions:** Take backup or snapshot if required ([Backup & Restore Procedure](./backup-restore-procedure.md)). Run backfill/reindex per plan; respect rate limits and maintenance window. Log progress, checkpoints, and errors. If failure: stop; assess partial state; repair or roll back per plan.

**Outputs:** Backfill/reindex executed; run log; backup ref if taken.

**Failure:** Run fails → stop; roll back or repair per plan; do not leave partial inconsistent state unaddressed.

---

#### Step 4: Validate and Close

**Purpose:** Validate outcome; update schema/shape/consistency; close.

**Actions:** Run validation (counts, sampling, checksums). Compare to spec; fix gaps if any. Update [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md) status; trigger [Data Consistency Procedure](./data-consistency-procedure.md) if cross-store. Document run (scope, duration, validation); close.

**Outputs:** Validation result; schema/shape/consistency updated; run documented.

**Failure:** Validation fails → fix data or re-run backfill; re-validate.

---

### 6. Output Contract

**Artifacts:** Backfill/reindex plan, run log, validation result. **State:** Data or index updated; schema/shape/consistency unblocked. **Signals:** “Backfill complete”; “Reindex complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and strategy defined; implemented and tested; executed in target; validated per criteria. **Who approves:** Data owner or delegate.

---

### 8. Downstream Dependencies

**Output →:** [Schema Change](./schema-change-procedure.md), [Shape Evolution](./shape-evolution-procedure.md), [Data Consistency Procedure](./data-consistency-procedure.md). **Depends on:** [Backup & Restore Procedure](./backup-restore-procedure.md) when pre-backfill backup required.

---

### 9. Definition of Done

- [ ] Scope and strategy defined; implemented and tested
- [ ] Executed in target; validated
- [ ] Schema/shape/consistency updated; run documented

---

### 10. Audit & Traceability

**Links to:** Spec, scope, run log, validation, backup. **Audit trail:** Run date, owner, duration, outcome.

---

### 11. Exit States

**✅ Completed successfully** – Backfill/reindex done; validated; downstream updated.  
**⚠️ Blocked** – Missing spec, approval, or environment; resolve and re-run.  
**❌ Aborted** – Run cancelled; repair or roll back; document.

---

**Status:** Active Procedure  
**Owner:** Data owner / Backend or platform team
