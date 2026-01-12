# Procedure: Architecture Review

### 1. Purpose

**Why this procedure exists**

This procedure defines architecture decisions, establishes architectural patterns and service boundaries, and documents technology choices for features before implementation. It ensures architectural consistency, creates Architecture Decision Records (ADRs), and provides clear architectural guidance for implementation teams.

**What problem it solves**

- Features implemented without architectural guidance
- Inconsistent architecture patterns across features
- Service boundaries violated during implementation
- Technology choices made ad-hoc without consideration
- Architecture decisions not documented or traceable
- Implementation doesn't follow established architecture
- Architectural debt introduced unknowingly

**What "success" looks like at the end**

A complete architecture specification that includes:
- Architecture decisions documented (ADRs)
- Architectural patterns defined and documented
- Service/component boundaries established
- Technology choices made and documented
- Architecture decisions reviewed and approved
- Clear architectural guidance for implementation
- Ready for Technical Design procedures (API Contract, Data Design)

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Requirements & Scope Procedure](./requirements-scope-procedure.md) has been completed
- Feature needs architecture decisions before implementation
- New architectural patterns need to be established
- Service boundaries need to be defined
- Technology choices need to be made
- Feature Implementation Orchestration Procedure invokes this (Phase 1, in parallel with User Journey/UX)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Requirements document** - Functional requirements, acceptance criteria, scope boundaries (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Feature definition document** - High-level feature description, context (from [Feature Intake Procedure](./feature-intake-procedure.md))
- [ ] **Existing architecture documentation** - Current system architecture, existing patterns, service boundaries
- [ ] **Existing ADRs** - Previous Architecture Decision Records (if available)
- [ ] **System architecture diagram** - Current system architecture visualization (if available)

**Decisions already made:**
- [ ] **Feature is approved** - Feature has been approved (from Feature Intake Procedure)
- [ ] **Requirements are defined** - Requirements are complete and approved (from Requirements & Scope Procedure)

**Constraints:**
- [ ] **Technology constraints** - Existing technology stack, infrastructure limitations
- [ ] **Architectural constraints** - Existing architectural patterns, service boundaries that must be respected
- [ ] **Performance constraints** - Performance requirements from requirements
- [ ] **Scalability constraints** - Scalability requirements from requirements
- [ ] **Security constraints** - Security requirements (may come from Threat Model Procedure)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing requirements document** → Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md) first
- **Missing existing architecture** → Review codebase, consult architecture team, document current architecture
- **Missing ADRs** → Review existing documentation, consult architecture team

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from requirements review through architecture documentation
- **Procedures to be invoked** - ADR creation process, architecture review process
- **Dependencies between steps** - Review → Identify → Review Existing → Make Decisions → Document → Review → Document → Ready
- **Risks & unknowns** - Requirements unclear, architecture team unavailable, conflicting decisions, architecture not approved
- **Validation points** - After architecture decisions, after ADR creation, after architecture review, before proceeding to technical design

**Plan must be reviewed before execution begins**

**Output:**
- Architecture Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Requirements & Context

**Purpose**
- Understand feature requirements and context
- Review existing architecture
- Identify architectural questions and decisions needed

**Inputs**
- **From:** Procedure Required Inputs (requirements document, feature definition, existing architecture)

**Actions**
- Read requirements document thoroughly
- Review feature definition and business context
- Review existing system architecture:
  - Current service/component boundaries
  - Existing architectural patterns
  - Technology stack in use
  - Infrastructure capabilities
- Review existing ADRs (if available)
- Identify architectural questions:
  - What services/components are involved?
  - What patterns should be used?
  - What technology choices are needed?
  - Are new patterns needed?
- Document architectural context and constraints

**Decisions / Evaluations**
- **Decision:** Are requirements clear enough for architecture decisions?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, request clarifications, then retry Step 1

**Outputs**
- Understanding of requirements and context
- Review of existing architecture
- Architectural questions identified
- Architectural constraints documented

