# Procedure: Code Quality & Style

### 1. Purpose

**Why this procedure exists**

This procedure ensures code in pull requests meets quality standards, follows consistent style guidelines, and adheres to project conventions. It provides systematic review of code quality and style to maintain codebase consistency and prevent technical debt.

**What problem it solves**

- Inconsistent code style across the codebase
- Code quality issues not caught before merge
- Technical debt accumulation
- Code that doesn't follow project conventions
- Poor code readability and maintainability
- Missing or inadequate code documentation
- Code that violates best practices
- Inconsistent patterns and approaches

**What "success" looks like at the end**

Code review results that include:
- Code quality standards verified
- Code style consistency verified
- Project conventions followed
- Code readability and maintainability confirmed
- Best practices followed
- Code documentation adequate
- Quality issues identified and addressed
- Code approved for merge (if quality standards met)

---

### 2. Trigger

**What causes this procedure to be invoked**

- [PR Preparation Procedure](./pr-preparation-procedure.md) has been completed (PR is ready for review)
- Code review is being performed on a pull request
- Need to verify code quality and style standards
- PR reviewer is evaluating code quality
- Automated quality checks need manual review

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Pull Request** - PR with code changes (from PR Preparation Procedure)
- [ ] **Code changes** - All code changes in the PR
- [ ] **Linting results** - Results from automated linting (if available)
- [ ] **Code quality tools** - ESLint, Prettier, TypeScript compiler, etc.

**Decisions already made:**
- [ ] **PR is prepared** - PR Preparation Procedure has been completed
- [ ] **Code is ready for review** - Code is complete and functional

**Constraints:**
- [ ] **Code quality standards** - Must meet project code quality standards
- [ ] **Style guidelines** - Must follow project style guidelines
- [ ] **Project conventions** - Must follow project conventions and patterns
- [ ] **Static Analysis Checklist** - Must comply with [Static Analysis Checklist](../../.cursor/rules/static-analysis-checklist.mdc)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing PR** → Ensure PR Preparation Procedure is completed first
- **Missing linting results** → Run linting tools, obtain results
- **Code quality standards unclear** → Review project standards, consult team lead

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from automated checks through quality approval
- **Procedures to be invoked** - [Code Review Defect Prevention Procedure](../code-review-defect-prevention-procedure.md) (for defect patterns)
- **Dependencies between steps** - Automated Checks → Code Structure → Style Consistency → Conventions → Best Practices → Documentation → Patterns → Approval
- **Risks & unknowns** - Quality standards unclear, style guidelines ambiguous, conventions inconsistent
- **Validation points** - After automated checks, after style review, after conventions check, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Code Quality & Style Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Run Automated Quality Checks

**Purpose**
- Run automated code quality tools
- Identify automated quality issues
- Verify automated checks pass
- Review automated check results

**Inputs**
- **From:** Procedure Required Inputs (code changes, linting tools)

**Actions**
- Run automated linting:
  - **ESLint (or equivalent):**
    - Run linting command (e.g., `npm run lint`)
    - Review linting errors and warnings
    - Identify fixable issues
    - Document non-fixable issues (if any)
  - **Prettier (or equivalent):**
    - Run formatting check (e.g., `npm run format:check`)
    - Verify code is properly formatted
    - Identify formatting issues
- Run type checking (if applicable):
  - **TypeScript compiler:**
    - Run type checking (e.g., `npm run type-check`)
    - Review type errors
    - Verify type safety
- Run build verification:
  - **Build check:**
    - Verify code builds successfully
    - Check for build warnings
    - Verify no build errors
- Review automated check results:
  - **Results analysis:**
    - Categorize issues (errors, warnings, info)
    - Identify critical issues
    - Identify style issues
    - Document findings

**Decisions / Evaluations**
- **Decision:** Do automated checks pass?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, require fixes before proceeding
- **Decision:** Are there critical quality issues?
  - **Go:** If no, proceed to Step 2
  - **No-Go:** If yes, require fixes before proceeding

**Outputs**
- Automated check results reviewed
- Quality issues identified
- Automated checks passing (or issues documented)

**Failure Handling**
- **Failure:** Automated checks fail
  - **Action:** Require developer to fix issues, re-run checks, verify fixes
  - **Retry:** Step 1 after fixes applied
- **Failure:** Critical quality issues found
  - **Action:** Block PR until issues fixed, document required fixes
  - **Retry:** Step 1 after critical issues fixed

