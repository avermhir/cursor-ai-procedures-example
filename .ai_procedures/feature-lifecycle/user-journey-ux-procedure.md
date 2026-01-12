# Procedure: User Journey / UX

### 1. Purpose

**Why this procedure exists**

This procedure defines user journeys, creates UX designs, wireframes, and mockups for features. It ensures user-centered design before implementation, documents interaction patterns and UI components, and provides clear visual design guidance for frontend implementation teams.

**What problem it solves**

- Features implemented without UX design
- Inconsistent user experiences across features
- User journeys not mapped out before implementation
- UI/UX decisions made during implementation (too late)
- Missing wireframes and mockups for implementation
- User needs not considered in design
- Design inconsistencies across features

**What "success" looks like at the end**

A complete UX design specification that includes:
- User journeys mapped and documented
- User flows designed and documented
- Wireframes created for all screens/pages
- High-fidelity mockups created
- Interaction patterns defined
- UI components identified
- Design reviewed and approved
- Ready for Frontend Implementation Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Requirements & Scope Procedure](./requirements-scope-procedure.md) has been completed
- Feature needs UX design before implementation
- User journeys need to be mapped
- Wireframes and mockups are needed
- Feature Implementation Orchestration Procedure invokes this (Phase 1, in parallel with Architecture Review)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Requirements document** - Functional requirements, user stories, use cases (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Feature definition document** - High-level feature description, context (from [Feature Intake Procedure](./feature-intake-procedure.md))
- [ ] **Existing design system** - UI components, patterns, style guide, design tokens (from [Design System Creation/Update Procedure](../design-system-lifecycle/design-system-creation-update-procedure.md) or equivalent)
- [ ] **Existing UX patterns** - Current interaction patterns, user flows, design conventions

**Decisions already made:**
- [ ] **Feature is approved** - Feature has been approved (from Feature Intake Procedure)
- [ ] **Requirements are defined** - Requirements are complete with user stories and use cases (from Requirements & Scope Procedure)

**Constraints:**
- [ ] **Design system constraints** - Must use existing design system components and patterns
- [ ] **Platform constraints** - Target platform(s): Web, mobile, desktop, or combination
- [ ] **Accessibility constraints** - WCAG compliance requirements, accessibility standards
- [ ] **Responsive design requirements** - Breakpoints, device support requirements

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing requirements document** → Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md) first
- **Missing design system** → Invoke [Design System Creation/Update Procedure](../design-system-lifecycle/design-system-creation-update-procedure.md) or review existing UI components, document current patterns
- **Missing UX patterns** → Review existing features, document current patterns

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from requirements review through UX documentation
- **Procedures to be invoked** - [Design System Creation/Update Procedure](../design-system-lifecycle/design-system-creation-update-procedure.md) (if design system missing), [Design System Component Procedure](../design-system-lifecycle/design-system-component-procedure.md) (if new components needed), [Design System Compliance Procedure](../design-system-lifecycle/design-system-compliance-procedure.md) (during design review), Design review process, stakeholder review
- **Dependencies between steps** - Review → Map Journeys → Design Flows → Wireframes → Mockups → Review (with Design System Compliance) → Document → Ready
- **Risks & unknowns** - Requirements unclear, design team unavailable, design system missing, design not approved, design assets incomplete, design system compliance issues
- **Validation points** - After user journey mapping, after wireframes, after mockups, after design system compliance check, after design review, before proceeding to implementation

**Plan must be reviewed before execution begins**

**Output:**
- User Journey/UX Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Requirements & User Stories

**Purpose**
- Understand feature requirements and user needs
- Review user stories and use cases
- Identify user personas and user types
- Understand business context

**Inputs**
- **From:** Procedure Required Inputs (requirements document, feature definition)

**Actions**
- Read requirements document thoroughly
- Review user stories from requirements:
  - As a [user type], I want [goal], so that [benefit]
  - Identify all user types involved
- Review use cases:
  - Actor, goal, steps, outcomes
  - Identify all actors
- Review feature definition and business context
- Identify user personas (if available or needed):
  - User types
  - User goals
  - User pain points
- Document user needs and goals
- Identify any UX questions or clarifications needed

**Decisions / Evaluations**
- **Decision:** Are user stories and use cases clear enough for UX design?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, request clarifications, then retry Step 1

**Outputs**
- Understanding of user stories and use cases
- User personas identified (if applicable)
- User needs and goals documented
- UX questions identified (if any)

