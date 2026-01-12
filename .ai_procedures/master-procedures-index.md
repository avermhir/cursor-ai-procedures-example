# Master Procedures Index

## Overview

This document provides a complete index of all AI procedures organized by lifecycle category. Use this as a reference when you need to find a specific procedure or understand what procedures are available.

**Note:** Standards and guidelines have been moved to [`.ai_standards/`](../.ai_standards/). Procedures reference these standards for validation and compliance checks.

## Root Level Procedures

- **[Start Any Activity](./start-any-activity-procedure.md)** - Master entry point for any work activity
- **[Start a Task](./start-a-task-procedure.md)** - Task identification, definition, and planning procedure
- **[Session Startup](./session-startup-procedure.md)** - Session initialization procedure
- **[Session Wrapup](./session-wrapup-procedure.md)** - Session completion procedure

## Standards & Guidelines

**Note:** Standards and guidelines have been moved to [`.ai_standards/`](../.ai_standards/). These define criteria, requirements, and reference material that procedures check against.

**Location:** [`.ai_standards/`](../.ai_standards/)

**Standards Categories:**
- SDLC Standards (repository, branching, code review, documentation, security, testing, observability, dependencies, environment, IaC, data)
- Quality Standards (Definition of Done, code quality, testing gates, performance)
- Compliance Standards (data privacy, audit requirements, access control, vendor compliance)
- Design Standards (design system guidelines, UI/UX guidelines, accessibility standards)

## 2. Feature Lifecycle

End-to-end feature development from intake to deployment.

**Location:** [`feature-lifecycle/`](./feature-lifecycle/)

**Procedures:**
- **[Feature Implementation Orchestration](./feature-lifecycle/feature-implementation-orchestration-procedure.md)** - Orchestrates complete feature implementation workflow
- Feature Intake Procedure
- Requirements & Scope Procedure
- User Journey / UX Procedure
- Architecture Review Procedure
- Threat Model Procedure
- Data Design Procedure (DynamoDB + Postgres)
- API Contract Procedure
- Third-Party Integration Procedure
- AuthN/AuthZ Procedure
- Backend Implementation Procedure
- Frontend Implementation Procedure
- Middleware Implementation Procedure
- Architecture Compliance Validation Procedure
- Change Management Procedure
- IaC/Infrastructure Update Procedure
- Test Plan Procedure
- Implementation Verification Procedure
- Integration Testing Procedure
- End-to-End Testing Procedure
- Post-Implementation Architecture Assessment Procedure
- Security Review Procedure
- Accessibility Review Procedure
- Performance & Resilience Procedure
- Observability Instrumentation Procedure
- Documentation & Runbook Procedure
- Feature Flag / Rollout Procedure
- Acceptance & Signoff Procedure
- Rollback Procedure
- Post-Deploy Validation Procedure

## 3. Design System Lifecycle

Design system creation, maintenance, and compliance.

**Location:** [`design-system-lifecycle/`](./design-system-lifecycle/)

**Procedures:**
- Design System Creation/Update Procedure
- Design System Compliance Procedure
- Design System Component Procedure
- Design System Documentation Procedure

## 4. PR Lifecycle

PR review and merge readiness checks.

**Location:** [`pr-lifecycle/`](./pr-lifecycle/)

**Procedures:**
- PR Preparation Procedure
- Change Summary & Risk Procedure
- Code Quality & Style Procedure
- Test Coverage Procedure
- Security Review Procedure
- Data/Migration Review Procedure
- API/Contract Compatibility Procedure
- Frontend Review Procedure
- Infra/IaC Review Procedure
- Observability Review Procedure
- Performance Review Procedure
- Backwards Compatibility Procedure
- Release Notes Procedure
- Merge / Squash / Rebase Procedure

## 4. Release Lifecycle

Release planning, deployment, and monitoring.

**Location:** [`release-lifecycle/`](./release-lifecycle/)

**Procedures:**
- Release Planning Procedure
- Versioning Procedure
- Release Candidate Procedure
- Staging Validation Procedure
- Production Readiness Review Procedure
- Deployment Procedure
- Rollback Procedure
- Post-Release Monitoring Procedure
- Customer/Stakeholder Comms Procedure
- Release Retrospective Procedure

## 5. Incident Lifecycle

Incident response and resolution.

**Location:** [`incident-lifecycle/`](./incident-lifecycle/)

**Procedures:**
- Triage Procedure
- Mitigation Procedure
- Communications Procedure
- Root Cause Analysis Procedure
- Corrective Actions Procedure
- Postmortem Procedure

## 6. Change Management Lifecycle

Change approval and tracking.

