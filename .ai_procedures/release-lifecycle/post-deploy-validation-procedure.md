# Procedure: Post-Deploy Validation (Release Lifecycle)

### 1. Purpose

**Why this procedure exists**

This procedure performs comprehensive validation of a deployment after code, configuration, and infrastructure changes have been deployed to production. It verifies that the deployment was successful, the system is functioning correctly, and all components are healthy. This is a Release Lifecycle procedure that can be invoked by Feature Deployment Procedure or other release orchestration procedures.

**What problem it solves**

- Deployments not validated after execution
- System issues not detected early
- Deployment failures not identified
- No systematic post-deployment validation
- Missing validation of critical functionality
- Integration issues not detected
- Performance issues not identified
- Data integrity issues not detected

**What "success" looks like at the end**

Successful post-deployment validation that includes:
- Deployment validated successfully
- System health verified
- Critical functionality validated
- Integration points validated
- Performance validated
- Data integrity verified
- Validation results documented
- System ready for feature flag activation or monitoring

---

### 2. Trigger

**What causes this procedure to be invoked**

- Deployment Procedure (Release Lifecycle) has completed successfully
- Feature Deployment Procedure (Step 3: Validate Deployment) invokes this
- Release orchestration procedure invokes this
- Manual validation request (with proper approvals)
- Deployment execution is complete

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Deployment execution results** - Deployment execution completed (from Deployment Procedure)
- [ ] **Deployment documentation** - Deployment steps, configuration, rollback procedures
- [ ] **Test results** - Test results from QA procedures (from Feature Lifecycle Phase 4)
- [ ] **Requirements document** - Feature requirements (from Requirements & Scope Procedure)
- [ ] **Acceptance criteria** - Acceptance criteria (from Acceptance & Signoff Procedure)
- [ ] **Operational runbooks** - Monitoring, troubleshooting runbooks

**Decisions already made:**
- [ ] **Deployment executed** - Deployment Procedure has completed successfully
- [ ] **System deployed** - Code, configuration, infrastructure deployed

**Constraints:**
- [ ] **Validation window** - Validation must occur within reasonable time after deployment
- [ ] **Monitoring system** - Monitoring and alerting available
- [ ] **Test environment** - Test environment available for validation (if needed)

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing deployment execution results** → Wait for Deployment Procedure to complete
- **Missing test results** → Use available test results or perform basic validation

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 6 ordered steps from health checks through validation documentation
- **Validation scope** - What to validate (functionality, performance, integration, data)
- **Validation approach** - How to validate (automated tests, manual checks, monitoring)
- **Validation criteria** - Success criteria for validation
- **Risks & unknowns** - Validation risks, potential issues

**Plan must be reviewed before execution begins**

**Output:**
- Post-Deploy Validation Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Perform Health Checks

**Purpose**
- Perform comprehensive health checks
- Verify system components are healthy
- Identify any immediate health issues

**Inputs**
- **From:** Procedure Required Inputs (deployment execution results)

**Actions**
- Perform service health checks:
  - **Backend Services:**
    - Check backend services are running
    - Check backend health endpoints
    - Verify backend service status
  - **Frontend Services:**
    - Check frontend services are running (if applicable)
    - Check frontend health endpoints (if applicable)
    - Verify frontend service status (if applicable)
  - **Middleware Services:**
    - Check middleware services are running (if applicable)
    - Check middleware health endpoints (if applicable)
    - Verify middleware service status (if applicable)
- Perform infrastructure health checks:
  - **Database Health:**
    - Check database connectivity
    - Check database health
    - Verify database performance
  - **Third-Party Services:**
    - Check third-party service connectivity
    - Check third-party service health
    - Verify third-party service responses
  - **Infrastructure Resources:**
    - Check infrastructure resource health (if applicable)
    - Check resource utilization
    - Verify infrastructure performance
- Perform network health checks:
  - Check network connectivity
  - Check DNS resolution
  - Verify network performance
- Document health check results

**Decisions / Evaluations**
- **Decision:** Are all health checks passing?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, investigate health issues, may need to rollback

**Outputs**
- Health checks completed
- System health verified
- Health check results documented

**Failure Handling**
- **Failure:** Health checks fail
  - **Action:** Investigate health issues, may need to rollback deployment, fix issues, re-validate
  - **Retry:** Step 1 after issues are resolved (or after rollback if needed)

---

#### Step 2: Perform Smoke Tests

**Purpose**
- Perform smoke tests on critical functionality
- Verify critical user flows work
- Verify critical API endpoints work

**Inputs**
- **From:** Step 1 outputs (health checks passed)
- **From:** Procedure Required Inputs (test results, requirements document)

**Actions**
- Identify critical functionality:
  - Review requirements document
  - Identify critical user flows
  - Identify critical API endpoints
  - Identify critical business logic
