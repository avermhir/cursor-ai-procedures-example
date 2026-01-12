# Procedure: Start a Task

### 1. Purpose

**Why this procedure exists**

This procedure enables systematic task identification, definition, and planning before work begins. It ensures all necessary inputs are identified upfront, maps tasks to appropriate procedures in the SDLC system, and creates execution plans with clear objectives and outcomes. This prevents starting work without proper context or plan.

**What problem it solves**

- Tasks started without clear definition or plan
- Missing inputs discovered mid-task causing delays
- Unclear what procedures apply to a task
- Unclear what success looks like for a task
- Work done without understanding downstream implications

**What "success" looks like at the end**

A fully defined task with:
- Clear task description and scope
- Complete list of required inputs (and their status)
- Identified procedures that will be used
- Defined objectives and expected outcomes
- Execution plan ready for implementation

---

### 2. Trigger

**What causes this procedure to be invoked**

- User wants to start a new task/activity
- New work item identified (ticket, request, etc.)
- User says "I want to..." or "Let's work on..."
- Ad-hoc work needs to be formalized
- Unclear how to proceed with a task
- Starting any development, review, or operational task

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] Initial task description or request (can be vague initially)
- [ ] Context about the task (ticket, conversation, requirement, etc.)
- [ ] Current project state (what's been done, what exists)

**Decisions already made:**
- [ ] User wants to work on something (implicit decision)
- [ ] Task is worth pursuing (implicit - user invoked procedure)

**Constraints:**
- [ ] Available time/resources (may affect scope)
- [ ] Dependencies on other work (may affect sequencing)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing task description** → Ask user to clarify what they want to do
- **Unclear context** → Ask clarifying questions to understand the task
- **Unknown project state** → Review recent work, git history, or wrapup.md to understand current state

**Note:** Many inputs will be discovered during the procedure itself - this is intentional and expected.

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from task capture through plan approval
- **Procedures to be invoked** - "Start Any Activity" procedure for lifecycle routing, Master Procedures Index for procedure discovery
- **Dependencies between steps** - Each step builds on previous step outputs
- **Risks & unknowns** - Task may be unclear, procedures may not exist, inputs may be missing
- **Validation points** - Task clarity check (Step 2), input availability check (Step 5), plan approval (Step 8)

**Plan must be reviewed before execution begins**

**Output:**
- Execution Plan (documented and approved)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Capture Initial Task Description

**Purpose**
- Get initial understanding of what user wants to do
- Capture any context provided
- Note any referenced artifacts

**Inputs**
- **From:** Procedure Required Inputs (initial task description, context)
- User's verbal or written task description
- Any mentioned artifacts, tickets, or references

**Actions**
- Listen to/read user's task description
- Capture any initial context provided
- Note any mentioned artifacts, tickets, or references
- Document raw task description verbatim
- Note any questions or ambiguities

**Decisions / Evaluations**
- **Decision:** Is task description clear enough to proceed?
  - **Go:** If clear, proceed to Step 2
  - **No-Go:** If unclear, ask clarifying questions, then retry Step 1

**Outputs**
- Raw task description (verbatim)
- Initial context notes
- Any referenced artifacts identified
- List of questions or ambiguities

**Failure Handling**
- **Failure:** Task description is completely unintelligible
  - **Action:** Ask user to rephrase or provide more context
  - **Retry:** Step 1 with additional context

---

#### Step 2: Clarify Task Scope & Boundaries

**Purpose**
- Ensure we understand what the task includes and excludes
- Define explicit boundaries
- Identify non-goals

**Inputs**
- **From:** Step 1 outputs (raw task description, context notes)
- Any questions or ambiguities from Step 1

**Actions**
- Ask clarifying questions if task is vague
- Identify what's IN scope for this task
- Identify what's OUT of scope (explicitly)
- Understand boundaries between this task and related work
- Document scope boundaries clearly

**Decisions / Evaluations**
- **Decision:** Is task description clear enough to proceed?
  - **Go:** If clear, proceed to Step 3
  - **No-Go:** Ask more questions, refine description, then retry Step 2

**Outputs**
- Clear task description
- Scope boundaries (in-scope items)
- Non-goals identified (out-of-scope items)
- Boundaries with related work

**Failure Handling**
- **Failure:** Can't clarify task after multiple attempts
  - **Action:** Escalate to stakeholder, ask for more context
  - **Retry:** Step 2 with additional context from stakeholder
  - **Escalate:** If still unclear, may need to defer task or create separate procedure

---

#### Step 3: Identify Task Type & Lifecycle Category

**Purpose**
- Determine which procedures apply to this task
- Classify task for proper routing
- Identify if task spans multiple lifecycles

**Inputs**
- **From:** Step 2 outputs (clear task description, scope boundaries)
- Reference: "Start Any Activity" procedure for lifecycle routing

**Actions**
- Classify task type (feature, bug fix, review, deployment, etc.)
- Determine primary lifecycle category using "Start Any Activity" procedure as reference
- Identify if task spans multiple lifecycles
- Reference master procedures index to understand options
- Document task type and lifecycle classification

**Decisions / Evaluations**
- **Decision:** Does task fit into an existing lifecycle category?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** Review "Start Any Activity" procedure, may need new procedure type
  - **Escalate:** If truly novel, may need to create new procedure first

**Outputs**
- Task type classification
- Primary lifecycle category
- Related lifecycle categories (if multi-lifecycle)

**Failure Handling**
- **Failure:** Task doesn't fit any lifecycle category
  - **Action:** Review "Start Any Activity" procedure, may need new procedure type
  - **Escalate:** If truly novel, may need to create new procedure first using "Create or Update a Procedure" procedure

---

#### Step 4: Identify Required Procedures

**Purpose**
- Determine which specific procedures will be needed
- Map procedures to task phases
- Identify procedure dependencies

**Inputs**
- **From:** Step 3 outputs (task type, lifecycle category)
- Reference: Master Procedures Index
- Reference: Individual procedure documents

**Actions**
- Based on task type and lifecycle, identify applicable procedures
- Review procedure descriptions to confirm fit
- Identify procedure dependencies (which procedures depend on others)
- Map procedures to task phases (planning, implementation, review, etc.)
- Document procedure sequence and dependencies

**Decisions / Evaluations**
- **Decision:** Are all required procedures identified?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** Review master procedures index more thoroughly, or identify missing procedures

**Outputs**
- List of procedures that will be used
- Procedure sequence/dependencies
- Procedures mapped to task phases

**Failure Handling**
- **Failure:** Can't identify appropriate procedures
  - **Action:** Review master procedures index, consult "Start Any Activity" procedure
  - **Escalate:** If procedures don't exist, may need to create them first

---

#### Step 5: Identify Required Inputs

**Purpose**
- Determine what inputs are needed to execute the task
- Categorize inputs by availability and criticality
- Create plan for obtaining missing inputs

**Inputs**
- **From:** Step 4 outputs (list of procedures)
- Reference: Each identified procedure's "Required Inputs" section

**Actions**
- Review each identified procedure's "Required Inputs" section
- Collect all unique inputs across procedures
- Categorize inputs:
  - Already available
  - Need to obtain/create
  - Blocking (must have before starting)
  - Nice-to-have (can obtain during execution)
- Check if any inputs are missing or unavailable
- Create plan for obtaining missing inputs

**Decisions / Evaluations**
- **Decision:** Are all blocking inputs available or obtainable?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** Identify missing inputs, create plan to obtain them, or modify task scope

**Outputs**
- Complete input inventory
- Input status (available/needed/blocking/nice-to-have)
- Plan for obtaining missing inputs

**Failure Handling**
- **Failure:** Blocking inputs are unavailable and can't be obtained
  - **Action:** Either modify task scope or create plan to obtain inputs first
  - **No-Go:** May need to defer task until inputs available
  - **Alternative:** Modify task scope to work with available inputs

---

#### Step 6: Define Objectives & Expected Outcomes

**Purpose**
- Establish what success looks like for this task
- Define acceptance criteria
- Identify key deliverables

**Inputs**
- **From:** Step 4 outputs (procedures identified)
- **From:** Step 5 outputs (inputs identified)
- Reference: Each procedure's "Output Contract" and "Definition of Done"

**Actions**
- Review each procedure's "Output Contract" and "Definition of Done"
- Synthesize expected outcomes from all procedures
- Define task-level success criteria
- Identify key deliverables or artifacts
- Define acceptance criteria for task completion

**Decisions / Evaluations**
- **Decision:** Are objectives and outcomes clear?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** Refine objectives based on procedure outputs

**Outputs**
- Task objectives
- Expected outcomes
- Success criteria
- Key deliverables list
- Acceptance criteria

**Failure Handling**
- **Failure:** Can't define clear objectives
  - **Action:** Review procedure outputs more carefully, ask user for clarification
  - **Retry:** Step 6 with additional context

---

#### Step 7: Create Execution Plan

**Purpose**
- Synthesize all information into actionable execution plan
- Create ordered sequence of work
- Identify risks and validation points

**Inputs**
- **From:** All previous steps (Steps 1-6 outputs)
- Task definition
- Procedures identified
- Inputs cataloged
- Objectives defined

**Actions**
- Create ordered sequence of work:
  - Obtain missing inputs (if any)
  - Execute procedures in dependency order
  - Validation/checkpoint points
- Document plan structure:
  - Prerequisites (inputs needed)
  - Procedure sequence
  - Checkpoints/validation points
  - Expected outcomes at each stage
- Identify risks and unknowns
- Define rollback/recovery approach if needed
- Document plan in `.ai_working/` folder

**Decisions / Evaluations**
- **Decision:** Is execution plan complete and actionable?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** Refine plan, add missing details

**Outputs**
- Complete execution plan document (stored in `.ai_working/`)
- Procedure execution sequence
- Checkpoint definitions
- Risk assessment
- Rollback/recovery approach (if needed)

**Failure Handling**
- **Failure:** Can't create coherent execution plan
  - **Action:** Review all previous steps, ensure all information is captured
  - **Retry:** Step 7 with complete information from previous steps

---

#### Step 8: Review & Confirm Plan

**Purpose**
- Ensure plan is complete and approved before execution
- Get user confirmation to proceed
- Finalize task definition

**Inputs**
- **From:** Step 7 outputs (execution plan)
- All previous step outputs (for reference)

**Actions**
- Review execution plan with user
- Present task definition, scope, procedures, inputs, objectives
- Confirm task scope is correct
- Confirm procedures are appropriate
- Confirm inputs are obtainable
- Confirm objectives/outcomes are clear
- Get approval to proceed

**Decisions / Evaluations**
- **Decision:** Is plan complete and accurate?
  - **Go:** If yes, proceed to execution
  - **No-Go:** Revise plan based on feedback, revisit earlier steps if needed

**Outputs**
- Approved execution plan
- Confirmed task definition
- Ready-to-execute status
- Task state: "Defined" → ready to transition to "In Progress"

**Failure Handling**
- **Failure:** User/stakeholder rejects plan
  - **Action:** Revise plan based on feedback, revisit earlier steps if needed
  - **Retry:** Step 8 after revisions
  - **Alternative:** May need to go back to Step 2 (clarify scope) or Step 3 (task type) if fundamental issues

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Task Definition Document** - Clear description, scope, boundaries (stored in `.ai_working/`)
- **Execution Plan** - Complete plan with:
  - Required inputs (status: available/needed/blocking)
  - Procedures to execute (in sequence)
  - Objectives and expected outcomes
  - Checkpoints and validation points
  - Risk assessment
  - (Stored in `.ai_working/`)

**State changes:**
- Task is defined and ready for execution
- Plan is approved and documented
- Task state: "Defined" → ready for "In Progress"

**Decisions recorded:**
- Task type and lifecycle category
- Procedures selected
- Input status and acquisition plan
- Objectives and success criteria

**Signals emitted:**
- "Task Defined" - Task is ready for execution
- "Plan Approved" - Execution can begin
- "Inputs Needed" - If blocking inputs missing (with acquisition plan)

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- Task description is clear and unambiguous
- Scope boundaries are explicitly defined
- All required procedures are identified
- All inputs are cataloged with status
- Execution plan is complete with sequence

**Reviews required:**
- User review and approval of execution plan
- Confirmation that task scope is correct
- Confirmation that procedures are appropriate
- Confirmation that objectives are clear

**Automated checks:**
- None (this is a planning procedure)

**Who/what can approve completion:**
- User who initiated the task
- Stakeholder (if task requires stakeholder approval)
- Approval criteria: Plan is complete, accurate, and ready for execution

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- Task Definition Document → Individual procedure execution (as context)
- Execution Plan → Task execution procedures (as guide)
- Identified Procedures → Procedure execution (procedures will be invoked)
- Input Status → Input acquisition procedures (if inputs need to be obtained)

**Procedures that depend on this:**
- **All task execution procedures** - Use task definition and execution plan as context
- **Session Startup Procedure** - May reference task definitions from previous sessions
- **Session Wrapup Procedure** - May document task status and progress

**Integration points:**
- **"Start Any Activity" procedure** - Used in Step 3 for lifecycle routing
- **Master Procedures Index** - Used in Step 4 for procedure discovery
- **Individual procedure documents** - Used in Steps 4-6 to extract inputs/outputs/DoD
- **Task tracking systems** - Task definition can be logged to Jira or other systems

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Task description is clear and unambiguous
- [ ] Task scope and boundaries are explicitly defined
- [ ] Task type and lifecycle category are identified
- [ ] All applicable procedures are identified
- [ ] All required inputs are cataloged with status (available/needed/blocking/nice-to-have)
- [ ] Objectives and expected outcomes are defined
- [ ] Execution plan is complete with sequence
- [ ] Plan is reviewed and approved by user
- [ ] Task Definition Document is created and stored in `.ai_working/`
- [ ] Execution Plan is created and stored in `.ai_working/`
- [ ] Ready to begin execution
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Commits (if task definition is committed to git)
- [ ] PRs (if task involves PR creation)
- [ ] ADRs (if task involves architectural decisions)
- [ ] Tickets (Jira/GitHub issue references - should be included in task definition)
- [ ] Runbooks (if task involves operational procedures)
- [ ] Decision logs (task type, lifecycle, procedure selections)
- [ ] Change records (if task definition changes)

**Audit trail:**
- Task definition creation timestamp
- Plan approval timestamp
- User who approved plan
- Procedures selected and why
- Inputs identified and their status
- Objectives defined
- Any revisions to task definition or plan

**Storage:**
- Task Definition Document: `.ai_working/task-<identifier>-definition.md`
- Execution Plan: `.ai_working/task-<identifier>-plan.md`
- Task identifier can be: ticket number, descriptive name, or timestamp

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- All outputs produced
- All validations passed
- Task defined and plan approved
- Ready for task execution procedures

#### ⚠️ Blocked
- **Reason:** Missing blocking inputs that cannot be obtained
- **Required action:** Either modify task scope or create plan to obtain inputs first
- **Who to notify:** User who initiated task
- **Status:** Task definition complete, but execution blocked until inputs available

#### ❌ Aborted
- **Reason:** Task cannot be clarified, no appropriate procedures exist, or user cancels
- **Required action:** Document why task was aborted, what was attempted
- **Rollback required:** No (planning procedure, no state to rollback)
- **Lessons learned:** Document what made task unworkable, may inform future procedure creation

#### 🔄 Deferred
- **Reason:** Task is valid but should be done later (dependencies, priorities, etc.)
- **Required action:** Document task definition and plan for future execution
- **Status:** Task defined but deferred
- **Next steps:** Revisit when dependencies are met or priorities change

---

## Usage Notes

### Creating a Task Definition

1. Invoke this procedure when starting any new task
2. Follow all 8 steps in order
3. Store outputs in `.ai_working/` folder
4. Get user approval before proceeding to execution
5. Reference task definition during execution

### Task State Tracking

**Minimal state tracking:**
- **Defined** - Task definition and plan complete (this procedure's output)
- **In Progress** - Task execution has begun
- **Complete** - Task execution finished successfully
- **Blocked** - Task execution blocked (waiting on inputs)
- **Deferred** - Task defined but deferred for later

### Integration with Other Procedures

**This procedure is used by:**
- Session startup - May invoke this to plan work
- Ad-hoc task initiation - When user wants to start work
- Task management workflows - To formalize ad-hoc work

**This procedure uses:**
- "Start Any Activity" procedure - For lifecycle routing (Step 3)
- Master Procedures Index - To find relevant procedures (Step 4)
- Individual procedure documents - To extract inputs/outputs/DoD (Steps 4-6)

### Multi-Lifecycle Tasks

When a task spans multiple lifecycles:
1. Identify primary lifecycle (main focus)
2. Identify secondary lifecycles (supporting activities)
3. Map procedures from all relevant lifecycles
4. Sequence procedures accounting for dependencies
5. Document in execution plan

### Iterative Refinement

This procedure is designed to be interactive/iterative:
- Steps 1-2 allow back-and-forth to clarify task
- Step 8 allows plan revision based on feedback
- Procedure can be re-invoked if task scope changes significantly

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** AI Agent / Developer
