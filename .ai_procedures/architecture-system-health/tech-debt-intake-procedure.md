# Procedure: Tech Debt Intake

### 1. Purpose

**Why this procedure exists**

This procedure captures, triages, and records technical debt so that it can be tracked, prioritized, and addressed in a consistent way. It ensures debt is visible, scoped, and linked to impact and remediation options.

**What problem it solves**

- Tech debt not recorded or tracked
- No prioritization or ownership; debt accumulates
- Remediation work not planned or scheduled
- Duplicate or overlapping debt items not consolidated

**What "success" looks like at the end**

Tech debt intake that includes:
- Debt item described (what, where, impact)
- Severity and priority assigned
- Ownership and optional target milestone
- Debt recorded in backlog or tracker; ready for planning

---

### 2. Trigger

**What causes this procedure to be invoked**

- New tech debt identified (during review, refactor, incident, or audit)
- Team or stakeholder reports debt that should be tracked
- [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md) or post-incident review produces debt items
- Periodic tech debt review or backlog grooming

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Debt description** – What the debt is (e.g. outdated lib, missing tests, known workaround)
- [ ] **Location/scope** – Where it lives (repo, service, component)
- [ ] **Impact** – Why it matters (risk, cost, maintainability, performance)
- [ ] **Tracker or backlog** – Where debt will be recorded (Jira, beads, wiki, etc.)

**Decisions already made:**
- [ ] **Debt is acknowledged** – Someone has identified it as debt worth tracking

**Constraints:**
- [ ] **Prioritization criteria** – How severity/priority will be set (org or team standard)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing impact** – Describe impact briefly; refine later
- **Missing tracker** – Record in agreed location (e.g. beads, wiki) until tracker is defined

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – From description through prioritization and recording
- **Scope** – Single item or batch of items
- **Prioritization** – Criteria for severity/priority (e.g. risk, cost, effort)
- **Tracker** – Where items will be recorded and any required fields
- **Risks & unknowns** – Unclear impact, missing owner

**Plan must be reviewed before execution begins**

**Output:**
- Tech Debt Intake Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Describe and Scope Debt Item

**Purpose**
- Capture clear description, location, and impact of the debt

**Inputs**
- **From:** Procedure Required Inputs (debt description, location, impact)

**Actions**
- **What** – Clear description of the debt (e.g. “Service X uses deprecated SDK Y”, “No tests for module Z”).
- **Where** – Repo, service, component, or file area.
- **Impact** – Risk (security, stability), cost (maintenance, incident), or quality (maintainability, performance).
- **Remediation option** – Brief idea of how to address (e.g. upgrade, refactor, add tests); or “TBD”.
- Check for duplicate or overlapping items in backlog; consolidate if appropriate.
- Document in draft form (ticket draft, wiki page, or intake form).

**Decisions / Evaluations**
- **Decision:** Is debt item described and scoped?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, gather more info and re-document

**Outputs**
- Debt item description (what, where, impact, remediation option)
- Duplicate check done; consolidated if needed

**Failure Handling**
- **Failure:** Impact unclear or disputed
  - **Action:** Document best-known impact; flag for review; refine in planning

---

#### Step 2: Prioritize and Record

**Purpose**
- Assign severity/priority and owner; record in tracker

**Inputs**
- **From:** Step 1 outputs (debt description)
- **From:** Procedure Required Inputs (tracker, prioritization criteria)

**Actions**
- **Severity** – e.g. High / Medium / Low (risk or impact).
- **Priority** – e.g. P0–P2 or backlog order (when to address).
- **Owner** – Team or person responsible (or “unassigned”).
- **Target** – Optional milestone or quarter (or “backlog”).
- Record item in tracker (Jira, beads, wiki) with required fields.
- Link to related ADRs, incidents, or code where relevant.
- Communicate to owner or team if high priority.

**Decisions / Evaluations**
- **Decision:** Is item prioritized and recorded?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete fields and re-record

**Outputs**
- Debt item in tracker (description, severity, priority, owner, target)
- Linked to related artifacts where relevant

**Failure Handling**
- **Failure:** Tracker or required fields missing
  - **Action:** Record in agreed fallback location; migrate when tracker ready

---

### 6. Output Contract

**Artifacts produced:** Tech debt item(s) in tracker (description, scope, impact, severity, priority, owner, optional target).  
**State changes:** Debt visible and trackable; ready for planning and remediation.  
**Signals emitted:** “Tech debt recorded”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Debt described (what, where, impact)
- [ ] Severity and priority assigned
- [ ] Item recorded in tracker; owner or “unassigned” set

**Who can approve:** Tech lead, product, or backlog owner (per org)

---

### 8. Downstream Dependencies

**Output → Input:** Tech debt items → Backlog planning, [Refactor Procedure](./refactor-procedure.md), [Performance Tuning Procedure](./performance-tuning-procedure.md), [Security Hardening Procedure](./security-hardening-procedure.md) (when remediation is scheduled).

---

### 9. Definition of Done

- [ ] Debt item described and scoped
- [ ] Severity and priority assigned; owner or unassigned
- [ ] Item recorded in tracker and linked where relevant

---

### 10. Audit & Traceability

**Links to:** Tracker item(s), related ADRs, incidents, code. **Audit trail:** Intake date, recorder, priority.

---

### 11. Exit States

**✅ Completed successfully** – Debt recorded, prioritized, in tracker.  
**⚠️ Blocked** – Missing description, impact, or tracker; resolve and re-run.  
**❌ Aborted** – Debt not accepted for tracking; document reason.

---

**Status:** Active Procedure  
**Owner:** Tech lead / Backlog owner
