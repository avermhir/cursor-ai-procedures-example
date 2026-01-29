# Procedure: Mitigation (Incident Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure contains or resolves an incident. It ensures mitigation is coordinated, tracked, and validated so that impact is minimized and the system returns to a healthy state before root cause analysis and postmortem.

**What problem it solves**

- Ad-hoc mitigation; inconsistent or incomplete containment
- No clear ownership or coordination; duplicate or conflicting actions
- Mitigation not validated; incident “closed” while issues persist
- No handoff to RCA or postmortem

**What "success" looks like at the end**

Mitigation complete with:
- Incident contained or resolved; system healthy (or stable with known limitations)
- Mitigation actions documented (what was done, when, by whom)
- [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) initiated or explicitly triggered
- [Corrective Actions Procedure](./corrective-actions-procedure.md) and [Postmortem Procedure](./postmortem-procedure.md) triggered as applicable

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Triage Procedure](./triage-procedure.md) completes and triggers mitigation
- Incident lead decides to start mitigation (e.g. before full triage in extreme cases)
- Escalation from runbook or monitoring indicates active incident

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Incident record** – From [Triage Procedure](./triage-procedure.md): what, when, where, severity, owner
- [ ] **Runbooks / playbooks** – Relevant runbooks for known failure modes (if any)
- [ ] **Observability** – Logs, metrics, traces, dashboards to assess impact and verify mitigation

**Decisions already made:**
- [ ] **Incident lead assigned** – Owner coordinating mitigation (from Triage)
- [ ] **Mitigation acceptable** – Team can execute mitigation (access, permissions, change windows if applicable)

**Constraints:**
- [ ] **Change management** – Emergency change vs standard change; approval per org (see [Change Management Lifecycle](../change-management-lifecycle/))
- [ ] **Rollback** – For release-related incidents, [Rollback Procedure](../release-lifecycle/rollback-procedure.md) may be part of mitigation

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing runbooks** – Proceed with best-effort mitigation; document actions; add runbook later
- **Missing observability** – Use available signals; document gaps for post-incident

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Assess → Contain → Resolve (or stabilize) → Validate → Hand off
- **Procedures to be invoked** – [Rollback Procedure](../release-lifecycle/rollback-procedure.md) (if release-related), [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md), [Communications Procedure](./communications-procedure.md) (updates)
- **Dependencies between steps** – Contain before resolve where possible; validate before close
- **Risks & unknowns** – Unknown root cause, irreversible actions, dependency on third parties
- **Validation points** – After contain, after resolve, before handoff

**Plan must be reviewed before execution begins**

**Output:**
- Mitigation Plan (documented; may be brief for straightforward incidents)

---

### 5. Workflow

**A strictly ordered flow of steps.**

#### Step 1: Assess Current State and Impact

**Purpose**
- Understand current impact and whether it is changing

**Inputs**
- **From:** Procedure Required Inputs (incident record, observability)

**Actions**
- Review incident record and latest observability (logs, metrics, errors, user reports).
- Confirm affected scope (services, users, regions) and trend (worsening, stable, improving).
- If release-related, evaluate [Rollback Procedure](../release-lifecycle/rollback-procedure.md): rollback vs fix-forward per org policy.
- Update incident record with assessment.

**Decisions / Evaluations**
- **Go:** Assessment complete; mitigation approach chosen → Step 2  
- **No-Go:** Gather more data; re-assess  
- **Rollback:** If rollback chosen, invoke [Rollback Procedure](../release-lifecycle/rollback-procedure.md); then proceed to Step 4 (validate) and Step 5 (hand off)

**Outputs**
- Current state and impact assessment; mitigation approach (contain/resolve, rollback, or both)
- Incident record updated

**Failure Handling**
- **Failure:** Cannot assess (e.g. observability down)  
  - **Action:** Use whatever signals exist; document; proceed with caution

---

#### Step 2: Contain Incident

**Purpose**
- Stop impact from growing (containment)

**Inputs**
- **From:** Step 1 (assessment, approach); runbooks

**Actions**
- Execute containment actions per runbook or best practice (e.g. disable feature flag, scale up, route away from failing node, block bad traffic).
- Coordinate with [Communications Procedure](./communications-procedure.md) for status updates.
- Document each action (what, when, who) in incident record.
- Re-check observability; confirm impact is contained or decreasing.

