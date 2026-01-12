# Session Wrapup Procedure

## Purpose

This procedure defines how to wrap up a work session to enable rapid continuation when the next session begins. It ensures all work is documented, todos are reviewed, and context is preserved.

**This procedure should be executed at the end of each work session.**

---

## Operating Principles

### Goals
- Enable rapid continuation of work in next session
- Preserve context and decisions made
- Document completed work and progress
- Review and update todo list
- Identify blockers and next steps

### Output
- Updated `wrapup.md` document in `.ai_working/` folder
- Reviewed and updated todo list
- Clear handoff notes for next session

---

## Phase 1 — Review Current Session Activity

### 1.1 Identify Completed Work

Document all work completed during this session:

- **Code Changes:**
  - Files modified
  - Features implemented
  - Bugs fixed
  - Refactoring done

- **Documentation:**
  - Documents created or updated
  - Plans created
  - Procedures written
  - Decisions documented

- **Jira Tickets:**
  - Tickets created
  - Tickets updated
  - Tickets closed/resolved

- **Git Activity:**
  - Commits made
  - Branches created
  - PRs created/merged
  - Branches synced

- **Other Activities:**
  - Research conducted
  - Meetings attended
  - Decisions made
  - Blockers encountered

**Output:**
- List of completed work items
- Brief description of each item
- Any relevant links or references

---

### 1.2 Identify In-Progress Work

Document work that was started but not completed:

- **Partially Complete Tasks:**
  - What was done
  - What remains
  - Current state/status

- **Blocked Items:**
  - What is blocked
  - Why it's blocked
  - What's needed to unblock

- **Deferred Items:**
  - What was deferred
  - Why it was deferred
  - When to revisit

**Output:**
- List of in-progress items
- Current status of each
- Blockers or dependencies

---

### 1.3 Review Todo List

**MANDATORY:** Review the current todo list and ensure it's accurate:

- **Check Completed Items:**
  - Mark completed todos as done
  - Remove items that are no longer relevant
  - Update status of in-progress items

- **Check for Missing Items:**
  - Are there tasks completed that aren't in todos?
  - Are there new tasks identified that need todos?
  - Are there follow-up tasks from completed work?

- **Check Priorities:**
  - Are priorities still accurate?
  - Have priorities changed based on new information?
  - Are there urgent items that need attention?

- **Check Dependencies:**
  - Are there blocked items?
  - Are dependencies clear?
  - Are there items waiting on other work?

**Output:**
- Updated todo list
- Notes on any changes made
- Items added or removed

---

## Phase 2 — Document Session Context

### 2.1 Session Summary

Create a brief summary of the session:

- **Focus Areas:**
  - What was the main focus of this session?
  - What themes or patterns emerged?

- **Key Decisions:**
  - What decisions were made?
  - What rationale was used?
  - Are decisions documented?

- **Important Notes:**
  - Any critical information discovered
  - Any warnings or cautions
  - Any assumptions made

**Output:**
- Brief session summary (2-3 sentences)
- Key decisions list
- Important notes

---

### 2.2 Current State

Document the current state of the project:

- **Branch Status:**
  - Current branch
  - Branch status (clean, uncommitted changes, etc.)
  - Any uncommitted work

- **Git Status:**
  - Uncommitted changes
  - Untracked files
  - Staged changes

- **Open PRs:**
  - List of open PRs
  - Status of each
  - Any PRs needing attention

- **Jira Tickets:**
  - Tickets in progress
  - Tickets ready for work
  - Tickets blocked

**Output:**
- Current state snapshot
- Any warnings about uncommitted work
- Status of active work items

---

### 2.3 Near-Term TODOs

Identify and document near-term tasks:

- **Immediate Next Steps:**
  - What should be done first in next session?
  - What are the highest priority items?
  - What are the quick wins?

- **This Week's Goals:**
  - What should be accomplished this week?
  - What are the milestones?
  - What are the deadlines?

- **Dependencies:**
  - What work is waiting on other work?
  - What needs to be unblocked?
  - What needs stakeholder input?

**Output:**
- Prioritized list of near-term todos
- Clear next steps
- Dependencies and blockers

---

## Phase 3 — Create Wrapup Document

### 3.1 Update wrapup.md

Update the `wrapup.md` file in the `.ai_working/` folder with:

**Required Sections:**

1. **Session Summary**
   - Brief overview of session focus
   - Date of session

2. **Completed Work**
   - Organized by category (Code, Documentation, Jira, Git, etc.)
   - Brief description of each item
   - Links to PRs, tickets, or files

3. **In-Progress Work**
   - Current status
   - What remains
   - Blockers or dependencies

4. **Current Branch Status**
   - Current branch name
   - Git status
   - Any uncommitted changes

5. **Open PRs**
   - List with status
   - Any needing attention
   - Any merge conflicts

6. **Near-Term TODOs**
   - Prioritized list
   - Next session priorities
   - Dependencies

7. **Important Notes**
   - Warnings or cautions
   - Decisions made
   - Context for next session

8. **Questions/Decisions Needed**
   - Open questions
   - Decisions pending
   - Stakeholder input needed

