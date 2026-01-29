# Procedure: Audit Logging (Data Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines and operates audit logging for data access and mutations so that access, changes, and deletions are traceable for security, compliance, and [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md). It ensures log scope, format, retention, and access are defined and that logs are used for audit and investigation.

**What problem it solves**

- No audit trail for data access or changes; compliance or investigation gaps
- Inconsistent or incomplete logging; who/when/what unclear
- Log retention too short or too long; compliance or cost issues
- [Data Classification Procedure](./data-classification-procedure.md) or [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) require audit logs but none defined

**What "success" looks like at the end**

Audit logging operational with:
- Scope defined (what to log: access, mutations, deletions) per [Data Classification Procedure](./data-classification-procedure.md) and compliance
- Log format, storage, retention, and access controls documented and implemented
- Logs produced and retained; used for audit, compliance, and investigation
- [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) and [Governance & Compliance](../governance-compliance/) satisfied

---

### 2. Trigger

**What causes this procedure to be invoked**

- New dataset or [Data Classification Procedure](./data-classification-procedure.md) requires audit logging
- Compliance or [Governance & Compliance](../governance-compliance/) mandates audit logs for data access or changes
- [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) requires deletion audit trail
- Security or incident investigation needs audit data; logging gaps found
- Periodic review of audit log scope, retention, or access

---

### 3. Required Inputs

**Artifacts:**
- [ ] **Scope** – What to log (e.g. reads, writes, deletes, logins, admin actions); which data stores or APIs
- [ ] **Classification** – From [Data Classification Procedure](./data-classification-procedure.md); may drive scope (e.g. PII access always logged)
- [ ] **Log format and schema** – Fields (actor, action, resource, timestamp, result, etc.); structure for query and retention
- [ ] **Storage and retention** – Where logs are stored; retention per compliance; access controls
- [ ] **Compliance** – Requirements (e.g. tamper-evident, immutable, access restricted)

**Decisions already made:**
- [ ] **Audit owner** – Team or role responsible for audit logging and access
- [ ] **Retention** – How long to keep audit logs; align with [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) and compliance

**Constraints:**
- [ ] **No PII in logs** – Or minimal, per policy; avoid logging sensitive payloads
- [ ] **Integrity** – Logs immutable or append-only where compliance requires

**⚠️ If an input is missing → halt or remediate**

**Remediation paths:**
- **Scope unclear** – Log access and mutations for classified data minimally; expand with compliance
- **Retention unclear** – Define default (e.g. 1 year); align with compliance; refine later

---

### 4. Plan Requirement

**Plan includes:** Scope, format, storage, retention, access, compliance. **Output:** Audit Logging Plan.

---

### 5. Workflow

#### Step 1: Define Scope and Format

**Purpose:** Define what to log and log format.

**Actions:** Define scope (access, mutations, deletions; which stores/APIs) per [Data Classification Procedure](./data-classification-procedure.md) and compliance. Define log schema (actor, action, resource, timestamp, result, etc.); ensure queryable and retention-friendly. Document scope and format; get audit owner and compliance sign-off.

**Outputs:** Audit scope and format; sign-off.

**Failure:** Scope or format disputed → resolve with compliance; document.

---

#### Step 2: Implement Logging and Storage

**Purpose:** Emit audit events and store them.

**Actions:** Implement logging in apps, APIs, or data layer per scope. Write to agreed sink (e.g. logging service, SIEM); enforce retention and access controls. Ensure immutability or append-only if required. Verify logs are produced and queryable; alert on logging failures.

**Outputs:** Audit logging implemented; logs stored; retention and access enforced.

**Failure:** Logging fails or gaps → fix implementation; backfill if feasible; document limitations.

---

#### Step 3: Operate and Retain

**Purpose:** Operate logging pipeline; retain per policy.

**Actions:** Run logging pipeline; retain logs per retention policy. Enforce access controls; restrict access to audit owner or authorised roles. Periodically validate log volume, retention, and queryability. Align with [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) for deletion audit and log retention.

**Outputs:** Logs operating and retained; access controlled; validation done.

**Failure:** Retention or access violated → fix; report to compliance if required.

---

#### Step 4: Use for Audit and Investigation

**Purpose:** Use audit logs for compliance audit and investigation.

**Actions:** Support compliance audits: provide access to logs per scope and retention; ensure format and integrity meet requirements. Support security or incident investigation: query logs for actor, resource, time range; document how to request and use logs. Update scope or format if compliance or investigation needs change.

**Outputs:** Audit and investigation supported; scope/format updated if needed.

**Failure:** Logs insufficient for audit or investigation → extend scope or retention; document and implement.

---

### 6. Output Contract

**Artifacts:** Audit scope, format, storage, retention policy; logging implementation; access and use documentation. **State:** Audit logs produced, retained, and used. **Signals:** “Audit logging operational”; “Audit requested”.

---

### 7. Validation & Acceptance Criteria

**Checks:** Scope and format defined; logging implemented and operating; retention and access enforced; audit and investigation supported. **Who approves:** Audit owner, compliance.

---

### 8. Downstream Dependencies

**Output →:** [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) (deletion audit), [Governance & Compliance](../governance-compliance/), security and incident investigation. **Depends on:** [Data Classification Procedure](./data-classification-procedure.md).

---

### 9. Definition of Done

- [ ] Scope and format defined and approved
- [ ] Logging implemented and operating
- [ ] Retention and access enforced; audit and investigation supported

---

### 10. Audit & Traceability

**Links to:** Scope, format, storage, retention, access policy, compliance. **Audit trail:** Audit log requests, retention deletions, scope changes.

---

### 11. Exit States

**✅ Completed successfully** – Audit logging operational; compliance and investigation supported.  
**⚠️ Blocked** – Scope, retention, or compliance unclear; resolve and re-run.  
**❌ Aborted** – Audit logging work cancelled; document; ensure minimal compliance where required.

---

**Status:** Active Procedure  
**Owner:** Audit owner / Compliance / Security