**Failure Handling**
- **Failure:** Requirements unclear or incomplete
  - **Action:** Request clarifications from requirements team, may need to revisit Requirements & Scope Procedure
  - **Retry:** Step 1 after clarifications received
- **Failure:** Existing architecture not documented
  - **Action:** Review codebase, consult architecture team, document current architecture
  - **Retry:** Step 1 with documented architecture

---

#### Step 2: Identify Architecture Decisions Needed

**Purpose**
- Identify all architecture decisions that need to be made
- Determine service/component boundaries
- Identify pattern and technology choices needed

**Inputs**
- **From:** Step 1 outputs (requirements understanding, architectural questions)

**Actions**
- Identify architecture decisions needed:
  - Service/component boundaries
  - Architectural patterns (MVC, layered, microservices, etc.)
  - Technology choices (frameworks, libraries, tools)
  - Data flow patterns
  - Integration patterns
  - Deployment patterns
- Determine service boundaries:
  - What services/components are involved?
  - What are the boundaries between services?
  - What are the interfaces between services?
- Identify pattern needs:
  - What patterns are appropriate?
  - Are new patterns needed?
  - Can existing patterns be reused?
- Identify technology choices:
  - What technologies are needed?
  - Are new technologies required?
  - Do choices align with existing stack?
- Prioritize decisions (critical vs. nice-to-have)

**Decisions / Evaluations**
- **Decision:** Are all architecture decisions identified?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, review requirements again, identify missing decisions

**Outputs**
- List of architecture decisions needed
- Service/component boundaries identified
- Pattern needs identified
- Technology choices needed identified
- Decisions prioritized

**Failure Handling**
- **Failure:** Cannot identify architecture decisions
  - **Action:** Review requirements more carefully, consult architecture team, review similar features
  - **Retry:** Step 2 after consultation

---

#### Step 3: Review Existing Architecture

**Purpose**
- Review existing ADRs and patterns
- Identify reusable patterns and decisions
- Ensure consistency with existing architecture

**Inputs**
- **From:** Step 2 outputs (decisions needed)
- **From:** Procedure Required Inputs (existing ADRs, existing architecture)

**Actions**
- Review existing ADRs:
  - What decisions have been made before?
  - What patterns are established?
  - What technology choices are standard?
- Review existing patterns:
  - What patterns are in use?
  - Can existing patterns be reused?
  - Do patterns need to be extended?
- Review service boundaries:
  - What are current service boundaries?
  - Are boundaries well-defined?
  - Do boundaries need to be adjusted?
- Identify reusable decisions:
  - Can existing decisions be reused?
  - Do decisions need to be extended?
  - Are new decisions needed?
- Check consistency:
  - Do new decisions align with existing architecture?
  - Are there conflicts with existing decisions?

**Decisions / Evaluations**
- **Decision:** Can existing patterns/decisions be reused?
  - **Go:** If yes, proceed to Step 4 (reuse existing)
  - **No-Go:** If no, proceed to Step 4 (make new decisions)
- **Decision:** Are there conflicts with existing architecture?
  - **Go:** If no conflicts, proceed to Step 4
  - **No-Go:** If conflicts, resolve conflicts, then proceed to Step 4

**Outputs**
- Review of existing ADRs
- Reusable patterns identified
- Reusable decisions identified
- Conflicts identified (if any)
- Consistency check completed

**Failure Handling**
- **Failure:** Existing ADRs not available
  - **Action:** Document current architecture decisions, proceed with new decisions
  - **Workaround:** Create ADRs for this feature, establish baseline
- **Failure:** Conflicts with existing architecture
  - **Action:** Resolve conflicts with architecture team, may need to update existing ADRs
  - **Escalate:** If conflicts cannot be resolved, escalate to architecture team lead

---

#### Step 4: Make Architecture Decisions

**Purpose**
- Make all required architecture decisions
- Select architectural patterns
- Define service boundaries
- Make technology choices

**Inputs**
- **From:** Step 2 outputs (decisions needed)
- **From:** Step 3 outputs (existing architecture review)

