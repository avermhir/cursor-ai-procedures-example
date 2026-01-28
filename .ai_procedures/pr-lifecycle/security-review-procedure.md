# Procedure: Security Review (PR Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure performs a PR-scoped security review of pull request changes. It checks for common security issues (secrets, validation, auth touchpoints, dependencies, sensitive data), validates alignment with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md), and ensures security-sensitive changes receive appropriate scrutiny before merge.

**What problem it solves**

- Secrets or credentials committed in code
- Weak or missing input validation in new/changed code
- AuthN/AuthZ regressions or oversights in PR changes
- Vulnerable or outdated dependencies introduced
- Sensitive data logged, exposed, or mishandled
- Security standards not applied during PR review
- Security issues merged and discovered later

**What "success" looks like at the end**

A PR-level security review that includes:
- Secrets and credentials check (none in repo)
- Input validation and injection checks
- AuthN/AuthZ touchpoint review (if applicable)
- Dependency security check (if applicable)
- Sensitive data handling review
- Alignment with API Security Standards (for API changes)
- Security findings documented and addressed or accepted
- PR approved from security perspective or explicitly deferred to feature-level [Security Review Procedure](../feature-lifecycle/security-review-procedure.md)

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains security-sensitive changes (auth, validation, secrets, dependencies, API security)
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags security review as required
- Reviewer performs security-focused review of a PR
- Automated security checks (e.g. secret scanning, dependency audit) need manual triage

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with code changes and description
- [ ] **Code changes** – Diff or changed files for the PR
- [ ] **Change summary & risk** – From [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) (if run)

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **API Security Standards** – API changes must align with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **No secrets in code** – No credentials, API keys, or tokens in repo

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete [PR Preparation Procedure](./pr-preparation-procedure.md) first
- **Change summary missing** – Run [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) or manually identify security-relevant areas

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 6 ordered steps from scope through approval
- **Scope** – Which parts of the PR are in scope for security review
- **Reference** – Use of API Security Standards, threat model (if available), [Security Review Procedure](../feature-lifecycle/security-review-procedure.md) for feature-level depth
- **Validation points** – After secrets check, after validation/auth review, before approval

**Plan must be reviewed before execution begins**

**Output:**
- PR Security Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Security Review Scope

**Purpose**
- Identify which parts of the PR are security-relevant
- Focus review on auth, validation, secrets, dependencies, sensitive data, API security

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes, change summary & risk)

**Actions**
- List security-relevant areas:
  - New or changed authN/authZ (login, tokens, sessions, permissions)
  - New or changed API endpoints, request/response handling
  - Input validation, sanitization, encoding
  - Files that handle secrets, keys, credentials, or tokens
  - Dependency changes (package.json, lockfiles, Docker base images)
  - Logging, error messages, or responses that may expose sensitive data
  - Config or env usage (feature flags, URLs, keys)
- If PR has no security-relevant changes, document “No security-sensitive changes” and skip to Step 6 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no security-sensitive changes, proceed to Step 6

**Outputs**
- Security review scope
- List of security-relevant files/areas

**Failure Handling**
- **Failure:** Unclear whether changes are security-sensitive
  - **Action:** Treat as in-scope; perform lightweight review

---

#### Step 2: Check for Secrets and Credentials

**Purpose**
- Ensure no secrets, credentials, API keys, or tokens are committed

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (code changes)

**Actions**
- Scan changed files for:
  - Hardcoded passwords, API keys, tokens, secrets
  - Credential files, .env content, config with secrets
  - Private keys or certificates
- Use automated secret scanning if available; triage findings.
- Check that secrets use env vars, secret managers, or secure config – not code or config in repo.

**Decisions / Evaluations**
- **Decision:** No secrets or credentials in PR?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If any found, block merge; require removal, rotation, and re-review

**Outputs**
- Secrets check result (pass / fail)
- Findings logged if any

**Failure Handling**
- **Failure:** Secrets detected
  - **Action:** Request removal, rotate exposed secrets, fix scanning false positives; re-run Step 2

---

#### Step 3: Review Input Validation and Injection Risks

**Purpose**
- Ensure new or changed inputs are validated and that injection risks are mitigated

**Inputs**
- **From:** Step 2 outputs (secrets check passed)
- **From:** Procedure Required Inputs (code changes)
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) – Input Validation

**Actions**
- Identify new or changed user/config inputs:
  - API request body, query, params, headers
  - Form inputs, file uploads
  - Config or feature-flag values
- Check:
  - Validation (type, length, format, allowlist)
  - Use of parameterized queries / ORM (no raw SQL concatenation)
  - Encoding/escaping for XSS, injection (e.g. in HTML, JS, SQL)
- Note any missing validation or injection risk.

**Decisions / Evaluations**
- **Decision:** Input validation and injection safeguards adequate?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, request fixes and re-review

**Outputs**
- Validation and injection review result
- Findings documented

**Failure Handling**
- **Failure:** Significant validation or injection gaps
  - **Action:** Add validation/injection mitigations; re-review

---

#### Step 4: Review AuthN/AuthZ and API Security Touchpoints

**Purpose**
- Review authentication and authorization touchpoints and API security in the PR

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (code changes)
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) – Authentication, Authorization