---

#### Step 2: Review Code Structure and Organization

**Purpose**
- Verify code is well-structured
- Ensure proper file organization
- Verify code organization follows project patterns
- Check for dead code and unused files

**Inputs**
- **From:** Step 1 outputs (automated checks passed), Procedure Required Inputs (code changes)

**Actions**
- Review file structure:
  - **File organization:**
    - Verify files are in correct directories
    - Verify file naming follows conventions
    - Verify file structure matches project patterns
    - Check for misplaced files
  - **File naming:**
    - Verify file names follow conventions
    - Verify file extensions are correct
    - Check for inconsistent naming
- Review code organization:
  - **Code structure:**
    - Verify code is logically organized
    - Verify functions/classes are properly structured
    - Verify modules are well-organized
    - Check for overly complex files
  - **Import organization:**
    - Verify imports are organized correctly
    - Verify imports use correct paths (barrel exports vs. deep paths)
    - Check for unused imports
    - Verify import order follows conventions
- Check for dead code:
  - **Unused code:**
    - Identify unused functions/classes
    - Identify unused imports
    - Identify commented-out code
    - Identify duplicate code
  - **Dead files:**
    - Check for unused files
    - Check for old/backup files (e.g., `*-old.tsx`)
    - Verify barrel files are updated
- Reference [Static Analysis Checklist](../../.cursor/rules/static-analysis-checklist.mdc) for structure requirements

**Decisions / Evaluations**
- **Decision:** Is code structure appropriate?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, require structure improvements
- **Decision:** Is file organization correct?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, require file organization fixes

**Outputs**
- Code structure reviewed
- File organization verified
- Dead code identified (if any)
- Structure issues documented (if any)

**Failure Handling**
- **Failure:** Code structure doesn't follow patterns
  - **Action:** Require structure improvements, provide guidance on correct patterns
  - **Retry:** Step 2 after structure improved
- **Failure:** Dead code or unused files found
  - **Action:** Require removal of dead code, clean up unused files
  - **Retry:** Step 2 after cleanup

---

#### Step 3: Review Code Style Consistency

**Purpose**
- Verify code follows style guidelines
- Ensure consistent formatting
- Check naming conventions
- Verify style consistency across changes

**Inputs**
- **From:** Step 2 outputs (structure reviewed), Procedure Required Inputs (code changes)

**Actions**
- Review code formatting:
  - **Formatting consistency:**
    - Verify indentation is consistent
    - Verify spacing is consistent
    - Verify line length follows guidelines
    - Verify bracket/brace style is consistent
  - **Prettier/formatting:**
    - Verify code is formatted with Prettier (or equivalent)
    - Verify formatting matches project style
    - Check for formatting inconsistencies
- Review naming conventions:
  - **Variable naming:**
    - Verify variable names follow conventions (camelCase, snake_case, etc.)
    - Verify variable names are descriptive
    - Check for inconsistent naming
  - **Function/class naming:**
    - Verify function names follow conventions
    - Verify class names follow conventions
    - Verify naming is consistent with project
  - **File naming:**
    - Verify file names follow conventions
    - Verify component names match file names
- Review code style patterns:
  - **Style patterns:**
    - Verify consistent use of patterns
    - Verify style matches existing codebase
    - Check for style deviations
- Reference [Static Analysis Checklist](../../.cursor/rules/static-analysis-checklist.mdc) for style requirements

**Decisions / Evaluations**
- **Decision:** Is code style consistent?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, require style fixes
- **Decision:** Do naming conventions match project?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, require naming fixes

**Outputs**
- Code style reviewed
- Style consistency verified
- Style issues documented (if any)

**Failure Handling**
- **Failure:** Code style inconsistent
  - **Action:** Require style fixes, run formatter, verify consistency
  - **Retry:** Step 3 after style fixes
- **Failure:** Naming conventions violated
  - **Action:** Require naming fixes, provide naming guidelines
  - **Retry:** Step 3 after naming fixes

---

#### Step 4: Review Project Conventions and Patterns

**Purpose**
- Verify code follows project conventions
- Ensure consistent use of patterns
- Check for anti-patterns
- Verify adherence to project standards

**Inputs**
- **From:** Step 3 outputs (style reviewed), Procedure Required Inputs (code changes)