- Perform smoke tests:
  - **Critical User Flows:**
    - Test critical user workflows
    - Verify user flows work correctly
    - Check for errors in user flows
  - **Critical API Endpoints:**
    - Test critical API endpoints
    - Verify API responses are correct
    - Check for API errors
  - **Critical Business Logic:**
    - Test critical business logic
    - Verify business logic works correctly
    - Check for business logic errors
- Verify smoke test results:
  - Verify all smoke tests pass
  - Verify no critical errors
  - Verify functionality works as expected
- Document smoke test results

**Decisions / Evaluations**
- **Decision:** Do all smoke tests pass?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, investigate smoke test failures, may need to rollback

**Outputs**
- Smoke tests completed
- Critical functionality verified
- Smoke test results documented

**Failure Handling**
- **Failure:** Smoke tests fail
  - **Action:** Investigate smoke test failures, may need to rollback deployment, fix issues, re-validate
  - **Retry:** Step 2 after issues are resolved (or after rollback if needed)

---

#### Step 3: Validate Integration Points

**Purpose**
- Validate integration points
- Verify third-party integrations work
- Verify internal integrations work

**Inputs**
- **From:** Step 2 outputs (smoke tests passed)
- **From:** Procedure Required Inputs (deployment documentation, test results)

**Actions**
- Identify integration points:
  - Review deployment documentation
  - Identify third-party integrations
  - Identify internal integrations
  - Identify data flow paths
- Validate third-party integrations:
  - **API Integrations:**
    - Test third-party API calls
    - Verify API responses are correct
    - Check for API errors
  - **Service Integrations:**
    - Test third-party service connectivity
    - Verify service responses
    - Check for service errors
- Validate internal integrations:
  - **Service-to-Service:**
    - Test internal service communication
    - Verify service responses
    - Check for communication errors
  - **Data Flow:**
    - Test data flow between services
    - Verify data is correct
    - Check for data flow errors
- Verify integration validation results:
  - Verify all integrations work correctly
  - Verify no integration errors
  - Verify data flow is correct
- Document integration validation results

**Decisions / Evaluations**
- **Decision:** Do all integration points work correctly?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, investigate integration issues, may need to rollback

**Outputs**
- Integration points validated
- Third-party integrations verified
- Internal integrations verified
- Integration validation results documented

**Failure Handling**
- **Failure:** Integration validation fails
  - **Action:** Investigate integration issues, may need to rollback deployment, fix issues, re-validate
  - **Retry:** Step 3 after issues are resolved (or after rollback if needed)

---

#### Step 4: Validate Data Integrity

**Purpose**
- Validate data integrity
- Verify database migrations were successful
- Verify data consistency

**Inputs**
- **From:** Step 3 outputs (integration points validated)
- **From:** Procedure Required Inputs (deployment documentation, test results)

**Actions**
- Validate database migrations:
  - **Postgres Migrations:**
    - Verify migrations executed successfully
    - Verify schema changes are correct
    - Verify data migrations are correct (if applicable)
  - **DynamoDB Changes:**
    - Verify schema changes are correct
    - Verify index changes are correct
    - Verify data shape changes are correct (if applicable)
- Validate data consistency:
  - **Data Integrity:**
    - Check for data corruption
    - Check for data inconsistencies
    - Verify data relationships are correct
  - **Data Completeness:**
    - Check for missing data
    - Check for incomplete data
    - Verify required data is present
- Validate data access:
  - Test data queries
  - Verify query performance
  - Check for query errors
- Document data integrity validation results

**Decisions / Evaluations**
- **Decision:** Is data integrity validated successfully?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, investigate data integrity issues, may need to rollback

**Outputs**
- Data integrity validated
- Database migrations verified
- Data consistency verified
- Data integrity validation results documented

**Failure Handling**
- **Failure:** Data integrity validation fails
  - **Action:** Investigate data integrity issues, may need to rollback deployment, fix issues, re-validate
  - **Retry:** Step 4 after issues are resolved (or after rollback if needed)

---

#### Step 5: Validate Performance

**Purpose**
- Validate system performance
- Verify performance metrics are acceptable
- Identify any performance issues

**Inputs**
- **From:** Step 4 outputs (data integrity validated)
- **From:** Procedure Required Inputs (test results, operational runbooks)

**Actions**
- Review performance baselines:
  - Review performance test results (from Performance & Resilience Procedure)
  - Review performance baselines
  - Identify performance expectations
- Validate performance metrics:
  - **Response Times:**
    - Check API response times
    - Verify response times are acceptable
    - Compare to performance baselines
  - **Throughput:**
    - Check system throughput
    - Verify throughput is acceptable
    - Compare to performance baselines
  - **Resource Utilization:**
    - Check CPU, memory, network usage
    - Verify resource utilization is acceptable
    - Check for resource bottlenecks
