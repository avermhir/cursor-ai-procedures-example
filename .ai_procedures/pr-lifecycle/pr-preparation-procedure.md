# Procedure: PR Preparation

### 1. Purpose

**Why this procedure exists**

This procedure ensures pull requests are properly prepared before code review begins. It establishes the foundation for the PR review process by ensuring code is ready, properly structured, and includes all necessary information for reviewers to effectively evaluate the changes.

**What problem it solves**

- PRs opened without proper preparation
- Missing or incomplete PR descriptions
- Code not ready for review (broken, incomplete, untested)
- Reviewers unable to understand changes
- Missing context about why changes were made
- PRs that waste reviewer time
- Inconsistent PR quality
- PRs missing required information

**What "success" looks like at the end**

A properly prepared PR that includes:
- Complete and clear PR description
- All code changes are complete and functional
- Tests are written and passing
- Code follows project standards
- PR is properly linked to tickets/issues
- Change summary and risk assessment (if required)
- Ready for code review procedures

---

### 2. Trigger

**What causes this procedure to be invoked**

- Developer has completed code changes and wants to create a PR
- Code is ready for review
- Feature implementation is complete (or partial implementation ready for review)
- Bug fix is complete
- Refactoring is complete
- Developer is ready to open a pull request

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Code changes** - All code changes are complete and functional
- [ ] **Tests** - Tests are written for the changes (if applicable)
- [ ] **Feature branch** - Branch with changes is created and pushed
- [ ] **Ticket/Issue reference** - Jira ticket or GitHub issue (if applicable)

**Decisions already made:**
- [ ] **Changes are complete** - Code changes are ready for review (not work-in-progress)
- [ ] **Tests are passing** - All tests pass locally (if applicable)

**Constraints:**
- [ ] **PR standards** - Must follow PR standards (if defined)
- [ ] **Commit message format** - Must follow commit message conventions (e.g., DT-XXX: description)
- [ ] **Branch naming** - Must follow branch naming conventions
- [ ] **Code quality** - Code must meet minimum quality standards before PR

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Code changes incomplete** → Complete code changes before opening PR
- **Tests failing** → Fix failing tests before opening PR
- **Missing ticket reference** → Create or link ticket/issue before opening PR
- **Code doesn't meet standards** → Fix code quality issues before opening PR

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from code verification through PR creation
- **Procedures to be invoked** - [Code Quality & Style Procedure](./code-quality-style-procedure.md) (for quality checks), [Test Coverage Procedure](./test-coverage-procedure.md) (for test verification)
- **Dependencies between steps** - Verify Code → Verify Tests → Update Documentation → Create Description → Link Tickets → Create PR → Verify PR
- **Risks & unknowns** - Code not ready, tests failing, missing information, PR standards unclear
- **Validation points** - After code verification, after test verification, after PR creation

**Plan must be reviewed before execution begins**

**Output:**
- PR Preparation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Verify Code Changes are Complete and Functional

**Purpose**
- Ensure all code changes are complete
- Verify code is functional and not broken
- Ensure code compiles/builds successfully
- Verify no obvious errors or issues

**Inputs**
- **From:** Procedure Required Inputs (code changes, feature branch)

**Actions**
- Review code changes:
  - **Code completeness:**
    - Verify all intended changes are included
    - Verify no incomplete or placeholder code
    - Verify no commented-out code that should be removed
    - Verify no debug code or console.logs (unless intentional)
  - **Code functionality:**
    - Verify code compiles/builds without errors
    - Verify code runs without runtime errors
    - Verify no obvious logic errors
    - Verify no syntax errors
  - **Code structure:**
    - Verify code follows project structure
    - Verify files are in correct locations
    - Verify imports are correct
    - Verify no missing dependencies
- Run local verification:
  - **Build verification:**
    - Run build command (e.g., `npm run build`)
    - Verify build succeeds
    - Fix any build errors
  - **Lint verification:**
    - Run linting (e.g., `npm run lint`)
    - Fix linting errors
    - Verify code style compliance
  - **Type checking (if applicable):**
    - Run type checking (e.g., `npm run type-check`)
    - Fix type errors
    - Verify type safety
