# Procedure: Release Candidate (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure builds and packages a release candidate (RC) from the agreed release scope and version. It produces deployable artifacts, runs automated checks, and gates the RC so only validated builds proceed to Staging Validation. It is the bridge between "code complete" and "staging/production deploy."

**What problem it solves**

- Inconsistent or unreproducible RC builds
- No clear gate between development and staging
- Missing automated checks before staging
- Unclear which artifacts correspond to which version
- No single place to verify RC readiness

**What "success" looks like at the end**

- RC build produced from correct branch/commit and version
- Automated build and test checks passed
- Deployable artifacts published and versioned
- RC readiness documented and ready for Staging Validation Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- Release Planning and Versioning procedures have produced an approved release plan and version
- Code freeze or RC cut date reached (per release plan)
- Release manager or automation requests RC build for a given version

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Release plan** - From Release Planning Procedure (scope, milestones)
- [ ] **Release version** - From Versioning Procedure (e.g., 2.4.0-rc.1)
- [ ] **Codebase state** - Branch/commit or tag to build from (code freeze or RC branch)
- [ ] **Build and test pipeline** - CI config for build, unit tests, integration tests (as applicable)

**Decisions already made:**
- [ ] **Code freeze** - Scope locked; no further scope changes without change process
- [ ] **RC cut** - Decision to cut RC for this version

**Constraints:**
- [ ] **Build environment** - CI/build system available
- [ ] **Artifact storage** - Place to publish deployable artifacts (registry, artifact store)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing release plan or version** → Run Release Planning and Versioning procedures first
- **Missing code freeze** → Confirm scope and branch with release manager; then cut RC
- **Build pipeline broken** → Fix pipeline before cutting RC

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Ordered steps from branch/commit selection through RC readiness
- **Build approach** - Branch/tag to build, build command, artifact format
- **Checks to run** - Build, unit tests, integration tests, lint, security scan (as applicable)
- **Artifact publishing** - Where artifacts go (registry, artifact store), naming convention
- **Risks & unknowns** - Build flakiness, dependency availability

**Plan must be reviewed before execution begins**

**Output:**
- Release Candidate Build Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Lock Branch/Commit and Verify Scope

**Purpose**
- Identify exact branch/commit to build; verify it matches release scope

**Inputs**
- **From:** Procedure Required Inputs (release plan, codebase state)

**Actions**
- Identify branch or tag for RC (e.g., `release/2.4` or commit SHA)
- Verify branch/commit includes all scope items from release plan (e.g., Jira tickets merged)
- Document branch/commit and scope verification
- If scope mismatch: halt and resolve with release manager (add missing changes or adjust scope)

**Decisions / Evaluations**
- **Decision:** Does branch/commit match release scope?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, sync scope or code; re-verify

**Outputs**
- Branch/commit (or tag) for RC build
- Scope verification record

**Failure Handling**
- **Failure:** Scope not fully merged or wrong branch
  - **Action:** Merge missing changes or switch branch; re-verify scope
  - **Retry:** Step 1 after correction

---

#### Step 2: Build Artifacts

**Purpose**
- Produce deployable artifacts for the RC (e.g., container images, binaries, config bundles)

**Inputs**
- **From:** Step 1 outputs (branch/commit); Procedure Required Inputs (release version, build pipeline)

**Actions**
- Run build pipeline for identified branch/commit
- Use release version in build (e.g., inject version into image tag or binary)
- Produce all required artifacts: app images, migrations bundle, config (as per org)
- Store build logs and artifact manifest
- If build fails: do not proceed; fix and rebuild

**Decisions / Evaluations**
- **Decision:** Did build succeed and produce expected artifacts?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix build; retry Step 2

**Outputs**
- Deployable artifacts (images, binaries, bundles)
- Build logs and artifact manifest
- Version embedded in artifacts

**Failure Handling**
- **Failure:** Build failure or missing artifact
  - **Action:** Fix build or pipeline; do not promote failed build to staging
  - **Retry:** Step 2 after fix

---

#### Step 3: Run Automated Checks

**Purpose**
- Run automated tests and checks (unit, integration, lint, security) to gate RC quality

**Inputs**
- **From:** Step 2 outputs (artifacts); Procedure Required Inputs (build and test pipeline)

**Actions**
- Run unit tests (and integration tests if part of RC pipeline)
- Run lint and static analysis (as configured)
- Run security scan (e.g., image scan, dependency scan) if part of pipeline
- Record results (pass/fail, logs)
- If any required check fails: do not mark RC ready; fix and re-run or re-cut RC

**Decisions / Evaluations**
- **Decision:** Did all required automated checks pass?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix issues; re-run checks or re-cut RC

**Outputs**
- Test and scan results (logs, reports)
- Pass/fail summary for each check

**Failure Handling**
- **Failure:** Required check failed
  - **Action:** Fix code or config; re-run pipeline or cut new RC
  - **Retry:** Step 3 after fix (or new RC from Step 1)

