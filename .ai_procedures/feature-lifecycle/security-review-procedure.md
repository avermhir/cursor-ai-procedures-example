# Procedure: Security Review

### 1. Purpose

**Why this procedure exists**

This procedure conducts comprehensive security review of feature implementation, including security code review, security testing, and validation against threat model and security standards. It ensures security requirements are implemented correctly and identifies security vulnerabilities before deployment.

**What problem it solves**

- Security vulnerabilities discovered late in development
- Security requirements from threat model not implemented
- Security standards not followed in implementation
- Security vulnerabilities not systematically identified
- Security testing not performed
- Security code review not conducted
- Security issues deployed to production

**What "success" looks like at the end**

A complete security review report that includes:
- Security code review completed
- Security test cases executed (from test plan)
- Threat model security requirements validated
- API Security Standards compliance verified
- Security vulnerabilities identified and documented
- Security recommendations provided
- Security review approved
- Ready for acceptance and signoff (if no critical vulnerabilities)

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Implementation Verification Procedure](./implementation-verification-procedure.md) has been completed
- [Test Plan Procedure](./test-plan-procedure.md) has been completed (security test cases defined)
- Implementation is complete and ready for security review
- Security review needed before deployment
- Feature Implementation Orchestration Procedure invokes this (Phase 4: Quality Assurance)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Threat model document** - Security threats, security requirements, mitigation strategies (from [Threat Model Procedure](./threat-model-procedure.md))
- [ ] **Test plan document** - Security test cases (from [Test Plan Procedure](./test-plan-procedure.md))
- [ ] **Implementation code** - Backend code, frontend code, middleware code (from implementation procedures)
- [ ] **API contracts** - API endpoint definitions (from [API Contract Procedure](./api-contract-procedure.md))
- [ ] **Security requirements** - Derived security requirements from threat model
- [ ] **Implementation verification report** - Verification that implementation is complete (from [Implementation Verification Procedure](./implementation-verification-procedure.md))

**Decisions already made:**
- [ ] **Implementation is complete** - Implementation Verification Procedure has verified implementation is complete
- [ ] **Threat model is approved** - Threat model has been approved

