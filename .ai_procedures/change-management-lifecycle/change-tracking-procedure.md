# Procedure: Change Tracking (Change Management Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to record, track, and update change requests through their lifecycle. It ensures every change that requires tracking has a single record, status, and audit trail so that nothing is lost and progress is visible.

**What problem it solves**

- Changes not recorded; no visibility or audit trail
- Duplicate or conflicting change records; no single source of truth
- Status unclear; stakeholders don’t know if change is requested, approved, or done
- No link between change, approval, and execution

**What "success" looks like at the end**

Change tracking complete with:
- Change request recorded (what, why, when, scope, impact, requester)
- Status updated through lifecycle (requested, in review, approved/rejected, scheduled, executed, closed)
- Record linked to [Change Approval Procedure](./change-approval-procedure.md) and [Change Communication Procedure](./change-communication-procedure.md) as applicable
- Audit trail for reporting and compliance

---

### 2. Trigger

**What causes this procedure to be invoked**

- New change request (release, infra, config, feature, incident fix) that must be tracked
- [Change Approval Procedure](./change-approval-procedure.md) requires a change record before approval
- Release, feature, or incident process mandates change tracking per org
- Governance or compliance requires change log (see [Governance & Compliance](../governance-compliance/))

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Change request** – What is changing, why, when (planned), scope, impact, requester (or enough to create record)
- [ ] **Change tracker** – System or log where changes are recorded (Jira, service desk, change log, etc.)
- [ ] **Change lifecycle / status model** – States (e.g. requested, in review, approved, scheduled, executed, closed) per org

**Decisions already made:**
- [ ] **Change will be tracked** – Requester or policy requires tracking

**Constraints:**
- [ ] **Required fields** – What each change record must include (e.g. description, requester, date, type)
- [ ] **Retention** – How long change records are kept (audit, compliance)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **No change tracker** – Use agreed fallback (e.g. shared doc, wiki) until tracker exists; migrate later
- **Lifecycle undefined** – Use minimal lifecycle (requested → approved/rejected → executed → closed); refine with org

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Create record, update status, link approval/comms, close
- **Procedures to be invoked** – [Change Approval Procedure](./change-approval-procedure.md), [Change Communication Procedure](./change-communication-procedure.md)
- **Dependencies between steps** – Create → Update → Link → Close
- **Risks & unknowns** – Tracker unavailable, multiple trackers, legacy changes
- **Validation points** – After create, after material status updates

**Plan must be reviewed before execution begins**

**Output:**
- Change Tracking Plan (tracker, lifecycle, required fields)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Create Change Record

**Purpose**
- Register change request in tracker with required fields

**Inputs**
- **From:** Procedure Required Inputs (change request, tracker, required fields)

**Actions**
- Create change record in tracker.
- Populate required fields: description, what/why/when, scope, impact, requester, type (standard/emergency/normal).
- Set initial status (e.g. “Requested” or “Draft”).
- Add rollback or remediation summary if available.
- Ensure single record per change; avoid duplicates.

**Decisions / Evaluations**
- **Go:** Record created and complete → Step 2  
- **No-Go:** Complete required fields; re-check  
- **Duplicate** – Link to existing record; do not create duplicate

**Outputs**
- Change record (ID, description, requester, type, initial status)
- Link for use in approval and communication

**Failure Handling**
- **Failure:** Tracker down or required field missing  
  - **Action:** Use fallback log; create record when tracker available; backfill if needed

---

#### Step 2: Update Status Through Lifecycle

**Purpose**
- Keep change record current as it moves through approval, scheduling, execution

**Inputs**
- **From:** Step 1 (change record); [Change Approval Procedure](./change-approval-procedure.md) outcome; execution status

**Actions**
- Update status when:
  - Submitted for approval → “In review”
  - Approval decision → “Approved” / “Rejected” / “Deferred”
  - Scheduled → “Scheduled” (include date/time if applicable)
  - Execution started → “In progress”
  - Execution complete → “Executed” or “Closed”
- Add brief notes or links (approval rationale, comms, runbook, incident).
- Maintain audit trail (who updated, when).

**Decisions / Evaluations**
- **Go:** Status reflects current state → Step 3  
- **No-Go:** Update as soon as info available  
- **Rejected or cancelled** – Set final status; do not proceed to execution updates

**Outputs**
- Change record updated with status and audit trail
- Links to approval and communication where applicable

**Failure Handling**
- **Failure:** Updates delayed or missed  
  - **Action:** Backfill from approval/comms/execution records; document gap

---

#### Step 3: Link to Approval and Communication; Close

**Purpose**
- Link change record to approval and comms; close when complete

**Inputs**
- **From:** Step 2 (change record); [Change Approval Procedure](./change-approval-procedure.md), [Change Communication Procedure](./change-communication-procedure.md)

**Actions**
- Link change record to approval decision (approved/rejected/deferred) and rationale.
- Link to [Change Communication Procedure](./change-communication-procedure.md) notifications (planned, executed, etc.) where used.
- When change is executed (or rejected/withdrawn), set final status and close record.
- Ensure record is retained per org retention policy for audit and reporting.

**Decisions / Evaluations**
- **Go:** Links added; record closed when appropriate → procedure complete  
- **No-Go:** Add links; close when change fully complete  
- **Deferred** – Keep open until next review; update when decided

**Outputs**
- Change record linked to approval and comms; closed when done
- Audit trail complete for reporting and compliance

**Failure Handling**
- N/A (procedure complete)

---

### 6. Output Contract

**Artifacts produced:** Change record(s) with description, status, lifecycle, links to approval and communication; audit trail.  
**State changes:** Change tracked through lifecycle; visible for reporting and audit.  
**Signals emitted:** “Change recorded”; “Change status updated”; “Change closed”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Change record created with required fields
- [ ] Status updated through lifecycle
- [ ] Linked to approval and communication where applicable
- [ ] Record closed when change complete (or rejected/withdrawn)

**Who can approve:** Change manager, requester, or process owner (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Change record → [Change Approval Procedure](./change-approval-procedure.md), [Change Communication Procedure](./change-communication-procedure.md), release deployment, incident remediation, governance reporting.

**Procedures that depend on this:**
- [Change Approval Procedure](./change-approval-procedure.md) – Uses change record for approval
- [Change Communication Procedure](./change-communication-procedure.md) – May use change record for notifications
- Release, Feature, Incident lifecycles – May require change tracking for governed changes

---

### 9. Definition of Done

- [ ] Change record created and required fields populated
- [ ] Status updated through lifecycle
- [ ] Linked to approval and communication as applicable
- [ ] Record closed when change is complete or no longer active

---

### 10. Audit & Traceability

**Links to:** Change record, approval, communication, execution (release, runbook, incident). **Audit trail:** Create/update timestamps, status history, actors.

---

### 11. Exit States

**✅ Completed successfully** – Change tracked through lifecycle; record closed.  
**⚠️ Blocked** – Tracker unavailable or lifecycle unclear; resolve and re-run.  
**❌ Aborted** – Change tracking cancelled (e.g. change withdrawn); document and close record.

---

**Status:** Active Procedure  
**Owner:** Change manager / Process owner
