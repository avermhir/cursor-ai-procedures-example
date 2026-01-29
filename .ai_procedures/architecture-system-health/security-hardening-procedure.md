# Procedure: Security Hardening

### 1. Purpose

**Why this procedure exists**

This procedure guides planned security hardening of a system or component. It ensures hardening is scoped, based on risk or standards, and validated so that security improves without introducing regressions or incomplete fixes.

**What problem it solves**

- Ad-hoc security changes that miss scope or introduce bugs
- No alignment with threat model or security standards
- Hardening not verified (e.g. config not applied, vulnerability still present)
- No record of what was hardened and why

**What "success" looks like at the end**

Security hardening that includes:
- Scope and objectives defined (from risk, threat model, or standards)
- Hardening changes implemented and verified
- No functional regressions; hardening documented and linked to threat model or standards

---

### 2. Trigger

**What causes this procedure to be invoked**

- Security finding, audit, or threat model identifies hardening need
- [Threat Model Procedure](../feature-lifecycle/threat-model-procedure.md) or [Security Review Procedure](../feature-lifecycle/security-review-procedure.md) produces hardening actions
- [Tech Debt Intake Procedure](./tech-debt-intake-procedure.md) or backlog assigns security hardening work
- Compliance or standard (e.g. [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)) requires specific controls

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Hardening objective** – What to improve (e.g. fix finding, implement control, meet standard)
- [ ] **Scope** – Component, service, or asset in scope
- [ ] **Reference** – Threat model, finding, or standard (e.g. [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md), [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md))
- [ ] **Validation method** – How to verify hardening (test, scan, review)

**Decisions already made:**
- [ ] **Hardening approved** – Work is scheduled and prioritized

**Constraints:**
- [ ] **No unintended functional regressions** – Hardening must not break legitimate use; tests must pass

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing reference** – Align with security team or standard; document source
- **Missing validation** – Define verification step (e.g. re-scan, checklist) before implementation

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – From scope and reference through implementation and verification
- **Objective and scope** – What will be hardened and why
- **Reference** – Threat model, finding ID, or standard section
- **Approach** – Concrete changes (config, code, dependency, access control)
- **Validation** – How hardening will be verified
- **Risks** – Regressions, dependency on other changes

**Plan must be reviewed before execution begins**

**Output:**
- Security Hardening Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Scope and Hardening Actions

**Purpose**
- Agree scope and specific hardening actions from threat model, finding, or standard

**Inputs**
- **From:** Procedure Required Inputs (objective, scope, reference, validation method)

**Actions**
- Document objective (e.g. “Remediate finding X”, “Implement control Y per standard”).
- Define scope (component, service, config, dependency).
- List concrete hardening actions (e.g. enable auth on endpoint, upgrade library, restrict IAM, add input validation).
- Map each action to reference (threat, finding, or standard).
- Define how each action will be verified (test, scan, checklist).
- Get plan reviewed (security or tech lead); adjust if needed.

**Decisions / Evaluations**
- **Decision:** Is scope and list of actions defined and approved?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, refine scope or actions and re-plan

**Outputs**
- Hardening plan (objective, scope, actions, reference, verification)
- Plan approved

**Failure Handling**
- **Failure:** Conflicting or incomplete reference
  - **Action:** Clarify with security or standard owner; document assumption

---

#### Step 2: Implement and Verify Hardening

**Purpose**
- Implement hardening and verify it is effective and non-regressive

**Inputs**
- **From:** Step 1 outputs (plan, actions, verification)

**Actions**
- Implement each hardening action (code, config, dependency, access control).
- Run verification (re-scan, test, checklist) and confirm finding resolved or control in place.
- Run functional tests; ensure no unintended regressions for legitimate use.
- Document what was hardened (and where); link to threat model, finding, or standard.
- If finding remains (e.g. partial fix): document residual risk and follow-up; do not mark complete without acceptance.

**Decisions / Evaluations**
- **Decision:** Is hardening verified and no unacceptable regressions?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, fix and re-verify or document residual risk and follow-up

**Outputs**
- Hardening implemented and verified
- Documentation updated; linked to reference
- Functional tests passing

**Failure Handling**
- **Failure:** Verification fails or regression found
  - **Action:** Fix implementation or verification; do not close without verification

---

### 6. Output Contract

**Artifacts produced:** Hardening change(s), verification result, short summary (what was hardened, reference).  
**State changes:** Security improved per objective; finding remediated or control in place.  
**Signals emitted:** “Security hardening complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Scope and actions defined and approved
- [ ] Hardening implemented and verified (scan/test/checklist)
- [ ] No functional regressions; documented and linked to reference

**Who can approve:** Security owner, tech lead, or compliance (per org)

---

### 8. Downstream Dependencies

**Output → Input:** Hardening summary → Threat model update, [Security Review Procedure](../feature-lifecycle/security-review-procedure.md), audit trail. **Procedures that depend on this:** Referenced by threat model and security standards.

---

### 9. Definition of Done

- [ ] Hardening plan defined and approved
- [ ] Hardening implemented and verified
- [ ] No regressions; documented and linked to threat model/finding/standard

---

### 10. Audit & Traceability

**Links to:** Hardening plan, PR(s), threat model, finding, standard. **Audit trail:** What was hardened, verification result, date, owner.

---

### 11. Exit States

**✅ Completed successfully** – Hardening verified; no regressions; documented.  
**⚠️ Blocked** – Missing reference or verification; resolve and re-run.  
**❌ Aborted** – Hardening cancelled or deferred; document reason and residual risk.

---

**Status:** Active Procedure  
**Owner:** Security owner / Tech lead
