# Procedure: API Design

### 1. Purpose

**Why this procedure exists**

This procedure enables systematic design of new APIs or extension of existing APIs using OpenAPI specifications and type definitions. It ensures APIs follow consistent design patterns, align with architecture decisions, and create reusable, well-documented API contracts that can be reliably implemented and consumed.

**What problem it solves**

- Inconsistent API design patterns across services
- APIs that don't follow OpenAPI standards
- Missing or incomplete API contracts
- APIs that don't align with architecture decisions
- APIs that are hard to consume or maintain
- Duplicate or conflicting API designs
- Type mismatches between API contracts and implementations
- APIs designed without considering existing APIs

**What "success" looks like at the end**

A complete API design that includes:
- OpenAPI specification document (valid and complete)
- Type definitions (TypeScript interfaces/types or equivalent)
- API endpoints designed with request/response schemas
- API design aligned with architecture and existing patterns
- API design reviewed and approved
- API contract frozen and ready for implementation
- Ready for API Implementation Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- [API Discovery Procedure](./api-discovery-procedure.md) has been completed (existing APIs discovered)
- Need to design new API for feature
- Need to extend existing API (based on API Discovery evaluation)
- [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md) completed (service boundaries defined)
- [Requirements & Scope Procedure](../feature-lifecycle/requirements-scope-procedure.md) completed (functional requirements defined)
- [Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md) invokes this (Phase 2: Technical Design)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **API Discovery Report** - Existing APIs discovered, reusability evaluation, recommendations (from [API Discovery Procedure](./api-discovery-procedure.md))
- [ ] **Feature requirements** - Functional requirements, use cases, acceptance criteria (from [Requirements & Scope Procedure](../feature-lifecycle/requirements-scope-procedure.md))
- [ ] **Architecture decisions** - Service boundaries, architectural patterns, ADRs (from [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md))
- [ ] **Data design** - Data models, schemas, relationships (from [Data Design Procedure](../feature-lifecycle/data-design-procedure.md), if applicable)
- [ ] **Existing OpenAPI specs** - Existing API specifications (if extending or referencing existing APIs)

**Decisions already made:**
- [ ] **API approach** - Use existing API, extend existing API, or create new API (from API Discovery evaluation)
- [ ] **API type** - REST, GraphQL, gRPC, or other
- [ ] **Service boundaries** - Which service owns this API
- [ ] **OpenAPI version** - OpenAPI 3.0, 3.1, etc.

**Constraints:**
- [ ] **API versioning strategy** - URL versioning (e.g., `/api/v1/`), header versioning, or query parameter versioning
- [ ] **Naming conventions** - Endpoint naming patterns, field naming conventions (camelCase, snake_case, etc.)
- [ ] **Authentication requirements** - AuthN/AuthZ requirements (from [AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md), if applicable)
- [ ] **Backwards compatibility requirements** - Must maintain backwards compatibility (from [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md), if applicable)
- [ ] **API Security Standards** - Security requirements (reference [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md))

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing API Discovery Report** → Invoke [API Discovery Procedure](./api-discovery-procedure.md) first
- **Missing architecture decisions** → Invoke [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md) first
- **Missing requirements** → Invoke [Requirements & Scope Procedure](../feature-lifecycle/requirements-scope-procedure.md) first
- **API approach unclear** → Review API Discovery Report, make decision on approach

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 10 ordered steps from reviewing prerequisites through obtaining approval
- **Procedures to be invoked** - None (standalone design procedure, but uses outputs from other procedures)
- **Dependencies between steps** - Review → Define Scope → Design Endpoints → Design Schemas → Create OpenAPI → Define Types → Review → Document → Approve
- **Risks & unknowns** - API Discovery results unclear, architecture decisions missing, requirements incomplete, design conflicts with existing APIs, approval not obtained
- **Validation points** - After endpoint design, after schema design, after OpenAPI creation, before approval

**Plan must be reviewed before execution begins**

**Output:**
- API Design Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Prerequisites

