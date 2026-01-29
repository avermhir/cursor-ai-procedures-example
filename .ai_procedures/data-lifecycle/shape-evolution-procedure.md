# Procedure: Shape Evolution (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure governs DynamoDB item shape evolution: adding, changing, or deprecating attributes and access patterns. It ensures evolution is backwards-compatible, versioned, and applied safely so that existing items and consumers keep working while new shapes are adopted.

**What problem it solves**

- Ad-hoc attribute changes; consumers break or incompatible item versions
- No versioning or migration path; old and new shapes collide
- Cross-store or [Data Consistency Procedure](./data-consistency-procedure.md) impacted without plan
- [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) or data design not followed for DynamoDB

**What "success" looks like at the end**

Shape evolution complete with:
- New or changed shape designed and reviewed against Data Design Standards and data design
- Backwards-compatible strategy (e.g. additive attributes, version field, dual-write)
- [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) or item updates applied if required
- Consumers updated or tolerant of both old and new shapes; no unhandled breaking changes

---

### 2. Trigger

**What causes this procedure to be invoked**

- Feature work requires new or changed DynamoDB item shape (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md))
- New attributes, keys, or access patterns; deprecation of attributes
- [Query/Index Review Procedure](./query-index-review-procedure.md) or performance work recommends shape or GSI changes
- [Data Consistency Procedure](./data-consistency-procedure.md) or cross-store design requires DynamoDB shape updates

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Data design or shape spec** – What to add, change, or deprecate; keys, GSIs, access patterns; from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) or equivalent
- [ ] **Data Design Standards** – [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) (DynamoDB design, naming, keys, indexes)
- [ ] **Current shape** – Existing item structure, attributes, GSIs; version or format if used
- [ ] **Consumers** – Writers and readers; which attributes they use; compatibility requirements

**Decisions already made:**
- [ ] **Data owner approval** – Owner (from [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md)) or delegate has approved shape evolution
- [ ] **Backwards compatibility** – Strategy (additive, version field, dual-write, etc.) and migration path

**Constraints:**
- [ ] **No breaking reads/writes** – Consumers must tolerate evolution per strategy; or coordinated deploy
- [ ] **Index changes** – GSI add/change/remove may require [Backfill / Reindex Procedure](./backfill-reindex-procedure.md); plan accordingly

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Data design missing** – Document shape spec (what, why, compatibility); align with Data Design Standards; get owner approval
- **Consumers unclear** – Document known consumers; assume conservative compatibility; refine as needed

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Design, review, implement (code + config), backfill/reindex if needed, deploy consumers, deprecate old
- **Procedures to be invoked** – [Backfill / Reindex Procedure](./backfill-reindex-procedure.md), [Data Consistency Procedure](./data-consistency-procedure.md) (if cross-store)
- **Dependencies between steps** – Design → Review → Implement → Backfill (if needed) → Deploy → Deprecate
- **Risks & unknowns** – Large item set, long backfill, consumer coordination
- **Validation points** – After review, after backfill, after consumer deploy

**Plan must be reviewed before execution begins**

**Output:**
- Shape Evolution Plan (shape diff, compatibility, backfill, consumer rollout)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Design Shape Change

**Purpose**
- Define new or changed attributes, keys, GSIs; ensure backwards compatibility

**Inputs**
- **From:** Procedure Required Inputs (data design, Data Design Standards, current shape, consumers)

**Actions**
- Specify new attributes, type changes, or deprecations; preserve existing attributes consumers rely on unless coordinated change.
- Add version or format field if using version-based evolution; document version semantics.
- Design GSI changes (add, modify) per [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md); plan for backfill if existing items need new GSI keys.
- Document compatibility strategy: additive-only, dual-write, version branch, etc.
- Identify writers and readers; confirm they can tolerate old and new shape during transition.

**Decisions / Evaluations**
- **Go:** Shape change designed; compatibility strategy clear → Step 2  
- **No-Go:** Redesign for compatibility or consumer impact; re-review  
- **Breaking change** – Require coordinated consumer deploy and migration; document explicitly

**Outputs**
- Shape evolution spec (attributes, keys, GSIs, version, compatibility)
- Consumer impact and migration path

**Failure Handling**
- **Failure:** Breaking change without migration path  
  - **Action:** Define migration and coordination; do not proceed until agreed

---

#### Step 2: Review and Approve

**Purpose**
- Review shape evolution against Data Design Standards and data design; obtain approval

**Inputs**
- **From:** Step 1 (shape spec); data owner; Data Design Standards

**Actions**
- Review for correctness, naming, keys, GSIs, and compatibility.
- Check alignment with data design and [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md).
- PR or equivalent review; data owner or delegate approval.
- Confirm [Data Consistency Procedure](./data-consistency-procedure.md) and cross-store impact if applicable.

