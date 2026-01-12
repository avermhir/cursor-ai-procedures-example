# Procedure: Backwards Compatibility

### 1. Purpose

**Why this procedure exists**

This procedure enables systematic assessment of backwards compatibility requirements for API changes. It determines when backwards compatibility is required versus when breaking changes are acceptable, ensuring informed decisions are made about API evolution. **Breaking backwards compatibility may be acceptable in some cases** - this procedure helps determine when that's appropriate and ensures proper planning when it occurs.

**What problem it solves**

- Breaking existing API consumers unexpectedly
- Unclear backwards compatibility requirements leading to inconsistent decisions
- Breaking changes made without proper assessment of impact
- Missing migration paths for breaking changes
- Inconsistent backwards compatibility decisions across teams
- Unnecessary constraints from assuming backwards compatibility is always required

**What "success" looks like at the end**

A clear backwards compatibility decision that includes:
- Explicit determination of whether backwards compatibility is required
- Assessment of proposed changes (breaking vs. non-breaking)
- Impact analysis on existing consumers (if applicable)
- Decision on whether breaking changes are acceptable
- Migration strategy defined (if breaking changes are acceptable)
- Backwards compatibility decision documented
- Ready for API Design or Implementation

---

### 2. Trigger

**What causes this procedure to be invoked**

- API changes proposed (new endpoints, modified endpoints, field changes, behavior changes)
- [API Design Procedure](./api-design-procedure.md) identifies potentially breaking changes
- Feature requirements may require breaking changes
- Need to determine if backwards compatibility is required for proposed changes
- Existing API consumers may be affected by changes
- Business requirements may allow or require breaking changes

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Proposed API changes** - Description of API changes being considered (from API Design Procedure, feature requirements, or change request)
- [ ] **Existing API contract** - Current API specification (OpenAPI spec, API documentation, existing endpoints)
- [ ] **API consumer inventory** - List of existing API consumers (from [API Discovery Procedure](./api-discovery-procedure.md) or API monitoring/analytics)

**Decisions already made:**
- [ ] **Change type identified** - What changes are being made (additive, modifications, removals)
- [ ] **Business context** - Business requirements, timeline, strategic priorities

**Constraints:**
- [ ] **Business requirements** - Business requirements may allow or require breaking changes
- [ ] **Consumer constraints** - Existing consumers may require compatibility
- [ ] **Timeline constraints** - Migration timelines may affect compatibility decisions
- [ ] **Strategic priorities** - Strategic priorities may favor breaking changes for long-term benefits

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing proposed changes** → Request change description, review feature requirements or API Design
- **Missing existing API contract** → Review API Discovery Report, find existing OpenAPI specs
- **Missing consumer inventory** → Invoke API Discovery Procedure, check API monitoring/analytics
- **Change type unclear** → Review proposed changes, consult with API Design team

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from determining requirement through documenting decision
- **Procedures to be invoked** - [API Discovery Procedure](./api-discovery-procedure.md) (if consumer inventory missing)
- **Dependencies between steps** - Determine Requirement → Identify Consumers → Analyze Changes → Evaluate Impact → Make Decision → Plan Migration → Document
- **Risks & unknowns** - Backwards compatibility requirement unclear, cannot identify all consumers, impact assessment incomplete, migration strategy unclear
- **Validation points** - After requirement determination, after impact assessment, after decision, before documentation

**Plan must be reviewed before execution begins**

**Output:**
- Backwards Compatibility Assessment Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Determine Backwards Compatibility Requirement

**Purpose**
- Explicitly determine if backwards compatibility is required
- Consider business requirements, consumer needs, and strategic priorities
- Make clear decision: required or not required

**Inputs**
- **From:** Procedure Required Inputs (business context, consumer constraints, strategic priorities)

**Actions**
- Assess backwards compatibility requirement:
  - **Is backwards compatibility required?**
    - Consider business requirements (may allow breaking changes)
    - Consider consumer needs (internal vs. external consumers)
    - Consider strategic priorities (may favor breaking changes for long-term benefits)
    - Consider timeline constraints (may allow breaking changes if migration is feasible)
  - **Factors that may make breaking changes acceptable:**
    - No existing consumers (new API or no active consumers)
    - Internal-only consumers (easier to coordinate migration)
    - Strategic refactoring (long-term benefits outweigh short-term disruption)
    - Business requirements explicitly allow breaking changes
    - Migration is feasible within timeline
    - Breaking changes enable significant improvements
  - **Factors that require backwards compatibility:**
    - External/public API consumers
    - Critical production consumers
    - No migration path feasible
    - Business requirements explicitly require compatibility
    - High cost of breaking changes
