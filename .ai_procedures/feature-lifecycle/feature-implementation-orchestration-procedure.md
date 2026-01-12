# Procedure: Feature Implementation Orchestration

### 1. Purpose

**Why this procedure exists**

This procedure orchestrates the complete feature implementation workflow from planning through deployment. It coordinates all prerequisite, implementation, and post-implementation procedures to ensure features are developed systematically and efficiently.

**What problem it solves**

- Unclear sequence of procedures for feature development
- Missing prerequisites discovered mid-implementation
- Lack of coordination between implementation layers
- Incomplete feature delivery due to missing post-implementation steps
- Inefficient parallel execution of procedures

**What "success" looks like at the end**

A fully implemented, tested, verified, and ready-to-deploy feature that:
- All prerequisites completed
- All implementation layers complete
- All quality assurance procedures completed
- Documentation and runbooks complete
- Acceptance signoff obtained
- Ready for deployment

---

### 2. Trigger

**What causes this procedure to be invoked**

- New feature needs to be implemented
- Feature Intake Procedure has been completed
- Ready to begin systematic feature implementation workflow
- Feature requirements are defined at high level

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Feature definition** - High-level feature description (from Feature Intake Procedure or equivalent)
- [ ] **Initial requirements** - Basic feature requirements (may be high-level initially)

**Decisions already made:**
- [ ] **Feature is approved** - Feature has been approved for development
- [ ] **Resources allocated** - Development resources are available

**Constraints:**
- [ ] **Timeline constraints** - Any deadlines or timeline requirements
- [ ] **Resource constraints** - Team availability, budget constraints

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing feature definition** → Invoke [Feature Intake Procedure](./feature-intake-procedure.md) first
- **Feature not approved** → Obtain approval before proceeding

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 6 phases: Planning & Design → Technical Design → Implementation → QA → Pre-Deployment → Deployment
- **Procedures to be invoked** - All feature lifecycle procedures in correct sequence
- **Dependencies between steps** - Prerequisites must complete before dependent procedures
- **Risks & unknowns** - Missing prerequisites, API contract changes, coordination issues
- **Validation points** - After each phase, before proceeding to next phase

**Plan must be reviewed before execution begins**

**Output:**
- Feature Implementation Plan (documented and approved)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Phase 1: Planning & Design

**Purpose**
- Complete all planning and design prerequisites
- Ensure feature is well-defined before implementation

**Inputs**
- **From:** Procedure Required Inputs (feature definition)
- Feature Intake Procedure outputs (if invoked)

**Actions**
- Invoke [Feature Intake Procedure](./feature-intake-procedure.md) (if not already completed)
- Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md)
- Invoke [User Journey/UX Procedure](./user-journey-ux-procedure.md) (in parallel with Architecture Review)
- Invoke [Architecture Review Procedure](./architecture-review-procedure.md) (in parallel with User Journey/UX)
- Invoke [Threat Model Procedure](./threat-model-procedure.md)
- Validate UX design aligns with design system via [Design System Compliance Procedure](../design-system-lifecycle/design-system-compliance-procedure.md) (after UX design complete)
- Verify all planning outputs are complete

**Decisions / Evaluations**
- **Decision:** Are all planning outputs complete?
  - **Go:** If yes, proceed to Phase 2
  - **No-Go:** If no, complete missing planning procedures

**Outputs**
- Feature requirements defined
- User journeys and UX designs complete
- Architecture decisions made
- Threat model complete
- Ready for technical design

**Failure Handling**
- **Failure:** Planning outputs incomplete
  - **Action:** Complete missing planning procedures
  - **Retry:** Phase 1 after completing missing procedures

---

#### Phase 2: Technical Design

**Purpose**
- Complete all technical design prerequisites
- Define technical specifications before implementation

**Inputs**
- **From:** Phase 1 outputs (planning complete)
- Architecture decisions
- Requirements

**Actions**
- Invoke [API Discovery Procedure](../api-lifecycle/api-discovery-procedure.md) (CRITICAL - discover existing APIs before designing new ones)
- Invoke [Data Design Procedure](./data-design-procedure.md) (for backend features)
- Invoke [Backwards Compatibility Procedure](../api-lifecycle/backwards-compatibility-procedure.md) (if API changes may affect existing consumers - determines if backwards compatibility is required)
- Invoke [API Contract Procedure](./api-contract-procedure.md) (CRITICAL - all layers depend on this, uses API Discovery results and backwards compatibility decision)
- Invoke [Third-Party Integration Procedure](./third-party-integration-procedure.md) (if third-party services needed)
- Invoke [AuthN/AuthZ Procedure](./authn-authz-procedure.md) (if authentication/authorization needed)
- Verify API contracts are stable and complete
- Coordinate API contract freeze (if needed)

