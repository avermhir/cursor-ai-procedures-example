# Procedure: Release Retrospective (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure runs a release retrospective after a release is deployed and monitored. It captures what went well, what went wrong, and what to improve so that future releases and procedures get better over time.

**What problem it solves**

- No structured reflection after releases
- Same issues repeated across releases
- Improvements to process or tooling not captured or acted on
- No link between release outcomes and procedure or standard updates
- Lessons learned from incidents or rollbacks not fed back into process

**What "success" looks like at the end**

A release retrospective that includes:
- Release outcome summarized (shipped, issues, rollbacks, incidents)
- What went well and what went wrong documented
- Actionable improvements identified and assigned
- Lessons learned linked to procedures or standards where relevant
- Retrospective report stored and shared

---

### 2. Trigger

**What causes this procedure to be invoked**

- Release has been deployed and initial post-release monitoring is complete (from [Post-Release Monitoring Procedure](./post-release-monitoring-procedure.md))
- Release window or “retro window” has passed (e.g. 1–2 weeks after deploy per release plan)
- Release manager or team schedules a release retrospective
- Significant incident or rollback occurred and retro is needed to capture lessons

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Release summary** – What shipped, version, deploy date (from release plan and deployment)
- [ ] **Post-release monitoring summary** – Health, issues, incidents (from [Post-Release Monitoring Procedure](./post-release-monitoring-procedure.md))
- [ ] **Incident or rollback reports** – If any (from [Rollback Procedure](./rollback-procedure.md) or incident process)
- [ ] **Stakeholder or customer feedback** – If collected (from [Customer/Stakeholder Comms Procedure](./customer-stakeholder-comms-procedure.md) or support)

**Decisions already made:**
- [ ] **Retro scheduled** – Time and participants agreed (release manager, dev, QA, DevOps, product as applicable)
- [ ] **Retro facilitator** – Who runs the retro (often release manager or tech lead)

**Constraints:**
- [ ] **Blameless** – Focus on process and systems, not individuals; psychological safety
- [ ] **Actionable** – Outcomes should include concrete follow-ups with owners

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing release or monitoring summary** – Gather from release plan, deploy log, and monitoring dashboards
- **Missing incident report** – Summarize from incident channel or rollback procedure output

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Ordered steps from prep through report and follow-up
- **Participants** – Who attends (release manager, dev, QA, DevOps, product)
- **Agenda** – Outcome summary, what went well, what went wrong, improvements, action items
- **Duration and format** – Meeting length, format (e.g. Start/Stop/Continue, 4 Ls, timeline)
- **Output** – Retro report location and format (wiki, release tool, Jira)
- **Follow-up** – How action items are tracked and who owns them

**Plan must be reviewed before execution begins**

**Output:**
- Release Retrospective Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Prepare Release Outcome Summary

**Purpose**
- Summarize release outcome so the retro has shared context

**Inputs**
- **From:** Procedure Required Inputs (release summary, post-release monitoring, incident/rollback reports)

**Actions**
- **What shipped** – Version, scope, deploy date, key features or fixes.
- **Health and issues** – Post-release monitoring summary: stability, errors, performance, user impact.
- **Incidents or rollbacks** – Any incidents, rollbacks, or hotfixes; link to incident or rollback report.
- **Stakeholder feedback** – Any notable feedback from customers or support.
- Compile into a short outcome summary (1–2 pages or slide deck).
- Share with participants before or at start of retro.

**Decisions / Evaluations**
- **Decision:** Outcome summary complete and shared?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, complete summary and share

**Outputs**
- Release outcome summary (shipped, health, incidents, feedback)
- Summary shared with participants

**Failure Handling**
- **Failure:** Missing data (e.g. no monitoring summary)
  - **Action:** Use available data; note gaps in retro and as improvement

---

#### Step 2: Run Retrospective Meeting

**Purpose**
- Facilitate a structured discussion: what went well, what went wrong, what to improve

**Inputs**
- **From:** Step 1 outputs (outcome summary)
- **From:** Procedure Required Inputs (participants, facilitator)

**Actions**
- **Set context** – Share outcome summary; remind participants of blameless and actionable focus.
- **What went well** – Capture successes (process, tooling, collaboration, quality, speed).
- **What went wrong** – Capture problems (blockers, bugs, incidents, confusion, rework).
- **What to improve** – Capture concrete improvements (process, automation, docs, procedures, standards).
- **Root causes** – For significant issues: briefly discuss root cause (process, tooling, communication, scope).
- Use format agreed in plan (e.g. Start/Stop/Continue, 4 Ls, timeline).
- Keep discussion time-boxed; park off-topic items for later.
- Capture all items (whiteboard, doc, or retro tool).

**Decisions / Evaluations**
- **Decision:** Discussion complete and items captured?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, extend or schedule follow-up; capture what was discussed

**Outputs**
- Raw retro notes (what went well, what went wrong, what to improve)
- Root causes for significant issues (if discussed)

