# Procedure: Data Design

### 1. Purpose

**Why this procedure exists**

This procedure designs database schemas, data models, and migration plans for features. It creates a data design document that defines how data will be stored, accessed, and managed, ensuring data requirements are met and data architecture aligns with feature needs.

**What problem it solves**

- Features implemented without data design
- Database schemas created ad-hoc during implementation
- Data access patterns not optimized
- Missing indexes causing performance issues
- Data relationships not properly defined
- Migration plans not thought through
- Data store selection not justified
- Inconsistent data modeling across features

**What "success" looks like at the end**

A complete data design document that includes:
- Data store selection justified (Postgres, DynamoDB, or both)
- Postgres schema fully designed (if Postgres is used)
- DynamoDB design fully defined (if DynamoDB is used)
- Data relationships documented
- Data access patterns identified and optimized
- Indexes designed for all access patterns
- Migration plan complete and safe
- Data validation rules defined
- Data lifecycle policies defined
- Data design reviewed and approved
- Ready for Backend Implementation Procedure

---

### 2. Trigger

**What causes this procedure to be invoked**

- [Architecture Review Procedure](./architecture-review-procedure.md) has been completed
- Feature needs data storage (database schema, data models)
- Data requirements need to be designed before implementation
- Database schema changes needed for feature
- Feature Implementation Orchestration Procedure invokes this (Phase 2, after Architecture Review)

---

### 3. Required Inputs

**Explicit inputs that MUST exist before starting**

**Artifacts:**
- [ ] **Architecture decisions** - Architecture decisions and ADRs (from [Architecture Review Procedure](./architecture-review-procedure.md))
- [ ] **Architecture document** - System architecture, service boundaries (from Architecture Review Procedure)
- [ ] **Requirements document** - Functional requirements, acceptance criteria, data requirements (from [Requirements & Scope Procedure](./requirements-scope-procedure.md))
- [ ] **Feature definition** - High-level feature description, context (from [Feature Intake Procedure](./feature-intake-procedure.md))
- [ ] **Existing data schemas** - Current database schemas (Postgres, DynamoDB) if modifying existing data
- [ ] **Data flow information** - How data flows through the system (from architecture or requirements)

**Decisions already made:**
- [ ] **Architecture is defined** - Architecture decisions have been made (from Architecture Review Procedure)
- [ ] **Requirements are defined** - Requirements are complete (from Requirements & Scope Procedure)

**Constraints:**
- [ ] **Data design standards** - Must comply with [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)
- [ ] **Existing data stores** - Must work with existing Postgres and DynamoDB infrastructure
- [ ] **Data compliance** - Must consider data privacy, retention, compliance requirements
- [ ] **Time constraints** - Data design must complete before implementation begins

**⚠️ If an input is missing → procedure must halt or branch into a remediation path**

**Remediation paths:**
- **Missing architecture decisions** → Invoke [Architecture Review Procedure](./architecture-review-procedure.md) first
- **Missing requirements** → Invoke [Requirements & Scope Procedure](./requirements-scope-procedure.md) first
- **Missing existing schemas** → Review current database schemas, consult database team

---

### 4. Plan Requirement

**This procedure MUST begin by producing a plan**

**Plan includes:**
- **Steps to be executed** - 9 ordered steps from data requirements review through data design approval
- **Procedures to be invoked** - None (this is a standalone procedure)
- **Dependencies between steps** - Requirements → Store Selection → Schema Design → Relationships → Access Patterns → Indexes → Migration → Validation → Approval
- **Risks & unknowns** - Data requirements unclear, access patterns unknown, migration complexity, performance requirements unclear
- **Validation points** - After store selection, after schema design, after access patterns, after migration plan, before approval

**Plan must be reviewed before execution begins**

**Output:**
- Data Design Plan (documented)

---

### 5. Workflow

**A strictly ordered flow of steps.**

**Each step MUST define:**

#### Step 1: Review Data Requirements

**Purpose**
- Understand data needs for the feature
- Identify data entities and their attributes
- Understand data relationships
- Identify data access patterns

**Inputs**
- **From:** Procedure Required Inputs (requirements document, feature definition, architecture document)

**Actions**
- Review requirements document for data requirements:
  - What data entities are needed?
  - What attributes does each entity have?
  - What are the data relationships?
  - What are the data access patterns?
  - What are the data volume expectations?
  - What are the performance requirements?