**Purpose**
- Review all prerequisite inputs
- Understand existing APIs and patterns
- Understand architecture constraints
- Understand requirements

**Inputs**
- **From:** Procedure Required Inputs (API Discovery Report, architecture decisions, requirements, data design)

**Actions**
- Review API Discovery Report:
  - Understand existing APIs discovered
  - Review API patterns and conventions identified
  - Review reusability evaluation and recommendations
  - Understand API approach decision (use/extend/create)
- Review architecture decisions:
  - Understand service boundaries
  - Review architectural patterns
  - Understand technology constraints
  - Review ADRs relevant to API design
- Review requirements:
  - Understand functional requirements
  - Review use cases
  - Understand acceptance criteria
  - Identify API operations needed
- Review data design (if applicable):
  - Understand data models
  - Review data relationships
  - Understand data constraints
- Document any questions or clarifications needed

**Decisions / Evaluations**
- **Decision:** Are all prerequisites clear and complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, request missing information or clarifications

**Outputs**
- Understanding of existing APIs and patterns
- Understanding of architecture constraints
- Understanding of requirements
- Questions/clarifications documented (if any)

**Failure Handling**
- **Failure:** API Discovery Report unclear or missing
  - **Action:** Request API Discovery Report, or invoke API Discovery Procedure
  - **Retry:** Step 1 after API Discovery complete
- **Failure:** Architecture decisions missing
  - **Action:** Request architecture decisions, or invoke Architecture Review Procedure
  - **Retry:** Step 1 after architecture decisions available
- **Failure:** Requirements incomplete
  - **Action:** Request complete requirements, or invoke Requirements & Scope Procedure
  - **Retry:** Step 1 after requirements complete

---

#### Step 2: Define API Scope & Boundaries

**Purpose**
- Define what this API covers
- Define service boundaries
- Identify API consumers
- Define API versioning strategy
- Determine if changes are breaking or non-breaking

**Inputs**
- **From:** Step 1 outputs (understanding of prerequisites)
- **From:** Procedure Required Inputs (architecture decisions, API approach)

**Actions**
- Define API scope:
  - What functionality this API provides
  - What operations this API supports
  - What data this API manages
  - What is explicitly out of scope
- Define service boundaries:
  - Which service owns this API
  - What other services this API interacts with
  - Service boundaries from architecture decisions
- Identify API consumers:
  - Who will consume this API (frontend, other services, external clients)
  - What are their requirements
  - What are their constraints
  - Identify existing consumers (if updating/extending existing API)
- Determine change type (if extending/updating existing API):
  - **Additive changes** (non-breaking):
    - Adding new endpoints
    - Adding new optional fields to existing requests/responses
    - Adding new query parameters (optional)
    - Adding new response fields (optional)
    - These changes maintain backwards compatibility
  - **Modifications** (potentially breaking):
    - Modifying existing endpoint behavior
    - Changing required fields to optional (non-breaking)
    - Changing optional fields to required (breaking)
    - Removing fields (breaking)
    - Changing field types (breaking)
    - Changing endpoint URLs (breaking)
    - Modifying response structures (potentially breaking)
    - These changes may require versioning
- Define API versioning strategy:
  - **For new APIs:** Choose versioning approach (URL, header, query parameter)
  - **For additive changes:** Can use existing version (non-breaking)
  - **For breaking modifications:** Must create new version:
    - URL versioning (e.g., `/api/v1/users` → `/api/v2/users`)
    - Header versioning (e.g., `Accept: application/vnd.api.v1+json` → `v2+json`)
    - Query parameter versioning (e.g., `?version=1` → `?version=2`)
  - Follow existing versioning patterns if extending APIs
  - Document versioning decision and rationale
- Assess backwards compatibility:
  - Review [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md) requirements
  - Determine if changes maintain backwards compatibility
  - If breaking changes are required:
    - Document why breaking changes are necessary
    - Plan migration path for existing consumers
    - Define deprecation timeline for old version (if applicable)
    - Coordinate with API consumers on migration
