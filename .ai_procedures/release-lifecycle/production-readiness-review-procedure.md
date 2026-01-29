# Procedure: Production Readiness Review (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure performs a formal review of a release candidate (RC) before production deployment. It confirms that staging validation passed, operational readiness is in place (runbooks, rollback, monitoring), and risks are accepted. It is the gate that authorizes deployment to production.

**What problem it solves**

- Deployments to production without formal readiness check
- Missing operational readiness (runbooks, rollback, monitoring)
- Risks or known issues not explicitly accepted
- No single approval gate before production deploy
- Unclear accountability for "go/no-go" to production

**What "success" looks like at the end**

- Production readiness review completed and documented
- Staging validation and operational readiness confirmed
- Risks and known issues documented and accepted (or mitigated)
- Go/no-go decision recorded; if go, ready for Deployment Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- Staging Validation Procedure has passed for the RC (staging report, version)
- Release plan indicates PRR milestone (per release plan)
- Release manager or change authority requests production readiness review for the RC

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Staging validation report** - From Staging Validation Procedure (version, test results, sign-off)
- [ ] **Release plan** - From Release Planning Procedure (scope, milestones, owners)
- [ ] **RC artifacts and version** - From Release Candidate Procedure (artifact manifest, version)
- [ ] **Operational runbooks** - Deployment, rollback, monitoring, troubleshooting (from Documentation & Runbook Procedure or equivalent)
- [ ] **Rollback procedure** - Rollback Procedure (Release Lifecycle) or equivalent documented and available
- [ ] **Observability / monitoring** - Logging, metrics, alerts configured for this release (from Observability Instrumentation or equivalent)

**Decisions already made:**
- [ ] **Staging passed** - Staging Validation Procedure completed successfully
- [ ] **PRR scheduled** - PRR meeting or review scheduled per release plan

**Constraints:**
- [ ] **Reviewer availability** - PRR participants available (e.g., Release Manager, Tech Lead, DevOps, QA)
- [ ] **Change window** - Deployment window known (if change-managed)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing staging report** → Wait for Staging Validation Procedure to complete
- **Missing runbooks or rollback** → Create or update runbooks and rollback procedure before PRR
- **Missing observability** → Confirm monitoring/alerting for this release; document gaps

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Ordered steps from checklist preparation through go/no-go decision
- **Checklist scope** - Staging, operational readiness, risks, sign-offs
- **Participants** - Who attends PRR and who has go/no-go authority
- **Criteria** - What "ready for production" means (staging pass, runbooks, rollback, monitoring, risk acceptance)
- **Risks & unknowns** - Outstanding defects, external dependencies

**Plan must be reviewed before execution begins**

**Output:**
- Production Readiness Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Compile Readiness Checklist

**Purpose**
- Assemble evidence and checklist items: staging, runbooks, rollback, monitoring, risks

**Inputs**
- **From:** Procedure Required Inputs (staging report, release plan, RC artifacts, runbooks, rollback procedure, observability)

**Actions**
- Gather staging validation report: version, test results, sign-off
- Gather operational runbooks: deployment, rollback, monitoring, troubleshooting
- Confirm rollback procedure (Release Lifecycle) is documented and executable
- Confirm observability: logging, metrics, alerts for this release
- List known issues, risks, and limitations from staging or release scope
- Compile checklist: staging pass, runbooks present, rollback ready, monitoring ready, risks listed
- Document any gaps (e.g., runbook draft only, alert not yet configured)

**Decisions / Evaluations**
- **Decision:** Is checklist complete and gaps documented?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If critical item missing (e.g., no rollback), complete or document before PRR

**Outputs**
- PRR checklist (staging, runbooks, rollback, monitoring, risks)
- List of gaps and mitigation (if any)

**Failure Handling**
- **Failure:** Critical gap (e.g., no rollback procedure)
  - **Action:** Complete rollback procedure or runbook before PRR; do not proceed to go/no-go with critical gap
  - **Retry:** Step 1 after gap is closed

---

#### Step 2: Review Staging and Operational Readiness

**Purpose**
- Review staging results and operational readiness with PRR participants

**Inputs**
- **From:** Step 1 outputs (checklist, gaps); Procedure Required Inputs (staging report, runbooks)

**Actions**
- Present staging validation summary: version, test results, sign-off, known limitations
- Review operational runbooks: deployment steps, rollback steps, monitoring and troubleshooting
- Confirm rollback procedure (Release Lifecycle) is understood and can be executed
- Confirm monitoring and alerts are in place for this release
- Discuss gaps: accept, mitigate, or defer (and document)
- Record questions and answers; document any follow-up items

**Decisions / Evaluations**
- **Decision:** Are staging and operational readiness acceptable for production?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, address gaps (runbooks, rollback, monitoring); re-review

**Outputs**
- Review record (staging, runbooks, rollback, monitoring)
- Follow-up items (if any) and owners

**Failure Handling**
- **Failure:** Operational readiness insufficient (e.g., rollback not tested)
  - **Action:** Complete rollback test or runbook update; re-schedule PRR
  - **Retry:** Step 2 after readiness is improved

---

#### Step 3: Document and Accept Risks

**Purpose**
- Explicitly document risks and known issues and obtain acceptance (or mitigation)

**Inputs**
- **From:** Step 1–2 outputs (checklist, review record); Procedure Required Inputs (release plan)

