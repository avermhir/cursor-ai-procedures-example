# Procedure: Backend Implementation

### 1. Purpose

**Why this procedure exists**

This procedure enables systematic implementation of backend features for web applications. It ensures consistent code quality, proper API implementation, secure data handling, and adherence to architectural patterns and business logic requirements.

**What problem it solves**

- Inconsistent backend implementation patterns
- Missing or incorrect API endpoint implementation
- Insecure data handling and validation
- Poor error handling and response formatting
- Missing business logic implementation
- Lack of proper database interactions
- Inadequate logging and observability
- Missing or incomplete backend testing

**What "success" looks like at the end**

A fully implemented backend feature that:
- Implements all API endpoints according to contracts
- Handles data securely with proper validation
- Implements business logic correctly
- Interacts with databases correctly
- Has comprehensive error handling
- Includes logging and observability
- Has unit and integration tests
- Is ready for code review and deployment

---

### 2. Trigger

**What causes this procedure to be invoked**

- Backend implementation phase of feature development begins
- API contracts are defined (from API Contract Procedure)
- Data design is complete (from Data Design Procedure)
- Architecture decisions are made (from Architecture Review Procedure)
- Ready to begin coding backend services and APIs

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **API contracts** - API endpoint definitions, request/response schemas, OpenAPI specs (from [API Contract Procedure](./api-contract-procedure.md))
- [ ] **Data design** - Database schema, data models, migration plans (from [Data Design Procedure](./data-design-procedure.md))
- [ ] **Feature requirements document** - Functional requirements, user stories, business logic requirements (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Architecture decisions** - ADRs, architectural patterns, service boundaries (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Authentication/Authorization requirements** - AuthN/AuthZ requirements (from [AuthN/AuthZ Procedure](./authn-authz-procedure.md), if applicable)
- [ ] **Third-party integration specs** - External service requirements (if applicable, from [Third-Party Integration Procedure](./third-party-integration-procedure.md))
- [ ] **Security requirements** - Threat model, security constraints (from [Threat Model Procedure](./threat-model-procedure.md))

**Decisions already made:**
- [ ] **Technology stack** - Backend framework (NestJS, Express, Django, etc.)
- [ ] **Database choice** - Postgres, DynamoDB, MongoDB, etc.
- [ ] **ORM/Query builder** - Prisma, TypeORM, Sequelize, etc.
- [ ] **Authentication approach** - JWT, OAuth, session-based, etc.
- [ ] **API framework** - REST, GraphQL, gRPC, etc.
- [ ] **Architecture pattern** - MVC, layered architecture, microservices, etc.

**Constraints:**
- [ ] **Security requirements** - Input validation, SQL injection prevention, XSS prevention
- [ ] **Performance requirements** - Response time limits, throughput requirements
- [ ] **Scalability requirements** - Expected load, concurrency requirements
- [ ] **Compliance requirements** - Data privacy, audit logging, etc.
- [ ] **API Security Standards** - Must comply with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **Data Design Standards** - Must comply with [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for database implementation

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing API contracts** → Invoke [API Contract Procedure](./api-contract-procedure.md) first
- **Missing data design** → Invoke [Data Design Procedure](./data-design-procedure.md) first
- **Missing architecture decisions** → Invoke [Architecture Review Procedure](./architecture-review-procedure.md) first
- **Missing feature requirements** → Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md) first
- **Unclear business logic requirements** → Request clarification from product/business team

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 13 ordered steps from setup through code review preparation
- **Procedures to be invoked** - PR Lifecycle (for code review), Data Lifecycle (for migrations), [Test Plan Procedure](./test-plan-procedure.md)
- **Dependencies between steps** - Database setup → Models → Services → Controllers → Testing
- **Risks & unknowns** - API contract changes, database performance, third-party service availability, security vulnerabilities
- **Validation points** - After database setup, after service implementation, after API implementation, after testing

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
- Set up project structure

**Inputs**
- **From:** Procedure Required Inputs (API contracts, data design, requirements)
- Development environment setup

**Actions**
- Review API contracts thoroughly
- Review data design and schema
- Review feature requirements and business logic
- Review architecture decisions and patterns
- Set up or verify development environment
- Set up database connection and verify access
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
- Database connection verified
- Feature branch created
- Questions/clarifications documented (if any)

**Failure Handling**
- **Failure:** Development environment setup fails
  - **Action:** Troubleshoot setup issues, consult documentation
  - **Escalate:** If persistent, consult DevOps or infrastructure team
- **Failure:** Database connection fails
  - **Action:** Check database credentials, network connectivity, database status
  - **Escalate:** If database issue, consult database team
- **Failure:** Inputs are unclear or incomplete
  - **Action:** Document questions, request clarifications from stakeholders
  - **No-Go:** Wait for clarifications before proceeding

---

#### Step 2: Database Schema & Migrations

**Purpose**
- Create or update database schema
- Create database migrations
- Set up database models/entities

**Inputs**
- **From:** Procedure Required Inputs (data design, schema)
- **From:** Step 1 outputs (understanding of requirements)
- Database design from Data Design Procedure
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for schema design requirements

**Actions**
- Review database schema design
- Create database migrations (if using migrations)
- Define database models/entities (Prisma models, TypeORM entities, etc.)
- Set up relationships (foreign keys, associations)
- Define indexes for performance
- Set up constraints (unique, check, etc.)
- Run migrations in development database
- Verify schema matches design
- Document any schema decisions

**Decisions / Evaluations**
- **Decision:** Does database schema match design?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, adjust schema to match design

**Outputs**
- Database migrations created
- Database models/entities defined
- Schema matches design
- Migrations applied to development database

**Failure Handling**
- **Failure:** Migrations fail to apply
  - **Action:** Check migration syntax, database state, resolve conflicts
  - **Retry:** Step 2 after fixing migration issues
- **Failure:** Schema doesn't match design
  - **Action:** Review design, update schema or design as needed
  - **Retry:** Step 2 with corrected schema

---

#### Step 3: Data Access Layer Implementation

**Purpose**
- Implement data access methods
- Create repository/service layer for database operations
- Implement data validation at data layer

**Inputs**
- **From:** Step 2 outputs (database models, schema)
- ORM/Query builder
- Data access patterns

**Actions**
- Create repository classes or data access services
- Implement CRUD operations for each entity
- Implement query methods (find, filter, search)
- Implement data validation
- Handle database transactions where needed
- Implement error handling for database operations
- Add data transformation logic if needed
- Implement caching if required
- Add logging for database operations

**Decisions / Evaluations**
- **Decision:** Are data access methods working correctly?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, debug and fix data access issues

**Outputs**
- Repository/data access layer implemented
- CRUD operations working
- Data validation implemented
- Error handling for database operations

**Failure Handling**
- **Failure:** Database operations fail
  - **Action:** Check database connection, query syntax, permissions
  - **Retry:** Step 3 after fixing database issues
- **Failure:** Data validation not working
  - **Action:** Review validation logic, fix validation rules
  - **Retry:** Step 3 with corrected validation

---

#### Step 4: Business Logic Implementation

**Purpose**
- Implement business logic and rules
- Create service layer with business operations
- Implement domain logic

**Inputs**
- **From:** Step 3 outputs (data access layer)
- **From:** Procedure Required Inputs (feature requirements, business logic)
- Architecture patterns

**Actions**
- Review business logic requirements
- Create service classes for business operations
- Implement business rules and validations
- Implement workflow logic
- Implement calculations and transformations
- Handle business exceptions
- Implement business event handling if needed
- Add logging for business operations
- Document complex business logic

**Decisions / Evaluations**
- **Decision:** Is business logic implemented correctly?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, review requirements and fix logic

**Outputs**
- Business logic services implemented
- Business rules enforced
- Workflow logic implemented
- Business exceptions handled

**Failure Handling**
- **Failure:** Business logic doesn't match requirements
  - **Action:** Review requirements, clarify with stakeholders, fix logic
  - **Retry:** Step 4 with corrected business logic
- **Failure:** Business logic too complex or unclear
  - **Action:** Break down into smaller functions, add documentation
  - **Retry:** Step 4 with simplified logic

---

#### Step 5: API Controller Implementation

**Purpose**
- Implement API endpoints (controllers/routes)
- Handle HTTP requests and responses
- Map requests to services

**Inputs**
- **From:** Procedure Required Inputs (API contracts)
- **From:** Step 4 outputs (business logic services)
- API framework

**Actions**
- Review API contracts
- Create controller classes or route handlers
- Implement endpoint methods for each API route
- Implement request validation (DTOs, schemas)
- Map requests to service calls
- Format responses according to API contract
- Handle HTTP status codes correctly
- Implement request/response logging
- Add API documentation (Swagger/OpenAPI decorators)

**Decisions / Evaluations**
- **Decision:** Do API endpoints match contracts?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, adjust endpoints to match contracts

**Outputs**
- API controllers/routes implemented
- Endpoints match API contracts
- Request validation implemented
- Responses formatted correctly

**Failure Handling**
- **Failure:** API endpoints don't match contracts
  - **Action:** Review API contracts, adjust implementation
  - **Retry:** Step 5 with corrected endpoints
- **Failure:** Request validation fails
  - **Action:** Review validation rules, fix DTOs/schemas
  - **Retry:** Step 5 with corrected validation

---

#### Step 6: Authentication & Authorization

**Purpose**
- Implement authentication checks
- Implement authorization rules
- Secure API endpoints

**Inputs**
- **From:** Procedure Required Inputs (AuthN/AuthZ requirements)
- **From:** Step 5 outputs (API controllers)
- Authentication framework/middleware
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for authentication and authorization requirements

**Actions**
- Review authentication/authorization requirements
- Implement authentication middleware/guards
- Add authentication checks to protected endpoints
- Implement authorization checks (role-based, permission-based)
- Handle authentication errors
- Implement token validation
- Add user context to requests
- Test authentication flows
- Test authorization rules

**Decisions / Evaluations**
- **Decision:** Is authentication/authorization working correctly?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, fix authentication/authorization issues

**Outputs**
- Authentication implemented
- Authorization rules enforced
- Protected endpoints secured
- User context available in requests

**Failure Handling**
- **Failure:** Authentication not working
  - **Action:** Check authentication middleware, token validation, credentials
  - **Retry:** Step 6 after fixing authentication
- **Failure:** Authorization rules not enforced
  - **Action:** Review authorization requirements, fix authorization logic
  - **Retry:** Step 6 with corrected authorization

---

#### Step 7: Input Validation & Sanitization

**Purpose**
- Implement comprehensive input validation
- Sanitize user inputs
- Prevent injection attacks

**Inputs**
- **From:** Step 5 outputs (API controllers)
- Validation library
- Security requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for input validation requirements

**Actions**
- Implement input validation for all endpoints
- Validate data types, formats, ranges
- Sanitize string inputs
- Validate file uploads if applicable
- Implement SQL injection prevention (use parameterized queries)
- Implement XSS prevention
- Validate against business rules
- Return clear validation error messages
- Log validation failures for security monitoring

**Decisions / Evaluations**
- **Decision:** Is input validation comprehensive?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, add missing validation

**Outputs**
- Input validation implemented
- Input sanitization implemented
- Security vulnerabilities prevented
- Validation errors handled

**Failure Handling**
- **Failure:** Validation not comprehensive
  - **Action:** Review all inputs, add missing validation
  - **Retry:** Step 7 with complete validation
- **Failure:** Security vulnerabilities found
  - **Action:** Fix security issues immediately
  - **Escalate:** Security issues should be escalated immediately

---

#### Step 8: Error Handling & Response Formatting

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
- Handle different error types (validation, business, system, authentication, authorization)
- Implement error logging
- Return appropriate HTTP status codes
- Provide user-friendly error messages
- Handle edge cases and unexpected errors
- Implement error monitoring integration
- Test error scenarios

**Decisions / Evaluations**
- **Decision:** Is error handling comprehensive?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, add missing error handling

**Outputs**
- Error handling implemented
- Error responses standardized
- Error logging implemented
- Error monitoring integrated

**Failure Handling**
- **Failure:** Error handling incomplete
  - **Action:** Review error scenarios, add missing error handling
  - **Retry:** Step 8 with complete error handling

---

#### Step 9: Third-Party Integration (if applicable)

**Purpose**
- Integrate with external services
- Implement API clients for third-party services
- Handle third-party service errors

**Inputs**
- **From:** Procedure Required Inputs (third-party integration specs)
- Third-party service documentation
- API keys/credentials

**Actions**
- Review third-party integration requirements
- Implement API clients for external services
- Handle authentication with third-party services
- Implement retry logic and circuit breakers
- Handle rate limiting
- Implement error handling for third-party failures
- Add logging for third-party calls
- Test third-party integrations
- Implement fallback mechanisms if needed

**Decisions / Evaluations**
- **Decision:** Are third-party integrations working correctly?
  - **Go:** If yes, proceed to Step 10
  - **No-Go:** If no, fix integration issues
  - **Skip:** If no third-party integrations needed, proceed to Step 10

**Outputs**
- Third-party integrations implemented
- API clients working
- Error handling for third-party services
- Retry logic and circuit breakers implemented

**Failure Handling**
- **Failure:** Third-party service unavailable or returns errors
  - **Action:** Check service status, verify credentials, review API documentation
  - **Escalate:** If service issue, contact third-party support
  - **Retry:** Step 9 after service issues resolved

---

#### Step 10: Logging & Observability

**Purpose**
- Implement comprehensive logging
- Add metrics and monitoring
- Enable observability

**Inputs**
- **From:** All previous steps (complete implementation)
- Logging framework
- Observability tools

**Actions**
- Add structured logging throughout code
- Log important events (API calls, errors, business events)
- Add performance metrics
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

#### Step 11: Testing & Verification

**Purpose**
- Write unit tests for services
- Write integration tests for APIs
- Verify feature works correctly

**Inputs**
- **From:** All previous steps (complete implementation)
- Testing framework (Jest, Mocha, etc.)
- Test Plan Procedure outputs (if available)

**Actions**
- Write unit tests for business logic services
- Write unit tests for data access layer
- Write integration tests for API endpoints
- Test authentication and authorization
- Test error handling scenarios
- Test input validation
- Test database operations
- Test third-party integrations (with mocks)
- Run all tests and ensure they pass
- Check test coverage meets requirements
- Verify all acceptance criteria are met

**Decisions / Evaluations**
- **Decision:** Do all tests pass and coverage meet requirements?
  - **Go:** If yes, proceed to Step 12
  - **No-Go:** If no, fix failing tests or add missing tests

**Outputs**
- Unit tests written and passing
- Integration tests written and passing
- Test coverage meets requirements
- All acceptance criteria verified

**Failure Handling**
- **Failure:** Tests fail
  - **Action:** Debug failing tests, fix implementation or test code
  - **Retry:** Step 11 after fixing tests
- **Failure:** Test coverage below requirements
  - **Action:** Add missing tests to increase coverage
  - **Retry:** Step 11 with increased coverage

---

#### Step 12: Architecture Compliance Validation

**Purpose**
- Validate that implementation follows architecture decisions
- Verify service boundaries are respected
- Check architectural patterns are adhered to
- Identify architecture improvements

**Inputs**
- **From:** Step 11 outputs (tested feature)
- **From:** Procedure Required Inputs (architecture decisions from Architecture Review Procedure)
- Architecture patterns and guidelines

**Actions**
- Review architecture decisions and patterns
- Validate service boundaries are respected
- Verify data access patterns match architecture
- Check API implementation follows architecture patterns
- Validate business logic organization matches architecture
- Check folder structure matches architecture
- Validate architectural patterns are followed (layered architecture, microservices, etc.)
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
- Service boundaries verified
- Architectural patterns verified
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
- **From:** Step 11 outputs (tested feature)
- Code quality standards
- Documentation requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for security review checklist

**Actions**
- Run linter and fix all issues
- Run formatter and ensure consistent formatting
- Review code for best practices
- Remove console.logs and debug code
- Add code comments where needed
- Update API documentation (Swagger/OpenAPI)
- Update README if needed
- Ensure all imports are used
- Remove unused code
- Verify code follows project conventions
- Review security best practices
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
- **Failure:** Linter errors or code quality issues
  - **Action:** Fix linter errors, improve code quality
  - **Retry:** Step 12 after fixing issues

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Backend feature implementation** - All services, controllers, and functionality implemented
- **Database migrations** - Migration files for schema changes
- **Unit and integration tests** - Test files with adequate coverage
- **API documentation** - Updated Swagger/OpenAPI documentation
- **Documentation** - Code comments, README updates

**State changes:**
- Feature branch contains complete backend implementation
- Database schema updated (migrations ready)
- Code is committed and ready for PR
- Tests are passing
- Code quality checks pass

**Decisions recorded:**
- Database schema decisions
- Business logic implementation approach
- API implementation patterns
- Testing approach and coverage

**Signals emitted:**
- "Backend Implementation Complete" - Ready for code review
- "Ready for PR" - Code is ready for PR Lifecycle
- "Ready for Integration Testing" - Can proceed to integration testing

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Standards compliance:**
- [ ] Implementation complies with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] Database implementation complies with [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)

**Tests required:**
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] Test coverage meets requirements (typically 80%+)
- [ ] API endpoints work correctly
- [ ] Database operations work correctly
- [ ] Authentication and authorization work correctly
- [ ] Input validation works for all inputs
- [ ] Error handling works for all error scenarios
- [ ] Third-party integrations work (if applicable)

