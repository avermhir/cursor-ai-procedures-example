# Procedure: API Discovery

### 1. Purpose

**Why this procedure exists**

This procedure enables systematic discovery of existing APIs in the codebase before creating new ones or using APIs for feature implementation. It prevents duplicate API creation, identifies reusable APIs and patterns, and documents the existing API landscape for reference.

**What problem it solves**

- Creating duplicate APIs that already exist
- Not knowing what APIs are available for use
- Missing opportunities to reuse existing APIs
- Unclear API landscape causing confusion
- APIs created without understanding existing patterns
- Features implemented without checking for existing API support

**What "success" looks like at the end**

A complete API discovery report that includes:
- Existing APIs discovered and documented
- API inventory created with endpoints, methods, and contracts
- Reusable APIs identified
- API patterns and conventions documented
- Evaluation of whether existing APIs can be used, extended, or if new API is needed
- Ready for API Design Procedure or feature implementation

---

### 2. Trigger

**What causes this procedure to be invoked**

- Need to use an API but don't know if it exists
- Planning new feature that might need API functionality
- Need to understand existing API landscape
- Before [API Design Procedure](./api-design-procedure.md) (to avoid duplicates)
- Feature implementation requires API integration
- [API Contract Procedure](../feature-lifecycle/api-contract-procedure.md) needs to check for existing APIs

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **API requirements** - What functionality is needed (from feature requirements, use case, or user story)
- [ ] **Codebase access** - Access to codebase to search for APIs
- [ ] **API documentation** - Existing API documentation (OpenAPI/Swagger specs, API docs, README files) if available

**Decisions already made:**
- [ ] **Feature/use case defined** - Know what functionality is needed (from Requirements & Scope Procedure or equivalent)
- [ ] **Search scope determined** - Which services/repositories to search

**Constraints:**
- [ ] **Search scope** - Which services/repositories to search (may be limited to specific services)
- [ ] **API type** - REST, GraphQL, gRPC, or other (may need to search for specific types)
- [ ] **Time constraints** - Discovery may need to be time-boxed

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing API requirements** → Request requirements from feature team, review feature requirements document
- **No codebase access** → Request access or work with someone who has access
- **Unclear search scope** → Define search scope with team, start with most likely services

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from defining search criteria through API discovery report
- **Procedures to be invoked** - None (standalone discovery procedure)
- **Dependencies between steps** - Define Criteria → Search Codebase → Search Docs → Analyze → Document → Evaluate → Report
- **Risks & unknowns** - API requirements unclear, codebase not searchable, APIs not documented, no APIs found
- **Validation points** - After codebase search, after documentation search, after analysis, before final report

**Plan must be reviewed before execution begins**

**Output:**
- API Discovery Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Search Criteria

**Purpose**
- Identify what API functionality is needed
- Define search terms and patterns
- Determine search scope

**Inputs**
- **From:** Procedure Required Inputs (API requirements, search scope)

**Actions**
- Review API requirements:
  - What functionality is needed?
  - What data or operations are required?
  - What entities or resources are involved?
- Extract key search terms:
  - Resource names (users, products, orders, etc.)
  - Operation types (get, create, update, delete, etc.)
  - Domain concepts (authentication, payments, notifications, etc.)
- Define search patterns:
  - API route patterns (e.g., `/api/users`, `/api/v1/products`)
  - Controller/handler patterns (e.g., `UserController`, `ProductHandler`)
  - Service patterns (e.g., `UserService`, `ProductService`)
- Determine search scope:
  - Which services/repositories to search
  - Which API types to search (REST, GraphQL, gRPC)
  - Which directories to focus on (controllers, routes, handlers, services)
- Document search criteria

**Decisions / Evaluations**
- **Decision:** Are search criteria clear and specific enough?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, refine criteria, request more information

**Outputs**
- Search criteria defined
- Search terms identified
- Search patterns defined
- Search scope determined

**Failure Handling**
- **Failure:** API requirements unclear
  - **Action:** Request clarification from feature team, review requirements document
  - **Retry:** Step 1 after clarification
- **Failure:** Cannot determine search scope
  - **Action:** Start with broad scope, narrow down based on findings
  - **Workaround:** Search all services, filter results later

---

#### Step 2: Search Codebase

**Purpose**
- Search codebase for existing API implementations
- Find API routes, controllers, handlers
- Identify API patterns

**Inputs**
- **From:** Step 1 outputs (search criteria, search terms, patterns, scope)

**Actions**
- Search for API routes/endpoints:
  - Search route definition files (routes.ts, routes.js, app.ts, etc.)
  - Search for route decorators (@Get, @Post, @Put, @Delete, etc.)
  - Search for route patterns matching search terms
