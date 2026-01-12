# Procedure: Requirements & Scope

### 1. Purpose

**Why this procedure exists**

This procedure defines detailed functional requirements, establishes clear and testable acceptance criteria, and defines explicit scope boundaries for features. It creates the foundation for feature implementation by ensuring all stakeholders understand what needs to be built and how success will be measured.

**What problem it solves**

- Features implemented without clear requirements
- Missing or ambiguous acceptance criteria
- Scope creep during implementation
- Unclear what success looks like
- Requirements discovered mid-implementation
- Acceptance criteria not testable or measurable
- Scope boundaries unclear leading to feature bloat

**What "success" looks like at the end**

A complete requirements specification that includes:
- Detailed functional requirements defined
- Clear, testable, and measurable acceptance criteria
- Explicit scope boundaries (in-scope and out-of-scope)
- User stories and use cases (if applicable)
- Business rules and constraints documented
- Requirements approved by stakeholders
- Ready for User Journey/UX and Architecture Review procedures

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Feature Intake Procedure](./feature-intake-procedure.md) has been completed
- Feature is approved and ready for detailed requirements definition
- Need to define acceptance criteria for feature
- Need to establish scope boundaries before design/implementation
- Feature Implementation Orchestration Procedure invokes this (Phase 1)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Feature definition document** - High-level feature description, context, business value (from [Feature Intake Procedure](./feature-intake-procedure.md))
- [ ] **Jira ticket/epic** - Feature tracking ticket (from Feature Intake Procedure)
- [ ] **Stakeholder list** - Identified stakeholders and roles (from Feature Intake Procedure)
- [ ] **Business context** - Problem statement, business value, why feature is needed

**Decisions already made:**
- [ ] **Feature is approved** - Feature has been approved to proceed (from Feature Intake Procedure)
- [ ] **Feature owner identified** - Product owner and technical lead identified

**Constraints:**
- [ ] **Timeline constraints** - Any deadlines or timeline requirements (may affect scope)
- [ ] **Resource constraints** - Team capacity, budget (may affect scope)
- [ ] **Business constraints** - Regulatory requirements, compliance, business rules

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing feature definition** → Invoke [Feature Intake Procedure](./feature-intake-procedure.md) first
- **Missing stakeholders** → Request stakeholder identification from product owner
- **Missing business context** → Request business context from stakeholders

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from feature review through requirements documentation
- **Procedures to be invoked** - Jira MCP tools (for updating tickets), User Journey/UX Procedure (next step)
- **Dependencies between steps** - Review → Gather → Define Requirements → Define Acceptance → Define Scope → Validate → Document → Ready
- **Risks & unknowns** - Requirements unclear, stakeholders unavailable, acceptance criteria not testable, scope boundaries unclear
- **Validation points** - After requirements definition, after acceptance criteria, after scope definition, after stakeholder approval

**Plan must be reviewed before execution begins**

**Output:**
- Requirements & Scope Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Feature Definition

**Purpose**
- Understand feature context from intake
- Review feature definition document
- Identify questions and clarifications needed

**Inputs**
- **From:** Procedure Required Inputs (feature definition document, Jira ticket, stakeholder list)
- Feature Intake Procedure outputs

**Actions**
- Read feature definition document thoroughly
- Review Jira ticket and any existing information
- Understand business context and problem statement
- Review stakeholder list and roles
- Identify questions or clarifications needed
- Document any gaps in understanding
- Note any assumptions made during intake

**Decisions / Evaluations**
- **Decision:** Is feature definition clear enough to proceed?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, request clarifications, then retry Step 1

**Outputs**
- Understanding of feature context
- Questions/clarifications identified (if any)
- Gaps in understanding documented (if any)
- Assumptions documented

**Failure Handling**
- **Failure:** Feature definition is unclear or incomplete
  - **Action:** Request clarifications from feature owner or stakeholders
  - **Retry:** Step 1 after clarifications received
