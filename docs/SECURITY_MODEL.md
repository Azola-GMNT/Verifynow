# VerifyNow Security Model

Version: 0.1.0

---

# Purpose

Security is the foundation of VerifyNow.

The platform is designed to protect customer data while ensuring compliance with international security standards and local privacy regulations.

---

# Security Principles

Least Privilege

Zero Trust

Encryption by Default

Audit Everything

Authentication First

Role-Based Access Control

Secure by Design

---

# Authentication

Authentication is managed by Supabase Authentication.

Supported methods

- Email & Password
- Magic Link
- Microsoft Azure AD (Future)
- Google Workspace (Future)
- SAML SSO (Enterprise)
- Multi-Factor Authentication

VerifyNow never stores user passwords.

Passwords remain inside Supabase Authentication.

---

# Multi-Factor Authentication

Supported methods

Authenticator Apps

- Google Authenticator
- Microsoft Authenticator
- Authy
- 1Password

Future

SMS OTP

Email OTP

Hardware Security Keys

---

# Session Management

Configurable options

Session Timeout

15 Minutes

30 Minutes

60 Minutes

4 Hours

8 Hours

Require Reauthentication

Remember Device

---

# Password Policy

Minimum Length

12 Characters

Require

Uppercase

Lowercase

Number

Special Character

Maximum Age

90 Days

History

Prevent reuse of previous passwords

---

# Login Protection

Maximum Failed Attempts

3

Lockout Duration

15 Minutes

Future

Adaptive Risk Login

IP Reputation

Geo-location Detection

---

# Role Based Access Control

Roles

Owner

Administrator

Manager

Analyst

Viewer

Custom Roles (Future)

Permissions are assigned by role.

---

# Data Isolation

VerifyNow is Multi-Tenant.

Every company only has access to its own data.

Row Level Security (RLS) will be enforced in Supabase.

No tenant can access another tenant's records.

---

# Encryption

In Transit

TLS 1.2+

At Rest

Supabase PostgreSQL Encryption

Future

Field-Level Encryption

Sensitive Fields

Identity Numbers

Passport Numbers

API Keys

Secrets

---

# Audit Logging

Every critical action is recorded.

Examples

Login

Logout

Password Reset

Verification Created

Report Downloaded

Settings Changed

Role Changed

API Key Generated

---

# API Security

Bearer Tokens

Rate Limiting

API Keys

Scopes

Request Validation

Future

OAuth Client Credentials

---

# Secrets Management

Never stored inside source code.

Environment Variables

Supabase Secrets

Future

Azure Key Vault

AWS Secrets Manager

---

# Compliance

Designed to support

POPIA

GDPR

KYC

AML

FICA

ISO 27001 Principles

---

# Disaster Recovery

Automated Backups

Point-in-Time Recovery

Database Replication

Disaster Recovery Procedures

---

# Future Security Features

Behaviour Analytics

Device Fingerprinting

Risk-Based Authentication

AI Fraud Detection

Continuous Session Validation