- Verify code quality basics:
  - No obvious bugs or issues
  - Code is readable and maintainable
  - Code follows basic best practices
  - No security vulnerabilities (obvious ones)

**Decisions / Evaluations**
- **Decision:** Is code complete and functional?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, complete code changes, fix errors
- **Decision:** Does code compile/build successfully?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, fix build errors

**Outputs**
- Code verified as complete and functional
- Build/lint/type checks passing
- Code ready for testing

**Failure Handling**
- **Failure:** Code doesn't compile/build
  - **Action:** Fix build errors, check dependencies, verify environment
  - **Retry:** Step 1 after fixing build issues
- **Failure:** Code has obvious errors
  - **Action:** Fix errors, test code functionality, verify fixes
  - **Retry:** Step 1 after fixing errors

---

#### Step 2: Verify Tests are Written and Passing

**Purpose**
- Ensure tests are written for code changes
- Verify all tests pass
- Ensure adequate test coverage
- Verify tests are meaningful and not just placeholders

**Inputs**
- **From:** Step 1 outputs (code verified), Procedure Required Inputs (tests)

**Actions**
- Review test coverage:
  - **Test existence:**
    - Verify tests are written for new code
    - Verify tests are written for modified code (if applicable)
    - Verify no test files are missing
  - **Test quality:**
    - Verify tests are meaningful (not just placeholders)
    - Verify tests cover main functionality
    - Verify tests cover edge cases (if applicable)
    - Verify tests are well-written and maintainable
- Run tests:
  - **Test execution:**
    - Run all tests (e.g., `npm test`)
    - Verify all tests pass
    - Fix any failing tests
  - **Test coverage:**
    - Check test coverage (e.g., `npm run test:coverage`)
    - Verify coverage meets minimum requirements (if defined)
    - Identify gaps in coverage
- Verify test quality:
  - Tests are not flaky
  - Tests are properly isolated
  - Tests use appropriate test data
  - Tests follow testing best practices

**Decisions / Evaluations**
- **Decision:** Are tests written for code changes?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, write tests before proceeding
- **Decision:** Do all tests pass?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix failing tests
- **Decision:** Is test coverage adequate?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, add tests to increase coverage (or document why coverage is acceptable)

**Outputs**
- Tests written and verified
- All tests passing
- Test coverage verified (if applicable)

**Failure Handling**
- **Failure:** Tests are failing
  - **Action:** Debug failing tests, fix test issues or code issues, re-run tests
  - **Retry:** Step 2 after fixing test failures
- **Failure:** Test coverage insufficient
  - **Action:** Write additional tests, increase coverage, or document why coverage is acceptable
  - **Retry:** Step 2 after addressing coverage

---

#### Step 3: Update Documentation (if applicable)

**Purpose**
- Update documentation for code changes
- Ensure documentation reflects new functionality
- Update API documentation (if APIs changed)
- Update README or user documentation (if applicable)

**Inputs**
- **From:** Step 2 outputs (tests verified), Procedure Required Inputs (code changes)

**Actions**
- Identify documentation needs:
  - **Documentation types:**
    - API documentation (if APIs changed)
    - Code comments (if complex logic added)
    - README updates (if setup/usage changed)
    - User documentation (if user-facing changes)
    - Architecture documentation (if architecture changed)
- Update documentation:
  - **API documentation:**
    - Update OpenAPI specs (if APIs changed)
    - Update API documentation
    - Update API examples
  - **Code documentation:**
    - Add/update code comments for complex logic
    - Update JSDoc/TypeDoc comments
    - Update function/class documentation
  - **User documentation:**
    - Update user guides (if applicable)
    - Update feature documentation
    - Update changelog (if applicable)
- Verify documentation:
  - Documentation is accurate
  - Documentation is complete
  - Documentation is up-to-date
  - Documentation follows documentation standards