- **Failure:** Missing critical information
  - **Action:** Request missing information, may need to revisit Feature Intake Procedure
  - **Retry:** Step 1 after information received

---

#### Step 2: Gather Requirements

**Purpose**
- Collect detailed requirements from stakeholders
- Understand user needs
- Identify functional requirements
- Identify business rules and constraints

**Inputs**
- **From:** Step 1 outputs (feature context understanding)
- **From:** Procedure Required Inputs (stakeholder list)

**Actions**
- Schedule and conduct stakeholder interviews
- Gather user needs and pain points
- Identify functional requirements (what the feature must do)
- Identify non-functional requirements (performance, security, etc.)
- Identify business rules and constraints
- Gather examples and use cases
- Document requirements as they are gathered
- Identify conflicting requirements (if any)

**Decisions / Evaluations**
- **Decision:** Are requirements gathered comprehensively?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, conduct additional interviews or gather more information

**Outputs**
- Gathered requirements (raw)
- User needs documented
- Business rules identified
- Use cases and examples collected
- Conflicting requirements identified (if any)

**Failure Handling**
- **Failure:** Stakeholders unavailable
  - **Action:** Schedule alternative meeting times, use async communication, or proceed with available stakeholders
  - **Retry:** Step 2 when stakeholders available
- **Failure:** Requirements unclear or conflicting
  - **Action:** Schedule clarification meeting, involve product owner to resolve conflicts
  - **Retry:** Step 2 after clarifications

---

#### Step 3: Define Functional Requirements

**Purpose**
- Structure and document functional requirements
- Create user stories (if applicable)
- Define use cases
- Document business rules

**Inputs**
- **From:** Step 2 outputs (gathered requirements)

**Actions**
- Organize requirements into logical groups
- Write clear, specific functional requirements
- Create user stories (As a [user], I want [goal], so that [benefit])
- Define use cases (actor, goal, steps, outcomes)
- Document business rules explicitly
- Prioritize requirements (must-have, should-have, nice-to-have)
- Document requirement dependencies
- Create requirements traceability matrix

**Decisions / Evaluations**
- **Decision:** Are functional requirements complete and clear?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, refine requirements, gather more information

**Outputs**
- Functional requirements document
- User stories (if applicable)
- Use cases defined
- Business rules documented
- Requirements prioritized
- Requirements traceability matrix

**Failure Handling**
- **Failure:** Requirements incomplete
  - **Action:** Review gathered requirements, identify gaps, gather additional information
  - **Retry:** Step 3 after gaps filled
- **Failure:** Requirements unclear or ambiguous
  - **Action:** Refine requirements for clarity, consult with stakeholders
  - **Retry:** Step 3 with clarified requirements

---

#### Step 4: Define Acceptance Criteria

**Purpose**
- Create testable, measurable acceptance criteria
- Ensure criteria cover all functional requirements
- Define success criteria for the feature

**Inputs**
- **From:** Step 3 outputs (functional requirements)

**Actions**
- For each functional requirement, define acceptance criteria
- Ensure criteria are:
  - Specific and measurable
  - Testable (can be verified)
  - User-visible (not implementation details)
  - Clear pass/fail conditions
- Create acceptance criteria format:
  - Given [context]
  - When [action]
  - Then [expected outcome]
- Define feature-level success criteria
- Ensure criteria cover:
  - Happy path scenarios
  - Error scenarios
  - Edge cases
  - Boundary conditions
- Validate criteria are testable

**Decisions / Evaluations**
- **Decision:** Are acceptance criteria testable and measurable?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, refine criteria to be testable
- **Decision:** Do criteria cover all requirements?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, add missing criteria

**Outputs**
- Acceptance criteria for each requirement
- Feature-level success criteria
- Testable criteria (can be verified)
- Criteria covering all scenarios

**Failure Handling**
- **Failure:** Acceptance criteria not testable
  - **Action:** Refine criteria to be specific and measurable, use Given/When/Then format
  - **Retry:** Step 4 with testable criteria