- Make explicit decision:
  - **Backwards compatibility REQUIRED** - Must maintain compatibility
  - **Backwards compatibility NOT REQUIRED** - Breaking changes acceptable
  - Document decision and rationale
- Document requirement determination

**Decisions / Evaluations**
- **Decision:** Is backwards compatibility requirement clear?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, gather more information, consult stakeholders
- **Decision:** Is backwards compatibility required?
  - **Go:** If determined, proceed to Step 2
  - **No-Go:** If unclear, consult stakeholders, make decision

**Outputs**
- Backwards compatibility requirement determined (required or not required)
- Decision rationale documented
- Requirement determination documented

**Failure Handling**
- **Failure:** Backwards compatibility requirement unclear
  - **Action:** Consult with stakeholders, review business requirements, make explicit decision
  - **Retry:** Step 1 after gathering information
- **Failure:** Conflicting requirements
  - **Action:** Escalate to product/architecture team, make decision based on priorities
  - **Escalate:** If conflict cannot be resolved, escalate to decision makers

---

#### Step 2: Identify Existing Consumers

**Purpose**
- Identify all existing API consumers
- Understand consumer usage patterns
- Assess consumer impact potential

**Inputs**
- **From:** Procedure Required Inputs (API consumer inventory)
- **From:** Step 1 outputs (backwards compatibility requirement)

**Actions**
- Identify existing API consumers:
  - Review API consumer inventory (from API Discovery or monitoring)
  - Check API monitoring/analytics for active consumers
  - Review API usage logs
  - Check service dependencies
  - Identify frontend applications using the API
  - Identify other services consuming the API
  - Identify external/public consumers (if applicable)
- Understand consumer usage patterns:
  - Which endpoints are used by which consumers
  - Frequency of usage
  - Critical vs. non-critical consumers
  - Internal vs. external consumers
- Assess consumer impact potential:
  - Which consumers would be affected by breaking changes
  - Severity of impact for each consumer
  - Migration complexity for each consumer
- Document consumer inventory

**Decisions / Evaluations**
- **Decision:** Are all consumers identified?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, continue identifying consumers, or proceed with known consumers
- **Decision:** If backwards compatibility NOT required, are consumers aware?
  - **Go:** If yes or no consumers, proceed to Step 3
  - **No-Go:** If no, notify consumers before proceeding

**Outputs**
- Existing consumers identified
- Consumer usage patterns understood
- Consumer impact potential assessed
- Consumer inventory documented

**Failure Handling**
- **Failure:** Cannot identify all consumers
  - **Action:** Use available information, document known consumers, note that some may be unknown
  - **Workaround:** Proceed with known consumers, plan for unknown consumers in migration strategy
- **Failure:** No consumer inventory available
  - **Action:** Invoke API Discovery Procedure, check API monitoring, review service dependencies
  - **Retry:** Step 2 after obtaining consumer inventory

---

#### Step 3: Analyze Proposed Changes

**Purpose**
- Review proposed API changes
- Identify breaking vs. non-breaking changes
- Assess impact on existing consumers

**Inputs**
- **From:** Procedure Required Inputs (proposed API changes, existing API contract)
- **From:** Step 2 outputs (consumer inventory)

**Actions**
- Review proposed API changes:
  - Review change description
  - Compare with existing API contract
  - Identify specific changes (endpoints, fields, behavior)
- Identify breaking vs. non-breaking changes:
  - **Non-breaking changes (backwards compatible):**
    - Adding new endpoints
    - Adding new optional fields to requests
    - Adding new optional fields to responses
    - Adding new optional query parameters
    - Making required fields optional (rare, but non-breaking)
    - Adding new response fields (optional)
  - **Breaking changes (not backwards compatible):**
    - Removing endpoints
    - Removing fields from requests/responses
    - Making optional fields required
    - Changing field types
    - Changing endpoint URLs
    - Modifying endpoint behavior in incompatible ways
    - Changing response structures in incompatible ways
    - Changing authentication/authorization requirements
- Assess impact on existing consumers:
  - Which consumers use affected endpoints/fields
  - How breaking changes would affect each consumer
  - Severity of impact (critical, moderate, low)
- Document change analysis

