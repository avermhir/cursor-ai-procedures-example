# Jira Ticket & Backlog Review Procedure

## Purpose

This procedure defines how to conduct quality reviews of Jira tickets and their linked design artifacts. This review focuses **exclusively on ticket content quality** - clarity, completeness, alignment, and organization - **NOT on implementation details or code changes**.

**Primary Project:** This procedure is primarily used for the **DT (Development Team)** project at https://conversationdynamics.atlassian.net/browse/DT, though it can be adapted for other projects.

**This procedure explicitly reviews:**
- Ticket content quality (description, acceptance criteria, scope)
- Linked design artifacts (if any)
- Epic alignment and thematic grouping
- Backlog organization and roadmap planning

**This procedure does NOT review:**
- Implementation approach
- Code quality
- Technical architecture
- Testing strategies

---

## Operating Constraints (MANDATORY)

### The AI MUST NOT:
- Propose code changes or implementation details
- Review or modify actual code files
- Suggest technical solutions or architecture
- Estimate effort or story points
- Design tests or rollout plans

### The AI MUST:
- Review ticket descriptions for clarity and completeness
- Evaluate acceptance criteria for testability
- Assess linked design artifacts for quality and alignment
- Identify gaps in ticket content
- Recommend improvements to ticket structure
- Evaluate epic alignment and thematic grouping
- Suggest backlog organization improvements

---

## Phase 0 — Scope Definition (MANDATORY)

**⚠️ This phase must be completed BEFORE proceeding to review tickets.**

### 0.1 Determine Review Scope

**Options:**
- **Single Ticket Review:** Review one specific ticket (by key)
- **Epic Review:** Review all tickets linked to a specific epic
- **Backlog Review:** Review all open tickets (or filtered subset)
- **Thematic Review:** Review tickets matching specific criteria (labels, components, etc.)

**Output:**
- Review scope defined
- Ticket list to review
- Review objectives

### 0.2 Gather Ticket Information

**For each ticket in scope:**
1. Retrieve full ticket details using `jira_get_issue`
2. Check for linked issues (epic links, parent/child relationships)
3. Identify linked design artifacts (mentioned in description, attachments, or comments)
4. Note ticket metadata (status, priority, assignee, labels, components)

**Output:**
- Complete ticket data for all tickets in scope
- List of linked design artifacts
- Ticket relationships (epic, parent, children)

---

## Phase 1 — Ticket Content Quality Review

### 1.1 Description Quality Assessment

**Evaluate ticket description for:**

#### Clarity
- [ ] Problem statement is clear and unambiguous
- [ ] Current state is accurately described
- [ ] User impact is clearly articulated
- [ ] Language is professional and consistent
- [ ] No jargon or unclear terminology

#### Completeness
- [ ] Problem statement present
- [ ] Current state documented
- [ ] User feedback/evidence included (if applicable)
- [ ] Root cause identified (if applicable)
- [ ] Recommendation or solution approach described
- [ ] Scope boundaries defined
- [ ] Non-goals explicitly stated

#### Structure
- [ ] Uses consistent formatting (headings, lists, code blocks)
- [ ] Sections are logically organized
- [ ] Information is easy to find and navigate
- [ ] Follows project ticket template (if applicable)

**Output:**
- Description quality score (High/Medium/Low)
- Specific gaps or issues identified
- Recommendations for improvement

---

### 1.2 Acceptance Criteria Review

**Evaluate acceptance criteria for:**

#### Testability
- [ ] Criteria are specific and measurable
- [ ] Criteria use clear pass/fail conditions
- [ ] Criteria are user-visible (not implementation details)
- [ ] Criteria cover all aspects of the change

#### Completeness
- [ ] All user-facing changes have acceptance criteria
- [ ] Edge cases are considered (if applicable)
- [ ] Accessibility requirements included (if applicable)
- [ ] Browser/device requirements specified (if applicable)

