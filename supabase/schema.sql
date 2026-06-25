-- =============================================================
-- Noticiero Regional — Esquema de base de datos y políticas RLS
-- Ejecutar en Supabase: SQL Editor → New query → pegar → Run.
--
-- Modelo: lectura pública para todos; escritura (insert/update/delete)
-- SOLO para usuarios autenticados (la única cuenta = el cliente).
-- La restricción vive en el servidor (RLS), no solo en la interfaz.
-- =============================================================

-- gen_random_uuid()
create extension if not exists pgcrypto;

-- -------------------------------------------------------------
-- Tabla: posts (publicaciones de Actualidad)
-- -------------------------------------------------------------
create table if not exists public.posts (
  id            uuid primary key default gen_random_uuid(),
  youtube_url   text not null,
  youtube_id    text not null,
  title         text,
  description   text,
  published_at  timestamptz not null default now(),
  created_at    timestamptz not null default now()
);

create index if not exists posts_published_at_idx
  on public.posts (published_at desc);

-- -------------------------------------------------------------
-- Tabla: ads (publicidad de Inicio)
-- -------------------------------------------------------------
create table if not exists public.ads (
  id         uuid primary key default gen_random_uuid(),
  image_url  text not null,
  link_url   text,
  position   int  not null default 0,
  active     boolean not null default true
);

create index if not exists ads_position_idx
  on public.ads (position asc);

-- =============================================================
-- Row Level Security
-- =============================================================
alter table public.posts enable row level security;
alter table public.ads   enable row level security;

-- ---- posts ----
-- Lectura: cualquiera (anon + authenticated)
drop policy if exists "posts_select_public" on public.posts;
create policy "posts_select_public"
  on public.posts for select
  using (true);

-- Escritura: solo autenticados
drop policy if exists "posts_insert_authenticated" on public.posts;
create policy "posts_insert_authenticated"
  on public.posts for insert
  to authenticated
  with check (true);

drop policy if exists "posts_update_authenticated" on public.posts;
create policy "posts_update_authenticated"
  on public.posts for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "posts_delete_authenticated" on public.posts;
create policy "posts_delete_authenticated"
  on public.posts for delete
  to authenticated
  using (true);

-- ---- ads ----
drop policy if exists "ads_select_public" on public.ads;
create policy "ads_select_public"
  on public.ads for select
  using (true);

drop policy if exists "ads_insert_authenticated" on public.ads;
create policy "ads_insert_authenticated"
  on public.ads for insert
  to authenticated
  with check (true);

drop policy if exists "ads_update_authenticated" on public.ads;
create policy "ads_update_authenticated"
  on public.ads for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "ads_delete_authenticated" on public.ads;
create policy "ads_delete_authenticated"
  on public.ads for delete
  to authenticated
  using (true);

-- =============================================================
-- Nota: crea la cuenta del cliente en Authentication → Users.
-- Esa será la única identidad con permisos de escritura.
-- =============================================================
