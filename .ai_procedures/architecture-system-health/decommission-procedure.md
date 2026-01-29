# Procedure: Decommission

### 1. Purpose

**Why this procedure exists**

This procedure guides the safe decommissioning of a system, service, or component. It ensures dependencies are identified, consumers migrated or retired, and the asset is removed without breaking dependents or losing required capability.

**What problem it solves**

- Decommissioning without checking dependents; outages or broken integrations
- Data or capability lost without migration or replacement
- No record of what was decommissioned and why
- Lingering references, config, or cost after decommission

**What "success" looks like at the end**

Decommissioning that includes:
- Dependencies and consumers identified (using dependency graph where available)
- Migration or retirement of consumers completed; data/capability migrated or retired
- Asset removed (code, config, infra, data per policy)
- Decommission documented; ADRs or baseline updated

---

### 2. Trigger

**What causes this procedure to be invoked**

- System, service, or component is no longer needed (replaced, consolidated, or end-of-life)
- [Architecture Baseline Procedure](./architecture-baseline-procedure.md) or governance approves decommission
- Cost or risk reduction initiative targets specific assets
- Tech debt or ADR records decision to retire an asset

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Asset to decommission** – Clear identification (service, repo, component, infra)
- [ ] **Reason and approval** – Why decommissioning and who approved
- [ ] **Dependency graph or impact view** – From [Dependency Graph Procedure](./dependency-graph-procedure.md) or equivalent (what depends on this asset)
- [ ] **Data and capability** – What data or capability the asset holds; migration or retention policy

**Decisions already made:**
- [ ] **Decommission approved** – Decision and approval from owner or governance

**Constraints:**
- [ ] **No breaking dependents** – All consumers must be migrated, retired, or explicitly accepted as broken (with approval)
- [ ] **Data policy** – Data retention, deletion, or migration per policy

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing dependency view** – Discover dependents (code, config, DNS, references); document and get sign-off
- **Missing data policy** – Confirm with security/compliance; document retention or deletion approach

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – From dependency analysis through removal and documentation
- **Asset and reason** – What is being decommissioned and why
- **Dependents** – List of consumers; migration or retirement plan per consumer
- **Data/capability** – Migration, retention, or deletion per policy
- **Removal order** – Code, config, infra, data (and any rollback plan)
- **Risks** – Missed dependents, data retention, rollback need
- **Validation** – How to confirm no remaining references or cost

**Plan must be reviewed before execution begins**

**Output:**
- Decommission Plan (documented and approved)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Identify Dependents and Plan Migration or Retirement

**Purpose**
- Ensure all consumers of the asset are identified and have a path off

**Inputs**
- **From:** Procedure Required Inputs (asset, dependency graph, data/capability)

**Actions**
- List all dependents (services, jobs, configs, DNS, docs, integrations) using dependency graph and discovery (code search, config review, DNS).
- For each dependent: decide migrate (to replacement) or retire (no longer needed).
- Plan migration or retirement (owner, timeline, steps); get commitment from owners.
- Plan data/capability: migrate to replacement, archive, or delete per policy.
- Document decommission plan (asset, reason, dependents, migration/retirement, data plan, removal order).
- Get plan approved (tech lead, governance, or asset owner).

**Decisions / Evaluations**
- **Decision:** Are all dependents identified and migration/retirement planned and approved?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, complete discovery and plan; re-approve

**Outputs**
- Decommission plan (dependents, migration/retirement, data plan, removal order)
- Plan approved

**Failure Handling**
- **Failure:** Unknown or disputed dependents
  - **Action:** Resolve with owners; do not remove asset until dependents are off or explicitly accepted

---

#### Step 2: Execute Migration or Retirement of Dependents

**Purpose**
- Move or retire all consumers so the asset can be safely removed

**Inputs**
- **From:** Step 1 outputs (plan, dependents, migration/retirement)

**Actions**
- Execute migration or retirement per plan (each dependent moved to replacement or retired).
- Verify each dependent no longer uses the asset (tests, config, traffic).
- Migrate or dispose of data/capability per plan (replacement, archive, delete).
- Document completion (each dependent, data); get sign-off from owners.
- If any dependent cannot be migrated yet: defer decommission or document exception and residual risk.

**Decisions / Evaluations**
- **Decision:** Are all dependents off and data/capability handled per plan?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, complete migrations or update plan and timeline

**Outputs**
- All dependents migrated or retired
- Data/capability migrated or disposed per policy
- Sign-off from dependent owners

**Failure Handling**
- **Failure:** Critical dependent cannot migrate in time
  - **Action:** Defer decommission or agree exception; do not remove asset until safe

---

#### Step 3: Remove Asset and Update Documentation

**Purpose**
- Remove the asset and update docs, ADRs, and baseline

**Inputs**
- **From:** Step 2 outputs (dependents off, data handled)

**Actions**
- Remove asset in agreed order (e.g. disable traffic, remove code/config, tear down infra, delete data per policy).
- Verify removal (no traffic, no references in code/config/DNS, no residual cost where applicable).
- Update architecture baseline, dependency graph, and ADRs (mark asset decommissioned, update links).
- Document decommission (what, when, reason, data disposition); store in agreed location.
- Communicate completion to stakeholders; close related tickets or tech debt items.

**Decisions / Evaluations**
- **Decision:** Is asset fully removed and documentation updated?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete removal and docs

**Outputs**
- Asset removed (code, config, infra, data per policy)
- Baseline, dependency graph, ADRs updated
- Decommission documented and communicated

**Failure Handling**
- **Failure:** Residual reference or cost found
  - **Action:** Remove reference or cancel cost; re-verify; update docs

---

### 6. Output Contract

**Artifacts produced:** Decommission plan, migration/retirement completion record, removal verification, updated baseline/ADR/dependency graph, decommission summary.  
**State changes:** Asset removed; dependents migrated or retired; docs updated.  
**Signals emitted:** “Decommission complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] All dependents identified and migrated or retired
- [ ] Data/capability handled per policy
- [ ] Asset removed; no residual references or cost; docs updated

**Who can approve:** Asset owner, tech lead, or governance

---

### 8. Downstream Dependencies

**Output → Input:** Decommission summary and updated baseline/graph → [Architecture Baseline Procedure](./architecture-baseline-procedure.md), [Dependency Graph Procedure](./dependency-graph-procedure.md), [ADR Procedure](./adr-procedure.md) (supersede or deprecate).

---

### 9. Definition of Done

- [ ] Dependents identified and migration/retirement complete
- [ ] Data/capability migrated or disposed per policy
- [ ] Asset removed; verification and documentation complete

---

### 10. Audit & Traceability

**Links to:** Decommission plan, migration/retirement records, baseline, ADRs. **Audit trail:** What was decommissioned, when, reason, data disposition.

---

### 11. Exit States

**✅ Completed successfully** – Asset removed; dependents off; docs updated.  
**⚠️ Blocked** – Missing dependent or approval; resolve and re-run.  
**❌ Aborted** – Decommission cancelled; document reason and current state.

---

**Status:** Active Procedure  
**Owner:** Asset owner / Tech lead
