# Procedure: Triage (Incident Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure performs initial incident assessment and prioritization. It ensures every incident is quickly assessed, assigned a severity, given an owner, and routed to mitigation and communications so that response is consistent and nothing is missed.

**What problem it solves**

- Incidents not assessed or prioritized; critical ones deprioritized
- No clear owner; response delayed or duplicated
- Unclear severity or scope; wrong mitigation or comms
- Incidents lost or forgotten before mitigation starts

**What "success" looks like at the end**

Triage complete with:
- Incident recorded (what, when, where, observed impact)
- Severity and priority assigned
- Owner (incident lead) assigned
- [Mitigation Procedure](./mitigation-procedure.md) and [Communications Procedure](./communications-procedure.md) invoked or explicitly triggered

---

### 2. Trigger

**What causes this procedure to be invoked**

- Production incident reported (alert, monitoring, user report, support)
- System outage or degradation detected
- Critical bug in production reported
- [Post-Release Monitoring Procedure](../release-lifecycle/post-release-monitoring-procedure.md) or runbook escalation indicates incident
- Security incident (may also invoke Security Lifecycle procedures)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Incident report** – Initial report (alert, ticket, channel message): what was observed, when, where
- [ ] **Incident channel or tracker** – Where incident is logged and updates are posted (e.g. Slack, PagerDuty, Jira)
- [ ] **Severity definitions** – Org or team severity scale (e.g. P0–P2, Critical/Major/Minor) and criteria

**Decisions already made:**
- [ ] **Incident acknowledged** – Someone has confirmed this is an incident requiring response

**Constraints:**
- [ ] **Response SLA** – Time-to-triage expectations (e.g. P0 within X minutes) if defined

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing severity definitions** – Use default (e.g. assume P1 until assessed); document and refine later
- **Missing channel/tracker** – Use agreed fallback (e.g. team channel, email); create proper channel post-triage

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Assess, classify severity, assign owner, record, trigger mitigation and comms
- **Procedures to be invoked** – [Mitigation Procedure](./mitigation-procedure.md), [Communications Procedure](./communications-procedure.md)
- **Dependencies between steps** – Assess → Classify → Assign → Record → Trigger
- **Risks & unknowns** – Unclear scope, multiple simultaneous incidents, missing context
- **Validation points** – After classification, after assign

**Plan must be reviewed before execution begins**

**Output:**
- Triage Plan (documented; may be brief for fast-moving incidents)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Assess and Record

**Purpose**
- Capture what happened, when, where, and observed impact

**Inputs**
- **From:** Procedure Required Inputs (incident report)

**Actions**
- Gather initial facts: what was observed, when it started, where (service, region, user segment).
- Note observed impact (errors, latency, downtime, affected users).
- Create or update incident record in channel/tracker; ensure single source of truth.
- If release-related, check [Rollback Procedure](../release-lifecycle/rollback-procedure.md) applicability.

**Decisions / Evaluations**
- **Go:** Incident recorded with basic facts → Step 2  
- **No-Go:** Collect missing info; update record; re-assess

**Outputs**
- Incident record (what, when, where, observed impact)
- Link to release/deployment if applicable

**Failure Handling**
- **Failure:** Cannot establish basic facts  
  - **Action:** Document best-known; proceed with triage; refine as more info arrives

---

#### Step 2: Classify Severity and Priority

**Purpose**
- Assign severity and priority per org definitions

**Inputs**
- **From:** Step 1 (incident record); severity definitions

**Actions**
- Apply severity scale (e.g. P0/P1/P2 or Critical/Major/Minor) using impact, scope, and org criteria.
- Set priority for response (e.g. P0 = immediate, P1 = same day, P2 = next business day).
- Document rationale briefly in incident record.
- Re-classify later if scope or impact changes.

**Decisions / Evaluations**
- **Go:** Severity and priority assigned → Step 3  
- **No-Go:** Resolve ambiguity; re-classify

**Outputs**
- Severity and priority; rationale in incident record

**Failure Handling**
- **Failure:** Ambiguous severity  
  - **Action:** Default to higher severity if unsure; escalate for tie-break

---

#### Step 3: Assign Owner (Incident Lead)

**Purpose**
- Designate incident lead responsible for coordination and mitigation

**Inputs**
- **From:** Step 2; on-call or team roster if applicable

**Actions**
- Assign incident lead (owner). Ensure they are available and informed.
- If on-call, confirm handoff; document in incident record.
- Owner coordinates mitigation, communications, and follow-up (RCA, postmortem).

**Decisions / Evaluations**
- **Go:** Owner assigned and acknowledged → Step 4  
- **No-Go:** Find alternate owner; document

**Outputs**
- Incident lead assigned; documented in incident record

**Failure Handling**
- **Failure:** No one available  
  - **Action:** Escalate to backup or management; document

---

#### Step 4: Trigger Mitigation and Communications

**Purpose**
- Start mitigation and stakeholder communications

**Inputs**
- **From:** Steps 1–3 (record, severity, owner)

**Actions**
- Invoke or explicitly trigger [Mitigation Procedure](./mitigation-procedure.md) (contain/resolve).
- Invoke or explicitly trigger [Communications Procedure](./communications-procedure.md) (initial update and cadence).
- Ensure incident record is linked from both; updates flow back to record.
- For release-related incidents, consider [Rollback Procedure](../release-lifecycle/rollback-procedure.md) per release lifecycle.

**Decisions / Evaluations**
- **Go:** Mitigation and comms triggered → procedure complete  
- **No-Go:** Resolve blocks (e.g. missing comms plan); then trigger

**Outputs**
- Mitigation and Communications procedures invoked or triggered
- Incident record updated with links

**Failure Handling**
- **Failure:** Mitigation or comms not started  
  - **Action:** Owner ensures both start immediately; escalate if blocked

---

### 6. Output Contract

**Artifacts produced:** Incident record (what, when, where, impact, severity, priority, owner); triage plan if non-trivial.  
**State changes:** Incident triaged; mitigation and communications underway.  
**Signals emitted:** “Incident triaged”; “Mitigation started”; “Communications started”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Incident recorded with basic facts and impact
- [ ] Severity and priority assigned
- [ ] Incident lead assigned
- [ ] Mitigation and Communications triggered

**Who can approve:** Incident lead, on-call, or tech lead (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Incident record, severity, owner → [Mitigation Procedure](./mitigation-procedure.md), [Communications Procedure](./communications-procedure.md), [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md), [Postmortem Procedure](./postmortem-procedure.md). [Rollback Procedure](../release-lifecycle/rollback-procedure.md) may be invoked for release-related incidents.

**Procedures that depend on this:**
- [Mitigation Procedure](./mitigation-procedure.md) – Uses triage output to contain/resolve
- [Communications Procedure](./communications-procedure.md) – Uses triage for initial and ongoing updates
- [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) – Uses incident record and timeline
- [Postmortem Procedure](./postmortem-procedure.md) – Uses incident record and triage context

---

### 9. Definition of Done

- [ ] Incident assessed and recorded
- [ ] Severity and priority assigned
- [ ] Incident lead assigned
- [ ] Mitigation and Communications triggered

---

### 10. Audit & Traceability

**Links to:** Incident record, channel/tracker, severity, owner, mitigation and comms triggers. **Audit trail:** Triage time, triager, classification rationale.

---

### 11. Exit States

**✅ Completed successfully** – Triage complete; mitigation and comms underway.  
**⚠️ Blocked** – Missing info or owner; resolve and re-run.  
**❌ Aborted** – Not an incident (e.g. false alarm); document and close.

---

**Status:** Active Procedure  
**Owner:** Incident lead / On-call
