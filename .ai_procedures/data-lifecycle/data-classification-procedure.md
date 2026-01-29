# Procedure: Data Classification (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure classifies data by sensitivity and type so that handling, storage, access, retention, and compliance can be applied consistently. It ensures every dataset has a classification and that downstream procedures (ownership, schema, retention, audit) use it correctly.

**What problem it solves**

- Data stored or processed without clear sensitivity or type
- Inconsistent handling; PII or regulated data not identified
- Retention, access, or audit rules not aligned with classification
- Compliance or governance gaps from unclassified data

**What "success" looks like at the end**

Data classification complete with:
- Dataset classified by sensitivity (e.g. public, internal, confidential, restricted) and type (e.g. PII, financial, health)
- Classification recorded and linked to [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md), schema, and retention
- Handling rules (access, encryption, retention) derived from classification per org policy
- Ready for [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md), [Audit Logging Procedure](./audit-logging-procedure.md), and governance

---

### 2. Trigger

**What causes this procedure to be invoked**

- New dataset or data store (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) or feature work)
- Existing data not yet classified; governance or compliance requires it
- Data scope or use changes; reclassification needed
- Audit or [Governance & Compliance](../governance-compliance/) requests classification review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Dataset or data scope** – What is being classified (tables, collections, fields, or logical dataset)
- [ ] **Classification scheme** – Org sensitivity levels and data types (e.g. public/internal/confidential/restricted; PII, financial, health)
- [ ] **Handling rules** – Org rules per classification (access, encryption, retention, audit) or reference to policy
- [ ] **Data design or schema** – From [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) or equivalent (what the data contains)

**Decisions already made:**
- [ ] **Owner or steward** – Who is responsible for the data (or will be assigned via [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md))
- [ ] **Classification authority** – Who can classify or reclassify (data owner, security, compliance) per org

**Constraints:**
- [ ] **Compliance** – GDPR, HIPAA, etc. if applicable; classification must support compliance requirements
- [ ] **Consistency** – Same data type or sensitivity should receive same classification across systems

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **No classification scheme** – Define minimal scheme (e.g. public/internal/confidential) with org; document; refine later
- **Handling rules unclear** – Document default handling per level; align with security/compliance when available

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Identify scope, apply scheme, record classification, derive handling, link to ownership/schema/retention
- **Procedures to be invoked** – [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md), [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md), [Audit Logging Procedure](./audit-logging-procedure.md) (when classification affects them)
- **Dependencies between steps** – Scope → Classify → Record → Handling → Link
- **Risks & unknowns** – Ambiguous sensitivity, cross-border, regulatory overlap
- **Validation points** – After classification, after handling rules

**Plan must be reviewed before execution begins**

**Output:**
- Data Classification Plan (scope, scheme, authority)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Identify Scope and Data Contents

**Purpose**
- Define what is being classified and what the data represents

**Inputs**
- **From:** Procedure Required Inputs (dataset/scope, data design or schema)

**Actions**
- Define scope: tables, collections, fields, or logical datasets (e.g. “user profile”, “order line items”).
- Review data design or schema: what is stored, who uses it, where it flows.
- Identify potential PII, financial, health, or other regulated or sensitive elements.
- Document scope and summary of contents.

**Decisions / Evaluations**
- **Go:** Scope and contents documented → Step 2  
- **No-Go:** Clarify scope or obtain data design; re-run

**Outputs**
- Classification scope and data contents summary
- Sensitivity-relevant elements noted

**Failure Handling**
- **Failure:** Scope vague or contents unknown  
  - **Action:** Narrow scope or sample; document assumptions; classify conservatively (e.g. higher sensitivity) until clarified

---

#### Step 2: Apply Classification Scheme

**Purpose**
- Assign sensitivity level and data type(s) per org scheme

**Inputs**
- **From:** Step 1; classification scheme; handling rules or policy

**Actions**
- Apply sensitivity level (e.g. public, internal, confidential, restricted) using org criteria and data contents.
- Assign data type(s) (e.g. PII, financial, health) where applicable.
- Note rationale and any caveats (e.g. “internal but contains PII”).
- Cross-check with handling rules; ensure classification supports required controls.

