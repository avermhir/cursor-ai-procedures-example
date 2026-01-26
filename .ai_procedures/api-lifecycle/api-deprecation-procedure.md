# Procedure: API Deprecation

### 1. Purpose

**Why this procedure exists**

This procedure systematically deprecates APIs that are no longer needed, ensuring proper migration planning, clear communication to API consumers, and smooth transition to replacement APIs or removal. It prevents breaking changes from impacting consumers unexpectedly and ensures APIs are retired in a controlled, well-communicated manner.

**What problem it solves**

- APIs removed without warning, breaking consumers
- No migration path for API consumers
- Confusion about which APIs are deprecated vs. active
- Multiple API versions maintained indefinitely
- Technical debt from unused APIs
- Security risks from unmaintained APIs
- Lack of deprecation communication
- Consumers unaware of API retirement plans

**What "success" looks like at the end**

A successfully deprecated API that includes:
- Deprecation decision documented and approved
- Migration plan created for consumers
- Deprecation communicated to all consumers
- Deprecation timeline established
- Replacement API available (if applicable)
- Deprecation warnings added to API responses
- Documentation updated with deprecation notices
- API removed after deprecation period
- All consumers migrated or notified

---

### 2. Trigger

**What causes this procedure to be invoked**

- API is no longer needed (replaced, obsolete, or unused)
- API has security vulnerabilities that cannot be fixed
- API maintenance burden is too high
- API is being replaced by a better alternative
- Business decision to retire API
- Technical decision to consolidate APIs
- API violates new architecture standards
- API has low or no usage

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **API to deprecate** - API endpoint(s) or version to deprecate
- [ ] **API usage data** - Current usage statistics, consumer list, usage patterns
- [ ] **API documentation** - Current API documentation (from [API Documentation Procedure](./api-documentation-procedure.md))
- [ ] **OpenAPI specification** - Current OpenAPI spec for API being deprecated
- [ ] **Replacement API** - New API that replaces deprecated API (if applicable)
- [ ] **Migration guide** - Guide for migrating from deprecated to replacement API (if applicable)

**Decisions already made:**
- [ ] **Deprecation reason** - Why API is being deprecated
- [ ] **Replacement strategy** - Whether API has replacement or is being removed
- [ ] **Deprecation timeline** - When deprecation will occur and when API will be removed

**Constraints:**
- [ ] **Backwards compatibility** - Must consider backwards compatibility requirements (from [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md))
- [ ] **Consumer impact** - Must minimize impact on API consumers
- [ ] **Communication requirements** - Must communicate deprecation clearly and early
- [ ] **Migration support** - Must provide migration support to consumers

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing API usage data** → Collect usage data, identify consumers, analyze usage patterns
- **Missing replacement API** → Determine if replacement is needed, create replacement API if required
- **Missing migration guide** → Create migration guide if replacement API exists
- **Deprecation reason unclear** → Document deprecation reason, get approval for deprecation

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from deprecation decision through API removal
- **Procedures to be invoked** - [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md) (for compatibility assessment), [API Documentation Procedure](./api-documentation-procedure.md) (for documentation updates)
- **Dependencies between steps** - Decision → Assessment → Migration Plan → Communication → Warnings → Monitoring → Removal → Cleanup
- **Risks & unknowns** - Consumer impact, migration complexity, timeline constraints, replacement API availability
- **Validation points** - After consumer assessment, after migration plan, after communication, before removal

**Plan must be reviewed before execution begins**

**Output:**
- API Deprecation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Assess API Usage and Consumer Impact

**Purpose**
- Understand current API usage
- Identify all API consumers
- Assess impact of deprecation
- Determine deprecation feasibility

**Inputs**
- **From:** Procedure Required Inputs (API to deprecate, API usage data)

**Actions**
- Collect API usage data:
  - **Usage statistics:**
    - Number of API calls per day/week/month
    - Number of unique consumers
    - Usage trends (increasing, decreasing, stable)
    - Peak usage times
  - **Consumer identification:**
    - List all API consumers (internal, external)
    - Identify consumer types (frontend apps, backend services, third-party integrations)
    - Identify critical consumers (high usage, business-critical)
  - **Usage patterns:**
    - Which endpoints are used most
    - Which endpoints are unused
    - Usage by consumer
    - Usage by feature/use case