- Document API scope and boundaries

**Decisions / Evaluations**
- **Decision:** Is API scope clear and bounded?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, refine scope and boundaries
- **Decision:** Does API scope align with service boundaries?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, adjust scope or consult architecture team
- **Decision:** Are changes breaking or non-breaking?
  - **Go:** If determined, proceed to Step 3
  - **No-Go:** If unclear, analyze changes more carefully, consult with API consumers
- **Decision:** If breaking changes, is versioning strategy defined?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, define versioning strategy before proceeding
- **Decision:** If breaking changes, is migration path planned?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, plan migration path with API consumers before proceeding

**Outputs**
- API scope defined
- Service boundaries defined
- API consumers identified (including existing consumers if updating)
- Change type determined (additive vs. modifications)
- Breaking vs. non-breaking changes identified
- API versioning strategy defined
- Backwards compatibility assessment completed
- Migration path planned (if breaking changes)

**Failure Handling**
- **Failure:** API scope too broad or unclear
  - **Action:** Refine scope, break into smaller APIs if needed
  - **Retry:** Step 2 with refined scope
- **Failure:** Service boundaries unclear
  - **Action:** Consult architecture team, review architecture decisions
  - **Retry:** Step 2 after boundaries clarified
- **Failure:** Cannot determine if changes are breaking
  - **Action:** Review existing API contract, analyze impact on consumers, consult with API consumers
  - **Retry:** Step 2 after change analysis complete
- **Failure:** Breaking changes identified but no versioning strategy
  - **Action:** Define versioning strategy, review existing patterns, consult with architecture team
  - **Retry:** Step 2 after versioning strategy defined
- **Failure:** Breaking changes but migration path unclear
  - **Action:** Coordinate with API consumers, plan migration timeline, document migration steps
  - **Retry:** Step 2 after migration path planned
- **Failure:** Cannot determine if changes are breaking
  - **Action:** Review existing API contract, analyze impact on consumers, consult with API consumers
  - **Retry:** Step 2 after change analysis complete
- **Failure:** Breaking changes identified but no versioning strategy
  - **Action:** Define versioning strategy, review existing patterns, consult with architecture team
  - **Retry:** Step 2 after versioning strategy defined
- **Failure:** Breaking changes but migration path unclear
  - **Action:** Coordinate with API consumers, plan migration timeline, document migration steps
  - **Retry:** Step 2 after migration path planned

---

#### Step 3: Design API Endpoints

**Purpose**
- Design endpoint URLs and paths
- Design HTTP methods
- Design endpoint operations
- Follow RESTful or API design patterns

**Inputs**
- **From:** Step 2 outputs (API scope, boundaries, versioning)
- **From:** Step 1 outputs (requirements, existing API patterns)
- **From:** Procedure Required Inputs (API approach, naming conventions)

**Actions**
- Design endpoint URLs:
  - Follow RESTful conventions (if REST API)
  - Use resource-based URLs (e.g., `/api/v1/users`, `/api/v1/users/{id}`)
  - Follow existing URL patterns (if extending APIs)
  - Apply versioning strategy
  - Use consistent naming conventions
- Design HTTP methods:
  - GET for retrieval operations
  - POST for creation operations
  - PUT/PATCH for update operations
  - DELETE for deletion operations
  - Follow HTTP method semantics correctly
- Design endpoint operations:
  - List resources (GET collection)
  - Get single resource (GET by ID)
  - Create resource (POST)
  - Update resource (PUT/PATCH)
  - Delete resource (DELETE)
  - Custom operations (if needed, use POST with action in path or body)
- Follow API design patterns:
  - RESTful patterns (if REST API)
  - GraphQL patterns (if GraphQL API)
  - gRPC patterns (if gRPC API)
  - Follow existing patterns from API Discovery
- Document endpoint design

**Decisions / Evaluations**
- **Decision:** Do endpoints follow design patterns consistently?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, adjust endpoints to follow patterns
- **Decision:** Do endpoints align with existing API patterns?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, review existing patterns, adjust or document deviation

