# Procedure: End-to-End Testing

### 1. Purpose

**Why this procedure exists**

This procedure executes end-to-end tests to verify complete user flows from frontend through middleware to backend, validating that features work correctly from a user's perspective. It tests complete user journeys, ensuring all layers work together to deliver the intended functionality.

**What problem it solves**

- Complete user flows not tested end-to-end
- User journey issues discovered late in development
- Feature functionality broken when tested as a whole
- Integration issues affecting user experience
- User-facing bugs not caught before deployment
- Acceptance criteria not validated end-to-end
- User workflows not systematically tested

**What "success" looks like at the end**

End-to-end testing results that include:
- All E2E test cases executed (from test plan)
- Primary user flows tested and passing
- Secondary user flows tested and passing
- Error flows tested and passing
- User journeys validated end-to-end
- Acceptance criteria validated
- E2E test results documented
- User-facing issues identified and documented (if any)
- Ready for acceptance and signoff

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Integration Testing Procedure](./integration-testing-procedure.md) has been completed
- All implementation layers are complete (backend, frontend, middleware if applicable)
- [Test Plan Procedure](./test-plan-procedure.md) has been completed (E2E test cases defined)
- E2E test cases are ready for execution
- Feature Implementation Orchestration Procedure invokes this (Phase 4, after Integration Testing)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Test plan document** - E2E test cases, test data requirements, test environment requirements (from [Test Plan Procedure](./test-plan-procedure.md))
- [ ] **Integration test report** - Integration testing results (from [Integration Testing Procedure](./integration-testing-procedure.md))
- [ ] **Requirements document** - Functional requirements, acceptance criteria, user stories (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **User journeys** - User journey definitions (from [User Journey/UX Procedure](./user-journey-ux-procedure.md))
- [ ] **Complete implementation** - All layers implemented (backend, frontend, middleware if applicable)
- [ ] **Test data** - Test data prepared according to test plan requirements
- [ ] **Test environment** - E2E test environment available and configured

**Decisions already made:**
- [ ] **Integration is verified** - Integration Testing Procedure has verified layers work together
- [ ] **Test plan is approved** - Test plan has been approved and is ready for execution

**Constraints:**
- [ ] **Test environment available** - E2E test environment is available and configured
- [ ] **Test data available** - Test data is prepared and available
- [ ] **All layers complete** - All implementation layers must be complete for E2E testing
- [ ] **Testing Standards** - Must comply with Testing Standards (to be defined)
- [ ] **ISO/IEC 29119** - Must align with ISO/IEC 29119 (Software Testing) standards for system testing

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing test plan** → Invoke [Test Plan Procedure](./test-plan-procedure.md) first
- **Missing integration test report** → Invoke [Integration Testing Procedure](./integration-testing-procedure.md) first
- **Test environment unavailable** → Set up E2E test environment, configure as per test plan
- **Test data unavailable** → Prepare test data according to test plan requirements
- **Implementation incomplete** → Complete implementation before E2E testing

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from test environment setup through E2E test report approval
- **Procedures to be invoked** - None (this is a test execution procedure)
- **Dependencies between steps** - Environment Setup → Test Data Setup → Primary Flow Tests → Secondary Flow Tests → Error Flow Tests → Acceptance Criteria Validation → Report & Approval
- **Risks & unknowns** - Test environment issues, test data issues, user flow failures, acceptance criteria not met
- **Validation points** - After each user flow testing, after acceptance criteria validation, before report approval

**Plan must be reviewed before execution begins**

**Output:**
- End-to-End Testing Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Setup E2E Test Environment

**Purpose**
- Set up and configure end-to-end test environment
- Ensure complete stack is accessible and configured correctly
- Verify test environment matches test plan requirements

**Inputs**
- **From:** Procedure Required Inputs (test plan document with environment requirements, complete implementation)

**Actions**
- Review E2E test environment requirements from test plan:
  - Required test environments
  - Environment configuration
  - Complete stack configuration (frontend, middleware, backend, database)
  - Network configuration
  - Third-party service configuration (mocks/stubs or sandbox)
- Set up E2E test environment:
  - Provision test environment (if needed)
  - Configure environment variables
  - Configure database (schema, test data setup)
  - Deploy backend services
  - Deploy frontend application
  - Deploy middleware (if applicable)
  - Configure third-party service mocks/stubs or sandbox
  - Configure authentication (if applicable)
- Verify environment connectivity:
  - Test complete stack is accessible
  - Test frontend can access backend (directly or through middleware)
  - Test database is accessible
  - Test third-party services are accessible (or mocks are working)
  - Test authentication is working (if applicable)
- Verify environment configuration:
  - Check environment variables are set correctly
  - Check all services are running
  - Check API endpoints are accessible
  - Check UI is accessible
- Document E2E test environment setup in test execution log

**Decisions / Evaluations**
- **Decision:** Is E2E test environment set up correctly and ready for testing?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, fix environment setup issues

**Outputs**
- E2E test environment set up and configured
- Complete stack verified and accessible
- Environment configuration verified
- E2E test environment ready for testing

**Failure Handling**
- **Failure:** E2E test environment setup fails
  - **Action:** Review environment requirements, fix configuration issues, consult DevOps/Infrastructure team
  - **Retry:** Step 1 after fixing environment issues

---

#### Step 2: Setup E2E Test Data

**Purpose**
- Prepare and load test data according to test plan requirements
- Ensure test data is available for all E2E test cases
- Verify test data is correctly loaded

**Inputs**
- **From:** Procedure Required Inputs (test plan document with test data requirements)
- **From:** Step 1 outputs (E2E test environment set up)

**Actions**
- Review E2E test data requirements from test plan:
  - Test data needed for each user journey
  - Test data volume requirements
  - Test data variety requirements
  - Test user account requirements
- Prepare E2E test data:
  - Create test data according to requirements
  - Load test data into test database
  - Set up test user accounts with appropriate roles/permissions
  - Set up test authentication tokens (if applicable)
  - Set up test third-party service responses (if applicable)
  - Set up test application state
- Verify test data is loaded:
  - Check test data exists in database
  - Check test data is accessible
  - Check test user accounts are accessible
  - Check test data matches requirements
- Document E2E test data setup in test execution log

**Decisions / Evaluations**
- **Decision:** Is E2E test data set up correctly and available for testing?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix test data setup issues

**Outputs**
- E2E test data prepared and loaded
- Test user accounts set up
- Test data verified
- E2E test data ready for testing

**Failure Handling**
- **Failure:** E2E test data setup fails
  - **Action:** Review test data requirements, fix data preparation/loading issues
  - **Retry:** Step 2 after fixing test data issues

---

#### Step 3: Execute Primary User Flow Tests

**Purpose**
- Execute E2E tests for primary user flows (happy paths)
- Verify complete user journeys work end-to-end
- Validate primary functionality

**Inputs**
- **From:** Procedure Required Inputs (test plan with E2E test cases, user journeys, requirements document)
- **From:** Steps 1-2 outputs (E2E test environment and test data ready)

**Actions**
- Review primary user flow test cases from test plan:
  - Primary user journeys
  - Happy path scenarios
  - Main feature functionality
- Execute primary user flow tests:
  - **For each primary user journey:**
    - Start from initial state (user login, page load, etc.)
    - Execute user interactions step-by-step:
      - Navigate to feature
      - Interact with UI elements
      - Submit forms
      - Perform actions
    - Verify expected outcomes at each step:
      - UI updates correctly
      - Data is saved correctly
      - API calls succeed
      - State changes correctly
    - Complete the user journey
    - Verify final state is correct
  - **Test user interactions:**
    - Click interactions
    - Form submissions
    - Navigation
    - Data input
    - Data display
  - **Verify data flow:**
    - Data flows correctly through all layers
    - Data is persisted correctly
    - Data is retrieved correctly
    - Data is displayed correctly
- Verify acceptance criteria:
  - Check each acceptance criterion is met
  - Document acceptance criteria validation
- Document test results:
  - Record test execution results (pass/fail)
  - Document any failures or issues
  - Document acceptance criteria validation results
- Document findings in E2E test report

**Decisions / Evaluations**
- **Decision:** Do all primary user flow tests pass?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, document failures, may need to fix implementation or test cases

**Outputs**
- Primary user flow tests executed
- Test results documented
- Acceptance criteria validated
- User flow issues identified (if any)

**Failure Handling**
- **Failure:** Primary user flow tests fail
  - **Action:** Investigate failures, determine if implementation issue or test issue, fix issues, re-run tests
  - **Retry:** Step 3 after fixing issues

---

#### Step 4: Execute Secondary User Flow Tests

**Purpose**
- Execute E2E tests for secondary user flows (alternative paths)
- Verify alternative user journeys work end-to-end
- Validate alternative functionality

**Inputs**
- **From:** Procedure Required Inputs (test plan with E2E test cases, user journeys)
- **From:** Steps 1-2 outputs (E2E test environment and test data ready)
- **From:** Step 3 outputs (primary flow test results)

**Actions**
- Review secondary user flow test cases from test plan:
  - Secondary user journeys
  - Alternative path scenarios
  - Alternative feature functionality
- Execute secondary user flow tests:
  - **For each secondary user journey:**
    - Start from appropriate state
    - Execute alternative user interactions
    - Verify expected outcomes
    - Complete the alternative journey
    - Verify final state is correct
  - **Test alternative interactions:**
    - Alternative navigation paths
    - Alternative form submissions
    - Alternative actions
    - Alternative data inputs
- Verify acceptance criteria for secondary flows:
  - Check acceptance criteria are met for alternative paths
- Document test results:
  - Record test execution results (pass/fail)
  - Document any failures or issues
- Document findings in E2E test report

**Decisions / Evaluations**
- **Decision:** Do all secondary user flow tests pass?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, document failures, may need to fix implementation or test cases

**Outputs**
- Secondary user flow tests executed
- Test results documented
- Secondary flow issues identified (if any)

**Failure Handling**
- **Failure:** Secondary user flow tests fail
  - **Action:** Investigate failures, determine if implementation issue or test issue, fix issues, re-run tests
  - **Retry:** Step 4 after fixing issues

---

#### Step 5: Execute Error Flow Tests

**Purpose**
- Execute E2E tests for error flows
- Verify error handling works correctly end-to-end
- Validate error recovery

**Inputs**
- **From:** Procedure Required Inputs (test plan with E2E test cases for error flows)
- **From:** Steps 1-2 outputs (E2E test environment and test data ready)

**Actions**
- Review error flow test cases from test plan:
  - Error scenarios
  - Error handling flows
  - Error recovery flows
- Execute error flow tests:
  - **For each error scenario:**
    - Trigger error condition:
      - Invalid input
      - Network error
      - API error
      - Authentication error
      - Authorization error
      - Validation error
    - Verify error handling:
      - Error is detected correctly
      - Error message is displayed correctly
      - Error state is handled correctly
      - User can recover from error
    - Verify error recovery:
      - User can retry after error
      - User can correct input and retry
      - User can navigate away from error
  - **Test error scenarios:**
    - Network failures
    - API errors (4xx, 5xx)
    - Validation errors
    - Authentication/authorization errors
    - Timeout errors
- Verify error handling consistency:
  - Check error messages are user-friendly
  - Check error handling is consistent across flows
  - Check error recovery works correctly
- Document test results:
  - Record test execution results (pass/fail)
  - Document any error handling issues
- Document findings in E2E test report

**Decisions / Evaluations**
- **Decision:** Do all error flow tests pass?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, document error handling issues, may need to fix implementation

**Outputs**
- Error flow tests executed
- Error handling test results documented
- Error handling issues identified (if any)

**Failure Handling**
- **Failure:** Error flow tests fail
  - **Action:** Investigate error handling issues, fix implementation, re-run tests
  - **Retry:** Step 5 after fixing error handling issues

---

#### Step 6: Validate All Acceptance Criteria

**Purpose**
- Validate that all acceptance criteria from requirements are met
- Verify feature meets requirements end-to-end
- Document acceptance criteria validation

**Inputs**
- **From:** Procedure Required Inputs (requirements document with acceptance criteria)
- **From:** Steps 3-5 outputs (all user flow test results)

**Actions**
- Review acceptance criteria from requirements document:
  - List all acceptance criteria
  - Map acceptance criteria to test cases
- Validate each acceptance criterion:
  - **For each acceptance criterion:**
    - Identify test cases that validate the criterion
    - Review test results for those test cases
    - Verify criterion is met based on test results
    - Document validation result
- Verify feature completeness:
  - Check all functional requirements are met
  - Check all acceptance criteria are met
  - Check all user stories are implemented
- Document acceptance criteria validation:
  - Create acceptance criteria validation matrix
  - Document validation results for each criterion
  - Document any criteria not met
- Document findings in E2E test report

**Decisions / Evaluations**
- **Decision:** Are all acceptance criteria met?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, document unmet criteria, may need to fix implementation or update requirements

**Outputs**
- Acceptance criteria validated
- Acceptance criteria validation matrix created
- Unmet criteria identified (if any)
- Acceptance criteria validation documented

**Failure Handling**
- **Failure:** Acceptance criteria not met
  - **Action:** Document unmet criteria, determine if implementation needs fix or requirements need update, coordinate with Product Owner
  - **Retry:** Step 6 after criteria are met (may require returning to implementation)

---

#### Step 7: Create E2E Test Report and Obtain Approval

**Purpose**
- Create comprehensive end-to-end test report
- Document all test results and findings
- Obtain approval for proceeding to acceptance and signoff

**Inputs**
- **From:** All previous steps (complete E2E test results)

**Actions**
- Create E2E test report:
  - **Executive Summary:** Overall test execution status, pass/fail summary
  - **Test Environment:** Environment setup and configuration
  - **Test Data:** Test data setup and verification
  - **Primary User Flow Tests:** Test results, issues, acceptance criteria validation
  - **Secondary User Flow Tests:** Test results, issues
  - **Error Flow Tests:** Test results, error handling issues
  - **Acceptance Criteria Validation:** Validation results, unmet criteria (if any)
  - **Issues and Failures:** List of all issues and failures found
  - **Recommendations:** Next steps, required fixes, retest requirements
- Review E2E test report:
  - Present report to:
    - QA Team/Lead
    - Technical Leads
    - Product Owner (for acceptance criteria validation)
  - Gather feedback
  - Address concerns
- Obtain approval:
  - Secure approval from QA Lead, Technical Leads, and Product Owner
  - Document approval
  - Update Jira ticket with E2E test report

**Decisions / Evaluations**
- **Decision:** Are E2E tests approved and ready for acceptance and signoff?
  - **Go:** If yes, procedure complete, ready for acceptance and signoff
  - **No-Go:** If no, address issues, fix implementation, retest, update report, re-seek approval

**Outputs**
- E2E test report created
- Test results documented
- Acceptance criteria validation documented
- Issues and failures documented
- Approval obtained
- Ready for acceptance and signoff

**Failure Handling**
- **Failure:** E2E tests not approved
  - **Action:** Address issues, fix implementation, retest, update report, re-seek approval
  - **Retry:** Step 7 after issues are resolved and retested

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **End-to-End Test Report** - Comprehensive report documenting:
  - Test execution results for all user flows
  - Acceptance criteria validation results
  - Error handling test results
  - Issues and failures identified
  - Recommendations for fixes and retesting

**State changes:**
- Complete user flows verified end-to-end
- Acceptance criteria validated
- Error handling verified
- User-facing issues identified and documented (if any)
- Ready for acceptance and signoff

**Decisions recorded:**
- E2E test execution decisions
- Acceptance criteria validation decisions
- Error handling decisions
- E2E test approval

**Signals emitted:**
- "End-to-End Testing Complete" - E2E tests executed and approved
- "Ready for Acceptance and Signoff" - Feature validated, ready for acceptance
- "User-Facing Issues Identified" - Issues found, may need to fix before acceptance

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All E2E test cases executed (from test plan)
- [ ] Primary user flows tested and passing
- [ ] Secondary user flows tested and passing
- [ ] Error flows tested and passing
- [ ] Acceptance criteria validated

**Reviews required:**
- [ ] E2E test report reviewed by QA Team/Lead
- [ ] E2E test report reviewed by Technical Leads
- [ ] E2E test report reviewed by Product Owner (for acceptance criteria)
- [ ] Approval obtained from QA Lead, Technical Leads, and Product Owner

**Automated checks:**
- [ ] E2E tests are automated (where possible)
- [ ] Test execution is repeatable
- [ ] Test results are recorded

**Who/what can approve completion:**
- **QA Lead** - Must approve E2E test execution and results
- **Technical Lead** - Must approve technical implementation validation
- **Product Owner** - Must approve acceptance criteria validation

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **E2E Test Report** → Input for [Acceptance & Signoff Procedure](./acceptance-signoff-procedure.md) (validates feature meets requirements)
- **E2E Test Report** → Input for [Implementation Verification Procedure](./implementation-verification-procedure.md) (confirms feature completeness)

**Procedures that depend on this:**
- **[Acceptance & Signoff Procedure](./acceptance-signoff-procedure.md)** - Requires validated feature (E2E test results)
- **[Implementation Verification Procedure](./implementation-verification-procedure.md)** - May reference E2E test results

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] E2E test environment set up and configured
- [ ] E2E test data prepared and loaded
- [ ] All primary user flow tests executed
- [ ] All secondary user flow tests executed
- [ ] All error flow tests executed
- [ ] All acceptance criteria validated
- [ ] E2E test report created
- [ ] Test results documented
- [ ] Acceptance criteria validation documented
- [ ] Issues and failures documented (if any)
- [ ] E2E test report reviewed by QA Team/Lead, Technical Leads, and Product Owner
- [ ] Approval obtained from QA Lead, Technical Leads, and Product Owner
- [ ] Jira ticket updated with E2E test report
- [ ] Ready for acceptance and signoff

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with E2E test report reference
- [ ] **E2E Test Report** - Report location and version
- [ ] **Test Plan Document** - Link to test plan (for test case traceability)
- [ ] **Requirements Document** - Link to requirements (for acceptance criteria traceability)
- [ ] **User Journeys** - Link to user journeys (for user flow traceability)
- [ ] **Integration Test Report** - Link to integration test report

