# Canonical Procedure Template

**This is the one true format. Every procedure—big or small—must use it.**

---

## Procedure: <Procedure Name>

### 1. Purpose

**Why this procedure exists**

[Describe the business or technical reason for this procedure]

**What problem it solves**

[Explain what problem or challenge this procedure addresses]

**What "success" looks like at the end**

[Define clear success criteria - what state exists when this procedure completes successfully]

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Example: "New feature requested"]
- [Example: "PR opened"]
- [Example: "Schema change detected"]
- [Example: "Incident reported"]
- [Example: "Security vulnerability identified"]

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] [Required document, design, or artifact]
- [ ] [Required code, config, or data]
- [ ] [Required ticket, issue, or reference]

**Decisions already made:**
- [ ] [Decision that must be made before starting]
- [ ] [Approval that must be obtained]

**Constraints:**
- [ ] [Security constraint]
- [ ] [Compliance requirement]
- [ ] [Timeline constraint]
- [ ] [Resource constraint]

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Ordered list of steps
- **Procedures to be invoked** - Related procedures that will be called
- **Dependencies between steps** - What depends on what
- **Risks & unknowns** - Known risks and uncertainties
- **Validation points** - When and how to validate progress

**Plan must be reviewed before execution begins**

**Output:**
- Execution Plan (documented and approved)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step <N>: <Step Name>

**Purpose**
- What this step accomplishes

**Inputs**
- **From:** Procedure Required Inputs, or Outputs of prior steps
- [List specific inputs needed]

**Actions**
- Work to be performed
- Analysis, evaluation, implementation, or testing
- [Detailed actions to take]

**Decisions / Evaluations**
- Conditions evaluated
- Go / No-Go / Branch logic
- [Decision criteria]

**Outputs**
- Artifacts produced
- Decisions made
- Data created or updated
- [Specific outputs]

**Failure Handling**
- What constitutes failure
- Required actions on failure:
  - Fix and retry
  - Escalate
  - Abort procedure
  - Invoke another procedure

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- [Artifact 1]
- [Artifact 2]

**State changes:**
- [State change 1]
- [State change 2]

**Decisions recorded:**
- [Decision 1]
- [Decision 2]

**Signals emitted:**
- [Example: "Ready for PR"]
- [Example: "Approved for deploy"]
- [Example: "Ready for next phase"]

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [Test or check 1]
- [Test or check 2]

**Reviews required:**
- [Review 1]
- [Review 2]

**Automated checks:**
- [Automated validation 1]
- [Automated validation 2]

**Who/what can approve completion:**
- [Human reviewer role or automated system]
- [Approval criteria]

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- [This procedure's output] → [Downstream procedure's input]
- [This procedure's output] → [Downstream procedure's input]

**Procedures that depend on this:**
- [Procedure name 1] - [How it uses this output]
- [Procedure name 2] - [How it uses this output]

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete
- [ ] All artifacts are recorded/committed

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Commits (commit hashes)
- [ ] PRs (PR numbers/links)
- [ ] ADRs (Architecture Decision Records)
- [ ] Tickets (Jira/GitHub issue references)
- [ ] Runbooks (documentation links)
- [ ] Decision logs
- [ ] Change records

**Audit trail:**
- [What events must be logged]
- [What state changes must be recorded]
- [What decisions must be documented]

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- All outputs produced
- All validations passed
- Ready for downstream procedures

#### ⚠️ Blocked
- **Reason:** [Why blocked]
- **Required action:** [What must happen to unblock]
- **Who to notify:** [Stakeholders to inform]
- **Status:** [Current status]

#### ❌ Aborted
- **Reason:** [Why aborted]
- **Required action:** [Cleanup needed]
- **Rollback required:** [Yes/No - if yes, link to rollback procedure]
- **Lessons learned:** [What to document]

#### 🔄 Rolled Back
- **Reason:** [Why rolled back]
- **Rollback procedure used:** [Link to rollback procedure]
- **State after rollback:** [Current state]
- **Next steps:** [What happens next]

---

## Usage Notes

### Creating a New Procedure

1. Copy this template
2. Replace all placeholder text with specific content
3. Ensure all sections are completed
4. Validate against related procedures
5. Add to appropriate lifecycle folder
6. Update master procedures index

### Updating an Existing Procedure

1. Maintain this structure
2. Update only relevant sections
3. Preserve historical context when needed
4. Update version/date if major changes
5. Notify dependent procedures if outputs change

### Procedure Dependencies

- When one procedure calls another, use explicit references
- Document input/output contracts clearly
- Handle failures from nested procedures appropriately

---

**Template Version:** 1.0.0
**Last Updated:** [Date]
**Status:** Canonical Template - Use for all procedures
