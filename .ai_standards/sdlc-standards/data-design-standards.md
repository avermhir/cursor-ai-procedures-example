# Data Design Standards

## Overview

This document defines standards and requirements for data design documents. These standards define **what a data design must contain** and serve as reference material for the Data Design Procedure. The procedure defines **how to create** a data design; these standards define **what must be produced** and **how to measure** the results.

**Note:** These are **standards/guidelines** (reference material), not executable procedures. For executable workflows, see:
- [Data Design Procedure](../../.ai_procedures/feature-lifecycle/data-design-procedure.md) - Creates data designs following these standards
- [Backend Implementation Procedure](../../.ai_procedures/feature-lifecycle/backend-implementation-procedure.md) - Implements data designs
- [Schema Change Procedure](../../.ai_procedures/data-lifecycle/schema-change-procedure.md) - Manages Postgres schema changes
- [Shape Evolution Procedure](../../.ai_procedures/data-lifecycle/shape-evolution-procedure.md) - Manages DynamoDB item evolution

---

## Data Design Document Requirements

### Required Sections

A data design document **must** contain the following sections:

1. **Data Requirements Overview** - Summary of data needs for the feature
2. **Data Store Selection** - Rationale for choosing DynamoDB, Postgres, or both
3. **Postgres Schema Design** - Table definitions, relationships, constraints (if Postgres is used)
4. **DynamoDB Design** - Table definitions, partition keys, sort keys, indexes (if DynamoDB is used)
5. **Data Relationships** - How data relates across stores and within stores
6. **Data Access Patterns** - Query patterns and access requirements
7. **Index Design** - Indexes for performance optimization
8. **Migration Plan** - How to migrate existing data or create new schema
9. **Data Validation Rules** - Constraints and validation requirements
10. **Data Lifecycle** - Creation, update, deletion, retention policies

### Document Format

- **Format:** Markdown document (`.md`) or structured document
- **Location:** Stored with feature documentation or in data documentation repository
- **Version Control:** Must be version controlled and linked to feature/ADR
- **Review Status:** Must indicate review status (Draft, Under Review, Approved)

---

## Postgres Schema Design Standards

### Table Design Requirements

Postgres tables **must** be designed with:

#### Required Table Elements
- **Table Name** - Descriptive, follows naming conventions
- **Primary Key** - Defined for every table
- **Columns** - All columns defined with:
  - Column name (descriptive, follows naming conventions)
  - Data type (appropriate for data, considers size)
  - Nullability (NULL or NOT NULL)
  - Default values (if applicable)
  - Constraints (unique, check, etc.)
- **Foreign Keys** - Relationships defined with foreign key constraints
- **Indexes** - Indexes defined for:
  - Primary keys (automatic)
  - Foreign keys (for performance)
  - Frequently queried columns
  - Composite indexes for multi-column queries
- **Constraints** - Data integrity constraints:
  - Unique constraints
  - Check constraints
  - Not null constraints
  - Foreign key constraints

#### Naming Conventions
- **Tables:** Plural nouns, snake_case (e.g., `user_profiles`, `order_items`)
- **Columns:** Singular, snake_case (e.g., `user_id`, `created_at`)
- **Indexes:** Descriptive names, include table and columns (e.g., `idx_user_profiles_email`)
- **Foreign Keys:** Descriptive names (e.g., `fk_user_profiles_user_id`)

#### Data Types
- **IDs:** Use appropriate ID types (UUID, BIGINT, INTEGER)
- **Timestamps:** Use TIMESTAMP WITH TIME ZONE for all timestamps
- **Text:** Use VARCHAR with appropriate length limits, or TEXT for unlimited
- **Numbers:** Use appropriate numeric types (INTEGER, BIGINT, DECIMAL, NUMERIC)
- **Booleans:** Use BOOLEAN type
- **JSON:** Use JSONB for structured data (preferred over JSON)

#### Relationships
- **One-to-Many:** Foreign key on "many" side
- **Many-to-Many:** Junction table with foreign keys to both tables
- **One-to-One:** Foreign key with unique constraint

### Migration Requirements

Postgres migrations **must** include:

- **Migration File:** Named with timestamp and description (e.g., `20250101_123456_create_user_profiles.sql`)
- **Up Migration:** SQL to apply the change
- **Down Migration:** SQL to rollback the change
- **Idempotency:** Migrations must be idempotent (can be run multiple times safely)
- **Data Safety:** Migrations must not cause data loss
- **Performance:** Large migrations must be optimized (batched, indexed appropriately)