9. **Related Jira Tickets**
   - Tickets created this session
   - Tickets in progress
   - Tickets ready for work

**Format:**
- Use clear headings
- Use checkboxes for todos
- Use emoji for status (✅ completed, ⏳ in progress, ⚠️ warning, etc.)
- Include links to relevant resources

---

### 3.2 Review Wrapup Document

Before finalizing, review the wrapup document:

- **Completeness:**
  - [ ] All completed work documented
  - [ ] All in-progress work documented
  - [ ] All todos reviewed
  - [ ] Current state accurate

- **Clarity:**
  - [ ] Next steps are clear
  - [ ] Dependencies are clear
  - [ ] Blockers are identified
  - [ ] Context is sufficient for next session

- **Accuracy:**
  - [ ] Git status is correct
  - [ ] Branch information is accurate
  - [ ] PR status is current
  - [ ] Jira ticket references are correct

**Output:**
- Completed wrapup.md document
- Verification that all information is accurate

---

## Phase 4 — Final Checks

### 4.1 Verify Git Status

Check git status and document:

- **Uncommitted Changes:**
  - Are there uncommitted changes?
  - Should they be committed?
  - Are they documented in wrapup?

- **Untracked Files:**
  - Are there untracked files?
  - Should they be added?
  - Are they temporary or permanent?

- **Branch Status:**
  - Is current branch up to date?
  - Are there unpushed commits?
  - Are there merge conflicts?

**Output:**
- Git status documented in wrapup
- Notes on any uncommitted work
- Warnings about unpushed commits

---

### 4.2 Verify Todo List

Final verification of todo list:

- **All Completed Items Marked:**
  - [ ] All completed work has corresponding completed todos
  - [ ] No completed work missing from todos

- **All In-Progress Items Updated:**
  - [ ] Status reflects current state
  - [ ] Progress is documented

- **All New Items Added:**
  - [ ] New tasks identified have todos
  - [ ] Follow-up tasks have todos

- **Priorities Are Accurate:**
  - [ ] High priority items are marked
  - [ ] Dependencies are clear
  - [ ] Blockers are identified

**Output:**
- Verified todo list
- Notes on any discrepancies
- Confirmation that todos match work done

---

## Phase 5 — Handoff Notes

### 5.1 Create Handoff Summary

Create a brief handoff summary for the next session:

**Include:**
- What was accomplished
- What's next
- Any critical information
- Any warnings

**Format:**
- Brief (2-3 paragraphs)
- Focus on what's important for next session
- Highlight any urgent items

---

### 5.2 Document Quick Start Guide

If helpful, create a quick start guide:

- **How to Resume:**
  - What branch to be on
  - What to check first
  - What to do first

- **Key Files:**
  - Important files modified
  - Important files to review
  - Important documentation

- **Key Context:**
  - Important decisions made
  - Important information discovered
  - Important warnings

**Output:**
- Quick start guide (if needed)
- Clear instructions for next session

---

## Procedure Checklist

Before ending session:

- [ ] Phase 1: Review current session activity
  - [ ] Identify completed work
  - [ ] Identify in-progress work
  - [ ] Review todo list

- [ ] Phase 2: Document session context
  - [ ] Create session summary
  - [ ] Document current state
  - [ ] Identify near-term todos

- [ ] Phase 3: Create wrapup document
  - [ ] Update wrapup.md
  - [ ] Review wrapup document

- [ ] Phase 4: Final checks
  - [ ] Verify git status
  - [ ] Verify todo list

- [ ] Phase 5: Handoff notes
  - [ ] Create handoff summary
  - [ ] Document quick start guide (if needed)

---

## Wrapup Document Template

```markdown
# Session Wrapup - [DATE]

## Session Summary

[Brief 2-3 sentence summary of session focus]

## Completed Work

### 1. [Category Name]
- ✅ [Item description]
  - [Details or links]
- ✅ [Item description]

### 2. [Category Name]
- ✅ [Item description]

## In-Progress Work

### [Item Name]
- ⏳ Current status: [status]
- Remaining: [what's left]
- Blockers: [if any]

## Current Branch Status

- **Current branch:** [branch name]
- **Git status:** [clean / uncommitted changes / etc.]
- **Uncommitted changes:** [list or "none"]
- **Untracked files:** [list or "none"]

## Open PRs

1. **PR #[number]** - [Title]
   - Status: [Open / Review / etc.]
   - Notes: [any notes]

## Near-Term TODOs

### High Priority
1. [ ] [Task description]
2. [ ] [Task description]

### Medium Priority
1. [ ] [Task description]

## Important Notes

- [Important note 1]
- [Important note 2]

## Questions/Decisions Needed

1. [Question or decision needed]
2. [Question or decision needed]

## Related Jira Tickets

- **Created:** [DT-XXX, DT-YYY]
- **In Progress:** [DT-XXX]
- **Ready for Work:** [DT-XXX]
```

---

## Ownership & Review

- **Owner:** AI Agent / Developer
- **Frequency:** End of each work session
- **Review:** Next session startup procedure
- **Last Updated:** 2025-01-XX



