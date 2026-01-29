# Data Lifecycle

## Overview

This folder contains procedures for managing data across DynamoDB and Postgres. These procedures cover schema changes, migrations, data consistency, and data governance.

## Procedures

- [Data Classification Procedure](./data-classification-procedure.md) - Classifying data by sensitivity and type
- [Data Ownership & Source-of-Truth Procedure](./data-ownership-source-of-truth-procedure.md) - Defining data ownership and sources of truth
- [Schema Change Procedure](./schema-change-procedure.md) - Postgres migration procedures
- [Shape Evolution Procedure](./shape-evolution-procedure.md) - DynamoDB item versioning and evolution
- [Backfill / Reindex Procedure](./backfill-reindex-procedure.md) - Procedures for data backfills and reindexing
- [Data Consistency Procedure](./data-consistency-procedure.md) - Cross-store synchronization rules
- [Query/Index Review Procedure](./query-index-review-procedure.md) - Reviewing queries and indexes
- [Backup & Restore Procedure](./backup-restore-procedure.md) - Backup and restore procedures
- [Data Retention & Deletion Procedure](./data-retention-deletion-procedure.md) - Data retention policies and deletion procedures
- [Audit Logging Procedure](./audit-logging-procedure.md) - Audit logging for data access

## Usage

Follow these procedures when:
- Modifying database schemas
- Performing data migrations
- Managing data across stores
- Implementing data policies

## Related Lifecycles

- **Feature Lifecycle** - Features often require data changes
- **API Lifecycle** - API changes may require data changes
- **Governance Compliance** - Data procedures support compliance requirements

---

**Status:** All procedures defined (10/10).