**Decisions / Evaluations**
- **Decision:** Are all technical design outputs complete?
  - **Go:** If yes, proceed to Phase 3
  - **No-Go:** If no, complete missing technical design procedures
- **Decision:** Are API contracts stable?
  - **Go:** If yes, proceed to Phase 3
  - **No-Go:** If no, stabilize API contracts before proceeding

**Outputs**
- Existing APIs discovered and documented
- Data design complete (if applicable)
- Backwards compatibility requirement determined (if API changes involved)
- API contracts defined and stable (informed by API Discovery and backwards compatibility decision)
- Third-party integration specs (if applicable)
- AuthN/AuthZ requirements (if applicable)
- Ready for implementation

**Failure Handling**
- **Failure:** API contracts not stable
  - **Action:** Establish API contract freeze, complete contract definition
  - **Retry:** Phase 2 after API contracts are stable
- **Failure:** Technical design incomplete
  - **Action:** Complete missing technical design procedures
  - **Retry:** Phase 2 after completing missing procedures

---

#### Phase 3: Implementation

**Purpose**
- Implement feature across all layers
- Coordinate parallel implementation where possible

**Inputs**
- **From:** Phase 2 outputs (technical design complete)
- API contracts (stable)
- Data design (if applicable)
- Design specifications (for frontend)

**Actions**
- **Start parallel procedures (can begin after API contracts stable):**
  - Invoke [Test Plan Procedure](./test-plan-procedure.md) (test planning)
  - Invoke [Documentation & Runbook Procedure](./documentation-runbook-procedure.md) (draft documentation)
  - Invoke [IaC/Infrastructure Update Procedure](./iac-infrastructure-update-procedure.md) (if infrastructure changes needed)

- **Start implementation layers (can run in parallel once API contracts stable):**
  - Invoke [Backend Implementation Procedure](./backend-implementation-procedure.md)
  - Invoke [Frontend Implementation Procedure](./frontend-implementation-procedure.md)
  - Invoke [Middleware Implementation Procedure](./middleware-implementation-procedure.md)

- **Coordinate implementation:**
  - Monitor progress across all layers
  - Handle change requests via [Change Management Procedure](./change-management-procedure.md) (if requirements/contracts change)
  - Coordinate API contract changes (if needed)
  - Coordinate shared data models
  - Coordinate authentication approach
  - Schedule regular sync points
  - Validate architecture compliance via [Architecture Compliance Validation Procedure](./architecture-compliance-validation-procedure.md) (checkpoints during implementation)

- **Continuous PR reviews:**
  - Create PRs as each layer completes logical units
  - Follow PR Lifecycle for code reviews
  - Don't wait for all layers to complete before creating PRs

**Decisions / Evaluations**
- **Decision:** Are all implementation layers complete?
  - **Go:** If yes, proceed to Phase 4
  - **No-Go:** If no, continue implementation or address blockers

**Outputs**
- Backend implementation complete
- Frontend implementation complete
- Middleware implementation complete (if applicable)
- Infrastructure updates complete (if applicable)
- Test plan created
- Documentation draft created
- All PRs reviewed and merged
- Ready for quality assurance

**Failure Handling**
- **Failure:** API contract changes needed during implementation
  - **Action:** Invoke [Change Management Procedure](./change-management-procedure.md), coordinate changes across all layers, update contracts
  - **Retry:** Phase 3 with updated contracts
- **Failure:** Requirements change during implementation
  - **Action:** Invoke [Change Management Procedure](./change-management-procedure.md), assess impact, update requirements
  - **Retry:** Phase 3 with updated requirements (may need to revisit Phase 1 or 2)
- **Failure:** Implementation layer blocked
  - **Action:** Address blockers, may need to revisit Phase 2
  - **Retry:** Phase 3 after blockers resolved

---

#### Phase 4: Quality Assurance

**Purpose**
- Verify implementation is complete and correct
- Test performance and observability
- Execute test plans

**Inputs**
- **From:** Phase 3 outputs (implementation complete)
- Test plan (from Phase 3)
- Implementation code

