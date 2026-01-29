# IaC (Infrastructure as Code) Standards

## Overview

This document defines standards and requirements for infrastructure-as-code (IaC) definitions and changes. These standards define **what IaC must comply with** and serve as reference material for the IaC/Infrastructure Update Procedure and the Infra/IaC Review Procedure.

**Note:** These are **standards/guidelines** (reference material), not executable procedures. For executable workflows, see:
- [IaC/Infrastructure Update Procedure](../../.ai_procedures/feature-lifecycle/iac-infrastructure-update-procedure.md) - Prepares and validates infrastructure changes
- [Infra/IaC Review Procedure](../../.ai_procedures/pr-lifecycle/infra-iac-review-procedure.md) - Reviews IaC changes in PRs
- [Architecture Compliance Validation Procedure](../../.ai_procedures/feature-lifecycle/architecture-compliance-validation-procedure.md) - Validates architecture and infrastructure alignment

---

## General IaC Requirements

### Tooling and Format

- **Tooling:** Use a single primary IaC tool per environment (e.g., Terraform, CloudFormation, Pulumi). Mixing tools for the same scope must be justified and documented.
- **Format:** IaC definitions must be stored as code in version control (no manual-only infrastructure for production).
- **State:** State must be stored in a remote, locked backend (e.g., Terraform remote state, S3 + DynamoDB). Local-only state is not allowed for shared environments.
- **Secrets:** Secrets must not be stored in IaC source. Use a secrets manager or CI/CD variables; reference by identifier only.

### Naming Conventions

- **Resources:** Use consistent, descriptive names that include:
  - Environment (e.g., `prod`, `staging`, `dev`) where applicable
  - Component or service name
  - Resource type hint (e.g., `-sg`, `-alb`, `-bucket`)
- **Format:** Use lowercase, hyphens or underscores consistently (e.g., `myapp-prod-alb`, `myapp_prod_db`). Choose one style per repo and document it.
- **Tags:** All billable or environment-scoped resources must have tags:
  - `Environment` (e.g., prod, staging, dev)
  - `Project` or `Application`
  - `ManagedBy` (e.g., terraform, cloudformation)
  - Additional tags per org policy (CostCenter, Owner, etc.)

### Review and Safety

- **Review:** All IaC changes must go through the [Infra/IaC Review Procedure](../../.ai_procedures/pr-lifecycle/infra-iac-review-procedure.md) before merge.
- **Plan/Preview:** Apply only after a plan/diff step (e.g., `terraform plan`, CloudFormation change set). No direct apply of unreviewed changes.
- **Environments:** Promote through environments (e.g., dev → staging → prod). Production changes must follow change management and rollback procedures.
- **Destructive changes:** Destructive changes (drops, replacements, renames) must be explicitly called out in the PR and approved.

---

## Terraform Standards

### Structure and Layout

- **Modules:** Reusable units must be in modules. Root modules should compose modules, not inline large blocks of resources.
- **Variables and Outputs:** Required variables must have descriptions. Outputs must be documented and only expose what consumers need.
- **Backend:** Backend configuration must be in code or in a documented, repeatable setup (e.g., `backend "s3"` with key and bucket).
- **Providers:** Pin provider versions in `required_providers`. Avoid unversioned or `>=` for production.

### Code Quality

- **Format:** Run `terraform fmt` and enforce in CI.
- **Validation:** Run `terraform validate` before plan/apply.
- **Documentation:** Root and module READMEs must describe purpose, inputs, outputs, and how to run.
- **No hardcoded values:** Use variables or data sources for region, account, environment; no hardcoded IDs in source.

### Security and Cost

- **Least privilege:** IAM and security group rules must follow least privilege; avoid broad `*` where not required.
- **Cost:** Right-sizing and cost implications must be considered for new or changed resources (e.g., instance types, storage, data transfer).
- **Sensitive output:** Mark sensitive outputs; do not log or expose in CI.

---

## CloudFormation Standards

### Template and Stack

- **Templates:** Use YAML or JSON; prefer YAML for readability. Template must pass `aws cloudformation validate-template`.
- **Parameters:** Required parameters must have descriptions and allowed values where appropriate. No secrets in default values.
- **Outputs:** Outputs must be documented and only expose what consumers need. Mark sensitive outputs.
- **Stack naming:** Use consistent naming (e.g., `{project}-{env}-{component}`).

### Code Quality

- **Linting:** Use cfn-lint or equivalent in CI.
- **Change sets:** Use change sets for production stacks; no direct update without reviewing changes.
- **Documentation:** Template or README must describe purpose, parameters, outputs, and deployment steps.
- **No hardcoded values:** Use parameters or mappings for account, region, environment.

### Security and Cost

- **IAM:** Use least-privilege IAM roles and policies; avoid wildcards where not required.
- **Cost:** Consider cost impact of new resources (e.g., RDS, NAT Gateway, data transfer).
- **Secrets:** Use AWS Secrets Manager or Parameter Store (SecureString); reference by logical ID, not literal values.

---

## Infrastructure Review Requirements

Reviews of IaC changes must verify:

- [ ] Naming and tagging comply with IaC Standards
- [ ] No secrets or sensitive data in source
- [ ] Plan/diff reviewed for unintended or destructive changes
- [ ] Security (IAM, networking) follows least privilege
- [ ] Cost implications are acceptable
- [ ] State/backend and promotion path are correct
- [ ] Documentation (README, variables, outputs) is adequate

---

## Related Standards

- [Data Design Standards](./data-design-standards.md) - Data stores and persistence
- [API Security Standards](../security-standards/api-security-standards.md) - APIs exposed by infrastructure
- [Third-Party Integration Standards](./third-party-integration-standards.md) - External dependencies