- Search for API controllers/handlers:
  - Search controller files (UserController, ProductController, etc.)
  - Search handler files (userHandler, productHandler, etc.)
  - Search for controller/handler patterns matching search terms
- Search for API service files:
  - Search service files that might expose APIs
  - Search for service patterns matching search terms
- Search for API client code:
  - Search API client files (apiClient.ts, httpClient.ts, etc.)
  - Search for API calls matching search terms
- Search for OpenAPI/Swagger annotations:
  - Search for @Api tags, @ApiOperation decorators
  - Search for Swagger/OpenAPI spec files
- Use codebase search tools:
  - Use grep/ripgrep for pattern matching
  - Use codebase_search for semantic search
  - Use IDE search for file/function names
- Document all discovered API locations

**Decisions / Evaluations**
- **Decision:** Has codebase been searched comprehensively?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, expand search, try different patterns

**Outputs**
- API routes/endpoints discovered
- API controllers/handlers identified
- API service files found
- API client code found
- OpenAPI/Swagger annotations found
- API locations documented

**Failure Handling**
- **Failure:** Codebase not searchable
  - **Action:** Request codebase access, use alternative search methods, work with team member
  - **Retry:** Step 2 after access obtained
- **Failure:** Too many results or too few results
  - **Action:** Refine search terms, adjust patterns, try different search strategies
  - **Retry:** Step 2 with refined criteria

---

#### Step 3: Search API Documentation

**Purpose**
- Search for API documentation
- Find OpenAPI/Swagger specifications
- Check API catalogs or registries

**Inputs**
- **From:** Step 2 outputs (discovered API locations)
- **From:** Procedure Required Inputs (API documentation if available)

**Actions**
- Search for OpenAPI/Swagger specs:
  - Search for `openapi.yaml`, `openapi.json`, `swagger.yaml`, `swagger.json`
  - Search for OpenAPI spec files in documentation folders
  - Check if specs are generated or manually maintained
- Search for API documentation:
  - Check API documentation sites (if available)
  - Check README files for API documentation
  - Check `docs/` folders for API docs
  - Search for API documentation markdown files
- Check API catalogs or registries:
  - Check if API registry exists
  - Check API gateway documentation
  - Check service mesh documentation (if applicable)
- Search for API client libraries:
  - Check for generated API client code
  - Check for SDK documentation
- Review discovered API documentation:
  - Read OpenAPI/Swagger specs
  - Review API documentation
  - Extract API endpoint information

**Decisions / Evaluations**
- **Decision:** Has documentation been searched?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, continue searching or proceed with codebase findings

**Outputs**
- OpenAPI/Swagger specs found
- API documentation found
- API catalog/registry checked
- API client libraries found
- API documentation reviewed

**Failure Handling**
- **Failure:** No API documentation found
  - **Action:** Proceed with codebase findings, document that APIs exist but aren't documented
  - **Workaround:** Use codebase analysis to infer API contracts
- **Failure:** API documentation outdated
  - **Action:** Use codebase as source of truth, note documentation is outdated
  - **Workaround:** Document APIs based on codebase analysis

---

#### Step 4: Analyze Discovered APIs

**Purpose**
- Review discovered APIs
- Identify API patterns and conventions
- Determine if APIs match requirements
- Identify gaps or missing functionality

**Inputs**
- **From:** Step 2 outputs (codebase search results)
- **From:** Step 3 outputs (documentation search results)
- **From:** Procedure Required Inputs (API requirements)

**Actions**
- Review each discovered API:
  - Read API endpoint definitions
  - Review request/response schemas
  - Understand API functionality
  - Check API versioning (if applicable)
  - Review authentication/authorization requirements
- Compare APIs to requirements:
  - Does API provide required functionality?
  - Does API match required data structures?
  - Does API support required operations?
  - Are there gaps in functionality?
- Identify API patterns and conventions:
  - URL structure patterns (e.g., `/api/v1/resource`)
  - Naming conventions (camelCase, snake_case, kebab-case)
  - Request/response formats (JSON, XML, etc.)
  - Error handling patterns
  - Authentication patterns
  - Versioning patterns
- Identify gaps:
  - What functionality is missing?
  - What operations are not supported?
  - What data is not available?
