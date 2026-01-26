# Procedure: Merge / Squash / Rebase

### 1. Purpose

**Why this procedure exists**

This procedure ensures pull requests are merged using the appropriate merge strategy (merge, squash, or rebase) after all reviews are complete and approvals are obtained. It finalizes the PR workflow by safely integrating code changes into the main branch while maintaining clean git history.

**What problem it solves**

- PRs merged without proper review completion
- Inconsistent merge strategies causing messy git history
- PRs merged with unresolved review comments
- Merge conflicts not resolved before merge
- PRs merged without required approvals
- Git history cluttered with unnecessary commits
- Merge strategies chosen incorrectly
- PRs merged without proper verification

**What "success" looks like at the end**

A successfully merged PR that includes:
- All reviews completed and approved
- All required approvals obtained
- Merge strategy selected appropriately
- Merge conflicts resolved (if any)
- Code merged into target branch
- Git history maintained appropriately
- PR closed and linked to ticket
- Deployment triggered (if applicable)

---

### 2. Trigger

**What causes this procedure to be invoked**

- All PR reviews are complete ([Code Quality & Style Procedure](./code-quality-style-procedure.md), [Test Coverage Procedure](./test-coverage-procedure.md), etc.)
- All required approvals are obtained
- PR is ready to be merged
- All CI/CD checks are passing
- No blocking issues remain

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** - PR that has completed all reviews
- [ ] **Review approvals** - All required review approvals obtained
- [ ] **CI/CD status** - All CI/CD checks passing
- [ ] **Ticket reference** - Jira ticket or GitHub issue linked

**Decisions already made:**
- [ ] **All reviews complete** - Code quality, test coverage, and other reviews are complete
- [ ] **All approvals obtained** - Required reviewers have approved
- [ ] **No blocking issues** - No unresolved blocking issues remain

**Constraints:**
- [ ] **Merge strategy** - Must use appropriate merge strategy (merge, squash, or rebase)
- [ ] **Git history** - Must maintain clean git history
- [ ] **Branch protection** - Must comply with branch protection rules
- [ ] **Approval requirements** - Must have required number of approvals

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing approvals** → Obtain required approvals before merging
- **CI/CD checks failing** → Fix failing checks before merging
- **Blocking issues remain** → Resolve blocking issues before merging
- **Merge conflicts** → Resolve merge conflicts before merging

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from verification through merge completion
- **Procedures to be invoked** - None (final PR procedure)
- **Dependencies between steps** - Verify Reviews → Verify Approvals → Check CI/CD → Resolve Conflicts → Select Strategy → Merge → Complete
- **Risks & unknowns** - Merge conflicts, CI/CD failures, approval issues, merge strategy unclear
- **Validation points** - After review verification, after approval verification, after conflict resolution, before merge

**Plan must be reviewed before execution begins**

**Output:**
- Merge Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Verify All Reviews are Complete

**Purpose**
- Verify all required reviews are completed
- Ensure no blocking review comments remain
- Confirm all review procedures are complete
- Verify review quality

**Inputs**
- **From:** Procedure Required Inputs (pull request, review approvals)

**Actions**
- Review PR status:
  - **Review completion check:**
    - Verify [Code Quality & Style Procedure](./code-quality-style-procedure.md) is complete
    - Verify [Test Coverage Procedure](./test-coverage-procedure.md) is complete
    - Verify other required reviews are complete (security, architecture, etc.)
    - Check for any pending reviews
  - **Review comment check:**
    - Review all review comments
    - Verify all blocking comments are resolved
    - Verify all requested changes are addressed
    - Check for unresolved discussions
- Verify review quality:
  - **Quality verification:**
    - Verify reviews were thorough
    - Verify all critical issues were addressed
    - Verify review feedback was incorporated
    - Check for any remaining concerns
- Document review status:
  - **Status documentation:**
    - Document review completion status
    - Document any remaining non-blocking comments
    - Document review quality

**Decisions / Evaluations**
- **Decision:** Are all required reviews complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, complete missing reviews
- **Decision:** Are all blocking comments resolved?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, resolve blocking comments

