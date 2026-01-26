# Procedure: IaC/Infrastructure Update

### 1. Purpose

**Why this procedure exists**

This procedure updates infrastructure as code (IaC) and prepares infrastructure changes for features. It ensures infrastructure changes are properly designed, tested, and validated before deployment, maintaining infrastructure consistency and reducing deployment risks.

**What problem it solves**

- Infrastructure changes made ad-hoc without proper planning
- Infrastructure not version controlled
- Infrastructure changes not tested before deployment
- Inconsistent infrastructure across environments
- Infrastructure changes cause deployment failures
- Missing infrastructure documentation
- Infrastructure changes not reviewed
- Infrastructure drift between environments

**What "success" looks like at the end**

Infrastructure changes that are:
- Properly designed and documented
- Version controlled in IaC
- Tested and validated
- Reviewed and approved
- Ready for deployment
- Aligned with architecture decisions
- Compliant with infrastructure standards
- Ready for implementation layers to use

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Architecture Review Procedure](./architecture-review-procedure.md) has been completed
- [Data Design Procedure](./data-design-procedure.md) has been completed (if infrastructure changes needed)
- Feature requires infrastructure changes (new services, databases, networking, etc.)
- Infrastructure needs to be updated for feature support
- Feature Implementation Orchestration Procedure invokes this (Phase 3: Implementation, can run in parallel with implementation layers)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Architecture decisions** - ADRs, architectural patterns, service boundaries, infrastructure requirements (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Data design** - Database requirements, data store needs (from [Data Design Procedure](./data-design-procedure.md), if applicable)
- [ ] **Feature requirements** - Infrastructure requirements from feature (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Current infrastructure state** - Existing IaC files, infrastructure documentation

**Decisions already made:**
- [ ] **Infrastructure needs identified** - Infrastructure changes required for feature
- [ ] **Infrastructure approach** - IaC tool selected (Terraform, CloudFormation, Pulumi, etc.)
- [ ] **Environment strategy** - How infrastructure will be deployed (dev, staging, production)

**Constraints:**
- [ ] **Infrastructure standards** - Must comply with infrastructure standards (when defined)
- [ ] **Security requirements** - Infrastructure security requirements from threat model
- [ ] **Cost constraints** - Budget limitations for infrastructure
- [ ] **Compliance requirements** - Regulatory or policy requirements

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing architecture decisions** → Wait for Architecture Review Procedure to complete
- **Missing data design** → Wait for Data Design Procedure to complete (if infrastructure depends on data design)
- **Infrastructure needs unclear** → Review feature requirements and architecture decisions to identify infrastructure needs

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 7 ordered steps from infrastructure design through validation
- **Infrastructure components** - What infrastructure needs to be created/updated
- **IaC approach** - How infrastructure will be defined (Terraform modules, CloudFormation stacks, etc.)
- **Testing strategy** - How infrastructure changes will be tested
- **Deployment strategy** - How infrastructure will be deployed
- **Risks & unknowns** - Infrastructure deployment risks, cost implications, security concerns
- **Validation points** - After design, after IaC creation, after testing, before deployment

**Plan must be reviewed before execution begins**

**Output:**
- Infrastructure Update Plan (documented and approved)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Analyze Infrastructure Requirements

**Purpose**
- Identify infrastructure needs for feature
- Review architecture decisions for infrastructure implications
- Determine infrastructure components needed

**Inputs**
- **From:** Procedure Required Inputs (architecture decisions, data design, feature requirements)

**Actions**
- Review architecture decisions:
  - Identify infrastructure components needed
  - Review service boundaries and infrastructure requirements
  - Review technology choices and infrastructure implications
- Review data design (if applicable):
  - Identify database infrastructure needs
  - Review data store requirements (Postgres, DynamoDB, etc.)
  - Review data access patterns and infrastructure implications
- Review feature requirements:
  - Identify feature-specific infrastructure needs
  - Review performance requirements and infrastructure implications
  - Review scalability requirements
- Identify infrastructure components:
  - Compute resources (servers, containers, serverless functions)
  - Storage resources (databases, object storage, file storage)
  - Networking resources (VPCs, subnets, load balancers, CDN)
  - Security resources (IAM roles, security groups, WAF)
  - Monitoring resources (logging, metrics, alerting)
- Document infrastructure requirements

**Decisions / Evaluations**
- **Decision:** Are infrastructure requirements clear?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify requirements with architecture team

**Outputs**
- Infrastructure requirements identified
- Infrastructure components listed
- Infrastructure requirements documented

**Failure Handling**
- **Failure:** Infrastructure requirements unclear
  - **Action:** Review architecture decisions and feature requirements, consult architecture team
  - **Retry:** Step 1 after clarifying requirements

---

#### Step 2: Design Infrastructure Changes

**Purpose**
- Design infrastructure architecture
- Plan infrastructure changes
- Ensure infrastructure aligns with architecture decisions

**Inputs**
- **From:** Step 1 outputs (infrastructure requirements identified)
- **From:** Procedure Required Inputs (architecture decisions, current infrastructure state)

**Actions**
- Review current infrastructure:
  - Review existing IaC files
  - Understand current infrastructure state
  - Identify what needs to be created vs. updated
- Design infrastructure architecture:
  - Design compute infrastructure
  - Design storage infrastructure
  - Design networking infrastructure
  - Design security infrastructure
  - Design monitoring infrastructure
- Plan infrastructure changes:
  - Determine what infrastructure to create
  - Determine what infrastructure to update
  - Determine what infrastructure to remove (if applicable)
- Ensure alignment with architecture:
  - Verify infrastructure supports service boundaries
  - Verify infrastructure supports architectural patterns
  - Verify infrastructure aligns with technology choices
- Document infrastructure design

**Decisions / Evaluations**
- **Decision:** Is infrastructure design complete and aligned with architecture?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, refine infrastructure design

**Outputs**
- Infrastructure design complete
- Infrastructure changes planned
- Infrastructure design documented

**Failure Handling**
- **Failure:** Infrastructure design doesn't align with architecture
  - **Action:** Review architecture decisions, adjust infrastructure design
  - **Retry:** Step 2 with aligned design

---

#### Step 3: Create/Update IaC Files

**Purpose**
- Create or update infrastructure as code files
- Define infrastructure in version-controlled format
- Ensure IaC follows best practices

**Inputs**
- **From:** Step 2 outputs (infrastructure design complete)
- **From:** Procedure Required Inputs (current infrastructure state)

**Actions**
- Set up IaC structure:
  - Create or update IaC files (Terraform, CloudFormation, Pulumi, etc.)
  - Organize IaC files (modules, stacks, etc.)
  - Follow IaC best practices and conventions
- Define infrastructure resources:
  - Define compute resources
  - Define storage resources
  - Define networking resources
  - Define security resources
  - Define monitoring resources
- Configure infrastructure:
  - Set resource configurations
  - Set resource dependencies
  - Set resource tags and metadata
  - Configure environment-specific settings
- Add infrastructure documentation:
  - Document infrastructure components
  - Document resource purposes
  - Document configuration decisions
- Validate IaC syntax:
  - Run IaC validation (terraform validate, cfn-lint, etc.)
  - Fix syntax errors
  - Ensure IaC is valid

**Decisions / Evaluations**
- **Decision:** Are IaC files created and valid?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, fix IaC issues

**Outputs**
- IaC files created/updated
- Infrastructure defined in code
- IaC syntax validated
- IaC files ready for testing

**Failure Handling**
- **Failure:** IaC syntax errors
  - **Action:** Fix syntax errors, re-validate
  - **Retry:** Step 3 after fixing errors
- **Failure:** IaC doesn't match design
  - **Action:** Review design, update IaC to match
  - **Retry:** Step 3 with corrected IaC

---

#### Step 4: Review Infrastructure Changes

**Purpose**
- Review infrastructure changes for correctness
- Review infrastructure for security
- Review infrastructure for cost implications
- Get infrastructure changes approved

**Inputs**
- **From:** Step 3 outputs (IaC files created)

**Actions**
- Review infrastructure changes:
  - Review infrastructure design
  - Review IaC code quality
  - Review resource configurations
  - Review security configurations
- Review security:
  - Review IAM roles and permissions
  - Review security groups and network access
  - Review encryption settings
  - Review compliance with security requirements
- Review cost implications:
  - Estimate infrastructure costs
  - Review cost optimization opportunities
  - Verify costs are within budget
- Review infrastructure standards compliance:
  - Verify infrastructure follows standards (when defined)
  - Verify naming conventions
  - Verify tagging requirements
- Get infrastructure review and approval:
  - Request infrastructure team review
  - Request security team review (if applicable)
  - Get infrastructure changes approved

**Decisions / Evaluations**
- **Decision:** Are infrastructure changes reviewed and approved?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, address review feedback

**Outputs**
- Infrastructure changes reviewed
- Security reviewed
- Cost implications reviewed
- Infrastructure changes approved

**Failure Handling**
- **Failure:** Infrastructure review finds issues
  - **Action:** Address review feedback, update IaC
  - **Retry:** Step 4 after addressing feedback
- **Failure:** Infrastructure costs exceed budget
  - **Action:** Optimize infrastructure, reduce costs, or request budget approval
  - **Retry:** Step 4 after cost optimization

---

#### Step 5: Test Infrastructure Changes

**Purpose**
- Test infrastructure changes in development environment
- Validate infrastructure works correctly
- Identify infrastructure issues before production

**Inputs**
- **From:** Step 4 outputs (infrastructure changes approved)
- Development environment access

**Actions**
- Plan infrastructure testing:
  - Identify test scenarios
  - Identify test environment
  - Plan test execution
- Deploy infrastructure to test environment:
  - Run IaC deployment (terraform apply, cloudformation deploy, etc.)
  - Monitor deployment progress
  - Handle deployment errors
- Test infrastructure:
  - Verify infrastructure resources created correctly
  - Verify infrastructure configurations correct
  - Verify infrastructure connectivity
  - Verify infrastructure security
  - Test infrastructure functionality
- Validate infrastructure:
  - Verify infrastructure matches design
  - Verify infrastructure supports feature requirements
  - Verify infrastructure performance acceptable
- Document test results

**Decisions / Evaluations**
- **Decision:** Do infrastructure tests pass?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, fix infrastructure issues

**Outputs**
- Infrastructure tested
- Infrastructure validated
- Test results documented
- Infrastructure ready for implementation layers

**Failure Handling**
- **Failure:** Infrastructure deployment fails
  - **Action:** Investigate deployment errors, fix IaC issues, re-deploy
  - **Retry:** Step 5 after fixing issues
- **Failure:** Infrastructure tests fail
  - **Action:** Investigate test failures, fix infrastructure issues
  - **Retry:** Step 5 after fixing issues

---

#### Step 6: Document Infrastructure Changes

**Purpose**
- Document infrastructure changes
- Create infrastructure documentation
- Update infrastructure runbooks

**Inputs**
- **From:** Step 5 outputs (infrastructure tested)

**Actions**
- Document infrastructure changes:
  - Document infrastructure components created/updated
  - Document infrastructure configuration
  - Document infrastructure dependencies
  - Document infrastructure deployment steps
- Create infrastructure documentation:
  - Create infrastructure architecture diagrams
  - Create infrastructure component documentation
  - Create infrastructure deployment guide
- Update infrastructure runbooks:
  - Update operational runbooks
  - Update troubleshooting guides
  - Update disaster recovery procedures
- Document infrastructure for implementation layers:
  - Document infrastructure endpoints/URLs
  - Document infrastructure credentials/access
  - Document infrastructure configuration needed by code

**Decisions / Evaluations**
- **Decision:** Is infrastructure documentation complete?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, complete documentation

**Outputs**
- Infrastructure changes documented
- Infrastructure documentation created
- Infrastructure runbooks updated
- Infrastructure ready for implementation layers

**Failure Handling**
- **Failure:** Documentation incomplete
  - **Action:** Complete missing documentation
  - **Retry:** Step 6 after completing documentation

---

#### Step 7: Finalize Infrastructure Changes

**Purpose**
- Finalize infrastructure changes
- Prepare infrastructure for implementation layers
- Update Jira ticket with infrastructure status

**Inputs**
- **From:** Steps 1-6 outputs (complete infrastructure update)

**Actions**
- Finalize infrastructure changes:
  - Verify all infrastructure changes complete
  - Verify infrastructure tested and validated
  - Verify infrastructure documented
- Prepare infrastructure for implementation:
  - Ensure infrastructure is accessible to implementation layers
  - Provide infrastructure configuration to implementation teams
  - Coordinate infrastructure availability with implementation schedule
- Update Jira ticket:
  - Update ticket with infrastructure status
  - Update ticket with infrastructure documentation links
  - Update ticket with infrastructure deployment information
- Notify stakeholders:
  - Notify implementation teams infrastructure is ready
  - Notify operations team of infrastructure changes
- Document infrastructure completion

**Decisions / Evaluations**
- **Decision:** Are infrastructure changes finalized and ready?
  - **Go:** If yes, procedure complete, infrastructure ready for implementation layers
  - **No-Go:** If no, complete finalization steps

**Outputs**
- Infrastructure changes finalized
- Infrastructure ready for implementation layers
- Jira ticket updated
- Stakeholders notified
- Infrastructure update complete

**Failure Handling**
- **Failure:** Finalization incomplete
  - **Action:** Complete finalization steps, update documentation
  - **Retry:** Step 7 after completing finalization

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- Infrastructure design document
- IaC files (Terraform, CloudFormation, Pulumi, etc.)
- Infrastructure test results
- Infrastructure documentation
- Infrastructure deployment guide

**State changes:**
- Infrastructure defined in IaC
- Infrastructure tested in development environment
- Infrastructure ready for implementation layers
- Jira ticket updated with infrastructure status

**Decisions recorded:**
- Infrastructure design decisions
- Infrastructure configuration decisions
- Infrastructure testing decisions

**Signals emitted:**
- "Infrastructure ready" - Infrastructure changes complete and ready for implementation layers

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Infrastructure requirements identified
- [ ] Infrastructure design complete
- [ ] IaC files created and valid
- [ ] Infrastructure changes reviewed and approved
- [ ] Infrastructure tested in development environment
- [ ] Infrastructure documentation complete

**Reviews required:**
- [ ] Infrastructure design review
- [ ] Infrastructure security review
- [ ] Infrastructure cost review

**Automated checks:**
- [ ] IaC syntax validation passes
- [ ] IaC formatting checks pass
- [ ] Infrastructure deployment succeeds in test environment

**Who/what can approve completion:**
- **Infrastructure Lead** - Must approve infrastructure design and changes
- **Security Team** - Must approve infrastructure security (if applicable)
- **Architecture Team** - Must approve infrastructure alignment with architecture

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Infrastructure ready** → Backend Implementation Procedure (infrastructure available)
- **Infrastructure ready** → Frontend Implementation Procedure (infrastructure endpoints available)
- **Infrastructure ready** → Middleware Implementation Procedure (infrastructure available)
- **Infrastructure documentation** → Documentation & Runbook Procedure

**Procedures that depend on this:**
- Backend Implementation Procedure - Uses infrastructure for deployment
- Frontend Implementation Procedure - Uses infrastructure endpoints
- Middleware Implementation Procedure - Uses infrastructure
- Feature Deployment Procedure - Uses infrastructure for deployment

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Infrastructure requirements identified
- [ ] Infrastructure design complete and documented
- [ ] IaC files created and valid
- [ ] Infrastructure changes reviewed and approved
- [ ] Infrastructure tested in development environment
- [ ] Infrastructure documentation complete
- [ ] Infrastructure ready for implementation layers
- [ ] Jira ticket updated
- [ ] Stakeholders notified

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] Jira ticket (infrastructure ticket, feature ticket)
- [ ] IaC files (version controlled)
- [ ] Infrastructure documentation (infrastructure design, deployment guide)
- [ ] Architecture decisions (ADRs that inform infrastructure)

**Audit trail:**
- Infrastructure design date
- IaC creation date
- Infrastructure review date
- Infrastructure test date
- Infrastructure completion date

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- Infrastructure changes designed and documented
- IaC files created and validated
- Infrastructure tested and validated
- Infrastructure ready for implementation layers
- Infrastructure documentation complete

#### ⚠️ Blocked
- **Reason:** Infrastructure requirements unclear or infrastructure review pending
- **Required action:** Clarify requirements or complete infrastructure review
- **Who to notify:** Infrastructure Lead, Architecture Team
- **Status:** Infrastructure update incomplete, waiting for resolution

#### ❌ Aborted
- **Reason:** Infrastructure changes cannot proceed (e.g., cost constraints, security issues, architecture misalignment)
- **Required action:** Document why infrastructure update was aborted, reassess infrastructure approach
- **Rollback required:** No (infrastructure not deployed to production)
- **Lessons learned:** Document why infrastructure update was aborted

---

**Status:** Active Procedure
**Owner:** Infrastructure Team / DevOps Team
