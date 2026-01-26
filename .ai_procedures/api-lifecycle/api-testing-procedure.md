# Procedure: API Testing

### 1. Purpose

**Why this procedure exists**

This procedure systematically tests API implementations to ensure they match their OpenAPI contracts, handle requests/responses correctly, meet security requirements, and perform as expected. It validates API functionality, contract compliance, security, and reliability before APIs are deployed to production.

**What problem it solves**

- APIs deployed without proper testing
- Contract mismatches between implementation and OpenAPI spec
- Security vulnerabilities not caught before deployment
- Performance issues discovered in production
- Inconsistent error handling
- APIs that don't meet acceptance criteria
- Missing or inadequate test coverage
- Integration issues not discovered

**What "success" looks like at the end**

A fully tested API that includes:
- All endpoints tested with valid and invalid inputs
- Contract compliance verified (implementation matches OpenAPI spec)
- Security testing completed (authentication, authorization, input validation)
- Error handling tested and verified
- Performance testing completed (if required)
- Test coverage meets requirements
- Test results documented
- Ready for API Documentation Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- [API Implementation Procedure](./api-implementation-procedure.md) has been completed (API endpoints implemented)
- API implementation is ready for testing
- Need to validate API contract compliance
- Need to verify API security and functionality
- [Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md) invokes this (Phase 4: Quality Assurance)
- [Integration Testing Procedure](../feature-lifecycle/integration-testing-procedure.md) may invoke this for API integration testing

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **API Implementation** - Implemented API endpoints (from [API Implementation Procedure](./api-implementation-procedure.md))
- [ ] **OpenAPI specification** - Complete OpenAPI spec document (from [API Design Procedure](./api-design-procedure.md))
- [ ] **TypeScript types** - Generated types from OpenAPI (from API Implementation Procedure)
- [ ] **Test environment** - Test environment set up and accessible
- [ ] **Test data** - Test data prepared for testing scenarios
- [ ] **Security requirements** - Security testing requirements (from [Threat Model Procedure](../feature-lifecycle/threat-model-procedure.md))
- [ ] **Performance requirements** - Performance testing requirements (if applicable)

**Decisions already made:**
- [ ] **Testing approach** - Unit tests, integration tests, contract tests, E2E tests
- [ ] **Testing framework** - Jest, Mocha, Supertest, etc.
- [ ] **Test environment** - Local, staging, or dedicated test environment
- [ ] **Test coverage requirements** - Minimum coverage percentage required