**Decisions / Evaluations**
- **Decision:** Is documentation updated (if needed)?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, update missing documentation
- **Decision:** Is documentation accurate?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix documentation accuracy

**Outputs**
- Documentation updated (if applicable)
- Documentation verified as accurate

**Failure Handling**
- **Failure:** Documentation incomplete
  - **Action:** Complete missing documentation, ensure all changes are documented
  - **Retry:** Step 3 after completing documentation
- **Failure:** Documentation inaccurate
  - **Action:** Review code changes, update documentation to match implementation
  - **Retry:** Step 3 after fixing documentation

---

#### Step 4: Create PR Description

**Purpose**
- Create comprehensive PR description
- Provide context for reviewers
- Explain what changed and why
- Make PR easy to understand and review

**Inputs**
- **From:** All previous step outputs (code, tests, documentation), Procedure Required Inputs (ticket reference)

**Actions**
- Create PR description with required sections:
  - **Summary:**
    - Brief overview of changes
    - What problem is being solved
    - High-level description of solution
  - **Changes:**
    - List of files changed
    - List of features added/modified
    - List of bugs fixed (if applicable)
    - Key implementation details
  - **Ticket/Issue Reference:**
    - Link to Jira ticket (e.g., "Fixes DT-123")
    - Link to GitHub issue (if applicable)
    - Reference related tickets/issues
  - **Testing:**
    - How changes were tested
    - Test scenarios covered
    - Manual testing performed (if applicable)
  - **Screenshots/Examples (if applicable):**
    - Screenshots for UI changes
    - Examples for API changes
    - Before/after comparisons
  - **Checklist:**
    - PR preparation checklist items
    - Review checklist items
- Ensure PR description:
  - Is clear and comprehensive
  - Provides sufficient context
  - Explains "why" not just "what"
  - Makes it easy for reviewers to understand changes
  - Follows PR description template (if defined)

**Decisions / Evaluations**
- **Decision:** Is PR description complete and clear?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, improve PR description
- **Decision:** Does PR description provide sufficient context?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, add more context

**Outputs**
- PR description created
- PR description is comprehensive and clear

**Failure Handling**
- **Failure:** PR description incomplete
  - **Action:** Complete PR description, add missing sections, provide more context
  - **Retry:** Step 4 after completing description
- **Failure:** PR description unclear
  - **Action:** Improve clarity, add examples, simplify language
  - **Retry:** Step 4 after improving description

---

#### Step 5: Link Tickets and Related PRs

**Purpose**
- Link PR to tickets/issues
- Link related PRs
- Ensure traceability
- Follow project conventions

**Inputs**
- **From:** Step 4 outputs (PR description), Procedure Required Inputs (ticket reference)

**Actions**
- Link Jira ticket:
  - **Ticket linking:**
    - Include ticket number in PR title (e.g., "DT-123: Fix login bug")
    - Include ticket reference in PR description (e.g., "Fixes DT-123")
    - Link ticket in PR (if GitHub-Jira integration exists)
  - **Ticket information:**
    - Verify ticket exists and is valid
    - Verify ticket status is appropriate
    - Update ticket with PR link (if applicable)
- Link GitHub issues (if applicable):
  - **Issue linking:**
    - Reference issues in PR description (e.g., "Closes #123")
    - Link related issues
- Link related PRs:
  - **Related PRs:**
    - Link dependent PRs
    - Link blocking PRs
    - Link related PRs in description
- Verify linking:
  - All tickets/issues are linked
  - Links are correct and valid
  - Traceability is established

**Decisions / Evaluations**
- **Decision:** Are tickets/issues properly linked?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, add missing links
- **Decision:** Is traceability established?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, add missing references

**Outputs**
- Tickets/issues linked
- Related PRs linked
- Traceability established

**Failure Handling**
- **Failure:** Ticket doesn't exist or is invalid
  - **Action:** Create ticket if needed, verify ticket number, fix ticket reference
  - **Retry:** Step 5 after fixing ticket reference
- **Failure:** Links are incorrect
  - **Action:** Verify links, fix incorrect references, test links
  - **Retry:** Step 5 after fixing links

