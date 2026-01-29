# Procedure: ADR (Architecture Decision Record)

### 1. Purpose

**Why this procedure exists**

This procedure creates and maintains Architecture Decision Records (ADRs). It ensures significant architecture decisions are documented with context, options, and rationale so that future work and audits can understand why the system is the way it is.

**What problem it solves**

- Architecture decisions lost or unclear over time
- No record of options considered or rationale
- New contributors or auditors cannot understand past decisions
- Repeated debates over already-decided topics

**What "success" looks like at the end**

An ADR that includes:
- Status and title
- Context and problem statement
- Options considered and decision
- Rationale and consequences
- ADR reviewed and stored; linked from baseline or feature docs

---

### 2. Trigger

**What causes this procedure to be invoked**

- A significant architecture decision is made or proposed (technology, pattern, boundary, integration approach)
- [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md) produces decisions that must be recorded
- [Architecture Baseline Procedure](./architecture-baseline-procedure.md) or governance requires ADRs for key decisions
- Team or stakeholder requests an ADR for a past or pending decision

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Decision to record** – What was decided (or proposed) and why it is significant
- [ ] **Context** – Problem or driver that led to the decision
- [ ] **Options considered** – At least the chosen option and one alternative (or “no alternative” if documented)
- [ ] **Existing ADRs** – Location and format of existing ADRs (for consistency and linking)

**Decisions already made:**
- [ ] **Decision made or proposed** – The actual decision (or draft) to record

**Constraints:**
- [ ] **Format** – ADR format (e.g. title, status, context, decision, consequences) per org or repo standard

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing context or options** – Gather from decision-makers or document “as discussed”; add follow-up if needed
- **Missing format** – Use standard ADR template (context, decision, consequences)

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Ordered steps from draft through approval and storage
- **ADR scope** – Single decision or set of related decisions
- **Stakeholders** – Who should review or approve
- **Location** – Where ADR will be stored (docs/adr/, wiki, repo)
- **Risks & unknowns** – Missing context, disputed rationale

**Plan must be reviewed before execution begins**

**Output:**
- ADR Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Draft ADR

**Purpose**
- Produce a complete ADR draft with context, options, decision, and consequences

**Inputs**
- **From:** Procedure Required Inputs (decision, context, options, existing ADRs)

**Actions**
- **Title** – Short, descriptive title (e.g. “Use Postgres for primary data store”).
- **Status** – Proposed, Accepted, Deprecated, Superseded (with reference if applicable).
- **Context** – What problem or driver led to this decision; what constraints exist.
- **Decision** – What was decided; state clearly and concisely.
- **Options considered** – List options (including the chosen one); brief pros/cons if helpful.
- **Rationale** – Why this option was chosen.
- **Consequences** – Expected positive and negative consequences; follow-up actions if any.
- **References** – Links to related ADRs, docs, or tickets.
- Use existing ADR format and numbering (e.g. ADR-001, ADR-002) if defined.
- Store draft in agreed location.

**Decisions / Evaluations**
- **Decision:** Is ADR draft complete and consistent with existing ADRs?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, complete draft and re-check

**Outputs**
- ADR draft (title, status, context, decision, options, rationale, consequences)
- Draft stored in ADR location

**Failure Handling**
- **Failure:** Missing context or disputed rationale
  - **Action:** Gather from decision-makers; document assumptions; add follow-up to clarify

---

#### Step 2: Review and Approve ADR

**Purpose**
- Have ADR reviewed and approved; finalize status

**Inputs**
- **From:** Step 1 outputs (ADR draft)

**Actions**
- Submit ADR for review (tech lead, architect, or stakeholders as defined).
- Incorporate feedback; update draft.
- Obtain approval from defined authority.
- Set status to Accepted (or Proposed if approval is deferred).
- Record approval date and approver.
- Link ADR from architecture baseline or feature docs where relevant.

**Decisions / Evaluations**
- **Decision:** Is ADR approved and status set?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, update and re-submit

**Outputs**
- Approved ADR with status and approval record
- ADR linked where relevant

**Failure Handling**
- **Failure:** Approval withheld (e.g. inaccuracy or missing context)
  - **Action:** Update ADR and re-submit

---

### 6. Output Contract

**Artifacts produced:** ADR document (title, status, context, decision, options, rationale, consequences).  
**State changes:** Decision recorded and approved; available for reference and audit.  
**Signals emitted:** “ADR created” / “ADR updated”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] ADR contains title, status, context, decision, rationale, consequences
- [ ] Options considered documented (or “no alternative” explained)
- [ ] ADR approved and stored; linked where relevant

**Who can approve:** Tech lead, architect, or decision owner

---

### 8. Downstream Dependencies

**Output → Input:** ADR → [Architecture Baseline Procedure](./architecture-baseline-procedure.md), [Architecture Review Procedure](../feature-lifecycle/architecture-review-procedure.md), refactor and decommission procedures (for rationale and constraints).

---

### 9. Definition of Done

- [ ] ADR drafted with required sections
- [ ] ADR reviewed and approved
- [ ] ADR stored and linked; status and approval recorded

---

### 10. Audit & Traceability

**Links to:** ADR document, related ADRs, baseline or feature docs. **Audit trail:** ADR id, date, approver, status.

---

### 11. Exit States

**✅ Completed successfully** – ADR created/updated, approved, stored.  
**⚠️ Blocked** – Missing context or approval; resolve and re-run.  
**❌ Aborted** – Decision reversed or ADR no longer needed; supersede or deprecate with reason.

---

**Status:** Active Procedure  
**Owner:** Tech lead / Architect / Decision owner
