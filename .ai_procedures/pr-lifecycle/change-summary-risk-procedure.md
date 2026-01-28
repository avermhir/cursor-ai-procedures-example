# Procedure: Change Summary & Risk

### 1. Purpose

**Why this procedure exists**

This procedure creates a change summary for pull requests and assesses the risk level of changes. It identifies affected areas, documents breaking changes, and determines which review procedures are required, enabling reviewers to prioritize and scope their review effectively.

**What problem it solves**

- PRs without clear change summaries
- Reviewers unable to assess change scope quickly
- Risk level of changes not assessed
- Breaking changes not identified or documented
- Wrong or incomplete review procedures applied
- High-risk changes not getting appropriate review
- Review effort misallocated

**What "success" looks like at the end**

A change summary and risk assessment that includes:
- Clear, concise change summary
- Risk level assessed (low / medium / high / critical)
- Affected areas identified
- Breaking changes documented (if any)
- Required review procedures determined
- Ready for PR description and review workflow

---

### 2. Trigger

**What causes this procedure to be invoked**

- [PR Preparation Procedure](./pr-preparation-procedure.md) is being executed (Step: Create PR Description)
- Developer is preparing a PR and needs change summary and risk assessment
- PR requires change summary and risk assessment before review
- Reviewer needs to understand change scope and risk

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Code changes** - All code changes in the PR (files changed, diff summary)
- [ ] **PR scope** - What the PR aims to achieve (feature, bug fix, refactor, etc.)
- [ ] **Ticket/Issue reference** - Jira ticket or issue (if applicable)

**Decisions already made:**
- [ ] **Changes are complete** - Code changes are ready for review

**Constraints:**
- [ ] **PR standards** - Must follow PR standards (if defined)
- [ ] **Risk criteria** - Use project risk criteria (if defined)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Code changes unclear** → Review diff, list changed files and modules
- **PR scope unclear** → Summarize from ticket or commit messages

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 5 ordered steps from change inventory through review requirements
- **Risk criteria** - How risk will be assessed (scope, breaking changes, affected areas)
- **Review procedure mapping** - Which review procedures apply at each risk level
- **Validation points** - After change summary, after risk assessment, before output

**Plan must be reviewed before execution begins**

**Output:**
- Change Summary & Risk Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Inventory Changes

**Purpose**
- List all changes in the PR
- Identify changed components, layers, and dependencies
- Create a structured inventory of what changed

**Inputs**
- **From:** Procedure Required Inputs (code changes, PR scope)

**Actions**
- List changed files:
  - Backend (services, controllers, repositories, etc.)
  - Frontend (components, pages, hooks, etc.)
  - Middleware, shared libs, config, IaC, migrations, tests
- Classify changes by type:
  - New code vs. modified vs. deleted
  - Feature vs. bug fix vs. refactor vs. config/docs
- Identify affected areas:
  - APIs (new, changed, removed)
  - Data model / schema / migrations
  - AuthN/AuthZ, security-sensitive paths
  - Infrastructure / IaC
  - Observability (logging, metrics, tracing)
  - Third-party integrations
- Document change inventory

**Decisions / Evaluations**
- **Decision:** Is the change inventory complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, complete inventory

**Outputs**
- Change inventory (files, types, affected areas)
- Affected areas list

**Failure Handling**
- **Failure:** Cannot determine scope of changes
  - **Action:** Use diff stats, file list, and ticket to infer; document assumptions

---

#### Step 2: Create Change Summary

**Purpose**
- Write a clear, concise change summary for the PR
- Summarize what changed and why
- Highlight user-facing, API, or data impact

**Inputs**
- **From:** Step 1 outputs (change inventory)
- **From:** Procedure Required Inputs (PR scope, ticket reference)

**Actions**
- Write summary:
  - **What:** Brief description of changes (2–4 sentences)
  - **Why:** Rationale (ticket, bug, refactor, dependency)
  - **User-facing impact:** New behavior, UX changes, removals (if any)
  - **API impact:** New/changed/removed endpoints or contracts (if any)
  - **Data impact:** Schema changes, migrations, data model (if any)
- Keep summary concise and scannable
- Add links to ticket, design doc, or runbook if relevant
- Document change summary

**Decisions / Evaluations**
- **Decision:** Is the change summary clear and complete?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, refine summary

**Outputs**
- Change summary (what, why, impact)
- Ready for risk assessment

**Failure Handling**
- **Failure:** Summary ambiguous or missing impact
  - **Action:** Review diff and ticket again; add “Unknown” and follow up in PR discussion

---

#### Step 3: Identify Breaking Changes

**Purpose**
- Identify any breaking changes (API, data, config, behavior)
- Document breaking changes and migration or mitigation

**Inputs**
- **From:** Step 2 outputs (change summary)
- **From:** Step 1 outputs (affected areas)

**Actions**
- Check for breaking changes:
  - **API:** Removed/changed endpoints, request/response shape, status codes
  - **Data:** Schema changes, migration behavior, backfill requirements
  - **Config:** Env vars, feature flags, config keys removed or renamed
  - **Behavior:** Changed semantics, removed features, changed defaults
- For each breaking change:
  - Describe what breaks and for whom (consumers, operators, etc.)
  - Note migration path or workaround
  - Note deprecation timeline if applicable
- If none, explicitly state “No breaking changes”
- Document breaking changes

**Decisions / Evaluations**
- **Decision:** Are breaking changes (if any) identified and documented?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, complete identification

