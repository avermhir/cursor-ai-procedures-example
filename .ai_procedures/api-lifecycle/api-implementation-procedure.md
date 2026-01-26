# Procedure: API Implementation

### 1. Purpose

**Why this procedure exists**

This procedure implements API endpoints according to OpenAPI specifications created during API design. It ensures APIs are implemented correctly, match their contracts, generate proper TypeScript types, and integrate seamlessly with backend services while maintaining security and performance requirements.

**What problem it solves**

- APIs implemented without following OpenAPI specifications
- Type mismatches between API contracts and implementations
- Inconsistent API implementation patterns
- Missing or incorrect request/response handling
- APIs that don't match their documented contracts
- Manual type generation leading to drift
- Security requirements not implemented correctly
- Performance issues from poor implementation

**What "success" looks like at the end**

A fully implemented API that includes:
- All API endpoints implemented according to OpenAPI spec
- TypeScript types generated from OpenAPI spec
- Request/response handling matches contract
- Security requirements implemented (authentication, authorization, validation)
- Error handling follows API contract
- API implementation tested and verified
- Ready for API Testing Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- [API Design Procedure](./api-design-procedure.md) has been completed (OpenAPI spec created)
- OpenAPI specification is approved and frozen
- Ready to implement API endpoints
- [Backend Implementation Procedure](../feature-lifecycle/backend-implementation-procedure.md) is ready to implement API layer
- [Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md) invokes this (Phase 3: Implementation)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **OpenAPI specification** - Complete OpenAPI spec document (from [API Design Procedure](./api-design-procedure.md))
- [ ] **Type definitions** - TypeScript types/interfaces (from API Design Procedure, if generated)
- [ ] **API design document** - API design decisions, patterns, rationale (from API Design Procedure)
- [ ] **Backend architecture** - Service structure, framework, patterns (from [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md))
- [ ] **Data models** - Database models, schemas (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md))
- [ ] **Security requirements** - Authentication, authorization, validation requirements (from [Threat Model Procedure](../feature-lifecycle/threat-model-procedure.md))
- [ ] **API Security Standards** - Security requirements reference (see [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md))

**Decisions already made:**
- [ ] **API contract is frozen** - OpenAPI spec is approved and won't change during implementation
- [ ] **Backend framework** - NestJS, Express, Fastify, etc. (from architecture decisions)
- [ ] **Type generation approach** - How to generate types from OpenAPI (openapi-typescript, swagger-typescript-api, etc.)
- [ ] **API versioning** - URL versioning, header versioning, etc. (from API Design)

**Constraints:**
- [ ] **API Security Standards** - Must comply with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **OpenAPI spec compliance** - Implementation must match OpenAPI spec exactly
- [ ] **Type safety** - Types must be generated from OpenAPI spec, not manually created
- [ ] **Backwards compatibility** - Must maintain backwards compatibility if required (from [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md))
- [ ] **Performance requirements** - Response time, throughput requirements
- [ ] **Error handling** - Must follow error response schemas in OpenAPI spec

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing OpenAPI spec** → Invoke [API Design Procedure](./api-design-procedure.md) first
- **OpenAPI spec not frozen** → Wait for API design approval, or update spec if changes needed
- **Missing backend architecture** → Invoke [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md) first
- **Missing data models** → Invoke [Data Design Procedure](../feature-lifecycle/data-design-procedure.md) first

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 9 ordered steps from OpenAPI review through implementation verification
- **Procedures to be invoked** - [Backend Implementation Procedure](../feature-lifecycle/backend-implementation-procedure.md) (for service layer), [API Testing Procedure](./api-testing-procedure.md) (after implementation)
- **Dependencies between steps** - Review → Generate Types → Setup → Implement Endpoints → Implement Validation → Implement Security → Error Handling → Testing → Verification
- **Risks & unknowns** - OpenAPI spec unclear, type generation issues, security implementation complexity, performance requirements unclear
- **Validation points** - After type generation, after endpoint implementation, after security implementation, before testing