**Decisions / Evaluations**
- **Decision:** Are all changes analyzed?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, complete analysis
- **Decision:** Are changes breaking or non-breaking?
  - **Go:** If determined, proceed to Step 4
  - **No-Go:** If unclear, analyze more carefully, consult API design team

**Outputs**
- Proposed changes analyzed
- Breaking vs. non-breaking changes identified
- Impact on consumers assessed
- Change analysis documented

**Failure Handling**
- **Failure:** Cannot determine if changes are breaking
  - **Action:** Review API contract more carefully, consult with API design team, test changes
  - **Retry:** Step 3 after additional analysis
- **Failure:** Impact assessment incomplete
  - **Action:** Review consumer usage patterns, analyze impact more carefully
  - **Retry:** Step 3 after completing impact assessment

---

#### Step 4: Evaluate Breaking Change Impact

**Purpose**
- If breaking changes exist: assess detailed impact on each consumer
- Determine severity of breaking changes
- Identify affected consumers and migration complexity

**Inputs**
- **From:** Step 3 outputs (change analysis, breaking changes identified)
- **From:** Step 2 outputs (consumer inventory)
- **From:** Step 1 outputs (backwards compatibility requirement)

**Actions**
- If breaking changes exist:
  - Assess impact on each consumer:
    - Which consumers are affected
    - How each consumer is affected
    - What needs to change for each consumer
    - Migration complexity for each consumer
  - Determine severity:
    - **Critical impact:** Consumers cannot function without changes
    - **Moderate impact:** Consumers need updates but can work around temporarily
    - **Low impact:** Consumers minimally affected or not actively using affected features
  - Identify affected consumers:
    - List all affected consumers
    - Categorize by impact severity
    - Estimate migration effort for each
- If no breaking changes:
  - Document that changes are backwards compatible
  - Proceed to Step 7 (document decision)
- Document impact evaluation

**Decisions / Evaluations**
- **Decision:** If backwards compatibility REQUIRED and breaking changes exist:
  - **Go:** If breaking changes can be avoided, proceed to Step 5 (make decision to avoid breaking changes)
  - **No-Go:** If breaking changes cannot be avoided, must create new version or find alternative approach
- **Decision:** If backwards compatibility NOT REQUIRED and breaking changes exist:
  - **Go:** If impact is acceptable, proceed to Step 5 (make decision to proceed with breaking changes)
  - **No-Go:** If impact is unacceptable, reconsider breaking changes or plan extensive migration

**Outputs**
- Breaking change impact evaluated
- Affected consumers identified
- Impact severity determined
- Migration complexity assessed
- Impact evaluation documented

**Failure Handling**
- **Failure:** Impact assessment incomplete
  - **Action:** Review consumer usage, analyze impact more carefully, consult with consumer teams
  - **Retry:** Step 4 after completing impact assessment
- **Failure:** Cannot assess migration complexity
  - **Action:** Consult with consumer teams, estimate based on change complexity
  - **Retry:** Step 4 after migration complexity assessed

---

#### Step 5: Make Compatibility Decision

**Purpose**
- Make final decision on backwards compatibility approach
- If compatibility required: ensure changes are non-breaking or plan versioning
- If compatibility not required: document rationale and plan migration

**Inputs**
- **From:** Step 1 outputs (backwards compatibility requirement)
- **From:** Step 3 outputs (breaking vs. non-breaking changes)
- **From:** Step 4 outputs (impact evaluation)

**Actions**
- Make compatibility decision based on requirement and changes:
  - **If backwards compatibility REQUIRED:**
    - **If changes are non-breaking:** Proceed with changes (maintain compatibility)
    - **If changes are breaking:** Must create new API version or find non-breaking alternative
    - Document decision: Maintain backwards compatibility
  - **If backwards compatibility NOT REQUIRED:**
    - **If changes are non-breaking:** Proceed with changes (no compatibility concern)
    - **If changes are breaking:** Proceed with breaking changes, plan migration
    - Document decision: Breaking changes acceptable
- Document decision rationale:
  - Why backwards compatibility is required or not required
  - Why breaking changes are acceptable or not acceptable
  - Trade-offs considered
  - Strategic rationale
- Make explicit decision:
  - **Decision:** Maintain backwards compatibility (non-breaking changes or new version)
  - **Decision:** Breaking changes acceptable (proceed with migration)
- Document compatibility decision