#### Clarity
- [ ] Criteria are written in plain language
- [ ] No ambiguous terms or unclear expectations
- [ ] Each criterion is independent and testable

**Output:**
- Acceptance criteria quality score (High/Medium/Low)
- Missing or unclear criteria identified
- Recommendations for improvement

---

### 1.3 Scope & Alignment Review

**Evaluate ticket scope for:**

#### Scope Boundaries
- [ ] Scope is clearly defined
- [ ] Non-goals are explicitly stated
- [ ] Scope is appropriately sized (not too large, not too small)
- [ ] Related work is identified and separated

#### Product Alignment
- [ ] Ticket aligns with product vision/mission (if documented)
- [ ] Ticket aligns with UX direction and patterns
- [ ] Ticket doesn't conflict with other planned work
- [ ] Ticket addresses a real user need or business requirement

#### Dependencies
- [ ] Dependencies on other tickets are identified
- [ ] Blocking relationships are documented
- [ ] Prerequisites are clear

**Output:**
- Scope assessment (Appropriate/Too Large/Too Small/Unclear)
- Alignment assessment (Aligned/Partial/Conflicted)
- Dependency gaps identified

---

## Phase 2 — Design Artifact Review

### 2.1 Identify Linked Artifacts

**Search for design artifacts in:**
- Ticket description (file paths, links)
- Ticket attachments (if accessible)
- Comments referencing design documents
- Related documentation files (`.ai_working/`, `docs/`, etc.)

**Common artifact types:**
- Design mockups or wireframes
- User flow diagrams
- Implementation plans
- Research documents
- User feedback summaries
- UX analysis documents

**Output:**
- List of linked design artifacts
- Artifact locations and access methods

---

### 2.2 Artifact Quality Assessment

**For each linked artifact, evaluate:**

#### Accessibility
- [ ] Artifact is accessible (file exists, link works)
- [ ] Artifact is in expected location
- [ ] Artifact is referenced correctly in ticket

#### Relevance
- [ ] Artifact directly relates to ticket content
- [ ] Artifact provides necessary context
- [ ] Artifact is current (not outdated)

#### Quality
- [ ] Artifact is complete and comprehensive
- [ ] Artifact is well-organized and clear
- [ ] Artifact aligns with ticket description
- [ ] Artifact provides actionable information

#### Completeness
- [ ] Artifact covers all aspects mentioned in ticket
- [ ] No gaps between artifact and ticket description
- [ ] Artifact includes necessary details for implementation

**Output:**
- Artifact quality assessment for each linked artifact
- Missing or outdated artifacts identified
- Recommendations for artifact updates or creation

---

## Phase 3 — Epic Alignment Review

### 3.1 Epic Structure Assessment

**For tickets linked to epics, evaluate:**

#### Epic Alignment
- [ ] Ticket clearly relates to epic theme
- [ ] Ticket contributes to epic goals
- [ ] Epic theme is clear and well-defined
- [ ] Ticket fits logically within epic scope

#### Epic Organization
- [ ] Epic groups related tickets thematically
- [ ] Epic is not just a restatement of ticket titles
- [ ] Epic has clear value proposition
- [ ] Epic scope is appropriate (not too broad, not too narrow)

#### Epic Completeness
- [ ] Epic description explains theme and goals
- [ ] Epic has clear success criteria
- [ ] All related tickets are linked to epic
- [ ] No orphaned tickets that should be in epic

**Output:**
- Epic alignment assessment for each ticket
- Epic structure quality (High/Medium/Low)
- Recommendations for epic improvements

---

### 3.2 Thematic Grouping Analysis

**Identify opportunities for better grouping:**

#### Current Grouping Issues
- [ ] Tickets in epic are thematically diverse (poor grouping)
- [ ] Epic is just a bucket with no clear theme
- [ ] Epic restates ticket titles rather than defining theme
- [ ] Related tickets are scattered across multiple epics

#### Potential Improvements
- [ ] Identify tickets that should be grouped together
- [ ] Identify tickets that don't fit current epic
- [ ] Suggest new epic themes for better organization
- [ ] Identify tickets that could form new epics

