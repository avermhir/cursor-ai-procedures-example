# Procedure: API Documentation

### 1. Purpose

**Why this procedure exists**

This procedure creates comprehensive API documentation that enables developers to understand, integrate with, and use APIs effectively. It ensures APIs are well-documented with clear examples, usage guides, and reference documentation that matches the implemented API.

**What problem it solves**

- APIs deployed without proper documentation
- Developers unable to understand how to use APIs
- Inconsistent or outdated API documentation
- Missing examples and usage guides
- Documentation that doesn't match implementation
- Poor developer experience when integrating with APIs
- Duplicate documentation efforts across teams
- Documentation not discoverable or accessible

**What "success" looks like at the end**

Complete API documentation that includes:
- OpenAPI specification with comprehensive descriptions and examples
- Developer guide with getting started instructions
- API reference documentation
- Code examples and tutorials
- Authentication and authorization documentation
- Error handling documentation
- Rate limiting documentation (if applicable)
- Changelog and versioning information
- Documentation published and accessible
- Ready for API consumers to use

---

### 2. Trigger

**What causes this procedure to be invoked**

- [API Testing Procedure](./api-testing-procedure.md) has been completed (API is tested and verified)
- API implementation is complete and stable
- API is ready for external consumption
- Need to document API for developers
- [Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md) may invoke this (Phase 5: Deployment Preparation)
- API is being prepared for release

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **OpenAPI specification** - Complete OpenAPI spec document (from [API Design Procedure](./api-design-procedure.md))
- [ ] **API implementation** - Implemented API endpoints (from [API Implementation Procedure](./api-implementation-procedure.md))
- [ ] **Test results** - API test results (from [API Testing Procedure](./api-testing-procedure.md))
- [ ] **API design document** - API design decisions and rationale (from API Design Procedure)
- [ ] **Authentication/Authorization documentation** - Auth requirements (from [AuthN/AuthZ Procedure](../feature-lifecycle/authn-authz-procedure.md), if applicable)
- [ ] **Error handling documentation** - Error response formats (from API Design/Implementation)

**Decisions already made:**
- [ ] **Documentation platform** - Where documentation will be published (Swagger UI, Redoc, custom docs site, etc.)
- [ ] **Documentation format** - Markdown, HTML, OpenAPI-based, etc.
- [ ] **Documentation audience** - Internal developers, external developers, both

**Constraints:**
- [ ] **Documentation must match implementation** - Documentation must accurately reflect implemented API
- [ ] **OpenAPI spec must be complete** - OpenAPI spec should have descriptions and examples
- [ ] **Documentation standards** - Must follow documentation standards (if defined)
- [ ] **Accessibility** - Documentation must be accessible to all developers

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing OpenAPI spec** → Obtain OpenAPI spec from API Design Procedure
- **Missing API implementation** → Wait for API Implementation Procedure to complete
- **Missing test results** → Obtain test results from API Testing Procedure
- **OpenAPI spec incomplete** → Enhance OpenAPI spec with descriptions and examples

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from OpenAPI enhancement through documentation publication
- **Procedures to be invoked** - None (standalone documentation procedure)
- **Dependencies between steps** - Enhance OpenAPI → Create Reference → Create Guide → Add Examples → Review → Publish → Maintain
- **Risks & unknowns** - OpenAPI spec incomplete, examples unclear, documentation platform issues, maintenance burden
- **Validation points** - After OpenAPI enhancement, after reference docs, after guide, before publication

**Plan must be reviewed before execution begins**

**Output:**
- API Documentation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Enhance OpenAPI Specification with Documentation

**Purpose**
- Add comprehensive descriptions to OpenAPI spec
- Add examples to OpenAPI spec
- Ensure OpenAPI spec is self-documenting
- Make OpenAPI spec the source of truth for documentation

**Inputs**
- **From:** Procedure Required Inputs (OpenAPI specification, API implementation, API design document)

**Actions**
- Review OpenAPI specification:
  - Check for missing descriptions
  - Check for missing examples
  - Check for incomplete schema documentation
  - Identify areas needing enhancement