**Outputs**
- All reviews verified as complete
- Review status documented
- Ready for approval verification

**Failure Handling**
- **Failure:** Reviews not complete
  - **Action:** Complete missing reviews, ensure all review procedures executed
  - **Retry:** Step 1 after reviews complete
- **Failure:** Blocking comments remain
  - **Action:** Resolve blocking comments, address requested changes
  - **Retry:** Step 1 after comments resolved

---

#### Step 2: Verify All Required Approvals

**Purpose**
- Verify all required approvals are obtained
- Ensure approval requirements are met
- Confirm approvers are authorized
- Verify approval quality

**Inputs**
- **From:** Step 1 outputs (reviews complete), Procedure Required Inputs (review approvals)

**Actions**
- Check approval requirements:
  - **Requirement verification:**
    - Review branch protection rules
    - Identify required number of approvals
    - Identify required approver roles
    - Verify approval requirements are clear
- Verify approvals obtained:
  - **Approval check:**
    - Count number of approvals
    - Verify required number of approvals obtained
    - Verify approvers have required roles
    - Verify approvals are from authorized reviewers
  - **Approval quality:**
    - Verify approvals are meaningful (not just "LGTM")
    - Verify approvers reviewed the code
    - Verify approvers addressed their concerns
- Verify no blocking reviews:
  - **Blocking check:**
    - Verify no "Request Changes" reviews remain
    - Verify all "Request Changes" are resolved
    - Verify no blocking conditions
- Document approval status:
  - **Status documentation:**
    - Document approval count
    - Document approver roles
    - Document approval status

**Decisions / Evaluations**
- **Decision:** Are all required approvals obtained?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, obtain missing approvals
- **Decision:** Do approvers have required roles?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, obtain approvals from authorized reviewers

**Outputs**
- All required approvals verified
- Approval status documented
- Ready for CI/CD check

**Failure Handling**
- **Failure:** Required approvals not obtained
  - **Action:** Request approvals from required reviewers, wait for approvals
  - **Retry:** Step 2 after approvals obtained
- **Failure:** Approvers don't have required roles
  - **Action:** Request approvals from authorized reviewers, verify roles
  - **Retry:** Step 2 after proper approvals obtained

---

#### Step 3: Verify CI/CD Checks are Passing

**Purpose**
- Verify all CI/CD checks are passing
- Ensure build is successful
- Verify tests are passing
- Check for any blocking CI/CD issues

**Inputs**
- **From:** Step 2 outputs (approvals verified), Procedure Required Inputs (CI/CD status)

**Actions**
- Check CI/CD status:
  - **Status check:**
    - Review CI/CD pipeline status
    - Verify all checks are passing
    - Check for any failing checks
    - Verify no blocking CI/CD issues
  - **Check types:**
    - Build checks
    - Test checks
    - Linting checks
    - Security checks (if applicable)
    - Deployment checks (if applicable)
- Verify build success:
  - **Build verification:**
    - Verify code builds successfully
    - Verify no build errors
    - Verify no build warnings (if blocking)
- Verify test success:
  - **Test verification:**
    - Verify all tests pass
    - Verify test coverage meets requirements
    - Check for flaky tests
- Resolve CI/CD issues (if any):
  - **Issue resolution:**
    - Identify failing checks
    - Fix failing checks
    - Re-run CI/CD pipeline
    - Verify all checks pass

**Decisions / Evaluations**
- **Decision:** Are all CI/CD checks passing?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix failing checks
- **Decision:** Is build successful?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix build issues

**Outputs**
- CI/CD checks verified as passing
- Build verified as successful
- Tests verified as passing
- Ready for conflict check

**Failure Handling**
- **Failure:** CI/CD checks failing
  - **Action:** Fix failing checks, investigate failures, re-run pipeline
  - **Retry:** Step 3 after checks fixed
- **Failure:** Build failing
  - **Action:** Fix build errors, verify build configuration, re-run build
  - **Retry:** Step 3 after build fixed

