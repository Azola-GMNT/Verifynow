-- ==========================================================
-- VerifyNow
-- Version 0.6.0
-- Sprint Beta.1
-- Automatic Profile Creation
-- ==========================================================

------------------------------------------------------------
-- Create Profile Function
------------------------------------------------------------

create or replace function public.handle_new_user()

returns trigger

language plpgsql

security definer

set search_path = public

as $$

begin

    insert into public.profiles (

        id

    )

    values (

        new.id

    )

    on conflict (id) do nothing;

    return new;

end;

$$;

------------------------------------------------------------
-- Drop Trigger if it already exists
------------------------------------------------------------

drop trigger if exists on_auth_user_created

on auth.users;

------------------------------------------------------------
-- Create Trigger
------------------------------------------------------------

create trigger on_auth_user_created

after insert

on auth.users

for each row

execute procedure public.handle_new_user();