# Procedure: Release Notes

### 1. Purpose

**Why this procedure exists**

This procedure produces or updates release notes content for a pull request or release. It documents user-facing and developer-facing changes, breaking changes, and migration requirements so that release notes are accurate and useful for customers and stakeholders.

**What problem it solves**

- Release notes missing or incomplete for user-facing or breaking changes
- Breaking changes or migrations not clearly documented
- Inconsistent or unclear release note format
- No single place to capture PR-level release note content for aggregation into release

**What "success" looks like at the end**

Release notes content that includes:
- User-facing and developer-facing changes documented
- Breaking changes and migration requirements documented
- Release note content ready for PR description or release aggregation
- Format and content validated for completeness and clarity

---

### 2. Trigger

**What causes this procedure to be invoked**

- PR contains user-facing or developer-facing changes that should appear in release notes
- PR contains breaking changes or migration requirements
- Release preparation requires release notes content from PRs
- [Change Summary & Risk Procedure](./change-summary-risk-procedure.md) or release process flags Release Notes as required

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** – PR with changes that affect release notes
- [ ] **Code and behavior changes** – Summary of what changed (features, fixes, breaking)
- [ ] **Release notes format or template** – If project defines one (e.g. Keep a Changelog, conventional commits)

**Decisions already made:**
- [ ] **PR is prepared** – [PR Preparation Procedure](./pr-preparation-procedure.md) completed (or release notes produced in parallel)

**Constraints:**
- [ ] **User-facing and breaking changes** – Must be documented in release notes
- [ ] **Clarity** – Release notes must be understandable by target audience (users, developers, support)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR or change summary** – Obtain PR and change summary first
- **Format unclear** – Use standard sections: Added, Changed, Fixed, Deprecated, Removed, Security, Migration

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – 5 ordered steps from scope through validation
- **Scope** – Which changes require release note entries (user-facing, breaking, migration)
- **Format** – Sections and style (e.g. Keep a Changelog, bullet list, conventional)
- **Validation points** – After draft, after breaking/migration check, before final

**Plan must be reviewed before execution begins**

**Output:**
- Release Notes Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Identify Changes Requiring Release Notes

**Purpose**
- Determine which PR changes must appear in release notes

**Inputs**
- **From:** Procedure Required Inputs (PR, code and behavior changes)

**Actions**
- List user-facing changes (new features, UI changes, behavior changes visible to users).
- List developer-facing changes (API changes, config, SDK, CLI) that affect integrators or operators.
- List breaking changes (removed or changed behavior that requires migration or code changes).
- List deprecations or removals.
- List security-related changes (if any) for security release notes.
- If no release-note-worthy changes, document “No release notes required” and skip to Step 5 (validate).
- Document scope.

**Decisions / Evaluations**
- **Decision:** Is scope defined?
  - **Go:** If yes, proceed to Step 2
  - **Skip:** If no release notes required, proceed to Step 5

**Outputs**
- Release notes scope (user-facing, developer-facing, breaking, deprecation, security)
- List of changes to document

**Failure Handling**
- **Failure:** Unclear if change is user- or developer-facing
  - **Action:** Include in release notes; prefer over omitting

---

#### Step 2: Draft Release Note Entries

**Purpose**
- Write clear, concise release note entries for each change

**Inputs**
- **From:** Step 1 outputs (scope, list of changes)
- **From:** Procedure Required Inputs (release notes format or template)

**Actions**
- **Added** – New features, capabilities, or options. Describe what and why (briefly).
- **Changed** – Behavior or UI changes. Describe before/after or new behavior.
- **Fixed** – Bug fixes. Describe issue and fix (user impact where relevant).
- **Deprecated** – Deprecated APIs or options. Describe replacement and timeline.
- **Removed** – Removed features or APIs. Reference migration.
- **Security** – Security fixes or hardening. Do not expose sensitive details; reference advisory if needed.
- Use consistent tone and format per project (e.g. imperative, past tense, or bullet style).
- Ensure entries are understandable by target audience (users, developers, support).
- Document draft entries (in PR description, release notes file, or changelog).

**Decisions / Evaluations**
- **Decision:** Draft entries complete for all in-scope changes?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, complete draft and re-review

**Outputs**
- Draft release note entries (Added, Changed, Fixed, Deprecated, Removed, Security as applicable)
- Location of draft (PR body, CHANGELOG, release notes file)

