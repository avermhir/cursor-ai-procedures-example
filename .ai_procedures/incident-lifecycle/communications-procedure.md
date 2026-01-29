# Procedure: Communications (Incident Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to communicate incident status to stakeholders (customers, internal teams, leadership, support) during and after an incident. It ensures updates are timely, accurate, and consistent so that stakeholders are informed and trust is maintained.

**What problem it solves**

- No or delayed stakeholder updates; confusion and duplicate inquiries
- Inconsistent or conflicting messages across channels
- No clear ownership for external or leadership comms
- Post-incident summary or apology missing

**What "success" looks like at the end**

Communications complete with:
- Initial and ongoing updates delivered per cadence and audience
- Single source of truth (incident record) kept in sync with comms
- Post-incident summary (and customer-facing update if applicable) published
- Comms closed when incident is resolved and follow-up (RCA, postmortem) is communicated

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Triage Procedure](./triage-procedure.md) completes and triggers communications
- Incident lead starts comms in parallel with [Mitigation Procedure](./mitigation-procedure.md)
- Stakeholders request status or escalation

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Incident record** – From [Triage Procedure](./triage-procedure.md): what, severity, owner, status
- [ ] **Comms channels** – Where updates go (status page, email, Slack, support portal, etc.)
- [ ] **Comms template or guidelines** – What to include (impact, ETA, next update), tone, and approvals if required

**Decisions already made:**
- [ ] **Incident lead assigned** – Owner responsible for comms (or delegated comms lead)
- [ ] **Audiences defined** – Who gets updates (customers, internal, leadership, support) and how

**Constraints:**
- [ ] **Cadence** – Update frequency (e.g. every 30 min for P0, every 2 h for P1) per severity
- [ ] **Approvals** – Customer-facing or executive comms approval flow if required by org

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing comms template** – Use minimal format (what, impact, what we’re doing, next update); refine later
- **Missing channels** – Use default (e.g. incident channel, email); add status page etc. when available

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Initial update, ongoing updates, resolution update, post-incident summary
- **Procedures to be invoked** – None; this procedure supports [Triage](./triage-procedure.md) and [Mitigation](./mitigation-procedure.md)
- **Dependencies between steps** – Initial → Ongoing → Resolution → Post-incident
- **Risks & unknowns** – Unclear ETA, sensitive customer, regulatory notification requirements
- **Validation points** – After each major update wave

**Plan must be reviewed before execution begins**

**Output:**
- Communications Plan (audiences, channels, cadence, template)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Send Initial Update

**Purpose**
- Notify stakeholders that an incident is under investigation

**Inputs**
- **From:** Procedure Required Inputs (incident record, channels, template)

**Actions**
- Draft initial update: incident identified, observed impact, investigating, next update by when.
- Use approved template; avoid speculation on root cause or ETA if unknown.
- Publish to designated channels (status page, email, Slack, etc.).
- Record update in incident record; note time and channels.

**Decisions / Evaluations**
- **Go:** Initial update sent → Step 2  
- **No-Go:** Get approval if required; then send

**Outputs**
- Initial update published; incident record updated

**Failure Handling**
- **Failure:** Approval delayed or channel unavailable  
  - **Action:** Use fallback channel; send as soon as possible; document

---

#### Step 2: Send Ongoing Updates

**Purpose**
- Keep stakeholders informed per cadence until resolution

**Inputs**
- **From:** Step 1; incident record; [Mitigation Procedure](./mitigation-procedure.md) status

**Actions**
- Send updates at agreed cadence (e.g. every 30 min for P0).
- Include: current status, impact, what we’re doing, next update time.
- Stay consistent with incident record; avoid contradicting mitigation facts.
- If ETA or root cause known, include only when confident and approved if needed.
- Record each update in incident record.

**Decisions / Evaluations**
- **Go:** Cadence maintained until resolution → Step 3  
- **No-Go:** Catch up with update; resume cadence  
- **Resolution reached** – Proceed to Step 3 (resolution update)