**Reviews required:**
- [ ] Code review (via PR Lifecycle)
- [ ] Security review (if required)
- [ ] Architecture review (if significant changes)

**Automated checks:**
- [ ] Linter passes with no errors
- [ ] Type checking passes (if using TypeScript)
- [ ] Build succeeds without errors
- [ ] All tests pass in CI/CD
- [ ] Database migrations can be applied

**Who/what can approve completion:**
- **Code Reviewer** - Must approve PR
- **Security Reviewer** - Should review for security issues
- **QA** - Should verify functionality works as expected
- **Automated CI/CD** - Must pass all automated checks

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Backend Implementation** → Input for PR Lifecycle (code to review)
- **Backend Implementation** → Input for Integration Testing Procedure (backend ready for integration)
- **Backend Implementation** → Input for Frontend Implementation Procedure (APIs ready for frontend)
- **Backend Implementation** → Input for Implementation Verification Procedure (verify implementation complete)
- **Database Migrations** → Input for Data Lifecycle procedures
- **Backend Implementation** → Input for [Implementation Verification Procedure](./implementation-verification-procedure.md)

**Procedures that depend on this:**
- **PR Lifecycle** - Reviews the backend code
- **[Frontend Implementation Procedure](./frontend-implementation-procedure.md)** - Uses backend APIs
- **[Middleware Implementation Procedure](./middleware-implementation-procedure.md)** - Routes to backend APIs
- **[Test Plan Procedure](./test-plan-procedure.md)** - May reference backend tests
- **[Implementation Verification Procedure](./implementation-verification-procedure.md)** - Verifies backend implementation is complete
- **[Integration Testing Procedure](./integration-testing-procedure.md)** - Tests backend-frontend-middleware integration
- **[End-to-End Testing Procedure](./end-to-end-testing-procedure.md)** - Tests complete flows including backend
- **[Performance & Resilience Procedure](./performance-resilience-procedure.md)** - Tests backend performance
- **[Observability Instrumentation Procedure](./observability-instrumentation-procedure.md)** - Instruments backend for monitoring
- **[Security Review Procedure](./security-review-procedure.md)** - Reviews backend security
- **[Architecture Compliance Validation Procedure](./architecture-compliance-validation-procedure.md)** - Validates architecture compliance

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] All API endpoints implemented according to contracts
- [ ] Database schema matches design
- [ ] Database migrations created and tested
- [ ] Data access layer implemented
- [ ] Business logic implemented correctly
- [ ] Authentication and authorization implemented
- [ ] Input validation and sanitization implemented
- [ ] Error handling implemented for all error scenarios
- [ ] Logging and observability implemented
- [ ] Third-party integrations implemented (if applicable)
- [ ] Unit tests written with coverage ≥ 80%
- [ ] Integration tests written and passing
- [ ] All tests pass
- [ ] Linter passes with no errors
- [ ] Code follows project conventions
- [ ] API documentation updated
- [ ] Documentation updated (code comments, README)
- [ ] Implementation complies with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] Database implementation complies with [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)
- [ ] All acceptance criteria from requirements met
- [ ] Code committed to feature branch
- [ ] Ready for PR creation

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Commits** - Git commit hashes for all implementation commits
- [ ] **PRs** - PR number when backend code is reviewed
- [ ] **Tickets** - Jira ticket number for the feature
- [ ] **API Contracts** - Links to API documentation
- [ ] **Database Migrations** - Migration file references
- [ ] **Test Reports** - Test coverage reports and test results
- [ ] **ADRs** - Architecture Decision Records if architectural decisions made