**Decisions / Evaluations**
- **Go:** Classification assigned and documented → Step 3  
- **No-Go:** Resolve ambiguity with owner or compliance; re-classify  
- **Reclassify later** – If unclear, classify conservatively; set review date

**Outputs**
- Sensitivity level and data type(s); rationale
- Handling implications noted

**Failure Handling**
- **Failure:** Scheme doesn’t cover data type or conflicting regulations  
  - **Action:** Escalate to compliance/security; document temporary classification and review date

---

#### Step 3: Record and Link Classification

**Purpose**
- Record classification and link to ownership, schema, retention, and audit

**Inputs**
- **From:** Step 2; procedure inputs (owner, authority)

**Actions**
- Record classification in data catalog, schema metadata, or org registry (per org).
- Link to [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md) (owner, source of truth).
- Ensure [Schema Change Procedure](./schema-change-procedure.md) and [Shape Evolution Procedure](./shape-evolution-procedure.md) can reference classification when evolving schema.
- Link to [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) and [Audit Logging Procedure](./audit-logging-procedure.md) so retention and audit rules use classification.

**Decisions / Evaluations**
- **Go:** Classification recorded and linked → Step 4  
- **No-Go:** Complete recording; add links when ownership/schema/retention/audit exist

**Outputs**
- Classification recorded; links to ownership, schema, retention, audit
- Catalog or registry updated

**Failure Handling**
- **Failure:** No catalog or registry  
  - **Action:** Document in data design or wiki; migrate to catalog when available

---

#### Step 4: Confirm Handling and Review Cadence

**Purpose**
- Confirm handling rules are applied and schedule periodic review

**Inputs**
- **From:** Step 3; handling rules; compliance requirements

**Actions**
- Confirm access, encryption, retention, and audit settings match classification and org policy.
- Schedule periodic classification review (e.g. annually or when use changes).
- Notify owner and relevant stakeholders; update governance or compliance records as required.

**Decisions / Evaluations**
- **Go:** Handling confirmed; review scheduled → procedure complete  
- **No-Go:** Fix handling gaps; then confirm and schedule review

**Outputs**
- Handling confirmed; review cadence set
- Stakeholders notified

**Failure Handling**
- **Failure:** Handling not yet implemented  
  - **Action:** Document required controls; track as gap; implement via ownership or engineering

---

### 6. Output Contract

**Artifacts produced:** Classification (sensitivity, type, rationale); catalog/registry record; links to ownership, schema, retention, audit; handling confirmation; review cadence.  
**State changes:** Data classified; downstream procedures can apply classification-based rules.  
**Signals emitted:** “Data classified”; “Classification recorded”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Scope and contents identified
- [ ] Sensitivity and type assigned per scheme
- [ ] Classification recorded and linked to ownership, schema, retention, audit
- [ ] Handling confirmed; review cadence set

**Who can approve:** Data owner, classification authority, or compliance (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Classification → [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md), [Schema Change Procedure](./schema-change-procedure.md), [Shape Evolution Procedure](./shape-evolution-procedure.md), [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md), [Audit Logging Procedure](./audit-logging-procedure.md), [Governance & Compliance](../governance-compliance/).

**Procedures that depend on this:**
- [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md) – Uses classification for handling
- [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) – Retention by classification
- [Audit Logging Procedure](./audit-logging-procedure.md) – Audit scope by classification
- [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) – Data design should reference classification

---

### 9. Definition of Done

- [ ] Scope and contents documented
- [ ] Sensitivity and type assigned; rationale recorded
- [ ] Classification recorded and linked
- [ ] Handling confirmed; review cadence set

---

### 10. Audit & Traceability

**Links to:** Data scope, classification, owner, catalog, retention, audit. **Audit trail:** Classification date, authority, rationale, review date.

---

### 11. Exit States

**✅ Completed successfully** – Data classified, recorded, linked; handling confirmed.  
**⚠️ Blocked** – Scheme or handling unclear; resolve and re-run.  
**❌ Aborted** – Classification cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Data owner / Classification authority
