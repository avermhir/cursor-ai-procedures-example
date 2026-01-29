# Procedure: Customer/Stakeholder Comms (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure defines how to communicate release information to customers and stakeholders. It ensures the right audiences are informed at the right time with accurate, consistent messaging (what shipped, breaking changes, known issues, support) so that adoption and support are smooth.

**What problem it solves**

- Customers or stakeholders not informed about releases or breaking changes
- Inconsistent or inaccurate release messaging across channels
- No single place to define who gets what message and when
- Support or sales unaware of release content or known issues
- Missing or late communication for high-impact or breaking changes

**What "success" looks like at the end**

Customer/stakeholder comms that include:
- Audience and channel plan defined (who, when, what channel)
- Release content summarized (what shipped, highlights, breaking changes, known issues)
- Messages drafted and approved
- Messages sent according to plan
- Feedback or escalation path documented

---

### 2. Trigger

**What causes this procedure to be invoked**

- Release is planned or scheduled (from [Release Planning Procedure](./release-planning-procedure.md))
- Release has been deployed or is about to deploy (from [Deployment Procedure](./deployment-procedure.md) or [Post-Deploy Validation Procedure](./post-deploy-validation-procedure.md))
- Release contains user-facing or breaking changes that require communication
- Communication plan is part of release plan (from Release Planning Procedure)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Release plan** – From [Release Planning Procedure](./release-planning-procedure.md) (scope, target date, communication plan if defined)
- [ ] **Release notes / release content** – What shipped (from [Release Notes Procedure](../pr-lifecycle/release-notes-procedure.md) or release aggregation)
- [ ] **Deployment status** – Deployed or scheduled (from Deployment or Post-Deploy Validation)
- [ ] **Audience and channel list** – Who to notify and which channels (email, in-app, blog, support, sales)

**Decisions already made:**
- [ ] **Release scope and date** – Release plan approved
- [ ] **Communication owner** – Who owns drafting and sending comms

**Constraints:**
- [ ] **Timing** – Comms should align with deploy (pre-announce, post-deploy, or both per plan)
- [ ] **Accuracy** – Content must match actual release (no premature or incorrect claims)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing release notes** – Aggregate from PRs or create summary from release scope
- **Missing audience/channel list** – Define from release plan or org standard (support, customers, internal)

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – Ordered steps from audience/channel through send and feedback
- **Audience and channels** – Who gets what (customers, support, sales, internal) and which channel (email, in-app, blog, Slack, etc.)
- **Timing** – When each message goes out (pre-announce, deploy day, post-deploy)
- **Content** – Summary, highlights, breaking changes, known issues, support link
- **Approval** – Who approves messages before send
- **Risks & unknowns** – Sensitive or high-impact messaging, escalation path

**Plan must be reviewed before execution begins**

**Output:**
- Customer/Stakeholder Comms Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Define Audience and Channels

**Purpose**
- Identify who receives release communication and through which channels

**Inputs**
- **From:** Procedure Required Inputs (release plan, audience and channel list)

**Actions**
- List audiences: customers (all or segment), support, sales, internal stakeholders, partners (if applicable).
- List channels: email, in-app banner or notification, blog, release notes page, Slack/Teams, support portal.
- Map audience to channel (e.g. all customers → email + in-app; support → internal Slack + release notes link).
- Confirm timing per audience (e.g. internal before customers, support before deploy).
- Document audience and channel plan.

**Decisions / Evaluations**
- **Decision:** Audience and channels defined and agreed?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, agree with release manager or product; re-document

**Outputs**
- Audience and channel plan
- Timing per audience/channel

**Failure Handling**
- **Failure:** Unclear who to notify
  - **Action:** Default to release plan communication section or org standard; document

---

#### Step 2: Draft Release Content for Each Audience

**Purpose**
- Draft accurate, consistent messaging for each audience and channel

**Inputs**
- **From:** Step 1 outputs (audience, channels)
- **From:** Procedure Required Inputs (release notes, release content)

**Actions**
- **Summary** – What shipped (features, fixes, improvements). Keep concise; link to full release notes.
- **Highlights** – Top 2–3 user-facing or developer-facing changes.
- **Breaking changes** – Clear list and link to migration or upgrade guide.
- **Known issues** – Any known issues or limitations; workaround or ETA if available.
- **Support** – Where to get help (docs, support link, community).
- **Tone** – Match channel and audience (customers: clear and helpful; internal: can be more technical).
- Draft separate variants per audience/channel if needed (e.g. short in-app, longer email).
- Ensure content matches actual release (no pre-announce of unshipped features unless explicitly “coming soon”).

