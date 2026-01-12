# Procedure: Create or Update a Procedure

**Meta-Procedure for creating and updating procedures**

---

## 1. Purpose

**Why this procedure exists**

This procedure enables the systematic creation and maintenance of procedures within the SDLC Operating System. It ensures all procedures follow the Canonical Procedure Template format and maintain consistency, completeness, and actionability.

**What problem it solves**

- Prevents ad-hoc procedure creation that lacks structure
- Ensures all procedures are complete, testable, and reusable
- Reduces errors from incomplete or ambiguous procedures
- Enables AI tooling to reliably execute procedures
- Maintains consistency across all procedures in the system

**What "success" looks like at the end**

A new or updated procedure document that:
- Follows the Canonical Procedure Template completely
- Has validated input/output continuity
- Defines clear failure modes and handling
- Is approved and indexed for use
- Can be reliably executed by AI tooling or humans

---

## 2. Trigger

**What causes this procedure to be invoked**

- **New workflow identified** - A new process or workflow needs to be documented
- **Existing procedure insufficient** - Current procedure is incomplete, ambiguous, or incorrect
- **Repeated ad-hoc behavior detected** - Same manual steps being performed repeatedly
- **Manual steps causing errors** - Errors occurring due to missing or unclear procedures
- **Procedure review cycle** - Periodic review identifies needed updates
- **Downstream dependency change** - Related procedures changed, requiring updates
- **Process improvement identified** - Better way to do something is discovered

---

## 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Procedure name** - Clear, descriptive name for the procedure
- [ ] **Intended scope** - What the procedure covers and explicitly does NOT cover
- [ ] **Primary triggers** - What causes this procedure to be invoked
- [ ] **Known dependencies** - Procedures this depends on or that depend on this
- [ ] **Target audience** - AI-only, human-only, or hybrid (AI + human)

**Decisions already made:**
- [ ] **Lifecycle category** - Which lifecycle folder this belongs to (feature, PR, release, etc.)
- [ ] **Priority** - Is this urgent, can it wait, or is it proactive improvement
- [ ] **Existing procedure** - If updating: current procedure document exists

**Constraints:**
- [ ] **Template compliance** - Must use Canonical Procedure Template format
- [ ] **Review requirements** - Who needs to review before approval
- [ ] **Integration requirements** - Must integrate with existing procedures

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing procedure name** → Prompt for clear, descriptive name
- **Unclear scope** → Work with stakeholders to define boundaries
- **Unknown dependencies** → Review related procedures to identify dependencies
- **No lifecycle category** → Use "Start Any Activity" procedure to determine category

---

## 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**

**Steps to be executed:**
1. Identify Purpose & Boundaries
2. Identify Inputs & Triggers
3. Decompose Workflow
4. Validate Input/Output Continuity
5. Define Failure Modes
6. Define Output Contract & DoD
7. Format Using Canonical Template
8. Validation & Review

**Procedures to be invoked:**
- None (this is a meta-procedure)
- However, may reference other procedures during design phase

**Dependencies between steps:**
- Step 1 (Purpose) → Step 2 (Inputs/Triggers) → Step 3 (Workflow)
- Step 3 (Workflow) → Step 4 (Continuity Validation)
- Step 4 (Continuity) → Step 5 (Failure Modes)
- Steps 1-5 → Step 6 (Output Contract/DoD)
- All previous steps → Step 7 (Formatting)
- Step 7 → Step 8 (Review)

**Risks & unknowns:**
- **Risk:** Missing dependencies on other procedures
  - **Mitigation:** Review master procedures index and related procedures
- **Risk:** Unclear scope leading to incomplete procedure
  - **Mitigation:** Explicitly define boundaries and non-goals
- **Risk:** Steps that assume implicit knowledge
  - **Mitigation:** Validate all inputs are explicit and obtainable
- **Risk:** Failure modes not comprehensive
  - **Mitigation:** Review similar procedures and consult stakeholders

**Validation points:**
- After Step 1: Purpose statement is clear and bounded
- After Step 3: Workflow steps are logical and complete
- After Step 4: All inputs/outputs are satisfied
- After Step 7: Template is fully populated
- After Step 8: Review approval obtained

**Plan must be reviewed before execution begins**

**Output:**
- **Procedure Design Plan** - Documented plan with steps, dependencies, risks, and validation points