**Failure Handling**
- **Failure:** User stories unclear or missing
  - **Action:** Request user stories from requirements team, may need to revisit Requirements & Scope Procedure
  - **Retry:** Step 1 after user stories received
- **Failure:** Use cases incomplete
  - **Action:** Request complete use cases, work with requirements team to define use cases
  - **Retry:** Step 1 after use cases complete

---

#### Step 2: Map User Journeys

**Purpose**
- Map complete user journeys for the feature
- Identify entry points and exit points
- Document user paths through the feature
- Identify decision points and branches

**Inputs**
- **From:** Step 1 outputs (user stories, use cases, user needs)

**Actions**
- For each user story/use case, map the user journey:
  - Entry point (how user enters this journey)
  - Steps in the journey
  - Decision points (where user makes choices)
  - Branches (different paths based on decisions)
  - Exit points (how user completes or exits journey)
- Identify all user journeys:
  - Primary journey (happy path)
  - Secondary journeys (alternative paths)
  - Error journeys (what happens on errors)
  - Edge case journeys
- Document journey flow:
  - Visual journey map (diagram or text)
  - Steps numbered or sequenced
  - Decision points clearly marked
  - Outcomes for each path
- Identify touchpoints:
  - Where user interacts with system
  - What screens/pages are involved
  - What actions user takes

**Decisions / Evaluations**
- **Decision:** Are all user journeys mapped?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, identify missing journeys, map them

**Outputs**
- User journeys mapped
- Journey flows documented
- Entry and exit points identified
- Decision points identified
- Touchpoints identified

**Failure Handling**
- **Failure:** Cannot identify user journeys
  - **Action:** Review user stories more carefully, consult with product owner, map from use cases
  - **Retry:** Step 2 after consultation
- **Failure:** User journeys incomplete
  - **Action:** Review all user stories, ensure all journeys are mapped
  - **Retry:** Step 2 with complete journeys

---

#### Step 3: Design User Flows

**Purpose**
- Create detailed user flow diagrams
- Define interaction patterns
- Identify screens/pages needed
- Document navigation patterns

**Inputs**
- **From:** Step 2 outputs (user journeys mapped)

**Actions**
- Create user flow diagrams:
  - Start with entry point
  - Show all steps and screens
  - Show decision points and branches
  - Show navigation between screens
  - End with exit points
- Define interaction patterns:
  - How user navigates
  - How user inputs data
  - How user receives feedback
  - How errors are handled
- Identify screens/pages needed:
  - List all screens/pages
  - Define purpose of each screen
  - Define content/structure of each screen
- Document navigation patterns:
  - How user moves between screens
  - Navigation structure (menu, breadcrumbs, etc.)
  - Back/forward navigation
- Consider responsive design:
  - How flows work on different screen sizes
  - Mobile vs. desktop considerations

**Decisions / Evaluations**
- **Decision:** Are user flows complete and logical?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, refine flows, ensure all paths are covered

**Outputs**
- User flow diagrams created
- Interaction patterns defined
- Screens/pages identified
- Navigation patterns documented
- Responsive considerations documented

**Failure Handling**
- **Failure:** User flows incomplete or illogical
  - **Action:** Review user journeys, refine flows, ensure all paths are covered
  - **Retry:** Step 3 with refined flows
- **Failure:** Screens/pages unclear
  - **Action:** Review user journeys, identify all screens needed
  - **Retry:** Step 3 with clear screen identification

---

#### Step 4: Create Wireframes

**Purpose**
- Create low-fidelity wireframes for all screens
- Define layout and structure
- Identify UI components needed
- Document information architecture

**Inputs**
- **From:** Step 3 outputs (user flows, screens identified)
- **From:** Procedure Required Inputs (existing design system, if available)

**Actions**
- For each screen/page identified, create wireframe:
  - Layout structure (header, content, footer, sidebar, etc.)
  - Content areas and sections
  - UI components placement
  - Navigation elements
  - Form fields and inputs
  - Buttons and actions
- Define information architecture:
  - Content hierarchy
  - Information organization
  - Grouping and relationships
- Identify UI components needed:
  - Buttons, inputs, selects, etc.
  - Cards, lists, tables, etc.
  - Modals, tooltips, notifications, etc.
  - Navigation components
- Review existing design system:
  - What components are available (from [Design System Creation/Update Procedure](../design-system-lifecycle/design-system-creation-update-procedure.md))
  - What patterns can be reused
  - What needs to be created new
