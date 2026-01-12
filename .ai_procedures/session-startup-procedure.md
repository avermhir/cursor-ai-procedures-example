# Session Startup Procedure

## Purpose

This procedure defines how to start a new work session to ensure rapid continuation of work from the previous session. It ensures all context is loaded, current state is understood, and work can resume efficiently.

**This procedure should be executed at the start of each new work session.**

---

## Operating Principles

### Goals
- Load all context from previous session
- Understand current project state
- Identify what to work on next
- Ensure all rules and conventions are understood
- Enable rapid continuation of work

### Output
- Loaded context from previous session
- Understanding of current state
- Clear next steps
- Ready confirmation with startup summary

---

## Phase 0 — Validate Wrapup Was Executed (MANDATORY)

**⚠️ This phase must be completed BEFORE reading wrapup.md to detect if wrapup procedure wasn't run.**

### 0.1 Check Wrapup Document Existence and Recency

**Check if wrapup.md exists and is recent:**

- **File Existence:**
  - Does `wrapup.md` exist in project root?
  - If missing: **⚠️ WRAPUP NOT RUN** - Proceed to Phase 0.4

- **File Recency:**
  - Check file modification date
  - If file is older than expected (e.g., > 7 days): **⚠️ WRAPUP MAY BE STALE**
  - If file was modified today: Likely from last session ✅

**Output:**
- wrapup.md exists: Yes/No
- Last modified date
- Recency assessment

---

### 0.2 Validate Wrapup Document Completeness

**Check if wrapup.md has required sections:**

**Required Sections (from wrapup procedure):**
- [ ] Session Summary
- [ ] Completed Work
- [ ] In-Progress Work
- [ ] Current Branch Status
- [ ] Open PRs
- [ ] Near-Term TODOs
- [ ] Important Notes
- [ ] Questions/Decisions Needed (optional but recommended)
- [ ] Related Jira Tickets (optional but recommended)

**If sections are missing:**
- **⚠️ WRAPUP INCOMPLETE** - Some sections missing
- Note which sections are missing
- Proceed to Phase 0.4

**Output:**
- List of required sections found
- List of missing sections
- Completeness assessment

---

### 0.3 Cross-Validate with Current State

**Compare wrapup.md claims with actual current state:**

- **Git Status Validation:**
  - Check current git status
  - Compare with wrapup's "Current Branch Status"
  - **If mismatch:** wrapup may be outdated or incomplete
  - **If uncommitted changes exist:** Should have been documented in wrapup

- **File Modification Check:**
  - Check for recently modified files (since last commit)
  - Check for untracked files
  - **If files modified but not in wrapup:** Work may not have been documented

- **Todo List Validation:**
  - Check current todo list
  - Compare with wrapup's "Near-Term TODOs"
  - **If todos don't match:** wrapup may be outdated

- **Branch Validation:**
  - Check current branch
  - Compare with wrapup's stated branch
  - **If different:** May indicate work continued after wrapup

**Output:**
- Git status comparison
- File modification check results
- Todo list comparison
- Branch comparison
- Validation assessment

---

### 0.4 Handle Missing or Incomplete Wrapup

**If wrapup wasn't run or is incomplete:**

**Option A: Wrapup Missing Entirely**
- **Action:** Document current state from scratch
- **Steps:**
  1. Check git log for recent commits
  2. Check git status for uncommitted changes
  3. Review recent file modifications
  4. Review current todo list
  5. Check open PRs
  6. Document findings as "Reconstructed State"
  7. **⚠️ WARNING:** Proceeding without wrapup - state may be incomplete

**Option B: Wrapup Incomplete**
- **Action:** Supplement wrapup with current state check
- **Steps:**
  1. Read existing wrapup sections
  2. Validate each section against current state
  3. Document discrepancies
  4. Add missing information
  5. **⚠️ WARNING:** Wrapup incomplete - supplementing with current state

**Option C: Wrapup Stale**
- **Action:** Validate and update wrapup
- **Steps:**
  1. Read wrapup
  2. Compare with current state
  3. Document what changed since wrapup
  4. Note any discrepancies
  5. **⚠️ WARNING:** Wrapup may be stale - validating against current state

**Output:**
- Wrapup status (Missing/Incomplete/Stale/Complete)
- Actions taken
- Warnings issued
- Reconstructed or supplemented information

---

### 0.5 Document Wrapup Validation Results