**Constraints:**
- [ ] **API Security Standards** - Must test against [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **OpenAPI spec compliance** - Tests must verify contract compliance
- [ ] **Test coverage** - Must meet minimum coverage requirements
- [ ] **Test environment** - Must not affect production data or services
- [ ] **Test isolation** - Tests must be isolated and repeatable

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing API implementation** → Invoke [API Implementation Procedure](./api-implementation-procedure.md) first
- **Missing OpenAPI spec** → Obtain OpenAPI spec from API Design Procedure
- **Missing test environment** → Set up test environment, configure test database, test services
- **Missing test data** → Create test data, set up test fixtures

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from test setup through test completion
- **Procedures to be invoked** - [Integration Testing Procedure](../feature-lifecycle/integration-testing-procedure.md) (for integration testing), [Security Review Procedure](../feature-lifecycle/security-review-procedure.md) (for security validation)
- **Dependencies between steps** - Setup → Unit Tests → Contract Tests → Integration Tests → Security Tests → Error Tests → Performance Tests → Documentation
- **Risks & unknowns** - Test environment issues, test data complexity, security testing complexity, performance requirements unclear
- **Validation points** - After unit tests, after contract tests, after security tests, before completion

**Plan must be reviewed before execution begins**

**Output:**
- API Testing Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Setup Test Environment and Framework

**Purpose**
- Set up testing infrastructure
- Configure test framework
- Prepare test environment
- Set up test data

**Inputs**
- **From:** Procedure Required Inputs (test environment, test data)

**Actions**
- Set up test environment:
  - Configure test database (separate from production)
  - Set up test services and dependencies
  - Configure test API server
  - Set up test authentication/authorization
  - Configure test environment variables
- Set up testing framework:
  - Install testing framework (Jest, Mocha, etc.)
  - Install API testing library (Supertest, axios, etc.)
  - Install contract testing tools (if using)
  - Configure test runner
  - Set up test utilities and helpers
- Prepare test data:
  - Create test fixtures
  - Set up test database seed data
  - Create test users and authentication tokens
  - Create test request/response examples
- Set up test isolation:
  - Configure test database cleanup/reset
  - Set up test transaction rollback (if applicable)
  - Ensure tests don't affect each other
- Document test setup:
  - Document test environment configuration
  - Document test data setup
  - Document how to run tests

**Decisions / Evaluations**
- **Decision:** Is test environment set up correctly?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, fix test environment setup
- **Decision:** Is test framework configured correctly?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, fix framework configuration

**Outputs**
- Test environment set up
- Test framework configured
- Test data prepared
- Test utilities ready

**Failure Handling**
- **Failure:** Test environment setup fails
  - **Action:** Troubleshoot environment issues, consult DevOps team
  - **Retry:** Step 1 after fixing environment
- **Failure:** Test framework configuration issues
  - **Action:** Review framework documentation, fix configuration
  - **Retry:** Step 1 after fixing configuration

---

#### Step 2: Write Unit Tests for API Endpoints

**Purpose**
- Test individual API endpoints in isolation
- Test request/response handling
- Test business logic
- Test validation logic

**Inputs**
- **From:** Step 1 outputs (test environment ready), Procedure Required Inputs (API implementation, OpenAPI spec)

**Actions**
- For each API endpoint, write unit tests:
  - **Happy path tests:**
    - Test successful requests with valid inputs
    - Verify correct response status codes
    - Verify response body matches OpenAPI schema
    - Verify response headers are correct
  - **Validation tests:**
    - Test invalid request parameters
    - Test missing required fields
    - Test invalid data types
    - Test invalid formats (email, date, UUID, etc.)
    - Test constraint violations (min, max, length, pattern)
    - Verify validation error responses match OpenAPI error schema
  - **Business logic tests:**
    - Test business rule validation
    - Test data transformations
    - Test conditional logic
    - Test edge cases
- Mock dependencies:
  - Mock database calls
  - Mock external service calls
  - Mock authentication/authorization
  - Mock file operations (if applicable)
- Verify test coverage:
  - Ensure all endpoints have tests
  - Ensure all request/response paths are tested
  - Ensure validation paths are tested
  - Check test coverage percentage
- Run unit tests:
  - Execute all unit tests
  - Verify all tests pass
  - Fix any failing tests

**Decisions / Evaluations**
- **Decision:** Are all endpoints unit tested?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, write missing unit tests
- **Decision:** Do all unit tests pass?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix failing tests

**Outputs**
- Unit tests written for all endpoints
- Unit tests passing
- Test coverage verified

**Failure Handling**
- **Failure:** Unit tests fail
  - **Action:** Debug failing tests, fix implementation issues, update tests
  - **Retry:** Step 2 after fixing issues
- **Failure:** Test coverage insufficient
  - **Action:** Write additional tests to increase coverage
  - **Retry:** Step 2 after adding tests

---

#### Step 3: Write Contract Tests

**Purpose**
- Verify API implementation matches OpenAPI specification
- Ensure contract compliance
- Catch contract drift early

**Inputs**
- **From:** Step 2 outputs (unit tests passing), Procedure Required Inputs (OpenAPI spec, API implementation)

**Actions**
- Set up contract testing:
  - Use contract testing tools (Dredd, Pact, Spectral, etc.)
  - Or write custom contract tests
  - Configure contract testing against OpenAPI spec
- Write contract tests:
  - **Request contract tests:**
    - Verify request parameters match OpenAPI spec
    - Verify request body schemas match spec
    - Verify request headers match spec
  - **Response contract tests:**
    - Verify response schemas match OpenAPI spec
    - Verify response status codes match spec
    - Verify response headers match spec
  - **Error contract tests:**
    - Verify error responses match OpenAPI error schemas
    - Verify error status codes match spec
  - **Schema contract tests:**
    - Verify all schemas in responses match OpenAPI schemas
    - Verify nested objects and arrays match spec
    - Verify enum values match spec
- Run contract tests:
  - Execute contract tests against running API
  - Verify all contract tests pass
  - Document any contract violations
- Fix contract violations:
  - Update implementation to match spec
  - Or update OpenAPI spec if implementation is correct (requires approval)

**Decisions / Evaluations**
- **Decision:** Do contract tests pass?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix contract violations
- **Decision:** Does implementation match OpenAPI spec?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix implementation or update spec

**Outputs**
- Contract tests written
- Contract compliance verified
- Implementation matches OpenAPI spec

**Failure Handling**
- **Failure:** Contract violations found
  - **Action:** Fix implementation to match spec, or update spec if implementation is correct
  - **Retry:** Step 3 after fixing violations
- **Failure:** Contract testing tools fail
  - **Action:** Review tool configuration, fix issues, or use manual contract verification
  - **Retry:** Step 3 after fixing tool issues

---

#### Step 4: Write Integration Tests

**Purpose**
- Test API integration with dependencies
- Test database interactions
- Test external service integrations
- Test end-to-end API flows

**Inputs**
- **From:** Step 3 outputs (contract tests passing), Procedure Required Inputs (API implementation)

**Actions**
- Write integration tests:
  - **Database integration tests:**
    - Test API endpoints with real database
    - Test CRUD operations
    - Test data persistence
    - Test database transactions
    - Test data relationships
  - **External service integration tests:**
    - Test API integration with external services
    - Test third-party API calls
    - Test service-to-service communication
    - Mock external services if needed
  - **Authentication/Authorization integration tests:**
    - Test API with real authentication
    - Test JWT validation
    - Test authorization checks
    - Test role-based access control
  - **End-to-end API flow tests:**
    - Test complete API workflows
    - Test multi-step API operations
    - Test API state management
- Set up integration test environment:
  - Use test database (not production)
  - Set up test external services (or mocks)
  - Configure test authentication
- Run integration tests:
  - Execute integration tests
  - Verify all tests pass
  - Fix any failing tests
- Clean up after tests:
  - Reset test database
  - Clean up test data
  - Ensure test isolation

**Decisions / Evaluations**
- **Decision:** Are integration tests comprehensive?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, add missing integration tests
- **Decision:** Do all integration tests pass?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, fix failing tests

**Outputs**
- Integration tests written
- Integration tests passing
- API integration verified

**Failure Handling**
- **Failure:** Integration tests fail
  - **Action:** Debug integration issues, fix implementation, update tests
  - **Retry:** Step 4 after fixing issues
- **Failure:** Test environment issues
  - **Action:** Fix test environment, ensure dependencies are available
  - **Retry:** Step 4 after fixing environment

---

#### Step 5: Write Security Tests

**Purpose**
- Test API security controls
- Verify authentication and authorization
- Test input validation and sanitization
- Identify security vulnerabilities

**Inputs**
- **From:** Step 4 outputs (integration tests passing), Procedure Required Inputs (security requirements, API Security Standards)

**Actions**
- Write security tests:
  - **Authentication tests:**
    - Test missing authentication tokens
    - Test invalid authentication tokens
    - Test expired tokens
    - Test malformed tokens
    - Verify 401 Unauthorized responses
  - **Authorization tests:**
    - Test unauthorized access attempts
    - Test role-based access control
    - Test resource-based authorization
    - Verify 403 Forbidden responses
  - **Input validation security tests:**
    - Test SQL injection attempts
    - Test XSS (Cross-Site Scripting) attempts
    - Test command injection attempts
    - Test path traversal attempts
    - Test buffer overflow attempts
    - Verify input sanitization works
  - **Rate limiting tests (if applicable):**
    - Test rate limit enforcement
    - Test rate limit headers
    - Test rate limit error responses
  - **Security header tests:**
    - Test security headers are set
    - Test CORS configuration
    - Test content security policy
- Reference [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for security test requirements
- Run security tests:
  - Execute security tests
  - Verify all security controls work
  - Document any security issues found
- Fix security issues:
  - Address any security vulnerabilities found
  - Update security controls if needed
  - Re-test security fixes

**Decisions / Evaluations**
- **Decision:** Are all security requirements tested?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, add missing security tests
- **Decision:** Do all security tests pass?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, fix security issues

**Outputs**
- Security tests written
- Security tests passing
- Security controls verified
- Security vulnerabilities addressed

**Failure Handling**
- **Failure:** Security vulnerabilities found
  - **Action:** Fix security issues immediately, update security controls
  - **Retry:** Step 5 after fixing security issues
- **Failure:** Security tests fail
  - **Action:** Review security implementation, fix security controls
  - **Retry:** Step 5 after fixing security

---

#### Step 6: Write Error Handling Tests

**Purpose**
- Test error handling and error responses
- Verify error responses match OpenAPI error schemas
- Test error scenarios and edge cases

**Inputs**
- **From:** Step 5 outputs (security tests passing), Procedure Required Inputs (OpenAPI spec, API implementation)

**Actions**
- Write error handling tests:
  - **Validation error tests:**
    - Test all validation error scenarios
    - Verify error responses match OpenAPI validation error schema
    - Verify error status codes (400 Bad Request)
    - Verify error messages and codes
  - **Authentication error tests:**
    - Test authentication failure scenarios
    - Verify error responses match OpenAPI auth error schema
    - Verify error status codes (401 Unauthorized)
  - **Authorization error tests:**
    - Test authorization failure scenarios
    - Verify error responses match OpenAPI authorization error schema
    - Verify error status codes (403 Forbidden)
  - **Not found error tests:**
    - Test resource not found scenarios
    - Verify error responses match OpenAPI not found error schema
    - Verify error status codes (404 Not Found)
  - **Conflict error tests:**
    - Test resource conflict scenarios
    - Verify error responses match OpenAPI conflict error schema
    - Verify error status codes (409 Conflict)
  - **Server error tests:**
    - Test unexpected server error scenarios
    - Verify error responses don't expose internal details
    - Verify error status codes (500 Internal Server Error)
    - Verify error logging works
- Test error response format:
  - Verify error response structure matches OpenAPI spec
  - Verify error codes are included
  - Verify error messages are appropriate
  - Verify error details are included (if applicable)
- Run error handling tests:
  - Execute error handling tests
  - Verify all error scenarios are handled correctly
  - Fix any error handling issues

**Decisions / Evaluations**
- **Decision:** Are all error scenarios tested?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, add missing error tests
- **Decision:** Do error responses match OpenAPI spec?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, fix error responses to match spec

**Outputs**
- Error handling tests written
- Error handling tests passing
- Error responses verified

**Failure Handling**
- **Failure:** Error handling tests fail
  - **Action:** Fix error handling implementation, update error responses
  - **Retry:** Step 6 after fixing error handling
- **Failure:** Error responses don't match spec
  - **Action:** Update error responses to match OpenAPI error schemas
  - **Retry:** Step 6 after fixing error responses

---

#### Step 7: Write Performance Tests (if required)

**Purpose**
- Test API performance under load
- Verify performance requirements are met
- Identify performance bottlenecks

**Inputs**
- **From:** Step 6 outputs (error handling tests passing), Procedure Required Inputs (performance requirements)

**Actions**
- Determine if performance testing is required:
  - Review performance requirements
  - Determine if performance testing is needed
  - If not required, skip to Step 8
- Write performance tests:
  - **Load tests:**
    - Test API under expected load
    - Measure response times
    - Measure throughput
    - Verify performance meets requirements
  - **Stress tests:**
    - Test API under high load
    - Identify breaking points
    - Test system recovery
  - **Endurance tests:**
    - Test API over extended period
    - Check for memory leaks
    - Check for resource exhaustion
- Set up performance testing:
  - Use performance testing tools (k6, Artillery, JMeter, etc.)
  - Configure load scenarios
  - Set up performance monitoring
- Run performance tests:
  - Execute performance tests
  - Collect performance metrics
  - Analyze performance results
- Fix performance issues (if found):
  - Optimize slow endpoints
  - Fix performance bottlenecks
  - Re-test performance improvements

**Decisions / Evaluations**
- **Decision:** Are performance requirements met?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, fix performance issues, re-test
- **Decision:** Is performance testing complete?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, complete performance testing

**Outputs**
- Performance tests written (if required)
- Performance requirements verified (if required)
- Performance issues addressed (if found)

**Failure Handling**
- **Failure:** Performance requirements not met
  - **Action:** Optimize implementation, fix performance bottlenecks
  - **Retry:** Step 7 after optimizing performance
- **Failure:** Performance testing tools fail
  - **Action:** Fix tool configuration, or use alternative tools
  - **Retry:** Step 7 after fixing tools

---

#### Step 8: Document Test Results and Complete Testing

**Purpose**
- Document all test results
- Verify test coverage meets requirements
- Prepare test summary
- Signal readiness for next phase

**Inputs**
- **From:** All previous step outputs (all tests passing)

**Actions**
- Review test coverage:
  - Calculate test coverage percentage
  - Verify coverage meets requirements
  - Identify any gaps in coverage
- Document test results:
  - Create test results summary
  - Document test coverage metrics
  - Document test execution results
  - Document any issues found and fixed
- Create test report:
  - **Test Summary:**
    - Total tests written
    - Tests passing
    - Tests failing (if any)
    - Test coverage percentage
  - **Test Results by Category:**
    - Unit test results
    - Contract test results
    - Integration test results
    - Security test results
    - Error handling test results
    - Performance test results (if applicable)
  - **Issues Found:**
    - List of issues found during testing
    - Status of each issue (fixed, deferred, etc.)
  - **Test Coverage:**
    - Coverage by endpoint
    - Coverage by test type
    - Overall coverage percentage
- Verify all tests pass:
  - Run full test suite
  - Verify all tests pass
  - Fix any failing tests
- Signal readiness:
  - Mark API testing as complete
  - Prepare for [API Documentation Procedure](./api-documentation-procedure.md)
  - Update Jira ticket with test results

**Decisions / Evaluations**
- **Decision:** Does test coverage meet requirements?
  - **Go:** If yes, proceed to completion
  - **No-Go:** If no, add tests to increase coverage
- **Decision:** Do all tests pass?
  - **Go:** If yes, testing complete
  - **No-Go:** If no, fix failing tests

**Outputs**
- Test results documented
- Test coverage verified
- Test report created
- API testing complete
- Ready for API Documentation Procedure

**Failure Handling**
- **Failure:** Test coverage insufficient
  - **Action:** Write additional tests to increase coverage
  - **Retry:** Step 8 after adding tests
- **Failure:** Tests still failing
  - **Action:** Fix implementation issues, update tests, re-run tests
  - **Retry:** Step 8 after fixing issues

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Test Suite** - Complete test suite for API
  - Unit tests
  - Contract tests
  - Integration tests
  - Security tests
  - Error handling tests
  - Performance tests (if required)
- **Test Results Report** - Comprehensive test results documentation
  - Test summary
  - Test coverage metrics
  - Issues found and fixed
  - Test execution results
- **Test Documentation** - Documentation of test approach and results

**State changes:**
- API is tested and verified
- Test coverage meets requirements
- All tests passing

**Decisions recorded:**
- Test approach decisions
- Test coverage decisions
- Issues found and resolution decisions
- Performance test results (if applicable)

**Signals emitted:**
- "API Testing Complete" - API is tested and ready for documentation
- "Ready for API Documentation" - Ready for [API Documentation Procedure](./api-documentation-procedure.md)
- "Test Coverage Met" - Test coverage requirements satisfied

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All API endpoints have unit tests
- [ ] Contract tests verify OpenAPI spec compliance
- [ ] Integration tests verify API integration
- [ ] Security tests verify security controls
- [ ] Error handling tests verify error responses
- [ ] Performance tests completed (if required)
- [ ] Test coverage meets minimum requirements
- [ ] All tests pass

**Reviews required:**
- [ ] Test results review by QA team
- [ ] Security test results review by security team
- [ ] Test coverage review by tech lead

**Automated checks:**
- [ ] Test execution (all tests pass)
- [ ] Test coverage calculation (meets requirements)
- [ ] Contract testing (if tools available)

**Who/what can approve completion:**
- **QA Team Lead** - Must review and approve test results
- **Security Team** - Must review security test results
- **Tech Lead** - Must verify test coverage and approve completion

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Test Results** → Input for [API Documentation Procedure](./api-documentation-procedure.md) (includes test results in documentation)
- **Tested API** → Input for [Integration Testing Procedure](../feature-lifecycle/integration-testing-procedure.md) (tests API integration)
- **Tested API** → Input for [End-to-End Testing Procedure](../feature-lifecycle/end-to-end-testing-procedure.md) (tests API in E2E flows)
- **Test Results** → Input for [Security Review Procedure](../feature-lifecycle/security-review-procedure.md) (security test results)

**Procedures that depend on this:**
- **API Documentation Procedure** - Documents tested API
- **Integration Testing Procedure** - Tests API integration with other services
- **End-to-End Testing Procedure** - Tests API in complete user flows

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Test environment set up and configured
- [ ] Unit tests written for all API endpoints
- [ ] Contract tests verify OpenAPI spec compliance
- [ ] Integration tests written and passing
- [ ] Security tests written and passing
- [ ] Error handling tests written and passing
- [ ] Performance tests completed (if required)
- [ ] Test coverage meets minimum requirements
- [ ] All tests pass
- [ ] Test results documented
- [ ] Test report created
- [ ] QA team review completed
- [ ] Security team review completed (if applicable)
- [ ] Ready for API Documentation Procedure
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with test results reference
- [ ] **Test Results Report** - Link to test results document
- [ ] **Test Suite** - Link to test code repository
- [ ] **OpenAPI Specification** - Link to OpenAPI spec that was tested
- [ ] **API Implementation** - Link to implementation that was tested

**Audit trail:**
- **Testing date** - When API testing was performed
- **Tests written** - Count and types of tests written
- **Test coverage** - Coverage percentage and metrics
- **Issues found** - List of issues found and their status
- **Test execution results** - Results of test execution
- **Review dates** - When QA and security reviews were completed
- **Approval stakeholders** - Who approved test completion

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- All tests written and passing
- Test coverage meets requirements
- Test results documented
- Ready for API Documentation Procedure

#### ⚠️ Blocked
- **Reason:** Test environment issues, test data unavailable, security testing blocked, performance requirements unclear
- **Required action:** Address blocker (fix environment, prepare test data, clarify security, clarify performance)
- **Who to notify:** QA team lead, DevOps team, security team
- **Status:** Testing paused until blocker resolved

#### ❌ Aborted
- **Reason:** API implementation cannot be tested, test environment cannot be set up, security requirements cannot be tested
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no deployment)
- **Lessons learned:** Document why testing couldn't be completed
- **Next step:** May need to fix API implementation or test environment

#### 🔄 Partial Testing
- **Reason:** Some tests written but others deferred, some test types deferred to later phase
- **Required action:** Document what was tested vs. deferred, update test plan
- **Status:** Core tests complete, deferred tests in backlog
- **Next step:** Proceed with documented tests, deferred tests in future work

---

## Usage Notes

### Integration with API Implementation

- API Testing Procedure depends on API Implementation Procedure outputs
- Tests verify that implementation matches OpenAPI spec
- Tests should be written alongside implementation (TDD approach)

### Integration with Integration Testing

- API Testing focuses on API contract and functionality
- Integration Testing focuses on API integration with other services
- Both procedures complement each other

### Test Coverage

- Aim for high test coverage (80%+ minimum)
- Focus on critical paths and edge cases
- Don't sacrifice quality for coverage percentage

### Security Testing

- Security testing is critical and must not be skipped
- Must test against [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- Security vulnerabilities must be fixed before proceeding

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** QA Team / Backend Team