- For missing components:
  - Document component requirements
  - Invoke [Design System Component Procedure](../design-system-lifecycle/design-system-component-procedure.md) to create new components (if needed)
  - Or document as custom component if design system component not appropriate
- Consider responsive design:
  - How layout adapts to different screen sizes
  - Mobile vs. desktop layouts

**Decisions / Evaluations**
- **Decision:** Are wireframes created for all screens?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, create missing wireframes
- **Decision:** Do wireframes align with user flows?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, adjust wireframes to match flows
- **Decision:** Are all required design system components available?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, invoke [Design System Component Procedure](../design-system-lifecycle/design-system-component-procedure.md) or document custom component needs

**Outputs**
- Wireframes created for all screens
- Layout and structure defined
- UI components identified
- Information architecture documented
- Responsive considerations included

**Failure Handling**
- **Failure:** Wireframes incomplete
  - **Action:** Review user flows, ensure all screens have wireframes
  - **Retry:** Step 4 with complete wireframes
- **Failure:** Layout unclear or inconsistent
  - **Action:** Review design system, ensure consistent layout patterns
  - **Retry:** Step 4 with consistent layouts

---

#### Step 5: Create Mockups

**Purpose**
- Create high-fidelity mockups
- Apply design system
- Define visual design
- Document UI components with styling

**Inputs**
- **From:** Step 4 outputs (wireframes)
- **From:** Procedure Required Inputs (design system, style guide)

**Actions**
- For each wireframe, create high-fidelity mockup:
  - Apply design system colors, typography, spacing
  - Add visual styling and polish
  - Define component states (hover, active, disabled, etc.)
  - Add realistic content (not lorem ipsum where possible)
- Apply design system:
  - Use design tokens (colors, spacing, typography)
  - Use existing UI components
  - Follow design system patterns
- Define visual design:
  - Color usage
  - Typography hierarchy
  - Spacing and layout
  - Visual hierarchy
- Document UI components:
  - Component names
  - Component states
  - Component variants
  - Component specifications
- Consider accessibility:
  - Color contrast
  - Text sizing
  - Focus states
  - Screen reader considerations
- Create responsive mockups:
  - Mobile mockups
  - Tablet mockups (if applicable)
  - Desktop mockups

**Decisions / Evaluations**
- **Decision:** Are mockups created for all screens?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, create missing mockups
- **Decision:** Do mockups follow design system?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, adjust mockups to follow design system, review [Design System Creation/Update Procedure](../design-system-lifecycle/design-system-creation-update-procedure.md) for correct usage

**Outputs**
- High-fidelity mockups created
- Design system applied
- Visual design defined
- UI components documented with styling
- Responsive mockups created
- Accessibility considerations included

**Failure Handling**
- **Failure:** Mockups incomplete
  - **Action:** Review wireframes, ensure all screens have mockups
  - **Retry:** Step 5 with complete mockups
- **Failure:** Design system not available
  - **Action:** Invoke [Design System Creation/Update Procedure](../design-system-lifecycle/design-system-creation-update-procedure.md) or create basic design system, proceed with mockups
  - **Workaround:** Create mockups with documented design decisions, update design system later

---

#### Step 6: Review UX Design

**Purpose**
- Review UX design with stakeholders
- Review with design team
- Validate user journeys and flows
- Obtain design approval

**Inputs**
- **From:** Step 2 outputs (user journeys)
- **From:** Step 3 outputs (user flows)
- **From:** Step 4 outputs (wireframes)
- **From:** Step 5 outputs (mockups)
- **From:** Procedure Required Inputs (stakeholders, design team)

**Actions**
- Prepare UX design review document:
  - User journeys summary
  - User flow diagrams
  - Wireframes
  - Mockups
  - Interaction patterns
  - UI components
- Present UX design to:
  - Product owner
  - Design team
  - Technical leads
  - Key stakeholders
- Review each aspect:
  - Do user journeys make sense?
  - Are user flows logical and complete?
  - Do wireframes support user goals?
  - Do mockups follow design system?
  - Are interaction patterns consistent?
  - Is design accessible?
- Invoke [Design System Compliance Procedure](../design-system-lifecycle/design-system-compliance-procedure.md):
  - Validate wireframes use design system components correctly
  - Validate mockups follow design system patterns
  - Validate UI components are from design system (or documented as custom)
  - Validate design tokens are used correctly (colors, spacing, typography)
  - Document any design system compliance issues
  - Address compliance issues before proceeding
