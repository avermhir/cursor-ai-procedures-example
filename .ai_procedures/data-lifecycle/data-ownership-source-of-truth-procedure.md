# Procedure: Data Ownership & Source-of-Truth (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines data ownership and source-of-truth (SOT) for datasets so that accountability, updates, and cross-store consistency are clear. It ensures every dataset has an owner and a defined SOT, and that consumers know where to read from and who to change.

**What problem it solves**

- No clear owner; no one accountable for data quality or lifecycle
- Multiple “sources of truth”; conflicting or duplicated data
- Unclear which store or system is authoritative for a given dataset
- Cross-store sync or [Data Consistency Procedure](./data-consistency-procedure.md) undefined without SOT

**What "success" looks like at the end**

Ownership and SOT defined with:
- Owner (or steward) assigned for each dataset
- Source-of-truth identified (store, system, or API)
- Consumers and writers know where to read/write; replication or sync rules documented
- Linked to [Data Classification Procedure](./data-classification-procedure.md), [Data Consistency Procedure](./data-consistency-procedure.md), and [Schema Change](./schema-change-procedure.md) / [Shape Evolution](./shape-evolution-procedure.md) for governed changes

---

### 2. Trigger

**What causes this procedure to be invoked**

- New dataset or data store (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md))
- Existing data has no owner or SOT; governance or [Data Consistency Procedure](./data-consistency-procedure.md) requires it
- Ownership or SOT change (reorg, system migration, new consumer)
- [Data Classification Procedure](./data-classification-procedure.md) or compliance requests ownership

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Dataset or data scope** – What ownership and SOT apply to (tables, collections, logical datasets)
- [ ] **Data stores** – Postgres, DynamoDB, or other stores involved; which systems produce or consume the data
- [ ] **Consumers and producers** – Who reads, who writes, and from where
- [ ] **Classification** – From [Data Classification Procedure](./data-classification-procedure.md) if available (affects handling and accountability)

**Decisions already made:**
- [ ] **Ownership model** – Team, role, or person as owner; single owner per dataset per org norm
- [ ] **SOT definition** – One canonical store/system per dataset; others are replicas or derived

**Constraints:**
- [ ] **Consistency** – [Data Consistency Procedure](./data-consistency-procedure.md) and sync rules must align with SOT
- [ ] **Schema/shape changes** – [Schema Change Procedure](./schema-change-procedure.md) and [Shape Evolution Procedure](./shape-evolution-procedure.md) are owned by data owner or delegate

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Consumers/producers unclear** – Document known consumers; add others as discovered; refine later
- **No classification** – Proceed with ownership/SOT; link classification when available

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Scope, assign owner, define SOT, document consumers/writers, link consistency and schema procedures
- **Procedures to be invoked** – [Data Classification Procedure](./data-classification-procedure.md), [Data Consistency Procedure](./data-consistency-procedure.md), [Schema Change Procedure](./schema-change-procedure.md), [Shape Evolution Procedure](./shape-evolution-procedure.md)
- **Dependencies between steps** – Scope → Owner → SOT → Consumers → Link
- **Risks & unknowns** – Legacy systems with no owner, shared ownership, migration in progress
- **Validation points** – After owner and SOT, after documentation

**Plan must be reviewed before execution begins**

**Output:**
- Data Ownership & SOT Plan (scope, owner, SOT, consumers)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Define Scope and Stores

**Purpose**
- Lock dataset scope and involved stores/systems

**Inputs**
- **From:** Procedure Required Inputs (dataset scope, data stores)

**Actions**
- Define scope: tables, collections, or logical datasets.
- List stores and systems: Postgres, DynamoDB, caches, APIs, external systems.
- Identify which systems today hold the data and how they relate (source vs replica vs derived).
- Document current state even if SOT is not yet formalized.

**Decisions / Evaluations**
- **Go:** Scope and stores documented → Step 2  
- **No-Go:** Clarify scope or topology; re-run

**Outputs**
- Scope and store/system map
- Current “effective” source vs consumers (if known)

**Failure Handling**
- **Failure:** Topology unclear  
  - **Action:** Document best understanding; flag for review; proceed with provisional SOT

---

#### Step 2: Assign Owner

**Purpose**
- Assign single owner (or steward) per dataset

**Inputs**
- **From:** Step 1; ownership model

**Actions**
- Assign owner (team, role, or person) per org ownership model.
- Obtain acknowledgment; document in catalog, data design, or registry.
- Define delegate(s) if owner delegates schema or operational changes (e.g. to [Schema Change](./schema-change-procedure.md) / [Shape Evolution](./shape-evolution-procedure.md)).
- Ensure [Data Classification Procedure](./data-classification-procedure.md) and handling rules reference owner where applicable.

