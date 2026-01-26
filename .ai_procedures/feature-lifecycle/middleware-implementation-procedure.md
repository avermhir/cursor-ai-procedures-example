# Procedure: Middleware Implementation

### 1. Purpose

**Why this procedure exists**

This procedure enables systematic implementation of middleware layer features for web applications. Middleware serves as an intermediary layer between frontend and backend, handling request/response processing, API aggregation, authentication, rate limiting, caching, and other cross-cutting concerns.

**What problem it solves**

- Inconsistent request/response processing
- Missing API aggregation and composition
- Lack of centralized authentication/authorization
- Missing rate limiting and throttling
- Inadequate request routing and load balancing
- Missing request/response transformation
- Lack of caching strategies
- Missing request logging and monitoring at middleware layer

**What "success" looks like at the end**

A fully implemented middleware layer that:
- Handles request/response processing correctly
- Aggregates and composes APIs as needed
- Implements authentication and authorization
- Provides rate limiting and throttling
- Routes requests correctly
- Transforms requests/responses as needed
- Implements caching strategies
- Has comprehensive logging and monitoring
- Is ready for code review and deployment

---

### 2. Trigger

**What causes this procedure to be invoked**

- Middleware implementation phase of feature development begins
- API contracts are defined (from API Contract Procedure)
- Middleware requirements are identified (API gateway, BFF, request processing)
- Architecture decisions include middleware layer (from Architecture Review Procedure)
- Ready to begin coding middleware services

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **API contracts** - Backend API definitions, request/response schemas (from [API Contract Procedure](./api-contract-procedure.md))
- [ ] **Middleware requirements** - Requirements for middleware layer (API aggregation, routing, transformation)
- [ ] **Feature requirements document** - Functional requirements that affect middleware (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Architecture decisions** - ADRs, architectural patterns, middleware patterns (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Authentication/Authorization requirements** - AuthN/AuthZ requirements for middleware (from [AuthN/AuthZ Procedure](./authn-authz-procedure.md), if applicable)
- [ ] **Performance requirements** - Rate limiting, caching, throttling requirements
- [ ] **Security requirements** - Threat model, security constraints (from [Threat Model Procedure](./threat-model-procedure.md))

**Decisions already made:**
- [ ] **Middleware technology** - API Gateway (Kong, AWS API Gateway), BFF framework, or custom middleware
- [ ] **Middleware pattern** - API Gateway, BFF (Backend for Frontend), or request/response middleware
- [ ] **Routing approach** - How requests are routed to backend services
- [ ] **Caching strategy** - What to cache and caching mechanism
- [ ] **Rate limiting approach** - Rate limiting algorithm and limits

**Constraints:**
- [ ] **Performance requirements** - Response time limits, throughput requirements
- [ ] **Scalability requirements** - Expected load, concurrency requirements
- [ ] **Security requirements** - Request validation, authentication, authorization
- [ ] **Availability requirements** - Uptime requirements, failover strategies
- [ ] **API Security Standards** - Must comply with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing API contracts** → Invoke [API Contract Procedure](./api-contract-procedure.md) first
- **Missing middleware requirements** → Define middleware requirements with architecture team
- **Missing architecture decisions** → Invoke [Architecture Review Procedure](./architecture-review-procedure.md) first
- **Missing feature requirements** → Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md) first
- **Unclear middleware pattern** → Review architecture, decide on middleware pattern

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 13 ordered steps from setup through code review preparation
- **Procedures to be invoked** - PR Lifecycle (for code review), [Test Plan Procedure](./test-plan-procedure.md)
- **Dependencies between steps** - Setup → Routing → Authentication → Transformation → Caching → Testing
- **Risks & unknowns** - API contract changes, performance bottlenecks, scalability issues, security vulnerabilities
- **Validation points** - After routing setup, after authentication, after transformation, after testing

**Plan must be reviewed before execution begins**

**Output:**
- Execution Plan (documented and approved)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Setup & Preparation

**Purpose**
- Prepare development environment
- Review and understand all inputs
- Set up middleware project structure

**Inputs**
- **From:** Procedure Required Inputs (API contracts, middleware requirements)
- Development environment setup
- Middleware framework/tool

**Actions**
- Review API contracts for backend services
- Review middleware requirements
- Review architecture decisions and patterns
- Set up or verify development environment
- Set up middleware framework (API Gateway, BFF framework, etc.)
- Create feature branch if not already created
- Review project structure and conventions
- Document any questions or clarifications needed

**Decisions / Evaluations**
- **Decision:** Are all inputs clear and complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, request missing information or clarifications

**Outputs**
- Understanding of all requirements
- Development environment ready
- Middleware framework set up
- Feature branch created
- Questions/clarifications documented (if any)

**Failure Handling**
- **Failure:** Development environment setup fails
  - **Action:** Troubleshoot setup issues, consult documentation
  - **Escalate:** If persistent, consult DevOps or infrastructure team
- **Failure:** Inputs are unclear or incomplete
  - **Action:** Document questions, request clarifications from stakeholders
  - **No-Go:** Wait for clarifications before proceeding

---

#### Step 2: Request Routing Configuration

**Purpose**
- Configure request routing rules
- Set up route definitions
- Map routes to backend services

**Inputs**
- **From:** Step 1 outputs (understanding of requirements)
- **From:** Procedure Required Inputs (API contracts, routing requirements)
- Middleware framework routing capabilities

**Actions**
- Define route patterns and paths
- Configure route matching rules
- Map routes to backend service endpoints
- Set up route priorities
- Configure route parameters and path variables
- Implement route-based load balancing if needed
- Test route matching and routing
- Document routing configuration

**Decisions / Evaluations**
- **Decision:** Does routing work correctly?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix routing configuration

**Outputs**
- Routing configuration implemented
- Routes mapped to backend services
- Route matching working correctly
- Routing documentation

**Failure Handling**
- **Failure:** Routes not matching correctly
  - **Action:** Review route patterns, fix routing rules
  - **Retry:** Step 2 with corrected routing
- **Failure:** Backend services not reachable
  - **Action:** Check backend service URLs, network connectivity
  - **Escalate:** If backend issue, coordinate with backend team

---

#### Step 3: Authentication & Authorization Middleware

**Purpose**
- Implement authentication middleware
- Implement authorization checks
- Secure routes

**Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for authentication and authorization requirements

**Inputs**
- **From:** Procedure Required Inputs (AuthN/AuthZ requirements)
- **From:** Step 2 outputs (routing configuration)
- Authentication framework/tokens

**Actions**
- Implement authentication middleware
- Validate authentication tokens (JWT, OAuth, etc.)
- Extract user context from tokens
- Implement authorization middleware
- Check user permissions/roles
- Handle authentication errors
- Handle authorization failures
- Add user context to requests
- Test authentication flows
- Test authorization rules

**Decisions / Evaluations**
- **Decision:** Is authentication/authorization working correctly?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix authentication/authorization issues

**Outputs**
- Authentication middleware implemented
- Authorization middleware implemented
- Protected routes secured
- User context available in requests

**Failure Handling**
- **Failure:** Authentication not working
  - **Action:** Check token validation, authentication service, credentials
  - **Retry:** Step 3 after fixing authentication
- **Failure:** Authorization rules not enforced
  - **Action:** Review authorization requirements, fix authorization logic
  - **Retry:** Step 3 with corrected authorization

---

#### Step 4: Request Transformation

**Purpose**
- Transform incoming requests
- Modify request headers, body, query parameters
- Prepare requests for backend services

**Inputs**
- **From:** Step 2 outputs (routing configuration)
- **From:** Procedure Required Inputs (API contracts, transformation requirements)
- Request transformation requirements

**Actions**
- Implement request transformation logic
- Transform request headers (add, remove, modify)
- Transform request body (format conversion, field mapping)
- Transform query parameters
- Add default values or computed fields
- Validate transformed requests
- Log transformation operations
- Test request transformations

**Decisions / Evaluations**
- **Decision:** Are request transformations working correctly?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, fix transformation logic

**Outputs**
- Request transformation implemented
- Requests transformed correctly
- Transformation logic tested

**Failure Handling**
- **Failure:** Request transformation fails
  - **Action:** Review transformation logic, check input/output formats
  - **Retry:** Step 4 with corrected transformation

---

#### Step 5: API Aggregation & Composition

**Purpose**
- Aggregate multiple API calls
- Compose responses from multiple services
- Handle parallel and sequential API calls

**Inputs**
- **From:** Step 4 outputs (request transformation)
- **From:** Procedure Required Inputs (API contracts, aggregation requirements)
- Backend service endpoints

**Actions**
- Identify APIs that need aggregation
- Implement API aggregation logic
- Make parallel API calls where possible
- Make sequential API calls where dependencies exist
- Combine responses from multiple services
- Handle partial failures in aggregation
- Implement timeout handling for aggregated calls
- Cache aggregated responses if appropriate
- Test API aggregation scenarios

**Decisions / Evaluations**
- **Decision:** Is API aggregation working correctly?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, fix aggregation logic
  - **Skip:** If no API aggregation needed, proceed to Step 6

**Outputs**
- API aggregation implemented
- Multiple APIs aggregated correctly
- Response composition working
- Error handling for aggregation

**Failure Handling**
- **Failure:** API aggregation fails or times out
  - **Action:** Check backend service availability, review timeout settings, optimize aggregation logic
  - **Retry:** Step 5 after fixing aggregation issues
- **Failure:** Backend services return errors
  - **Action:** Check backend service status, verify API contracts
  - **Escalate:** If backend issue, coordinate with backend team

---

#### Step 6: Response Transformation

**Purpose**
- Transform backend responses
- Modify response format, structure, fields
- Prepare responses for frontend

**Inputs**
- **From:** Step 5 outputs (API aggregation) or Step 4 outputs (if no aggregation)
- **From:** Procedure Required Inputs (API contracts, transformation requirements)
- Response transformation requirements

**Actions**
- Implement response transformation logic
- Transform response structure
- Map/rename response fields
- Filter response data
- Add computed fields
- Format response data (dates, numbers, etc.)
- Handle nested data transformation
- Validate transformed responses
- Log transformation operations
- Test response transformations

**Decisions / Evaluations**
- **Decision:** Are response transformations working correctly?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, fix transformation logic

**Outputs**
- Response transformation implemented
- Responses transformed correctly
- Transformation logic tested

**Failure Handling**
- **Failure:** Response transformation fails
  - **Action:** Review transformation logic, check response formats
  - **Retry:** Step 6 with corrected transformation

---

#### Step 7: Rate Limiting & Throttling

**Purpose**
- Implement rate limiting
- Implement request throttling
- Protect backend services from overload

**Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for rate limiting requirements

**Inputs**
- **From:** Procedure Required Inputs (rate limiting requirements)
- **From:** Step 3 outputs (authentication - for user-based rate limiting)
- Rate limiting library or framework

**Actions**
- Review rate limiting requirements
- Implement rate limiting middleware
- Configure rate limits (per user, per IP, global)
- Implement throttling logic
- Handle rate limit exceeded responses
- Add rate limit headers to responses
- Log rate limit violations
- Test rate limiting scenarios
- Test throttling behavior

**Decisions / Evaluations**
- **Decision:** Is rate limiting working correctly?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, fix rate limiting logic

**Outputs**
- Rate limiting implemented
- Throttling implemented
- Rate limit responses handled
- Rate limiting tested

**Failure Handling**
- **Failure:** Rate limiting not working
  - **Action:** Check rate limiting configuration, test rate limit logic
  - **Retry:** Step 7 with corrected rate limiting

---

#### Step 8: Caching Implementation

**Purpose**
- Implement response caching
- Cache frequently accessed data
- Reduce load on backend services

**Inputs**
- **From:** Step 6 outputs (response transformation)
- **From:** Procedure Required Inputs (caching requirements)
- Caching mechanism (Redis, in-memory, etc.)

**Actions**
- Review caching requirements
- Identify cacheable endpoints and responses
- Implement caching middleware
- Configure cache keys
- Set cache TTL (time-to-live)
- Implement cache invalidation
- Handle cache misses
- Add cache headers to responses
- Test caching behavior
- Test cache invalidation

**Decisions / Evaluations**
- **Decision:** Is caching working correctly?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, fix caching logic
  - **Skip:** If no caching needed, proceed to Step 9

**Outputs**
- Caching implemented
- Cache keys and TTL configured
- Cache invalidation working
- Caching tested

**Failure Handling**
- **Failure:** Caching not working
  - **Action:** Check cache configuration, verify cache service connectivity
  - **Retry:** Step 8 with corrected caching

---

#### Step 9: Error Handling & Response Formatting

**Purpose**
- Implement comprehensive error handling
- Standardize error responses
- Handle all error scenarios

**Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for secure error handling requirements

**Inputs**
- **From:** All previous steps (complete implementation)
- Error handling patterns
- API contract error response format

**Actions**
- Implement global error handler
- Define error response format (matches API contract)
- Handle different error types (authentication, authorization, validation, backend errors, system errors)
- Transform backend errors to standard format
- Implement error logging
- Return appropriate HTTP status codes
- Provide user-friendly error messages
- Handle edge cases and unexpected errors
- Implement error monitoring integration
- Test error scenarios

**Decisions / Evaluations**
- **Decision:** Is error handling comprehensive?
  - **Go:** If yes, proceed to Step 10
  - **No-Go:** If no, add missing error handling

**Outputs**
- Error handling implemented
- Error responses standardized
- Error logging implemented
- Error monitoring integrated

**Failure Handling**
- **Failure:** Error handling incomplete
  - **Action:** Review error scenarios, add missing error handling
  - **Retry:** Step 9 with complete error handling

---

#### Step 10: Logging & Observability

**Purpose**
- Implement comprehensive logging
- Add metrics and monitoring
- Enable observability for middleware layer

**Inputs**
- **From:** All previous steps (complete implementation)
- Logging framework
- Observability tools

**Actions**
- Add structured logging throughout middleware
- Log all requests and responses
- Log routing decisions
- Log authentication/authorization events
- Log transformation operations
- Log rate limiting events
- Log caching operations
- Add performance metrics (latency, throughput)
- Implement health check endpoints
- Add distributed tracing if applicable
- Configure log levels appropriately
- Ensure sensitive data is not logged
- Integrate with monitoring/observability platform
- Add alerting for critical errors

**Decisions / Evaluations**
- **Decision:** Is logging and observability comprehensive?
  - **Go:** If yes, proceed to Step 11
  - **No-Go:** If no, add missing logging/observability

**Outputs**
- Logging implemented
- Metrics added
- Health checks implemented
- Observability integrated

**Failure Handling**
- **Failure:** Logging not working or incomplete
  - **Action:** Review logging configuration, add missing logs
  - **Retry:** Step 10 with complete logging

---

#### Step 11: Testing & Code Review Preparation

**Purpose**
- Write tests for middleware
- Verify middleware works correctly
- Prepare code for review

**Inputs**
- **From:** All previous steps (complete implementation)
- Testing framework
- Test Plan Procedure outputs (if available)

**Actions**
- Write unit tests for middleware functions
- Write integration tests for middleware flows
- Test routing scenarios
- Test authentication and authorization
- Test request/response transformations
- Test API aggregation
- Test rate limiting
- Test caching
- Test error handling
- Run all tests and ensure they pass
- Check test coverage meets requirements
- Run linter and fix all issues
- Run formatter and ensure consistent formatting
- Review code for best practices
- Remove console.logs and debug code
- Add code comments where needed
- Update documentation
- Stage all changes for commit
- Create commit with descriptive message

**Decisions / Evaluations**
- **Decision:** Do all tests pass and code quality meet standards?
  - **Go:** If yes, proceed to Step 12
  - **No-Go:** If no, fix failing tests or code quality issues

**Outputs**
- Tests written and passing
- Test coverage meets requirements
- Code quality checks passed

**Failure Handling**
- **Failure:** Tests fail
  - **Action:** Debug failing tests, fix implementation or test code
  - **Retry:** Step 11 after fixing tests
- **Failure:** Code quality issues
  - **Action:** Fix linter errors, improve code quality
  - **Retry:** Step 11 after fixing issues

---

#### Step 12: Architecture Compliance Validation

**Purpose**
- Validate that implementation follows architecture decisions
- Verify middleware patterns are followed
- Check architectural boundaries are respected
- Identify architecture improvements

**Inputs**
- **From:** Step 11 outputs (tested middleware)
- **From:** Procedure Required Inputs (architecture decisions from Architecture Review Procedure)
- Architecture patterns and guidelines

**Actions**
- Review architecture decisions and patterns
- Validate middleware patterns are followed (API Gateway, BFF, etc.)
- Verify routing and transformation patterns match architecture
- Check architectural boundaries are respected
- Validate request/response transformation follows architecture
- Check folder structure matches architecture
- Identify any architecture improvements or deviations
- Document architecture compliance status
- Document any architectural debt introduced

**Decisions / Evaluations**
- **Decision:** Does implementation comply with architecture decisions?
  - **Go:** If yes, proceed to Step 13
  - **No-Go:** If no, address architecture compliance issues
- **Decision:** Are architectural patterns followed?
  - **Go:** If yes, proceed to Step 13
  - **No-Go:** If no, adjust implementation to follow patterns

**Outputs**
- Architecture compliance validated
- Middleware patterns verified
- Architectural boundaries verified
- Architecture improvements identified (if any)
- Architectural debt documented (if any)

**Failure Handling**
- **Failure:** Architecture compliance issues found
  - **Action:** Review architecture decisions, adjust implementation to comply
  - **Retry:** Step 12 after addressing compliance issues
- **Failure:** Architectural patterns not followed
  - **Action:** Review patterns, adjust implementation to follow patterns
  - **Retry:** Step 12 after pattern compliance

---

#### Step 13: Code Review Preparation

**Purpose**
- Prepare code for review
- Ensure code quality standards are met
- Document implementation

**Inputs**
- **From:** Step 12 outputs (architecture compliance validated)
- Code quality standards
- Documentation requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for security review checklist

**Actions**
- Run linter and fix all issues
- Run formatter and ensure consistent formatting
- Review code for best practices
- Remove console.logs and debug code
- Add code comments where needed
- Update documentation
- Stage all changes for commit
- Create commit with descriptive message

**Decisions / Evaluations**
- **Decision:** Is code ready for review?
  - **Go:** If yes, proceed to PR Lifecycle
  - **No-Go:** If no, fix code quality issues

**Outputs**
- Code ready for review
- All code quality checks passed
- Documentation updated
- Changes committed
- Ready for PR creation

**Failure Handling**
- **Failure:** Code quality issues
  - **Action:** Fix linter errors, improve code quality
  - **Retry:** Step 13 after fixing issues

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Middleware implementation** - All middleware components and functionality implemented
- **Routing configuration** - Route definitions and mappings
- **Unit and integration tests** - Test files with adequate coverage
- **Documentation** - Code comments, configuration documentation, README updates

**State changes:**
- Feature branch contains complete middleware implementation
- Code is committed and ready for PR
- Tests are passing
- Code quality checks pass

**Decisions recorded:**
- Routing configuration decisions
- Transformation logic approach
- Caching strategy
- Rate limiting approach
- Testing approach and coverage

**Signals emitted:**
- "Middleware Implementation Complete" - Ready for code review
- "Ready for PR" - Code is ready for PR Lifecycle
- "Ready for Integration Testing" - Can proceed to integration testing

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Standards compliance:**
- [ ] Implementation complies with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)

