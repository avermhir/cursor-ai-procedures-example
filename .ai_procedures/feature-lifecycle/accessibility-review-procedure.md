# Procedure: Accessibility Review

### 1. Purpose

**Why this procedure exists**

This procedure conducts comprehensive accessibility testing and validation for frontend features to ensure WCAG compliance and accessibility standards. It verifies that features are accessible to users with disabilities and meet accessibility requirements.

**What problem it solves**

- Features not accessible to users with disabilities
- WCAG compliance not verified
- Keyboard navigation not working
- Screen reader compatibility not tested
- Color contrast issues not identified
- ARIA labels missing or incorrect
- Accessibility issues discovered late in development
- Accessibility requirements not systematically validated

**What "success" looks like at the end**

A complete accessibility review report that includes:
- WCAG compliance verified (target level: AA or AAA)
- Keyboard navigation tested and working
- Screen reader compatibility tested and working
- Color contrast verified
- ARIA labels verified
- Semantic HTML verified
- Accessibility test cases executed (from test plan)
- Accessibility issues identified and documented (if any)
- Accessibility review approved
- Ready for acceptance and signoff (if no critical accessibility issues)

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Frontend Implementation Procedure](./frontend-implementation-procedure.md) has been completed (if frontend feature)
- [Test Plan Procedure](./test-plan-procedure.md) has been completed (accessibility test cases defined, if applicable)
- Frontend implementation is complete and ready for accessibility review
- Accessibility review needed before deployment
- Feature Implementation Orchestration Procedure invokes this (Phase 4: Quality Assurance, for frontend features)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Frontend implementation** - Frontend code, components, pages (from [Frontend Implementation Procedure](./frontend-implementation-procedure.md))
- [ ] **Test plan document** - Accessibility test cases (from [Test Plan Procedure](./test-plan-procedure.md), if applicable)
- [ ] **Design specifications** - UI/UX designs, accessibility requirements (from [User Journey/UX Procedure](./user-journey-ux-procedure.md))
- [ ] **Requirements document** - Accessibility requirements, WCAG level required (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Implementation verification report** - Verification that frontend implementation is complete (from [Implementation Verification Procedure](./implementation-verification-procedure.md))

**Decisions already made:**
- [ ] **Frontend implementation is complete** - Frontend Implementation Procedure has completed
- [ ] **WCAG level is defined** - Target WCAG compliance level (A, AA, AAA) is defined

**Constraints:**
- [ ] **Accessibility Standards** - Must comply with Accessibility Standards (to be defined)
- [ ] **WCAG compliance** - Must meet target WCAG level (typically AA)
- [ ] **Accessibility requirements** - All accessibility requirements must be met
- [ ] **Accessibility testing** - Accessibility test cases from test plan must be executed (if applicable)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing frontend implementation** → Wait for Frontend Implementation Procedure to complete
- **Missing test plan** → Create accessibility test cases or proceed without test plan
- **Missing accessibility requirements** → Obtain accessibility requirements from Requirements & Scope Procedure
- **WCAG level not defined** → Default to WCAG AA level

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from WCAG compliance review through accessibility review approval
- **Procedures to be invoked** - None (this is a review procedure)
- **Dependencies between steps** - WCAG Review → Keyboard Navigation → Screen Reader → Color Contrast → ARIA Labels → Semantic HTML → Accessibility Testing → Report & Approval
- **Risks & unknowns** - Missing accessibility requirements, accessibility issues, WCAG non-compliance, testing tools unavailable
- **Validation points** - After WCAG review, after keyboard navigation testing, after screen reader testing, before report approval

**Plan must be reviewed before execution begins**

**Output:**
- Accessibility Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review WCAG Compliance

**Purpose**
- Review frontend implementation for WCAG compliance
- Verify WCAG requirements are met
- Identify WCAG compliance issues

**Inputs**
- **From:** Procedure Required Inputs (frontend implementation, requirements document with WCAG level)
- **Reference:** Accessibility Standards (to be defined) for WCAG compliance requirements

**Actions**
- Review WCAG compliance requirements:
  - Determine target WCAG level (A, AA, AAA)
  - Review WCAG success criteria for target level
- Review frontend implementation for WCAG compliance:
  - **Perceivable:**
    - Check text alternatives for images
    - Check captions for media
    - Check content is readable
    - Check color is not the only means of conveying information
  - **Operable:**
    - Check keyboard accessibility
    - Check no seizure-inducing content
    - Check navigation is accessible
    - Check input methods are accessible
  - **Understandable:**
    - Check content is readable
    - Check functionality is predictable
    - Check input assistance is provided
  - **Robust:**
    - Check content is compatible with assistive technologies
    - Check markup is valid
- Use automated accessibility testing tools:
  - Run accessibility scanning tools (e.g., axe, WAVE, Lighthouse)
  - Review automated test results
  - Document automated findings
- Document WCAG compliance review in accessibility review report

**Decisions / Evaluations**
- **Decision:** Does frontend implementation meet target WCAG level?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, document WCAG compliance issues, may need to fix implementation

**Outputs**
- WCAG compliance reviewed
- WCAG compliance issues identified (if any)
- WCAG compliance review documented

**Failure Handling**
- **Failure:** WCAG compliance issues found
  - **Action:** Document WCAG issues, prioritize fixes, coordinate with frontend team to fix issues
  - **Retry:** Step 1 after WCAG issues are fixed

---

#### Step 2: Test Keyboard Navigation

**Purpose**
- Test keyboard navigation throughout the feature
- Verify all functionality is accessible via keyboard
- Identify keyboard navigation issues

**Inputs**
- **From:** Procedure Required Inputs (frontend implementation)
- **From:** Step 1 outputs (WCAG compliance review)

**Actions**
- Test keyboard navigation:
  - **Navigation:**
    - Test Tab key navigation
    - Test Shift+Tab reverse navigation
    - Test Arrow key navigation (if applicable)
    - Test Escape key (for modals, dropdowns)
    - Test Enter/Space key activation
  - **Form Interaction:**
    - Test form fields are accessible via keyboard
    - Test form submission via keyboard
    - Test form validation via keyboard
  - **Component Interaction:**
    - Test buttons are accessible via keyboard
    - Test links are accessible via keyboard
    - Test dropdowns are accessible via keyboard
    - Test modals are accessible via keyboard
  - **Focus Management:**
    - Test focus indicators are visible
    - Test focus order is logical
    - Test focus is managed correctly (modals, dynamic content)
    - Test focus is not trapped
- Verify keyboard accessibility:
  - Check all interactive elements are keyboard accessible
  - Check focus order is logical
  - Check focus indicators are visible
  - Check keyboard shortcuts work (if applicable)
- Document keyboard navigation test results in accessibility review report

**Decisions / Evaluations**
- **Decision:** Is keyboard navigation working correctly throughout the feature?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, document keyboard navigation issues, may need to fix implementation

**Outputs**
- Keyboard navigation tested
- Keyboard navigation issues identified (if any)
- Keyboard navigation test results documented

**Failure Handling**
- **Failure:** Keyboard navigation issues found
  - **Action:** Document keyboard navigation issues, prioritize fixes, coordinate with frontend team to fix issues
  - **Retry:** Step 2 after keyboard navigation issues are fixed

---

#### Step 3: Test Screen Reader Compatibility

**Purpose**
- Test feature with screen readers
- Verify content is accessible to screen reader users
- Identify screen reader compatibility issues

**Inputs**
- **From:** Procedure Required Inputs (frontend implementation)
- **From:** Steps 1-2 outputs (WCAG compliance, keyboard navigation)

**Actions**
- Test with screen readers:
  - **Screen Reader Tools:**
    - Test with NVDA (Windows)
    - Test with JAWS (Windows)
    - Test with VoiceOver (macOS/iOS)
    - Test with TalkBack (Android)
  - **Content Accessibility:**
    - Test text content is read correctly
    - Test images have alt text
    - Test headings are announced correctly
    - Test links are announced correctly
    - Test buttons are announced correctly
    - Test form fields are announced correctly
  - **Navigation:**
    - Test screen reader navigation (heading navigation, landmark navigation)
    - Test screen reader can navigate all content
    - Test screen reader can access all functionality
  - **ARIA Support:**
    - Test ARIA labels are read correctly
    - Test ARIA roles are announced correctly
    - Test ARIA states are announced correctly
    - Test ARIA live regions work correctly
- Verify screen reader compatibility:
  - Check all content is accessible to screen readers
  - Check all functionality is accessible to screen readers
  - Check ARIA attributes work correctly
- Document screen reader test results in accessibility review report

**Decisions / Evaluations**
- **Decision:** Is the feature accessible to screen reader users?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, document screen reader compatibility issues, may need to fix implementation

**Outputs**
- Screen reader compatibility tested
- Screen reader issues identified (if any)
- Screen reader test results documented

**Failure Handling**
- **Failure:** Screen reader compatibility issues found
  - **Action:** Document screen reader issues, prioritize fixes, coordinate with frontend team to fix issues
  - **Retry:** Step 3 after screen reader issues are fixed

---

#### Step 4: Verify Color Contrast

**Purpose**
- Verify color contrast meets WCAG requirements
- Test color is not the only means of conveying information
- Identify color contrast issues

**Inputs**
- **From:** Procedure Required Inputs (frontend implementation, design specifications)
- **From:** Step 1 outputs (WCAG compliance review)

**Actions**
- Review color contrast requirements:
  - WCAG AA: 4.5:1 for normal text, 3:1 for large text
  - WCAG AAA: 7:1 for normal text, 4.5:1 for large text
- Test color contrast:
  - **Text Contrast:**
    - Test text color contrast against background
    - Test normal text contrast (WCAG AA: 4.5:1)
    - Test large text contrast (WCAG AA: 3:1)
    - Test all text elements (headings, body, links, buttons)
  - **UI Element Contrast:**
    - Test button contrast
    - Test form field contrast
    - Test border contrast
    - Test focus indicator contrast
- Use color contrast testing tools:
  - Use automated color contrast checkers
  - Verify contrast ratios meet WCAG requirements
- Verify color is not the only means of conveying information:
  - Check information is not conveyed by color alone
  - Check icons, text, or patterns are used in addition to color
- Document color contrast test results in accessibility review report

**Decisions / Evaluations**
- **Decision:** Does color contrast meet WCAG requirements?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, document color contrast issues, may need to fix implementation or design

**Outputs**
- Color contrast verified
- Color contrast issues identified (if any)
- Color contrast test results documented

**Failure Handling**
- **Failure:** Color contrast issues found
  - **Action:** Document color contrast issues, prioritize fixes, coordinate with frontend/design team to fix issues
  - **Retry:** Step 4 after color contrast issues are fixed

---

#### Step 5: Verify ARIA Labels and Roles

**Purpose**
- Verify ARIA labels and roles are correct and complete
- Test ARIA attributes work correctly
- Identify ARIA issues

**Inputs**
- **From:** Procedure Required Inputs (frontend implementation)
- **From:** Step 3 outputs (screen reader compatibility)

**Actions**
- Review ARIA implementation:
  - **ARIA Labels:**
    - Check all interactive elements have labels
    - Check labels are descriptive and accurate
    - Check labels are not redundant
  - **ARIA Roles:**
    - Check roles are used correctly
    - Check roles match element semantics
    - Check custom components have appropriate roles
  - **ARIA States:**
    - Check states are set correctly (aria-expanded, aria-selected, etc.)
    - Check states are updated correctly
  - **ARIA Properties:**
    - Check aria-describedby is used correctly
    - Check aria-labelledby is used correctly
    - Check aria-required is used correctly
  - **ARIA Live Regions:**
    - Check live regions are used for dynamic content
    - Check live regions have appropriate politeness levels
- Test ARIA with screen readers:
  - Test ARIA labels are read correctly
  - Test ARIA roles are announced correctly
  - Test ARIA states are announced correctly
- Verify ARIA implementation:
  - Check ARIA is used only when necessary
  - Check native HTML semantics are used when possible
  - Check ARIA doesn't conflict with native semantics
- Document ARIA review in accessibility review report

**Decisions / Evaluations**
- **Decision:** Are ARIA labels and roles correct and complete?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, document ARIA issues, may need to fix implementation

**Outputs**
- ARIA labels and roles verified
- ARIA issues identified (if any)
- ARIA review documented

**Failure Handling**
- **Failure:** ARIA issues found
  - **Action:** Document ARIA issues, prioritize fixes, coordinate with frontend team to fix issues
  - **Retry:** Step 5 after ARIA issues are fixed

---

#### Step 6: Verify Semantic HTML

**Purpose**
- Verify semantic HTML is used correctly
- Test HTML structure is accessible
- Identify semantic HTML issues

**Inputs**
- **From:** Procedure Required Inputs (frontend implementation)
- **From:** Steps 1-5 outputs (all accessibility reviews)

**Actions**
- Review semantic HTML implementation:
  - **Headings:**
    - Check heading hierarchy is correct (h1, h2, h3, etc.)
    - Check headings are not skipped
    - Check headings are used for structure, not styling
  - **Landmarks:**
    - Check semantic landmarks are used (header, nav, main, aside, footer)
    - Check landmarks are used correctly
  - **Lists:**
    - Check lists are used for list content
    - Check list structure is correct
  - **Forms:**
    - Check form elements are properly labeled
    - Check form structure is correct
    - Check form fields are associated with labels
  - **Tables:**
    - Check tables have headers
    - Check table structure is correct
    - Check table headers are associated with cells
  - **Links and Buttons:**
    - Check links are used for navigation
    - Check buttons are used for actions
    - Check links and buttons are not misused
- Verify HTML structure:
  - Check HTML is valid
  - Check HTML structure is logical
  - Check HTML semantics are correct
- Document semantic HTML review in accessibility review report

**Decisions / Evaluations**
- **Decision:** Is semantic HTML used correctly?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, document semantic HTML issues, may need to fix implementation

**Outputs**
- Semantic HTML verified
- Semantic HTML issues identified (if any)
- Semantic HTML review documented

**Failure Handling**
- **Failure:** Semantic HTML issues found
  - **Action:** Document semantic HTML issues, prioritize fixes, coordinate with frontend team to fix issues
  - **Retry:** Step 6 after semantic HTML issues are fixed

---

#### Step 7: Conduct Usability Testing

**Purpose**
- Test user experience and usability of the feature
- Identify usability issues that may affect user experience
- Validate that the feature is intuitive and easy to use

**Inputs**
- **From:** Procedure Required Inputs (frontend implementation, user journeys, design specifications)
- **From:** Steps 1-6 outputs (accessibility reviews)

**Actions**
- Conduct heuristic evaluation:
  - **Visibility of System Status:** Users should be informed about what's happening
  - **Match Between System and Real World:** System should speak users' language
  - **User Control and Freedom:** Users should have control and be able to undo actions
  - **Consistency and Standards:** System should be consistent
  - **Error Prevention:** System should prevent errors
  - **Recognition Rather Than Recall:** System should minimize memory load
  - **Flexibility and Efficiency:** System should accommodate both novice and expert users
  - **Aesthetic and Minimalist Design:** System should not contain irrelevant information
  - **Help Users Recognize, Diagnose, and Recover from Errors:** Error messages should be clear
  - **Help and Documentation:** System should provide help when needed
- Test user journeys:
  - **Primary User Flows:** Test critical user journeys for usability
  - **Secondary User Flows:** Test alternative user journeys
  - **Error Flows:** Test error handling and recovery for usability
  - **Edge Cases:** Test edge cases for usability
- Conduct user testing (if possible):
  - **Test with Real Users:** Test with representative users (if available)
  - **Task-Based Testing:** Give users tasks to complete
  - **Observation:** Observe users interacting with the feature
  - **Feedback Collection:** Collect user feedback on usability
- Test user experience:
  - **Navigation:** Is navigation intuitive?
  - **Information Architecture:** Is information organized logically?
  - **Visual Design:** Is visual design clear and uncluttered?
  - **Feedback:** Does the system provide clear feedback?
  - **Error Handling:** Are errors handled gracefully?
  - **Help and Guidance:** Is help available when needed?
- Document usability testing results in accessibility review report

**Decisions / Evaluations**
- **Decision:** Is the feature usable and intuitive?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, document usability issues, may need to fix implementation or design

**Outputs**
- Usability testing completed
- Usability issues identified (if any)
- Usability testing results documented

**Failure Handling**
- **Failure:** Usability issues found
  - **Action:** Document usability issues, prioritize fixes, coordinate with frontend/design team to fix issues
  - **Retry:** Step 7 after usability issues are addressed (if critical)

---

#### Step 8: Execute Accessibility Test Cases (if applicable)

**Purpose**
- Execute accessibility test cases from test plan
- Verify accessibility requirements are met through testing
- Identify accessibility issues through systematic testing

**Inputs**
- **From:** Procedure Required Inputs (test plan document with accessibility test cases)
- **From:** Steps 1-6 outputs (all accessibility reviews)

**Actions**
- Review accessibility test cases from test plan:
  - WCAG compliance test cases
  - Keyboard navigation test cases
  - Screen reader test cases
  - Color contrast test cases
  - ARIA test cases
- Execute accessibility test cases:
  - Execute test cases systematically
  - Document test execution results
  - Document any failures or issues
- Verify accessibility requirements:
  - Check all accessibility requirements are met
  - Check test cases validate requirements
- Document accessibility test results in accessibility review report

**Decisions / Evaluations**
- **Decision:** Do all accessibility test cases pass?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, document accessibility test failures, may need to fix implementation
  - **Skip:** If no accessibility test cases in test plan, proceed to Step 8

**Outputs**
- Accessibility test cases executed (if applicable)
- Accessibility test results documented (if applicable)
- Accessibility test findings documented (if applicable)

**Failure Handling**
- **Failure:** Accessibility test cases fail
  - **Action:** Document test failures, prioritize fixes, coordinate with frontend team to fix issues
  - **Retry:** Step 7 after accessibility issues are fixed and retested

---

#### Step 9: Create Accessibility Review Report and Obtain Approval

**Purpose**
- Create comprehensive accessibility review report
- Document all accessibility findings and recommendations
- Obtain approval for proceeding to acceptance and signoff

**Inputs**
- **From:** All previous steps (complete accessibility review findings)

**Actions**
- Create accessibility review report:
  - **Executive Summary:** Overall accessibility review status, key findings summary
  - **WCAG Compliance:** WCAG compliance review, issues found
  - **Keyboard Navigation:** Keyboard navigation test results, issues found
  - **Screen Reader Compatibility:** Screen reader test results, issues found
  - **Color Contrast:** Color contrast test results, issues found
  - **ARIA Labels and Roles:** ARIA review results, issues found
  - **Semantic HTML:** Semantic HTML review results, issues found
  - **Accessibility Testing:** Accessibility test results (if applicable)
  - **Issues and Recommendations:** List of all accessibility issues, recommendations for fixes
  - **WCAG Compliance Status:** Overall WCAG compliance status, target level met
- Review accessibility review report:
  - Present report to:
    - QA Team/Lead
    - Frontend Technical Leads
    - Product Owner (for accessibility requirements)
    - Accessibility experts (if available)
  - Gather feedback
  - Address concerns
- Obtain approval:
  - Secure approval from QA Lead and Frontend Technical Lead
  - Document approval
  - Update Jira ticket with accessibility review report

**Decisions / Evaluations**
- **Decision:** Is accessibility review approved and ready for acceptance and signoff?
  - **Go:** If yes, procedure complete, ready for acceptance and signoff (if no critical accessibility issues)
  - **No-Go:** If no, address accessibility issues, fix implementation, re-review, re-seek approval

**Outputs**
- Accessibility review report created
- Accessibility findings documented
- Accessibility recommendations provided
- Approval obtained
- Ready for acceptance and signoff (if no critical accessibility issues)

**Failure Handling**
- **Failure:** Accessibility review not approved
  - **Action:** Address accessibility issues, fix implementation, re-review, update report, re-seek approval
  - **Retry:** Step 8 after accessibility issues are resolved and re-reviewed

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Accessibility Review Report** - Comprehensive report documenting:
  - WCAG compliance results
  - Keyboard navigation test results
  - Screen reader compatibility test results
  - Color contrast test results
  - ARIA labels and roles review results
  - Semantic HTML review results
  - Accessibility test results (if applicable)
  - Accessibility issues and recommendations
  - WCAG compliance status

**State changes:**
- Accessibility implementation reviewed
- WCAG compliance verified
- Accessibility issues identified and documented (if any)
- Ready for acceptance and signoff (if no critical accessibility issues)

**Decisions recorded:**
- Accessibility review decisions
- WCAG compliance decisions
- Accessibility issue prioritization decisions
- Accessibility review approval

**Signals emitted:**
- "Accessibility Review Complete" - Accessibility review executed and approved
- "Ready for Acceptance and Signoff" - Accessibility validated, ready for acceptance (if no critical issues)
- "Critical Accessibility Issues Found" - Critical accessibility issues must be fixed before deployment

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] WCAG compliance verified (target level)
- [ ] Keyboard navigation tested and working
- [ ] Screen reader compatibility tested and working
- [ ] Color contrast verified
- [ ] ARIA labels and roles verified
- [ ] Semantic HTML verified
- [ ] Accessibility test cases executed (if applicable)

