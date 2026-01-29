# Procedure: Vendor Evaluation (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to evaluate third-party vendors and services before adoption. It ensures fit, security, reliability, and compliance are assessed so that integrations are chosen consistently and [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) and [Feature Lifecycle Third-Party Integration Procedure](../feature-lifecycle/third-party-integration-procedure.md) can rely on a structured evaluation.

**What problem it solves**

- Vendors adopted without structured evaluation; poor fit or hidden risk
- Security, SLA, or compliance not assessed before integration
- No record of evaluation or decision rationale
- [Contract & SLA Procedure](./contract-sla-procedure.md) or [Secrets & Credentials Procedure](./secrets-credentials-procedure.md) lack vendor context

**What "success" looks like at the end**

Vendor evaluation complete with:
- Evaluation criteria and process documented
- Vendor assessed (fit, security, SLA, compliance, cost)
- Go/no-go decision and rationale recorded
- Output feeds [Contract & SLA](./contract-sla-procedure.md), [Secrets & Credentials](./secrets-credentials-procedure.md), and integration spec

---

### 2. Trigger

- New third-party integration proposed; vendor not yet evaluated
- [Feature Lifecycle Third-Party Integration Procedure](../feature-lifecycle/third-party-integration-procedure.md) or [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) require vendor evaluation
- Re-evaluation (renewal, incident, or compliance review)
- Governance or procurement requires documented evaluation

---

### 3. Required Inputs

**Artifacts:** Integration need (use case, requirements); candidate vendor(s); [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md); evaluation criteria (fit, security, SLA, compliance, cost).  
**Decisions:** Owner (product, eng, security); go/no-go authority.  
**Constraints:** Compliance and security must be assessed.

**Remediation:** Criteria undefined → define minimal criteria (fit, security, SLA); refine with org.

---

### 4. Plan Requirement

**Plan includes:** Criteria, process, assessors, decision process, links to Contract & SLA, Secrets & Credentials. **Output:** Vendor Evaluation Plan.

---

### 5. Workflow

**Step 1: Define criteria and process.** Document evaluation criteria (functional fit, security, SLA, compliance, cost, support). Define process (who assesses, timeline, decision authority). **Outputs:** Criteria and process.

**Step 2: Assess vendor(s).** Score vendor(s) against criteria; document evidence and gaps. **Outputs:** Assessment and scores.

**Step 3: Decide and record.** Make go/no-go decision; record rationale. If go: hand off to [Contract & SLA Procedure](./contract-sla-procedure.md), [Secrets & Credentials Procedure](./secrets-credentials-procedure.md) as applicable. **Outputs:** Decision, rationale, handoff.

---

### 6. Output Contract

**Artifacts:** Evaluation criteria, assessment, decision, rationale. **State:** Vendor evaluated; decision recorded. **Signals:** “Vendor evaluated”; “Go” / “No-go”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Criteria defined; vendor assessed; decision and rationale recorded. **Who approves:** Evaluation owner, security, procurement (per org).

---

### 8. Downstream Dependencies

**Output →:** [Contract & SLA Procedure](./contract-sla-procedure.md), [Secrets & Credentials Procedure](./secrets-credentials-procedure.md), [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md). **Depends on:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md).

---

### 9. Definition of Done

- [ ] Criteria and process defined
- [ ] Vendor assessed; decision and rationale recorded
- [ ] Handoff to Contract & SLA, Secrets & Credentials as applicable

---

### 10. Audit & Traceability

**Links to:** Evaluation doc, vendor, decision, standards. **Audit trail:** Evaluation date, assessors, outcome.

---

### 11. Exit States

**✅ Completed successfully** – Vendor evaluated; go/no-go recorded. **⚠️ Blocked** – Missing criteria or assessors; resolve and re-run. **❌ Aborted** – Evaluation cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Product / Engineering / Security