**Actions**
- Make service boundary decisions:
  - Define service/component boundaries
  - Define interfaces between services
  - Define data ownership
  - Define communication patterns
- Select architectural patterns:
  - Choose appropriate patterns
  - Extend existing patterns if needed
  - Document pattern usage
- Make technology choices:
  - Select frameworks, libraries, tools
  - Ensure choices align with existing stack
  - Document technology choices
- Define architectural constraints:
  - Performance constraints
  - Scalability constraints
  - Security constraints
  - Integration constraints
- Document decision rationale:
  - Why each decision was made
  - What alternatives were considered
  - What trade-offs were made

**Decisions / Evaluations**
- **Decision:** Are all architecture decisions made?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, make remaining decisions
- **Decision:** Do decisions align with requirements?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, review requirements, adjust decisions

**Outputs**
- Architecture decisions made
- Service boundaries defined
- Patterns selected
- Technology choices made
- Decision rationale documented

**Failure Handling**
- **Failure:** Cannot make architecture decisions
  - **Action:** Consult architecture team, review similar features, research patterns
  - **Retry:** Step 4 after consultation
- **Failure:** Decisions conflict with requirements
  - **Action:** Review requirements, adjust decisions or requirements
  - **Retry:** Step 4 after adjustments

---

#### Step 5: Document Architecture Decisions (ADRs)

**Purpose**
- Create Architecture Decision Records for significant decisions
- Document decision rationale and alternatives
- Make decisions traceable and reviewable

**Inputs**
- **From:** Step 4 outputs (architecture decisions made)

**Actions**
- For each significant architecture decision, create an ADR:
  - **Title:** Clear decision title
  - **Status:** Proposed, Accepted, Deprecated, Superseded
  - **Context:** What is the issue or problem?
  - **Decision:** What decision was made?
  - **Consequences:** What are the consequences (positive and negative)?
  - **Alternatives Considered:** What alternatives were evaluated?
  - **Rationale:** Why was this decision made?
- Document patterns:
  - Pattern name and description
  - When to use the pattern
  - Implementation guidelines
  - Examples
- Document service boundaries:
  - Service/component names
  - Boundaries and interfaces
  - Data ownership
  - Communication patterns
- Store ADRs in appropriate location (e.g., `docs/adr/` or `.ai_working/`)
- Link ADRs to feature documentation

**Decisions / Evaluations**
- **Decision:** Are ADRs created for all significant decisions?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, create missing ADRs

**Outputs**
- ADRs created for significant decisions
- Patterns documented
- Service boundaries documented
- ADRs stored and linked

**Failure Handling**
- **Failure:** ADR format unclear
  - **Action:** Use standard ADR template, consult ADR procedure if available
  - **Retry:** Step 5 with proper format
- **Failure:** Cannot determine which decisions need ADRs
  - **Action:** Create ADRs for all major decisions (patterns, boundaries, technology choices)
  - **Retry:** Step 5 with comprehensive ADRs

---

#### Step 6: Review Architecture Decisions

**Purpose**
- Review architecture decisions with architecture team
- Validate decisions align with requirements
- Obtain architecture approval

**Inputs**
- **From:** Step 4 outputs (architecture decisions)
- **From:** Step 5 outputs (ADRs)
- **From:** Procedure Required Inputs (architecture team, technical leads)

**Actions**
- Prepare architecture review document:
  - Summary of decisions made
  - ADRs for review
  - Patterns selected
  - Service boundaries defined
  - Technology choices
- Present architecture decisions to:
  - Architecture team
  - Technical leads
  - Senior engineers
- Review each decision:
  - Is decision appropriate?
  - Does decision align with requirements?
  - Is decision consistent with existing architecture?
  - Are there better alternatives?
- Address feedback and questions
- Revise decisions if needed
- Obtain architecture approval
- Document approval

**Decisions / Evaluations**
- **Decision:** Are stakeholders aligned on architecture decisions?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, address misalignments, revise decisions
- **Decision:** Is architecture approval obtained?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, address concerns, revise decisions, retry approval