- **Failure:** Criteria missing for some requirements
  - **Action:** Review all requirements, add missing acceptance criteria
  - **Retry:** Step 4 with complete criteria

---

#### Step 5: Define Scope Boundaries

**Purpose**
- Explicitly define what's IN scope
- Explicitly define what's OUT of scope
- Identify edge cases and assumptions
- Prevent scope creep

**Inputs**
- **From:** Step 3 outputs (functional requirements)
- **From:** Step 4 outputs (acceptance criteria)
- **From:** Procedure Required Inputs (timeline, resource constraints)

**Actions**
- Define what IS included in this feature (in-scope):
  - Specific functionality
  - User types/roles
  - Platforms/browsers
  - Data/entities
- Define what IS NOT included (out-of-scope):
  - Explicitly list what's excluded
  - Future enhancements
  - Related features not in this scope
  - Edge cases not covered
- Document assumptions:
  - What we assume to be true
  - What we assume exists
  - What we assume users know
- Identify edge cases:
  - Boundary conditions
  - Error scenarios
  - Unusual user behaviors
- Consider constraints:
  - Timeline may limit scope
  - Resources may limit scope
  - Technical constraints may limit scope

**Decisions / Evaluations**
- **Decision:** Are scope boundaries clear and explicit?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, clarify boundaries
- **Decision:** Is scope feasible given constraints?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, adjust scope or constraints

**Outputs**
- In-scope items explicitly listed
- Out-of-scope items explicitly listed
- Assumptions documented
- Edge cases identified
- Scope boundaries validated against constraints

**Failure Handling**
- **Failure:** Scope boundaries unclear
  - **Action:** Clarify boundaries with stakeholders, be more explicit
  - **Retry:** Step 5 with clarified boundaries
- **Failure:** Scope too large for constraints
  - **Action:** Reduce scope, extend timeline, or increase resources
  - **Escalate:** If scope cannot be adjusted, escalate to product owner

---

#### Step 6: Validate Requirements

**Purpose**
- Review requirements with stakeholders
- Validate acceptance criteria are testable
- Validate scope is clear and feasible
- Obtain stakeholder approval

**Inputs**
- **From:** Step 3 outputs (functional requirements)
- **From:** Step 4 outputs (acceptance criteria)
- **From:** Step 5 outputs (scope boundaries)
- **From:** Procedure Required Inputs (stakeholder list)

**Actions**
- Prepare requirements review document:
  - Functional requirements summary
  - Acceptance criteria
  - Scope boundaries
  - Assumptions and edge cases
- Present requirements to stakeholders:
  - Product owner
  - Technical lead
  - Other key stakeholders
- Review each requirement:
  - Is it clear?
  - Is it complete?
  - Is it feasible?
- Review acceptance criteria:
  - Are they testable?
  - Do they cover all requirements?
  - Are they clear?
- Review scope boundaries:
  - Are boundaries clear?
  - Is scope feasible?
  - Are stakeholders aligned?
- Address feedback and questions
- Obtain stakeholder approval
- Document approval

**Decisions / Evaluations**
- **Decision:** Are stakeholders aligned on requirements?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, address misalignments, revise requirements
- **Decision:** Is approval obtained?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, address concerns, revise requirements, retry approval

**Outputs**
- Requirements reviewed with stakeholders
- Feedback incorporated
- Stakeholder alignment achieved
- Approval obtained
- Approval documented

**Failure Handling**
- **Failure:** Stakeholders not aligned
  - **Action:** Facilitate discussion, identify misalignments, revise requirements
  - **Retry:** Step 6 after requirements revised
- **Failure:** Approval not obtained
  - **Action:** Address concerns, revise requirements based on feedback
  - **Retry:** Step 6 after revisions
- **Failure:** Requirements need significant changes
  - **Action:** Revise requirements, may need to revisit Steps 2-5
  - **Retry:** Step 6 after significant revisions

---

#### Step 7: Document Requirements

**Purpose**
- Create complete requirements document
- Update Jira ticket with requirements
- Store requirements for reference
- Make requirements accessible to all stakeholders

