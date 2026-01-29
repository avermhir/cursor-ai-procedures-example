# Procedure: Postmortem (Incident Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure documents and socializes lessons learned from an incident. It produces a postmortem document (summary, timeline, root cause, impact, lessons, corrective actions) and shares it with the right audiences so that the organization learns and improves.

**What problem it solves**

- Incidents repeated; lessons not captured or shared
- No single post-incident narrative; knowledge siloed
- Corrective actions or RCA not tied to a shareable artifact
- No feedback loop into retros, tech debt, or process improvement

**What "success" looks like at the end**

Postmortem complete with:
- Postmortem document (incident summary, timeline, cause, impact, lessons, corrective actions)
- Document shared with stakeholders and stored for reference
- Links to [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md), [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md), and improvement backlogs where relevant
- Incident lifecycle closed; follow-up tracked via corrective actions

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Mitigation Procedure](./mitigation-procedure.md) completes and postmortem is required per org (e.g. P0/P1)
- [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) and [Corrective Actions Procedure](./corrective-actions-procedure.md) complete; postmortem consolidates and socializes
- Incident lead or management requests postmortem for an incident
- Policy requires postmortem for certain severities

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Incident record** – From [Triage](./triage-procedure.md), [Mitigation](./mitigation-procedure.md): timeline, impact, resolution
- [ ] **RCA document** – From [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md): cause, evidence, lessons
- [ ] **Corrective actions** – From [Corrective Actions Procedure](./corrective-actions-procedure.md): list, owners, tracker links
- [ ] **Postmortem template or format** – Org template (sections, tone, audience) if defined

**Decisions already made:**
- [ ] **Postmortem owner** – Person responsible (often incident lead or designated facilitator)
- [ ] **Audiences** – Who will receive postmortem (team, leadership, customers, etc.)

**Constraints:**
- [ ] **Blameless** – Postmortem focuses on systems and process; no individual blame (per org culture)
- [ ] **Timeline** – When postmortem must be published (e.g. within 5–10 days for P0) per org

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **RCA or corrective actions incomplete** – Proceed with draft; note “RCA in progress” or “Actions TBD”; update when ready
- **No template** – Use standard structure: summary, timeline, cause, impact, lessons, actions

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Draft, review, publish, share, link to retros/debt/backlogs
- **Procedures to be invoked** – [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md), [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md) (when relevant)
- **Dependencies between steps** – Draft → Review → Publish → Share → Link
- **Risks & unknowns** – Sensitive details, customer-facing vs internal tone, legal/compliance review
- **Validation points** – After review, after publish

**Plan must be reviewed before execution begins**

**Output:**
- Postmortem Plan (owner, audiences, timeline, format)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Draft Postmortem

**Purpose**
- Produce first version of postmortem from incident, RCA, and corrective actions

**Inputs**
- **From:** Procedure Required Inputs (incident record, RCA, corrective actions, template)

**Actions**
- Write incident summary: what happened, when, impact, resolution (1–2 paragraphs).
- Add timeline (key events, mitigation, resolution).
- Summarize root cause(s) and contributing factors (from RCA); keep blameless.
- List lessons learned (what we’ll do differently, what worked well).
- Include corrective actions: list, owners, links to tracker; note any deferred.
- Use org template if defined; store draft in agreed location.

**Decisions / Evaluations**
- **Go:** Draft complete → Step 2  
- **No-Go:** Fill gaps (e.g. get RCA or actions); refine draft

**Outputs**
- Postmortem draft (summary, timeline, cause, lessons, actions)

**Failure Handling**
- **Failure:** RCA or actions missing  
  - **Action:** Draft with “TBD”; update when available; still proceed to review

---

#### Step 2: Review and Finalize

**Purpose**
- Review with participants and stakeholders; finalize content

**Inputs**
- **From:** Step 1 (draft); incident participants, relevant leads

**Actions**
- Share draft with incident participants and key stakeholders.
- Incorporate feedback (accuracy, tone, completeness); keep blameless.
- Resolve any disputes over facts or wording; defer to postmortem owner if needed.
- Finalize postmortem; ensure it’s ready for publish.