- Assess consumer impact:
  - **Impact assessment:**
    - Which consumers will be affected
    - How critical each consumer is
    - What functionality depends on API
    - Estimated migration effort per consumer
  - **Risk assessment:**
    - Risk of breaking consumers
    - Risk of business impact
    - Risk of migration failures
- Determine deprecation feasibility:
  - **Feasibility factors:**
    - Is replacement API available?
    - Can consumers migrate?
    - Is deprecation timeline feasible?
    - Are there blockers to deprecation?
- Document assessment:
  - Create consumer impact assessment document
  - List all consumers and their impact
  - Document usage statistics
  - Document risks and blockers

**Decisions / Evaluations**
- **Decision:** Is API usage low enough to deprecate?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, reconsider deprecation or plan for high-usage migration
- **Decision:** Is consumer impact acceptable?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, adjust deprecation plan or timeline
- **Decision:** Is deprecation feasible?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, address blockers or reconsider deprecation

**Outputs**
- API usage assessment complete
- Consumer impact assessment complete
- Deprecation feasibility determined
- Assessment document created

**Failure Handling**
- **Failure:** Cannot identify all consumers
  - **Action:** Use multiple methods to identify consumers (logs, API gateway, monitoring), contact known consumers
  - **Retry:** Step 1 after identifying consumers
- **Failure:** Consumer impact too high
  - **Action:** Adjust deprecation timeline, create better migration plan, or reconsider deprecation
  - **Retry:** Step 1 after adjusting plan

---

#### Step 2: Create Migration Plan

**Purpose**
- Plan migration from deprecated API to replacement (if applicable)
- Create migration guide for consumers
- Define migration timeline
- Plan migration support

**Inputs**
- **From:** Step 1 outputs (consumer impact assessment), Procedure Required Inputs (replacement API, migration guide)

**Actions**
- Determine migration approach:
  - **If replacement API exists:**
    - Map deprecated API endpoints to replacement API endpoints
    - Identify differences between APIs
    - Create migration mapping
  - **If no replacement API:**
    - Determine if replacement is needed
    - Plan API removal (consumers must find alternative)
    - Document alternative solutions
- Create migration guide:
  - **Migration overview:**
    - Why API is being deprecated
    - What replaces the API
    - Migration timeline
    - Support resources
  - **Step-by-step migration:**
    - Step 1: [Example: Update authentication]
      - What to change
      - How to change it
      - Code examples
    - Step 2: [Example: Update endpoint URLs]
      - What to change
      - How to change it
      - Code examples
    - Step 3: [Example: Update request/response handling]
      - What to change
      - How to change it
      - Code examples
  - **API differences:**
    - List all differences between deprecated and replacement APIs
    - Breaking changes
    - New features in replacement API
    - Removed features
  - **Code examples:**
    - Before (using deprecated API)
    - After (using replacement API)
    - Migration code examples
- Define migration timeline:
  - **Deprecation announcement date**
  - **Deprecation warning start date**
  - **Migration period start date**
  - **Migration period end date**
  - **API removal date**
  - **Support period**
- Plan migration support:
  - **Support resources:**
    - Migration documentation
    - Migration examples
    - Support channels (email, Slack, etc.)
    - Office hours or consultation
  - **Support timeline:**
    - When support is available
    - How long support will be provided
    - Support contact information

**Decisions / Evaluations**
- **Decision:** Is migration plan complete?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, complete missing migration plan sections
- **Decision:** Is migration timeline realistic?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, adjust timeline based on consumer needs

**Outputs**
- Migration plan created
- Migration guide created
- Migration timeline defined
- Migration support plan created

**Failure Handling**
- **Failure:** Migration plan incomplete
  - **Action:** Complete migration plan, add missing sections, create code examples
  - **Retry:** Step 2 after completing plan
- **Failure:** Migration timeline too aggressive
  - **Action:** Adjust timeline based on consumer feedback, extend migration period
  - **Retry:** Step 2 after adjusting timeline

---

#### Step 3: Communicate Deprecation to Consumers

**Purpose**
- Notify all API consumers about deprecation
- Provide deprecation timeline and migration information
- Answer consumer questions
- Ensure consumers are aware and prepared

**Inputs**
- **From:** Step 2 outputs (migration plan, migration guide), Step 1 outputs (consumer list)

