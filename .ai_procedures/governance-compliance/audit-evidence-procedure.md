# Procedure: Audit Evidence (Governance & Compliance)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to collect, store, and present audit evidence for compliance (security, privacy, change management, access, etc.) so that auditors and regulators can verify control effectiveness. It ensures evidence from [Data Privacy](./data-privacy-procedure.md), [Access Review](./access-review-procedure.md), [Change Approval](./change-approval-procedure.md), [Vendor Compliance](./vendor-compliance-procedure.md), [Security Logging](../security-lifecycle/security-logging-procedure.md), and [Audit Logging](../data-lifecycle/audit-logging-procedure.md) is aggregated and retainable.

**What problem it solves**

- No structured audit evidence; audits manual or incomplete
- Evidence scattered across [Security](../security-lifecycle/), [Data](../data-lifecycle/), [Change Management](../change-management-lifecycle/), [Vendor](../third-party-integration-lifecycle/); hard to aggregate
- [Data Privacy](./data-privacy-procedure.md), [Access Review](./access-review-procedure.md), or [Vendor Compliance](./vendor-compliance-procedure.md) lack evidence handoff
- Regulatory or customer audit requests cannot be fulfilled efficiently

**What "success" looks like at the end**

Audit evidence process operational with:
- Evidence scope and sources (privacy, access, change, vendor, security, audit logs) defined
- Collection, retention, and presentation process; evidence available for audit
- Links to [Data Privacy](./data-privacy-procedure.md), [Access Review](./access-review-procedure.md), [Change Approval](./change-approval-procedure.md), [Vendor Compliance](./vendor-compliance-procedure.md), [Security Logging](../security-lifecycle/security-logging-procedure.md), [Audit Logging](../data-lifecycle/audit-logging-procedure.md)

---

### 2. Trigger

- Audit (internal or external) scheduled; evidence must be collected and presented
- [Data Privacy](./data-privacy-procedure.md), [Access Review](./access-review-procedure.md), [Change Approval](./change-approval-procedure.md), or [Vendor Compliance](./vendor-compliance-procedure.md) produce evidence; need aggregation and retention
- Regulatory or customer request for evidence
- Compliance review; evidence gaps identified

---

### 3. Required Inputs

**Artifacts:** Audit scope and criteria; evidence sources ([Data Privacy](./data-privacy-procedure.md), [Access Review](./access-review-procedure.md), [Change Approval](./change-approval-procedure.md), [Vendor Compliance](./vendor-compliance-procedure.md), [Security Logging](../security-lifecycle/security-logging-procedure.md), [Audit Logging](../data-lifecycle/audit-logging-procedure.md)); retention and access policy.  
**Decisions:** Owner (compliance, audit); retention and presentation format.  
**Constraints:** Evidence immutable or integrity protected; retention per regulation.

**Remediation:** Sources or scope unclear → define minimal evidence set; add sources as procedures mature.

---

### 4. Plan Requirement

**Plan includes:** Evidence scope, sources, collection, retention, presentation, links to procedures. **Output:** Audit Evidence Plan.

---

### 5. Workflow

**Step 1: Define scope and sources.** Define what evidence is required (per audit framework or regulation); map to [Data Privacy](./data-privacy-procedure.md), [Access Review](./access-review-procedure.md), [Change Approval](./change-approval-procedure.md), [Vendor Compliance](./vendor-compliance-procedure.md), [Security Logging](../security-lifecycle/security-logging-procedure.md), [Audit Logging](../data-lifecycle/audit-logging-procedure.md). **Outputs:** Scope; source mapping.

**Step 2: Collect and retain.** Collect evidence from sources; store in audit evidence store; enforce retention. **Outputs:** Evidence collected; retained.

**Step 3: Present and maintain.** Present evidence to auditors or regulators per request; update collection when scope or procedures change. **Outputs:** Presentation process; maintenance.

---

### 6. Output Contract

**Artifacts:** Audit evidence scope, collection process, retained evidence, presentation process. **State:** Audit evidence operational. **Signals:** “Audit evidence available”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and sources defined; collection and retention in place; presentation process. **Who approves:** Compliance, audit.

---

### 8. Downstream Dependencies

**Output →:** [Data Privacy Procedure](./data-privacy-procedure.md), [Access Review Procedure](./access-review-procedure.md), [Change Approval Procedure](./change-approval-procedure.md), [Vendor Compliance Procedure](./vendor-compliance-procedure.md). **Depends on:** [Security Logging](../security-lifecycle/security-logging-procedure.md), [Audit Logging](../data-lifecycle/audit-logging-procedure.md), [Change Management](../change-management-lifecycle/), [Third-Party](../third-party-integration-lifecycle/).

---

### 9. Definition of Done

- [ ] Scope and sources defined
- [ ] Collection and retention in place
- [ ] Presentation process; evidence available for audit

---

### 10. Audit & Traceability

**Links to:** Evidence store, sources, retention. **Audit trail:** Evidence collection, presentation, retention.

---

### 11. Exit States

**✅ Completed successfully** – Audit evidence operational. **⚠️ Blocked** – Sources or scope missing; resolve and re-run. **❌ Aborted** – Audit evidence work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Compliance / Audit