**Actions**
- If PR touches auth or APIs:
  - **AuthN:** Token/session validation, login flows, credential handling – no downgrades or bypasses.
  - **AuthZ:** Permission checks, resource-level access – no privilege escalation or missing checks.
  - **APIs:** Protected routes require auth; errors don’t leak sensitive data; rate limiting considered if new endpoints.
- If feature has a [Threat Model](../feature-lifecycle/threat-model-procedure.md) and [Security Review](../feature-lifecycle/security-review-procedure.md), ensure PR doesn’t violate documented mitigations.

**Decisions / Evaluations**
- **Decision:** AuthN/AuthZ and API security adequate for this PR?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, request changes and re-review

**Outputs**
- AuthN/AuthZ and API security review result
- Findings documented

**Failure Handling**
- **Failure:** Auth or API security regressions
  - **Action:** Fix and re-review; escalate if needed

---

#### Step 5: Review Dependencies and Sensitive Data Handling

**Purpose**
- Check dependency changes for known vulnerabilities and review handling of sensitive data

**Inputs**
- **From:** Step 4 outputs
- **From:** Procedure Required Inputs (code changes)

**Actions**
- **Dependencies:**
  - If lockfile or package list changed: run dependency audit (e.g. `npm audit`, `yarn audit`); review results.
  - For critical/high vulnerabilities: require upgrade or mitigation before merge.
- **Sensitive data:**
  - Ensure no PII, tokens, or secrets in logs, error messages, or responses.
  - Check that sensitive data is not stored or transmitted inappropriately (e.g. client-side storage, plaintext).

**Decisions / Evaluations**
- **Decision:** Dependencies and sensitive data handling acceptable?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If not, address findings and re-review

**Outputs**
- Dependency and sensitive-data review result
- Findings documented

**Failure Handling**
- **Failure:** Critical/high dependency vulns or sensitive data exposure
  - **Action:** Remediate and re-review

---

#### Step 6: Document Findings and Approve or Request Changes

**Purpose**
- Summarize security review, document findings, and approve or request changes

**Inputs**
- **From:** Steps 2–5 outputs (or Step 1 skip)

**Actions**
- Compile security review summary:
  - Scope, checks performed, results
  - Any findings (secrets, validation, auth, dependencies, sensitive data)
  - References to API Security Standards or feature Security Review where relevant
- **Approve:** If no blocking issues and standards met.
- **Request changes:** If blocking issues; list required fixes.
- **Defer:** If PR is part of a feature with full [Security Review Procedure](../feature-lifecycle/security-review-procedure.md), note that comprehensive review is done there; this PR review confirms no new security regressions.
- Add review comment to PR with summary and link to any external doc.

**Decisions / Evaluations**
- **Decision:** Security review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- Security review summary
- Approve or request changes on PR
- Findings and follow-ups documented

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Security review scope
- Results of secrets, validation, auth/API, dependencies, sensitive-data checks
- Security review summary (in PR or linked doc)

**State changes:**
- PR has security review completed (approve or request changes)

**Decisions recorded:**
- Security review result (pass / fail / deferred)
- Follow-up actions if any

**Signals emitted:**
- “Security review complete” – PR reviewed from security perspective
- “Security review deferred” – Feature-level security review covers depth; PR checked for regressions

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] No secrets or credentials in PR
- [ ] Input validation and injection risks reviewed
- [ ] AuthN/AuthZ and API security touchpoints reviewed (if applicable)
- [ ] Dependencies and sensitive data handling reviewed (if applicable)
- [ ] Findings documented and either resolved or explicitly accepted

**Who can approve completion:**
- **Security reviewer** or **designated reviewer** – Must perform or approve PR security review

---

### 8. Downstream Dependencies

**Output → Input mappings:**
- **Security review result** → PR review workflow (merge readiness)
- **Security findings** → PR author (remediation)

**Procedures that depend on this:**
- [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md) – Merge only after required reviews (including security) pass

---

### 9. Definition of Done

**No “feels good” allowed**

- [ ] Scope defined (or “no security-sensitive changes” documented)
- [ ] Secrets check performed and passed
- [ ] Validation and injection review done (if applicable)
- [ ] AuthN/AuthZ and API security reviewed (if applicable)
- [ ] Dependencies and sensitive data reviewed (if applicable)
- [ ] Findings documented; blocking items resolved or explicitly accepted
- [ ] PR approved or changes requested from security perspective

---

### 10. Audit & Traceability

**Links to:**
- [ ] PR
- [ ] Security review summary (PR comment or doc)
- [ ] API Security Standards (for API-related checks)

**Audit trail:**
- Review date, reviewer, result, findings

---

### 11. Exit States

**Possible outcomes:**

#### ✅ Completed Successfully
- Security review done
- No blocking findings
- PR approved from security perspective

#### ⚠️ Blocked
- **Reason:** Blocking security findings (secrets, critical vulns, auth/data issues)
- **Action:** Fix findings, re-run review

#### ❌ Aborted
- **Reason:** PR closed or security review no longer required
- **Action:** None

---

**Status:** Active Procedure  
**Owner:** Security reviewer / PR reviewer