**Actions**
- Invoke [Implementation Verification Procedure](./implementation-verification-procedure.md)
- Execute test plan (from [Test Plan Procedure](./test-plan-procedure.md))
- Invoke [Integration Testing Procedure](./integration-testing-procedure.md) (when at least two layers are complete)
- Invoke [End-to-End Testing Procedure](./end-to-end-testing-procedure.md) (after integration testing)
- Invoke [Post-Implementation Architecture Assessment Procedure](./post-implementation-architecture-assessment-procedure.md)
- Invoke [Security Review Procedure](./security-review-procedure.md)
- Invoke [Accessibility Review Procedure](./accessibility-review-procedure.md) (for frontend features)
- Invoke [Performance & Resilience Procedure](./performance-resilience-procedure.md)
- Invoke [Observability Instrumentation Procedure](./observability-instrumentation-procedure.md)
- Address any issues found during QA

**Decisions / Evaluations**
- **Decision:** Does implementation pass all QA checks?
  - **Go:** If yes, proceed to Phase 5
  - **No-Go:** If no, address issues and retest

**Outputs**
- Implementation verified
- Integration tests executed and passing
- End-to-end tests executed and passing
- Architecture assessment complete
- Security review complete
- Accessibility review complete (for frontend)
- Performance tested
- Observability configured
- Ready for pre-deployment

**Failure Handling**
- **Failure:** QA checks fail
  - **Action:** Address issues, may require returning to Phase 3
  - **Retry:** Phase 4 after issues resolved

---

#### Phase 5: Pre-Deployment

**Purpose**
- Finalize documentation
- Prepare for deployment
- Obtain signoff

**Inputs**
- **From:** Phase 4 outputs (QA complete)
- Documentation draft (from Phase 3)

**Actions**
- Finalize [Documentation & Runbook Procedure](./documentation-runbook-procedure.md)
- Invoke [Feature Flag / Rollout Procedure](./feature-flag-rollout-procedure.md)
- Invoke [Acceptance & Signoff Procedure](./acceptance-signoff-procedure.md)
- Verify all pre-deployment requirements met

**Decisions / Evaluations**
- **Decision:** Is acceptance signoff obtained?
  - **Go:** If yes, proceed to Phase 6
  - **No-Go:** If no, address signoff requirements

**Outputs**
- Documentation finalized
- Feature flags configured
- Rollout plan created
- Acceptance signoff obtained
- Ready for deployment

**Failure Handling**
- **Failure:** Signoff not obtained
  - **Action:** Address signoff requirements, may need to revisit earlier phases
  - **Retry:** Phase 5 after requirements met

---

#### Phase 6: Deployment

**Purpose**
- Deploy feature to production
- Validate deployment
- Monitor post-deployment

**Inputs**
- **From:** Phase 5 outputs (signoff obtained)
- Deployment artifacts
- Feature flag configuration

**Actions**
- Invoke Release Lifecycle procedures:
  - Deployment Procedure
  - Post-Deploy Validation Procedure
  - Post-Release Monitoring Procedure
- Monitor feature in production
- Address any deployment issues

**Decisions / Evaluations**
- **Decision:** Is deployment successful and validated?
  - **Go:** If yes, feature implementation complete
  - **No-Go:** If no, address deployment issues or rollback

**Outputs**
- Feature deployed to production
- Deployment validated
- Monitoring active
- Feature implementation complete

**Failure Handling**
- **Failure:** Deployment fails
  - **Action:** Invoke [Rollback Procedure](./rollback-procedure.md), investigate issues
  - **Retry:** Phase 6 after issues resolved
- **Failure:** Post-deploy validation fails
  - **Action:** Address validation issues, may require invoking [Rollback Procedure](./rollback-procedure.md)
  - **Retry:** Phase 6 after issues resolved

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Fully implemented feature** - All layers implemented and deployed
- **Complete documentation** - Feature documentation and runbooks
- **Test results** - Test execution results and coverage
- **Deployment artifacts** - Deployed feature in production

**State changes:**
- Feature is live in production
- Monitoring and observability active
- Documentation available
- Team trained on feature

**Decisions recorded:**
- Architecture decisions
- API contract decisions
- Implementation approach
- Deployment approach

**Signals emitted:**
- "Feature Implementation Complete" - Feature is deployed and validated
- "Ready for Production" - Feature passed all checks and is in production

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] All implementation layers complete
- [ ] All QA procedures passed
- [ ] Acceptance signoff obtained
- [ ] Deployment successful
- [ ] Post-deploy validation passed