**Actions**
- Create deprecation announcement:
  - **Announcement content:**
    - API being deprecated
    - Deprecation reason
    - Deprecation timeline
    - Replacement API (if applicable)
    - Migration guide link
    - Support contact information
    - Important dates
  - **Announcement format:**
    - Email to all consumers
    - Blog post or announcement
    - Documentation update
    - In-app notification (if applicable)
- Send deprecation announcement:
  - **Communication channels:**
    - Email to all identified consumers
    - Developer portal announcement
    - Documentation site notice
    - API changelog entry
    - Slack/Teams notification (for internal consumers)
  - **Timing:**
    - Send announcement well in advance (recommended: 3-6 months before removal)
    - Send reminder notifications
    - Send final warning before removal
- Update API documentation:
  - Add deprecation notices to API documentation
  - Mark deprecated endpoints clearly
  - Link to migration guide
  - Update OpenAPI spec with deprecation markers
- Provide support:
  - **Answer questions:**
    - Respond to consumer questions
    - Provide migration assistance
    - Clarify timeline and process
  - **Track consumer responses:**
    - Track which consumers acknowledge deprecation
    - Track migration progress
    - Identify consumers needing assistance
- Follow up with consumers:
  - **Follow-up communications:**
    - Send reminder notifications
    - Check migration progress
    - Offer additional support
    - Address concerns

**Decisions / Evaluations**
- **Decision:** Have all consumers been notified?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, identify missing consumers, send notifications
- **Decision:** Is communication clear and comprehensive?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, improve communication, clarify information

**Outputs**
- Deprecation announcement sent
- All consumers notified
- Documentation updated with deprecation notices
- Support provided to consumers

**Failure Handling**
- **Failure:** Cannot reach all consumers
  - **Action:** Use multiple communication channels, extend notification period, document attempts
  - **Retry:** Step 3 after improving communication
- **Failure:** Consumers have concerns or objections
  - **Action:** Address concerns, adjust timeline if needed, provide additional support
  - **Retry:** Step 3 after addressing concerns

---

#### Step 4: Add Deprecation Warnings to API

**Purpose**
- Add deprecation warnings to API responses
- Make deprecation visible to consumers using API
- Provide migration information in API responses

**Inputs**
- **From:** Step 3 outputs (consumers notified), Procedure Required Inputs (API implementation)

**Actions**
- Add deprecation headers to API responses:
  - **Deprecation header:**
    - Add `Deprecation: true` header (or similar)
    - Add `Sunset: <removal-date>` header (RFC 8594)
    - Add `Link: <migration-guide-url>; rel="deprecation"` header
  - **Warning header:**
    - Add `Warning: 299 - "API is deprecated"` header
    - Include migration information in warning
- Add deprecation information to response body (if applicable):
  - Add deprecation notice to error responses
  - Add deprecation notice to success responses (if appropriate)
  - Include migration guide link
- Update API implementation:
  - Modify API endpoints to include deprecation headers
  - Ensure all deprecated endpoints return deprecation warnings
  - Test deprecation warnings are returned correctly
- Document deprecation warnings:
  - Document deprecation header format
  - Document how consumers should handle deprecation warnings
  - Update API documentation with deprecation warning information

**Decisions / Evaluations**
- **Decision:** Are deprecation warnings added to all deprecated endpoints?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, add warnings to missing endpoints
- **Decision:** Do deprecation warnings provide useful information?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, improve warning messages and links

**Outputs**
- Deprecation warnings added to API responses
- Deprecation headers implemented
- API responses include migration information

**Failure Handling**
- **Failure:** Deprecation warnings not working
  - **Action:** Fix API implementation, test warnings, ensure headers are returned
  - **Retry:** Step 4 after fixing warnings
- **Failure:** Deprecation warnings unclear
  - **Action:** Improve warning messages, add more information, test with consumers
  - **Retry:** Step 4 after improving warnings

---

#### Step 5: Monitor Migration Progress

**Purpose**
- Track consumer migration progress
- Identify consumers who need assistance
- Monitor API usage during deprecation period
- Ensure smooth migration

**Inputs**
- **From:** Step 4 outputs (deprecation warnings added), Step 1 outputs (usage data)

**Actions**
- Monitor API usage:
  - **Usage tracking:**
    - Track API call volume over time
    - Track number of active consumers
    - Track usage by consumer
    - Identify usage trends (decreasing usage indicates migration)
  - **Consumer tracking:**
    - Track which consumers have migrated
    - Track which consumers are still using deprecated API
    - Identify consumers who haven't started migration
