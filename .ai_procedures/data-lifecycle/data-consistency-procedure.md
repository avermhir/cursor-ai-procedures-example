# Procedure: Data Consistency (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines and operates cross-store synchronization and consistency rules when data lives in multiple stores (e.g. Postgres, DynamoDB, caches). It ensures source-of-truth, replication, and eventual consistency are explicit and validated so that consumers see coherent data.

**What problem it solves**

- Unclear sync rules; stores drift or conflict
- No defined SOT or replication flow; [Data Ownership & Source-of-Truth](./data-ownership-source-of-truth-procedure.md) not reflected in sync
- Consistency never validated; stale or wrong data in replicas
- [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md) breaks sync unnoticed

**What "success" looks like at the end**

Consistency rules and sync defined with:
- SOT and replication flow documented; sync rules (what, when, how) explicit
- Sync implemented (e.g. CDC, ETL, app-level) and monitored
- Validation (checksums, counts, sampling) run periodically or post-change
- [Schema Change](./schema-change-procedure.md) and [Shape Evolution](./shape-evolution-procedure.md) trigger consistency review when cross-store impact

---

### 2. Trigger

**What causes this procedure to be invoked**

- New or changed cross-store data design (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md)); sync rules needed
- [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md) defines SOT and replicas; sync must be implemented or updated
- [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md) affects cross-store data; consistency impact assessment and sync update
- Drift or incident; consistency validation or repair required
- [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) used for cross-store sync or repair

---

### 3. Required Inputs

**Artifacts:**
- [ ] **SOT and replica map** – From [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md): which store is SOT, which are replicas
- [ ] **Data design** – Cross-store model, keys, and desired consistency (strong vs eventual)
- [ ] **Sync mechanism** – CDC, ETL, app dual-write, etc.; tech choices and constraints
- [ ] **Validation approach** – Counts, checksums, sampling, SLO (e.g. max lag)

**Decisions already made:**
- [ ] **Consistency model** – Strong vs eventual; acceptable lag and failure behavior
- [ ] **Owner** – Data owner or platform team owns sync and validation

**Constraints:**
- [ ] **No divergence** – Sync and repair rules must eventually align replicas with SOT
- [ ] **Schema/shape changes** – [Schema Change](./schema-change-procedure.md) and [Shape Evolution](./shape-evolution-procedure.md) must trigger consistency review when cross-store

**⚠️ If an input is missing → halt or remediate**

**Remediation paths:**
- **SOT unclear** – Resolve via [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md); then define sync
- **Validation unclear** – Define minimal validation (e.g. counts, lag); add checksums later

---

### 4. Plan Requirement

**Plan includes:** SOT and replicas, sync rules, implementation, validation, monitoring, and review triggers (e.g. post schema/shape change). **Output:** Data Consistency Plan.

---

### 5. Workflow

#### Step 1: Document Sync Rules

**Purpose:** Define what syncs, from where to where, and when.

**Actions:** Document SOT and each replica; flow (SOT → replica(s)); triggers (real-time, batch, on-demand). Define consistency model (eventual, lag bound) and conflict resolution (e.g. last-write-wins, SOT wins). Record in data design or consistency runbook.

**Outputs:** Sync rules document (SOT, replicas, flow, consistency).

**Failure:** SOT or flow unclear → resolve with [Data Ownership & Source-of-Truth](./data-ownership-source-of-truth-procedure.md); then document.

---

#### Step 2: Implement and Operate Sync

**Purpose:** Implement sync (CDC, ETL, app) and run it.

**Actions:** Implement sync per rules; deploy and operate. Add monitoring (lag, error rate, throughput). Alert on sustained lag or failures. Document runbooks for common failures and repair.

**Outputs:** Sync implemented and running; monitoring and alerts.

**Failure:** Sync fails or lag exceeds SLO → diagnose; fix or scale; document incident.

---

#### Step 3: Validate Consistency

**Purpose:** Periodically or post-change validate replicas match SOT.

**Actions:** Run validation (counts, checksums, sampling) per plan. Compare replicas to SOT; document results. If drift: investigate; trigger repair (e.g. [Backfill / Reindex Procedure](./backfill-reindex-procedure.md)) and re-validate. Run after [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md) when cross-store.

**Outputs:** Validation result; repair if needed; consistency confirmed.

**Failure:** Drift detected → repair and re-validate; root-cause and fix sync if needed.

---

#### Step 4: Review on Schema or Shape Change

**Purpose:** When schema or shape changes affect cross-store data, review and update sync.

**Actions:** On [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md) that touches cross-store data: assess impact on sync (mappings, keys, format). Update sync rules and implementation; run [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) if required. Re-validate consistency. Update docs.

**Outputs:** Sync updated for schema/shape change; validation passed; docs updated.

**Failure:** Sync broken by change → fix sync and backfill; do not consider change complete until consistency validated.

---

### 6. Output Contract

**Artifacts:** Sync rules, implementation, validation results, runbooks. **State:** Cross-store sync operating; consistency validated. **Signals:** “Consistency validated”; “Sync updated”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Sync rules documented; sync implemented and monitored; validation run; schema/shape changes trigger review. **Who approves:** Data owner or platform owner.

---

### 8. Downstream Dependencies

**Output →:** [Schema Change](./schema-change-procedure.md), [Shape Evolution](./shape-evolution-procedure.md), [Backfill / Reindex Procedure](./backfill-reindex-procedure.md). **Depends on:** [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md).

---

### 9. Definition of Done

- [ ] Sync rules documented and implemented
- [ ] Validation run; consistency confirmed
- [ ] Schema/shape changes trigger consistency review; sync updated as needed

---

### 10. Audit & Traceability

**Links to:** SOT, replicas, sync config, validation runs, schema/shape changes. **Audit trail:** Review dates, validation results, repairs.

---

### 11. Exit States

**✅ Completed successfully** – Sync defined, operating, validated; review on change.  
**⚠️ Blocked** – SOT or sync unclear; resolve and re-run.  
**❌ Aborted** – Consistency work cancelled; document; fix any partial sync.

---

**Status:** Active Procedure  
**Owner:** Data owner / Platform team