- Validate performance under load:
  - Check system performance under current load
  - Verify performance is acceptable
  - Identify any performance degradation
- Document performance validation results

**Decisions / Evaluations**
- **Decision:** Is performance validated successfully?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, investigate performance issues, may need to rollback

**Outputs**
- Performance validated
- Performance metrics verified
- Performance validation results documented

**Failure Handling**
- **Failure:** Performance validation fails
  - **Action:** Investigate performance issues, may need to rollback deployment, fix issues, re-validate
  - **Retry:** Step 5 after issues are resolved (or after rollback if needed)

---

#### Step 6: Document Validation Results

**Purpose**
- Document validation results
- Create validation report
- Update deployment status

**Inputs**
- **From:** Steps 1-5 outputs (complete validation execution)

**Actions**
- Compile validation results:
  - Compile health check results
  - Compile smoke test results
  - Compile integration validation results
  - Compile data integrity validation results
  - Compile performance validation results
- Create validation report:
  - Document validation scope
  - Document validation approach
  - Document validation results
  - Document any issues found
  - Document validation conclusions
- Update deployment status:
  - Update deployment status with validation results
  - Update Jira ticket (if applicable)
  - Notify stakeholders of validation results
- Document validation completion

**Decisions / Evaluations**
- **Decision:** Is validation documented successfully?
  - **Go:** If yes, validation complete, ready for feature flag activation or monitoring
  - **No-Go:** If no, complete documentation

**Outputs**
- Validation results documented
- Validation report created
- Deployment status updated
- Validation completion documented

**Failure Handling**
- **Failure:** Documentation incomplete
  - **Action:** Complete documentation, update status, re-finalize
  - **Retry:** Step 6 after documentation is completed

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Post-deployment validation report
- Health check results
- Smoke test results
- Integration validation results
- Data integrity validation results
- Performance validation results

**State changes:**
- Deployment validated
- System health verified
- Validation results documented

**Decisions recorded:**
- Validation decisions
- Issue identification decisions

**Signals emitted:**
- "Deployment validated" - Deployment validated successfully
- "Ready for activation" - System ready for feature flag activation
- "Validation issues found" - Validation issues identified (if applicable)

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Health checks passed
- [ ] Smoke tests passed
- [ ] Integration points validated
- [ ] Data integrity validated
- [ ] Performance validated
- [ ] Validation results documented

**Reviews required:**
- [ ] Validation results review

**Automated checks:**
- [ ] Health check endpoints responding
- [ ] Smoke tests automated (if applicable)
- [ ] Integration tests automated (if applicable)

**Who/what can approve completion:**
- **Technical Lead** - Must approve validation results
- **QA Lead** - Must approve validation approach and results

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Validation results** → Feature Deployment Procedure (Feature Lifecycle)
- **Validation results** → Post-Release Monitoring Procedure (Release Lifecycle)

**Procedures that depend on this:**
- Feature Deployment Procedure (Feature Lifecycle) - Uses validation results to proceed with feature flag activation
- Post-Release Monitoring Procedure (Release Lifecycle) - Uses validation results for monitoring baseline

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Health checks passed
- [ ] Smoke tests passed
- [ ] Integration points validated
- [ ] Data integrity validated
- [ ] Performance validated
- [ ] Validation results documented
- [ ] Validation report created
- [ ] Deployment status updated
- [ ] System ready for feature flag activation or monitoring

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Validation report (validation results)
- [ ] Deployment logs (deployment execution logs)
- [ ] Test results (test execution results)
- [ ] Jira ticket (validation ticket, if applicable)

**Audit trail:**
- Validation execution date and time
- Health check execution date and time
- Smoke test execution date and time
- Integration validation date and time
- Data integrity validation date and time
- Performance validation date and time
- Validation completion date and time

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- Deployment validated successfully
- All validation checks passed
- System health verified
- Validation results documented
- System ready for feature flag activation or monitoring

#### ⚠️ Blocked
- **Reason:** Validation issues or prerequisites not met
- **Required action:** Address validation issues or prerequisites
- **Who to notify:** Technical Lead, QA Lead
- **Status:** Validation incomplete, waiting for issue resolution

#### ❌ Aborted
- **Reason:** Validation cannot proceed (e.g., critical failures, rollback required)
- **Required action:** Document why validation was aborted, rollback if needed
- **Rollback required:** Yes (if deployment needs to be rolled back)
- **Lessons learned:** Document why validation was aborted

#### 🔄 Rolled Back
- **Reason:** Validation failed or critical issues detected
- **Rollback procedure used:** Rollback Procedure (Release Lifecycle or Feature Lifecycle)
- **State after rollback:** System restored to previous state
- **Next steps:** Investigate issues, fix problems, re-attempt deployment and validation

---

**Status:** Active Procedure
**Owner:** QA Team / DevOps Team
