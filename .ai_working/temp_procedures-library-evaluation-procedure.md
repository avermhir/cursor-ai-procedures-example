# Procedure: Procedures Library Progress Evaluation

### 1. Purpose

**Why this procedure exists**

This procedure evaluates the current state of the Procedures Library to assess progress, identify gaps, prioritize next steps, and create a roadmap for completing the library. It provides a systematic approach to understanding what's been accomplished and what remains to be done.

**What problem it solves**

- Unclear understanding of overall progress on procedures library
- Missing visibility into which procedures are defined vs. placeholders
- Lack of prioritization for next procedures to define
- No systematic way to identify gaps or inconsistencies
- Difficulty planning future work on procedures

**What "success" looks like at the end**

A comprehensive evaluation report that includes:
- Complete inventory of all procedures (defined, placeholder, missing)
- Progress metrics by lifecycle category
- Gap analysis identifying critical missing procedures
- Prioritized roadmap for next procedures to define
- Recommendations for improvements
- Action plan for continuing work

---

### 2. Trigger

**What causes this procedure to be invoked**

- Periodic evaluation needed (e.g., after significant work on procedures)
- Before planning next phase of procedure development
- Need to assess overall progress and identify priorities
- User requests evaluation of procedures library status
- After completing a major lifecycle (e.g., Feature Lifecycle, API Lifecycle)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Master Procedures Index** - `.ai_procedures/master-procedures-index.md`
- [ ] **All lifecycle README files** - README files in each lifecycle folder
- [ ] **All procedure files** - All `.md` files in `.ai_procedures/` directory
- [ ] **Standards folder** - `.ai_standards/` directory structure
- [ ] **Previous evaluation reports** - Any prior evaluation documents (if they exist)

**Decisions already made:**
- [ ] **Evaluation scope** - What aspects to evaluate (completeness, quality, integration, etc.)
- [ ] **Evaluation timeframe** - What period to evaluate (since last evaluation, or all-time)

**Constraints:**
- [ ] **Time available** - How much time can be spent on evaluation
- [ ] **Evaluation depth** - Quick assessment vs. comprehensive analysis

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing Master Procedures Index** → Create it first or use directory scanning
- **Missing lifecycle READMEs** → Scan directories directly or create READMEs

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Inventory → Categorize → Analyze → Prioritize → Report
- **Procedures to be invoked** - None (this is a meta-procedure)
- **Dependencies between steps** - Each step builds on previous step's outputs
- **Risks & unknowns** - Incomplete documentation, missing files, inconsistent status tracking
- **Validation points** - After each major step, verify accuracy of findings

**Plan must be reviewed before execution begins**

**Output:**
- Evaluation Plan (documented with scope, approach, and expected outputs)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Inventory All Procedures

**Purpose**
- Create a complete inventory of all procedures in the library
- Identify all lifecycle folders and their contents
- Categorize each procedure by status (defined, placeholder, missing)

**Inputs**
- **From:** Procedure Required Inputs (Master Procedures Index, directory structure)
- All `.md` files in `.ai_procedures/` directory
- All lifecycle folder structures

**Actions**
- Scan `.ai_procedures/` directory structure
- Read Master Procedures Index
- Read all lifecycle README files
- For each procedure file:
  - Check if it exists
  - Read first 50 lines to determine status:
    - **Defined:** Has canonical template structure with Purpose, Trigger, Required Inputs, Workflow sections
    - **Placeholder:** Has "Status: Placeholder" or minimal content
    - **Missing:** Referenced but file doesn't exist
- Create inventory spreadsheet/list with:
  - Procedure name
  - File path
  - Lifecycle category
  - Status (Defined/Placeholder/Missing)
  - Date last updated (if available)
  - Dependencies (if mentioned)

**Decisions / Evaluations**
- **Decision:** Are all expected procedures accounted for?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, investigate missing procedures, update inventory

**Outputs**
- Complete procedure inventory (spreadsheet or structured document)
- Count of procedures by status
- Count of procedures by lifecycle category
- List of missing procedures (referenced but not created)

**Failure Handling**
- **Failure:** Cannot access procedure files
  - **Action:** Check file permissions, verify directory structure
  - **Retry:** Step 1 after fixing access issues
