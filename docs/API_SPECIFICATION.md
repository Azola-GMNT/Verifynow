# VerifyNow API Specification

Version: 0.1.0

---

# Purpose

Every feature within VerifyNow must be accessible through an API.

The frontend is a client of the backend.

---

# Authentication

POST

/auth/login

POST

/auth/logout

POST

/auth/register

POST

/auth/reset-password

POST

/auth/mfa/setup

POST

/auth/mfa/verify

---

# Companies

GET

/companies

GET

/companies/{id}

POST

/companies

PATCH

/companies/{id}

DELETE

/companies/{id}

---

# Users

GET

/users

GET

/users/{id}

POST

/users

PATCH

/users/{id}

DELETE

/users/{id}

---

# Providers

GET

/providers

GET

/providers/{id}

GET

/providers/categories

GET

/providers/health

POST

/providers/test

---

# Verification

POST

/verifications

GET

/verifications

GET

/verifications/{id}

DELETE

/verifications/{id}

---

# Reports

GET

/reports

GET

/reports/{id}

GET

/reports/{id}/pdf

GET

/reports/{id}/json

---

# Notifications

GET

/notifications

PATCH

/notifications/{id}

DELETE

/notifications/{id}

---

# Billing

GET

/subscription

GET

/invoices

POST

/payments

---

# Audit

GET

/audit

GET

/activity

---

# Future APIs

Bulk Verification

Webhook Registration

Developer API

Provider Marketplace

AI Risk Analysis
