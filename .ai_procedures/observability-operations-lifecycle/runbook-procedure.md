# Procedure: Runbook (Observability & Operations Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to create, maintain, and use runbooks for operational procedures (deploy, rollback, incident response, troubleshooting) so that [Alerting](./alerting-procedure.md), [On-Call Handoff](./on-call-handoff-procedure.md), and [Incident Lifecycle](../incident-lifecycle/) have consistent, actionable playbooks. It aligns with [Documentation & Runbook](../feature-lifecycle/documentation-runbook-procedure.md) and [Production Readiness Review](../release-lifecycle/production-readiness-review-procedure.md).

**What problem it solves**

- No runbooks or stale runbooks; on-call or incident response ad-hoc
- [Alerting](./alerting-procedure.md) or [Incident Lifecycle](../incident-lifecycle/) lack linked runbooks
- [Rollback](../release-lifecycle/rollback-procedure.md), [Deployment](../release-lifecycle/deployment-procedure.md), or troubleshooting not documented
- [Production Readiness Review](../release-lifecycle/production-readiness-review-procedure.md) requires runbooks but they are missing or incomplete

**What "success" looks like at the end**

Runbooks operational with:
- Runbooks for deploy, rollback, common incidents, and troubleshooting; linked to [Alerting](./alerting-procedure.md) and [On-Call Handoff](./on-call-handoff-procedure.md)
- Ownership and update process; kept current with [Documentation & Runbook](../feature-lifecycle/documentation-runbook-procedure.md) and [PRR](../release-lifecycle/production-readiness-review-procedure.md)
- Links to [Alerting](./alerting-procedure.md), [On-Call Handoff](./on-call-handoff-procedure.md), [Incident Lifecycle](../incident-lifecycle/), [Rollback](../release-lifecycle/rollback-procedure.md), [Deployment](../release-lifecycle/deployment-procedure.md)

---

### 2. Trigger

- New service or deploy process; runbooks required per [Documentation & Runbook](../feature-lifecycle/documentation-runbook-procedure.md) or [Production Readiness Review](../release-lifecycle/production-readiness-review-procedure.md)
- [Alerting](./alerting-procedure.md) or [On-Call Handoff](./on-call-handoff-procedure.md) need runbooks for alerts or handoff
- [Incident Lifecycle](../incident-lifecycle/) or [Rollback](../release-lifecycle/rollback-procedure.md) need documented procedures
- Post-incident; runbook missing or outdated; create or update

---

### 3. Required Inputs

**Artifacts:** Operations to document (deploy, rollback, troubleshoot, incident); [Alerting](./alerting-procedure.md), [On-Call Handoff](./on-call-handoff-procedure.md) for linkage; [Documentation & Runbook](../feature-lifecycle/documentation-runbook-procedure.md) or PRR requirements.  
**Decisions:** Owner (platform, SRE); format and location.  
**Constraints:** Runbooks must be actionable; steps clear; linked to alerts where applicable.

**Remediation:** Format or location unclear → define minimal (markdown, steps, ownership); store in agreed location.

---

### 4. Plan Requirement

**Plan includes:** Runbook scope, format, ownership, update process, links to alerting and on-call. **Output:** Runbook Plan.

---

### 5. Workflow

**Step 1: Create runbooks.** Document runbooks for deploy, rollback, common incidents, troubleshooting. Use consistent format (overview, prerequisites, steps, escalation). **Outputs:** Runbooks.

**Step 2: Link and publish.** Link runbooks to [Alerting](./alerting-procedure.md) (per alert where applicable) and [On-Call Handoff](./on-call-handoff-procedure.md). Publish in agreed location. **Outputs:** Linked runbooks; published.

**Step 3: Maintain.** Assign ownership; update runbooks when procedures or systems change. Review periodically; update from [Incident Lifecycle](../incident-lifecycle/) postmortems. **Outputs:** Ownership; update process.

---

### 6. Output Contract

**Artifacts:** Runbooks, links to alerting and on-call, ownership, update process. **State:** Runbooks operational. **Signals:** “Runbooks defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Runbooks created and linked; ownership and update process in place. **Who approves:** Platform owner, SRE.

---

### 8. Downstream Dependencies

**Output →:** [Alerting Procedure](./alerting-procedure.md), [On-Call Handoff Procedure](./on-call-handoff-procedure.md), [Incident Lifecycle](../incident-lifecycle/), [Rollback Procedure](../release-lifecycle/rollback-procedure.md), [Deployment Procedure](../release-lifecycle/deployment-procedure.md), [Documentation & Runbook](../feature-lifecycle/documentation-runbook-procedure.md). **Depends on:** [Production Readiness Review](../release-lifecycle/production-readiness-review-procedure.md) (runbook requirement).

---

### 9. Definition of Done

- [ ] Runbooks created and linked to alerting and on-call
- [ ] Ownership and update process in place
- [ ] Kept current with procedures and postmortems

---

### 10. Audit & Traceability

**Links to:** Runbooks, alerting, on-call, deploy, rollback. **Audit trail:** Runbook updates, ownership.

---

### 11. Exit States

**✅ Completed successfully** – Runbooks operational. **⚠️ Blocked** – Scope or ownership missing; resolve and re-run. **❌ Aborted** – Runbook work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Platform / SRE