- Review feature definition for data context
- Review architecture document for data flow information
- Identify data entities:
  - List all data entities (e.g., User, Order, Product)
  - List attributes for each entity
  - Identify required vs. optional attributes
- Identify data relationships:
  - One-to-many relationships
  - Many-to-many relationships
  - One-to-one relationships
- Identify data access patterns:
  - How will data be queried?
  - What are the primary access patterns?
  - What are the secondary access patterns?
  - What are the query frequency and performance requirements?
- Document data requirements in data design document
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for data requirements documentation

**Decisions / Evaluations**
- **Decision:** Are data requirements clear and complete?
  - **Go:** If yes, proceed to Step 2
  - **No-Go:** If no, clarify data requirements with stakeholders, review requirements document

**Outputs**
- Data requirements documented
- Data entities identified
- Data relationships identified
- Data access patterns identified

**Failure Handling**
- **Failure:** Data requirements unclear or incomplete
  - **Action:** Consult stakeholders, review requirements document, clarify data needs
  - **Retry:** Step 1 after data requirements are clarified

---

#### Step 2: Select Data Store(s)

**Purpose**
- Determine which data store(s) to use (Postgres, DynamoDB, or both)
- Justify data store selection
- Document selection rationale

**Inputs**
- **From:** Step 1 outputs (data requirements, entities, relationships, access patterns)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for data store selection criteria

**Actions**
- Evaluate data requirements against store selection criteria:
  - **Postgres suitability:**
    - Complex relational data with many relationships?
    - ACID transactions required?
    - Complex queries with joins, aggregations?
    - Strong consistency requirements?
    - Structured data with well-defined schema?
  - **DynamoDB suitability:**
    - Simple access patterns (get by key, query by partition)?
    - High throughput requirements?
    - Low latency requirements?
    - Horizontal scaling needs?
    - Eventual consistency acceptable?
- Consider hybrid approach:
  - Different data has different access patterns?
  - Some data needs strong consistency, some needs high throughput?
  - Data needs to be synchronized between stores?
- Make data store selection decision:
  - Postgres only
  - DynamoDB only
  - Both Postgres and DynamoDB (hybrid)
- Document selection rationale:
  - Why this store was chosen
  - What requirements drove the decision
  - What trade-offs were considered
- Document in data design document
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for store selection requirements

**Decisions / Evaluations**
- **Decision:** Is data store selection justified?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, review selection criteria, reconsider decision
- **Decision:** Does selection align with architecture decisions?
  - **Go:** If yes, proceed to Step 3
  - **No-Go:** If no, review architecture decisions, align selection

**Outputs**
- Data store selection made
- Selection rationale documented
- Ready for schema design

**Failure Handling**
- **Failure:** Data store selection unclear or unjustified
  - **Action:** Review selection criteria, consult database team, justify selection
  - **Retry:** Step 2 after improving selection rationale

---

#### Step 3: Design Postgres Schema (if Postgres is selected)

**Purpose**
- Design Postgres tables, columns, and relationships
- Define constraints and indexes
- Ensure schema follows naming conventions

**Inputs**
- **From:** Step 1 outputs (data entities, relationships, attributes), Step 2 outputs (Postgres selected)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for Postgres schema design requirements

**Actions**
- For each data entity, design table:
  - **Table Name:** Follow naming conventions (plural nouns, snake_case)
  - **Primary Key:** Define primary key (UUID, BIGINT, INTEGER)
  - **Columns:** Define all columns:
    - Column name (singular, snake_case)
    - Data type (appropriate for data, considers size)
    - Nullability (NULL or NOT NULL)
    - Default values (if applicable)
  - **Foreign Keys:** Define foreign key relationships
  - **Constraints:** Define constraints (unique, check, not null)
- Design relationships:
  - One-to-Many: Foreign key on "many" side
  - Many-to-Many: Junction table with foreign keys
  - One-to-One: Foreign key with unique constraint
- Define indexes (initial design, detailed indexes in Step 6):
  - Primary key indexes (automatic)
  - Foreign key indexes
  - Frequently queried columns
- Follow naming conventions:
  - Tables: plural nouns, snake_case
  - Columns: singular, snake_case
  - Indexes: descriptive names
  - Foreign keys: descriptive names
- Document schema in data design document:
  - Table definitions
  - Column definitions
  - Relationship definitions
  - Constraint definitions
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for Postgres design requirements

**Decisions / Evaluations**
- **Decision:** Does schema follow naming conventions?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, update schema to follow conventions
- **Decision:** Are all relationships properly defined?
  - **Go:** If yes, proceed to Step 4
  - **No-Go:** If no, review relationships, ensure foreign keys defined

