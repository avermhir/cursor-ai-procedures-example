# Procedure: Contract & SLA (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to establish and manage contracts and SLAs with third-party vendors. It ensures terms, SLAs, and liability are documented and tracked so that integrations have clear expectations and [Vendor Evaluation](./vendor-evaluation-procedure.md) outcomes are reflected in legal and operational terms.

**What problem it solves**

- Integrations without clear contract or SLA; disputes or unmet expectations
- SLA not monitored or enforced; no recourse when vendor underperforms
- [Failure Mode Procedure](./failure-mode-procedure.md) or [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md) lack SLA context
- Compliance or procurement requires contract and SLA documentation

**What "success" looks like at the end**

Contract and SLA in place with:
- Contract terms (scope, liability, termination) documented
- SLA defined (availability, latency, support) and tracked
- Owner and review cadence identified
- Links to [Vendor Evaluation](./vendor-evaluation-procedure.md), [Monitoring & Alerting](./monitoring-alerting-procedure.md), [Governance & Compliance](../governance-compliance/)

---

### 2. Trigger

- [Vendor Evaluation](./vendor-evaluation-procedure.md) concludes “go”; contract and SLA needed
- New integration; contract or SLA not yet defined
- Renewal, renegotiation, or incident-driven SLA review
- Governance or [Vendor Compliance](../governance-compliance/) requires contract/SLA documentation

---

### 3. Required Inputs

**Artifacts:** [Vendor Evaluation](./vendor-evaluation-procedure.md) output; vendor contract (draft or signed); SLA requirements; [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md).  
**Decisions:** Owner (procurement, product, legal); SLA targets and review cadence.  
**Constraints:** Compliance and liability must be covered.

**Remediation:** Contract or SLA missing → document minimal terms and SLA; formalize with legal/procurement when available.

---

### 4. Plan Requirement

**Plan includes:** Contract scope, SLA definition, ownership, review cadence, links to monitoring and governance. **Output:** Contract & SLA Plan.

---

### 5. Workflow

**Step 1: Define contract and SLA.** Document contract scope, key terms, liability, termination. Define SLA (availability, latency, support response). Align with [Vendor Evaluation](./vendor-evaluation-procedure.md) and [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md). **Outputs:** Contract summary; SLA definition.

**Step 2: Establish ownership and review.** Assign owner; set review cadence (e.g. annually, post-incident). Link to [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md) for SLA tracking. **Outputs:** Owner; review cadence; monitoring link.

**Step 3: Record and maintain.** Store contract and SLA in agreed location; update on renewal or change. Ensure [Governance & Compliance](../governance-compliance/) and [Vendor Compliance](../governance-compliance/) can access. **Outputs:** Contract and SLA recorded; maintenance process.

---

### 6. Output Contract

**Artifacts:** Contract summary, SLA definition, owner, review cadence. **State:** Contract and SLA in place and tracked. **Signals:** “Contract & SLA defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Contract and SLA defined; owner and review cadence set; monitoring linked. **Who approves:** Procurement, legal, or product (per org).

---

### 8. Downstream Dependencies

**Output →:** [Monitoring & Alerting Procedure](./monitoring-alerting-procedure.md), [Failure Mode Procedure](./failure-mode-procedure.md), [Governance & Compliance](../governance-compliance/). **Depends on:** [Vendor Evaluation Procedure](./vendor-evaluation-procedure.md).

---

### 9. Definition of Done

- [ ] Contract and SLA defined and recorded
- [ ] Owner and review cadence set
- [ ] Monitoring and governance linked

---

### 10. Audit & Traceability

**Links to:** Contract, SLA, vendor, monitoring, governance. **Audit trail:** Effective date, renewals, SLA review.

---

### 11. Exit States

**✅ Completed successfully** – Contract and SLA in place and maintained. **⚠️ Blocked** – Contract or legal review pending; resolve and re-run. **❌ Aborted** – Contract/SLA work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Procurement / Product / Legal