**Inputs**
- **From:** All previous steps (complete requirements specification)
- **From:** Procedure Required Inputs (Jira ticket)

**Actions**
- Create requirements document including:
  - Feature overview and context
  - Functional requirements
  - Acceptance criteria
  - Scope boundaries (in/out)
  - User stories (if applicable)
  - Use cases
  - Business rules
  - Assumptions
  - Edge cases
- Update Jira ticket:
  - Add requirements to description
  - Add acceptance criteria to acceptance criteria field
  - Add scope boundaries to description
  - Link requirements document if stored separately
- Store requirements document:
  - Save to `.ai_working/` or appropriate location
  - Link from Jira ticket
  - Make accessible to all stakeholders
- Create requirements traceability:
  - Link requirements to acceptance criteria
  - Link requirements to user stories
  - Link requirements to use cases

**Decisions / Evaluations**
- **Decision:** Is requirements document complete?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, complete missing sections

**Outputs**
- Requirements document created
- Jira ticket updated with requirements
- Acceptance criteria added to Jira ticket
- Requirements document stored and accessible
- Requirements traceability established

**Failure Handling**
- **Failure:** Jira ticket update fails
  - **Action:** Retry update, check Jira access, use alternative documentation method
  - **Retry:** Step 7 after access issues resolved
- **Failure:** Requirements document incomplete
  - **Action:** Review all steps, ensure all information is captured
  - **Retry:** Step 7 with complete information

---

#### Step 8: Prepare for Next Phase

**Purpose**
- Verify all outputs are complete
- Ensure requirements are ready for design and implementation
- Prepare for User Journey/UX and Architecture Review

**Inputs**
- **From:** All previous steps (complete requirements specification)

**Actions**
- Verify all required outputs are complete:
  - Functional requirements defined
  - Acceptance criteria defined and testable
  - Scope boundaries explicitly defined
  - Requirements approved
  - Requirements documented
- Verify requirements are ready for:
  - User Journey/UX Procedure (user needs, use cases)
  - Architecture Review Procedure (functional requirements, constraints)
  - Implementation procedures (requirements, acceptance criteria)
- Document any open questions or clarifications
- Confirm readiness for next phase

**Decisions / Evaluations**
- **Decision:** Are all outputs complete and ready?
  - **Go:** If yes, requirements & scope complete
  - **No-Go:** If no, complete missing outputs

**Outputs**
- All outputs verified complete
- Requirements ready for User Journey/UX Procedure
- Requirements ready for Architecture Review Procedure
- Ready for next phase

**Failure Handling**
- **Failure:** Missing outputs
  - **Action:** Complete missing outputs, revisit appropriate step
  - **Retry:** Step 8 after outputs complete

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Requirements Document** - Complete functional requirements, acceptance criteria, scope boundaries, user stories, use cases, business rules
- **Jira Ticket Updated** - Requirements and acceptance criteria added to ticket
- **Requirements Traceability Matrix** - Links between requirements, acceptance criteria, and use cases

**State changes:**
- Feature has detailed requirements defined
- Acceptance criteria are established and testable
- Scope boundaries are explicit and documented
- Requirements are approved by stakeholders
- Feature is ready for User Journey/UX and Architecture Review

**Decisions recorded:**
- Functional requirements decisions
- Acceptance criteria decisions
- Scope boundary decisions
- Priority decisions (must-have, should-have, nice-to-have)
- Approval decisions

**Signals emitted:**
- "Requirements & Scope Complete" - Ready for User Journey/UX and Architecture Review
- "Requirements Approved" - Stakeholders have approved requirements
- "Ready for Design" - Can proceed to design phase

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All functional requirements are defined
- [ ] Acceptance criteria are testable and measurable
- [ ] Scope boundaries are explicit (in-scope and out-of-scope)
- [ ] Requirements are approved by stakeholders
- [ ] Requirements document is complete