- Monitor migration progress:
  - **Progress metrics:**
    - Percentage of consumers migrated
    - Number of consumers remaining
    - Migration timeline progress
    - Estimated completion date
  - **Consumer communication:**
    - Check in with consumers about migration progress
    - Offer assistance to consumers behind schedule
    - Address migration blockers
- Identify issues:
  - **Migration blockers:**
    - Identify consumers facing migration issues
    - Identify technical blockers
    - Identify timeline concerns
  - **Support needs:**
    - Identify consumers needing additional support
    - Identify consumers needing extended timeline
- Provide ongoing support:
  - **Support activities:**
    - Answer migration questions
    - Provide migration assistance
    - Help troubleshoot migration issues
    - Extend timeline if needed (for critical consumers)

**Decisions / Evaluations**
- **Decision:** Is migration progressing as expected?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, provide additional support, extend timeline if needed
- **Decision:** Are all critical consumers migrating?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, provide additional support to critical consumers

**Outputs**
- Migration progress monitored
- Consumer migration status tracked
- Support provided to consumers
- Migration issues identified and addressed

**Failure Handling**
- **Failure:** Migration progress slower than expected
  - **Action:** Provide additional support, extend timeline, address blockers
  - **Retry:** Step 5 after addressing issues
- **Failure:** Critical consumers not migrating
  - **Action:** Escalate to stakeholders, provide intensive support, consider timeline extension
  - **Retry:** Step 5 after addressing critical issues

---

#### Step 6: Finalize Deprecation and Set Removal Date

**Purpose**
- Finalize deprecation timeline
- Set final removal date
- Confirm all consumers are ready
- Prepare for API removal

**Inputs**
- **From:** Step 5 outputs (migration progress monitored)

**Actions**
- Review migration progress:
  - **Progress assessment:**
    - Review all consumer migration status
    - Identify any remaining consumers
    - Assess readiness for API removal
  - **Final check:**
    - Verify all critical consumers have migrated
    - Verify migration guide is complete
    - Verify replacement API is available (if applicable)
- Set final removal date:
  - **Removal date decision:**
    - Set final API removal date
    - Ensure adequate notice (recommended: 30 days final notice)
    - Consider any remaining consumers
  - **Removal date communication:**
    - Send final removal notice to all consumers
    - Update documentation with removal date
    - Update deprecation warnings with removal date
- Confirm readiness:
  - **Readiness checklist:**
    - All consumers notified
    - Migration guide available
    - Replacement API available (if applicable)
    - Support plan in place
    - Removal process documented
- Document final deprecation status:
  - **Status documentation:**
    - Document deprecation timeline
    - Document consumer migration status
    - Document removal date
    - Document any exceptions or extensions

**Decisions / Evaluations**
- **Decision:** Are all consumers ready for API removal?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, extend timeline or provide additional support
- **Decision:** Is removal date appropriate?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, adjust removal date based on consumer needs

**Outputs**
- Final removal date set
- All consumers notified of removal date
- Deprecation finalized
- Ready for API removal

**Failure Handling**
- **Failure:** Consumers not ready for removal
  - **Action:** Extend timeline, provide additional support, escalate if needed
  - **Retry:** Step 6 after addressing readiness issues
- **Failure:** Removal date conflicts with business needs
  - **Action:** Adjust removal date, coordinate with stakeholders
  - **Retry:** Step 6 after adjusting date

---

#### Step 7: Remove Deprecated API

**Purpose**
- Remove deprecated API endpoints
- Clean up API implementation
- Update documentation
- Complete deprecation process

**Inputs**
- **From:** Step 6 outputs (removal date set, consumers ready)

**Actions**
- Remove API endpoints:
  - **Code removal:**
    - Remove deprecated endpoint implementations
    - Remove deprecated route handlers
    - Remove deprecated controllers
    - Clean up unused code
  - **Configuration removal:**
    - Remove deprecated endpoints from API gateway
    - Remove deprecated endpoints from routing
    - Remove deprecated endpoints from load balancer
  - **Database cleanup (if applicable):**
    - Remove deprecated API data (if no longer needed)
    - Archive deprecated API data (if needed for history)