**Decisions / Evaluations**
- **Decision:** Is compatibility decision clear?
  - **Go:** If yes, proceed to Step 6 (if breaking changes) or Step 7 (if non-breaking)
  - **No-Go:** If no, review requirements and impact, make decision
- **Decision:** If breaking changes acceptable, is impact acceptable?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, reconsider breaking changes or plan extensive migration

**Outputs**
- Compatibility decision made
- Decision rationale documented
- Explicit decision recorded

**Failure Handling**
- **Failure:** Decision unclear or conflicting
  - **Action:** Review requirements, impact, and rationale, consult stakeholders, make decision
  - **Retry:** Step 5 after decision clarity
- **Failure:** Breaking changes required but backwards compatibility also required
  - **Action:** Create new API version, plan versioning strategy, maintain old version
  - **Retry:** Step 5 with versioning approach

---

#### Step 6: Plan Migration Strategy (if breaking changes acceptable)

**Purpose**
- Define migration path for consumers (if breaking changes are acceptable)
- Plan deprecation timeline for old version (if applicable)
- Coordinate with consumers

**Inputs**
- **From:** Step 5 outputs (compatibility decision - breaking changes acceptable)
- **From:** Step 4 outputs (affected consumers, migration complexity)
- **From:** Step 2 outputs (consumer inventory)

**Actions**
- Define migration path:
  - Plan migration steps for each affected consumer
  - Estimate migration timeline
  - Identify migration dependencies
  - Plan migration coordination
- Plan deprecation timeline (if old version will be deprecated):
  - Define deprecation timeline for old API version
  - Plan deprecation communication
  - Plan deprecation warnings
  - Define sunset date for old version
- Coordinate with consumers:
  - Notify affected consumers of breaking changes
  - Share migration timeline
  - Provide migration documentation
  - Coordinate migration support
- Document migration strategy:
  - Migration steps documented
  - Timeline documented
  - Coordination plan documented
  - Deprecation plan documented (if applicable)

**Decisions / Evaluations**
- **Decision:** Is migration strategy complete?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, complete migration strategy
- **Decision:** Are consumers notified?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, notify consumers before proceeding

**Outputs**
- Migration path defined
- Migration timeline planned
- Deprecation timeline planned (if applicable)
- Consumers notified
- Migration strategy documented

**Failure Handling**
- **Failure:** Migration strategy unclear
  - **Action:** Review consumer impact, plan migration steps, consult with consumer teams
  - **Retry:** Step 6 after migration strategy clarified
- **Failure:** Consumers cannot be notified
  - **Action:** Document notification attempts, proceed with public communication, plan for unknown consumers
  - **Workaround:** Use deprecation warnings, public documentation, extended timeline

---

#### Step 7: Document Compatibility Decision

**Purpose**
- Document complete backwards compatibility assessment
- Document decision and rationale
- Make decision accessible for API Design and Implementation

**Inputs**
- **From:** All previous steps (complete assessment)

**Actions**
- Create backwards compatibility decision document:
  - Document backwards compatibility requirement (required or not required)
  - Document proposed changes
  - Document breaking vs. non-breaking changes
  - Document consumer impact (if applicable)
  - Document compatibility decision
  - Document decision rationale
  - Document migration strategy (if breaking changes acceptable)
  - Document deprecation timeline (if applicable)
- Store decision document:
  - Save to `.ai_working/` or appropriate location
  - Link from API Design documentation
  - Make accessible to implementation teams
- Update API Design (if applicable):
  - Provide backwards compatibility decision to API Design Procedure
  - Update API Design with compatibility requirements
- Ready for next steps:
  - If non-breaking: Ready for API Implementation
  - If breaking with migration: Ready for API Implementation with migration plan
  - If breaking with versioning: Ready for API Design to create new version

**Decisions / Evaluations**
- **Decision:** Is compatibility decision documented completely?
  - **Go:** If yes, backwards compatibility assessment complete
  - **No-Go:** If no, complete documentation

**Outputs**
- Backwards compatibility decision document created
- Decision documented and accessible
- Ready for API Design or Implementation

**Failure Handling**
- **Failure:** Documentation incomplete
  - **Action:** Review all steps, ensure all information is captured
  - **Retry:** Step 7 with complete information

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Backwards Compatibility Decision Document** - Complete assessment with decision and rationale
- **Consumer Impact Assessment** - Analysis of impact on existing consumers (if applicable)
- **Migration Strategy** - Migration plan for breaking changes (if breaking changes acceptable)

