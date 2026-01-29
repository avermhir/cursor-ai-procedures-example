# Procedure: Query/Index Review (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure reviews query patterns and indexes (Postgres and DynamoDB) for correctness, performance, and alignment with data design. It ensures access patterns are efficient, indexes exist where needed, and schema or shape changes are proposed when necessary.

**What problem it solves**

- Slow or expensive queries; missing or wrong indexes
- Ad-hoc indexes; duplication or unused indexes
- Query patterns not documented; [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) or data design out of sync
- New access patterns added without index or schema review

**What "success" looks like at the end**

Review complete with:
- Query patterns and access paths documented and assessed
- Index coverage verified; new indexes or index changes proposed and implemented via [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md)
- Performance or cost improvements validated
- Data design updated with access patterns and indexes

---

### 2. Trigger

**What causes this procedure to be invoked**

- New feature or API adds new query patterns (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) or [API Design](../api-lifecycle/api-design-procedure.md))
- Performance or cost issues; slow queries or high read/write costs
- Periodic review (e.g. quarterly) of access patterns and indexes
- [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md) prompts index or query review

---

### 3. Required Inputs

**Artifacts:**
- [ ] **Query patterns and access paths** – Current and planned queries; filters, sorts, joins (Postgres) or keys/GSIs (DynamoDB)
- [ ] **Data design** – Tables, shapes, existing indexes; from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) or schema/shape docs
- [ ] **Observability** – Query performance, index usage, cost metrics (if available)
- [ ] **Store** – Postgres, DynamoDB, or both; review applies to relevant store(s)

**Decisions already made:**
- [ ] **Scope** – Which services, tables, or access patterns are in scope
- [ ] **Data owner** – Owner acknowledged review

**Constraints:**
- [ ] **Index changes** – New or changed indexes go through [Schema Change](./schema-change-procedure.md) or [Shape Evolution](./shape-evolution-procedure.md)
- [ ] **No breaking changes** – Query or index changes must not break existing callers without coordination

**⚠️ If an input is missing → halt or remediate**

**Remediation paths:**
- **Query patterns unclear** – Extract from code, API, or logs; document and review
- **Observability missing** – Review static (query text, data design) only; add metrics later

---

### 4. Plan Requirement

**Plan includes:** Scope, review criteria (performance, cost, coverage), proposed index changes, validation approach. **Output:** Query/Index Review Plan.

---

### 5. Workflow

#### Step 1: Document and Assess Query Patterns

**Purpose:** Capture current and planned access patterns; assess efficiency.

**Actions:** List queries and access paths (filters, sorts, joins, keys, GSIs). Map to tables/shapes and existing indexes. Identify full scans, heavy joins, or missing index use. Note performance or cost concerns. Update data design with access patterns if missing.

**Outputs:** Query pattern doc; assessment (gaps, inefficiencies).

**Failure:** Patterns unclear → instrument or log; document best effort; schedule follow-up.

---

#### Step 2: Propose Index and Schema/Shape Changes

**Purpose:** Propose new indexes or schema/shape changes to improve performance or coverage.

**Actions:** For each gap or inefficiency: propose new index (Postgres or DynamoDB GSI), key design change, or schema/shape change. Justify with access patterns and expected impact. Check for duplicate or unused indexes to remove. Document proposals and owners.

**Outputs:** Index and schema/shape change proposals; justification.

**Failure:** Proposals unclear or unjustified → refine with data owner; re-review.

---

#### Step 3: Implement via Schema Change or Shape Evolution

**Purpose:** Implement approved index or schema/shape changes through formal procedures.

**Actions:** For each approved proposal: implement via [Schema Change Procedure](./schema-change-procedure.md) (Postgres) or [Shape Evolution Procedure](./shape-evolution-procedure.md) (DynamoDB). Use [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) if existing data must be backfilled or reindexed. Deploy and verify.

**Outputs:** Indexes or schema/shape updated; backfill/reindex done if needed.

**Failure:** Implementation fails → fix per Schema Change / Shape Evolution / Backfill procedures; retry.

---

#### Step 4: Validate and Update Data Design

**Purpose:** Validate performance or cost improvement; update data design.

**Actions:** Re-run representative queries; compare performance and cost to baseline. Validate index usage via plan or metrics. Update data design with new indexes and access patterns. Close review; schedule next periodic review if applicable.

**Outputs:** Validation result; data design updated; review closed.

**Failure:** No improvement or regression → revert if needed; iterate on proposals.

---

### 6. Output Contract

**Artifacts:** Query pattern doc, index proposals, implementation via Schema Change/Shape Evolution, validation result, updated data design. **State:** Indexes and access patterns aligned; performance improved where targeted. **Signals:** “Query/index review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Query patterns documented and assessed; proposals implemented; performance validated; data design updated. **Who approves:** Data owner or delegate.

---

### 8. Downstream Dependencies

**Output →:** [Schema Change Procedure](./schema-change-procedure.md), [Shape Evolution Procedure](./shape-evolution-procedure.md), [Backfill / Reindex Procedure](./backfill-reindex-procedure.md), data design. **Depends on:** [Data Design Procedure](../feature-lifecycle/data-design-procedure.md), data design.

---

### 9. Definition of Done

- [ ] Query patterns documented and assessed
- [ ] Index/schema/shape proposals implemented
- [ ] Performance validated; data design updated

---

### 10. Audit & Traceability

**Links to:** Query patterns, proposals, Schema Change/Shape Evolution/Backfill refs, data design. **Audit trail:** Review date, owner, outcomes.

---

### 11. Exit States

**✅ Completed successfully** – Review done; changes implemented; validated.  
**⚠️ Blocked** – Missing patterns or approval; resolve and re-run.  
**❌ Aborted** – Review cancelled; document; no schema/shape changes applied.

---

**Status:** Active Procedure  
**Owner:** Data owner / Backend or platform team
