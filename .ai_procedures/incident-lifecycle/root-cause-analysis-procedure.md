# Procedure: Root Cause Analysis (Incident Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure identifies the root cause(s) of an incident so that corrective actions can target the right fixes and recurrence can be reduced. It ensures analysis is structured, evidence-based, and documented for postmortem and improvement.

**What problem it solves**

- Incidents “resolved” without understanding root cause; same issue recurs
- Blame-focused or shallow analysis; symptoms vs cause confused
- No clear output for corrective actions or postmortem
- RCA skipped or delayed; lessons lost

**What "success" looks like at the end**

RCA complete with:
- Root cause(s) identified and documented (evidence, timeline, contributing factors)
- [Corrective Actions Procedure](./corrective-actions-procedure.md) triggered with RCA output
- RCA document linked to incident record and [Postmortem Procedure](./postmortem-procedure.md)

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Mitigation Procedure](./mitigation-procedure.md) completes and triggers RCA
- [Rollback Procedure](../release-lifecycle/rollback-procedure.md) documents rollback and initiates RCA
- Incident lead or management requests RCA for an incident
- Policy requires RCA for certain severities (e.g. P0, P1)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Incident record** – From [Triage](./triage-procedure.md) and [Mitigation](./mitigation-procedure.md): timeline, actions, impact, resolution
- [ ] **Observability and evidence** – Logs, metrics, traces, deploy history, config changes, runbooks used
- [ ] **RCA format or template** – Org template (e.g. 5 Whys, Fishbone, timeline-based) if defined

**Decisions already made:**
- [ ] **Incident mitigated** – Mitigation complete; system stable (from [Mitigation Procedure](./mitigation-procedure.md))
- [ ] **RCA owner assigned** – Person or team responsible for RCA (often incident lead)

**Constraints:**
- [ ] **RCA timeline** – When RCA must be completed (e.g. within 3–5 days for P0) per org
- [ ] **Blameless** – Analysis focuses on systems and process, not individuals (per org culture)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing evidence** – Proceed with best available; document gaps; refine if more data surfaces
- **No RCA template** – Use simple structure: timeline, cause, contributing factors, evidence

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Gather evidence, build timeline, identify cause, document, hand off
- **Procedures to be invoked** – [Corrective Actions Procedure](./corrective-actions-procedure.md), [Postmortem Procedure](./postmortem-procedure.md)
- **Dependencies between steps** – Evidence → Timeline → Cause → Document → Hand off
- **Risks & unknowns** – Missing logs, third-party cause, multiple contributing factors
- **Validation points** – After timeline, after cause identification, before hand off

**Plan must be reviewed before execution begins**

**Output:**
- RCA Plan (scope, owner, timeline, format)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Gather Evidence and Timeline

**Purpose**
- Assemble facts and timeline leading to the incident

**Inputs**
- **From:** Procedure Required Inputs (incident record, observability, evidence)

**Actions**
- Collect logs, metrics, traces, deploy/config changes, and user reports around the incident window.
- Build timeline: when symptoms first observed, when they peaked, when mitigation started, when resolved.
- Note contributing factors (e.g. load, deployment, config, dependency, external service).
- Store evidence (links, screenshots, excerpts) for RCA document.

**Decisions / Evaluations**
- **Go:** Timeline and evidence gathered → Step 2  
- **No-Go:** Track down missing evidence; extend timeline if needed; document gaps

**Outputs**
- Timeline (observable events, actions, impact)
- Evidence collected and referenced

**Failure Handling**
- **Failure:** Critical evidence missing (e.g. logs rotated)  
  - **Action:** Document; proceed with best available; note limitation in RCA

---

#### Step 2: Identify Root Cause(s)

**Purpose**
- Determine root cause(s) and contributing factors

**Inputs**
- **From:** Step 1 (timeline, evidence)

**Actions**
- Apply RCA method (5 Whys, Fishbone, timeline-based, etc.) to move from symptoms to root cause.
- Separate root cause(s) from contributing factors and triggers.
- Avoid blame; focus on systems, process, design, and automation gaps.
- Document hypothesis and supporting evidence; note uncertainties.

