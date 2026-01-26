# Procedure: Test Coverage

### 1. Purpose

**Why this procedure exists**

This procedure ensures pull requests include adequate test coverage for code changes. It verifies that new and modified code is properly tested, test coverage meets requirements, and tests are meaningful and maintainable.

**What problem it solves**

- Code merged without tests
- Insufficient test coverage for changes
- Tests that don't actually test functionality
- Missing tests for critical code paths
- Test coverage decreasing over time
- Placeholder or meaningless tests
- Tests that are hard to maintain
- Inconsistent test quality

**What "success" looks like at the end**

Test coverage review results that include:
- Test coverage verified for all code changes
- Test coverage meets minimum requirements
- Tests are meaningful and maintainable
- Critical code paths are tested
- Test quality is acceptable
- Coverage issues identified and addressed
- Tests approved for merge (if coverage standards met)

---

### 2. Trigger

**What causes this procedure to be invoked**

- [PR Preparation Procedure](./pr-preparation-procedure.md) has been completed (PR is ready for review)
- Code review is being performed on a pull request
- Need to verify test coverage for code changes
- PR reviewer is evaluating test coverage
- Automated coverage checks need manual review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** - PR with code changes (from PR Preparation Procedure)
- [ ] **Code changes** - All code changes in the PR
- [ ] **Test changes** - All test changes in the PR
- [ ] **Coverage reports** - Test coverage reports (if available)

**Decisions already made:**
- [ ] **PR is prepared** - PR Preparation Procedure has been completed
- [ ] **Tests are written** - Tests have been written for code changes

**Constraints:**
- [ ] **Test coverage requirements** - Must meet minimum test coverage requirements (typically 80%+)
- [ ] **Test quality standards** - Tests must meet quality standards
- [ ] **Testing Standards** - Must comply with Testing Standards (if defined)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** → Ensure PR Preparation Procedure is completed first
- **Missing tests** → Require tests to be written before review
- **Missing coverage reports** → Run coverage tools, generate reports

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from coverage calculation through coverage approval
- **Procedures to be invoked** - None (standalone coverage review procedure)
- **Dependencies between steps** - Calculate Coverage → Review Coverage → Verify Tests → Check Quality → Assess Critical Paths → Review Maintainability → Approve
- **Risks & unknowns** - Coverage requirements unclear, coverage tools unavailable, test quality standards ambiguous
- **Validation points** - After coverage calculation, after test review, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Test Coverage Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Calculate Test Coverage

**Purpose**
- Calculate test coverage for code changes
- Identify coverage gaps
- Verify coverage meets requirements
- Generate coverage reports

**Inputs**
- **From:** Procedure Required Inputs (code changes, test changes, coverage reports)

**Actions**
- Run test coverage tools:
  - **Coverage tool execution:**
    - Run coverage tool (e.g., `npm run test:coverage`, Jest, Istanbul, etc.)
    - Generate coverage reports
    - Review coverage metrics
  - **Coverage metrics:**
    - Line coverage percentage
    - Branch coverage percentage
    - Function coverage percentage
    - Statement coverage percentage
- Analyze coverage for changed code:
  - **Changed code coverage:**
    - Calculate coverage for new code
    - Calculate coverage for modified code
    - Identify uncovered lines/branches
    - Identify coverage gaps
- Compare to requirements:
  - **Requirement comparison:**
    - Compare coverage to minimum requirements (typically 80%+)
    - Identify coverage shortfalls
    - Verify coverage meets standards
- Generate coverage report:
  - **Report generation:**
    - Create coverage report
    - Highlight uncovered code
    - Document coverage metrics

**Decisions / Evaluations**
- **Decision:** Is test coverage calculated?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, run coverage tools, generate reports
- **Decision:** Does coverage meet minimum requirements?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, identify coverage gaps, proceed to review

**Outputs**
- Test coverage calculated
- Coverage metrics available
- Coverage gaps identified
- Coverage report generated

**Failure Handling**
- **Failure:** Coverage tools fail
  - **Action:** Fix tool configuration, verify test setup, re-run coverage
  - **Retry:** Step 1 after fixing tools
- **Failure:** Coverage below requirements
  - **Action:** Document coverage gaps, proceed to review to assess if acceptable
  - **Retry:** Step 1 after addressing coverage (if required)

---

#### Step 2: Review Test Coverage for Code Changes

**Purpose**
- Review coverage for all code changes
- Verify new code is tested
- Verify modified code is tested
- Identify untested code

**Inputs**
- **From:** Step 1 outputs (coverage calculated), Procedure Required Inputs (code changes)

**Actions**
- Review coverage for new code:
  - **New code coverage:**
    - Verify all new functions/classes are tested
    - Verify all new code paths are tested
    - Identify untested new code
    - Verify critical new code is tested
  - **New code analysis:**
    - Review coverage report for new files
    - Review coverage for new functions
    - Review coverage for new classes
    - Identify coverage gaps