---

## 5. Workflow

### Step 1: Identify Purpose & Boundaries

**Purpose**
- Establish clear understanding of why this procedure exists
- Define what it covers and explicitly what it does NOT cover
- Set boundaries to prevent scope creep

**Inputs**
- **From:** Required Inputs (procedure name, intended scope)
- Procedure name
- Intended scope description

**Actions**
- Write clear purpose statement answering:
  - Why does this procedure exist?
  - What problem does it solve?
  - What does success look like?
- Define explicit boundaries:
  - What is IN scope
  - What is OUT of scope (non-goals)
  - What triggers this procedure vs. other procedures

**Decisions / Evaluations**
- **Decision:** Is purpose clear and unambiguous?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, refine purpose statement
- **Decision:** Are boundaries well-defined?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify boundaries with stakeholders

**Outputs**
- Clear purpose statement (for Section 1 of template)
- Explicit non-goals list
- Scope boundaries documented

**Failure Handling**
- **Failure:** Purpose unclear or too broad
  - **Action:** Consult stakeholders, refine purpose
  - **Retry:** Step 1 with clarified purpose
- **Failure:** Overlapping scope with existing procedure
  - **Action:** Review existing procedures, either update existing or clearly differentiate
  - **Escalate:** If conflict cannot be resolved, escalate to procedure owner

---

### Step 2: Identify Inputs & Triggers

**Purpose**
- Define all required inputs that must exist before procedure can start
- Define what causes this procedure to be invoked
- Ensure no implicit or assumed inputs

**Inputs**
- **From:** Required Inputs (primary triggers, known dependencies)
- Purpose statement from Step 1
- Related procedures (for dependency identification)

**Actions**
- List all required inputs:
  - Artifacts (docs, code, configs, tickets)
  - Decisions already made
  - Constraints (security, compliance, timelines)
- Define triggers:
  - What events cause invocation
  - What conditions must be met
  - What states trigger this procedure
- Identify dependencies:
  - Procedures this depends on
  - Procedures that depend on this
  - External systems or services required

**Decisions / Evaluations**
- **Decision:** Are all inputs explicit and obtainable?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, identify missing inputs or redesign
- **Decision:** Are triggers clear and unambiguous?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, refine trigger definitions

**Outputs**
- Required Inputs list (for Section 3 of template)
- Trigger definitions (for Section 2 of template)
- Dependency map (for Section 8 of template)

**Failure Handling**
- **Failure:** Missing critical input identified
  - **Action:** Either add to required inputs or modify procedure to obtain input
  - **Retry:** Step 2 with updated inputs
- **Failure:** Circular dependency detected
  - **Action:** Redesign to break circular dependency
  - **Escalate:** If redesign not possible, consult architecture team

---

### Step 3: Decompose Workflow

**Purpose**
- Break the procedure into ordered, actionable steps
- Ensure each step is atomic, testable, and produces outputs
- Map inputs and outputs for each step

**Inputs**
- **From:** Outputs of Steps 1 and 2
- Purpose statement
- Required inputs list
- Known dependencies

**Actions**
- Break workflow into ordered steps:
  - Each step must be atomic (does one thing)
  - Steps must be in logical order
  - Each step must produce meaningful outputs
- For each step, define:
  - Step name (clear and descriptive)
  - Purpose (what it accomplishes)
  - Inputs (from where)
  - Actions (what to do)
  - Decisions/evaluations (go/no-go logic)
  - Outputs (what it produces)
  - Failure handling (what to do on failure)
- Map step dependencies:
  - Which steps depend on others
  - Parallel steps (if any)
  - Critical path

**Decisions / Evaluations**
- **Decision:** Is workflow complete (covers all necessary steps)?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, add missing steps
- **Decision:** Are steps atomic and testable?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, break down large steps further

**Outputs**
- Ordered step list with:
  - Step names
  - Purpose per step
  - Input/output mapping per step
  - Step dependencies

**Failure Handling**
- **Failure:** Workflow incomplete or missing steps
  - **Action:** Review purpose and scope, identify missing steps
  - **Retry:** Step 3 with complete workflow
- **Failure:** Steps too large or complex
  - **Action:** Decompose large steps into smaller, atomic steps
  - **Retry:** Step 3 with decomposed steps

---

### Step 4: Validate Input/Output Continuity