**Outputs**
- Architecture decisions reviewed
- Feedback incorporated
- Architecture approval obtained
- Approval documented

**Failure Handling**
- **Failure:** Architecture team unavailable
  - **Action:** Schedule review meeting, use async review, or proceed with available reviewers
  - **Retry:** Step 6 when team available
- **Failure:** Architecture decisions not approved
  - **Action:** Address concerns, revise decisions based on feedback
  - **Retry:** Step 6 after revisions
- **Failure:** Significant changes needed
  - **Action:** Revise decisions, may need to revisit Steps 4-5
  - **Retry:** Step 6 after significant revisions

---

#### Step 7: Document Architecture

**Purpose**
- Create complete architecture document
- Document patterns to follow
- Update architecture documentation
- Make architecture accessible to implementation teams

**Inputs**
- **From:** All previous steps (complete architecture decisions)

**Actions**
- Create architecture document including:
  - Feature architecture overview
  - Service/component boundaries
  - Architectural patterns
  - Technology choices
  - Data flow diagrams (if applicable)
  - Integration patterns
  - Deployment considerations
  - Links to ADRs
- Document patterns to follow:
  - Pattern descriptions
  - Implementation guidelines
  - Code examples (if applicable)
- Update architecture documentation:
  - Add to system architecture documentation
  - Update service boundary diagrams
  - Update pattern library
- Store architecture document:
  - Save to appropriate location (e.g., `.ai_working/` or `docs/architecture/`)
  - Link from feature documentation
  - Make accessible to implementation teams
- Update Jira ticket with architecture decisions

**Decisions / Evaluations**
- **Decision:** Is architecture document complete?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, complete missing sections

**Outputs**
- Architecture document created
- Patterns documented
- Architecture documentation updated
- Architecture accessible to implementation teams
- Jira ticket updated

**Failure Handling**
- **Failure:** Architecture document incomplete
  - **Action:** Review all steps, ensure all information is captured
  - **Retry:** Step 7 with complete information
- **Failure:** Cannot update architecture documentation
  - **Action:** Store architecture document separately, link from feature documentation
  - **Retry:** Step 7 with alternative storage

---

#### Step 8: Prepare for Next Phase

**Purpose**
- Verify all outputs are complete
- Ensure architecture is ready for technical design and implementation
- Prepare for API Contract and Data Design procedures

**Inputs**
- **From:** All previous steps (complete architecture specification)

**Actions**
- Verify all required outputs are complete:
  - Architecture decisions made
  - ADRs created
  - Patterns documented
  - Service boundaries defined
  - Architecture approved
  - Architecture documented
- Verify architecture is ready for:
  - API Contract Procedure (service boundaries, integration patterns)
  - Data Design Procedure (data ownership, storage patterns)
  - Implementation procedures (patterns, technology choices)
- Document any open questions or clarifications
- Confirm readiness for next phase

**Decisions / Evaluations**
- **Decision:** Are all outputs complete and ready?
  - **Go:** If yes, architecture review complete
  - **No-Go:** If no, complete missing outputs

**Outputs**
- All outputs verified complete
- Architecture ready for Technical Design procedures
- Architecture ready for Implementation procedures
- Ready for next phase

**Failure Handling**
- **Failure:** Missing outputs
  - **Action:** Complete missing outputs, revisit appropriate step
  - **Retry:** Step 8 after outputs complete

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Architecture Document** - Complete architecture specification including decisions, patterns, boundaries, technology choices
- **Architecture Decision Records (ADRs)** - ADRs for significant decisions with rationale and alternatives
- **Pattern Documentation** - Architectural patterns selected with implementation guidelines
- **Service Boundary Documentation** - Service/component boundaries and interfaces defined

**State changes:**
- Feature has architecture decisions defined
- Architecture decisions are documented and traceable
- Architecture decisions are approved
- Architecture is ready for technical design and implementation

**Decisions recorded:**
- Architecture decision decisions
- Pattern selection decisions
- Service boundary decisions
- Technology choice decisions
- Approval decisions