---

#### Step 6: Create Pull Request

**Purpose**
- Create PR in GitHub
- Set up PR correctly
- Ensure PR is ready for review
- Follow PR creation conventions

**Inputs**
- **From:** Step 5 outputs (tickets linked), Step 4 outputs (PR description), Procedure Required Inputs (feature branch)

**Actions**
- Create PR using GitHub CLI or web interface:
  - **PR creation:**
    - Use `gh pr create` command or GitHub web interface
    - Set base branch (usually `main` or `develop`)
    - Set compare branch (feature branch)
    - Add PR title (following conventions, e.g., "DT-123: Description")
    - Add PR description (from Step 4)
  - **PR configuration:**
    - Set appropriate labels (if applicable)
    - Request reviewers (if applicable)
    - Set PR as draft (if work-in-progress)
    - Enable auto-merge (if applicable)
- Verify PR creation:
  - **PR verification:**
    - Verify PR was created successfully
    - Verify PR title is correct
    - Verify PR description is complete
    - Verify base/compare branches are correct
    - Verify CI/CD checks are running
- Follow PR conventions:
  - **Conventions:**
    - PR title follows format (e.g., "DT-XXX: Description")
    - PR description follows template
    - PR is not marked as draft (unless intentionally WIP)
    - PR has appropriate labels

**Decisions / Evaluations**
- **Decision:** Was PR created successfully?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, fix PR creation issues, retry
- **Decision:** Is PR configured correctly?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, update PR configuration

**Outputs**
- PR created in GitHub
- PR configured correctly
- PR ready for review

**Failure Handling**
- **Failure:** PR creation fails
  - **Action:** Check branch status, verify GitHub access, fix creation issues
  - **Retry:** Step 6 after fixing issues
- **Failure:** PR configuration incorrect
  - **Action:** Update PR title/description, fix branch selection, update labels
  - **Retry:** Step 6 after fixing configuration

---

#### Step 7: Verify PR is Ready for Review

**Purpose**
- Final verification that PR is ready
- Ensure all preparation steps are complete
- Verify PR meets preparation criteria
- Signal readiness for review

**Inputs**
- **From:** Step 6 outputs (PR created)

**Actions**
- Review PR preparation checklist:
  - **Code verification:**
    - [ ] Code is complete and functional
    - [ ] Code compiles/builds successfully
    - [ ] Code follows basic quality standards
  - **Test verification:**
    - [ ] Tests are written
    - [ ] All tests pass
    - [ ] Test coverage is adequate (if applicable)
  - **Documentation:**
    - [ ] Documentation is updated (if applicable)
    - [ ] Code comments are added (if needed)
  - **PR information:**
    - [ ] PR description is complete and clear
    - [ ] Tickets/issues are linked
    - [ ] PR title follows conventions
  - **PR status:**
    - [ ] PR is created and visible
    - [ ] CI/CD checks are running (if applicable)
    - [ ] PR is not in draft (unless intentionally WIP)
- Verify PR meets criteria:
  - All preparation steps completed
  - PR is ready for reviewers
  - PR provides sufficient context
  - PR follows project conventions
- Signal readiness:
  - PR is ready for code review procedures
  - Reviewers can begin review
  - PR preparation is complete

**Decisions / Evaluations**
- **Decision:** Is PR ready for review?
  - **Go:** If yes, PR preparation complete
  - **No-Go:** If no, complete missing preparation steps
- **Decision:** Does PR meet all preparation criteria?
  - **Go:** If yes, PR preparation complete
  - **No-Go:** If no, address missing criteria

**Outputs**
- PR verified as ready for review
- PR preparation complete
- Ready for code review procedures

**Failure Handling**
- **Failure:** PR not ready for review
  - **Action:** Complete missing preparation steps, fix issues, verify all criteria met
  - **Retry:** Step 7 after completing preparation
- **Failure:** PR doesn't meet criteria
  - **Action:** Address missing criteria, improve PR quality, verify criteria met
  - **Retry:** Step 7 after addressing criteria

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Pull Request** - PR created in GitHub with:
  - Complete PR description
  - Linked tickets/issues
  - Proper title and configuration
  - Ready for review