---

## DynamoDB Design Standards

### Table Design Requirements

DynamoDB tables **must** be designed with:

#### Required Table Elements
- **Table Name** - Descriptive, follows naming conventions
- **Partition Key** - Defined for every table (required)
- **Sort Key** - Defined if needed for composite primary keys
- **Global Secondary Indexes (GSIs)** - Defined for alternative access patterns
- **Local Secondary Indexes (LSIs)** - Defined if needed (same partition key, different sort key)
- **Item Structure** - Document structure for items
- **TTL Attribute** - Defined if items have expiration (optional)

#### Naming Conventions
- **Tables:** Singular nouns, PascalCase (e.g., `UserProfile`, `OrderItem`)
- **Attributes:** camelCase (e.g., `userId`, `createdAt`)
- **Indexes:** Descriptive names (e.g., `UserProfile-EmailIndex`)

#### Partition Key Design
- **Distribution:** Partition key must distribute data evenly
- **Access Pattern:** Partition key must support primary access pattern
- **Cardinality:** High cardinality to avoid hot partitions
- **Examples:** User ID, Order ID, Tenant ID

#### Sort Key Design
- **Ordering:** Sort key provides ordering within partition
- **Query Patterns:** Sort key supports range queries
- **Examples:** Timestamp, Status, Category

#### Index Design
- **GSI Requirements:**
  - Partition key different from base table
  - Sort key optional
  - Projected attributes defined (KEYS_ONLY, INCLUDE, ALL)
  - Index name descriptive
- **LSI Requirements:**
  - Same partition key as base table
  - Different sort key
  - Projected attributes defined

#### Item Structure
- **Flat Structure:** Prefer flat structures over nested (for query efficiency)
- **Denormalization:** Denormalize data for access patterns
- **Item Size:** Keep items under 400KB (DynamoDB limit)
- **Versioning:** Include version attribute for schema evolution

### Shape Evolution Requirements

DynamoDB item evolution **must** consider:

- **Backwards Compatibility:** New attributes must not break existing code
- **Versioning Strategy:** Use version attribute to track item schema version
- **Migration Strategy:** Plan for migrating existing items to new schema
- **Default Values:** Handle missing attributes gracefully

---

## Data Store Selection Standards

### When to Use Postgres

Postgres **should** be used when:**

- Complex relational data with many relationships
- ACID transactions required across multiple tables
- Complex queries with joins, aggregations, subqueries
- Strong consistency requirements
- Structured data with well-defined schema
- Reporting and analytics needs
- Full-text search requirements

### When to Use DynamoDB

DynamoDB **should** be used when:**

- Simple access patterns (get by key, query by partition)
- High throughput requirements
- Low latency requirements
- Simple key-value or document access
- Horizontal scaling needs
- Serverless architecture
- Eventual consistency acceptable
- Predictable access patterns

### Hybrid Approach

Using both Postgres and DynamoDB **should** be considered when:

- Different data has different access patterns
- Some data needs strong consistency (Postgres), some needs high throughput (DynamoDB)
- Data needs to be synchronized between stores
- Cross-store data consistency rules needed

---

## Data Relationships Standards

### Within-Store Relationships

#### Postgres Relationships
- **Foreign Keys:** Must be defined with foreign key constraints
- **Referential Integrity:** Enforced by database
- **Cascade Rules:** DELETE and UPDATE cascade rules defined
- **Relationship Types:** One-to-Many, Many-to-Many, One-to-One clearly documented

#### DynamoDB Relationships
- **Denormalization:** Relationships handled through denormalization
- **Composite Keys:** Use composite keys for related data
- **GSIs:** Use GSIs to support relationship queries
- **Application-Level:** Relationships maintained at application level

### Cross-Store Relationships

Cross-store relationships **must** be documented with:

- **Source of Truth:** Which store is the source of truth for each data element
- **Synchronization Strategy:** How data is kept in sync
- **Consistency Rules:** Rules for maintaining consistency
- **Conflict Resolution:** How conflicts are resolved
- **Sync Frequency:** How often data is synchronized

---

## Data Access Pattern Standards

### Access Pattern Documentation

Data access patterns **must** be documented with:

- **Query Description:** What data is being queried
- **Query Frequency:** How often the query runs
- **Query Performance:** Expected performance requirements
- **Query Parameters:** What parameters are used
- **Result Size:** Expected result set size
- **Index Used:** Which index supports the query

