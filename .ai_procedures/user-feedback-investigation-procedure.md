# AI-Only Issue Evaluation & Jira Ticket Procedure

## Purpose

This procedure defines how an AI agent (e.g., Cursor LLM) evaluates reported issues and determines whether they warrant a Jira ticket.

**This procedure explicitly ends at issue definition.**  
It does **not** include implementation, testing, estimation, or delivery planning.

### Valid Outputs
- ✅ One Jira ticket (if a change is recommended)
- 📄 One Working Decision Log entry (if no change is recommended)

No other outputs are permitted.

---

## Operating Constraints (MANDATORY)

The AI **must** adhere to the following constraints:

### The AI MUST NOT:
- Modify code
- Propose implementation steps
- Design tests or rollout plans
- Estimate effort or story points
- Refactor or clean up unrelated areas
- Introduce new features or workflows

### The AI MUST:
- Interpret and clarify the issue
- Reference concrete evidence (code paths, UX, screenshots, logs)
- Prefer the smallest possible change
- Explicitly state unknowns or missing information
- Stop once the Jira ticket or decision log entry is complete

If required information is missing, the AI must state:
> **"Insufficient information to proceed"**  
and list what is needed.

---

## Phase 0 — Existing Ticket Check (MANDATORY)

**⚠️ This phase must be completed BEFORE proceeding to Phase 1.**

### 0.1 Search for Existing Tickets

Before evaluating an issue, **always check if a Jira ticket already exists** for this or a similar issue.

**Search Strategy:**
1. Extract key terms from the issue description
2. Search Jira using multiple keyword combinations
3. Check related epics (e.g., DT-148 for UX improvements)
4. Review recent tickets in the same component/area
5. Check closed/resolved tickets (may have been addressed)

**Search Methods:**
- Use Jira MCP tools: `jira_search_issues` with JQL queries
- Search by summary keywords
- Search by component/area
- Search by related epic
- Review ticket descriptions for similar issues

**Example JQL Searches:**
```jql
# Search by keywords
project = DT AND (summary ~ "expand menu" OR summary ~ "sidebar toggle" OR summary ~ "collapse") AND status != Done

# Search by component
project = DT AND component = "Navigation" AND status != Done

# Search related epic
project = DT AND "Epic Link" = DT-148 AND status != Done

# Search recent tickets
project = DT AND created >= -30d AND (summary ~ "settings" OR summary ~ "gear")
```

### 0.2 Evaluate Search Results

**If Existing Ticket Found:**
- ✅ Note the ticket key (e.g., DT-149)
- ✅ Review ticket status and description
- ✅ Determine if ticket fully addresses the current issue
- ✅ If ticket addresses issue: **STOP PROCEDURE** - Link to existing ticket, do not create duplicate
- ✅ If ticket partially addresses issue: Update existing ticket with new information
- ✅ Document decision: "Issue already tracked in [TICKET-KEY]"

**If No Ticket Found:**
- ✅ Document search terms used
- ✅ Note date of search
- ✅ Proceed to Phase 1

**If Uncertain:**
- ✅ Document what was found
- ✅ Note why it's unclear if ticket matches
- ✅ Proceed to Phase 1 with note about potential duplicate
- ✅ In Phase 4, explicitly address potential duplicate

### 0.3 Output

**Document:**
- Search terms used
- Date of search
- Tickets found (if any)
- Decision: Proceed or Stop (link to existing ticket)

**If existing ticket found and matches:**
- **STOP PROCEDURE HERE**
- Do not proceed to Phase 1
- Output: Link to existing ticket with brief note

**If no ticket found or ticket doesn't match:**
- Proceed to Phase 1

---

## Phase 1 — Issue Interpretation

### 1.1 Restate the Issue

- Rewrite the issue in clear, neutral language
- Remove emotional, speculative, or ambiguous phrasing
- Identify what the user is actually struggling with

**Output**
- Interpreted issue statement
- List of ambiguities or open questions

---

### 1.2 Classify the Issue

Select **one primary category** (secondary optional):

- Bug
- UX confusion
- Usability friction
- Visual / design inconsistency
- Documentation gap
- Edge case
- Technical debt signal
- Out-of-scope request

---

## Phase 2 — Current State Evaluation

### 2.1 Application Context

Document the current state using **verifiable evidence**:

- Screens, flows, or UX surfaces involved
- Components or modules involved
- Existing design patterns or conventions
- Related documentation or prior decisions

**Evidence may include:**
- File paths
- Component names
- Screen descriptions or screenshots
- Existing tickets or decision logs

If evidence cannot be located, state this explicitly.

---

### 2.2 Architecture Touchpoints (High-Level Only)

Identify **which system areas are involved**, without proposing changes:

- UI only
- Client-side logic
- Backend interaction
- Data display or state management

⚠️ **Do not describe how changes would be implemented.**