**Plan must be reviewed before execution begins**

**Output:**
- API Implementation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review OpenAPI Specification

**Purpose**
- Understand the API contract completely
- Identify all endpoints, request/response schemas, and requirements
- Identify security requirements and validation rules
- Understand error handling requirements

**Inputs**
- **From:** Procedure Required Inputs (OpenAPI specification, API design document)

**Actions**
- Review OpenAPI specification thoroughly:
  - List all endpoints (paths, methods)
  - Review request schemas (parameters, request bodies)
  - Review response schemas (success responses, error responses)
  - Review authentication/authorization requirements
  - Review validation rules (required fields, formats, constraints)
  - Review error response formats
  - Review API versioning approach
- Review API design document for:
  - Design decisions and rationale
  - Patterns to follow
  - Special considerations
- Identify implementation requirements:
  - Which endpoints need to be implemented
  - What security controls are needed
  - What validation is required
  - What error handling is needed
- Document any questions or clarifications needed
- Verify OpenAPI spec is valid (use OpenAPI validator)

**Decisions / Evaluations**
- **Decision:** Is OpenAPI spec complete and valid?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, request spec updates or clarifications
- **Decision:** Are all requirements clear?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, request clarifications from API design team

**Outputs**
- Complete understanding of API contract
- List of endpoints to implement
- Security requirements identified
- Validation requirements identified
- Questions/clarifications documented (if any)

**Failure Handling**
- **Failure:** OpenAPI spec is invalid or incomplete
  - **Action:** Request spec updates from API design team, validate spec
  - **Retry:** Step 1 after spec is updated
- **Failure:** Requirements unclear
  - **Action:** Request clarifications from API design team or product owner
  - **Retry:** Step 1 after clarifications received

---

#### Step 2: Generate TypeScript Types from OpenAPI

**Purpose**
- Generate TypeScript types from OpenAPI specification
- Ensure type safety and contract compliance
- Prevent type drift between spec and implementation

**Inputs**
- **From:** Step 1 outputs (OpenAPI specification reviewed)
- **Reference:** Type generation tool (openapi-typescript, swagger-typescript-api, etc.)

**Actions**
- Choose type generation tool:
  - **openapi-typescript** - Generates TypeScript types from OpenAPI
  - **swagger-typescript-api** - Generates TypeScript client/server types
  - **@openapitools/openapi-generator** - Full code generation
  - Other tool based on project standards
- Set up type generation:
  - Install type generation tool
  - Configure tool for project structure
  - Set up generation script/command
- Generate types from OpenAPI spec:
  - Run type generation command
  - Verify types are generated correctly
  - Review generated types for accuracy
- Organize generated types:
  - Place types in appropriate directory (e.g., `src/types/api/`)
  - Ensure types are exported correctly
  - Document type usage if needed
- Verify type generation:
  - Types match OpenAPI schemas
  - All endpoints have corresponding types
  - Request/response types are correct
  - Error types are included

**Decisions / Evaluations**
- **Decision:** Are types generated correctly?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix type generation issues, update OpenAPI spec if needed
- **Decision:** Do types match OpenAPI spec?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, fix type generation or update OpenAPI spec

**Outputs**
- TypeScript types generated from OpenAPI spec
- Types organized in project structure
- Types ready for use in implementation

**Failure Handling**
- **Failure:** Type generation fails
  - **Action:** Fix OpenAPI spec issues, update type generation tool configuration
  - **Retry:** Step 2 after fixing issues
- **Failure:** Types don't match spec
  - **Action:** Review OpenAPI spec, fix type generation configuration, regenerate types
  - **Retry:** Step 2 after fixing issues

---

#### Step 3: Setup API Implementation Structure

**Purpose**
- Set up project structure for API implementation
- Create controllers, routes, and handlers
- Set up middleware and validation infrastructure

**Inputs**
- **From:** Step 2 outputs (types generated), Procedure Required Inputs (backend architecture)
- **Reference:** Backend framework patterns (NestJS, Express, etc.)