**Decisions / Evaluations**
- **Go:** Review passed; approved → Step 3  
- **No-Go:** Address feedback; re-review  
- **Blocked** – Resolve blocking issues before implementation

**Outputs**
- Reviewed and approved shape evolution
- Review record (PR, sign-off)

**Failure Handling**
- **Failure:** Standards or compatibility violation  
  - **Action:** Fix design; re-review; do not implement until approved

---

#### Step 3: Implement and Deploy Shape Support

**Purpose**
- Implement writers and readers that support new shape; deploy with backwards compatibility

**Inputs**
- **From:** Step 2 (approved shape); consumers; compatibility strategy

**Actions**
- Update writers to emit new shape (and old if dual-write); update readers to tolerate old and new (or version branch).
- Deploy application changes per release process; use feature flags or rollout if helpful.
- If GSI added or changed, create/update GSI; use [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) to backfill keys for existing items if required.
- Run tests (unit, integration) with old and new shapes; verify no regression.

**Decisions / Evaluations**
- **Go:** Implementation deployed; backfill done if needed → Step 4  
- **No-Go:** Fix implementation or backfill; re-deploy; re-verify  
- **Backfill required** – Complete [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) before considering shape evolution done for that scope

**Outputs**
- Code and config supporting new shape; backwards compatible
- GSI updated; backfill complete if applicable
- Tests passing

**Failure Handling**
- **Failure:** Backfill or deploy fails  
  - **Action:** Roll back app deploy if safe; fix backfill or implementation; retry

---

#### Step 4: Deprecate Old Shape (If Applicable)

**Purpose**
- Once all consumers use new shape, deprecate old attributes or format

**Inputs**
- **From:** Step 3 (deployment, backfill); consumer rollout

**Actions**
- Confirm all consumers have migrated to new shape (or old shape no longer written).
- Stop writing deprecated attributes or old format; optionally run cleanup (e.g. remove deprecated attributes) per org and [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md).
- Update data design and docs; mark old shape deprecated; remove compatibility code in later release if desired.
- If cross-store, ensure [Data Consistency Procedure](./data-consistency-procedure.md) updated; no longer sync deprecated form.

**Decisions / Evaluations**
- **Go:** Old shape deprecated; docs updated → procedure complete  
- **No-Go:** Complete consumer migration; then deprecate  
- **Keep both** – Some shapes retained long-term (e.g. versioned); document and maintain

**Outputs**
- Old shape deprecated (or retained by design)
- Docs and consistency procedures updated

**Failure Handling**
- **Failure:** Consumers still depend on old shape  
  - **Action:** Do not deprecate yet; complete migration; set deprecation date

---

### 6. Output Contract

**Artifacts produced:** Shape evolution spec; implementation and config; backfill output if used; updated data design and docs.  
**State changes:** DynamoDB shape evolved; consumers updated; old shape deprecated or retained per plan.  
**Signals emitted:** “Shape evolution complete”; “Backfill complete” (if applicable).

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Shape change designed per Data Design Standards and data design
- [ ] Reviewed and approved; backwards compatibility ensured
- [ ] Implemented and deployed; backfill done if needed
- [ ] Old shape deprecated or retained by design; docs updated

**Who can approve:** Data owner or delegate; reviewer per PR process.

---

### 8. Downstream Dependencies

**Output → Input:** Shape evolution → [Backfill / Reindex Procedure](./backfill-reindex-procedure.md), [Data Consistency Procedure](./data-consistency-procedure.md), application deploy. [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) and [PR Data/Migration Review](../pr-lifecycle/data-migration-review-procedure.md) (for DynamoDB) feed into this procedure.

**Procedures that depend on this:**
- [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) – Backfill GSI keys or new attributes
- [Data Consistency Procedure](./data-consistency-procedure.md) – Cross-store sync may depend on shape

---

### 9. Definition of Done

- [ ] Shape evolution designed, reviewed, and approved
- [ ] Implemented and deployed; backfill done if needed
- [ ] Old shape deprecated or retained; docs updated

---

### 10. Audit & Traceability

**Links to:** Data design, shape spec, PR, backfill, deploy. **Audit trail:** Design date, reviewer, deploy date, deprecation.

---

### 11. Exit States

**✅ Completed successfully** – Shape evolved; backfill and deprecation per plan.  
**⚠️ Blocked** – Review, implementation, or backfill blocking; resolve and re-run.  
**❌ Aborted** – Shape evolution cancelled; reverse deploy if needed; document reason.

---

**Status:** Active Procedure  
**Owner:** Data owner / Backend or platform team