- Conduct user journey walkthrough:
  - Walk through primary journey
  - Walk through secondary journeys
  - Identify any issues or improvements
- Address feedback and questions
- Revise design if needed
- Obtain design approval
- Document approval

**Decisions / Evaluations**
- **Decision:** Does design pass Design System Compliance check?
  - **Go:** If yes, proceed to stakeholder review
  - **No-Go:** If no, address compliance issues, revise design, retry compliance check
- **Decision:** Are stakeholders aligned on UX design?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, address misalignments, revise design
- **Decision:** Is design approval obtained?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, address concerns, revise design, retry approval

**Outputs**
- Design system compliance validated
- UX design reviewed
- Feedback incorporated
- Design approval obtained
- Approval documented

**Failure Handling**
- **Failure:** Design team unavailable
  - **Action:** Schedule review meeting, use async review, or proceed with available reviewers
  - **Retry:** Step 6 when team available
- **Failure:** Design not approved
  - **Action:** Address concerns, revise design based on feedback
  - **Retry:** Step 6 after revisions
- **Failure:** Design system compliance issues found
  - **Action:** Address compliance issues, may need to invoke [Design System Component Procedure](../design-system-lifecycle/design-system-component-procedure.md) or revise design
  - **Retry:** Step 6 after compliance issues resolved
- **Failure:** Significant changes needed
  - **Action:** Revise design, may need to revisit Steps 2-5
  - **Retry:** Step 6 after significant revisions

---

#### Step 7: Document UX Design

**Purpose**
- Create complete UX design document
- Store design assets
- Make design accessible to implementation team
- Link design to feature documentation

**Inputs**
- **From:** All previous steps (complete UX design)

**Actions**
- Create UX design document including:
  - Feature overview
  - User journeys
  - User flow diagrams
  - Wireframes
  - Mockups
  - Interaction patterns
  - UI components
  - Design specifications
  - Responsive design considerations
  - Accessibility considerations
- Store design assets:
  - Wireframe files
  - Mockup files
  - Design specifications
  - Component documentation
- Organize design assets:
  - By screen/page
  - By component
  - By user journey
- Store design document:
  - Save to appropriate location (e.g., `.ai_working/` or `docs/ux-design/`)
  - Link from feature documentation
  - Make accessible to frontend implementation team
- Update Jira ticket:
  - Add UX design document link
  - Add mockup links
  - Update ticket with design status

**Decisions / Evaluations**
- **Decision:** Is UX design document complete?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, complete missing sections

**Outputs**
- UX design document created
- Design assets stored and organized
- Design accessible to implementation team
- Jira ticket updated with design information

**Failure Handling**
- **Failure:** Design document incomplete
  - **Action:** Review all steps, ensure all information is captured
  - **Retry:** Step 7 with complete information
- **Failure:** Design assets not accessible
  - **Action:** Store assets in accessible location, update links
  - **Retry:** Step 7 with accessible assets

---

#### Step 8: Prepare for Next Phase

**Purpose**
- Verify all outputs are complete
- Ensure UX design is ready for frontend implementation
- Prepare for Frontend Implementation Procedure

**Inputs**
- **From:** All previous steps (complete UX design)

**Actions**
- Verify all required outputs are complete:
  - User journeys mapped
  - User flows designed
  - Wireframes created
  - Mockups created
  - Interaction patterns defined
  - UI components identified
  - Design system compliance validated
  - Design approved
  - Design documented
- Verify UX design is ready for:
  - Frontend Implementation Procedure (wireframes, mockups, components)
  - Component development (UI components identified)
  - Page/screen development (all screens designed)
- Document any open questions or clarifications
- Confirm readiness for next phase

**Decisions / Evaluations**
- **Decision:** Are all outputs complete and ready?
  - **Go:** If yes, UX design complete
  - **No-Go:** If no, complete missing outputs

**Outputs**
- All outputs verified complete
- UX design ready for Frontend Implementation Procedure
- Ready for next phase

**Failure Handling**
- **Failure:** Missing outputs
  - **Action:** Complete missing outputs, revisit appropriate step
  - **Retry:** Step 8 after outputs complete

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **UX Design Document** - Complete UX specification including journeys, flows, wireframes, mockups, patterns, components
- **User Journey Maps** - Visual or textual maps of user journeys
- **User Flow Diagrams** - Visual diagrams showing user flows through the feature
- **Wireframes** - Low-fidelity wireframes for all screens/pages
- **Mockups** - High-fidelity mockups for all screens/pages
- **Design Assets** - All design files stored and accessible

