# Procedure: Backup & Restore (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to create, store, and restore backups of data stores (Postgres, DynamoDB, etc.). It ensures backups exist, are tested, and can be used for restore in disaster recovery or before risky operations (e.g. [Schema Change](./schema-change-procedure.md) destructive migrations).

**What problem it solves**

- No backups or untested backups; restore fails when needed
- Backup schedule or retention unclear; gaps or excessive cost
- Restore process undocumented or not rehearsed
- [Schema Change](./schema-change-procedure.md) or [Rollback Procedure](../release-lifecycle/rollback-procedure.md) need restore path but none defined

**What "success" looks like at the end**

Backup and restore operational with:
- Backup schedule, retention, and storage defined and running
- Restore process documented and tested
- Backups used for pre-change safety (e.g. before destructive migrations) or disaster recovery
- [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) and compliance aligned with backup retention

---

### 2. Trigger

**What causes this procedure to be invoked**

- Initial setup or change of backup strategy for a data store
- [Schema Change Procedure](./schema-change-procedure.md) requires backup before destructive migration
- Disaster recovery or incident; restore needed
- [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) or compliance review of backup retention
- Periodic restore test (e.g. quarterly)

---

### 3. Required Inputs

**Artifacts:**
- [ ] **Data store** – Postgres, DynamoDB, or other store to back up
- [ ] **Backup mechanism** – Native (e.g. pg_dump, DynamoDB backup), managed service, or snapshot
- [ ] **Storage and retention** – Where backups live; retention period per [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) and compliance
- [ ] **RTO/RPO** – Recovery time and point objectives if defined (org or product)

**Decisions already made:**
- [ ] **Backup owner** – Team or role responsible for backups and restore
- [ ] **Restore scope** – Full restore, point-in-time, or partial (e.g. table-level) per use case

**Constraints:**
- [ ] **Retention** – Backup retention must align with [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) and compliance
- [ ] **Security** – Backup storage and access controlled; encryption per [Data Classification Procedure](./data-classification-procedure.md)

**⚠️ If an input is missing → halt or remediate**

**Remediation paths:**
- **RTO/RPO undefined** – Define minimal (e.g. daily backup, restore within 24 h); refine with org
- **Retention unclear** – Align with [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md); document

---

### 4. Plan Requirement

**Plan includes:** Backup schedule, mechanism, storage, retention, restore process, test cadence. **Output:** Backup & Restore Plan.

---

### 5. Workflow

#### Step 1: Define Backup Strategy

**Purpose:** Define what to back up, how often, where, and for how long.

**Actions:** Choose backup type (full, incremental, snapshot) and mechanism. Set schedule (e.g. daily, continuous). Define storage (region, encryption, access). Set retention per [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) and compliance. Document strategy.

**Outputs:** Backup strategy (schedule, mechanism, storage, retention).

**Failure:** Mechanism or retention unclear → align with platform and compliance; document.

---

#### Step 2: Implement and Run Backups

**Purpose:** Implement backup jobs and run them.

**Actions:** Implement backup jobs (automated or managed service). Run backups per schedule; verify success and alert on failure. Store backups in defined location; enforce retention (delete expired). Document runs and locations.

**Outputs:** Backups running; success verified; retention enforced.

**Failure:** Backup fails → alert; fix and re-run; do not leave store without recent backup.

---

#### Step 3: Document and Test Restore

**Purpose:** Document restore process and test it.

**Actions:** Document restore steps (from backup to live store or alternate env). Test restore in non-production (e.g. staging or isolated env); validate data and application access. Fix gaps; re-test. Schedule periodic restore tests (e.g. quarterly). Use restore when required (e.g. pre–[Schema Change](./schema-change-procedure.md) destructive migrate, disaster recovery).

**Outputs:** Restore runbook; restore tested; periodic test scheduled.

**Failure:** Restore test fails → fix process; re-test; do not rely on untested backups.

---

#### Step 4: Integrate with Schema Change and Incident Response

**Purpose:** Use backups for schema change safety and disaster recovery.

**Actions:** When [Schema Change Procedure](./schema-change-procedure.md) requires backup before destructive change: create backup per this procedure; proceed only after backup verified. When incident or disaster requires restore: execute restore per runbook; validate; hand off to [Incident Lifecycle](../incident-lifecycle/) or [Rollback Procedure](../release-lifecycle/rollback-procedure.md) as applicable. Update runbook from lessons learned.

**Outputs:** Backups used for schema change and restore; runbook updated.

**Failure:** Restore fails during incident → escalate; use alternate recovery path if defined; post-incident review.

---

### 6. Output Contract

**Artifacts:** Backup strategy, backup jobs, restore runbook, test results. **State:** Backups running; restore tested and available. **Signals:** “Backup complete”; “Restore tested”; “Restore complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Backup strategy defined and running; retention enforced; restore documented and tested. **Who approves:** Backup owner, data owner, or platform lead.

---

### 8. Downstream Dependencies

**Output →:** [Schema Change Procedure](./schema-change-procedure.md) (pre-destructive backup), [Rollback Procedure](../release-lifecycle/rollback-procedure.md), [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md), incident response. **Depends on:** [Data Classification Procedure](./data-classification-procedure.md) (handling), [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) (retention).

---

### 9. Definition of Done

- [ ] Backup strategy defined and running
- [ ] Restore documented and tested; periodic test scheduled
- [ ] Used for schema change or restore when required

---

### 10. Audit & Traceability

**Links to:** Store, backup location, restore runbook, retention, tests. **Audit trail:** Backup runs, restore tests, retention deletions.

---

### 11. Exit States

**✅ Completed successfully** – Backups running; restore tested; integrated with change and incident.  
**⚠️ Blocked** – Mechanism, storage, or retention unclear; resolve and re-run.  
**❌ Aborted** – Backup/restore work cancelled; document; ensure alternate recovery if needed.

---

**Status:** Active Procedure  
**Owner:** Backup owner / Platform or data owner