**Audit trail:**
- **Test execution date** - When E2E tests were executed
- **Test execution performed by** - Who executed the tests
- **Test environment** - Which test environment was used
- **Test cases executed** - Number of test cases executed by type
- **Test results** - Pass/fail counts
- **Acceptance criteria validation** - Validation results
- **Issues found** - List of issues found
- **Approval date** - When E2E tests were approved
- **Approved by** - Who approved the E2E tests

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- All E2E tests executed and passing
- All acceptance criteria validated
- Error handling verified
- E2E test report created and approved
- Ready for acceptance and signoff

#### ⚠️ Blocked
- **Reason:** Test environment unavailable, test data unavailable, implementation not ready, test plan incomplete
- **Required action:** Address blockers (set up environment, prepare test data, complete implementation, complete test plan)
- **Who to notify:** Technical leads, QA team, DevOps team
- **Status:** E2E testing paused until blockers resolved

#### ❌ Aborted
- **Reason:** Feature cancelled, implementation significantly incomplete, test plan significantly incomplete
- **Required action:** Document why aborted, what was tested, update Jira ticket
- **Rollback required:** No (testing only, no state to rollback)
- **Lessons learned:** Document why E2E testing was aborted

#### 🔄 Partial E2E Testing
- **Reason:** Some user flows tested, others incomplete or missing
- **Required action:** Document what was tested vs. what's missing, update E2E test report
- **Status:** Partial E2E testing complete, waiting for remaining flows or test cases
- **Next step:** Complete missing flows or test cases, then re-run E2E testing

---

## Usage Notes

### E2E Testing Scope

- E2E Testing focuses on **complete user flows** from a user's perspective
- E2E Testing validates that features work correctly **as a whole**
- E2E Testing is the final validation before acceptance and signoff

### Test Execution Order

- E2E tests should be executed after integration tests pass
- Primary user flows should be tested first
- Secondary and error flows can be tested after primary flows pass
- Acceptance criteria validation happens after all flows are tested

### Acceptance Criteria Validation

- Acceptance criteria validation is critical for E2E testing
- All acceptance criteria must be validated before proceeding to acceptance and signoff
- Unmet acceptance criteria should be documented and addressed

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** QA Team / Technical Lead