- **Code Changes** - Code verified as complete and functional
- **Tests** - Tests written and passing
- **Documentation** - Documentation updated (if applicable)

**State changes:**
- PR is created and ready for review
- Code is ready for code review procedures
- PR preparation is complete

**Decisions recorded:**
- Code completeness decisions
- Test coverage decisions
- Documentation update decisions
- PR description decisions

**Signals emitted:**
- "PR Ready for Review" - PR is prepared and ready for code review procedures
- "PR Preparation Complete" - All preparation steps completed

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Code compiles/builds successfully
- [ ] All tests pass
- [ ] Test coverage meets requirements (if applicable)
- [ ] Code follows quality standards

**Reviews required:**
- [ ] Self-review of PR description
- [ ] Verification that PR meets preparation criteria

**Automated checks:**
- [ ] Build/CI checks pass (if applicable)
- [ ] Linting passes
- [ ] Type checking passes (if applicable)

**Who/what can approve completion:**
- **Developer** - Must verify PR is ready before requesting review
- **Automated CI/CD** - Must pass all checks (if configured)

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Pull Request** → Input for [Code Quality & Style Procedure](./code-quality-style-procedure.md) (reviews code quality)
- **Pull Request** → Input for [Test Coverage Procedure](./test-coverage-procedure.md) (reviews test coverage)
- **Pull Request** → Input for all PR review procedures (reviews PR)
- **Pull Request** → Input for [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md) (merges PR)

**Procedures that depend on this:**
- **All PR Review Procedures** - Use prepared PR for review
- **Merge/Squash/Rebase Procedure** - Merges prepared PR

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Code changes are complete and functional
- [ ] Code compiles/builds successfully
- [ ] All tests are written and passing
- [ ] Test coverage is adequate (if applicable)
- [ ] Documentation is updated (if applicable)
- [ ] PR description is complete and clear
- [ ] Tickets/issues are linked
- [ ] PR is created in GitHub
- [ ] PR title follows conventions
- [ ] PR is ready for review
- [ ] All preparation criteria are met
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
- [ ] **Feature Branch** - Branch name
- [ ] **Commits** - Commit hashes in PR

**Audit trail:**
- **PR creation date** - When PR was created
- **PR preparation date** - When preparation was completed
- **Code changes** - Summary of code changes
- **Test coverage** - Test coverage percentage (if applicable)
- **Preparation checklist** - Completion status of preparation steps

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- PR created and ready for review
- All preparation steps completed
- Ready for code review procedures

#### ⚠️ Blocked
- **Reason:** Code not complete, tests failing, build errors, missing information
- **Required action:** Address blocker (complete code, fix tests, fix build, provide information)
- **Who to notify:** Developer (self)
- **Status:** PR preparation paused until blocker resolved

#### ❌ Aborted
- **Reason:** Code changes cannot be completed, tests cannot be fixed, PR cannot be created
- **Required action:** Document why aborted, what was completed, save work
- **Rollback required:** No (no deployment)
- **Lessons learned:** Document why preparation couldn't be completed
- **Next step:** May need to restart implementation or fix fundamental issues

#### 🔄 Partial Preparation
- **Reason:** Some preparation complete but other parts deferred, PR created as draft
- **Required action:** Document what was completed vs. deferred, mark PR as draft
- **Status:** Core preparation complete, deferred parts in future work
- **Next step:** Complete deferred preparation, then mark PR as ready

---

## Usage Notes

### Integration with Code Review

- PR Preparation Procedure prepares PR for code review procedures
- Code review procedures depend on properly prepared PRs
- Preparation quality affects review efficiency

### PR Standards

- Follow project PR standards and conventions
- Use PR templates if available
- Ensure PR description provides sufficient context

### Continuous Improvement

- Gather feedback on PR preparation quality
- Improve PR descriptions based on reviewer feedback
- Refine preparation checklist based on experience

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Development Team