---

#### Step 4: Publish Artifacts and Tag RC

**Purpose**
- Publish artifacts to registry/artifact store and tag as RC for this version

**Inputs**
- **From:** Step 2–3 outputs (artifacts, passing checks); Procedure Required Inputs (release version)

**Actions**
- Publish artifacts to agreed location (container registry, artifact store)
- Tag artifacts with RC version (e.g., image tag `2.4.0-rc.1`)
- Make artifacts available to staging/deploy pipeline
- Document artifact locations and version tag
- Ensure artifacts are immutable (no overwrite of same version tag)

**Decisions / Evaluations**
- **Decision:** Are artifacts published and tagged correctly?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, fix publish/tag; re-verify

**Outputs**
- Published artifacts (URLs or identifiers)
- Version tag applied
- Artifact manifest for deploy

**Failure Handling**
- **Failure:** Publish or tag failure (permissions, conflict)
  - **Action:** Fix permissions or naming; re-publish
  - **Retry:** Step 4 after fix

---

#### Step 5: Document RC Readiness and Hand Off to Staging

**Purpose**
- Record RC readiness and hand off to Staging Validation Procedure

**Inputs**
- **From:** Step 1–4 outputs (scope verification, artifacts, checks, published artifacts)

**Actions**
- Compile RC readiness summary: version, branch/commit, artifact locations, check results
- Update release plan or release tool with RC status (e.g., "RC 2.4.0-rc.1 ready for staging")
- Notify release manager and staging owner (per communication plan)
- Hand off artifact manifest and version to Staging Validation Procedure
- Document any known limitations or manual steps for staging

**Decisions / Evaluations**
- **Decision:** Is RC readiness documented and hand-off done?
  - **Go:** If yes, release candidate procedure complete; ready for Staging Validation
  - **No-Go:** If no, complete documentation and hand-off

**Outputs**
- RC readiness summary (version, artifacts, checks)
- Hand-off to Staging Validation Procedure
- Release plan/tool updated with RC status

**Failure Handling**
- **Failure:** Hand-off blocked (e.g., staging not ready)
  - **Action:** Document; schedule hand-off when staging is ready
  - **Retry:** Step 5 when unblocked

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Deployable artifacts (versioned, published)
- Build and test logs/reports
- RC readiness summary and artifact manifest

**State changes:**
- RC build exists for this version
- RC is ready for Staging Validation Procedure

**Decisions recorded:**
- Branch/commit used, scope verification, check results, artifact locations

**Signals emitted:**
- "Release candidate ready" - RC built, checked, published
- "Ready for staging validation" - Input to Staging Validation Procedure

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Build succeeded and produced expected artifacts
- [ ] All required automated checks passed (unit, integration, lint, security as configured)
- [ ] Artifacts published and tagged with RC version
- [ ] RC readiness documented and hand-off to staging done

**Reviews required:**
- [ ] Release manager or DevOps confirms RC readiness

**Who/what can approve completion:**
- **Release Manager** or **DevOps Lead** - Confirms RC ready for staging

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **RC artifacts and version** → Staging Validation Procedure (Release Lifecycle)
- **RC artifacts and version** → Deployment Procedure (Release Lifecycle) after staging and PRR
- **RC readiness** → Production Readiness Review Procedure (artifact and version reference)

**Procedures that depend on this:**
- Staging Validation Procedure (Release Lifecycle) - Validates RC in staging
- Production Readiness Review Procedure (Release Lifecycle) - Reviews same version/artifacts
- Deployment Procedure (Release Lifecycle) - Deploys validated RC to production

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Branch/commit locked and scope verified
- [ ] Build succeeded; artifacts produced with version
- [ ] All required automated checks passed
- [ ] Artifacts published and tagged
- [ ] RC readiness documented and hand-off to Staging Validation done

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Build logs and artifact manifest
- [ ] Test and scan reports
- [ ] Release plan or release tool (RC status)
- [ ] Jira release version (if used)

**Audit trail:**
- RC cut date and time
- Branch/commit and version
- Artifact locations and version tag

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- RC built, checked, published, and handed off to Staging Validation
- Artifacts versioned and immutable
- Ready for Staging Validation Procedure

#### ⚠️ Blocked
- **Reason:** Build failure, failing tests, missing scope, or staging not ready
- **Required action:** Fix build/tests or scope; or wait for staging readiness
- **Who to notify:** Release Manager, DevOps
- **Status:** RC not ready; do not promote to staging

#### ❌ Aborted
- **Reason:** RC cancelled (e.g., critical bug found before staging)
- **Required action:** Document reason; do not promote artifacts; cut new RC if scope changes
- **Lessons learned:** Capture cause (e.g., test gap, scope creep)

---

**Status:** Active Procedure  
**Owner:** Release Manager / DevOps Lead
