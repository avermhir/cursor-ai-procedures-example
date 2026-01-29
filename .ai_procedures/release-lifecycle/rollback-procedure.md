# Procedure: Rollback (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure rolls back a full release deployment when deployment fails, post-deploy validation fails, or critical production issues are detected after a release. It restores the system to the previous known-good release (code, configuration, database, infrastructure) and documents the rollback for root cause analysis. It is the Release Lifecycle counterpart to Deployment Procedure.

**What problem it solves**

- Release deployments not rolled back when they fail or cause incidents
- System left in unstable state after a bad release
- No systematic release-level rollback process
- Rollback order (feature flags, code, config, DB, infra) unclear or inconsistent
- Data corruption or extended downtime from failed rollbacks
- Rollback not documented for post-incident review

**What "success" looks like at the end**

- System restored to previous known-good release version
- Feature flags disabled (if applicable)
- Code, configuration, database, and infrastructure rolled back per plan
- System healthy after rollback
- Rollback documented and root cause analysis initiated

---

### 2. Trigger

**What causes this procedure to be invoked**

- Deployment Procedure (Release Lifecycle) fails during or after deployment
- Post-Deploy Validation Procedure (Release Lifecycle) fails or detects critical issues
- Critical production issues detected after a release (monitoring, alerts, user reports)
- Manual rollback request with proper approval (e.g., change authority, Release Manager)
- Decision to revert release (e.g., PRR follow-up, incident response)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Deployment snapshot / previous release** - Previous known-good version (from Deployment Procedure or release history)
- [ ] **Rollback plan** - Documented rollback steps (from Documentation & Runbook Procedure or Production Readiness Review)
- [ ] **Deployment documentation** - Deployment steps, configuration, rollback procedures for the release being rolled back
- [ ] **Feature flag configuration** - Feature flag configuration (to disable flags if applicable)
- [ ] **Database migration rollback scripts** - Rollback migrations (if applicable)
- [ ] **Infrastructure rollback procedures** - IaC or manual rollback steps (if applicable)

**Decisions already made:**
- [ ] **Rollback approved** - Rollback decision made and approved (e.g., Release Manager, change authority)
- [ ] **Rollback scope determined** - What to roll back (code, configuration, database, infrastructure, feature flags)

**Constraints:**
- [ ] **Rollback window** - Rollback must occur within acceptable time (e.g., change window)
- [ ] **System state** - System state allows rollback (e.g., no unrecoverable data corruption)
- [ ] **Rollback team** - DevOps/Release team available to execute rollback

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing deployment snapshot** → Use last known-good release version from release history or tags
- **Missing rollback plan** → Create emergency rollback plan from runbook template or prior release steps
- **Missing rollback scripts** → Use manual rollback procedures or create scripts; document for future

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Ordered steps from assessment through documentation
- **Rollback scope** - What to roll back (code, configuration, database, infrastructure, feature flags)
- **Rollback approach** - Automated, manual, or hybrid
- **Rollback order** - Feature flags first (if applicable), then code, configuration, database, infrastructure
- **Previous version** - Target release version to restore (e.g., previous tag or artifact)
- **Risks & unknowns** - Rollback risks (e.g., irreversible migration), mitigation
- **Validation points** - When and how to validate rollback success

**Plan must be reviewed before execution begins**

**Output:**
- Rollback Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Assess Rollback Situation

**Purpose**
- Assess why rollback is needed; determine scope and target (previous release version)

**Inputs**
- **From:** Procedure Required Inputs (deployment snapshot, rollback plan, deployment documentation)

**Actions**
- Assess situation: deployment failure, validation failure, or production incident
- Identify current (failed) release version and what was deployed (code, config, DB, infra)
- Identify previous known-good release version (from deployment snapshot or release history)
- Determine rollback scope: code, configuration, database migrations, infrastructure, feature flags
- Document rollback order: feature flags → code → configuration → database → infrastructure (per org)
- Create or confirm rollback plan; document risks (e.g., irreversible migration)
- Obtain or confirm rollback approval (if not already done)

**Decisions / Evaluations**
- **Decision:** Is rollback scope determined and plan created?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, gather more information; create emergency plan if needed

**Outputs**
- Rollback situation assessed
- Rollback scope and target version (previous release)
- Rollback plan (order, steps, risks)
- Rollback approval confirmed

**Failure Handling**
- **Failure:** Cannot identify previous good version or rollback path
  - **Action:** Escalate; use last known-good backup or version; document for post-incident
  - **Retry:** Step 1 after information is gathered

---

#### Step 2: Disable Feature Flags (If Applicable)

**Purpose**
- Disable feature flags for the release immediately to limit user exposure

**Inputs**
- **From:** Step 1 outputs (rollback plan); Procedure Required Inputs (feature flag configuration)

