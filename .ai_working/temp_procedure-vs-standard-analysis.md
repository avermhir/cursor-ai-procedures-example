# Procedure vs. Standard/Guideline Analysis

## Key Distinction

**Procedure (Executable Workflow):**
- Has triggers (when to invoke)
- Has ordered steps (what to do)
- Has inputs/outputs (what's needed, what's produced)
- Has failure handling (what to do when things go wrong)
- Is something you EXECUTE/DO

**Standard/Guideline (Reference Material):**
- Defines criteria/requirements (what should be true)
- Provides checklists (what to check)
- Documents best practices (how things should be)
- Is something you REFERENCE/CHECK AGAINST

## Analysis by Folder

### ✅ Clearly Procedures (Executable Workflows):
- **feature-lifecycle/** - All are executable workflows (Feature Intake, Requirements, Implementation, etc.)
- **design-system-lifecycle/** - Executable workflows (Create/Update Design System, Compliance Check, etc.)
- **pr-lifecycle/** - Executable workflows (PR Preparation, Code Review, etc.)
- **release-lifecycle/** - Executable workflows (Release Planning, Deployment, etc.)
- **incident-lifecycle/** - Executable workflows (Triage, Mitigation, etc.)
- **change-management-lifecycle/** - Executable workflows (Change Approval, Tracking, etc.)
- **api-lifecycle/** - Executable workflows (API Design, Implementation, Deprecation, etc.)
- **data-lifecycle/** - Executable workflows (Schema Change, Backfill, etc.)
- **authn-authz-lifecycle/** - Executable workflows (Identity Model, Token Management, etc.)
- **third-party-integration-lifecycle/** - Executable workflows (Vendor Evaluation, Integration, etc.)
- **security-lifecycle/** - Executable workflows (Secure Design Review, Incident Response, etc.)
- **observability-operations-lifecycle/** - Executable workflows (Logging Setup, Alerting, etc.)

### ⚠️ Mixed/Unclear (May Contain Standards):
- **sdlc-operating-system/** - Contains items that sound like STANDARDS:
  - "Repository Standards Procedure" - Is this a standard (what repo structure should be) or a procedure (how to create/update standards)?
  - "Code Review Standards Procedure" - Is this standards (what to check) or a procedure (how to review)?
  - "Definition of Done Procedure" - Could be a standard (criteria) or a procedure (how to establish criteria)
  - "Testing Standards Procedure" - Standards (what tests are required) or procedure (how to establish standards)?
  
  **Question:** Are these procedures FOR establishing/updating standards, or are they the standards themselves?

- **governance-compliance/** - Could be procedures OR compliance requirements:
  - "Data Privacy Procedure" - Procedure (how to ensure privacy) or standard (privacy requirements)?
  - "Audit Evidence Procedure" - Procedure (how to collect evidence) - this sounds like a procedure
  - "Access Review Procedure" - Procedure (how to conduct review) - this sounds like a procedure
  
  **Question:** Are these executable workflows or compliance checklists?

- **architecture-system-health/** - Mix of procedures and potentially standards:
  - "ADR Procedure" - Procedure (how to create ADRs) ✅
  - "Refactor Procedure" - Procedure (how to refactor) ✅
  - "Performance Tuning Procedure" - Procedure (how to tune) ✅
  - "Architecture Baseline Procedure" - Could be procedure (how to establish) or standard (what baseline is)
  
  **Question:** Are these all executable workflows?

- **testing-quality-lifecycle/** - Could be procedures OR standards:
  - "Unit Testing Procedure" - Procedure (how to write unit tests) or standard (unit test requirements)?
  - "CI Quality Gates Procedure" - Procedure (how to set up gates) or standard (what gates are required)?
  
  **Question:** Are these executable workflows or quality standards?

## Recommendation

### Option 1: Split into Two Structures
```
.ai_procedures/          - Executable workflows only
  ├── feature-lifecycle/
  ├── pr-lifecycle/
  ├── release-lifecycle/
  └── ...

.ai_standards/           - Reference material, criteria, requirements
  ├── sdlc-standards/    - Repository standards, code review standards, etc.
  ├── quality-standards/ - Testing standards, quality gates, etc.
  ├── compliance/        - Compliance requirements, audit criteria
  └── ...
```

### Option 2: Keep All as Procedures, But Clarify
- All items in `.ai_procedures/` are executable workflows
- "Repository Standards Procedure" = "How to establish/update repository standards"
- "Code Review Standards Procedure" = "How to conduct code review according to standards"
- Standards themselves are OUTPUTS of procedures, not separate documents

### Option 3: Hybrid - Procedures Reference Standards
- Procedures stay in `.ai_procedures/`
- Standards/guidelines are embedded IN procedures or referenced
- Some folders might need renaming to clarify they're procedures FOR managing standards

## Questions to Answer

1. **SDLC Operating System folder:**
   - Are these procedures FOR establishing standards? (executable)
   - Or are they the standards themselves? (reference material)

2. **Governance & Compliance folder:**
   - Are these executable workflows? (how to ensure compliance)
   - Or compliance checklists? (what compliance requires)

3. **Testing & Quality Lifecycle:**
   - Are these procedures for testing? (how to test)
   - Or testing standards? (what tests are required)

4. **Architecture & System Health:**
   - Are these all executable workflows?
   - Or some are standards/guidelines?

## Proposed Solution

**Rename folders to clarify they're procedures:**
- `sdlc-operating-system/` → `sdlc-standards-management-lifecycle/` (procedures for managing standards)
- OR split: Keep executable procedures, move standards to separate location

**Clarify in READMEs:**
- Each folder should clearly state: "These are executable workflows" vs "These are reference standards"