- Update API documentation:
  - **Documentation updates:**
    - Mark API as removed in documentation
    - Update API changelog
    - Archive deprecated API documentation
    - Update API index/listing
  - **Migration guide updates:**
    - Mark migration guide as complete
    - Archive migration guide
- Update monitoring and alerts:
  - **Monitoring cleanup:**
    - Remove deprecated API from monitoring
    - Remove deprecated API alerts
    - Update monitoring dashboards
- Verify API removal:
  - **Verification:**
    - Test that deprecated endpoints return 404 or appropriate error
    - Verify no consumers are still calling deprecated endpoints
    - Verify replacement API is working (if applicable)
- Communicate API removal:
  - **Removal communication:**
    - Send removal confirmation to consumers
    - Update developer portal
    - Update API changelog
    - Document removal in release notes

**Decisions / Evaluations**
- **Decision:** Is API successfully removed?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, fix removal issues, ensure API is removed
- **Decision:** Are all consumers migrated or notified?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, contact remaining consumers, handle exceptions

**Outputs**
- Deprecated API removed
- Code cleaned up
- Documentation updated
- API removal complete

**Failure Handling**
- **Failure:** API removal causes issues
  - **Action:** Rollback removal if needed, fix issues, re-attempt removal
  - **Retry:** Step 7 after fixing issues
- **Failure:** Consumers still using removed API
  - **Action:** Contact consumers, provide emergency support, consider temporary restoration if critical
  - **Retry:** Step 7 after addressing consumer issues

---

#### Step 8: Complete Deprecation and Document Lessons Learned

**Purpose**
- Complete deprecation process
- Document lessons learned
- Update deprecation process if needed
- Archive deprecation documentation

**Inputs**
- **From:** Step 7 outputs (API removed)

**Actions**
- Complete deprecation process:
  - **Process completion:**
    - Verify all steps are complete
    - Verify all consumers are migrated or notified
    - Verify API is removed
    - Close deprecation ticket/task
- Document lessons learned:
  - **Lessons learned:**
    - What went well
    - What could be improved
    - Consumer feedback
    - Timeline accuracy
    - Migration support effectiveness
    - Communication effectiveness
  - **Process improvements:**
    - Identify improvements to deprecation process
    - Document recommendations for future deprecations
    - Update deprecation procedure if needed
- Archive deprecation documentation:
  - **Documentation archiving:**
    - Archive deprecation plan
    - Archive migration guide
    - Archive consumer communications
    - Archive deprecation timeline
- Update metrics and reporting:
  - **Metrics:**
    - Document deprecation timeline
    - Document consumer migration statistics
    - Document support provided
    - Document any issues encountered
- Celebrate success:
  - **Recognition:**
    - Acknowledge team effort
    - Share success with stakeholders
    - Document deprecation completion

**Decisions / Evaluations**
- **Decision:** Is deprecation process complete?
  - **Go:** If yes, deprecation complete
  - **No-Go:** If no, complete missing steps
- **Decision:** Are lessons learned documented?
  - **Go:** If yes, deprecation complete
  - **No-Go:** If no, document lessons learned

**Outputs**
- Deprecation process complete
- Lessons learned documented
- Deprecation documentation archived
- Process improvements identified

**Failure Handling**
- **Failure:** Deprecation process incomplete
  - **Action:** Complete missing steps, verify all requirements met
  - **Retry:** Step 8 after completing process
- **Failure:** Documentation incomplete
  - **Action:** Complete documentation, archive all materials
  - **Retry:** Step 8 after completing documentation

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Deprecation Plan** - Complete deprecation plan with timeline and migration strategy
- **Migration Guide** - Guide for consumers to migrate from deprecated to replacement API
- **Consumer Impact Assessment** - Assessment of consumer impact and migration feasibility
- **Deprecation Communication** - All communications sent to consumers
- **Deprecation Documentation** - Updated documentation with deprecation notices
- **Lessons Learned Document** - Documentation of lessons learned and process improvements

**State changes:**
- API is deprecated and removed
- Consumers are migrated or notified
- Deprecation process is complete

**Decisions recorded:**
- Deprecation decision and rationale
- Migration approach decisions
- Timeline decisions
- Removal date decisions
- Process improvement decisions

