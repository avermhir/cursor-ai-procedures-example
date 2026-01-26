# Threat Modeling Standards

## Overview

This document defines standards and requirements for threat models. These standards define **what a threat model must contain** and serve as reference material for the Threat Model Procedure. The procedure defines **how to create** a threat model; these standards define **what must be produced** and **how to measure** the results.

**Note:** These are **standards/guidelines** (reference material), not executable procedures. For executable workflows, see:
- [Threat Model Procedure](../../.ai_procedures/feature-lifecycle/threat-model-procedure.md) - Creates threat models following these standards
- [Security Review Procedure](../../.ai_procedures/feature-lifecycle/security-review-procedure.md) - Reviews security implementation against threat model

---

## Threat Model Document Requirements

### Required Sections

A threat model document **must** contain the following sections:

1. **System Overview** - Description of the system/feature being threat modeled
2. **Trust Boundaries** - Identification of trust boundaries and security perimeters
3. **Data Flow Diagrams** - Visual representation of data flows and interactions
4. **Threat Identification** - List of identified threats using STRIDE or similar methodology
5. **Threat Analysis** - Analysis of each threat (likelihood, impact, severity)
6. **Mitigation Strategies** - Security controls and mitigations for each threat
7. **Residual Risk Assessment** - Remaining risks after mitigations
8. **Security Requirements** - Derived security requirements from threat analysis

### Document Format

- **Format:** Markdown document (`.md`) or structured document
- **Location:** Stored with feature documentation or in security documentation repository
- **Version Control:** Must be version controlled and linked to feature/ADR
- **Review Status:** Must indicate review status (Draft, Under Review, Approved)

---

## Threat Identification Standards

### Threat Categories (STRIDE)

Threat models **must** consider threats across all STRIDE categories:

#### Spoofing
- **Definition:** Impersonating another user or system
- **Must Consider:**
  - Authentication bypass
  - Identity spoofing
  - Session hijacking
  - Token/credential theft

#### Tampering
- **Definition:** Unauthorized modification of data or code
- **Must Consider:**
  - Data integrity violations
  - Code injection
  - Configuration tampering
  - API manipulation

#### Repudiation
- **Definition:** Ability to deny actions or transactions
- **Must Consider:**
  - Lack of audit logging
  - Insufficient transaction records
  - Missing authentication evidence

#### Information Disclosure
- **Definition:** Unauthorized access to sensitive information
- **Must Consider:**
  - Data exposure in transit
  - Data exposure at rest
  - Information leakage in errors/logs
  - Inadequate access controls

#### Denial of Service (DoS)
- **Definition:** Disruption of service availability
- **Must Consider:**
  - Resource exhaustion
  - Rate limiting bypass
  - Cascading failures
  - Dependencies unavailable

#### Elevation of Privilege
- **Definition:** Gaining unauthorized privileges
- **Must Consider:**
  - Authorization bypass
  - Privilege escalation
  - Insufficient access controls
  - Role-based access violations

### Additional Threat Categories

Threat models **should** also consider:

- **Supply Chain Attacks** - Compromised dependencies or third-party services
- **Social Engineering** - Human factors and social manipulation
- **Physical Security** - Physical access to systems or data
- **Compliance Violations** - Regulatory or policy violations
- **Data Privacy** - Personal data protection and privacy requirements

---

## Threat Analysis Standards

### Threat Severity Assessment

Each identified threat **must** be assessed using a consistent severity framework:

#### Likelihood (Probability)
- **High:** Very likely to occur (frequent, easy to exploit)
- **Medium:** Possible to occur (moderate difficulty, some conditions needed)
- **Low:** Unlikely to occur (difficult to exploit, requires specific conditions)

#### Impact (Consequences)
- **High:** Severe consequences (data breach, system compromise, compliance violation)
- **Medium:** Moderate consequences (limited data exposure, service degradation)
- **Low:** Minor consequences (annoyance, minimal data exposure)

#### Severity Matrix

| Likelihood \ Impact | High | Medium | Low |
|---------------------|------|--------|-----|
| **High** | **Critical** | **High** | **Medium** |
| **Medium** | **High** | **Medium** | **Low** |
| **Low** | **Medium** | **Low** | **Low** |

**Severity Levels:**
- **Critical:** Must be mitigated before implementation
- **High:** Must be mitigated or have documented acceptance
- **Medium:** Should be mitigated if feasible
- **Low:** May be accepted with documentation

