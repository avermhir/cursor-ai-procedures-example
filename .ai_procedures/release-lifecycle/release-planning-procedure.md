# Procedure: Release Planning (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to plan a release: scope features, set target dates, assign ownership, and produce a release plan that downstream procedures (Versioning, Release Candidate, Deployment) consume. It aligns stakeholders on what ships and when.

**What problem it solves**

- Ad-hoc or unclear release scope
- Misalignment on target dates and priorities
- No single source of truth for release content
- Missing dependencies or risks for release
- Unclear ownership and communication plan

**What "success" looks like at the end**

- Release scope agreed and documented
- Target date and milestones set
- Ownership and communication plan defined
- Dependencies and risks identified
- Release plan approved and ready for Versioning Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- Calendar-based release cadence (e.g., bi-weekly, monthly)
- Product or engineering request to plan a new release
- Completion of prior release or milestone
- Strategic decision to ship a specific set of features

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Feature/backlog status** - List of completed or near-complete features and fixes
- [ ] **Prior release outcomes** - Post-release monitoring, retrospective, or incident learnings (if any)
- [ ] **Roadmap or priorities** - Product/engineering priorities for the release window

**Decisions already made:**
- [ ] **Release cadence** - Decision to create a release (e.g., next scheduled release)
- [ ] **Stakeholders identified** - Who must agree on scope and date

**Constraints:**
- [ ] **Stakeholder availability** - Key stakeholders available for planning
- [ ] **Tooling** - Jira, wiki, or release-tracking tool available

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing feature status** → Gather status from Feature Lifecycle or PR merge state
- **Missing priorities** → Escalate to Product/Engineering Lead for scope

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - Ordered steps from scope definition through approval
- **Scope criteria** - What is in/out (features, fixes, tech debt)
- **Target date and milestones** - Release date, code freeze, RC cut
- **Ownership** - Release manager, QA, DevOps
- **Communication** - Who is informed, when (stakeholders, support, customers)
- **Risks & unknowns** - Dependencies, external blockers

**Plan must be reviewed before execution begins**

**Output:**
- Release Planning Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Release Scope

**Purpose**
- Agree on features and fixes included in the release
- Align with product/engineering priorities

**Inputs**
- **From:** Procedure Required Inputs (feature/backlog status, roadmap/priorities)

**Actions**
- Collect candidate items: completed features, bug fixes, tech debt approved for release
- Apply inclusion criteria: done state, acceptance signoff, dependency readiness
- Document scope: list of Jira tickets/epics, short descriptions
- Identify must-have vs nice-to-have
- Document exclusions and rationale

**Decisions / Evaluations**
- **Decision:** Is scope agreed by stakeholders?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, refine scope and re-review

**Outputs**
- Release scope document (in/out list)
- Must-have vs nice-to-have
- Exclusions and rationale

**Failure Handling**
- **Failure:** Scope creep or disagreement
  - **Action:** Facilitate trade-off discussion, document decisions
  - **Retry:** Step 1 after scope is revised

---

#### Step 2: Set Target Date and Milestones

**Purpose**
- Set release target date and key milestones (code freeze, RC, deploy)

**Inputs**
- **From:** Step 1 outputs (release scope)

**Actions**
- Propose release target date based on scope and capacity
- Define milestones: code freeze date, release candidate cut date, staging validation window, production deploy date
- Check calendar for holidays, blackout periods, other releases
- Document milestone owners and handoffs
- Get stakeholder agreement on dates

**Decisions / Evaluations**
- **Decision:** Are target date and milestones agreed?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, adjust scope or dates and re-review

**Outputs**
- Release target date
- Milestone schedule (code freeze, RC, staging, production)
- Milestone owners

**Failure Handling**
- **Failure:** Unrealistic dates
  - **Action:** Reduce scope or extend date; document rationale
  - **Retry:** Step 2 after adjustment

---

#### Step 3: Assign Ownership and Communication Plan

**Purpose**
- Assign release manager and key roles; define who is informed and when

**Inputs**
- **From:** Step 2 outputs (milestone schedule)

**Actions**
- Assign release manager (single owner for release execution)
- Assign QA lead, DevOps lead (or equivalent)
- Define communication plan: stakeholders, support, customers (if applicable)
- Define communication triggers: RC cut, deploy, post-deploy status
- Document escalation path for blockers

**Decisions / Evaluations**
- **Decision:** Are ownership and communication plan agreed?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, assign owners and re-document

**Outputs**
- Release manager and role assignments
- Communication plan (who, when, what)
- Escalation path