**Actions**
- Review backend architecture and framework:
  - Understand framework patterns (controllers, services, middleware)
  - Understand project structure conventions
  - Understand dependency injection patterns (if applicable)
- Create API implementation structure:
  - **Controllers/Routes:** Create controller files for each API endpoint group
  - **Handlers:** Create handler functions for each endpoint
  - **Middleware:** Set up middleware for authentication, validation, error handling
  - **Validators:** Set up validation infrastructure (class-validator, joi, zod, etc.)
- Set up API versioning (if applicable):
  - Create versioned route structure (e.g., `/api/v1/`)
  - Set up version routing middleware
- Set up error handling infrastructure:
  - Create error handling middleware
  - Create error response formatters
  - Set up error logging
- Set up request/response handling:
  - Set up request parsing (body, query, params)
  - Set up response formatting
  - Set up content-type handling
- Document structure and patterns

**Decisions / Evaluations**
- **Decision:** Is structure set up correctly?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix structure, align with framework patterns
- **Decision:** Does structure follow project conventions?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, update structure to match conventions

**Outputs**
- API implementation structure created
- Controllers/routes set up
- Middleware infrastructure ready
- Validation infrastructure ready
- Error handling infrastructure ready

**Failure Handling**
- **Failure:** Structure doesn't match framework patterns
  - **Action:** Review framework documentation, align structure with patterns
  - **Retry:** Step 3 after fixing structure
- **Failure:** Structure conflicts with existing code
  - **Action:** Review existing code, align structure, resolve conflicts
  - **Retry:** Step 3 after resolving conflicts

---

#### Step 4: Implement API Endpoints

**Purpose**
- Implement all API endpoints according to OpenAPI spec
- Ensure endpoints match contract exactly
- Implement request/response handling

**Inputs**
- **From:** Step 3 outputs (structure set up), Step 2 outputs (types generated), Step 1 outputs (endpoints identified)

**Actions**
- For each endpoint in OpenAPI spec:
  - **Create endpoint handler:**
    - Implement route/controller method
    - Use generated types for request/response
    - Match endpoint path and method exactly
  - **Implement request handling:**
    - Parse request parameters (path, query, headers)
    - Parse request body (if applicable)
    - Use generated types for request validation
  - **Implement business logic:**
    - Call service layer methods (from Backend Implementation Procedure)
    - Handle business logic requirements
    - Transform data as needed
  - **Implement response handling:**
    - Format response according to OpenAPI spec
    - Use generated types for response
    - Set appropriate status codes
    - Set appropriate headers (content-type, etc.)
- Ensure endpoint implementation:
  - Matches OpenAPI path exactly
  - Matches OpenAPI method exactly
  - Uses correct request/response types
  - Returns correct status codes
  - Returns correct response format
- Document endpoint implementation:
  - Add comments for complex logic
  - Document any deviations from spec (should be minimal)

**Decisions / Evaluations**
- **Decision:** Are all endpoints implemented?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, implement remaining endpoints
- **Decision:** Do endpoints match OpenAPI spec?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, fix endpoints to match spec

**Outputs**
- All API endpoints implemented
- Endpoints match OpenAPI contract
- Request/response handling implemented

**Failure Handling**
- **Failure:** Endpoint doesn't match OpenAPI spec
  - **Action:** Review OpenAPI spec, fix endpoint implementation to match
  - **Retry:** Step 4 after fixing endpoint
- **Failure:** Business logic unclear
  - **Action:** Review requirements, consult product/business team, clarify logic
  - **Retry:** Step 4 after clarifying logic

---

#### Step 5: Implement Request Validation

**Purpose**
- Implement validation for all request inputs
- Ensure data validation matches OpenAPI schema constraints
- Prevent invalid data from reaching business logic

**Inputs**
- **From:** Step 4 outputs (endpoints implemented), Step 1 outputs (validation requirements), Step 2 outputs (types with validation)