### Threat Documentation Requirements

Each threat **must** be documented with:

- **Threat ID** - Unique identifier (e.g., THREAT-001)
- **Threat Name** - Descriptive name
- **STRIDE Category** - Which category the threat belongs to
- **Description** - Detailed description of the threat
- **Attack Vector** - How the threat could be exploited
- **Affected Components** - Which system components are affected
- **Likelihood** - High/Medium/Low
- **Impact** - High/Medium/Low
- **Severity** - Critical/High/Medium/Low
- **Current Mitigations** - Existing security controls (if any)
- **Required Mitigations** - Security controls needed
- **Residual Risk** - Risk remaining after mitigations

---

## Mitigation Strategy Standards

### Mitigation Requirements

For each threat, the threat model **must** define:

1. **Mitigation Strategy** - How the threat will be addressed
2. **Security Controls** - Specific security controls to implement
3. **Implementation Location** - Where controls will be implemented (frontend, backend, middleware, infrastructure)
4. **Validation Method** - How to verify mitigations are effective
5. **Responsible Party** - Who is responsible for implementing mitigations

### Mitigation Categories

Mitigations **should** be categorized by type:

- **Prevention** - Controls that prevent the threat (authentication, authorization, input validation)
- **Detection** - Controls that detect the threat (logging, monitoring, alerting)
- **Response** - Controls that respond to the threat (incident response, rollback procedures)
- **Recovery** - Controls that recover from the threat (backup, restore, disaster recovery)

### Security Control Standards

Mitigations **must** reference applicable security standards:

- **Authentication Controls** - Reference [API Security Standards](./api-security-standards.md) authentication requirements
- **Authorization Controls** - Reference [API Security Standards](./api-security-standards.md) authorization requirements
- **Input Validation** - Reference [API Security Standards](./api-security-standards.md) input validation requirements
- **Encryption** - Reference [API Security Standards](./api-security-standards.md) encryption requirements
- **Logging & Monitoring** - Reference observability standards
- **Access Control** - Reference access control standards

---

## Security Requirements Derivation

### Requirements from Threats

The threat model **must** derive security requirements from identified threats:

- **Functional Security Requirements** - What security features must be implemented
- **Non-Functional Security Requirements** - Security performance, availability, reliability requirements
- **Compliance Requirements** - Regulatory or policy requirements
- **Architectural Security Requirements** - Security patterns and architectural decisions

### Requirements Documentation

Security requirements **must** be documented with:

- **Requirement ID** - Unique identifier (e.g., SEC-REQ-001)
- **Requirement Description** - What must be implemented
- **Source Threat** - Which threat(s) this requirement addresses
- **Priority** - Critical/High/Medium/Low (based on threat severity)
- **Acceptance Criteria** - How to verify the requirement is met
- **Implementation Location** - Where requirement will be implemented

---

## Residual Risk Assessment Standards

### Risk Acceptance

After identifying mitigations, the threat model **must** assess residual risk:

- **Accepted Risks** - Risks that remain after mitigations and are acceptable
- **Unacceptable Risks** - Risks that must be further mitigated
- **Risk Acceptance Rationale** - Why accepted risks are acceptable

### Risk Documentation

Residual risks **must** be documented with:

- **Risk ID** - Unique identifier
- **Risk Description** - What risk remains
- **Severity** - Critical/High/Medium/Low
- **Mitigation Status** - What mitigations are in place
- **Acceptance Decision** - Accept/Reject/Defer
- **Acceptance Rationale** - Why risk is accepted (if applicable)
- **Review Date** - When risk should be re-evaluated

---

## Validation and Acceptance Criteria

### Threat Model Completeness

A threat model is **complete** when:

- [ ] All required sections are present
- [ ] All STRIDE categories have been considered
- [ ] All identified threats are documented with required fields
- [ ] All threats have severity assessments
- [ ] All threats have mitigation strategies
- [ ] Security requirements are derived from threats
- [ ] Residual risks are assessed and documented
- [ ] Threat model has been reviewed and approved

### Threat Model Quality

A threat model meets **quality standards** when:

- [ ] Threats are specific and actionable (not generic)
- [ ] Mitigations are concrete and implementable
- [ ] Security requirements are testable and verifiable
- [ ] Risk assessments are consistent and justified
- [ ] Threat model is traceable to architecture and requirements
- [ ] Threat model is reviewed by security experts