- **Failure:** Inconsistent status indicators
  - **Action:** Review ambiguous procedures manually, standardize status detection
  - **Retry:** Step 1 with improved detection logic

---

#### Step 2: Categorize and Analyze by Lifecycle

**Purpose**
- Organize procedures by lifecycle category
- Calculate progress metrics for each lifecycle
- Identify lifecycle-specific patterns and gaps

**Inputs**
- **From:** Step 1 outputs (procedure inventory)
- Master Procedures Index lifecycle sections
- Lifecycle README files

**Actions**
- Group procedures by lifecycle category:
  - Root Level Procedures
  - Feature Lifecycle
  - API Lifecycle
  - Design System Lifecycle
  - PR Lifecycle
  - Release Lifecycle
  - Incident Lifecycle
  - Change Management Lifecycle
  - Data Lifecycle
  - AuthN/AuthZ Lifecycle
  - Third-Party Integration Lifecycle
  - Testing & Quality Lifecycle
  - Security Lifecycle
  - Observability & Operations Lifecycle
  - Architecture & System Health
  - Governance & Compliance
- For each lifecycle:
  - Count total procedures (defined + placeholder + missing)
  - Count defined procedures
  - Count placeholder procedures
  - Count missing procedures
  - Calculate completion percentage: (Defined / Total) × 100
  - Identify critical path procedures (those that block others)
  - Identify standalone procedures (no dependencies)
- Create lifecycle summary table:
  - Lifecycle name
  - Total procedures
  - Defined count
  - Placeholder count
  - Missing count
  - Completion %
  - Priority level (High/Medium/Low based on dependencies and usage)

**Decisions / Evaluations**
- **Decision:** Are there lifecycles with 0% completion?
  - **Go:** If yes, note for prioritization discussion
  - **No-Go:** If no, proceed
- **Decision:** Are critical path procedures defined?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, flag as high priority

**Outputs**
- Lifecycle progress summary table
- Completion percentages by lifecycle
- Critical path analysis (which procedures block others)
- Lifecycle priority rankings

**Failure Handling**
- **Failure:** Cannot determine lifecycle category for some procedures
  - **Action:** Review file location, check Master Procedures Index, assign manually
  - **Retry:** Step 2 with manual categorization

---

#### Step 3: Analyze Integration and Dependencies

**Purpose**
- Understand how procedures relate to each other
- Identify integration points and dependencies
- Find broken references or missing connections

**Inputs**
- **From:** Step 1 outputs (procedure inventory)
- Step 2 outputs (lifecycle categorization)
- Procedure files (to check for references)

**Actions**
- For each defined procedure:
  - Extract all procedure references (links to other procedures)
  - Verify referenced procedures exist
  - Check if references are correct (file paths, procedure names)
  - Identify upstream dependencies (procedures this one depends on)
  - Identify downstream dependencies (procedures that depend on this one)
- For Feature Implementation Orchestration Procedure:
  - Extract all procedures it invokes
  - Verify all invoked procedures exist
  - Check if invoked procedures are in correct phases
  - Identify any missing procedure invocations
- Create dependency graph or matrix:
  - Which procedures call which other procedures
  - Which procedures are prerequisites for others
  - Which procedures are standalone