**Constraints:**
- [ ] **Threat Modeling Standards** - Must comply with [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md)
- [ ] **API Security Standards** - Must comply with [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- [ ] **Security requirements** - All security requirements from threat model must be implemented
- [ ] **Security testing** - Security test cases from test plan must be executed

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing threat model** → Invoke [Threat Model Procedure](./threat-model-procedure.md) first
- **Missing test plan** → Invoke [Test Plan Procedure](./test-plan-procedure.md) first
- **Missing implementation** → Wait for implementation to complete
- **Missing security requirements** → Obtain security requirements from threat model

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from threat model review through security review approval
- **Procedures to be invoked** - None (this is a review procedure)
- **Dependencies between steps** - Threat Model Review → Security Code Review → Security Testing → API Security Review → Data Security Review → AuthN/AuthZ Review → Vulnerability Assessment → Report & Approval
- **Risks & unknowns** - Missing security requirements, security vulnerabilities, security testing gaps, security standards non-compliance
- **Validation points** - After security code review, after security testing, after API security review, before report approval

**Plan must be reviewed before execution begins**

**Output:**
- Security Review Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Threat Model and Security Requirements

**Purpose**
- Review threat model and derived security requirements
- Understand security threats and mitigations
- Identify security requirements to validate

**Inputs**
- **From:** Procedure Required Inputs (threat model document, security requirements)
- **Reference:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for threat model structure

**Actions**
- Review threat model document:
  - Review identified threats (STRIDE categories)
  - Review threat severity assessments
  - Review mitigation strategies
  - Review derived security requirements
  - Review residual risk assessment
- Extract security requirements:
  - List all security requirements from threat model
  - Categorize security requirements (authentication, authorization, input validation, data protection, etc.)
  - Prioritize security requirements (critical, high, medium, low)
- Review security requirements traceability:
  - Map security requirements to implementation components
  - Identify where each requirement should be implemented
- Document security requirements review in security review report

**Decisions / Evaluations**
- **Decision:** Are threat model and security requirements clear and complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify threat model or security requirements

**Outputs**
- Threat model reviewed
- Security requirements extracted and categorized
- Security requirements traceability mapped
- Security requirements review documented

**Failure Handling**
- **Failure:** Threat model or security requirements unclear
  - **Action:** Consult security team, clarify threat model, obtain security requirements
  - **Retry:** Step 1 after clarifications

---

#### Step 2: Conduct Security Code Review

**Purpose**
- Review implementation code for security vulnerabilities
- Verify security requirements are implemented
- Identify security code issues

**Inputs**
- **From:** Procedure Required Inputs (implementation code, security requirements)
- **From:** Step 1 outputs (security requirements extracted)
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for security implementation requirements

**Actions**
- Review backend code for security:
  - **Authentication/Authorization:**
    - Check authentication is implemented correctly
    - Check authorization is enforced correctly
    - Check token validation is correct
    - Check session management is secure
  - **Input Validation:**
    - Check input validation is implemented
    - Check SQL injection prevention (parameterized queries)
    - Check XSS prevention
    - Check command injection prevention
    - Check path traversal prevention
  - **Data Protection:**
    - Check sensitive data is encrypted
    - Check sensitive data is not logged
    - Check data access controls are enforced
  - **Error Handling:**
    - Check error messages don't leak sensitive information
    - Check stack traces are not exposed
    - Check error handling is secure
- Review frontend code for security:
  - **Input Validation:**
    - Check client-side validation is implemented
    - Check XSS prevention
    - Check CSRF protection
  - **Authentication/Authorization:**
    - Check authentication tokens are handled securely
    - Check authorization checks are performed
  - **Data Protection:**
    - Check sensitive data is not stored insecurely
    - Check sensitive data is not exposed in client code
- Review middleware code for security:
  - **Authentication/Authorization:**
    - Check authentication middleware is secure
    - Check authorization middleware is secure
  - **Request/Response Security:**
    - Check request validation
    - Check response security headers
    - Check CORS configuration
- Verify security requirements implementation:
  - Check each security requirement is implemented
  - Check implementation matches security requirements
  - Document any missing or incorrect implementations
- Document security code review findings in security review report

**Decisions / Evaluations**
- **Decision:** Are security requirements implemented correctly?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, document security issues, may need to fix implementation

**Outputs**
- Security code review completed
- Security code issues identified
- Security requirements implementation verified
- Security code review findings documented

**Failure Handling**
- **Failure:** Security requirements not implemented or implemented incorrectly
  - **Action:** Document security issues, prioritize fixes, coordinate with implementation team to fix issues
  - **Retry:** Step 2 after security issues are fixed

---

#### Step 3: Execute Security Test Cases

**Purpose**
- Execute security test cases from test plan
- Verify security controls work correctly
- Identify security vulnerabilities through testing

**Inputs**
- **From:** Procedure Required Inputs (test plan document with security test cases)
- **From:** Step 1 outputs (security requirements)
- **From:** Step 2 outputs (security code review findings)

**Actions**
- Review security test cases from test plan:
  - Authentication test cases
  - Authorization test cases
  - Input validation test cases
  - Data protection test cases
  - Error handling security test cases
- Execute security test cases:
  - **Authentication Testing:**
    - Test valid authentication scenarios
    - Test invalid authentication scenarios
    - Test token expiration scenarios
    - Test token validation scenarios
    - Test authentication bypass attempts
  - **Authorization Testing:**
    - Test authorized access scenarios
    - Test unauthorized access scenarios
    - Test role-based access scenarios
    - Test permission-based access scenarios
    - Test privilege escalation attempts
  - **Input Validation Testing:**
    - Test SQL injection attempts
    - Test XSS attempts
    - Test command injection attempts
    - Test path traversal attempts
    - Test input format validation
  - **Data Protection Testing:**
    - Test sensitive data exposure
    - Test data encryption
    - Test data access controls
  - **Error Handling Security Testing:**
    - Test error message information disclosure
    - Test stack trace exposure
- Document security test results:
  - Record test execution results (pass/fail)
  - Document any security vulnerabilities found
  - Document any security controls that failed
- Document findings in security review report

**Decisions / Evaluations**
- **Decision:** Do all security test cases pass?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, document security vulnerabilities, may need to fix implementation

**Outputs**
- Security test cases executed
- Security test results documented
- Security vulnerabilities identified (if any)
- Security test findings documented

**Failure Handling**
- **Failure:** Security test cases fail or security vulnerabilities found
  - **Action:** Document vulnerabilities, prioritize fixes, coordinate with implementation team to fix vulnerabilities
  - **Retry:** Step 3 after vulnerabilities are fixed and retested

---

#### Step 4: Review API Security Compliance

**Purpose**
- Review API security implementation against API Security Standards
- Verify API security requirements are met
- Identify API security issues

**Inputs**
- **From:** Procedure Required Inputs (API contracts, implementation code)
- **From:** Step 2 outputs (security code review findings)
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for API security requirements

**Actions**
- Review API Security Standards checklist:
  - **API Implementation Phase Checklist:**
    - [ ] Authentication implemented
    - [ ] Authorization implemented
    - [ ] Input validation implemented
    - [ ] Rate limiting implemented
    - [ ] TLS configured
    - [ ] Error handling secure
    - [ ] Security headers configured
    - [ ] CORS configured
- Verify API security implementation:
  - **Authentication:**
    - Check authentication method matches standards
    - Check authentication is implemented correctly
    - Check token validation is correct
  - **Authorization:**
    - Check authorization is implemented correctly
    - Check authorization is enforced on all protected endpoints
  - **Input Validation:**
    - Check input validation is implemented
    - Check validation matches API contracts
  - **Rate Limiting:**
    - Check rate limiting is implemented (if required)
    - Check rate limiting configuration is correct
  - **TLS/Encryption:**
    - Check TLS is configured
    - Check encryption in transit
  - **Error Handling:**
    - Check error handling is secure
    - Check error messages don't leak information
  - **Security Headers:**
    - Check security headers are configured
    - Check headers match standards
  - **CORS:**
    - Check CORS is configured correctly
    - Check CORS configuration matches standards
- Document API security compliance review in security review report

**Decisions / Evaluations**
- **Decision:** Does API security implementation comply with API Security Standards?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, document API security issues, may need to fix implementation

**Outputs**
- API security compliance reviewed
- API Security Standards compliance verified
- API security issues identified (if any)
- API security compliance review documented

**Failure Handling**
- **Failure:** API security non-compliance found
  - **Action:** Document non-compliance issues, prioritize fixes, coordinate with implementation team to fix issues
  - **Retry:** Step 4 after API security issues are fixed

---

#### Step 5: Review Data Security

**Purpose**
- Review data security implementation
- Verify sensitive data is protected
- Identify data security issues

**Inputs**
- **From:** Procedure Required Inputs (implementation code, data design, threat model)
- **From:** Step 1 outputs (security requirements)
- **Reference:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for data security requirements

**Actions**
- Review data security requirements from threat model:
  - Data sensitivity classification
  - Data encryption requirements
  - Data access control requirements
  - Data retention requirements
- Verify data security implementation:
  - **Data Encryption:**
    - Check sensitive data is encrypted at rest
    - Check sensitive data is encrypted in transit
    - Check encryption algorithms are secure
  - **Data Access Controls:**
    - Check data access controls are enforced
    - Check authorization checks are performed for data access
    - Check data isolation (multi-tenant, if applicable)
  - **Data Logging:**
    - Check sensitive data is not logged
    - Check logs don't contain sensitive information
    - Check audit logs are protected
  - **Data Storage:**
    - Check sensitive data is stored securely
    - Check database security is configured
    - Check backup security
- Review data flow security:
  - Check data flows are secure
  - Check data transformations are secure
  - Check data validation is performed
- Document data security review in security review report

**Decisions / Evaluations**
- **Decision:** Is data security implementation adequate?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, document data security issues, may need to fix implementation
  - **Skip:** If no sensitive data, proceed to Step 6

**Outputs**
- Data security reviewed
- Data security issues identified (if any)
- Data security review documented

**Failure Handling**
- **Failure:** Data security issues found
  - **Action:** Document data security issues, prioritize fixes, coordinate with implementation team to fix issues
  - **Retry:** Step 5 after data security issues are fixed

---

#### Step 6: Review Authentication and Authorization Implementation

**Purpose**
- Review authentication and authorization implementation
- Verify AuthN/AuthZ requirements are implemented correctly
- Identify AuthN/AuthZ security issues

**Inputs**
- **From:** Procedure Required Inputs (implementation code, AuthN/AuthZ requirements from [AuthN/AuthZ Procedure](./authn-authz-procedure.md))
- **From:** Step 1 outputs (security requirements)
- **Reference:** [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) for AuthN/AuthZ requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for API AuthN/AuthZ requirements

**Actions**
- Review AuthN/AuthZ requirements:
  - Authentication method requirements
  - Authorization model requirements
  - Token/session specifications
  - Authorization enforcement requirements
- Verify authentication implementation:
  - **Authentication Method:**
    - Check authentication method matches requirements
    - Check authentication is implemented correctly
    - Check token validation is correct
    - Check token expiration is enforced
    - Check token refresh is implemented correctly
  - **Session Management:**
    - Check session management is secure
    - Check session expiration is enforced
    - Check session invalidation works correctly
- Verify authorization implementation:
  - **Authorization Model:**
    - Check authorization model matches requirements
    - Check roles/permissions are implemented correctly
    - Check authorization policies are enforced
  - **Authorization Enforcement:**
    - Check authorization is enforced on all protected resources
    - Check authorization checks are performed server-side
    - Check authorization failures are handled correctly
- Verify multi-tenant isolation (if applicable):
  - Check tenant isolation is enforced
  - Check tenant boundaries are respected
- Document AuthN/AuthZ review in security review report

**Decisions / Evaluations**
- **Decision:** Is AuthN/AuthZ implementation correct and secure?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, document AuthN/AuthZ issues, may need to fix implementation
  - **Skip:** If no AuthN/AuthZ requirements, proceed to Step 7

**Outputs**
- AuthN/AuthZ implementation reviewed
- AuthN/AuthZ issues identified (if any)
- AuthN/AuthZ review documented

**Failure Handling**
- **Failure:** AuthN/AuthZ issues found
  - **Action:** Document AuthN/AuthZ issues, prioritize fixes, coordinate with implementation team to fix issues
  - **Retry:** Step 6 after AuthN/AuthZ issues are fixed

---

#### Step 7: Assess Security Vulnerabilities and Risk

**Purpose**
- Assess all identified security vulnerabilities
- Prioritize vulnerabilities by severity
- Determine risk and remediation requirements

**Inputs**
- **From:** Steps 2-6 outputs (all security review findings)

**Actions**
- Compile all security findings:
  - Security code review findings
  - Security test results
  - API security compliance issues
  - Data security issues
  - AuthN/AuthZ issues
- Assess vulnerability severity:
  - **Critical:** Immediate security risk, must fix before deployment
  - **High:** Significant security risk, should fix before deployment
  - **Medium:** Moderate security risk, should fix soon
  - **Low:** Minor security risk, can be addressed later
- Assess vulnerability impact:
  - Data breach risk
  - System compromise risk
  - User impact
  - Business impact
- Prioritize vulnerabilities:
  - List critical vulnerabilities (must fix)
  - List high vulnerabilities (should fix)
  - List medium/low vulnerabilities (can fix later)
- Determine remediation requirements:
  - Identify vulnerabilities that must be fixed before deployment
  - Identify vulnerabilities that can be fixed after deployment
  - Identify vulnerabilities that can be accepted (with justification)
- Document vulnerability assessment in security review report

**Decisions / Evaluations**
- **Decision:** Are there critical or high vulnerabilities that must be fixed before deployment?
  - **Go:** If no critical/high vulnerabilities, proceed to Step 8
  - **No-Go:** If yes, document critical/high vulnerabilities, must fix before proceeding

**Outputs**
- Security vulnerabilities assessed
- Vulnerability severity prioritized
- Remediation requirements determined
- Vulnerability assessment documented

**Failure Handling**
- **Failure:** Critical or high vulnerabilities found
  - **Action:** Document vulnerabilities, coordinate with implementation team to fix, re-review after fixes
  - **Retry:** Step 7 after vulnerabilities are fixed and re-reviewed

---

#### Step 8: Create Security Review Report and Obtain Approval

**Purpose**
- Create comprehensive security review report
- Document all security findings and recommendations
- Obtain approval for proceeding to acceptance and signoff

**Inputs**
- **From:** All previous steps (complete security review findings)

**Actions**
- Create security review report:
  - **Executive Summary:** Overall security review status, critical findings summary
  - **Threat Model Review:** Security requirements review, traceability
  - **Security Code Review:** Code review findings, security requirements implementation
  - **Security Testing:** Security test results, vulnerabilities found
  - **API Security Compliance:** API Security Standards compliance, issues found
  - **Data Security Review:** Data security findings, issues found
  - **AuthN/AuthZ Review:** Authentication/authorization findings, issues found
  - **Vulnerability Assessment:** All vulnerabilities identified, severity, prioritization
  - **Recommendations:** Security fixes required, security improvements recommended
  - **Risk Assessment:** Overall security risk, residual risk
- Review security review report:
  - Present report to:
    - Security Team/Lead
    - Technical Leads
    - Product Owner (for risk acceptance)
  - Gather feedback
  - Address concerns
- Obtain approval:
  - Secure approval from Security Lead
  - Document approval
  - Update Jira ticket with security review report

**Decisions / Evaluations**
- **Decision:** Is security review approved and ready for acceptance and signoff?
  - **Go:** If yes, procedure complete, ready for acceptance and signoff (if no critical vulnerabilities)
  - **No-Go:** If no, address security issues, fix vulnerabilities, re-review, re-seek approval

**Outputs**
- Security review report created
- Security findings documented
- Vulnerability assessment documented
- Recommendations provided
- Approval obtained
- Ready for acceptance and signoff (if no critical vulnerabilities)

**Failure Handling**
- **Failure:** Security review not approved
  - **Action:** Address security issues, fix vulnerabilities, re-review, update report, re-seek approval
  - **Retry:** Step 8 after security issues are resolved and re-reviewed

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Security Review Report** - Comprehensive report documenting:
  - Threat model review results
  - Security code review findings
  - Security test results
  - API Security Standards compliance results
  - Data security review results
  - AuthN/AuthZ review results
  - Vulnerability assessment
  - Security recommendations
  - Risk assessment

**State changes:**
- Security implementation reviewed
- Security vulnerabilities identified and documented
- Security requirements validated
- Security standards compliance verified
- Ready for acceptance and signoff (if no critical vulnerabilities)

**Decisions recorded:**
- Security review decisions
- Vulnerability severity decisions
- Remediation requirement decisions
- Security review approval

**Signals emitted:**
- "Security Review Complete" - Security review executed and approved
- "Ready for Acceptance and Signoff" - Security validated, ready for acceptance (if no critical vulnerabilities)
- "Critical Vulnerabilities Found" - Critical vulnerabilities must be fixed before deployment

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Security code review completed
- [ ] Security test cases executed (from test plan)
- [ ] Threat model security requirements validated
- [ ] API Security Standards compliance verified
- [ ] Data security reviewed (if applicable)
- [ ] AuthN/AuthZ reviewed (if applicable)
- [ ] Security vulnerabilities assessed

**Reviews required:**
- [ ] Security review report reviewed by Security Team/Lead
- [ ] Security review report reviewed by Technical Leads
- [ ] Security review report reviewed by Product Owner (for risk acceptance)
- [ ] Approval obtained from Security Lead

**Automated checks:**
- [ ] Security scanning tools run (if available)
- [ ] Dependency vulnerability scanning run (if available)
- [ ] Security test automation executed (if available)

**Who/what can approve completion:**
- **Security Lead** - Must approve security review and risk assessment
- **Technical Lead** - Must approve security implementation validation
- **Product Owner** - Must approve risk acceptance (for residual risks)

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Security Review Report** → Input for [Acceptance & Signoff Procedure](./acceptance-signoff-procedure.md) (validates security before acceptance)
- **Security Review Report** → Input for [Implementation Verification Procedure](./implementation-verification-procedure.md) (confirms security validation)

**Procedures that depend on this:**
- **[Acceptance & Signoff Procedure](./acceptance-signoff-procedure.md)** - Requires security review approval before acceptance
- **[Implementation Verification Procedure](./implementation-verification-procedure.md)** - May reference security review results

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Threat model and security requirements reviewed
- [ ] Security code review completed
- [ ] Security test cases executed (from test plan)
- [ ] API Security Standards compliance verified
- [ ] Data security reviewed (if applicable)
- [ ] AuthN/AuthZ reviewed (if applicable)
- [ ] Security vulnerabilities assessed and prioritized
- [ ] Security review report created
- [ ] Security findings documented
- [ ] Vulnerability assessment documented
- [ ] Recommendations provided
- [ ] Security review report reviewed by Security Team/Lead, Technical Leads, and Product Owner
- [ ] Approval obtained from Security Lead
- [ ] Jira ticket updated with security review report
- [ ] Ready for acceptance and signoff (if no critical vulnerabilities)

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with security review report reference
- [ ] **Security Review Report** - Report location and version
- [ ] **Threat Model Document** - Link to threat model (for security requirements traceability)
- [ ] **Test Plan Document** - Link to test plan (for security test case traceability)
- [ ] **API Security Standards** - Link to API Security Standards (for compliance validation)
- [ ] **Implementation Code** - Links to implementation code/PRs

**Audit trail:**
- **Security review date** - When security review was performed
- **Security review performed by** - Who performed the security review
- **Security vulnerabilities found** - Count and list of vulnerabilities by severity
- **Security requirements validated** - Count and list of security requirements validated
- **API Security Standards compliance** - Compliance status
- **Approval date** - When security review was approved
- **Approved by** - Who approved the security review

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Security review completed
- Security vulnerabilities identified and addressed (or accepted)
- Security review report created and approved
- Ready for acceptance and signoff

#### ⚠️ Blocked
- **Reason:** Missing threat model, missing test plan, missing implementation, security expertise unavailable
- **Required action:** Address blockers (obtain threat model, complete test plan, complete implementation, consult security experts)
- **Who to notify:** Security Lead, Technical Leads, Product Owner
- **Status:** Security review paused until blockers resolved

#### ❌ Aborted
- **Reason:** Feature cancelled, implementation significantly incomplete, threat model significantly incomplete
- **Required action:** Document why aborted, what was reviewed, update Jira ticket
- **Rollback required:** No (review only, no state to rollback)
- **Lessons learned:** Document why security review was aborted

#### 🚫 Critical Vulnerabilities Found
- **Reason:** Critical security vulnerabilities found that must be fixed before deployment
- **Required action:** Document critical vulnerabilities, coordinate with implementation team to fix, re-review after fixes
- **Status:** Security review complete but deployment blocked until vulnerabilities fixed
- **Next step:** Fix critical vulnerabilities, re-run security review, then proceed to acceptance

---

## Usage Notes

### Security Review Scope

- Security Review focuses on **security implementation** and **security compliance**
- Security Review validates that security requirements from threat model are implemented
- Security Review verifies compliance with security standards
- Security Review identifies security vulnerabilities

### Critical Vulnerabilities

- Critical vulnerabilities **must** be fixed before deployment
- High vulnerabilities **should** be fixed before deployment
- Medium/low vulnerabilities can be addressed after deployment (with risk acceptance)

### Security Standards Compliance

- Security Review must verify compliance with:
  - [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) (security requirements)
  - [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) (API security)
  - [AuthN/AuthZ Standards](../../.ai_standards/security-standards/authn-authz-standards.md) (if applicable)

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Security Team / Technical Lead