**Reviews required:**
- [ ] Stakeholder review (product owner, technical lead, key stakeholders)
- [ ] Requirements completeness review
- [ ] Acceptance criteria testability review
- [ ] Scope boundary review

**Automated checks:**
- [ ] Jira ticket updated successfully
- [ ] Requirements document is accessible

**Who/what can approve completion:**
- **Product Owner** - Must approve requirements
- **Technical Lead** - Should review for technical feasibility
- **Key Stakeholders** - Should review for business alignment

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Requirements Document** → Input for [User Journey/UX Procedure](./user-journey-ux-procedure.md) (user needs, use cases)
- **Requirements Document** → Input for [Architecture Review Procedure](./architecture-review-procedure.md) (functional requirements, constraints)
- **Acceptance Criteria** → Input for all Implementation Procedures (what to build, how to verify)
- **Scope Boundaries** → Input for all procedures (prevent scope creep)
- **User Stories** → Input for [User Journey/UX Procedure](./user-journey-ux-procedure.md) (user needs)

**Procedures that depend on this:**
- **[User Journey/UX Procedure](./user-journey-ux-procedure.md)** - Uses requirements and user stories for UX design
- **[Architecture Review Procedure](./architecture-review-procedure.md)** - Uses requirements for architecture decisions
- **All Implementation Procedures** - Use requirements and acceptance criteria to guide implementation
- **[Test Plan Procedure](./test-plan-procedure.md)** - Uses acceptance criteria for test planning
- **[Implementation Verification Procedure](./implementation-verification-procedure.md)** - Uses acceptance criteria for verification

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Feature definition reviewed and understood
- [ ] Requirements gathered from stakeholders
- [ ] Functional requirements defined and documented
- [ ] User stories created (if applicable)
- [ ] Use cases defined
- [ ] Business rules documented
- [ ] Acceptance criteria defined for all requirements
- [ ] Acceptance criteria are testable and measurable
- [ ] Scope boundaries explicitly defined (in-scope items listed)
- [ ] Out-of-scope items explicitly listed
- [ ] Assumptions documented
- [ ] Edge cases identified
- [ ] Requirements reviewed with stakeholders
- [ ] Stakeholder feedback incorporated
- [ ] Requirements approved by stakeholders
- [ ] Requirements document created
- [ ] Jira ticket updated with requirements and acceptance criteria
- [ ] Requirements document stored and accessible
- [ ] Ready for User Journey/UX and Architecture Review procedures

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with requirements and acceptance criteria
- [ ] **Requirements Document** - Document location and reference
- [ ] **Stakeholders** - Who was involved in requirements definition
- [ ] **Approval** - Approval decision and stakeholders who approved

**Audit trail:**
- **Requirements definition date** - When requirements were defined
- **Stakeholders involved** - Who provided requirements input
- **Requirements changes** - Any changes made during validation
- **Approval date** - When requirements were approved
- **Approval stakeholders** - Who approved requirements
- **Scope decisions** - What was included/excluded and why

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Requirements defined and documented
- Acceptance criteria testable and complete
- Scope boundaries explicit
- Requirements approved
- Ready for User Journey/UX and Architecture Review

#### ⚠️ Blocked
- **Reason:** Stakeholders unavailable, requirements unclear, conflicting requirements
- **Required action:** Address blocker (schedule meetings, clarify requirements, resolve conflicts)
- **Who to notify:** Product owner, feature owner
- **Status:** Requirements definition paused until blocker resolved

#### ❌ Aborted
- **Reason:** Requirements cannot be defined, feature scope too unclear, feature cancelled
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why requirements couldn't be defined
- **Next step:** Feature may need to be redefined or cancelled

#### 🔄 Partial Requirements
- **Reason:** Some requirements defined but others deferred to future iteration
- **Required action:** Document what was defined vs. deferred, update scope boundaries
- **Status:** Core requirements complete, some requirements deferred
- **Next step:** Proceed with defined requirements, deferred requirements in backlog

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Product Management / Requirements Team