**Actions**
- For each endpoint, implement validation:
  - **Path parameters:**
    - Validate path parameters match schema (types, formats, constraints)
    - Validate required path parameters are present
  - **Query parameters:**
    - Validate query parameters match schema
    - Validate parameter types (string, number, boolean, etc.)
    - Validate parameter formats (date, email, UUID, etc.)
    - Validate parameter constraints (min, max, enum, pattern)
  - **Request body:**
    - Validate request body structure matches schema
    - Validate required fields are present
    - Validate field types and formats
    - Validate field constraints (min, max, length, pattern, etc.)
    - Validate nested objects and arrays
  - **Headers:**
    - Validate required headers are present
    - Validate header formats (authorization, content-type, etc.)
- Use validation framework:
  - **class-validator** (for NestJS/DTOs)
  - **joi** (for Express/Node.js)
  - **zod** (for TypeScript-first validation)
  - **express-validator** (for Express)
  - Other framework-appropriate validator
- Implement validation error responses:
  - Return validation errors in format specified by OpenAPI spec
  - Return appropriate status code (400 Bad Request)
  - Include error details (field, message, code)
- Reference [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for input validation requirements

**Decisions / Evaluations**
- **Decision:** Is validation comprehensive?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, add missing validation
- **Decision:** Do validation errors match OpenAPI error schema?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, fix error format to match spec

**Outputs**
- Request validation implemented for all endpoints
- Validation errors formatted according to OpenAPI spec
- Invalid requests rejected with proper error responses

**Failure Handling**
- **Failure:** Validation doesn't match OpenAPI constraints
  - **Action:** Review OpenAPI spec constraints, update validation to match
  - **Retry:** Step 5 after fixing validation
- **Failure:** Validation framework issues
  - **Action:** Review framework documentation, fix validation setup
  - **Retry:** Step 5 after fixing framework issues

---

#### Step 6: Implement Security Controls

**Purpose**
- Implement authentication and authorization
- Implement security requirements from API Security Standards
- Ensure APIs are secure according to threat model

**Inputs**
- **From:** Step 4 outputs (endpoints implemented), Procedure Required Inputs (security requirements, API Security Standards)

**Actions**
- Implement authentication:
  - **JWT validation** (if JWT-based auth):
    - Validate JWT tokens
    - Verify token signature
    - Check token expiration
    - Extract user/role information
  - **OAuth validation** (if OAuth-based auth):
    - Validate OAuth tokens
    - Verify token scope
    - Extract user information
  - **API key validation** (if API key-based auth):
    - Validate API keys
    - Check key permissions
  - **Session validation** (if session-based auth):
    - Validate session tokens
    - Check session expiration
- Implement authorization:
  - **Role-based access control (RBAC):**
    - Check user roles
    - Verify role permissions for endpoint
    - Reject unauthorized requests
  - **Resource-based authorization:**
    - Check user access to specific resources
    - Verify ownership or permissions
    - Reject unauthorized access
- Implement security headers:
  - Set security headers (CORS, CSP, etc.)
  - Configure CORS appropriately
  - Set appropriate content-type headers
- Implement rate limiting (if required):
  - Set up rate limiting middleware
  - Configure rate limits per endpoint/user
  - Return appropriate rate limit headers
- Implement input sanitization:
  - Sanitize user inputs
  - Prevent injection attacks (SQL, XSS, etc.)
  - Validate and sanitize file uploads (if applicable)
- Reference [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for all security requirements

**Decisions / Evaluations**
- **Decision:** Are all security requirements implemented?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, implement missing security controls
- **Decision:** Does security match API Security Standards?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, update security to match standards

**Outputs**
- Authentication implemented
- Authorization implemented
- Security headers configured
- Rate limiting implemented (if required)
- Input sanitization implemented
- Security requirements met

**Failure Handling**
- **Failure:** Security requirements unclear
  - **Action:** Review API Security Standards, consult security team, clarify requirements
  - **Retry:** Step 6 after clarifying requirements
- **Failure:** Security implementation issues
  - **Action:** Review security framework documentation, fix implementation
  - **Retry:** Step 6 after fixing issues

---

#### Step 7: Implement Error Handling

**Purpose**
- Implement consistent error handling across all endpoints
- Ensure error responses match OpenAPI error schemas
- Provide appropriate error information

**Inputs**
- **From:** Step 4 outputs (endpoints implemented), Step 1 outputs (error handling requirements)

**Actions**
- Implement error handling middleware:
  - Catch all errors from endpoints
  - Format errors according to OpenAPI error schema
  - Set appropriate HTTP status codes
  - Include error details (message, code, details)
- Implement error types:
  - **Validation errors** (400 Bad Request):
    - Invalid input validation errors
    - Format according to OpenAPI validation error schema
  - **Authentication errors** (401 Unauthorized):
    - Missing or invalid authentication
    - Format according to OpenAPI auth error schema
  - **Authorization errors** (403 Forbidden):
    - Insufficient permissions
    - Format according to OpenAPI authorization error schema
  - **Not found errors** (404 Not Found):
    - Resource not found
    - Format according to OpenAPI not found error schema
  - **Conflict errors** (409 Conflict):
    - Resource conflicts
    - Format according to OpenAPI conflict error schema
  - **Server errors** (500 Internal Server Error):
    - Unexpected server errors
    - Don't expose internal details to clients
    - Log detailed error information
- Implement error logging:
  - Log all errors with appropriate detail level
  - Include request context (user, endpoint, parameters)
  - Don't log sensitive information
- Ensure error responses:
  - Match OpenAPI error response schemas
  - Include appropriate status codes
  - Include error messages and codes
  - Don't expose internal system details

**Decisions / Evaluations**
- **Decision:** Are all error types handled?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, add missing error handling
- **Decision:** Do error responses match OpenAPI spec?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, fix error format to match spec

**Outputs**
- Error handling implemented for all endpoints
- Error responses match OpenAPI error schemas
- Error logging implemented

**Failure Handling**
- **Failure:** Error handling doesn't match OpenAPI spec
  - **Action:** Review OpenAPI error schemas, update error handling to match
  - **Retry:** Step 7 after fixing error handling
- **Failure:** Error logging issues
  - **Action:** Review logging configuration, fix logging setup
  - **Retry:** Step 7 after fixing logging

---

#### Step 8: Verify Implementation Against OpenAPI Spec

**Purpose**
- Verify API implementation matches OpenAPI specification exactly
- Ensure contract compliance
- Identify any deviations

**Inputs**
- **From:** All previous step outputs (complete implementation), Procedure Required Inputs (OpenAPI specification)

**Actions**
- Compare implementation to OpenAPI spec:
  - **Endpoints:**
    - Verify all endpoints are implemented
    - Verify endpoint paths match exactly
    - Verify HTTP methods match exactly
  - **Request handling:**
    - Verify request parameters match spec
    - Verify request body schemas match spec
    - Verify request headers match spec
  - **Response handling:**
    - Verify response schemas match spec
    - Verify status codes match spec
    - Verify response headers match spec
  - **Error handling:**
    - Verify error responses match error schemas
    - Verify error status codes match spec
  - **Security:**
    - Verify security requirements match spec
    - Verify authentication/authorization match spec
- Use contract testing tools (if available):
  - **Pact** - Contract testing framework
  - **Dredd** - API contract testing
  - **Spectral** - OpenAPI linting
  - Other contract testing tools
- Document any deviations:
  - If implementation deviates from spec, document why
  - Get approval for deviations if needed
  - Update OpenAPI spec if implementation is correct and spec is wrong
- Fix any mismatches:
  - Update implementation to match spec
  - Or update spec if implementation is correct (requires approval)

**Decisions / Evaluations**
- **Decision:** Does implementation match OpenAPI spec?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, fix mismatches, update implementation or spec
- **Decision:** Are there approved deviations?
  - **Go:** If yes, document deviations, proceed to Step 9
  - **No-Go:** If no, fix deviations or get approval

**Outputs**
- Implementation verified against OpenAPI spec
- Contract compliance confirmed
- Deviations documented (if any)

**Failure Handling**
- **Failure:** Implementation doesn't match spec
  - **Action:** Fix implementation to match spec, or update spec if implementation is correct
  - **Retry:** Step 8 after fixing mismatches
- **Failure:** Contract testing tools fail
  - **Action:** Review tool configuration, fix issues, or use manual verification
  - **Retry:** Step 8 after fixing tool issues

---

#### Step 9: Prepare for API Testing

**Purpose**
- Ensure implementation is ready for testing
- Document implementation details
- Prepare test data and scenarios

**Inputs**
- **From:** Step 8 outputs (implementation verified)

**Actions**
- Review implementation completeness:
  - All endpoints implemented
  - All validation implemented
  - All security implemented
  - All error handling implemented
- Document implementation:
  - Document any implementation decisions
  - Document any deviations from spec
  - Document test scenarios to cover
- Prepare for testing:
  - Set up test environment
  - Prepare test data
  - Identify test scenarios from OpenAPI spec
  - Document edge cases to test
- Create implementation summary:
  - List all implemented endpoints
  - List security controls implemented
  - List validation rules implemented
  - List any known limitations or issues
- Signal readiness for [API Testing Procedure](./api-testing-procedure.md)

**Decisions / Evaluations**
- **Decision:** Is implementation ready for testing?
  - **Go:** If yes, proceed to API Testing Procedure
  - **No-Go:** If no, complete missing implementation
- **Decision:** Are all requirements met?
  - **Go:** If yes, proceed to API Testing Procedure
  - **No-Go:** If no, address missing requirements

**Outputs**
- Implementation ready for testing
- Implementation documented
- Test preparation complete
- Ready for API Testing Procedure

**Failure Handling**
- **Failure:** Implementation incomplete
  - **Action:** Complete missing implementation, verify all requirements met
  - **Retry:** Step 9 after completing implementation
- **Failure:** Documentation incomplete
  - **Action:** Complete documentation, document all decisions and deviations
  - **Retry:** Step 9 after completing documentation

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **API Implementation** - All endpoints implemented according to OpenAPI spec
  - Controllers/routes implemented
  - Request/response handling implemented
  - Validation implemented
  - Security controls implemented
  - Error handling implemented
- **TypeScript Types** - Types generated from OpenAPI spec
  - Request types
  - Response types
  - Error types
- **Implementation Documentation** - Documentation of implementation decisions and details

**State changes:**
- API endpoints are implemented and ready for testing
- Types are generated and integrated
- Implementation matches OpenAPI contract

**Decisions recorded:**
- Implementation approach decisions
- Validation approach decisions
- Security implementation decisions
- Any deviations from OpenAPI spec (with approval)

**Signals emitted:**
- "API Implementation Complete" - API is implemented and ready for testing
- "Ready for API Testing" - Implementation ready for [API Testing Procedure](./api-testing-procedure.md)
- "Types Generated" - TypeScript types available for use

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All endpoints implemented according to OpenAPI spec
- [ ] TypeScript types generated from OpenAPI spec
- [ ] Request validation implemented for all endpoints
- [ ] Security controls implemented (authentication, authorization)
- [ ] Error handling implemented and matches OpenAPI error schemas
- [ ] Implementation verified against OpenAPI spec (contract compliance)

**Reviews required:**
- [ ] Code review of API implementation
- [ ] Security review of security controls
- [ ] Architecture review (if significant deviations)

**Automated checks:**
- [ ] OpenAPI spec validation (spec is valid)
- [ ] Type generation verification (types match spec)
- [ ] Contract testing (if tools available)
- [ ] Linting and code quality checks

**Who/what can approve completion:**
- **Backend Team Lead** - Must review and approve implementation
- **Security Team** - Must review security controls
- **API Design Team** - Must verify contract compliance

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **API Implementation** → Input for [API Testing Procedure](./api-testing-procedure.md) (tests the implementation)
- **API Implementation** → Input for [Backend Implementation Procedure](../feature-lifecycle/backend-implementation-procedure.md) (API layer part of backend)
- **TypeScript Types** → Input for [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md) (uses types for frontend)
- **API Implementation** → Input for [Integration Testing Procedure](../feature-lifecycle/integration-testing-procedure.md) (tests API integration)

**Procedures that depend on this:**
- **API Testing Procedure** - Tests the API implementation
- **Integration Testing Procedure** - Tests API integration with other services
- **Frontend Implementation Procedure** - Uses API types and endpoints

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] OpenAPI specification reviewed and understood
- [ ] TypeScript types generated from OpenAPI spec
- [ ] API implementation structure set up
- [ ] All API endpoints implemented according to OpenAPI spec
- [ ] Request validation implemented for all endpoints
- [ ] Security controls implemented (authentication, authorization, input sanitization)
- [ ] Error handling implemented and matches OpenAPI error schemas
- [ ] Implementation verified against OpenAPI spec (contract compliance)
- [ ] Code review completed and approved
- [ ] Security review completed and approved
- [ ] Implementation documented
- [ ] Ready for API Testing Procedure
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with API implementation reference
- [ ] **OpenAPI Specification** - Link to OpenAPI spec document
- [ ] **API Design Document** - Link to API design that informed implementation
- [ ] **Type Generation** - Link to type generation script/configuration
- [ ] **Code Repository** - Link to implementation code
- [ ] **Security Review** - Link to security review results

**Audit trail:**
- **Implementation date** - When API was implemented
- **Endpoints implemented** - List of all endpoints implemented
- **Type generation approach** - Tool and configuration used
- **Security controls implemented** - List of security controls
- **Deviations from spec** - Any deviations and approvals
- **Review dates** - When code review and security review were completed
- **Approval stakeholders** - Who approved implementation

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- All endpoints implemented
- Types generated
- Security implemented
- Error handling implemented
- Implementation verified against OpenAPI spec
- Ready for API Testing Procedure

#### ⚠️ Blocked
- **Reason:** OpenAPI spec unclear, type generation issues, security requirements unclear, implementation complexity
- **Required action:** Address blocker (clarify spec, fix type generation, clarify security, simplify implementation)
- **Who to notify:** API design team, backend team lead, security team
- **Status:** Implementation paused until blocker resolved

#### ❌ Aborted
- **Reason:** OpenAPI spec cannot be implemented, security requirements cannot be met, implementation approach invalid
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no deployment)
- **Lessons learned:** Document why implementation couldn't be completed
- **Next step:** May need to update OpenAPI spec or architecture

#### 🔄 Partial Implementation
- **Reason:** Some endpoints implemented but others deferred, some features deferred to later phase
- **Required action:** Document what was implemented vs. deferred, update implementation plan
- **Status:** Core endpoints implemented, deferred features in backlog
- **Next step:** Proceed with testing of implemented endpoints, deferred features in future work

---

## Usage Notes

### Integration with API Design

- API Implementation Procedure depends on API Design Procedure outputs
- OpenAPI spec must be frozen before implementation begins
- Implementation must match OpenAPI spec exactly
- Any changes to API contract require updating OpenAPI spec first

### Integration with Backend Implementation

- API Implementation is part of Backend Implementation Procedure
- API layer calls service layer (from Backend Implementation)
- Both procedures work together to implement complete backend

### Type Generation

- Types must be generated from OpenAPI spec, not manually created
- Types should be regenerated whenever OpenAPI spec changes
- Types ensure contract compliance between spec and implementation

### Security Implementation

- Must comply with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- Security controls must match threat model requirements
- Security review required before proceeding to testing

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Backend Team / API Team
