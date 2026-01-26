# Procedure: AuthN/AuthZ

### 1. Purpose

**Why this procedure exists**

This procedure defines authentication and authorization requirements, token specifications, and access control models for features. It creates an AuthN/AuthZ requirements document that drives security implementation and ensures access control is properly designed before implementation begins.

**What problem it solves**

- Features implemented without authentication/authorization design
- Access control requirements discovered late in development
- Inconsistent authentication/authorization approach across features
- Token/session management not properly specified
- Authorization models not defined before implementation
- Security vulnerabilities from improper access control
- Access control requirements not traceable to security threats

**What "success" looks like at the end**

A complete AuthN/AuthZ requirements document that includes:
- Authentication method selected and specified
- Identity model defined
- Authorization model defined (RBAC, ABAC, or resource-based)
- Token/session specifications complete
- Authorization enforcement points identified
- Multi-tenant isolation defined (if applicable)
- Audit and logging requirements defined
- Security requirements from threat model addressed
- AuthN/AuthZ requirements reviewed and approved
- Ready for implementation procedures (Backend, Frontend, Middleware)

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Threat Model Procedure](./threat-model-procedure.md) has been completed (if security threats identified)
- [Architecture Review Procedure](./architecture-review-procedure.md) has been completed
- Feature needs authentication/authorization before implementation
- Access control requirements need to be defined
- Feature Implementation Orchestration Procedure invokes this (Phase 2, conditional - only if feature requires AuthN/AuthZ)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Threat model document** - Security threats and mitigations (from [Threat Model Procedure](./threat-model-procedure.md), if security threats identified)
- [ ] **Security requirements** - Security requirements derived from threat model (from Threat Model Procedure)
- [ ] **Architecture decisions** - Architecture decisions and ADRs (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Architecture document** - System architecture, service boundaries (from Architecture Review Procedure)
- [ ] **Requirements document** - Functional requirements, acceptance criteria (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Feature definition** - High-level feature description, context (from [Feature Intake Procedure](./feature-intake-procedure.md))
- [ ] **Existing AuthN/AuthZ** - Current authentication/authorization implementation (if modifying existing AuthN/AuthZ)

**Decisions already made:**
- [ ] **Architecture is defined** - Architecture decisions have been made (from Architecture Review Procedure)
- [ ] **Security threats are identified** - Threat model is complete (from Threat Model Procedure, if applicable)
- [ ] **Feature requires AuthN/AuthZ** - Feature has been determined to need authentication/authorization

**Constraints:**
- [ ] **AuthN/AuthZ standards** - Must comply with [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md)
- [ ] **API security standards** - Must align with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **Security compliance** - Must consider compliance requirements (regulatory, policy)
- [ ] **Time constraints** - AuthN/AuthZ requirements must complete before implementation begins

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing threat model** → Invoke [Threat Model Procedure](./threat-model-procedure.md) first (if security threats need to be identified)
- **Missing architecture decisions** → Invoke [Architecture Review Procedure](./architecture-review-procedure.md) first
- **Feature doesn't require AuthN/AuthZ** → Skip this procedure, proceed to next procedure

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from security requirements review through AuthN/AuthZ requirements approval
- **Procedures to be invoked** - None (this is a standalone procedure)
- **Dependencies between steps** - Security Review → Auth Method → Identity → Authorization → Tokens → Enforcement → Isolation → Audit → Approval
- **Risks & unknowns** - Security requirements unclear, access control needs unknown, token management complexity, multi-tenant requirements unclear
- **Validation points** - After authentication method selection, after authorization model, after token specifications, before approval

**Plan must be reviewed before execution begins**

**Output:**
- AuthN/AuthZ Requirements Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Security Requirements and Access Control Needs

**Purpose**
- Understand security requirements from threat model
- Identify access control needs for the feature
- Determine authentication and authorization scope

**Inputs**
- **From:** Procedure Required Inputs (threat model document, security requirements, requirements document, feature definition)

**Actions**
- Review threat model document for authentication/authorization-related threats:
  - Spoofing threats (authentication bypass, identity spoofing)
  - Elevation of privilege threats (authorization bypass, privilege escalation)
  - Information disclosure threats (inadequate access controls)
- Review security requirements from threat model:
  - Authentication requirements
  - Authorization requirements
  - Access control requirements
- Review requirements document for access control needs:
  - What resources need to be protected?
  - What actions need authorization?
  - Who needs access to what?
  - What are the access patterns?
- Review feature definition for AuthN/AuthZ context
- Identify access control scope:
  - What endpoints/resources need protection?
  - What user roles are needed?
  - What permissions are needed?
  - What access patterns exist?
- Document access control needs in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for requirements documentation

**Decisions / Evaluations**
- **Decision:** Are access control needs clear?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify access control needs with stakeholders, review requirements document

**Outputs**
- Security requirements reviewed
- Access control needs identified
- Access control scope documented

**Failure Handling**
- **Failure:** Access control needs unclear
  - **Action:** Consult stakeholders, review requirements document, clarify access control needs
  - **Retry:** Step 1 after access control needs are clarified

---

#### Step 2: Select Authentication Method

**Purpose**
- Choose appropriate authentication method(s) for the feature
- Justify authentication method selection
- Define authentication specifications

**Inputs**
- **From:** Step 1 outputs (access control needs, security requirements)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for authentication requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for authentication implementation requirements

**Actions**
- Evaluate authentication needs:
  - User-facing application? (JWT, OAuth, session-based)
  - Service-to-service? (API keys, JWT)
  - Third-party integration? (OAuth 2.0)
  - Stateless architecture? (JWT)
  - Stateful architecture? (Session-based)
- Consider existing authentication infrastructure:
  - What authentication is already in place?
  - Can existing authentication be reused?
  - Does new authentication need to integrate with existing?
- Select authentication method(s):
  - JWT (JSON Web Tokens)
  - OAuth 2.0
  - API Keys
  - Session-based
  - Multi-factor authentication (MFA)
  - Combination of methods
- Justify selection:
  - Why this method was chosen
  - What requirements drove the decision
  - What trade-offs were considered
- Define authentication specifications:
  - **If JWT:** Token structure, signing algorithm, expiration, refresh tokens, validation
  - **If OAuth 2.0:** OAuth flow, scopes, token types, expiration, validation
  - **If API Keys:** Key format, generation, storage, rotation, validation
  - **If Session-based:** Session management, storage, expiration, security
- Document authentication method and specifications in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for authentication requirements

**Decisions / Evaluations**
- **Decision:** Is authentication method appropriate for use case?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, review selection criteria, reconsider method
- **Decision:** Does authentication method align with architecture decisions?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, review architecture decisions, align selection

**Outputs**
- Authentication method selected
- Authentication specifications defined
- Selection rationale documented

**Failure Handling**
- **Failure:** Authentication method unclear or inappropriate
  - **Action:** Review selection criteria, consult security team, justify selection
  - **Retry:** Step 2 after improving selection rationale

---

#### Step 3: Define Identity Model

**Purpose**
- Define user identity structure
- Specify identity attributes
- Define identity provider integration

**Inputs**
- **From:** Step 2 outputs (authentication method), Step 1 outputs (access control needs)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for identity model requirements

**Actions**
- Define user identity structure:
  - What constitutes a user identity?
  - What is the unique identifier (user ID)?
  - How are identities managed?
- Define identity attributes:
  - User ID (unique identifier)
  - Email address
  - Username
  - Display name
  - Roles (if known at this stage)
  - Permissions (if known at this stage)
  - Custom attributes (organization, department, etc.)
- Specify attribute requirements:
  - Attribute name
  - Attribute type (string, number, boolean, etc.)
  - Required/Optional
  - Validation rules (format, length, pattern)
  - Source (identity provider, user input, system-generated)
  - Usage (authentication, authorization, display)
- Define identity provider:
  - Internal identity provider
  - External identity provider (Auth0, Okta, etc.)
  - Social login providers
  - Enterprise SSO
  - Multiple providers (identity linking)
- Define identity linking (if multiple providers):
  - How multiple identity providers are linked to one user
  - How identity conflicts are resolved
- Document identity model in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for identity model requirements

**Decisions / Evaluations**
- **Decision:** Is identity model clear and complete?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, clarify identity model, add missing attributes

**Outputs**
- Identity model defined
- Identity attributes specified
- Identity provider defined
- Identity model documented

**Failure Handling**
- **Failure:** Identity model unclear or incomplete
  - **Action:** Review requirements, consult identity team, clarify identity model
  - **Retry:** Step 3 after improving identity model

---

#### Step 4: Define Authorization Model

**Purpose**
- Choose access control pattern (RBAC, ABAC, resource-based)
- Define roles, permissions, and policies
- Specify authorization rules

**Inputs**
- **From:** Step 1 outputs (access control needs), Step 3 outputs (identity model)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for authorization model requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for authorization implementation requirements

**Actions**
- Evaluate access control needs:
  - Simple role-based access? (RBAC)
  - Complex attribute-based access? (ABAC)
  - Resource ownership-based access? (Resource-based)
  - Policy-based access? (Policy-based)
  - Hybrid approach?
- Select access control pattern:
  - **Role-Based Access Control (RBAC):**
    - Define roles (role name, description, scope)
    - Define permissions (permission name, description, scope)
    - Map roles to permissions
    - Define role hierarchy (if applicable)
  - **Attribute-Based Access Control (ABAC):**
    - Define attributes (user, resource, environment, action)
    - Define policies (policy name, description, rules)
    - Define policy evaluation
  - **Resource-Based Authorization:**
    - Define resource ownership
    - Define ownership validation
    - Define cross-tenant access prevention
  - **Hybrid Approach:**
    - Combine multiple patterns
    - Define when each pattern applies
- Justify pattern selection:
  - Why this pattern was chosen
  - What requirements drove the decision
- Define authorization rules:
  - What resources need authorization?
  - What actions need authorization?
  - Who can perform what actions?
  - What conditions apply?
- Document authorization model in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for authorization requirements

**Decisions / Evaluations**
- **Decision:** Does authorization model support access control needs?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, review access control needs, improve authorization model
- **Decision:** Is authorization model implementable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, simplify model, ensure implementability

**Outputs**
- Authorization model defined
- Roles, permissions, policies defined
- Authorization rules specified
- Authorization model documented

**Failure Handling**
- **Failure:** Authorization model doesn't support access control needs
  - **Action:** Review access control needs, redesign authorization model
  - **Retry:** Step 4 after improving authorization model

---

#### Step 5: Define Token/Session Specifications

**Purpose**
- Specify token structure and lifecycle
- Define session management (if applicable)
- Ensure token/session security

**Inputs**
- **From:** Step 2 outputs (authentication method), Step 3 outputs (identity model), Step 4 outputs (authorization model)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for token/session specifications

**Actions**
- Define token structure (if tokens are used):
  - Token format (JWT, OAuth token, custom format)
  - Token claims/attributes:
    - User ID
    - Email
    - Roles
    - Permissions
    - Expiration
    - Issuer
    - Audience
    - Custom claims
  - Token encoding (Base64, JWT encoding)
  - Token size limits
- Define token lifecycle:
  - Token issuance (when and how tokens are issued)
  - Token expiration (access token, refresh token, ID token expiration times)
  - Token refresh (refresh token usage, refresh flow, refresh token rotation)
  - Token revocation (revocation triggers, mechanism, propagation)
- Define session management (if sessions are used):
  - Session creation (when and how sessions are created)
  - Session duration (timeout and expiration)
  - Session renewal (how sessions are renewed)
  - Session termination (user logout, timeout, security events)
  - Session security (CSRF protection, session fixation prevention, secure storage)
- Define token/session storage:
  - Where tokens are stored (client-side, secure storage, HTTP-only cookies)
  - Where sessions are stored (server-side, database, cache)
  - Security of storage (encryption, secure storage)
- Define token/session transmission:
  - How tokens are transmitted (Authorization header, cookies, query parameters)
  - Security of transmission (HTTPS, secure cookies)
- Document token/session specifications in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for token/session requirements

**Decisions / Evaluations**
- **Decision:** Are token/session specifications secure?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, improve security, review specifications
- **Decision:** Are token/session specifications complete?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, complete missing specifications

**Outputs**
- Token/session specifications defined
- Token lifecycle defined
- Session management defined (if applicable)
- Token/session specifications documented

**Failure Handling**
- **Failure:** Token/session specifications incomplete or insecure
  - **Action:** Review security requirements, improve specifications, consult security team
  - **Retry:** Step 5 after improving specifications

---

#### Step 6: Define Authorization Enforcement

**Purpose**
- Identify where authorization is enforced
- Specify how authorization is checked
- Define authorization failure handling

**Inputs**
- **From:** Step 4 outputs (authorization model), Step 1 outputs (access control needs)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for authorization enforcement requirements

**Actions**
- Identify enforcement points:
  - API endpoints (which endpoints need authorization)
  - Frontend routes (which routes need authorization)
  - Middleware layers (where authorization middleware is placed)
  - Service boundaries (where authorization is checked between services)
  - Data access layers (where data access authorization is enforced)
- Define enforcement timing:
  - Before request processing (pre-authorization)
  - During request processing (inline authorization)
  - After request processing (post-authorization for audit)
- Define enforcement method:
  - Middleware/guards (automatic enforcement)
  - Decorators/annotations (declarative enforcement)
  - Policy evaluation (policy-based enforcement)
  - Manual checks (programmatic enforcement)
- Define authorization checks:
  - Check type (role membership, permission grants, resource ownership, policy evaluation, attribute matching)
  - Check frequency (every request, cached checks, periodic validation)
  - Check performance (optimization, caching)
- Define failure handling:
  - Error response (403 Forbidden)
  - Logging (authorization failures logged)
  - Alerting (security alerts for repeated failures)
  - Audit logging (authorization decisions logged)
- Document authorization enforcement in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for enforcement requirements

**Decisions / Evaluations**
- **Decision:** Are all protected resources covered by enforcement?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, identify missing enforcement points, add enforcement
- **Decision:** Is enforcement method appropriate?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, review enforcement method, improve approach

**Outputs**
- Authorization enforcement points identified
- Enforcement method defined
- Authorization checks specified
- Failure handling defined

**Failure Handling**
- **Failure:** Enforcement points not comprehensive
  - **Action:** Review access control needs, identify missing enforcement points
  - **Retry:** Step 6 after adding missing enforcement

---

#### Step 7: Define Multi-Tenant Isolation (if applicable)

**Purpose**
- Define tenant identification and isolation
- Specify cross-tenant access prevention
- Ensure tenant context is maintained

**Inputs**
- **From:** Step 1 outputs (access control needs), Step 3 outputs (identity model), Step 4 outputs (authorization model)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for multi-tenant isolation requirements

**Actions**
- Determine if multi-tenant architecture is used:
  - Does feature support multiple tenants?
  - Do tenants need to be isolated?
  - Is tenant context required?
- If multi-tenant, define tenant identification:
  - How tenants are identified (tenant ID in token, tenant ID in request, subdomain-based, path-based)
  - Where tenant ID comes from (token claims, request headers, URL path)
  - How tenant ID is validated
- Define isolation strategy:
  - Data isolation (separate databases, schemas, tables, tenant ID in queries)
  - Application isolation (tenant-aware queries, tenant context in application)
  - Network isolation (separate networks, VPCs)
- Define cross-tenant access prevention:
  - Tenant validation in queries (all queries must include tenant ID)
  - Tenant validation in APIs (all API calls must validate tenant)
  - Tenant validation in data access (data access layer enforces tenant)
- Define tenant context maintenance:
  - How tenant context is maintained in requests (tenant context in request object)
  - How tenant context is maintained in tokens (tenant ID in token claims)
  - How tenant context is propagated (tenant context propagation between services)
- Document multi-tenant isolation in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for isolation requirements

**Decisions / Evaluations**
- **Decision:** Is multi-tenant isolation properly defined (if applicable)?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, improve isolation definition
- **Decision:** Is cross-tenant access properly prevented?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, add cross-tenant prevention measures

**Outputs**
- Multi-tenant isolation defined (if applicable)
- Tenant identification specified
- Cross-tenant access prevention defined
- Tenant context maintenance defined

**Failure Handling**
- **Failure:** Multi-tenant isolation incomplete or insecure
  - **Action:** Review multi-tenant requirements, improve isolation strategy
  - **Retry:** Step 7 after improving isolation

---

#### Step 8: Define Audit and Logging Requirements

**Purpose**
- Define authentication and authorization event logging
- Specify log format and storage
- Ensure compliance with audit requirements

**Inputs**
- **From:** All previous step outputs, Step 1 outputs (security requirements)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for audit and logging requirements

**Actions**
- Define authentication events to log:
  - Login events (successful login, failed login attempts, login method, user ID, timestamp, IP address, user agent)
  - Logout events (user logout, session timeout, forced logout)
  - Token events (token issuance, token refresh, token revocation, token validation failures)
- Define authorization events to log:
  - Authorization checks (authorization decision grant/deny, resource accessed, action attempted, user ID, roles/permissions checked, timestamp)
  - Authorization failures (denied access attempts, resource access denied, permission denied, policy evaluation failures)
  - Privilege escalation (role changes, permission grants, permission revocations)
- Define log format:
  - Structured logging format (JSON, structured text)
  - Required fields (timestamp, event type, user ID, resource, action, result)
  - Optional fields (IP address, user agent, request ID, correlation ID)
- Define log storage:
  - Where logs are stored (centralized logging system, SIEM)
  - Log retention period
  - Log security (encryption, access control)
- Define log analysis:
  - How logs are analyzed (SIEM, log analysis tools)
  - What alerts are generated (failed login attempts, authorization failures, privilege escalations)
- Document audit and logging requirements in AuthN/AuthZ requirements document
- Reference [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for logging requirements

**Decisions / Evaluations**
- **Decision:** Are audit and logging requirements comprehensive?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, add missing logging requirements
- **Decision:** Do logging requirements meet compliance needs?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, add compliance logging requirements

**Outputs**
- Audit and logging requirements defined
- Authentication events to log specified
- Authorization events to log specified
- Log format and storage defined

**Failure Handling**
- **Failure:** Audit and logging requirements incomplete
  - **Action:** Review compliance requirements, add missing logging
  - **Retry:** Step 8 after improving logging requirements

---

#### Step 9: Review and Approve AuthN/AuthZ Requirements

**Purpose**
- Review AuthN/AuthZ requirements for completeness and quality
- Obtain approvals from stakeholders
- Finalize AuthN/AuthZ requirements document

**Inputs**
- **From:** All previous step outputs (complete AuthN/AuthZ requirements)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for validation and acceptance criteria

**Actions**
- Review AuthN/AuthZ requirements against [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) checklist:
  - [ ] All required sections present
  - [ ] Authentication method selected and justified
  - [ ] Identity model defined
  - [ ] Authorization model defined
  - [ ] Token/session specifications complete
  - [ ] Authorization enforcement defined
  - [ ] Multi-tenant isolation defined (if applicable)
  - [ ] Audit and logging requirements defined
  - [ ] Security requirements from threat model addressed
- Conduct security team review:
  - Security team reviews AuthN/AuthZ requirements
  - Security team provides feedback
  - Address security team feedback
- Conduct architecture team review (if applicable):
  - Architecture team reviews alignment with architecture
  - Architecture team provides feedback
  - Address architecture team feedback
- Finalize AuthN/AuthZ requirements document:
  - Update AuthN/AuthZ requirements with review feedback
  - Mark AuthN/AuthZ requirements as "Approved"
  - Version control AuthN/AuthZ requirements document
  - Link AuthN/AuthZ requirements to feature documentation/ADR
  - Update Jira ticket with AuthN/AuthZ requirements reference

**Decisions / Evaluations**
- **Decision:** Do AuthN/AuthZ requirements meet quality standards?
  - **Go:** If yes, proceed to approval
  - **No-Go:** If no, address quality issues, re-review
- **Decision:** Has security team approved AuthN/AuthZ requirements?
  - **Go:** If yes, proceed to finalization
  - **No-Go:** If no, address security team feedback, re-review

**Outputs**
- AuthN/AuthZ requirements reviewed and approved
- AuthN/AuthZ requirements document finalized
- AuthN/AuthZ requirements version controlled and linked
- Ready for implementation procedures

**Failure Handling**
- **Failure:** AuthN/AuthZ requirements do not meet quality standards
  - **Action:** Address quality issues, improve AuthN/AuthZ requirements, re-review
  - **Retry:** Step 9 after improving requirements
- **Failure:** Security team or architecture team does not approve
  - **Action:** Address feedback, revise AuthN/AuthZ requirements, re-review
  - **Retry:** Step 9 after addressing feedback

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **AuthN/AuthZ Requirements Document** - Complete AuthN/AuthZ requirements following [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md)
  - Authentication requirements
  - Identity model
  - Authorization model
  - Token/session specifications
  - Authorization enforcement
  - Multi-tenant isolation (if applicable)
  - Audit and logging requirements
  - Security requirements integration

**State changes:**
- AuthN/AuthZ requirements are approved and ready for use
- AuthN/AuthZ requirements are linked to feature documentation

**Decisions recorded:**
- Authentication method selection
- Authorization model selection
- Token/session specifications
- Authorization enforcement approach
- Multi-tenant isolation strategy (if applicable)

**Signals emitted:**
- "AuthN/AuthZ Requirements Complete" - AuthN/AuthZ requirements are approved and ready
- "Ready for Implementation" - AuthN/AuthZ requirements available for implementation procedures

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] AuthN/AuthZ requirements document contains all required sections (per AuthN/AuthZ Standards)
- [ ] Authentication method is selected and justified
- [ ] Identity model is defined
- [ ] Authorization model is defined
- [ ] Token/session specifications are complete
- [ ] Authorization enforcement is defined
- [ ] Multi-tenant isolation is defined (if applicable)
- [ ] Audit and logging requirements are defined
- [ ] Security requirements from threat model are addressed

**Reviews required:**
- [ ] Security team review (must approve)
- [ ] Architecture team review (if applicable)

**Automated checks:**
- [ ] AuthN/AuthZ requirements document structure validated (all sections present)
- [ ] AuthN/AuthZ requirements document format validated (markdown, version controlled)

**Who/what can approve completion:**
- **Security Team** - Must review and approve AuthN/AuthZ requirements
- **Architecture Team** - Must review if architecture alignment needed

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **AuthN/AuthZ Requirements Document** → Input for [Backend Implementation Procedure](./backend-implementation-procedure.md) (implements AuthN/AuthZ requirements)
- **AuthN/AuthZ Requirements Document** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (implements AuthN/AuthZ requirements)
- **AuthN/AuthZ Requirements Document** → Input for [Middleware Implementation Procedure](./middleware-implementation-procedure.md) (implements AuthN/AuthZ requirements)
- **AuthN/AuthZ Requirements** → Input for [API Design Procedure](../api-lifecycle/api-design-procedure.md) (informs API security design)

**Procedures that depend on this:**
- **All Implementation Procedures** - Use AuthN/AuthZ requirements to implement authentication/authorization
- **API Design Procedure** - Uses AuthN/AuthZ requirements to design secure APIs

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Security requirements reviewed and access control needs identified
- [ ] Authentication method selected and justified
- [ ] Identity model defined
- [ ] Authorization model defined
- [ ] Token/session specifications defined
- [ ] Authorization enforcement points identified
- [ ] Multi-tenant isolation defined (if applicable)
- [ ] Audit and logging requirements defined
- [ ] Security requirements from threat model addressed
- [ ] AuthN/AuthZ requirements reviewed by security team
- [ ] AuthN/AuthZ requirements reviewed by architecture team (if applicable)
- [ ] AuthN/AuthZ requirements document is complete (all sections per AuthN/AuthZ Standards)
- [ ] AuthN/AuthZ requirements document is version controlled
- [ ] AuthN/AuthZ requirements are linked to feature documentation/ADR
- [ ] Jira ticket updated with AuthN/AuthZ requirements reference
- [ ] Ready for implementation procedures (Backend, Frontend, Middleware)

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with AuthN/AuthZ requirements reference
- [ ] **AuthN/AuthZ Requirements Document** - Document location and version
- [ ] **Threat Model Document** - Link to threat model that informed AuthN/AuthZ
- [ ] **Architecture Document** - Link to architecture that informed AuthN/AuthZ
- [ ] **ADRs** - Link to architecture decisions that informed AuthN/AuthZ

**Audit trail:**
- **AuthN/AuthZ requirements date** - When AuthN/AuthZ requirements were created
- **Security team involved** - Who was involved in AuthN/AuthZ design and review
- **Authentication method selected** - Which method was chosen and why
- **Authorization model selected** - Which model was chosen and why
- **Approval date** - When AuthN/AuthZ requirements were approved
- **Approval stakeholders** - Who approved AuthN/AuthZ requirements

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- AuthN/AuthZ requirements document complete
- Authentication method selected and specified
- Authorization model defined
- Token/session specifications complete
- AuthN/AuthZ requirements reviewed and approved
- Ready for implementation procedures

#### ⚠️ Blocked
- **Reason:** Security requirements unclear, access control needs unknown, security team unavailable, authentication method unclear
- **Required action:** Address blocker (clarify requirements, identify access control needs, consult security team, select authentication method)
- **Who to notify:** Security team lead, architecture team lead, feature owner
- **Status:** AuthN/AuthZ requirements paused until blocker resolved

#### ❌ Aborted
- **Reason:** Feature doesn't require AuthN/AuthZ, feature cancelled, AuthN/AuthZ requirements cannot be determined
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why AuthN/AuthZ requirements couldn't be completed
- **Next step:** Feature may proceed without AuthN/AuthZ or be redefined

#### 🔄 Partial AuthN/AuthZ Requirements
- **Reason:** Some AuthN/AuthZ requirements defined but others deferred, some specifications deferred to implementation
- **Required action:** Document what was completed vs. deferred, update AuthN/AuthZ requirements document
- **Status:** Core AuthN/AuthZ requirements complete, some specifications deferred
- **Next step:** Proceed with defined requirements, deferred specifications addressed during implementation

---

## Usage Notes

### Integration with Threat Model

- AuthN/AuthZ Procedure depends on Threat Model Procedure outputs
- Security threats inform authentication/authorization requirements
- AuthN/AuthZ requirements address security threats

### Integration with Architecture Review

- AuthN/AuthZ Procedure depends on Architecture Review Procedure outputs
- Architecture decisions inform authentication/authorization approach
- AuthN/AuthZ requirements should align with architecture decisions

### Integration with AuthN/AuthZ Standards

- AuthN/AuthZ Procedure must comply with [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md)
- Authentication/authorization specifications should follow standards
- Requirements should reference API Security Standards for implementation

### Conditional Execution

- This procedure is **conditional** - only invoked if feature requires authentication/authorization
- If feature doesn't require AuthN/AuthZ, this procedure is skipped
- Decision to invoke is made in Feature Implementation Orchestration Procedure

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Security Team / Identity & Access Management Team
