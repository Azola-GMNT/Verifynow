-- ==========================================================
-- VerifyNow Database
-- Version: 0.6.0
-- Sprint: Beta.1
-- File: 001_initial_schema.sql
-- ==========================================================

create extension if not exists "pgcrypto";

-- ==========================================================
-- PROFILES
-- ==========================================================

create table public.profiles (

    id uuid primary key references auth.users(id) on delete cascade,

    first_name text,

    last_name text,

    phone text,

    country text,

    avatar_url text,

    created_at timestamptz default now(),

    updated_at timestamptz default now()

);

-- ==========================================================
-- VERIFICATION CASES
-- ==========================================================

create table public.verification_cases (

    id uuid primary key default gen_random_uuid(),

    verification_id text unique not null,

    created_by uuid not null references public.profiles(id) on delete cascade,

    subject_type text not null,

    country text not null,

    status text not null,

    confidence_score integer,

    risk_level text,

    recommendation text,

    created_at timestamptz default now(),

    started_at timestamptz,

    completed_at timestamptz,

    duration_seconds integer

);

-- ==========================================================
-- SUBJECTS
-- ==========================================================

create table public.verification_subjects (

    id uuid primary key default gen_random_uuid(),

    verification_case_id uuid not null
        references public.verification_cases(id)
        on delete cascade,

    full_name text,

    company_name text,

    id_number text,

    passport_number text,

    registration_number text,

    country text

);

-- ==========================================================
-- VERIFICATION RESULTS
-- ==========================================================

create table public.verification_results (

    id uuid primary key default gen_random_uuid(),

    verification_case_id uuid not null
        references public.verification_cases(id)
        on delete cascade,

    check_name text not null,

    status text not null,

    score integer,

    message text

);

-- ==========================================================
-- PROVIDER RESULTS
-- ==========================================================

create table public.provider_results (

    id uuid primary key default gen_random_uuid(),

    verification_case_id uuid not null
        references public.verification_cases(id)
        on delete cascade,

    provider_name text,

    status text,

    confidence integer,

    response_time integer,

    findings text

);

-- ==========================================================
-- REPORTS
-- ==========================================================

create table public.reports (

    id uuid primary key default gen_random_uuid(),

    verification_case_id uuid not null
        references public.verification_cases(id)
        on delete cascade,

    version text,

    generated_at timestamptz default now(),

    download_count integer default 0

);

-- ==========================================================
-- AUDIT LOGS
-- ==========================================================

create table public.audit_logs (

    id uuid primary key default gen_random_uuid(),

    user_id uuid references public.profiles(id)
        on delete cascade,

    verification_case_id uuid
        references public.verification_cases(id)
        on delete cascade,

    action text not null,

    details text,

    created_at timestamptz default now()

);

-- ==========================================================
-- INDEXES
-- ==========================================================

create index idx_cases_created_by
on public.verification_cases(created_by);

create index idx_cases_status
on public.verification_cases(status);

create index idx_cases_created_at
on public.verification_cases(created_at);

create index idx_cases_country
on public.verification_cases(country);

create index idx_results_case
on public.verification_results(verification_case_id);

create index idx_provider_case
on public.provider_results(verification_case_id);

create index idx_subject_case
on public.verification_subjects(verification_case_id);

create index idx_report_case
on public.reports(verification_case_id);

create index idx_audit_case
on public.audit_logs(verification_case_id);