**Outputs**
- Breaking changes list (or “None”)
- Migration/mitigation notes

**Failure Handling**
- **Failure:** Unclear if change is breaking
  - **Action:** Mark as “Possible breaking change,” describe assumption, request review

---

#### Step 4: Assess Risk Level

**Purpose**
- Assign risk level (Low / Medium / High / Critical) to the PR
- Use consistent criteria based on scope, impact, and breaking changes

**Inputs**
- **From:** Steps 1–3 outputs (inventory, summary, breaking changes)

**Actions**
- Apply risk criteria (adjust for project conventions):
  - **Critical:** Security-sensitive changes, prod config, destructive migrations, broad breaking changes
  - **High:** New APIs, schema migrations, auth/authz changes, major refactors, new integrations
  - **Medium:** Bug fixes in core paths, smaller refactors, new feature code, log/metric changes
  - **Low:** Typo fixes, comments, docs, config tweaks, obvious non-functional changes
- Consider:
  - Scope (number of files, modules, layers)
  - Breaking changes (any vs. none)
  - Affected areas (data, API, auth, infra, etc.)
  - Test coverage and validation evidence
- Document risk level and brief rationale

**Decisions / Evaluations**
- **Decision:** Is risk level assigned with clear rationale?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, assign risk and document rationale

**Outputs**
- Risk level (Low / Medium / High / Critical)
- Risk rationale

**Failure Handling**
- **Failure:** Borderline between two levels
  - **Action:** Choose the higher level; add note that review should err on the side of caution

---

#### Step 5: Determine Review Requirements

**Purpose**
- Determine which PR review procedures are required for this PR
- Ensure high-risk areas receive appropriate review

**Inputs**
- **From:** Step 4 outputs (risk level, rationale)
- **From:** Step 1 outputs (affected areas)
- **From:** Step 3 outputs (breaking changes)

**Actions**
- Map affected areas to review procedures:
  - **Data/schema/migrations** → [Data/Migration Review Procedure](./data-migration-review-procedure.md)
  - **API contract changes** → [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md)
  - **Frontend changes** → [Frontend Review Procedure](./frontend-review-procedure.md)
  - **Infra/IaC changes** → [Infra/IaC Review Procedure](./infra-iac-review-procedure.md)
  - **Security-sensitive (auth, secrets, validation)** → [Security Review Procedure](./security-review-procedure.md)
  - **Breaking changes or compatibility** → [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md)
- **All PRs:** [Code Quality & Style Procedure](./code-quality-style-procedure.md), [Test Coverage Procedure](./test-coverage-procedure.md)
- **Risk-based:**
  - **Low:** Code Quality & Style, Test Coverage; others only if affected
  - **Medium / High / Critical:** All applicable review procedures; Security Review if any security touchpoints
- Document required review procedures

**Decisions / Evaluations**
- **Decision:** Are review requirements determined and documented?
  - **Go:** If yes, procedure complete
  - **No-Go:** If no, complete mapping

**Outputs**
- Required review procedures list
- Optional/recommended procedures (if any)
- Change summary and risk assessment ready for PR description

**Failure Handling**
- **Failure:** Unclear which procedures apply
  - **Action:** Include all potentially relevant procedures; note “Verify during review”

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Change inventory (files, types, affected areas)
- Change summary (what, why, impact)
- Breaking changes list (or “None”) with migration notes
- Risk level and rationale
- Required review procedures list

**State changes:**
- PR description can be completed with change summary and risk
- Review workflow can use required procedures list

**Decisions recorded:**
- Risk level decision
- Review requirements decision

**Signals emitted:**
- “Change summary complete” – ready for PR description
- “Risk assessed” – review requirements determined

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Checks:**
- [ ] Change inventory covers all changed files and affected areas
- [ ] Change summary is clear, concise, and includes impact
- [ ] Breaking changes are identified and documented (or explicitly “None”)
- [ ] Risk level is assigned with rationale
- [ ] Required review procedures are listed

**Who can approve completion:**
- **PR author** – accountable for accuracy
- **Reviewer** – may request clarifications or adjustments

---

### 8. Downstream Dependencies

**Output → Input mappings:**
- **Change summary** → PR Preparation Procedure (PR description)
- **Risk level & review requirements** → PR review workflow (which procedures to run)

**Procedures that depend on this:**
- PR Preparation Procedure – uses change summary and risk for PR description
- Review procedures – triggered based on review requirements

---

### 9. Definition of Done

**No “feels good” allowed**

- [ ] Change inventory complete
- [ ] Change summary written
- [ ] Breaking changes identified and documented
- [ ] Risk level assigned with rationale
- [ ] Required review procedures determined
- [ ] Outputs available for PR description and review workflow

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] PR (and branch)
- [ ] Jira ticket or issue
- [ ] Change inventory and summary (in PR description or linked doc)

**Audit trail:**
- Risk level and rationale
- Required review procedures
- Breaking changes (if any)

---

### 11. Exit States

**Possible outcomes:**

#### ✅ Completed Successfully
- Change summary and risk assessment complete
- Review requirements determined
- Ready for PR description and review

#### ⚠️ Blocked
- **Reason:** Cannot complete inventory or assess risk (e.g., PR scope unclear)
- **Action:** Document blockers, add “TBD” in PR description, resolve in review

#### ❌ Aborted
- **Reason:** PR no longer going forward (e.g., closed without merge)
- **Action:** No further output; no rollback needed

---

**Status:** Active Procedure  
**Owner:** PR author / Reviewers