**Tests required:**
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] Test coverage meets requirements (typically 80%+)
- [ ] Routing works correctly
- [ ] Authentication and authorization work correctly
- [ ] Request/response transformations work correctly
- [ ] API aggregation works (if applicable)
- [ ] Rate limiting works correctly
- [ ] Caching works correctly (if applicable)
- [ ] Error handling works for all error scenarios

**Reviews required:**
- [ ] Code review (via PR Lifecycle)
- [ ] Security review (if required)
- [ ] Performance review (for rate limiting and caching)

**Automated checks:**
- [ ] Linter passes with no errors
- [ ] Type checking passes (if using TypeScript)
- [ ] Build succeeds without errors
- [ ] All tests pass in CI/CD

**Who/what can approve completion:**
- **Code Reviewer** - Must approve PR
- **Security Reviewer** - Should review for security issues
- **Performance Reviewer** - Should review rate limiting and caching
- **Automated CI/CD** - Must pass all automated checks

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Middleware Implementation** → Input for PR Lifecycle (code to review)
- **Middleware Implementation** → Input for Integration Testing Procedure (middleware ready for integration)
- **Middleware Implementation** → Input for Frontend Implementation Procedure (middleware APIs ready for frontend)
- **Middleware Implementation** → Input for Implementation Verification Procedure (verify implementation complete)

