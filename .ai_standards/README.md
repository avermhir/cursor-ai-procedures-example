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
- Repository structure and organization standards
- Code review standards and criteria
- Documentation standards
- Testing standards and requirements
- Security standards (including [API Security Standards](./security-standards/api-security-standards.md))
- Observability standards
- Dependency management standards
- Environment and configuration standards
- IaC standards
- Data standards

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
