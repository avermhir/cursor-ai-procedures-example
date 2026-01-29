# Code Review Standards

## Overview

This document defines standards and requirements for code reviews. These standards define **what a code review must verify** and **how approval is determined**. They serve as reference material for PR review procedures (Code Quality & Style, Security Review, Data/Migration Review, API/Contract Compatibility, Frontend Review, Infra/IaC Review, etc.) and for the Merge/Squash/Rebase Procedure.

**Note:** These are **standards/guidelines** (reference material), not executable procedures. For executable workflows, see:
- [PR Preparation Procedure](../../.ai_procedures/pr-lifecycle/pr-preparation-procedure.md) - Prepares PR for review
- [Code Quality & Style Procedure](../../.ai_procedures/pr-lifecycle/code-quality-style-procedure.md) - Quality and style review
- [Merge/Squash/Rebase Procedure](../../.ai_procedures/pr-lifecycle/merge-squash-rebase-procedure.md) - Merge only after all reviews complete
- [Change Summary & Risk Procedure](../../.ai_procedures/pr-lifecycle/change-summary-risk-procedure.md) - Determines which review procedures apply

---

## Code Review Requirements

### Scope of Review

- **All changed lines** - Review must consider all modified and added code in the PR diff. Deleted code must be checked for unintended removal.
- **Context** - Review must consider impact on existing behavior, callers, and downstream systems (APIs, data, UI).
- **Standards** - Review must validate against applicable standards: [API Security Standards](../security-standards/api-security-standards.md), [Data Design Standards](./data-design-standards.md), [IaC Standards](./iac-standards.md), [Testing Standards](./testing-standards.md), and project-specific rules (e.g., static analysis checklist).

### Review Checklist (Minimum)

A code review **must** confirm or explicitly defer the following, as applicable to the change:

1. **Correctness** - Logic is correct; edge cases and error paths are handled; no obvious bugs or regressions.
2. **Security** - No new security risks; auth/authz, input validation, and secrets handling are correct. Security-sensitive changes trigger [Security Review Procedure](../../.ai_procedures/pr-lifecycle/security-review-procedure.md).
3. **Data and schema** - Schema and migration changes are safe and reversible where required. Data-related changes trigger [Data/Migration Review Procedure](../../.ai_procedures/pr-lifecycle/data-migration-review-procedure.md).
4. **API and contracts** - API and contract changes are backward-compatible or explicitly versioned/breaking and documented. Contract changes trigger [API/Contract Compatibility Procedure](../../.ai_procedures/pr-lifecycle/api-contract-compatibility-procedure.md) and [Backwards Compatibility Procedure](../../.ai_procedures/pr-lifecycle/backwards-compatibility-procedure.md).
5. **Frontend** - UI/UX, accessibility, and design system usage are acceptable. Frontend changes trigger [Frontend Review Procedure](../../.ai_procedures/pr-lifecycle/frontend-review-procedure.md).
6. **Infrastructure** - IaC and infra changes follow [IaC Standards](./iac-standards.md) and are reviewed via [Infra/IaC Review Procedure](../../.ai_procedures/pr-lifecycle/infra-iac-review-procedure.md).
7. **Tests** - Adequate tests for the change; tests pass and are maintainable. See [Testing Standards](./testing-standards.md).
8. **Documentation** - User- and developer-facing docs are updated where behavior or contracts change.
9. **Style and consistency** - Code follows project style (formatting, naming, patterns). [Code Quality & Style Procedure](../../.ai_procedures/pr-lifecycle/code-quality-style-procedure.md) and any static analysis checklist apply.
10. **No unintended side effects** - No leftover debug code, commented-out blocks (unless justified), or unrelated changes.

### Review Procedure Mapping

- **Change Summary & Risk Procedure** determines which review procedures are required (Security, Data/Migration, API/Contract, Frontend, Infra/IaC, etc.).
- Each required procedure must complete and approve (or explicitly defer with documented rationale) before merge.
- [Merge/Squash/Rebase Procedure](../../.ai_procedures/pr-lifecycle/merge-squash-rebase-procedure.md) must confirm all required reviews are complete and approved.

---

## Review Approval Requirements

### Who May Approve

- **Code review approval** - Must come from at least one reviewer who is not the PR author (or as defined by org policy, e.g., two reviewers for critical paths).
- **Specialized reviews** - Security, data, API, frontend, and infra reviews must be approved by someone with the relevant expertise or role (as defined by procedures).
- **Ownership** - Approval authority may be constrained by code ownership or team (e.g., infra changes require infra team approval).

### Approval Criteria

- **Approve** only when:
  - All required review procedures for the PR have been completed and passed (or explicitly deferred with rationale).
  - The review checklist (minimum) has been satisfied for the scope of the change.
  - No blocking issues remain; non-blocking follow-ups may be tracked as separate work.
- **Request changes** when:
  - Blocking issues exist (correctness, security, data safety, breaking contract, or standards violation).
  - Required tests or documentation are missing.
- **Comment-only** - Use when providing non-blocking feedback; do not block merge unless criteria above are not met.

### What Must Be Documented

- **Review outcome** - Approved, or request changes with clear list of blocking items.
- **Deferrals** - If a full review is deferred (e.g., to feature-level Security Review), document the deferral and that PR-level checks were still performed.
- **Non-blocking follow-ups** - Optional: list follow-up work (tickets or comments) so they are not lost.

---

## Consistency with Procedures

- PR review procedures (Security, Data/Migration, API/Contract, Frontend, Infra/IaC, Code Quality & Style, etc.) implement these standards for their domain.
- The static analysis checklist (e.g., in `.cursor/rules/static-analysis-checklist.mdc`) should be used where applicable and aligned with these standards.
- New review types (e.g., Observability Review, Performance Review) should define their approval criteria in procedure form and reference this document.

---

## Related Standards

- [Testing Standards](./testing-standards.md) - Test coverage and quality
- [IaC Standards](./iac-standards.md) - Infrastructure review
- [API Security Standards](../security-standards/api-security-standards.md) - API security review
- [Data Design Standards](./data-design-standards.md) - Data and schema review