**Outputs**
- Endpoint URLs designed
- HTTP methods assigned
- Endpoint operations defined
- Endpoint design documented

**Failure Handling**
- **Failure:** Endpoints don't follow RESTful or design patterns
  - **Action:** Review design patterns, adjust endpoints
  - **Retry:** Step 3 with corrected endpoints
- **Failure:** Endpoints conflict with existing APIs
  - **Action:** Review API Discovery Report, adjust endpoints or consult with API owners
  - **Retry:** Step 3 after conflicts resolved

---

#### Step 4: Design Request Schemas

**Purpose**
- Define request body schemas
- Define query parameters
- Define path parameters
- Define headers
- Define request types/interfaces

**Inputs**
- **From:** Step 3 outputs (endpoint design)
- **From:** Step 1 outputs (data design, requirements)
- **From:** Procedure Required Inputs (naming conventions)

**Actions**
- Design request body schemas:
  - Define request body structure for POST/PUT/PATCH operations
  - Map to data models from data design
  - Define required vs. optional fields
  - Define field types and constraints
  - Follow naming conventions
- Design query parameters:
  - Define query parameters for GET operations (filtering, pagination, sorting)
  - Define parameter types and constraints
  - Follow query parameter naming conventions
- Design path parameters:
  - Define path parameters (e.g., `{id}` in `/api/v1/users/{id}`)
  - Define parameter types and constraints
  - Define parameter validation rules
- Design headers:
  - Define required headers (authentication, content-type, etc.)
  - Define optional headers
  - Follow header naming conventions
- Create request type definitions:
  - Create TypeScript interfaces/types (if using TypeScript)
  - Create request DTOs/schemas
  - Ensure type consistency
- Document request schemas

**Decisions / Evaluations**
- **Decision:** Are request schemas complete and consistent?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, complete missing schemas
- **Decision:** Do request schemas align with data design?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, review data design, adjust schemas

**Outputs**
- Request body schemas defined
- Query parameters defined
- Path parameters defined
- Headers defined
- Request types/interfaces created

**Failure Handling**
- **Failure:** Request schemas incomplete
  - **Action:** Review requirements, complete missing schemas
  - **Retry:** Step 4 with complete schemas
- **Failure:** Request schemas don't align with data design
  - **Action:** Review data design, adjust schemas or data design
  - **Retry:** Step 4 after alignment

---

#### Step 5: Design Response Schemas

**Purpose**
- Define success response schemas
- Define error response schemas
- Define response types/interfaces
- Define status codes

**Inputs**
- **From:** Step 4 outputs (request schemas)
- **From:** Step 1 outputs (data design, requirements)
- **From:** Procedure Required Inputs (naming conventions)

**Actions**
- Design success response schemas:
  - Define response body structure for each endpoint
  - Map to data models from data design
  - Define response structure (single resource, collection, etc.)
  - Follow naming conventions
- Design error response schemas:
  - Define standard error response format
  - Define error codes and messages
  - Define error message structure
  - Follow existing error response patterns (if extending APIs)
- Define HTTP status codes:
  - 200 OK for successful GET/PUT/PATCH
  - 201 Created for successful POST
  - 204 No Content for successful DELETE
  - 400 Bad Request for validation errors
  - 401 Unauthorized for authentication errors
  - 403 Forbidden for authorization errors
  - 404 Not Found for missing resources
  - 500 Internal Server Error for server errors
  - Use appropriate status codes for each operation
- Create response type definitions:
  - Create TypeScript interfaces/types (if using TypeScript)
  - Create response DTOs/schemas
  - Ensure type consistency
- Document response schemas

**Decisions / Evaluations**
- **Decision:** Are response schemas complete and consistent?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, complete missing schemas
- **Decision:** Do response schemas align with data design?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, review data design, adjust schemas

**Outputs**
- Success response schemas defined
- Error response schemas defined
- HTTP status codes defined
- Response types/interfaces created

