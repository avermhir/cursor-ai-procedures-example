# Procedure: Architecture Compliance Validation

### 1. Purpose

**Why this procedure exists**

This procedure validates that implementation follows architecture decisions, adheres to architectural patterns, and respects service/component boundaries. It ensures architectural consistency, identifies architectural violations early, and maintains architectural integrity throughout feature implementation.

**What problem it solves**

- Implementation deviates from architecture decisions
- Architectural patterns not followed
- Service/component boundaries violated
- Architecture decisions not traceable to implementation
- Architectural debt introduced unknowingly
- Inconsistent architecture across features
- Architecture violations discovered late in development
- No systematic architecture compliance checking

**What "success" looks like at the end**

Implementation that:
- Follows all architecture decisions
- Adheres to architectural patterns
- Respects service/component boundaries
- Maintains architectural consistency
- Architecture compliance validated and documented
- Architectural violations identified and addressed
- Ready for quality assurance or deployment

---

### 2. Trigger

**What causes this procedure to be invoked**

- Implementation checkpoints during feature development (as defined in Feature Implementation Orchestration Procedure)
- After implementation layers complete (Backend, Frontend, Middleware)
- Before quality assurance phase begins
- Architecture compliance needs to be validated
- Feature Implementation Orchestration Procedure invokes this (Phase 3: Implementation checkpoints, Phase 4: QA final validation)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Architecture decisions** - ADRs, architectural patterns, service boundaries, technology choices (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Implementation code** - Code from implementation layers (Backend, Frontend, Middleware)
- [ ] **API contracts** - API endpoint definitions, request/response schemas (from [API Contract Procedure](./api-contract-procedure.md))
- [ ] **Data design** - Database schema, data models (from [Data Design Procedure](./data-design-procedure.md), if applicable)

**Decisions already made:**
- [ ] **Implementation complete** - Implementation layers have completed (for final validation)
- [ ] **Architecture decisions made** - Architecture Review Procedure has been completed

**Constraints:**
- [ ] **Architecture standards** - Must comply with architecture decisions and patterns
- [ ] **Service boundaries** - Must respect service/component boundaries
- [ ] **Technology choices** - Must use approved technologies

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing architecture decisions** → Wait for Architecture Review Procedure to complete
- **Missing implementation code** → Wait for implementation layers to complete
- **Architecture decisions unclear** → Review Architecture Review Procedure outputs, consult architecture team

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 6 ordered steps from architecture review through compliance documentation
- **Validation scope** - What to validate (patterns, boundaries, decisions, technology choices)
- **Validation approach** - How to validate (code review, automated checks, manual review)
- **Validation criteria** - Success criteria for compliance
- **Risks & unknowns** - Architecture violations, pattern deviations, boundary violations
- **Validation points** - After pattern validation, after boundary validation, after decision validation

**Plan must be reviewed before execution begins**

**Output:**
- Architecture Compliance Validation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Architecture Decisions

**Purpose**
- Review architecture decisions and patterns
- Understand architectural requirements
- Identify what needs to be validated

**Inputs**
- **From:** Procedure Required Inputs (architecture decisions from Architecture Review Procedure)

**Actions**
- Review architecture decisions (ADRs):
  - Review all ADRs for the feature
  - Understand architectural choices made
  - Identify architectural constraints
- Review architectural patterns:
  - Review patterns to be followed (layered architecture, microservices, etc.)
  - Understand pattern requirements
  - Identify pattern validation criteria
- Review service/component boundaries:
  - Review service boundaries defined
  - Review component boundaries defined
  - Understand boundary requirements
- Review technology choices:
  - Review approved technologies
  - Review technology constraints
  - Understand technology requirements
- Document architecture validation requirements

**Decisions / Evaluations**
- **Decision:** Are architecture decisions clear and complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify architecture decisions

**Outputs**
- Architecture decisions reviewed
- Architectural patterns identified
- Service/component boundaries identified
- Validation requirements documented

**Failure Handling**
- **Failure:** Architecture decisions unclear
  - **Action:** Review Architecture Review Procedure outputs, consult architecture team
  - **Retry:** Step 1 after clarifying architecture decisions

---

#### Step 2: Validate Architectural Pattern Adherence

**Purpose**
- Validate implementation follows architectural patterns
- Check pattern compliance
- Identify pattern violations

**Inputs**
- **From:** Step 1 outputs (architecture decisions reviewed)
- **From:** Procedure Required Inputs (implementation code)

**Actions**
- Review implementation structure:
  - Review code organization
  - Review folder structure
  - Review module/package structure
- Validate pattern adherence:
  - **Layered Architecture:** Validate layers are respected (presentation, business, data)
  - **Microservices:** Validate service boundaries, service independence
  - **MVC/MVP/MVVM:** Validate pattern structure
  - **Clean Architecture:** Validate dependency rules, layer boundaries
  - **Other patterns:** Validate pattern-specific requirements
- Check pattern violations:
  - Identify code that violates patterns
  - Identify structural issues
  - Identify dependency violations
- Document pattern compliance status

**Decisions / Evaluations**
- **Decision:** Does implementation follow architectural patterns?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, address pattern violations

**Outputs**
- Pattern adherence validated
- Pattern violations identified (if any)
- Pattern compliance documented

**Failure Handling**
- **Failure:** Pattern violations found
  - **Action:** Refactor code to follow patterns, address violations
  - **Retry:** Step 2 after addressing pattern violations

---

#### Step 3: Validate Service/Component Boundaries

**Purpose**
- Validate service boundaries are respected
- Validate component boundaries are respected
- Check for boundary violations

**Inputs**
- **From:** Step 2 outputs (pattern adherence validated)
- **From:** Procedure Required Inputs (implementation code, architecture decisions)

**Actions**
- Review service boundaries:
  - Review service boundaries defined in architecture
  - Check code respects service boundaries
  - Check for cross-service violations
  - Check for service coupling issues
- Review component boundaries:
  - Review component boundaries defined
  - Check code respects component boundaries
  - Check for cross-component violations
  - Check for component coupling issues
- Validate data access boundaries:
  - Check data access respects service boundaries
  - Check database access patterns
  - Check for cross-service data access violations
- Validate API boundaries:
  - Check API endpoints respect service boundaries
  - Check for cross-service API calls
  - Check for boundary violations in API design
- Document boundary compliance status

**Decisions / Evaluations**
- **Decision:** Are service/component boundaries respected?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, address boundary violations

**Outputs**
- Service boundaries validated
- Component boundaries validated
- Boundary violations identified (if any)
- Boundary compliance documented

**Failure Handling**
- **Failure:** Boundary violations found
  - **Action:** Refactor code to respect boundaries, address violations
  - **Retry:** Step 3 after addressing boundary violations

---

#### Step 4: Validate Architecture Decision Compliance

**Purpose**
- Validate implementation follows architecture decisions
- Check decision compliance
- Identify decision violations

**Inputs**
- **From:** Step 3 outputs (boundaries validated)
- **From:** Procedure Required Inputs (implementation code, architecture decisions)

**Actions**
- Review architecture decisions (ADRs):
  - For each ADR, validate implementation follows the decision
  - Check decision constraints are respected
  - Check decision requirements are met
- Validate technology choices:
  - Check approved technologies are used
  - Check technology constraints are respected
  - Check for unauthorized technology usage
- Validate architectural constraints:
  - Check architectural constraints are respected
  - Check for constraint violations
  - Check for architectural rule violations
- Validate data architecture:
  - Check data design follows architecture decisions
  - Check data access patterns follow architecture
  - Check database choices align with architecture
- Validate API architecture:
  - Check API design follows architecture decisions
  - Check API patterns follow architecture
  - Check API technology choices align with architecture
- Document decision compliance status

**Decisions / Evaluations**
- **Decision:** Does implementation follow architecture decisions?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, address decision violations

**Outputs**
- Architecture decisions validated
- Decision violations identified (if any)
- Decision compliance documented

**Failure Handling**
- **Failure:** Decision violations found
  - **Action:** Update implementation to follow decisions, or update ADRs if decisions need to change
  - **Retry:** Step 4 after addressing decision violations

---

#### Step 5: Identify Architecture Improvements

**Purpose**
- Identify opportunities for architecture improvements
- Document architectural debt
- Recommend architecture enhancements

**Inputs**
- **From:** Steps 1-4 outputs (complete architecture validation)

**Actions**
- Review implementation for improvements:
  - Identify code that could better follow patterns
  - Identify opportunities for better architecture
  - Identify areas for architectural refactoring
- Document architectural debt:
  - Document deviations from ideal architecture
  - Document technical debt related to architecture
  - Document areas needing architectural improvement
- Recommend architecture enhancements:
  - Recommend pattern improvements
  - Recommend boundary improvements
  - Recommend architectural refactoring opportunities
- Prioritize improvements:
  - Prioritize critical architectural issues
  - Prioritize architectural debt items
  - Document improvement priorities

**Decisions / Evaluations**
- **Decision:** Are architecture improvements identified and documented?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, complete improvement identification

**Outputs**
- Architecture improvements identified
- Architectural debt documented
- Improvement recommendations created
- Improvement priorities documented

**Failure Handling**
- **Failure:** Improvement identification incomplete
  - **Action:** Complete improvement identification, document findings
  - **Retry:** Step 5 after completing identification

---

#### Step 6: Document Architecture Compliance

**Purpose**
- Document architecture compliance validation results
- Create compliance report
- Update architecture documentation

**Inputs**
- **From:** Steps 1-5 outputs (complete architecture validation)

**Actions**
- Compile validation results:
  - Compile pattern adherence results
  - Compile boundary validation results
  - Compile decision compliance results
  - Compile improvement recommendations
- Create compliance report:
  - Document compliance status
  - Document violations found (if any)
  - Document improvements recommended
  - Document architectural debt
- Update architecture documentation:
  - Update ADRs if decisions changed
  - Update architecture patterns documentation
  - Update architecture guidelines
- Update Jira ticket:
  - Update ticket with compliance status
  - Update ticket with violations (if any)
  - Update ticket with improvements recommended
- Notify stakeholders:
  - Notify architecture team of compliance status
  - Notify implementation team of violations (if any)
  - Notify stakeholders of improvements recommended

**Decisions / Evaluations**
- **Decision:** Is architecture compliance documented?
  - **Go:** If yes, procedure complete, architecture compliance validated
  - **No-Go:** If no, complete documentation

**Outputs**
- Architecture compliance documented
- Compliance report created
- Architecture documentation updated
- Jira ticket updated
- Stakeholders notified

**Failure Handling**
- **Failure:** Documentation incomplete
  - **Action:** Complete documentation, update reports
  - **Retry:** Step 6 after completing documentation

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Architecture compliance validation report
- Pattern adherence validation results
- Boundary validation results
- Decision compliance results
- Architecture improvement recommendations
- Architectural debt documentation

**State changes:**
- Architecture compliance validated
- Violations identified and addressed (if any)
- Architecture documentation updated
- Jira ticket updated with compliance status

**Decisions recorded:**
- Compliance validation decisions
- Violation resolution decisions
- Improvement prioritization decisions

**Signals emitted:**
- "Architecture compliant" - Implementation follows architecture decisions
- "Architecture violations found" - Violations identified (if applicable)
- "Architecture improvements recommended" - Improvements identified

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Pattern adherence validated
- [ ] Service/component boundaries validated
- [ ] Architecture decisions validated
- [ ] Architecture improvements identified
- [ ] Compliance report created

**Reviews required:**
- [ ] Architecture compliance review
- [ ] Violation resolution review (if violations found)

**Automated checks:**
- [ ] Code structure analysis (if automated tools available)
- [ ] Dependency analysis (if automated tools available)
- [ ] Architecture rule checks (if automated tools available)

**Who/what can approve completion:**
- **Architecture Lead** - Must approve architecture compliance
- **Technical Lead** - Must approve compliance validation results

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Architecture compliance status** → Implementation Verification Procedure
- **Architecture compliance status** → Post-Implementation Architecture Assessment Procedure
- **Architecture improvements** → Architecture Review Procedure (for future features)

**Procedures that depend on this:**
- Implementation Verification Procedure - Uses compliance status for verification
- Post-Implementation Architecture Assessment Procedure - Uses compliance results for assessment
- Feature Implementation Orchestration Procedure - Uses compliance status to proceed to QA phase

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Architecture decisions reviewed
- [ ] Pattern adherence validated
- [ ] Service/component boundaries validated
- [ ] Architecture decisions validated
- [ ] Architecture improvements identified
- [ ] Compliance report created
- [ ] Architecture documentation updated
- [ ] Jira ticket updated
- [ ] Stakeholders notified
- [ ] Architecture compliance validated

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Jira ticket (feature ticket, architecture ticket)
- [ ] Architecture decisions (ADRs)
- [ ] Compliance report (validation results)
- [ ] Implementation code (code reviewed)

**Audit trail:**
- Architecture validation date
- Pattern validation date
- Boundary validation date
- Decision validation date
- Compliance report creation date

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- Architecture compliance validated
- All patterns followed
- All boundaries respected
- All decisions followed
- Compliance report created
- Ready for quality assurance or deployment

#### ⚠️ Blocked
- **Reason:** Architecture violations found that need to be addressed
- **Required action:** Address architecture violations before proceeding
- **Who to notify:** Architecture Lead, Implementation Team
- **Status:** Compliance validation incomplete, waiting for violation resolution

#### ❌ Aborted
- **Reason:** Architecture compliance cannot be validated (e.g., architecture decisions unclear, implementation incomplete)
- **Required action:** Document why validation was aborted, clarify architecture or complete implementation
- **Rollback required:** No (validation is non-destructive)
- **Lessons learned:** Document why validation was aborted

#### 🔄 Violations Found
- **Reason:** Architecture violations identified
- **Required action:** Address violations, re-validate compliance
- **Status:** Violations documented, implementation needs updates
- **Next steps:** Fix violations, re-run validation

---

**Status:** Active Procedure
**Owner:** Architecture Team / Technical Lead