---

#### Step 4: Resolve Merge Conflicts (if any)

**Purpose**
- Check for merge conflicts
- Resolve any merge conflicts
- Verify conflict resolution
- Ensure merge is safe

**Inputs**
- **From:** Step 3 outputs (CI/CD passing), Procedure Required Inputs (pull request)

**Actions**
- Check for merge conflicts:
  - **Conflict detection:**
    - Check PR for merge conflicts
    - Verify target branch is up-to-date
    - Check for conflicting changes
    - Identify conflict areas
- Resolve merge conflicts (if any):
  - **Conflict resolution:**
    - Update feature branch with target branch
    - Resolve conflicts manually
    - Verify conflict resolution is correct
    - Test conflict resolution
  - **Resolution verification:**
    - Verify code compiles after resolution
    - Verify tests pass after resolution
    - Verify no functionality broken
- Update PR after conflict resolution:
  - **PR update:**
    - Push conflict resolution
    - Verify PR is up-to-date
    - Re-run CI/CD checks
    - Verify all checks pass
- Verify merge safety:
  - **Safety verification:**
    - Verify merge is safe
    - Verify no breaking changes
    - Verify compatibility maintained

**Decisions / Evaluations**
- **Decision:** Are there merge conflicts?
  - **Go:** If no, proceed to Step 5
  - **No-Go:** If yes, resolve conflicts first
- **Decision:** Are conflicts resolved correctly?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, fix conflict resolution

**Outputs**
- Merge conflicts checked
- Conflicts resolved (if any)
- Merge safety verified
- Ready for merge strategy selection

**Failure Handling**
- **Failure:** Merge conflicts exist
  - **Action:** Resolve conflicts, update branch, verify resolution
  - **Retry:** Step 4 after conflicts resolved
- **Failure:** Conflict resolution incorrect
  - **Action:** Fix resolution, verify correctness, test resolution
  - **Retry:** Step 4 after resolution fixed

---

#### Step 5: Select Merge Strategy

**Purpose**
- Determine appropriate merge strategy
- Understand implications of each strategy
- Select strategy based on project standards
- Document strategy selection

**Inputs**
- **From:** Step 4 outputs (conflicts resolved), Procedure Required Inputs (merge strategy constraints)

**Actions**
- Review merge strategy options:
  - **Merge strategy types:**
    - **Merge commit:** Creates merge commit, preserves branch history
    - **Squash and merge:** Squashes all commits into one, cleaner history
    - **Rebase and merge:** Rebases commits onto target branch, linear history
  - **Strategy characteristics:**
    - Git history impact
    - Commit preservation
    - History clarity
    - Rollback ease
- Review project standards:
  - **Standards review:**
    - Check project merge strategy standards
    - Review git history preferences
    - Check team conventions
    - Verify strategy requirements
- Select appropriate strategy:
  - **Strategy selection:**
    - **Use merge commit if:**
      - Preserving branch history is important
      - Feature branch has significant history
      - Team prefers merge commits
    - **Use squash and merge if:**
      - Cleaner git history preferred
      - Feature branch has many small commits
      - Team prefers single commit per feature
    - **Use rebase and merge if:**
      - Linear git history preferred
      - Feature branch is simple
      - Team prefers rebase workflow
- Document strategy selection:
  - **Documentation:**
    - Document selected strategy
    - Document selection rationale
    - Document any exceptions

**Decisions / Evaluations**
- **Decision:** Is merge strategy selected?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, select strategy based on standards
- **Decision:** Is strategy appropriate for this PR?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, select appropriate strategy

**Outputs**
- Merge strategy selected
- Strategy selection documented
- Ready for merge execution

**Failure Handling**
- **Failure:** Merge strategy unclear
  - **Action:** Review project standards, consult team, select strategy
  - **Retry:** Step 5 after strategy selected
- **Failure:** Strategy not appropriate
  - **Action:** Select appropriate strategy, document rationale
  - **Retry:** Step 5 after strategy corrected

---

