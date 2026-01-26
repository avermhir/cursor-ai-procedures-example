# Procedure: Change Management

### 1. Purpose

**Why this procedure exists**

This procedure handles requirement changes, API contract changes, and architecture changes that occur during feature implementation. It ensures changes are properly assessed, coordinated across all implementation layers, and implemented systematically to minimize disruption and maintain consistency.

**What problem it solves**

- Changes made without proper assessment
- Changes not coordinated across implementation layers
- API contract changes break dependent layers
- Requirements changes cause rework
- Architecture changes not propagated
- Changes cause inconsistencies
- Changes not documented or traceable
- Change impact not understood

**What "success" looks like at the end**

Changes that are:
- Properly assessed for impact
- Coordinated across all affected layers
- Implemented systematically
- Documented and traceable
- All dependent code updated
- Consistency maintained
- Change impact minimized
- Implementation continues smoothly

---

### 2. Trigger

**What causes this procedure to be invoked**

- Requirements change during implementation
- API contract changes needed during implementation
- Architecture decisions change during implementation
- Change request received from stakeholders
- Implementation reveals need for changes
- Feature Implementation Orchestration Procedure invokes this (all phases, as needed)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Change request** - Description of requested change, reason for change, change scope
- [ ] **Current implementation state** - Current state of all implementation layers (Backend, Frontend, Middleware)
- [ ] **Current requirements** - Current feature requirements (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Current API contracts** - Current API endpoint definitions (from [API Contract Procedure](./api-contract-procedure.md))
- [ ] **Current architecture decisions** - Current ADRs and architecture decisions (from [Architecture Review Procedure](./architecture-review-procedure.md))

**Decisions already made:**
- [ ] **Change is approved** - Change request has been approved (if required)
- [ ] **Change is necessary** - Change is necessary and cannot be deferred

**Constraints:**
- [ ] **Change scope** - What can and cannot be changed
- [ ] **Change timeline** - When change must be implemented
- [ ] **Change impact** - Acceptable impact of change

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing change request details** → Request detailed change request with scope and rationale
- **Change not approved** → Obtain change approval before proceeding
- **Current state unclear** → Review current implementation state, document current state

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from change assessment through change completion
- **Change scope** - What needs to be changed (requirements, API contracts, architecture, implementation)
- **Change impact** - What layers/components are affected
- **Change coordination** - How changes will be coordinated across layers
- **Change sequence** - Order of change implementation
- **Risks & unknowns** - Change risks, implementation risks, coordination risks
- **Validation points** - After change assessment, after change implementation, after change validation

**Plan must be reviewed before execution begins**

**Output:**
- Change Management Plan (documented and approved)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Assess Change Request

**Purpose**
- Understand the change request
- Assess change scope and impact
- Determine change feasibility

**Inputs**
- **From:** Procedure Required Inputs (change request, current implementation state)

**Actions**
- Review change request:
  - Understand what needs to change
  - Understand why change is needed
  - Understand change scope
- Assess change impact:
  - Identify affected requirements
  - Identify affected API contracts
  - Identify affected architecture decisions
  - Identify affected implementation layers
  - Identify affected components
- Assess change feasibility:
  - Determine if change is feasible
  - Determine change complexity
  - Determine change effort required
  - Determine change risks
- Assess change dependencies:
  - Identify dependencies between changes
  - Identify change sequence requirements
  - Identify coordination needs
- Document change assessment

**Decisions / Evaluations**
- **Decision:** Is change feasible and approved?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, reject change or request change modification
- **Decision:** Is change scope acceptable?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, negotiate change scope or reject change

**Outputs**
- Change request assessed
- Change impact identified
- Change feasibility determined
- Change assessment documented

**Failure Handling**
- **Failure:** Change not feasible
  - **Action:** Document why change is not feasible, propose alternatives, or reject change
  - **Status:** Change rejected or deferred
- **Failure:** Change scope too large
  - **Action:** Break change into smaller changes, or negotiate reduced scope
  - **Retry:** Step 1 with reduced scope

---

#### Step 2: Coordinate Change Across Layers

**Purpose**
- Coordinate change across all affected layers
- Ensure all layers are aware of change
- Plan change implementation sequence

**Inputs**
- **From:** Step 1 outputs (change assessed)
- **From:** Procedure Required Inputs (current implementation state)

**Actions**
- Identify affected layers:
  - Identify affected Backend implementation
  - Identify affected Frontend implementation
  - Identify affected Middleware implementation
  - Identify affected Infrastructure (if applicable)
- Coordinate with implementation teams:
  - Notify all affected teams of change
  - Communicate change scope and impact
  - Coordinate change timeline
  - Schedule change implementation
- Plan change sequence:
  - Determine order of change implementation
  - Determine dependencies between changes
  - Plan coordination points
- Plan change rollback (if needed):
  - Plan how to rollback if change fails
  - Plan rollback sequence
  - Document rollback procedures
- Document change coordination plan

**Decisions / Evaluations**
- **Decision:** Are all affected layers coordinated?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, complete coordination

**Outputs**
- Change coordinated across layers
- Change sequence planned
- Change coordination plan documented

**Failure Handling**
- **Failure:** Coordination incomplete
  - **Action:** Complete coordination with all affected teams
  - **Retry:** Step 2 after completing coordination

---

#### Step 3: Update Requirements (If Applicable)

**Purpose**
- Update feature requirements if change affects requirements
- Ensure requirements reflect change
- Get requirements updated and approved

**Inputs**
- **From:** Step 2 outputs (change coordinated)
- **From:** Procedure Required Inputs (current requirements)

**Actions**
- Assess requirement changes:
  - Determine if change affects requirements
  - Identify requirement updates needed
  - Assess requirement change impact
- Update requirements document:
  - Update functional requirements
  - Update acceptance criteria
  - Update user stories (if applicable)
  - Update requirement documentation
- Validate requirement changes:
  - Validate updated requirements are complete
  - Validate requirements are consistent
  - Validate requirements are achievable
- Get requirements approved:
  - Request requirements review
  - Get requirements approval
  - Update requirements version
- Document requirement changes

**Decisions / Evaluations**
- **Decision:** Do requirements need updating?
  - **Go:** If yes, update requirements, then proceed to Step 4
  - **Skip:** If no, proceed directly to Step 4
- **Decision:** Are updated requirements approved?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, get requirements approved

**Outputs**
- Requirements updated (if applicable)
- Requirements approved
- Requirement changes documented

**Failure Handling**
- **Failure:** Requirements update fails
  - **Action:** Clarify requirement changes, update requirements
  - **Retry:** Step 3 after clarifying requirements
- **Failure:** Requirements not approved
  - **Action:** Address approval concerns, get requirements approved
  - **Retry:** Step 3 after addressing concerns

---

#### Step 4: Update API Contracts (If Applicable)

**Purpose**
- Update API contracts if change affects APIs
- Ensure API contracts reflect change
- Coordinate API contract changes with implementation layers

**Inputs**
- **From:** Step 3 outputs (requirements updated if applicable)
- **From:** Procedure Required Inputs (current API contracts)

**Actions**
- Assess API contract changes:
  - Determine if change affects API contracts
  - Identify API contract updates needed
  - Assess API contract change impact
- Update API contracts:
  - Update API endpoint definitions
  - Update request/response schemas
  - Update OpenAPI specifications
  - Update API documentation
- Validate API contract changes:
  - Validate API contracts are complete
  - Validate API contracts are consistent
  - Validate backwards compatibility (if applicable)
- Coordinate API contract changes:
  - Notify all implementation layers of API changes
  - Coordinate API contract freeze
  - Ensure all layers use updated contracts
- Get API contracts approved:
  - Request API contract review
  - Get API contract approval
  - Update API contract version
- Document API contract changes

**Decisions / Evaluations**
- **Decision:** Do API contracts need updating?
  - **Go:** If yes, update API contracts, then proceed to Step 5
  - **Skip:** If no, proceed directly to Step 5
- **Decision:** Are updated API contracts approved?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, get API contracts approved

**Outputs**
- API contracts updated (if applicable)
- API contracts approved
- API contract changes documented
- Implementation layers notified

**Failure Handling**
- **Failure:** API contract update fails
  - **Action:** Clarify API changes, update contracts
  - **Retry:** Step 4 after clarifying API changes
- **Failure:** API contracts not approved
  - **Action:** Address approval concerns, get contracts approved
  - **Retry:** Step 4 after addressing concerns
- **Failure:** Implementation layers not coordinated
  - **Action:** Coordinate with all implementation layers, ensure contract freeze
  - **Retry:** Step 4 after coordination

---

#### Step 5: Update Architecture Decisions (If Applicable)

**Purpose**
- Update architecture decisions if change affects architecture
- Ensure architecture decisions reflect change
- Document architecture decision changes

**Inputs**
- **From:** Step 4 outputs (API contracts updated if applicable)
- **From:** Procedure Required Inputs (current architecture decisions)

**Actions**
- Assess architecture changes:
  - Determine if change affects architecture decisions
  - Identify architecture decision updates needed
  - Assess architecture change impact
- Update architecture decisions:
  - Update ADRs if decisions change
  - Update architectural patterns if needed
  - Update service/component boundaries if needed
  - Update technology choices if needed
- Validate architecture changes:
  - Validate architecture changes are consistent
  - Validate architecture changes are feasible
  - Validate architecture changes align with overall architecture
- Get architecture changes approved:
  - Request architecture review
  - Get architecture approval
  - Update ADR versions
- Document architecture changes

**Decisions / Evaluations**
- **Decision:** Do architecture decisions need updating?
  - **Go:** If yes, update architecture decisions, then proceed to Step 6
  - **Skip:** If no, proceed directly to Step 6
- **Decision:** Are updated architecture decisions approved?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, get architecture decisions approved

**Outputs**
- Architecture decisions updated (if applicable)
- Architecture decisions approved
- Architecture changes documented

**Failure Handling**
- **Failure:** Architecture update fails
  - **Action:** Clarify architecture changes, update decisions
  - **Retry:** Step 5 after clarifying architecture changes
- **Failure:** Architecture decisions not approved
  - **Action:** Address approval concerns, get decisions approved
  - **Retry:** Step 5 after addressing concerns

---

#### Step 6: Implement Changes Across Layers

**Purpose**
- Implement changes across all affected implementation layers
- Ensure changes are implemented consistently
- Coordinate change implementation

**Inputs**
- **From:** Steps 3-5 outputs (requirements, API contracts, architecture updated if applicable)
- **From:** Step 2 outputs (change coordination plan)

**Actions**
- Coordinate change implementation:
  - Coordinate Backend implementation changes
  - Coordinate Frontend implementation changes
  - Coordinate Middleware implementation changes
  - Coordinate Infrastructure changes (if applicable)
- Implement changes in sequence:
  - Implement changes in planned sequence
  - Follow change dependencies
  - Coordinate implementation checkpoints
- Validate change implementation:
  - Verify changes implemented correctly
  - Verify changes are consistent across layers
  - Verify changes don't break existing functionality
- Test change implementation:
  - Test changed functionality
  - Test integration between layers
  - Test backwards compatibility (if applicable)
- Document change implementation

**Decisions / Evaluations**
- **Decision:** Are changes implemented across all layers?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, complete change implementation

**Outputs**
- Changes implemented across layers
- Changes tested and validated
- Change implementation documented

**Failure Handling**
- **Failure:** Change implementation fails in one layer
  - **Action:** Fix implementation issues, coordinate with other layers
  - **Retry:** Step 6 after fixing issues
- **Failure:** Changes break existing functionality
  - **Action:** Fix breaking changes, re-test
  - **Retry:** Step 6 after fixing issues
- **Failure:** Changes not consistent across layers
  - **Action:** Coordinate changes, ensure consistency
  - **Retry:** Step 6 after ensuring consistency

---

#### Step 7: Validate and Finalize Changes

**Purpose**
- Validate all changes are complete and correct
- Ensure consistency across all layers
- Finalize change implementation

**Inputs**
- **From:** Step 6 outputs (changes implemented)

**Actions**
- Validate change completeness:
  - Verify all required changes are implemented
  - Verify changes match change request
  - Verify changes are complete
- Validate change consistency:
  - Verify changes are consistent across layers
  - Verify API contracts match implementation
  - Verify requirements match implementation
  - Verify architecture decisions match implementation
- Validate change quality:
  - Verify code quality maintained
  - Verify tests updated
  - Verify documentation updated
- Finalize changes:
  - Update change documentation
  - Update Jira ticket with change status
  - Notify stakeholders of change completion
- Document change completion

**Decisions / Evaluations**
- **Decision:** Are all changes validated and complete?
  - **Go:** If yes, procedure complete, changes finalized
  - **No-Go:** If no, complete validation or fix issues

**Outputs**
- Changes validated
- Changes finalized
- Change documentation updated
- Jira ticket updated
- Stakeholders notified
- Change implementation complete

**Failure Handling**
- **Failure:** Validation finds issues
  - **Action:** Fix validation issues, re-validate
  - **Retry:** Step 7 after fixing issues
- **Failure:** Changes not complete
  - **Action:** Complete missing changes
  - **Retry:** Step 7 after completing changes

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Change assessment document
- Change coordination plan
- Updated requirements (if applicable)
- Updated API contracts (if applicable)
- Updated architecture decisions (if applicable)
- Change implementation documentation

**State changes:**
- Requirements updated (if applicable)
- API contracts updated (if applicable)
- Architecture decisions updated (if applicable)
- Implementation updated across all affected layers
- Jira ticket updated with change status

**Decisions recorded:**
- Change approval decisions
- Change implementation decisions
- Change coordination decisions

**Signals emitted:**
- "Change implemented" - Changes implemented across all layers
- "Change complete" - Change management complete

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Change request assessed
- [ ] Change coordinated across layers
- [ ] Requirements updated (if applicable)
- [ ] API contracts updated (if applicable)
- [ ] Architecture decisions updated (if applicable)
- [ ] Changes implemented across layers
- [ ] Changes validated and complete

**Reviews required:**
- [ ] Change assessment review
- [ ] Requirements review (if requirements changed)
- [ ] API contract review (if API contracts changed)
- [ ] Architecture review (if architecture changed)
- [ ] Change implementation review

**Automated checks:**
- [ ] Code changes compile/build
- [ ] Tests pass after changes
- [ ] API contract validation passes (if applicable)

**Who/what can approve completion:**
- **Product Owner** - Must approve requirement changes
- **Technical Lead** - Must approve API contract and architecture changes
- **Implementation Teams** - Must approve change implementation

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Updated requirements** → All implementation procedures (updated requirements)
- **Updated API contracts** → Backend, Frontend, Middleware Implementation Procedures (updated contracts)
- **Updated architecture decisions** → All implementation procedures (updated architecture)
- **Change implementation** → Implementation Verification Procedure (updated implementation)

**Procedures that depend on this:**
- All implementation procedures - Use updated requirements, API contracts, architecture
- Implementation Verification Procedure - Validates change implementation
- Feature Implementation Orchestration Procedure - Coordinates change management

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Change request assessed
- [ ] Change coordinated across layers
- [ ] Requirements updated (if applicable)
- [ ] API contracts updated (if applicable)
- [ ] Architecture decisions updated (if applicable)
- [ ] Changes implemented across all affected layers
- [ ] Changes tested and validated
- [ ] Changes documented
- [ ] Jira ticket updated
- [ ] Stakeholders notified
- [ ] Change implementation complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Jira ticket (change ticket, feature ticket)
- [ ] Change request (change documentation)
- [ ] Updated requirements (if applicable)
- [ ] Updated API contracts (if applicable)
- [ ] Updated architecture decisions (if applicable)
- [ ] Change implementation (code changes)

**Audit trail:**
- Change request date
- Change assessment date
- Change coordination date
- Requirements update date (if applicable)
- API contract update date (if applicable)
- Architecture update date (if applicable)
- Change implementation date
- Change completion date

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- Change request assessed and approved
- Change coordinated across all layers
- Requirements, API contracts, architecture updated (if applicable)
- Changes implemented across all affected layers
- Changes validated and complete
- Change documentation complete

#### ⚠️ Blocked
- **Reason:** Change approval pending or change coordination incomplete
- **Required action:** Obtain change approval or complete coordination
- **Who to notify:** Product Owner, Technical Lead, Implementation Teams
- **Status:** Change management incomplete, waiting for resolution

#### ❌ Aborted
- **Reason:** Change cannot be implemented (e.g., change not feasible, change rejected, change deferred)
- **Required action:** Document why change was aborted, communicate decision to stakeholders
- **Rollback required:** No (change not implemented)
- **Lessons learned:** Document why change was aborted

#### 🔄 Partial Implementation
- **Reason:** Change partially implemented, some layers updated, others pending
- **Required action:** Complete change implementation across all layers
- **Status:** Change in progress, implementation incomplete
- **Next steps:** Complete change implementation, re-validate

---

**Status:** Active Procedure
**Owner:** Technical Lead / Product Owner