**Failure Handling**
- **Failure:** Missing owner
  - **Action:** Escalate to engineering/product lead to assign
  - **Retry:** Step 3 after assignment

---

#### Step 4: Identify Dependencies and Risks

**Purpose**
- Surface external dependencies and risks that could delay or block release

**Inputs**
- **From:** Step 1–3 outputs (scope, milestones, ownership)

**Actions**
- List dependencies: other teams, third-party releases, infrastructure, compliance
- List risks: technical debt, known issues, resource constraints
- Assess likelihood and impact for each risk
- Document mitigation or acceptance for high-impact items
- Add contingency to schedule if needed

**Decisions / Evaluations**
- **Decision:** Are dependencies and risks documented and accepted?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If critical risk unaddressed, mitigate or adjust scope/dates

**Outputs**
- Dependencies list with owners
- Risks list with mitigation/acceptance
- Contingency (if any)

**Failure Handling**
- **Failure:** Critical dependency unowned
  - **Action:** Escalate; add to release plan as blocker until resolved
  - **Retry:** Step 4 after dependency is owned or scope changed

---

#### Step 5: Produce and Approve Release Plan

**Purpose**
- Compile release plan and obtain formal approval

**Inputs**
- **From:** Step 1–4 outputs (scope, milestones, ownership, dependencies/risks)

**Actions**
- Compile release plan document: scope, dates, milestones, owners, communication, dependencies, risks
- Store in agreed location (wiki, Jira, release tool)
- Submit for approval to defined stakeholders (e.g., Engineering Lead, Product)
- Record approval (date, approver)
- Communicate approved plan to release manager and team

**Decisions / Evaluations**
- **Decision:** Is release plan approved?
  - **Go:** If yes, release planning complete; ready for Versioning Procedure
  - **No-Go:** If no, address feedback and re-submit

**Outputs**
- Approved release plan document
- Approval record
- Plan communicated to team

**Failure Handling**
- **Failure:** Approval withheld
  - **Action:** Address feedback, update plan, re-submit
  - **Retry:** Step 5 after updates

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Release plan document (scope, dates, milestones, owners, communication, dependencies, risks)
- Approval record

**State changes:**
- Release has an agreed scope and target date
- Release is ready for Versioning Procedure

**Decisions recorded:**
- Scope in/out, target date, milestones, ownership, communication, risk acceptance

**Signals emitted:**
- "Release planned" - Release plan approved
- "Ready for versioning" - Input to Versioning Procedure

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Release scope is documented and agreed
- [ ] Target date and milestones are set and agreed
- [ ] Ownership and communication plan are defined
- [ ] Dependencies and risks are documented
- [ ] Release plan is approved

**Reviews required:**
- [ ] Stakeholder approval of release plan

**Who/what can approve completion:**
- **Engineering Lead** or **Product Owner** - Must approve release plan
- **Release Manager** - Acknowledges ownership

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Release plan** → Versioning Procedure (Release Lifecycle)
- **Release plan** → Release Candidate Procedure (Release Lifecycle)
- **Release plan** → Staging Validation Procedure, Production Readiness Review Procedure (schedule and scope)

**Procedures that depend on this:**
- Versioning Procedure (Release Lifecycle) - Uses release plan for version identifier
- Release Candidate Procedure (Release Lifecycle) - Uses scope and milestones
- Deployment Procedure (Release Lifecycle) - Uses release plan for deploy coordination

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Release scope documented and agreed
- [ ] Target date and milestones set and agreed
- [ ] Ownership and communication plan defined
- [ ] Dependencies and risks identified and documented
- [ ] Release plan approved and stored
- [ ] Plan communicated to release manager and team

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Release plan document
- [ ] Jira epic/release ticket (if used)
- [ ] Approval record (approver, date)

**Audit trail:**
- Release planning date
- Scope and date decisions
- Approval date and approver

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- Release plan approved
- Scope, date, milestones, ownership, communication, dependencies, risks documented
- Ready for Versioning Procedure

#### ⚠️ Blocked
- **Reason:** Missing priorities, stakeholder availability, or agreement on scope/date
- **Required action:** Resolve blockers; re-run planning when inputs available
- **Who to notify:** Release Manager, Engineering Lead
- **Status:** Release planning paused

#### ❌ Aborted
- **Reason:** Release cancelled or deferred (e.g., strategic change)
- **Required action:** Document reason; communicate to stakeholders
- **Lessons learned:** Capture why release was aborted or deferred

---

**Status:** Active Procedure  
**Owner:** Release Manager / Engineering Lead
