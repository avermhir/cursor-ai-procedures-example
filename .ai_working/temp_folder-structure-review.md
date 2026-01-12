# Folder Structure Review

## Current Structure Analysis

### Folders with `-lifecycle` suffix:
- `api-lifecycle/`
- `authn-authz-lifecycle/`
- `change-management-lifecycle/`
- `data-lifecycle/`
- `design-system-lifecycle/` ✅ (NEW - we created this)
- `feature-lifecycle/` ✅ (MAIN - we've been working on this)
- `incident-lifecycle/`
- `observability-operations-lifecycle/`
- `pr-lifecycle/`
- `release-lifecycle/`
- `security-lifecycle/`
- `testing-quality-lifecycle/`
- `third-party-integration-lifecycle/`

### Folders WITHOUT `-lifecycle` suffix:
- `architecture-system-health/`
- `governance-compliance/`
- `sdlc-operating-system/`

### Root Level Files (not in folders):
- `create-or-update-procedure.md` - Meta-procedure
- `procedure-template.md` - Template
- `start-a-task-procedure.md` - Task procedure
- `start-any-activity-procedure.md` - Entry point
- `session-startup-procedure.md` - Session startup
- `session-wrapup-procedure.md` - Session wrapup
- `jira-ticket-backlog-review-procedure.md` - Jira review
- `user-feedback-investigation-procedure.md` - User feedback
- `code-review-defect-prevention-procedure.md` - Code review
- `master-procedures-index.md` - Index

## Issues Identified

### 1. Naming Inconsistency
- Most folders use `-lifecycle` suffix
- Three folders don't: `architecture-system-health`, `governance-compliance`, `sdlc-operating-system`
- **Recommendation:** Standardize naming - either all use `-lifecycle` or none do

### 2. Root Level File Organization
- Several procedures are at root level that might belong in folders:
  - `jira-ticket-backlog-review-procedure.md` - Could be in `pr-lifecycle/` or `feature-lifecycle/`
  - `user-feedback-investigation-procedure.md` - Could be in `feature-lifecycle/` or new `user-feedback-lifecycle/`
  - `code-review-defect-prevention-procedure.md` - Could be in `pr-lifecycle/` or `sdlc-operating-system/`

### 3. Folder Naming Clarity
- `observability-operations-lifecycle/` - Long name, could be `observability-lifecycle/` or `operations-lifecycle/`
- `testing-quality-lifecycle/` - Could be `testing-lifecycle/` or `quality-lifecycle/`
- `architecture-system-health/` - Doesn't follow `-lifecycle` pattern

### 4. Potential Missing Folders
- No `user-feedback-lifecycle/` folder (user feedback investigation is at root)
- No `session-lifecycle/` folder (session startup/wrapup are at root)

## Recommendations

### Option A: Standardize to `-lifecycle` suffix everywhere
- Rename `architecture-system-health/` → `architecture-lifecycle/` or `architecture-system-health-lifecycle/`
- Rename `governance-compliance/` → `governance-compliance-lifecycle/`
- Rename `sdlc-operating-system/` → `sdlc-operating-system-lifecycle/` or `sdlc-standards-lifecycle/`

### Option B: Remove `-lifecycle` suffix (simpler names)
- Rename all `*-lifecycle/` folders to remove suffix
- Keep folder names shorter and clearer

### Option C: Hybrid (keep meaningful names)
- Keep `-lifecycle` for process-oriented folders
- Keep descriptive names for standards/operating-system folders
- But standardize the pattern

## Proposed Structure (Option A - Standardized)

```
.ai_procedures/
├── api-lifecycle/
├── architecture-lifecycle/ (renamed from architecture-system-health)
├── authn-authz-lifecycle/
├── change-management-lifecycle/
├── data-lifecycle/
├── design-system-lifecycle/
├── feature-lifecycle/
├── governance-compliance-lifecycle/ (renamed)
├── incident-lifecycle/
├── observability-lifecycle/ (renamed from observability-operations-lifecycle)
├── pr-lifecycle/
├── release-lifecycle/
├── security-lifecycle/
├── session-lifecycle/ (NEW - for session-startup, session-wrapup)
├── sdlc-standards-lifecycle/ (renamed from sdlc-operating-system)
├── testing-lifecycle/ (renamed from testing-quality-lifecycle)
├── third-party-integration-lifecycle/
├── user-feedback-lifecycle/ (NEW - for user-feedback-investigation)
├── Root level (meta-procedures only):
│   ├── create-or-update-procedure.md
│   ├── procedure-template.md
│   ├── start-any-activity-procedure.md
│   ├── start-a-task-procedure.md
│   ├── master-procedures-index.md
│   └── jira-ticket-backlog-review-procedure.md (or move to pr-lifecycle/)
```

## Questions to Consider

1. Should `jira-ticket-backlog-review-procedure.md` be moved to `pr-lifecycle/` or `feature-lifecycle/`?
2. Should `code-review-defect-prevention-procedure.md` be moved to `pr-lifecycle/` or `sdlc-standards-lifecycle/`?
3. Do we want all folders to have `-lifecycle` suffix for consistency?
4. Should session procedures have their own folder or stay at root?