**Audit trail:**
- **Implementation start date** - When backend implementation began
- **Implementation completion date** - When backend implementation completed
- **Services/Controllers created** - List of services and controllers created
- **API endpoints implemented** - List of API endpoints
- **Database changes** - Schema changes and migrations
- **Test coverage** - Test coverage percentage and report
- **Issues encountered** - Any blockers or issues during implementation
- **Decisions made** - Business logic, architecture, etc.

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- All services and APIs implemented
- All tests passing
- Code ready for PR
- Ready for code review and integration testing

#### ⚠️ Blocked
- **Reason:** Missing API contracts, data design, or other required inputs
- **Required action:** Obtain missing inputs before proceeding
- **Who to notify:** Product Manager, Architect, or Database team
- **Status:** Implementation paused until inputs available

#### ❌ Aborted
- **Reason:** Feature requirements changed significantly, or implementation approach not viable
- **Required action:** Document why aborted, what was completed, cleanup code if needed
- **Rollback required:** Yes - remove incomplete code, revert commits and migrations if needed
- **Lessons learned:** Document what made implementation unviable

#### 🔄 Partial Implementation
- **Reason:** Some endpoints or features deferred to future iteration
- **Required action:** Document what was implemented vs. deferred
- **Status:** Core functionality complete, some features deferred
- **Next steps:** Complete deferred features in follow-up work

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Backend Development Team