- Identify integration issues:
  - Broken references (links to non-existent procedures)
  - Missing invocations (procedures should be called but aren't)
  - Circular dependencies (if any)
  - Orphaned procedures (defined but never referenced)

**Decisions / Evaluations**
- **Decision:** Are there broken references?
  - **Go:** If no, proceed to Step 4
  - **No-Go:** If yes, document and flag for fixing
- **Decision:** Are critical integration points complete?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, flag as high priority

**Outputs**
- Dependency graph/matrix
- List of broken references
- List of missing invocations
- Integration completeness assessment
- Orphaned procedures list

**Failure Handling**
- **Failure:** Cannot parse procedure references
  - **Action:** Review manually, improve parsing logic
  - **Retry:** Step 3 with improved parsing

---

#### Step 4: Identify Gaps and Critical Missing Procedures

**Purpose**
- Identify procedures that are missing but should exist
- Prioritize missing procedures by criticality
- Identify gaps in procedure coverage

**Inputs**
- **From:** Step 1 outputs (procedure inventory)
- Step 2 outputs (lifecycle categorization)
- Step 3 outputs (dependency analysis)
- Master Procedures Index

**Actions**
- Compare Master Procedures Index with actual files:
  - Find procedures listed in index but missing files
  - Find files that exist but not in index
  - Find procedures referenced but not created
- Analyze Feature Implementation Orchestration Procedure:
  - List all procedures it invokes
  - Check which are defined vs. placeholder vs. missing
  - Identify critical path procedures (must be defined for orchestration to work)
- Analyze each lifecycle:
  - Identify missing procedures based on lifecycle README
  - Identify procedures that should exist based on common patterns
  - Identify procedures needed for complete workflow coverage
- Categorize missing procedures by criticality:
  - **Critical:** Blocks other procedures or is in critical path
  - **High:** Important for workflow but not blocking
  - **Medium:** Useful but not essential
  - **Low:** Nice to have, can be deferred
- Identify coverage gaps:
  - Lifecycles with no procedures defined
  - Workflow phases with missing procedures
  - Integration points without procedures
  - Common scenarios without procedures

**Decisions / Evaluations**
- **Decision:** Are there critical missing procedures?
  - **Go:** If yes, flag for immediate attention
  - **No-Go:** If no, proceed
- **Decision:** Are there lifecycles with 0% coverage?
  - **Go:** If yes, note for prioritization
  - **No-Go:** If no, proceed

**Outputs**
- List of missing procedures by criticality
- Gap analysis report
- Critical path blockers
- Coverage gaps by lifecycle
- Recommendations for new procedures

**Failure Handling**
- **Failure:** Cannot determine criticality
  - **Action:** Review manually, consult with stakeholders
  - **Retry:** Step 4 with manual prioritization

---

#### Step 5: Assess Quality and Completeness of Defined Procedures

**Purpose**
- Evaluate quality of defined procedures
- Check adherence to canonical template
- Identify incomplete or inconsistent procedures

**Inputs**
- **From:** Step 1 outputs (procedure inventory - defined procedures only)
- Canonical procedure template
- Defined procedure files

**Actions**
- For each defined procedure:
  - Check adherence to canonical template:
    - Has all 11 required sections?
    - Are sections properly formatted?
    - Are placeholders replaced with actual content?
  - Check completeness:
    - Are all sections filled in?
    - Are examples provided where needed?
    - Are failure handling paths defined?
    - Are exit states defined?
  - Check consistency:
    - Do input/output contracts match between procedures?
    - Are procedure names consistent?
    - Are references correct?
  - Check quality indicators:
    - Is purpose clearly stated?
    - Are triggers well-defined?
    - Are workflows detailed enough?
    - Are validation criteria objective?
- Create quality assessment:
  - Procedures fully compliant with template
  - Procedures mostly compliant (minor issues)
  - Procedures partially compliant (major issues)
  - Procedures non-compliant (needs significant work)
- Identify improvement opportunities:
  - Procedures that need updates
  - Procedures with missing sections
  - Procedures with unclear content
  - Procedures with broken references

**Decisions / Evaluations**
- **Decision:** Are all defined procedures template-compliant?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, document issues for fixing
- **Decision:** Are critical procedures high quality?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, flag for quality improvements

**Outputs**
- Quality assessment report
- Template compliance checklist results
- List of procedures needing improvements
- Quality metrics (average compliance score, etc.)

**Failure Handling**
- **Failure:** Cannot parse template structure
  - **Action:** Review manually, use simpler checks
  - **Retry:** Step 5 with manual review

---

#### Step 6: Review Standards and Guidelines Organization

**Purpose**
- Assess organization of standards vs. procedures
- Verify standards are properly referenced
- Identify any standards that should be procedures or vice versa

**Inputs**
- **From:** Procedure Required Inputs (Standards folder)
- Standards files in `.ai_standards/`
- Procedure files that reference standards

**Actions**
- Scan `.ai_standards/` directory:
  - List all standards files
  - Categorize by type (SDLC, Security, Quality, etc.)
  - Check if standards are complete
- Check procedure files for standards references:
  - Find all references to standards
  - Verify referenced standards exist
  - Check if references are correct
- Identify misclassifications:
  - Standards that should be procedures (executable workflows)
  - Procedures that should be standards (reference material)
- Check standards organization:
  - Are standards in correct folders?
  - Are standards properly documented?
  - Are standards referenced where needed?

**Decisions / Evaluations**
- **Decision:** Are standards properly organized?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, document reorganization needs
- **Decision:** Are standards properly referenced?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, flag for reference updates

**Outputs**
- Standards inventory
- Standards organization assessment
- List of misclassifications
- Broken standards references
- Recommendations for standards organization

**Failure Handling**
- **Failure:** Cannot access standards folder
  - **Action:** Check if folder exists, create if needed
  - **Retry:** Step 6 after folder structure verified

---

#### Step 7: Prioritize Next Procedures to Define

**Purpose**
- Create prioritized list of procedures to define next
- Consider dependencies, criticality, and workflow needs
- Create actionable roadmap

**Inputs**
- **From:** Step 2 outputs (lifecycle progress)
- Step 3 outputs (dependency analysis)
- Step 4 outputs (gap analysis)
- Step 5 outputs (quality assessment)

**Actions**
- Create prioritization matrix considering:
  - **Criticality:** How critical is this procedure for workflows?
  - **Dependencies:** How many procedures depend on this?
  - **Blocking:** Does this block other procedures?
  - **Usage:** How frequently will this be used?
  - **Completeness:** How close is the lifecycle to completion?
- Categorize procedures into priority tiers:
  - **P0 - Critical:** Must define next (blocks workflows, high dependencies)
  - **P1 - High:** Should define soon (important for workflows)
  - **P2 - Medium:** Define when time permits (useful but not blocking)
  - **P3 - Low:** Nice to have (can defer)
- For each priority tier:
  - List procedures in dependency order
  - Estimate effort (if possible)
  - Identify prerequisites
- Create roadmap:
  - Immediate next steps (P0 procedures)
  - Short-term plan (P0 + P1 procedures)
  - Medium-term plan (P2 procedures)
  - Long-term plan (P3 procedures)

**Decisions / Evaluations**
- **Decision:** Are P0 procedures clearly identified?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, review criticality criteria
- **Decision:** Is roadmap realistic?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, adjust priorities

**Outputs**
- Prioritized procedure list
- Roadmap for procedure development
- Dependency-ordered sequence for next procedures
- Effort estimates (if available)

**Failure Handling**
- **Failure:** Cannot determine priorities
  - **Action:** Use default prioritization (critical path first, then by lifecycle completion)
  - **Retry:** Step 7 with default approach

---

#### Step 8: Generate Evaluation Report

**Purpose**
- Compile all findings into comprehensive evaluation report
- Create executive summary
- Provide actionable recommendations

**Inputs**
- **From:** All previous step outputs
- Evaluation plan from Step 4

**Actions**
- Create evaluation report with sections:
  - **Executive Summary:**
    - Overall progress (total procedures, completion %)
    - Key findings
    - Top priorities
  - **Detailed Findings:**
    - Procedure inventory summary
    - Progress by lifecycle
    - Integration analysis
    - Gap analysis
    - Quality assessment
    - Standards organization
  - **Prioritized Roadmap:**
    - Next procedures to define (P0)
    - Short-term plan
    - Medium-term plan
  - **Recommendations:**
    - Immediate actions
    - Process improvements
    - Quality improvements
    - Organization improvements
  - **Metrics and Statistics:**
    - Total procedures: X
    - Defined: Y (Z%)
    - Placeholders: A (B%)
    - Missing: C (D%)
    - By lifecycle breakdown
    - Quality scores
- Format report for readability:
  - Use tables for metrics
  - Use lists for recommendations
  - Use charts/graphs if possible (text-based)
  - Include links to procedures
- Save report to `.ai_working/` folder:
  - Filename: `temp_procedures-library-evaluation-report-YYYY-MM-DD.md`

**Decisions / Evaluations**
- **Decision:** Is report complete and accurate?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, review and correct
- **Decision:** Are recommendations actionable?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, refine recommendations

**Outputs**
- Comprehensive evaluation report
- Executive summary
- Prioritized roadmap
- Actionable recommendations
- Metrics and statistics

**Failure Handling**
- **Failure:** Report too large or unwieldy
  - **Action:** Create summary version, move details to appendices
  - **Retry:** Step 8 with restructured report

---

#### Step 9: Review and Validate Findings

**Purpose**
- Review evaluation report for accuracy
- Validate findings against source materials
- Ensure recommendations are sound

**Inputs**
- **From:** Step 8 outputs (evaluation report)
- Original source materials (procedure files, index, etc.)

**Actions**
- Spot-check findings:
  - Verify procedure counts are accurate
  - Verify status classifications are correct
  - Verify dependency analysis is accurate
  - Verify gap analysis is complete
- Review recommendations:
  - Are they actionable?
  - Are they prioritized correctly?
  - Are they realistic?
  - Do they address the gaps?
- Validate metrics:
  - Recalculate key percentages
  - Verify lifecycle completion percentages
  - Check math on statistics
- Get feedback (if possible):
  - Review with user
  - Adjust based on feedback
  - Update report if needed

**Decisions / Evaluations**
- **Decision:** Are findings accurate?
  - **Go:** If yes, proceed to Step 10
  - **No-Go:** If no, correct findings and regenerate report
- **Decision:** Are recommendations sound?
  - **Go:** If yes, proceed to Step 10
  - **No-Go:** If no, refine recommendations

**Outputs**
- Validated evaluation report
- Corrected findings (if any)
- Refined recommendations (if any)

**Failure Handling**
- **Failure:** Findings don't match expectations
  - **Action:** Review methodology, check for errors, correct and regenerate
  - **Retry:** Step 9 after corrections

---

#### Step 10: Create Action Plan

**Purpose**
- Convert evaluation findings into actionable next steps
- Create specific tasks for continuing procedure development
- Define success criteria for next evaluation

**Inputs**
- **From:** Step 8 outputs (evaluation report)
- Step 9 outputs (validated findings)

**Actions**
- Extract actionable items from evaluation report:
  - Procedures to define (prioritized list)
  - Procedures to improve (quality issues)
  - References to fix (broken links)
  - Standards to organize (misclassifications)
- Create action plan with:
  - **Immediate Actions (Next Session):**
    - Define P0 procedures
    - Fix critical broken references
    - Address critical quality issues
  - **Short-Term Actions (Next Few Sessions):**
    - Define P1 procedures
    - Complete high-priority lifecycles
    - Fix integration issues
  - **Medium-Term Actions:**
    - Define P2 procedures
    - Improve procedure quality
    - Organize standards better
  - **Long-Term Actions:**
    - Define P3 procedures
    - Complete all lifecycles
    - Continuous improvement
- Define success criteria for next evaluation:
  - Target completion percentages
  - Target number of procedures to define
  - Quality improvement goals
  - Integration completeness goals
- Save action plan to `.ai_working/` folder:
  - Filename: `temp_procedures-library-action-plan-YYYY-MM-DD.md`

**Decisions / Evaluations**
- **Decision:** Is action plan realistic?
  - **Go:** If yes, procedure complete
  - **No-Go:** If no, adjust scope or timeline
- **Decision:** Are success criteria measurable?
  - **Go:** If yes, procedure complete
  - **No-Go:** If no, refine criteria

**Outputs**
- Action plan document
- Prioritized task list
- Success criteria for next evaluation
- Timeline estimates (if possible)

**Failure Handling**
- **Failure:** Action plan too ambitious
  - **Action:** Reduce scope, focus on highest priorities
  - **Retry:** Step 10 with adjusted plan

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Evaluation Report** - Comprehensive assessment of procedures library (`.ai_working/temp_procedures-library-evaluation-report-YYYY-MM-DD.md`)
- **Action Plan** - Prioritized roadmap for next steps (`.ai_working/temp_procedures-library-action-plan-YYYY-MM-DD.md`)
- **Procedure Inventory** - Complete list of all procedures with status
- **Metrics Summary** - Key statistics and completion percentages

**State changes:**
- Understanding of procedures library status is current
- Priorities for next procedures are clear
- Gaps and issues are documented

**Decisions recorded:**
- Prioritization of procedures to define next
- Identification of critical missing procedures
- Quality improvement priorities
- Standards organization needs

**Signals emitted:**
- "Evaluation Complete" - Evaluation report and action plan ready
- "Ready for Next Phase" - Clear priorities for continuing procedure development

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Evaluation report is complete (all sections present)
- [ ] Procedure counts are accurate (match actual files)
- [ ] Status classifications are correct (verified against files)
- [ ] Dependencies are accurately mapped
- [ ] Recommendations are actionable
- [ ] Action plan is prioritized and realistic

**Reviews required:**
- [ ] Evaluation report reviewed for accuracy
- [ ] Action plan reviewed for feasibility
- [ ] Priorities validated against workflow needs

**Automated checks:**
- [ ] File counts match directory scans
- [ ] References can be verified (links work)
- [ ] Math on percentages is correct

**Who/what can approve completion:**
- **User** - Must review and approve evaluation findings
- **Procedure Owner** - Should validate prioritization and recommendations

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Evaluation Report** → Input for planning next procedure development sessions
- **Action Plan** → Input for prioritizing which procedures to define next
- **Procedure Inventory** → Input for updating Master Procedures Index
- **Gap Analysis** → Input for creating new procedure placeholders

**Procedures that depend on this:**
- **Create or Update Procedure** - May use evaluation findings to improve procedure creation
- **Start Any Activity Procedure** - May reference evaluation for procedure selection
- **Session Planning** - Uses action plan to plan next session work

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] All procedures inventoried and categorized
- [ ] Progress calculated for each lifecycle
- [ ] Dependencies mapped and analyzed
- [ ] Gaps identified and prioritized
- [ ] Quality assessed for all defined procedures
- [ ] Standards organization reviewed
- [ ] Evaluation report generated and saved
- [ ] Action plan created and saved
- [ ] Findings validated for accuracy
- [ ] Recommendations are actionable
- [ ] Success criteria defined for next evaluation
- [ ] All outputs saved to `.ai_working/` folder

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Evaluation Report** - File path and date
- [ ] **Action Plan** - File path and date
- [ ] **Procedure Inventory** - File path and date
- [ ] **Master Procedures Index** - Version/date evaluated
- [ ] **Git Commit** - If evaluation artifacts are committed