**Outputs**
- Ongoing updates published; incident record kept in sync

**Failure Handling**
- **Failure:** Missed cadence  
  - **Action:** Send update as soon as possible; acknowledge delay if appropriate

---

#### Step 3: Send Resolution Update

**Purpose**
- Notify stakeholders that the incident is resolved

**Inputs**
- **From:** [Mitigation Procedure](./mitigation-procedure.md) (resolution); incident record

**Actions**
- Draft resolution update: incident resolved, brief summary of cause if appropriate, any residual impact or follow-up (e.g. RCA, postmortem).
- Publish to same channels as initial and ongoing updates.
- Record in incident record; mark “Resolution update sent”.
- If customer-facing, ensure tone and content per org (apology, thank you, etc.).

**Decisions / Evaluations**
- **Go:** Resolution update sent → Step 4  
- **No-Go:** Align with incident lead; then send

**Outputs**
- Resolution update published; incident record updated

**Failure Handling**
- **Failure:** Premature “resolved” (issue recurs)  
  - **Action:** Send correction; revert to ongoing updates; document

---

#### Step 4: Post-Incident Summary and Close

**Purpose**
- Publish post-incident summary and close communications

**Inputs**
- **From:** Step 3; incident record; [Postmortem Procedure](./postmortem-procedure.md) output (if available)

**Actions**
- Prepare post-incident summary: what happened, impact, resolution, follow-up (RCA, postmortem, corrective actions). Use [Postmortem Procedure](./postmortem-procedure.md) output when available.
- Publish to appropriate audiences (internal, customers, leadership per org).
- Close comms: no further updates unless new info; link to postmortem or status page.
- Record in incident record; mark “Comms closed”.

**Decisions / Evaluations**
- **Go:** Post-incident summary published; comms closed → procedure complete  
- **No-Go:** Complete summary; then close  
- **Postmortem not yet done** – Publish “resolution + RCA in progress”; close comms; add postmortem link later when available

**Outputs**
- Post-incident summary; comms closed; incident record updated

**Failure Handling**
- N/A (procedure complete)

---

### 6. Output Contract

**Artifacts produced:** Initial, ongoing, and resolution updates; post-incident summary; incident record with comms log.  
**State changes:** Stakeholders informed; comms closed.  
**Signals emitted:** “Initial update sent”; “Resolution update sent”; “Comms closed”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Initial update sent
- [ ] Ongoing updates sent per cadence until resolution
- [ ] Resolution update sent
- [ ] Post-incident summary published; comms closed

**Who can approve:** Incident lead, comms lead, or leadership (per org and audience).

---

### 8. Downstream Dependencies

**Output → Input:** Comms updates, post-incident summary → Stakeholders; [Postmortem Procedure](./postmortem-procedure.md) may feed post-incident summary. [Customer/Stakeholder Comms Procedure](../release-lifecycle/customer-stakeholder-comms-procedure.md) may align with release-related incident comms.

**Procedures that depend on this:**
- [Triage Procedure](./triage-procedure.md) – Triggers comms
- [Mitigation Procedure](./mitigation-procedure.md) – Comms runs in parallel; status aligned with mitigation

---

### 9. Definition of Done

- [ ] Initial, ongoing, and resolution updates sent
- [ ] Post-incident summary published; comms closed
- [ ] Incident record updated with comms log

---

### 10. Audit & Traceability

**Links to:** Incident record, comms channels, status page, postmortem. **Audit trail:** Update times, channels, owners.

---

### 11. Exit States

**✅ Completed successfully** – Comms complete; post-incident summary published; closed.  
**⚠️ Blocked** – Approval or channel blocked; resolve and continue.  
**❌ Aborted** – Comms cancelled (e.g. false alarm); document and close.

---

**Status:** Active Procedure  
**Owner:** Incident lead / Comms lead