**Reviews required:**
- [ ] Architecture review (Phase 1)
- [ ] Code reviews (Phase 3 - PR Lifecycle)
- [ ] QA review (Phase 4)
- [ ] Acceptance review (Phase 5)

**Automated checks:**
- [ ] All tests pass
- [ ] Code quality checks pass
- [ ] Performance tests pass
- [ ] Deployment automation succeeds

**Who/what can approve completion:**
- **Product Owner** - Must approve feature acceptance
- **Tech Lead** - Must approve technical implementation
- **QA Lead** - Must approve quality assurance
- **DevOps** - Must approve deployment

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Feature Implementation** → Input for Release Lifecycle (deployment)
- **Feature Implementation** → Input for Incident Lifecycle (if issues arise)
- **Feature Implementation** → Input for future feature development (patterns, learnings)

**Procedures that depend on this:**
- **Release Lifecycle** - Deploys the feature
- **Incident Lifecycle** - May be triggered by feature issues
- **Future Feature Development** - Uses patterns and learnings

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] All Phase 1 (Planning & Design) procedures completed
- [ ] All Phase 2 (Technical Design) procedures completed
- [ ] All Phase 3 (Implementation) procedures completed
- [ ] All Phase 4 (Quality Assurance) procedures completed
- [ ] Integration testing completed
- [ ] End-to-end testing completed
- [ ] Architecture assessment completed
- [ ] Security review completed
- [ ] Accessibility review completed (for frontend features)
- [ ] All Phase 5 (Pre-Deployment) procedures completed
- [ ] Phase 6 (Deployment) completed successfully
- [ ] Feature is live in production
- [ ] Post-deploy validation passed
- [ ] Monitoring and observability active
- [ ] Documentation complete
- [ ] Acceptance signoff obtained
- [ ] All tests passing
- [ ] All code reviews approved

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Commits** - All implementation commits
- [ ] **PRs** - All PRs created during implementation
- [ ] **Tickets** - Jira ticket for the feature
- [ ] **Procedures** - All procedures invoked during implementation
- [ ] **ADRs** - Architecture Decision Records
- [ ] **Test Reports** - Test execution results

**Audit trail:**
- **Feature start date** - When implementation began
- **Feature completion date** - When feature was deployed
- **Procedures executed** - List of all procedures invoked
- **Decisions made** - Key decisions during implementation
- **Issues encountered** - Blockers and resolutions
- **Deployment details** - Deployment date, version, environment

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All phases completed
- Feature deployed to production
- Post-deploy validation passed
- Monitoring active
- Feature is live and operational

#### ⚠️ Blocked
- **Reason:** Missing prerequisites, API contract instability, or resource constraints
- **Required action:** Address blockers, may need to revisit earlier phases
- **Who to notify:** Product Owner, Tech Lead
- **Status:** Implementation paused until blockers resolved

#### ❌ Aborted
- **Reason:** Feature requirements changed significantly, or implementation approach not viable
- **Required action:** Document why aborted, what was completed, cleanup if needed
- **Rollback required:** Yes - remove incomplete code, revert changes
- **Lessons learned:** Document what made implementation unviable

#### 🔄 Partial Deployment
- **Reason:** Feature deployed but some functionality deferred
- **Required action:** Document what was deployed vs. deferred
- **Status:** Core functionality live, deferred features in backlog
- **Next steps:** Complete deferred features in follow-up work

---

## Usage Notes

### Coordination Points

**Critical coordination points during implementation:**

1. **API Contract Stability** - Must be stable before all implementation layers begin
2. **Data Model Agreement** - Backend needs this first, but frontend/middleware need to understand it
3. **Authentication Consistency** - All layers must use consistent approach
4. **Regular Sync Points** - Schedule regular syncs when running layers in parallel

### Parallel Execution Strategy

**For maximum efficiency:**

- Start test planning early (after API contracts)
- Run Backend, Frontend, and Middleware in parallel once contracts are stable
- Create PRs incrementally, not all at once
- Start documentation drafts during implementation
- Prepare infrastructure changes in parallel

### Risk Mitigation

- Establish API contract freeze date before implementation begins
- Schedule regular syncs between implementation teams
- Start integration testing as soon as two layers are ready
- Don't wait until the end to test performance

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Feature Development Team