**Audit trail:**
- **Evaluation date** - When evaluation was performed
- **Procedures evaluated** - Count and list
- **Findings summary** - Key discoveries
- **Recommendations made** - What was recommended
- **Action plan created** - What actions were planned

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- Evaluation report generated
- Action plan created
- All findings validated
- Recommendations are actionable
- Ready to proceed with procedure development based on action plan

#### ⚠️ Blocked
- **Reason:** Missing source materials, incomplete documentation, or access issues
- **Required action:** Resolve blockers (create missing files, fix access, etc.)
- **Who to notify:** User
- **Status:** Evaluation paused until blockers resolved

#### ❌ Aborted
- **Reason:** Evaluation scope too large, insufficient time, or critical errors discovered
- **Required action:** Document what was completed, save partial findings
- **Rollback required:** No - partial findings may still be useful
- **Lessons learned:** Document what made evaluation unviable, adjust approach for next time

#### 🔄 Partial Completion
- **Reason:** Some steps completed but not all (e.g., inventory done but analysis incomplete)
- **Required action:** Document completed steps, save partial outputs
- **Status:** Partial evaluation report available
- **Next steps:** Complete remaining steps in follow-up session

---

## Usage Notes

### When to Run This Evaluation

- After completing a major lifecycle (e.g., Feature Lifecycle, API Lifecycle)
- Before planning next phase of procedure development
- Periodically (e.g., monthly or quarterly) to track progress
- When user requests status update on procedures library

### Evaluation Scope Options

**Quick Evaluation:**
- Steps 1-2 only (inventory and categorization)
- Basic metrics and progress percentages
- High-level gap identification
- Estimated time: 30-60 minutes

**Standard Evaluation:**
- Steps 1-7 (all analysis steps)
- Comprehensive report with recommendations
- Detailed gap analysis
- Estimated time: 2-4 hours

**Comprehensive Evaluation:**
- All steps including quality assessment
- Deep dependency analysis
- Detailed quality metrics
- Estimated time: 4-8 hours

### Tips for Efficient Evaluation

1. **Automate where possible:** Use scripts to scan directories, count files, extract references
2. **Focus on critical paths:** Prioritize evaluating procedures in critical workflows
3. **Incremental updates:** Update evaluation incrementally rather than starting from scratch
4. **Use previous evaluations:** Compare against previous evaluation reports to track progress

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Temporary Procedure - For evaluation purposes
**Owner:** Procedures Library Development Team
