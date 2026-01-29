# Procedure: On-Call Handoff (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to run on-call rotations and handoffs so that [Alerting](./alerting-procedure.md) is routed to the right person, [Runbook](./runbook-procedure.md) and [Incident Lifecycle](../incident-lifecycle/) are known, and handoffs are smooth. It ensures on-call coverage, escalation, and context transfer are consistent and that [Incident Lifecycle](../incident-lifecycle/) is triggered when appropriate.

**What problem it solves**

- No on-call or unclear rotation; alerts unowned or missed
- Poor handoffs; context lost between shifts
- [Alerting](./alerting-procedure.md) or [Incident Lifecycle](../incident-lifecycle/) lack on-call routing and escalation
- [Runbook](./runbook-procedure.md) and escalation paths not communicated to on-call

**What "success" looks like at the end**

On-call handoff operational with:
- On-call rotation, coverage, and escalation defined; [Alerting](./alerting-procedure.md) routed to on-call
- Handoff process (context, active incidents, runbooks) documented and used
- [Runbook](./runbook-procedure.md) and [Incident Lifecycle](../incident-lifecycle/) accessible to on-call; escalation path clear
- Links to [Alerting](./alerting-procedure.md), [Runbook](./runbook-procedure.md), [Incident Lifecycle](../incident-lifecycle/)

---

### 2. Trigger

- New service or team; on-call rotation and handoff needed
- [Alerting](./alerting-procedure.md) or [Incident Lifecycle](../incident-lifecycle/) require on-call routing and escalation
- Handoff issues; context or runbooks not transferred
- [Post-Release Monitoring](../release-lifecycle/post-release-monitoring-procedure.md) or ops need defined on-call

---

### 3. Required Inputs

**Artifacts:** [Alerting](./alerting-procedure.md) routing; [Runbook](./runbook-procedure.md); [Incident Lifecycle](../incident-lifecycle/) procedures; on-call tooling (e.g. PagerDuty, Opsgenie).  
**Decisions:** Owner (platform, SRE); rotation schedule, escalation path.  
**Constraints:** Coverage assured; handoff includes active incidents and context.

**Remediation:** Tooling or rotation missing → define minimal (schedule, escalation); add tooling when available.

---

### 4. Plan Requirement

**Plan includes:** Rotation, coverage, escalation, handoff process, links to alerting, runbook, incident lifecycle. **Output:** On-Call Handoff Plan.

---

### 5. Workflow

**Step 1: Define rotation and escalation.** Define on-call rotation, coverage, primary/secondary, escalation path. Route [Alerting](./alerting-procedure.md) to on-call. **Outputs:** Rotation; escalation; alert routing.

**Step 2: Define handoff process.** Document handoff process: what to communicate (active incidents, context, runbooks), when (start/end of shift), and how (handoff meeting, written summary). **Outputs:** Handoff process.

**Step 3: Operate and maintain.** Run rotations; perform handoffs per process. Ensure [Runbook](./runbook-procedure.md) and [Incident Lifecycle](../incident-lifecycle/) are known to on-call. Update rotation or escalation as needed. **Outputs:** Operational on-call; maintenance.

---

### 6. Output Contract

**Artifacts:** Rotation, escalation, handoff process, alert routing. **State:** On-call handoff operational. **Signals:** “On-call handoff defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Rotation and escalation defined; handoff process in place; alert routing and runbooks known to on-call. **Who approves:** Platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [Alerting Procedure](./alerting-procedure.md), [Runbook Procedure](./runbook-procedure.md), [Incident Lifecycle](../incident-lifecycle/). **Depends on:** On-call tooling.

---

### 9. Definition of Done

- [ ] Rotation and escalation defined; alert routing configured
- [ ] Handoff process documented and used
- [ ] Runbooks and incident lifecycle accessible to on-call

---

### 10. Audit & Traceability

**Links to:** Rotation, escalation, handoff process, alerting, runbooks. **Audit trail:** Handoffs, escalation events.

---

### 11. Exit States

**✅ Completed successfully** – On-call handoff operational. **⚠️ Blocked** – Tooling or rotation missing; resolve and re-run. **❌ Aborted** – On-call work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / SRE