**Failure Handling**
- **Failure:** Unclear how to describe a change
  - **Action:** Summarize behavior change and impact; request review from author

---

#### Step 3: Document Breaking Changes and Migration

**Purpose**
- Ensure breaking changes and migration requirements are clearly documented

**Inputs**
- **From:** Step 2 outputs (draft entries)
- **From:** Step 1 outputs (breaking changes, deprecations, removals)

**Actions**
- For each breaking change:
  - Describe what broke and what the new behavior or API is.
  - Provide migration steps (code changes, config changes, data migration).
  - Link to migration guide or doc if one exists.
- For deprecations: state replacement and removal timeline.
- For removals: state what was removed and what to use instead.
- Add or update migration section in release notes.
- Ensure [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md) and [API/Contract Compatibility Procedure](./api-contract-compatibility-procedure.md) outcomes are reflected where applicable.

**Decisions / Evaluations**
- **Decision:** Breaking changes and migration documented?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, complete migration docs and re-review

**Outputs**
- Breaking changes and migration documentation
- Release notes updated with migration section

**Failure Handling**
- **Failure:** Migration path unclear
  - **Action:** Work with author to document; do not merge without migration doc for breaking change

---

#### Step 4: Finalize and Place Release Notes Content

**Purpose**
- Finalize release note content and place it where release process expects it

**Inputs**
- **From:** Steps 2–3 outputs (draft entries, breaking/migration)

**Actions**
- Merge draft and migration into final release notes content.
- Place content in agreed location:
  - PR description (release notes section), or
  - CHANGELOG / release notes file in repo, or
  - Release management tool (e.g. GitHub Releases draft, Jira release).
- Ensure format matches project convention (e.g. Keep a Changelog, versioned sections).
- If PR-level only: ensure content can be aggregated into release-level notes later.

**Decisions / Evaluations**
- **Decision:** Content finalized and placed correctly?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, finalize and re-place

**Outputs**
- Final release notes content
- Content in correct location (PR, file, or tool)

**Failure Handling**
- **Failure:** Wrong location or format
  - **Action:** Move or reformat per project convention

---

#### Step 5: Validate Completeness and Clarity

**Purpose**
- Validate that release notes are complete and clear for audience

**Inputs**
- **From:** Step 4 outputs (final content, location)

**Actions**
- **Completeness:**
  - All user-facing and developer-facing changes in scope are covered.
  - All breaking changes have migration or replacement documented.
- **Clarity:**
  - Language is clear and non-ambiguous for target audience.
  - No internal jargon or ticket IDs only; describe impact.
- **Format:**
  - Sections and style match project convention.
- Document validation result; address gaps if any.

**Decisions / Evaluations**
- **Decision:** Release notes complete and clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, update and re-validate

**Outputs**
- Validation result (complete, clear, correct format)
- Release notes procedure complete

**Failure Handling**
- **Failure:** Incomplete or unclear
  - **Action:** Update content and re-validate

---

### 6. Output Contract

**Artifacts produced:** Release notes content (draft, breaking/migration, final), placed in PR or release notes location.  
**State changes:** PR or release has release notes content.  
**Signals emitted:** “Release notes complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] User-facing and developer-facing changes documented
- [ ] Breaking changes and migration documented
- [ ] Content complete and clear for audience
- [ ] Content in correct location and format

**Who can approve:** Author, tech writer, or release manager (per project)

---

### 8. Downstream Dependencies

**Output → Input:** Release notes content → Release process, customer/stakeholder comms, [Customer/Stakeholder Comms Procedure](../release-lifecycle/customer-stakeholder-comms-procedure.md) (when defined).

---

### 9. Definition of Done

- [ ] Scope of release-note-worthy changes identified
- [ ] Draft release note entries written (Added, Changed, Fixed, etc.)
- [ ] Breaking changes and migration documented
- [ ] Content finalized and placed in agreed location
- [ ] Completeness and clarity validated

---

### 10. Audit & Traceability

**Links to:** PR, release notes file or tool. **Audit trail:** Date, author, validation result.

---

### 11. Exit States

**✅ Completed successfully** – Release notes complete, validated, and placed.  
**⚠️ Blocked** – Missing migration or incomplete content; complete and re-validate.  
**❌ Aborted** – PR closed or release notes no longer required.

---

**Status:** Active Procedure  
**Owner:** Author / Tech writer / Release manager