**Reviews required:**
- [ ] Accessibility review report reviewed by QA Team/Lead
- [ ] Accessibility review report reviewed by Frontend Technical Leads
- [ ] Accessibility review report reviewed by Product Owner (for accessibility requirements)
- [ ] Approval obtained from QA Lead and Frontend Technical Lead

**Automated checks:**
- [ ] Automated accessibility scanning tools run
- [ ] Color contrast checkers run
- [ ] HTML validation run

**Who/what can approve completion:**
- **QA Lead** - Must approve accessibility review and WCAG compliance
- **Frontend Technical Lead** - Must approve accessibility implementation validation
- **Product Owner** - Must approve accessibility requirements validation

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Accessibility Review Report** → Input for [Acceptance & Signoff Procedure](./acceptance-signoff-procedure.md) (validates accessibility before acceptance)
- **Accessibility Review Report** → Input for [Implementation Verification Procedure](./implementation-verification-procedure.md) (confirms accessibility validation)

**Procedures that depend on this:**
- **[Acceptance & Signoff Procedure](./acceptance-signoff-procedure.md)** - Requires accessibility review approval before acceptance (for frontend features)
- **[Implementation Verification Procedure](./implementation-verification-procedure.md)** - May reference accessibility review results

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] WCAG compliance reviewed and verified (target level)
- [ ] Keyboard navigation tested and working
- [ ] Screen reader compatibility tested and working
- [ ] Color contrast verified
- [ ] ARIA labels and roles verified
- [ ] Semantic HTML verified
- [ ] Accessibility test cases executed (if applicable)
- [ ] Accessibility review report created
- [ ] Accessibility findings documented
- [ ] Accessibility recommendations provided
- [ ] Accessibility review report reviewed by QA Team/Lead, Frontend Technical Leads, and Product Owner
- [ ] Approval obtained from QA Lead and Frontend Technical Lead
- [ ] Jira ticket updated with accessibility review report
- [ ] Ready for acceptance and signoff (if no critical accessibility issues)

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with accessibility review report reference
- [ ] **Accessibility Review Report** - Report location and version
- [ ] **Frontend Implementation** - Link to frontend code/PRs
- [ ] **Test Plan Document** - Link to test plan (for accessibility test case traceability, if applicable)
- [ ] **Requirements Document** - Link to requirements (for accessibility requirements traceability)
- [ ] **Design Specifications** - Link to design specifications (for accessibility requirements)