**Actions**
- Review project conventions:
  - **Routing conventions:**
    - Verify routes are consistent and typed
    - Verify route patterns follow conventions
    - Check route parameter handling
  - **Component conventions:**
    - Verify components follow project patterns
    - Verify component structure matches conventions
    - Check component usage patterns
  - **API conventions:**
    - Verify API calls follow conventions
    - Verify error handling follows patterns
    - Check API client usage
- Review design system usage:
  - **Component usage:**
    - Verify components from design system are used
    - Verify imports use barrel exports (`@/components`)
    - Check for raw HTML when components exist
    - Verify CSS variables and tokens are used
  - **Icon usage:**
    - Verify icons use `ConDIcons` (or project icon system)
    - Check for hardcoded icons
- Review internationalization:
  - **i18n conventions:**
    - Verify no hardcoded strings
    - Verify `useTranslations()` is used
    - Verify translation keys exist in all locales
    - Check for removed/renamed keys cleanup
- Reference [Static Analysis Checklist](../../.cursor/rules/static-analysis-checklist.mdc) for convention requirements

**Decisions / Evaluations**
- **Decision:** Does code follow project conventions?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, require convention fixes
- **Decision:** Are patterns used consistently?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, require pattern alignment

**Outputs**
- Project conventions reviewed
- Pattern usage verified
- Convention issues documented (if any)

**Failure Handling**
- **Failure:** Code doesn't follow conventions
  - **Action:** Require convention fixes, provide convention guidelines
  - **Retry:** Step 4 after convention fixes
- **Failure:** Patterns used inconsistently
  - **Action:** Require pattern alignment, provide pattern examples
  - **Retry:** Step 4 after pattern alignment

---

#### Step 5: Review Code Best Practices

**Purpose**
- Verify code follows best practices
- Check for common anti-patterns
- Ensure code is maintainable
- Verify performance considerations

**Inputs**
- **From:** Step 4 outputs (conventions reviewed), Procedure Required Inputs (code changes)

**Actions**
- Review React best practices (if applicable):
  - **Hooks best practices:**
    - Verify hooks follow rules-of-hooks
    - Verify dependency arrays are correct
    - Check for stale closures
    - Verify cleanup functions in useEffect
  - **Component best practices:**
    - Verify components are properly structured
    - Verify props are handled correctly
    - Check for unnecessary re-renders
    - Verify memoization is used appropriately
- Review state management:
  - **State best practices:**
    - Verify state updates are immutable
    - Verify state is properly managed
    - Check for state management patterns
    - Verify context/provider usage
- Review performance:
  - **Performance best practices:**
    - Verify unnecessary re-fetching is avoided
    - Verify caching/memoization where appropriate
    - Check for large inline objects/arrays
    - Verify code-splitting where appropriate
- Review error handling:
  - **Error handling best practices:**
    - Verify errors are handled properly
    - Verify user feedback is provided
    - Check for silent failures
    - Verify error logging is appropriate
- Reference [Code Review Defect Prevention Procedure](../code-review-defect-prevention-procedure.md) for common bug patterns

**Decisions / Evaluations**
- **Decision:** Does code follow best practices?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, require best practice improvements
- **Decision:** Are anti-patterns avoided?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, require anti-pattern fixes

**Outputs**
- Best practices reviewed
- Anti-patterns identified (if any)
- Best practice issues documented (if any)

**Failure Handling**
- **Failure:** Code violates best practices
  - **Action:** Require best practice improvements, provide guidance
  - **Retry:** Step 5 after improvements
- **Failure:** Anti-patterns found
  - **Action:** Require anti-pattern fixes, provide pattern alternatives
  - **Retry:** Step 5 after fixes

---

#### Step 6: Review Code Documentation

**Purpose**
- Verify code is adequately documented
- Ensure comments are helpful and accurate
- Check for missing documentation
- Verify documentation quality

**Inputs**
- **From:** Step 5 outputs (best practices reviewed), Procedure Required Inputs (code changes)

**Actions**
- Review code comments:
  - **Comment quality:**
    - Verify complex logic has comments
    - Verify comments are helpful and accurate
    - Check for outdated comments
    - Verify comments explain "why" not just "what"
  - **Function/class documentation:**
    - Verify functions have JSDoc/TypeDoc comments (if applicable)
    - Verify complex functions are documented
    - Check for missing documentation
- Review inline documentation:
  - **Inline comments:**
    - Verify comments are appropriate
    - Verify comments are not redundant
    - Check for comment quality