**Create validation summary:**

- **Wrapup Status:**
  - ✅ Complete and recent
  - ⚠️ Incomplete (missing sections)
  - ⚠️ Stale (old date)
  - ❌ Missing (not found)

- **Validation Issues:**
  - List any discrepancies found
  - List any missing information
  - List any warnings

- **Confidence Level:**
  - High: wrapup complete and matches current state
  - Medium: wrapup exists but has discrepancies
  - Low: wrapup missing or very incomplete

**Output:**
- Validation summary
- Confidence level
- List of issues found

---

## Phase 1 — Review Session Context

### 1.1 Read Wrapup Document

**MANDATORY:** Read the `wrapup.md` file in the project root:

**⚠️ IMPORTANT:** If Phase 0 detected issues, read wrapup with caution and cross-reference with current state.

- **Session Summary:**
  - What was the focus of the last session?
  - What was accomplished?
  - What themes emerged?

- **Completed Work:**
  - What work was finished?
  - What files were modified?
  - What tickets were created/closed?

- **In-Progress Work:**
  - What work was started but not completed?
  - What is the current status?
  - What blockers exist?

- **Current Branch Status:**
  - What branch was active?
  - Are there uncommitted changes?
  - Are there untracked files?

- **Open PRs:**
  - What PRs are open?
  - What is their status?
  - Do any need attention?

- **Near-Term TODOs:**
  - What are the immediate next steps?
  - What are the priorities?
  - What are the dependencies?

- **Important Notes:**
  - Any warnings or cautions?
  - Any decisions made?
  - Any context needed?

- **Questions/Decisions Needed:**
  - What questions are pending?
  - What decisions are needed?
  - What stakeholder input is required?

**Output:**
- Understanding of previous session
- List of completed work
- List of in-progress work
- List of next steps
- **Note:** If Phase 0 found issues, supplement wrapup information with current state validation

---

### 1.2 Read Additional Context Files

Read all relevant documents in `.ai_working/` folder:

- **`lessons_learned.md`** (if exists):
  - Accumulated knowledge
  - Best practices
  - Common mistakes to avoid

- **`current_focus.md`** (if exists):
  - Active tasks
  - Current priorities
  - Focus areas

- **Other Context Files:**
  - Any other relevant documentation
  - Investigation notes
  - Planning documents
  - Reference materials

**Output:**
- Loaded context from all relevant files
- Understanding of accumulated knowledge
- Understanding of current focus

---

### 1.3 Review Todo List

Review the current todo list:

- **Completed Items:**
  - Are there items marked complete that match wrapup?
  - Are there items that should be marked complete?

- **In-Progress Items:**
  - What items are in progress?
  - Do they match the in-progress work from wrapup?

- **Pending Items:**
  - What items are pending?
  - Are priorities accurate?
  - Are dependencies clear?

- **Missing Items:**
  - Are there tasks from wrapup not in todos?
  - Should new todos be created?

**Output:**
- Reviewed todo list
- Updated todos if needed
- Clear understanding of task status

---

## Phase 2 — Validate Working Directory

### 2.1 Review .ai_working/ Folder Contents

List and review all files in `.ai_working/` folder:

- **Documentation Files:**
  - Keep all documentation
  - Keep all context files
  - Keep all reference materials

- **Temporary Files:**
  - Identify files with `.tmp`, `.temp`, or similar extensions
  - Identify draft files marked as "scratch" or "working"
  - Identify files explicitly marked for deletion in wrapup

**Output:**
- List of files in `.ai_working/`
- Identification of temporary files
- Identification of files to preserve

---

### 2.2 Clean Up Temporary Files

Remove temporary files (if any):

- **Files to Remove:**
  - Files with `.tmp`, `.temp`, or similar extensions
  - Draft files marked as "scratch" or "working"
  - Files explicitly marked for deletion in wrapup notes

- **Files to Preserve:**
  - All documentation files
  - All context files
  - All reference files
  - All planning documents

**Output:**
- Cleaned `.ai_working/` folder
- Temporary files removed
- Important files preserved

---

## Phase 3 — Load Project Configuration

### 3.1 Read All Rules

**MANDATORY:** Read and confirm understanding of ALL files in `.cursor/rules/`:

- **List all rule files:**
  - Read each rule file
  - Understand the purpose of each rule
  - Note any rule conflicts or ambiguities