**Output:**
- Thematic grouping analysis
- Recommendations for epic reorganization
- Suggested epic themes for better roadmap planning

---

## Phase 4 — Backlog Organization Review

### 4.1 Ticket Relationships

**Evaluate ticket relationships:**

#### Epic Links
- [ ] All tickets are linked to appropriate epics
- [ ] No tickets linked to inappropriate epics
- [ ] Epic links reflect thematic alignment

#### Parent/Child Relationships
- [ ] Parent tickets have clear child tickets
- [ ] Child tickets are properly linked
- [ ] Relationship hierarchy makes sense

#### Dependencies
- [ ] Dependencies are documented
- [ ] Blocking relationships are clear
- [ ] Dependency chains are logical

**Output:**
- Relationship quality assessment
- Missing or incorrect relationships identified
- Recommendations for relationship fixes

---

### 4.2 Priority & Status Alignment

**Evaluate ticket prioritization:**

#### Priority Alignment
- [ ] Priority reflects business value
- [ ] Priority aligns with epic priority
- [ ] Priority is consistent across related tickets
- [ ] High-priority tickets are appropriately marked

#### Status Alignment
- [ ] Status accurately reflects work state
- [ ] Status progression is logical
- [ ] Stale tickets are identified

**Output:**
- Priority/status assessment
- Recommendations for priority adjustments
- Stale ticket identification

---

## Phase 5 — Quality Report & Recommendations

### 5.1 Compile Review Findings

**For each ticket reviewed, document:**

#### Content Quality Summary
- Description quality: [High/Medium/Low]
- Acceptance criteria quality: [High/Medium/Low]
- Scope clarity: [Clear/Unclear/Too Large/Too Small]
- Overall ticket quality: [High/Medium/Low]

#### Design Artifact Summary
- Artifacts linked: [Yes/No]
- Artifact quality: [High/Medium/Low/Missing]
- Artifact alignment: [Aligned/Partial/Misaligned]

#### Epic Alignment Summary
- Epic link: [Present/Absent/Inappropriate]
- Thematic fit: [Good/Partial/Poor]
- Epic quality: [High/Medium/Low]

#### Issues Identified
- List of specific issues found
- Gaps in content
- Missing information
- Alignment problems

---

### 5.2 Generate Recommendations

**For each ticket, provide:**

#### Content Improvements
- Specific suggestions for description improvements
- Missing sections to add
- Clarity improvements
- Acceptance criteria enhancements

#### Artifact Recommendations
- Missing artifacts to create
- Artifacts to update
- Artifact alignment fixes

#### Epic Reorganization Suggestions
- Tickets to move to different epics
- New epic themes to create
- Epic descriptions to improve
- Thematic grouping improvements

---

### 5.3 Create Review Report

**Generate comprehensive review report:**

#### Report Structure
1. **Executive Summary**
   - Review scope
   - Overall quality assessment
   - Key findings

2. **Ticket-by-Ticket Review**
   - For each ticket: quality scores, issues, recommendations

3. **Epic Analysis**
   - Epic structure assessment
   - Thematic grouping analysis
   - Reorganization recommendations

4. **Backlog Organization**
   - Relationship issues
   - Priority/status alignment
   - Organization improvements

5. **Action Items**
   - Prioritized list of improvements
   - Epic reorganization plan
   - Content updates needed

**Output Location:**
- Save report to `.ai_working/jira-backlog-review-YYYY-MM-DD.md`

---

## Phase 6 — Epic Reorganization Planning

### 6.1 Analyze Current Epic Structure

**For each epic, document:**
- Epic key and summary
- Number of linked tickets
- Ticket themes and topics
- Epic description quality
- Thematic coherence

**Identify problems:**
- Epics that are just restatements of tickets
- Epics that are too broad (buckets)
- Epics that are too narrow (single ticket)
- Epics with poor thematic alignment