**Failure Handling**
- **Failure:** Response schemas incomplete
  - **Action:** Review requirements, complete missing schemas
  - **Retry:** Step 5 with complete schemas
- **Failure:** Response schemas don't align with data design
  - **Action:** Review data design, adjust schemas or data design
  - **Retry:** Step 5 after alignment

---

#### Step 6: Create OpenAPI Specification

**Purpose**
- Create OpenAPI document structure
- Define info, servers, paths
- Define components (schemas, parameters, responses)
- Add OpenAPI annotations/decorators

**Inputs**
- **From:** Step 3 outputs (endpoint design)
- **From:** Step 4 outputs (request schemas)
- **From:** Step 5 outputs (response schemas)
- **From:** Procedure Required Inputs (OpenAPI version)

**Actions**
- Create OpenAPI document structure:
  - Create `openapi.yaml` or `openapi.json` file
  - Set OpenAPI version (3.0, 3.1, etc.)
  - Define `info` section (title, version, description, contact)
  - Define `servers` section (base URLs for different environments)
- Define paths:
  - Add all endpoint paths from Step 3
  - Define HTTP methods for each path
  - Add path parameters
  - Add query parameters
  - Add request bodies
  - Add responses (success and error)
  - Add operation descriptions
- Define components:
  - Define reusable schemas in `components/schemas`
  - Define reusable parameters in `components/parameters`
  - Define reusable responses in `components/responses`
  - Define security schemes in `components/securitySchemes`
- Add OpenAPI annotations/decorators (if using code-first approach):
  - Add decorators to controllers/routes (e.g., `@ApiOperation`, `@ApiResponse`)
  - Ensure annotations match OpenAPI spec
- Validate OpenAPI specification:
  - Use OpenAPI validator to check spec validity
  - Fix any validation errors
- Document OpenAPI specification location

**Decisions / Evaluations**
- **Decision:** Is OpenAPI specification complete and valid?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, complete missing sections or fix validation errors
- **Decision:** Does OpenAPI spec match endpoint and schema designs?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, update OpenAPI spec to match designs

**Outputs**
- OpenAPI specification document created
- All endpoints documented in OpenAPI
- All schemas defined in OpenAPI
- OpenAPI specification validated

**Failure Handling**
- **Failure:** OpenAPI specification invalid
  - **Action:** Run OpenAPI validator, fix validation errors
  - **Retry:** Step 6 after fixing errors
- **Failure:** OpenAPI spec doesn't match designs
  - **Action:** Review endpoint and schema designs, update OpenAPI spec
  - **Retry:** Step 6 after alignment

---

#### Step 7: Define Type Definitions

**Purpose**
- Create TypeScript types/interfaces (if applicable)
- Map OpenAPI schemas to types
- Ensure type consistency

**Inputs**
- **From:** Step 6 outputs (OpenAPI specification)
- **From:** Step 4 outputs (request types)
- **From:** Step 5 outputs (response types)

**Actions**
- Generate or create TypeScript types:
  - Use OpenAPI code generator (e.g., `openapi-generator`, `swagger-codegen`) to generate types from OpenAPI spec
  - Or manually create TypeScript interfaces/types matching OpenAPI schemas
  - Create types for request bodies
  - Create types for response bodies
  - Create types for query parameters
  - Create types for path parameters
- Map OpenAPI schemas to types:
  - Ensure type definitions match OpenAPI schemas exactly
  - Map OpenAPI types to TypeScript types (string → string, integer → number, etc.)
  - Handle nullable/optional fields correctly
  - Handle arrays and nested objects
- Ensure type consistency:
  - Use same types across request and response schemas where applicable
  - Reuse common types (e.g., Error, Pagination, etc.)
  - Ensure types are consistent with data models
- Create type definition files:
  - Create TypeScript declaration files (`.d.ts`) or source files (`.ts`)
  - Organize types by domain or endpoint
  - Export types for use in implementation
- Document type definitions