#### Step 6: Execute Merge

**Purpose**
- Execute the merge using selected strategy
- Verify merge is successful
- Ensure code is integrated correctly
- Handle any merge issues

**Inputs**
- **From:** Step 5 outputs (strategy selected), Procedure Required Inputs (pull request)

**Actions**
- Execute merge:
  - **Merge execution:**
    - Use GitHub CLI: `gh pr merge <PR_NUMBER> --<strategy>`
    - Or use GitHub web interface
    - Select merge strategy (merge, squash, rebase)
    - Confirm merge
  - **Merge options:**
    - **Merge commit:** `gh pr merge <PR_NUMBER> --merge`
    - **Squash and merge:** `gh pr merge <PR_NUMBER> --squash`
    - **Rebase and merge:** `gh pr merge <PR_NUMBER> --rebase`
- Verify merge success:
  - **Success verification:**
    - Verify merge completed successfully
    - Verify PR is closed
    - Verify code is in target branch
    - Verify git history is correct
- Verify code integration:
  - **Integration verification:**
    - Verify code is integrated correctly
    - Verify no code is lost
    - Verify functionality is preserved
    - Check target branch after merge
- Handle merge issues (if any):
  - **Issue handling:**
    - Identify any merge issues
    - Fix merge issues
    - Verify merge is correct
    - Re-merge if needed

**Decisions / Evaluations**
- **Decision:** Was merge successful?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, fix merge issues, re-merge
- **Decision:** Is code integrated correctly?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, verify integration, fix if needed

**Outputs**
- PR merged successfully
- Code integrated into target branch
- PR closed
- Merge complete

**Failure Handling**
- **Failure:** Merge fails
  - **Action:** Investigate failure, fix issues, re-attempt merge
  - **Retry:** Step 6 after issues fixed
- **Failure:** Code not integrated correctly
  - **Action:** Verify integration, fix if needed, verify functionality
  - **Retry:** Step 6 after integration verified

---

#### Step 7: Complete Merge and Update Ticket

**Purpose**
- Complete merge process
- Update linked ticket
- Clean up feature branch (if applicable)
- Document merge completion

**Inputs**
- **From:** Step 6 outputs (merge executed), Procedure Required Inputs (ticket reference)

**Actions**
- Update linked ticket:
  - **Ticket update:**
    - Update Jira ticket with PR link
    - Update ticket status (if applicable)
    - Add merge completion comment
    - Link PR to ticket
  - **GitHub issue update (if applicable):**
    - Update issue with PR link
    - Close issue if PR closes it
    - Add merge completion comment
- Clean up feature branch (if applicable):
  - **Branch cleanup:**
    - Delete feature branch (if project standard)
    - Or keep branch for reference
    - Document branch cleanup decision
- Document merge completion:
  - **Documentation:**
    - Document merge completion
    - Document merge strategy used
    - Document any issues encountered
    - Document lessons learned
- Verify deployment (if applicable):
  - **Deployment verification:**
    - Verify deployment is triggered (if auto-deploy)
    - Verify deployment status
    - Monitor deployment (if needed)
- Complete merge process:
  - **Process completion:**
    - Mark merge as complete
    - Update PR status
    - Notify stakeholders (if applicable)
    - Archive PR documentation

**Decisions / Evaluations**
- **Decision:** Is merge process complete?
  - **Go:** If yes, merge complete
  - **No-Go:** If no, complete missing steps
- **Decision:** Is ticket updated?
  - **Go:** If yes, merge complete
  - **No-Go:** If no, update ticket

**Outputs**
- Merge process complete
- Ticket updated
- Branch cleaned up (if applicable)
- Merge documented

**Failure Handling**
- **Failure:** Ticket update fails
  - **Action:** Manually update ticket, verify update, document update
  - **Retry:** Step 7 after ticket updated
- **Failure:** Branch cleanup fails
  - **Action:** Manually delete branch if needed, document cleanup
  - **Retry:** Step 7 after cleanup

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Merged PR** - PR successfully merged into target branch
- **Updated Ticket** - Jira ticket or GitHub issue updated with merge information
- **Merge Documentation** - Documentation of merge completion