- **Rule Categories:**
  - Always-applied rules
  - Requestable rules
  - Procedure rules
  - Workflow rules

**Output:**
- List of all rules loaded
- Understanding of each rule
- Notes on any conflicts or ambiguities

---

### 3.2 Verify Project Conventions

Verify understanding of project-specific conventions:

- **Code Style:**
  - Formatting standards
  - Naming conventions
  - Code organization

- **Architecture:**
  - Patterns and principles
  - Component structure
  - File organization

- **Testing:**
  - Testing requirements
  - Testing patterns
  - Test organization

- **Documentation:**
  - Documentation standards
  - Documentation format
  - Documentation location

**Output:**
- Confirmed understanding of conventions
- Notes on any unclear conventions
- Questions about conventions (if any)

---

### 3.3 Note Rule Conflicts or Ambiguities

Document any issues with rules:

- **Conflicts:**
  - Are there conflicting rules?
  - How should conflicts be resolved?
  - What needs clarification?

- **Ambiguities:**
  - Are there ambiguous rules?
  - What needs clarification?
  - What questions exist?

**Output:**
- List of rule conflicts (if any)
- List of ambiguities (if any)
- Questions for clarification

---

## Phase 4 — Establish Current State

### 4.1 Validate and Identify Last Completed Task

**If Phase 0 found wrapup issues, validate from current state instead of relying solely on wrapup:**

**Primary Source (if wrapup is complete):**
- From wrapup notes, identify last completed task

**Fallback Source (if wrapup is incomplete/missing):**
- Check git log for most recent commits
- Check recent file modifications
- Review todo list for recently completed items
- Check Jira for recently closed tickets

**Cross-Validation:**
- Compare wrapup claims with git log
- Compare wrapup claims with file modifications
- Compare wrapup claims with todo list
- **If discrepancies found:** Use current state as source of truth

**Output:**
- Last completed task identified
- Source of information (wrapup vs current state)
- Any discrepancies noted

- **Last Completed Work:**
  - What was the last thing completed?
  - What was the context?
  - What was the outcome?

- **Completion Status:**
  - Was it fully completed?
  - Are there follow-up tasks?
  - Are there related items?

**Output:**
- Last completed task identified
- Understanding of completion status
- List of follow-up tasks (if any)

---

### 4.2 Review Blocked Items

Identify any blocked items:

- **Blockers:**
  - What is blocked?
  - Why is it blocked?
  - What is needed to unblock?

- **Dependencies:**
  - What work is waiting on other work?
  - What needs to happen first?
  - What is the dependency chain?

**Output:**
- List of blocked items
- Understanding of blockers
- Understanding of dependencies

---

### 4.3 Check for Urgent Issues

Identify any urgent items:

- **Warnings from Previous Session:**
  - Are there warnings in wrapup?
  - What needs immediate attention?
  - What are the risks?

- **Urgent TODOs:**
  - Are there high-priority items?
  - Are there time-sensitive items?
  - Are there critical blockers?

**Output:**
- List of urgent issues
- Understanding of warnings
- Understanding of priorities

---

### 4.4 Understand Current Context

Understand the broader context:

- **Sprint/Milestone Context:**
  - What sprint/milestone are we in?
  - What are the goals?
  - What are the deadlines?

- **Project Context:**
  - What is the current project phase?
  - What are the current priorities?
  - What are the current challenges?

**Output:**
- Understanding of sprint/milestone context
- Understanding of project context
- Understanding of current priorities

---

### 4.5 Check Git Status and Validate Against Wrapup

Verify current git state and compare with wrapup:

- **Current Branch:**
  - What branch are we on?
  - Is it the correct branch?
  - Is it up to date?
  - **Compare with wrapup:** Does it match wrapup's stated branch?

- **Git Status:**
  - Are there uncommitted changes?
  - Are there untracked files?
  - Are there merge conflicts?
  - **Compare with wrapup:** Were these changes documented in wrapup?
  - **⚠️ If uncommitted changes exist but not in wrapup:** Wrapup may be incomplete

- **Recent Commits:**
  - Check git log for commits since wrapup date
  - **If commits exist after wrapup date:** Work may have continued after wrapup

- **Remote Status:**
  - Are there unpushed commits?
  - Is local branch in sync with remote?
  - Are there remote changes to pull?