---

## Phase 3 — UX & Product Alignment

### 3.1 UX Direction Consistency

Evaluate whether a potential change would:

- Match existing interaction patterns
- Match existing copy and tone
- Preserve current user mental models

Document:
- Why this aligns or conflicts
- Which existing patterns it follows

---

### 3.2 “Small Change” Validation

This procedure applies **only if all are true**:

- No new workflows or user journeys
- No data model changes
- No authentication or permission changes
- No cross-system redesign
- No net-new feature creation

If any condition fails → **Reject or escalate (No Jira)**

---

## Phase 4 — Jira Qualification Gate

A Jira ticket may be created **only if all are true**:

- The issue is evidence-backed
- **The issue is not already resolved or tracked** (verified in Phase 0)
- **No duplicate ticket exists** (verified in Phase 0)
- The issue cannot be resolved by documentation alone
- The issue aligns with current UX direction
- The issue represents a contained, non-strategic change

**Note:** The check for existing tickets should have been completed in Phase 0. If Phase 0 was skipped or incomplete, perform the check now before proceeding.

If any condition fails → document in the Working Decision Log and **do not create a Jira ticket**.

---

## Phase 5 — Recommendation (Pre-Solution)

### 5.1 Options Considered

The AI must consider **at least two options**, including “Do Nothing”:

- **Option A** — Minimal change
- **Option B** — Alternative framing or adjustment
- **Option C** — Do Nothing

For each option, assess:
- User impact (High / Medium / Low)
- UX consistency (Yes / Partial / No)
- Risk level (Low / Medium / High)

---

### 5.2 Recommendation

Select **one**:
- Recommend Jira ticket
- Recommend no change

Provide:
- Clear rationale
- Explicit non-goals
- Assumptions made

---

## Phase 6 — Output (STOP POINT)

### If Existing Ticket Found (Phase 0)
➡️ **STOP PROCEDURE** - Link to existing ticket, do not create duplicate.

### If Change Is Recommended (No Existing Ticket)
➡️ Create **one Jira ticket** using the approved Jira template.

### If No Change Is Recommended
➡️ Add an entry to the **Working Decision Log**.

**The procedure ends here.  
No implementation work may be proposed beyond this point.**

---

# Jira Ticket Template (Cursor-Tuned)

> **IMPORTANT:**  
> This ticket describes intent and scope, not implementation.

## 🧭 Summary
Brief description of the issue and intended outcome.

---

## 📌 Problem Statement
Describe the current behavior from the user’s perspective.

- What is happening
- Where it occurs
- Why it causes confusion or friction

---

## 🔍 Evidence & Context
Concrete references supporting the issue:

- Screens or components involved
- Relevant file paths or modules
- Screenshots or descriptions
- Related tickets or decisions

---

## 🧠 Interpretation
Clarified understanding of what the issue actually represents.

---

## 🎯 UX / Product Alignment
Explain how the proposed change:
- Aligns with existing UX patterns
- Maintains current interaction models
- Avoids introducing new workflows

---

## 📏 Scope Confirmation
Explicit confirmation:

- Small, contained change
- No new features
- No data model changes
- No auth or permission changes
- No cross-system impact

---

## ✅ Acceptance Intent (User-Visible Only)
Describe success **without implementation details**:

- What the user understands or can do afterward
- What confusion or friction is removed
- What remains unchanged

---

## 🚫 Non-Goals
List what this ticket does **not** address.

---

## ⚠️ Risks & Open Questions
- Known unknowns
- Assumptions made
- Clarifications needed before work begins

---

## 🗂 Recommendation Rationale
Why this issue merits a Jira ticket now.

---

# Working Decision Log Entry (No Jira)

## For Existing Ticket Found
Issue:
Existing Ticket: [TICKET-KEY]
Decision: Link to existing ticket, no duplicate created
Reason: Issue already tracked in [TICKET-KEY]
Date:

## For No Change Recommended
Issue:
Decision:
Reason for No Jira:
Category: (misunderstanding / out of scope / duplicate / low impact / fails small change criteria)
Evidence Reviewed:
Reconsideration Trigger:
Date:


---

## Procedure Checklist

Before starting evaluation:
- [ ] Phase 0: Check for existing Jira tickets (MANDATORY)

During evaluation:
- [ ] Phase 1: Issue Interpretation
- [ ] Phase 2: Current State Evaluation
- [ ] Phase 3: UX & Product Alignment
- [ ] Phase 4: Jira Qualification Gate (includes duplicate check)
- [ ] Phase 5: Recommendation
- [ ] Phase 6: Output

---

## Ownership & Review

- **Owner:** Product / Engineering
- **Review Cadence:** As needed when UX direction or product scope changes
- **Last Updated:** 2025-01-XX (Added Phase 0 - Existing Ticket Check)