**Purpose**
- Ensure every step's inputs are satisfied
- Verify no "magic knowledge" is assumed
- Confirm outputs feed future steps or downstream procedures

**Inputs**
- **From:** Step 3 outputs (workflow decomposition)
- Required inputs from Step 2

**Actions**
- For each step in the workflow:
  - Verify all inputs are satisfied (either from required inputs or previous step outputs)
  - Check for implicit assumptions or "magic knowledge"
  - Validate outputs are used (either by future steps or downstream procedures)
- Create input/output dependency graph:
  - Map all inputs to sources
  - Map all outputs to consumers
  - Identify any orphaned outputs (not used)
  - Identify any missing inputs (no source)

**Decisions / Evaluations**
- **Decision:** Is input/output continuity satisfied?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, redesign steps to fix continuity
- **Decision:** Are there orphaned outputs?
  - **Go:** If no orphans, proceed to Step 5
  - **No-Go:** If orphans exist, either remove step or identify consumer
- **Decision:** Are there missing inputs?
  - **Go:** If no missing inputs, proceed to Step 5
  - **No-Go:** If missing, either add to required inputs or modify workflow

**Outputs**
- Validated workflow with continuous inputs/outputs
- Input/output dependency graph
- List of any resolved continuity issues

**Failure Handling**
- **Failure:** Continuity breaks detected
  - **Action:** Redesign steps to fix continuity issues
  - **Retry:** Step 4 after redesign (may require revisiting Step 3)
- **Failure:** Too many implicit assumptions
  - **Action:** Make all assumptions explicit (add to required inputs or step inputs)
  - **Retry:** Step 4 with explicit inputs

---

### Step 5: Define Failure Modes

**Purpose**
- Identify likely failure points at each step
- Define response paths for each failure mode
- Ensure procedure can handle failures gracefully

**Inputs**
- **From:** Step 4 outputs (validated workflow)
- Historical failure data (if available)
- Similar procedures' failure modes

**Actions**
- For each step, identify likely failures:
  - Technical failures (system errors, timeouts)
  - Data failures (missing data, invalid data)
  - Process failures (missing approvals, blocked dependencies)
  - Human failures (mistakes, miscommunication)
- Define failure handling for each failure mode:
  - Fix and retry (automatic or manual)
  - Escalate (who to notify, when)
  - Abort procedure (when to stop)
  - Invoke another procedure (remediation procedure)
- Define exit states:
  - Completed Successfully
  - Blocked (reason and unblock path)
  - Aborted (reason and cleanup)
  - Rolled Back (reason and rollback procedure)

**Decisions / Evaluations**
- **Decision:** Are failure modes comprehensive?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, add missing failure modes
- **Decision:** Are failure handling paths clear?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, define clearer handling paths

**Outputs**
- Failure mode definitions per step
- Failure handling rules
- Exit state definitions (for Section 11 of template)

**Failure Handling**
- **Failure:** Cannot identify failure modes
  - **Action:** Review similar procedures, consult with experts
  - **Escalate:** If still unclear, document as "To be determined" but mark as incomplete
- **Failure:** Failure handling paths unclear
  - **Action:** Define explicit handling paths, even if "escalate to human"
  - **Retry:** Step 5 with clearer handling

---

### Step 6: Define Output Contract & DoD

**Purpose**
- Define what downstream procedures can rely on
- Establish objective, measurable "done" criteria
- Ensure outputs are testable and verifiable

**Inputs**
- **From:** Step 4 outputs (validated workflow outputs)
- Step 5 outputs (exit states)
- Downstream procedure requirements

**Actions**
- Define output contract:
  - Guaranteed artifacts if procedure completes successfully
  - State changes that occur
  - Decisions that are made
  - Signals that are emitted
- Define validation criteria:
  - How outputs are verified (tests, checks, reviews)
  - Who/what can approve completion
  - Automated vs. manual validation
- Define Definition of Done:
  - Objective, measurable criteria (no "feels good")
  - Checklist of must-have items
  - All outputs produced and validated
  - All acceptance criteria met
- Define downstream dependencies:
  - Which procedures consume these outputs
  - Explicit input/output mappings

**Decisions / Evaluations**
- **Decision:** Is output contract clear and complete?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, refine output contract
- **Decision:** Are DoD criteria objective and measurable?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, make criteria more specific and measurable

