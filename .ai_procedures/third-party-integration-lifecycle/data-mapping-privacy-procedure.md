# Procedure: Data Mapping & Privacy (Third-Party Integration Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to map data between our systems and third-party integrations and ensure privacy and compliance. It ensures data flows are documented, PII and sensitive data are handled per [Data Classification](../data-lifecycle/data-classification-procedure.md) and [Data Retention & Deletion](../data-lifecycle/data-retention-deletion-procedure.md), and [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) and [Governance & Compliance](../governance-compliance/) are satisfied.

**What problem it solves**

- Data sent to or received from vendors without mapping or privacy review
- PII or sensitive data shared without consent or compliant handling
- [Data Lifecycle](../data-lifecycle/) and [Governance & Compliance](../governance-compliance/) lack integration data context
- Compliance or audit cannot trace integration data flows

**What "success" looks like at the end**

Data mapping and privacy for integrations defined and operational with:
- Data mapping (our ↔ vendor) documented; transformations and storage clarified
- Privacy and compliance (GDPR, etc.) considered; PII handling and retention defined
- Links to [Data Classification](../data-lifecycle/data-classification-procedure.md), [Data Retention & Deletion](../data-lifecycle/data-retention-deletion-procedure.md), [Vendor Evaluation](./vendor-evaluation-procedure.md), [Governance & Compliance](../governance-compliance/)

---

### 2. Trigger

- New third-party integration; data flows and privacy not yet defined
- [Feature Lifecycle Third-Party Integration](../feature-lifecycle/third-party-integration-procedure.md) or [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) require data mapping and privacy
- [Vendor Evaluation](./vendor-evaluation-procedure.md) or [Contract & SLA](./contract-sla-procedure.md) touch data; mapping and privacy must align
- Compliance or DPIAs require integration data flow and privacy documentation

---

### 3. Required Inputs

**Artifacts:** Integration and vendor API; [Data Classification](../data-lifecycle/data-classification-procedure.md), [Data Retention & Deletion](../data-lifecycle/data-retention-deletion-procedure.md) (or scope); [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md); privacy and compliance requirements.  
**Decisions:** Owner (data, compliance, product); data-sharing and retention for vendor.  
**Constraints:** PII and sensitive data only per policy; retention and deletion align with [Data Retention & Deletion](../data-lifecycle/data-retention-deletion-procedure.md).

**Remediation:** Classification or retention unclear → document assumptions; align with data and compliance when available.

---

### 4. Plan Requirement

**Plan includes:** Data mapping, transformations, storage, PII handling, retention, compliance, links to data lifecycle and governance. **Output:** Data Mapping & Privacy Plan.

---

### 5. Workflow

**Step 1: Document data mapping.** Map data we send to and receive from vendor; document transformations, storage, and retention. Identify PII and sensitive data per [Data Classification](../data-lifecycle/data-classification-procedure.md). **Outputs:** Data mapping doc.

**Step 2: Define privacy and compliance.** Ensure handling (consent, purpose, minimization) and retention align with [Data Retention & Deletion](../data-lifecycle/data-retention-deletion-procedure.md) and compliance. Document vendor as processor or controller where applicable; DPIA if required. **Outputs:** Privacy and compliance section.

**Step 3: Publish and link.** Store mapping and privacy doc; link [Data Classification](../data-lifecycle/data-classification-procedure.md), [Data Retention & Deletion](../data-lifecycle/data-retention-deletion-procedure.md), [Vendor Evaluation](./vendor-evaluation-procedure.md), [Governance & Compliance](../governance-compliance/). Update when integration or data flows change. **Outputs:** Published doc; links.

---

### 6. Output Contract

**Artifacts:** Data mapping and privacy doc (mapping, PII, retention, compliance). **State:** Mapping and privacy defined and maintained. **Signals:** “Data mapping & privacy defined”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Data mapping documented; PII and compliance considered; retention aligned; linked to data lifecycle and governance. **Who approves:** Data owner, compliance, product.

---

### 8. Downstream Dependencies

**Output →:** [Data Classification Procedure](../data-lifecycle/data-classification-procedure.md), [Data Retention & Deletion Procedure](../data-lifecycle/data-retention-deletion-procedure.md), [Vendor Evaluation Procedure](./vendor-evaluation-procedure.md), [Governance & Compliance](../governance-compliance/). **Depends on:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) (data mapping, privacy).

---

### 9. Definition of Done

- [ ] Data mapping documented
- [ ] Privacy and compliance defined; PII and retention aligned
- [ ] Doc published and linked to data lifecycle and governance

---

### 10. Audit & Traceability

**Links to:** Mapping doc, classification, retention, vendor, governance. **Audit trail:** Mapping updates, privacy reviews.

---

### 11. Exit States

**✅ Completed successfully** – Data mapping and privacy defined and maintained. **⚠️ Blocked** – Classification or compliance unclear; document assumptions and resolve. **❌ Aborted** – Data mapping/privacy work cancelled; document reason.

---

**Status:** Active Procedure  
**Owner:** Data owner / Compliance / Product
