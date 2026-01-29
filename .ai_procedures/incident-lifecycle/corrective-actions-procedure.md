# Procedure: Corrective Actions (Incident Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to derive and track corrective actions from an incident so that recurrence is reduced. It ensures actions are specific, owned, and tied to root cause and that they are completed or explicitly deferred.

**What problem it solves**

- No follow-up after incidents; same issues recur
- Vague or unowned actions; nothing gets done
- Actions not tied to root cause; wrong things “fixed”
- No tracking or closure; actions forgotten

**What "success" looks like at the end**

Corrective actions complete with:
- Actions derived from [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) output
- Each action owned, scoped, and recorded (e.g. in backlog, project tracker)
- [Postmortem Procedure](./postmortem-procedure.md) updated with action list and ownership
- Actions tracked to completion or explicitly deferred with rationale

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) completes and triggers corrective actions
- [Postmortem Procedure](./postmortem-procedure.md) identifies actions that need formal tracking
- Incident lead or management requests corrective action planning

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **RCA document** – From [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md): root cause(s), contributing factors, evidence, lessons
- [ ] **Incident record** – Timeline, impact, mitigation (from [Triage](./triage-procedure.md), [Mitigation](./mitigation-procedure.md))
- [ ] **Action tracker or backlog** – Where actions will be recorded (Jira, beads, project plan, etc.)

**Decisions already made:**
- [ ] **RCA complete** – Root cause(s) documented and agreed
- [ ] **Owner for corrective action process** – Person coordinating action derivation and tracking (often incident lead or postmortem owner)

**Constraints:**
- [ ] **Action format** – What each action must include (description, owner, due date, link to RCA) per org
- [ ] **Prioritization** – How to prioritize actions (e.g. by risk, effort, dependency)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing tracker** – Record in agreed fallback (e.g. postmortem doc, wiki); migrate when tracker available
- **RCA incomplete** – Wait for RCA or use draft RCA; refine actions when RCA final

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Derive actions from RCA, assign owners, record, hand off to postmortem, track
- **Procedures to be invoked** – [Postmortem Procedure](./postmortem-procedure.md) (update with actions), [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md) (if actions include tech debt)
- **Dependencies between steps** – Derive → Assign → Record → Postmortem → Track
- **Risks & unknowns** – Cross-team ownership, large effort, dependency on other work
- **Validation points** – After derivation, after recording, at closure check

**Plan must be reviewed before execution begins**

**Output:**
- Corrective Actions Plan (scope, owner, tracker, prioritization)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Derive Actions from RCA

**Purpose**
- Turn root cause and lessons into specific, actionable items

**Inputs**
- **From:** Procedure Required Inputs (RCA document, incident record)

**Actions**
- Review RCA: root cause(s), contributing factors, evidence, lessons.
- For each cause or contributing factor, define concrete actions (e.g. add alert, fix config, add test, update runbook, improve design).
- Ensure actions address root cause or material contributing factors; avoid tangential work.
- Record each action with clear description; note any dependency on other work (e.g. infra, product).

**Decisions / Evaluations**
- **Go:** Actions derived and documented → Step 2  
- **No-Go:** Refine with RCA owner or incident participants  
- **No actions** – Rare; document rationale (e.g. external-only cause, no feasible mitigation) and close

**Outputs**
- List of corrective actions (description, link to cause/factor)
- Dependencies noted

**Failure Handling**
- **Failure:** Actions unclear or too broad  
  - **Action:** Break down into smaller, specific items; re-review

---

#### Step 2: Assign Owners and Prioritize

**Purpose**
- Assign owner and priority for each action; set target completion or milestone

**Inputs**
- **From:** Step 1 (actions); prioritization criteria

**Actions**
- Assign owner per action (person or team); get acknowledgment.
- Prioritize (e.g. P0/P1/P2 or Critical/High/Medium) based on risk, effort, dependency.
- Set target completion date or milestone (or “backlog”) per org.
- Mark any action as “deferred” with rationale if not doing now.

**Decisions / Evaluations**
- **Go:** Owners assigned, prioritization done → Step 3  
- **No-Go:** Resolve unowned actions; escalate if needed  
- **Deferred** – Document reason; ensure deferred actions are reviewed later (e.g. in retro)

