# Procedure: Feature Intake

### 1. Purpose

**Why this procedure exists**

This procedure enables systematic capture and initial definition of new features. It ensures features are properly documented and tracked from the start, provides initial feature context for downstream procedures, and creates feature tracking artifacts (Jira tickets, feature documents).

**What problem it solves**

- Features started without clear definition
- Missing feature context causing delays
- Features not properly tracked or documented
- Unclear feature ownership or priority
- Features started without approval
- Features not aligned with product strategy

**What "success" looks like at the end**

A feature that is:
- Clearly defined at high level
- Documented and tracked (Jira ticket/epic)
- Has initial scope boundaries
- Has owner and priority assigned
- Has strategic alignment validated
- Is approved to proceed to Requirements & Scope Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- New feature request or idea
- User/stakeholder requests a new feature
- Product roadmap item needs to be defined
- Feature idea from user feedback
- Business need identified
- Technical improvement opportunity identified
- Feature Implementation Orchestration Procedure invokes this (if not already completed)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Feature request/idea** - Initial feature description (can be vague initially)
- [ ] **Source of request** - Who/what requested the feature (user, stakeholder, business need, etc.)
- [ ] **Business context** - Why this feature is needed (problem statement, opportunity, business value)

**Decisions already made:**
- [ ] **Feature is worth considering** - Implicit (procedure was invoked)
- [ ] **Feature aligns with product strategy** - May need validation during procedure

**Constraints:**
- [ ] **Resource availability** - Team capacity, budget (may affect prioritization)
- [ ] **Timeline constraints** - Any deadlines or urgency (may affect prioritization)
- [ ] **Strategic alignment** - Must align with product/company strategy

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing feature request** → Ask requester to provide feature description
- **Missing business context** → Ask requester to explain why feature is needed
- **Unclear source** → Identify who requested the feature

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from feature capture through approval
- **Procedures to be invoked** - Jira MCP tools (for ticket creation), Requirements & Scope Procedure (next step)
- **Dependencies between steps** - Capture → Categorize → Validate → Track → Stakeholders → Approval → Ready
- **Risks & unknowns** - Feature request unclear, strategic misalignment, resource constraints, approval not obtained
- **Validation points** - After strategic validation, after approval, before proceeding to next phase

**Plan must be reviewed before execution begins**

**Output:**
- Feature Intake Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Capture Feature Request

**Purpose**
- Receive and document the initial feature request
- Capture all available context
- Identify the source of the request

**Inputs**
- **From:** Procedure Required Inputs (feature request/idea, source, business context)

**Actions**
- Receive feature request/idea
- Document initial feature description (verbatim or paraphrased)
- Capture source of request (user, stakeholder, business need, etc.)
- Document business context (problem statement, opportunity, business value)
- Note any additional context provided
- Identify any questions or clarifications needed

**Decisions / Evaluations**
- **Decision:** Is feature request clear enough to proceed?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, ask clarifying questions, then retry Step 1

**Outputs**
- Captured feature request
- Initial feature description
- Source of request documented
- Business context documented
- Questions/clarifications identified (if any)

**Failure Handling**
- **Failure:** Feature request is completely unclear
  - **Action:** Ask requester to provide more detail, rephrase, or provide examples
  - **Retry:** Step 1 with additional context
- **Failure:** No business context provided
  - **Action:** Ask requester to explain why feature is needed, what problem it solves
  - **Retry:** Step 1 with business context

---

#### Step 2: Categorize Feature

**Purpose**
- Classify the feature type
- Determine priority and urgency
- Estimate complexity at high level

**Inputs**
- **From:** Step 1 outputs (captured feature request, description)

**Actions**
- Determine feature type:
  - New feature
  - Enhancement to existing feature
  - Bug fix
  - Technical improvement
  - Infrastructure change
  - Other (specify)
- Determine priority/urgency:
  - Critical/Urgent
  - High
  - Medium
  - Low
  - Nice-to-have
- Estimate complexity (high-level):
  - Small (days)
  - Medium (weeks)
  - Large (months)
  - Very Large (quarters)
