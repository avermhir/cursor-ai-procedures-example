# Procedure: Threat Model

### 1. Purpose

**Why this procedure exists**

This procedure identifies security threats, analyzes their severity, and defines mitigation strategies for features. It creates a threat model document that drives security requirements for implementation and ensures security is considered early in the feature development lifecycle.

**What problem it solves**

- Features implemented without security threat analysis
- Security vulnerabilities discovered late in development
- Missing security requirements for implementation
- Inconsistent security approach across features
- Security threats not systematically identified
- Mitigation strategies not defined before implementation
- Security requirements not traceable to threats

**What "success" looks like at the end**

A complete threat model document that includes:
- All security threats identified using STRIDE methodology
- Threat severity assessments (likelihood, impact, severity)
- Mitigation strategies for each threat
- Security requirements derived from threats
- Residual risk assessment
- Threat model reviewed and approved
- Security requirements ready for implementation procedures

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Architecture Review Procedure](./architecture-review-procedure.md) has been completed
- Feature needs security threat analysis before implementation
- Security threats need to be identified and mitigated
- Security requirements need to be derived from threat analysis
- Feature Implementation Orchestration Procedure invokes this (Phase 1, after Architecture Review)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Architecture decisions** - Architecture decisions and ADRs (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Architecture document** - System architecture, service boundaries, trust boundaries (from Architecture Review Procedure)
- [ ] **Requirements document** - Functional requirements, acceptance criteria (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Feature definition** - High-level feature description, context (from [Feature Intake Procedure](./feature-intake-procedure.md))
- [ ] **Data flow information** - How data flows through the system (from architecture or requirements)
- [ ] **Existing threat models** - Previous threat models for similar features (if available)

**Decisions already made:**
- [ ] **Architecture is defined** - Architecture decisions have been made (from Architecture Review Procedure)
- [ ] **Requirements are defined** - Requirements are complete (from Requirements & Scope Procedure)

**Constraints:**
- [ ] **Security standards** - Must comply with [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md)
- [ ] **Security compliance** - Must consider compliance requirements (regulatory, policy)
- [ ] **Time constraints** - Threat modeling must complete before implementation begins

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing architecture decisions** → Invoke [Architecture Review Procedure](./architecture-review-procedure.md) first
- **Missing requirements** → Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md) first
- **Missing architecture document** → Review architecture from Architecture Review Procedure outputs

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 8 ordered steps from system overview through threat model approval
- **Procedures to be invoked** - None (this is a standalone procedure)
- **Dependencies between steps** - Overview → Boundaries → Data Flows → Identify Threats → Analyze → Mitigate → Assess Risk → Document
- **Risks & unknowns** - Architecture unclear, requirements incomplete, security expertise unavailable, threats not fully identified
- **Validation points** - After threat identification, after mitigation strategies, after security requirements, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Threat Modeling Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review System Overview and Architecture

**Purpose**
- Understand the system/feature being threat modeled
- Review architecture decisions and service boundaries
- Identify system components and their interactions

**Inputs**
- **From:** Procedure Required Inputs (architecture decisions, architecture document, requirements, feature definition)

**Actions**
- Review architecture document from Architecture Review Procedure
- Review architecture decisions and ADRs
- Review requirements document
- Review feature definition and context
- Identify system components:
  - Frontend components
  - Backend services
  - Middleware components
  - Data stores (DynamoDB, Postgres)
  - Third-party services
  - External interfaces
- Identify component interactions:
  - How components communicate
  - Data flows between components
  - Authentication/authorization flows
  - API endpoints and contracts

**Decisions / Evaluations**
- **Decision:** Is system architecture clear enough for threat modeling?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify architecture with architecture team, may need to revisit Architecture Review Procedure

**Outputs**
- System overview documented
- Components identified
- Component interactions identified
- Architecture context understood

**Failure Handling**
- **Failure:** Architecture unclear or incomplete
  - **Action:** Consult architecture team, review Architecture Review Procedure outputs, clarify architecture
  - **Retry:** Step 1 after architecture is clarified

---

#### Step 2: Identify Trust Boundaries and Security Perimeters

**Purpose**
- Define trust boundaries where security controls are needed
- Identify security perimeters and entry points
- Determine where authentication/authorization boundaries exist

**Inputs**
- **From:** Step 1 outputs (system overview, components, interactions)

**Actions**
- Identify trust boundaries:
  - User to application boundary
  - Application to backend boundary
  - Backend to data store boundary
  - Application to third-party service boundary
  - Internal service boundaries
- Identify security perimeters:
  - Network boundaries
  - Application boundaries
  - Data boundaries
  - Access control boundaries
- Identify entry points:
  - User-facing interfaces (web, mobile, API)
  - Service-to-service interfaces
  - Administrative interfaces
  - Third-party integrations
- Document trust boundaries in threat model document
- Reference [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for trust boundary requirements

**Decisions / Evaluations**
- **Decision:** Are all trust boundaries identified?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, review architecture again, identify missing boundaries

**Outputs**
- Trust boundaries documented
- Security perimeters identified
- Entry points identified
- Trust boundary diagram (if applicable)

**Failure Handling**
- **Failure:** Trust boundaries unclear
  - **Action:** Review architecture document, consult security team, clarify boundaries
  - **Retry:** Step 2 after boundaries are clarified

---

#### Step 3: Create Data Flow Diagrams

**Purpose**
- Visualize how data flows through the system
- Identify data paths and transformation points
- Identify where data is stored, processed, and transmitted

**Inputs**
- **From:** Step 1 outputs (components, interactions), Step 2 outputs (trust boundaries)

**Actions**
- Create data flow diagrams:
  - User input flows
  - Data processing flows
  - Data storage flows
  - Data transmission flows
  - API request/response flows
  - Authentication/authorization flows
- Identify data transformation points:
  - Where data is validated
  - Where data is transformed
  - Where data is encrypted/decrypted
  - Where data is stored
- Identify sensitive data:
  - Personal identifiable information (PII)
  - Authentication credentials
  - Authorization tokens
  - Financial data
  - Health data
  - Other sensitive information
- Document data flows in threat model document
- Reference [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for data flow requirements

**Decisions / Evaluations**
- **Decision:** Are all critical data flows documented?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, identify missing data flows, update diagrams

**Outputs**
- Data flow diagrams created
- Data transformation points identified
- Sensitive data identified
- Data flows documented

**Failure Handling**
- **Failure:** Data flows unclear or incomplete
  - **Action:** Review requirements, consult with development team, clarify data flows
  - **Retry:** Step 3 after data flows are clarified

---

#### Step 4: Identify Threats Using STRIDE

**Purpose**
- Systematically identify security threats across all STRIDE categories
- Ensure comprehensive threat coverage
- Document threats with required information

**Inputs**
- **From:** Step 1 outputs (components, interactions), Step 2 outputs (trust boundaries), Step 3 outputs (data flows)
- **Reference:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for STRIDE categories and threat identification requirements

**Actions**
- For each STRIDE category, identify threats:
  - **Spoofing:**
    - Authentication bypass threats
    - Identity spoofing threats
    - Session hijacking threats
    - Token/credential theft threats
  - **Tampering:**
    - Data integrity violation threats
    - Code injection threats
    - Configuration tampering threats
    - API manipulation threats
  - **Repudiation:**
    - Lack of audit logging threats
    - Insufficient transaction records threats
    - Missing authentication evidence threats
  - **Information Disclosure:**
    - Data exposure in transit threats
    - Data exposure at rest threats
    - Information leakage in errors/logs threats
    - Inadequate access control threats
  - **Denial of Service:**
    - Resource exhaustion threats
    - Rate limiting bypass threats
    - Cascading failure threats
    - Dependency unavailability threats
  - **Elevation of Privilege:**
    - Authorization bypass threats
    - Privilege escalation threats
    - Insufficient access control threats
    - Role-based access violation threats
- For each identified threat, document:
  - Threat ID (unique identifier, e.g., THREAT-001)
  - Threat Name (descriptive name)
  - STRIDE Category
  - Description (detailed description)
  - Attack Vector (how threat could be exploited)
  - Affected Components (which components are affected)
- Consider additional threat categories (if applicable):
  - Supply chain attacks
  - Social engineering
  - Physical security
  - Compliance violations
  - Data privacy
- Document all threats in threat model document
- Reference [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for threat documentation requirements

**Decisions / Evaluations**
- **Decision:** Have all STRIDE categories been considered?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, review each STRIDE category, identify missing threats
- **Decision:** Are threats specific and actionable (not generic)?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, make threats more specific to the feature/system

**Outputs**
- Threats identified across all STRIDE categories
- Threats documented with required fields
- Threat list complete

**Failure Handling**
- **Failure:** Threats not comprehensive or too generic
  - **Action:** Review STRIDE methodology, consult security team, make threats more specific
  - **Retry:** Step 4 after improving threat identification

---

#### Step 5: Analyze Threat Severity

**Purpose**
- Assess likelihood and impact of each threat
- Calculate severity ratings
- Prioritize threats for mitigation

**Inputs**
- **From:** Step 4 outputs (identified threats)
- **Reference:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for severity assessment framework

**Actions**
- For each identified threat, assess:
  - **Likelihood:**
    - High: Very likely to occur (frequent, easy to exploit)
    - Medium: Possible to occur (moderate difficulty, some conditions needed)
    - Low: Unlikely to occur (difficult to exploit, requires specific conditions)
  - **Impact:**
    - High: Severe consequences (data breach, system compromise, compliance violation)
    - Medium: Moderate consequences (limited data exposure, service degradation)
    - Low: Minor consequences (annoyance, minimal data exposure)
  - **Severity:** Calculate using severity matrix:
    - High Likelihood + High Impact = Critical
    - High Likelihood + Medium Impact = High
    - High Likelihood + Low Impact = Medium
    - Medium Likelihood + High Impact = High
    - Medium Likelihood + Medium Impact = Medium
    - Medium Likelihood + Low Impact = Low
    - Low Likelihood + High Impact = Medium
    - Low Likelihood + Medium Impact = Low
    - Low Likelihood + Low Impact = Low
- Document severity assessments in threat model document:
  - Update each threat with likelihood, impact, and severity
- Prioritize threats:
  - Critical severity threats (must mitigate)
  - High severity threats (must mitigate or document acceptance)
  - Medium severity threats (should mitigate if feasible)
  - Low severity threats (may accept with documentation)
- Reference [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for severity assessment requirements

**Decisions / Evaluations**
- **Decision:** Are severity assessments consistent and justified?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, review assessments, ensure consistency, justify ratings
- **Decision:** Are there Critical or High severity threats?
  - **Go:** If yes, these must be mitigated in Step 6
  - **No-Go:** If no, proceed to Step 6 (all threats are Medium or Low)

**Outputs**
- Threat severity assessments complete
- Threats prioritized by severity
- Critical and High severity threats identified

**Failure Handling**
- **Failure:** Severity assessments inconsistent or unjustified
  - **Action:** Review severity framework, consult security team, ensure consistency
  - **Retry:** Step 5 after improving severity assessments

---

#### Step 6: Define Mitigation Strategies

**Purpose**
- Define security controls and mitigations for each threat
- Specify how threats will be addressed
- Identify implementation locations for mitigations

**Inputs**
- **From:** Step 5 outputs (threat severity assessments)
- **Reference:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for mitigation requirements
- **Reference:** [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md) for security control standards

**Actions**
- For each threat (prioritizing Critical and High severity), define:
  - **Mitigation Strategy:** How the threat will be addressed
  - **Security Controls:** Specific security controls to implement:
    - Authentication controls (reference API Security Standards)
    - Authorization controls (reference API Security Standards)
    - Input validation controls (reference API Security Standards)
    - Encryption controls (reference API Security Standards)
    - Logging and monitoring controls (reference observability standards)
    - Access control controls (reference access control standards)
  - **Implementation Location:** Where controls will be implemented:
    - Frontend (if applicable)
    - Backend (if applicable)
    - Middleware (if applicable)
    - Infrastructure (if applicable)
  - **Validation Method:** How to verify mitigations are effective:
    - Security testing
    - Code review
    - Penetration testing
    - Security monitoring
  - **Responsible Party:** Who is responsible for implementing mitigations
  - **Mitigation Category:** Prevention, Detection, Response, or Recovery
- Document mitigations in threat model document:
  - Update each threat with mitigation strategy
  - Link mitigations to security standards
- Ensure Critical and High severity threats have mitigations:
  - Critical threats: Must have mitigations before implementation
  - High threats: Must have mitigations or documented acceptance
- Reference [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for mitigation documentation requirements

**Decisions / Evaluations**
- **Decision:** Do all Critical and High severity threats have mitigations?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, define mitigations for remaining Critical/High threats
- **Decision:** Are mitigations concrete and implementable?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, make mitigations more specific and actionable

**Outputs**
- Mitigation strategies defined for all threats
- Security controls identified
- Implementation locations identified
- Validation methods defined

**Failure Handling**
- **Failure:** Mitigations not defined for Critical/High threats
  - **Action:** Define mitigations, consult security team, ensure all Critical/High threats are addressed
  - **Retry:** Step 6 after defining missing mitigations
- **Failure:** Mitigations not concrete or implementable
  - **Action:** Make mitigations more specific, reference security standards, ensure implementability
  - **Retry:** Step 6 after improving mitigations

---

#### Step 7: Assess Residual Risk and Derive Security Requirements

**Purpose**
- Assess remaining risks after mitigations
- Derive security requirements from threats and mitigations
- Document risk acceptance decisions

**Inputs**
- **From:** Step 6 outputs (mitigation strategies)
- **Reference:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for residual risk assessment and security requirements derivation

**Actions**
- Assess residual risk for each threat:
  - What risk remains after mitigations are implemented?
  - Is the residual risk acceptable?
  - What is the residual severity?
- Document residual risks:
  - Risk ID (unique identifier)
  - Risk Description (what risk remains)
  - Severity (Critical/High/Medium/Low)
  - Mitigation Status (what mitigations are in place)
  - Acceptance Decision (Accept/Reject/Defer)
  - Acceptance Rationale (why risk is accepted, if applicable)
  - Review Date (when risk should be re-evaluated)
- Derive security requirements from threats:
  - **Functional Security Requirements:** What security features must be implemented
  - **Non-Functional Security Requirements:** Security performance, availability, reliability requirements
  - **Compliance Requirements:** Regulatory or policy requirements
  - **Architectural Security Requirements:** Security patterns and architectural decisions
- Document security requirements:
  - Requirement ID (unique identifier, e.g., SEC-REQ-001)
  - Requirement Description (what must be implemented)
  - Source Threat (which threat(s) this requirement addresses)
  - Priority (Critical/High/Medium/Low based on threat severity)
  - Acceptance Criteria (how to verify the requirement is met)
  - Implementation Location (where requirement will be implemented)
- Ensure security requirements are:
  - Testable and verifiable
  - Traceable to threats
  - Specific and actionable
- Document residual risks and security requirements in threat model document
- Reference [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for requirements documentation

**Decisions / Evaluations**
- **Decision:** Are all residual risks assessed and documented?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, assess remaining residual risks
- **Decision:** Are there unacceptable residual risks?
  - **Go:** If no, proceed to Step 8
  - **No-Go:** If yes, define additional mitigations, reassess risks
- **Decision:** Are security requirements testable and traceable?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, improve requirements to be testable and traceable

**Outputs**
- Residual risks assessed and documented
- Security requirements derived from threats
- Risk acceptance decisions documented
- Security requirements ready for implementation procedures

**Failure Handling**
- **Failure:** Unacceptable residual risks remain
  - **Action:** Define additional mitigations, reassess risks, consult security team
  - **Retry:** Step 7 after addressing unacceptable risks
- **Failure:** Security requirements not testable or traceable
  - **Action:** Improve requirements, ensure testability, ensure traceability to threats
  - **Retry:** Step 7 after improving requirements

---

#### Step 8: Review and Approve Threat Model

**Purpose**
- Review threat model for completeness and quality
- Obtain approvals from stakeholders
- Finalize threat model document

**Inputs**
- **From:** All previous step outputs (complete threat model)
- **Reference:** [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) for validation and acceptance criteria

**Actions**
- Review threat model against [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md) checklist:
  - [ ] All required sections present
  - [ ] All STRIDE categories considered
  - [ ] All threats documented with required fields
  - [ ] All threats have severity assessments
  - [ ] All threats have mitigation strategies
  - [ ] Security requirements derived from threats
  - [ ] Residual risks assessed and documented
  - [ ] Threat model is complete and quality standards met
- Conduct security team review:
  - Security team reviews threat model
  - Security team provides feedback
  - Address security team feedback
- Conduct architecture team review (if applicable):
  - Architecture team reviews threat model alignment with architecture
  - Architecture team provides feedback
  - Address architecture team feedback
- Obtain product owner approval for residual risks:
  - Product owner reviews residual risks
  - Product owner accepts or rejects residual risks
  - Document product owner decisions
- Finalize threat model document:
  - Update threat model with review feedback
  - Mark threat model as "Approved"
  - Version control threat model document
  - Link threat model to feature documentation/ADR
  - Update Jira ticket with threat model reference

**Decisions / Evaluations**
- **Decision:** Does threat model meet quality standards?
  - **Go:** If yes, proceed to approval
  - **No-Go:** If no, address quality issues, re-review
- **Decision:** Has security team approved threat model?
  - **Go:** If yes, proceed to product owner approval
  - **No-Go:** If no, address security team feedback, re-review
- **Decision:** Has product owner accepted residual risks?
  - **Go:** If yes, threat model is approved
  - **No-Go:** If no, address product owner concerns, reassess risks

**Outputs**
- Threat model reviewed and approved
- Threat model document finalized
- Threat model version controlled and linked
- Security requirements ready for implementation

**Failure Handling**
- **Failure:** Threat model does not meet quality standards
  - **Action:** Address quality issues, improve threat model, re-review
  - **Retry:** Step 8 after improving threat model
- **Failure:** Security team or product owner does not approve
  - **Action:** Address feedback, revise threat model, re-review
  - **Retry:** Step 8 after addressing feedback

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Threat Model Document** - Complete threat model following [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md)
  - System overview
  - Trust boundaries
  - Data flow diagrams
  - Threat identification (all STRIDE categories)
  - Threat analysis (severity assessments)
  - Mitigation strategies
  - Residual risk assessment
  - Security requirements
- **Security Requirements Document** - Security requirements derived from threats, ready for implementation procedures

**State changes:**
- Threat model is approved and ready for use
- Security requirements are available for implementation procedures
- Threat model is linked to feature documentation

**Decisions recorded:**
- Threat severity assessments
- Mitigation strategies
- Residual risk acceptance decisions
- Security requirements priorities

**Signals emitted:**
- "Threat Model Complete" - Threat model is approved and ready
- "Security Requirements Ready" - Security requirements available for implementation
- "Ready for Technical Design" - Threat model complete, can proceed to Phase 2

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Threat model document contains all required sections (per Threat Modeling Standards)
- [ ] All STRIDE categories have been considered
- [ ] All threats are documented with required fields
- [ ] All threats have severity assessments
- [ ] All Critical and High severity threats have mitigations
- [ ] Security requirements are derived from threats
- [ ] Security requirements are testable and traceable
- [ ] Residual risks are assessed and documented

**Reviews required:**
- [ ] Security team review (must approve)
- [ ] Architecture team review (if applicable)
- [ ] Product owner review (must accept residual risks)

**Automated checks:**
- [ ] Threat model document structure validated (all sections present)
- [ ] Threat model document format validated (markdown, version controlled)

**Who/what can approve completion:**
- **Security Team** - Must review and approve threat model
- **Architecture Team** - Must review if architecture alignment needed
- **Product Owner** - Must accept residual risks

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Threat Model Document** → Input for [Security Review Procedure](./security-review-procedure.md) (validates implementation against threat model)
- **Security Requirements** → Input for [Backend Implementation Procedure](./backend-implementation-procedure.md) (implements security requirements)
- **Security Requirements** → Input for [Frontend Implementation Procedure](./frontend-implementation-procedure.md) (implements security requirements)
- **Security Requirements** → Input for [Middleware Implementation Procedure](./middleware-implementation-procedure.md) (implements security requirements)
- **Security Requirements** → Input for [API Design Procedure](../api-lifecycle/api-design-procedure.md) (designs APIs with security requirements)
- **Threat Model** → Input for [Test Plan Procedure](./test-plan-procedure.md) (includes security testing requirements)

**Procedures that depend on this:**
- **All Implementation Procedures** - Use security requirements from threat model
- **Security Review Procedure** - Validates implementation against threat model
- **Test Plan Procedure** - Includes security testing based on threat model

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] System overview reviewed and documented
- [ ] Trust boundaries identified and documented
- [ ] Data flow diagrams created
- [ ] Threats identified across all STRIDE categories
- [ ] All threats documented with required fields (ID, name, category, description, attack vector, affected components)
- [ ] All threats have severity assessments (likelihood, impact, severity)
- [ ] All Critical and High severity threats have mitigation strategies
- [ ] All mitigations are concrete and implementable
- [ ] Residual risks assessed and documented
- [ ] Security requirements derived from threats
- [ ] Security requirements are testable and traceable
- [ ] Threat model reviewed by security team
- [ ] Threat model reviewed by architecture team (if applicable)
- [ ] Product owner has accepted residual risks
- [ ] Threat model document is complete (all sections per Threat Modeling Standards)
- [ ] Threat model document is version controlled
- [ ] Threat model is linked to feature documentation/ADR
- [ ] Jira ticket updated with threat model reference
- [ ] Security requirements ready for implementation procedures

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with threat model reference
- [ ] **Threat Model Document** - Document location and version
- [ ] **Architecture Document** - Link to architecture that informed threat model
- [ ] **ADRs** - Link to architecture decisions that informed threat model
- [ ] **Requirements Document** - Link to requirements that informed threat model
- [ ] **Security Requirements** - Link to security requirements derived from threat model

**Audit trail:**
- **Threat modeling date** - When threat modeling was performed
- **Security team involved** - Who was involved in threat modeling and review
- **Threats identified** - Count and list of threats by severity
- **Mitigations defined** - Count and list of mitigations
- **Security requirements derived** - Count and list of security requirements
- **Residual risks** - Count and list of residual risks by severity
- **Approval date** - When threat model was approved
- **Approval stakeholders** - Who approved threat model

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Threat model document complete
- All threats identified and analyzed
- All mitigations defined
- Security requirements derived
- Threat model reviewed and approved
- Security requirements ready for implementation

#### ⚠️ Blocked
- **Reason:** Architecture unclear, requirements incomplete, security expertise unavailable, threats not fully identified
- **Required action:** Address blocker (clarify architecture, complete requirements, consult security team, improve threat identification)
- **Who to notify:** Security team lead, architecture team lead, feature owner
- **Status:** Threat modeling paused until blocker resolved

#### ❌ Aborted
- **Reason:** Architecture cannot be determined, requirements too unclear, feature cancelled, security threats cannot be assessed
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why threat modeling couldn't be completed
- **Next step:** Feature may need to be redefined or cancelled

#### 🔄 Partial Threat Model
- **Reason:** Some threats identified but others deferred, some mitigations deferred to implementation
- **Required action:** Document what was completed vs. deferred, update threat model document
- **Status:** Core threats identified, some threats/mitigations deferred
- **Next step:** Proceed with defined threats, deferred items addressed during implementation

---

## Usage Notes

### Integration with Architecture Review

- Threat Model Procedure depends on Architecture Review Procedure outputs
- Architecture decisions inform threat identification (service boundaries, trust boundaries)
- Threat model should align with architecture decisions

### Integration with Security Standards

- Threat Model Procedure must comply with [Threat Modeling Standards](../../.ai_standards/security-standards/threat-modeling-standards.md)
- Mitigations should reference [API Security Standards](../../.ai_standards/security-standards/api-security-standards.md)
- Security requirements should align with security standards

### Integration with Implementation Procedures

- Security requirements from threat model feed into implementation procedures
- Implementation procedures must implement security requirements
- Security Review Procedure validates implementation against threat model

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Security Team
