# AI Standards & Guidelines

## Overview

This folder contains standards, guidelines, criteria, and reference material that define **what should be true** or **what to check against**. These are different from procedures, which are executable workflows that define **how to do something**.

## Distinction

**Standards/Guidelines (this folder):**
- Define criteria and requirements
- Provide checklists and validation criteria
- Document best practices and conventions
- Are referenced by procedures
- Are something you **CHECK AGAINST** or **REFERENCE**

**Procedures (`.ai_procedures/` folder):**
- Executable workflows with steps
- Have triggers, inputs, outputs
- Define how to accomplish tasks
- Are something you **EXECUTE** or **DO**

## Standards Categories

### SDLC Standards
- Repository structure and organization standards (pending definition)
- [Code Review Standards](./sdlc-standards/code-review-standards.md)
- Documentation standards (pending definition)
- [Testing Standards](./sdlc-standards/testing-standards.md)
- Security standards (including [API Security Standards](./security-standards/api-security-standards.md), [Threat Modeling Standards](./security-standards/threat-modeling-standards.md), and [AuthN/AuthZ Standards](./security-standards/authn-authz-standards.md))
- Observability standards (pending definition)
- Dependency management standards (pending definition)
- Environment and configuration standards (pending definition)
- [IaC Standards](./sdlc-standards/iac-standards.md)
- Data standards (including [Data Design Standards](./sdlc-standards/data-design-standards.md), [Third-Party Integration Standards](./sdlc-standards/third-party-integration-standards.md))

### Quality Standards
- Definition of Done criteria
- Code quality standards
- Testing quality gates
- Performance standards

### Compliance Standards
- Data privacy requirements
- Audit requirements
- Access control standards
- Vendor compliance requirements

### Design Standards
- Design system standards (if reference material)
- UI/UX guidelines
- Accessibility standards

## Usage

Standards are referenced by procedures. For example:
- Feature Implementation Procedure references Code Review Standards
- PR Lifecycle procedures validate against Testing Standards
- Release procedures ensure Security Standards are met

---

**Status:** Standards being organized from procedures
