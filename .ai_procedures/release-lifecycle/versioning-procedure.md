# Procedure: Versioning (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure assigns a unique, consistent version identifier to a release (e.g., semantic version or calendar version) and records it in the release plan and version-control/release artifacts. It ensures traceability and consistent naming across build, staging, and production.

**What problem it solves**

- Inconsistent or ambiguous version identifiers
- No single source of truth for release version
- Confusion between builds, RCs, and final release
- Poor traceability from version to scope and deploy

**What "success" looks like at the end**

- Release version identifier assigned and documented
- Version recorded in release plan and (where applicable) repo/tags
- Pre-release vs release version rules applied consistently
- Ready for Release Candidate Procedure to use this version

---

### 2. Trigger

**What causes this procedure to be invoked**

- Release Planning Procedure has produced an approved release plan
- Release manager or automation requests version assignment for the planned release
- Need to cut a release candidate or tag a release

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Approved release plan** - From Release Planning Procedure (scope, target date)
- [ ] **Versioning scheme** - Organizational standard (e.g., SemVer, CalVer) and rules for pre-release suffixes

**Decisions already made:**
- [ ] **Release planned** - Release plan approved
- [ ] **Versioning policy** - How to bump major/minor/patch (or equivalent) for this release

**Constraints:**
- [ ] **Version uniqueness** - New version must not conflict with existing releases
- [ ] **Tooling** - Ability to record version (repo tags, release tool, wiki)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing release plan** → Run Release Planning Procedure first
- **Missing versioning scheme** → Define or adopt org standard (e.g., SemVer) and document

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Ordered steps from scheme check through recording
- **Version type** - Major, minor, or patch (or CalVer equivalent) for this release
- **Pre-release convention** - How to denote RCs (e.g., `-rc.1`, `-beta.1`)
- **Where to record** - Repo tags, release tool, release plan document
- **Risks & unknowns** - Branch/tag conflicts, naming collisions

**Plan must be reviewed before execution begins**

**Output:**
- Versioning Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Determine Version Bump and Base Version

**Purpose**
- Decide version increment (major/minor/patch or CalVer) and base version from prior release

**Inputs**
- **From:** Procedure Required Inputs (release plan, versioning scheme)

**Actions**
- Obtain last released version from release history or tags
- Compare planned scope to versioning rules: breaking changes → major; new features → minor; fixes only → patch (for SemVer)
- Determine base version for this release (e.g., next minor: 2.4.0)
- Document rationale for bump type
- Confirm no duplicate version exists

**Decisions / Evaluations**
- **Decision:** Is base version and bump type agreed?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, align with release manager or tech lead on scheme

**Outputs**
- Base version (e.g., 2.4.0)
- Bump type and rationale

**Failure Handling**
- **Failure:** Duplicate version or scheme conflict
  - **Action:** Resolve with release history; fix tagging or tooling if needed
  - **Retry:** Step 1 after correction

---

#### Step 2: Assign Pre-Release Identifier (If Applicable)

**Purpose**
- Apply pre-release suffix for release candidates or beta builds

**Inputs**
- **From:** Step 1 outputs (base version)

**Actions**
- If this is a release candidate: assign pre-release identifier per scheme (e.g., 2.4.0-rc.1, 2.4.0-rc.2)
- If this is final release: no suffix (e.g., 2.4.0)
- Ensure pre-release sort order is clear (rc.1 < rc.2 < release)
- Document full version string

**Decisions / Evaluations**
- **Decision:** Is pre-release identifier correct per scheme?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, correct suffix and re-check

**Outputs**
- Full version string (e.g., 2.4.0-rc.1 or 2.4.0)
- Pre-release flag (yes/no)

**Failure Handling**
- **Failure:** Naming collision with existing RC
  - **Action:** Increment RC number or fix tagging
  - **Retry:** Step 2 after correction

---

#### Step 3: Record Version in Release Plan and Artifacts

**Purpose**
- Persist version as the single source of truth for this release

**Inputs**
- **From:** Step 2 outputs (full version string)

**Actions**
- Update release plan document with assigned version
- Where applicable: create or update git tag (e.g., `v2.4.0-rc.1`), update release tool, or CI version env
- Ensure tag or artifact is immutable for this release
- Document where version is recorded (repo, tool, link)

**Decisions / Evaluations**
- **Decision:** Is version recorded in all agreed locations?
  - **Go:** If yes, versioning complete; ready for Release Candidate Procedure
  - **No-Go:** If no, complete recording and re-verify

**Outputs**
- Release plan updated with version
- Version in repo/tags or release tool (as per org)
- Record of where version is stored

**Failure Handling**
- **Failure:** Tag or artifact write fails (permissions, conflict)
  - **Action:** Fix permissions or resolve conflict; retry recording
  - **Retry:** Step 3 after fix

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Release plan updated with version identifier
- Version in version-control or release tool (tags/artifacts as per org)

**State changes:**
- Release has a unique, assigned version
- Downstream procedures can reference this version

**Decisions recorded:**
- Bump type and rationale
- Pre-release identifier (if any)

**Signals emitted:**
- "Version assigned" - Version recorded
- "Ready for release candidate" - Input to Release Candidate Procedure

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Version follows organizational versioning scheme
- [ ] Version is unique (no duplicate)
- [ ] Version recorded in release plan
- [ ] Version recorded in repo/tags or release tool (as applicable)

**Reviews required:**
- [ ] Release manager or tech lead confirms version and placement

**Who/what can approve completion:**
- **Release Manager** - Confirms version assignment and recording

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Release version** → Release Candidate Procedure (Release Lifecycle)
- **Release version** → Staging Validation Procedure, Deployment Procedure (version to deploy/validate)
- **Release version** → Post-Release Monitoring Procedure (version in dashboards/alerts)

**Procedures that depend on this:**
- Release Candidate Procedure (Release Lifecycle) - Uses version for RC build and tag
- Deployment Procedure (Release Lifecycle) - Uses version for deploy artifact identification
- Post-Release Monitoring Procedure - Uses version for correlation

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Version identifier assigned per scheme
- [ ] Version is unique
- [ ] Version recorded in release plan
- [ ] Version recorded in repo/tags or release tool (as per org)
- [ ] Ready for Release Candidate Procedure

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Release plan (with version)
- [ ] Git tag or release artifact (if applicable)
- [ ] Jira release version (if used)

**Audit trail:**
- Version assignment date
- Bump type and rationale
- Where version is stored

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- Version assigned and recorded
- Release plan updated
- Ready for Release Candidate Procedure

#### ⚠️ Blocked
- **Reason:** No release plan, versioning scheme undefined, or duplicate version
- **Required action:** Complete Release Planning; define scheme; resolve duplicate
- **Who to notify:** Release Manager
- **Status:** Versioning paused

#### ❌ Aborted
- **Reason:** Release cancelled; version not needed
- **Required action:** Document; do not create tag/artifact for cancelled release
- **Lessons learned:** Capture if versioning process was cause of abort

---

**Status:** Active Procedure  
**Owner:** Release Manager / Tech Lead
