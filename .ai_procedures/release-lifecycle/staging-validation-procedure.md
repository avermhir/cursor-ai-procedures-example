# Procedure: Staging Validation (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure validates a release candidate (RC) in a staging environment that mirrors production. It runs functional, integration, and smoke tests and verifies configuration and data flows so that only validated RCs proceed to Production Readiness Review and deployment. It reduces risk of production failures.

**What problem it solves**

- RCs deployed to production without staging validation
- Staging environment not representative of production
- Gaps in functional or integration coverage before production
- Configuration or data issues discovered only in production
- No clear gate between RC and production deploy

**What "success" looks like at the end**

- RC deployed to staging and validated
- Functional and integration tests passed in staging
- Configuration and critical paths verified
- Staging validation results documented and ready for Production Readiness Review

---

### 2. Trigger

**What causes this procedure to be invoked**

- Release Candidate Procedure has produced a ready RC (artifacts, version)
- Staging environment is available and aligned with release plan
- Release manager or automation requests staging validation for a given RC version

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **RC artifacts and version** - From Release Candidate Procedure (deployable artifacts, version tag)
- [ ] **Release plan** - From Release Planning Procedure (scope, milestones)
- [ ] **Staging environment** - Staging env available, representative of production (or documented differences)
- [ ] **Test plan / test suite** - Functional, integration, smoke tests applicable to staging
- [ ] **Deployment runbook or steps** - How to deploy this RC to staging

**Decisions already made:**
- [ ] **RC ready** - Release Candidate Procedure completed successfully
- [ ] **Staging slot** - Staging available for this RC (no conflicting validation)

**Constraints:**
- [ ] **Staging availability** - Staging env up and deployable
- [ ] **Test data** - Test data or fixtures available for staging (as needed)
- [ ] **Test execution** - Ability to run automated and/or manual tests

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing RC artifacts** → Wait for Release Candidate Procedure to complete
- **Missing staging** → Provision or free staging; then re-run
- **Missing test plan** → Define minimal staging test set (smoke + critical path) and document

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Ordered steps from deploy to staging through validation sign-off
- **Deploy approach** - How to deploy RC to staging (pipeline, manual steps)
- **Test scope** - Functional, integration, smoke; manual vs automated
- **Configuration checks** - What to verify (env vars, feature flags, integrations)
- **Success criteria** - What "staging pass" means (e.g., all critical tests green)
- **Risks & unknowns** - Staging drift from prod, flaky tests

**Plan must be reviewed before execution begins**

**Output:**
- Staging Validation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Deploy RC to Staging

**Purpose**
- Deploy the RC artifacts to staging using the same (or equivalent) deployment path as production

**Inputs**
- **From:** Procedure Required Inputs (RC artifacts, deployment runbook, staging environment)

**Actions**
- Deploy RC to staging using agreed method (CI/CD pipeline or runbook)
- Use RC version and artifact manifest from Release Candidate Procedure
- Apply staging-specific configuration (env, feature flags, endpoints) as documented
- Run database migrations in staging if applicable
- Verify deployment completed (services up, health checks green)
- If deploy fails: halt; fix deploy or environment; retry

**Decisions / Evaluations**
- **Decision:** Did deployment to staging succeed?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, fix deployment or environment; retry Step 1

**Outputs**
- RC deployed to staging
- Staging deployment log
- Version and config recorded

**Failure Handling**
- **Failure:** Deployment failure (e.g., migration error, service won’t start)
  - **Action:** Fix deploy path, migration, or config; do not proceed to test
  - **Retry:** Step 1 after fix

---

#### Step 2: Run Functional and Integration Tests

**Purpose**
- Execute functional and integration tests against staging to verify behavior

**Inputs**
- **From:** Step 1 outputs (RC deployed); Procedure Required Inputs (test plan / test suite)

**Actions**
- Run automated functional and integration tests against staging (if available)
- Execute critical-path and smoke tests (automated or manual)
- Record results (pass/fail, logs, screenshots for manual)
- Investigate failures: classify as environment issue, test issue, or product defect
- If critical test fails: do not mark staging pass; fix or escalate
- Document any known limitations or skipped tests (with rationale)

**Decisions / Evaluations**
- **Decision:** Did all required functional and integration tests pass?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix defect or environment; re-run tests or re-deploy RC

**Outputs**
- Test results (pass/fail, logs)
- List of failures and resolution (fixed, deferred, accepted risk)
- Test coverage summary for staging

**Failure Handling**
- **Failure:** Critical test failure
  - **Action:** Fix product or environment; re-test. If product defect: may require new RC
  - **Retry:** Step 2 after fix (or new RC and re-run from Step 1)

---

#### Step 3: Verify Configuration and Critical Paths

**Purpose**
- Verify configuration (env, feature flags, integrations) and critical user/data flows in staging