**Outputs**
- Postgres schema designed
- Tables, columns, relationships defined
- Constraints defined
- Schema documented

**Failure Handling**
- **Failure:** Schema design incomplete or incorrect
  - **Action:** Review data requirements, consult database team, improve schema design
  - **Retry:** Step 3 after improving schema

---

#### Step 4: Design DynamoDB Schema (if DynamoDB is selected)

**Purpose**
- Design DynamoDB tables, partition keys, sort keys, and indexes
- Define item structure
- Ensure design supports access patterns

**Inputs**
- **From:** Step 1 outputs (data entities, access patterns), Step 2 outputs (DynamoDB selected)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for DynamoDB design requirements

**Actions**
- For each data entity, design table:
  - **Table Name:** Follow naming conventions (singular nouns, PascalCase)
  - **Partition Key:** Define partition key:
    - Must distribute data evenly
    - Must support primary access pattern
    - High cardinality to avoid hot partitions
  - **Sort Key:** Define sort key (if needed):
    - Provides ordering within partition
    - Supports range queries
  - **Item Structure:** Define item structure:
    - Flat structure preferred
    - Denormalize for access patterns
    - Keep items under 400KB
    - Include version attribute for schema evolution
- Design Global Secondary Indexes (GSIs):
  - For alternative access patterns
  - Partition key different from base table
  - Sort key optional
  - Projected attributes defined
- Design Local Secondary Indexes (LSIs) if needed:
  - Same partition key as base table
  - Different sort key
  - Projected attributes defined
- Follow naming conventions:
  - Tables: singular nouns, PascalCase
  - Attributes: camelCase
  - Indexes: descriptive names
- Document schema in data design document:
  - Table definitions
  - Partition/sort key definitions
  - Index definitions
  - Item structure definitions
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for DynamoDB design requirements

**Decisions / Evaluations**
- **Decision:** Does partition key support primary access pattern?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, redesign partition key
- **Decision:** Are all access patterns supported?
  - **Go:** If yes, proceed to Step 5
  - **No-Go:** If no, add GSIs or redesign schema

**Outputs**
- DynamoDB schema designed
- Tables, keys, indexes defined
- Item structures defined
- Schema documented

**Failure Handling**
- **Failure:** DynamoDB design doesn't support access patterns
  - **Action:** Review access patterns, redesign partition keys, add GSIs
  - **Retry:** Step 4 after improving design

---

#### Step 5: Document Data Relationships

**Purpose**
- Document relationships within stores
- Document cross-store relationships (if hybrid approach)
- Define source of truth and synchronization

**Inputs**
- **From:** Step 3 outputs (Postgres schema), Step 4 outputs (DynamoDB schema), Step 1 outputs (relationships)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for relationship documentation requirements

**Actions**
- Document within-store relationships:
  - **Postgres:** Document foreign key relationships, cascade rules
  - **DynamoDB:** Document denormalization strategy, composite keys
- Document cross-store relationships (if hybrid):
  - Which store is source of truth for each data element
  - Synchronization strategy (how data is kept in sync)
  - Consistency rules (rules for maintaining consistency)
  - Conflict resolution (how conflicts are resolved)
  - Sync frequency (how often data is synchronized)
- Document relationship types:
  - One-to-Many
  - Many-to-Many
  - One-to-One
- Document in data design document
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for relationship requirements

**Decisions / Evaluations**
- **Decision:** Are all relationships documented?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, document missing relationships
- **Decision:** Are cross-store relationships clear (if hybrid)?
  - **Go:** If yes, proceed to Step 6
  - **No-Go:** If no, clarify cross-store relationships

**Outputs**
- Data relationships documented
- Cross-store relationships documented (if applicable)
- Source of truth defined (if applicable)

**Failure Handling**
- **Failure:** Relationships unclear or incomplete
  - **Action:** Review data requirements, clarify relationships, consult database team
  - **Retry:** Step 5 after clarifying relationships

---

#### Step 6: Design Indexes and Optimize Access Patterns

**Purpose**
- Design indexes for all access patterns
- Ensure queries are optimized
- Document query patterns

**Inputs**
- **From:** Step 1 outputs (access patterns), Step 3 outputs (Postgres schema), Step 4 outputs (DynamoDB schema)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for index design requirements