- Add descriptions to OpenAPI spec:
  - **API-level description:**
    - API overview and purpose
    - API version information
    - Base URL and server information
    - Contact information
  - **Path-level descriptions:**
    - Description for each endpoint
    - Purpose and use cases
    - Business context
  - **Operation-level descriptions:**
    - Description for each HTTP method
    - Request/response descriptions
    - Error response descriptions
  - **Parameter descriptions:**
    - Description for each parameter
    - Parameter purpose and usage
    - Parameter constraints
  - **Schema descriptions:**
    - Description for each schema/model
    - Field descriptions
    - Field constraints and validation rules
    - Field examples
- Add examples to OpenAPI spec:
  - **Request examples:**
    - Example request bodies for POST/PUT/PATCH
    - Example query parameters
    - Example path parameters
    - Example headers
  - **Response examples:**
    - Example success responses (200, 201, etc.)
    - Example error responses (400, 401, 403, 404, 500, etc.)
    - Example response headers
  - **Schema examples:**
    - Example values for each schema
    - Example nested objects
    - Example arrays
- Add tags and organization:
  - Organize endpoints with tags
  - Group related endpoints
  - Add tag descriptions
- Validate OpenAPI spec:
  - Validate spec is valid OpenAPI
  - Validate all required fields have descriptions
  - Validate examples are correct
  - Validate spec matches implementation

**Decisions / Evaluations**
- **Decision:** Is OpenAPI spec comprehensive and well-documented?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, enhance spec with missing descriptions and examples
- **Decision:** Does OpenAPI spec match implementation?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, update spec to match implementation

**Outputs**
- Enhanced OpenAPI specification
- Comprehensive descriptions added
- Examples added
- OpenAPI spec ready for documentation generation

**Failure Handling**
- **Failure:** OpenAPI spec validation fails
  - **Action:** Fix OpenAPI spec validation errors, ensure spec is valid
  - **Retry:** Step 1 after fixing validation errors
- **Failure:** Examples don't match implementation
  - **Action:** Update examples to match actual API behavior, test examples
  - **Retry:** Step 1 after fixing examples

---

#### Step 2: Create API Reference Documentation

**Purpose**
- Create comprehensive API reference documentation
- Document all endpoints, parameters, and responses
- Make API reference easily searchable and navigable

**Inputs**
- **From:** Step 1 outputs (enhanced OpenAPI spec), Procedure Required Inputs (API implementation)

**Actions**
- Generate API reference from OpenAPI spec:
  - Use documentation generation tools:
    - **Swagger UI** - Interactive API documentation
    - **Redoc** - Beautiful API documentation
    - **Stoplight Elements** - API documentation platform
    - **OpenAPI Generator** - Generate documentation sites
    - Custom documentation generator
  - Configure documentation generator:
    - Set up documentation site
    - Configure theme and branding
    - Configure navigation
    - Configure search functionality
- Create manual reference documentation (if needed):
  - **Endpoint documentation:**
    - List all endpoints
    - Document each endpoint:
      - HTTP method and path
      - Description
      - Request parameters (path, query, body, headers)
      - Response schemas
      - Status codes
      - Error responses
      - Examples
  - **Schema documentation:**
    - Document all data models
    - Document field types and constraints
    - Document relationships
    - Document examples
  - **Authentication documentation:**
    - Document authentication methods
    - Document how to obtain tokens
    - Document token usage
    - Document authorization requirements
- Organize reference documentation:
  - Group endpoints by functionality
  - Create navigation structure
  - Add search functionality
  - Add filtering options
- Ensure reference documentation:
  - Is comprehensive (all endpoints documented)
  - Is accurate (matches implementation)
  - Is up-to-date (reflects current API)
  - Is searchable and navigable

**Decisions / Evaluations**
- **Decision:** Is API reference documentation complete?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, complete missing reference documentation
- **Decision:** Is reference documentation accurate?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, update documentation to match implementation

**Outputs**
- API reference documentation created
- All endpoints documented
- Reference documentation accessible

**Failure Handling**
- **Failure:** Documentation generation fails
  - **Action:** Fix documentation generator configuration, fix OpenAPI spec issues
  - **Retry:** Step 2 after fixing issues
- **Failure:** Reference documentation incomplete
  - **Action:** Complete missing documentation, ensure all endpoints are documented
  - **Retry:** Step 2 after completing documentation