**Decisions / Evaluations**
- **Go:** Owner assigned and documented → Step 3  
- **No-Go:** Resolve ownership; re-assign  
- **Shared ownership** – Rare; document primary owner and shared model; clarify who approves schema and SOT changes

**Outputs**
- Owner (and delegates) assigned and recorded
- Link to classification and catalog

**Failure Handling**
- **Failure:** No one accepts ownership  
  - **Action:** Escalate; assign interim owner; set review date

---

#### Step 3: Define Source-of-Truth

**Purpose**
- Designate canonical store/system for each dataset

**Inputs**
- **From:** Steps 1–2 (scope, stores, owner)

**Actions**
- Designate SOT per dataset: one store or system as authoritative (e.g. Postgres table X, DynamoDB table Y, API Z).
- Document replication, sync, or derivation: how other stores get data from SOT (or why they are not SOT).
- Align with [Data Consistency Procedure](./data-consistency-procedure.md): consistency and sync rules must respect SOT.
- Record SOT in catalog, data design, or registry; notify consumers and producers.

**Decisions / Evaluations**
- **Go:** SOT defined and documented → Step 4  
- **No-Go:** Resolve conflicts (e.g. multiple “primary” systems); then define SOT  
- **Migration** – If SOT is changing, document current and target SOT; migration plan separate (e.g. [Backfill / Reindex Procedure](./backfill-reindex-procedure.md))

**Outputs**
- SOT defined per dataset; replication/sync described
- Consistency procedure aligned
- Catalog updated

**Failure Handling**
- **Failure:** Dispute over SOT  
  - **Action:** Escalate to owner or architecture; document decision and rationale

---

#### Step 4: Document Consumers and Link Procedures

**Purpose**
- Document who reads/writes and link to consistency, schema, and shape procedures

**Inputs**
- **From:** Steps 1–3; consumers and producers

**Actions**
- List consumers (read) and producers (write) and which store they use; confirm they use SOT for writes and authoritative reads per design.
- Link to [Data Consistency Procedure](./data-consistency-procedure.md) (sync, eventual consistency rules).
- Ensure [Schema Change Procedure](./schema-change-procedure.md) and [Shape Evolution Procedure](./shape-evolution-procedure.md) involve owner and respect SOT when changing schema or shape.
- Publish ownership and SOT to catalog; communicate to relevant teams.

**Decisions / Evaluations**
- **Go:** Consumers documented; procedures linked → procedure complete  
- **No-Go:** Complete consumer map; add links when procedures exist

**Outputs**
- Consumers and producers documented; procedures linked
- Ownership and SOT published

**Failure Handling**
- N/A (procedure complete)

---

### 6. Output Contract

**Artifacts produced:** Owner and SOT per dataset; store topology; consumer/producer map; links to classification, consistency, schema, shape procedures.  
**State changes:** Ownership and SOT defined; consumers and consistency aligned.  
**Signals emitted:** “Data ownership and SOT defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Owner assigned and documented
- [ ] SOT defined per dataset; replication/sync described
- [ ] Consumers and producers documented; procedures linked
- [ ] Catalog or registry updated

**Who can approve:** Data owner, architecture, or governance (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Ownership and SOT → [Data Consistency Procedure](./data-consistency-procedure.md), [Schema Change Procedure](./schema-change-procedure.md), [Shape Evolution Procedure](./shape-evolution-procedure.md), [Data Classification Procedure](./data-classification-procedure.md), [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) (when SOT or schema changes).

**Procedures that depend on this:**
- [Data Classification Procedure](./data-classification-procedure.md) – References owner
- [Data Consistency Procedure](./data-consistency-procedure.md) – Sync rules depend on SOT
- [Schema Change Procedure](./schema-change-procedure.md) – Owner approves schema changes
- [Shape Evolution Procedure](./shape-evolution-procedure.md) – Owner approves shape evolution

---

### 9. Definition of Done

- [ ] Scope and stores defined
- [ ] Owner assigned and documented
- [ ] SOT defined; replication/sync documented
- [ ] Consumers documented; procedures linked

---

### 10. Audit & Traceability

**Links to:** Dataset, owner, SOT, catalog, consistency, schema, shape. **Audit trail:** Assignment date, owner, SOT decision.

---

### 11. Exit States

**✅ Completed successfully** – Ownership and SOT defined; consumers and procedures linked.  
**⚠️ Blocked** – Owner or SOT disputed; resolve and re-run.  
**❌ Aborted** – Ownership/SOT work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Data owner / Architecture