**Actions**
- For each access pattern, design supporting index:
  - **Postgres:**
    - Index on foreign keys
    - Index on frequently queried columns
    - Composite indexes for multi-column queries
    - Partial indexes for filtered queries
  - **DynamoDB:**
    - GSI for alternative access patterns
    - LSI for alternative sort orders
    - Ensure partition key supports query
- Document access patterns:
  - Query description
  - Query frequency
  - Query performance requirements
  - Query parameters
  - Result size
  - Index used
- Optimize queries:
  - Ensure no full table scans in DynamoDB
  - Ensure proper indexes in Postgres
  - Avoid N+1 query problems
  - Use batch operations when possible
- Document indexes in data design document
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for index requirements

**Decisions / Evaluations**
- **Decision:** Do all access patterns have supporting indexes?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, design missing indexes
- **Decision:** Are queries optimized?
  - **Go:** If yes, proceed to Step 7
  - **No-Go:** If no, optimize queries, add indexes

**Outputs**
- Indexes designed for all access patterns
- Access patterns documented
- Queries optimized

**Failure Handling**
- **Failure:** Access patterns not supported by indexes
  - **Action:** Design missing indexes, redesign schema if needed
  - **Retry:** Step 6 after adding indexes

---

#### Step 7: Create Migration Plan

**Purpose**
- Plan how to create or modify database schema
- Plan data migrations if needed
- Ensure migration is safe and reversible

**Inputs**
- **From:** Step 3 outputs (Postgres schema), Step 4 outputs (DynamoDB schema), Step 1 outputs (existing schemas)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for migration plan requirements

**Actions**
- Determine migration type:
  - New schema (creating new tables)
  - Schema change (modifying existing tables)
  - Data migration (migrating existing data)
  - Combination
- Create migration plan:
  - **Postgres Migrations:**
    - Migration file naming (timestamp-based)
    - Up migration (SQL to apply change)
    - Down migration (SQL to rollback)
    - Idempotency (can run multiple times)
    - Data safety (no data loss)
    - Performance (batched if large)
  - **DynamoDB Migrations:**
    - Item versioning strategy
    - Backwards compatibility
    - Migration scripts for existing items
    - Batch processing for large migrations
    - Validation of migrated items
- Document migration steps:
  - Ordered list of migration steps
  - Rollback plan
  - Data safety measures
  - Expected downtime (if any)
  - Testing strategy
  - Validation method
- Document in data design document
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for migration requirements

**Decisions / Evaluations**
- **Decision:** Is migration plan safe and reversible?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, improve migration plan, add safety measures
- **Decision:** Is migration plan testable?
  - **Go:** If yes, proceed to Step 8
  - **No-Go:** If no, add testing strategy, improve plan

**Outputs**
- Migration plan created
- Migration steps documented
- Rollback plan defined
- Migration plan documented

**Failure Handling**
- **Failure:** Migration plan unsafe or not reversible
  - **Action:** Improve migration plan, add safety measures, ensure rollback capability
  - **Retry:** Step 7 after improving migration plan

---

#### Step 8: Define Data Validation and Lifecycle

**Purpose**
- Define data validation rules
- Define data lifecycle policies
- Ensure data quality and compliance

**Inputs**
- **From:** Step 1 outputs (data requirements), Step 3 outputs (Postgres schema), Step 4 outputs (DynamoDB schema)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for validation and lifecycle requirements

**Actions**
- Define data validation rules:
  - **Required Fields:** Fields that must be present
  - **Data Types:** Type validation for all fields
  - **Value Constraints:** Range, format, pattern constraints
  - **Referential Integrity:** Foreign key relationships
  - **Business Rules:** Business logic validation
  - **Uniqueness:** Unique constraints
- Define data lifecycle:
  - **Creation:** When and how data is created
  - **Updates:** When and how data is updated
  - **Deletion:** When and how data is deleted (soft delete vs. hard delete)
  - **Retention:** How long data is retained
  - **Archival:** When and how data is archived
  - **Purging:** When and how data is purged
- Define retention policies:
  - Retention period
  - Retention rationale
  - Compliance requirements
  - Archival strategy
