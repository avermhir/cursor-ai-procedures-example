# Procedure: Dependency Graph

### 1. Purpose

**Why this procedure exists**

This procedure creates or updates a dependency graph for a system or subsystem. It documents components, their dependencies, and direction of dependency so that impact analysis, refactoring, and decommissioning can be done safely.

**What problem it solves**

- Unknown or undocumented dependencies between components
- Impact of changes unclear; breaking changes introduced accidentally
- Refactor or decommission blocked by unclear dependency chains
- Circular or unhealthy dependencies not detected

**What "success" looks like at the end**

A dependency graph that includes:
- Components and their dependencies documented
- Direction and type of dependency (e.g. compile-time, runtime, data) where relevant
- Graph stored and optionally visualized; ready for impact analysis and refactor planning

---

### 2. Trigger

**What causes this procedure to be invoked**

- Architecture baseline or ADR work requires a dependency view
- Impact analysis needed for a change, refactor, or decommission
- New component or integration added; dependencies need to be recorded
- Governance or compliance requires an up-to-date dependency graph

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Scope** – System, subsystem, or bounded context for the graph
- [ ] **Codebase and/or runtime** – Source code, config, or runtime discovery (e.g. service mesh, package manifests)
- [ ] **Existing graph or docs** – Prior dependency graph or architecture docs (if any)

**Decisions already made:**
- [ ] **Scope agreed** – What is in scope (services, packages, modules)

**Constraints:**
- [ ] **Accuracy** – Graph must reflect actual dependencies (from code or runtime) where possible

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing scope** – Define scope with stakeholders
- **Missing discovery** – Use static analysis, package manifests, or interviews; document method and limitations

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** – From scope and discovery through validation and storage
- **Discovery method** – Static analysis, manifests, runtime, or hybrid
- **Format and storage** – Graph format (e.g. list, diagram, tool-specific) and where stored
- **Validation** – How graph will be validated (spot-check, review, tool)
- **Risks & unknowns** – Gaps in discovery, external or implicit dependencies

**Plan must be reviewed before execution begins**

**Output:**
- Dependency Graph Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Discover and Document Dependencies

**Purpose**
- Identify components and their dependencies within scope

**Inputs**
- **From:** Procedure Required Inputs (scope, codebase/runtime, existing graph)

**Actions**
- List components in scope (services, packages, modules, systems).
- For each component, identify dependencies (what it depends on; what depends on it).
- Capture direction and type where relevant (compile-time, runtime, data, external).
- Use automated discovery (e.g. package manager, static analysis, service mesh) where available; supplement with manual review.
- Document implicit or external dependencies and assumptions.
- Produce draft dependency graph (list, matrix, or diagram).

**Decisions / Evaluations**
- **Decision:** Are dependencies discovered and draft graph complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If not, extend discovery or document limitations and re-run

**Outputs**
- Draft dependency graph (components and dependencies)
- Discovery method and limitations documented

**Failure Handling**
- **Failure:** Discovery incomplete or conflicting
  - **Action:** Document gaps; validate with stakeholders; re-run if scope or method changes

---

#### Step 2: Validate and Store Graph

**Purpose**
- Validate graph against reality and store in agreed location

**Inputs**
- **From:** Step 1 outputs (draft graph)

**Actions**
- Validate draft (spot-check critical paths, review with tech lead or architects).
- Check for circular dependencies or unhealthy patterns; document and flag.
- Incorporate feedback; update graph.
- Store graph in agreed location (docs, repo, diagram tool); record version and date.
- Link from architecture baseline or ADRs where relevant.
- Optional: set up automated or periodic refresh if tooling supports it.

**Decisions / Evaluations**
- **Decision:** Is graph validated and stored?
  - **Go:** If yes, procedure complete
  - **No-Go:** If not, correct and re-validate

**Outputs**
- Validated dependency graph
- Graph stored and versioned; linked where relevant

**Failure Handling**
- **Failure:** Validation finds major inaccuracies
  - **Action:** Correct discovery and graph; re-validate

---

### 6. Output Contract

**Artifacts produced:** Dependency graph (components, dependencies, direction/type), discovery method and limitations.  
**State changes:** Graph established or updated; available for impact analysis and refactor/decommission planning.  
**Signals emitted:** “Dependency graph updated”.

---

### 7. Validation & Acceptance Criteria

**Checks:**
- [ ] Components and dependencies documented
- [ ] Graph validated (spot-check or review)
- [ ] Graph stored and linked; version and date recorded

**Who can approve:** Tech lead, architect, or owner

---

### 8. Downstream Dependencies

**Output → Input:** Dependency graph → [Refactor Procedure](./refactor-procedure.md), [Decommission Procedure](./decommission-procedure.md), impact analysis, [Architecture Baseline Procedure](./architecture-baseline-procedure.md).

---

### 9. Definition of Done

- [ ] Dependencies discovered and documented
- [ ] Graph validated and stored
- [ ] Version and date recorded; linked where relevant

---

### 10. Audit & Traceability

**Links to:** Graph document or artifact, architecture baseline, ADRs. **Audit trail:** Graph version, date, discovery method.

---

### 11. Exit States

**✅ Completed successfully** – Graph created/updated, validated, stored.  
**⚠️ Blocked** – Missing scope or discovery; resolve and re-run.  
**❌ Aborted** – Scope cancelled or graph no longer required; document reason.

---

**Status:** Active Procedure  
**Owner:** Tech lead / Architect