- Document categorization rationale

**Decisions / Evaluations**
- **Decision:** Can feature be categorized?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, request more information or consult with stakeholders

**Outputs**
- Feature type classification
- Priority/urgency assigned
- Complexity estimate
- Categorization rationale

**Failure Handling**
- **Failure:** Cannot determine feature type
  - **Action:** Review feature description, consult with requester or stakeholders
  - **Retry:** Step 2 with additional information
- **Failure:** Priority unclear
  - **Action:** Request priority from stakeholder or product owner
  - **Retry:** Step 2 with priority information

---

#### Step 3: Validate Strategic Alignment

**Purpose**
- Ensure feature aligns with product strategy
- Check resource availability
- Validate timeline feasibility

**Inputs**
- **From:** Step 2 outputs (feature category, priority, complexity)
- **From:** Procedure Required Inputs (resource availability, timeline constraints, strategic alignment)

**Actions**
- Review product strategy and roadmap
- Check if feature aligns with strategic goals
- Assess resource availability (team capacity, budget)
- Evaluate timeline feasibility (deadlines, urgency)
- Identify any strategic misalignments
- Identify any resource constraints
- Document validation results

**Decisions / Evaluations**
- **Decision:** Does feature align with strategy?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, escalate to product owner, may need to reject or defer
- **Decision:** Are resources available?
  - **Go:** If yes or can be allocated, proceed to Step 4
  - **No-Go:** If no, document constraint, may need to defer
- **Decision:** Is timeline feasible?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, document timeline issue, may need to defer or adjust scope

**Outputs**
- Strategic alignment validation result
- Resource availability assessment
- Timeline feasibility assessment
- Any constraints or issues identified

**Failure Handling**
- **Failure:** Feature not aligned with strategy
  - **Action:** Escalate to product owner, present feature and misalignment
  - **Exit State:** May result in feature rejection or deferral
- **Failure:** No resources available
  - **Action:** Document resource constraint, may need to defer feature
  - **Exit State:** Feature deferred until resources available
- **Failure:** Timeline not feasible
  - **Action:** Document timeline issue, may need to defer or adjust scope
  - **Exit State:** Feature deferred or scope adjusted

---

#### Step 4: Create Feature Tracking

**Purpose**
- Create Jira ticket/epic for feature tracking
- Document feature in tracking system
- Set initial metadata

**Inputs**
- **From:** Step 1 outputs (feature description, context)
- **From:** Step 2 outputs (category, priority, complexity)
- **From:** Step 3 outputs (validation results)
- Jira project information (DT project)

**Actions**
- Create Jira epic or story (depending on feature size)
- Set ticket type (Epic, Story, Task)
- Add feature description to ticket
- Set priority based on Step 2 output
- Add labels (feature-type, complexity, etc.)
- Link to any related tickets or epics
- Add business context to ticket description
- Set initial status (To Do, Backlog, etc.)
- Document ticket key for reference

**Decisions / Evaluations**
- **Decision:** Is Jira ticket created successfully?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, retry or use alternative tracking method

**Outputs**
- Jira ticket/epic created
- Ticket key/ID
- Feature documented in tracking system
- Initial metadata set

**Failure Handling**
- **Failure:** Jira ticket creation fails
  - **Action:** Check Jira access, verify project exists, retry creation
  - **Escalate:** If persistent, contact Jira administrator
  - **Retry:** Step 4 after access issues resolved
- **Failure:** Cannot access Jira
  - **Action:** Document feature in alternative format (document), create ticket later
  - **Workaround:** Continue with document-based tracking, create Jira ticket when access available

---

#### Step 5: Identify Stakeholders

**Purpose**
- Identify all stakeholders for the feature
- Assign feature owner
- Identify technical lead
- Document stakeholder roles

**Inputs**
- **From:** Step 1 outputs (source of request)
- **From:** Step 4 outputs (Jira ticket)
- Feature context and requirements

**Actions**
- Identify product owner (who owns feature decisions)
- Identify technical lead (who will lead technical implementation)
- Identify other stakeholders (designers, QA, business stakeholders, etc.)
- Assign feature owner in Jira ticket
- Assign technical lead (if known)
- Document stakeholder roles and responsibilities
- Update Jira ticket with stakeholders