- Document in data design document
- Reference [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for validation and lifecycle requirements

**Decisions / Evaluations**
- **Decision:** Are validation rules comprehensive?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, add missing validation rules
- **Decision:** Is data lifecycle well-defined?
  - **Go:** If yes, proceed to Step 9
  - **No-Go:** If no, define missing lifecycle policies

**Outputs**
- Data validation rules defined
- Data lifecycle policies defined
- Retention policies defined

**Failure Handling**
- **Failure:** Validation rules incomplete
  - **Action:** Review data requirements, add missing validation rules
  - **Retry:** Step 8 after improving validation

---

#### Step 9: Review and Approve Data Design

**Purpose**
- Review data design for completeness and quality
- Obtain approvals from stakeholders
- Finalize data design document

**Inputs**
- **From:** All previous step outputs (complete data design)
- **Reference:** [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) for validation and acceptance criteria

**Actions**
- Review data design against [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md) checklist:
  - [ ] All required sections present
  - [ ] Data store selection justified
  - [ ] Postgres schema complete (if applicable)
  - [ ] DynamoDB design complete (if applicable)
  - [ ] All relationships documented
  - [ ] All access patterns documented
  - [ ] All indexes defined
  - [ ] Migration plan complete
  - [ ] Data validation rules defined
  - [ ] Data lifecycle defined
- Conduct database team review:
  - Database team reviews data design
  - Database team provides feedback
  - Address database team feedback
- Conduct architecture team review (if applicable):
  - Architecture team reviews alignment with architecture
  - Architecture team provides feedback
  - Address architecture team feedback
- Finalize data design document:
  - Update data design with review feedback
  - Mark data design as "Approved"
  - Version control data design document
  - Link data design to feature documentation/ADR
  - Update Jira ticket with data design reference

**Decisions / Evaluations**
- **Decision:** Does data design meet quality standards?
  - **Go:** If yes, proceed to approval
  - **No-Go:** If no, address quality issues, re-review
- **Decision:** Has database team approved data design?
  - **Go:** If yes, proceed to finalization
  - **No-Go:** If no, address database team feedback, re-review

**Outputs**
- Data design reviewed and approved
- Data design document finalized
- Data design version controlled and linked
- Ready for Backend Implementation Procedure

**Failure Handling**
- **Failure:** Data design does not meet quality standards
  - **Action:** Address quality issues, improve data design, re-review
  - **Retry:** Step 9 after improving data design
- **Failure:** Database team or architecture team does not approve
  - **Action:** Address feedback, revise data design, re-review
  - **Retry:** Step 9 after addressing feedback

---

### 6. Output Contract

**Guaranteed outputs if procedure completes successfully**

**Artifacts produced:**
- **Data Design Document** - Complete data design following [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)
  - Data requirements overview
  - Data store selection and rationale
  - Postgres schema design (if applicable)
  - DynamoDB design (if applicable)
  - Data relationships
  - Data access patterns
  - Index design
  - Migration plan
  - Data validation rules
  - Data lifecycle policies
- **Migration Scripts** - Migration files ready for implementation (if applicable)

**State changes:**
- Data design is approved and ready for use
- Migration plan is ready for execution
- Data design is linked to feature documentation

**Decisions recorded:**
- Data store selection
- Schema design decisions
- Index design decisions
- Migration approach
- Data lifecycle policies

**Signals emitted:**
- "Data Design Complete" - Data design is approved and ready
- "Migration Plan Ready" - Migration plan ready for execution
- "Ready for Backend Implementation" - Data design complete, can proceed to implementation

---

### 7. Validation & Acceptance Criteria

**How outputs are verified**

**Tests required:**
- [ ] Data design document contains all required sections (per Data Design Standards)
- [ ] Data store selection is justified
- [ ] Postgres schema is complete (if Postgres is used)
- [ ] DynamoDB design is complete (if DynamoDB is used)
- [ ] All relationships are documented
- [ ] All access patterns have supporting indexes
- [ ] Migration plan is safe and reversible
- [ ] Data validation rules are comprehensive
- [ ] Data lifecycle is well-defined

**Reviews required:**
- [ ] Database team review (must approve)
- [ ] Architecture team review (if applicable)
- [ ] Migration plan review (must approve)

**Automated checks:**
- [ ] Data design document structure validated (all sections present)
- [ ] Data design document format validated (markdown, version controlled)

**Who/what can approve completion:**
- **Database Team** - Must review and approve data design
- **Architecture Team** - Must review if architecture alignment needed
- **Migration Plan** - Must be approved before execution

---

### 8. Downstream Dependencies

**Other procedures that may consume these outputs**

**Output → Input mappings:**
- **Data Design Document** → Input for [Backend Implementation Procedure](./backend-implementation-procedure.md) (implements data design)
- **Migration Plan** → Input for [Schema Change Procedure](../data-lifecycle/schema-change-procedure.md) (executes Postgres migrations)
- **Migration Plan** → Input for [Shape Evolution Procedure](../data-lifecycle/shape-evolution-procedure.md) (executes DynamoDB migrations)
- **Data Design** → Input for [API Design Procedure](../api-lifecycle/api-design-procedure.md) (informs API data models)

**Procedures that depend on this:**
- **Backend Implementation Procedure** - Uses data design to implement database schema
- **Schema Change Procedure** - Uses migration plan to execute migrations
- **Shape Evolution Procedure** - Uses migration plan to evolve DynamoDB items

---

### 9. Definition of Done

**Objective criteria that must be true**

**No "feels good" allowed**

- [ ] Data requirements reviewed and documented
- [ ] Data store selection made and justified
- [ ] Postgres schema designed (if Postgres is used)
- [ ] DynamoDB schema designed (if DynamoDB is used)
- [ ] All data relationships documented
- [ ] All data access patterns documented
- [ ] All indexes designed for access patterns
- [ ] Migration plan created and documented
- [ ] Data validation rules defined
- [ ] Data lifecycle policies defined
- [ ] Data design reviewed by database team
- [ ] Data design reviewed by architecture team (if applicable)
- [ ] Migration plan approved
- [ ] Data design document is complete (all sections per Data Design Standards)
- [ ] Data design document is version controlled
- [ ] Data design is linked to feature documentation/ADR
- [ ] Jira ticket updated with data design reference
- [ ] Ready for Backend Implementation Procedure

---

### 10. Audit & Traceability

**What must be logged or recorded**

**Links to:**
- [ ] **Jira Ticket** - Ticket key/ID with data design reference
- [ ] **Data Design Document** - Document location and version
- [ ] **Architecture Document** - Link to architecture that informed data design
- [ ] **ADRs** - Link to architecture decisions that informed data design
- [ ] **Requirements Document** - Link to requirements that informed data design
- [ ] **Migration Scripts** - Link to migration files (if applicable)

**Audit trail:**
- **Data design date** - When data design was performed
- **Database team involved** - Who was involved in data design and review
- **Data store selection** - Which stores were selected and why
- **Schema decisions** - What schema decisions were made
- **Migration approach** - What migration approach was chosen
- **Approval date** - When data design was approved
- **Approval stakeholders** - Who approved data design

---

### 11. Exit States

**Possible outcomes of this procedure:**

#### ✅ Completed Successfully
- All criteria met
- Data design document complete
- Schema designed for selected stores
- Migration plan complete
- Data design reviewed and approved
- Ready for Backend Implementation Procedure

#### ⚠️ Blocked
- **Reason:** Data requirements unclear, access patterns unknown, database team unavailable, migration complexity unclear
- **Required action:** Address blocker (clarify requirements, identify access patterns, consult database team, simplify migration)
- **Who to notify:** Database team lead, architecture team lead, feature owner
- **Status:** Data design paused until blocker resolved

#### ❌ Aborted
- **Reason:** Data requirements cannot be determined, architecture unclear, feature cancelled, data design not feasible
- **Required action:** Document why aborted, what was completed, update Jira ticket
- **Rollback required:** No (no state to rollback)
- **Lessons learned:** Document why data design couldn't be completed
- **Next step:** Feature may need to be redefined or cancelled

#### 🔄 Partial Data Design
- **Reason:** Some schema designed but other parts deferred, some migrations deferred to implementation
- **Required action:** Document what was completed vs. deferred, update data design document
- **Status:** Core data design complete, some parts deferred
- **Next step:** Proceed with defined schema, deferred parts addressed during implementation

---

## Usage Notes

### Integration with Architecture Review

- Data Design Procedure depends on Architecture Review Procedure outputs
- Architecture decisions inform data store selection and schema design
- Data design should align with architecture decisions

### Integration with Data Design Standards

- Data Design Procedure must comply with [Data Design Standards](../../.ai_standards/sdlc-standards/data-design-standards.md)
- Schema design should follow naming conventions and design patterns
- Migration plans should follow migration standards

### Integration with Implementation Procedures

- Data design feeds into Backend Implementation Procedure
- Backend Implementation Procedure implements the data design
- Migration plans are executed by Schema Change or Shape Evolution procedures

---

**Template Version:** 1.0.0
**Last Updated:** 2025-01-XX
**Status:** Active Procedure
**Owner:** Database Team / Data Architecture Team
