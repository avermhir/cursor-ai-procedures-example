# Start Any Activity Procedure

## Purpose

This is the master entry point procedure for initiating any work activity in the project. Use this procedure to determine which specific lifecycle procedure(s) you should follow based on the type of work you're about to begin.

## When to Use This Procedure

**Use this procedure:**
- At the start of any new work session
- When beginning a new task or feature
- When unsure which procedure to follow
- When transitioning between different types of work

## Activity Type Decision Tree

### 1. Feature Development
**If you're:** Starting a new feature, enhancement, or user-facing change

**Go to:** [`feature-lifecycle/`](./feature-lifecycle/README.md)
- Follow the complete Feature Lifecycle from intake to deployment

### 2. Pull Request / Code Review
**If you're:** Reviewing code, preparing a PR, or ensuring merge readiness

**Go to:** [`pr-lifecycle/`](./pr-lifecycle/README.md)
- Follow PR preparation and review procedures

### 3. Release / Deployment
**If you're:** Planning a release, deploying to production, or managing versions

**Go to:** [`release-lifecycle/`](./release-lifecycle/README.md)
- Follow release planning and deployment procedures

### 4. Incident Response
**If you're:** Responding to a production incident, outage, or critical bug

**Go to:** [`incident-lifecycle/`](./incident-lifecycle/README.md)
- Follow incident response and resolution procedures

### 5. Data Changes
**If you're:** Modifying database schemas, migrations, or data structures

**Go to:** [`data-lifecycle/`](./data-lifecycle/README.md)
- Follow data management and migration procedures

### 6. API Work
**If you're:** Designing, implementing, or modifying APIs

**Go to:** [`api-lifecycle/`](./api-lifecycle/README.md)
- Follow API design and evolution procedures

### 7. Authentication / Authorization
**If you're:** Working on auth, permissions, or access control

**Go to:** [`authn-authz-lifecycle/`](./authn-authz-lifecycle/README.md)
- Follow authentication and authorization procedures

### 8. Integration Work
**If you're:** Integrating with third-party services or external APIs

**Go to:** [`third-party-integration-lifecycle/`](./third-party-integration-lifecycle/README.md)
- Follow integration lifecycle procedures

### 9. Testing / Quality
**If you're:** Writing tests, running QA, or improving quality

**Go to:** [`testing-quality-lifecycle/`](./testing-quality-lifecycle/README.md)
- Follow testing and quality assurance procedures

### 10. Security Work
**If you're:** Security reviews, vulnerability fixes, or security improvements

**Go to:** [`security-lifecycle/`](./security-lifecycle/README.md)
- Follow security procedures

### 11. Observability / Operations
**If you're:** Adding monitoring, logging, alerts, or operational improvements

**Go to:** [`observability-operations-lifecycle/`](./observability-operations-lifecycle/README.md)
- Follow observability and operations procedures

### 12. Architecture / Design
**If you're:** Making architectural decisions, ADRs, or system design changes

**Go to:** [`architecture-system-health/`](./architecture-system-health/README.md)
- Follow architecture and system health procedures

### 13. Governance / Compliance
**If you're:** Compliance reviews, audit preparation, or governance work

**Go to:** [`governance-compliance/`](./governance-compliance/README.md)
- Follow governance and compliance procedures

### 14. Change Management
**If you're:** Requiring change approval or tracking changes

**Go to:** [`change-management-lifecycle/`](./change-management-lifecycle/README.md)
- Follow change management procedures

### 15. Standards / Configuration
**If you're:** Updating standards, configs, or foundational practices

**Go to:** [`sdlc-operating-system/`](./sdlc-operating-system/README.md)
- Follow SDLC operating system procedures

## Multi-Activity Workflows

Many activities span multiple lifecycles. For example:

**Feature Development often includes:**
- Feature Lifecycle (primary)
- PR Lifecycle (for each PR)
- Testing Quality Lifecycle (for test plans)
- API Lifecycle (if APIs are involved)
- Data Lifecycle (if schema changes)
- Release Lifecycle (for deployment)

**When multiple procedures apply:**
1. Start with the primary lifecycle (Feature, PR, etc.)
2. Reference related procedures as needed
3. Follow checkpoints in the primary procedure that point to others

## Quick Reference

See [`master-procedures-index.md`](./master-procedures-index.md) for a complete index of all procedures organized by category and purpose.

## Session Management

**For session startup/wrapup:**
- Use session management procedures at the root level
- These are separate from activity-specific procedures

## Notes

- Procedures are designed to be modular and cross-reference each other
- Not all steps in every procedure apply to every situation
- Use judgment to adapt procedures to your specific context
- When in doubt, err on the side of following more procedures rather than fewer

---

**Last Updated:** [To be updated when procedure is defined]
**Status:** Placeholder - To be fully defined