**Outputs**
- Actions with owner, priority, target (or deferred)
- Deferred items with rationale

**Failure Handling**
- **Failure:** No owner for critical action  
  - **Action:** Escalate to management; assign interim owner until permanent owner found

---

#### Step 3: Record and Hand Off to Postmortem

**Purpose**
- Record actions in tracker and ensure postmortem includes them

**Inputs**
- **From:** Step 2 (actions, owners, priority); action tracker

**Actions**
- Create tracker items (Jira, beads, etc.) for each action; link to RCA and incident.
- Ensure [Postmortem Procedure](./postmortem-procedure.md) includes corrective actions section: list, owners, targets, links to tracker.
- If any action is tech debt, create via [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md) and link.
- Update incident record: corrective actions recorded, postmortem updated.

**Decisions / Evaluations**
- **Go:** Actions recorded; postmortem updated → Step 4  
- **No-Go:** Complete recording; sync with postmortem owner

**Outputs**
- Actions in tracker; postmortem updated with action list
- Incident record updated
- Tech debt items created if applicable

**Failure Handling**
- **Failure:** Tracker or postmortem not ready  
  - **Action:** Use fallback (e.g. postmortem doc); migrate to tracker when ready

---

#### Step 4: Track to Completion or Closure

**Purpose**
- Ensure actions are completed or explicitly closed (done, deferred, superseded)

**Inputs**
- **From:** Step 3 (tracker, postmortem); owners

**Actions**
- Track progress per org process (e.g. weekly check, project sync).
- When action completed: close in tracker; note in postmortem if useful.
- When action deferred or superseded: update tracker and postmortem; document rationale.
- Revisit deferred actions in [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md) or similar when relevant.
- Procedure “complete” when all actions are either done or explicitly deferred/closed.

**Decisions / Evaluations**
- **Go:** All actions done or deferred/closed → procedure complete  
- **No-Go:** Continue tracking; follow up with owners  
- **Ongoing** – Corrective action tracking often continues past initial procedure run; ownership may hand off to project/backlog owner

**Outputs**
- Actions closed (done) or deferred with rationale
- Postmortem and incident record updated as needed

**Failure Handling**
- **Failure:** Owner leaves or action stuck  
  - **Action:** Reassign; escalate; or defer with clear rationale and review date

---

### 6. Output Contract

**Artifacts produced:** Corrective action list (description, owner, priority, target); tracker items; postmortem updated; tech debt items if applicable.  
**State changes:** Actions recorded and tracked; recurrence risk reduced when actions completed.  
**Signals emitted:** “Corrective actions recorded”; “Corrective actions complete” (when all done or deferred).

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Actions derived from RCA and documented
- [ ] Owners assigned; priority and target set (or deferred)
- [ ] Actions recorded in tracker; postmortem updated
- [ ] Tracking in place until completion or deferred closure

**Who can approve:** Incident lead, postmortem owner, or tech lead (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Corrective actions → [Postmortem Procedure](./postmortem-procedure.md), [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md), [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md) (when actions are tech debt). [Change Management Lifecycle](../change-management-lifecycle/) may apply when implementing actions (e.g. change approval).

**Procedures that depend on this:**
- [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) – Triggers corrective actions
- [Postmortem Procedure](./postmortem-procedure.md) – Includes corrective actions; may run in parallel

---

### 9. Definition of Done

- [ ] Actions derived from RCA and owned
- [ ] Actions recorded in tracker; postmortem updated
- [ ] All actions completed or explicitly deferred with rationale

---

### 10. Audit & Traceability

**Links to:** RCA, incident record, tracker items, postmortem, tech debt items. **Audit trail:** Actions, owners, completion/deferral, rationale.

---

### 11. Exit States

**✅ Completed successfully** – All actions done or deferred; tracked and closed.  
**⚠️ Blocked** – Missing owner, tracker, or RCA; resolve and re-run.  
**❌ Aborted** – Corrective actions cancelled (e.g. incident superseded); document reason.

---

**Status:** Active Procedure  
**Owner:** Incident lead / Postmortem owner / Backlog owner