**Actions**
- List risks and known issues: from staging report, release scope, dependencies
- For each: likelihood, impact, mitigation or acceptance
- Obtain explicit acceptance from defined authority (e.g., Tech Lead, Release Manager) for accepted risks
- Document accepted risks and any deferred items (with owner and date)
- If unacceptable risk: do not proceed to go; mitigate or defer release
- Record risk acceptance (date, approver)

**Decisions / Evaluations**
- **Decision:** Are all risks documented and accepted (or mitigated)?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, mitigate risk or defer release; re-document and re-review

**Outputs**
- Risk and known-issues list (with acceptance or mitigation)
- Risk acceptance record (approver, date)

**Failure Handling**
- **Failure:** Unacceptable risk (e.g., data loss risk with no mitigation)
  - **Action:** Mitigate or defer release; do not approve for production
  - **Retry:** Step 3 after mitigation or scope change

---

#### Step 4: Go/No-Go Decision and Authorization

**Purpose**
- Make and record the formal go/no-go decision for production deployment

**Inputs**
- **From:** Step 1–3 outputs (checklist, review record, risk acceptance)

**Actions**
- Convene PRR participants with go/no-go authority (per release plan)
- Present summary: staging pass, operational readiness, risks accepted
- Take go/no-go vote or decision (per org process)
- Record decision: go or no-go, date, decision-maker(s)
- If go: authorize Deployment Procedure (Release Lifecycle) for this version; communicate to release manager and deploy owner
- If no-go: document reason; do not authorize deployment; plan remediation or defer release
- Store PRR record (checklist, review, risks, decision) in agreed location (wiki, Jira, release tool)

**Decisions / Evaluations**
- **Decision:** Is go/no-go decision made and recorded?
  - **Go:** If go, production readiness review complete; ready for Deployment Procedure
  - **No-Go:** If no-go, PRR complete but deployment not authorized; document and communicate

**Outputs**
- Go/no-go decision (recorded)
- PRR record (checklist, review, risks, decision)
- If go: authorization for Deployment Procedure; communication to deploy owner

**Failure Handling**
- **Failure:** No-go (e.g., critical defect or risk)
  - **Action:** Document reason; communicate to stakeholders; do not deploy; plan fix or new RC
  - **Retry:** Step 4 only after new PRR (e.g., after new RC and re-staging)

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- PRR record (checklist, staging summary, operational readiness, risks, go/no-go decision)
- Risk acceptance record (if risks accepted)
- If go: authorization for Deployment Procedure

**State changes:**
- PRR completed for this RC version
- If go: release is authorized for production deployment; ready for Deployment Procedure

**Decisions recorded:**
- Staging and operational readiness acceptance, risk acceptance, go/no-go

**Signals emitted:**
- "Production readiness approved" (if go) - Input to Deployment Procedure
- "Production readiness not approved" (if no-go) - Deployment not authorized; reason documented

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Staging validation and operational readiness reviewed and accepted
- [ ] Risks and known issues documented and accepted (or mitigated)
- [ ] Go/no-go decision made and recorded
- [ ] PRR record stored and communicated

**Reviews required:**
- [ ] PRR participants (Release Manager, Tech Lead, DevOps, QA as applicable) completed review
- [ ] Go/no-go authority confirmed decision

**Who/what can approve completion:**
- **Release Manager** or **Tech Lead** (or change authority) - Go/no-go decision
- **PRR participants** - Confirm checklist and risk acceptance

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **PRR go decision and version** → Deployment Procedure (Release Lifecycle)
- **PRR record** → Release plan / release tool (audit)
- **PRR record** → Post-Release Monitoring (context for version and risks)

**Procedures that depend on this:**
- Deployment Procedure (Release Lifecycle) - Deploys only after PRR go
- Rollback Procedure (Release Lifecycle) - Uses same runbooks/rollback validated in PRR

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Readiness checklist compiled and reviewed
- [ ] Staging and operational readiness confirmed
- [ ] Risks documented and accepted (or mitigated)
- [ ] Go/no-go decision made and recorded
- [ ] PRR record stored and (if go) deployment authorized and communicated

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] PRR record (checklist, review, risks, decision)
- [ ] Staging validation report
- [ ] Release plan or release tool (PRR status)
- [ ] Jira release version (if used)

**Audit trail:**
- PRR date and participants
- Go/no-go decision and decision-maker(s)
- Risk acceptance (approver, date)

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully (Go)
- PRR completed; go decision recorded
- Deployment authorized for this version
- Ready for Deployment Procedure

#### ✅ Completed Successfully (No-Go)
- PRR completed; no-go decision recorded
- Deployment not authorized; reason documented
- Remediation or deferral planned

#### ⚠️ Blocked
- **Reason:** Missing staging report, runbooks, rollback, or PRR participants
- **Required action:** Obtain inputs or complete runbooks/rollback; re-schedule PRR
- **Who to notify:** Release Manager
- **Status:** PRR not complete; deployment not authorized

#### ❌ Aborted
- **Reason:** PRR cancelled (e.g., release deferred or cancelled)
- **Required action:** Document; communicate to stakeholders; do not authorize deployment
- **Lessons learned:** Capture if process gap (e.g., readiness criteria unclear)

---

**Status:** Active Procedure  
**Owner:** Release Manager / Tech Lead