### Query Optimization Requirements

- **Indexes:** All access patterns must have supporting indexes
- **Query Efficiency:** Queries must be optimized (no full table scans in DynamoDB, proper indexes in Postgres)
- **N+1 Prevention:** Avoid N+1 query problems
- **Batch Operations:** Use batch operations when possible

### Postgres Query Patterns

- **Indexed Queries:** All frequently-run queries must use indexes
- **Join Optimization:** Joins must be optimized (proper indexes, query plans reviewed)
- **Query Plans:** Complex queries must have execution plans reviewed

### DynamoDB Query Patterns

- **Partition Key Access:** Primary access pattern must use partition key
- **GSI Usage:** Alternative access patterns must use GSIs
- **Query vs. Scan:** Prefer Query over Scan (Scan only when necessary)
- **Projection:** Use projection to limit returned attributes

---

## Index Design Standards

### Postgres Index Requirements

Postgres indexes **must** be designed with:

- **Primary Key Index:** Automatic, no action needed
- **Foreign Key Indexes:** Indexes on all foreign key columns
- **Query-Supporting Indexes:** Indexes for all frequently-run queries
- **Composite Indexes:** Composite indexes for multi-column queries
- **Unique Indexes:** Unique constraints create indexes automatically
- **Partial Indexes:** Consider partial indexes for filtered queries
- **Index Maintenance:** Monitor index usage and remove unused indexes

### DynamoDB Index Requirements

DynamoDB indexes **must** be designed with:

- **GSI Design:**
  - Partition key supports access pattern
  - Sort key supports range queries (if needed)
  - Projected attributes minimize storage and cost
  - Index name descriptive
- **LSI Design:**
  - Same partition key as base table
  - Sort key supports alternative sort order
  - Projected attributes defined
- **Index Limits:** Maximum 20 GSIs per table, 5 LSIs per table
- **Index Costs:** Consider storage and read/write costs

---

## Migration Plan Standards

### Migration Plan Requirements

Migration plans **must** include:

- **Migration Type:** New schema, schema change, data migration, or combination
- **Migration Steps:** Ordered list of migration steps
- **Rollback Plan:** How to rollback if migration fails
- **Data Safety:** How data is protected during migration
- **Downtime:** Expected downtime (if any)
- **Testing:** How migration will be tested
- **Validation:** How to validate migration success

### Postgres Migration Standards

Postgres migrations **must** follow:

- **Prisma Migrations:** Use Prisma migrations if Prisma is the ORM
- **Raw SQL Migrations:** Use raw SQL if not using Prisma
- **Migration Naming:** Timestamp-based naming (e.g., `20250101_123456_description`)
- **Up/Down Migrations:** Both up and down migrations required
- **Idempotency:** Migrations must be idempotent
- **Transaction Safety:** Migrations should run in transactions when possible

### DynamoDB Migration Standards

DynamoDB migrations **must** follow:

- **Item Versioning:** Use version attribute for schema evolution
- **Backwards Compatibility:** New schema must be backwards compatible
- **Migration Scripts:** Scripts to migrate existing items
- **Batch Processing:** Use batch operations for large migrations
- **Validation:** Validate migrated items

---

## Data Validation Standards

### Validation Requirements

Data validation **must** be defined for:

- **Required Fields:** Fields that must be present
- **Data Types:** Type validation for all fields
- **Value Constraints:** Range, format, pattern constraints
- **Referential Integrity:** Foreign key relationships
- **Business Rules:** Business logic validation rules
- **Uniqueness:** Unique constraints

### Postgres Validation

- **Database Constraints:** Use database constraints (NOT NULL, CHECK, UNIQUE, FOREIGN KEY)
- **Application Validation:** Additional validation in application layer
- **Constraint Names:** Descriptive constraint names

### DynamoDB Validation

- **Application Validation:** All validation in application layer
- **Validation Library:** Use validation library (e.g., Zod, Joi)
- **Type Safety:** Use TypeScript for type safety

---

## Data Lifecycle Standards

### Data Lifecycle Requirements

Data lifecycle **must** define:

- **Creation:** When and how data is created
- **Updates:** When and how data is updated
- **Deletion:** When and how data is deleted
- **Retention:** How long data is retained
- **Archival:** When and how data is archived
- **Purging:** When and how data is purged

### Retention Policies