- Review README/documentation updates:
  - **Documentation updates:**
    - Verify README is updated (if applicable)
    - Verify API documentation is updated (if applicable)
    - Check for missing documentation updates

**Decisions / Evaluations**
- **Decision:** Is code adequately documented?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, require documentation improvements
- **Decision:** Is documentation quality acceptable?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, require documentation quality improvements

**Outputs**
- Code documentation reviewed
- Documentation adequacy verified
- Documentation issues documented (if any)

**Failure Handling**
- **Failure:** Code documentation inadequate
  - **Action:** Require documentation improvements, provide documentation guidelines
  - **Retry:** Step 6 after documentation improved
- **Failure:** Documentation quality poor
  - **Action:** Require documentation quality improvements, provide examples
  - **Retry:** Step 6 after quality improved

---

#### Step 7: Review Code Patterns and Consistency

**Purpose**
- Verify code patterns are consistent
- Check for pattern violations
- Ensure code matches existing codebase patterns
- Verify pattern usage is appropriate

**Inputs**
- **From:** Step 6 outputs (documentation reviewed), Procedure Required Inputs (code changes)

**Actions**
- Review code patterns:
  - **Pattern consistency:**
    - Verify code uses established patterns
    - Verify patterns match existing codebase
    - Check for pattern deviations
    - Verify pattern usage is appropriate
  - **API patterns:**
    - Verify API calls follow established patterns
    - Verify error handling follows patterns
    - Check for pattern consistency
  - **State management patterns:**
    - Verify state management follows patterns
    - Verify state patterns are consistent
    - Check for pattern violations
- Review consistency with codebase:
  - **Codebase consistency:**
    - Verify code matches existing codebase style
    - Verify patterns match existing patterns
    - Check for inconsistencies
- Reference [Code Review Defect Prevention Procedure](../code-review-defect-prevention-procedure.md) for pattern checks

**Decisions / Evaluations**
- **Decision:** Are code patterns consistent?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, require pattern consistency fixes
- **Decision:** Does code match codebase patterns?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, require pattern alignment

**Outputs**
- Code patterns reviewed
- Pattern consistency verified
- Pattern issues documented (if any)

**Failure Handling**
- **Failure:** Code patterns inconsistent
  - **Action:** Require pattern consistency fixes, provide pattern examples
  - **Retry:** Step 7 after pattern fixes
- **Failure:** Code doesn't match codebase patterns
  - **Action:** Require pattern alignment, review existing codebase patterns
  - **Retry:** Step 7 after alignment

---

#### Step 8: Approve or Request Changes

**Purpose**
- Make final quality and style decision
- Approve code if quality standards met
- Request changes if quality issues remain
- Document review findings

**Inputs**
- **From:** All previous step outputs (complete quality review)

**Actions**
- Review all findings:
  - **Findings summary:**
    - Review all quality issues found
    - Review all style issues found
    - Review all convention issues found
    - Categorize issues (critical, important, minor)
  - **Quality assessment:**
    - Assess overall code quality
    - Assess style consistency
    - Assess convention adherence
    - Assess best practice compliance
- Make approval decision:
  - **Approve if:**
    - All critical issues resolved
    - Code quality standards met
    - Style guidelines followed
    - Conventions followed
    - Best practices followed
  - **Request changes if:**
    - Critical quality issues remain
    - Style guidelines violated
    - Conventions not followed
    - Best practices violated
- Document review:
  - **Review comments:**
    - Provide constructive feedback
    - Explain quality issues
    - Suggest improvements
    - Acknowledge good practices
  - **Approval status:**
    - Approve PR (if quality standards met)
    - Request changes (if issues remain)
    - Add review comments
- Communicate decision:
  - **Decision communication:**
    - Approve PR with comments (if minor issues)
    - Request changes with detailed feedback
    - Provide guidance on fixes needed

**Decisions / Evaluations**
- **Decision:** Do code quality standards meet requirements?
  - **Go:** If yes, approve PR
  - **No-Go:** If no, request changes
- **Decision:** Are all critical issues resolved?
  - **Go:** If yes, approve PR
  - **No-Go:** If no, request changes

**Outputs**
- Code quality review complete
- Approval decision made
- Review feedback provided
- PR approved or changes requested

**Failure Handling**
- **Failure:** Quality standards not met
  - **Action:** Request changes, provide detailed feedback, require fixes
  - **Retry:** Step 8 after developer addresses issues
