# VerifyNow System Architecture

## High Level Architecture

```
                    Users

                      │

                      ▼

              Next.js Frontend

                      │

                      ▼

              API / Server Actions

                      │

                      ▼

               Service Layer

                      │

                      ▼

             Repository Layer

                      │

                      ▼

                 Prisma ORM

                      │

                      ▼

           Supabase PostgreSQL
```

---

# External Provider Architecture

```
Government APIs

Commercial APIs

Mining APIs

International APIs

        │

        ▼

 Provider Adapter Layer

        │

        ▼

 Verification Engine

        │

        ▼

 Verification Results
```

---

# Verification Flow

```
User

↓

Create Verification

↓

Verification Case

↓

Verification Subject

↓

Provider Checks

↓

Results

↓

Risk Analysis

↓

Verification Report
```

---

# Platform Modules

- Authentication
- Organisation Management
- User Management
- Provider Management
- Verification Engine
- Reporting
- Notifications
- Billing
- Audit Logging
- System Settings

---

# Multi-Tenant Model

```
Company

├── Users

├── Verification Cases

├── Reports

├── Billing

└── Settings
```

Every company only has access to its own information.