**Signals emitted:**
- "Architecture Review Complete" - Ready for Technical Design procedures
- "Architecture Approved" - Architecture decisions approved and ready for use
- "Ready for Implementation" - Architecture provides clear guidance for implementation

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All architecture decisions are made
- [ ] ADRs are created for significant decisions
- [ ] Patterns are documented
- [ ] Service boundaries are defined
- [ ] Architecture is approved
- [ ] Architecture document is complete

**Reviews required:**
- [ ] Architecture team review (architecture decisions)
- [ ] Technical lead review (technical feasibility)
- [ ] Requirements alignment review (decisions align with requirements)

**Automated checks:**
- [ ] ADRs follow standard format
- [ ] Architecture document is accessible
- [ ] Jira ticket updated with architecture decisions

**Who/what can approve completion:**
- **Architecture Team** - Must approve architecture decisions
- **Technical Lead** - Should review for technical feasibility
- **Senior Engineers** - Should review for consistency and best practices

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Architecture Decisions** → Input for all Implementation Procedures (patterns, boundaries, technology choices)
- **ADRs** → Input for future features (reusable decisions)
- **Service Boundaries** → Input for [API Contract Procedure](./api-contract-procedure.md) (service interfaces)
- **Architecture Patterns** → Input for all Implementation Procedures (implementation guidance)
- **Technology Choices** → Input for all Implementation Procedures (technology stack)

**Procedures that depend on this:**
- **[API Contract Procedure](./api-contract-procedure.md)** - Uses service boundaries for API design
- **[Data Design Procedure](./data-design-procedure.md)** - Uses architecture decisions for data design
- **All Implementation Procedures** - Use architecture decisions, patterns, and boundaries to guide implementation
- **[Architecture Compliance Validation Procedure](./architecture-compliance-validation-procedure.md)** - Uses architecture decisions to validate compliance

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Requirements and context reviewed
- [ ] Architecture decisions needed identified
- [ ] Existing architecture reviewed
- [ ] All architecture decisions made
- [ ] Service boundaries defined
- [ ] Architectural patterns selected
- [ ] Technology choices made
- [ ] ADRs created for significant decisions
- [ ] Patterns documented
- [ ] Service boundaries documented
- [ ] Architecture decisions reviewed with architecture team
- [ ] Architecture approval obtained
- [ ] Architecture document created
- [ ] Architecture documentation updated
- [ ] Jira ticket updated with architecture decisions
- [ ] Ready for Technical Design procedures (API Contract, Data Design)
- [ ] Ready for Implementation procedures

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with architecture decisions
- [ ] **Architecture Document** - Document location and reference
- [ ] **ADRs** - ADR locations and references
- [ ] **Requirements Document** - Link to requirements that drove decisions

**Audit trail:**
- **Architecture review date** - When architecture was reviewed
- **Architecture team involved** - Who was involved in review
- **Decisions made** - What decisions were made and when
- **Approval date** - When architecture was approved
- **Approval stakeholders** - Who approved architecture
- **ADRs created** - Which ADRs were created for this feature

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Architecture decisions made and documented
- ADRs created
- Patterns documented
- Service boundaries defined
- Architecture approved
- Ready for Technical Design and Implementation

#### ⚠️ Blocked
- **Reason:** Architecture team unavailable, requirements unclear, conflicting decisions
- **Required action:** Address blocker (schedule review, clarify requirements, resolve conflicts)
- **Who to notify:** Architecture team lead, feature owner
- **Status:** Architecture review paused until blocker resolved

#### ❌ Aborted
- **Reason:** Architecture cannot be determined, feature scope too unclear, feature cancelled
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why architecture couldn't be determined
- **Next step:** Feature may need to be redefined or cancelled

#### 🔄 Partial Architecture
- **Reason:** Some architecture decisions made but others deferred to implementation
- **Required action:** Document what was decided vs. deferred, update architecture document
- **Status:** Core architecture complete, some decisions deferred
- **Next step:** Proceed with defined architecture, deferred decisions made during implementation

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Architecture Team / Technical Leadership
