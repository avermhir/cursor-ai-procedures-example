# Procedure: Infra/IaC Review

### 1. Purpose

**Why this procedure exists**

This procedure reviews infrastructure and infrastructure-as-code (IaC) changes in pull requests. It validates infrastructure safety, cost implications, and alignment with infrastructure standards so that infra changes are safe and consistent before merge.

**What problem it solves**

- Unsafe or costly infra changes merged
- IaC errors or misconfigurations deployed
- Drift from infrastructure standards or conventions
- Security or compliance gaps in infra
- Missing or incorrect resource tagging, naming, or documentation

**What "success" looks like at the end**

An Infra/IaC review that includes:
- IaC and infra changes identified and reviewed
- Infrastructure safety and correctness verified
- Cost and resource implications assessed
- Alignment with infrastructure standards checked
- Findings documented and addressed or accepted
- PR approved from infra perspective or changes requested

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains infrastructure or IaC changes (Terraform, CloudFormation, Pulumi, Docker, K8s, etc.)
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) flags Infra/IaC Review as required
- Reviewer performs infra/IaC-focused review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with infra/IaC changes
- [ ] **Code changes** – IaC files, Dockerfiles, K8s manifests, config changes
- [ ] **Infrastructure standards** – If project defines them (naming, tagging, modules)

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed

**Constraints:**
- [ ] **Infrastructure standards** – Must align with project infra standards (when defined)
- [ ] **No destructive changes** – Destructive or high-risk changes require explicit approval

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** – Complete PR Preparation first
- **Infra standards unclear** – Review against existing IaC patterns and conventions only

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through approval
- **Scope** – IaC files, Docker/K8s, config in scope
- **Reference** – Infrastructure standards, cost and safety criteria
- **Validation points** – After safety check, after cost review, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Infra/IaC Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Infra/IaC Review Scope

**Purpose**
- Identify all infrastructure and IaC changes in the PR

**Inputs**
- **From:** Procedure Required Inputs (PR, code changes)

**Actions**
- List changed IaC files (Terraform, CloudFormation, Pulumi, etc.).
- List Dockerfiles, docker-compose, K8s manifests, Helm charts.
- List config changes that affect infra (env, feature flags, deployment config).
- Note which environments or accounts are affected.
- If no infra/IaC changes, document “No infra/IaC changes” and skip to Step 5 (approve).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no infra/IaC changes, proceed to Step 5

**Outputs**
- Infra/IaC review scope
- List of relevant files

**Failure Handling**
- **Failure:** Unclear if changes affect infra
  - **Action:** Treat as in-scope; review likely infra touchpoints

---

#### Step 2: Review IaC Correctness and Safety

**Purpose**
- Ensure IaC is valid, consistent, and safe to apply

**Inputs**
- **From:** Step 1 outputs (scope)
- **From:** Procedure Required Inputs (code changes)

**Actions**
- **Correctness:**
  - Run IaC validation (e.g. `terraform validate`, `cfn-lint`); fix syntax errors.
  - Check resource references, dependencies, and module usage.
- **Safety:**
  - Identify destructive operations (drops, replacements, renames).
  - Check for hardcoded secrets, credentials, or sensitive data in IaC.
  - Verify lifecycle rules (e.g. prevent_destroy) where critical.
- **State and drift:**
  - Note any risk of state corruption or unexpected drift.
  - Ensure plan/output is reviewable (e.g. `terraform plan` diff).
- Document concerns.

**Decisions / Evaluations**
- **Decision:** IaC correct and safe to apply?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, request fixes and re-review

**Outputs**
- IaC correctness and safety result
- Findings documented

**Failure Handling**
- **Failure:** Invalid or unsafe IaC
  - **Action:** Fix IaC, re-validate, re-review

---

#### Step 3: Review Cost and Resource Implications

**Purpose**
- Assess cost and resource impact of infra changes

**Inputs**
- **From:** Step 2 outputs
- **From:** Procedure Required Inputs (code changes)

**Actions**
- Identify new or changed resources (compute, storage, networking, managed services).
- Estimate cost impact if possible (e.g. cost estimation tools, past usage).
- Check for obviously oversized or redundant resources.
- Consider data transfer, logging, or egress if relevant.
- Document cost implications and any recommendations.

**Decisions / Evaluations**
- **Decision:** Cost and resource implications acceptable?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, optimize or get approval; re-review

**Outputs**
- Cost/resource review result
- Findings and recommendations documented

**Failure Handling**
- **Failure:** Unacceptable cost or resource use
  - **Action:** Adjust resources or get explicit approval; re-review

---

#### Step 4: Review Standards, Security, and Operations

**Purpose**
- Check alignment with infra standards, security, and operational practices

**Inputs**
- **From:** Step 3 outputs
- **From:** Procedure Required Inputs (code changes, infrastructure standards)

**Actions**
- **Standards:**
  - Naming, tagging, and structure per project conventions.
  - Module reuse and organization.
- **Security:**
  - IAM/permissions follow least privilege; no over-broad access.
  - Network segmentation, firewall, and encryption settings reasonable.
  - No secrets in IaC; use secret manager or parameter store.
- **Operations:**
  - Logging, monitoring, or alerting touched by changes are still correct.
  - Runbooks or docs updated if behavior changes.

**Decisions / Evaluations**
- **Decision:** Standards, security, and ops acceptable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, fix and re-review

**Outputs**
- Standards, security, and ops review result
- Findings documented

**Failure Handling**
- **Failure:** Significant standards or security gaps
  - **Action:** Fix and re-review

---

#### Step 5: Document Findings and Approve or Request Changes

**Purpose**
- Summarize review and approve or request changes

**Inputs**
- **From:** Steps 2–4 outputs (or Step 1 skip)

**Actions**
- Compile infra/IaC review summary:
  - Scope, correctness, safety, cost, standards, security, ops
  - Findings and follow-ups
- **Approve** if no blocking issues.
- **Request changes** if blocking; list required fixes.
- Add review comment to PR.

**Decisions / Evaluations**
- **Decision:** Review complete and outcome clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete review and document

**Outputs**
- Infra/IaC review summary
- Approve or request changes on PR

**Failure Handling**
- **Failure:** Unresolved blocking findings
  - **Action:** Do not approve; require fixes and re-review

---

### 6. Output Contract

**Artifacts produced:** Scope, correctness/safety, cost, standards/security/ops results, review summary.  
**State changes:** PR has infra/IaC review completed.  
**Signals emitted:** “Infra/IaC review complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] IaC correctness and safety reviewed
- [ ] Cost and resource implications reviewed
- [ ] Standards, security, and ops reviewed
- [ ] Findings documented and resolved or accepted

**Who can approve:** Infra/DevOps lead or designated infra reviewer

---

### 8. Downstream Dependencies

**Output → Input:** Infra/IaC review result → PR workflow, [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md).

---

### 9. Definition of Done

- [ ] Scope defined or “no infra/IaC changes” documented
- [ ] IaC correctness and safety reviewed
- [ ] Cost and resource implications reviewed
- [ ] Standards, security, and ops reviewed
- [ ] Findings documented; blocking items resolved or accepted
- [ ] PR approved or changes requested from infra perspective

---

### 10. Audit & Traceability

**Links to:** PR, infrastructure standards (if any). **Audit trail:** Review date, reviewer, result, findings.

---

### 11. Exit States

**✅ Completed successfully** – Review done, no blocking findings, approved.  
**⚠️ Blocked** – Blocking findings; fix and re-review.  
**❌ Aborted** – PR closed or review no longer required.

---

**Status:** Active Procedure  
**Owner:** Infra/DevOps lead / Infra reviewer