**Decisions / Evaluations**
- **Decision:** Are all key stakeholders identified?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, identify missing stakeholders or proceed with known stakeholders

**Outputs**
- Product owner identified
- Technical lead identified (if applicable)
- Stakeholder list documented
- Feature owner assigned
- Stakeholders added to Jira ticket

**Failure Handling**
- **Failure:** Stakeholders unclear
  - **Action:** Request stakeholder identification from product owner or manager
  - **Retry:** Step 5 with stakeholder information
- **Failure:** Owner not available
  - **Action:** Identify alternate owner or document as unassigned
  - **Workaround:** Proceed with unassigned owner, assign later

---

#### Step 6: Obtain Initial Approval

**Purpose**
- Present feature to stakeholders
- Obtain approval to proceed to detailed requirements
- Document approval decision

**Inputs**
- **From:** Step 1-5 outputs (complete feature definition)
- **From:** Step 5 outputs (stakeholders identified)

**Actions**
- Prepare feature presentation (summary of feature, context, priority, complexity)
- Present feature to stakeholders (product owner, technical lead, etc.)
- Discuss feature value and alignment
- Discuss resource and timeline considerations
- Request approval to proceed to Requirements & Scope Procedure
- Document approval decision
- If approved: Update Jira ticket status, document approval
- If rejected: Document rejection reason, update Jira ticket status
- If deferred: Document deferral reason, update Jira ticket status

**Decisions / Evaluations**
- **Decision:** Is approval obtained?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, document rejection reason, exit procedure
- **Decision:** Is feature deferred?
  - **Go:** If deferred, document deferral, exit procedure
  - **No-Go:** If not deferred, proceed to Step 7

**Outputs**
- Approval decision (approved/rejected/deferred)
- Approval documented
- Jira ticket updated with status
- Approval rationale documented

**Failure Handling**
- **Failure:** Approval not obtained
  - **Action:** Document rejection reason, update Jira ticket, exit procedure
  - **Exit State:** Feature Rejected
- **Failure:** Stakeholder unavailable for approval
  - **Action:** Schedule approval meeting, may need to defer procedure
  - **Retry:** Step 6 when stakeholders available
- **Failure:** Approval unclear or conditional
  - **Action:** Clarify approval conditions, document conditions
  - **Retry:** Step 6 with clarified approval

---

#### Step 7: Prepare for Next Phase

**Purpose**
- Verify all outputs are complete
- Ensure feature is ready for Requirements & Scope Procedure
- Create feature definition document

**Inputs**
- **From:** All previous steps (complete feature intake)

**Actions**
- Verify all required outputs are complete:
  - Feature description documented
  - Jira ticket created
  - Stakeholders identified
  - Approval obtained
- Create feature definition document (summary of all intake information)
- Store feature definition document in `.ai_working/` or appropriate location
- Verify feature is ready for Requirements & Scope Procedure
- Document any open questions or clarifications needed

**Decisions / Evaluations**
- **Decision:** Are all outputs complete?
  - **Go:** If yes, feature intake complete
  - **No-Go:** If no, complete missing outputs

**Outputs**
- Feature definition document created
- All outputs verified complete
- Ready for Requirements & Scope Procedure
- Open questions documented (if any)

**Failure Handling**
- **Failure:** Missing outputs
  - **Action:** Complete missing outputs, revisit appropriate step
  - **Retry:** Step 7 after outputs complete

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Feature Definition Document** - High-level feature description, context, scope boundaries, stakeholders, approval status
- **Jira Ticket/Epic** - Feature tracking ticket with metadata (priority, owner, labels, status)
- **Stakeholder List** - Identified stakeholders and their roles

**State changes:**
- Feature is documented and tracked
- Feature has owner and priority assigned
- Feature is approved to proceed (or rejection/deferral documented)
- Feature is ready for Requirements & Scope Procedure