**State changes:**
- Code is merged into target branch
- PR is closed
- Feature branch is cleaned up (if applicable)
- Ticket is updated

**Decisions recorded:**
- Merge strategy selection
- Merge completion decisions
- Branch cleanup decisions

**Signals emitted:**
- "PR Merged" - PR successfully merged
- "Code Integrated" - Code is in target branch
- "Ready for Deployment" - Code is ready for deployment (if applicable)

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All reviews are complete
- [ ] All required approvals obtained
- [ ] All CI/CD checks passing
- [ ] Merge conflicts resolved (if any)
- [ ] Merge is successful
- [ ] Code is integrated correctly

**Reviews required:**
- [ ] Merge verification (merge is successful)
- [ ] Integration verification (code is correct)

**Automated checks:**
- [ ] CI/CD checks pass
- [ ] Merge completes successfully
- [ ] Code is in target branch

**Who/what can approve completion:**
- **PR Author** - May verify merge
- **Tech Lead** - May verify merge quality
- **Automated System** - Verifies merge success

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Merged Code** → Input for deployment procedures (code is ready for deployment)
- **Merged PR** → Input for release procedures (code is in release branch)

**Procedures that depend on this:**
- **Deployment Procedures** - Use merged code for deployment
- **Release Procedures** - Use merged code for releases

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] All reviews are complete
- [ ] All required approvals obtained
- [ ] All CI/CD checks passing
- [ ] Merge conflicts resolved (if any)
- [ ] Merge strategy selected
- [ ] PR merged successfully
- [ ] Code integrated into target branch
- [ ] PR closed
- [ ] Ticket updated
- [ ] Branch cleaned up (if applicable)
- [ ] Merge documented
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Pull Request** - PR number/URL
- [ ] **Jira Ticket** - Ticket key/ID (e.g., DT-123)
- [ ] **GitHub Issue** - Issue number (if applicable)
- [ ] **Merge Commit** - Merge commit hash
- [ ] **Target Branch** - Branch where code was merged

**Audit trail:**
- **Merge date** - When PR was merged
- **Merge strategy** - Strategy used (merge, squash, rebase)
- **Merged by** - Who performed the merge
- **Approvals** - Who approved the PR
- **Reviews** - What reviews were completed
- **CI/CD status** - CI/CD check results

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- PR merged successfully
- Code integrated correctly
- Ticket updated
- Merge process complete

#### ⚠️ Blocked
- **Reason:** Reviews not complete, approvals missing, CI/CD failing, merge conflicts
- **Required action:** Address blocker (complete reviews, obtain approvals, fix CI/CD, resolve conflicts)
- **Who to notify:** PR author, reviewers
- **Status:** Merge paused until blocker resolved

#### ❌ Merge Failed
- **Reason:** Merge conflicts cannot be resolved, merge fails, integration issues
- **Required action:** Fix merge issues, resolve conflicts, re-attempt merge
- **Rollback required:** No (merge not completed)
- **Lessons learned:** Document merge issues for future prevention
- **Next step:** Fix issues, re-attempt merge

#### 🔄 Partial Merge
- **Reason:** Some changes merged but others deferred, partial integration
- **Required action:** Document partial merge, plan for remaining changes
- **Status:** Partial merge complete, remaining changes in future PR
- **Next step:** Complete remaining changes in new PR

---

## Usage Notes

### Merge Strategy Selection

- **Merge commit:** Preserves branch history, good for feature branches with significant history
- **Squash and merge:** Creates single commit, cleaner history, good for feature branches with many small commits
- **Rebase and merge:** Linear history, good for simple feature branches

### Branch Cleanup

- Follow project standards for branch cleanup
- Some projects delete branches immediately after merge
- Some projects keep branches for reference
- Document cleanup decision

### Integration with Deployment

- Merged code may trigger automatic deployment
- Verify deployment status after merge
- Monitor deployment if needed

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Development Team