**Decisions / Evaluations**
- **Go:** Root cause(s) identified and documented → Step 3  
- **No-Go:** Refine analysis; involve additional expertise if needed  
- **Multiple causes** – Document each; prioritize for corrective actions

**Outputs**
- Root cause(s) and contributing factors; evidence and rationale
- Uncertainties or open questions noted

**Failure Handling**
- **Failure:** Cause unclear or disputed  
  - **Action:** Document best hypothesis and alternatives; flag for review; still proceed to corrective actions where possible

---

#### Step 3: Document and Review

**Purpose**
- Produce RCA document and validate with stakeholders

**Inputs**
- **From:** Steps 1–2 (timeline, cause, evidence)

**Actions**
- Write RCA document: incident summary, timeline, root cause(s), contributing factors, evidence, lessons.
- Use org template if defined; keep language clear and blameless.
- Share with incident participants and relevant leads; incorporate feedback.
- Link RCA to incident record; store in agreed location (wiki, Jira, incident tool).

**Decisions / Evaluations**
- **Go:** RCA documented and reviewed → Step 4  
- **No-Go:** Update per feedback; re-review

**Outputs**
- RCA document (summary, timeline, cause, evidence, lessons)
- Link in incident record

**Failure Handling**
- **Failure:** Dispute over cause or wording  
  - **Action:** Facilitate discussion; document majority view and dissenting views if needed; defer to leadership if unresolved

---

#### Step 4: Trigger Corrective Actions and Postmortem

**Purpose**
- Hand off RCA to corrective actions and postmortem

**Inputs**
- **From:** Step 3 (RCA document)

**Actions**
- Invoke [Corrective Actions Procedure](./corrective-actions-procedure.md) with RCA output (cause, contributing factors, evidence).
- Ensure [Postmortem Procedure](./postmortem-procedure.md) has access to RCA (or embed RCA in postmortem per org).
- Update incident record: RCA complete, corrective actions and postmortem triggered.
- Close RCA when hand off is done.

**Decisions / Evaluations**
- **Go:** Corrective actions and postmortem triggered → procedure complete  
- **No-Go:** Complete hand off; then close

**Outputs**
- [Corrective Actions Procedure](./corrective-actions-procedure.md) invoked with RCA
- [Postmortem Procedure](./postmortem-procedure.md) linked or fed with RCA
- Incident record updated

**Failure Handling**
- N/A (procedure complete)

---

### 6. Output Contract

**Artifacts produced:** RCA document (summary, timeline, root cause(s), contributing factors, evidence, lessons); links in incident record.  
**State changes:** Root cause known; corrective actions and postmortem triggered.  
**Signals emitted:** “RCA complete”; “Corrective actions triggered”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Timeline and evidence gathered
- [ ] Root cause(s) identified and documented
- [ ] RCA document reviewed and stored
- [ ] Corrective actions and postmortem triggered

**Who can approve:** Incident lead, tech lead, or postmortem facilitator (per org).

---

### 8. Downstream Dependencies

**Output → Input:** RCA document → [Corrective Actions Procedure](./corrective-actions-procedure.md), [Postmortem Procedure](./postmortem-procedure.md). [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md) and [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md) may consume RCA/postmortem output.

**Procedures that depend on this:**
- [Mitigation Procedure](./mitigation-procedure.md) – Triggers RCA
- [Corrective Actions Procedure](./corrective-actions-procedure.md) – Uses RCA to plan prevention
- [Postmortem Procedure](./postmortem-procedure.md) – Uses RCA as input

---

### 9. Definition of Done

- [ ] Evidence and timeline gathered
- [ ] Root cause(s) identified and documented
- [ ] RCA document reviewed and stored
- [ ] Corrective actions and postmortem triggered

---

### 10. Audit & Traceability

**Links to:** Incident record, RCA document, evidence, corrective actions, postmortem. **Audit trail:** RCA owner, completion date, reviewers.

---

### 11. Exit States

**✅ Completed successfully** – RCA complete; corrective actions and postmortem triggered.  
**⚠️ Blocked** – Missing evidence or dispute; resolve and re-run.  
**❌ Aborted** – RCA cancelled (e.g. duplicate incident, different process); document reason.

---

**Status:** Active Procedure  
**Owner:** Incident lead / RCA owner