**Actions**
- Identify feature flags associated with the release (from release plan or runbook)
- Disable feature flags (set to disabled or 0% rollout)
- Verify feature flags are disabled and feature is not accessible to users
- Document feature flag disable (time, state)
- If feature flags not used for this release, skip to Step 3

**Decisions / Evaluations**
- **Decision:** Are feature flags disabled (or N/A)?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, investigate feature flag system; manual override if needed

**Outputs**
- Feature flags disabled (or N/A)
- Feature flag state documented

**Failure Handling**
- **Failure:** Feature flag system unavailable
  - **Action:** Document; proceed to code rollback; reduce exposure via code rollback as soon as possible
  - **Retry:** Step 2 when feature flag system is available, or rely on Step 3

---

#### Step 3: Roll Back Code and Configuration

**Purpose**
- Deploy previous release version (code and configuration) to production

**Inputs**
- **From:** Step 1–2 outputs (rollback plan, target version); Procedure Required Inputs (rollback plan, deployment documentation)

**Actions**
- Deploy previous release version (code) using same mechanism as Deployment Procedure (e.g., revert to previous image/tag or artifact)
- Roll back configuration to previous release configuration (from backup or versioned config)
- Verify deployment of previous code and config (health checks, version check)
- If rollback fails: halt; investigate; use runbook or escalate
- Document code and configuration rollback (version deployed, time)

**Decisions / Evaluations**
- **Decision:** Did code and configuration rollback succeed?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix deployment or config; retry or escalate

**Outputs**
- Code rolled back to previous release version
- Configuration rolled back to previous release
- Rollback verified (health, version)
- Code/config rollback documented

**Failure Handling**
- **Failure:** Code or config rollback fails (e.g., deploy pipeline error)
  - **Action:** Use manual deploy or runbook; escalate if system remains in bad state
  - **Retry:** Step 3 after fixing deploy path or config

---

#### Step 4: Roll Back Database Migrations (If Applicable)

**Purpose**
- Run database rollback migrations to restore schema/data to previous release state (where supported)

**Inputs**
- **From:** Step 1–3 outputs (rollback plan, code/config rolled back); Procedure Required Inputs (database migration rollback scripts)

**Actions**
- If no database migrations in rolled-back release: skip to Step 5
- Run rollback migration scripts (in order specified in rollback plan)
- Verify database state (connectivity, critical tables, data integrity checks as per runbook)
- If rollback migration is not supported (e.g., destructive forward-only migration): document; assess data impact; escalate; do not run destructive rollback without explicit approval
- Document database rollback (scripts run, time, outcome)

**Decisions / Evaluations**
- **Decision:** Are database migrations rolled back (or N/A or not supported)?
  - **Go:** If yes or N/A, proceed to Step 5
  - **No-Go:** If rollback failed or unsafe, escalate; document; may proceed to Step 5 with known limitations

**Outputs**
- Database rolled back (or N/A or not supported with documentation)
- Database rollback documented

**Failure Handling**
- **Failure:** Rollback migration fails or is irreversible
  - **Action:** Stop; assess data impact; escalate; do not run further destructive steps without approval
  - **Retry:** Step 4 only with updated runbook or approval for data recovery strategy

---

#### Step 5: Roll Back Infrastructure (If Applicable)

**Purpose**
- Roll back infrastructure changes to previous release state (where applicable)

**Inputs**
- **From:** Step 1–4 outputs (rollback plan, code/config/DB rolled back); Procedure Required Inputs (infrastructure rollback procedures)

**Actions**
- If no infrastructure changes in rolled-back release: skip to Step 6
- Execute infrastructure rollback (IaC revert, manual steps per runbook)
- Verify infrastructure state (e.g., endpoints, scaling, resources)
- Document infrastructure rollback (changes reverted, time)
- If rollback fails: document; assess impact; escalate; system may still be stable if code/config/DB are back

**Decisions / Evaluations**
- **Decision:** Is infrastructure rolled back (or N/A)?
  - **Go:** If yes or N/A, proceed to Step 6
  - **No-Go:** If critical infra rollback failed, escalate; document; proceed to Step 6 with known limitations

**Outputs**
- Infrastructure rolled back (or N/A or partial with documentation)
- Infrastructure rollback documented

**Failure Handling**
- **Failure:** Infrastructure rollback fails
  - **Action:** Document; escalate; do not block Step 6 if application is already on previous code/config
  - **Retry:** Step 5 after infra fix or approval to leave infra as-is

---

#### Step 6: Validate System Health After Rollback

**Purpose**
- Verify system is healthy and stable after rollback

**Inputs**
- **From:** Step 1–5 outputs (all rollback steps)

**Actions**
- Run health checks (services, database, critical endpoints)
- Verify application version matches previous release version
- Run smoke or critical-path tests (if available)
- Check monitoring and alerts for errors or degradation
- If health checks fail: investigate; may need additional rollback or fix; do not close rollback until stable
- Document validation result (health check status, time)

**Decisions / Evaluations**
- **Decision:** Is system healthy after rollback?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, investigate and fix; re-validate