**Failure Handling**
- **Failure:** Meeting cancelled or truncated
  - **Action:** Document what was captured; schedule follow-up if needed

---

#### Step 3: Define Action Items and Owners

**Purpose**
- Turn improvements into actionable items with owners and due dates

**Inputs**
- **From:** Step 2 outputs (retro notes, improvements)

**Actions**
- **Action items** – For each improvement: one or more concrete actions (e.g. “Update Runbook X”, “Add check to Procedure Y”, “Document Z in standards”).
- **Owners** – Assign owner per action item (person or team).
- **Due date or milestone** – When the action should be done (e.g. next release, next sprint, or date).
- **Link to procedures or standards** – If action is to change a procedure or standard, link to it (e.g. “Update Release Planning Procedure”, “Add to Code Review Standards”).
- Prioritize: critical (e.g. incident prevention) vs nice-to-have.
- Document action items in agreed tracker (Jira, wiki, release tool).

**Decisions / Evaluations**
- **Decision:** Action items defined with owners and due dates?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, complete assignments and re-document

**Outputs**
- Action items (description, owner, due date, link to procedure/standard if applicable)
- Action items in tracker

**Failure Handling**
- **Failure:** No owner or unclear action
  - **Action:** Clarify with facilitator or release manager; do not leave unowned

---

#### Step 4: Write and Publish Retro Report

**Purpose**
- Produce a concise retro report and store it where the org can find it

**Inputs**
- **From:** Step 1–3 outputs (outcome summary, retro notes, action items)

**Actions**
- **Report sections:**
  - Release summary (version, scope, deploy date).
  - Outcome (health, issues, incidents, rollbacks, feedback).
  - What went well (bullets).
  - What went wrong (bullets).
  - What to improve (bullets).
  - Action items (with owner, due date, link to procedure/standard).
- **Tone** – Factual, blameless, actionable.
- Publish report to agreed location (wiki, release tool, Jira, Confluence).
- Share link with participants and release manager; optionally with wider team or org.
- If org tracks “lessons learned” or “postmortems”: link or attach retro report there.

**Decisions / Evaluations**
- **Decision:** Report written and published?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, complete report and publish

**Outputs**
- Release retrospective report (outcome, well/wrong/improve, action items)
- Report published and link shared

**Failure Handling**
- **Failure:** Report not published (e.g. permissions, tool down)
  - **Action:** Store locally or in alternate location; share link; fix publishing later

---

#### Step 5: Hand Off Action Items and Close Retro

**Purpose**
- Ensure action items are in the right hands and retro is formally closed

**Inputs**
- **From:** Step 4 outputs (retro report, action items in tracker)

**Actions**
- Confirm action items are in tracker and owners are notified (e.g. Jira assignee, Slack DM).
- Hand off to release manager or process owner: report link and list of action items for follow-up.
- If any action is “update procedure X” or “update standard Y”: create ticket or link to procedure/standard so it is not forgotten.
- Close retro (mark complete in release tool or calendar).
- Optional: schedule a short follow-up in 2–4 weeks to check action item progress.

**Decisions / Evaluations**
- **Decision:** Action items handed off and retro closed?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete hand-off and close

**Outputs**
- Action items confirmed in tracker; owners notified
- Retro closed; report link and action list handed off
- Optional: follow-up meeting scheduled

**Failure Handling**
- **Failure:** Action items not in tracker or owners not notified
  - **Action:** Complete before closing procedure

---

### 6. Output Contract

**Artifacts produced:** Release outcome summary, retro notes, action items (in tracker), retrospective report (published).  
**State changes:** Release has a completed retrospective; action items are tracked.  
**Signals emitted:** “Release retrospective complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Release outcome summary prepared and shared
- [ ] Retro meeting held and notes captured
- [ ] Action items defined with owners and due dates
- [ ] Retro report written and published
- [ ] Action items handed off and retro closed

**Who can approve:** Release manager or retro facilitator

---

### 8. Downstream Dependencies

**Output → Input:** Action items may update procedures or standards (e.g. Release Planning, Deployment, Code Review Standards). Retro report may feed into [Post-Release Monitoring Procedure](./post-release-monitoring-procedure.md) or next release planning.

---

### 9. Definition of Done

- [ ] Release outcome summary prepared and shared
- [ ] Retro meeting run and notes captured
- [ ] Action items defined with owners and due dates; in tracker
- [ ] Retro report written and published
- [ ] Action items handed off; retro closed

---

### 10. Audit & Traceability

**Links to:** Release plan, deployment log, post-release monitoring summary, incident/rollback reports, retro report, action item tracker. **Audit trail:** Retro date, participants, report link, action items.

---

### 11. Exit States

**✅ Completed successfully** – Retro run, report published, action items tracked and handed off.  
**⚠️ Blocked** – Missing participants or data; reschedule or complete with available input.  
**❌ Aborted** – Release cancelled or retro no longer required; document reason.

---

**Status:** Active Procedure  
**Owner:** Release manager / Retro facilitator