**Inputs**
- **From:** Step 2 outputs (test results); Procedure Required Inputs (release plan)

**Actions**
- Verify configuration: env vars, feature flags, third-party endpoints (or mocks) per runbook
- Verify critical paths: login, key user flows, key API flows, data flows (as per release scope)
- Verify integrations: auth, external APIs, queues, DB (as applicable)
- Document any staging-only differences from production (e.g., mock payment)
- If critical path or config is wrong: fix and re-verify; do not mark staging pass until fixed

**Decisions / Evaluations**
- **Decision:** Are configuration and critical paths verified?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix config or product; re-verify

**Outputs**
- Configuration verification record
- Critical path verification record
- Staging vs production differences (if any) documented

**Failure Handling**
- **Failure:** Config error or critical path broken
  - **Action:** Fix config or code; re-deploy or re-verify
  - **Retry:** Step 3 after fix (or Step 1 if re-deploy needed)

---

#### Step 4: Document Staging Validation Results and Sign Off

**Purpose**
- Compile staging validation results and obtain sign-off for Production Readiness Review

**Inputs**
- **From:** Step 1–3 outputs (deploy log, test results, config and path verification)

**Actions**
- Compile staging validation report: version, deploy date, test results, config and path verification, known limitations
- Store report in agreed location (wiki, release tool, Jira)
- Obtain sign-off from defined role (e.g., QA Lead, Release Manager) that staging pass criteria are met
- Update release plan or release tool: "Staging validation passed for version X"
- Hand off to Production Readiness Review Procedure: same version, staging report, artifact reference
- Notify release manager and PRR owner (per communication plan)

**Decisions / Evaluations**
- **Decision:** Is staging validation signed off and hand-off to PRR done?
  - **Go:** If yes, staging validation complete; ready for Production Readiness Review
  - **No-Go:** If no, address gaps; re-run tests or re-validate; then sign off

**Outputs**
- Staging validation report (version, results, sign-off)
- Hand-off to Production Readiness Review Procedure
- Release plan/tool updated with staging status

**Failure Handling**
- **Failure:** Sign-off withheld (e.g., outstanding defects)
  - **Action:** Fix defects or document accepted risk; re-validate and re-request sign-off
  - **Retry:** Step 4 after gaps addressed

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Staging validation report (version, deploy log, test results, config/path verification, sign-off)
- Release plan or release tool updated with staging pass status

**State changes:**
- RC validated in staging
- Ready for Production Readiness Review Procedure

**Decisions recorded:**
- Deploy success, test pass/fail, config and path verification, sign-off

**Signals emitted:**
- "Staging validation passed" - RC validated in staging
- "Ready for production readiness review" - Input to Production Readiness Review Procedure

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] RC deployed to staging successfully
- [ ] Required functional and integration tests passed
- [ ] Configuration and critical paths verified
- [ ] Staging validation report documented and signed off
- [ ] Hand-off to Production Readiness Review done

**Reviews required:**
- [ ] QA Lead or Release Manager sign-off for staging pass

**Who/what can approve completion:**
- **QA Lead** or **Release Manager** - Sign-off that staging validation passed

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Staging validation report and version** → Production Readiness Review Procedure (Release Lifecycle)
- **Staging validation status** → Deployment Procedure (Release Lifecycle) - deploy only after PRR pass
- **Staging validation report** → Release plan / release tool (audit)

**Procedures that depend on this:**
- Production Readiness Review Procedure (Release Lifecycle) - Uses staging results as input
- Deployment Procedure (Release Lifecycle) - Deploys only PRR-approved release (same version validated in staging)

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] RC deployed to staging successfully
- [ ] Required functional and integration tests passed
- [ ] Configuration and critical paths verified
- [ ] Staging validation report documented
- [ ] Sign-off obtained and hand-off to Production Readiness Review done

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Staging validation report
- [ ] Deploy log and test results
- [ ] Release plan or release tool (staging status)
- [ ] Jira release version (if used)

**Audit trail:**
- Staging validation date and time
- RC version validated
- Sign-off date and approver

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- RC validated in staging; report and sign-off complete
- Hand-off to Production Readiness Review done
- Ready for Production Readiness Review Procedure

#### ⚠️ Blocked
- **Reason:** Deploy failure, failing tests, missing staging, or sign-off withheld
- **Required action:** Fix deploy/tests/staging or address defects; re-validate
- **Who to notify:** Release Manager, QA Lead
- **Status:** Staging validation not complete; do not proceed to PRR

#### ❌ Aborted
- **Reason:** RC rejected for production (e.g., critical defects); new RC will be cut
- **Required action:** Document reason; do not hand off to PRR; cut new RC if scope changes
- **Lessons learned:** Capture cause (e.g., test gap, environment drift)

---

**Status:** Active Procedure  
**Owner:** QA Lead / Release Manager