**Output:**
- Current git state
- List of uncommitted changes (if any)
- List of untracked files (if any)
- Comparison with wrapup
- Notes on any discrepancies
- Notes on any git issues

---

## Phase 5 — Ready Confirmation

### 5.1 Create Startup Summary

After completing phases 0-4, provide a brief startup summary:

**Required Elements:**

1. **Wrapup Validation Status:**
   - Was wrapup found and complete?
   - Were any issues detected?
   - What is the confidence level in wrapup information?
   - **⚠️ If issues found:** Note that information may be incomplete

2. **Key Points from Previous Session:**
   - What was accomplished? (from wrapup or reconstructed)
   - What was the focus? (from wrapup or reconstructed)
   - What are the key takeaways?
   - **Source:** wrapup.md or reconstructed from current state

3. **Current Focus Areas:**
   - What should we focus on now?
   - What are the priorities?
   - What are the next steps?
   - **Source:** wrapup.md or current state analysis

4. **Important Warnings or Blockers:**
   - Are there any warnings?
   - Are there any blockers?
   - What needs attention?
   - **⚠️ If wrapup was missing/incomplete:** Note that state was reconstructed

5. **Confirmation:**
   - All rules are loaded and active
   - Context is understood (with confidence level noted)
   - Ready to proceed (with any caveats about incomplete information)

**Format:**
- Brief (2-3 paragraphs)
- Clear and concise
- Focus on what's important
- Highlight any urgent items

---

### 5.2 Verify Readiness

Before confirming readiness, verify:

- **Phase 0: Wrapup Validation:**
  - [ ] Wrapup document existence checked
  - [ ] Wrapup completeness validated
  - [ ] Current state cross-validated
  - [ ] Wrapup issues handled (if any)
  - [ ] Validation results documented

- **Context Loaded:**
  - [ ] Wrapup document read and understood (with confidence level)
  - [ ] Additional context files read
  - [ ] Todo list reviewed
  - [ ] **If wrapup incomplete:** Current state reconstructed

- **Working Directory:**
  - [ ] `.ai_working/` folder reviewed
  - [ ] Temporary files cleaned (if any)
  - [ ] Important files preserved

- **Project Configuration:**
  - [ ] All rules read and understood
  - [ ] Project conventions verified
  - [ ] Rule conflicts/ambiguities noted

- **Current State:**
  - [ ] Last completed task identified (with source noted)
  - [ ] Blocked items reviewed
  - [ ] Urgent issues identified
  - [ ] Context understood (with confidence level)
  - [ ] Git status checked and validated

**Output:**
- Ready confirmation
- Startup summary (with wrapup validation status)
- Clear next steps
- Confidence level in context
- Any warnings about incomplete information

---

## Procedure Checklist

At session start, complete:

- [ ] **Phase 0: Validate Wrapup Was Executed (MANDATORY)**
  - [ ] Check wrapup.md existence and recency
  - [ ] Validate wrapup document completeness
  - [ ] Cross-validate with current state
  - [ ] Handle missing/incomplete wrapup (if needed)
  - [ ] Document validation results

- [ ] Phase 1: Review Session Context
  - [ ] Read wrapup.md (with validation context)
  - [ ] Read additional context files
  - [ ] Review todo list

- [ ] Phase 2: Validate Working Directory
  - [ ] Review `.ai_working/` folder contents
  - [ ] Clean up temporary files (if any)

- [ ] Phase 3: Load Project Configuration
  - [ ] Read all rules in `.cursor/rules/`
  - [ ] Verify project conventions
  - [ ] Note rule conflicts or ambiguities

- [ ] Phase 4: Establish Current State
  - [ ] Identify last completed task
  - [ ] Review blocked items
  - [ ] Check for urgent issues
  - [ ] Understand current context
  - [ ] Check git status

- [ ] Phase 5: Ready Confirmation
  - [ ] Create startup summary
  - [ ] Verify readiness
  - [ ] Confirm ready to proceed

---

## Communication Style

When providing startup summary, follow communication style guidelines:

- **Start with appropriate emoji:**
  - 🚀 - Starting tasks, deployments, launches
  - ✅ - Confirmations, completions, success
  - 🔧 - Bug fixes, maintenance, technical work
  - 💡 - Ideas, suggestions, insights
  - ⚠️ - Warnings, cautions, important notes
  - 🐛 - Bug reports, issues found
  - 📝 - Documentation, explanations
  - 🎯 - Focus areas, goals, priorities
  - 🤔 - Questions, uncertainties, need clarification
  - 🎉 - Celebrations, milestones achieved
  - 🔍 - Investigation, analysis, research
  - 💾 - Database, data, storage related
  - 🌐 - API, networking, web related
  - 🎨 - UI/UX, design, frontend work
  - 📊 - Analytics, metrics, reporting

