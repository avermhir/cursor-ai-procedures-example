# Plan: Start a Task Procedure

## Overview

This document is a plan for creating the "Start a Task Procedure" - a procedure that guides the identification, definition, and planning of tasks before execution.

## 1. Purpose Statement (Draft)

**Why this procedure exists:**
- Enables systematic task identification and planning before work begins
- Ensures all necessary inputs are identified upfront
- Maps tasks to appropriate procedures in the SDLC system
- Creates execution plans with clear objectives and outcomes
- Prevents starting work without proper context or plan

**What problem it solves:**
- Tasks started without clear definition or plan
- Missing inputs discovered mid-task causing delays
- Unclear what procedures apply to a task
- Unclear what success looks like for a task
- Work done without understanding downstream implications

**What "success" looks like:**
A fully defined task with:
- Clear task description and scope
- Complete list of required inputs (and their status)
- Identified procedures that will be used
- Defined objectives and expected outcomes
- Execution plan ready for implementation

## 2. Triggers

**What causes this procedure to be invoked:**
- User wants to start a new task/activity
- New work item identified (ticket, request, etc.)
- User says "I want to..." or "Let's work on..."
- Ad-hoc work needs to be formalized
- Unclear how to proceed with a task
- Starting any development, review, or operational task

## 3. Required Inputs (Initial)

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

**Note:** Many inputs will be discovered during the procedure itself - this is intentional.

## 4. Workflow Steps (Planned)

### Step 1: Capture Initial Task Description
**Purpose:** Get initial understanding of what user wants to do

**Actions:**
- Listen to/read user's task description
- Capture any initial context provided
- Note any mentioned artifacts, tickets, or references

**Outputs:**
- Raw task description
- Initial context notes
- Any referenced artifacts

### Step 2: Clarify Task Scope & Boundaries
**Purpose:** Ensure we understand what the task includes and excludes

**Actions:**
- Ask clarifying questions if task is vague
- Identify what's IN scope for this task
- Identify what's OUT of scope (explicitly)
- Understand boundaries between this task and related work

**Decisions:**
- Is task description clear enough to proceed?
- Go: If clear, proceed to Step 3
- No-Go: Ask more questions, refine description

**Outputs:**
- Clear task description
- Scope boundaries
- Non-goals identified

### Step 3: Identify Task Type & Lifecycle Category
**Purpose:** Determine which procedures apply to this task

**Actions:**
- Classify task type (feature, bug fix, review, deployment, etc.)
- Determine primary lifecycle category (using "Start Any Activity" as reference)
- Identify if task spans multiple lifecycles
- Reference master procedures index to understand options

**Outputs:**
- Task type classification
- Primary lifecycle category
- Related lifecycle categories (if multi-lifecycle)

### Step 4: Identify Required Procedures
**Purpose:** Determine which specific procedures will be needed

**Actions:**
- Based on task type and lifecycle, identify applicable procedures
- Review procedure descriptions to confirm fit
- Identify procedure dependencies (which procedures depend on others)
- Map procedures to task phases (planning, implementation, review, etc.)

**Outputs:**
- List of procedures that will be used
- Procedure sequence/dependencies
- Procedures mapped to task phases

### Step 5: Identify Required Inputs
**Purpose:** Determine what inputs are needed to execute the task

**Actions:**
- Review each identified procedure's "Required Inputs" section
- Collect all unique inputs across procedures
- Categorize inputs:
  - Already available
  - Need to obtain/create
  - Blocking (must have before starting)
  - Nice-to-have (can obtain during execution)
- Check if any inputs are missing or unavailable

**Decisions:**
- Are all blocking inputs available or obtainable?
- Go: If yes, proceed to Step 6
- No-Go: Identify missing inputs, create plan to obtain them

**Outputs:**
- Complete input inventory
- Input status (available/needed/blocking)
- Plan for obtaining missing inputs

### Step 6: Define Objectives & Expected Outcomes
**Purpose:** Establish what success looks like for this task

**Actions:**
- Review each procedure's "Output Contract" and "Definition of Done"
- Synthesize expected outcomes from all procedures
- Define task-level success criteria
- Identify key deliverables or artifacts
- Define acceptance criteria for task completion

**Outputs:**
- Task objectives
- Expected outcomes
- Success criteria
- Key deliverables list

### Step 7: Create Execution Plan
**Purpose:** Synthesize all information into actionable execution plan

**Actions:**
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

**Outputs:**
- Complete execution plan document
- Procedure execution sequence
- Checkpoint definitions
- Risk assessment

### Step 8: Review & Confirm Plan
**Purpose:** Ensure plan is complete and approved before execution

