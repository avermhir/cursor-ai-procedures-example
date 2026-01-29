# Procedure: Change Approval (Change Management Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to obtain formal approval for changes that require it (releases, infrastructure, config, incident fixes, etc.). It ensures changes are assessed, reviewed by the right authority, and approved or rejected consistently so that risk is managed and decisions are traceable.

**What problem it solves**

- Changes implemented without approval when required
- Unclear who can approve what; inconsistent approval paths
- No record of approval or rejection; audit trail missing
- Emergency vs standard change not distinguished

**What "success" looks like at the end**

Change approval complete with:
- Change request assessed and submitted for approval
- Approver (change authority, CAB, delegate) has approved or rejected with rationale
- Decision recorded and linked to [Change Tracking Procedure](./change-tracking-procedure.md)
- Requester and stakeholders notified; execution can proceed if approved

---

### 2. Trigger

**What causes this procedure to be invoked**

- Release deployment or significant release change requires change approval (per org)
- Infrastructure, config, or platform change requires approval
- [Feature Lifecycle Change Management Procedure](../feature-lifecycle/change-management-procedure.md) defers to formal approval (e.g. large scope change)
- Incident fix or corrective action requires change approval (non-emergency)
- Policy or governance requires approval for the change type (see [Governance & Compliance](../governance-compliance/))
- [Change Tracking Procedure](./change-tracking-procedure.md) records a change that needs approval before execution

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Change request** – What is changing, why, when, scope, impact, rollback plan (or link to [Change Tracking Procedure](./change-tracking-procedure.md) record)
- [ ] **Change type** – Standard, emergency, or normal (per org definitions)
- [ ] **Approval authority** – Who can approve (CAB, change manager, tech lead, etc.) per org and change type
- [ ] **Change calendar / window** – When change is planned (if applicable)

**Decisions already made:**
- [ ] **Change is documented** – Change request is recorded (e.g. via [Change Tracking Procedure](./change-tracking-procedure.md))
- [ ] **Requester identified** – Person or team requesting the change

**Constraints:**
- [ ] **Approval SLA** – Time within which approval must be sought (e.g. before change window)
- [ ] **Emergency bypass** – When emergency change can proceed with post-hoc approval (per org)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Change not documented** – Create change record via [Change Tracking Procedure](./change-tracking-procedure.md); then request approval
- **Approval authority unclear** – Use org RACI or change policy to assign; escalate if undefined

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Assess request, route to authority, submit, record decision, notify
- **Procedures to be invoked** – [Change Tracking Procedure](./change-tracking-procedure.md) (record approval), [Change Communication Procedure](./change-communication-procedure.md) (notify)
- **Dependencies between steps** – Assess → Route → Submit → Decision → Record → Notify
- **Risks & unknowns** – Approver unavailable, urgent change, conflicting changes
- **Validation points** – After submission, after decision

**Plan must be reviewed before execution begins**

**Output:**
- Change Approval Plan (authority, timeline, criteria)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Assess Change Request

**Purpose**
- Confirm change request is complete and ready for approval

**Inputs**
- **From:** Procedure Required Inputs (change request, change type)

**Actions**
- Verify change request includes: what, why, when, scope, impact, rollback or remediation.
- Classify as standard, emergency, or normal per org; confirm correct approval path.
- If incomplete, return to requester; ensure [Change Tracking Procedure](./change-tracking-procedure.md) has a record.
- Document assessment (ready / not ready, gaps).

**Decisions / Evaluations**
- **Go:** Request complete and classified → Step 2  
- **No-Go:** Return to requester; complete request; re-assess  
- **Emergency** – If org allows emergency bypass, may proceed with post-hoc approval; document and notify approver

**Outputs**
- Change request assessed and classified
- Approval path determined

**Failure Handling**
- **Failure:** Request incomplete or misclassified  
  - **Action:** Fix and re-assess before submission

---

#### Step 2: Route to Approval Authority and Submit

**Purpose**
- Submit change to correct approver(s) and obtain decision

**Inputs**
- **From:** Step 1 (assessment, approval path); approval authority

**Actions**
- Route change request to designated approver(s) (CAB, change manager, delegate).
- Provide all required info (request, impact, rollback, window).
- Request decision by needed date (e.g. before change window).
- Track submission (date, channel, approver).

**Decisions / Evaluations**
- **Go:** Submitted; decision pending → Step 3  
- **No-Go:** Resolve routing issue; re-submit  
- **Approver unavailable** – Use backup or escalation per org; document

**Outputs**
- Change submitted to approval authority
- Submission recorded

**Failure Handling**
- **Failure:** Wrong approver or missing info  
  - **Action:** Re-route or supplement; re-submit

---

#### Step 3: Record Decision and Notify

**Purpose**
- Record approval or rejection and notify requester and stakeholders

**Inputs**
- **From:** Step 2 (submission); approver decision

**Actions**
- Record decision (approved / rejected / deferred) and rationale in [Change Tracking Procedure](./change-tracking-procedure.md) or linked system.
- Notify requester and relevant stakeholders via [Change Communication Procedure](./change-communication-procedure.md) or agreed channel.
- If approved: link to change record; execution can proceed per org.
- If rejected: document reason; requester can revise and re-submit or close.
- If deferred: document next review date; track until decided.

**Decisions / Evaluations**
- **Go:** Decision recorded and communicated → procedure complete  
- **No-Go:** Complete recording and notification

**Outputs**
- Approval decision (approved / rejected / deferred) and rationale
- Change record updated; stakeholders notified

**Failure Handling**
- **Failure:** Decision not recorded or not communicated  
  - **Action:** Record and notify as soon as possible; do not proceed to execution until requester has confirmation if approved

---

### 6. Output Contract

**Artifacts produced:** Approval decision and rationale; updated change record (via [Change Tracking Procedure](./change-tracking-procedure.md)); notification to requester and stakeholders.  
**State changes:** Change approved or rejected; execution may proceed if approved.  
**Signals emitted:** “Change approved”; “Change rejected”; “Change deferred”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Change request assessed and classified
- [ ] Submission to correct approval authority
- [ ] Decision recorded with rationale
- [ ] Requester and stakeholders notified

**Who can approve:** Change authority, CAB, change manager, or delegate (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Approval decision → [Change Tracking Procedure](./change-tracking-procedure.md), [Change Communication Procedure](./change-communication-procedure.md), release deployment, feature implementation, incident remediation. [Feature Lifecycle Change Management Procedure](../feature-lifecycle/change-management-procedure.md) and [Governance & Compliance](../governance-compliance/) may require this approval before proceeding.

**Procedures that depend on this:**
- [Change Tracking Procedure](./change-tracking-procedure.md) – Records approval decision
- [Change Communication Procedure](./change-communication-procedure.md) – Notifies of approval/rejection
- Release Lifecycle – Releases may require change approval
- Feature Lifecycle – Large or governed changes may require approval
- Incident Lifecycle – Non-emergency fixes may require approval

---

### 9. Definition of Done

- [ ] Change request assessed and submitted
- [ ] Decision (approved / rejected / deferred) recorded with rationale
- [ ] Requester and stakeholders notified

---

### 10. Audit & Traceability

**Links to:** Change request, change record, approver, decision, rationale, notification. **Audit trail:** Submission date, decision date, approver, outcome.

---

### 11. Exit States

**✅ Completed successfully** – Decision recorded and communicated; execution may proceed if approved.  
**⚠️ Blocked** – Approver unavailable or request incomplete; resolve and re-run.  
**❌ Aborted** – Approval process cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Change manager / Change authority