**Procedures that depend on this:**
- **PR Lifecycle** - Reviews the middleware code
- **[Frontend Implementation Procedure](./frontend-implementation-procedure.md)** - Uses middleware APIs
- **[Test Plan Procedure](./test-plan-procedure.md)** - May reference middleware tests
- **[Implementation Verification Procedure](./implementation-verification-procedure.md)** - Verifies middleware implementation is complete
- **[Integration Testing Procedure](./integration-testing-procedure.md)** - Tests middleware-frontend-backend integration
- **[End-to-End Testing Procedure](./end-to-end-testing-procedure.md)** - Tests complete flows including middleware
- **[Performance & Resilience Procedure](./performance-resilience-procedure.md)** - Tests middleware performance
- **[Observability Instrumentation Procedure](./observability-instrumentation-procedure.md)** - Instruments middleware for monitoring
- **[Security Review Procedure](./security-review-procedure.md)** - Reviews middleware security
- **[Architecture Compliance Validation Procedure](./architecture-compliance-validation-procedure.md)** - Validates architecture compliance

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Request routing configured and working
- [ ] Authentication and authorization implemented
- [ ] Request transformation implemented
- [ ] Response transformation implemented
- [ ] API aggregation implemented (if applicable)
- [ ] Rate limiting and throttling implemented
- [ ] Caching implemented (if applicable)
- [ ] Error handling implemented for all error scenarios
- [ ] Logging and observability implemented
- [ ] Unit tests written with coverage ≥ 80%
- [ ] Integration tests written and passing
- [ ] All tests pass
- [ ] Linter passes with no errors
- [ ] Code follows project conventions
- [ ] Documentation updated (code comments, README)
- [ ] Implementation complies with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] All acceptance criteria from requirements met
- [ ] Code committed to feature branch
- [ ] Ready for PR creation

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Commits** - Git commit hashes for all implementation commits
- [ ] **PRs** - PR number when middleware code is reviewed
- [ ] **Tickets** - Jira ticket number for the feature
- [ ] **API Contracts** - Links to API documentation
- [ ] **Test Reports** - Test coverage reports and test results
- [ ] **ADRs** - Architecture Decision Records if architectural decisions made