**Actions:**
- Review execution plan with user
- Confirm task scope is correct
- Confirm procedures are appropriate
- Confirm inputs are obtainable
- Confirm objectives/outcomes are clear
- Get approval to proceed

**Decisions:**
- Is plan complete and accurate?
- Go: If yes, proceed to execution
- No-Go: Revise plan based on feedback

**Outputs:**
- Approved execution plan
- Confirmed task definition
- Ready-to-execute status

## 5. Input/Output Flow

**Input Continuity:**
- Step 1 outputs → Step 2 inputs ✓
- Step 2 outputs → Step 3 inputs ✓
- Step 3 outputs → Step 4 inputs ✓
- Step 4 outputs → Step 5 inputs ✓
- Step 5 outputs → Step 6 inputs ✓
- Steps 1-6 outputs → Step 7 inputs ✓
- Step 7 outputs → Step 8 inputs ✓

**Output Consumers:**
- All steps → Final execution plan (Step 8 output)
- Execution plan → Task execution procedures
- Task definition → Task tracking/documentation

## 6. Failure Modes

**Step 2: Task Description Unclear**
- **Failure:** Can't clarify task after multiple attempts
- **Action:** Escalate to stakeholder, ask for more context
- **Retry:** Step 2 with additional context

**Step 3: Can't Classify Task**
- **Failure:** Task doesn't fit any lifecycle category
- **Action:** Review "Start Any Activity" procedure, may need new procedure type
- **Escalate:** If truly novel, may need to create new procedure first

**Step 5: Missing Critical Inputs**
- **Failure:** Blocking inputs are unavailable and can't be obtained
- **Action:** Either modify task scope or create plan to obtain inputs first
- **No-Go:** May need to defer task until inputs available

**Step 8: Plan Not Approved**
- **Failure:** User/stakeholder rejects plan
- **Action:** Revise plan based on feedback, revisit earlier steps if needed
- **Retry:** Step 8 after revisions

## 7. Output Contract

**Guaranteed outputs if procedure completes successfully:**

**Artifacts:**
- **Task Definition Document** - Clear description, scope, boundaries
- **Execution Plan** - Complete plan with:
  - Required inputs (status: available/needed/blocking)
  - Procedures to execute (in sequence)
  - Objectives and expected outcomes
  - Checkpoints and validation points

**State changes:**
- Task is defined and ready for execution
- Plan is approved and documented

**Signals emitted:**
- "Task Defined" - Task is ready for execution
- "Plan Approved" - Execution can begin
- "Inputs Needed" - If blocking inputs missing

## 8. Definition of Done

**Objective criteria:**
- [ ] Task description is clear and unambiguous
- [ ] Task scope and boundaries are explicitly defined
- [ ] Task type and lifecycle category are identified
- [ ] All applicable procedures are identified
- [ ] All required inputs are cataloged with status
- [ ] Objectives and expected outcomes are defined
- [ ] Execution plan is complete with sequence
- [ ] Plan is reviewed and approved
- [ ] Ready to begin execution

## 9. Key Design Decisions

1. **Iterative Clarification:** Procedure allows for back-and-forth to clarify task
2. **Procedure Discovery:** Uses existing procedures index to find relevant procedures
3. **Input Status Tracking:** Tracks what inputs exist vs. need to be obtained
4. **Multi-Lifecycle Support:** Can handle tasks that span multiple lifecycles
5. **Plan Approval:** Requires explicit approval before execution begins

## 10. Integration Points

**Uses:**
- "Start Any Activity" procedure - For lifecycle routing
- Master Procedures Index - To find relevant procedures
- Individual procedure documents - To extract inputs/outputs/DoD

**Used by:**
- Session startup - May invoke this to plan work
- Any ad-hoc task initiation
- Task management workflows

## 11. Questions to Resolve

1. Should this be a conversation-based procedure (interactive) or can it be done in one pass?
   - **Recommendation:** Interactive/iterative, allowing refinement
   
2. How detailed should the execution plan be?
   - **Recommendation:** High-level sequence, detailed planning happens in individual procedures

3. Should we track task state/progress?
   - **Recommendation:** Yes, minimal state tracking (defined, in-progress, complete)

4. Where should task definitions and plans be stored?
   - **Recommendation:** `.ai_working/` folder or task tracking system

## 12. Next Steps

1. Review this plan
2. Resolve questions above
3. Create procedure document using Canonical Template
4. Test procedure with sample tasks
5. Refine based on usage
6. Add to appropriate location (likely root level or session management)

---

**Plan Status:** Draft - Ready for Review
**Created:** [Date]
**Target Location:** `.ai_procedures/start-a-task-procedure.md` (root level)
