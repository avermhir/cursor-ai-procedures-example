# Procedure: Third-Party Integration

### 1. Purpose

**Why this procedure exists**

This procedure defines third-party service specifications and integration requirements for features. It creates an integration specification document that defines how the system will integrate with external services, ensuring integrations are secure, reliable, and maintainable.

**What problem it solves**

- Features implemented without third-party integration design
- Integration requirements discovered late in development
- Missing integration documentation (sequence diagrams, data flow diagrams)
- Inconsistent integration approach across features
- Integration failures not properly handled
- Security vulnerabilities from improper integration design
- Integration specifications not traceable to requirements

**What "success" looks like at the end**

A complete third-party integration specification document that includes:
- Integration overview and vendor information
- **Sequence diagrams created** (REQUIRED - minimum one per integration flow)
- **Data flow diagrams created** (REQUIRED - minimum one per integration)
- API specifications complete
- Data mapping defined
- Error handling and failure modes defined
- Rate limiting and quotas defined
- Security requirements defined
- Monitoring and observability requirements defined
- Testing strategy defined
- Integration specification reviewed and approved
- Ready for Backend Implementation Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Architecture Review Procedure](./architecture-review-procedure.md) has been completed
- Feature requires integration with third-party services
- Third-party service integration needs to be designed before implementation
- Feature Implementation Orchestration Procedure invokes this (Phase 2, conditional - only if feature requires third-party integrations)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Architecture decisions** - Architecture decisions and ADRs (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Architecture document** - System architecture, service boundaries (from Architecture Review Procedure)
- [ ] **Requirements document** - Functional requirements, acceptance criteria (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Feature definition** - High-level feature description, context (from [Feature Intake Procedure](./feature-intake-procedure.md))
- [ ] **Third-party service documentation** - API documentation, integration guides from third-party vendor
- [ ] **Vendor evaluation** - Vendor evaluation results (if vendor evaluation was performed)

**Decisions already made:**
- [ ] **Architecture is defined** - Architecture decisions have been made (from Architecture Review Procedure)
- [ ] **Requirements are defined** - Requirements are complete (from Requirements & Scope Procedure)
- [ ] **Feature requires third-party integration** - Feature has been determined to need third-party integration

**Constraints:**
- [ ] **Third-party integration standards** - Must comply with [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md)
- [ ] **Security standards** - Must align with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **Vendor constraints** - Must work within third-party service limitations and capabilities
- [ ] **Time constraints** - Integration specification must complete before implementation begins

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing architecture decisions** → Invoke [Architecture Review Procedure](./architecture-review-procedure.md) first
- **Missing requirements** → Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md) first
- **Missing third-party documentation** → Obtain documentation from vendor, consult vendor support
- **Feature doesn't require third-party integration** → Skip this procedure, proceed to next procedure

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 10 ordered steps from integration review through integration specification approval
- **Procedures to be invoked** - None (this is a standalone procedure)
- **Dependencies between steps** - Review → Vendor → API Specs → Sequence Diagrams → Data Flow Diagrams → Data Mapping → Error Handling → Security → Monitoring → Approval
- **Risks & unknowns** - Third-party documentation unclear, integration complexity unknown, API changes, vendor reliability
- **Validation points** - After sequence diagrams, after data flow diagrams, after API specifications, after error handling, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Third-Party Integration Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Integration Requirements and Vendor Information

**Purpose**
- Understand integration needs from requirements
- Review vendor information and capabilities
- Identify integration scope and complexity

**Inputs**
- **From:** Procedure Required Inputs (requirements document, feature definition, third-party service documentation, vendor evaluation)

**Actions**
- Review requirements document for integration needs:
  - What third-party services are needed?
  - What functionality requires third-party integration?
  - What are the integration use cases?
  - What are the integration requirements?
- Review feature definition for integration context
- Review vendor information:
  - Vendor name and service
  - Vendor capabilities
  - Vendor limitations
  - Vendor reliability and SLA
- Review third-party service documentation:
  - API documentation
  - Integration guides
  - Authentication requirements
  - Rate limits and quotas
  - Error handling
- Identify integration scope:
  - Which features require integration?
  - What data needs to be exchanged?
  - What operations need to be performed?
- Document integration overview in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for integration overview requirements

**Decisions / Evaluations**
- **Decision:** Are integration requirements clear?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify integration requirements with stakeholders, review requirements document

**Outputs**
- Integration requirements reviewed
- Vendor information reviewed
- Integration scope identified
- Integration overview documented

**Failure Handling**
- **Failure:** Integration requirements unclear
  - **Action:** Consult stakeholders, review requirements document, clarify integration needs
  - **Retry:** Step 1 after integration requirements are clarified
- **Failure:** Third-party documentation unavailable or unclear
  - **Action:** Contact vendor support, request documentation, consult vendor resources
  - **Retry:** Step 1 after documentation is obtained

---

#### Step 2: Document Third-Party API Specifications

**Purpose**
- Document third-party API endpoints and contracts
- Define request/response formats
- Specify authentication requirements

**Inputs**
- **From:** Step 1 outputs (integration requirements, vendor documentation)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for API specification requirements

**Actions**
- Document API base information:
  - Base URL
  - API version
  - API documentation URL
- Document all endpoints used:
  - Endpoint path
  - HTTP method (GET, POST, PUT, DELETE, PATCH, etc.)
  - Request format (JSON, XML, form data, etc.)
  - Response format (JSON, XML, etc.)
  - Request parameters:
    - Query parameters
    - Path parameters
    - Request body structure
  - Response structure:
    - Success response format
    - Error response format
    - Response codes
- Document authentication:
  - Authentication method (API key, OAuth, JWT, etc.)
  - Authentication headers
  - Token acquisition process
  - Token refresh process
- Document request/response examples:
  - Example requests with sample data
  - Example responses (success and error)
- Document rate limits:
  - Requests per second/minute/hour
  - Concurrent request limits
  - Burst limits
  - Rate limit headers
- Document API contract:
  - Request contract (required fields, optional fields, validation rules)
  - Response contract (response structure, field types)
  - Versioning strategy
  - Breaking change policy
- Document in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for API specification requirements

**Decisions / Evaluations**
- **Decision:** Are API specifications complete and accurate?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, review vendor documentation, complete missing specifications

**Outputs**
- API specifications documented
- Endpoints documented
- Authentication documented
- Request/response examples documented

**Failure Handling**
- **Failure:** API specifications incomplete or inaccurate
  - **Action:** Review vendor documentation, test API endpoints, verify specifications
  - **Retry:** Step 2 after improving specifications

---

#### Step 3: Create Sequence Diagrams (REQUIRED)

**Purpose**
- Create sequence diagrams showing integration flows
- Document message sequences and timing
- Include error handling flows

**Inputs**
- **From:** Step 1 outputs (integration requirements), Step 2 outputs (API specifications)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for sequence diagram requirements

**Actions**
- Identify all integration flows:
  - Primary integration flows (happy path)
  - Secondary integration flows (alternative paths)
  - Error flows (error handling paths)
- For each integration flow, create sequence diagram:
  - **Diagram Title:** Descriptive title indicating the integration flow
  - **Actors/Components:** Include all participants:
    - Frontend (if applicable)
    - Backend/API
    - Middleware (if applicable)
    - Third-party service
    - Database (if applicable)
  - **Message Flow:** Document complete message sequence:
    - Request messages (with request details, parameters)
    - Response messages (with response details, status codes)
    - Error messages (if applicable, with error details)
    - Timeout scenarios (if applicable)
  - **Timing Information:** Include critical timing:
    - Timeout values (connection timeout, read timeout)
    - Expected response times
    - Retry intervals
  - **Error Handling:** Show error scenarios:
    - Error responses from third-party
    - Retry attempts
    - Circuit breaker activation
    - Fallback mechanisms
  - **Authentication Flow:** Show authentication sequence (if applicable):
    - Token acquisition
    - Token validation
    - Token refresh
- Create sequence diagrams using:
  - Mermaid format (recommended for markdown)
  - PlantUML format
  - Standard UML sequence diagram format
- Ensure diagrams are:
  - Complete (show full flow from initiation to completion)
  - Accurate (match actual API behavior)
  - Include error scenarios
- Store diagrams in version control:
  - Save diagram files with specification document
  - Link diagrams in specification document
- Document sequence diagrams in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for sequence diagram requirements

**Decisions / Evaluations**
- **Decision:** Are sequence diagrams complete for all integration flows?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, create missing sequence diagrams
- **Decision:** Do sequence diagrams include error handling?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, add error handling flows to diagrams

**Outputs**
- Sequence diagrams created (minimum one per integration flow)
- Sequence diagrams include all actors/components
- Sequence diagrams include error handling flows
- Sequence diagrams version controlled and linked

**Failure Handling**
- **Failure:** Sequence diagrams incomplete or inaccurate
  - **Action:** Review integration flows, verify with API specifications, improve diagrams
  - **Retry:** Step 3 after improving diagrams

---

#### Step 4: Create Data Flow Diagrams (REQUIRED)

**Purpose**
- Create data flow diagrams showing how data flows through the integration
- Document data sources, destinations, and transformations
- Mark sensitive data flows

**Inputs**
- **From:** Step 1 outputs (integration requirements), Step 2 outputs (API specifications)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for data flow diagram requirements

**Actions**
- Identify all data flows in the integration:
  - Data sent to third-party service
  - Data received from third-party service
  - Data transformations
  - Data storage
- Create data flow diagram:
  - **Diagram Title:** Descriptive title indicating the data flow
  - **Data Sources:** Document where data originates:
    - User input
    - Internal systems
    - Databases
    - Other third-party services
  - **Data Destinations:** Document where data goes:
    - Third-party service
    - Internal systems
    - Databases
    - User interfaces
  - **Data Transformations:** Document how data is transformed:
    - Format conversions (JSON to XML, date formats, etc.)
    - Data mapping (field mappings, value mappings)
    - Data enrichment (adding data, calculating fields)
    - Data validation (validation rules, error handling)
  - **Data Stores:** Document where data is stored:
    - Temporary storage (cache, queues, session storage)
    - Persistent storage (databases, file storage)
    - Third-party storage
  - **Data Flow Direction:** Clearly indicate data flow direction with arrows
  - **Data Sensitivity:** Mark sensitive data:
    - PII (Personally Identifiable Information)
    - Financial data
    - Health data
    - Authentication credentials
    - Other sensitive data
  - **Data Privacy:** Document privacy considerations:
    - Encryption requirements
    - Anonymization requirements
    - Data retention requirements
- Create data flow diagram using:
  - Mermaid format (recommended for markdown)
  - PlantUML format
  - Standard data flow diagram format
- Ensure diagram is:
  - Complete (shows all data flows in the integration)
  - Accurate (matches actual data flow)
  - Marks sensitive data
- Store diagram in version control:
  - Save diagram file with specification document
  - Link diagram in specification document
- Document data flow diagram in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for data flow diagram requirements

**Decisions / Evaluations**
- **Decision:** Does data flow diagram show all data flows?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, add missing data flows to diagram
- **Decision:** Are sensitive data flows marked?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, mark sensitive data flows

**Outputs**
- Data flow diagram created (minimum one per integration)
- Data flow diagram shows all data flows
- Sensitive data flows marked
- Data flow diagram version controlled and linked

**Failure Handling**
- **Failure:** Data flow diagram incomplete or inaccurate
  - **Action:** Review data flows, verify with requirements, improve diagram
  - **Retry:** Step 4 after improving diagram

---

#### Step 5: Define Data Mapping

**Purpose**
- Define how data is mapped between internal system and third-party service
- Specify data transformations
- Document data validation rules

**Inputs**
- **From:** Step 2 outputs (API specifications), Step 4 outputs (data flow diagram)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for data mapping requirements

**Actions**
- Identify data mappings:
  - Source data (internal system fields, database fields, user input)
  - Target data (third-party API fields, third-party data format)
- Define mapping rules:
  - **Direct mapping:** Field-to-field mapping (source field → target field)
  - **Transformation mapping:** Calculated or formatted mappings:
    - Format conversions (date formats, number formats, string formats)
    - Unit conversions
    - Encoding conversions
    - Calculated fields
  - **Conditional mapping:** If-then rules (conditional logic)
  - **Default values:** Default values for optional or missing fields
- Define data validation:
  - Required fields (fields that must be present)
  - Format validation (email, URL, date, number formats)
  - Range validation (min/max values, length limits)
  - Business rule validation (custom validation logic)
- Document data mapping:
  - Create mapping table (source → target mappings)
  - Document transformation logic (code or pseudocode)
  - Document validation rules (list of validation rules)
  - Document error handling (how mapping errors are handled)
- Document in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for data mapping requirements

**Decisions / Evaluations**
- **Decision:** Is data mapping complete and clear?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, complete missing mappings, clarify mapping rules

**Outputs**
- Data mapping defined
- Mapping rules documented
- Data validation rules defined
- Data mapping documented

**Failure Handling**
- **Failure:** Data mapping incomplete or unclear
  - **Action:** Review data requirements, clarify mapping rules, complete missing mappings
  - **Retry:** Step 5 after improving data mapping

---

#### Step 6: Define Error Handling and Failure Modes

**Purpose**
- Define error scenarios and handling strategies
- Specify retry logic and circuit breakers
- Define fallback mechanisms

**Inputs**
- **From:** Step 2 outputs (API specifications), Step 3 outputs (sequence diagrams)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for error handling and failure mode requirements

**Actions**
- Identify error scenarios:
  - **Network errors:** Timeout, connection failure, DNS failure
  - **API errors:** 4xx responses (client errors), 5xx responses (server errors)
  - **Authentication errors:** 401 Unauthorized, token expiration, invalid credentials
  - **Rate limit errors:** 429 Too Many Requests, quota exceeded
  - **Data validation errors:** Invalid data format, missing required fields
  - **Business logic errors:** Business rule violations, invalid operations
- Define error responses:
  - Error response format from third-party
  - Error codes and error messages
  - Error details and error context
- Define retry logic:
  - Which errors are retried (retryable vs. non-retryable)
  - Retry strategy (exponential backoff, linear backoff, fixed interval)
  - Maximum retry attempts
  - Retry intervals (initial delay, max delay, backoff multiplier)
- Define circuit breaker:
  - Failure threshold (number of failures to open circuit)
  - Success threshold (number of successes to close circuit)
  - Timeout period (how long circuit stays open)
  - Circuit breaker states (closed, open, half-open)
  - Circuit breaker recovery strategy
- Define timeout handling:
  - Connection timeout value
  - Read timeout value
  - Timeout behavior (fail fast, retry)
  - Timeout error handling
- Define fallback mechanisms:
  - Cached responses (use cached data when integration fails)
  - Default values (use default values when integration fails)
  - Alternative data sources (use alternative sources when integration fails)
  - Graceful degradation (reduce functionality when integration fails)
- Document error handling and failure modes in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for error handling requirements

**Decisions / Evaluations**
- **Decision:** Is error handling comprehensive?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, add missing error scenarios, improve error handling
- **Decision:** Are failure modes well-defined?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, improve failure mode definitions

**Outputs**
- Error scenarios identified
- Error handling defined
- Retry logic defined
- Circuit breaker defined
- Fallback mechanisms defined

**Failure Handling**
- **Failure:** Error handling incomplete
  - **Action:** Review error scenarios, add missing error handling, improve failure modes
  - **Retry:** Step 6 after improving error handling

---

#### Step 7: Define Rate Limiting and Quotas

**Purpose**
- Define rate limits and quotas from third-party service
- Specify throttling strategies
- Plan for rate limit handling

**Inputs**
- **From:** Step 2 outputs (API specifications)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for rate limiting requirements

**Actions**
- Document rate limits:
  - Requests per second/minute/hour
  - Concurrent request limits
  - Burst limits
- Document quota limits:
  - Daily quotas
  - Monthly quotas
  - Data transfer quotas
  - API call quotas
- Define throttling strategy:
  - How throttling is handled (queue requests, reject requests, delay requests)
  - Throttling response format
  - Throttling recovery (how to recover from throttling)
- Document rate limit headers:
  - Rate limit headers returned by API (X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset)
  - How headers are parsed
  - How headers are used (monitoring, throttling decisions)
- Define rate limit handling:
  - How to detect rate limit exceeded
  - How to handle rate limit errors
  - How to prevent rate limit errors (request queuing, request batching)
- Document in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for rate limiting requirements

**Decisions / Evaluations**
- **Decision:** Are rate limits and quotas documented?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, document rate limits and quotas

**Outputs**
- Rate limits documented
- Quotas documented
- Throttling strategy defined
- Rate limit handling defined

**Failure Handling**
- **Failure:** Rate limit information unclear
  - **Action:** Review vendor documentation, contact vendor support, clarify rate limits
  - **Retry:** Step 7 after obtaining rate limit information

---

#### Step 8: Define Security Requirements

**Purpose**
- Define authentication and authorization requirements
- Specify credential management
- Define data privacy requirements

**Inputs**
- **From:** Step 2 outputs (API specifications), Step 1 outputs (integration requirements)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for security requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for security implementation

**Actions**
- Define authentication:
  - Authentication method (API keys, OAuth 2.0, JWT tokens, Basic authentication)
  - Credential management:
    - Where credentials are stored (secrets management system)
    - How credentials are retrieved
    - Credential rotation policy
    - Credential revocation process
  - Token management (if applicable):
    - Token acquisition process
    - Token storage (secure storage, not in code)
    - Token refresh process
    - Token expiration handling
- Define authorization:
  - Authorization scopes (what scopes/permissions are required)
  - How scopes are requested
  - How scopes are validated
  - Access control (what resources can be accessed, what actions can be performed)
- Define data privacy:
  - Sensitive data identification (PII, financial data, health data)
  - How sensitive data is handled
  - Data encryption requirements:
    - Encryption in transit (TLS/SSL)
    - Encryption at rest (if applicable)
  - Data retention:
    - How long data is retained
    - Data deletion requirements
  - Compliance requirements:
    - Regulatory compliance (GDPR, HIPAA, PCI-DSS, etc.)
    - Privacy policy compliance
- Document security requirements in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for security requirements

**Decisions / Evaluations**
- **Decision:** Are security requirements adequate?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, improve security requirements, add missing security measures

**Outputs**
- Authentication requirements defined
- Authorization requirements defined
- Data privacy requirements defined
- Security requirements documented

**Failure Handling**
- **Failure:** Security requirements inadequate
  - **Action:** Review security standards, consult security team, improve security requirements
  - **Retry:** Step 8 after improving security

---

#### Step 9: Define Monitoring and Observability Requirements

**Purpose**
- Define logging, metrics, and alerting requirements
- Specify integration health monitoring
- Define observability strategy

**Inputs**
- **From:** All previous step outputs
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for monitoring requirements

**Actions**
- Define logging requirements:
  - **Log Events:**
    - API requests (request details, parameters, headers)
    - API responses (response details, status codes, response time)
    - Errors (error details, stack traces, error context)
    - Retries (retry attempts, retry reasons, retry outcomes)
    - Circuit breaker events (state changes, activation reasons)
  - **Log Format:** Structured logging (JSON format)
  - **Required Fields:** Timestamp, service name, request ID, correlation ID, integration name
  - **Optional Fields:** User ID, tenant ID, request duration, response size
  - **Log Levels:** Debug, Info, Warn, Error
- Define metrics requirements:
  - **Request Metrics:**
    - Request count (total, success, error)
    - Request duration (average, p50, p95, p99)
    - Request success rate
    - Request error rate (by error type)
  - **Integration Metrics:**
    - Integration health (up/down, degraded)
    - Integration availability (uptime percentage)
    - Integration latency (average, p95, p99)
    - Integration throughput (requests per second)
  - **Error Metrics:**
    - Error count by type
    - Error rate
    - Retry count
    - Circuit breaker activations
- Define alerting requirements:
  - **Alert Conditions:**
    - High error rate (threshold, time window)
    - High latency (threshold, time window)
    - Circuit breaker activation
    - Rate limit exceeded
    - Integration unavailable
  - **Alert Severity:**
    - Critical (immediate action required)
    - High (action required soon)
    - Medium (monitor and investigate)
    - Low (informational)
  - **Alert Channels:**
    - Email notifications
    - Slack/PagerDuty notifications
    - SMS notifications
    - Dashboard notifications
- Document monitoring and observability requirements in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for monitoring requirements

**Decisions / Evaluations**
- **Decision:** Are monitoring requirements comprehensive?
  - **Go:** If yes, proceed to Step 10
  - **No-Go:** If no, add missing monitoring requirements

**Outputs**
- Logging requirements defined
- Metrics requirements defined
- Alerting requirements defined
- Monitoring requirements documented

**Failure Handling**
- **Failure:** Monitoring requirements incomplete
  - **Action:** Review observability standards, add missing monitoring requirements
  - **Retry:** Step 9 after improving monitoring

---

#### Step 10: Define Testing Strategy

**Purpose**
- Define mocking and stubbing approach
- Specify integration testing strategy
- Define contract testing approach

**Inputs**
- **From:** All previous step outputs
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for testing requirements

**Actions**
- Define mocking/stubbing strategy:
  - How third-party services are mocked (mock server, stub responses, test doubles)
  - Mock response formats (match actual API responses)
  - Mock error scenarios (simulate errors, timeouts, rate limits)
  - Mock timing scenarios (simulate slow responses, delays)
- Define integration testing:
  - Test environment setup (sandbox environment, test credentials)
  - Test data requirements (test data setup, test data cleanup)
  - Test scenarios:
    - Happy path scenarios
    - Error scenarios
    - Edge cases
    - Performance scenarios
  - Test coverage (what scenarios are tested)
- Define contract testing:
  - API contract validation (request/response schema validation)
  - Request validation (validate request format, required fields)
  - Response validation (validate response format, expected fields)
  - Schema validation (validate against OpenAPI/JSON Schema)
- Document testing strategy in integration specification document
- Reference [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for testing requirements

**Decisions / Evaluations**
- **Decision:** Is testing strategy feasible?
  - **Go:** If yes, proceed to Step 11
  - **No-Go:** If no, improve testing strategy, ensure feasibility

**Outputs**
- Mocking/stubbing strategy defined
- Integration testing strategy defined
- Contract testing strategy defined
- Testing strategy documented

**Failure Handling**
- **Failure:** Testing strategy not feasible
  - **Action:** Review testing requirements, improve testing strategy, ensure testability
  - **Retry:** Step 10 after improving testing strategy

---

#### Step 11: Review and Approve Integration Specification

**Purpose**
- Review integration specification for completeness and quality
- Verify sequence diagrams and data flow diagrams are present
- Obtain approvals from stakeholders
- Finalize integration specification document

**Inputs**
- **From:** All previous step outputs (complete integration specification)
- **Reference:** [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) for validation and acceptance criteria

**Actions**
- Review integration specification against [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md) checklist:
  - [ ] All required sections present
  - [ ] **Sequence diagrams created** (REQUIRED - minimum one per integration flow)
  - [ ] **Data flow diagrams created** (REQUIRED - minimum one per integration)
  - [ ] API specifications complete
  - [ ] Data mapping defined
  - [ ] Error handling defined
  - [ ] Rate limiting and quotas defined
  - [ ] Security requirements defined
  - [ ] Monitoring and observability defined
  - [ ] Testing strategy defined
  - [ ] Failure modes defined
- Verify sequence diagrams:
  - [ ] At least one sequence diagram exists
  - [ ] Sequence diagrams show complete integration flows
  - [ ] Sequence diagrams include all actors/components
  - [ ] Sequence diagrams include error handling flows
  - [ ] Sequence diagrams are version controlled and linked
- Verify data flow diagrams:
  - [ ] At least one data flow diagram exists
  - [ ] Data flow diagrams show all data flows
  - [ ] Data flow diagrams mark sensitive data
  - [ ] Data flow diagrams are version controlled and linked
- Conduct security team review:
  - Security team reviews integration specification
  - Security team provides feedback
  - Address security team feedback
- Conduct architecture team review (if applicable):
  - Architecture team reviews alignment with architecture
  - Architecture team provides feedback
  - Address architecture team feedback
- Finalize integration specification document:
  - Update integration specification with review feedback
  - Mark integration specification as "Approved"
  - Version control integration specification document
  - Link integration specification to feature documentation/ADR
  - Update Jira ticket with integration specification reference

**Decisions / Evaluations**
- **Decision:** Do sequence diagrams and data flow diagrams meet requirements?
  - **Go:** If yes, proceed to approval
  - **No-Go:** If no, improve diagrams, ensure they meet standards
- **Decision:** Does integration specification meet quality standards?
  - **Go:** If yes, proceed to approval
  - **No-Go:** If no, address quality issues, re-review
- **Decision:** Has security team approved integration specification?
  - **Go:** If yes, proceed to finalization
  - **No-Go:** If no, address security team feedback, re-review

**Outputs**
- Integration specification reviewed and approved
- Sequence diagrams verified
- Data flow diagrams verified
- Integration specification document finalized
- Integration specification version controlled and linked
- Ready for Backend Implementation Procedure

**Failure Handling**
- **Failure:** Sequence diagrams or data flow diagrams missing or incomplete
  - **Action:** Create missing diagrams, improve existing diagrams, ensure they meet standards
  - **Retry:** Step 11 after improving diagrams
- **Failure:** Integration specification does not meet quality standards
  - **Action:** Address quality issues, improve integration specification, re-review
  - **Retry:** Step 11 after improving specification
- **Failure:** Security team or architecture team does not approve
  - **Action:** Address feedback, revise integration specification, re-review
  - **Retry:** Step 11 after addressing feedback

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Third-Party Integration Specification Document** - Complete integration specification following [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md)
  - Integration overview
  - **Sequence diagrams** (REQUIRED - minimum one per integration flow)
  - **Data flow diagrams** (REQUIRED - minimum one per integration)
  - API specifications
  - Data mapping
  - Error handling and failure modes
  - Rate limiting and quotas
  - Security requirements
  - Monitoring and observability requirements
  - Testing strategy

**State changes:**
- Integration specification is approved and ready for use
- Sequence diagrams are created and version controlled
- Data flow diagrams are created and version controlled
- Integration specification is linked to feature documentation

**Decisions recorded:**
- Integration approach
- API specifications
- Error handling strategy
- Security approach
- Monitoring strategy

**Signals emitted:**
- "Integration Specification Complete" - Integration specification is approved and ready
- "Sequence Diagrams Created" - Required sequence diagrams are complete
- "Data Flow Diagrams Created" - Required data flow diagrams are complete
- "Ready for Backend Implementation" - Integration specification ready for implementation

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Integration specification document contains all required sections (per Third-Party Integration Standards)
- [ ] **At least one sequence diagram exists** (REQUIRED)
- [ ] **At least one data flow diagram exists** (REQUIRED)
- [ ] Sequence diagrams show complete integration flows
- [ ] Data flow diagrams show all data flows
- [ ] API specifications are complete and accurate
- [ ] Data mapping is defined
- [ ] Error handling is comprehensive
- [ ] Security requirements are adequate

**Reviews required:**
- [ ] Security team review (must approve)
- [ ] Architecture team review (if applicable)

**Automated checks:**
- [ ] Integration specification document structure validated (all sections present)
- [ ] Integration specification document format validated (markdown, version controlled)
- [ ] Sequence diagrams exist and are linked
- [ ] Data flow diagrams exist and are linked

**Who/what can approve completion:**
- **Security Team** - Must review and approve integration specification
- **Architecture Team** - Must review if architecture alignment needed

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Integration Specification Document** → Input for [Backend Implementation Procedure](./backend-implementation-procedure.md) (implements third-party integration)
- **Sequence Diagrams** → Input for Backend Implementation Procedure (guides implementation flow)
- **Data Flow Diagrams** → Input for Backend Implementation Procedure (guides data handling)
- **API Specifications** → Input for Backend Implementation Procedure (implements API clients)

**Procedures that depend on this:**
- **Backend Implementation Procedure** - Uses integration specification to implement third-party integration
- **Integration Testing Procedure** - Uses integration specification to test integrations

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Integration requirements reviewed and vendor information documented
- [ ] API specifications documented
- [ ] **At least one sequence diagram created** (REQUIRED)
- [ ] **Sequence diagrams show complete integration flows** (REQUIRED)
- [ ] **Sequence diagrams include error handling flows** (REQUIRED)
- [ ] **At least one data flow diagram created** (REQUIRED)
- [ ] **Data flow diagrams show all data flows** (REQUIRED)
- [ ] **Data flow diagrams mark sensitive data** (REQUIRED)
- [ ] Data mapping defined
- [ ] Error handling and failure modes defined
- [ ] Rate limiting and quotas defined
- [ ] Security requirements defined
- [ ] Monitoring and observability requirements defined
- [ ] Testing strategy defined
- [ ] Integration specification reviewed by security team
- [ ] Integration specification reviewed by architecture team (if applicable)
- [ ] Integration specification document is complete (all sections per Third-Party Integration Standards)
- [ ] Integration specification document is version controlled
- [ ] Sequence diagrams are version controlled and linked
- [ ] Data flow diagrams are version controlled and linked
- [ ] Integration specification is linked to feature documentation/ADR
- [ ] Jira ticket updated with integration specification reference
- [ ] Ready for Backend Implementation Procedure

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with integration specification reference
- [ ] **Integration Specification Document** - Document location and version
- [ ] **Sequence Diagrams** - Diagram file locations and versions
- [ ] **Data Flow Diagrams** - Diagram file locations and versions
- [ ] **Architecture Document** - Link to architecture that informed integration
- [ ] **ADRs** - Link to architecture decisions that informed integration
- [ ] **Requirements Document** - Link to requirements that informed integration

**Audit trail:**
- **Integration specification date** - When integration specification was created
- **Security team involved** - Who was involved in integration design and review
- **Sequence diagrams created** - Count and list of sequence diagrams
- **Data flow diagrams created** - Count and list of data flow diagrams
- **Approval date** - When integration specification was approved
- **Approval stakeholders** - Who approved integration specification

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Integration specification document complete
- Sequence diagrams created and verified
- Data flow diagrams created and verified
- Integration specification reviewed and approved
- Ready for Backend Implementation Procedure

#### ⚠️ Blocked
- **Reason:** Third-party documentation unclear, vendor unavailable, integration complexity unclear, sequence/data flow diagrams cannot be created
- **Required action:** Address blocker (obtain documentation, contact vendor, clarify complexity, create diagrams)
- **Who to notify:** Security team lead, architecture team lead, feature owner
- **Status:** Integration specification paused until blocker resolved

#### ❌ Aborted
- **Reason:** Feature doesn't require third-party integration, feature cancelled, integration specification cannot be determined, vendor not suitable
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why integration specification couldn't be completed
- **Next step:** Feature may proceed without integration or be redefined

#### 🔄 Partial Integration Specification
- **Reason:** Some integration requirements defined but others deferred, some diagrams deferred to implementation
- **Required action:** Document what was completed vs. deferred, update integration specification document
- **Status:** Core integration specification complete, some specifications deferred
- **Next step:** Proceed with defined specifications, deferred specifications addressed during implementation

---

## Usage Notes

### Integration Documentation Requirements

- **Sequence diagrams are REQUIRED** - At minimum, one sequence diagram per integration flow must be created
- **Data flow diagrams are REQUIRED** - At minimum, one data flow diagram per integration must be created
- Diagrams must be version controlled and linked in the specification document
- Diagrams must show complete flows including error handling

### Integration with Architecture Review

- Third-Party Integration Procedure depends on Architecture Review Procedure outputs
- Architecture decisions inform integration approach
- Integration specification should align with architecture decisions

### Integration with Third-Party Integration Standards

- Third-Party Integration Procedure must comply with [Third-Party Integration Standards](../../.ai_standards/sdlc-standards/third-party-integration-standards.md)
- Integration specifications should follow standards
- Sequence and data flow diagrams are mandatory per standards

### Conditional Execution

- This procedure is **conditional** - only invoked if feature requires third-party integration
- If feature doesn't require third-party integration, this procedure is skipped
- Decision to invoke is made in Feature Implementation Orchestration Procedure

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Integration Team / Architecture Team