- **Retention Period:** How long data is retained
- **Retention Rationale:** Why data is retained for that period
- **Compliance Requirements:** Regulatory retention requirements
- **Archival Strategy:** How data is archived after retention period

### Deletion Requirements

- **Soft Delete:** Use soft delete (deleted_at flag) when possible
- **Hard Delete:** Hard delete only when required
- **Cascade Deletion:** Define cascade deletion rules
- **Audit Trail:** Maintain audit trail of deletions

---

## Validation and Acceptance Criteria

### Data Design Completeness

A data design is **complete** when:

- [ ] All required sections are present
- [ ] Data store selection is justified
- [ ] Postgres schema is fully defined (if Postgres is used)
- [ ] DynamoDB design is fully defined (if DynamoDB is used)
- [ ] All data relationships are documented
- [ ] All access patterns are documented
- [ ] All indexes are defined
- [ ] Migration plan is complete
- [ ] Data validation rules are defined
- [ ] Data lifecycle is defined
- [ ] Data design has been reviewed and approved

### Data Design Quality

A data design meets **quality standards** when:

- [ ] Schema follows naming conventions
- [ ] Relationships are properly defined
- [ ] Indexes support all access patterns
- [ ] Migration plan is safe and testable
- [ ] Data validation is comprehensive
- [ ] Data lifecycle is well-defined
- [ ] Design is scalable and performant
- [ ] Design aligns with architecture decisions

### Data Design Approval

A data design is **approved** when:

- [ ] Database team has reviewed and approved
- [ ] Architecture team has reviewed and approved (if applicable)
- [ ] Data design is linked to feature documentation/ADR
- [ ] Data design is version controlled
- [ ] Migration plan is approved

---

## Data Design Checklist

### Document Structure
- [ ] Data requirements overview section present
- [ ] Data store selection documented and justified
- [ ] Postgres schema design complete (if applicable)
- [ ] DynamoDB design complete (if applicable)
- [ ] Data relationships documented
- [ ] Data access patterns documented
- [ ] Index design complete
- [ ] Migration plan documented
- [ ] Data validation rules defined
- [ ] Data lifecycle defined

### Postgres Design
- [ ] All tables have primary keys
- [ ] All tables have appropriate columns with data types
- [ ] Foreign keys defined for relationships
- [ ] Indexes defined for all access patterns
- [ ] Constraints defined (unique, check, not null)
- [ ] Naming conventions followed
- [ ] Migration plan includes up and down migrations

### DynamoDB Design
- [ ] Partition key defined and justified
- [ ] Sort key defined (if needed)
- [ ] GSIs defined for alternative access patterns
- [ ] LSIs defined (if needed)
- [ ] Item structure documented
- [ ] Naming conventions followed
- [ ] Shape evolution strategy defined

### Data Relationships
- [ ] Within-store relationships documented
- [ ] Cross-store relationships documented (if applicable)
- [ ] Source of truth defined (if cross-store)
- [ ] Synchronization strategy defined (if cross-store)

### Access Patterns
- [ ] All access patterns documented
- [ ] All access patterns have supporting indexes
- [ ] Query performance requirements defined
- [ ] Query optimization considered

### Migration Plan
- [ ] Migration type identified
- [ ] Migration steps documented
- [ ] Rollback plan defined
- [ ] Data safety measures defined
- [ ] Testing strategy defined
- [ ] Validation method defined

### Review and Approval
- [ ] Data design reviewed by database team
- [ ] Data design reviewed by architecture team (if applicable)
- [ ] Migration plan approved
- [ ] Data design is version controlled
- [ ] Data design is linked to feature documentation

---

## References

These standards are referenced by:

- [Data Design Procedure](../../.ai_procedures/feature-lifecycle/data-design-procedure.md) - Creates data designs following these standards
- [Backend Implementation Procedure](../../.ai_procedures/feature-lifecycle/backend-implementation-procedure.md) - Implements data designs
- [Schema Change Procedure](../../.ai_procedures/data-lifecycle/schema-change-procedure.md) - Manages Postgres schema changes
- [Shape Evolution Procedure](../../.ai_procedures/data-lifecycle/shape-evolution-procedure.md) - Manages DynamoDB item evolution
- [Architecture Review Procedure](../../.ai_procedures/feature-lifecycle/architecture-review-procedure.md) - Provides architecture context for data design

---

**Last Updated:** 2025-01-XX  
**Status:** Active Standards  
**Owner:** Database Team / Data Architecture Team