**Outputs**
- Output contract definition (for Section 6 of template)
- Validation & acceptance criteria (for Section 7 of template)
- Definition of Done checklist (for Section 9 of template)
- Downstream dependencies map (for Section 8 of template)

**Failure Handling**
- **Failure:** Output contract unclear or incomplete
  - **Action:** Review downstream procedure needs, refine contract
  - **Retry:** Step 6 with clearer contract
- **Failure:** DoD criteria too subjective
  - **Action:** Convert subjective criteria to objective, measurable ones
  - **Retry:** Step 6 with objective criteria

---

### Step 7: Format Using Canonical Template

**Purpose**
- Populate the Canonical Procedure Template with all information gathered
- Ensure consistency and clarity
- Make procedure ready for review

**Inputs**
- **From:** All previous steps (Steps 1-6 outputs)
- Canonical Procedure Template

**Actions**
- Copy the Canonical Procedure Template
- Populate all required sections:
  - Section 1: Purpose (from Step 1)
  - Section 2: Trigger (from Step 2)
  - Section 3: Required Inputs (from Step 2)
  - Section 4: Plan Requirement (from Step 4 plan)
  - Section 5: Workflow (from Steps 3-5)
  - Section 6: Output Contract (from Step 6)
  - Section 7: Validation & Acceptance Criteria (from Step 6)
  - Section 8: Downstream Dependencies (from Step 6)
  - Section 9: Definition of Done (from Step 6)
  - Section 10: Audit & Traceability (define what must be logged)
  - Section 11: Exit States (from Step 5)
- Ensure consistency:
  - Terminology is consistent throughout
  - Formatting follows template
  - All placeholders are replaced
  - All sections are complete
- Add metadata:
  - Procedure version
  - Last updated date
  - Status
  - Author/owner

**Decisions / Evaluations**
- **Decision:** Is template fully populated?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, complete missing sections
- **Decision:** Is procedure clear and actionable?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, improve clarity and actionability

**Outputs**
- Complete procedure document following Canonical Template
- All sections populated
- Ready for review

**Failure Handling**
- **Failure:** Template sections incomplete
  - **Action:** Review steps 1-6, ensure all information was captured
  - **Retry:** Step 7 with complete information
- **Failure:** Procedure unclear or ambiguous
  - **Action:** Review with fresh eyes, improve clarity
  - **Escalate:** If unclear, have someone else review for clarity

---

### Step 8: Validation & Review

**Purpose**
- Validate procedure for completeness and correctness
- Obtain approval for use
- Index procedure for discovery

**Inputs**
- **From:** Step 7 outputs (complete procedure document)
- Review criteria
- Master procedures index

**Actions**
- Review procedure for:
  - **Completeness:** All template sections populated
  - **Logical flow:** Steps are in correct order and make sense
  - **Determinism:** Procedure produces same results for same inputs
  - **Reusability:** Procedure can be used multiple times
  - **Actionability:** Steps are clear and executable
- Conduct review:
  - Self-review (author checks own work)
  - Peer review (colleague reviews)
  - Stakeholder review (if required)
- Address review feedback:
  - Incorporate suggestions
  - Clarify ambiguities
  - Fix errors
- Index procedure:
  - Add to appropriate lifecycle folder
  - Update master procedures index
  - Update "Start Any Activity" if new category

**Decisions / Evaluations**
- **Decision:** Does procedure meet all review criteria?
  - **Go:** If yes, mark as approved and publish
  - **No-Go:** If no, address feedback and re-review
- **Decision:** Is procedure approved for use?
  - **Go:** If yes, proceed to output contract
  - **No-Go:** If no, document rejection reasons

**Outputs**
- Reviewed and approved procedure document
- Updated master procedures index
- Procedure published and indexed

**Failure Handling**
- **Failure:** Review identifies critical issues
  - **Action:** Address critical issues, may require revisiting earlier steps
  - **Retry:** Step 8 after fixes
- **Failure:** Procedure rejected
  - **Action:** Document rejection reasons, decide if to redesign or abandon
  - **Exit State:** Procedure Rejected

---

## 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **New or updated Procedure document** - Following Canonical Procedure Template
- **Updated master procedures index** - Procedure is indexed and discoverable
- **Review documentation** - Review notes and approval (if required)