### Verification Evidence Standards

Threat models **must** include verification evidence for mitigations:

- **Evidence Type** - What was used to verify (test, review, scan, simulation, pen test)
- **Evidence Reference** - Link or identifier for the evidence (test ID, report link, ticket)
- **Validation Result** - Pass/Fail/Partial with brief notes
- **Validation Date** - When verification occurred
- **Validator** - Role or team that performed validation (no process details)

### Threat Model Approval

A threat model is **approved** when:

- [ ] Security team has reviewed and approved
- [ ] Architecture team has reviewed and approved (if applicable)
- [ ] Product owner has reviewed and accepted residual risks
- [ ] Threat model is linked to feature documentation/ADR
- [ ] Threat model is version controlled

---

## Integration with Other Standards

### Architecture Review Integration

Threat models **must** align with:
- Architecture decisions from [Architecture Review Procedure](../../.ai_procedures/feature-lifecycle/architecture-review-procedure.md)
- Service boundaries and trust boundaries from architecture
- Technology choices and their security implications

### API Security Standards Integration

Threat models **must** reference:
- [API Security Standards](./api-security-standards.md) for API-related threats
- Authentication and authorization requirements
- Input validation and encryption requirements

### Implementation Integration

Threat models **must** inform:
- Security requirements for implementation procedures
- Security review checklists
- Security testing requirements

---

## Threat Model Checklist

### Document Structure
- [ ] System overview section present
- [ ] Trust boundaries identified and documented
- [ ] Data flow diagrams created
- [ ] Threat identification section complete
- [ ] Threat analysis section complete
- [ ] Mitigation strategies documented
- [ ] Residual risk assessment complete
- [ ] Security requirements derived

### Threat Identification
- [ ] Spoofing threats identified
- [ ] Tampering threats identified
- [ ] Repudiation threats identified
- [ ] Information disclosure threats identified
- [ ] Denial of service threats identified
- [ ] Elevation of privilege threats identified
- [ ] Additional threat categories considered (if applicable)

### Threat Analysis
- [ ] Each threat has unique ID
- [ ] Each threat has description
- [ ] Each threat has STRIDE category
- [ ] Each threat has likelihood assessment
- [ ] Each threat has impact assessment
- [ ] Each threat has severity rating
- [ ] Each threat has affected components identified

### Mitigation Strategies
- [ ] Each threat has mitigation strategy
- [ ] Security controls are specific and implementable
- [ ] Implementation location is identified
- [ ] Validation method is defined
- [ ] Responsible party is identified
- [ ] Mitigations reference security standards

### Security Requirements
- [ ] Security requirements derived from threats
- [ ] Requirements have unique IDs
- [ ] Requirements have acceptance criteria
- [ ] Requirements have priority ratings
- [ ] Requirements are traceable to threats

### Residual Risk
- [ ] Residual risks are identified
- [ ] Risk acceptance decisions are documented
- [ ] Risk acceptance rationale is provided
- [ ] Review dates are set for accepted risks

### Review and Approval
- [ ] Threat model reviewed by security team
- [ ] Threat model reviewed by architecture team (if applicable)
- [ ] Product owner has accepted residual risks
- [ ] Threat model is version controlled
- [ ] Threat model is linked to feature documentation

---

## References

These standards are referenced by:

- [Threat Model Procedure](../../.ai_procedures/feature-lifecycle/threat-model-procedure.md) - Creates threat models following these standards
- [Security Review Procedure](../../.ai_procedures/feature-lifecycle/security-review-procedure.md) - Reviews implementation against threat model
- [Architecture Review Procedure](../../.ai_procedures/feature-lifecycle/architecture-review-procedure.md) - Provides architecture context for threat modeling
- [Backend Implementation Procedure](../../.ai_procedures/feature-lifecycle/backend-implementation-procedure.md) - Implements security requirements from threat model
- [Frontend Implementation Procedure](../../.ai_procedures/feature-lifecycle/frontend-implementation-procedure.md) - Implements security requirements from threat model
- [Middleware Implementation Procedure](../../.ai_procedures/feature-lifecycle/middleware-implementation-procedure.md) - Implements security requirements from threat model

---

**Last Updated:** 2025-01-XX  
**Status:** Active Standards  
**Owner:** Security Team