**Decisions recorded:**
- Feature category and type
- Priority and urgency
- Complexity estimate
- Strategic alignment decision
- Approval decision (approved/rejected/deferred)

**Signals emitted:**
- "Feature Intake Complete" - Ready for Requirements & Scope Procedure
- "Feature Approved" - Authorization to proceed to detailed requirements
- "Feature Deferred" - Approved but deferred to later
- "Feature Rejected" - Not proceeding, reason documented

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Feature description is clear and documented
- [ ] Jira ticket is created and accessible
- [ ] Stakeholders are identified
- [ ] Approval is obtained or rejection/deferral is documented
- [ ] Feature definition document is created

**Reviews required:**
- [ ] Stakeholder review (for approval)
- [ ] Product owner review (for strategic alignment)

**Automated checks:**
- [ ] Jira ticket creation succeeds
- [ ] Ticket metadata is set correctly

**Who/what can approve completion:**
- **Product Owner** - Must approve feature to proceed
- **Technical Lead** - Should review for technical feasibility
- **Stakeholders** - Should review for business alignment

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Feature Definition Document** → Input for [Requirements & Scope Procedure](./requirements-scope-procedure.md) (feature context)
- **Jira Ticket** → Input for [Requirements & Scope Procedure](./requirements-scope-procedure.md) (ticket reference)
- **Stakeholder List** → Input for [Requirements & Scope Procedure](./requirements-scope-procedure.md) (who to involve)
- **Approval** → Input for [Requirements & Scope Procedure](./requirements-scope-procedure.md) (authorization to proceed)

**Procedures that depend on this:**
- **[Requirements & Scope Procedure](./requirements-scope-procedure.md)** - Uses feature definition to create detailed requirements
- **[Architecture Review Procedure](./architecture-review-procedure.md)** - Uses feature definition for architecture decisions
- **[Feature Implementation Orchestration Procedure](./feature-implementation-orchestration-procedure.md)** - Uses feature definition to coordinate implementation

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Feature request captured and documented
- [ ] Feature categorized (type, priority, complexity)
- [ ] Strategic alignment validated
- [ ] Resource availability checked
- [ ] Timeline feasibility assessed
- [ ] Jira ticket/epic created
- [ ] Feature definition document created
- [ ] Stakeholders identified
- [ ] Product owner identified
- [ ] Technical lead identified (if applicable)
- [ ] Feature owner assigned
- [ ] Approval obtained (or rejection/deferral documented)
- [ ] Jira ticket updated with all metadata
- [ ] Ready for Requirements & Scope Procedure

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID (e.g., DT-XXX)
- [ ] **Feature Definition Document** - Document location and reference
- [ ] **Stakeholders** - List of stakeholders and roles
- [ ] **Approval** - Approval decision and rationale

**Audit trail:**
- **Feature intake date** - When feature was captured
- **Source of request** - Who/what requested the feature
- **Categorization** - Feature type, priority, complexity
- **Strategic alignment** - Alignment validation result
- **Approval decision** - Approved/rejected/deferred and reason
- **Stakeholders** - Who was involved in intake process

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Feature defined and documented
- Jira ticket created
- Stakeholders identified
- Approval obtained
- Ready for Requirements & Scope Procedure

#### ⚠️ Blocked
- **Reason:** Missing information, resource constraints, strategic misalignment, stakeholder unavailable
- **Required action:** Address blocker (obtain information, resolve constraints, get stakeholder availability)
- **Who to notify:** Product owner, requester
- **Status:** Feature intake paused until blocker resolved

#### ❌ Aborted (Feature Rejected)
- **Reason:** Feature not aligned with strategy, not viable, or rejected by stakeholders
- **Required action:** Document rejection reason, update Jira ticket status to rejected
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why feature was rejected to inform future decisions
- **Next step:** Feature closed, no further action

#### 🔄 Deferred
- **Reason:** Feature approved but deferred to later (resource constraints, timeline, priorities)
- **Required action:** Document deferral reason, update Jira ticket status, set deferral date if known
- **Status:** Feature approved but deferred
- **Next step:** Revisit feature when resources/timeline allow

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Product Management / Feature Development Team
