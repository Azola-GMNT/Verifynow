# VerifyNow Coding Standards

Version: 0.1.0

---

# General Principles

Readable Code

Reusable Components

Single Responsibility

Consistent Naming

Strong Typing

No Duplicate Logic

---

# Architecture

Frontend

↓

API

↓

Service

↓

Repository

↓

Prisma

↓

Supabase

Components never access the database directly.

---

# React

Prefer Server Components.

Use Client Components only when required.

Reusable UI belongs inside

/components

---

# Services

Business logic belongs inside

/services

---

# Repositories

Database access belongs inside

/repositories

---

# Types

Shared types belong inside

/types

---

# Styling

Tailwind CSS

No inline styles.

---

# Naming

Components

PascalCase

Variables

camelCase

Constants

UPPER_CASE

Database Models

PascalCase

Database Fields

camelCase

---

# Comments

Explain why.

Not what.

---

# Git

Feature Branches

Pull Requests

Code Review

Semantic Versioning

---

# Documentation

Every feature updates

Documentation

Prisma Schema

API

Changelog