---

#### Step 3: Create Developer Guide

**Purpose**
- Create getting started guide for developers
- Document common use cases and workflows
- Provide tutorials and best practices

**Inputs**
- **From:** Step 2 outputs (reference documentation), Procedure Required Inputs (API design document, authentication documentation)

**Actions**
- Create getting started guide:
  - **Introduction:**
    - API overview and purpose
    - Key concepts and terminology
    - API versioning information
  - **Quick start:**
    - How to get API access
    - How to obtain authentication credentials
    - How to make first API call
    - Example "Hello World" integration
  - **Authentication guide:**
    - Authentication methods explained
    - How to obtain tokens
    - How to use tokens
    - Token refresh and expiration
    - Authorization and permissions
  - **Base URL and endpoints:**
    - API base URL
    - Environment information (production, staging, etc.)
    - Endpoint organization
  - **Rate limiting:**
    - Rate limit information (if applicable)
    - How to handle rate limits
    - Rate limit headers
- Create common use case guides:
  - **Use case 1:** [Example: Creating a user]
    - Step-by-step guide
    - Code examples
    - Expected responses
  - **Use case 2:** [Example: Retrieving data]
    - Step-by-step guide
    - Code examples
    - Expected responses
  - **Use case 3:** [Example: Updating resources]
    - Step-by-step guide
    - Code examples
    - Expected responses
  - Add more use cases as needed
- Create tutorials:
  - **Tutorial 1:** [Example: Complete integration example]
    - Full working example
    - Code in multiple languages (if applicable)
    - Explanation of each step
  - **Tutorial 2:** [Example: Advanced features]
    - Advanced usage patterns
    - Best practices
    - Common pitfalls
- Document best practices:
  - API usage best practices
  - Error handling best practices
  - Performance optimization tips
  - Security best practices
  - Code examples and patterns

**Decisions / Evaluations**
- **Decision:** Is developer guide comprehensive?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, add missing guides and tutorials
- **Decision:** Are use cases and tutorials clear?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, improve clarity and examples

**Outputs**
- Developer guide created
- Getting started guide complete
- Use case guides complete
- Tutorials created
- Best practices documented

**Failure Handling**
- **Failure:** Developer guide incomplete
  - **Action:** Complete missing sections, add more examples and tutorials
  - **Retry:** Step 3 after completing guide
- **Failure:** Examples unclear or incorrect
  - **Action:** Test examples, fix errors, improve clarity
  - **Retry:** Step 3 after fixing examples

---

#### Step 4: Add Code Examples and SDKs

**Purpose**
- Provide code examples in multiple languages
- Create or link to SDKs
- Make integration easier for developers

**Inputs**
- **From:** Step 3 outputs (developer guide), Procedure Required Inputs (API implementation)

**Actions**
- Create code examples:
  - **Language 1:** [Example: JavaScript/TypeScript]
    - Example requests using fetch/axios
    - Example error handling
    - Example authentication
    - Complete integration examples
  - **Language 2:** [Example: Python]
    - Example requests using requests library
    - Example error handling
    - Example authentication
    - Complete integration examples
  - **Language 3:** [Example: cURL]
    - cURL command examples
    - Example with authentication
    - Example error responses
  - Add more languages as needed (Java, Go, Ruby, etc.)
- Create or link to SDKs:
  - **SDK availability:**
    - Check if official SDKs exist
    - Link to SDK repositories
    - Document SDK installation and usage
  - **SDK examples:**
    - Example using SDK (if available)
    - SDK initialization
    - Common SDK operations
  - **SDK generation:**
    - Consider generating SDKs from OpenAPI spec
    - Use OpenAPI Generator or similar tools
    - Document generated SDKs
- Add interactive examples:
  - **Try it out functionality:**
    - Interactive API explorer (if using Swagger UI)
    - Test API endpoints directly from documentation
    - Example request/response viewers
- Ensure code examples:
  - Are accurate and tested
  - Work with current API version
  - Include error handling
  - Include authentication examples
  - Are well-commented

**Decisions / Evaluations**
- **Decision:** Are code examples comprehensive?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, add missing code examples
- **Decision:** Are code examples accurate and tested?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, test and fix code examples