**Decisions / Evaluations**
- **Decision:** Drafts complete for all audiences and channels?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If not, complete drafts and re-review

**Outputs**
- Draft messages per audience/channel
- Release content summary (highlights, breaking, known issues, support)

**Failure Handling**
- **Failure:** Content inconsistent with release
  - **Action:** Align with release notes and deployment status; do not send until accurate

---

#### Step 3: Review and Approve Messages

**Purpose**
- Ensure messages are accurate, appropriate, and approved before send

**Inputs**
- **From:** Step 2 outputs (draft messages)

**Actions**
- **Accuracy** – Content matches release notes and deployment status.
- **Clarity** – Language is clear and non-ambiguous for each audience.
- **Completeness** – Breaking changes and known issues are included where relevant.
- **Tone and compliance** – No overpromise; compliant with org or legal requirements (e.g. no forward-looking claims without disclaimer).
- Obtain approval from defined approver (release manager, product, or comms owner).
- Document approval (date, approver).
- If changes requested: update drafts and re-approve.

**Decisions / Evaluations**
- **Decision:** Messages approved?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If not, update and re-approve

**Outputs**
- Approved messages per audience/channel
- Approval record

**Failure Handling**
- **Failure:** Approval withheld (e.g. inaccuracy or tone)
  - **Action:** Fix content and re-submit for approval

---

#### Step 4: Send Messages According to Plan

**Purpose**
- Send release communication at the agreed time and channel

**Inputs**
- **From:** Step 3 outputs (approved messages)
- **From:** Step 1 outputs (timing, channels)

**Actions**
- Send messages per audience and channel at agreed times (pre-announce, deploy day, post-deploy).
- Use correct distribution lists, segments, or channels (email list, in-app audience, Slack channel).
- Record send time and channel for each audience (for audit and follow-up).
- If send fails (e.g. email bounce, tool error): retry or escalate per org process; document.

**Decisions / Evaluations**
- **Decision:** All planned messages sent?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If not, retry or escalate; document

**Outputs**
- Messages sent (time, channel, audience)
- Send log or record

**Failure Handling**
- **Failure:** Send failure for critical audience
  - **Action:** Retry; escalate to comms or release manager; document

---

#### Step 5: Document and Hand Off Feedback Path

**Purpose**
- Document what was sent and ensure feedback or escalation path is clear

**Inputs**
- **From:** Step 4 outputs (send record)

**Actions**
- Document comms summary: audience, channel, time, content summary (highlights, breaking, known issues).
- Ensure support and release manager know comms were sent and have link to release notes.
- Document feedback or escalation path (e.g. support ticket tag, Slack channel, release manager).
- Store comms plan and send record in agreed location (wiki, release tool, Jira).
- If post-release monitoring or retrospective references comms: link to this procedure output.

**Decisions / Evaluations**
- **Decision:** Comms documented and feedback path clear?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, complete documentation and hand-off

**Outputs**
- Comms summary and send record
- Feedback/escalation path documented
- Hand-off to support/release manager

**Failure Handling**
- **Failure:** Documentation or hand-off incomplete
  - **Action:** Complete before closing procedure

---

### 6. Output Contract

**Artifacts produced:** Comms plan, draft and approved messages, send record, comms summary.  
**State changes:** Customers and stakeholders informed per plan.  
**Signals emitted:** “Customer/stakeholder comms complete”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Audience and channels defined and agreed
- [ ] Messages drafted and approved
- [ ] Messages sent per plan
- [ ] Comms documented and feedback path clear

**Who can approve:** Release manager, product, or comms owner

---

### 8. Downstream Dependencies

**Output → Input:** Comms summary and send record → [Post-Release Monitoring Procedure](./post-release-monitoring-procedure.md), [Release Retrospective Procedure](./release-retrospective-procedure.md) (for feedback and lessons learned).

---

### 9. Definition of Done

- [ ] Audience and channel plan defined and agreed
- [ ] Release content drafted for each audience/channel
- [ ] Messages reviewed and approved
- [ ] Messages sent according to plan
- [ ] Comms documented and feedback path clear

---

### 10. Audit & Traceability

**Links to:** Release plan, release notes, send record, comms summary. **Audit trail:** Draft date, approval date, send date, audience and channel.

---

### 11. Exit States

**✅ Completed successfully** – Comms sent per plan; documented; feedback path clear.  
**⚠️ Blocked** – Missing approval or send failure; resolve and re-send or document exception.  
**❌ Aborted** – Release cancelled or comms no longer required; document reason.

---

**Status:** Active Procedure  
**Owner:** Release manager / Comms owner / Product