**Decisions / Evaluations**
- **Decision:** Are type definitions complete and consistent?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, complete missing types or fix inconsistencies
- **Decision:** Do type definitions match OpenAPI schemas?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, update types to match OpenAPI schemas

**Outputs**
- TypeScript types/interfaces created
- Types mapped to OpenAPI schemas
- Type consistency ensured
- Type definition files created

**Failure Handling**
- **Failure:** Type definitions don't match OpenAPI schemas
  - **Action:** Review OpenAPI schemas, update type definitions
  - **Retry:** Step 7 after alignment
- **Failure:** Type generation fails
  - **Action:** Check OpenAPI spec validity, fix generation issues, or create types manually
  - **Retry:** Step 7 after fixing issues

---

#### Step 8: Review & Validate Design

**Purpose**
- Review API design for consistency
- Validate against architecture
- Validate against requirements
- Check for design pattern compliance

**Inputs**
- **From:** Step 6 outputs (OpenAPI specification)
- **From:** Step 7 outputs (type definitions)
- **From:** Step 1 outputs (architecture decisions, requirements, existing API patterns)

**Actions**
- Review API design for consistency:
  - Check endpoint naming consistency
  - Check schema naming consistency
  - Check error response format consistency
  - Check authentication/authorization consistency
- Validate against API Security Standards:
  - Review [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
  - Ensure authentication requirements are met
  - Ensure authorization requirements are met
  - Ensure input validation requirements are met
  - Ensure rate limiting requirements are met (if applicable)
  - Ensure encryption requirements are met
  - Ensure error handling security requirements are met
  - Ensure security headers requirements are met
  - Ensure CORS requirements are met
- Validate against architecture:
  - Verify service boundaries are respected
  - Verify architectural patterns are followed
  - Verify technology constraints are met
  - Check against ADRs
- Validate against requirements:
  - Verify all functional requirements are met
  - Verify all use cases are supported
  - Verify acceptance criteria can be met
- Check for design pattern compliance:
  - Verify RESTful patterns (if REST API)
  - Verify existing API patterns are followed
  - Check for deviations from patterns
- Check for conflicts:
  - Check for conflicts with existing APIs
  - Check for naming conflicts
  - Check for schema conflicts
- Document review findings

**Decisions / Evaluations**
- **Decision:** Is API design consistent and compliant?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, address inconsistencies or compliance issues
- **Decision:** Does API design meet all requirements?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, update design to meet requirements

**Outputs**
- API design reviewed
- Consistency validated
- Architecture compliance validated
- Requirements compliance validated
- Review findings documented

**Failure Handling**
- **Failure:** Design inconsistencies found
  - **Action:** Address inconsistencies, update design
  - **Retry:** Step 8 after fixing inconsistencies
- **Failure:** Design doesn't meet requirements
  - **Action:** Review requirements, update design
  - **Retry:** Step 8 after design updated

---

#### Step 9: Document API Design

**Purpose**
- Document API purpose and usage
- Document authentication requirements
- Document rate limiting (if applicable)
- Document examples

**Inputs**
- **From:** Step 8 outputs (reviewed API design)
- **From:** Step 6 outputs (OpenAPI specification)
- **From:** Procedure Required Inputs (authentication requirements)

**Actions**
- Document API purpose and usage:
  - Write API overview and purpose
  - Document API scope and boundaries
  - Document API versioning strategy
  - Document API consumers
- Document authentication requirements:
  - Document authentication method (JWT, OAuth, API key, etc.)
  - Document how to obtain authentication tokens
  - Document authentication header format
  - Document authorization requirements
- Document rate limiting (if applicable):
  - Document rate limits
  - Document rate limit headers
  - Document rate limit error responses
- Document examples:
  - Add request examples to OpenAPI spec
  - Add response examples to OpenAPI spec
  - Create example requests/responses
  - Document common use cases
- Add OpenAPI descriptions:
  - Add descriptions to paths, operations, parameters, schemas
  - Add examples to OpenAPI spec
  - Add tags for organization
- Create API design document:
  - Create markdown document with API design details
  - Link to OpenAPI specification
  - Document design decisions
  - Document deviations from patterns (if any)

**Decisions / Evaluations**
- **Decision:** Is API design documentation complete?
  - **Go:** If yes, proceed to Step 10
  - **No-Go:** If no, complete missing documentation

**Outputs**
- API design documentation created
- Authentication requirements documented
- Rate limiting documented (if applicable)
- Examples added to OpenAPI spec
- API design document created

**Failure Handling**
- **Failure:** Documentation incomplete
  - **Action:** Review documentation requirements, complete missing sections
  - **Retry:** Step 9 with complete documentation

---

#### Step 10: Obtain Approval

**Purpose**
- Review with architecture team
- Review with API consumers
- Obtain approval
- Freeze API contract

**Inputs**
- **From:** Step 9 outputs (documented API design)
- **From:** Step 6 outputs (OpenAPI specification)
- **From:** Step 7 outputs (type definitions)

**Actions**
- Review with architecture team:
  - Present API design to architecture team
  - Review service boundaries and patterns
  - Address architecture concerns
  - Obtain architecture approval
- Review with API consumers:
  - Present API design to frontend team (if applicable)
  - Present API design to other service teams (if applicable)
  - Gather feedback on API usability
  - Address consumer concerns
- Review with security team (if required):
  - Present authentication/authorization design
  - Review security requirements
  - Address security concerns
- Obtain approval:
  - Document approval from architecture team
  - Document approval from API consumers
  - Document approval from security team (if required)
  - Obtain final approval from tech lead or API owner
- Freeze API contract:
  - Mark API contract as frozen
  - Document API contract version
  - Communicate API contract freeze to implementation teams
  - Set API contract change process (if changes needed)

**Decisions / Evaluations**
- **Decision:** Is API design approved?
  - **Go:** If yes, API design complete
  - **No-Go:** If no, address feedback and re-review
- **Decision:** Is API contract frozen?
  - **Go:** If yes, ready for implementation
  - **No-Go:** If no, complete approval process

**Outputs**
- Architecture team approval obtained
- API consumer approval obtained
- Security team approval obtained (if required)
- Final approval obtained
- API contract frozen
- Ready for API Implementation Procedure

**Failure Handling**
- **Failure:** Approval not obtained
  - **Action:** Address feedback, update design, re-review
  - **Retry:** Step 10 after addressing feedback
- **Failure:** Significant changes requested
  - **Action:** Update design, may need to revisit earlier steps
  - **Retry:** Step 10 after design updated (may need to revisit Steps 3-9)

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **OpenAPI Specification** - Complete OpenAPI document (`.yaml` or `.json`) with all endpoints, schemas, and documentation
- **Type Definitions** - TypeScript types/interfaces (or equivalent) matching OpenAPI schemas
- **API Design Documentation** - Markdown document with API design details, decisions, and usage
- **Approved API Contract** - API contract that has been reviewed and approved

**State changes:**
- API contract is frozen and ready for implementation
- OpenAPI specification is available for code generation
- Type definitions are available for implementation teams

**Decisions recorded:**
- API approach (use/extend/create)
- API versioning strategy
- API design patterns used
- Approval decisions

**Signals emitted:**
- "API Design Complete" - Ready for API Implementation Procedure
- "API Contract Frozen" - API contract is locked and ready for implementation
- "Ready for Implementation" - All implementation layers can begin

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] OpenAPI specification is valid (passes OpenAPI validator)
- [ ] All endpoints are documented in OpenAPI
- [ ] All request/response schemas are defined
- [ ] Type definitions match OpenAPI schemas
- [ ] API design aligns with architecture decisions
- [ ] API design meets all requirements
- [ ] API design follows existing patterns (if extending APIs)