**Decisions / Evaluations**
- **Go:** Impact contained or deemed acceptable to proceed to resolve → Step 3  
- **No-Go:** Try alternate containment; escalate if needed  
- **Containment = resolution** – If containment fully restores service, proceed to Step 4 (validate)

**Outputs**
- Containment actions documented; impact contained or stable
- Incident record updated

**Failure Handling**
- **Failure:** Containment insufficient or causes new issues  
  - **Action:** Revert containment if safe; try alternate approach; escalate

---

#### Step 3: Resolve or Stabilize

**Purpose**
- Restore service or achieve stable state with known limitations

**Inputs**
- **From:** Step 2 (containment); runbooks, observability

**Actions**
- Execute resolve actions (fix, deploy, config change, data repair, etc.) or explicitly stabilize with known workarounds/limitations.
- Coordinate with [Communications Procedure](./communications-procedure.md).
- Document all actions in incident record.
- Re-validate observability; confirm service healthy or stable.

**Decisions / Evaluations**
- **Go:** Service restored or stable → Step 4  
- **No-Go:** Continue resolve; escalate if stuck  
- **Stabilize only** – If full resolve deferred (e.g. permanent fix later), document; still proceed to Step 4 and hand off

**Outputs**
- Resolution or stabilization actions documented; service healthy or stable
- Incident record updated

**Failure Handling**
- **Failure:** Resolve fails or introduces regressions  
  - **Action:** Roll back resolve if applicable; contain again; re-plan

---

#### Step 4: Validate and Close Mitigation

**Purpose**
- Confirm system healthy (or stable); formally close mitigation phase

**Inputs**
- **From:** Steps 2–3 (containment, resolve/stabilize); observability

**Actions**
- Run health checks, smoke tests, or monitoring review; confirm service restored or stable.
- Update incident record: mitigation complete, current state.
- Close mitigation phase; hand off to RCA and postmortem.
- Trigger [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md). Trigger [Corrective Actions Procedure](./corrective-actions-procedure.md) and [Postmortem Procedure](./postmortem-procedure.md) as per org (often after RCA).

**Decisions / Evaluations**
- **Go:** Mitigation validated and handoff done → procedure complete  
- **No-Go:** Address lingering issues; re-validate

**Outputs**
- Mitigation validated; RCA (and optionally corrective actions, postmortem) triggered
- Incident record updated; “Mitigation complete” signalled

**Failure Handling**
- **Failure:** System not fully healthy but stable with workaround  
  - **Action:** Document known limitations; still close mitigation; track permanent fix in RCA/corrective actions

---

### 6. Output Contract

**Artifacts produced:** Mitigation plan; containment and resolve actions (what, when, who); validation result; updated incident record.  
**State changes:** Incident contained/resolved; system healthy or stable; RCA and follow-up triggered.  
**Signals emitted:** “Mitigation complete”; “RCA initiated”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Impact contained and/or resolved
- [ ] System healthy or stable with documented limitations
- [ ] Mitigation actions documented
- [ ] RCA (and corrective actions/postmortem as applicable) triggered

**Who can approve:** Incident lead, on-call, or tech lead (per org).

---

### 8. Downstream Dependencies

**Output → Input:** Mitigation actions, timeline, validation → [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md), [Corrective Actions Procedure](./corrective-actions-procedure.md), [Postmortem Procedure](./postmortem-procedure.md). [Rollback Procedure](../release-lifecycle/rollback-procedure.md) may be used during mitigation.

**Procedures that depend on this:**
- [Root Cause Analysis Procedure](./root-cause-analysis-procedure.md) – Uses mitigation timeline and actions
- [Corrective Actions Procedure](./corrective-actions-procedure.md) – Uses mitigation and RCA to plan prevention
- [Postmortem Procedure](./postmortem-procedure.md) – Uses mitigation narrative and outcomes

---

### 9. Definition of Done

- [ ] Incident contained and/or resolved
- [ ] System validated healthy or stable
- [ ] Mitigation actions documented
- [ ] RCA and follow-up procedures triggered

---

### 10. Audit & Traceability

**Links to:** Incident record, runbooks used, mitigation actions, validation, RCA/postmortem triggers. **Audit trail:** Mitigation timeline, actors, decisions.

---

### 11. Exit States

**✅ Completed successfully** – Mitigation complete; RCA and follow-up triggered.  
**⚠️ Blocked** – Cannot contain or resolve; escalate; document and continue coordination.  
**❌ Aborted** – Incident deemed non-incident or superseded; document and close.

---

**Status:** Active Procedure  
**Owner:** Incident lead / On-call