**Outputs**
- System health verified (or issues documented and escalated)
- Rollback validation documented

**Failure Handling**
- **Failure:** System still unhealthy after rollback
  - **Action:** Investigate (e.g., cache, external dependency); escalate; consider partial rollback or incident response
  - **Retry:** Step 6 after mitigation

---

#### Step 7: Document Rollback and Initiate Root Cause Analysis

**Purpose**
- Document rollback execution and trigger root cause analysis

**Inputs**
- **From:** Step 1–6 outputs (assessment, all rollback steps, validation)

**Actions**
- Compile rollback report: reason, scope, target version, steps executed, validation result, timeline
- Store rollback report in agreed location (wiki, Jira, incident tool)
- Update release plan or release tool: release marked as rolled back; version reverted
- Initiate or link root cause analysis (e.g., post-incident review, Jira ticket)
- Notify stakeholders (per communication plan): rollback complete, system stable, RCA to follow
- Hand off to Post-Release Monitoring (continue monitoring) and incident/RCA process as applicable

**Decisions / Evaluations**
- **Decision:** Is rollback documented and RCA initiated?
  - **Go:** If yes, rollback procedure complete
  - **No-Go:** If no, complete documentation and RCA initiation

**Outputs**
- Rollback report (reason, scope, steps, validation, timeline)
- Release plan/tool updated (release rolled back)
- RCA initiated or linked
- Stakeholders notified

**Failure Handling**
- **Failure:** Documentation or notification blocked
  - **Action:** Complete as soon as possible; do not delay RCA
  - **Retry:** Step 7 when unblocked

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Rollback report (reason, scope, target version, steps, validation, timeline)
- Updated release plan or release tool (release rolled back)
- RCA initiated or linked

**State changes:**
- System restored to previous known-good release version
- Feature flags disabled (if applicable)
- Code, configuration, database, infrastructure rolled back per plan
- System healthy after rollback

**Decisions recorded:**
- Rollback scope, target version, approval, step outcomes, validation

**Signals emitted:**
- "Rollback completed" - System restored to previous release
- "RCA initiated" - Root cause analysis in progress

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] System restored to previous release version
- [ ] Feature flags disabled (if applicable)
- [ ] Code, configuration, database, infrastructure rolled back per plan
- [ ] System health verified after rollback
- [ ] Rollback documented and RCA initiated

**Reviews required:**
- [ ] Release Manager or DevOps Lead confirms rollback success
- [ ] Stakeholders notified

**Who/what can approve completion:**
- **Release Manager** or **DevOps Lead** - Confirms rollback complete and system stable

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Rollback report** → Post-incident review, RCA, release retrospective
- **Rollback report** → Release plan / release tool (audit)
- **Rollback report** → Post-Release Monitoring (continue monitoring reverted version)

**Procedures that depend on this:**
- Deployment Procedure (Release Lifecycle) - May be re-invoked after rollback for a new release
- Post-Release Monitoring Procedure - Continues to monitor after rollback
- Feature Lifecycle Rollback Procedure - For feature-level rollback; Release Rollback is full-release scope

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Rollback situation assessed and plan created
- [ ] Feature flags disabled (if applicable)
- [ ] Code and configuration rolled back to previous release
- [ ] Database migrations rolled back (if applicable)
- [ ] Infrastructure rolled back (if applicable)
- [ ] System health validated after rollback
- [ ] Rollback documented and RCA initiated
- [ ] Stakeholders notified

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Rollback report (reason, scope, steps, validation)
- [ ] Deployment snapshot / previous version
- [ ] Release plan or release tool (rollback status)
- [ ] Jira incident or RCA ticket (if used)

**Audit trail:**
- Rollback approval (approver, time)
- Rollback execution (steps, time)
- Rollback validation (result, time)
- RCA initiation (ticket, owner)

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- System restored to previous known-good release
- Feature flags, code, config, DB, infra rolled back per plan
- System healthy; rollback documented; RCA initiated

#### ⚠️ Blocked
- **Reason:** Missing rollback plan, previous version, or approval
- **Required action:** Obtain plan, version, or approval; escalate if urgent
- **Who to notify:** Release Manager, DevOps Lead
- **Status:** Rollback not started or paused

#### ❌ Aborted
- **Reason:** Rollback cancelled (e.g., issue resolved by other means) or rollback deemed unsafe
- **Required action:** Document reason; communicate to stakeholders; do not leave system in unknown state
- **Lessons learned:** Capture why rollback was aborted

#### 🔄 Partially Completed
- **Reason:** Some steps completed but full rollback not achieved (e.g., DB rollback not supported)
- **Required action:** Document partial state; escalate; continue monitoring; RCA must cover gaps
- **Next steps:** Mitigate remaining risk; plan for full recovery or acceptance of partial rollback

---

**Status:** Active Procedure  
**Owner:** Release Manager / DevOps Lead