**Reviews required:**
- [ ] Architecture team review (service boundaries, patterns)
- [ ] API consumer review (frontend team, other services)
- [ ] Security team review (if required)
- [ ] Tech lead or API owner approval

**Automated checks:**
- [ ] OpenAPI specification validates successfully
- [ ] Type definitions compile (if TypeScript)
- [ ] No conflicts with existing APIs (if extending)

**Who/what can approve completion:**
- **Architecture Team** - Must approve service boundaries and patterns
- **API Consumers** - Should approve API usability
- **Security Team** - Must approve if security requirements exist
- **Tech Lead or API Owner** - Must provide final approval

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **OpenAPI Specification** → Input for [API Implementation Procedure](./api-implementation-procedure.md) (API contract to implement)
- **Type Definitions** → Input for [API Implementation Procedure](./api-implementation-procedure.md), [Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md), [Backend Implementation Procedure](../feature-lifecycle/backend-implementation-procedure.md), [Middleware Implementation Procedure](../feature-lifecycle/middleware-implementation-procedure.md) (types for implementation)
- **API Design Documentation** → Input for all implementation procedures (design context)
- **Approved API Contract** → Input for all implementation procedures (frozen contract)

**Procedures that depend on this:**
- **[API Implementation Procedure](./api-implementation-procedure.md)** - Implements the API design
- **[Frontend Implementation Procedure](../feature-lifecycle/frontend-implementation-procedure.md)** - Uses API contracts and types
- **[Backend Implementation Procedure](../feature-lifecycle/backend-implementation-procedure.md)** - Implements API endpoints
- **[Middleware Implementation Procedure](../feature-lifecycle/middleware-implementation-procedure.md)** - Routes to APIs
- **[Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md)** - Coordinates API design with implementation

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] API Discovery Report reviewed
- [ ] API scope and boundaries defined
- [ ] All endpoints designed
- [ ] All request schemas defined
- [ ] All response schemas defined
- [ ] OpenAPI specification created and validated
- [ ] Type definitions created and match OpenAPI schemas
- [ ] API design reviewed for consistency
- [ ] API design validated against architecture
- [ ] API design validated against requirements
- [ ] API design documentation complete
- [ ] Architecture team approval obtained
- [ ] API consumer approval obtained (if applicable)
- [ ] Security team approval obtained (if required)
- [ ] Final approval obtained
- [ ] API contract frozen
- [ ] Ready for API Implementation Procedure

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **API Discovery Report** - Link to API Discovery Procedure outputs
- [ ] **OpenAPI Specification** - Location of OpenAPI file
- [ ] **Type Definitions** - Location of type definition files
- [ ] **API Design Documentation** - Location of design document
- [ ] **Architecture Decisions** - Links to relevant ADRs
- [ ] **Jira Ticket** - Ticket number for the feature/API
- [ ] **Approval Records** - Records of approvals from teams