- Categorize APIs:
  - Exact match (API fully meets requirements)
  - Partial match (API partially meets requirements)
  - No match (API doesn't meet requirements)
  - Related (API is related but different)

**Decisions / Evaluations**
- **Decision:** Have all discovered APIs been analyzed?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, complete analysis of remaining APIs

**Outputs**
- APIs analyzed and categorized
- API patterns identified
- Gaps identified
- Match assessment completed

**Failure Handling**
- **Failure:** Cannot understand API functionality
  - **Action:** Review code implementation, check tests, consult with API owners
  - **Retry:** Step 4 after additional research
- **Failure:** Requirements unclear for comparison
  - **Action:** Clarify requirements, review feature requirements document
  - **Retry:** Step 4 with clarified requirements

---

#### Step 5: Document API Inventory

**Purpose**
- Create comprehensive API inventory
- Document endpoints, methods, contracts
- Document API patterns

**Inputs**
- **From:** Step 4 outputs (analyzed APIs, patterns, gaps)

**Actions**
- Create API inventory document:
  - List all discovered APIs
  - For each API, document:
    - Endpoint URL
    - HTTP methods (GET, POST, PUT, DELETE, etc.)
    - Request/response schemas
    - Authentication requirements
    - Version information
    - Service/repository location
    - Documentation links
    - Match category (exact, partial, no match, related)
- Document API patterns:
  - URL structure patterns
  - Naming conventions
  - Request/response formats
  - Error handling patterns
  - Authentication patterns
  - Versioning patterns
- Organize inventory:
  - Group by service/repository
  - Group by functionality
  - Group by match category
- Store inventory:
  - Save to `.ai_working/` or appropriate location
  - Link from feature documentation
  - Make accessible to team

**Decisions / Evaluations**
- **Decision:** Is API inventory complete?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, complete missing information

**Outputs**
- API inventory document created
- Endpoints documented
- API patterns documented
- Inventory stored and accessible

**Failure Handling**
- **Failure:** Inventory incomplete
  - **Action:** Review all steps, ensure all APIs are documented
  - **Retry:** Step 5 with complete information
- **Failure:** Cannot determine some API details
  - **Action:** Document what is known, mark unknowns, note for follow-up
  - **Workaround:** Create partial inventory, update as information becomes available

---

#### Step 6: Evaluate Reusability

**Purpose**
- Determine if existing APIs can be used
- Determine if existing APIs can be extended
- Identify if new API is needed

**Inputs**
- **From:** Step 4 outputs (API analysis, match assessment)
- **From:** Step 5 outputs (API inventory)
- **From:** Procedure Required Inputs (API requirements)

**Actions**
- For each API that matches requirements:
  - Evaluate if API can be used as-is:
    - Does it fully meet requirements?
    - Are there any limitations?
    - Is it accessible and available?
  - Evaluate if API can be extended:
    - What extensions are needed?
    - Is extension feasible?
    - What would extension require?
- Make recommendations:
  - **Use existing API** - API fully meets requirements
  - **Extend existing API** - API partially meets requirements, can be extended
  - **Create new API** - No suitable API exists, or extension not feasible
- Document evaluation rationale:
  - Why use existing API
  - Why extend existing API
  - Why create new API
- Consider trade-offs:
  - Reusing existing API (faster, but may have limitations)
  - Extending existing API (moderate effort, maintains consistency)
  - Creating new API (more effort, but full control)

**Decisions / Evaluations**
- **Decision:** Can existing API be used?
  - **Go:** If yes, recommend using existing API, proceed to Step 7
  - **No-Go:** If no, evaluate extension or new API
- **Decision:** Can existing API be extended?
  - **Go:** If yes, recommend extending, proceed to Step 7
  - **No-Go:** If no, recommend creating new API, proceed to Step 7

**Outputs**
- Reusability evaluation completed
- Recommendations made (use/extend/create)
- Evaluation rationale documented
- Trade-offs considered

**Failure Handling**
- **Failure:** Cannot determine reusability
  - **Action:** Consult with API owners, review API implementation, test APIs
  - **Retry:** Step 6 after additional research
- **Failure:** Multiple options with unclear best choice
  - **Action:** Document all options with pros/cons, escalate to architecture team
  - **Escalate:** If decision unclear, involve architecture team or tech lead

---

#### Step 7: Prepare API Discovery Report

**Purpose**
- Create complete API discovery report
- Document findings and recommendations
- Make report accessible for next steps

**Inputs**
- **From:** All previous steps (complete API discovery)

**Actions**
- Create API discovery report including:
  - Executive summary
  - API requirements (what was searched for)
  - Search criteria and scope
  - Discovered APIs (inventory)
  - API patterns and conventions
  - Gaps identified
  - Reusability evaluation
  - Recommendations (use/extend/create)
  - Next steps
- Store report:
  - Save to `.ai_working/` or appropriate location
  - Link from feature documentation
  - Make accessible to feature team
- Update Jira ticket (if applicable):
  - Add API discovery report link
  - Document API approach decision
- Prepare for next procedure:
  - If using existing API: Ready for implementation
  - If extending API: Ready for API Design Procedure
  - If creating new API: Ready for API Design Procedure

**Decisions / Evaluations**
- **Decision:** Is API discovery report complete?
  - **Go:** If yes, API discovery complete
  - **No-Go:** If no, complete missing sections

**Outputs**
- API discovery report created
- Report stored and accessible
- Jira ticket updated (if applicable)
- Ready for next procedure (API Design or Implementation)

**Failure Handling**
- **Failure:** Report incomplete
  - **Action:** Review all steps, ensure all information is captured
  - **Retry:** Step 7 with complete information

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **API Discovery Report** - Complete report with findings, inventory, and recommendations
- **API Inventory Document** - Comprehensive list of discovered APIs with details
- **API Patterns Documentation** - Documented API patterns and conventions

**State changes:**
- Existing APIs are discovered and documented
- API landscape is understood
- Decision made on API approach (use/extend/create)

**Decisions recorded:**
- API reusability decisions
- API approach recommendations (use/extend/create)
- API pattern decisions

**Signals emitted:**
- "API Discovery Complete" - Ready for API Design or Implementation
- "Existing API Found" - Can use existing API
- "API Extension Needed" - Ready for API Design Procedure to extend
- "New API Needed" - Ready for API Design Procedure to create

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All relevant codebase areas searched
- [ ] All discovered APIs documented in inventory
- [ ] API patterns identified and documented
- [ ] Reusability evaluated for all relevant APIs
- [ ] Recommendations provided (use/extend/create)
- [ ] API discovery report complete

**Reviews required:**
- [ ] Technical lead review (API approach decision)
- [ ] Architecture team review (if new API recommended)

**Automated checks:**
- [ ] API inventory document is accessible
- [ ] API discovery report is complete

**Who/what can approve completion:**
- **Technical Lead** - Should review API approach decision
- **Architecture Team** - Should review if new API is recommended

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **API Discovery Report** → Input for [API Design Procedure](./api-design-procedure.md) (existing APIs, patterns, approach decision)
- **API Inventory** → Input for [API Design Procedure](./api-design-procedure.md) (API landscape)
- **API Patterns** → Input for [API Design Procedure](./api-design-procedure.md) (conventions to follow)
- **Reusability Evaluation** → Input for [API Design Procedure](./api-design-procedure.md) or Implementation Procedures (API approach)

**Procedures that depend on this:**
- **[API Design Procedure](./api-design-procedure.md)** - Uses discovery results to design new or extend existing APIs
- **[API Contract Procedure](../feature-lifecycle/api-contract-procedure.md)** - May use discovery results to avoid duplicates
- **All Implementation Procedures** - Use discovery results to determine which APIs to use

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Search criteria defined
- [ ] Codebase searched comprehensively
- [ ] API documentation searched
- [ ] All discovered APIs analyzed
- [ ] API patterns identified
- [ ] Gaps identified
- [ ] API inventory created
- [ ] Reusability evaluated
- [ ] Recommendations made (use/extend/create)
- [ ] API discovery report created
- [ ] Report stored and accessible
- [ ] Ready for API Design Procedure or implementation

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with API discovery report
- [ ] **API Discovery Report** - Report location and reference
- [ ] **API Inventory** - Inventory document location
- [ ] **Feature Requirements** - Link to requirements that drove discovery

**Audit trail:**
- **Discovery date** - When API discovery was performed
- **Search scope** - What was searched
- **APIs discovered** - Which APIs were found
- **Recommendation** - Use/extend/create decision
- **Decision rationale** - Why this recommendation was made

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- APIs discovered and documented
- Reusability evaluated
- Recommendations made
- Ready for API Design or implementation

#### ⚠️ Blocked
- **Reason:** Codebase not accessible, API requirements unclear, search scope undefined
- **Required action:** Address blocker (obtain access, clarify requirements, define scope)
- **Who to notify:** Technical lead, feature owner
- **Status:** API discovery paused until blocker resolved

#### ❌ Aborted
- **Reason:** Cannot perform discovery, requirements too unclear, discovery not needed
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why discovery couldn't be completed
- **Next step:** May proceed without discovery or revisit when requirements clear

#### 🔄 Partial Discovery
- **Reason:** Some APIs discovered but search incomplete, or documentation missing
- **Required action:** Document what was discovered, note limitations, proceed with partial information
- **Status:** Partial API inventory available
- **Next step:** Proceed with discovered APIs, note that search may be incomplete

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** API Team / Backend Team