**Decisions / Evaluations**
- **Go:** Review complete; postmortem finalized → Step 3  
- **No-Go:** Address feedback; re-review  
- **Legal/compliance** – If required, get sign-off before external publish

**Outputs**
- Finalized postmortem document

**Failure Handling**
- **Failure:** Dispute over content  
  - **Action:** Document majority view and dissenting view if necessary; owner decides final version

---

#### Step 3: Publish and Share

**Purpose**
- Publish postmortem and share with audiences

**Inputs**
- **From:** Step 2 (finalized postmortem); audiences

**Actions**
- Publish to agreed location (wiki, incident tool, blog, status page, etc.).
- Share with internal audiences (team, engineering, leadership) per org.
- If customer-facing postmortem required, publish appropriate version (e.g. status page, email); ensure tone and detail meet org standards.
- Link postmortem to incident record; update record to “Postmortem published”.

**Decisions / Evaluations**
- **Go:** Published and shared → Step 4  
- **No-Go:** Fix publish or audience list; re-share

**Outputs**
- Postmortem published and shared
- Incident record updated

**Failure Handling**
- **Failure:** Wrong audience or sensitive detail exposed  
  - **Action:** Retract or edit; re-publish; document lessons learned

---

#### Step 4: Link to Retros, Tech Debt, and Backlogs

**Purpose**
- Feed lessons and actions into release retros, tech debt, and improvement backlogs

**Inputs**
- **From:** Step 3 (published postmortem); corrective actions

**Actions**
- If incident was release-related, ensure [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md) references postmortem or incident; attach or link.
- If corrective actions include tech debt, ensure [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md) has recorded them (from [Corrective Actions Procedure](./corrective-actions-procedure.md)); link postmortem.
- Link postmortem from incident record, RCA, and corrective action tracker.
- Close incident lifecycle for this incident; follow-up remains in corrective actions.

**Decisions / Evaluations**
- **Go:** Links added; incident lifecycle closed → procedure complete  
- **No-Go:** Complete linking; then close

**Outputs**
- Postmortem linked to retro, tech debt, tracker, incident record
- Incident lifecycle closed

**Failure Handling**
- N/A (procedure complete)

---

### 6. Output Contract

**Artifacts produced:** Postmortem document (summary, timeline, cause, impact, lessons, corrective actions); links to incident, RCA, tracker, retros, tech debt.  
**State changes:** Postmortem published and shared; incident lifecycle closed; follow-up in corrective actions.  
**Signals emitted:** “Postmortem published”; “Incident lifecycle closed”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Postmortem drafted, reviewed, and published
- [ ] Shared with defined audiences
- [ ] Linked to incident, RCA, corrective actions, retros/tech debt as relevant
- [ ] Incident lifecycle closed

**Who can approve:** Postmortem owner, incident lead, or tech lead (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Postmortem → [Release Retrospective Procedure](../release-lifecycle/release-retrospective-procedure.md), [Tech Debt Intake Procedure](../architecture-system-health/tech-debt-intake-procedure.md), stakeholders. [Communications Procedure](./communications-procedure.md) may use postmortem for post-incident summary.

**Procedures that depend on this:**
- [Mitigation Procedure](./mitigation-procedure.md) – Triggers postmortem
- [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) – Feeds postmortem
- [Corrective Actions Procedure](./corrective-actions-procedure.md) – Feeds postmortem; tracking continues after postmortem
- [Communications Procedure](./communications-procedure.md) – May use postmortem for external summary

---

### 9. Definition of Done

- [ ] Postmortem drafted, reviewed, and published
- [ ] Shared with audiences; linked to incident, RCA, actions, retros/tech debt
- [ ] Incident lifecycle closed

---

### 10. Audit & Traceability

**Links to:** Incident record, RCA, corrective actions, postmortem, retros, tech debt. **Audit trail:** Publish date, owner, audiences.

---

### 11. Exit States

**✅ Completed successfully** – Postmortem published and shared; incident lifecycle closed.  
**⚠️ Blocked** – Review or publish blocked; resolve and re-run.  
**❌ Aborted** – Postmortem cancelled (e.g. duplicate, different process); document reason.

---

**Status:** Active Procedure  
**Owner:** Incident lead / Postmortem owner