**Location:** [`change-management-lifecycle/`](./change-management-lifecycle/)

**Procedures:**
- Change Approval Procedure
- Change Tracking Procedure
- Change Communication Procedure

## 7. Data Lifecycle

Data management across DynamoDB and Postgres.

**Location:** [`data-lifecycle/`](./data-lifecycle/)

**Procedures:**
- Data Classification Procedure
- Data Ownership & Source-of-Truth Procedure
- Schema Change Procedure (Postgres migrations)
- Shape Evolution Procedure (Dynamo item versioning)
- Backfill / Reindex Procedure
- Data Consistency Procedure (cross-store sync rules)
- Query/Index Review Procedure
- Backup & Restore Procedure
- Data Retention & Deletion Procedure
- Audit Logging Procedure

## 8. API Lifecycle

API design, implementation, and evolution.

**Location:** [`api-lifecycle/`](./api-lifecycle/)

**Procedures:**
- API Discovery Procedure
- API Design Procedure (OpenAPI/Types)
- Backwards Compatibility Procedure
- API Implementation Procedure
- API Security Procedure
- API Testing Procedure
- API Documentation Procedure
- API Deprecation Procedure

## 9. AuthN/AuthZ Lifecycle

Authentication and authorization.

**Location:** [`authn-authz-lifecycle/`](./authn-authz-lifecycle/)

**Procedures:**
- Identity Model Procedure
- Role/Permission Model Procedure
- Token/Session Procedure
- Authorization Enforcement Procedure
- Multi-Tenant Isolation Procedure (if applicable)
- Privileged Operations Procedure
- Audit/Compliance Logging Procedure

## 10. Third-Party Integration Lifecycle

External service integrations.

**Location:** [`third-party-integration-lifecycle/`](./third-party-integration-lifecycle/)

**Procedures:**
- Vendor Evaluation Procedure
- Contract & SLA Procedure
- Secrets & Credentials Procedure
- Rate Limit & Quota Procedure
- Failure Mode Procedure (timeouts/retries/circuit breakers)
- Mocking/Stubbing Procedure
- Monitoring & Alerting Procedure
- Data Mapping & Privacy Procedure

## 11. Testing & Quality Lifecycle

Testing and quality assurance.

**Location:** [`testing-quality-lifecycle/`](./testing-quality-lifecycle/)

**Procedures:**
- Unit Testing Procedure
- Integration Testing Procedure
- Contract Testing Procedure
- End-to-End Testing Procedure
- Regression Testing Procedure
- Test Data Management Procedure
- Performance Testing Procedure
- Security Testing Procedure
- CI Quality Gates Procedure

## 12. Security Lifecycle

Security practices and incident response.

**Location:** [`security-lifecycle/`](./security-lifecycle/)

**Procedures:**
- Secure Design Review Procedure
- Secrets Management Procedure
- IAM Least Privilege Procedure
- Dependency & Vulnerability Procedure
- Security Logging Procedure
- Pen Test / Hardening Procedure
- Incident Response Procedure (ties to Incident Lifecycle)

## 13. Observability & Operations Lifecycle

Monitoring, logging, and operations.

**Location:** [`observability-operations-lifecycle/`](./observability-operations-lifecycle/)

**Procedures:**
- Logging Procedure
- Metrics Procedure
- Tracing Procedure
- Alerting Procedure
- SLO/SLA Procedure
- Runbook Procedure
- On-Call Handoff Procedure
- Cost Monitoring Procedure

## 14. Architecture & System Health

Architecture decisions and system design.

**Location:** [`architecture-system-health/`](./architecture-system-health/)

**Procedures:**
- Architecture Baseline Procedure
- ADR Procedure
- Dependency Graph Procedure
- Tech Debt Intake Procedure
- Refactor Procedure
- Performance Tuning Procedure
- Security Hardening Procedure
- Decommission Procedure

## 15. Governance & Compliance

Governance and compliance procedures.

**Location:** [`governance-compliance/`](./governance-compliance/)

**Procedures:**
- Data Privacy Procedure
- Audit Evidence Procedure
- Access Review Procedure
- Change Approval Procedure
- Vendor Compliance Procedure

## Procedure Status

**Status Legend:**
- ✅ Defined - Procedure is complete and ready to use
- 🚧 In Progress - Procedure is being developed
- 📝 Placeholder - Procedure structure exists but content is pending
- ❌ Missing - Procedure not yet created

**Last Updated:** [To be updated as procedures are defined]
**Version:** 1.0.0

---

## Quick Navigation

Use this index with the [Start Any Activity](./start-any-activity-procedure.md) procedure to quickly navigate to the right procedure for your current work.
