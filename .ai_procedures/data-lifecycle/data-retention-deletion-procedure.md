# Procedure: Data Retention & Deletion (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines and executes data retention and deletion policies so that data is kept only as long as required by business, compliance, and [Data Classification Procedure](./data-classification-procedure.md). It ensures retention rules are documented, deletion is safe and auditable, and backup retention aligns.

**What problem it solves**

- Data retained indefinitely; compliance or storage cost risk
- No retention policy; inconsistent delete behavior
- Deletion ad-hoc or unsafe; referential integrity or downstream consumers broken
- Backup retention not aligned with data retention

**What "success" looks like at the end**

Retention and deletion defined and operational with:
- Retention policy per dataset (or classification) documented and approved
- Deletion process (what, when, how) defined and executed safely
- [Backup & Restore Procedure](./backup-restore-procedure.md) retention aligned with data retention
- [Audit Logging Procedure](./audit-logging-procedure.md) and compliance satisfied; deletions logged

---

### 2. Trigger

**What causes this procedure to be invoked**

- New dataset or [Data Classification Procedure](./data-classification-procedure.md) outcome requires retention policy
- Compliance or [Governance & Compliance](../governance-compliance/) mandates retention or deletion (e.g. GDPR right to erasure)
- Storage or cost review; retention shortening or archival
- [Backup & Restore Procedure](./backup-restore-procedure.md) retention review; align with data retention
- User or customer request for deletion (where supported)

---

### 3. Required Inputs

**Artifacts:**
- [ ] **Dataset or scope** – What retention and deletion apply to
- [ ] **Classification** – From [Data Classification Procedure](./data-classification-procedure.md); may drive retention (e.g. PII)
- [ ] **Retention policy** – How long to keep (e.g. 7 years, 90 days, until deleted); legal or compliance source
- [ ] **Deletion mechanism** – Hard delete, soft delete, anonymization; order (child before parent, etc.)
- [ ] **Backup retention** – [Backup & Restore Procedure](./backup-restore-procedure.md) retention; must align with data retention

**Decisions already made:**
- [ ] **Data owner** – Owner approves retention and deletion policy
- [ ] **Compliance** – Legal or compliance has confirmed retention and deletion approach

**Constraints:**
- [ ] **No orphaned references** – Deletion order and referential integrity; downstream consumers considered
- [ ] **Audit** – Deletions logged per [Audit Logging Procedure](./audit-logging-procedure.md) and compliance

**⚠️ If an input is missing → halt or remediate**

**Remediation paths:**
- **Retention policy missing** – Define default (e.g. retain until explicitly deleted); get compliance sign-off; refine later
- **Deletion mechanism unclear** – Define safe order and mechanism; test in non-prod; document

---

### 4. Plan Requirement

**Plan includes:** Scope, retention rules, deletion mechanism and order, backup alignment, audit, compliance. **Output:** Data Retention & Deletion Plan.

---

### 5. Workflow

#### Step 1: Define Retention Policy

**Purpose:** Document retention per dataset or classification.

**Actions:** For each in-scope dataset: define retention (duration or trigger, e.g. “90 days after last use”, “until account deleted”). Cite compliance or business source. Get data owner and compliance sign-off. Publish retention policy; align [Backup & Restore Procedure](./backup-restore-procedure.md) retention so backups are not kept longer than allowed.

**Outputs:** Retention policy (per dataset/classification); backup alignment; sign-off.

**Failure:** Compliance or owner disagrees → resolve; do not publish until approved.

---

#### Step 2: Implement Deletion Mechanism

**Purpose:** Implement safe, ordered deletion (or anonymization) per policy.

**Actions:** Implement deletion jobs or APIs: correct order (e.g. child before parent), batch size, idempotency. Support hard delete, soft delete, or anonymization per policy. Integrate with [Audit Logging Procedure](./audit-logging-procedure.md) to log deletions. Test in non-prod; verify no broken references or downstream failures.

**Outputs:** Deletion mechanism implemented and tested; audit logging wired.

**Failure:** Referential integrity or consumer break → fix order or scope; re-test.

---

#### Step 3: Run Retention and Deletion

**Purpose:** Execute retention (e.g. identify expired data) and deletion per policy.

**Actions:** Schedule or trigger retention jobs (identify data past retention). Run deletion per mechanism; log per [Audit Logging Procedure](./audit-logging-procedure.md). Verify no unintended deletes; reconcile counts if needed. Ensure [Backup & Restore Procedure](./backup-restore-procedure.md) does not retain backups of deleted data longer than policy allows.

**Outputs:** Retention applied; deletion executed and logged; backup alignment confirmed.

**Failure:** Unintended deletes or audit gap → stop; investigate; fix and re-run with caution.

---

#### Step 4: Handle Erasure Requests and Compliance

**Purpose:** Fulfill user/customer erasure or compliance-driven deletion.

**Actions:** When erasure requested (e.g. GDPR): identify all relevant data (including replicas, backups per policy); execute deletion per mechanism; log; confirm to requester. Periodic compliance review: confirm retention and deletion align with policy; update policy if regulations change.

**Outputs:** Erasure requests fulfilled; compliance review done; policy updated if needed.

**Failure:** Cannot fully erasure (e.g. backup retention) → document limitation; mitigate where possible; comply to extent feasible.

---

### 6. Output Contract

**Artifacts:** Retention policy, deletion mechanism, audit log of deletions, compliance records. **State:** Retention and deletion operational; backups aligned. **Signals:** "Retention policy published"; "Deletion executed"; "Erasure fulfilled".

---

### 7. Validation & Acceptance Criteria

**Checks:** Retention policy defined and approved; deletion implemented and tested; deletions logged; backup retention aligned; erasure requests handled. **Who approves:** Data owner, compliance.

---

### 8. Downstream Dependencies

**Output →:** [Backup & Restore Procedure](./backup-restore-procedure.md), [Audit Logging Procedure](./audit-logging-procedure.md), [Governance & Compliance](../governance-compliance/). **Depends on:** [Data Classification Procedure](./data-classification-procedure.md).

---

### 9. Definition of Done

- [ ] Retention policy defined and approved
- [ ] Deletion mechanism implemented and tested
- [ ] Retention and deletion run; deletions logged; backups aligned
- [ ] Erasure and compliance handled per policy

---

### 10. Audit & Traceability

**Links to:** Retention policy, deletion logs, backup retention, compliance. **Audit trail:** Policy updates, deletion runs, erasure requests.

---

### 11. Exit States

**✅ Completed successfully** – Retention and deletion operational; compliance satisfied.  
**⚠️ Blocked** – Policy or compliance unclear; resolve and re-run.  
**❌ Aborted** – Retention/deletion work cancelled; document; ensure minimal compliance.

---

**Status:** Active Procedure  
**Owner:** Data owner / Compliance
<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
StrReplace