**Outputs**
- Code examples created
- SDKs documented or created
- Interactive examples available

**Failure Handling**
- **Failure:** Code examples don't work
  - **Action:** Test examples, fix errors, update to match current API
  - **Retry:** Step 4 after fixing examples
- **Failure:** SDKs unavailable or outdated
  - **Action:** Create SDKs or update existing ones, document SDK status
  - **Retry:** Step 4 after addressing SDKs

---

#### Step 5: Document Error Handling and Troubleshooting

**Purpose**
- Document all error responses
- Provide troubleshooting guide
- Help developers debug integration issues

**Inputs**
- **From:** Step 4 outputs (code examples), Procedure Required Inputs (error handling documentation, test results)

**Actions**
- Document error responses:
  - **Error response format:**
    - Document error response structure
    - Document error codes
    - Document error messages
    - Document error details
  - **Error types:**
    - **Validation errors (400):**
      - List common validation errors
      - Example error responses
      - How to fix validation errors
    - **Authentication errors (401):**
      - List authentication error scenarios
      - Example error responses
      - How to fix authentication errors
    - **Authorization errors (403):**
      - List authorization error scenarios
      - Example error responses
      - How to fix authorization errors
    - **Not found errors (404):**
      - List not found scenarios
      - Example error responses
      - How to handle not found errors
    - **Conflict errors (409):**
      - List conflict scenarios
      - Example error responses
      - How to handle conflicts
    - **Server errors (500):**
      - Document server error handling
      - Retry strategies
      - How to report server errors
- Create troubleshooting guide:
  - **Common issues:**
    - Issue 1: [Example: Authentication failures]
      - Symptoms
      - Causes
      - Solutions
    - Issue 2: [Example: Rate limit errors]
      - Symptoms
      - Causes
      - Solutions
    - Issue 3: [Example: Validation errors]
      - Symptoms
      - Causes
      - Solutions
    - Add more common issues
  - **Debugging tips:**
    - How to enable debug logging
    - How to inspect requests/responses
    - How to use API testing tools
    - How to contact support
- Document error handling best practices:
  - How to handle errors in code
  - Retry strategies
  - Error logging
  - User-friendly error messages

**Decisions / Evaluations**
- **Decision:** Is error handling documentation complete?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, complete missing error documentation
- **Decision:** Is troubleshooting guide helpful?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, improve troubleshooting guide

**Outputs**
- Error handling documentation complete
- Troubleshooting guide created
- Error examples documented

**Failure Handling**
- **Failure:** Error documentation incomplete
  - **Action:** Review all error scenarios, complete missing documentation
  - **Retry:** Step 5 after completing documentation
- **Failure:** Troubleshooting guide unclear
  - **Action:** Improve clarity, add more examples, test troubleshooting steps
  - **Retry:** Step 5 after improving guide

---

#### Step 6: Review and Validate Documentation

**Purpose**
- Review documentation for accuracy and completeness
- Validate documentation matches implementation
- Get feedback from stakeholders
- Ensure documentation quality

**Inputs**
- **From:** All previous step outputs (complete documentation), Procedure Required Inputs (API implementation, test results)

**Actions**
- Review documentation accuracy:
  - Compare documentation to implementation
  - Verify all endpoints are documented
  - Verify examples work correctly
  - Verify code examples are accurate
  - Check for typos and errors
- Review documentation completeness:
  - Ensure all required sections are present
  - Ensure all endpoints are documented
  - Ensure all error scenarios are documented
  - Ensure authentication is fully documented
- Test documentation:
  - Test all code examples
  - Test all API calls from documentation
  - Verify examples produce expected results
  - Fix any broken examples
- Get stakeholder feedback:
  - **Developer feedback:**
    - Have developers review documentation
    - Get feedback on clarity and usefulness
    - Address developer concerns
  - **Product owner feedback:**
    - Review documentation for business accuracy
    - Ensure use cases are correct
  - **Technical writer feedback (if available):**
    - Review documentation for writing quality
    - Suggest improvements
- Update documentation based on feedback:
  - Address all feedback
  - Improve unclear sections
  - Fix errors and typos
  - Update examples if needed
