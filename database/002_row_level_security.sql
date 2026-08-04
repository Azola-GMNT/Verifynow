-- ==========================================================
-- VerifyNow
-- Version 0.6.0
-- Sprint Beta.1
-- Row Level Security
-- ==========================================================

------------------------------------------------------------
-- Enable RLS
------------------------------------------------------------

alter table public.profiles enable row level security;

alter table public.verification_cases enable row level security;

alter table public.verification_subjects enable row level security;

alter table public.verification_results enable row level security;

alter table public.provider_results enable row level security;

alter table public.reports enable row level security;

alter table public.audit_logs enable row level security;

------------------------------------------------------------
-- Profiles
------------------------------------------------------------

create policy "Users can view own profile"

on public.profiles

for select

using (
    auth.uid() = id
);

create policy "Users can update own profile"

on public.profiles

for update

using (
    auth.uid() = id
);

------------------------------------------------------------
-- Verification Cases
------------------------------------------------------------

create policy "Users can view own cases"

on public.verification_cases

for select

using (
    created_by = auth.uid()
);

create policy "Users can insert own cases"

on public.verification_cases

for insert

with check (
    created_by = auth.uid()
);

create policy "Users can update own cases"

on public.verification_cases

for update

using (
    created_by = auth.uid()
);

create policy "Users can delete own cases"

on public.verification_cases

for delete

using (
    created_by = auth.uid()
);

------------------------------------------------------------
-- Verification Subjects
------------------------------------------------------------

create policy "Users can manage subjects"

on public.verification_subjects

for all

using (

    exists (

        select 1

        from public.verification_cases vc

        where vc.id = verification_case_id

        and vc.created_by = auth.uid()

    )

);

------------------------------------------------------------
-- Verification Results
------------------------------------------------------------

create policy "Users can manage results"

on public.verification_results

for all

using (

    exists (

        select 1

        from public.verification_cases vc

        where vc.id = verification_case_id

        and vc.created_by = auth.uid()

    )

);

------------------------------------------------------------
-- Provider Results
------------------------------------------------------------

create policy "Users can manage providers"

on public.provider_results

for all

using (

    exists (

        select 1

        from public.verification_cases vc

        where vc.id = verification_case_id

        and vc.created_by = auth.uid()

    )

);

------------------------------------------------------------
-- Reports
------------------------------------------------------------

create policy "Users can manage reports"

on public.reports

for all

using (

    exists (

        select 1

        from public.verification_cases vc

        where vc.id = verification_case_id

        and vc.created_by = auth.uid()

    )

);

------------------------------------------------------------
-- Audit Logs
------------------------------------------------------------

create policy "Users can view own audit"

on public.audit_logs

for select

using (
    user_id = auth.uid()
);

create policy "Users can insert audit"

on public.audit_logs

for insert

with check (
    user_id = auth.uid()
);