**Audit trail:**
- **Accessibility review date** - When accessibility review was performed
- **Accessibility review performed by** - Who performed the accessibility review
- **WCAG compliance level** - Target and achieved WCAG level
- **Accessibility issues found** - Count and list of accessibility issues
- **Screen readers tested** - List of screen readers used for testing
- **Approval date** - When accessibility review was approved
- **Approved by** - Who approved the accessibility review

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- WCAG compliance verified (target level)
- Keyboard navigation working
- Screen reader compatibility working
- Accessibility review report created and approved
- Ready for acceptance and signoff

#### ⚠️ Blocked
- **Reason:** Missing frontend implementation, missing accessibility requirements, accessibility testing tools unavailable
- **Required action:** Address blockers (complete frontend implementation, obtain accessibility requirements, obtain testing tools)
- **Who to notify:** QA Lead, Frontend Technical Leads, Product Owner
- **Status:** Accessibility review paused until blockers resolved

#### ❌ Aborted
- **Reason:** Feature cancelled, frontend implementation significantly incomplete, no frontend feature
- **Required action:** Document why aborted, what was reviewed, update Jira ticket
- **Rollback required:** No (review only, no state to rollback)
- **Lessons learned:** Document why accessibility review was aborted

#### 🚫 Critical Accessibility Issues Found
- **Reason:** Critical accessibility issues found that must be fixed before deployment
- **Required action:** Document critical accessibility issues, coordinate with frontend team to fix, re-review after fixes
- **Status:** Accessibility review complete but deployment blocked until issues fixed
- **Next step:** Fix critical accessibility issues, re-run accessibility review, then proceed to acceptance

#### ⏭️ Skipped (No Frontend)
- **Reason:** Feature has no frontend implementation
- **Required action:** Document that accessibility review is not applicable
- **Status:** Accessibility review skipped
- **Next step:** Proceed to next QA procedure

---

## Usage Notes

### Accessibility Review Scope

- Accessibility Review focuses on **frontend accessibility** and **WCAG compliance**
- Accessibility Review is **conditional** - only invoked for features with frontend implementation
- If feature has no frontend, this procedure is skipped

### WCAG Compliance Levels

- **WCAG A:** Minimum level of accessibility
- **WCAG AA:** Standard level of accessibility (typically required)
- **WCAG AAA:** Highest level of accessibility (optional, for specific requirements)
- Target WCAG level should be defined in requirements

### Screen Reader Testing

- Screen reader testing should be performed with multiple screen readers
- At minimum, test with one screen reader (e.g., NVDA or VoiceOver)
- Testing with multiple screen readers helps identify compatibility issues

### Accessibility Standards

- Accessibility Review should reference Accessibility Standards (to be defined)
- Standards should define WCAG compliance requirements, testing requirements, and acceptance criteria

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** QA Team / Frontend Technical Lead