- Validate documentation accessibility:
  - Ensure documentation is accessible
  - Test documentation site navigation
  - Test search functionality
  - Ensure documentation is mobile-friendly

**Decisions / Evaluations**
- **Decision:** Is documentation accurate and complete?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, fix inaccuracies and complete missing sections
- **Decision:** Has documentation been reviewed and approved?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, address feedback and re-review

**Outputs**
- Documentation reviewed and validated
- Documentation accuracy verified
- Documentation completeness verified
- Feedback addressed
- Documentation ready for publication

**Failure Handling**
- **Failure:** Documentation doesn't match implementation
  - **Action:** Update documentation to match implementation, or fix implementation if documentation is correct
  - **Retry:** Step 6 after fixing mismatches
- **Failure:** Documentation quality issues
  - **Action:** Address quality issues, improve clarity, fix errors
  - **Retry:** Step 6 after improving quality

---

#### Step 7: Publish and Maintain Documentation

**Purpose**
- Publish documentation to accessible location
- Set up documentation maintenance process
- Ensure documentation stays up-to-date

**Inputs**
- **From:** Step 6 outputs (validated documentation)

**Actions**
- Publish documentation:
  - **Choose publication platform:**
    - Swagger UI (hosted)
    - Redoc (hosted)
    - Custom documentation site
    - GitHub Pages
    - Internal documentation portal
  - **Deploy documentation:**
    - Set up documentation hosting
    - Configure domain and URLs
    - Set up CI/CD for documentation updates
    - Configure documentation versioning
  - **Make documentation discoverable:**
    - Add documentation links to developer portal
    - Add documentation to API gateway (if applicable)
    - Add documentation to project README
    - Register documentation in documentation index
- Set up documentation maintenance:
  - **Documentation update process:**
    - Define when documentation should be updated
    - Define who is responsible for updates
    - Set up documentation review schedule
  - **Version control:**
    - Version documentation with API versions
    - Maintain documentation for multiple API versions
    - Archive old documentation versions
  - **Change log:**
    - Create API changelog
    - Document API changes and deprecations
    - Link changelog to documentation
- Set up documentation monitoring:
  - Monitor documentation usage
  - Collect feedback from developers
  - Track common questions and issues
  - Update documentation based on feedback
- Create documentation maintenance plan:
  - Schedule regular documentation reviews
  - Plan documentation updates for API changes
  - Plan documentation improvements
  - Assign documentation maintenance responsibilities

**Decisions / Evaluations**
- **Decision:** Is documentation published and accessible?
  - **Go:** If yes, documentation complete
  - **No-Go:** If no, complete publication process
- **Decision:** Is documentation maintenance plan in place?
  - **Go:** If yes, documentation complete
  - **No-Go:** If no, create maintenance plan

**Outputs**
- Documentation published
- Documentation accessible to developers
- Documentation maintenance plan created
- Documentation versioning configured
- API documentation complete

**Failure Handling**
- **Failure:** Documentation publication fails
  - **Action:** Fix publication issues, configure hosting correctly
  - **Retry:** Step 7 after fixing publication
- **Failure:** Documentation not accessible
  - **Action:** Fix accessibility issues, configure URLs and links correctly
  - **Retry:** Step 7 after fixing accessibility

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Enhanced OpenAPI Specification** - OpenAPI spec with comprehensive descriptions and examples
- **API Reference Documentation** - Complete API reference with all endpoints documented
- **Developer Guide** - Getting started guide, use cases, tutorials, best practices
- **Code Examples** - Code examples in multiple languages
- **Error Handling Documentation** - Error responses and troubleshooting guide
- **Published Documentation** - Documentation published and accessible
- **Documentation Maintenance Plan** - Plan for keeping documentation up-to-date

**State changes:**
- API documentation is complete and published
- Developers can access and use API documentation
- Documentation is maintained and versioned

**Decisions recorded:**
- Documentation platform decisions
- Documentation structure decisions
- Code example language decisions
- Maintenance approach decisions