- **Use judgment** to select the most contextually appropriate emoji
- **Keep it to one emoji** at the start of the response

---

## Handling Missing Information

### If Wrapup Was Not Run

**This is now handled in Phase 0. Key actions:**

- **Wrapup Missing:**
  - Reconstruct state from git log, file modifications, todos
  - Document reconstructed state in startup summary
  - **⚠️ WARNING:** State reconstructed - may be incomplete
  - Recommend running wrapup procedure now

- **Wrapup Incomplete:**
  - Read existing sections
  - Supplement with current state validation
  - Document discrepancies
  - **⚠️ WARNING:** Wrapup incomplete - supplementing with current state

- **Wrapup Stale:**
  - Read wrapup but validate against current state
  - Document what changed since wrapup
  - Note discrepancies
  - **⚠️ WARNING:** Wrapup may be stale - validating against current state

- **Context Files Missing:**
  - Note which files are missing
  - Continue with available context
  - Proceed with caution

- **Rules Missing:**
  - Note which rules are missing
  - Continue with available rules
  - Ask for clarification if needed

### If Project State Is Unclear

- **Ask Clarifying Questions:**
  - What was the last thing worked on?
  - What is the current priority?
  - What should we focus on?

- **Don't Assume:**
  - Don't guess at project state
  - Don't proceed with unclear context
  - Ask for clarification before proceeding

---

## Example Startup Summary

### Example 1: Wrapup Complete

```
🚀 Session Startup Complete

## Wrapup Validation Status
✅ Wrapup.md found and complete
✅ All required sections present
✅ Current state matches wrapup claims
✅ High confidence in context

## Key Points from Previous Session
- Created comprehensive UX improvements plan for 30+ user testing issues
- Created Jira epic DT-148 for tracking
- Set up procedure workflow with mandatory Jira ticket checks
- Created reference documents for observations, conclusions, and facts

## Current Focus Areas
- Phase 1 UX issues: 5 critical navigation/discovery issues ready for evaluation
- Need to check for existing Jira tickets before creating new ones
- Ready to begin User Feedback Investigation Procedure for Phase 1 issues

## Important Warnings
- All issues must complete Phase 0 (existing ticket check) before evaluation
- Some issues may not meet "small change" criteria and will go to Decision Log
- Dark mode/theming is a large effort and may need separate epic

## Confirmation
✅ All rules loaded and active
✅ Context understood from wrapup.md (high confidence)
✅ Ready to proceed with Phase 1 issue evaluation
```

### Example 2: Wrapup Missing/Incomplete

```
⚠️ Session Startup Complete (with warnings)

## Wrapup Validation Status
❌ Wrapup.md not found or incomplete
⚠️ State reconstructed from current git status and file modifications
⚠️ Medium confidence in context - some information may be missing

## Reconstructed State
- Last commit: [commit hash] - [commit message]
- Current branch: feat/ux-improvements
- Uncommitted changes: [list]
- Recent file modifications: [list]
- Current todos: [summary]

## Key Points (Reconstructed)
- Based on git log and file modifications, appears work was done on UX improvements
- Created files suggest: UX plan, observations, conclusions documents
- Branch name suggests: UX improvements feature work

## Current Focus Areas (Inferred)
- Need to validate actual current state
- Should review recent commits and changes
- May need to reconstruct work context

## Important Warnings
⚠️ **WRAPUP NOT RUN** - Proceeding with reconstructed state
⚠️ Some context may be missing or inaccurate
⚠️ Recommend reviewing recent git history and file changes
⚠️ Consider running wrapup procedure now to document current state

## Confirmation
✅ All rules loaded and active
⚠️ Context reconstructed from current state (medium confidence)
⚠️ Proceed with caution - verify information as needed
```

---

## Ownership & Review

- **Owner:** AI Agent / Developer
- **Frequency:** Start of each work session
- **Trigger:** Automatic at session start, or manually with "run startup procedure"
- **Review:** As needed when startup process changes
- **Last Updated:** 2025-01-XX