- Review coverage for modified code:
  - **Modified code coverage:**
    - Verify modified functions are tested
    - Verify modified code paths are tested
    - Verify regression tests exist (if applicable)
    - Identify untested modifications
  - **Modified code analysis:**
    - Review coverage report for modified files
    - Review coverage for modified functions
    - Review coverage for modified logic
    - Identify coverage gaps
- Identify untested code:
  - **Untested code identification:**
    - List all untested lines/branches
    - Categorize untested code (critical, important, minor)
    - Assess risk of untested code
    - Document untested code rationale (if acceptable)

**Decisions / Evaluations**
- **Decision:** Is new code adequately tested?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, require additional tests
- **Decision:** Is modified code adequately tested?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, require additional tests

**Outputs**
- Coverage reviewed for all code changes
- Untested code identified
- Coverage gaps documented

**Failure Handling**
- **Failure:** New code not tested
  - **Action:** Require tests for new code, block PR until tests added
  - **Retry:** Step 2 after tests added
- **Failure:** Modified code not tested
  - **Action:** Require tests for modified code, require regression tests
  - **Retry:** Step 2 after tests added

---

#### Step 3: Verify Tests are Meaningful

**Purpose**
- Verify tests actually test functionality
- Ensure tests are not placeholders
- Verify tests are comprehensive
- Check test quality

**Inputs**
- **From:** Step 2 outputs (coverage reviewed), Procedure Required Inputs (test changes)

**Actions**
- Review test quality:
  - **Test meaningfulness:**
    - Verify tests actually test functionality
    - Verify tests are not just placeholders
    - Verify tests have assertions
    - Verify tests verify expected behavior
  - **Test comprehensiveness:**
    - Verify tests cover happy paths
    - Verify tests cover error cases
    - Verify tests cover edge cases (if applicable)
    - Verify tests cover boundary conditions
- Review test structure:
  - **Test structure:**
    - Verify tests are well-structured
    - Verify tests follow testing patterns
    - Verify tests are readable
    - Verify tests are maintainable
- Review test assertions:
  - **Assertion quality:**
    - Verify assertions are meaningful
    - Verify assertions test correct behavior
    - Verify assertions are not too generic
    - Verify assertions cover important cases