**State changes:**
- Procedure available in appropriate lifecycle folder
- Master procedures index updated
- "Start Any Activity" updated (if new category)

**Decisions recorded:**
- Approval status (approved/rejected/needs revision)
- Review feedback incorporated
- Version number assigned

**Signals emitted:**
- "Procedure Published" - Available for use
- "Procedure Needs Revision" - Requires changes before use
- "Procedure Rejected" - Not approved, reason documented

---

## 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All template sections are populated
- [ ] No placeholders remain
- [ ] Input/output continuity validated
- [ ] Failure modes defined for all steps
- [ ] DoD criteria are objective and measurable

**Reviews required:**
- [ ] Self-review completed
- [ ] Peer review completed (if required)
- [ ] Stakeholder review completed (if required)
- [ ] All review feedback addressed

**Automated checks:**
- [ ] Procedure follows template structure
- [ ] All required sections present
- [ ] Links to related procedures are valid
- [ ] Formatting is consistent

**Who/what can approve completion:**
- **AI Tooling:** Can validate template compliance and completeness
- **Human Reviewer:** Must approve for use (procedure owner or designated reviewer)
- **Stakeholders:** Must approve if procedure affects their domain

---

## 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **New Procedure Document** → Input for procedures that reference it
- **Updated Master Index** → Input for "Start Any Activity" procedure
- **Procedure Metadata** → Input for procedure discovery tools

**Procedures that depend on this:**
- **Any procedure that references this procedure** - Uses this procedure as a dependency
- **Master Procedures Index** - Includes this procedure in its listing
- **Start Any Activity** - May reference this procedure for routing

---

## 9. Definition of Done

**Objective criteria that must be true**

- [ ] Procedure document follows Canonical Procedure Template completely
- [ ] All 11 template sections are populated
- [ ] Purpose statement is clear and bounded
- [ ] All required inputs are explicit and obtainable
- [ ] Workflow steps are atomic, ordered, and complete
- [ ] Input/output continuity is validated
- [ ] Failure modes are defined for all steps
- [ ] Output contract is clear and complete
- [ ] DoD criteria are objective and measurable
- [ ] Procedure has been reviewed and approved
- [ ] Procedure is indexed in master procedures index
- [ ] Procedure is placed in appropriate lifecycle folder
- [ ] No placeholders or TODOs remain
- [ ] All links to related procedures are valid

---

## 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Commits** - Git commit hash when procedure is created/updated
- [ ] **PRs** - PR number if procedure was created/updated via PR
- [ ] **ADRs** - Architecture Decision Records if procedure relates to architectural decisions
- [ ] **Tickets** - Jira ticket number that triggered procedure creation/update
- [ ] **Related Procedures** - Links to procedures this depends on or that depend on this

**Audit trail:**
- **Creation date** - When procedure was first created
- **Last updated date** - When procedure was last modified
- **Version number** - Procedure version for tracking changes
- **Author/Owner** - Who created/owns the procedure
- **Review history** - Dates and reviewers
- **Change log** - Summary of changes between versions

---

## 11. Exit States

**Possible outcomes of this procedure:**

### ✅ Procedure Published
- All criteria met
- Procedure reviewed and approved
- Procedure indexed and available for use
- All documentation complete
- **Next step:** Procedure is ready for use

### ⚠️ Procedure Needs Revision
- **Reason:** Review identified issues that must be addressed
- **Required action:** Address review feedback, make requested changes
- **Who to notify:** Reviewers who provided feedback
- **Status:** Procedure exists but is not approved for use
- **Next step:** Re-enter workflow at appropriate step to address feedback

### ❌ Procedure Rejected
- **Reason:** [Why rejected - e.g., duplicates existing procedure, out of scope, not needed]
- **Required action:** Document rejection reason, archive or delete draft
- **Rollback required:** Yes - remove from index if already added
- **Lessons learned:** Document why procedure was rejected to prevent repeat attempts
- **Next step:** Either redesign completely different procedure or abandon

### 🔄 Procedure Updated
- **Reason:** Existing procedure was updated rather than created new
- **Previous version:** Link to previous version for reference
- **Changes made:** Summary of what changed and why
- **Status:** Updated version is published and available
- **Next step:** Notify users of procedure updates if significant changes

---

**Template Version:** 1.0.0
**Last Updated:** [Date]
**Status:** Meta-Procedure - Use this to create all other procedures