**State changes:**
- Backwards compatibility requirement explicitly determined
- Breaking vs. non-breaking changes identified
- Compatibility decision made and documented

**Decisions recorded:**
- Backwards compatibility requirement (required or not required)
- Compatibility decision (maintain compatibility or breaking changes acceptable)
- Migration approach (if breaking changes)

**Signals emitted:**
- "Backwards Compatibility Assessment Complete" - Ready for API Design or Implementation
- "Backwards Compatibility Required" - API Design must maintain compatibility
- "Breaking Changes Acceptable" - API Design can proceed with breaking changes and migration

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Backwards compatibility requirement explicitly determined
- [ ] All proposed changes analyzed
- [ ] Breaking vs. non-breaking changes identified
- [ ] Consumer impact assessed (if applicable)
- [ ] Compatibility decision made
- [ ] Decision rationale documented
- [ ] Migration strategy defined (if breaking changes acceptable)

**Reviews required:**
- [ ] Technical lead review (compatibility decision)
- [ ] Product owner review (if breaking changes affect business)
- [ ] Consumer team review (if breaking changes affect consumers)

**Automated checks:**
- [ ] Decision document is complete
- [ ] All required sections populated

**Who/what can approve completion:**
- **Technical Lead** - Should review compatibility decision
- **Product Owner** - Should review if breaking changes affect business
- **API Consumers** - Should be notified if breaking changes affect them

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Backwards Compatibility Decision** → Input for [API Design Procedure](./api-design-procedure.md) (compatibility requirements)
- **Migration Strategy** → Input for [API Implementation Procedure](./api-implementation-procedure.md) (migration implementation)
- **Consumer Impact Assessment** → Input for [API Design Procedure](./api-design-procedure.md) (consumer considerations)

**Procedures that depend on this:**
- **[API Design Procedure](./api-design-procedure.md)** - Uses compatibility decision to inform API design
- **[API Implementation Procedure](./api-implementation-procedure.md)** - Uses migration strategy for implementation
- **[Feature Implementation Orchestration Procedure](../feature-lifecycle/feature-implementation-orchestration-procedure.md)** - May invoke this during technical design phase

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Backwards compatibility requirement explicitly determined (required or not required)
- [ ] All proposed changes analyzed
- [ ] Breaking vs. non-breaking changes identified
- [ ] Existing consumers identified (if applicable)
- [ ] Consumer impact assessed (if applicable)
- [ ] Compatibility decision made
- [ ] Decision rationale documented
- [ ] Migration strategy defined (if breaking changes acceptable)
- [ ] Consumers notified (if breaking changes affect them)
- [ ] Backwards compatibility decision document created
- [ ] Ready for API Design or Implementation

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **API Design** - Link to API Design Procedure that triggered this
- [ ] **API Discovery Report** - Link to consumer inventory
- [ ] **Backwards Compatibility Decision Document** - Location of decision document
- [ ] **Jira Ticket** - Ticket number for the feature/API change
- [ ] **Migration Plan** - Link to migration strategy document

**Audit trail:**
- **Assessment date** - When backwards compatibility assessment was performed
- **Backwards compatibility requirement** - Required or not required
- **Compatibility decision** - Maintain compatibility or breaking changes acceptable
- **Decision rationale** - Why this decision was made
- **Affected consumers** - List of consumers affected (if applicable)
- **Migration timeline** - Migration timeline (if applicable)

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Backwards compatibility requirement determined
- Breaking vs. non-breaking changes identified
- Compatibility decision made
- Migration strategy defined (if applicable)
- Ready for API Design or Implementation

#### ⚠️ Blocked
- **Reason:** Backwards compatibility requirement unclear, cannot identify consumers, impact assessment incomplete
- **Required action:** Address blocker (gather information, consult stakeholders)
- **Who to notify:** Technical lead, product owner
- **Status:** Assessment paused until blocker resolved

#### ❌ Aborted
- **Reason:** Cannot determine requirement, conflicting requirements, assessment not needed
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (assessment artifacts can be kept for reference)
- **Lessons learned:** Document why assessment couldn't be completed
- **Next step:** May proceed without assessment or revisit when requirements clear

#### 🔄 Decision Changed
- **Reason:** New information changes backwards compatibility requirement or decision
- **Required action:** Update assessment, revise decision, notify stakeholders
- **Status:** Assessment updated, re-review required
- **Next step:** Re-enter workflow at appropriate step to address new information

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** API Team / Architecture Team
