# Procedure: Change Communication (Change Management Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to communicate planned, in-progress, and completed changes to stakeholders. It ensures the right people are informed at the right time so that impact is understood, disruptions are anticipated, and there is a clear record of what was communicated.

**What problem it solves**

- Changes executed without advance notice; stakeholders surprised
- No consistent channel or format; comms scattered or missed
- Unclear what changed, when, or who is affected
- No record of change communications for audit or follow-up

**What "success" looks like at the end**

Change communication complete with:
- Stakeholders notified of planned change (what, when, impact, contact)
- Updates provided when change is in progress or completed (or rolled back)
- Comms recorded and linked to [Change Tracking Procedure](./change-tracking-procedure.md)
- Audience, channel, and timing match org policy and change type

---

### 2. Trigger

**What causes this procedure to be invoked**

- Change is approved and scheduled (via [Change Approval Procedure](./change-approval-procedure.md)); stakeholders must be notified
- [Change Tracking Procedure](./change-tracking-procedure.md) records a change that requires communication
- Release, infrastructure, or config change has stakeholder impact per org policy
- Change window or execution is starting; reminder or status update needed
- Change completed, rolled back, or deferred; outcome must be communicated

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Change record** – From [Change Tracking Procedure](./change-tracking-procedure.md): what, when, scope, impact, status
- [ ] **Audiences** – Who must be informed (teams, customers, support, leadership) per change type and org
- [ ] **Channels** – Where to communicate (email, Slack, status page, change calendar, etc.)
- [ ] **Comms template or format** – What to include (summary, window, impact, rollback, contact)

**Decisions already made:**
- [ ] **Change is tracked** – Change has a record (or will be created)
- [ ] **Communication owner** – Person or role responsible for sending updates

**Constraints:**
- [ ] **Lead time** – Advance notice required (e.g. 24–72 h) for standard changes per org
- [ ] **Emergency changes** – Shorter or concurrent notice; post-change summary still required

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Change not tracked** – Create record via [Change Tracking Procedure](./change-tracking-procedure.md); then communicate
- **Audiences or channels unclear** – Use org default (e.g. eng channel, support) and document; refine with change policy

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Plan comms, send planned-change notice, send updates, send outcome
- **Procedures to be invoked** – [Change Tracking Procedure](./change-tracking-procedure.md) (link comms to record)
- **Dependencies between steps** – Plan → Notify (planned) → Update (in progress) → Notify (outcome)
- **Risks & unknowns** – Urgent change, missing audience, channel failure
- **Validation points** – After each send, when linking to change record

**Plan must be reviewed before execution begins**

**Output:**
- Change Communication Plan (audiences, channels, timing, template)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Plan Communication

**Purpose**
- Define audiences, channels, timing, and message for the change

**Inputs**
- **From:** Procedure Required Inputs (change record, audiences, channels, template)

**Actions**
- Identify audiences (teams, customers, support, leadership) per change type and impact.
- Choose channels (email, Slack, status page, change calendar) per audience and org.
- Set timing: advance notice (per lead time), reminder if needed, in-progress update, outcome (complete/rollback/deferred).
- Draft message(s) using template: what, when, impact, rollback plan, contact for questions.
- Document plan (audiences, channels, timing) and link to change record.

**Decisions / Evaluations**
- **Go:** Comms plan documented → Step 2  
- **No-Go:** Resolve missing audience or channel; then finalize plan  
- **Emergency** – Shorten lead time; use fastest channel; still plan outcome communication

**Outputs**
- Change communication plan (audiences, channels, timing, drafts)
- Link to change record

**Failure Handling**
- **Failure:** Audience or channel missing  
  - **Action:** Use default audience/channel; document; refine for next change

---

#### Step 2: Send Planned-Change Notification

**Purpose**
- Notify stakeholders before the change window

**Inputs**
- **From:** Step 1 (comms plan, drafts); change record

**Actions**
- Send planned-change notification per lead time (e.g. 24–72 h before window).
- Include: what is changing, when (window), expected impact, rollback plan, contact.
- Use designated channels per audience.
- Record send (date, channel, audience) and link to [Change Tracking Procedure](./change-tracking-procedure.md).

**Decisions / Evaluations**
- **Go:** Notification sent and recorded → Step 3  
- **No-Go:** Send as soon as possible; record; note if late  
- **Emergency** – Send as soon as feasible; may be concurrent with change

**Outputs**
- Planned-change notification sent
- Comms log updated; linked to change record

**Failure Handling**
- **Failure:** Channel down or wrong audience  
  - **Action:** Use backup channel; correct audience; document

---

#### Step 3: Send Updates (In Progress, Outcome)

**Purpose**
- Notify stakeholders when change starts, completes, rolls back, or is deferred

**Inputs**
- **From:** Step 2; change record; execution status

**Actions**
- **In progress:** Send brief update when change window starts or execution begins (if org requires).
- **Outcome:** Send when change completes, rolls back, or is deferred. Include: outcome (success, rolled back, deferred), brief summary, any follow-up (e.g. incident, post-mortem).
- Use same or appropriate channels; keep message consistent with change record.
- Record each update and link to change record.

**Decisions / Evaluations**
- **Go:** Updates sent and recorded → procedure complete  
- **No-Go:** Send outcome update as soon as known; record  
- **Rollback** – Communicate clearly that change was rolled back and why (link to incident/RCA if applicable)

**Outputs**
- In-progress and outcome notifications sent
- Comms log updated; change record linked

**Failure Handling**
- **Failure:** Outcome unknown or delayed  
  - **Action:** Send “in progress” or “under review” update; send outcome when confirmed; document

---

### 6. Output Contract

**Artifacts produced:** Change communication plan; planned-change notification; in-progress and outcome updates; comms log linked to [Change Tracking Procedure](./change-tracking-procedure.md).  
**State changes:** Stakeholders informed of planned change and outcome.  
**Signals emitted:** “Planned change communicated”; “Change in progress”; “Change complete” / “Change rolled back” / “Change deferred”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Comms plan defined (audiences, channels, timing)
- [ ] Planned-change notification sent per lead time (or as soon as feasible for emergency)
- [ ] Outcome notification sent (complete, rolled back, or deferred)
- [ ] Comms recorded and linked to change record

**Who can approve:** Change manager, comms owner, or process owner (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Change communications → Stakeholders; [Change Tracking Procedure](./change-tracking-procedure.md) (link comms to record). [Customer/Stakeholder Comms Procedure](../release-lifecycle/customer-stakeholder-comms-procedure.md) may align for release-related changes.

**Procedures that depend on this:**
- [Change Approval Procedure](./change-approval-procedure.md) – May use comms to notify of approval/rejection
- [Change Tracking Procedure](./change-tracking-procedure.md) – Links comms to change record
- Release Lifecycle – Release-related change comms may align with release comms

---

### 9. Definition of Done

- [ ] Comms plan documented
- [ ] Planned-change notification sent
- [ ] Outcome notification sent (complete, rolled back, or deferred)
- [ ] Comms recorded and linked to change record

---

### 10. Audit & Traceability

**Links to:** Change record, comms plan, sent messages, channels, audiences. **Audit trail:** Send dates, channels, owner.

---

### 11. Exit States

**✅ Completed successfully** – Planned change and outcome communicated; comms recorded.  
**⚠️ Blocked** – Channel or audience missing; resolve and re-run.  
**❌ Aborted** – Change communication cancelled (e.g. change withdrawn); document and notify if already sent.

---

**Status:** Active Procedure  
**Owner:** Change manager / Comms owner