- **Failure:** Critical issues remain
  - **Action:** Block PR, request changes, provide priority guidance
  - **Retry:** Step 8 after critical issues fixed

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Code Quality Review** - Complete review of code quality and style
  - Automated check results
  - Code structure review
  - Style consistency review
  - Convention adherence review
  - Best practice review
  - Documentation review
  - Pattern consistency review
- **Review Feedback** - Constructive feedback on code quality
- **Approval Decision** - Approval or change request decision

**State changes:**
- Code quality verified
- Style consistency verified
- PR approved or changes requested

**Decisions recorded:**
- Quality standard compliance decisions
- Style guideline compliance decisions
- Convention adherence decisions
- Best practice compliance decisions
- Approval decisions

**Signals emitted:**
- "Code Quality Approved" - Code meets quality standards
- "Code Quality Changes Requested" - Code needs quality improvements
- "Ready for Next Review" - Quality review complete, ready for other reviews

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Automated quality checks pass
- [ ] Code structure is appropriate
- [ ] Code style is consistent
- [ ] Project conventions are followed
- [ ] Best practices are followed
- [ ] Code documentation is adequate

**Reviews required:**
- [ ] Code quality review completed
- [ ] Review feedback provided
- [ ] Approval decision made

**Automated checks:**
- [ ] Linting passes
- [ ] Formatting is correct
- [ ] Type checking passes (if applicable)
- [ ] Build succeeds

**Who/what can approve completion:**
- **Code Reviewer** - Must review and approve code quality
- **Tech Lead** - May review for critical quality issues

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Code Quality Review** → Input for [Merge/Squash/Rebase Procedure](./merge-squash-rebase-procedure.md) (quality must be approved before merge)
- **Review Feedback** → Input for developer (to address quality issues)

**Procedures that depend on this:**
- **Merge/Squash/Rebase Procedure** - Requires code quality approval before merge

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Automated quality checks run and reviewed
- [ ] Code structure reviewed and appropriate
- [ ] Code style reviewed and consistent
- [ ] Project conventions reviewed and followed
- [ ] Best practices reviewed and followed
- [ ] Code documentation reviewed and adequate
- [ ] Code patterns reviewed and consistent
- [ ] Review feedback provided
- [ ] Approval decision made
- [ ] All quality standards met (or issues documented)
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Pull Request** - PR number/URL
- [ ] **Code Review** - Review comments and feedback
- [ ] **Quality Issues** - List of quality issues found and resolved

**Audit trail:**
- **Review date** - When code quality review was performed
- **Reviewer** - Who performed the review
- **Quality issues found** - List of quality issues identified
- **Issues resolved** - Status of quality issues
- **Approval decision** - Whether code quality was approved
- **Review duration** - Time spent on review

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Code quality standards met
- Code approved for merge
- Review feedback provided

#### ⚠️ Blocked
- **Reason:** Quality standards unclear, automated checks failing, critical issues found
- **Required action:** Address blocker (clarify standards, fix checks, fix critical issues)
- **Who to notify:** Developer, tech lead
- **Status:** Quality review paused until blocker resolved

#### ❌ Changes Requested
- **Reason:** Code quality issues found, style violations, convention violations
- **Required action:** Developer must address quality issues, resubmit for review
- **Rollback required:** No (no merge)
- **Lessons learned:** Document common quality issues for future prevention
- **Next step:** Developer addresses issues, resubmits for review

#### 🔄 Partial Approval
- **Reason:** Minor quality issues found but not blocking, style inconsistencies acceptable
- **Required action:** Document minor issues, approve with suggestions for future improvement
- **Status:** Code approved but with minor quality notes
- **Next step:** Proceed to other reviews, address minor issues in future PRs

---

## Usage Notes

### Integration with Static Analysis Checklist

- Code Quality & Style Procedure should reference [Static Analysis Checklist](../../.cursor/rules/static-analysis-checklist.mdc)
- Checklist provides specific quality and style requirements
- Procedure ensures checklist items are verified

### Integration with Defect Prevention

- Code Quality & Style Procedure complements [Code Review Defect Prevention Procedure](../code-review-defect-prevention-procedure.md)
- Defect Prevention focuses on specific bug patterns
- Quality & Style focuses on general quality and consistency

### Continuous Improvement

- Gather feedback on quality standards
- Refine quality criteria based on experience
- Update standards based on team feedback

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Development Team / Code Reviewers
