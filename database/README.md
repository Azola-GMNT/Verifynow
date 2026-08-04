# VerifyNow Database

This folder contains all database scripts for VerifyNow.

## Execution Order

001_initial_schema.sql

Creates all tables and indexes.

---

002_row_level_security.sql

Enables Row Level Security and creates security policies.

---

003_auth_trigger.sql

Automatically creates a Profile whenever a new user registers.

---

## Future Files

004_seed.sql

Sample data.

005_provider_tables.sql

Provider configuration.

006_views.sql

Reporting views.

007_functions.sql

Stored procedures.

---

## Deployment

Run the SQL files in numerical order inside the Supabase SQL Editor.

Every new migration should receive the next available number.