- Check for test anti-patterns:
  - **Anti-patterns:**
    - No assertions (tests that don't verify anything)
    - Always passing tests
    - Tests that don't test the code
    - Overly complex tests
    - Tests that are hard to understand

**Decisions / Evaluations**
- **Decision:** Are tests meaningful?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, require meaningful tests
- **Decision:** Are tests comprehensive?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, require additional test cases

**Outputs**
- Test meaningfulness verified
- Test quality assessed
- Test issues identified (if any)

**Failure Handling**
- **Failure:** Tests are placeholders
  - **Action:** Require real tests, block PR until meaningful tests added
  - **Retry:** Step 3 after meaningful tests added
- **Failure:** Tests don't test functionality
  - **Action:** Require tests that actually test code, provide guidance
  - **Retry:** Step 3 after tests improved

---

#### Step 4: Verify Critical Code Paths are Tested

**Purpose**
- Verify critical functionality is tested
- Ensure important code paths are covered
- Verify error handling is tested
- Check edge cases are tested

**Inputs**
- **From:** Step 3 outputs (tests verified), Procedure Required Inputs (code changes)

**Actions**
- Identify critical code paths:
  - **Critical paths:**
    - Business logic paths
    - Error handling paths
    - Security-sensitive paths
    - Performance-critical paths
    - User-facing functionality
  - **Path analysis:**
    - Review code to identify critical paths
    - Review requirements to identify critical functionality
    - Review architecture to identify critical components
- Verify critical paths are tested:
  - **Critical path testing:**
    - Verify business logic is tested
    - Verify error handling is tested
    - Verify security-sensitive code is tested
    - Verify user-facing functionality is tested
  - **Path coverage:**
    - Review coverage for critical paths
    - Identify untested critical paths
    - Assess risk of untested critical paths
- Verify error handling is tested:
  - **Error handling testing:**
    - Verify error cases are tested
    - Verify error responses are tested
    - Verify error handling logic is tested
    - Verify edge cases are tested
- Verify edge cases are tested (if applicable):
  - **Edge case testing:**
    - Verify boundary conditions are tested
    - Verify null/undefined cases are tested
    - Verify empty input cases are tested
    - Verify invalid input cases are tested

**Decisions / Evaluations**
- **Decision:** Are critical code paths tested?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, require tests for critical paths
- **Decision:** Is error handling tested?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, require error handling tests

**Outputs**
- Critical code paths verified as tested
- Error handling verified as tested
- Edge cases verified as tested (if applicable)

**Failure Handling**
- **Failure:** Critical paths not tested
  - **Action:** Require tests for critical paths, block PR until tests added
  - **Retry:** Step 4 after critical path tests added
- **Failure:** Error handling not tested
  - **Action:** Require error handling tests, provide error testing guidance
  - **Retry:** Step 4 after error tests added

---

#### Step 5: Assess Test Quality and Maintainability

**Purpose**
- Assess overall test quality
- Verify tests are maintainable
- Check test readability
- Verify test patterns are followed

**Inputs**
- **From:** Step 4 outputs (critical paths verified), Procedure Required Inputs (test changes)

**Actions**
- Assess test quality:
  - **Quality assessment:**
    - Review test code quality
    - Review test structure
    - Review test readability
    - Review test maintainability
  - **Quality factors:**
    - Test clarity and readability
    - Test organization
    - Test naming conventions
    - Test documentation
- Verify test maintainability:
  - **Maintainability factors:**
    - Tests are not overly complex
    - Tests are well-organized
    - Tests follow patterns
    - Tests are easy to modify
  - **Maintainability review:**
    - Review test complexity
    - Review test organization
    - Review test patterns
    - Review test dependencies
- Check test patterns:
  - **Pattern compliance:**
    - Verify tests follow project testing patterns
    - Verify tests use appropriate testing frameworks
    - Verify tests follow testing best practices
    - Check for test anti-patterns
- Review test documentation:
  - **Documentation review:**
    - Verify test descriptions are clear
    - Verify test names are descriptive
    - Verify complex tests are documented
    - Check for missing documentation

**Decisions / Evaluations**
- **Decision:** Is test quality acceptable?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, require test quality improvements
- **Decision:** Are tests maintainable?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, require maintainability improvements

**Outputs**
- Test quality assessed
- Test maintainability verified
- Test quality issues documented (if any)

**Failure Handling**
- **Failure:** Test quality poor
  - **Action:** Require test quality improvements, provide quality guidelines
  - **Retry:** Step 5 after quality improved
- **Failure:** Tests not maintainable
  - **Action:** Require maintainability improvements, provide refactoring guidance
  - **Retry:** Step 5 after maintainability improved

---

#### Step 6: Review Overall Coverage and Make Decision

**Purpose**
- Review overall test coverage
- Assess coverage adequacy
- Make coverage approval decision
- Document coverage findings

**Inputs**
- **From:** All previous step outputs (complete coverage review)

**Actions**
- Review overall coverage:
  - **Coverage summary:**
    - Review coverage metrics
    - Review coverage for all changes
    - Review critical path coverage
    - Assess overall coverage adequacy
  - **Coverage assessment:**
    - Compare coverage to requirements
    - Assess coverage quality
    - Assess test quality
    - Assess maintainability
- Make coverage decision:
  - **Approve if:**
    - Coverage meets requirements
    - Critical paths are tested
    - Tests are meaningful
    - Test quality is acceptable
  - **Request changes if:**
    - Coverage below requirements
    - Critical paths not tested
    - Tests are not meaningful
    - Test quality is poor
- Document coverage findings:
  - **Findings documentation:**
    - Document coverage metrics
    - Document coverage gaps (if any)
    - Document test quality issues (if any)
    - Provide feedback on tests
- Communicate decision:
  - **Decision communication:**
    - Approve coverage (if standards met)
    - Request additional tests (if needed)
    - Provide specific feedback on coverage gaps
    - Provide guidance on test improvements

**Decisions / Evaluations**
- **Decision:** Does test coverage meet requirements?
  - **Go:** If yes, approve coverage
  - **No-Go:** If no, request additional tests
- **Decision:** Are tests adequate for code changes?
  - **Go:** If yes, approve coverage
  - **No-Go:** If no, request test improvements

**Outputs**
- Coverage review complete
- Coverage decision made
- Coverage feedback provided
- Coverage approved or changes requested

**Failure Handling**
- **Failure:** Coverage below requirements
  - **Action:** Request additional tests, provide coverage guidance, block PR until coverage improved
  - **Retry:** Step 6 after coverage improved
- **Failure:** Tests inadequate
  - **Action:** Request test improvements, provide testing guidance
  - **Retry:** Step 6 after tests improved

---

#### Step 7: Document Coverage Review and Complete

**Purpose**
- Document coverage review findings
- Complete coverage review process
- Provide review summary
- Signal readiness for next review

**Inputs**
- **From:** Step 6 outputs (coverage decision made)

**Actions**
- Document coverage review:
  - **Review documentation:**
    - Document coverage metrics
    - Document coverage gaps (if any)
    - Document test quality assessment
    - Document approval decision
  - **Review summary:**
    - Create coverage review summary
    - Document findings
    - Document recommendations
- Complete review process:
  - **Process completion:**
    - Mark coverage review as complete
    - Update PR with review comments
    - Provide feedback to developer
    - Signal readiness for other reviews
- Provide review summary:
  - **Summary communication:**
    - Coverage percentage
    - Coverage gaps (if any)
    - Test quality assessment
    - Approval status

**Decisions / Evaluations**
- **Decision:** Is coverage review complete?
  - **Go:** If yes, review complete
  - **No-Go:** If no, complete missing documentation

**Outputs**
- Coverage review documented
- Review summary provided
- Coverage review complete

**Failure Handling**
- **Failure:** Review documentation incomplete
  - **Action:** Complete documentation, ensure all findings documented
  - **Retry:** Step 7 after documentation complete

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Test Coverage Review** - Complete review of test coverage
  - Coverage metrics calculated
  - Coverage gaps identified
  - Test quality assessed
  - Critical paths verified
  - Coverage decision made
- **Coverage Feedback** - Feedback on test coverage and quality
- **Coverage Report** - Coverage report with metrics

**State changes:**
- Test coverage verified
- Coverage adequacy confirmed
- PR approved or changes requested

**Decisions recorded:**
- Coverage requirement compliance decisions
- Test quality decisions
- Critical path testing decisions
- Approval decisions

**Signals emitted:**
- "Test Coverage Approved" - Coverage meets requirements
- "Test Coverage Changes Requested" - Coverage needs improvement
- "Ready for Next Review" - Coverage review complete, ready for other reviews

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Test coverage calculated
- [ ] Coverage meets minimum requirements
- [ ] Critical code paths are tested
- [ ] Tests are meaningful
- [ ] Test quality is acceptable

**Reviews required:**
- [ ] Test coverage review completed
- [ ] Coverage feedback provided
- [ ] Approval decision made

**Automated checks:**
- [ ] Coverage tools run successfully
- [ ] Coverage reports generated
- [ ] Coverage metrics calculated

**Who/what can approve completion:**
- **Code Reviewer** - Must review and approve test coverage
- **QA Team** - May review for critical functionality coverage

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Test Coverage Review** → Input for [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md) (coverage must be approved before merge)
- **Coverage Feedback** → Input for developer (to address coverage issues)

**Procedures that depend on this:**
- **Merge/Squash/Rebase Procedure** - Requires test coverage approval before merge

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Test coverage calculated for all code changes
- [ ] Coverage meets minimum requirements (or acceptable rationale provided)
- [ ] New code is tested
- [ ] Modified code is tested
- [ ] Critical code paths are tested
- [ ] Error handling is tested
- [ ] Tests are meaningful (not placeholders)
- [ ] Test quality is acceptable
- [ ] Tests are maintainable
- [ ] Coverage review feedback provided
- [ ] Approval decision made
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Pull Request** - PR number/URL
- [ ] **Coverage Report** - Coverage report file/link
- [ ] **Test Coverage Review** - Review comments and feedback

**Audit trail:**
- **Review date** - When test coverage review was performed
- **Reviewer** - Who performed the review
- **Coverage metrics** - Coverage percentages and metrics
- **Coverage gaps** - List of coverage gaps identified
- **Approval decision** - Whether coverage was approved
- **Review duration** - Time spent on review

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Test coverage meets requirements
- Coverage approved for merge
- Review feedback provided

#### ⚠️ Blocked
- **Reason:** Coverage tools unavailable, coverage requirements unclear, tests not written
- **Required action:** Address blocker (set up tools, clarify requirements, write tests)
- **Who to notify:** Developer, QA team
- **Status:** Coverage review paused until blocker resolved

#### ❌ Changes Requested
- **Reason:** Coverage below requirements, critical paths not tested, tests not meaningful
- **Required action:** Developer must address coverage issues, add tests, resubmit for review
- **Rollback required:** No (no merge)
- **Lessons learned:** Document common coverage issues for future prevention
- **Next step:** Developer addresses coverage, resubmits for review

#### 🔄 Partial Approval
- **Reason:** Coverage slightly below requirements but acceptable, minor gaps acceptable
- **Required action:** Document coverage gaps, approve with suggestions for future improvement
- **Status:** Coverage approved but with minor coverage notes
- **Next step:** Proceed to other reviews, address coverage gaps in future PRs

---

## Usage Notes

### Coverage Requirements

- Minimum coverage requirements are typically 80%+ but may vary by project
- Critical code paths should have 100% coverage
- Coverage requirements should be clearly defined in project standards

### Test Quality vs. Coverage

- High coverage doesn't guarantee quality tests
- Focus on meaningful tests, not just coverage percentage
- Quality tests are more important than high coverage numbers

### Continuous Improvement

- Gather feedback on coverage standards
- Refine coverage requirements based on experience
- Update standards based on team feedback

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Development Team / QA Team