**Signals emitted:**
- "API Deprecated" - API is deprecated and warnings are active
- "API Removal Scheduled" - API removal date is set
- "API Removed" - API is successfully removed
- "Deprecation Complete" - Deprecation process is complete

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Consumer impact assessment is complete
- [ ] Migration plan is complete and feasible
- [ ] All consumers are notified
- [ ] Deprecation warnings are added to API
- [ ] Migration progress is monitored
- [ ] API is successfully removed
- [ ] All consumers are migrated or notified

**Reviews required:**
- [ ] Deprecation plan review (must be approved)
- [ ] Consumer communication review
- [ ] Migration guide review

**Automated checks:**
- [ ] Deprecation warnings in API responses
- [ ] API removal verification (endpoints return 404)

**Who/what can approve completion:**
- **API Owner** - Must approve deprecation decision
- **Product Owner** - Must approve deprecation if business impact
- **Tech Lead** - Must verify technical feasibility

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Deprecation Plan** → Input for future API deprecations (process reference)
- **Lessons Learned** → Input for improving deprecation process
- **Migration Guide** → Input for consumers (migration reference)

**Procedures that depend on this:**
- **Backwards Compatibility Procedure** - May be invoked to assess compatibility during deprecation
- **API Documentation Procedure** - Updates documentation during deprecation

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] API usage and consumer impact assessed
- [ ] Migration plan created and approved
- [ ] Migration guide created
- [ ] All consumers notified of deprecation
- [ ] Deprecation warnings added to API responses
- [ ] Migration progress monitored
- [ ] Final removal date set and communicated
- [ ] Deprecated API removed
- [ ] Documentation updated
- [ ] All consumers migrated or notified
- [ ] Lessons learned documented
- [ ] Deprecation process complete
- [ ] All outputs are produced and validated
- [ ] All acceptance criteria are met
- [ ] All documentation is complete

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with deprecation reference
- [ ] **Deprecation Plan** - Link to deprecation plan document
- [ ] **Migration Guide** - Link to migration guide
- [ ] **Consumer Communications** - Links to all consumer communications
- [ ] **API Documentation** - Link to updated API documentation
- [ ] **Lessons Learned** - Link to lessons learned document

**Audit trail:**
- **Deprecation date** - When deprecation was decided
- **Announcement date** - When deprecation was announced
- **Removal date** - When API was removed
- **Consumers notified** - List of all consumers notified
- **Migration status** - Status of each consumer's migration
- **Support provided** - Support activities and assistance provided
- **Issues encountered** - Issues encountered during deprecation
- **Completion date** - When deprecation process was completed

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- API successfully deprecated and removed
- All consumers migrated or notified
- Deprecation process complete

#### ⚠️ Blocked
- **Reason:** Consumer migration blocked, replacement API unavailable, timeline constraints, consumer objections
- **Required action:** Address blocker (provide support, create replacement, extend timeline, address objections)
- **Who to notify:** API owner, product owner, affected consumers
- **Status:** Deprecation paused until blocker resolved

#### ❌ Aborted
- **Reason:** Deprecation decision reversed, consumer impact too high, replacement API not feasible, business decision to keep API
- **Required action:** Document why aborted, what was completed, update Jira ticket, notify consumers
- **Rollback required:** No (deprecation not started or warnings can be removed)
- **Lessons learned:** Document why deprecation was aborted
- **Next step:** API remains active, may revisit deprecation in future

#### 🔄 Partial Deprecation
- **Reason:** Some endpoints deprecated but others kept, some consumers migrated but others deferred
- **Required action:** Document what was deprecated vs. kept, update deprecation plan
- **Status:** Partial deprecation complete, remaining endpoints/consumers in future work
- **Next step:** Continue with remaining deprecation or keep partial deprecation

---

## Usage Notes

### Integration with Backwards Compatibility

- API Deprecation Procedure should consider [Backwards Compatibility Procedure](./backwards-compatibility-procedure.md) requirements
- Deprecation may involve breaking changes that need compatibility assessment
- Migration planning should consider backwards compatibility

### Communication is Critical

- Early and clear communication is essential for successful deprecation
- Provide adequate notice (recommended: 3-6 months minimum)
- Multiple communication channels increase success
- Follow up with consumers regularly

### Migration Support

- Provide comprehensive migration support
- Make migration as easy as possible for consumers
- Be flexible with timeline for critical consumers
- Document and share migration success stories

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** API Team / Product Team