**Signals emitted:**
- "API Documentation Complete" - API is documented and ready for use
- "Documentation Published" - Documentation is accessible to developers
- "Ready for API Consumers" - API is documented and ready for integration

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] OpenAPI spec has comprehensive descriptions and examples
- [ ] API reference documentation is complete (all endpoints documented)
- [ ] Developer guide is comprehensive and clear
- [ ] Code examples are accurate and tested
- [ ] Error handling documentation is complete
- [ ] Documentation matches implementation
- [ ] Documentation is published and accessible

**Reviews required:**
- [ ] Developer review (developers can use documentation successfully)
- [ ] Technical writer review (if available)
- [ ] Product owner review (business accuracy)

**Automated checks:**
- [ ] OpenAPI spec validation (spec is valid)
- [ ] Code example validation (examples can be executed)
- [ ] Documentation link validation (all links work)

**Who/what can approve completion:**
- **Developer Team** - Must verify documentation is usable
- **Technical Writer** - Must review documentation quality (if available)
- **Product Owner** - Must verify business accuracy

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **API Documentation** → Input for API consumers (developers use documentation to integrate)
- **API Documentation** → Input for [API Deprecation Procedure](./api-deprecation-procedure.md) (documentation updated during deprecation)
- **Enhanced OpenAPI Spec** → Input for SDK generation (SDKs generated from OpenAPI spec)

**Procedures that depend on this:**
- **API Deprecation Procedure** - Updates documentation during deprecation
- **Frontend Implementation Procedure** - Uses API documentation for integration
- **Third-Party Integration Procedure** - Uses API documentation for external integrations

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] OpenAPI specification enhanced with descriptions and examples
- [ ] API reference documentation created and complete
- [ ] Developer guide created with getting started, use cases, and tutorials
- [ ] Code examples created in multiple languages
- [ ] Error handling documentation complete
- [ ] Troubleshooting guide created
- [ ] Documentation reviewed for accuracy and completeness
- [ ] Documentation validated against implementation
- [ ] Code examples tested and verified
- [ ] Documentation published and accessible
- [ ] Documentation maintenance plan created
- [ ] Developer feedback collected and addressed
- [ ] Ready for API consumers
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with documentation reference
- [ ] **API Documentation** - Link to published documentation
- [ ] **OpenAPI Specification** - Link to enhanced OpenAPI spec
- [ ] **Code Examples** - Link to code example repository
- [ ] **Documentation Repository** - Link to documentation source code

**Audit trail:**
- **Documentation date** - When API documentation was created
- **Documentation version** - Version of documentation
- **Documentation platform** - Where documentation is published
- **Review dates** - When documentation was reviewed
- **Review stakeholders** - Who reviewed documentation
- **Publication date** - When documentation was published
- **Maintenance plan** - Documentation maintenance approach

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Documentation complete and published
- Documentation accessible to developers
- Maintenance plan in place
- Ready for API consumers

#### ⚠️ Blocked
- **Reason:** OpenAPI spec incomplete, API implementation unstable, documentation platform unavailable, examples unclear
- **Required action:** Address blocker (complete spec, stabilize API, set up platform, clarify examples)
- **Who to notify:** API team lead, documentation team, DevOps team
- **Status:** Documentation paused until blocker resolved

#### ❌ Aborted
- **Reason:** API cannot be documented, documentation requirements unclear, documentation platform unavailable
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no deployment)
- **Lessons learned:** Document why documentation couldn't be completed
- **Next step:** May need to fix API implementation or documentation requirements

#### 🔄 Partial Documentation
- **Reason:** Some documentation complete but other parts deferred, some examples deferred
- **Required action:** Document what was completed vs. deferred, update documentation plan
- **Status:** Core documentation complete, deferred parts in backlog
- **Next step:** Proceed with core documentation, deferred parts in future work

---

## Usage Notes

### Integration with API Design and Implementation

- API Documentation Procedure depends on API Design and Implementation outputs
- Documentation must match implementation exactly
- OpenAPI spec should be enhanced during documentation, not created from scratch

### Documentation Maintenance

- Documentation must be maintained as API evolves
- Set up processes to update documentation with API changes
- Version documentation with API versions

### Developer Experience

- Focus on making documentation easy to use
- Provide clear examples and tutorials
- Make documentation searchable and navigable
- Collect and act on developer feedback

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Technical Writing Team / API Team