**State changes:**
- Feature has UX design defined
- User journeys are mapped and documented
- Design is approved and ready for implementation
- Design assets are accessible to implementation team

**Decisions recorded:**
- User journey decisions
- User flow decisions
- Interaction pattern decisions
- UI component decisions
- Design approval decisions

**Signals emitted:**
- "UX Design Complete" - Ready for Frontend Implementation Procedure
- "Design Approved" - UX design approved and ready for use
- "Ready for Implementation" - Design provides clear guidance for frontend implementation

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All user journeys are mapped
- [ ] User flows are designed and logical
- [ ] Wireframes are created for all screens
- [ ] Mockups are created for all screens
- [ ] Interaction patterns are defined
- [ ] UI components are identified
- [ ] Design is approved
- [ ] Design document is complete

**Reviews required:**
- [ ] Product owner review (user journeys, business alignment)
- [ ] Design team review (design quality, design system compliance)
- [ ] Technical lead review (feasibility, implementation considerations)
- [ ] Stakeholder review (if required)

**Automated checks:**
- [ ] Design assets are accessible
- [ ] Design document is complete
- [ ] Jira ticket updated with design information

**Who/what can approve completion:**
- **Product Owner** - Must approve user journeys and flows
- **Design Team** - Must approve design quality and design system compliance
- **Technical Lead** - Should review for implementation feasibility

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **User Journeys** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (user context)
- **User Flows** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (navigation, routing)
- **Wireframes** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (layout, structure)
- **Mockups** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (visual design, styling)
- **Interaction Patterns** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (interaction behavior)
- **UI Components** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (component development)

**Procedures that depend on this:**
- **[Frontend Implementation Procedure](./frontend-implementation-procedure.md)** - Uses UX design to guide implementation
- **[Design System Compliance Procedure](../design-system-lifecycle/design-system-compliance-procedure.md)** - Validates UX design aligns with design system
- **[Accessibility Review Procedure](./accessibility-review-procedure.md)** - Uses UX design to review accessibility
- **[Implementation Verification Procedure](./implementation-verification-procedure.md)** - Uses UX design to verify implementation matches design

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Requirements and user stories reviewed
- [ ] All user journeys mapped
- [ ] User flows designed and documented
- [ ] Wireframes created for all screens/pages
- [ ] High-fidelity mockups created for all screens/pages
- [ ] Interaction patterns defined
- [ ] UI components identified
- [ ] Design system reviewed and components identified
- [ ] Design system compliance validated (via Design System Compliance Procedure)
- [ ] Design system applied (if available)
- [ ] Responsive design considered
- [ ] Accessibility considerations included
- [ ] UX design reviewed with stakeholders
- [ ] Design team review completed
- [ ] Design approval obtained
- [ ] UX design document created
- [ ] Design assets stored and accessible
- [ ] Jira ticket updated with design information
- [ ] Ready for Frontend Implementation Procedure

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with UX design information
- [ ] **UX Design Document** - Document location and reference
- [ ] **Design Assets** - Locations of wireframes, mockups, design files
- [ ] **Requirements Document** - Link to requirements that drove design

**Audit trail:**
- **UX design date** - When UX design was created
- **Design team involved** - Who was involved in design
- **User journeys mapped** - Which user journeys were identified
- **Design approval date** - When design was approved
- **Approval stakeholders** - Who approved design
- **Design assets created** - Which design assets were created

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- User journeys mapped
- User flows designed
- Wireframes and mockups created
- Design approved
- Ready for Frontend Implementation

#### ⚠️ Blocked
- **Reason:** Design team unavailable, requirements unclear, design system missing
- **Required action:** Address blocker (schedule review, clarify requirements, establish design system)
- **Who to notify:** Design team lead, product owner
- **Status:** UX design paused until blocker resolved

#### ❌ Aborted
- **Reason:** UX design cannot be created, feature scope too unclear, feature cancelled
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why UX design couldn't be created
- **Next step:** Feature may need to be redefined or cancelled

#### 🔄 Partial Design
- **Reason:** Some screens designed but others deferred to implementation
- **Required action:** Document what was designed vs. deferred, update design document
- **Status:** Core screens designed, some screens deferred
- **Next step:** Proceed with designed screens, deferred screens designed during implementation

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Design Team / UX Team