---

### 6.2 Identify Thematic Groups

**Analyze tickets to identify:**
- Common themes across tickets
- User-facing improvements (UX, UI, usability)
- Technical improvements (performance, infrastructure)
- Feature enhancements
- Bug fixes and quality improvements

**Group tickets by:**
- User journey or workflow
- Component or system area
- User type or persona
- Business value or outcome
- Implementation complexity

---

### 6.3 Propose New Epic Structure

**For each proposed epic theme, define:**

#### Epic Theme
- Clear, descriptive theme name
- Value proposition
- Success criteria

#### Ticket Grouping
- List of tickets that belong to this epic
- Rationale for grouping
- Dependencies and relationships

#### Epic Description Template
```
## Epic Theme
[Clear theme description]

## Value Proposition
[Why this epic matters]

## Goals
- Goal 1
- Goal 2
- Goal 3

## Success Criteria
- Criterion 1
- Criterion 2

## Related Tickets
- DT-XXX: [Ticket summary]
- DT-YYY: [Ticket summary]
```

---

### 6.4 Create Reorganization Plan

**Document reorganization strategy:**

#### Current State
- List of current epics and their issues
- Problems with current structure

#### Proposed State
- List of proposed epics
- Ticket-to-epic mapping
- Rationale for changes

#### Migration Plan
- Step-by-step migration steps
- Order of operations
- Validation steps

**Output:**
- Save plan to `.ai_working/epic-reorganization-plan-YYYY-MM-DD.md`

---

## Phase 7 — Output (STOP POINT)

### If Reviewing Single Ticket
➡️ Generate ticket quality report with recommendations.

### If Reviewing Epic
➡️ Generate epic review report with ticket assessments and reorganization suggestions.

### If Reviewing Backlog
➡️ Generate comprehensive backlog review report and epic reorganization plan.

**The procedure ends here.  
No implementation work may be proposed beyond this point.**

---

## Review Checklist

Before starting review:
- [ ] Phase 0: Define review scope and gather ticket information

During review:
- [ ] Phase 1: Ticket Content Quality Review
- [ ] Phase 2: Design Artifact Review
- [ ] Phase 3: Epic Alignment Review
- [ ] Phase 4: Backlog Organization Review
- [ ] Phase 5: Quality Report & Recommendations
- [ ] Phase 6: Epic Reorganization Planning
- [ ] Phase 7: Output

---

## Quality Scoring Guide

### Description Quality
- **High:** Clear, complete, well-structured, follows template
- **Medium:** Mostly clear but missing some sections or minor clarity issues
- **Low:** Unclear, incomplete, poorly structured, missing critical information

### Acceptance Criteria Quality
- **High:** Specific, measurable, testable, complete coverage
- **Medium:** Mostly testable but some ambiguity or missing criteria
- **Low:** Vague, untestable, incomplete, or missing entirely

### Scope Clarity
- **Clear:** Well-defined boundaries, explicit non-goals
- **Unclear:** Boundaries are vague or undefined
- **Too Large:** Should be broken into multiple tickets
- **Too Small:** Should be combined with related work

### Epic Alignment
- **Good:** Ticket clearly fits epic theme, contributes to goals
- **Partial:** Ticket somewhat related but not perfect fit
- **Poor:** Ticket doesn't fit epic theme or conflicts with goals

---

## Ownership & Review

- **Owner:** Product / Engineering
- **Review Cadence:** As needed for backlog grooming and roadmap planning
- **Last Updated:** 2025-01-24

---

## Related Procedures

- `.ai_procedures/user-feedback-investigation-procedure.md` - For creating new tickets
- `.ai_procedures/session-startup-procedure.md` - For understanding current state

---

## Notes

- This procedure focuses on **content quality**, not implementation
- Design artifacts may be in various locations (`.ai_working/`, `docs/`, attachments)
- Epic reorganization should align with product roadmap and strategic priorities
- Review reports should be actionable and prioritized