**Audit trail:**
- **API Design start date** - When API design began
- **API Design completion date** - When API design was approved
- **API approach** - Use/extend/create decision
- **API version** - Version number assigned
- **Design decisions** - Key design decisions made
- **Approval dates** - Dates of approvals from each team
- **API contract freeze date** - When contract was frozen

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- OpenAPI specification complete and validated
- Type definitions created
- API design reviewed and approved
- API contract frozen
- Ready for API Implementation Procedure

#### ⚠️ Blocked
- **Reason:** Missing prerequisites (API Discovery Report, architecture decisions, requirements)
- **Required action:** Obtain missing prerequisites before proceeding
- **Who to notify:** Technical lead, feature owner
- **Status:** API design paused until prerequisites available

#### ❌ Aborted
- **Reason:** API approach changed (decided to use existing API instead), requirements changed significantly, design not viable
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (design artifacts can be kept for reference)
- **Lessons learned:** Document why design was aborted
- **Next step:** May proceed with different API approach or revisit when requirements clear

#### 🔄 Design Updated
- **Reason:** Significant feedback received requiring design changes
- **Required action:** Update design based on feedback, may need to revisit earlier steps
- **Status:** Design updated, re-review required
- **Next step:** Re-enter workflow at appropriate step to address feedback

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** API Team / Backend Team