**Audit trail:**
- **Implementation start date** - When middleware implementation began
- **Implementation completion date** - When middleware implementation completed
- **Middleware components created** - List of middleware components
- **Routing configuration** - Route definitions and mappings
- **Test coverage** - Test coverage percentage and report
- **Issues encountered** - Any blockers or issues during implementation
- **Decisions made** - Routing, transformation, caching, etc.

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- All middleware components implemented
- All tests passing
- Code ready for PR
- Ready for code review and integration testing

#### ⚠️ Blocked
- **Reason:** Missing API contracts, middleware requirements, or other required inputs
- **Required action:** Obtain missing inputs before proceeding
- **Who to notify:** Product Manager, Architect, or Backend team
- **Status:** Implementation paused until inputs available

#### ❌ Aborted
- **Reason:** Feature requirements changed significantly, or implementation approach not viable
- **Required action:** Document why aborted, what was completed, cleanup code if needed
- **Rollback required:** Yes - remove incomplete code, revert commits if needed
- **Lessons learned:** Document what made implementation unviable

#### 🔄 Partial Implementation
- **Reason:** Some middleware features deferred to future iteration
- **Required action:** Document what was implemented vs. deferred
- **Status:** Core functionality complete, some features deferred
- **Next steps:** Complete deferred features in follow-up work

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Middleware/API Gateway Team
